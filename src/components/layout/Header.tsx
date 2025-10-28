"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useIntlayer } from "next-intlayer";
import { useParams, usePathname } from "next/navigation";
import { FaShoppingBasket } from "react-icons/fa";

export default function Header() {
  const t = useIntlayer("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale } = useParams<{ locale?: string }>();
  const pathname = usePathname() || "/";

  // Locale/flags config
  const locales = [
    { code: "de", label: "Deutsch", flag: "de" },
    { code: "en", label: "English", flag: "gb" },
    { code: "es", label: "Español", flag: "es" },
  ];
  const supportedLocales = ["de", "en", "es"] as const;

  // detect locale from url (e.g. "/en/..." -> "en")
  const currentLocaleFromPath = supportedLocales.find((l) =>
    pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  const activeLocale = (locale as string) || currentLocaleFromPath || "en";

  // Helpers: normalize paths robustly
  const ensureLeadingSlash = (p: string) => (p.startsWith("/") ? p : `/${p}`);
  const collapseSlashes = (p: string) => p.replace(/\/+/g, "/");

  // Always return absolute locale-prefixed path, normalized.
  const toLocalePath = (path: string) => {
    const abs = ensureLeadingSlash(path);
    return collapseSlashes(`/${activeLocale}${abs}`);
  };

  // Crear href para cambiar de idioma: quitar cualquier prefijo de locale y añadir el nuevo
  const getHrefForLocale = (target: string) => {
    // usa pathname actual (ya garantizado por hook) y elimina prefijo de idioma si existe
    let p = pathname;
    // strip leading locale segment if present
    p = p.replace(/^\/(de|en|es)(?=\/|$)/, "");
    // ensure "/" when empty
    if (p === "") p = "/";
    return collapseSlashes(`/${target}${ensureLeadingSlash(p) === "/" ? "" : p}`);
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
              <Link href={toLocalePath("/")}>
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
              <Link href={toLocalePath("/")}>
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
            <Link href={toLocalePath("/gallery")} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">
              {t.nav.gallery.value}
            </Link>
            <Link href={toLocalePath("/artists")} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">
              {t.nav.artists.value}
            </Link>
            <Link href={toLocalePath("/studio")} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">
              {t.nav.studio.value}
            </Link>
            <Link href={toLocalePath("/shop")} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">
              {t.nav.shop.value}
            </Link>
            <Link href={toLocalePath("/blog")} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">
              {t.nav.blog.value}
            </Link>
            <Link href={toLocalePath("/contact")} className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">
              {t.nav.contact.value}
            </Link>

            {/* Language selector (desktop) */}
            <div className="flex items-center gap-2 px-4 border-x border-white/30">
              {locales.map((langOpt) => (
                <Link
                  key={langOpt.code}
                  href={getHrefForLocale(langOpt.code)}
                  aria-label={`Change language to ${langOpt.label}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${activeLocale === langOpt.code ? "" : "opacity-70 hover:opacity-100"}`}
                >
                  <span
                    className={`tracking-widest ${activeLocale === langOpt.code ? "text-sm font-semibold" : "text-xs"}`}
                  >
                    {langOpt.code.toUpperCase()}
                  </span>
                </Link>
              ))}
              
            </div>
            <div>
              {/* Carrito */}
              <Link
                href={toLocalePath("/shop/cart")}
                aria-label="Go to cart"
                className="ml-2 flex items-center hover:scale-110 transition-transform"
              >
                <FaShoppingBasket size={20} className="text-white" />
              </Link>
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
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 bg-black transition-[max-height,opacity] duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-b-2 border-b-white`}
        >
          <div className="px-4 pt-3 pb-5 space-y-3">
            <Link href={toLocalePath("/gallery")} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.gallery.value}</Link>
            <Link href={toLocalePath("/artists")} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.artists.value}</Link>
            <Link href={toLocalePath("/studio")} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.studio.value}</Link>
            <Link href={toLocalePath("/shop")} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.shop.value}</Link>
            <Link href={toLocalePath("/blog")} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.blog.value}</Link>
            <Link href={toLocalePath("/contact")} className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t.nav.contact.value}</Link>

            {/* Language selector (mobile) */}
            <div className="flex items-center gap-2">
              {locales.map((langOpt) => (
                <Link
                  key={langOpt.code}
                  href={getHrefForLocale(langOpt.code)}
                  aria-label={`Change language to ${langOpt.label}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${activeLocale === langOpt.code ? "" : "opacity-70 hover:opacity-100"}`}
                >
                  <span
                    className={`tracking-widest ${activeLocale === langOpt.code ? "text-sm font-semibold" : "text-xs"}`}
                  >
                    {langOpt.code.toUpperCase()}
                  </span>
                </Link>
              ))}
              {/* Carrito */}
              <Link
                href={toLocalePath("/shop/cart")}
                aria-label="Ir al carrito"
                className="ml-2 flex items-center hover:scale-110 transition-transform"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingBasket size={28} className="text-white" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
