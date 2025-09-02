"use client";

import SectionWrapper from "../ui/SectionWrapper";
import WhiteBox from "../ui/WhiteBox";

export default function ArtistsSectionAlt() {
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
      {/* Variante ALT Desktop */}
      <SectionWrapper
        backgroundImage="/images/fondo.png"
        backgroundAlt="Background"
        className="hidden md:block"
        contentClassName="flex items-center justify-center"
      >
        <WhiteBox
          background="transparent"
          className="border-none flex h-full items-stretch w-full gap-12 xl:gap-24 2xl:gap-32 py-8 lg:py-12 px-6 lg:px-10 xl:px-14 2xl:px-16"
        >
          {artists.map((artist, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${artist.image})` }}
              className="group relative flex flex-col w-1/2 p-6 md:p-8 lg:p-10 xl:p-12 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
            >
              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/60" />
              <div className="relative z-10 flex flex-col h-full text-center items-center gap-4">
                <h3 className="text-3xl lg:text-4xl font-display text-white tracking-wide">
                  {artist.name}
                </h3>

                {/* Flex-grow empuja la descripción y botón al fondo */}
                <div className="flex-1 flex flex-col justify-end w-full gap-4">
                  <p className="text-gray-300 font-body text-sm md:text-base leading-relaxed">
                    {artist.description}
                  </p>
                  <button className="bg-white text-black px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 w-full text-sm md:text-base">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </WhiteBox>
      </SectionWrapper>

      {/* Variante ALT Mobile */}
      {artists.map((artist, index) => (
        <SectionWrapper
          key={index}
          backgroundImage="/images/fondo.png"
          backgroundAlt="Background"
          className="md:hidden"
          contentClassName="flex px-4 sm:px-6 pt-10 pb-20"
          overlayClassName="bg-black/90"
        >
          <div
            style={{ backgroundImage: `url(${artist.image})` }}
            className="group relative flex flex-col h-full w-full max-w-md mx-auto rounded-xl overflow-hidden px-6 sm:px-7 py-8 sm:py-9 bg-cover bg-center bg-no-repeat shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
          >
            <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/60" />
            <div className="relative z-10 flex flex-col h-full text-center items-center gap-4">
              <h3 className="text-3xl font-display text-white tracking-wide">
                {artist.name}
              </h3>

              {/* Empuja descripción y botón al fondo */}
              <div className="flex-1 flex flex-col justify-end w-full gap-3">
                <p className="text-gray-300 font-body text-sm leading-relaxed w-full line-clamp-6">
                  {artist.description}
                </p>
                <button className="bg-white/90 text-black w-full px-6 py-4 rounded-lg font-semibold hover:bg-white transition-colors duration-300 text-sm">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}
    </>
  );
}
