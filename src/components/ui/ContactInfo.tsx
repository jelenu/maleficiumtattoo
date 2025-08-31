import { ContactInfoProps } from '@/types';
import GoogleReviewsButton from '@/components/ui/GoogleReviewsButton';

export default function ContactInfo({ onShowReviews }: ContactInfoProps) {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-grow">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-8">
          Contact Us
        </h2>
        
        <div className="space-y-4 text-gray-300 font-body leading-relaxed">
          <p className="text-sm">
            Please check your spam folder for our response a few days after sending— some of our replies have been going there.
          </p>
          
          <p className="text-sm">
            Please let us know which artist you would like to contact. Provide as much written detail as you can regarding your desired tattoo, appointment availability, and budget ($150.00 minimum), and we will get back to you as soon as we can. All deposits are non refundable.
          </p>
          
          <p className="text-sm">
            You must be 18 years of age to get tattooed. (ID required) Washington state law.
          </p>
          
          <div className="pt-4">
            <h3 className="text-lg font-display text-white mb-2">
              TOUCH UPS (please read!!!!)
            </h3>
            <p className="text-sm">
              Any touch ups on tattoos are up to the artist discretion. 4 weeks is enough time to know if your tattoo needs to be touched up by the artist and schedule your appointment. (any time after that is considered natural aging.)
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
