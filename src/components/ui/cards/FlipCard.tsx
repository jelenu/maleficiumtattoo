"use client";

import Image from "next/image";
import Text from "@/components/ui/basics/Text";
import { useParams } from 'next/navigation';
import { getLang } from '@/utils/i18n';

interface FlipCardProps {
  name: string;
  image: string;
  role: string;
  description: string;

  // Behavior
  hoverFlip?: boolean; // desktop: flip con hover
  flipped?: boolean;   // móvil: flip controlado
  onToggle?: () => void;
  guardToggle?: () => boolean; // evita flip si no corresponde (e.g., hubo swipe)

  // UI customization
  className?: string;         // clases extra del wrapper
  sizeClass?: string;         // clases de tamaño del wrapper (w/h)
  frontOverlayClass?: string; // overlay gradiente del frente
  backClass?: string;         // clases del panel trasero
  hintText?: string;          // hint en el frente (Hover/Tap to read bio)
  backHintText?: string;      // hint en el reverso (Tap to flip back)

  // CTA
  showCta?: boolean;
  ctaLabel?: string;
  onCtaClick?: () => void;

  // Image
  imagePriority?: boolean;
}

export default function FlipCard({
  name,
  image,
  role,
  description,
  hoverFlip = false,
  flipped = false,
  onToggle,
  guardToggle,
  className = "",
  sizeClass = "",
  frontOverlayClass,
  backClass,
  hintText,
  backHintText,
  showCta = true,
  ctaLabel,
  onCtaClick,
  imagePriority = false,
}: FlipCardProps) {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
  const i18n = {
    viewPortfolio: { en: 'View Portfolio', de: 'Portfolio ansehen', es: 'Ver portfolio' }[lang],
    hoverToRead: { en: 'Hover to read bio', de: 'Zum Lesen der Bio hover', es: 'Pasa el ratón para leer la bio' }[lang],
    tapToRead: { en: 'Tap to read bio', de: 'Tippen, um Bio zu lesen', es: 'Toca para leer la bio' }[lang],
    tapToFlip: { en: 'Tap to flip back', de: 'Tippen zum Zurückdrehen', es: 'Toca para volver' }[lang],
  };
  const interactive = !!onToggle && !hoverFlip;

  // Defaults adaptados a desktop (hover) o móvil (tap)
  const resolvedFrontOverlay =
    frontOverlayClass ??
    (hoverFlip
      ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      : "bg-gradient-to-t from-black/85 via-black/30 to-transparent");

  const resolvedBackClass =
    backClass ??
    (hoverFlip ? "bg-black p-15" : "bg-black/95 p-6 md:py-20 md:px-15");

  const resolvedHintText = hintText ?? (hoverFlip ? i18n.hoverToRead : i18n.tapToRead);

  const resolvedBackHintText = backHintText ?? (hoverFlip ? undefined : i18n.tapToFlip);
  const computedCtaLabel = ctaLabel ?? i18n.viewPortfolio;

  const handleClick = () => {
    if (!interactive) return;
    if (guardToggle && !guardToggle()) return;
    onToggle?.();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (!interactive) return;
    // Solo dispara si el foco está en el contenedor (evita conflictos con CTA)
    if (e.currentTarget !== e.target) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (guardToggle && !guardToggle()) return;
      onToggle?.();
    }
  };

  return (
    <div
      className={`group relative ${sizeClass} aspect-[4/5] ${className} [perspective:75rem]`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : -1}
      aria-label={
        interactive
          ? flipped
            ? `Ocultar biografía de ${name}`
            : `Ver biografía de ${name}`
          : undefined
      }
      aria-pressed={interactive ? flipped : undefined}
    >
      <div
        className={[
          "relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]",
          hoverFlip ? "group-hover:[transform:rotateY(180deg)]" : "",
          flipped ? "[transform:rotateY(180deg)]" : "",
        ].join(" ")}
      >
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 [backface-visibility:hidden]">
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={`${name} - ${role}`}
              fill
              sizes="100vw"
              className="object-cover w-full h-full transform-gpu transition-transform duration-700"
              priority={imagePriority}
            />
          </div>
          <div className={`absolute inset-0 ${resolvedFrontOverlay}`} />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start text-left">
            <Text variant="h3" className="text-3xl text-white drop-shadow-md font-display">
              {name}
            </Text>
            <Text
              variant="subtitle"
              className="mt-2 tracking-wider bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-md border border-white/20"
            >
              {role}
            </Text>
            {resolvedHintText ? (
              <Text variant="caption" className="mt-4 text-xs text-gray-300 opacity-80">
                {resolvedHintText}
              </Text>
            ) : null}
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 flex flex-col items-center rounded-xl text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ring-1 ring-white/10 ${resolvedBackClass}`}
        >
          <Text variant="h2" className="text-white">
            {name}
          </Text>
          <div className="flex-1 flex items-center justify-center w-full">
            <Text variant="description" align="center">
              {description}
            </Text>
          </div>
          {showCta ? (
            <button
              className="mt-4 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md text-center self-center"
              onClick={(e) => {
                e.stopPropagation(); // evita flip al clickear el CTA
                onCtaClick?.();
              }}
            >
              <Text variant="description" className="font-semibold text-black" align="center">
                {computedCtaLabel}
              </Text>
            </button>
          ) : null}
          {resolvedBackHintText ? (
            <Text variant="caption" className="mt-2 text-[10px] text-gray-400" align="center">
              {resolvedBackHintText}
            </Text>
          ) : null}
        </div>
      </div>
    </div>
  );
}
