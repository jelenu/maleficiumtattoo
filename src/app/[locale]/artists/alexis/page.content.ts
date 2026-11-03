import { type Dictionary, t } from 'intlayer';

const alexisPageContent = {
  key: 'alexis-page',
  content: {
    about: t({
      en: 'About Alexis',
      de: 'Über Alexis',
      es: 'Sobre Alexis',
    }),
    portfolio: t({
      en: 'Alexis Portfolio',
      de: 'Alexis Portfolio',
      es: 'Portafolio de Alexis',
    }),
    styles: t({
      en: 'Styles',
      de: 'Stile',
      es: 'Estilos',
    }),
    allStyles: t({
      en: 'All Styles',
      de: 'Alle Stile',
      es: 'Todos los estilos',
    }),
    blackwork: t({
      en: 'Blackwork',
      de: 'Blackwork',
      es: 'Blackwork',
    }),
    realism: t({
      en: 'Realism',
      de: 'Realismus',
      es: 'Realismo',
    }),
    description: t({
          en: 'Originally from Barcelona, Spain, Alexis has been tattooing for over 10 years. His style focuses on blackwork, combining thick and thin lines, high contrast, and whip shading. His tattoos are clean, bold and solid, ideal for covering scars or old tattoos. He is also specialized in tattooing intimate areas. His approach blends darkness and precision, creating unique pieces adapted to both the body and the character of each person.',
          de: 'Alexis stammt ursprünglich aus Barcelona und tätowiert seit über 10 Jahren. Sein Schwerpunkt liegt auf Blackwork mit starken Kontrasten sowie der Kombination aus dicken und feinen Linien, ergänzt durch Whip Shading. Seine Arbeiten sind klar, kraftvoll und langlebig – besonders geeignet für Narben- oder Cover-up-Projekte. Er ist außerdem auf Tätowierungen im Intimbereich spezialisiert. Jedes Tattoo wird individuell nach Kund:innenwunsch entworfen und an Körper und Persönlichkeit angepasst.',
          es: 'Originario de Barcelona, España, Alexis lleva más de 10 años tatuando con un estilo centrado en blackwork, combinando líneas gruesas y finas, alto contraste y sombreado whip shading. Sus tatuajes son limpios, sólidos y con presencia, ideales para cubrir cicatrices o antiguos tatuajes, y también especializado en tatuar partes íntimas. Su enfoque combina oscuridad y precisión, creando piezas únicas que se adaptan al cuerpo y al carácter de cada persona',
        }),
    socialInstagramLabel: t({
      en: 'Alexis on Instagram',
      de: 'Alexis auf Instagram',
      es: 'Alexis en Instagram',
    }),
    socialFacebookLabel: t({
      en: 'Alexis on Facebook',
      de: 'Alexis auf Facebook',
      es: 'Alexis en Facebook',
    }),
  },
} satisfies Dictionary;

export default alexisPageContent;
