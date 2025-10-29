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

  // Traducción para "Cantidad"
  const quantityLabel =
    lang === "es" ? "Cantidad" : lang === "de" ? "Menge" : "Quantity";

  // Traducción para "Añadir al carrito"
  const addToCartLabel =
    lang === "es"
      ? "Añadir al carrito"
      : lang === "de"
      ? "In den Warenkorb"
      : "Add to cart";

  // Traducción para "Añadido al carrito"
  const addedMsgLabel =
    lang === "es"
      ? "Producto añadido al carrito"
      : lang === "de"
      ? "Produkt zum Warenkorb hinzugefügt"
      : "Product added to cart";

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
    setAddedMsg(addedMsgLabel);
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
      <div className="min-h-screen max-w-5xl mx-auto px-6 sm:px-20 py-4 xl:py-20">
        {/* Ir atrás */}
        <div className="mb-4">
          <Link
            href={`/${lang}/shop`}
            className="text-zinc-200 px-3 rounded hover:text-white transition no-underline"
          >
            ←{" "}
            {lang === "es"
              ? "Volver a la tienda"
              : lang === "de"
              ? "Zurück zum Shop"
              : "Back to shop"}
          </Link>
        </div>

        {/* Layout móvil/tablet */}
        <div className="block xl:hidden max-w-xl mx-auto flex-col items-center justify-center">
          <div className="flex flex-col gap-0 items-center w-full">
            {/* Título y precio arriba */}
            <div className="w-full mb-0">
              <div className="flex justify-between items-center mb-4">
                <Text variant="h1" className="text-left">
                  {product.title}
                </Text>
                {product.price !== undefined && (
                  <Text variant="h3" className="text-white font-bold text-lg text-right ml-4">
                    {product.price}€
                  </Text>
                )}
              </div>
            </div>
            <div className="w-full flex justify-center px-4  rounded-xl">
              {carouselImages.length > 1 ? (
                <div className="relative w-full max-w-[500px]">
                  <CarouselShop images={carouselImages} alt={product.title} />
                </div>
              ) : (
                <div className="relative w-full  rounded-xl overflow-hidden">
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
            <div className="w-full flex flex-col items-center  rounded-xl py-6 px-4">
              <Text className="mb-1 text-center">
                {product.description}
              </Text>
              {product.variants.length > 0 && (
                <div className=" flex flex-col items-center w-full">
                  <label className="mb-2 font-medium">{sizeLabel}</label>
                  <div className="flex gap-2 mb-4 flex-wrap justify-center">
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
                  <div className="flex items-center gap-2 mb-6 justify-center">
                    <label htmlFor="quantity" className="font-medium">
                      {quantityLabel}:
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
                  <Button
                    type="button"
                    disabled={
                      !selectedSize ||
                      !quantity ||
                      isNaN(Number(quantity)) ||
                      Number(quantity) < 1
                    }
                    onClick={handleAddToCart}
                    className="w-full max-w-xs"
                  >
                    {addToCartLabel}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Layout desktop */}
        <div className="hidden xl:flex xl:flex-row xl:gap-12 items-start">
          <div className="w-1/2 flex justify-center rounded-xl xl:rounded-r-none xl:rounded-l-xl">
            {carouselImages.length > 1 ? (
              <div className="relative w-full px-4 ">
                <CarouselShop images={carouselImages} alt={product.title} />
              </div>
            ) : (
              <div className="relative w-full  rounded-xl overflow-hidden">
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
          <div className="w-1/2 flex flex-col  h-full xl:h-[32rem] items-start rounded-xl xl:rounded-l-none xl:rounded-r-xl  px-6">
            <div className="w-full">
              <Text variant="h1" className="mb-4 text-left">
                {product.title}
              </Text>
              {product.price !== undefined && (
                <Text variant="h3" className="text-white font-bold text-lg mb-2 text-left">
                  {product.price}€
                </Text>
              )}
              <Text className="mb-4 text-left">
                {product.description}
              </Text>
            </div>
            {product.variants.length > 0 && (
              <div className="mt-4 flex flex-col items-start w-full">
                <label className="mb-2 font-medium">{sizeLabel}</label>
                <div className="flex gap-2 mb-8 flex-wrap justify-start">
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
                <div className="flex items-center gap-2 mb-6 justify-start">
                  <label htmlFor="quantity" className="font-medium">
                    {quantityLabel}:
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
                <Button
                  type="button"
                  disabled={
                    !selectedSize ||
                    !quantity ||
                    isNaN(Number(quantity)) ||
                    Number(quantity) < 1
                  }
                  onClick={handleAddToCart}
                  className="w-full max-w-xs mt-auto"
                >
                  {addToCartLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
