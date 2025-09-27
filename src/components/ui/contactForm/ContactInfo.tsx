import { ContactInfoProps } from "@/types";
import { GoogleReviewsButton, Button } from "@/components/ui";
import { contactContent } from "@/constants/content";
import { ChevronDown } from "lucide-react"; //

export default function ContactInfo({ onShowReviews }: ContactInfoProps) {
  return (
    <div className="flex flex-col h-full px-2 py-1">
      {/* Contenido que se reparte en toda la altura */}
      <div className="flex flex-col flex-grow justify-between mb-3">
        <h2 className="text-[clamp(0.4rem,5vh,3rem)] font-display text-white">
          {contactContent.title}
        </h2>

        <div className="flex flex-col flex-grow justify-evenly text-gray-300 font-body leading-relaxed">
          {contactContent.info.map((text, index) => (
            <p key={index} className="text-[clamp(0.4rem,2vh,1rem)]">
              {text}
            </p>
          ))}

          <div>
            <h3 className="text-[clamp(0.4rem,2.7vh,1.40rem)] font-display text-white">
              {contactContent.touchUps.title}
            </h3>
            <p className="text-[clamp(0.4rem,1.3vh,1.30rem)]">
              {contactContent.touchUps.content}
            </p>
          </div>
        </div>
      </div>

      {/* Google Reviews Button - pegado abajo */}
      <div className="mt-auto flex items-center justify-between">
        <GoogleReviewsButton onClick={onShowReviews} />
        <Button
          className="lg:hidden"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
