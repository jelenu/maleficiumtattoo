// 'use client'; // remove to allow server-side metadata
import AboutStudioSection from "@/components/sections/AboutStudioSection";
import StylesSection from "@/components/sections/StylesSection";
import MapSection from "@/components/sections/MapSection";
import type { Metadata } from "next";
import { getLang, tr } from "@/utils/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = getLang(locale);
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://maleficiumtattoo.com";
  const pathname = `/${lang}/studio`;
  const title = tr(lang, {
    en: "Studio – Maleficium Tattoo",
    de: "Studio – Maleficium Tattoo",
    es: "Estudio – Maleficium Tattoo",
  });
  const description = tr(lang, {
    en: "Discover our studio, approach, and where to find us.",
    de: "Erfahre mehr über unser Studio, unsere Arbeitsweise und den Standort.",
    es: "Descubre nuestro estudio, nuestra forma de trabajar y dónde encontrarnos.",
  });

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${pathname}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${pathname}`,
      siteName: "Maleficium Tattoo",
      images: [`${SITE_URL}/images/mf.png`],
      type: "website",
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/mf.png`],
    },
  };
}

export default function StudioPage() {
  return (
    <>
      <main
        id="studioSnap"
        className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        {/* About Studio */}
        <section className="min-h-screen snap-start">
          <AboutStudioSection />
        </section>
        {/* Styles */}
        <section className="min-h-screen snap-start">
          <StylesSection />
        </section>
        {/* Map */}
        <section className="min-h-screen snap-start">
          <MapSection />
        </section>
      </main>
      <style jsx global>{`
        /* Hide scrollbar (WebKit) only on this page container */
        #studioSnap::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      `}</style>
    </>
  );
}
