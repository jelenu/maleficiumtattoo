"use client";

import { useParams } from "next/navigation";
import { getLang } from "@/utils/i18n";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";
import { useState } from "react";
import ProductList from "./ProductList";
import { useIntlayer } from "react-intlayer";
import CategorySelector from "./CategorySelector";
import { useMerchData } from "./hooks/useMerchData";



export default function MerchPage() {
  const t = useIntlayer("merch-page");
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";

  const getLocalizedText = (value: unknown): string => {
    if (typeof value === "string") return value;
    if (value && typeof value === "object" && "value" in value) {
      return String((value as { value?: unknown }).value ?? "");
    }
    return String(value ?? "");
  };

  const { products, loading, categories, catLoading } = useMerchData(lang);
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
        <div className="text-center mb-6 space-y-4">
          {Array.isArray(t.description[lang]) ? (
            t.description[lang].map((paragraph, index) => {
              const paragraphText = getLocalizedText(paragraph);

              if (index !== 2) {
                return (
                  <Text key={index} className="block">
                    {paragraphText}
                  </Text>
                );
              }

              const linkLabel = getLocalizedText(t.instagram[lang]);
              const parts = paragraphText.split(linkLabel);

              return (
                <Text key={index} className="block">
                  {parts[0]}
                  <a
                    href="https://www.instagram.com/maleficium.tattoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:text-zinc-300 transition-colors underline"
                  >
                    {linkLabel}
                  </a>
                  {parts.slice(1).join(linkLabel)}
                </Text>
              );
            })
          ) : (
            <>
              <Text className="inline">
                {getLocalizedText(t.description[lang])}
              </Text>
              <a
                href="https://www.instagram.com/maleficium.tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-bold hover:text-zinc-300 transition-colors underline"
              >
                {getLocalizedText(t.instagram[lang])}
              </a>
              <Text className="inline">.</Text>
            </>
          )}
        </div>

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

        {loading && <Text className="text-zinc-400">{t.loading[lang]}</Text>}

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