"use client";

import { useRef, useState } from "react";
import Text from "@/components/ui/basics/Text";
import FlipCard from "@/components/ui/cards/FlipCard";
import { SectionWrapper } from "@/components/ui";
import { Footer } from "@/components/layout";
import { useRouter, useParams } from "next/navigation";
import { useIntlayer } from "next-intlayer";


export default function ArtistsPage() {
  const t = useIntlayer("artists");
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();


  // Estado de flip y navegación táctil
  const [mobileFlips, setMobileFlips] = useState<boolean[]>(() =>
    t.artists.map(() => false)
  );
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchMoved = useRef(false);

  const toggleMobileFlip = (idx: number) => {
    setMobileFlips((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchMoved.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    if (Math.abs(touchEndX.current - touchStartX.current) > 5) {
      touchMoved.current = true;
    }
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (touchMoved.current && Math.abs(diff) > threshold) {
      if (diff > 0)
        setMobileIndex((i) => (i >= t.artists.length - 1 ? 0 : i + 1));
      else setMobileIndex((i) => (i <= 0 ? t.artists.length - 1 : i - 1));
    }
  };

  const goToArtist = (name: string) =>
    router.push(`/${locale}/artists/${name}`);

  return (
    <main>
      {/* Desktop */}
      <SectionWrapper className="hidden xl:flex justify-center items-center">
        <div className="w-full h-full flex flex-col max-h-[55rem] justify-center items-center py-10 px-20">
          <Text
            variant="h1"
            align="center"
            className="w-full text-center text-white mb-4"
          >
            {t.title}
          </Text>

          <div className="flex items-center justify-center gap-40 w-full h-full">
            {t.artists.map((artist, index) => (
              <FlipCard
                key={index}
                hoverFlip
                name={artist.name.value}
                image={artist.image.value}
                role={artist.role.value}
                description={artist.description.value}
                sizeClass="h-full max-h-[35rem]"
                imagePriority={index === 0}
                onCtaClick={() => goToArtist(artist.name.value.toLowerCase())}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile & Tablet */}
      <SectionWrapper className="xl:hidden">
        <div
          className="w-full flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Text variant="h1" align="center" className="w-full text-white">
            {t.title}
          </Text>

          {/* Carrusel */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {t.artists.map((artist, index) => (
                <div
                  key={index}
                  className="min-w-full flex items-center justify-center px-5 py-15"
                >
                  <FlipCard
                    name={artist.name.value}
                    image={artist.image.value}
                    role={artist.role.value}
                    description={artist.description.value}
                    flipped={mobileFlips[index]}
                    onToggle={() => toggleMobileFlip(index)}
                    guardToggle={() => !touchMoved.current}
                    sizeClass="w-[85vw] max-w-[35rem]"
                    imagePriority={index === 0}
                    onCtaClick={() => goToArtist(artist.name.value.toLowerCase())}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots navegación */}
          <div className="flex gap-2">
            {t.artists.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al artista ${i + 1}`}
                onClick={() => setMobileIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === mobileIndex
                    ? "w-6 bg-white"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
