import { SectionWrapper, StyleCard, WhiteBox } from '@/components/ui';
import { stylesData } from '@/constants/content';

export default function StylesSection() {
  return (
    <SectionWrapper
      backgroundImage="/images/fondo.png"
      contentClassName="flex items-center justify-center md:px-8"
    >
      {/* Layout para desktop (md+) - Con WhiteBox */}
      <div className="hidden md:flex w-full h-full items-center justify-center">
        <WhiteBox background="transparent">
          <div className="grid grid-cols-3 gap-0 h-full bg-black">
            <StyleCard {...stylesData[0]} layout="text-top" />
            <StyleCard {...stylesData[1]} layout="text-bottom" />
            <StyleCard {...stylesData[2]} layout="text-top" />
          </div>
        </WhiteBox>
      </div>

      {/* Layout para móvil/tablet (menor a md) - Sin WhiteBox, ancho completo */}
      <div className="md:hidden max-w-md sm:max-w-full sm:px-20 h-full flex flex-col">

        <div className="h-3/10 bg-black">
          <StyleCard {...stylesData[0]} layout="horizontal" imagePosition="right" />
        </div>

        <div className="h-3/10 bg-black">
          <StyleCard {...stylesData[1]} layout="horizontal" imagePosition="left" />
        </div>

        <div className="h-3/10 bg-black">
          <StyleCard {...stylesData[2]} layout="horizontal" imagePosition="right" />
        </div>
      
      </div>
    </SectionWrapper>
  );
}
