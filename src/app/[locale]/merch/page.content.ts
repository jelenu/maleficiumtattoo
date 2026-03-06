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
      en: [
        "In this section you will find a selection of exclusive pieces created by the studio. All products are handmade by us and produced in limited quantities, making each item special and hard to replicate.",
        "The online shop functions as a catalogue only. We do not sell directly through the website. Prices are displayed in the gallery and do not include shipping costs.",
        "If you are interested in any piece, please contact us via direct message on Instagram to confirm availability and arrange the purchase. We prefer direct and personal communication, aligned with the studio’s philosophy and the care we put into every creation.",
      ],
      de: [
        "Hier findest du eine Auswahl exklusiver Stücke aus dem Studio. Alle Produkte sind handgefertigt und in limitierter Stückzahl erhältlich.",
        "Der Online-Shop dient ausschließlich als Katalog – ein direkter Verkauf über die Website findet nicht statt. Die angegebenen Preise verstehen sich ohne Versandkosten.",
        "Bei Interesse kontaktiere uns bitte per Direktnachricht auf Instagram, um Verfügbarkeit und Kauf zu klären. Wir setzen auf direkte, persönliche Kommunikation – passend zu unserer Arbeitsweise.",
      ],
      es: [
        "En esta sección encontrarás una selección de piezas exclusivas creadas por el estudio. Todos los productos están hechos a mano por nosotros y se producen en cantidades limitadas, lo que convierte cada artículo en algo especial y difícil de repetir.",
        "La tienda online funciona como catálogo; no realizamos ventas directamente a través de la web. Los precios están indicados en la galería y todos se muestran sin gastos de envío.",
        "Si estás interesado/a en alguna pieza, puedes contactarnos mediante mensaje directo en Instagram para confirmar disponibilidad y gestionar la compra. Preferimos una comunicación directa y personal, acorde con la filosofía del estudio y el cuidado que ponemos en cada creación.",
      ],
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