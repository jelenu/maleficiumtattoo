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
          en: "Specialized in Blackwork tattoos. Crisp lines, deep blacks, and striking designs that highlight your unique style.",
          de: "Spezialisiert auf Blackwork-Tattoos. Präzise Linien, tiefes Schwarz und ausdrucksstarke Designs für deinen einzigartigen Stil.",
          es: "Especializados en tatuajes Blackwork. Líneas precisas, negros profundos y diseños impactantes que resaltan tu estilo único.",
        }),
        imageSrc: "/images/tattoo.jpg",
        imageAlt: t({ en: "Blackwork Tattoo", de: "Blackwork Tattoo", es: "Tatuaje Blackwork" }),
      },
      {
        title: t({ en: "Custom Design", de: "Custom Design", es: "Custom Design" }),
        description: t({
          en: "Every design is unique and tailored to your ideas and preferences. We work with you to create body art that truly reflects you.",
          de: "Jedes Design ist individuell und auf deine Ideen und Vorlieben abgestimmt. Gemeinsam schaffen wir Körperschmuck, der dich widerspiegelt.",
          es: "Cada diseño es único y personalizado según tus ideas y preferencias. Trabajamos contigo para crear arte corporal que te refleje.",
        }),
        imageSrc: "/images/tattoo.jpg",
        imageAlt: t({ en: "Custom Design Tattoo", de: "Custom Design Tattoo", es: "Tatuaje de diseño personalizado" }),
      },
      {
        title: t({ en: "Fine Lines", de: "Feine Linien", es: "Líneas finas" }),
        description: t({
          en: "Fine line technique for delicate, detailed designs. Perfect for minimalist tattoos that keep their elegance.",
          de: "Feinlinientechnik für zarte, detaillierte Designs. Perfekt für minimalistische Tattoos, die ihre Eleganz bewahren.",
          es: "Técnica de líneas finas para diseños delicados y detallados. Perfecta para tatuajes minimalistas que mantienen su elegancia.",
        }),
        imageSrc: "/images/tattoo.jpg",
        imageAlt: t({ en: "Fine Line Tattoo", de: "Fine Line Tattoo", es: "Tatuaje de líneas finas" }),
      },
    ],
  },
} satisfies Dictionary;

export default stylesContent;
