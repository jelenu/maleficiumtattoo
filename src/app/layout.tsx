import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    <html lang="en">
      <head>
        {/* Cookiebot — debe cargar antes que todo */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="518527e6-ee12-4f0d-89c6-cca6f68786c5"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />
        {/* Consent Mode v2 — todo bloqueado por defecto hasta que el usuario acepte */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-black text-white`}
      >
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "91aa3a1a94d648bdbd6eeaa032cd5b46"}'
          strategy="afterInteractive"
        />
        {/* Google Analytics — Cookiebot lo activa cuando el usuario acepta */}
        <GoogleAnalytics gaId="G-EYR45T8C3Z" />
      </body>
    </html>
  );
}
