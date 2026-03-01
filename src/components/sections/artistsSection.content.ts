import { t, type Dictionary } from 'intlayer';

const artistsSectionContent = {
  key: 'artists',
  content: {
    title: t({ en: 'Meet the Artists', de: 'Lerne die Künstler kennen', es: 'Conoce a nuestros tatuadores' }),
    artists: [
      {
        name: t({ en: 'Alexis', de: 'Alexis', es: 'Alexis' }),
        role: t({ en: 'Resident Artist', de: 'Tattoo-Künstler', es: 'Tatuador residente' }),
        image: '/images/alexis.jpg',
        instagram: t({ en: '@alexisdarkart', de: '@alexisdarkart', es: '@alexisdarkart' }),
        description: t({
          en: 'Originally from Barcelona, Spain, Alexis has been tattooing for over 10 years. His style focuses on blackwork, combining thick and thin lines, high contrast, and whip shading. His tattoos are clean, bold and solid, ideal for covering scars or old tattoos. He is also specialized in tattooing intimate areas. His approach blends darkness and precision, creating unique pieces adapted to both the body and the character of each person.',
          de: 'Spezialist für realistische Tattoos und Blackwork. Mit über 8 Jahren Erfahrung in der Schaffung einzigartiger Werke, die die Persönlichkeit jedes Kunden widerspiegeln.',
          es: 'Originario de Barcelona, España, Alexis lleva más de 10 años tatuando con un estilo centrado en blackwork, combinando líneas gruesas y finas, alto contraste y sombreado whip shading. Sus tatuajes son limpios, sólidos y con presencia, ideales para cubrir cicatrices o antiguos tatuajes, y también especializado en tatuar partes íntimas. Su enfoque combina oscuridad y precisión, creando piezas únicas que se adaptan al cuerpo y al carácter de cada persona',
        }),
      },
      {
        name: t({ en: 'Manu', de: 'Manu', es: 'Manu' }),
        role: t({ en: 'Resident Artist', de: 'Tattoo-Künstler', es: 'Tatuador residente' }),
        image: '/images/alexis.jpg',
        instagram: t({ en: '@knoblauchbanane', de: '@knoblauchbanane', es: '@knoblauchbanane' }),
        description: t({
          en: 'Originally from Sankt Pölten, Austria, Manu has been tattooing for one year. Her style focuses on black and grey illustrations, engraving-inspired work, and ornamental elements. Her work fuses a strong, bold aesthetic with soft and magical aspects, creating a contrast that defines her artistic signature. This duality also reflects her personality - tough in appearance yet sensitive and shy - resulting in tattoos full of character, delicacy, and expressive depth.',
          de: 'Meister der traditionellen und neo-traditionellen Tattoos. Sein einzigartiger Stil kombiniert klassische Techniken mit modernen Elementen.',
          es: 'Originaria de Sankt Pölten, Austria, Manu lleva un año tatuando con un estilo centrado en ilustraciones en blanco y negro, grabado y elementos ornamentales. Su trabajo se caracteriza por la fusión de una estética fuerte y contundente con aspectos suaves y mágicos, creando un contraste que define su firma artística. Esta dualidad refleja también su personalidad: una presencia dura en apariencia que esconde un alma sensible y tímida, dando lugar a tatuajes con carácter, delicadeza y un fuerte componente expresivo.',
        }),
      },
      {
        name: t({ en: 'Christoph', de: 'Christoph', es: 'Christoph' }),
        role: t({ en: 'Resident Artist', de: 'Tattoo-Künstler', es: 'Tatuador residente' }),
        image: '/images/alexis.jpg',
        instagram: t({ en: '@y_c_tattoo', de: '@y_c_tattoo', es: '@y_c_tattoo' }),
        description: t({
          en: 'Originally from Ybbs an der Donau, Austria, Christoph has 15 years of tattooing experience. His style focuses on New School Colour. His work is characterized by bold lines, vibrant colors, unique characters, and dynamic compositions. Specialized in large-scale projects, he creates powerful, high-energy tattoos with strong visual identity.',
          de: 'Meister der traditionellen und neo-traditionellen Tattoos. Sein einzigartiger Stil kombiniert klassische Techniken mit modernen Elementen.',
          es: 'Originario de Ybbs an der Donau (Ybbs City), Austria, Christoph lleva 15 años tatuando con un estilo centrado en el New School Colour. Su trabajo se caracteriza por líneas bold, colores vibrantes y personajes únicos, combinados con diseños dinámicos y perspectivas marcadas. Especializado en proyectos de gran formato, crea tatuajes potentes y llenos de energía que destacan por su impacto visual y su identidad propia.',
        }),
      },
      {
        name: t({ en: 'Arnau', de: 'Arnau', es: 'Arnau' }),
        role: t({ en: 'Regular Guest Artist', de: 'Tattoo-Künstler', es: 'Tatuador invitado regular' }),
        image: '/images/alexis.jpg',
        instagram: t({ en: '@arnau_kurtis_tattoo', de: '@arnau_kurtis_tattoo', es: '@arnau_kurtis_tattoo' }),
        description: t({
          en: 'Originally from Barcelona, Spain, Arnau has over 10 years of experience. He specializes in realism, using clean and contrasted shading to ensure his pieces age perfectly over time. Able to replicate photographs onto skin with exceptional precision, his work stands out for originality and an artistic approach beyond the conventional, creating truly unique pieces.',
          de: 'Meister der traditionellen und neo-traditionellen Tattoos. Sein einzigartiger Stil kombiniert klassische Techniken mit modernen Elementen.',
          es: 'Originario de Barcelona, España, Arnau cuenta con más de 10 años de experiencia en tatuaje. Su especialidad es el realismo, con sombreados limpios y contrastados que aseguran que sus piezas se mantengan impecables con el paso del tiempo. Capaz de replicar fotografías en la piel con precisión superior, su trabajo se distingue por originalidad y un enfoque artístico fuera de lo convencional, creando tatuajes que son verdaderas obras únicas.',
        }),
      },
      {
        name: t({ en: 'Juani', de: 'Juani', es: 'Juani' }),
        role: t({ en: 'Regular Guest Artist', de: 'Tattoo-Künstler', es: 'Tatuador invitado regular' }),
        image: '/images/alexis.jpg',
        instagram: t({ en: '@juani_olivencia', de: '@juani_olivencia', es: '@juani_olivencia' }),
        description: t({
          en: 'Originally from Málaga and owner of his own studio in Zaragoza, Spain, Juani has more than 15 years of experience. He specializes in American traditional tattooing. His work features bold lines and bright, intense colors, distinct from European traditional. His tattoos are built to last, maintaining strength and character as the skin changes over time - proving that old school is still alive.',
          de: 'Meister der traditionellen und neo-traditionellen Tattoos. Sein einzigartiger Stil kombiniert klassische Techniken mit modernen Elementen.',
          es: 'Originario de Málaga y con su propio estudio en Zaragoza, España, Juani cuenta con más de 10 años de experiencia en tatuaje. Especializado en tradicional americano, crea piezas con líneas gruesas y colores brillantes e intensos, diferentes del tradicional europeo. Sus tatuajes están pensados para resistir el paso del tiempo, manteniendo fuerza y carácter incluso cuando la piel cambia, demostrando que la vieja escuela sigue viva.',
        }),
      },
    ],
  },
} satisfies Dictionary;

export default artistsSectionContent;
