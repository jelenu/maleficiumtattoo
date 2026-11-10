
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Escapar datos del usuario para evitar insertar HTML no deseado en el email
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[char];
  });
}

export async function POST(request: NextRequest) {
  console.log('🎯 API Contact route called');

  try {
    // 1. Obtener los datos del formulario
    const formData = await request.formData();
    console.log('📋 Form data received');

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const description = formData.get('description');
    const imageValue = formData.get('image');

    const image = imageValue instanceof File ? imageValue : null;

    // Comprobar que los campos sean texto
    if (
      typeof firstName !== 'string' ||
      typeof lastName !== 'string' ||
      typeof phone !== 'string' ||
      typeof email !== 'string' ||
      typeof description !== 'string'
    ) {
      console.log('❌ Invalid or missing form fields');

      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    console.log('👤 Client data:', {
      firstName,
      lastName,
      email,
      phone,
    });

    // 2. Validar campos obligatorios
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !description.trim()
    ) {
      console.log('❌ Validation failed - missing required fields');

      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    console.log('✅ Validation passed');

    // 3. Comprobar la API key de Resend
    const apiKey = process.env.RESEND_API_KEY;

    console.log('🔑 RESEND_API_KEY available:', Boolean(apiKey));

    if (!apiKey) {
      console.error('❌ RESEND_API_KEY not found');

      return NextResponse.json(
        { error: 'Configuración del servidor incorrecta' },
        { status: 500 }
      );
    }

    // Crear Resend dentro de POST, después de comprobar la API key
    const resend = new Resend(apiKey);

    // 4. Procesar imagen adjunta, si existe
    let imageAttachment:
      | { filename: string; content: Buffer }
      | undefined;

    if (image && image.size > 0) {
      console.log(
        '🖼️ Processing image:',
        image.name,
        image.size,
        'bytes'
      );

      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      imageAttachment = {
        filename: image.name,
        content: buffer,
      };
    }

    // 5. Escapar los datos antes de introducirlos en el HTML
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeDescription = escapeHtml(description);

    // 6. Crear contenido del email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f0f0f0; padding: 20px;">

        <div style="background-color: #000; color: #fff; padding: 20px; text-align: center;">
          <h1>🔥 NUEVA CONSULTA DE TATUAJE 🔥</h1>
          <p style="font-size: 18px;">Maleficium Tattoo</p>
        </div>

        <div style="background-color: #fff; padding: 30px; border-radius: 8px; margin: 20px 0;">

          <h2 style="color: #000; margin-top: 0; border-bottom: 2px solid #000; padding-bottom: 10px;">
            📋 Información del Cliente
          </h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Nombre:</strong> ${safeFirstName} ${safeLastName}</p>
            <p><strong>📞 Teléfono:</strong> ${safePhone}</p>
            <p><strong>📧 Email:</strong> ${safeEmail}</p>
          </div>

          <h3 style="color: #000; margin-top: 30px;">
            💭 Descripción del Tatuaje
          </h3>

          <div style="background-color: #fff; padding: 20px; border: 2px solid #000; border-radius: 8px;">
            <p style="line-height: 1.6; white-space: pre-wrap; font-size: 16px;">
              ${safeDescription}
            </p>
          </div>

          ${
            imageAttachment
              ? `
                <p style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
                  <strong>🖼️ Nota:</strong> El cliente ha adjuntado una imagen de referencia.
                </p>
              `
              : ''
          }

          <div style="margin-top: 30px; padding: 20px; background-color: #000; color: #fff; text-align: center; border-radius: 8px;">
            <h3 style="margin: 0; color: #fff;">⚡ RESPONDE RÁPIDO ⚡</h3>
            <p style="margin: 10px 0 0 0; font-size: 16px;">
              No pierdas este cliente potencial
            </p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Email enviado automáticamente desde el formulario de contacto web<br>
              Timestamp: ${new Date().toLocaleString('es-ES')}
            </p>
          </div>

        </div>
      </div>
    `;

    // 7. Configurar email
    const emailData = {
      from: 'Maleficium Tattoo <contact@maleficiumtattoo.com>',
      to: [
        process.env.STUDIO_EMAIL || 'jesusleon2700@gmail.com',
      ],
      replyTo: email,
      subject: `Nueva Consulta de Tatuaje - ${firstName} ${lastName}`,
      html: emailContent,
      attachments: imageAttachment
        ? [imageAttachment]
        : undefined,
    };

    console.log('📮 Attempting to send email:', {
      to: emailData.to,
      subject: emailData.subject,
      hasAttachment: Boolean(imageAttachment),
    });

    // 8. Enviar email con Resend
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('💥 Resend error:', error);

      return NextResponse.json(
        { error: 'Error al enviar el mensaje: ' + error.message },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully:', data?.id);

    // 9. Respuesta correcta
    return NextResponse.json(
      {
        message: 'Mensaje enviado exitosamente. Te contactaremos pronto.',
        emailId: data?.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 API Error:', error);

    return NextResponse.json(
      {
        error:
          'Error interno del servidor: ' +
          (error instanceof Error ? error.message : 'Unknown error'),
      },
      { status: 500 }
    );
  }
}
