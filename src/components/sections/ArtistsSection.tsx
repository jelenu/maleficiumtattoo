"use client";

import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import WhiteBox from "../ui/WhiteBox";

export default function ArtistsSection() {
  const artists = [
    {
      name: "Alexis",
      image: "/images/alexis.jpg",
      description:
        "Especialista en tatuajes realistas y blackwork. Con más de 8 años de experiencia creando obras únicas que reflejan la personalidad de cada cliente.",
    },
    {
      name: "Manu",
      image: "/images/alexis.jpg",
      description:
        "Maestro en tatuajes tradicionales y neo-tradicionales. Su estilo único combina técnicas clásicas con elementos modernos.",
    },
  ];

  return (
    <>
      {/* Desktop: artistas lado a lado */}
      <SectionWrapper
        backgroundImage="/images/fondo.png"
        backgroundAlt="Background"
        className="hidden md:block"
        contentClassName="flex items-center justify-center"
        overlayClassName="bg-black/80"
      >
        <WhiteBox
          background="transparent"
          className="border-none flex justify-between items-stretch gap-10 w-full p-10"
        >
          {artists.map((artist, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-1/2 gap-6"
            >
              <h3 className="text-4xl font-display text-white">{artist.name}</h3>

              <div className="w-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-[4/3]">
                <Image
                  src={artist.image}
                  alt={`${artist.name} - Tattoo Artist`}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="text-gray-300 font-body text-base leading-relaxed">
                {artist.description}
              </div>

              <button className="bg-white/90 text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300 mt-auto w-full">
                View Portfolio
              </button>
            </div>
          ))}
        </WhiteBox>
      </SectionWrapper>

      {/* Mobile: cada artista en su propia sección */}
      {artists.map((artist, index) => (
        <SectionWrapper
          key={index}
          backgroundImage="/images/fondo.png"
          backgroundAlt="Background"
          className="md:hidden"
          contentClassName="flex items-center justify-center px-6"
          overlayClassName="bg-black/90"
        >
          <WhiteBox
          background="transparent"
            className="border-none backdrop-blur-[1px] flex flex-col items-center text-center gap-4 py-10 px-6 w-full max-w-sm"
          >
            <h3 className="text-3xl font-display text-white">{artist.name}</h3>

            <div className="w-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-[4/5]">
              <Image
                src={artist.image}
                alt={`${artist.name} - Tattoo Artist`}
                width={520}
                height={340}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-gray-300 font-body text-sm leading-relaxed w-full">
              {artist.description}
            </div>

            <button className="bg-white/90 text-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300 w-full">
              View Portfolio
            </button>
          </WhiteBox>
        </SectionWrapper>
      ))}
    </>
  );
}
