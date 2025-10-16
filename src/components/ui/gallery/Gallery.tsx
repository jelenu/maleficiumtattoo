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
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const visibleImages = images.slice(0, visibleCount);

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
      onClick={() => setSelectedImage(null)}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] p-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-auto h-auto max-h-[90vh] flex justify-center items-center cursor-pointer"
          onClick={() => setSelectedImage(null)}
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
            onClick={() => setSelectedImage(img)}
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
