import { t, type Dictionary } from "intlayer";

const stylesContent = {
  key: "styles",
  content: {
    title: t({
      en: "Our Styles",
      de: "Unsere Stile",
      es: "Nuestros Estilos",
    }),
    styles: [
      {
        title: t({ en: "Blackwork", de: "Blackwork", es: "Blackwork" }),
        description: t({
          en: "Blackwork is based on solid black and strong contrast. It is designed to flow with your body and stand the test of time, sometimes executed using whip shading techniques.",
          de: "Bei Blackwork wird mit sattem Schwarz und starken Kontrasten gearbeitet. Die Motive werden so gestaltet, dass sie mit dem Körper harmonieren und langfristig gut lesbar bleiben. Mit der Whip Shading Technik werden weiche Übergänge kreiert um dem Motiv Tiefe zu verleihen.",
          es: "El blackwork es un estilo basado en negro sólido y contraste, pensado para encajar con tu cuerpo y durar en el tiempo, a veces ejecutado la técnica de sombreado de arrastre.",
        }),
        imageSrc: "/images/tattoo.jpg",
        imageAlt: t({ en: "Blackwork Tattoo", de: "Blackwork Tattoo", es: "Tatuaje Blackwork" }),
      },
      {
        title: t({ en: "Ignorant", de: "Ignorant", es: "Ignorant" }),
        description: t({
          en: "Simple designs built with strong lines, solid black, and clear meaning. Often direct, bold, and message-driven.",
          de: "Reduzierte Motive mit klaren, kräftigen Linien und direkter Aussage. Oft bewusst einfach gehalten, aber stark im Ausdruck.",
          es: "Diseños simples basado en líneas fuertes, negro sólido y mucho significado, normalmente contienen un mensaje fuerte y directo.",
        }),
        imageSrc: "/images/tattoo.jpg",
        imageAlt: t({ en: "Ignorant Tattoo", de: "Ignorant Tattoo", es: "Tatuaje Ignorant" }),
      },
      {
        title: t({ en: "New School", de: "New School", es: "New School" }),
        description: t({
          en: "A colorful and expressive style, also possible in black and grey. It is characterized by exaggerated proportions, dynamic compositions and strong connections to graffiti culture.",
          de: "Ein farbenintensiver, ausdrucksstarker Stil, der auch in Black & Grey umsetzbar ist. Typisch für New School sind überzeichnete Proportionen, dynamische Kompositionen und Einflüsse aus der Graffiti-Kultur.",
          es: "El new school es un estilo muy colorido pero con posibilidad de trabajarse en blanco y negro, se distingue por usar la exageración de las proporciones del diseño y está muy vinculado al graffiti.",
        }),
        imageSrc: "/images/tattoo.jpg",
        imageAlt: t({ en: "New School Tattoo", de: "New School Tattoo", es: "Tatuaje New School" }),
      },
      {
        title: t({ en: "Fineline", de: "Fineline", es: "Fineline" }),
        description: t({
          en: "Fineline is not a style itself but a technique focused on thin lines and precision. Perfect for detail, minimalism, and delicate tattoos with strong visual impact.",
          de: "Fineline ist kein eigenständiger Stil, sondern eine Technik, die auf feinen Linien und präziser Ausführung basiert. Ideal für detailreiche, minimalistische und filigrane Tattoos.",
          es: "El fineline  no es un estilo en sí, es una técnica que se centra en líneas finas y precisión. Perfecto para detalles, minimalismo y tatuajes delicados con fuerza visual.",
        }),
        imageSrc: "/images/tattoo.jpg",
        imageAlt: t({ en: "Fineline Tattoo", de: "Fineline Tattoo", es: "Tatuaje Fineline" }),
      },
    ],
  },
} satisfies Dictionary;

export default stylesContent;
