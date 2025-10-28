"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Footer } from "@/components/layout";
import { getLang } from "@/utils/i18n";
import Link from "next/link";
import CarouselShop from "./CarouselShop";
import { useShopData } from "../hooks/useShopData";
import Text from "@/components/ui/basics/Text";
import Image from "next/image";

export default function ProductPage() {
  const { slug, locale } = useParams<{ slug: string; locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";
  const { product, loading } = useShopData(lang, slug);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Carousel images: principal + extra images (no duplicados)
  const carouselImages = product
    ? [
        ...(product.image_url ? [product.image_url] : []),
        ...(product.images.map((img) => img.image_url).filter((url) => url)),
      ]
    : [];

  // Traducción para "Tamaño"/"Size"
  const sizeLabel =
    lang === "es" ? "Tamaño" : lang === "de" ? "Größe" : "Size";

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Text>Cargando...</Text>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Text>No se encontró el producto.</Text>
      </main>
    );
  }
  return (
    <main className="pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] min-h-screen">
      <div className="min-h-screen max-w-3xl mx-auto px-4 py-10">
        {/* Ir atrás */}
        <div className="mb-4">
          <Link
            href={`/${lang}/shop`}
            className="text-zinc-200 px-3 py-1 rounded hover:text-white transition no-underline"
          >
            ←{" "}
            {lang === "es"
              ? "Volver a la tienda"
              : lang === "de"
              ? "Zurück zum Shop"
              : "Back to shop"}
          </Link>
        </div>

        {/* Título */}
        <Text variant="h2" className="mb-6 text-center">
          {product.title}
        </Text>

        {/* Carousel o imagen principal */}
        <div className="w-full max-w-lg mx-auto mb-8">
          {carouselImages.length > 1 ? (
            <div className="relative">
              <CarouselShop images={carouselImages} alt={product.title} />
            </div>
          ) : (
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-zinc-900">
              {carouselImages[0] && (
                <Image
                  src={carouselImages[0]}
                  alt={product.title}
                  fill
                  className="object-cover object-center"
                  sizes="400px"
                  unoptimized
                />
              )}
            </div>
          )}
        </div>

        {/* Descripción */}
        <Text className="mb-4 text-center">{product.description}</Text>

        {/* Precio principal */}
        {product.price !== undefined && (
          <Text className="text-emerald-300 font-bold text-lg mb-4 text-center">
            {lang === "es" ? "Precio" : lang === "de" ? "Preis" : "Price"}:{" "}
            {product.price}€
          </Text>
        )}

        {/* Variantes como botones de tallas */}
        {product.variants.length > 0 && (
          <div className="mt-4 flex flex-col items-center">
            <label className="mb-2 font-medium">{sizeLabel}</label>
            <div className="flex gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  className={`px-4 py-2 rounded border transition-colors
                    ${selectedSize === variant.id
                      ? "border-white text-white"
                      : "border-zinc-400 text-zinc-200"}
                    bg-zinc-900`}
                  onClick={() => setSelectedSize(variant.id)}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
