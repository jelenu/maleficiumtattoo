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
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyLoaded = window.__APP_LOADED || sessionStorage.getItem('app_loaded') === '1';

    const markLoaded = () => {
      setIsLoading(false);
      requestAnimationFrame(() => {
        window.__APP_LOADED = true;
        sessionStorage.setItem('app_loaded', '1');
        document.documentElement.classList.add('app-loaded');
        window.dispatchEvent(new Event('app-loaded'));
      });
    };

    if (alreadyLoaded || prefersReducedMotion) {
      markLoaded();
      return;
    }

    // Función para verificar si todo está cargado
    const handleLoad = () => {
      // Delay mínimo para evitar flash y no bloquear el LCP
      const finish = () => markLoaded();
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback?.(finish);
      } else {
        setTimeout(finish, 250);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
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
