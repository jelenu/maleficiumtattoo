// src/content/aboutContent.ts
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
        en: 'Maleficium Tattoo is an exclusive tattoo studio led by Spanish artist @alexisdarkart, specializing in blackwork tattoos in black and white with strong lines.',
        de: 'Maleficium Tattoo ist ein exklusives Tattoostudio unter der Leitung des spanischen Künstlers @alexisdarkart, der auf Blackwork-Tattoos in Schwarz-Weiß mit kräftigen Linien spezialisiert ist.',
        es: 'Maleficium Tattoo es un estudio de tatuajes exclusivo dirigido por el artista español @alexisdarkart, especializado en tatuajes blackwork en blanco y negro con líneas marcadas.',
      }),
      t({
        en: 'We create unique, custom designs—each motif is crafted just for you. Please note: we work by appointment only to provide a calm, personal, and high-quality experience.',
        de: 'Bei uns erhältst du individuelle und einzigartige Designs – jedes Motiv wird speziell für dich entworfen. Wichtig: Wir arbeiten ausschließlich nach Terminvereinbarung, um dir ein ruhiges, persönliches und hochwertiges Erlebnis bieten zu können.',
        es: 'Creamos diseños únicos y personalizados: cada motivo está hecho para ti. Importante: trabajamos solo con cita previa para ofrecerte una experiencia tranquila, personal y de alta calidad.',
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
