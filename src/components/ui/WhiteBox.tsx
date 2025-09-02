import { ReactNode } from 'react';

interface WhiteBoxProps {
  children: ReactNode;
  /**
   * Background style options:
   *  - 'black': solid black background
   *  - 'image': uses /images/fondo.png as background
   *  - 'transparent': no background (fully transparent)
   */
  background?: 'black' | 'image' | 'transparent';
  className?: string;
}

export default function WhiteBox({ children, background = 'image', className = '' }: WhiteBoxProps) {
  const isBlack = background === 'black';
  const isImage = background === 'image';
  const backgroundClasses = isBlack ? 'bg-black' : '';

  const imageStyle = isImage
    ? ({
        backgroundImage: 'url(/images/fondo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } as const)
    : undefined;

  return (
    <div
      className={`
        relative h-full
        w-full max-w-6xl mx-auto
        border-0 sm:border-2 border-white
  ${backgroundClasses}
        ${className}
      `}
      style={imageStyle}
    >
      {children}
      
    </div>
    
  );
}
