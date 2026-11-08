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
      en: 'Alexis is a tattoo artist from Barcelona, Spain, with over a decade of professional experience. His signature approach revolves around blackwork, using a mix of bold and delicate lines, striking contrasts, and characteristic whip shading. Known for producing crisp, powerful designs, he also works on cover-ups and scar coverage projects. In addition, he has experience tattooing intimate areas. His artistic vision brings together dark imagery and technical accuracy, resulting in original tattoos designed to complement each person’s body and individual identity.',
      de: 'Der aus Barcelona stammende Tätowierer Alexis verfügt über mehr als zehn Jahre Berufserfahrung. Seine künstlerische Handschrift ist vom Blackwork geprägt und vereint kräftige und feine Linien, ausgeprägte Kontraste sowie die Technik des Whip Shading. Seine Tattoos überzeugen durch eine klare und markante Ausführung und eignen sich auch für Cover-ups und die Überarbeitung von Narben. Darüber hinaus besitzt er Erfahrung mit Tätowierungen im Intimbereich. Mit einer Kombination aus dunkler Bildsprache und handwerklicher Präzision entwickelt er individuelle Motive, die zur Körperform und Persönlichkeit jedes Menschen passen.',
      es: 'Alexis es un tatuador nacido en Barcelona, España, con más de una década de experiencia profesional. Su identidad artística gira en torno al blackwork, donde combina trazos de diferentes grosores, contrastes intensos y la técnica de sombreado whip shading. Destaca por realizar tatuajes definidos, contundentes y visualmente sólidos, además de trabajar en proyectos de cover-up y cobertura de cicatrices. También cuenta con experiencia en tatuajes de zonas íntimas. Su propuesta creativa une una estética oscura con una ejecución precisa para desarrollar diseños originales que encajan con la anatomía y personalidad de cada cliente.',
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
