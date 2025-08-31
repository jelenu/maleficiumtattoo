import { SectionWrapper, StyleCard } from '@/components/ui';
import { stylesData } from '@/constants/content';

export default function StylesSection() {
  return (
    <SectionWrapper
      backgroundImage="/images/fondo.png"
      contentClassName="flex flex-col items-center justify-center p-24 pt-50 overflow-hidden"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <div className="border-2 border-white max-w-6xl w-full bg-transparent min-h-[550px]">
        
          <div className="grid grid-cols-4 gap-0 h-1/2 bg-black">
            <StyleCard {...stylesData[0]} />
            <StyleCard {...stylesData[1]} />
          </div>
          
          <div className="grid grid-cols-4 gap-0 h-1/2 bg-black">
            <StyleCard {...stylesData[2]} />
            <StyleCard {...stylesData[3]} />
          </div>
          
        </div>
      </div>
    </SectionWrapper>
  );
}
