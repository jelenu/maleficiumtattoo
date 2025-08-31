'use client';

import { ContactFormProps } from '@/types';
import { useState } from 'react';

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [phoneError, setPhoneError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setPhoneError('');

    try {
      const formData = new FormData(e.currentTarget);
      
      // Combinar código de país y número de teléfono
      const countryCode = formData.get('countryCode') as string;
      const phoneNumber = formData.get('phone') as string;
      
      // Validar código de país
      if (!countryCode || !countryCode.startsWith('+') || countryCode.length < 2) {
        setPhoneError('Please enter a valid country code (e.g., +43)');
        setIsSubmitting(false);
        return;
      }
      
      // Validar número de teléfono
      if (!phoneNumber || phoneNumber.trim().length < 6) {
        setPhoneError('Phone number must be at least 6 digits long');
        setIsSubmitting(false);
        return;
      }
      
      // Validar que solo contenga números
      const phoneRegex = /^[0-9]+$/;
      if (!phoneRegex.test(phoneNumber)) {
        setPhoneError('Phone number can only contain numbers');
        setIsSubmitting(false);
        return;
      }
      
      const fullPhoneNumber = `${countryCode} ${phoneNumber}`;
      
      // Reemplazar el número de teléfono con el formato completo
      formData.set('phone', fullPhoneNumber);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Message sent successfully! We will contact you soon.' });
        
        // Limpiar formulario de forma segura
        const form = e.currentTarget;
        if (form) {
          form.reset();
        }
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        
        // Llamar callback si existe
        if (onSubmit) {
          onSubmit(formData);
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Error sending message' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Connection error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/60 p-6 backdrop-blur-sm relative">
      {/* Mensaje de estado - Overlay sin afectar layout */}
      {message && (
        <div className={`absolute top-4 left-4 right-4 p-4 rounded-md z-10 shadow-lg transition-all duration-300 ${
          message.type === 'success' 
            ? 'bg-green-800 border border-green-600 text-green-100' 
            : 'bg-red-800 border border-red-600 text-red-100'
        }`}>
          <div className="flex items-center justify-between">
            <p className="text-sm flex items-center">
              {message.type === 'success' ? '✅' : '❌'} {message.text}
            </p>
            <button
              onClick={() => setMessage(null)}
              className="ml-4 text-white hover:text-gray-300 focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        
        {/* First Name y Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-3 py-2 bg-gray-600 border border-gray-600 rounded-md text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent focus:text-white"
              placeholder="Your first name"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-3 py-2 bg-gray-600 border border-gray-600 rounded-md text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent focus:text-white"
              placeholder="Your last name"
            />
          </div>
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number *
          </label>
          <div className="flex">
            <input
              type="text"
              name="countryCode"
              defaultValue="+43"
              className="w-20 px-2 py-2 bg-gray-600 border border-gray-600 rounded-l-md text-gray-100 text-center focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent focus:text-white"
              placeholder="+43"
              onInput={(e) => {
                // Solo permitir + al inicio seguido de números
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
              }}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]+"
              title="Please enter a valid phone number (numbers only)"
              className={`flex-1 px-3 py-2 bg-gray-600 border rounded-r-md text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent focus:text-white ${
                phoneError ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="e.g., 6641234567"
              onChange={() => setPhoneError('')} // Limpiar error al escribir
              onInput={(e) => {
                // Solo permitir números
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/[^\d]/g, '');
              }}
            />
          </div>
          {phoneError && (
            <p className="text-red-400 text-sm mt-1">{phoneError}</p>
          )}
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 bg-gray-600 border border-gray-600 rounded-md text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent focus:text-white"
            placeholder="your.email@example.com"
          />
        </div>
        
        {/* Detailed Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
            Detailed Description *
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            className="w-full px-3 py-2 bg-gray-600 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent focus:text-white resize-vertical"
            placeholder="Please describe your tattoo idea, preferred artist, budget, and availability..."
          />
        </div>
        
        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-white mb-2">
            Reference Image (optional)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full px-3 py-2 bg-gray-600 border border-gray-600 rounded-md text-gray-100 focus:text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-md font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
            isSubmitting
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-700 mr-2"></div>
              Enviando...
            </div>
          ) : (
            'Submit Request'
          )}
        </button>
        
      </form>
    </div>
  );
}
