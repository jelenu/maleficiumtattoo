import { t, type Dictionary } from 'intlayer';

const contactInfoContent = {
  key: 'contact-info',
  content: {
    title: t({
      en: 'Contact Us',
      de: 'Kontaktiere uns',
      es: 'Contáctanos',
    }),
    info: [
      t({
        en: 'Please check your spam folder for our response a few days after sending— some of our replies have been going there.',
        de: 'Bitte prüfen Sie einige Tage nach dem Senden Ihren Spam-Ordner – einige unserer Antworten landen dort.',
        es: 'Por favor, revisa tu carpeta de spam unos días después de enviar el mensaje; algunas de nuestras respuestas están llegando allí.',
      }),
      t({
        en: 'Please let us know which artist you would like to contact. Provide as much written detail as you can regarding your desired tattoo, appointment availability, and budget (€150.00 minimum), and we will get back to you as soon as we can. All deposits are non refundable.',
        de: 'Bitte teilen Sie uns mit, an welchen Künstler Sie sich wenden möchten. Geben Sie möglichst viele Details zu Ihrem gewünschten Tattoo, Ihrer Terminverfügbarkeit und Ihrem Budget (Mindestpreis 150,00 €) an; wir melden uns so schnell wie möglich. Alle Anzahlungen sind nicht erstattungsfähig.',
        es: 'Indícanos con qué artista te gustaría contactar. Proporciona la mayor cantidad de detalles posible sobre tu tatuaje, disponibilidad y presupuesto (mínimo 150,00 €) y te responderemos lo antes posible. Todos los depósitos no son reembolsables.',
      }),
      t({
        en: 'You must be 18 years old to get tattooed. (ID required)',
        de: 'Du musst 18 Jahre alt sein, um tätowiert zu werden. (Ausweis erforderlich)',
        es: 'Debes tener 18 años para tatuarte. (Se requiere identificación)',
      }),
    ],
    touchUpsTitle: t({
      en: 'TOUCH UPS (please read)',
      de: 'NACHTSTECHEN (bitte lesen)',
      es: 'RETOQUES (por favor leer)',
    }),
    touchUpsContent: t({
      en: "Any touch ups on tattoos are at the artist's discretion. After 4 weeks you will know if your tattoo needs a touch up and can schedule an appointment. (Any time after that is considered natural aging.)",
      de: 'Etwaige Nachstecharbeiten liegen im Ermessen des Künstlers. Nach 4 Wochen lässt sich beurteilen, ob dein Tattoo nachgestochen werden muss; vereinbare dann einen Termin. (Zeiten danach gelten als natürliche Alterung.)',
      es: 'Cualquier retoque queda a discreción del artista. Tras 4 semanas sabrás si tu tatuaje necesita un retoque y podrás agendar la cita. (Después de ese tiempo se considera envejecimiento natural.)',
    }),
    nextSectionAria: t({
      en: 'Go to next section',
      de: 'Zur nächsten Sektion',
      es: 'Ir a la siguiente sección',
    }),
  },
} satisfies Dictionary;

export default contactInfoContent;
