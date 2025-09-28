"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui";
import { ContactInfo } from "@/components/ui";
import ContactForm from "@/components/forms/ContactForm";
import GoogleReviews from "@/components/features/GoogleReviews";
import { reviewsData } from "@/utils/reviewsData";

export default function ContactSection() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <>
      {/* Sección para md y arriba */}
      <SectionWrapper
        backgroundImage="/images/fondo.png"
        className="hidden lg:block "

        contentClassName="items-center justify-center px-4 md:!py-10 lg:!py-16"
      >
        <div className="relative h-full w-full max-w-6xl mx-auto border-0 md:border-2 border-white/90 rounded-xl bg-black max-h-[650px]">
          <div className="grid grid-cols-[55%_45%] h-full   p-6">
            {/* Columna izquierda - Información de contacto */}
            <div className="flex flex-col h-full">
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
          reviews={reviewsData}
        />
      </SectionWrapper>

      {/* Sección móvil 1: ContactInfo + Google Reviews */}
      <SectionWrapper
        backgroundImage="/images/fondo.png"
        contentClassName=" px-15 pt-10"
        className="lg:hidden"

      >
        <div className="relative h-full w-full max-w-6xl mx-auto border-0 md:border-2 border-white/90 border-b-0 rounded-xl bg-black md:max-h-[600px]">
          <div className="flex flex-col h-full p-8 pb-20">
            <ContactInfo onShowReviews={() => setShowReviews(true)} />
          </div>
        </div>

        {/* Reviews Popup */}
        <GoogleReviews
          showReviews={showReviews}
          setShowReviews={setShowReviews}
          reviews={reviewsData}
        />
      </SectionWrapper>

      {/* Sección móvil 2: ContactForm */}
      <SectionWrapper
        backgroundImage="/images/fondo.png"
        contentClassName="  px-4 py-6"
        className="lg:hidden"

      >
        <div className="relative h-full w-full max-w-6xl mx-auto border-0 md:border-2 border-white/90 rounded-xl bg-black md:max-h-[600px]">
          <div className="flex flex-col h-full p-6">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
