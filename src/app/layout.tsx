
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maleficium Tattoo",
  description: "Professional tattoo studio - Where art meets skin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode v2: consentimiento denegado por defecto */}
        <Script
          id="google-consent-mode"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', false);
          `}
        </Script>

        {/* Cookiebot */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="518527e6-ee12-4f0d-89c6-cca6f68786c5"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
      </head>

      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}

        {/* Cloudflare Web Analytics */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "91aa3a1a94d648bdbd6eeaa032cd5b46"}'
        />

        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-EYR45T8C3Z" />
      </body>
    </html>
  );
}
