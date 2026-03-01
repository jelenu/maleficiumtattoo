import { t, type Dictionary } from 'intlayer';

const contactInfoContent = {
  key: 'contact-info',
  content: {
    title: t({
      en: 'Booking',
      de: 'Kontaktiere uns',
      es: 'Contacto',
    }),
    info: [
      t({
        en: 'To request an appointment, please follow these steps:',
        de: 'Bitte prüfen Sie einige Tage nach dem Senden Ihren Spam-Ordner – einige unserer Antworten landen dort.',
        es: 'Para solicitar tu cita, sigue estos pasos:',
      }),
      t({
        en: '1. Fill in the form. Complete all fields with your contact information. We will reply by email within the next few days. Please also check your spam folder.',
        de: 'Bitte teilen Sie uns mit, an welchen Künstler Sie sich wenden möchten. Geben Sie möglichst viele Details zu Ihrem gewünschten Tattoo, Ihrer Terminverfügbarkeit und Ihrem Budget (Mindestpreis 150,00 €) an; wir melden uns so schnell wie möglich. Alle Anzahlungen sind nicht erstattungsfähig.',
        es: '1. Rellena el formulario. Completa todos los campos con tu información de contacto. En los próximos días te responderemos por correo electrónico. Recuerda revisar también tu bandeja de spam, ya que nuestros mensajes pueden llegar allí.',
      }),
      t({
        en: '2. Choose your artist. Specify which tattoo artist you would like to work with.',
        de: '',
        es: '2. Indícanos el artista. Especifica con qué tatuador/a te gustaría tatuarte.',
      }),
      t({
        en: '3. Describe your idea in detail. Tell us as precisely as possible: general concept, approximate size, body placement, desired style.',
        de: '',
        es: '3. Describe tu idea con detalle. Cuéntanos tu idea con la mayor precisión posible: explicación general del concepto, tamaño aproximado, zona del cuerpo y estilo que buscas.',
      }),
      t({
        en: '4. Attach photos. Reference images (if available). If it is a cover-up or scar cover, send a clear photo of the area.',
        de: '',
        es: '4. Adjunta fotografías. Referencias que hayas encontrado (si tienes). Si es para cubrir un tatuaje antiguo o una cicatriz, envíanos una fotografía clara de la zona.',
      }),
      t({
        en: '5. Availability and budget. Let us know your preferred dates and your approximate budget. Minimum price: €120 for small, black, linework-only tattoos.',
        de: '',
        es: '5. Indica tu disponibilidad y presupuesto. Dinos qué días o fechas te vienen bien y cuál es tu presupuesto aproximado. El presupuesto mínimo es de 120 € para tatuajes pequeños, en negro y solo lineales.',
      }),
      t({
        en: 'Once we receive your request, we will respond as soon as possible.',
        de: '',
        es: 'Una vez recibamos tu solicitud, te responderemos lo antes posible.',
      }),
    ],
  },
} satisfies Dictionary;

export default contactInfoContent;
