import { t, type Dictionary } from "intlayer";

const stylesContent = {
  key: "styles",
  content: {
    title: t({
      en: "Our Styles",
      de: "Unsere Stile",
      es: "Nuestros Estilos",
    }),
    hoverToRead: t({
      en: "Hover to read bio",
      de: "Zum Lesen der Bio hovern",
      es: "Pasa el ratón para leer la descripción",
    }),
    styles: [
      {
        title: t({ en: "Blackwork", de: "Blackwork", es: "Blackwork" }),
        description: t({
          en: "Blackwork is based on solid black and strong contrast. It is designed to flow with your body and stand the test of time, sometimes executed using whip shading techniques.",
          de: "Bei Blackwork wird mit sattem Schwarz und starken Kontrasten gearbeitet. Die Motive werden so gestaltet, dass sie mit dem Körper harmonieren und langfristig gut lesbar bleiben. Mit der Whip Shading Technik werden weiche Übergänge kreiert um dem Motiv Tiefe zu verleihen.",
          es: "El blackwork es un estilo basado en negro sólido y contraste, pensado para encajar con tu cuerpo y durar en el tiempo, a veces ejecutado la técnica de sombreado de arrastre.",
        }),
        imageSrc: "/images/tattoo/blackwork/blackngrey/DEATH - @tobi.part.webp",
        imageAlt: t({ en: "Blackwork Tattoo", de: "Blackwork Tattoo", es: "Tatuaje Blackwork" }),
      },
      {
        title: t({ en: "Ignorant", de: "Ignorant", es: "Ignorant" }),
        description: t({
          en: "Simple designs built with strong lines, solid black, and clear meaning. Often direct, bold, and message-driven.",
          de: "Reduzierte Motive mit klaren, kräftigen Linien und direkter Aussage. Oft bewusst einfach gehalten, aber stark im Ausdruck.",
          es: "Diseños simples basado en líneas fuertes, negro sólido y mucho significado, normalmente contienen un mensaje fuerte y directo.",
        }),
        imageSrc: "/images/tattoo/Ignorant/Black n grey/scaled_image00006-1_web.webp",
        imageAlt: t({ en: "Ignorant Tattoo", de: "Ignorant Tattoo", es: "Tatuaje Ignorant" }),
      },
      {
        title: t({ en: "New School", de: "New School", es: "New School" }),
        description: t({
  en: "A colorful, expressive style with exaggerated proportions, dynamic compositions, and strong graffiti influences. Also available in black and grey.",
  de: "Ein farbenfroher Stil mit überzeichneten Proportionen, dynamischen Kompositionen und Graffiti-Einflüssen. Auch in Black & Grey möglich.",
  es: "Un estilo colorido y expresivo, con proporciones exageradas, composiciones dinámicas e influencias del graffiti. También en blanco y negro.",
}),
        imageSrc: "/images/tattoo/New school/color/scaled_image0 (1).webp",
        imageAlt: t({ en: "New School Tattoo", de: "New School Tattoo", es: "Tatuaje New School" }),
      },
      {
        title: t({ en: "Fineline", de: "Fineline", es: "Fineline" }),
        description: t({
          en: "Fineline is not a style itself but a technique focused on thin lines and precision. Perfect for detail, minimalism, and delicate tattoos with strong visual impact.",
          de: "Fineline ist kein eigenständiger Stil, sondern eine Technik, die auf feinen Linien und präziser Ausführung basiert. Ideal für detailreiche, minimalistische und filigrane Tattoos.",
          es: "El fineline  no es un estilo en sí, es una técnica que se centra en líneas finas y precisión. Perfecto para detalles, minimalismo y tatuajes delicados con fuerza visual.",
        }),
        imageSrc: "/images/tattoo/fineline/scaled_IMG_2442_web.webp",
        imageAlt: t({ en: "Fineline Tattoo", de: "Fineline Tattoo", es: "Tatuaje Fineline" }),
      },
      
{
  title: t({
    en: "Traditional",
    de: "Traditional",
    es: "Tradicional",
  }),
  description: t({
  en: "Traditional tattoos feature bold black outlines, vibrant colors, and iconic designs inspired by classic American tattooing.",
  de: "Traditional Tattoos zeichnen sich durch kräftige schwarze Konturen, intensive Farben und ikonische Motive aus, inspiriert vom klassischen amerikanischen Tattoo-Stil.",
  es: "El estilo tradicional destaca por sus contornos negros gruesos, colores intensos y diseños icónicos inspirados en el tatuaje clásico americano.",
}),
  imageSrc: "/images/tattoo/tradicional/color/HINDI.webp",
  imageAlt: t({
    en: "Traditional Tattoo",
    de: "Traditional Tattoo",
    es: "Tatuaje Tradicional",
  }),
},
{
  title: t({
    en: "Realism",
    de: "Realismus",
    es: "Realismo",
  }),
  description: t({
  en: "Realism recreates images with incredible detail, capturing light, shadows, and textures to create lifelike tattoos in black and grey or color.",
  de: "Realismus gibt Motive detailgetreu wieder und fängt Licht, Schatten und Texturen ein, um lebensechte Tattoos in Black & Grey oder Farbe zu schaffen.",
  es: "El realismo reproduce imágenes con gran detalle, capturando luces, sombras y texturas para crear tatuajes que parecen fotografías, en blanco y negro o color.",
}),
  imageSrc: "/images/tattoo/Realism/color/scaled_DSC05156.webp",
  imageAlt: t({
    en: "Realism Tattoo",
    de: "Realismus Tattoo",
    es: "Tatuaje Realista",
  }),
},

    ],
  },
} satisfies Dictionary;

export default stylesContent;
