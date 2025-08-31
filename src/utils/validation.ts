export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateCountryCode = (countryCode: string): ValidationResult => {
  if (!countryCode || !countryCode.startsWith('+') || countryCode.length < 2) {
    return {
      isValid: false,
      error: 'Please enter a valid country code (e.g., +43)'
    };
  }
  return { isValid: true };
};

export const validatePhoneNumber = (phoneNumber: string): ValidationResult => {
  if (!phoneNumber || phoneNumber.trim().length < 6) {
    return {
      isValid: false,
      error: 'Phone number must be at least 6 digits long'
    };
  }
  
  const phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(phoneNumber)) {
    return {
      isValid: false,
      error: 'Phone number can only contain numbers'
    };
  }
  
  return { isValid: true };
};

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address'
    };
  }
  return { isValid: true };
};

export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value || value.trim().length === 0) {
    return {
      isValid: false,
      error: `${fieldName} is required`
    };
  }
  return { isValid: true };
};

export const combineValidations = (...validations: ValidationResult[]): ValidationResult => {
  for (const validation of validations) {
    if (!validation.isValid) {
      return validation;
    }
  }
  return { isValid: true };
};
