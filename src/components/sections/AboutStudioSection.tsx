import Image from "next/image";
import { SectionWrapper, Button, WhiteBox } from "@/components/ui";
import { aboutStudioContent } from "@/constants/content";

export default function AboutStudioSection() {
  return (
    <SectionWrapper>
      {/* Layout para desktop (md+) - Con WhiteBox */}
      <div className="hidden md:flex w-full h-full items-center justify-center px-10">
        <WhiteBox background="black">
          <div className="relative z-20 grid grid-cols-2 items-stretch bg-black/90 h-full backdrop-blur-[2px]">
            {/* Contenido izquierdo */}
            <div className="p-8 lg:p-10 xl:p-12 space-y-4 lg:space-y-6 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-white mb-4 lg:mb-6">
                {aboutStudioContent.title}
              </h2>

              {aboutStudioContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm lg:text-md text-gray-300 font-body leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <Button
                variant="outline"
                size="md"
                className="mt-6 lg:mt-8 self-start"
              >
                {aboutStudioContent.buttonText}
              </Button>
            </div>

            {/* Imagen derecha */}
            <div className="relative h-full">
              <Image
                src={aboutStudioContent.image.src}
                alt={aboutStudioContent.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </WhiteBox>
      </div>

      {/* Layout para móvil/tablet (menor a md) - Sin WhiteBox, ancho completo */}
      <div className="md:hidden w-full h-full bg-black flex flex-col">
        {/* Imagen arriba */}
        <div className="relative h-60 sm:h-100 md:h-100 w-full">
          <Image
            src={aboutStudioContent.image.src}
            alt={aboutStudioContent.image.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Contenido abajo */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-5 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white mb-3 sm:mb-4 md:mb-5">
            {aboutStudioContent.title}
          </h2>

          {aboutStudioContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm sm:text-sm md:text-md text-gray-300 font-body leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <Button
            variant="outline"
            size="md"
            className="mt-4 sm:mt-5 md:mt-6 self-center "
          >
            {aboutStudioContent.buttonText}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
