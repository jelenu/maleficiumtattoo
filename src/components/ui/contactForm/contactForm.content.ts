import { t, type Dictionary } from 'intlayer';

const contactFormContent = {
  key: 'contact-form',
  content: {
    heading: t({ en: 'Contact Us', de: 'Kontaktiere uns', es: 'Contáctanos' }),
    firstName: t({ en: 'First Name', de: 'Vorname', es: 'Nombre' }),
    lastName: t({ en: 'Last Name', de: 'Nachname', es: 'Apellido' }),
    firstNamePH: t({ en: 'Your first name', de: 'Dein Vorname', es: 'Tu nombre' }),
    lastNamePH: t({ en: 'Your last name', de: 'Dein Nachname', es: 'Tu apellido' }),
    phoneNumber: t({ en: 'Phone Number', de: 'Telefonnummer', es: 'Número de teléfono' }),
    email: t({ en: 'Email', de: 'E-Mail', es: 'Correo electrónico' }),
    emailPH: t({ en: 'your.email@example.com', de: 'dein.email@beispiel.de', es: 'tu.email@ejemplo.com' }),
    description: t({ en: 'Detailed Description', de: 'Detaillierte Beschreibung', es: 'Descripción detallada' }),
    descriptionPH: t({
      en: 'Please describe your tattoo idea, preferred artist, budget, and availability...',
      de: 'Bitte beschreibe deine Tattoo-Idee, bevorzugten Künstler, Budget und Verfügbarkeit...',
      es: 'Describe tu idea de tatuaje, artista preferido, presupuesto y disponibilidad...',
    }),
    refImage: t({ en: 'Reference Image (optional)', de: 'Referenzbild (optional)', es: 'Imagen de referencia (opcional)' }),
    submit: t({ en: 'Submit Request', de: 'Anfrage senden', es: 'Enviar solicitud' }),
    success: t({
      en: 'Message sent successfully! We will contact you soon.',
      de: 'Nachricht erfolgreich gesendet! Wir melden uns bald.',
      es: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
    }),
    error: t({
      en: 'Error sending message',
      de: 'Fehler beim Senden der Nachricht',
      es: 'Error al enviar el mensaje',
    }),
    connError: t({
      en: 'Connection error. Please try again.',
      de: 'Verbindungsfehler. Bitte versuche es erneut.',
      es: 'Error de conexión. Por favor, inténtalo de nuevo.',
    }),
  },
} satisfies Dictionary;

export default contactFormContent;
