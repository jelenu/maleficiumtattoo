import Image from 'next/image';

export default function StylesSection() {
  return (
    <section className="h-full snap-start relative flex flex-col items-center justify-center p-24 pt-50 overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/fondo.png"
        alt="Background"
        fill
        className="object-cover z-0"
      />
      
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/90 z-10" />
      
      {/* Contenido de la sección */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        <div className="border-2 border-white max-w-6xl w-full bg-transparent min-h-[550px] ">
        
        <div className="grid grid-cols-4 gap-0 h-1/2  bg-black">
          
          <div className="p-4 space-y-4 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold font-display text-white">
              Blackwork
            </h3>
            <p className="text-sm text-gray-300 font-body leading-relaxed">
              Especializados en tatuajes Blackwork en Sankt Pölten. Líneas precisas, negros profundos y diseños impactantes que resaltan tu estilo único. Perfecto para quienes buscan un arte audaz y atemporal.
            </p>
          </div>
          
          <div className="relative h-full">
            <Image
              src="/images/tattoo.jpg"
              alt="Blackwork Tattoo"
              fill
              className="object-fill"
            />
          </div>
          
          <div className="p-4 space-y-4 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold font-display text-white">
              Custom Design
            </h3>
            <p className="text-sm text-gray-300 font-body leading-relaxed">
              Especializados en tatuajes Blackwork en Sankt Pölten. Líneas precisas, negros profundos y diseños impactantes que resaltan tu estilo único. Perfecto para quienes buscan un arte audaz y atemporal.
            </p>
          </div>
          
          <div className="relative h-full">
            <Image
              src="/images/tattoo.jpg"
              alt="Custom Design Tattoo"
              fill
              className="object-fill"
            />
          </div>
          
        </div>
        
        <div className="grid grid-cols-4 gap-0 h-1/2  bg-black">
          
          <div className="relative h-full">
            <Image
              src="/images/tattoo.jpg"
              alt="Fine Line Tattoo"
              fill
              className="object-fill"
            />
          </div>
          
          <div className="p-4 space-y-4 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold font-display text-white">
              Fine Lines
            </h3>
            <p className="text-sm text-gray-300 font-body leading-relaxed">
              Especializados en tatuajes Blackwork en Sankt Pölten. Líneas precisas, negros profundos y diseños impactantes que resaltan tu estilo único. Perfecto para quienes buscan un arte audaz y atemporal.
            </p>
          </div>
          
          <div className="relative h-full">
            <Image
              src="/images/tattoo.jpg"
              alt="Dark Art Tattoo"
              fill
              className="object-fill"
            />
          </div>
          
          <div className="p-4 space-y-4 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold font-display text-white">
              Dark Art
            </h3>
            <p className="text-sm text-gray-300 font-body leading-relaxed">
              Especializados en tatuajes Blackwork en Sankt Pölten. Líneas precisas, negros profundos y diseños impactantes que resaltan tu estilo único. Perfecto para quienes buscan un arte audaz y atemporal.
            </p>
          </div>
          
        </div>
        
      </div>
      
      </div>
    </section>
  );
}
