"use client";

import Image from "next/image";

export default function ArtistsSection() {
  return (
    <section className="h-screen snap-start relative flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/fondo.png"
        alt="Background"
        fill
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/90 z-10" />
            
      {/* Contenido de la sección */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Título de la sección */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-display text-white text-center">
            Our Artists
          </h2>
        </div>

        <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-24">
          
          {/* Carta 1 - Alexis */}
          <div className="flip-card w-80 h-96">
            <div className="flip-card-inner">
              {/* Frente de la carta */}
              <div className="flip-card-front">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/alexis.jpg"
                    alt="Alexis - Tattoo Artist"
                    width={320}
                    height={384}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Parte trasera de la carta */}
              <div className="flip-card-back">
                <div className="w-full h-full bg-black rounded-lg shadow-2xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-3xl font-display text-white mb-4">Alexis</h3>
                  <p className="text-gray-300 font-body mb-6 leading-relaxed">
                    Especialista en tatuajes realistas y blackwork. Con más de 8 años de experiencia creando obras únicas que reflejan la personalidad de cada cliente.
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                    Ver Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carta 2 - Segundo Artista */}
          <div className="flip-card w-80 h-96">
            <div className="flip-card-inner">
              {/* Frente de la carta */}
              <div className="flip-card-front">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/alexis.jpg"
                    alt="Segundo Artista"
                    width={320}
                    height={384}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Parte trasera de la carta */}
              <div className="flip-card-back">
                <div className="w-full h-full bg-black rounded-lg shadow-2xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-3xl font-display text-white mb-4">Artista 2</h3>
                  <p className="text-gray-300 font-body mb-6 leading-relaxed">
                    Maestro en tatuajes tradicionales y neo-tradicionales. Su estilo único combina técnicas clásicas con elementos modernos.
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                    Ver Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      </div>
    </section>
  );
}
