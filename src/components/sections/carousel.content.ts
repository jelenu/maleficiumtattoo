import { t, type Dictionary } from 'intlayer';

const carouselContent = {
  key: 'carousel',
  content: {
    title: t({ en: 'Our Gallery', de: 'Unsere Galerie', es: 'Nuestra Galería' }),
    subtitle: t({ en: 'Where art meets skin.', de: 'Wo Kunst auf Haut trifft.', es: 'Donde el arte se encuentra con la piel.' })
  }
} satisfies Dictionary;

export default carouselContent;
