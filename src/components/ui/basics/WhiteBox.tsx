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
  /** Optional rounded size, defaults to xl */
  rounded?: 'none' | 'md' | 'lg' | 'xl' | '2xl';
  /** Apply a subtle backdrop blur on top (useful with overlays) */
  backdrop?: boolean;
  /** Default inner padding shortcut (p-6 md:p-8) when true */
  padded?: boolean;
}

export default function WhiteBox({
  children,
  background = 'black',
  className = '',
  rounded = 'xl',
  backdrop = false,
  padded = false,
}: WhiteBoxProps) {
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

  const roundedClass = rounded === 'none' ? '' : `rounded-${rounded}`;
  const backdropClass = backdrop ? 'backdrop-blur-[2px]' : '';
  const paddingClass = padded ? 'p-6 md:p-8' : '';

  return (
    <div
      className={`
        relative h-full w-full max-w-6xl mx-auto
        border-0 md:border-2 border-white/90 ${roundedClass}
        ${backgroundClasses} ${backdropClass} ${paddingClass}
        ${className}
      `}
      style={imageStyle}
    >
      {children}
      
    </div>
    
  );
}
