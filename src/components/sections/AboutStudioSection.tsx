"use client";
import Image from "next/image";
import alexisMobile from "../../../public/images/alexishorizontal21.jpg";
import alexisTablet from "../../../public/images/alexishorizontal.jpg";
import { SectionWrapper, Button, Text } from "@/components/ui";
import { motion } from "framer-motion";
import { useIntlayer } from "next-intlayer";
import { useRouter, useParams } from "next/navigation";

export default function AboutStudioSection() {
  const t = useIntlayer("about");
  const router = useRouter();
  const { locale } = useParams<{ locale?: string }>();
  const contactHref = locale ? `/${locale}/contact` : "/contact";
  const goContact = () => router.push(contactHref);

  return (
    <>
      {/* Sección Desktop/PC */}
      <SectionWrapper
        className="hidden xl:flex justify-center"
        animateOnScroll={false}
      >
        <div className="max-w-[85rem] max-h-[50rem] h-full py-10 xl:py-15 px-30">
          <div className="flex h-full">
            {/* Contenido izquierdo */}
            <motion.div
              className="flex-[2] border-2 border-r-0 bg-black border-white p-8 lg:p-10 xl:p-13 flex flex-col justify-between h-full"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Text variant="h2" className="text-white">
                {t.title.value}
              </Text>

              <div className="space-y-4 lg:space-y-6">
                {t.paragraphs.map((paragraph, index) => (
                  <Text key={index} variant="body" muted>
                    {paragraph}
                  </Text>
                ))}
              </div>

              <Button variant="outline" size="lg" className="self-start" onClick={goContact}>
                {t.buttonText.value}
              </Button>
            </motion.div>

            <motion.div
              className="h-full flex items-center"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={"/images/alexis.jpg"}
                alt={t.imageAlt.value}
                width={1600}
                height={1067}
                className="h-full w-auto object-contain"
                style={{ height: "100%", width: "auto" }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Sección Móvil/Tablet */}
      <SectionWrapper className="xl:hidden" animateOnScroll={false}>
        <div className=" w-full h-full bg-black flex flex-col">
          {/* Imagen arriba */}
          <motion.div
            className="md:hidden w-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={alexisMobile}
              alt={t.imageAlt.value}
              width={alexisMobile.width}
              height={alexisMobile.height}
              style={{ width: "100%", height: "auto" }}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
          <motion.div
            className="hidden md:flex w-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={alexisTablet}
              alt={t.imageAlt.value}
              width={alexisTablet.width}
              height={alexisTablet.height}
              style={{ width: "100%", height: "auto" }}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Contenido abajo */}
          <div className="flex-1 p-3 py-2 md:px-10 flex flex-col justify-evenly">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Text variant="h2" className="text-white" fluidMobile fluidTablet>
                {t.title.value}
              </Text>
            </motion.div>

            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 2,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {t.paragraphs.map((paragraph, index) => (
                <Text key={index} variant="body" muted fluidMobile fluidTablet>
                  {paragraph}
                </Text>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 2,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center md:justify-start"
            >
              <Button variant="outline" size="lg" onClick={goContact}>
                {t.buttonText.value}
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
