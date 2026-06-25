import { type NextPageIntlayer } from "next-intlayer";
import {
  HeroSection,
} from "@/components/sections";

import CookieConsent from "@/components/features/CookieConsent";
import ForceSectionSnap from "@/components/ui/ForceSectionSnap";
import dynamic from "next/dynamic";

const AboutStudio = dynamic(() => import("@/components/sections/AboutStudioSection"), {
  ssr: true,
});

const Styles = dynamic(() => import("@/components/sections/StylesSection"), {
  ssr: true,
});

const Carousel = dynamic(() => import("@/components/sections/CarouselSection"), {
  ssr: true,
});

const Artists = dynamic(() => import("@/components/sections/ArtistsSection"), {
  ssr: true,
});

const Contact = dynamic(() => import("@/components/sections/ContactSection"), {
  ssr: true,
});

const Map = dynamic(() => import("@/components/sections/MapSection"), {
  ssr: true,
});

const Page: NextPageIntlayer = async () => {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      <ForceSectionSnap />

      {/* 🔥 SOLO LO MÁS IMPORTANTE ARRIBA DEL FOLD */}
      <HeroSection />

      {/* 👇 resto lazy pero SSR-friendly */}
      <AboutStudio />
      <Styles />
      <Carousel />
      <Artists />
      <Contact />
      <Map />

      <div className="pt-[4rem]" />

      <CookieConsent />
    </main>
  );
};

export default Page;