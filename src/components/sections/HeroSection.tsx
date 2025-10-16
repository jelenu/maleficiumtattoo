"use client";
import Image from "next/image";
import { SectionWrapper, Button } from '@/components/ui';
import { useIntlayer } from "react-intlayer";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Añadir tipado para la propiedad global
declare global {
  interface Window {
    __APP_LOADED?: boolean;
  }
}

export default function HeroSection() {
  const t = useIntlayer("hero");
  const router = useRouter();
  const { locale } = useParams<{ locale?: string }>();
  const contactHref = locale ? `/${locale}/contact` : "/contact";
  const goContact = () => router.push(contactHref);

  // Esperar a que el LoadingScreen termine
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__APP_LOADED) {
      setReady(true);
      return;
    }
    const onReady = () => setReady(true);
    window.addEventListener("app-loaded", onReady);
    return () => window.removeEventListener("app-loaded", onReady);
  }, []);

  return (
    <SectionWrapper 
      backgroundImage="/images/bg.jpg"
      backgroundAlt={String(t.bgAlt)}
      animateOnScroll={ready}
    >
      {/* Layout para móvil */}
      <div className="flex flex-col items-center space-y-8 md:hidden">
        <motion.div
          key={ready ? "logo-mobile-ready" : "logo-mobile-wait"}
          initial={{ opacity: 0 }} // oculto antes de animar
          whileInView={
            ready
              ? { opacity: 1, transition: { duration: 2, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
              : undefined
          }
          viewport={ready ? { once: true, amount: 0.2 } : undefined}
        >
          <Image
            src="/images/mf.png"
            alt={String(t.logoAltMobile)}
            width={300}
            height={300}
            className="max-w-full max-h-full object-contain"
            priority
          />
        </motion.div>

        <motion.div
          key={ready ? "cta-mobile-ready" : "cta-mobile-wait"}
          initial={{ opacity: 0, y: 24 }} // oculto y desplazado antes de animar
          whileInView={
            ready
              ? { opacity: 1, y: 0, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
              : undefined
          }
          viewport={ready ? { once: true, amount: 0.2 } : undefined}
        >
          <Button variant="outline" size="lg" onClick={goContact}>{t.cta}</Button>
        </motion.div>
      </div>

      {/* Layout para desktop */}
      <div className="relative hidden md:block">
        <motion.div
          key={ready ? "logo-desktop-ready" : "logo-desktop-wait"}
          initial={{ opacity: 0 }} // oculto antes de animar
          whileInView={
            ready
              ? { opacity: 1, transition: { duration: 2, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
              : undefined
          }
          viewport={ready ? { once: true, amount: 0.2 } : undefined}
        >
          <Image
            src="/images/maleficium.png"
            alt={String(t.logoAlt)}
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
            priority
          />
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          key={ready ? "cta-desktop-ready" : "cta-desktop-wait"}
          initial={{ opacity: 0, y: 24 }} // oculto y desplazado antes de animar
          whileInView={
            ready
              ? { opacity: 1, y: 0, transition: { duration: 2, delay: 0.25, ease: [0.16, 1, 0.3, 1] } }
              : undefined
          }
          viewport={ready ? { once: true, amount: 0.2 } : undefined}
        >
          <Button variant="outline" size="lg" onClick={goContact}>{t.cta}</Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
