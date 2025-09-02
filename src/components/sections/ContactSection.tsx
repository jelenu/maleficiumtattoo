'use client';

import { useState } from 'react';
import { SectionWrapper, WhiteBox } from '@/components/ui';
import ContactInfo from '@/components/ui/ContactInfo';
import ContactForm from '@/components/forms/ContactForm';
import GoogleReviews from '@/components/features/GoogleReviews';
import { reviewsData } from '@/utils/reviewsData';

export default function ContactSection() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <SectionWrapper
      backgroundImage="/images/fondo.png"
      contentClassName="flex items-center justify-center px-8"
    >
      {/* Contenido */}
      <WhiteBox background="black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full p-4">
            
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
  );
}
