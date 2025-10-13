'use client';

import AboutStudioSection from "@/components/sections/AboutStudioSection";
import StylesSection from "@/components/sections/StylesSection";
import MapSection from "@/components/sections/MapSection";

export default function StudioPage() {
  return (
    <>
      <main
        id="studioSnap"
        className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        {/* About Studio */}
        <section className="min-h-screen snap-start">
          <AboutStudioSection />
        </section>
        {/* Styles */}
        <section className="min-h-screen snap-start">
          <StylesSection />
        </section>
        {/* Map */}
        <section className="min-h-screen snap-start">
          <MapSection />
        </section>
      </main>
      <style jsx global>{`
        /* Hide scrollbar (WebKit) only on this page container */
        #studioSnap::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      `}</style>
    </>
  );
}
