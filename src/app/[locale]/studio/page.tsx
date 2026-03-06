import Image from "next/image";
import Text from "@/components/ui/basics/Text";
import { Footer } from "@/components/layout";

export default function StudioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-6 px-0 xl:px-10">
        <div className="relative h-[40vh] sm:h-[45vh] md:h-[48vh] xl:h-[60vh] min-h-[240px] xl:min-h-[420px] w-full max-w-none xl:max-w-7xl mx-auto overflow-hidden rounded-none xl:rounded-2xl">
          <Image
            src="/images/bg.jpg"
            alt="Nuestro estudio"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <Text variant="h1" align="center" className="text-white">
              Nuestro estudio
            </Text>
          </div>
        </div>
      </section>

      {/* Texto */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-white space-y-6">
          <Text variant="description">
            Maleficum Tattoo es un estudio privado en Sankt Pölten, Baja Austria,
            dedicado al tatuaje personalizado en un entorno tranquilo y cuidado.
            Trabajamos exclusivamente con cita previa, lo que nos permite ofrecer
            una experiencia enfocada, sin interrupciones y centrada en cada proyecto.
          </Text>
          <Text variant="description">
            El estudio fue fundado por Alexisdarkart, tatuador con más de 10 años
            de experiencia y originario de Barcelona. Su visión combina precisión
            técnica, estética sólida y un trato cercano, entendiendo el tatuaje como
            algo personal y duradero.
          </Text>
          <Text variant="description">
            Somos un espacio inclusivo y respetuoso, abierto a todas las personas.
            La confianza, la comunicación y la seguridad forman parte esencial de
            nuestra manera de trabajar.
          </Text>
          <Text variant="description">
            Nos especializamos principalmente en blackwork, ignorant y new school,
            pero también realizamos tatuajes pequeños y de línea fina (fineline),
            porque sabemos que las piezas más discretas también tienen significado
            y merecen la misma atención y calidad que los proyectos de gran formato.
          </Text>
          <Text variant="description">
            Además, contamos regularmente con artistas invitados que amplían la
            propuesta del estudio con otros estilos y enfoques.
          </Text>
          <Text variant="description">
            En Maleficum Tattoo cada tatuaje, grande o pequeño, se trabaja con el
            mismo compromiso y dedicación.
          </Text>
        </div>
      </section>

      {/* Galería 2-2-1 */}
      <section className="pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/alexishorizontal.jpg" alt="Estudio 1" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/alexishorizontal21.jpg" alt="Estudio 2" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/alexis.jpg" alt="Estudio 3" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/tattoo.jpg" alt="Estudio 4" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-xl">
              <Image src="/images/bg.jpg" alt="Estudio 5" fill className="object-cover" sizes="(min-width: 1024px) 768px, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
