import { t, type Dictionary } from 'intlayer';

const heroContent = {
  key: 'hero',
  content: {
    cta: t({ en: 'Contact Us', de: 'Kontakt', es: 'Contacto' }),
    bgAlt: t({ en: 'background image', de: 'Hintergrundbild', es: 'imagen de fondo' }),
    logoAltMobile: t({ en: 'Maleficium Tattoo Logo Mobile', de: 'Maleficium Tattoo Logo Mobil', es: 'Logo Maleficium Tattoo móvil' }),
    logoAlt: t({ en: 'Maleficium Tattoo Logo', de: 'Maleficium Tattoo Logo', es: 'Logo de Maleficium Tattoo' }),
  },
} satisfies Dictionary;

export default heroContent;
