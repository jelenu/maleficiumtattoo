import { useState } from "react";
import Image from "next/image";

export default function CarouselShop({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;

  return (
    <div className="flex w-full flex-row md:flex-col">
      {/* Imagen principal */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900">
        <Image
          src={images[idx]}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="400px"
          unoptimized
        />
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <>
          {/* Lateral (vertical) en móvil */}
          <div className="flex flex-col justify-start gap-2 ml-4 md:hidden">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                className={`relative w-16 h-16 rounded overflow-hidden border-2 ${
                  idx === i ? "border-white" : "border-transparent"
                }`}
                onClick={() => setIdx(i)}
                aria-label={`Select image ${i + 1}`}
                tabIndex={0}
              >
                <Image
                  src={img}
                  alt={`${alt} thumbnail ${i + 1}`}
                  fill
                  className={`object-cover object-center transition-all duration-200 ${
                    idx === i ? "" : "brightness-50"
                  }`}
                  sizes="64px"
                  unoptimized
                />
              </button>
            ))}
          </div>

          {/* Debajo (horizontal) en tablet y PC */}
          <div className="hidden md:flex justify-center gap-2 mt-4 w-full flex-wrap">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                className={`relative w-16 h-16 rounded overflow-hidden border-2 ${
                  idx === i ? "border-white" : "border-transparent"
                }`}
                onClick={() => setIdx(i)}
                aria-label={`Select image ${i + 1}`}
                tabIndex={0}
              >
                <Image
                  src={img}
                  alt={`${alt} thumbnail ${i + 1}`}
                  fill
                  className={`object-cover object-center transition-all duration-200 ${
                    idx === i ? "" : "brightness-50"
                  }`}
                  sizes="64px"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
