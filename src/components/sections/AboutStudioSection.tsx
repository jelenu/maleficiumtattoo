"use client";
import Image from "next/image";
import alexisMobile from "../../../public/images/alexishorizontal21.jpg";
import alexisTablet from "../../../public/images/alexishorizontal.jpg";
import { SectionWrapper, Button, Text } from "@/components/ui";
import { useParams } from 'next/navigation';
import { getLang, tr } from '@/utils/i18n';

export default function AboutStudioSection() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
  const t = {
    title: tr(lang, { en: 'About Maleficium Tattoo', de: 'Über Maleficium Tattoo', es: 'Sobre Maleficium Tattoo' }),
    button: tr(lang, { en: 'Our Jobs', de: 'Unsere Arbeiten', es: 'Nuestros Trabajos' }),
    paragraphs: tr(lang, {
      en: [
        'Maleficium Tattoo is an exclusive tattoo studio led by Spanish artist @alexisdarkart, specializing in blackwork tattoos in black and white with strong lines.',
        'We create unique, custom designs—each motif is crafted just for you. Please note: we work by appointment only to provide a calm, personal, and high-quality experience.'
      ],
      de: [
        'Maleficium Tattoo ist ein exklusives Tattoostudio unter der Leitung des spanischen Künstlers @alexisdarkart, der auf Blackwork-Tattoos in Schwarz-Weiß mit kräftigen Linien spezialisiert ist.',
        'Bei uns erhältst du individuelle und einzigartige Designs – jedes Motiv wird speziell für dich entworfen. Wichtig: Wir arbeiten ausschließlich nach Terminvereinbarung, um dir ein ruhiges, persönliches und hochwertiges Erlebnis bieten zu können.'
      ],
      es: [
        'Maleficium Tattoo es un estudio de tatuajes exclusivo dirigido por el artista español @alexisdarkart, especializado en tatuajes blackwork en blanco y negro con líneas marcadas.',
        'Creamos diseños únicos y personalizados: cada motivo está hecho para ti. Importante: trabajamos solo con cita previa para ofrecerte una experiencia tranquila, personal y de alta calidad.'
      ],
    }),
    imageAlt: tr(lang, { en: 'Maleficium Tattoo Studio', de: 'Maleficium Tattoo Studio', es: 'Estudio Maleficium Tattoo' }),
  };
  return (
    <>
      {/* Sección Desktop/PC */}
  <SectionWrapper className="hidden xl:flex justify-center">
        <div className="max-w-[85rem] max-h-[50rem] h-full py-10 xl:py-15 px-30">
          <div className="flex bg-black h-full">
            {/* Contenido izquierdo */}
            <div className="flex-[2] border-2 border-r-0 border-white p-8 lg:p-10 xl:p-13 flex flex-col justify-between h-full">
              <Text variant="h2" className="text-white">
                {t.title}
              </Text>

              <div className="space-y-4 lg:space-y-6">
                {t.paragraphs.map((paragraph, index) => (
                  <Text key={index} variant="body" muted>
                    {paragraph}
                  </Text>
                ))}
              </div>

              <Button variant="outline" size="lg" className="self-start">
                {t.button}
              </Button>
            </div>

            <div className="h-full flex items-center">
              <Image
                src={"/images/alexis.jpg"}
                alt={t.imageAlt}
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
              alt={t.imageAlt}
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
              alt={t.imageAlt}
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
              {t.title}
            </Text>

            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {t.paragraphs.map((paragraph, index) => (
                <Text key={index} variant="body" muted fluidMobile fluidTablet>
                  {paragraph}
                </Text>
              ))}
            </div>

            <Button variant="outline" size="lg" className="self-center md:self-start">
              {t.button}
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
