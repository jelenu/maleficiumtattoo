"use client";

import { useParams } from "next/navigation";
import { Footer } from "@/components/layout";
import { getLang } from "@/utils/i18n";
import Link from "next/link";
import CarouselMerch from "./CarouselMerch";
import { useMerchData } from "../hooks/useMerchData";
import Text from "@/components/ui/basics/Text";
import Image from "next/image";

export default function ProductPage() {
  const { slug, locale } = useParams<{ slug: string; locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";
  const { product, loading } = useMerchData(lang, slug);

  // Carousel images: principal + extra images (no duplicados)
  const carouselImages = product
    ? [
        ...(product.image_url ? [product.image_url] : []),
        ...(product.images.map((img) => img.image_url).filter((url) => url)),
      ]
    : [];

  // Traducción para "Tamaño"/"Size"
  
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
            href={`/${lang}/merch`}
            className="text-white-200 px-3 py-1 rounded hover:text-white transition no-underline"
          >
            ←{" "}
            {lang === "es"
              ? "Volver al merch"
              : lang === "de"
              ? "Zurück zum Merch"
              : "Back to merch"}
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
              <CarouselMerch images={carouselImages} alt={product.title} />
            </div>
          ) : (
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white-900">
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
          <Text className="text-white-300 font-bold text-lg mb-4 text-center">
            {lang === "es" ? "Precio" : lang === "de" ? "Preis" : "Price"}:{" "}
            {product.price}€
          </Text>
        )}

        
      </div>
      <Footer />
    </main>
  );
}