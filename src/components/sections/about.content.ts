import { t, type Dictionary } from 'intlayer';

const aboutContent = {
  key: 'about',
  content: {
    title: t({
      en: 'About Maleficium Tattoo',
      de: 'Über Maleficium Tattoo',
      es: 'Sobre Maleficium Tattoo',
    }),
    paragraphs: [
      t({
        en: 'Maleficium Tattoo is an exclusive studio led by the Spanish artist @alexisdarkart, specialized in blackwork tattoos with bold lines in black and white. Appointments only.',
        de: 'Maleficium Tattoo ist ein exklusives Studio unter der Leitung des spanischen Künstlers @alexisdarkart, spezialisiert auf Blackwork-Tattoos in Schwarz-Weiß mit kräftigen Linien. Nur nach Terminvereinbarung.',
        es: 'Maleficium Tattoo es un estudio exclusivo dirigido por el artista español @alexisdarkart, especializado en tatuajes blackwork en blanco y negro con líneas marcadas. Solo con cita previa.',
      }),
      t({
        en: 'We design unique, custom pieces just for you. We work by appointment to offer a calm, personal, and high-quality experience.',
        de: 'Wir entwerfen einzigartige, individuelle Motive nur für dich. Wir arbeiten mit Terminen, um dir ein ruhiges, persönliches und hochwertiges Erlebnis zu bieten.',
        es: 'Diseñamos piezas únicas y personalizadas solo para ti. Trabajamos con cita para ofrecerte una experiencia tranquila, personal y de alta calidad.',
      }),
    ],
    buttonText: t({
      en: 'Our Jobs',
      de: 'Unsere Arbeiten',
      es: 'Nuestros Trabajos',
    }),
    imageAlt: t({
      en: 'Maleficium Tattoo Studio',
      de: 'Maleficium Tattoo Studio',
      es: 'Estudio Maleficium Tattoo',
    }),
  },
} satisfies Dictionary;

export default aboutContent;
