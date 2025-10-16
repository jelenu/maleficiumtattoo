"use client";

import { ContactInfoProps } from "@/types";
import { GoogleReviewsButton, Button } from "@/components/ui";
import { ChevronDown } from "lucide-react";
import Text from "@/components/ui/basics/Text";
import { useIntlayer } from "next-intlayer";
export default function ContactInfo({ onShowReviews }: ContactInfoProps) {
  const t = useIntlayer("contact-info");

  const scrollToNextSection = () => {
    // Busca el <section> contenedor y luego el siguiente <section>
    const currentSection = document.activeElement
      ? (document.activeElement as HTMLElement).closest("section")
      : null;
    const section = currentSection || document.querySelector("section:has(button[data-next-section])");
    if (section) {
      let next = section.nextElementSibling;
      while (next && next.tagName.toLowerCase() !== "section") {
        next = next.nextElementSibling;
      }
      if (next instanceof HTMLElement) {
        next.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="flex flex-col h-full xl:px-4 ">
      {/* Contenido que se reparte en toda la altura */}
      <div className="flex flex-col flex-grow justify-between mb-3">
        <Text variant="h2" >
          {t.title.value}
        </Text>

        <div className="flex flex-col flex-grow justify-evenly text-gray-300">
          {t.info.map((text, index) => (
            <Text
              key={index}
              variant="body"
            >
              {text}
            </Text>
          ))}

          <div>
            <Text
              variant="h3"
            >
              {t.touchUpsTitle.value}
            </Text>
            <Text
              variant="caption"
            >
              {t.touchUpsContent.value}
            </Text>
          </div>
        </div>
      </div>

      {/* Google Reviews Button - pegado abajo */}
      <div className="mt-auto flex items-center justify-between">
        <GoogleReviewsButton onClick={onShowReviews} />
        <Button
          className="md:hidden"
          data-next-section
          onClick={scrollToNextSection}
          aria-label={t.nextSectionAria.value}
        >
          <ChevronDown className="w-6 h-8" />
        </Button>
      </div>
    </div>
  );
}
