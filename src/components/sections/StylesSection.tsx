"use client";

import { SectionWrapper, Text } from "@/components/ui";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import { useIntlayer } from "next-intlayer";
import { useState, useRef } from "react";

const styleSlugs = [
  "blackwork",
  "ignorant",
  "new-school",
  "fineline",
  "traditional",
  "realism",
];

export default function StylesSection() {
  const t = useIntlayer("styles");
  const router = useRouter();
  const { locale } = useParams<{ locale?: string }>();

  const styles = t.styles ?? [];

  // Mobile & Tablet
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileFlip, setMobileFlip] = useState<boolean[]>(() =>
    styles.map(() => false)
  );

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchMoved = useRef(false);

  const handleStyleClick = (index: number) => {
    const style = styleSlugs[index];

    const galleryUrl = locale
      ? `/${locale}/gallery?style=${style}`
      : `/gallery?style=${style}`;

    router.push(galleryUrl);
  };

  const toggleMobileFlip = (index: number) => {
    setMobileFlip((prev) =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
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
      if (diff > 0) {
        setMobileIndex((i) =>
          i >= styles.length - 1 ? 0 : i + 1
        );
      } else {
        setMobileIndex((i) =>
          i <= 0 ? styles.length - 1 : i - 1
        );
      }
    }
  };

  return (
    <>
      {/* DESKTOP */}
      <SectionWrapper
        className="hidden xl:flex w-full h-[100svh] max-h-[100svh] justify-center items-center overflow-hidden"
        contentClassName="w-full h-full flex items-center justify-center"
        animateOnScroll={false}
      >
        <div className="w-full h-full flex flex-col justify-center items-center px-12 2xl:px-20 py-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 shrink-0"
          >
            <Text
              variant="stylesTitle"
              align="center"
              className="text-white uppercase tracking-wide"
            >
              {t.title.value}
            </Text>
          </motion.div>

          <div className="grid grid-cols-3 gap-5 w-[90%] px-[18%] flex-1 min-h-0 place-content-center">
            {styles.slice(0, 6).map((style, index) => (
              <motion.div
                key={styleSlugs[index]}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.2,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="min-w-0 aspect-[4/5]"
              >
                <button
                  type="button"
                  onClick={() => handleStyleClick(index)}
                  aria-label={`${style.title.value} - View gallery`}
                  className="group relative block w-full h-full cursor-pointer rounded-xl [perspective:75rem]"
                >
                  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* FRONT */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 [backface-visibility:hidden]">
                      <div className="absolute inset-0">
                        {style.imageSrc?.value && (
                          <Image
                            src={style.imageSrc.value}
                            alt={style.imageAlt?.value || ""}
                            fill
                            sizes="27vw"
                            className="object-cover w-full h-full transform-gpu transition-transform duration-700"
                          />
                        )}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start text-left">
                        <Text
                          variant="stylesTitle"
                          className="text-white uppercase tracking-wide drop-shadow-md"
                        >
                          {style.title.value}
                        </Text>

                        <Text
                          variant="caption"
                          className="mt-2 text-xs text-gray-300 opacity-60"
                        >
                          {t.hoverToRead}
                        </Text>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ring-1 ring-white/10 bg-black p-6">
                      <Text
                        variant="stylesTitle"
                        align="center"
                        className="text-white uppercase tracking-wide"
                      >
                        {style.title.value}
                      </Text>

                      <div className="flex-1 flex items-center justify-center w-full">
                        <Text
                          variant="stylesBody"
                          align="center"
                          muted
                          className="text-white/80"
                        >
                          {style.description.value}
                        </Text>
                      </div>

                      <div className="mt-4 text-xs text-gray-400 uppercase tracking-wider">
                        Explore style →
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* MOBILE & TABLET */}
      <SectionWrapper className="xl:hidden">
        <div
          className="w-full flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* TITLE */}
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
            <Text
              variant="h1"
              align="center"
              className="w-full text-white"
            >
              {t.title.value}
            </Text>
          </motion.div>

          {/* CAROUSEL */}
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
              style={{
                transform: `translateX(-${mobileIndex * 100}%)`,
              }}
            >
              {styles.slice(0, 6).map((style, index) => (
                <div
                  key={styleSlugs[index]}
                  className="min-w-full flex items-center justify-center px-5 py-8"
                >
                  <div className="w-[85vw] max-w-[35rem] aspect-[4/5]">
                    <button
                      type="button"
                      onClick={() => {
                        if (!touchMoved.current) {
                          toggleMobileFlip(index);
                        }
                      }}
                      onMouseEnter={() => {}}
                      aria-label={`${style.title.value} - View gallery`}
                      className="group relative block w-full h-full cursor-pointer rounded-xl [perspective:75rem]"
                    >
                      <div
                        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                          mobileFlip[index]
                            ? "[transform:rotateY(180deg)]"
                            : ""
                        }`}
                      >
                        {/* FRONT */}
                        <div className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 [backface-visibility:hidden]">
                          <div className="absolute inset-0">
                            {style.imageSrc?.value && (
                              <Image
                                src={style.imageSrc.value}
                                alt={style.imageAlt?.value || ""}
                                fill
                                sizes="85vw"
                                priority={index === 0}
                                className="object-cover w-full h-full"
                              />
                            )}
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start text-left">
                            <Text
                              variant="stylesTitle"
                              className="text-white uppercase tracking-wide drop-shadow-md"
                            >
                              {style.title.value}
                            </Text>

                            <Text
                              variant="caption"
                              className="mt-2 text-xs text-gray-300 opacity-60"
                            >
                              {t.hoverToRead}
                            </Text>
                          </div>
                        </div>

                        {/* BACK */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ring-1 ring-white/10 bg-black p-10 px-15">
                          <Text
                            variant="stylesTitle"
                            align="center"
                            className="text-white uppercase tracking-wide"
                          >
                            {style.title.value}
                          </Text>

                          <div className="flex-1 flex items-center justify-center w-full">
                            <Text
                              variant="stylesBody"
                              align="center"
                              muted
                              className="text-white/80"
                            >
                              {style.description.value}
                            </Text>
                          </div>

                          <div className="mt-4 text-xs text-gray-400 uppercase tracking-wider">
                            Explore style →
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DOTS */}
          <div className="flex gap-2">
            {styles.slice(0, 6).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir al estilo ${i + 1}`}
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
