// src/data/intlayer/manuPageContent.ts
import { type Dictionary, t } from "intlayer";

const manuPageContent = {
  key: "manu-page",
  content: {
    about: t({
      en: "About Manu",
      de: "Über Manu",
      es: "Sobre Manu",
    }),
    portfolio: t({
      en: "Manu Portfolio",
      de: "Manu Portfolio",
      es: "Portafolio de Manu",
    }),
    styles: t({
      en: "Styles",
      de: "Stile",
      es: "Estilos",
    }),
    allStyles: t({
      en: "All Styles",
      de: "Alle Stile",
      es: "Todos los estilos",
    }),
    blackwork: t({
      en: "Blackwork",
      de: "Blackwork",
      es: "Blackwork",
    }),
    realism: t({
      en: "Realism",
      de: "Realismus",
      es: "Realismo",
    }),
    description: t({
          en: 'Originally from Sankt Pölten, Austria, Manu has been tattooing for one year. Her style focuses on black and grey illustrations, engraving-inspired work, and ornamental elements. Her work fuses a strong, bold aesthetic with soft and magical aspects, creating a contrast that defines her artistic signature. This duality also reflects her personality - tough in appearance yet sensitive and shy - resulting in tattoos full of character, delicacy, and expressive depth.',
          de: 'Manu kommt aus Sankt Pölten und tätowiert seit einem Jahr. Ihr Fokus liegt auf Schwarz-Weiß Illustrationen, in denen man oft Einflüsse des „Etching -Styles“ wiederfindet. Zusätzlich entwirft und sticht sie sehr gerne Ornamente. Ihre Tattoos verbinden eine markante, kraftvolle Ästhetik mit weichen, verspielten Details. Dieser Kontrast prägt ihren Stil und verleiht ihren Arbeiten Charakter und Tiefe.',
          es: 'Originaria de Sankt Pölten, Austria, Manu lleva un año tatuando con un estilo centrado en ilustraciones en blanco y negro, grabado y elementos ornamentales. Su trabajo se caracteriza por la fusión de una estética fuerte y contundente con aspectos suaves y mágicos, creando un contraste que define su firma artística. Esta dualidad refleja también su personalidad: una presencia dura en apariencia que esconde un alma sensible y tímida, dando lugar a tatuajes con carácter, delicadeza y un fuerte componente expresivo.',
        }),
    socialInstagramLabel: t({
      en: "Manu on Instagram",
      de: "Manu auf Instagram",
      es: "Manu en Instagram",
    }),
    socialFacebookLabel: t({
      en: "Manu on Facebook",
      de: "Manu auf Facebook",
      es: "Manu en Facebook",
    }),
  },
} satisfies Dictionary;

export default manuPageContent;
