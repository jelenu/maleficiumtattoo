import { type Dictionary } from 'intlayer';

const shopPageContent = {
  key: 'shop-page',
  content: {
    title: {
      es: "Tienda",
      en: "Shop",
      de: "Shop",
    },
    description: {
      es: "Bienvenido a nuestra tienda. Explora productos exclusivos y añade tus favoritos al carrito.",
      en: "Welcome to our shop. Browse exclusive products and add your favorites to the cart.",
      de: "Willkommen in unserem Shop. Stöbern Sie durch exklusive Produkte und fügen Sie Ihre Favoriten zum Warenkorb hinzu.",
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

export default shopPageContent;
