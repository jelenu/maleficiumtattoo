"use client";

import { SectionWrapper } from "@/components/ui";
import { ContactInfo } from "@/components/ui";
import ContactForm from "@/components/ui/contactForm/ContactForm";

export default function ContactSection() {
  return (
    <>
      {/* Desktop (xl) */}
      <SectionWrapper className="hidden xl:flex justify-center ">
        <div className="max-w-[85rem] max-h-[50rem] h-full py-10 xl:py-15 px-30">
          <div className="grid grid-cols-[55%_45%] h-full   p-6 bg-black border-2 border-white">
            {/* Columna izquierda - Información de contacto */}
            <div className="flex flex-col h-full ">
              <ContactInfo />
            </div>

            {/* Columna derecha - Formulario */}
            <div className="flex flex-col h-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* Tablet (md to < xl): Contact Info + Form en el mismo section */}
      <SectionWrapper className="hidden md:block xl:hidden">
        <div className="w-full h-full bg-black  px-10 py-10 flex flex-col gap-5">
          <div className="flex h-full">
            <ContactInfo />
          </div>
          <div className="h-full">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      {/* Mobile (< md): Contact Info */}
      <SectionWrapper className="md:hidden xl:hidden ">
        <div className="w-full h-full bg-black p-8">
          <ContactInfo />
        </div>
      </SectionWrapper>

      {/* Mobile (< md): Contact Form */}
      <SectionWrapper className="md:hidden xl:hidden" contentClassName="bg-black">
        <div className="w-full h-full bg-black pt-6 px-4 pb-10">
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
