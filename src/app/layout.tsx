import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  title: "Maleficium Tattoo",
  description: "Professional tattoo studio - Where art meets skin",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return children;
}