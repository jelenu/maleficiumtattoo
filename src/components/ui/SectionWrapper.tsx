import { ReactNode } from 'react';
import Image from 'next/image';

interface SectionWrapperProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
  snapStart?: boolean;
  className?: string;
  contentClassName?: string;
}

export default function SectionWrapper({
  children,
  backgroundImage,
  backgroundAlt = 'Background',
  snapStart = true,
  className = '',
  contentClassName = ''
}: SectionWrapperProps) {
  const snapClass = snapStart ? 'snap-start' : '';
  
  return (
    <section className={`relative h-screen ${snapClass} ${className}`}>
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <>
          {/* Background Image */}
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className="object-cover z-0"
            priority
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/90" />
        </>
      )}
      
      {/* Content */}
      <div className={`relative z-20 ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}
