import { t, type Dictionary } from 'intlayer';

const headerContent = {
  key: 'header',
  content: {
    nav: {
      home: t({
        en: 'Home',
        de: 'Startseite',
        es: 'Inicio',
      }),
      gallery: t({
        en: 'Gallery',
        de: 'Galerie',
        es: 'Galería',
      }),
      artists: t({
        en: 'Artists',
        de: 'Künstler',
        es: 'Artistas',
      }),
      studio: t({
        en: 'Studio',
        de: 'Studio',
        es: 'Estudio',
      }),
      contact: t({
        en: 'Contact',
        de: 'Kontakt',
        es: 'Contacto',
      }),
      blog: t({
        en: 'Blog',
        de: 'Blog',
        es: 'Blog',
      }),
    },
    a11y: {
      toggleMenu: t({
        en: 'Toggle menu',
        de: 'Menü umschalten',
        es: 'Abrir/cerrar menú',
      }),
    },
    brand: {
      logoAlt: t({
        en: 'Maleficium Tattoo Logo',
        de: 'Logo von Maleficium Tattoo',
        es: 'Logo de Maleficium Tattoo',
      }),
      titleAlt: t({
        en: 'Maleficium Tattoo',
        de: 'Maleficium Tattoo',
        es: 'Maleficium Tattoo',
      }),
    },
  },
} satisfies Dictionary;

export default headerContent;
