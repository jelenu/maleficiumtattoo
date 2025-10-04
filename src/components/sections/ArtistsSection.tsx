"use client";

import Image from "next/image";
import { SectionWrapper } from "../ui";
import { useState, useRef } from "react";
import Text from "@/components/ui/basics/Text";

interface Artist {
  name: string;
  image: string;
  role: string;
  description: string;
}

export default function ArtistsSection() {
  const artists: Artist[] = [
    {
      name: "Alexis",
      image: "/images/alexis.jpg",
      role: "Tattoo Artist",
      description:
        "Especialista en tatuajes realistas y blackwork. Con más de 8 años de experiencia creando obras únicas que reflejan la personalidad de cada cliente. Con más de 8 años de experiencia creando obras únicas que reflejan la personalidad de cada cliente.",
    },
    {
      name: "Manu",
      image: "/images/alexis.jpg",
      role: "Tattoo Artist",
      description:
        "Maestro en tatuajes tradicionales y neo-tradicionales. Su estilo único combina técnicas clásicas con elementos modernos.",
    },
  ];

  const [mobileFlips, setMobileFlips] = useState<boolean[]>(() =>
    artists.map(() => false)
  );
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchMoved = useRef(false); // para diferenciar swipe de tap

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
      touchMoved.current = true; // hubo movimiento, es swipe
    }
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (touchMoved.current && Math.abs(diff) > threshold) {
      // Solo cambiar índice si hubo swipe y supera el umbral
      if (diff > 0)
        setMobileIndex((i) => (i >= artists.length - 1 ? 0 : i + 1));
      else
        setMobileIndex((i) => (i <= 0 ? artists.length - 1 : i - 1));
    }
  };

  return (
    <>
      {/* Desktop: artistas lado a lado */}
      <SectionWrapper className="hidden xl:flex justify-center items-center ">
        <div className="w-full h-full flex flex-col max-h-[55rem] justify-center items-center py-15 px-20">
          <Text
            variant="h1"
            align="center"
            className="w-full text-center text-white mb-4"
          >
            Meet the Artists
          </Text>
          <div className="flex items-center justify-center gap-40 w-full h-full">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="group relative h-full max-h-[35rem] aspect-[4/5] [perspective:75rem]"
              >
                {/* Flip inner wrapper */}
                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 [backface-visibility:hidden]">
                    <div className="absolute inset-0">
                      <Image
                        src={artist.image}
                        alt={`${artist.name} - ${artist.role}`}
                        fill
                        sizes="100vw"
                        className="object-cover w-full h-full transform-gpu transition-transform duration-700"
                        priority={index === 0}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start">
                      <Text
                        variant="h3"
                        className="text-3xl font-display text-white drop-shadow-md"
                      >
                        {artist.name}
                      </Text>
                      <Text
                        variant="subtitle"
                        className="mt-2 tracking-wider bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-md border border-white/20"
                      >
                        {artist.role}
                      </Text>
                      <Text
                        variant="caption"
                        className="mt-4 text-xs text-gray-300 opacity-80"
                      >
                        Hover to read bio
                      </Text>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 flex flex-col items-center rounded-xl bg-black p-15 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ring-1 ring-white/10">
                    <Text variant="h2">{artist.name}</Text>
                    <div className="flex-1 flex items-center justify-center w-full">
                      <Text variant="description" align="center">
                        {artist.description}
                      </Text>
                    </div>
                    <button className="mt-6 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md text-center self-center">
                      <Text
                        variant="description"
                        className="font-semibold text-black"
                        align="center"
                      >
                        View Portfolio
                      </Text>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile & Tablet: carrusel de flip-cards */}
      <SectionWrapper className="xl:hidden">
        <div
          className="w-full flex flex-col items-center "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Text variant="h1" align="center" className="w-full text-white">
            Meet the Artists
          </Text>

          {/* Carrusel */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {artists.map((artist, index) => (
                <div
                  key={artist.name}
                  className="min-w-full flex items-center justify-center px-5 py-15"
                >
                  <div
                    className="group relative w-[85vw] max-w-[35rem] aspect-[4/5] cursor-pointer select-none [perspective:75rem]"
                    onClick={() => {
                      if (!touchMoved.current) toggleMobileFlip(index); // solo flip si no hubo swipe
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleMobileFlip(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={
                      mobileFlips[index]
                        ? `Ocultar biografía de ${artist.name}`
                        : `Ver biografía de ${artist.name}`
                    }
                  >
                    <div
                      className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                        mobileFlips[index] ? "[transform:rotateY(180deg)]" : ""
                      }`}
                    >
                      {/* Front */}
                      <div className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 [backface-visibility:hidden]">
                        <div className="absolute inset-0">
                          <Image
                            src={artist.image}
                            alt={`${artist.name} - ${artist.role}`}
                            fill
                            sizes="100vw"
                            className="object-cover w-full h-full transform-gpu transition-transform duration-700"
                            priority={index === 0}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start text-left">
                          <Text
                            variant="h3"
                            className="text-3xl text-white drop-shadow-md"
                          >
                            {artist.name}
                          </Text>
                          <Text
                            variant="description"
                            className="mt-2 inline-block text-[11px] tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-md border border-white/20"
                          >
                            {artist.role}
                          </Text>
                          <Text variant="caption">Tap to read bio</Text>
                        </div>
                      </div>
                      {/* Back */}
                      <div className="absolute inset-0 flex flex-col items-center rounded-xl bg-black/95 p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ring-1 ring-white/10">
                        <Text variant="h2" className="text-white mb-4">
                          {artist.name}
                        </Text>
                        <div className="flex-1 flex items-center justify-center w-full">
                          <Text variant="description" align="center">
                            {artist.description}
                          </Text>
                        </div>
                        <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md text-center self-center">
                          <Text
                            variant="description"
                            className="font-semibold text-black"
                            align="center"
                          >
                            View Portfolio
                          </Text>
                        </button>
                        <Text
                          variant="caption"
                          className="mt-2 text-[10px] text-gray-400"
                          align="center"
                        >
                          Tap to flip back
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navegación */}
          <div className="flex gap-2 ">
            {artists.map((_, i) => (
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
