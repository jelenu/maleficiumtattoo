"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface GalleryImage {
  id?: string | number;
  src: string;
  alt?: string;
  title?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

const Gallery = ({ images, className }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const visibleImages = images.slice(0, visibleCount);

  const handleImageClick = (img: GalleryImage, idx: number) => {
    setSelectedImage(img);
    setSelectedIndex(idx);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex < images.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(-1);
  };

  // Infinite scroll observer
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && visibleCount < images.length) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 8, images.length));
            setIsLoading(false);
          }, 800); // Simula carga con animación
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [images.length, visibleCount]);

  if (!images || images.length === 0) {
    return <div className="text-center text-sm opacity-60">No Images</div>;
  }

  // Modal para imagen seleccionada
  const modal = selectedImage ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 pt-20"
      onClick={closeModal}
    >
      {/* Flecha izquierda */}
      {selectedIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      <div
        className="relative max-w-4xl w-full max-h-[90vh] p-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-auto h-auto max-h-[90vh] flex justify-center items-center cursor-pointer"
          onClick={closeModal}
        >
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt || selectedImage.title || "Full image"}
            width={1200}
            height={800}
            className="max-h-[80vh] w-auto h-auto object-contain rounded-md"
          />
        </div>
        {selectedImage.title && (
          <p className="text-center text-sm mt-2 text-gray-300">
            {selectedImage.title}
          </p>
        )}
      </div>

      {/* Flecha derecha */}
      {selectedIndex < images.length - 1 && (
        <button
          onClick={goToNext}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
    </div>
  ) : null;

  return (
    <>
      {/* Grid de imágenes */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 ${className || ""}`}>
        {visibleImages.map((img, idx) => (
          <figure
            key={img.id ?? idx}
            className="group relative rounded-md border border-zinc-800 bg-zinc-900 transition-transform duration-300 ease-out will-change-transform hover:scale-[1.10] hover:z-10 cursor-pointer"
            onClick={() => handleImageClick(img, idx)}
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src={img.src}
                alt={img.alt || img.title || "Gallery image"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {img.title && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/45 text-[0.65rem] px-2 py-1 leading-tight backdrop-blur-sm">
                {img.title}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Loader animado */}
      {visibleCount < images.length && (
        <div ref={loaderRef} className="flex justify-center py-8">
          {isLoading && (
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-4 border-zinc-600 border-t-zinc-200 rounded-full animate-spin"></div>
              <p className="mt-2 text-xs text-zinc-400">Loading more...</p>
            </div>
          )}
        </div>
      )}

      {/* Renderiza el modal fuera del main */}
      {typeof window !== "undefined" && createPortal(modal, document.body)}
    </>
  );
};

export default Gallery;
