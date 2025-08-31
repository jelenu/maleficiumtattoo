import { ContactInfoProps } from '@/types';
import GoogleReviewsButton from '@/components/ui/GoogleReviewsButton';
import { contactContent } from '@/constants/content';

export default function ContactInfo({ onShowReviews }: ContactInfoProps) {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-grow">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-8">
          {contactContent.title}
        </h2>
        
        <div className="space-y-4 text-gray-300 font-body leading-relaxed">
          {contactContent.info.map((text, index) => (
            <p key={index} className="text-sm">
              {text}
            </p>
          ))}
          
          <div className="pt-4">
            <h3 className="text-lg font-display text-white mb-2">
              {contactContent.touchUps.title}
            </h3>
            <p className="text-sm">
              {contactContent.touchUps.content}
            </p>
          </div>
        </div>
      </div>
      
      {/* Google Reviews Button - Al final de la columna */}
      <div className="mt-auto pt-8">
        <GoogleReviewsButton onClick={onShowReviews} />
      </div>
    </div>
  );
}
