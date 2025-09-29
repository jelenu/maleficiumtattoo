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
  /** When true, apply fluid tablet font sizes at md breakpoint (uses viewport height). */
  fluidTablet?: boolean;
  /** When true, apply fluid desktop font sizes at lg+ (uses vmin). */
  fluidDesktop?: boolean;
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

// Base styles per variant (no fixed font-size here)
const variantClasses: Record<TextVariant, string> = {
  display: "font-display leading-tight tracking-wide",
  h1: "font-display leading-tight",
  h2: "font-display leading-tight",
  h3: "font-display leading-snug",
  subtitle: "font-display leading-snug text-gray-200",
  body: "font-body leading-relaxed",
  small: "font-body leading-relaxed",
  caption: "font-body leading-normal",
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
  fluidMobile = true,
  fluidTablet = true,
  fluidDesktop = true,
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
    // Optional fluid sizes for tablet (md) using viewport height
    fluidTablet
      ? {
          display: "md:text-[clamp(2.25rem,5vh,3.75rem)]",
          h1: "md:text-[clamp(2rem,4.4vh,3.25rem)]",
          h2: "md:text-[clamp(1.6rem,3.2vh,2.5rem)]",
          h3: "md:text-[clamp(1.25rem,2.6vh,1.875rem)]",
          subtitle: "md:text-[clamp(1.125rem,2.3vh,1.5rem)]",
          body: "md:text-[clamp(0.9rem,1.7vh,1.4rem)]",
          small: "md:text-[clamp(0.875rem,1.7vh,1.0625rem)]",
          caption: "md:text-[clamp(0.75rem,1.5vh,0.9rem)]",
        }[variant]
      : undefined,
    // Optional fluid sizes for desktop (xl only) using vmin for balanced scaling
    fluidDesktop
      ? {
          display: "xl:text-[clamp(2.5rem,5.5vmin,5.25rem)]",
          h1: "xl:text-[clamp(2.25rem,4.8vmin,4.5rem)]",
          h2: "xl:text-[clamp(2rem,3.9vmin,3.3rem)]",
          h3: "xl:text-[clamp(1.5rem,2.9vmin,2.25rem)]",
          subtitle: "xl:text-[clamp(1.25rem,2.4vmin,1.75rem)]",
          body: "xl:text-[clamp(1.0625rem,1.8vmin,1.32rem)]",
          small: "xl:text-[clamp(0.95rem,1.5vmin,1.25rem)]",
          caption: "xl:text-[clamp(0.85rem,1.2vmin,1.0625rem)]",
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
