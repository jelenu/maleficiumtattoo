import { type Dictionary, t } from "intlayer";

const christophPageContent = {
  key: "christoph-page",
  content: {
    about: t({
      en: "About Christoph",
      de: "Über Christoph",
      es: "Sobre Christoph",
    }),
    portfolio: t({
      en: "Christoph Portfolio",
      de: "Christoph Portfolio",
      es: "Portafolio de Christoph",
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
    newSchool: t({
      en: "New School",
      de: "New School",
      es: "New School",
    }),
    description: t({
      en: "Originally from Ybbs an der Donau, Austria, Christoph has 15 years of tattooing experience. His style focuses on New School Colour. His work is characterized by bold lines, vibrant colors, unique characters, and dynamic compositions. Specialized in large-scale projects, he creates powerful, high-energy tattoos with strong visual identity.",
      de: "Meister der traditionellen und neo-traditionellen Tattoos. Sein einzigartiger Stil kombiniert klassische Techniken mit modernen Elementen.",
      es: "Originario de Ybbs an der Donau (Ybbs City), Austria, Christoph lleva 15 años tatuando con un estilo centrado en el New School Colour. Su trabajo se caracteriza por líneas bold, colores vibrantes y personajes únicos, combinados con diseños dinámicos y perspectivas marcadas. Especializado en proyectos de gran formato, crea tatuajes potentes y llenos de energía que destacan por su impacto visual y su identidad propia.",
    }),
    socialInstagramLabel: t({
      en: "Christoph on Instagram",
      de: "Christoph auf Instagram",
      es: "Christoph en Instagram",
    }),
    socialFacebookLabel: t({
      en: "Christoph on Facebook",
      de: "Christoph auf Facebook",
      es: "Christoph en Facebook",
    }),
  },
} satisfies Dictionary;

export default christophPageContent;
