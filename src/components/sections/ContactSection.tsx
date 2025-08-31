'use client';

import Image from 'next/image';
import { useState } from 'react';
import ContactInfo from '@/components/ui/ContactInfo';
import ContactForm from '@/components/forms/ContactForm';
import GoogleReviews from '@/components/features/GoogleReviews';
import { reviewsData } from '@/utils/reviewsData';

export default function ContactSection() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <section className="h-screen snap-start relative flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/fondo.png"
        alt="Background"
        fill
        className="object-cover z-0"
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/90 z-10" />
      
      {/* Contenido */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 py-20 mt-20">
        <div className="border-2 border-white bg-black p-10 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Columna izquierda - Información de contacto */}
            <ContactInfo onShowReviews={() => setShowReviews(true)} />
            
            {/* Columna derecha - Formulario */}
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
    </section>
  );
}
