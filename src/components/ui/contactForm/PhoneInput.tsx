'use client';

import { useState } from 'react';
import Input from './Input';

interface PhoneInputProps {
  countryCodeName: string;
  phoneNumberName: string;
  defaultCountryCode?: string;
  error?: string;
  onErrorChange?: (error: string) => void;
  required?: boolean;
}

export default function PhoneInput({
  countryCodeName,
  phoneNumberName,
  defaultCountryCode = "+43",
  error,
  onErrorChange,
  required = false
}: PhoneInputProps) {
  const [phoneError, setPhoneError] = useState(error || '');

  const handleCountryCodeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    let value = target.value;
    
    // Si no empieza con +, añadirlo
    if (!value.startsWith('+')) {
      value = '+' + value.replace(/\+/g, '');
    }
    
    // Solo permitir + al inicio y números después
    value = value.replace(/^(\+)(.*)/, (match, plus, rest) => {
      return plus + rest.replace(/[^\d]/g, '');
    });
    
    target.value = value;
  };

  const handlePhoneNumberInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.value = target.value.replace(/[^\d]/g, '');
  };

  const handlePhoneNumberChange = () => {
    setPhoneError('');
    if (onErrorChange) {
      onErrorChange('');
    }
  };

  return (
    <div className="flex">
      <Input
        type="text"
        name={countryCodeName}
        defaultValue={defaultCountryCode}
        className="!w-15 rounded-r-none text-center"
        placeholder="+43"
        onInput={handleCountryCodeInput}
        fullWidth={false}
      />
      <Input
        type="tel"
        name={phoneNumberName}
        required={required}
        pattern="[0-9]+"
        title="Please enter a valid phone number (numbers only)"
        className="rounded-l-none border-l-0 w-full"
        placeholder="e.g., 6641234567"
        onChange={handlePhoneNumberChange}
        onInput={handlePhoneNumberInput}
        error={phoneError}
        fullWidth={false}
      />
    </div>
  );
}
