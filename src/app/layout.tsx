import type { Metadata } from "next";
import { Inter, Jim_Nightshade } from "next/font/google";
import Header from '@/components/Header';
import LoadingScreen from '@/components/LoadingScreen';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jimNightshade.variable} antialiased font-sans`}
      >
        <LoadingScreen />
        <Header />
        {children}
      </body>
    </html>
  );
}
