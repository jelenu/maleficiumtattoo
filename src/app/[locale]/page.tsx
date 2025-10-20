import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import {
    HeroSection,
    AboutStudioSection,
    StylesSection,
    CarouselSection,
    ArtistsSection,
    ContactSection,
    MapSection,
} from "@/components/sections";
import CookieConsent from "@/components/features/CookieConsent";
import type { Metadata } from "next";
import { getLang, tr } from "@/utils/i18n";

const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;
    
    return (
        <IntlayerClientProvider locale={locale}>
            <IntlayerServerProvider locale={locale}>
                <main className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
                    <HeroSection />
                    <AboutStudioSection />
                    <StylesSection />
                    <CarouselSection />
                    <ArtistsSection />
                    <ContactSection />
                    <MapSection />
                    <div className="pt-[4rem]" />
                    {/* Cookie consent banner (fixed, renders once when needed) */}
      <CookieConsent />
                </main>
            </IntlayerServerProvider>
        </IntlayerClientProvider>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = getLang(locale);
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://maleficiumtattoo.com";
  const pathname = `/${lang}`;
  const title = tr(lang, {
    en: "Maleficium Tattoo Studio",
    de: "Maleficium Tattoo Studio",
    es: "Maleficium Tattoo Studio",
  });
  const description = tr(lang, {
    en: "Exclusive tattoo studio. Blackwork and realism. Quality, safety, and custom art.",
    de: "Exklusives Tattoostudio. Blackwork und Realismus. Qualität, Sicherheit und individuelle Kunst.",
    es: "Estudio de tatuajes exclusivo. Blackwork y realismo. Calidad, seguridad y arte personalizado.",
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

export default Page;