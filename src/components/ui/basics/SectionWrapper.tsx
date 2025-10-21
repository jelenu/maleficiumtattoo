"use client";

import { ReactNode, ElementType, useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants, type Transition } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface SectionWrapperProps {
  children: ReactNode;
  backgroundImage?: string | StaticImageData;
  backgroundAlt?: string;
  snapStart?: boolean;
  id?: string;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
  disableOverlay?: boolean;
  priority?: boolean;
  sizes?: string;
  imgClassName?: string;
  as?: ElementType;
  /** Activar altura dinámica tipo mobile/tablet */
  dynamicHeight?: boolean;
  /** Activar animación on-scroll del contenido */
  animateOnScroll?: boolean;
  /** Tipo de animación on-scroll */
  animation?: "fade" | "fade-up" | "fade-down" | "slide-left" | "slide-right" | "zoom-in";
  /** Duración de la animación (s) */
  duration?: number;
  /** Retardo de la animación (s) */
  delay?: number;
  /** Viewport trigger options */
  inViewAmount?: number; // 0..1
  inViewOnce?: boolean;
}

export default function SectionWrapper({
  children,
  backgroundImage,
  backgroundAlt = "Background",
  snapStart = true,
  id,
  className = "",
  contentClassName = "flex items-center justify-center",
  overlayClassName = "bg-black/80",
  disableOverlay = false,
  priority = false,
  sizes = "100vw",
  imgClassName = "object-cover z-0",
  as = "section",
  dynamicHeight = true,
  animateOnScroll = true,
  animation = "fade-up",
  duration = 0.6,
  delay = 0,
  inViewAmount = 0.2,
  inViewOnce = true,
}: SectionWrapperProps) {
  const snapClass = snapStart ? "snap-start" : "";
  const WrapperTag: ElementType = as || "section";
  const prefersReducedMotion = useReducedMotion();

  // Control de fade-in del background
  const [bgLoaded, setBgLoaded] = useState(false);

  // Definir transición tipada
  const transition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration, delay, ease: [0.16, 1, 0.3, 1] }; // easeOut cubic-bezier

  // Variantes de animación
  const variants: Variants = {
    hidden: (() => {
      switch (animation) {
        case "fade":
          return { opacity: 0 };
        case "fade-down":
          return { opacity: 0, y: -24 };
        case "slide-left":
          return { opacity: 0, x: -24 };
        case "slide-right":
          return { opacity: 0, x: 24 };
        case "zoom-in":
          return { opacity: 0, scale: 0.95 };
        case "fade-up":
        default:
          return { opacity: 0, y: 24 };
      }
    })(),
    visible: { opacity: 1, x: 0, y: 0, scale: 1, transition },
  };

  // Solo activamos useEffect para mobile/tablet
  useEffect(() => {
    if (!dynamicHeight) return;

    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    window.visualViewport?.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
      window.visualViewport?.removeEventListener("resize", setVh);
    };
  }, [dynamicHeight]);

  return (
    <WrapperTag
      id={id}
      className={`relative ${dynamicHeight ? "h-[calc(var(--vh)*100)]" : "h-screen"} ${snapClass} ${className}`}
    >
      {/* Content */}
      {animateOnScroll ? (
        <motion.div
          className={`p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full box-border ${contentClassName}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: inViewOnce, amount: inViewAmount }}
          variants={variants}
        >
          {children}
        </motion.div>
      ) : (
        <div
          className={`p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full box-border ${contentClassName}`}
        >
          {children}
        </div>
      )}

      {/* Background */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className={`${imgClassName} transition-opacity duration-700 ${bgLoaded ? "opacity-100" : "opacity-0"}`}
            priority={priority}
            sizes={sizes}
            onLoad={() => setBgLoaded(true)}
          />
          {!disableOverlay && (
            <div className={`absolute inset-0 z-10 pointer-events-none ${overlayClassName}`} />
          )}
        </>
      )}
    </WrapperTag>
  );
}
