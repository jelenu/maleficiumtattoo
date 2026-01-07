"use client";
import Image from "next/image";
import { SectionWrapper, Button } from "@/components/ui";
import { useIntlayer } from "react-intlayer";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Text from "@/components/ui/basics/Text";


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
              ? {
                  opacity: 1,
                  transition: {
                    duration: 2,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
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
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : undefined
          }
          viewport={ready ? { once: true, amount: 0.2 } : undefined}
        >
          <Button variant="outline" size="lg" onClick={goContact}>
            {t.cta}
          </Button>
        </motion.div>
      </div>

      {/* Layout para desktop */}
      <div className="relative hidden md:block">
        <motion.div
          key={ready ? "logo-desktop-ready" : "logo-desktop-wait"}
          initial={{ opacity: 0 }}
          whileInView={
            ready
              ? {
                  opacity: 1,
                  transition: {
                    duration: 2,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : undefined
          }
          viewport={ready ? { once: true, amount: 0.2 } : undefined}
        >
          <Image
            src="/images/maleficium.png"
            alt={String(t.logoAlt)}
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain mb-32"
            priority
          />
        </motion.div>

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-40"
          key={ready ? "cta-desktop-ready" : "cta-desktop-wait"}
          initial={{ opacity: 0, y: 24 }}
          whileInView={
            ready
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 2,
                    delay: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : undefined
          }
          viewport={ready ? { once: true, amount: 0.2 } : undefined}
        >
          <Button variant="outline" size="lg" onClick={goContact}>
            {t.cta}
          </Button>
        </motion.div>
      </div>
      {/* Tres columnas en la parte inferior pegadas abajo */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-6xl z-20 px-16 border-t border-white">
        <div className="flex flex-row text-white text-center text-lg min-h-[72px] py-4">
          <div className="flex flex-col justify-center items-center flex-1 relative">
            <Text variant="subtitle" className="font-semibold">{t.addressLabel}</Text>
            <Text variant="small">{t.address}</Text>
            <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 h-3/4 border-r border-white/60"></div>
          </div>
          <div className="flex flex-col justify-center items-center flex-1 relative">
            <Text variant="subtitle" className="font-semibold">{t.phoneLabel}</Text>
            <Text variant="small">{t.phone}</Text>
            <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 h-3/4 border-r border-white/60"></div>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <Text variant="subtitle" className="font-semibold">{t.hoursLabel}</Text>
            <Text variant="small">{t.hours}</Text>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
