"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full pt-safe-top h-16 md:h-[4.5rem] lg:h-20 xl:h-[5.5rem] bg-black text-white px-4 md:px-8 lg:px-10 xl:px-20 shadow-lg border-b-2 border-white z-50">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 h-full">
        {/* Brand */}
        <div className="flex items-center">
          {/* Logo para móvil */}
          <div className="md:hidden">
            <Image
              src="/images/mf.png"
              alt="Maleficium Tattoo Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>

          {/* Logo para desktop */}
          <div className="hidden md:flex items-center">
            <Image
              src="/images/maleficium.png"
              alt="Maleficium Tattoo"
              width={220}
              height={50}
              priority
              className="h-8 lg:h-10 xl:h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation - right */}
        <nav className="hidden md:flex md:col-start-3 justify-end items-center h-full space-x-10">
          <Link href="/" className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">Home</Link>
          <Link href="/gallery" className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">Gallery</Link>
          <Link href="/artists" className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">Artists</Link>
          <Link href="/studio" className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">Studio</Link>
          <Link href="/contact" className="inline-flex items-center h-full leading-none text-2xl hover:scale-110 transition-transform duration-200 font-display">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden justify-self-end flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
          <Link href="/" className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/gallery" className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link href="/artists" className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Artists</Link>
          <Link href="/studio" className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Studio</Link>
          <Link href="/contact" className="block text-lg font-display hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}
