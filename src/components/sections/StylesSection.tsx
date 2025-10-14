"use client";
import { SectionWrapper, Text } from "@/components/ui";
import Image from "next/image";
import { useParams } from 'next/navigation';
import { getLang, tr } from '@/utils/i18n';

export default function StylesSection() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
  const stylesData = [
    {
      title: tr(lang, { en: 'Blackwork', de: 'Blackwork', es: 'Blackwork' }),
      description: tr(lang, {
        en: 'Specialized in Blackwork tattoos in Sankt Pölten. Crisp lines, deep blacks, and striking designs that highlight your unique style.',
        de: 'Spezialisiert auf Blackwork-Tattoos in Sankt Pölten. Präzise Linien, tiefes Schwarz und ausdrucksstarke Designs für deinen einzigartigen Stil.',
        es: 'Especializados en tatuajes Blackwork en Sankt Pölten. Líneas precisas, negros profundos y diseños impactantes que resaltan tu estilo único.',
      }),
      imageSrc: '/images/tattoo.jpg',
      imageAlt: tr(lang, { en: 'Blackwork Tattoo', de: 'Blackwork Tattoo', es: 'Tatuaje Blackwork' }),
    },
    {
      title: tr(lang, { en: 'Custom Design', de: 'Custom Design', es: 'Diseño personalizado' }),
      description: tr(lang, {
        en: 'Every design is unique and tailored to your ideas and preferences. We work with you to create body art that truly reflects you.',
        de: 'Jedes Design ist individuell und auf deine Ideen und Vorlieben abgestimmt. Gemeinsam schaffen wir Körperschmuck, der dich widerspiegelt.',
        es: 'Cada diseño es único y personalizado según tus ideas y preferencias. Trabajamos contigo para crear arte corporal que te refleje.',
      }),
      imageSrc: '/images/tattoo.jpg',
      imageAlt: tr(lang, { en: 'Custom Design Tattoo', de: 'Custom Design Tattoo', es: 'Tatuaje de diseño personalizado' }),
    },
    {
      title: tr(lang, { en: 'Fine Lines', de: 'Feine Linien', es: 'Líneas finas' }),
      description: tr(lang, {
        en: 'Fine line technique for delicate, detailed designs. Perfect for minimalist tattoos that keep their elegance.',
        de: 'Feinlinientechnik für zarte, detaillierte Designs. Perfekt für minimalistische Tattoos, die ihre Eleganz bewahren.',
        es: 'Técnica de líneas finas para diseños delicados y detallados. Perfecta para tatuajes minimalistas que mantienen su elegancia.',
      }),
      imageSrc: '/images/tattoo.jpg',
      imageAlt: tr(lang, { en: 'Fine Line Tattoo', de: 'Fine Line Tattoo', es: 'Tatuaje de líneas finas' }),
    },
  ];

  const s0 = stylesData[0];
  const s1 = stylesData[1] ?? stylesData[0];
  const s2 = stylesData[2] ?? stylesData[0];

  return (
    <>
      {/* Desktop/PC section: 2 rows x 3 columns, matching AboutStudioSection size */}
      <SectionWrapper className="hidden xl:flex justify-center">
        <div className="max-w-[85rem] max-h-[50rem] h-full py-10 xl:py-15 px-30">
          <div className="bg-black h-full w-full grid grid-cols-3 grid-rows-2 border-2 border-white">
            {/* Column 1: Text (top) | Image (bottom) */}
            <div className="h-full w-full">
              <TextTile title={s0.title} description={s0.description} className="h-full" />
            </div>
            <div className="h-full w-full">
              <ImgTile src={s1.imageSrc} alt={s1.imageAlt} className="h-full" />
            </div>
            <div className="h-full w-full">
              <TextTile title={s2.title} description={s2.description} className="h-full" />
            </div>

            {/* Bottom row */}
            <div className="h-full w-full">
              <ImgTile src={s0.imageSrc} alt={s0.imageAlt} className="h-full" />
            </div>
            <div className="h-full w-full">
              <TextTile title={s1.title} description={s1.description} className="h-full" />
            </div>
            <div className="h-full w-full">
              <ImgTile src={s2.imageSrc} alt={s2.imageAlt} className="h-full" />
            </div>
          </div>
        </div>
      </SectionWrapper>

    {/* Tablet only section */}
      <SectionWrapper className="hidden sm:block xl:hidden">
        <div className="bg-black h-full w-full">
          {/* Row 1: Text | Image */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <TextTile title={s0.title} description={s0.description}  />
            <ImgTile src={s0.imageSrc} alt={s0.imageAlt} />
          </div>

          {/* Row 2: Image | Text */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <ImgTile src={s1.imageSrc} alt={s1.imageAlt} />
            <TextTile title={s1.title} description={s1.description}  />
          </div>

          {/* Row 3: Text | Image */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <TextTile title={s2.title} description={s2.description}  />
            <ImgTile src={s2.imageSrc} alt={s2.imageAlt} />
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile only section */}
      <SectionWrapper className="block sm:hidden">
        <div className="bg-black h-full w-full">
          {/* Row 1: Text | Image */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <TextTile title={s0.title} description={s0.description}  />
            <ImgTile src={s0.imageSrc} alt={s0.imageAlt} />
          </div>

          {/* Row 2: Image | Text */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <ImgTile src={s1.imageSrc} alt={s1.imageAlt} />
            <TextTile title={s1.title} description={s1.description}  />
          </div>

          {/* Row 3: Text | Image */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <TextTile title={s2.title} description={s2.description}  />
            <ImgTile src={s2.imageSrc} alt={s2.imageAlt} />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

function TextTile({ title, description, className = "" }: { title: string; description: string; className?: string }) {
  return (
    <div className={`h-full flex flex-col p-3 sm:p-10 ${className}`}>
      <Text variant="h3" className="uppercase tracking-wide text-white mb-2">
        {title}
      </Text>
      <Text variant="description" muted>
        {description}
      </Text>
    </div>
  );
}

function ImgTile({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <Image src={src} alt={alt} fill className="h-full w-full object-cover" />
    </div>
  );
}
