// Tipos para las reseñas de Google
export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: {
    en: string;
    de: string;
    es: string;
  };
  avatar: string;
  reviewUrl: string;
}

// Props para componentes de reseñas
export interface ReviewsPopupProps {
  showReviews: boolean;
  setShowReviews: (show: boolean) => void;
  reviews: Review[];
}

// Props para información de contacto
export interface ContactInfoProps {
  onShowReviews: () => void;
}

// Props para formulario de contacto
export interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

// Props para botón de Google Reviews
export interface GoogleReviewsButtonProps {
  onClick: () => void;
  className?: string;
}

// Datos del formulario
export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  description: string;
  image?: File;
}
