
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
        {/* Google Consent Mode v2 - Default consent */}
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
          id="ookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="518527e6-ee12-4f0d-89c6-cca6f68786c5"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />

        {children}

        {/* Cloudflare Insights */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "91aa3a1a94d648bdbd6eeaa032cd5b46"}'
          strategy="afterInteractive"
        />

        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-EYR45T8C3Z" />
      </body>
    </html>
  );
}
