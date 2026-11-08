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
      en: "Manu is a tattoo artist based in Sankt Pölten, Austria, who began her professional journey in tattooing one year ago. Her artistic language combines black and grey illustration, techniques inspired by traditional engraving, and decorative ornamental designs. She enjoys exploring the balance between powerful imagery and delicate, almost dreamlike details. This contrast is central to her creative identity, reflecting both her strong outward presence and her more sensitive, reserved nature. The result is expressive tattoo artwork that brings together personality, subtlety, and visual depth.",
      de: "Die aus Sankt Pölten in Österreich stammende Manu ist seit einem Jahr als Tätowiererin tätig. In ihren Arbeiten verbindet sie Schwarz-Weiß-Illustrationen mit Einflüssen aus der traditionellen Gravurkunst und dekorativen Ornamenten. Besonders interessant findet sie das Zusammenspiel von ausdrucksstarken Motiven und filigranen, beinahe märchenhaften Details. Dieser Gegensatz macht ihre künstlerische Handschrift aus und spiegelt zugleich ihre Persönlichkeit wider: nach außen kraftvoll, im Inneren jedoch sensibel und eher zurückhaltend. So entstehen Tattoos mit Ausdruck, feinen Details und einer besonderen visuellen Tiefe.",
      es: "Manu desarrolla su actividad como tatuadora en Sankt Pölten, Austria, donde comenzó su trayectoria profesional hace un año. Su universo creativo combina ilustraciones en negro y gris, recursos visuales propios del grabado y composiciones ornamentales. Le gusta experimentar con el contraste entre imágenes de gran intensidad y detalles delicados con un aire casi fantástico. Esta mezcla define su identidad artística y también guarda relación con su personalidad: una apariencia fuerte que convive con un carácter sensible y reservado. Sus diseños destacan por transmitir expresividad, sutileza y profundidad visual.",
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
