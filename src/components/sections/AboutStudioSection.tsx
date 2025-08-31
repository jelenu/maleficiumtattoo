import Image from 'next/image';

export default function AboutStudioSection() {
  return (
    <section className="h-full snap-start flex flex-col items-center justify-center p-24 bg-black pt-50">
      {/* Recuadro con borde blanco */}
      <div className="border-2 border-white max-w-6xl w-full bg-transparent relative overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/images/fondo.png"
          alt="Background"
          fill
          className="object-cover z-0"
        />
        
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        
        {/* Contenido */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 items-stretch">
          
          {/* Contenido izquierdo */}
          <div className="p-12 space-y-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              About Maleficium Tattoo
            </h2>
            
            <p className="text-md text-gray-300 font-body leading-relaxed">
              Maleficium Tattoo – Nur nach Terminvereinbarung Maleficium Tattoo ist ein exklusives Tattoostudio unter der Leitung des spanischen Künstlers @alexisdarkart, der auf Blackwork-Tattoos in Schwarz-Weiß mit kräftigen Linien spezialisiert ist.
            </p>
            
            <p className="text-md text-gray-300 font-body leading-relaxed">
              Bei uns bekommst du zu individuelle und einzigartige Designs – jedes Motiv wird speziell für dich entworfen. Wichtig: Wir arbeiten ausschließlich nach Terminvereinbarung, um dir ein ruhiges, persönliches und hochwertiges Erlebnis bieten zu können.
            </p>
            
            <button className="mt-8 bg-black border-2 border-white text-white px-8 py-3 rounded-lg font-body text-lg hover:bg-white hover:text-black transition-colors duration-300">
              Our Jobs
            </button>
          </div>
          
          {/* Imagen derecha */}
          <div className="relative h-full">
            <Image
              src="/images/alexis.jpg"
              alt="Maleficium Tattoo Studio"
              fill
              className="object-cover"
            />
          </div>
        
        </div>
      </div>
    </section>
  );
}
