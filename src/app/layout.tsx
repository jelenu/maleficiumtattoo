
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "leaflet/dist/leaflet.css";
import LocalBusinessSchema from "../components/seo/LocalBusinesSchema";

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

export const metadata: Metadata = {
  title: "Maleficium Tattoo | Professional Studio in St. Pölten, Austria",
  description:
    "Discover Maleficium Tattoo in St. Pölten, Austria. Explore unique tattoo styles and meet our experienced artists in a professional creative studio.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-black text-white`}
      >
        {/* Google Consent Mode v2: default denied */}
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
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });

            window.gtag('set', 'ads_data_redaction', true);
            window.gtag('set', 'url_passthrough', false);
          `}
        </Script>

        {/* Cookiebot CMP */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="518527e6-ee12-4f0d-89c6-cca6f68786c5"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />

        <LocalBusinessSchema />

        {children}

        {/* Google Analytics: only after statistics consent */}
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
                  window.Cookiebot?.consent?.statistics === true;

                if (!hasStatisticsConsent) {
                  window.gtag('consent', 'update', {
                    analytics_storage: 'denied'
                  });
                  return;
                }

                window.gtag('consent', 'update', {
                  analytics_storage: 'granted'
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

              if (window.Cookiebot) {
                checkConsent();
              }
            })();
          `}
        </Script>

      </body>
    </html>
  );
}
