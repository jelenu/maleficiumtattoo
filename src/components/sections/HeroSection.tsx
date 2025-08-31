import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen snap-start flex flex-col">
      {/* Background */}
      <Image src="/images/bg.jpg" alt="Fondo" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <main className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
        <div className="relative">
          <Image
            src="/images/maleficium.png"
            alt="Maleficium Tattoo Logo"
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
            priority
          />
          <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black border-4 border-white text-white px-14 py-2 rounded-full font-display text-3xl hover:bg-white hover:text-black transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </main>
    </section>
  );
}
