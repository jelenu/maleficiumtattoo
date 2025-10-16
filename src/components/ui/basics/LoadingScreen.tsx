'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Añadir tipado para la propiedad global
declare global {
  interface Window {
    __APP_LOADED?: boolean;
  }
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Función para verificar si todo está cargado
    const handleLoad = () => {
      // Esperar un poco más para asegurar que todo esté listo
      setTimeout(() => {
        setIsLoading(false);
        // Notificar que la app está lista
        requestAnimationFrame(() => {
          window.__APP_LOADED = true; // <- sin any
          document.documentElement.classList.add('app-loaded');
          window.dispatchEvent(new Event('app-loaded'));
        });
      }, 1500); // 1.5 segundos para una transición suave
    };

    // Si la página ya está cargada
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Escuchar cuando la página termine de cargar
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Logo animado */}
      <div className="relative mb-8 animate-pulse">
        <Image
          src="/images/maleficiumLogo.png"
          alt="Maleficium Tattoo Logo"
          width={300}
          height={400}
          className="max-w-full max-h-full object-contain"
          priority
        />
      </div>

      {/* Loading text */}
      <p className="text-white font-display text-xl animate-pulse">
        Loading Experience...
      </p>
    </div>
  );
}
