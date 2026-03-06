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
        de: 'Für eine Termin­anfrage benötigen wir folgende Informationen:',
        es: 'Para solicitar tu cita, sigue estos pasos:',
      }),
      t({
        en: '1. Fill in the form. Complete all fields with your contact information. We will reply by email within the next few days. Please also check your spam folder.',
        de: '1. Kontaktdaten Fülle bitte alle Felder im Formular aus. Wir antworten innerhalb weniger Tage per E-Mail – bitte auch den Spam-Ordner prüfen.',
        es: '1. Rellena el formulario. Completa todos los campos con tu información de contacto. En los próximos días te responderemos por correo electrónico. Recuerda revisar también tu bandeja de spam, ya que nuestros mensajes pueden llegar allí.',
      }),
      t({
        en: '2. Choose your artist. Specify which tattoo artist you would like to work with.',
        de: '2. Artist auswählen Gib an, mit welchem Artist du arbeiten möchtest.',
        es: '2. Indícanos el artista. Especifica con qué tatuador/a te gustaría tatuarte.',
      }),
      t({
        en: '3. Describe your idea in detail. Tell us as precisely as possible: general concept, approximate size, body placement, desired style.',
        de: '3. Idee beschreiben Bitte so genau wie möglich: – Grundidee – ungefähre Größe – Körperstelle – gewünschter Stil',
        es: '3. Describe tu idea con detalle. Cuéntanos tu idea con la mayor precisión posible: explicación general del concepto, tamaño aproximado, zona del cuerpo y estilo que buscas.',
      }),
      t({
        en: '4. Attach photos. Reference images (if available). If it is a cover-up or scar cover, send a clear photo of the area.',
        de: '4. Fotos anhängen – Referenzbilder (falls vorhanden) – Bei Cover-up oder Narben: ein klares Foto der betreffenden Stelle',
        es: '4. Adjunta fotografías. Referencias que hayas encontrado (si tienes). Si es para cubrir un tatuaje antiguo o una cicatriz, envíanos una fotografía clara de la zona.',
      }),
      t({
        en: '5. Availability and budget. Let us know your preferred dates and your approximate budget. Minimum price: €120 for small, black, linework-only tattoos.',
        de: '5. Verfügbarkeit und Budget Teile uns deine bevorzugten Termine sowie dein ungefähres Budget mit. Mindestpreis: 120 € für kleine schwarze Linework-Tattoos.',
        es: '5. Indica tu disponibilidad y presupuesto. Dinos qué días o fechas te vienen bien y cuál es tu presupuesto aproximado. El presupuesto mínimo es de 120 € para tatuajes pequeños, en negro y solo lineales.',
      }),
      t({
        en: 'Once we receive your request, we will respond as soon as possible.',
        de: 'Sobald wir deine Anfrage erhalten haben, melden wir uns bei dir.',
        es: 'Una vez recibamos tu solicitud, te responderemos lo antes posible.',
      }),
    ],
  },
} satisfies Dictionary;

export default contactInfoContent;
