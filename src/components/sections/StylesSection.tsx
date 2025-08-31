import { SectionWrapper, StyleCard, WhiteBox } from '@/components/ui';
import { stylesData } from '@/constants/content';

export default function StylesSection() {
  return (
    <SectionWrapper
      backgroundImage="/images/fondo.png"
      contentClassName="flex items-center justify-center px-8"
    >
      <WhiteBox background="transparent">
        <div className="grid grid-cols-4 gap-0 h-1/2 bg-black">
          <StyleCard {...stylesData[0]} />
          <StyleCard {...stylesData[1]} />
        </div>
        
        <div className="grid grid-cols-4 gap-0 h-1/2 bg-black">
          <StyleCard {...stylesData[2]} />
          <StyleCard {...stylesData[3]} />
        </div>
      </WhiteBox>
    </SectionWrapper>
  );
}
