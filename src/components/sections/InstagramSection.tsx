import { SectionWrapper } from '@/components/ui';

export default function InstagramSection() {
  return (
    <SectionWrapper
      contentClassName="flex flex-col items-center justify-center py-20"
    >
      <h2 className="text-4xl md:text-6xl font-display text-white mb-4">
        @maleficium.tattoo
      </h2>
      <p className="text-gray-300 font-body text-lg">
        Nuestros últimos trabajos en Instagram
      </p>
    </SectionWrapper>
  );
}
