"use client";

import { SectionWrapper } from "../ui";
import { useState, useRef } from "react";
import Text from "@/components/ui/basics/Text";
import FlipCard from "@/components/ui/cards/FlipCard";
import { useParams, useRouter } from "next/navigation";
import { useIntlayer } from "next-intlayer";
import { AnimatePresence, motion } from "framer-motion";

export default function ArtistsSection() {
  const t = useIntlayer("artists");

  const [mobileFlips, setMobileFlips] = useState<boolean[]>(() =>
    t.artists.map(() => false)
  );
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchMoved = useRef(false);
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();

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
    router.push(`/${locale}/artists/${name.toLowerCase()}`);

  const desktopPages = [t.artists.slice(0, 3), t.artists.slice(3)];
  const desktopHasPrev = desktopPage > 0;
  const desktopHasNext = desktopPage < desktopPages.length - 1;
  const currentDesktopArtists = desktopPages[desktopPage] ?? [];

  return (
    <>
      {/* Desktop */}
      <SectionWrapper className="hidden xl:flex justify-center items-center">
        <div className="w-full h-full flex flex-col max-h-[55rem] justify-center items-center py-15 px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Text
              variant="artistsTitle"
              align="center"
              className="w-full text-center text-white mb-4"
            >
              {t.title.value}
            </Text>
          </motion.div>
          <div className="relative w-full h-full flex items-center justify-center px-14">
            <button
              type="button"
              aria-label="Previous artists"
              disabled={!desktopHasPrev}
              onClick={() => setDesktopPage((prev) => Math.max(0, prev - 1))}
              className={`absolute -left-2 z-10 h-10 w-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                desktopHasPrev
                  ? "border-gray-600 text-gray-200 hover:text-white hover:border-gray-400"
                  : "border-gray-700 text-gray-500 cursor-default"
              }`}
            >
              ‹
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={desktopPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center justify-center gap-20 w-full h-full"
              >
                {currentDesktopArtists.map((artist, index) => (
                  <div
                    key={`${desktopPage}-${index}`}
                    className="h-full max-h-[35rem]"
                  >
                    <FlipCard
                      hoverFlip
                      name={artist.name.value}
                      image={artist.image.value}
                      role={artist.role.value}
                      description={artist.description.value}
                      instagram={artist.instagram?.value}
                      sizeClass="h-full max-h-[35rem]"
                      imagePriority={desktopPage === 0 && index === 0}
                      onCtaClick={() => goToArtist(artist.name.value.toLowerCase())}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Next artists"
              disabled={!desktopHasNext}
              onClick={() => setDesktopPage((prev) => Math.min(desktopPages.length - 1, prev + 1))}
              className={`absolute -right-2 z-10 h-10 w-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                desktopHasNext
                  ? "border-gray-600 text-gray-200 hover:text-white hover:border-gray-400"
                  : "border-gray-700 text-gray-500 cursor-default"
              }`}
            >
              ›
            </button>
          </div>

          <div className="flex gap-2 mt-6">
            {desktopPages.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a la página ${i + 1}`}
                onClick={() => setDesktopPage(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === desktopPage
                    ? "w-6 bg-white"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.2,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Text variant="artistsTitle" align="center" className="w-full text-white">
              {t.title.value}
            </Text>
          </motion.div>

          {/* Carrusel */}
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {t.artists.map((artist, index) => (
                <div
                  key={index}
                  className="min-w-full flex items-center justify-center px-5 py-8"
                >
                  <FlipCard
                    name={artist.name.value}
                    image={artist.image.value}
                    role={artist.role.value}
                    description={artist.description.value}
                    instagram={artist.instagram?.value}
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
          </motion.div>

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
    </>
  );
}
