import Image from "next/image";
import { SectionWrapper, Button } from '@/components/ui';

export default function HeroSection() {
  return (
    <SectionWrapper 
      backgroundImage="/images/bg.jpg"
      backgroundAlt="background image"
    >
      {/* Layout para móvil */}
      <div className="flex flex-col items-center space-y-8 md:hidden">
        <Image
          src="/images/mf.png"
          alt="Maleficium Tattoo Logo Mobile"
          width={300}
          height={300}
          className="max-w-full max-h-full object-contain"
          priority
        />
        <Button variant="outline" size="lg">
          Contact Us
        </Button>
      </div>

      {/* Layout para desktop */}
      <div className="relative hidden md:block">
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
    </SectionWrapper>
  );
}
