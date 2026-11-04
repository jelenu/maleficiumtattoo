"use client";

import Image from "next/image";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";
import { useIntlayer } from "next-intlayer";

export default function StudioPage() {
  const t = useIntlayer("studio-page");

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="py-6 px-0 xl:px-10">
        <div className="relative h-[40vh] sm:h-[45vh] md:h-[48vh] xl:h-[60vh] min-h-[240px] xl:min-h-[420px] w-full max-w-none xl:max-w-7xl mx-auto overflow-hidden rounded-none xl:rounded-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/hero-video.webm" type="video/webm" />
          </video>

          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <Text variant="h1" align="center" className="text-white">
              {t.title.value}
            </Text>
          </div>
        </div>
      </section>

      {/* TEXTO */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-white space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <Text key={index} variant="description">
              {paragraph.value}
            </Text>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* ================= MOBILE ================= */}
          <div className="md:hidden space-y-6">

            {/* Primera imagen */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/Studio_1_H.webp"
                alt="Estudio principal"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Segunda imagen */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/Studio_5.webp"
                alt="Detalle estudio"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Panorámica */}
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/Studio_2_H.webp"
                alt="Vista panorámica del estudio"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Tres imágenes cuadradas */}
            <div className="grid grid-cols-1 gap-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_4.webp"
                  alt="Detalle 1"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_1.webp"
                  alt="Detalle 2"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_6.webp"
                  alt="Detalle 3"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= TABLET ================= */}
          <div className="hidden md:block lg:hidden space-y-6">

            {/* Dos imágenes grandes */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_1_H.webp"
                  alt="Estudio principal"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_5.webp"
                  alt="Detalle estudio"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Panorámica */}
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/Studio_2_H.webp"
                alt="Vista panorámica del estudio"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Tres imágenes cuadradas */}
            <div className="grid grid-cols-3 gap-6">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_4.webp"
                  alt="Detalle 1"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_1.webp"
                  alt="Detalle 2"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_6.webp"
                  alt="Detalle 3"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:block space-y-6">

            {/* Primera fila */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-[420px] md:col-span-2 overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_1_H.webp"
                  alt="Estudio principal"
                  fill
                  sizes="66vw"
                  className="object-cover"
                />
              </div>

              <div className="relative h-[420px] overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_5.webp"
                  alt="Detalle estudio"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Panorámica */}
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/Studio_2_H.webp"
                alt="Vista panorámica del estudio"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Tres imágenes cuadradas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_4.webp"
                  alt="Detalle 1"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_1.webp"
                  alt="Detalle 2"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/Studio_6.webp"
                  alt="Detalle 3"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
