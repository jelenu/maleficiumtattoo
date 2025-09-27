import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface SectionWrapperProps {
  children: ReactNode;
  /** Accept either a path string or a StaticImageData from next/image */
  backgroundImage?: string | StaticImageData;
  backgroundAlt?: string;
  /** Enable CSS scroll-snap alignment at start */
  snapStart?: boolean;
  /** Optional id for anchor links */
  id?: string;
  /** Wrapper extra classes */
  className?: string;
  /** Content container classes */
  contentClassName?: string;
  /** Overlay classes (color/opacity) */
  overlayClassName?: string;
  /** Disable the dark overlay over the background */
  disableOverlay?: boolean;
  /** Control background <Image> priority. Default false */
  priority?: boolean;
  /** Provide sizes for responsive image with fill. Default "100vw" */
  sizes?: string;
  /** Extra classes for the background image element */
  imgClassName?: string;
  /** Render as a different HTML tag (e.g., 'div'). Default 'section' */
  as?: keyof JSX.IntrinsicElements;
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
}: SectionWrapperProps) {
  const snapClass = snapStart ? "snap-start" : "";
  const WrapperTag = as as keyof JSX.IntrinsicElements;
  const bgImage = backgroundImage ?? "/images/fondo.png";

  return (
    <WrapperTag
      id={id}
      className={`relative mobile-viewport h-screen-dynamic ${snapClass} ${className}`}
    >
  {/* Header Spacer - match Header heights */}
  <div className="h-16 md:h-18 lg:h-20 xl:h-22"></div>

      {/* Content */}
      <div
        className={`relative z-20 h-[calc(100vh-4rem)] h-[calc(-webkit-fill-available-4rem)] md:h-[calc(100vh-4.5rem)] md:h-[calc(-webkit-fill-available-4.5rem)] lg:h-[calc(100vh-5rem)] lg:h-[calc(-webkit-fill-available-5rem)] xl:h-[calc(100vh-5.5rem)] xl:h-[calc(-webkit-fill-available-5.5rem)] p-0 md:py-16  ${contentClassName}`}
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
