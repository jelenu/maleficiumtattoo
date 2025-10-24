"use client";

import { useParams } from "next/navigation";
import { getLang } from "@/utils/i18n";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const t = {
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
};

type ProductTranslation = {
  title: string;
  description?: string;
};

type ProductImage = {
  image_url: string;
};

type ProductVariant = {
  id: string;
  name: string;
  price: number;
  stock: number;
  sku: string;
};

type ProductResponse = {
  id: string;
  slug: string;
  price?: number;
  image_url?: string;
  category_id?: string;
  created_at?: string;
  published_at?: string;
  product_translations: ProductTranslation[];
  product_images: ProductImage[];
  product_variants: ProductVariant[];
};

type Product = {
  id: string;
  slug: string;
  price?: number;
  image_url?: string;
  category_id?: string;
  created_at?: string;
  published_at?: string;
  title: string;
  description?: string;
  images: ProductImage[];
  variants: ProductVariant[];
};

type CategoryTranslation = {
  name: string;
};

type CategoryResponse = {
  id: string;
  slug: string;
  category_translations: CategoryTranslation[];
};

type Category = {
  id: string;
  slug: string;
  name?: string; // translated name
};

export default function ShopPage() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [catLoading, setCatLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let active = true;
    (async () => {
      // Fetch categories with translation for current lang
      const { data, error } = await supabase
        .from("categories")
        .select("id,slug,category_translations(name)")
        .eq("category_translations.lang", lang);

      if (!active) return;
      if (error) {
        console.error("Error fetching categories:", error);
        setCatLoading(false);
        return;
      }
      // Map translated name
      const cats = ((data as CategoryResponse[]) ?? []).map((cat) => ({
        id: cat.id,
        slug: cat.slug,
        name: cat.category_translations?.[0]?.name || cat.slug,
      }));
      setCategories(cats);
      setCatLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [lang]);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          id,
          slug,
          price,
          image_url,
          category_id,
          created_at,
          published_at,
          product_translations(title,description),
          product_images(image_url),
          product_variants(id,name,price,stock,sku)
        `)
        .eq("product_translations.lang", lang);

      if (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        return;
      }
      if (active) {
        const now = new Date();
        const filtered = ((data as ProductResponse[]) ?? []).filter(
          (product) =>
            product.published_at && new Date(product.published_at) <= now
        );
        // Map translations and images/variants
        const mapped: Product[] = filtered.map((p) => ({
          id: p.id,
          slug: p.slug,
          price: p.price,
          image_url: p.image_url,
          category_id: p.category_id,
          created_at: p.created_at,
          published_at: p.published_at,
          title: p.product_translations?.[0]?.title || p.slug,
          description: p.product_translations?.[0]?.description,
          images: p.product_images || [],
          variants: p.product_variants || [],
        }));
        setProducts(mapped);
        setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [lang]);

  // Filtrar productos por categoría seleccionada
  const filteredProducts =
    selectedCategory && selectedCategory !== "all"
      ? products.filter((p) => p.category_id === selectedCategory)
      : products;

  return (
    <main className="pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full min-h-screen box-border">
      <div className="max-w-7xl mx-auto px-10 py-10 min-h-screen text-white">
        <Text variant="h1" align="center" className="mb-2">
          {t.title[lang]}
        </Text>
        <Text align="center" className="mb-6">
          {t.description[lang]}
        </Text>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {catLoading ? (
            <Text className="text-zinc-400">{t.loading[lang]}</Text>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors border ${
                  !selectedCategory || selectedCategory === "all"
                    ? "bg-zinc-200 text-zinc-900 border-zinc-300"
                    : "bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:bg-zinc-700/70"
                }`}
              >
                {t.allCategories[lang]}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors border ${
                    selectedCategory === cat.id
                      ? "bg-zinc-200 text-zinc-900 border-zinc-300"
                      : "bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:bg-zinc-700/70"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </>
          )}
        </div>

        {loading && <Text className="text-zinc-400">{t.loading[lang]}</Text>}

        {!loading && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="flex flex-col items-center"
              >
                <div
                  className="w-full max-w-xs flex flex-col items-center cursor-pointer"
                  onClick={() => router.push(`/${locale}/shop/${product.slug}`)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      router.push(`/${locale}/shop/${product.slug}`);
                    }
                  }}
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow">
                    {product.image_url && (
                      <Image
                        src={product.image_url}
                        alt={product.title || "Product image"}
                        fill
                        className="object-cover object-center"
                        sizes="256px"
                        unoptimized
                      />
                    )}
                  </div>
                  <Text
                    variant="h3"
                    className="mt-2"
                  >
                    {product.title}
                  </Text>
                  {product.price !== undefined && (
                    <Text>
                      {t.price[lang]}: {product.price}€
                    </Text>
                  )}
                </div>
              </li>
            ))}
            {filteredProducts.length === 0 && !loading && (
              <li className="col-span-full">
                <Text className="text-zinc-400 text-center">
                  {t.noProducts[lang]}
                </Text>
              </li>
            )}
          </ul>
        )}
      </div>
      <Footer />
    </main>
  );
}
