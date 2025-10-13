"use client";

import { SectionWrapper } from "../ui";
import { useState, useRef } from "react";
import Text from "@/components/ui/basics/Text";
import FlipCard from "@/components/ui/cards/FlipCard";
import { useRouter } from "next/navigation";

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
  const touchMoved = useRef(false);
  const router = useRouter();

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
        setMobileIndex((i) => (i >= artists.length - 1 ? 0 : i + 1));
      else setMobileIndex((i) => (i <= 0 ? artists.length - 1 : i - 1));
    }
  };

  const goToArtist = (name: string) => router.push(`/artists/${name.toLowerCase()}`);

  return (
    <>
      {/* Desktop */}
      <SectionWrapper className="hidden xl:flex justify-center items-center ">
        <div className="w-full h-full flex flex-col max-h-[55rem] justify-center items-center py-15 px-20">
          <Text variant="h1" align="center" className="w-full text-center text-white mb-4">
            Meet the Artists
          </Text>
          <div className="flex items-center justify-center gap-40 w-full h-full">
            {artists.map((artist, index) => (
              <FlipCard
                key={artist.name}
                hoverFlip
                name={artist.name}
                image={artist.image}
                role={artist.role}
                description={artist.description}
                sizeClass="h-full max-h-[35rem]"
                imagePriority={index === 0}
                onCtaClick={() => goToArtist(artist.name)}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile & Tablet */}
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
                <div key={artist.name} className="min-w-full flex items-center justify-center px-5 py-15">
                  <FlipCard
                    name={artist.name}
                    image={artist.image}
                    role={artist.role}
                    description={artist.description}
                    flipped={mobileFlips[index]}
                    onToggle={() => toggleMobileFlip(index)}
                    guardToggle={() => !touchMoved.current}
                    sizeClass="w-[85vw] max-w-[35rem]"
                    imagePriority={index === 0}
                    onCtaClick={() => goToArtist(artist.name)}
                  />
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
                  i === mobileIndex ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
