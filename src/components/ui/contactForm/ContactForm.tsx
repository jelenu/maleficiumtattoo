"use client";

import { ContactFormProps } from "@/types";
import { useState, useEffect} from "react";
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
import { useIntlayer } from "next-intlayer";

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const t = useIntlayer("contact-form");

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
          text: t.success.value,
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
          text: result.error || t.error.value,
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: t.connError.value,
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
        {t.heading.value}
      </Text>

      <form className="flex flex-col h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col  justify-evenly h-full mb-6">
          {/* First Name y Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField label={t.firstName.value} htmlFor="firstName" required>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder={t.firstNamePH.value}
              />
            </FormField>

            <FormField label={t.lastName.value} htmlFor="lastName" required>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder={t.lastNamePH.value}
              />
            </FormField>
          </div>

          {/* Phone + Email: juntos solo entre md y xl */}
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            <FormField
              label={t.phoneNumber.value}
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

            <FormField label={t.email.value} htmlFor="email" required>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t.emailPH.value}
              />
            </FormField>
          </div>

          {/* Detailed Description */}
          <FormField
            label={t.description.value}
            htmlFor="description"
            required
          >
            <TextArea
              id="description"
              name="description"
              rows={isTablet ? 2 : 4}
              required
              placeholder={t.descriptionPH.value}
            />
          </FormField>

          {/* Image Upload */}
          <FormField label={t.refImage.value} htmlFor="image">
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
            {t.submit.value}
          </Button>
        </div>
      </form>
    </div>
  );
}
