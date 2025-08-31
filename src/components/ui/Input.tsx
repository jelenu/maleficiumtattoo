import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, fullWidth = true, className = '', ...props }, ref) => {
    const baseClasses = 'px-3 py-2 bg-gray-600 border rounded-md text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent focus:text-white transition-colors duration-200';
    const widthClasses = fullWidth ? 'w-full' : '';
    const errorClasses = error ? 'border-red-500' : 'border-gray-600';

    return (
      <input
        ref={ref}
        className={`${baseClasses} ${widthClasses} ${errorClasses} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
