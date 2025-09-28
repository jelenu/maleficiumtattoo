import Image from "next/image";
import alexisMobile from "../../../public/images/alexishorizontal21.jpg";
import alexisTablet from "../../../public/images/alexishorizontal.jpg";
import { SectionWrapper, Button, Text } from "@/components/ui";
import { aboutStudioContent } from "@/constants/content";

export default function AboutStudioSection() {
  return (
    <>
      {/* Sección Desktop/PC */}
  <SectionWrapper className="hidden xl:flex">
        <div className="max-w-[90rem] max-h-[52rem] h-full py-10 px-30">
          <div className="flex bg-black h-full">
            {/* Contenido izquierdo */}
            <div className="flex-[2] border-2 border-r-0 border-white p-8 lg:p-10 xl:p-12 flex flex-col justify-between h-full">
              <Text variant="h2" className="text-white">
                {aboutStudioContent.title}
              </Text>

              <div className="space-y-4 lg:space-y-6">
                {aboutStudioContent.paragraphs.map((paragraph, index) => (
                  <Text key={index} variant="body" muted>
                    {paragraph}
                  </Text>
                ))}
              </div>

              <Button variant="outline" size="lg" className="self-start">
                {aboutStudioContent.buttonText}
              </Button>
            </div>

            <div className="h-full flex items-center">
              <Image
                src={aboutStudioContent.image.src}
                alt={aboutStudioContent.image.alt}
                width={1600}
                height={1067}
                className="h-full w-auto object-contain"
                style={{ height: "100%", width: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Sección Móvil/Tablet */}
  <SectionWrapper className="xl:hidden">
        <div className=" w-full h-full bg-black flex flex-col">
          {/* Imagen arriba */}
          <div className="md:hidden w-full">
            <Image
              src={alexisMobile}
              alt={aboutStudioContent.image.alt}
              width={alexisMobile.width}
              height={alexisMobile.height}
              style={{ width: "100%", height: "auto" }}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="hidden md:flex w-full">
            <Image
              src={alexisTablet}
              alt={aboutStudioContent.image.alt}
              width={alexisTablet.width}
              height={alexisTablet.height}
              style={{ width: "100%", height: "auto" }}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Contenido abajo */}
          <div className="flex-1 p-3 py-2 md:px-10 flex flex-col justify-evenly">
            <Text variant="h2" className="text-white" fluidMobile fluidTablet>
              {aboutStudioContent.title}
            </Text>

            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {aboutStudioContent.paragraphs.map((paragraph, index) => (
                <Text key={index} variant="body" muted fluidMobile fluidTablet>
                  {paragraph}
                </Text>
              ))}
            </div>

            <Button variant="outline" size="lg" className="self-center md:self-start">
              {aboutStudioContent.buttonText}
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
