"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useShopData } from "../hooks/useShopData";
import { useParams } from "next/navigation";
import { getLang } from "@/utils/i18n";

type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
};

export default function CartPage() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale) as "es" | "en" | "de";

  const [cart, setCart] = useState<CartItem[]>([]);
  const [editQty, setEditQty] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const { products, loading } = useShopData(lang);

  // Traducciones
  const t = {
    title: {
      es: "Carrito",
      en: "Cart",
      de: "Warenkorb",
    },
    loading: {
      es: "Cargando productos...",
      en: "Loading products...",
      de: "Produkte werden geladen...",
    },
    empty: {
      es: "Tu carrito está vacío.",
      en: "Your cart is empty.",
      de: "Ihr Warenkorb ist leer.",
    },
    size: {
      es: "Talla",
      en: "Size",
      de: "Größe",
    },
    total: {
      es: "Total:",
      en: "Total:",
      de: "Gesamt:",
    },
    remove: {
      es: "Eliminar",
      en: "Remove",
      de: "Entfernen",
    },
    checkout: {
      es: "Finalizar compra",
      en: "Checkout",
      de: "Zur Kasse",
    },
    redirecting: {
      es: "Redirigiendo...",
      en: "Redirecting...",
      de: "Weiterleitung...",
    },
    continueShopping: {
      es: "Seguir comprando",
      en: "Continue shopping",
      de: "Weiter einkaufen",
    },
    error: {
      es: "Error al crear la sesión de pago",
      en: "Error creating checkout session",
      de: "Fehler beim Erstellen der Zahlungssitzung",
    },
    noUrl: {
      es: "No se recibió la URL del pago.",
      en: "No payment URL received.",
      de: "Keine Zahlungs-URL erhalten.",
    }
  };

  // 🔹 Cargar carrito desde localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("maleficium_cart");
      if (stored) setCart(JSON.parse(stored));
      setIsLoaded(true);
    }
  }, []);

  // 🔹 Guardar carrito actualizado
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem("maleficium_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  // 🔹 Sincronizar campos de cantidad
  useEffect(() => {
    const qtyObj: Record<string, string> = {};
    cart.forEach((item) => {
      qtyObj[item.productId + "-" + item.variantId] = String(item.quantity);
    });
    setEditQty(qtyObj);
  }, [cart]);

  const handleRemove = (productId: string, variantId: string) => {
    setCart(
      cart.filter(
        (item) => !(item.productId === productId && item.variantId === variantId)
      )
    );
  };

  const handleQuantity = (productId: string, variantId: string, qty: number) => {
    setCart(
      cart.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  // 🔹 Enriquecer productos con detalles de Supabase
  const cartWithDetails = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    const variant = product?.variants.find((v) => v.id === item.variantId);
    return {
      ...item,
      title: product?.title ?? item.productId,
      image_url: product?.image_url ?? "/images/maleficiumLogo.png",
      price: variant?.price ?? product?.price ?? 0,
      variantName: variant?.name ?? item.variantId,
    };
  });

  const total = cartWithDetails.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🔹 Función para crear la sesión de Stripe Checkout
  const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      setCheckoutError(null);

      const lineItems = cartWithDetails.map((item) => ({
        name: `${item.title} ${item.variantName}`,
        image: item.image_url,
        unit_amount: Math.round(item.price * 100),
        quantity: item.quantity,
      }));

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: lineItems }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setCheckoutError(errorData.error || "Error al crear la sesión de pago");
        setIsProcessing(false);
        return;
      }

      const data: { url?: string; error?: string } = await res.json();
      if (data.url) {
        window.location.href = data.url; // redirige a Stripe Checkout
      } else {
        setCheckoutError(data.error || "No se recibió la URL del pago.");
        setIsProcessing(false);
      }
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "Unexpected error");
      setIsProcessing(false);
    }
  };

  return (
    <main className="pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full min-h-screen box-border">
      <div className="max-w-3xl mx-auto px-4 py-10 min-h-screen">
        <Text variant="h2" className="mb-8 text-center">
          {t.title[lang]}
        </Text>
        {loading ? (
          <Text className="text-center mb-8">{t.loading[lang]}</Text>
        ) : cart.length === 0 ? (
          <Text className="text-center mb-8">{t.empty[lang]}</Text>
        ) : (
          <div className="flex flex-col gap-6">
            {cartWithDetails.map((item) => {
              const key = item.productId + "-" + item.variantId;
              return (
                <div
                  key={key}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <Image
                    src={item.image_url || "/images/maleficiumLogo.png"}
                    alt={item.title}
                    className="w-20 object-cover rounded"
                    width={80}
                    height={80}
                  />
                  <div className="flex-1">
                    <Text variant="h3">{item.title}</Text>
                    <Text className="text-white text-sm">
                      {t.size[lang]}: {item.variantName}
                    </Text>
                    <Text className="text-white font-bold mt-2">
                      {item.price}€
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={editQty[key] ?? String(item.quantity)}
                      onChange={(e) =>
                        setEditQty({
                          ...editQty,
                          [key]: e.target.value,
                        })
                      }
                      onBlur={() => {
                        const val = Math.max(1, Number(editQty[key]) || 1);
                        handleQuantity(item.productId, item.variantId, val);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          const val = Math.max(1, Number(editQty[key]) || 1);
                          handleQuantity(item.productId, item.variantId, val);
                          (e.target as HTMLInputElement).blur();
                        }
                      }}
                      className="w-12 px-2 py-1 rounded border bg-zinc-900 text-white"
                    />
                    <button
                      onClick={() => handleRemove(item.productId, item.variantId)}
                      className="text-red-400 hover:text-red-600 px-2"
                      aria-label={t.remove[lang]}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between items-center mt-6">
              <Text className="font-bold text-lg">{t.total[lang]}</Text>
              <Text className="text-white font-bold text-lg">
                {total.toFixed(2)}€
              </Text>
            </div>

            {checkoutError && (
              <Text className="text-center mb-4 text-red-500">
                {checkoutError}
              </Text>
            )}

            <Button
              className="mt-4"
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? t.redirecting[lang] : t.checkout[lang]}
            </Button>

            <Link
              href="/shop"
              className="mt-4 text-zinc-300 hover:text-white underline text-center"
            >
              {t.continueShopping[lang]}
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
