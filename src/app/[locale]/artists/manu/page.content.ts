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
      en: "Artist specialized in realism and blackwork. Passionate about transforming ideas into unique pieces that tell stories through the skin.",
      de: "Künstler spezialisiert auf Realismus und Blackwork. Leidenschaftlich darin, Ideen in einzigartige Werke zu verwandeln, die Geschichten auf der Haut erzählen.",
      es: "Artista especializado en realismo y blackwork. Apasionado por transformar ideas en piezas únicas que cuentan historias a través de la piel.",
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
