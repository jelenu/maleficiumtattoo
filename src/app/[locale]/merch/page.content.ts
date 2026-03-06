import { type Dictionary } from 'intlayer';

const merchPageContent = {
  key: 'merch-page',
  content: {
    title: {
      es: "Merch",
      en: "Merch",
      de: "Merch",
    },
    description: {
      es: [
        "En esta sección encontrarás una selección de piezas exclusivas creadas por el estudio. Todos los productos están hechos a mano por nosotros y se producen en cantidades limitadas, lo que convierte cada artículo en algo especial y difícil de repetir.",
        "La tienda online funciona como catálogo; no realizamos ventas directamente a través de la web. Los precios están indicados en la galería y todos se muestran sin gastos de envío.",
        "Si estás interesado/a en alguna pieza, puedes contactarnos mediante mensaje directo en Instagram para confirmar disponibilidad y gestionar la compra. Preferimos una comunicación directa y personal, acorde con la filosofía del estudio y el cuidado que ponemos en cada creación.",
      ],
      en: "Explore our exclusive merch. To make a purchase, contact us via ",
      de: "Entdecken Sie unseren exklusiven Merch. Um einen Kauf zu tätigen, kontaktieren Sie uns über ",
    },
    instagram: {
      es: "Instagram",
      en: "Instagram",
      de: "Instagram",
    },
    loading: {
      es: "Cargando productos...",
      en: "Loading products...",
      de: "Produkte werden geladen...",
    },
    noProducts: {
      es: "No hay productos disponibles.",
      en: "No products available.",
      de: "Keine Produkte verfügbar.",
    },
    price: {
      es: "Precio",
      en: "Price",
      de: "Preis",
    },
    allCategories: {
      es: "Todas las categorías",
      en: "All categories",
      de: "Alle Kategorien",
    },
  },
} satisfies Dictionary;

export default merchPageContent;