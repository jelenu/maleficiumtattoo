import Image from 'next/image';
import { SectionWrapper, Button, WhiteBox } from '@/components/ui';
import { aboutStudioContent } from '@/constants/content';

export default function AboutStudioSection() {
  return (
    <SectionWrapper
      backgroundImage="/images/fondo.png"
      contentClassName="flex items-center justify-center px-8"
    >
      {/* Recuadro con borde blanco */}
      <WhiteBox background="transparent">
        {/* Contenido */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 items-stretch bg-black/80 h-full">
          
          {/* Contenido izquierdo */}
          <div className="p-12 space-y-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              {aboutStudioContent.title}
            </h2>
            
            {aboutStudioContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-md text-gray-300 font-body leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <Button variant="outline" size="md" className="mt-8 self-start">
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
    </SectionWrapper>
  );
}
