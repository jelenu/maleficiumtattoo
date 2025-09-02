"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { SectionWrapper } from '@/components/ui';

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      src: "/images/tattoo.jpg",
      alt: "Tattoo Work 1",
      title: "Trabajo 1",
      description: "Descripción del primer trabajo",
    },
    {
      src: "/images/tattoo.jpg",
      alt: "Tattoo Work 2",
      title: "Trabajo 2",
      description: "Descripción del segundo trabajo",
    },
    {
      src: "/images/tattoo.jpg",
      alt: "Tattoo Work 3",
      title: "Trabajo 3",
      description: "Descripción del tercer trabajo",
    },
    {
      src: "/images/tattoo.jpg",
      alt: "Tattoo Work 4",
      title: "Trabajo 4",
      description: "Descripción del cuarto trabajo",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <SectionWrapper
      contentClassName="relative h-full overflow-hidden"
    >
      {/* Carousel Container */}
      <div className="relative h-full w-full">
        {/* Images */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-full w-full flex-shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark overlay */}
              <div className="absolute bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Anterior"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Siguiente"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-80"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
