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

      {/* Galería 2-2-1 */}
      <section className="pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/alexishorizontal.jpg" alt="Estudio 1" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/alexishorizontal21.jpg" alt="Estudio 2" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/alexis.jpg" alt="Estudio 3" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/tattoo.jpg" alt="Estudio 4" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-xl">
              <Image src="/images/bg.jpg" alt="Estudio 5" fill className="object-cover" sizes="(min-width: 1024px) 768px, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
