// src/content/aboutContent.ts
import { t, type Dictionary } from 'intlayer';

const aboutContent = {
  key: 'about',
  content: {
    title: t({
      en: 'Meet Maleficium Tattoo',
      de: 'Über Maleficium Tattoo',
      es: 'Conoce Maleficium Tattoo',
    }),
    paragraphs: [
      t({
        en: 'Maleficium Tattoo is a private tattoo studio based in Sankt Pölten, Lower Austria. We focus on custom tattoos and providing a comfortable, safe, and inclusive experience. The studio works by appointment only and is not open to walk-ins, allowing for a calm environment without interruptions.',
        de: 'Maleficium Tattoo ist ein exklusives Tattoostudio unter der Leitung des spanischen Künstlers @alexisdarkart, der auf Blackwork-Tattoos in Schwarz-Weiß mit kräftigen Linien spezialisiert ist.',
        es: 'Maleficum Tattoo es un estudio de tatuajes privado en Sankt Pölten, Baja Austria (Austria), enfocado en tatuajes personalizados y en una experiencia cómoda, segura e inclusiva. El estudio trabaja solo con cita previa y no está abierto a la calle, lo que permite un ambiente tranquilo y sin interrupciones.',
      }),
      t({
        en: 'The project was founded by Alexisdarkart, a tattoo artist with over 10 years of experience, originally from Barcelona. The studio is open to everyone, regardless of origin, identity, orientation, or gender. Respect and trust are fundamental to the way we work.',
        de: 'Bei uns erhältst du individuelle und einzigartige Designs – jedes Motiv wird speziell für dich entworfen. Wichtig: Wir arbeiten ausschließlich nach Terminvereinbarung, um dir ein ruhiges, persönliches und hochwertiges Erlebnis bieten zu können.',
        es: 'El proyecto ha sido creado por Alexisdarkart, tatuador con más de 10 años de experiencia, originario de Barcelona. El estudio es un espacio abierto a todas las personas, sin importar origen, identidad, orientación o género, donde el respeto y la confianza son fundamentales.',
      }),
      t({
        en: 'We mainly specialize in blackwork, ignorant, new school, and fineline. In addition, we regularly host guest artists specialized in realism, American traditional and other styles.',
        de: 'Trabajamos principalmente estilos como blackwork, ignorant, new school y fineline pero además contamos con artistas invitados regulares, especializados en realismo, tradicional americano y otros estilos.',
        es: 'Trabajamos principalmente estilos como blackwork, ignorant, new school y fineline pero además contamos con artistas invitados regulares, especializados en realismo, tradicional americano y otros estilos.',
      }),
    ],
    buttonText: t({
      en: 'Our Studio',
      de: 'Unser Studio',
      es: 'Nuestro Estudio',
    }),
    imageAlt: t({
      en: 'Maleficium Tattoo Studio',
      de: 'Maleficium Tattoo Studio',
      es: 'Estudio Maleficium Tattoo',
    }),
  },
} satisfies Dictionary;

export default aboutContent;
