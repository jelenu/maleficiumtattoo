'use client';

import { ReviewsPopupProps } from '@/types';

export default function ReviewsPopup({ showReviews, setShowReviews, reviews }: ReviewsPopupProps) {
  if (!showReviews) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowReviews(false)}>
      <div className="bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="bg-gray-900 border-b border-gray-700 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-white">Maleficium Tattoo</h3>
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-300">5.0</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setShowReviews(false)}
            className="text-gray-400 hover:text-gray-200 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Reviews List */}
        <div className="p-6 max-h-[70vh] overflow-y-auto bg-gray-900">
          {/* Primera fila - 3 reseñas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {reviews.slice(0, 3).map((review) => (
              <a 
                key={review.id} 
                href={review.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-colors duration-200 cursor-pointer block"
              >
                {/* Header de la tarjeta */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white">{review.name}</h4>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {review.text}
                </p>
              </a>
            ))}
          </div>

          {/* Segunda fila - 3 reseñas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.slice(3, 6).map((review) => (
              <a 
                key={review.id} 
                href={review.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-colors duration-200 cursor-pointer block"
              >
                {/* Header de la tarjeta */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white">{review.name}</h4>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {review.text}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 px-4 py-3 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Reviews from Google</span>
            <a 
              href="https://www.google.com/search?q=maleficium+tattoo+st+polten+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-300 underline"
            >
              View all reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
