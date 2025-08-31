'use client';

import { useEffect, useState } from 'react';
import { InteractiveMap } from '@/components/ui';
import { Footer } from '@/components/layout';

export default function MapSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="h-screen snap-start bg-black pt-45 flex flex-col">
      <div className="flex-1 w-full">
        <div className="h-130 w-full">
          {isClient && (
            <InteractiveMap
              coordinates={[48.21440360933248, 15.636723973788701]}
              zoom={13}
              height="h-130"
              iconSize={[90, 120]}
              googleMapsUrl="https://maps.app.goo.gl/CfyHb8syvbtj6ESf7"
            />
          )}
        </div>
      </div>
      
      {/* Footer integrado en la sección del mapa */}
      <Footer />
    </section>
  );
}
