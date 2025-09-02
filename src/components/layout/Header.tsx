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
    <header className="fixed top-0 left-0 w-full h-18 md:h-22 lg:h-24 xl:h-26 bg-black text-white px-2 md:px-6 lg:px-8 xl:px-20 py-3 md:py-4 lg:py-5 xl:py-6 shadow-lg border-b-2 border-white z-50">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto flex items-center justify-between px-4 md:px-0">
        {/* Title */}
        <div className="flex items-center">
          {/* Logo para móvil */}
          <div className="md:hidden">
            <Image
              src="/images/mf.png"
              alt="Maleficium Tattoo Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          
          {/* Texto para desktop */}
          <div className="hidden md:flex flex-col">
            <h1 className="text-xl lg:text-3xl xl:text-3xl font-bold font-display">Maleficium Tattoo</h1>
            <p className="text-sm lg:text-lg xl:text-lg text-gray-300 font-display">Das Tattoostudio im Herzen von St. Pölten</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-14">
          <Link href="/" className="text-2xl  hover:scale-110 transition-transform duration-200 font-display">
            Home
          </Link>
          <Link href="/gallery" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Gallery
          </Link>
          <Link href="/artists" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Artists
          </Link>
          <Link href="/studio" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Studio
          </Link>
          <Link href="/contact" className="text-2xl hover:scale-110 transition-transform duration-200 font-display">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`md:hidden absolute left-0 right-0 bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-b-2 border-b-white`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          <Link 
            href="/" 
            className="block text-xl font-display hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/gallery" 
            className="block text-xl font-display hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            href="/artists" 
            className="block text-xl font-display hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Artists
          </Link>
          <Link 
            href="/studio" 
            className="block text-xl font-display hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Studio
          </Link>
          <Link 
            href="/contact" 
            className="block text-xl font-display hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
