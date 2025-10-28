"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useShopData } from "../hooks/useShopData";

type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [editQty, setEditQty] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { products, loading } = useShopData("es");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("maleficium_cart");
      if (stored) {
        setCart(JSON.parse(stored));
      }
      setIsLoaded(true);
    }
  }, []);

  // Solo actualiza localStorage si el carrito ya se cargó
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem("maleficium_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

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

  const handleQuantity = (
    productId: string,
    variantId: string,
    qty: number
  ) => {
    setCart(
      cart.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

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

  return (
    <main className="pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full min-h-screen box-border">
      <div className="max-w-3xl mx-auto px-4 py-10 min-h-screen">
        <Text variant="h2" className="mb-8 text-center">
          Carrito
        </Text>
        {loading ? (
          <Text className="text-center mb-8">Cargando productos...</Text>
        ) : cart.length === 0 ? (
          <Text className="text-center mb-8">Tu carrito está vacío.</Text>
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
                      Size: {item.variantName}
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
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between items-center mt-6">
              <Text className="font-bold text-lg">Total:</Text>
              <Text className="text-white font-bold text-lg">
                {total.toFixed(2)}€
              </Text>
            </div>
            <Button className="mt-4">Finalizar compra</Button>
            <Link
              href="/shop"
              className="mt-4 text-zinc-300 hover:text-white underline text-center"
            >
              Seguir comprando
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
