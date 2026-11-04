"use client";

import { galleryImages } from "@/data/gallery";
import { Text } from "@/components/ui/basics";
import Gallery from "@/components/ui/gallery/Gallery";
import { Footer } from "@/components/layout";
import Image from "next/image";
import { useIntlayer } from "react-intlayer";

export default function ArnauPage() {
  const t = useIntlayer("arnau-page");

  const images = galleryImages.filter(
    (img) => img.artist === "Arnau"
  );

  return (
    <main className="p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full box-border">

      {/* MOBILE: hasta 767px */}
      <section className="mb-10 flex flex-col md:hidden">
        <div className="bg-black border-y-2 p-7">
          <div className="flex flex-col items-center text-center">
            <Text variant="h2" className="mb-3">
              {t.about.value}
            </Text>

            <div className="flex-1 flex items-center justify-center">
              <Text
                variant="description"
                className="text-zinc-300 text-center"
              >
                {t.description.value}
              </Text>
            </div>

            <div className="mt-4 flex items-center gap-4 justify-center xl:justify-start">
              <a
                href="https://instagram.com/Arnau_kurtis_tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.socialInstagramLabel.value}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1.75a1.25 1.25 0 10.001 2.501A1.25 1.25 0 0018 5.75zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[500px]">
          <Image
            src="/images/tattoo/Realism/scaled_WhatsApp Image 2026-10-29 at 11.00.13.webp"
            alt="Arnau portrait"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* TABLET: 768px - 1279px */}
      <section className="mb-10 hidden md:flex xl:hidden flex-col items-center">
        <div className="w-full bg-black border-y-2 p-10">
          <div className="flex flex-col items-center text-center">
            <Text variant="h2" className="mb-3">
              {t.about.value}
            </Text>

            <div className="flex-1 flex items-center justify-center">
              <Text
                variant="description"
                className="text-zinc-300 text-center"
              >
                {t.description.value}
              </Text>
            </div>

            <div className="mt-4 flex items-center gap-4 justify-center xl:justify-start">
              <a
                href="https://instagram.com/Arnau_kurtis_tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.socialInstagramLabel.value}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1.75a1.25 1.25 0 10.001 2.501A1.25 1.25 0 0018 5.75zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-[60%] aspect-[4/5] mx-auto mt-8 shrink-0">
          <Image
            src="/images/tattoo/Realism/scaled_WhatsApp Image 2026-10-29 at 11.00.13.webp"
            alt="Arnau portrait"
            fill
            sizes="70vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* DESKTOP: desde 1280px */}
      <section className="mb-10 hidden xl:grid mx-auto w-full max-w-7xl grid-cols-[6fr_2fr] items-stretch">
        <div className="h-full p-7 xl:py-15 xl:pl-20 xl:pr-40 border-b-2 border-l-2 border-r-2 bg-black">
          <div className="flex flex-col h-full items-start text-left">
            <Text variant="h2" className="mb-3 text-left">
              {t.about.value}
            </Text>

            <div className="flex-1 flex items-center justify-start">
              <Text
                variant="description"
                className="text-zinc-300 text-left"
              >
                {t.description.value}
              </Text>
            </div>

            <div className="mt-4 flex items-center gap-4 justify-center xl:justify-start">
              <a
                href="https://instagram.com/Arnau_kurtis_tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.socialInstagramLabel.value}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1.75a1.25 1.25 0 10.001 2.501A1.25 1.25 0 0018 5.75zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[500px]">
          <Image
            src="/images/tattoo/Realism/scaled_WhatsApp Image 2026-10-29 at 11.00.13.webp"
            alt="Arnau portrait"
            fill
            sizes="25vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* PORTFOLIO: sin filtros */}
      <div className="py-10 px-10 sm:px-6 md:px-8 lg:px-12 xl:px-30">
        <Text
          variant="h1"
          align="center"
          className="mb-6"
        >
          {t.portfolio.value}
        </Text>

        <Gallery images={images} />
      </div>

      <Footer />
    </main>
  );
}
