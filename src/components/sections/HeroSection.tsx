import Image from "next/image";
import { SectionWrapper, Button } from '@/components/ui';

export default function HeroSection() {
  return (
    <SectionWrapper 
      backgroundImage="/images/bg.jpg"
      backgroundAlt="Fondo"
      contentClassName="flex flex-col"
    >
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="relative">
          <Image
            src="/images/maleficium.png"
            alt="Maleficium Tattoo Logo"
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
            priority
          />
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
    </SectionWrapper>
  );
}
