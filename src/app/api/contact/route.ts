import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('🎯 API Contact route called');
  
  try {
    const formData = await request.formData();
    console.log('📋 Form data received');
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const description = formData.get('description') as string;
    const image = formData.get('image') as File | null;

    console.log('👤 Client data:', { firstName, lastName, email, phone });

    // Validar campos requeridos
    if (!firstName || !lastName || !phone || !email || !description) {
      console.log('❌ Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    console.log('✅ Validation passed');

    // Verificar API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('❌ RESEND_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'Configuración del servidor incorrecta' },
        { status: 500 }
      );
    }

    console.log('🔑 API Key found:', apiKey.substring(0, 10) + '...');

    // Procesar imagen si existe
    let imageAttachment = null;
    if (image && image.size > 0) {
      console.log('🖼️ Processing image attachment:', image.name, image.size, 'bytes');
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      imageAttachment = {
        filename: image.name,
        content: buffer,
      };
    }

    // Crear contenido del email
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
            <p><strong>👤 Nombre:</strong> ${firstName} ${lastName}</p>
            <p><strong>📞 Teléfono:</strong> ${phone}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
          </div>

          <h3 style="color: #000; margin-top: 30px;">💭 Descripción del Tatuaje</h3>
          <div style="background-color: #fff; padding: 20px; border: 2px solid #000; border-radius: 8px;">
            <p style="line-height: 1.6; white-space: pre-wrap; font-size: 16px;">${description}</p>
          </div>

          ${image ? '<p style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;"><strong>🖼️ Nota:</strong> El cliente ha adjuntado una imagen de referencia.</p>' : ''}
          
          <div style="margin-top: 30px; padding: 20px; background-color: #000; color: #fff; text-align: center; border-radius: 8px;">
            <h3 style="margin: 0; color: #fff;">⚡ RESPONDE RÁPIDO ⚡</h3>
            <p style="margin: 10px 0 0 0; font-size: 16px;">No pierdas este cliente potencial</p>
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

    // Enviar email
    console.log('📧 Attempting to send email...');
    const emailData = {
      from: 'Maleficium Tattoo <onboarding@resend.dev>',
      to: [process.env.STUDIO_EMAIL || 'jesusleon2700@gmail.com'],
      replyTo: email,
      subject: `Nueva Consulta de Tatuaje - ${firstName} ${lastName}`,
      html: emailContent,
      attachments: imageAttachment ? [imageAttachment] : undefined,
    };

    console.log('📮 Email config:', {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      hasAttachment: !!imageAttachment
    });

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('💥 Resend error:', error);
      return NextResponse.json(
        { error: 'Error al enviar el mensaje: ' + error.message },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully:', data);
    return NextResponse.json(
      { 
        message: 'Mensaje enviado exitosamente. Te contactaremos pronto.',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 API Error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}
