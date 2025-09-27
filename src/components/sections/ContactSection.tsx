"use client";

import { useState } from "react";
import { SectionWrapper, WhiteBox } from "@/components/ui";
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
        <WhiteBox background="black" className="max-h-[650px]">
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
        </WhiteBox>

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
        <WhiteBox background="black" className="md:max-h-[600px] border-2 border-b-0 ">
          <div className="flex flex-col h-full p-8 pb-20">
            <ContactInfo onShowReviews={() => setShowReviews(true)} />
          </div>
        </WhiteBox>

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
        <WhiteBox background="black" className="md:max-h-[600px]">
          <div className="flex flex-col h-full p-6">
            <ContactForm />
          </div>
        </WhiteBox>
      </SectionWrapper>
    </>
  );
}
