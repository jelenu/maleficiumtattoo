"use client";

import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import WhiteBox from "../ui/WhiteBox";
import { useState } from "react";

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
        "Especialista en tatuajes realistas y blackwork. Con más de 8 años de experiencia creando obras únicas que reflejan la personalidad de cada cliente.",
    },
    {
      name: "Manu",
      image: "/images/alexis.jpg",
      role: "Tattoo apprendice",
      description:
        "Maestro en tatuajes tradicionales y neo-tradicionales. Su estilo único combina técnicas clásicas con elementos modernos.",
    },
  ];

  const [mobileFlips, setMobileFlips] = useState<boolean[]>(() =>
    artists.map(() => false)
  );

  const toggleMobileFlip = (idx: number) => {
    setMobileFlips((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <>
      {/* Desktop: artistas lado a lado */}
      <SectionWrapper
        backgroundImage="/images/fondo.png"
        backgroundAlt="Background"
        className="hidden lg:block"
        contentClassName="flex flex-col items-center justify-center"
        overlayClassName="bg-black/80"
      >
        <WhiteBox
          background="transparent"
          className="border-none flex flex-col items-center w-full px-16 pb-16 gap-12 "
        >
          <h2 className="w-full max-w-5xl mx-auto text-center text-4xl lg:text-5xl font-display text-white tracking-tight px-8">
            Meet the Artists
          </h2>
          <div className="flex justify-center gap-12 lg:gap-20 w-full">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="group relative w-1/2 max-w-lg aspect-[6/7] [perspective:75rem]"
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
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
                        className="object-cover w-full h-full transform-gpu transition-transform duration-700"
                        priority={index === 0}
                      />
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start">
                      <h3 className="text-3xl font-display text-white drop-shadow-md">
                        {artist.name}
                      </h3>
                      <span className="mt-2 inline-block text-xs tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-md border border-white/20">
                        {artist.role}
                      </span>
                      <span className="mt-4 text-xs text-gray-300 opacity-80">
                        Hover to read bio
                      </span>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 flex flex-col rounded-xl bg-black/95 p-20 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ring-1 ring-white/10">
                    {/* Top: Name */}
                    <h3 className="text-4xl font-display text-white tracking-tight mb-6">
                      {artist.name}
                    </h3>
                    {/* Middle: Description centered vertically */}
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-sm">
                        {artist.description}
                      </p>
                    </div>
                    {/* Bottom: Button */}
                    <button className="mt-6 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </WhiteBox>
      </SectionWrapper>

      {/* Mobile & Tablet: flip card por artista inline */}
      {artists.map((artist, index) => (
        <SectionWrapper
          key={artist.name}
          backgroundImage="/images/fondo.png"
          backgroundAlt="Background"
          className="lg:hidden"
          contentClassName="flex items-center justify-center px-0 sm:px-6"
          overlayClassName="bg-black/70"
        >
          <WhiteBox
            background="transparent"
            className="border-none backdrop-blur-[1px] flex flex-col items-center text-center gap-3 py-0  px-0 sm:px-4 w-full mt-20 md:mt-0"
          >
            <h2 className="w-full max-w-5xl mx-auto text-center text-4xl lg:text-5xl font-display text-white tracking-tight px-8 mb-4">
              Meet the Artists
            </h2>
            <div
              className="group relative w-[90vw] max-w-md h-[clamp(60vh,120vw,70vh)] mx-auto 
           cursor-pointer select-none [perspective:75rem]"
              onClick={() => toggleMobileFlip(index)}
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
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start text-left">
                    <h3 className="text-3xl font-display text-white drop-shadow-md">
                      {artist.name}
                    </h3>
                    <span className="mt-2 inline-block text-[11px] tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-md border border-white/20">
                      {artist.role}
                    </span>
                    <span className="mt-3 text-[11px] text-gray-300 opacity-80">
                      Tap to read bio
                    </span>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col rounded-xl bg-black/95 p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ring-1 ring-white/10">
                  <h3 className="text-4xl font-display text-white tracking-tight mb-4">
                    {artist.name}
                  </h3>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-base text-gray-300 leading-relaxed">
                      {artist.description}
                    </p>
                  </div>
                  <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md">
                    View Portfolio
                  </button>
                  <span className="mt-2 text-[10px] text-gray-400">
                    Tap to flip back
                  </span>
                </div>
              </div>
            </div>
          </WhiteBox>
        </SectionWrapper>
      ))}
    </>
  );
}
