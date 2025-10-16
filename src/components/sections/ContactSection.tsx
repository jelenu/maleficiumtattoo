"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui";
import { ContactInfo } from "@/components/ui";
import ContactForm from "@/components/ui/contactForm/ContactForm";
import GoogleReviews from "@/components/features/GoogleReviews";

export default function ContactSection() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <>
      {/* Desktop (xl) */}
      <SectionWrapper className="hidden xl:flex justify-center ">
        <div className="max-w-[85rem] max-h-[50rem] h-full py-10 xl:py-15 px-30">
          <div className="grid grid-cols-[55%_45%] h-full   p-6 bg-black border-2 border-white">
            {/* Columna izquierda - Información de contacto */}
            <div className="flex flex-col h-full ">
              <ContactInfo onShowReviews={() => setShowReviews(true)} />
            </div>

            {/* Columna derecha - Formulario */}
            <div className="flex flex-col h-full">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Reviews Popup */}
        <GoogleReviews
          showReviews={showReviews}
          setShowReviews={setShowReviews}
        />
      </SectionWrapper>
      {/* Tablet (md to < xl): Contact Info + Form en el mismo section */}
      <SectionWrapper className="hidden md:block xl:hidden">
        <div className="w-full h-full bg-black  px-15 py-10 flex flex-col gap-5">
          <div className="flex h-full">
            <ContactInfo onShowReviews={() => setShowReviews(true)} />
          </div>
          <div className="h-full">
            <ContactForm />
          </div>
        </div>
        <GoogleReviews
          showReviews={showReviews}
          setShowReviews={setShowReviews}
         
        />
      </SectionWrapper>

      {/* Mobile (< md): Contact Info */}
      <SectionWrapper className="md:hidden xl:hidden">
        <div className="w-full h-full bg-black p-8">
          <ContactInfo onShowReviews={() => setShowReviews(true)} />
        </div>
        <GoogleReviews
          showReviews={showReviews}
          setShowReviews={setShowReviews}
        />
      </SectionWrapper>

      {/* Mobile (< md): Contact Form */}
      <SectionWrapper className="md:hidden xl:hidden">
        <div className="w-full h-full bg-black p-6 pb-20">
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
