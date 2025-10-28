"use client";

import { useParams } from "next/navigation";
import { getLang } from "@/utils/i18n";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";
import { useState } from "react";
import ProductList from "./ProductList";
import { useIntlayer } from "react-intlayer";
import CategorySelector from "./CategorySelector";
import { useShopData } from "./hooks/useShopData";



export default function ShopPage() {
  const t = useIntlayer("shop-page");
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";

  const { products, loading, categories, catLoading } = useShopData(lang);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          loading={catLoading}
          t={{
            loading: {
              es: t.loading.es.value,
              en: t.loading.en.value,
              de: t.loading.de.value,
            },
            allCategories: {
              es: t.allCategories.es.value,
              en: t.allCategories.en.value,
              de: t.allCategories.de.value,
            },
          }}
          lang={lang}
        />

        {!loading && (
          <ProductList
            products={filteredProducts}
            locale={locale}
            lang={lang}
          />
        )}
      </div>
      <Footer />
    </main>
  );
}
