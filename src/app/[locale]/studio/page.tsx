"use client";

import Image from "next/image";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";
import { useIntlayer } from "next-intlayer";

export default function StudioPage() {
  const t = useIntlayer("studio-page");

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-6 px-0 xl:px-10">
        <div className="relative h-[40vh] sm:h-[45vh] md:h-[48vh] xl:h-[60vh] min-h-[240px] xl:min-h-[420px] w-full max-w-none xl:max-w-7xl mx-auto overflow-hidden rounded-none xl:rounded-2xl">
          <Image
            src="/images/bg.jpg"
            alt="Nuestro estudio"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <Text variant="h1" align="center" className="text-white">
              Nuestro estudio
            </Text>
          </div>
        </div>
      </section>

      {/* Texto */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-white space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <Text key={index} variant="description">
              {paragraph.value}
            </Text>
          ))}
        </div>
      </section>

      {/* Galería */}
<section className="pb-16 px-6 md:px-10">
  <div className="max-w-6xl mx-auto space-y-6">

    {/* ================= MOBILE (sin cambios) ================= */}
    <div className="md:hidden space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[260px] overflow-hidden rounded-xl md:col-span-2">
          <Image src="/images/bg.jpg" alt="Estudio principal" fill className="object-cover" />
        </div>

        <div className="relative h-[260px] overflow-hidden rounded-xl">
          <Image src="/images/alexis.jpg" alt="Detalle estudio" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[260px] overflow-hidden rounded-xl">
          <Image src="/images/tattoo.jpg" alt="Tattoo" fill className="object-cover" />
        </div>

        <div className="relative h-[260px] overflow-hidden rounded-xl md:col-span-2">
          <Image src="/images/alexishorizontal.jpg" alt="Zona de trabajo" fill className="object-cover" />
        </div>
      </div>

      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
        <Image src="/images/alexishorizontal21.jpg" alt="Vista panorámica del estudio" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/alexis.jpg" alt="Detalle 1" fill className="object-cover" />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/bg.jpg" alt="Detalle 2" fill className="object-cover" />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/tattoo.jpg" alt="Detalle 3" fill className="object-cover" />
        </div>
      </div>
    </div>

    {/* ================= TABLET (NUEVO ORDEN) ================= */}
    <div className="hidden md:block lg:hidden space-y-6">

      {/* grande */}
      <div className="relative h-[420px] overflow-hidden rounded-xl">
        <Image src="/images/bg.jpg" alt="Estudio principal" fill className="object-cover" />
      </div>

      {/* dos pequeñas */}
      <div className="grid grid-cols-2 gap-6">
        <div className="relative h-[260px] overflow-hidden rounded-xl">
          <Image src="/images/alexis.jpg" alt="Detalle estudio" fill className="object-cover" />
        </div>

        <div className="relative h-[260px] overflow-hidden rounded-xl">
          <Image src="/images/tattoo.jpg" alt="Tattoo" fill className="object-cover" />
        </div>
      </div>

      {/* siguiente grande */}
      <div className="relative h-[420px] overflow-hidden rounded-xl">
        <Image src="/images/alexishorizontal.jpg" alt="Zona de trabajo" fill className="object-cover" />
      </div>

      {/* panorámica */}
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
        <Image src="/images/alexishorizontal21.jpg" alt="Vista panorámica del estudio" fill className="object-cover" />
      </div>

      {/* tres pequeñas (sin cambios) */}
      <div className="grid grid-cols-3 gap-6">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/alexis.jpg" alt="Detalle 1" fill className="object-cover" />
        </div>

        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/bg.jpg" alt="Detalle 2" fill className="object-cover" />
        </div>

        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/tattoo.jpg" alt="Detalle 3" fill className="object-cover" />
        </div>
      </div>
    </div>

    {/* ================= DESKTOP (ORIGINAL) ================= */}
    <div className="hidden lg:block space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[420px] md:col-span-2 overflow-hidden rounded-xl">
          <Image src="/images/bg.jpg" alt="Estudio principal" fill className="object-cover" />
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-xl">
          <Image src="/images/alexis.jpg" alt="Detalle estudio" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[420px] overflow-hidden rounded-xl">
          <Image src="/images/tattoo.jpg" alt="Tattoo" fill className="object-cover" />
        </div>

        <div className="relative h-[420px] md:col-span-2 overflow-hidden rounded-xl">
          <Image src="/images/alexishorizontal.jpg" alt="Zona de trabajo" fill className="object-cover" />
        </div>
      </div>

      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
        <Image src="/images/alexishorizontal21.jpg" alt="Vista panorámica del estudio" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/alexis.jpg" alt="Detalle 1" fill className="object-cover" />
        </div>

        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/bg.jpg" alt="Detalle 2" fill className="object-cover" />
        </div>

        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src="/images/tattoo.jpg" alt="Detalle 3" fill className="object-cover" />
        </div>
      </div>
    </div>

  </div>
</section>

      <Footer />
    </main>
  );
}
