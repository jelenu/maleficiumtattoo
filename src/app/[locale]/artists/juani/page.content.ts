import { type Dictionary, t } from "intlayer";

const juaniPageContent = {
  key: "juani-page",
  content: {
    about: t({
      en: "About Juani",
      de: "Über Juani",
      es: "Sobre Juani",
    }),
    portfolio: t({
      en: "Juani Portfolio",
      de: "Juani Portfolio",
      es: "Portafolio de Juani",
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
    traditional: t({
      en: "Traditional",
      de: "Traditional",
      es: "Tradicional",
    }),
    description: t({
      en: "Originally from Málaga and owner of his own studio in Zaragoza, Spain, Juani has more than 15 years of experience. He specializes in American traditional tattooing. His work features bold lines and bright, intense colors, distinct from European traditional. His tattoos are built to last, maintaining strength and character as the skin changes over time - proving that old school is still alive.",
      de: "Meister der traditionellen und neo-traditionellen Tattoos. Sein einzigartiger Stil kombiniert klassische Techniken mit modernen Elementen.",
      es: "Originario de Málaga y con su propio estudio en Zaragoza, España, Juani cuenta con más de 10 años de experiencia en tatuaje. Especializado en tradicional americano, crea piezas con líneas gruesas y colores brillantes e intensos, diferentes del tradicional europeo. Sus tatuajes están pensados para resistir el paso del tiempo, manteniendo fuerza y carácter incluso cuando la piel cambia, demostrando que la vieja escuela sigue viva.",
    }),
    socialInstagramLabel: t({
      en: "Juani on Instagram",
      de: "Juani auf Instagram",
      es: "Juani en Instagram",
    }),
    socialFacebookLabel: t({
      en: "Juani on Facebook",
      de: "Juani auf Facebook",
      es: "Juani en Facebook",
    }),
  },
} satisfies Dictionary;

export default juaniPageContent;
