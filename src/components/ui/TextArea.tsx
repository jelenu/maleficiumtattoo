import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  fullWidth?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, fullWidth = true, className = '', ...props }, ref) => {
    const baseClasses = `
      px-3 
      py-1 md:py-2 
      bg-gray-600 
      border 
      rounded-md 
      text-gray-100 
      placeholder-gray-400 
      focus:outline-none 
      focus:ring-2 
      focus:ring-white 
      focus:border-transparent 
      focus:text-white 
      resize-vertical 
      text-[clamp(0.75rem,1vh,0.85rem)] 
      transition-colors 
      duration-200
    `;
    const widthClasses = fullWidth ? 'w-full' : '';
    const errorClasses = error ? 'border-red-500' : 'border-gray-600';

    return (
      <textarea
        ref={ref}
        className={`${baseClasses} ${widthClasses} ${errorClasses} ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
