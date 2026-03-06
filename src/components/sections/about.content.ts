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
        en: 'Maleficium Tattoo is a private tattoo studio based in Sankt Pölten, Lower Austria. We focus on custom tattoos and providing a comfortable, safe, and inclusive experience.',
        de: 'Maleficium Tattoo ist ein privates Tattoostudio in Sankt Pölten, Niederösterreich. Wir stehen für individuelle Designs und eine angenehme, sichere und inklusive Atmosphäre. Unser Studio ist offen für alle Menschen, unabhängig von Herkunft, Identität, Orientierung oder Geschlecht. Respekt und Vertrauen sind für uns selbstverständlich.',
        es: 'Maleficum Tattoo es un estudio de tatuajes privado en Sankt Pölten, Baja Austria (Austria), enfocado en tatuajes personalizados y en una experiencia cómoda, segura e inclusiva.',
      }),
      t({
        en: 'The studio works by appointment only and is not open to walk-ins, allowing for a calm environment without interruptions.',
        de: 'Wir arbeiten ausschließlich nach Terminvereinbarung und nehmen keine Walk-Ins an. So entsteht eine ruhige Umgebung, in der wir uns ohne Ablenkung auf unsere Projekte konzentrieren können.',
        es: 'El estudio trabaja solo con cita previa y no está abierto a la calle, lo que permite un ambiente tranquilo y sin interrupciones.',
      }),
      t({
        en: 'The project was founded by Alexisdarkart, a tattoo artist with over 10 years of experience, originally from Barcelona. The studio is open to everyone, regardless of origin, identity, orientation, or gender. Respect and trust are fundamental to the way we work.',
        de: 'Gegründet wurde das Studio von Alexis, ein Tätowierer mit über 10 Jahren Erfahrung, der ursprünglich aus Barcelona kommt.',
        es: 'El proyecto ha sido creado por Alexisdarkart, tatuador con más de 10 años de experiencia, originario de Barcelona. El estudio es un espacio abierto a todas las personas, sin importar origen, identidad, orientación o género, donde el respeto y la confianza son fundamentales.',
      }),
      t({
        en: 'We mainly specialize in blackwork, ignorant, new school, and fineline. In addition, we regularly host guest artists specialized in realism, American traditional and other styles.',
        de: 'Unsere Schwerpunkte liegen in Blackwork, Ignorant, New School und Fineline. Zusätzlich kommen regelmäßig Guest Artists zu uns, die zum Beispiel auf Realismus, American Traditional aber auch andere Stilrichtungen spezialisiert sind.',
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
