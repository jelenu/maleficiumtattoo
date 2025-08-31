import { ReactNode } from 'react';

interface WhiteBoxProps {
  children: ReactNode;
  padding?: boolean;
  rounded?: boolean;
  background?: 'transparent' | 'black';
  className?: string;
}

export default function WhiteBox({
  children,
  padding = false,
  rounded = false,
  background = 'transparent',
  className = ''
}: WhiteBoxProps) {
  const paddingClasses = padding ? 'p-10' : '';
  const roundedClasses = rounded ? 'rounded-lg' : '';
  const backgroundClasses = background === 'black' ? 'bg-black' : 'bg-transparent';
  const overflowClasses = background === 'transparent' ? 'overflow-hidden' : '';
  
  return (
    <div 
      className={`
        border-2 border-white max-w-6xl w-full h-[650px] relative mt-45
        ${backgroundClasses}
        ${paddingClasses}
        ${roundedClasses}
        ${overflowClasses}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}
