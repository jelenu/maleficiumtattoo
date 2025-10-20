import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Inter, Jim_Nightshade } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: false,
  display: "swap",
});
const jimNightshade = Jim_Nightshade({
  variable: "--font-jim-nightshade",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://maleficiumtattoo.com";

export const metadata: Metadata = {
  title: "Maleficium Tattoo",
  description: "Professional tattoo studio - Where art meets skin",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Maleficium Tattoo",
    title: "Maleficium Tattoo",
    description: "Professional tattoo studio - Where art meets skin",
    images: [`${SITE_URL}/images/mf.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maleficium Tattoo",
    description: "Professional tattoo studio - Where art meets skin",
    images: [`${SITE_URL}/images/mf.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jimNightshade.variable} antialiased font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
