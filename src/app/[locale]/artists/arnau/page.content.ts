import { type Dictionary, t } from "intlayer";

const arnauPageContent = {
  key: "arnau-page",
  content: {
    about: t({
      en: "About Arnau",
      de: "Über Arnau",
      es: "Sobre Arnau",
    }),
    portfolio: t({
      en: "Arnau Portfolio",
      de: "Arnau Portfolio",
      es: "Portafolio de Arnau",
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
    realism: t({
      en: "Realism",
      de: "Realismus",
      es: "Realismo",
    }),
    description: t({
      en: "Originally from Barcelona, Spain, Arnau has over 10 years of experience. He specializes in realism, using clean and contrasted shading to ensure his pieces age perfectly over time. Able to replicate photographs onto skin with exceptional precision, his work stands out for originality and an artistic approach beyond the conventional, creating truly unique pieces.",
      de: "Meister der traditionellen und neo-traditionellen Tattoos. Sein einzigartiger Stil kombiniert klassische Techniken mit modernen Elementen.",
      es: "Originario de Barcelona, España, Arnau cuenta con más de 10 años de experiencia en tatuaje. Su especialidad es el realismo, con sombreados limpios y contrastados que aseguran que sus piezas se mantengan impecables con el paso del tiempo. Capaz de replicar fotografías en la piel con precisión superior, su trabajo se distingue por originalidad y un enfoque artístico fuera de lo convencional, creando tatuajes que son verdaderas obras únicas.",
    }),
    socialInstagramLabel: t({
      en: "Arnau on Instagram",
      de: "Arnau auf Instagram",
      es: "Arnau en Instagram",
    }),
    socialFacebookLabel: t({
      en: "Arnau on Facebook",
      de: "Arnau auf Facebook",
      es: "Arnau en Facebook",
    }),
  },
} satisfies Dictionary;

export default arnauPageContent;
