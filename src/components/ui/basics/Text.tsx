"use client";

import { ElementType, ReactNode } from "react";

type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "subtitle"
  | "body"
  | "small"
  | "caption";

type TextAlign = "left" | "center" | "right";
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TextLeading = "tight" | "normal" | "relaxed";
type TextTracking = "tight" | "normal" | "wide";

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  as?: ElementType;
  align?: TextAlign;
  weight?: TextWeight;
  leading?: TextLeading;
  tracking?: TextTracking;
  muted?: boolean;
  uppercase?: boolean;
  className?: string;
  /** When true, apply fluid mobile font sizes based on viewport height (only affects base < md). */
  fluidMobile?: boolean;
}

const defaultTagByVariant: Record<TextVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subtitle: "h4",
  body: "p",
  small: "p",
  caption: "span",
};

// Small utility to join classes safely
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Responsive size map using fixed sizes per breakpoint (no clamp)
const variantClasses: Record<TextVariant, string> = {
  display:
    "font-display leading-tight tracking-wide text-4xl sm:text-5xl md:text-6xl xl:text-7xl",
  h1: "font-display leading-tight text-3xl md:text-4xl xl:text-5xl",
  h2: "font-display leading-tight text-2xl sm:text-2xl md:text-3xl xl:text-4xl",
  h3: "font-display leading-snug text-lg md:text-2xl xl:text-3xl",
  subtitle:
    "font-display leading-snug text-gray-200 text-base sm:text-lg md:text-xl",
  body: "font-body leading-relaxed text-xs md:text-base xl:text-lg",
  small: "font-body leading-relaxed text-xs md:text-sm",
  caption: "font-body leading-normal text-xs md:text-[0.875rem]",
};

const weightClasses: Record<TextWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignClasses: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const leadingClasses: Record<TextLeading, string> = {
  tight: "leading-tight",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
};

const trackingClasses: Record<TextTracking, string> = {
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
};

export default function Text({
  children,
  variant = "body",
  as,
  align = "left",
  weight,
  leading,
  tracking,
  muted = false,
  uppercase = false,
  className,
  fluidMobile = false,
}: TextProps) {
  const Tag: ElementType = as || defaultTagByVariant[variant];

  // Default weight per variant if not specified
  const defaultWeight: TextWeight =
    variant === "display" || variant === "h1" || variant === "h2"
      ? "bold"
      : variant === "h3" || variant === "subtitle"
      ? "semibold"
      : "normal";

  const classes = cx(
    variantClasses[variant],
    // Optional fluid sizes for mobile (base) while md+ keeps variant defaults
    fluidMobile
      ? {
          display: "text-[clamp(2rem,6vh,3.5rem)]",
          h1: "text-[clamp(1.75rem,5vh,3rem)]",
          h2: "text-[clamp(1.5rem,4vh,2.25rem)]",
          h3: "text-[clamp(1.125rem,3vh,1.75rem)]",
          subtitle: "text-[clamp(1rem,2.6vh,1.25rem)]",
          body: "text-[clamp(0.8rem,2vh,1.5rem)]",
          small: "text-[clamp(0.875rem,1.9vh,1rem)]",
          caption: "text-[clamp(0.75rem,1.6vh,0.875rem)]",
        }[variant]
      : undefined,
    weightClasses[weight || defaultWeight],
    alignClasses[align],
    leading ? leadingClasses[leading] : undefined,
    tracking ? trackingClasses[tracking] : undefined,
    muted ? "text-gray-300" : undefined,
    uppercase ? "uppercase" : undefined,
    className
  );

  return <Tag className={classes}>{children}</Tag>;
}

export type { TextVariant };
