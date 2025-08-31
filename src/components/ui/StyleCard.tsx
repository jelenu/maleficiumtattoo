import Image from 'next/image';

interface StyleCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

export default function StyleCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right'
}: StyleCardProps) {
  const content = (
    <div className="p-8 space-y-4 flex flex-col  h-full">
      <h3 className="text-3xl font-bold font-display text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-300 font-body leading-relaxed">
        {description}
      </p>
    </div>
  );

  const image = (
    <div className="relative h-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-fill"
      />
    </div>
  );

  return (
    <>
      {imagePosition === 'left' ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </>
  );
}
