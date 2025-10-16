"use client";

import { useCallback, useMemo, useState, useRef } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Text from "@/components/ui/basics/Text";
import { useIntlayer } from "next-intlayer";
export default function CarouselSection() {
    const t = useIntlayer("carousel");

 
  const slides = useMemo(
    () => Array.from({ length: 6 }, () => "/images/tattoo.jpg"),
    []
  );

  const [index, setIndex] = useState(1);
  const last = slides.length - 1;

  const next = useCallback(() => setIndex((i) => (i >= last ? 0 : i + 1)), [last]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? last : i - 1)), [last]);

  // 👉 Variables para manejar el gesto táctil
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // distancia mínima en px para detectar swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) next(); // swipe left
      else prev(); // swipe right
    }
  };

  return (
    <>
      {/* ----------- Versión Desktop ----------- */}
      <SectionWrapper className="hidden xl:flex justify-center" contentClassName="flex w-full">
        <div className="flex flex-col items-center gap-4 h-full w-full py-10  px-30">
          {/* Overlay text now above carousel without absolute */}
          <div className="flex flex-col items-center justify-center text-center text-white">
            <Text variant="h1" align="center">{t.title.value}</Text>
            <Text
              variant="description"
              align="center"
              className="opacity-80"
            >
              {t.subtitle.value}
            </Text>
          </div>

          {/* Carousel (unchanged structure) */}
          <div className="flex items-center w-full h-full">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow flex items-center justify-center focus:outline-none z-10"
            >
              <HiChevronLeft className="w-6 h-6 text-black" />
            </button>

            <div className="flex-1 overflow-hidden h-full">
              <div
                className="flex transition-transform duration-500 ease-out h-full"
                style={{
                  transform: `translateX(calc(-${index * 33.333}% + 33.333%))`,
                }}
              >
                {slides.map((src, i) => (
                  <div
                    key={i}
                    className="min-w-1/3 flex items-center justify-center h-full transition-transform duration-500"
                  >
                    <div
                      className={`relative w-[90%] h-[80%] transition-transform duration-500 ${
                        i === index ? "scale-120 z-10" : "scale-90 opacity-50"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Tattoo ${i + 1}`}
                        fill
                        className="object-contain rounded-lg"
                        sizes="33vw"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow flex items-center justify-center focus:outline-none z-10"
            >
              <HiChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>

          <div className="w-full flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ----------- Versión Tablet y Móvil ----------- */}
      <SectionWrapper className="xl:hidden">
        <div
          className="flex flex-col items-center gap-4 h-full w-full py-5 pb-10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Overlay text para móvil/tablet */}
          <div className="flex flex-col items-center justify-center text-center text-white">
            <Text variant="h1" align="center">{t.title.value}</Text>
            <Text
              variant="description"
              align="center"
              className="opacity-80"
            >
              {t.subtitle.value}
            </Text>
          </div>

          <div className="overflow-hidden w-full h-full">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {slides.map((src, i) => (
                <div key={i} className="min-w-full flex items-center justify-center h-full">
                  <div className="relative w-full h-full transition-transform duration-500">
                    <Image
                      src={src}
                      alt={`Tattoo ${i + 1}`}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority={i === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
