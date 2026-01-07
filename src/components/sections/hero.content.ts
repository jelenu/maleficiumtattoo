import { t, type Dictionary } from 'intlayer';

const heroContent = {
  key: 'hero',
  content: {
    cta: t({ en: 'Contact Us', de: 'Kontakt', es: 'Contacto' }),
    bgAlt: t({ en: 'background image', de: 'Hintergrundbild', es: 'imagen de fondo' }),
    logoAltMobile: t({ en: 'Maleficium Tattoo Logo Mobile', de: 'Maleficium Tattoo Logo Mobil', es: 'Logo Maleficium Tattoo móvil' }),
    logoAlt: t({ en: 'Maleficium Tattoo Logo', de: 'Maleficium Tattoo Logo', es: 'Logo de Maleficium Tattoo' }),
    addressLabel: t({ en: 'Address', de: 'Adresse', es: 'Dirección' }),
    address: t({ en: 'C/ Example 123, Madrid', de: 'Beispielstr. 123, Madrid', es: 'C/ Ejemplo 123, Madrid' }),
    phoneLabel: t({ en: 'Call us', de: 'Ruf uns an', es: 'Llámanos' }),
    phone: t({ en: '+34 600 000 000', de: '+34 600 000 000', es: '+34 600 000 000' }),
    hoursLabel: t({ en: 'Hours', de: 'Öffnungszeiten', es: 'Horario' }),
    hours: t({ en: 'Mon-Sat: 11:00 - 20:00', de: 'Mo-Sa: 11:00 - 20:00', es: 'Lun-Sab: 11:00 - 20:00' }),
  },
} satisfies Dictionary;

export default heroContent;
