"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Music2, Globe } from 'lucide-react';
import { useParams } from 'next/navigation';
import { getLang, tr } from '@/utils/i18n';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
  const t = {
    rights: tr(lang, {
      en: `© ${currentYear} Maleficium Tattoo Studio. All rights reserved.`,
      de: `© ${currentYear} Maleficium Tattoo Studio. Alle Rechte vorbehalten.`,
      es: `© ${currentYear} Maleficium Tattoo Studio. Todos los derechos reservados.`,
    }),
    privacy: tr(lang, { en: 'Privacy Policy', de: 'Datenschutz', es: 'Política de privacidad' }),
    terms: tr(lang, { en: 'Terms of Service', de: 'Nutzungsbedingungen', es: 'Términos del servicio' }),
  } as const;

  return (
    <footer className="bg-black border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Versión móvil (< md): logo izquierda, redes derecha (2x2) */}
        <div className="md:hidden flex flex-col gap-4">
          {/* fila superior móvil con padding lateral extra */}
          <div className="flex w-full items-center justify-between px-10">
            <div className="shrink-0">
              <Image
                src="/images/mf.png"
                alt="Maleficium Tattoo Studio"
                width={80}
                height={80}
                className="h-15 w-auto"
              />
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/maleficiumtattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform duration-300 flex justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.facebook.com/maleficiumtattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform duration-300 flex justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.tiktok.com/@maleficiumtattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform duration-300 flex justify-center"
                aria-label="TikTok"
              >
                <Music2 className="w-6 h-6" />
              </Link>

              <Link
                href="https://business.google.com/maleficiumtattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform duration-300 flex justify-center"
                aria-label="Google Business"
              >
                <Globe className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="text-center text-white">
            <p className="text-xs mb-3">
              {t.rights}
            </p>
            <div className="flex flex-row justify-center gap-4 text-xs">
              <Link
                href={`/${locale || 'de'}/privacy-policy`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.privacy}
              </Link>
              <Link
                href={`/${locale || 'de'}/terms-of-service`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.terms}
              </Link>
            </div>
          </div>
        </div>

        {/* Versión tablet/desktop (>= md) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-20">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/maleficiumLogo.png"
              alt="Maleficium Tattoo Studio"
              width={80}
              height={100}
              className="h-25 w-auto"
            />
          </div>

          <div className="text-center text-white">
            <p className="text-sm mb-3">
              {t.rights}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs">
              <Link
                href={`/${locale || 'de'}/privacy-policy`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.privacy}
              </Link>
              <Link
                href={`/${locale || 'de'}/terms-of-service`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.terms}
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <Link
              href="https://www.instagram.com/maleficiumtattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>

            <Link
              href="https://www.facebook.com/maleficiumtattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </Link>

            <Link
              href="https://www.tiktok.com/@maleficiumtattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform duration-300"
              aria-label="TikTok"
            >
              <Music2 className="w-6 h-6" />
            </Link>

            <Link
              href="https://business.google.com/maleficiumtattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform duration-300"
              aria-label="Google Business"
            >
              <Globe className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
