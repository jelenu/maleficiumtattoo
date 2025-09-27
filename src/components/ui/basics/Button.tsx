import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const getVariantClasses = (variant: ButtonVariant): string => {
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200 border-2 border-white',
    outline: 'bg-transparent text-white hover:bg-white hover:text-black border-2 border-white'
  };
  return variants[variant];
};

const getSizeClasses = (size: ButtonSize): string => {
  const sizes = {
    sm: 'px-4 py-2 text-md',
    md: 'px-8 py-3 text-2xl',
    lg: 'px-14 py-2 text-3xl'
  };
  return sizes[size];
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-display rounded-lg transition-colors duration-300 focus:outline-none';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const widthClasses = fullWidth ? 'w-full' : '';
  const disabledClasses = (disabled || isLoading) ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${disabledClasses} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
          Sending...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
