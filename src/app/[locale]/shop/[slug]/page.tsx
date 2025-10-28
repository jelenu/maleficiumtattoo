"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Footer } from "@/components/layout";
import { getLang } from "@/utils/i18n";
import Link from "next/link";
import CarouselShop from "./CarouselShop";
import { useShopData } from "../hooks/useShopData";
import Text from "@/components/ui/basics/Text";
import Image from "next/image";
import { Button } from "@/components/ui";

export default function ProductPage() {
  const { slug, locale } = useParams<{ slug: string; locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";
  const { product, loading } = useShopData(lang, slug);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<string>("1");
  const [addedMsg, setAddedMsg] = useState<string | null>(null);

  useEffect(() => {
    if (addedMsg) {
      const timer = setTimeout(() => setAddedMsg(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [addedMsg]);

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

  // Añadir al carrito y guardar en localStorage
  const handleAddToCart = () => {
    if (!product || !selectedSize) return;
    const qty = Math.max(1, Number(quantity) || 1);
    const cartKey = "maleficium_cart";
    const item = {
      productId: product.id,
      variantId: selectedSize,
      quantity: qty,
    };
    // Leer carrito actual
    const currentCart: typeof item[] =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem(cartKey) || "[]")
        : [];
    // Buscar si ya existe el mismo producto/variante
    const idx = currentCart.findIndex(
      (i) => i.productId === item.productId && i.variantId === item.variantId
    );
    if (idx >= 0) {
      // Sumar cantidad
      currentCart[idx].quantity += item.quantity;
    } else {
      currentCart.push(item);
    }
    localStorage.setItem(cartKey, JSON.stringify(currentCart));
    setAddedMsg("Producto añadido al carrito");
      window.dispatchEvent(new Event("cartUpdated"));

  };

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
      {/* Popup mensaje añadido */}
      {addedMsg && (
        <div
          className="fixed top-30 left-1/2 z-50 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded shadow-lg font-semibold text-center transition-opacity duration-300"
          style={{ minWidth: "220px" }}
        >
          {addedMsg}
        </div>
      )}
      <div className="min-h-screen max-w-6xl mx-auto px-4 py-10">
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

        {/* Layout principal: Carousel izquierda, info derecha */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Carousel a la izquierda */}
          <div className="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 mb-8 md:mb-0">
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

          {/* Info a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            {/* Título */}
            <Text variant="h2" className="mb-4 text-center md:text-left">
              {product.title}
            </Text>

            {/* Descripción */}
            <Text className="mb-4 text-center md:text-left">
              {product.description}
            </Text>

            {/* Precio principal */}
            {product.price !== undefined && (
              <Text className="text-white font-bold text-lg mb-4 text-center md:text-left">
                {lang === "es" ? "Precio" : lang === "de" ? "Preis" : "Price"}:{" "}
                {product.price}€
              </Text>
            )}

            {/* Variantes como botones de tallas */}
            {product.variants.length > 0 && (
              <div className="mt-4 flex flex-col items-center md:items-start">
                <label className="mb-2 font-medium">{sizeLabel}</label>
                <div className="flex gap-2 mb-4">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      type="button"
                      className={`px-4 py-2 rounded border transition-colors
                        ${selectedSize === variant.id
                          ? "border-black text-black bg-white "
                          : "border-zinc-400 text-zinc-200 bg-zinc-900"}
                        `}
                      onClick={() => setSelectedSize(variant.id)}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
                {/* Selector de cantidad */}
                <div className="flex items-center gap-2 mb-4">
                  <label htmlFor="quantity" className="font-medium">
                    Cantidad:
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-16 px-2 py-1 rounded border bg-zinc-900 text-white"
                  />
                </div>
                {/* Botón añadir al carrito */}
                <Button
                  type="button"
                  disabled={
                    !selectedSize ||
                    !quantity ||
                    isNaN(Number(quantity)) ||
                    Number(quantity) < 1
                  }
                  onClick={handleAddToCart}
                >
                  Añadir al carrito
                </Button>
                {/* Elimina el mensaje inline */}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
