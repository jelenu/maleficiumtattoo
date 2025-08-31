'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui';
import ContactInfo from '@/components/ui/ContactInfo';
import ContactForm from '@/components/forms/ContactForm';
import GoogleReviews from '@/components/features/GoogleReviews';
import { reviewsData } from '@/utils/reviewsData';

export default function ContactSection() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <SectionWrapper
      backgroundImage="/images/fondo.png"
      contentClassName="flex items-center justify-center overflow-hidden"
    >
      {/* Contenido */}
      <div className="w-full max-w-7xl mx-auto px-8 py-20 mt-20">
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
    </SectionWrapper>
  );
}
