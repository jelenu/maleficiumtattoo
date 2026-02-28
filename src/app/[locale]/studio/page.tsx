import { SectionWrapper } from "@/components/ui";
import Text from "@/components/ui/basics/Text";

export default function StudioPage() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      <SectionWrapper
        backgroundImage="/images/bg.jpg"
        backgroundAlt="Nuestro estudio"
        overlayClassName="bg-black/75"
        contentClassName="flex items-center justify-center"
      >
        <div className="text-center text-white px-4">
          <Text variant="h1" align="center">
            Nuestro estudio
          </Text>
        </div>
      </SectionWrapper>
    </main>
  );
}
