"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useIntlayer } from 'next-intlayer';
import { useParams, usePathname } from 'next/navigation';

export default function Header() {
  const t = useIntlayer('header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale } = useParams<{ locale?: string }>();
  const pathname = usePathname();

  const base = locale ? `/${locale}` : '';
  const withLocale = (path: string) => {
    if (path === '/') return base || '/';
    return `${base}${path}`;
  };

  // Locale/flags config
  const locales = [
    { code: 'de', label: 'Deutsch', flag: 'de' },
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'es', label: 'Español', flag: 'es' },
  ];
  const supportedLocales = ['de', 'en', 'es'] as const;
  const currentLocaleFromPath = supportedLocales.find((l) =>
    (pathname || '/').startsWith(`/${l}`)
  );
  const activeLocale = (locale as string) || currentLocaleFromPath || 'en';

  // Crear href para cambiar de idioma: quitar cualquier prefijo de locale y añadir el nuevo
  const getHrefForLocale = (target: string) => {
    const p = pathname || '/';
    const stripped = supportedLocales.reduce(
      (acc, l) => acc.replace(new RegExp(`^/${l}(?=/|$)`), ''),
      p
    );
    const normalized = stripped || '/';
    return `/${target}${normalized === '/' ? '' : normalized}`;
  };

  const flagEmojiByCode: Record<string, string> = {
    de: '🇩🇪',
    en: '🇬🇧',
    es: '🇪🇸',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full pt-safe-top h-16 md:h-[4.5rem] lg:h-20 xl:h-[5.5rem] bg-black text-white px-4 md:px-8 lg:px-10 xl:px-20 shadow-lg border-b-2 border-white z-50">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 h-full">
          {/* Brand */}
          <div className="flex items-center">
            {/* Logo para móvil */}
            <div className="xl:hidden">
              <Link href={withLocale('/')}>
                <Image
                  src="/images/mf.png"
                  alt={t.brand.logoAlt.value}
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Logo para desktop */}
            <div className="hidden xl:flex items-center">
              <Link href={withLocale('/')}>
                <Image
                  src="/images/maleficium.png"
                  alt={t.brand.titleAlt.value}
                  width={220}
                  height={50}
                  priority
                  className="h-8 lg:h-10 xl:h-20 w-auto object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - right */}
          <nav className="hidden md:flex md:col-start-3 justify-end items-center h-full space-x-10">
            <Link href={withLocale('/gallery')} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">{t.nav.gallery.value}</Link>
            <Link href={withLocale('/artists')} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">{t.nav.artists.value}</Link>
            <Link href={withLocale('/studio')} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">{t.nav.studio.value}</Link>
            <Link href={withLocale('/contact')} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">{t.nav.contact.value}</Link>

            {/* Language selector (desktop) */}
            <div className="flex items-center gap-2 pl-4 border-l border-white/30">
              {locales.map((lang) => (
                <Link
                  key={lang.code}
                  href={getHrefForLocale(lang.code)}
                  aria-label={`Change language to ${lang.label}`}
                  className={`inline-flex items-center justify-center   transition-all ${activeLocale === lang.code ? '' : 'opacity-60 hover:opacity-100'}`}
                >
                  <span aria-hidden="true" className="text-xl">{flagEmojiByCode[lang.code]}</span>
                  <span className="sr-only">{lang.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden justify-self-end flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label={`${t.a11y.toggleMenu.value}`}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 bg-black transition-[max-height,opacity] duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-b-2 border-b-white`}
        >
          <div className="px-4 pt-3 pb-5 space-y-3">
            <Link href={withLocale('/gallery')} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.gallery.value}</Link>
            <Link href={withLocale('/artists')} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.artists.value}</Link>
            <Link href={withLocale('/studio')} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.studio.value}</Link>
            <Link href={withLocale('/contact')} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.contact.value}</Link>

            {/* Language selector (mobile) */}
            <div className="flex items-center gap-4 pt-2">
              {locales.map((lang) => (
                <Link
                  key={lang.code}
                  href={getHrefForLocale(lang.code)}
                  aria-label={`Cambiar idioma a ${lang.label}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`inline-flex items-center justify-center rounded-sm ${activeLocale === lang.code ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'}`}
                >
                  <span aria-hidden="true" className="text-xl">{flagEmojiByCode[lang.code]}</span>
                  <span className="sr-only">{lang.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
