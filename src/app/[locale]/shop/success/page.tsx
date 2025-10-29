"use client";

import Link from "next/link";
import { Footer } from "@/components/layout";
import Text from "@/components/ui/basics/Text";
import { useParams } from "next/navigation";
import { getLang } from "@/utils/i18n";
import { useEffect } from "react";

export default function ThankYouPage() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("maleficium_cart");
      window.dispatchEvent(new Event("cartUpdated"));
    }
  }, []);

  const msg =
    lang === "es"
      ? "¡Gracias por tu compra!"
      : lang === "de"
      ? "Danke für Ihren Einkauf!"
      : "Thank you for your purchase!";

  const btn =
    lang === "es"
      ? "Ir al inicio"
      : lang === "de"
      ? "Zur Startseite"
      : "Go to Home";

  return (
    <main className="pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] min-h-screen flex flex-col justify-center text-white">
      <div className="flex flex-col items-center justify-center gap-8 min-h-screen">
        <Text variant="h1" align="center" className="mb-4">
          {msg}
        </Text>
        <Link
          href={`/${lang}`}
          className="px-6 py-3 rounded-md bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors"
        >
          {btn}
        </Link>
      </div>
      <Footer />
    </main>
  );
}
