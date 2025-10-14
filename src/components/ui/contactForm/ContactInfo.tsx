"use client";

import { ContactInfoProps } from "@/types";
import { GoogleReviewsButton, Button } from "@/components/ui";
import { ChevronDown } from "lucide-react";
import Text from "@/components/ui/basics/Text";
import { useParams } from "next/navigation";
import { getLang, tr } from "@/utils/i18n";

export default function ContactInfo({ onShowReviews }: ContactInfoProps) {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);

  const t = {
    title: tr(lang, { en: "Contact Us", de: "Kontaktiere uns", es: "Contáctanos" }),
    info: tr(lang, {
      en: [
        "Please check your spam folder for our response a few days after sending— some of our replies have been going there.",
        "Please let us know which artist you would like to contact. Provide as much written detail as you can regarding your desired tattoo, appointment availability, and budget (€150.00 minimum), and we will get back to you as soon as we can. All deposits are non refundable.",
        "You must be 18 years old to get tattooed. (ID required)",
      ],
      de: [
        "Bitte prüfen Sie einige Tage nach dem Senden Ihren Spam-Ordner – einige unserer Antworten landen dort.",
        "Bitte teilen Sie uns mit, an welchen Künstler Sie sich wenden möchten. Geben Sie möglichst viele Details zu Ihrem gewünschten Tattoo, Ihrer Terminverfügbarkeit und Ihrem Budget (Mindestpreis 150,00 €) an; wir melden uns so schnell wie möglich. Alle Anzahlungen sind nicht erstattungsfähig.",
        "Du musst 18 Jahre alt sein, um tätowiert zu werden. (Ausweis erforderlich)",
      ],
      es: [
        "Por favor, revisa tu carpeta de spam unos días después de enviar el mensaje; algunas de nuestras respuestas están llegando allí.",
        "Indícanos con qué artista te gustaría contactar. Proporciona la mayor cantidad de detalles posible sobre tu tatuaje, disponibilidad y presupuesto (mínimo 150,00 €) y te responderemos lo antes posible. Todos los depósitos no son reembolsables.",
        "Debes tener 18 años para tatuarte. (Se requiere identificación)",
      ],
    }),
    touchUpsTitle: tr(lang, {
      en: "TOUCH UPS (please read)",
      de: "NACHTSTECHEN (bitte lesen)",
      es: "RETOQUES (por favor leer)",
    }),
    touchUpsContent: tr(lang, {
      en: "Any touch ups on tattoos are at the artist's discretion. After 4 weeks you will know if your tattoo needs a touch up and can schedule an appointment. (Any time after that is considered natural aging.)",
      de: "Etwaige Nachstecharbeiten liegen im Ermessen des Künstlers. Nach 4 Wochen lässt sich beurteilen, ob dein Tattoo nachgestochen werden muss; vereinbare dann einen Termin. (Zeiten danach gelten als natürliche Alterung.)",
      es: "Cualquier retoque queda a discreción del artista. Tras 4 semanas sabrás si tu tatuaje necesita un retoque y podrás agendar la cita. (Después de ese tiempo se considera envejecimiento natural.)",
    }),
    nextSectionAria: tr(lang, {
      en: "Go to next section",
      de: "Zur nächsten Sektion",
      es: "Ir a la siguiente sección",
    }),
  } as const;

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
          {t.title}
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
              {t.touchUpsTitle}
            </Text>
            <Text
              variant="caption"
            >
              {t.touchUpsContent}
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
          aria-label={t.nextSectionAria}
        >
          <ChevronDown className="w-6 h-8" />
        </Button>
      </div>
    </div>
  );
}
