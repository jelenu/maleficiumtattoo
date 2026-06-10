"use client";

import { useEffect, useRef, useState } from 'react';
import { InteractiveMap, SectionWrapper } from '@/components/ui';
import { Footer } from '@/components/layout';
import Text from '@/components/ui/basics/Text';
import { useParams } from 'next/navigation';
import { getLang, tr } from '@/utils/i18n';
import { motion } from 'framer-motion';

export default function MapSection() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
  const t = {
    visit: tr(lang, { en: 'Visit Our Studio', de: 'Besuche unser Studio', es: 'Visita nuestro estudio' }),
  } as const;
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || shouldLoadMap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(mapContainerRef.current);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <SectionWrapper
      contentClassName="flex flex-col h-full"

    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Text
          variant="h1"
          align="center"
          className="text-white bg-black pt-6 pb-4 shrink-0"
        >
          {t.visit}
        </Text>
      </motion.div>

      <div className="flex-1 w-full relative overflow-hidden" ref={mapContainerRef}>
        {shouldLoadMap && (
          <InteractiveMap
            coordinates={[48.21440360933248, 15.636723973788701]}
            zoom={13}
            height="h-full"
            iconSize={[90, 120]}
            googleMapsUrl="https://maps.app.goo.gl/CfyHb8syvbtj6ESf7"
          />
        )}
      </div>

      {/* Footer con altura natural */}
      <div className="shrink-0">
        <Footer />
      </div>
    </SectionWrapper>
  );
}
