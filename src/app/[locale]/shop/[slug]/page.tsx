"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Text from "@/components/ui/basics/Text";
import Image from "next/image";
import { Footer } from "@/components/layout";
import { getLang } from "@/utils/i18n";

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

export default function ProductPage() {
  const { slug, locale } = useParams<{ slug: string; locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

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
        .eq("slug", slug)
        .eq("product_translations.lang", lang)
        .single();

      if (error) {
        setLoading(false);
        setProduct(null);
        return;
      }
      if (active && data) {
        setProduct({
          id: data.id,
          slug: data.slug,
          price: data.price,
          image_url: data.image_url,
          category_id: data.category_id,
          created_at: data.created_at,
          published_at: data.published_at,
          title: data.product_translations?.[0]?.title || data.slug,
          description: data.product_translations?.[0]?.description,
          images: data.product_images || [],
          variants: data.product_variants || [],
        });
        setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [slug, lang]);
  
  // Carousel images: principal + extra images (no duplicados)
  const carouselImages = product
  ? [
      ...(product.image_url ? [product.image_url] : []),
      ...(product.images.map((img) => img.image_url).filter(url => url))
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
        {/* Título */}
        <Text variant="h2" className="mb-6 text-center">
          {product.title}
        </Text>

        {/* Carousel o imagen principal */}
        <div className="w-full max-w-lg mx-auto mb-8">
          {carouselImages.length > 1 ? (
            <div className="relative">
              {/* Carousel simple */}
              <Carousel images={carouselImages} alt={product.title} />
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
            <label className="mb-2 font-medium">
              {sizeLabel}
            </label>
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

// Carousel simple para imágenes
function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;
  return (
    <div>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-zinc-900">
        <Image
          src={images[idx]}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="400px"
          unoptimized
        />
      </div>
      {/* Miniaturas debajo del carousel */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`relative w-16 h-16 rounded overflow-hidden border-2 ${
                idx === i ? "border-white" : "border-transparent"
              }`}
              onClick={() => setIdx(i)}
              aria-label={`Select image ${i + 1}`}
              tabIndex={0}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${i + 1}`}
                fill
                className={`object-cover object-center transition-all duration-200 ${
                  idx === i ? "" : "brightness-50"
                }`}
                sizes="64px"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
