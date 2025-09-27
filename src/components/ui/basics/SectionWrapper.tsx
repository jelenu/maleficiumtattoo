import { ReactNode } from "react";
import Image from "next/image";

interface SectionWrapperProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
  snapStart?: boolean;
  className?: string;
  contentClassName?: string;
  /** Tailwind classes for the dark overlay above the background image */
  overlayClassName?: string;
  /** Disable the overlay entirely */
  disableOverlay?: boolean;
}

export default function SectionWrapper({
  children,
  backgroundImage,
  backgroundAlt = "Background",
  snapStart = true,
  className = "",
  contentClassName = "",
  overlayClassName = "bg-black/90",
  disableOverlay = false,
}: SectionWrapperProps) {
  const snapClass = snapStart ? "snap-start" : "";

  return (
    <section
      className={`relative mobile-viewport h-screen-dynamic ${snapClass} ${className}`}
    >
      {/* Header Spacer - Always present for all sections */}
      <div className="h-18 md:h-22 lg:h-24 xl:h-26"></div>

      {/* Content */}
      <div
        className={`relative z-20 h-[calc(100vh-4.5rem)] h-[calc(-webkit-fill-available-4.5rem)] md:h-[calc(100vh-5.5rem)] md:h-[calc(-webkit-fill-available-5.5rem)] lg:h-[calc(100vh-6rem)] lg:h-[calc(-webkit-fill-available-6rem)] xl:h-[calc(100vh-6.5rem)] xl:h-[calc(-webkit-fill-available-6.5rem)] p-0 md:py-16  ${contentClassName}`}
      >
        {children}
      </div>

      {/* Background */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className="object-cover z-0"
            priority
          />
          {!disableOverlay && (
            <div className={`absolute inset-0 z-10 pointer-events-none ${overlayClassName}`} />
          )}
        </>
      ) : (
        <div className="absolute inset-0 z-0 bg-black" />
      )}
    </section>
  );
}
