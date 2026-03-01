"use client";
import { SectionWrapper, Text } from "@/components/ui";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import { useIntlayer } from "next-intlayer";
export default function StylesSection() {
  const t = useIntlayer("styles");
  const router = useRouter();
  const { locale } = useParams<{ locale?: string }>();

  const styles = t.styles ?? [];

  const handleStyleClick = (styleIndex: number) => {
    const styleMap = ['blackwork', 'ignorant', 'new-school', 'fineline'];
    const style = styleMap[styleIndex];
    const galleryUrl = style
      ? (locale ? `/${locale}/gallery?style=${style}` : `/gallery?style=${style}`)
      : (locale ? `/${locale}/gallery` : `/gallery`);
    router.push(galleryUrl);
  };

  type TileKind = "text" | "image";
  type TileSpec = { kind: TileKind; index: number; borderClass?: string; motionX?: number; delay?: number };

  const renderTile = (spec: TileSpec, className = "") => {
    const item = styles[spec.index];
    if (!item) return null;
    return spec.kind === "text" ? (
      <TextTile
        title={item.title?.value}
        description={item.description?.value}
        className={className}
        onClick={() => handleStyleClick(spec.index)}
      />
    ) : (
      <ImgTile
        src={item.imageSrc?.value}
        alt={item.imageAlt?.value}
        className={className}
      />
    );
  };

  const desktopTopRow: TileSpec[] = [
    { kind: "text", index: 0, borderClass: "border-t-2 border-l-2 border-white", motionX: -250, delay: 0.2 },
    { kind: "image", index: 1, borderClass: "border-t-2 border-white", motionX: -250, delay: 0.2 },
    { kind: "text", index: 2, borderClass: "border-t-2 border-white", motionX: 250, delay: 0.2 },
    { kind: "image", index: 3, borderClass: "border-t-2 border-r-2 border-white", motionX: 250, delay: 0.2 },
  ];

  const desktopBottomRow: TileSpec[] = [
    { kind: "image", index: 0, borderClass: "border-b-2 border-l-2 border-white", motionX: -200, delay: 0.2 },
    { kind: "text", index: 1, borderClass: "border-b-2 border-white", motionX: -200, delay: 0.2 },
    { kind: "image", index: 2, borderClass: "border-b-2 border-white", motionX: 200, delay: 0.2 },
    { kind: "text", index: 3, borderClass: "border-b-2 border-r-2 border-white", motionX: 200, delay: 0.2 },
  ];

  const tabletRows: TileSpec[][] = [
    [
      { kind: "text", index: 0, motionX: -250, delay: 0.2 },
      { kind: "image", index: 0, motionX: 250, delay: 0.2 },
    ],
    [
      { kind: "image", index: 1, motionX: -250, delay: 0.4 },
      { kind: "text", index: 1, motionX: 250, delay: 0.4 },
    ],
    [
      { kind: "text", index: 2, motionX: -250, delay: 0.6 },
      { kind: "image", index: 2, motionX: 250, delay: 0.6 },
    ],
    [
      { kind: "image", index: 3, motionX: -250, delay: 0.8 },
      { kind: "text", index: 3, motionX: 250, delay: 0.8 },
    ],
  ];

  const mobileRows: TileSpec[][] = [
    [
      { kind: "text", index: 0, delay: 0.2 },
      { kind: "image", index: 0, delay: 0.2 },
    ],
    [
      { kind: "image", index: 1, delay: 0.4 },
      { kind: "text", index: 1, delay: 0.4 },
    ],
    [
      { kind: "text", index: 2, delay: 0.6 },
      { kind: "image", index: 2, delay: 0.6 },
    ],
    [
      { kind: "image", index: 3, delay: 0.8 },
      { kind: "text", index: 3, delay: 0.8 },
    ],
  ];

  return (
    <>
      {/* Desktop/PC section: 2 rows x 4 columns */}
      <SectionWrapper className="hidden xl:flex justify-center" animateOnScroll={false}>
        <div className="max-w-[85rem] max-h-[50rem] h-full py-10 xl:py-15 px-30">
          <div className="h-full w-full grid grid-cols-4 grid-rows-2">
            {desktopTopRow.map((spec, idx) => (
              <motion.div
                key={`top-${idx}`}
                className={`h-full w-full bg-black ${spec.borderClass ?? ""}`}
                initial={{ opacity: 0, x: spec.motionX ?? 0 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: spec.delay ?? 0.2, ease: [0.16, 1, 0.3, 1] } }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {renderTile(spec, "h-full")}
              </motion.div>
            ))}
            {desktopBottomRow.map((spec, idx) => (
              <motion.div
                key={`bottom-${idx}`}
                className={`h-full w-full bg-black ${spec.borderClass ?? ""}`}
                initial={{ opacity: 0, x: spec.motionX ?? 0 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: spec.delay ?? 0.2, ease: [0.16, 1, 0.3, 1] } }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {renderTile(spec, "h-full")}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Tablet only section */}
      <SectionWrapper className="hidden sm:block xl:hidden" animateOnScroll={false}>
        <div className="bg-black h-full w-full">
          {tabletRows.map((row, rowIndex) => (
            <div key={`tablet-row-${rowIndex}`} className="grid grid-cols-2 h-1/4 w-full">
              {row.map((spec, colIndex) => (
                <motion.div
                  key={`tablet-${rowIndex}-${colIndex}`}
                  initial={{ opacity: 0, x: spec.motionX ?? 0 }}
                  whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: spec.delay ?? 0.2, ease: [0.16, 1, 0.3, 1] } }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {renderTile(spec)}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Mobile only section */}
      {/* Mobile only section */}
      <SectionWrapper className="block sm:hidden" animateOnScroll={false}>
        {/* Contenedor principal con fade */}
        <motion.div
          className="bg-black h-full w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {mobileRows.map((row, rowIndex) => (
            <div key={`mobile-row-${rowIndex}`} className="grid grid-cols-2 h-1/4 w-full">
              {row.map((spec, colIndex) => (
                <motion.div
                  key={`mobile-${rowIndex}-${colIndex}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1.2, delay: spec.delay ?? 0.2, ease: [0.16, 1, 0.3, 1] } }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {renderTile(spec)}
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}

function TextTile({ title, description, className = "", onClick }: { title?: string | null; description?: string | null; className?: string; onClick?: () => void }) {
  return (
    <div className={`h-full flex flex-col p-6 ${className}`}>
      <div 
        className={`${onClick ? 'cursor-pointer hover:text-zinc-300 transition-colors' : ''}`}
        onClick={onClick}
      >
        <Text variant="stylesTitle" className="uppercase tracking-wide text-white mb-2">
          {title || ""}
        </Text>
      </div>
      <Text variant="stylesBody" muted>
        {description || ""}
      </Text>
    </div>
  );
}

function ImgTile({ src, alt, className = "" }: { src?: string | null; alt?: string | null; className?: string }) {
  // Si no hay src válido, no renderizamos la imagen (preservamos layout con un contenedor vacío)
  if (!src) {
    return <div className={`relative h-full w-full ${className}`} />;
  }
  return (
    <div className={`relative h-full w-full ${className}`}>
      <Image src={src} alt={alt || ""} fill className="h-full w-full object-cover" />
    </div>
  );
}
