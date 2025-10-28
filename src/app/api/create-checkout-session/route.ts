import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

// Inicializamos Stripe con tu clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type CartItem = {
  name: string;
  image?: string;
  quantity: number;
  unit_amount: number; // precio en céntimos
};

type CheckoutRequestBody = {
  cart: CartItem[];
};

export async function POST(req: NextRequest) {
  try {
    const { cart }: CheckoutRequestBody = await req.json();

    if (!cart?.length ) {
      return NextResponse.json({ error: "Missing cart" }, { status: 400 });
    }

    // Convertimos el carrito a line_items para Stripe
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = cart.map(
      (item: CartItem) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : [],
          },
          unit_amount: item.unit_amount,
        },
        quantity: item.quantity,
        
      })
    );

    // Creamos la sesión de pago
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["ES", "FR", "DE", "AT", "PT", "GB"],
      },
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/shop/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
