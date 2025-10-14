import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Inter, Jim_Nightshade } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jimNightshade = Jim_Nightshade({
  variable: "--font-jim-nightshade",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Maleficium Tattoo",
  description: "Professional tattoo studio - Where art meets skin",
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
