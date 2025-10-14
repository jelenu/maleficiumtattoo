"use client";

import { ContactFormProps } from "@/types";
import { useState, useEffect } from "react";
import {
  Button,
  Input,
  TextArea,
  FormField,
  PhoneInput,
  Alert,
} from "@/components/ui";
import Text from "@/components/ui/basics/Text";
import { validateCountryCode, validatePhoneNumber } from "@/utils/validation";
import { useParams } from "next/navigation";
import { getLang, tr } from "@/utils/i18n";

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
  const t = {
    heading: tr(lang, { en: "Contact Us", de: "Kontaktiere uns", es: "Contáctanos" }),
    firstName: tr(lang, { en: "First Name", de: "Vorname", es: "Nombre" }),
    lastName: tr(lang, { en: "Last Name", de: "Nachname", es: "Apellido" }),
    firstNamePH: tr(lang, { en: "Your first name", de: "Dein Vorname", es: "Tu nombre" }),
    lastNamePH: tr(lang, { en: "Your last name", de: "Dein Nachname", es: "Tu apellido" }),
    phoneNumber: tr(lang, { en: "Phone Number", de: "Telefonnummer", es: "Número de teléfono" }),
    email: tr(lang, { en: "Email", de: "E-Mail", es: "Correo electrónico" }),
    emailPH: tr(lang, { en: "your.email@example.com", de: "dein.email@beispiel.de", es: "tu.email@ejemplo.com" }),
    description: tr(lang, { en: "Detailed Description", de: "Detaillierte Beschreibung", es: "Descripción detallada" }),
    descriptionPH: tr(lang, {
      en: "Please describe your tattoo idea, preferred artist, budget, and availability...",
      de: "Bitte beschreibe deine Tattoo-Idee, bevorzugten Künstler, Budget und Verfügbarkeit...",
      es: "Describe tu idea de tatuaje, artista preferido, presupuesto y disponibilidad...",
    }),
    refImage: tr(lang, { en: "Reference Image (optional)", de: "Referenzbild (optional)", es: "Imagen de referencia (opcional)" }),
    submit: tr(lang, { en: "Submit Request", de: "Anfrage senden", es: "Enviar solicitud" }),
    success: tr(lang, { en: "Message sent successfully! We will contact you soon.", de: "Nachricht erfolgreich gesendet! Wir melden uns bald.", es: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto." }),
    error: tr(lang, { en: "Error sending message", de: "Fehler beim Senden der Nachricht", es: "Error al enviar el mensaje" }),
    connError: tr(lang, { en: "Connection error. Please try again.", de: "Verbindungsfehler. Bitte versuche es erneut.", es: "Error de conexión. Por favor, inténtalo de nuevo." }),
  } as const;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [phoneError, setPhoneError] = useState<string>("");
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Antes:  Ahora: móvil + tablet (<=1279px)
    const mq = window.matchMedia("(max-width: 1279px)");
    const update = () => setIsTablet(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setPhoneError("");

    try {
      const formData = new FormData(e.currentTarget);

      const countryCode = formData.get("countryCode") as string;
      const phoneNumber = formData.get("phone") as string;

      const countryCodeValidation = validateCountryCode(countryCode);
      if (!countryCodeValidation.isValid) {
        setPhoneError(countryCodeValidation.error || "");
        setIsSubmitting(false);
        return;
      }

      const phoneValidation = validatePhoneNumber(phoneNumber);
      if (!phoneValidation.isValid) {
        setPhoneError(phoneValidation.error || "");
        setIsSubmitting(false);
        return;
      }

      const fullPhoneNumber = `${countryCode} ${phoneNumber}`;
      formData.set("phone", fullPhoneNumber);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: t.success,
        });

        const form = e.currentTarget;
        if (form) {
          form.reset();
        }

        setTimeout(() => {
          setMessage(null);
        }, 5000);

        if (onSubmit) {
          onSubmit(formData);
        }
      } else {
        setMessage({
          type: "error",
          text: result.error || t.error,
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: t.connError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" relative h-full flex flex-col ">
      {message && (
        <Alert
          type={message.type}
          message={message.text}
          onClose={() => setMessage(null)}
          className="absolute top-2 left-2 right-2 z-10"
        />
      )}

      {/* Heading solo móvil */}
      <Text variant="h2" className="md:hidden w-full !text-center">
        {t.heading}
      </Text>

      <form className="flex flex-col h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col  justify-evenly h-full mb-6">
          {/* First Name y Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField label={t.firstName} htmlFor="firstName" required>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder={t.firstNamePH}
              />
            </FormField>

            <FormField label={t.lastName} htmlFor="lastName" required>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder={t.lastNamePH}
              />
            </FormField>
          </div>

          {/* Phone + Email: juntos solo entre md y xl */}
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <FormField
              label={t.phoneNumber}
              htmlFor="phone"
              required
              error={phoneError}
            >
              <PhoneInput
                countryCodeName="countryCode"
                phoneNumberName="phone"
                defaultCountryCode="+43"
                error={phoneError}
                onErrorChange={setPhoneError}
                required
              />
            </FormField>

            <FormField label={t.email} htmlFor="email" required>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t.emailPH}
              />
            </FormField>
          </div>

          {/* Detailed Description */}
          <FormField
            label={t.description}
            htmlFor="description"
            required
          >
            <TextArea
              id="description"
              name="description"
              rows={isTablet ? 2 : 4} 
              required
              placeholder={t.descriptionPH}
            />
          </FormField>

          {/* Image Upload */}
          <FormField label={t.refImage} htmlFor="image">
            <Input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className=" file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
            />
          </FormField>
        </div>

        {/* Submit Button pegado abajo */}
        <div className="mt-auto">
          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            {t.submit}
          </Button>
        </div>
      </form>
    </div>
  );
}
