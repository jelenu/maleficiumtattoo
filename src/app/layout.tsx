
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maleficium Tattoo",
  description: "Professional tattoo studio - Where art meets skin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
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
          strategy="beforeInteractive"
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
