"use client";
import Image from "next/image";
import { SectionWrapper, Button } from '@/components/ui';
import { useParams } from 'next/navigation';
import { getLang, tr } from '@/utils/i18n';

export default function HeroSection() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
  const t = {
    bgAlt: tr(lang, { en: 'background image', de: 'Hintergrundbild', es: 'imagen de fondo' }),
    logoAltMobile: tr(lang, { en: 'Maleficium Tattoo Logo Mobile', de: 'Maleficium Tattoo Logo Mobil', es: 'Logo Maleficium Tattoo móvil' }),
    logoAlt: tr(lang, { en: 'Maleficium Tattoo Logo', de: 'Maleficium Tattoo Logo', es: 'Logo de Maleficium Tattoo' }),
    cta: tr(lang, { en: 'Contact Us', de: 'Kontakt', es: 'Contacto' }),
  };
  return (
    <SectionWrapper 
      backgroundImage="/images/bg.jpg"
      backgroundAlt={t.bgAlt}
    >
      {/* Layout para móvil */}
      <div className="flex flex-col items-center space-y-8 md:hidden">
        <Image
          src="/images/mf.png"
          alt={t.logoAltMobile}
          width={300}
          height={300}
          className="max-w-full max-h-full object-contain"
          priority
        />
  <Button variant="outline" size="lg">{t.cta}</Button>
      </div>

      {/* Layout para desktop */}
      <div className="relative hidden md:block">
        <Image
          src="/images/maleficium.png"
          alt={t.logoAlt}
          width={800}
          height={600}
          className="max-w-full max-h-full object-contain"
          priority
        />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <Button variant="outline" size="lg">{t.cta}</Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
