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
        <div className="flex justify-center items-center gap-32">
          
          {/* Carta 1 - Alexis */}
          <div className="flex flex-col items-center">
            {/* Nombre del artista arriba */}
            <h3 className="text-4xl font-display text-white mb-6">Alexis</h3>
            
            <div className="flip-card w-96 h-[500px]">
              <div className="flip-card-inner">
                {/* Frente de la carta */}
                <div className="flip-card-front">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/images/alexis.jpg"
                      alt="Alexis - Tattoo Artist"
                      width={384}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Parte trasera de la carta */}
                <div className="flip-card-back">
                  <div className="w-full h-full bg-black rounded-lg shadow-2xl p-8 flex flex-col justify-center items-center text-center">
                    <p className="text-gray-300 font-body mb-8 leading-relaxed text-lg">
                      Especialista en tatuajes realistas y blackwork. Con más de 8 años de experiencia creando obras únicas que reflejan la personalidad de cada cliente.
                    </p>
                    <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 text-lg">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carta 2 - Segundo Artista */}
          <div className="flex flex-col items-center">
            {/* Nombre del artista arriba */}
            <h3 className="text-4xl font-display text-white mb-6">Manu</h3>
            
            <div className="flip-card w-96 h-[500px]">
              <div className="flip-card-inner">
                {/* Frente de la carta */}
                <div className="flip-card-front">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/images/alexis.jpg"
                      alt="Segundo Artista"
                      width={384}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Parte trasera de la carta */}
                <div className="flip-card-back">
                  <div className="w-full h-full bg-black rounded-lg shadow-2xl p-8 flex flex-col justify-center items-center text-center">
                    <p className="text-gray-300 font-body mb-8 leading-relaxed text-lg">
                      Maestro en tatuajes tradicionales y neo-tradicionales. Su estilo único combina técnicas clásicas con elementos modernos.
                    </p>
                    <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 text-lg">
                      View Portfolio
                    </button>
                  </div>
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
