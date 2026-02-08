import { useState } from "react";
import Image from "next/image";

export default function CarouselMerch({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;
  return (
    <div className="flex flex-col xl:flex-row gap-4 items-start">
      {/* Imagen principal */}
      <div className="w-full xl:flex-1">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-zinc-900">
          <Image
            src={images[idx]}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="400px"
            unoptimized
          />
        </div>
      </div>
      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="w-full xl:w-32">
          <div className="flex xl:flex-col justify-center xl:justify-start gap-2 mt-4 xl:mt-0">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                className={`relative w-16 h-16 rounded overflow-hidden border-2 flex-shrink-0 ${
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
        </div>
      )}
    </div>
  );
}