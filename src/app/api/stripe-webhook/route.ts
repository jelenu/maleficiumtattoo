import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    const buf = await req.arrayBuffer();
    const textBody = Buffer.from(buf).toString();
    event = stripe.webhooks.constructEvent(textBody, sig!, webhookSecret);
  } catch (err) {
    return NextResponse.json(
      { error: "Webhook signature verification failed", details: err },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail =
      session.customer_details?.email || session.customer_email;
    const orderId = session.id;

    // Retrieve purchased items and expand product details
    const lineItems = await stripe.checkout.sessions.listLineItems(orderId, {
      expand: ["data.price.product"],
    });

    // Build the HTML table for purchased products
    const itemsHtml = lineItems.data
      .map((item) => {
        const product = item.price?.product as Stripe.Product;
        const priceEuro = (item.amount_total! / 100).toFixed(2);
        const imageUrl = product.images?.[0] || "";

        return `
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px;">
              <img src="${imageUrl}" alt="${item.description}" width="60" style="object-fit: cover; border-radius: 4px;">
            </td>
            <td style="padding: 10px;">
              ${item.description}
            </td>
            <td style="padding: 10px; text-align: right;">
              ${priceEuro} €
            </td>
            <td style="padding: 10px; text-align: center;">
              ${item.quantity}
            </td>
          </tr>
        `;
      })
      .join("");

    const amountTotal = session.amount_total
      ? (session.amount_total / 100).toFixed(2)
      : "N/A";

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f0f0f0; padding: 20px;">
        <div style="background-color: #000; color: #fff; padding: 20px; text-align: center;">
          <h1>Thank you for your purchase!</h1>
          <p style="font-size: 18px;">Maleficium Tattoo</p>
        </div>
        <div style="background-color: #fff; padding: 30px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #000; margin-top: 0;">Order Details</h2>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
              <tr style="background-color: #eee;">
                <th style="padding: 10px; text-align: left;">Image</th>
                <th style="padding: 10px; text-align: left;">Product</th>
                <th style="padding: 10px; text-align: right;">Price</th>
                <th style="padding: 10px; text-align: center;">Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
          <p style="text-align: right; margin-top: 15px; font-weight: bold;">
            Total: ${amountTotal} €
          </p>
          <p>You will receive another email once your order has been shipped.</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 8px; text-align: center;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            This email was sent automatically.<br>
            Timestamp: ${new Date().toLocaleString("en-GB")}
          </p>
        </div>
      </div>
    `;

    if (customerEmail) {
      try {
        await resend.emails.send({
          from: "Maleficium Tattoo <onboarding@resend.dev>",
          to: [customerEmail],
          subject: "Your Order Confirmation - Maleficium Tattoo",
          html: emailContent,
        });

        console.log("Webhook received:", {
          customerEmail,
          orderId,
          amountTotal,
        });
      } catch (err) {
        console.error("Error sending email:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
