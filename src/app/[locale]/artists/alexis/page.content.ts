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
      en: 'Artist specialized in realism and blackwork. Passionate about transforming ideas into unique pieces that tell stories through the skin.',
      de: 'Künstler spezialisiert auf Realismus und Blackwork. Leidenschaftlich darin, Ideen in einzigartige Werke zu verwandeln, die Geschichten auf der Haut erzählen.',
      es: 'Artista especializado en realismo y blackwork. Apasionado por transformar ideas en piezas únicas que cuentan historias a través de la piel.',
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
