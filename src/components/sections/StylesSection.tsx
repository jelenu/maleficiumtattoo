"use client";
import { SectionWrapper, Text } from "@/components/ui";
import Image from "next/image";
import { motion } from "framer-motion";

import { useIntlayer } from "next-intlayer";
export default function StylesSection() {
  const t = useIntlayer("styles");

  return (
    <>
      {/* Desktop/PC section: 2 rows x 3 columns, matching AboutStudioSection size */}
      <SectionWrapper className="hidden xl:flex justify-center" animateOnScroll={false}>
        <div className="max-w-[85rem] max-h-[50rem] h-full py-10 xl:py-15 px-30">
          <div className=" h-full w-full grid grid-cols-3 grid-rows-2">
            {/* Column 1: Text (top) | Image (bottom) */}
            <motion.div
              className="h-full w-full bg-black border-t-2 border-l-2 border-white"
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TextTile
                title={t.styles?.[0]?.title.value}
                description={t.styles?.[0]?.description.value}
                className="h-full"
              />
            </motion.div>
            <motion.div
              className="h-full w-full bg-black border-t-2 border-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImgTile
                src={t.styles?.[1]?.imageSrc.value}
                alt={t.styles?.[1]?.imageAlt.value}
                className="h-full"
              />
            </motion.div>
            <motion.div
              className="h-full w-full bg-black border-t-2 border-r-2 border-white"
              initial={{ opacity: 0, x: 250 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TextTile
                title={t.styles?.[2]?.title.value}
                description={t.styles?.[2]?.description.value}
                className="h-full"
              />
            </motion.div>

            {/* Bottom row */}
            <motion.div
              className="h-full w-full bg-black border-b-2 border-l-2 border-white"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImgTile
                src={t.styles?.[0]?.imageSrc.value}
                alt={t.styles?.[0]?.imageAlt.value}
                className="h-full"
              />
            </motion.div>
            <motion.div
              className="h-full w-full bg-black border-b-2 border-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TextTile
                title={t.styles?.[1]?.title.value}
                description={t.styles?.[1]?.description.value}
                className="h-full"
              />
            </motion.div>
            <motion.div
              className="h-full w-full bg-black border-b-2 border-r-2 border-white"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImgTile
                src={t.styles?.[2]?.imageSrc.value}
                alt={t.styles?.[2]?.imageAlt.value}
                className="h-full"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Tablet only section */}
      <SectionWrapper className="hidden sm:block xl:hidden" animateOnScroll={false}>
        <div className="bg-black h-full w-full">
          {/* Row 1: Text | Image */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <motion.div
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TextTile
                title={t.styles?.[0]?.title.value}
                description={t.styles?.[0]?.description.value}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 250 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImgTile
                src={t.styles?.[0]?.imageSrc.value}
                alt={t.styles?.[0]?.imageAlt.value}
              />
            </motion.div>
          </div>

          {/* Row 2: Image | Text */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <motion.div
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImgTile
                src={t.styles?.[1]?.imageSrc.value}
                alt={t.styles?.[1]?.imageAlt.value}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 250 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TextTile
                title={t.styles?.[1]?.title.value}
                description={t.styles?.[1]?.description.value}
              />
            </motion.div>
          </div>

          {/* Row 3: Text | Image */}
          <div className="grid grid-cols-2 h-1/3 w-full">
            <motion.div
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TextTile
                title={t.styles?.[2]?.title.value}
                description={t.styles?.[2]?.description.value}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 250 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ImgTile
                src={t.styles?.[2]?.imageSrc.value}
                alt={t.styles?.[2]?.imageAlt.value}
              />
            </motion.div>
          </div>
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
          {/* Row 1: Text (izquierda) | Image (derecha) */}
          <div className="grid grid-cols-2 h-1/3 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                viewport={{ once: true, amount: 0.2 }}
              >
              <TextTile
                title={t.styles?.[0]?.title.value}
                description={t.styles?.[0]?.description.value}
              />
            </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                viewport={{ once: true, amount: 0.2 }}
              >
              <ImgTile
                src={t.styles?.[0]?.imageSrc.value}
                alt={t.styles?.[0]?.imageAlt.value}
              />
            </motion.div>
          </div>

          {/* Row 2: Image (izquierda) | Text (derecha) */}
          <div className="grid grid-cols-2 h-1/3 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                viewport={{ once: true, amount: 0.2 }}
              >
              <ImgTile
                src={t.styles?.[1]?.imageSrc.value}
                alt={t.styles?.[1]?.imageAlt.value}
              />
            </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                viewport={{ once: true, amount: 0.2 }}
              >
              <TextTile
                title={t.styles?.[1]?.title.value}
                description={t.styles?.[1]?.description.value}
              />
            </motion.div>
          </div>

          {/* Row 3: Text (izquierda) | Image (derecha) */}
          <div className="grid grid-cols-2 h-1/3 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] } }}
                viewport={{ once: true, amount: 0.2 }}
              >
              <TextTile
                title={t.styles?.[2]?.title.value}
                description={t.styles?.[2]?.description.value}
              />
            </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] } }}
                viewport={{ once: true, amount: 0.2 }}
              >
              <ImgTile
                src={t.styles?.[2]?.imageSrc.value}
                alt={t.styles?.[2]?.imageAlt.value}
              />
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

function TextTile({ title, description, className = "" }: { title?: string | null; description?: string | null; className?: string }) {
  return (
    <div className={`h-full flex flex-col p-3 sm:p-10 ${className}`}>
      <Text variant="h3" className="uppercase tracking-wide text-white mb-2">
        {title || ""}
      </Text>
      <Text variant="description" muted>
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
