"use client";

import { useState } from "react";
import { ContactInfo } from "@/components/ui";
import ContactForm from "@/components/ui/contactForm/ContactForm";
import GoogleReviews from "@/components/features/GoogleReviews";
import { reviewsData } from "@/utils/reviewsData";
import { Footer } from "@/components/layout";

export default function ContactPage() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <main className="flex flex-col min-h-screen ">
      {/* Desktop (xl) */}
      <div className="hidden xl:flex flex-col flex-1 relative z-20 pt-safe-top pt-[5.5rem]">
        {/* Contenedor centrado */}
        <div className="flex flex-1 justify-center items-center">
          <div className="max-w-[85rem] w-full h-auto py-10 xl:py-15 px-30">
            <div className="grid grid-cols-[55%_45%] h-full bg-black border-2 border-white p-6">
              {/* Columna izquierda - Información de contacto */}
              <div className="flex flex-col justify-center">
                <ContactInfo onShowReviews={() => setShowReviews(true)} />
              </div>

              {/* Columna derecha - Formulario */}
              <div className="flex flex-col justify-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Popup */}
        <GoogleReviews
          showReviews={showReviews}
          setShowReviews={setShowReviews}
          reviews={reviewsData}
        />
      </div>

      {/* Tablet (md to < xl) */}
      <div className="hidden md:block xl:hidden flex-1 p-0 pt-safe-top pt-[4rem] md:pt-[4.5rem] bg-black  relative z-20 box-border">
        <div className="w-full h-full bg-black px-15 py-10 flex flex-col gap-5">
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
          reviews={reviewsData}
        />
      </div>

      {/* Mobile (< md): Contact Info */}
      <div className="md:hidden xl:hidden p-0 pt-safe-top pt-[4rem] relative z-20 box-border">
        <div className="w-full h-full bg-black p-8">
          <ContactInfo onShowReviews={() => setShowReviews(true)} />
        </div>
        <GoogleReviews
          showReviews={showReviews}
          setShowReviews={setShowReviews}
          reviews={reviewsData}
        />
      </div>

      {/* Mobile (< md): Contact Form */}
      <div className="md:hidden xl:hidden">
        <div className="w-full h-full bg-black p-6 pb-20">
          <ContactForm />
        </div>
      </div>

      {/* Footer siempre al final */}
      <Footer />
    </main>
  );
}
