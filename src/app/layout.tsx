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
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-black text-white`}
      >
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "91aa3a1a94d648bdbd6eeaa032cd5b46"}'
          strategy="afterInteractive"
        />      </body>
    </html>
  );
}