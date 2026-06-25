"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Star } from "lucide-react";
import { useParams } from "next/navigation";
import { getLang, tr } from "@/utils/i18n";

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
    privacy: tr(lang, {
      en: "Privacy Policy",
      de: "Datenschutz",
      es: "Política de privacidad",
    }),
    terms: tr(lang, {
      en: "Terms of Service",
      de: "Nutzungsbedingungen",
      es: "Términos del servicio",
    }),
  } as const;

  const reviewsUrl =
    "https://www.google.com/search?q=maleficiumtattoo+reviews";

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=maleficiumtattoo";

  return (
    <footer className="bg-black border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-4">

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

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/maleficiumtattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>

              {/* Maps */}
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform duration-300"
                aria-label="Location"
              >
                <MapPin className="w-6 h-6" />
              </Link>

              {/* Reviews */}
              <Link
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform duration-300"
                aria-label="Reviews"
              >
                <Star className="w-6 h-6" />
              </Link>

            </div>

          </div>

          <div className="text-center text-white">
            <p className="text-xs mb-3">{t.rights}</p>

            <div className="flex flex-row justify-center gap-4 text-xs">
              <Link
                href={`/${locale || "de"}/privacy-policy`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.privacy}
              </Link>

              <Link
                href={`/${locale || "de"}/terms-of-service`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.terms}
              </Link>
            </div>
          </div>

        </div>

        {/* ================= DESKTOP ================= */}
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
            <p className="text-sm mb-3">{t.rights}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs">
              <Link
                href={`/${locale || "de"}/privacy-policy`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.privacy}
              </Link>

              <Link
                href={`/${locale || "de"}/terms-of-service`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.terms}
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end gap-4">

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/maleficiumtattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>

            {/* Maps */}
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform duration-300"
              aria-label="Location"
            >
              <MapPin className="w-6 h-6" />
            </Link>

            {/* Reviews */}
            <Link
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform duration-300"
              aria-label="Reviews"
            >
              <Star className="w-6 h-6" />
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}