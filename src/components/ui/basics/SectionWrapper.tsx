"use client";

import { ReactNode, ElementType, useEffect } from "react";
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
}: SectionWrapperProps) {
  const snapClass = snapStart ? "snap-start" : "";
  const WrapperTag: ElementType = as || "section";
  const bgImage = backgroundImage ?? "/images/fondo.png";

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
      className={`relative ${
        dynamicHeight ? "h-[calc(var(--vh)*100)]" : "h-screen"
      } ${snapClass} ${className}`}
    >


      {/* Content */}
      <div
        className={`p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.5rem] relative z-20 h-full box-border ${contentClassName}`}
      >
        {children}
      </div>

      {/* Background */}
      {bgImage ? (
        <>
          <Image
            src={bgImage}
            alt={backgroundAlt}
            fill
            className={imgClassName}
            priority={priority}
            sizes={sizes}
          />
          {!disableOverlay && (
            <div className={`absolute inset-0 z-10 pointer-events-none ${overlayClassName}`} />
          )}
        </>
      ) : (
        <div className="absolute inset-0 z-0 bg-black" />
      )}
    </WrapperTag>
  );
}
