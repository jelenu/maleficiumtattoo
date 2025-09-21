"use client";

import { ContactFormProps } from "@/types";
import { useState } from "react";
import {
  Button,
  Input,
  TextArea,
  FormField,
  PhoneInput,
  Alert,
} from "@/components/ui";
import { validateCountryCode, validatePhoneNumber } from "@/utils/validation";

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [phoneError, setPhoneError] = useState<string>("");

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
          text: "Message sent successfully! We will contact you soon.",
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
          text: result.error || "Error sending message",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Connection error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/60 p-2 backdrop-blur-sm relative h-full flex flex-col">
      {message && (
        <Alert
          type={message.type}
          message={message.text}
          onClose={() => setMessage(null)}
          className="absolute top-2 left-2 right-2 z-10"
        />
      )}

      <form className="flex flex-col h-full" onSubmit={handleSubmit}>
        {/* Contenedor de filas distribuidas */}
        <div className="flex flex-col flex-grow justify-evenly h-full mb-3">
          {/* First Name y Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormField label="First Name" htmlFor="firstName" required>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="Your first name"
              />
            </FormField>

            <FormField label="Last Name" htmlFor="lastName" required>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Your last name"
              />
            </FormField>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-2  gap-3">
            <FormField
              label="Phone Number"
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

            <FormField label="Email" htmlFor="email" required>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
            </FormField>
          </div>

          {/* Detailed Description */}
          <FormField
            label="Detailed Description"
            htmlFor="description"
            required
          >
            <TextArea
              id="description"
              name="description"
              rows={3}
              required
              placeholder="Please describe your tattoo idea, preferred artist, budget, and availability..."
            />
          </FormField>

          {/* Image Upload */}
          <FormField label="Reference Image (optional)" htmlFor="image">
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
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
}
