import { t, type Dictionary } from 'intlayer';

const artistsSectionContent = {
  key: 'artists',
  content: {
    title: t({ en: 'Meet the Artists', de: 'Lerne die Künstler kennen', es: 'Conoce a los Artistas' }),
    artists: [
      {
        name: t({ en: 'Alexis', de: 'Alexis', es: 'Alexis' }),
        role: t({ en: 'Tattoo Artist', de: 'Tattoo-Künstler', es: 'Tatuador' }),
        image: '/images/alexis.jpg',
        description: t({
          en: 'Especialista en tatuajes realistas y blackwork. Con más de 8 años de experiencia creando obras únicas que reflejan la personalidad de cada cliente.',
          de: 'Spezialist für realistische Tattoos und Blackwork. Mit über 8 Jahren Erfahrung in der Schaffung einzigartiger Werke, die die Persönlichkeit jedes Kunden widerspiegeln.',
          es: 'Especialista en tatuajes realistas y blackwork. Con más de 8 años de experiencia creando obras únicas que reflejan la personalidad de cada cliente.',
        }),
      },
      {
        name: t({ en: 'Manu', de: 'Manu', es: 'Manu' }),
        role: t({ en: 'Tattoo Artist', de: 'Tattoo-Künstler', es: 'Tatuador' }),
        image: '/images/alexis.jpg',
        description: t({
          en: 'Maestro en tatuajes tradicionales y neo-tradicionales. Su estilo único combina técnicas clásicas con elementos modernos.',
          de: 'Meister der traditionellen und neo-traditionellen Tattoos. Sein einzigartiger Stil kombiniert klassische Techniken mit modernen Elementen.',
          es: 'Maestro en tatuajes tradicionales y neo-tradicionales. Su estilo único combina técnicas clásicas con elementos modernos.',
        }),
      },
    ],
  },
} satisfies Dictionary;

export default artistsSectionContent;
