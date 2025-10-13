"use client";

import { galleryImages } from "@/data/gallery";
import { Text } from "@/components/ui/basics";
import Gallery from "@/components/gallery/Gallery";
import { Footer } from "@/components/layout";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function AlexisPage() {
  const images = galleryImages.filter((img) => img.artist === "Alexis");

  // Styles filter (same options as Gallery page)
  const [selectedStyle, setSelectedStyle] = useState<"all" | "blackwork" | "realism">("all");
  const styleOptions: Array<{ key: "all" | "blackwork" | "realism"; label: string }> = [
    { key: "all", label: "All Styles" },
    { key: "blackwork", label: "Blackwork" },
    { key: "realism", label: "Realism" },
  ];
  const filteredImages = useMemo(
    () => images.filter((img) => selectedStyle === "all" || img.style === selectedStyle),
    [images, selectedStyle]
  );

  // Button styles (mirroring Gallery page)
  const baseBtn =
    "px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors border";
  const activeBtn = "bg-zinc-200 text-zinc-900 border-zinc-300";
  const inactiveBtn = "bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:bg-zinc-700/70";

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full box-border ">
      {/* About + Social + Portrait */}
      <section className="mb-10 grid grid-cols-1 xl:grid-cols-2 items-stretch">
        {/* Left (text): second on mobile/tablet, first on desktop */}
        <div className="h-full p-5 xl:py-15 xl:pl-20 xl:pr-40 order-2 xl:order-1 border-y-2 xl:border-y-0 xl:border-r-2 xl:border-b-2 bg-black">
          <div className="flex flex-col h-full items-center xl:items-start text-center xl:text-left">
            <Text variant="h2" className="mb-3 text-center xl:text-left">
              About Alexis
            </Text>
            <div className="flex-1 flex items-center justify-center xl:justify-start">
              <Text variant="description" className="text-zinc-300 text-center xl:text-left">
                Artista especializado en realismo y blackwork. Apasionado por
                transformar ideas en piezas únicas que cuentan historias a través de
                la piel. 
                Artista especializado en realismo y blackwork. Apasionado por
                transformar ideas en piezas únicas que cuentan historias a través de
                la piel.
                Artista especializado en realismo y blackwork. Apasionado por
                transformar ideas en piezas únicas que cuentan historias a través de
                la piel.
              </Text>
            </div>
            <div className="mt-4 flex items-center gap-4 justify-center xl:justify-start">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alexis on Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                {/* Instagram icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1.75a1.25 1.25 0 10.001 2.501A1.25 1.25 0 0018 5.75zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alexis on Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                {/* Facebook icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 4.99 3.65 9.14 8.44 9.94v-7.03H7.98v-2.91h2.34V9.41c0-2.31 1.37-3.58 3.47-3.58.99 0 2.03.18 2.03.18v2.23h-1.14c-1.12 0-1.47.69-1.47 1.4v1.68h2.5l-.4 2.91h-2.1V22c4.79-.8 8.44-4.95 8.44-9.94z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right (image): first on mobile/tablet, second on desktop */}
        <div className="relative w-full aspect-[1.91/1] order-1 xl:order-2">
          <Image
            src="/images/alexis.jpg"
            alt="Alexis portrait"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30">
        <Text variant="h1" align="center" className="mb-6">
          Alexis Portfolio
        </Text>

        {/* Styles filter (like Gallery page) */}
        <div className="mb-6 flex flex-col items-center text-center  ">
          <span className="text-sm tracking-wider text-zinc-400 mb-2 uppercase">Styles</span>
          <div className="flex flex-wrap justify-center gap-2">
            {styleOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSelectedStyle(opt.key)}
                className={`${baseBtn} ${selectedStyle === opt.key ? activeBtn : inactiveBtn}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <Gallery images={filteredImages} />
      </div>

      <Footer />
    </main>
  );
}
