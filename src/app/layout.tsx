import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "leaflet/dist/leaflet.css";

type Locale = "de" | "en" | "es";

const metadataByLocale: Record<
  Locale,
  { title: string; description: string }
> = {
  en: {
    title: "Maleficium Tattoo | Professional Studio in St. Pölten",
    description:
      "Discover Maleficium Tattoo in St. Pölten, Austria. Explore unique tattoo styles and meet our experienced artists in a professional creative studio.",
  },
  de: {
    title: "Maleficium Tattoo | Professionelles Studio in St. Pölten",
    description:
      "Entdecke Maleficium Tattoo in St. Pölten, Österreich. Lerne unsere verschiedenen Tattoo-Stile und erfahrenen Tätowierer in unserem professionellen Studio kennen.",
  },
  es: {
    title: "Maleficium Tattoo | Estudio profesional en St. Pölten",
    description:
      "Descubre Maleficium Tattoo en St. Pölten, Austria. Explora diferentes estilos de tatuaje y conoce a nuestros artistas profesionales.",
  },
};

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const cormorant = localFont({
  src: "./fonts/CormorantGaramond-VariableFont_wght.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "300 700",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const currentLocale: Locale = ["de", "en", "es"].includes(locale)
    ? (locale as Locale)
    : "de";

  return {
    ...metadataByLocale[currentLocale],
    alternates: {
      languages: {
        de: "/de",
        en: "/en",
        es: "/es",
        "x-default": "/de",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const currentLocale: Locale = ["de", "en", "es"].includes(locale)
    ? (locale as Locale)
    : "de";

  return (
    <html lang={currentLocale}>
      <head>
        {/* Google Consent Mode v2: denegado por defecto */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            window.gtag = function() {
              window.dataLayer.push(arguments);
            };

            window.gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });

            window.gtag('set', 'ads_data_redaction', true);
            window.gtag('set', 'url_passthrough', false);
          `}
        </Script>
      </head>

      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-black text-white`}
      >
        {/* Cookiebot CMP */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="518527e6-ee12-4f0d-89c6-cca6f68786c5"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />

        {children}

        {/* Cargar Google Analytics solamente con consentimiento estadístico */}
        <Script
          id="google-analytics-consent"
          strategy="afterInteractive"
          data-cookieconsent="ignore"
        >
          {`
            (function () {
              var measurementId = 'G-EYR45T8C3Z';
              var gaLoaded = false;

              function checkConsent() {
                var hasStatisticsConsent =
                  window.Cookiebot &&
                  window.Cookiebot.consent &&
                  window.Cookiebot.consent.statistics === true;

                if (!hasStatisticsConsent) {
                  window.gtag('consent', 'update', {
                    'analytics_storage': 'denied'
                  });
                  return;
                }

                window.gtag('consent', 'update', {
                  'analytics_storage': 'granted'
                });

                if (gaLoaded) return;

                gaLoaded = true;

                window.gtag('js', new Date());
                window.gtag('config', measurementId);

                var script = document.createElement('script');
                script.async = true;
                script.src =
                  'https://www.googletagmanager.com/gtag/js?id=' +
                  measurementId;

                document.head.appendChild(script);
              }

              window.addEventListener(
                'CookiebotOnConsentReady',
                checkConsent
              );

              window.addEventListener(
                'CookiebotOnAccept',
                checkConsent
              );

              window.addEventListener(
                'CookiebotOnDecline',
                checkConsent
              );

              // Comprobar también si ya existía un consentimiento guardado
              if (window.Cookiebot) {
                checkConsent();
              }
            })();
          `}
        </Script>

        {/* Cloudflare Insights */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "91aa3a1a94d648bdbd6eeaa032cd5b46"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
