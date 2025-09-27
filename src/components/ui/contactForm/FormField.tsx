import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}

export default function FormField({
  label,
  htmlFor,
  required = false,
  error,
  children,
  className = ''
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="block font-medium text-white mb-2 text-[clamp(0.75rem,0.9vw,0.875rem)]"
      >
        {label} {required && '*'}
      </label>
      {children}
      {error && (
        <p className="text-red-400 text-xs mt-0.5">{error}</p>
      )}
    </div>
  );
}
