
import { t, type Dictionary } from 'intlayer';

const heroContent = {
  key: 'hero',
  content: {
    cta: t({
      en: 'Contact Us',
      de: 'Kontakt',
      es: 'Contacto'
    }),
    bgAlt: t({
      en: 'background image',
      de: 'Hintergrundbild',
      es: 'imagen de fondo'
    }),
    logoAltMobile: t({
      en: 'Maleficium Tattoo Logo Mobile',
      de: 'Maleficium Tattoo Logo Mobil',
      es: 'Logo Maleficium Tattoo móvil'
    }),
    logoAlt: t({
      en: 'Maleficium Tattoo Logo',
      de: 'Maleficium Tattoo Logo',
      es: 'Logo de Maleficium Tattoo'
    }),
    addressLabel: t({
      en: 'Address',
      de: 'Adresse',
      es: 'Dirección'
    }),
    address: t({
      en: 'Herzogenburger Straße 66/1, 3100 St. Pölten, Austria',
      de: 'Herzogenburger Straße 66/1, 3100 St. Pölten, Österreich',
      es: 'Herzogenburger Straße 66/1, 3100 St. Pölten, Austria'
    }),
    phoneLabel: t({
      en: 'Call us',
      de: 'Ruf uns an',
      es: 'Llámanos'
    }),
    phone: t({
      en: '+43 676 672 6865',
      de: '+43 676 672 6865',
      es: '+43 676 672 6865'
    }),
    hoursLabel: t({
      en: 'Opening hours',
      de: 'Öffnungszeiten',
      es: 'Horario'
    }),
    hours: t({
      en: 'By appointment only',
      de: 'Nur nach Terminvereinbarung',
      es: 'Solo con cita previa'
    }),
  },
} satisfies Dictionary;

export default heroContent;