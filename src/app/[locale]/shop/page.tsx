"use client";

import { useParams } from "next/navigation";
import { getLang } from "@/utils/i18n";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import Image from "next/image";

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
  }
};

type Product = {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  price?: number;
  // ...otros campos si existen...
};

export default function ShopPage() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        return;
      }
      if (active) {
        setProducts((data as Product[]) ?? []);
        setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  return (
    <main className="pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full min-h-screen box-border">
      <div className="max-w-5xl mx-auto px-10 py-10 min-h-screen text-white">
        <Text variant="h1" align="center" className="mb-2">{t.title[lang]}</Text>
        <Text align="center" className="mb-6">{t.description[lang]}</Text>

        {loading && <Text className="text-zinc-400">{t.loading[lang]}</Text>}

        {!loading && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {products.map((product) => (
              <li key={product.id} className="flex justify-center items-center">
                <div className="group block relative rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer aspect-[3/4] h-100 max-w-full bg-zinc-900">
                  {product.image_url && (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="absolute inset-0 object-cover object-center z-0 transition-all duration-500"
                      sizes="192px"
                      unoptimized
                    />
                  )}
                  <div className="absolute inset-0 z-10 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                  <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-2">
                    <Text variant="h3" className="font-semibold mb-2">
                      {product.name}
                    </Text>
                    <Text className="text-zinc-300 text-sm line-clamp-5 w-full px-2 mb-2">
                      {product.description}
                    </Text>
                    {product.price !== undefined && (
                      <Text className="text-emerald-300 font-bold">
                        {t.price[lang]}: ${product.price}
                      </Text>
                    )}
                  </div>
                </div>
              </li>
            ))}
            {products.length === 0 && !loading && (
              <li className="col-span-full">
                <Text className="text-zinc-400">
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
