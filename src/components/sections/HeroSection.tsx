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

    const alreadyLoaded =
      window.__APP_LOADED || sessionStorage.getItem("app_loaded") === "1";

    if (alreadyLoaded) {
      setReady(true);
      return;
    }

    const onReady = () => setReady(true);

    window.addEventListener("app-loaded", onReady);

    const fallback = window.setTimeout(onReady, 1200);

    return () => {
      window.removeEventListener("app-loaded", onReady);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <SectionWrapper
      backgroundVideo="/images/hero-video.webm"
      videoPoster="/images/fondo.webp"
      animateOnScroll={ready}
    >
      {/* Layout para móvil */}
      <div className="flex flex-col items-center space-y-8 md:hidden">
        <motion.div
          className="-mt-24"
          key={ready ? "logo-mobile-ready" : "logo-mobile-wait"}
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
            src="/images/mf.webp"
            alt={String(t.logoAltMobile)}
            width={250}
            height={250}
            className="max-w-full max-h-full object-contain"
            priority
          />
        </motion.div>

        <motion.div
          key={ready ? "cta-mobile-ready" : "cta-mobile-wait"}
          initial={{ opacity: 0, y: 24 }}
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
            src="/images/maleficium.webp"
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

{/* Información inferior */}
<div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-6xl z-20 px-3 lg:px-16 border-t border-white">
  <div className="flex flex-col lg:flex-row text-white text-center min-h-[72px] py-2 lg:py-4 gap-2 lg:gap-0">

    {/* Dirección */}
    <div className="flex flex-col justify-center items-center w-full lg:flex-1 relative px-1 lg:border-r lg:border-white/60">
      <Text
        variant="subtitle"
        className="font-semibold text-xs lg:text-base text-center"
      >
        {t.addressLabel}
      </Text>
      <Text
        variant="small"
        className="text-xs lg:text-sm text-center"
      >
        {t.address}
      </Text>
    </div>

    {/* Línea horizontal: solo móvil y tablet */}
    <div className="w-full h-px bg-white/40 lg:hidden" />

    {/* WhatsApp y horario */}
    <div className="flex flex-row w-full lg:flex-1">

      {/* WhatsApp */}
      <div className="flex flex-col justify-center items-center flex-1 relative px-1">
        <a
          href="https://wa.me/436766726865"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center hover:underline cursor-pointer"
        >
          <Text
            variant="subtitle"
            className="font-semibold text-xs lg:text-base text-center"
          >
            {t.phoneLabel}
          </Text>
        </a>

        <a
          href="tel:+436766726865"
          className="text-center hover:underline cursor-pointer"
        >
          <Text
            variant="small"
            className="text-xs lg:text-sm text-center"
          >
            {t.phone}
          </Text>
        </a>
      </div>

      {/* Línea vertical */}
      <div className="w-px bg-white/40 my-1" />

      {/* Horario */}
      <div className="flex flex-col justify-center items-center flex-1 px-1">
        <Text
          variant="subtitle"
          className="font-semibold text-xs lg:text-base text-center"
        >
          {t.hoursLabel}
        </Text>
        <Text
          variant="small"
          className="text-xs lg:text-sm text-center"
        >
          {t.hours}
        </Text>
      </div>

    </div>
  </div>
</div>
    </SectionWrapper>
  );
}
