// StylesSection.tsx
import { SectionWrapper } from '@/components/ui';
import { stylesData } from '@/constants/content';
import Image from 'next/image';

export default function StylesSection() {
  const s0 = stylesData[0];
  const s1 = stylesData[1] ?? stylesData[0];
  const s2 = stylesData[2] ?? stylesData[0];

  return (
    <>
      {/* Desktop only section */}
      <SectionWrapper
        className="hidden md:block"
      >
        <div className="p-4 w-full lg:w-[calc(3*(80vh/2))]">
          <div className="relative h-full w-full max-w-6xl mx-auto border-0 md:border-2 border-white/90 rounded-xl bg-black p-0">
            <div className="w-full mx-auto">
              <div className="grid grid-cols-3 gap-0 w-full">
                {/* Columna 1 */}
                <div className="grid grid-rows-2 gap-0">
                  <SquareText title={s0.title} description={s0.description} />
                  <SquareImage src={s0.imageSrc} alt={s0.imageAlt} />
                </div>
                {/* Columna 2 */}
                <div className="grid grid-rows-2 gap-0">
                  <SquareImage src={s1.imageSrc} alt={s1.imageAlt} />
                  <SquareText title={s1.title} description={s1.description} />
                </div>
                {/* Columna 3 */}
                <div className="grid grid-rows-2 gap-0">
                  <SquareText title={s2.title} description={s2.description} />
                  <SquareImage src={s2.imageSrc} alt={s2.imageAlt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Tablet only section */}
      <SectionWrapper
        contentClassName="flex items-center justify-center h-"
        className="hidden sm:block md:hidden"
      >
        <div className="h-[80vh] w-[calc(2*(80vh/3))]">
          <div className="relative h-full w-full max-w-6xl mx-auto border-0 sm:border-2 sm:border-white rounded-xl bg-black">
            <div className="grid grid-cols-2 gap-0 w-full">
              <SquareText title={s0.title} description={s0.description} />
              <SquareImage src={s0.imageSrc} alt={s0.imageAlt} />
            </div>
            <div className="grid grid-cols-2 gap-0 w-full">
              <SquareImage src={s0.imageSrc} alt={s0.imageAlt} />
              <SquareText title={s0.title} description={s0.description} />
            </div>
            <div className="grid grid-cols-2 gap-0 w-full">
              <SquareText title={s0.title} description={s0.description} />
              <SquareImage src={s0.imageSrc} alt={s0.imageAlt} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile only section */}
      <SectionWrapper
        contentClassName="flex items-start justify-center"
        className="block sm:hidden"
      >
        <div className="h-[80vh]">
          <div className="relative h-full w-full max-w-6xl mx-auto border-0 md:border-2 border-white/90 rounded-xl bg-black">
            <div className="grid grid-cols-2 gap-0 w-full h-1/3">
              <SquareText title={s0.title} description={s0.description} />
              <SquareImage src={s0.imageSrc} alt={s0.imageAlt} />
            </div>
            <div className="grid grid-cols-2 gap-0 w-full h-1/3">
              <SquareImage src={s0.imageSrc} alt={s0.imageAlt} />
              <SquareText title={s0.title} description={s0.description} />
            </div>
            <div className="grid grid-cols-2 gap-0 w-full h-1/3 ">
              <SquareText title={s0.title} description={s0.description} />
              <SquareImage src={s0.imageSrc} alt={s0.imageAlt} />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

function SquareText({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative overflow-hidden  aspect-auto sm:aspect-square">
      <div className="absolute inset-0 flex flex-col pt-4 lg:pt-8 px-4 lg:px-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide uppercase text-white mb-2 ">
          {title}
        </h3>
        <p className="text-xs sm:text-[clamp(0.6rem,1.7vh,1.15rem)] leading-relaxed text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
}

function SquareImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden aspect-[10/11] sm:aspect-square ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

