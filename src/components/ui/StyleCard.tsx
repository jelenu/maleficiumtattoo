import Image from 'next/image';

interface StyleCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  layout?: 'horizontal' | 'text-top' | 'text-bottom';
}

export default function StyleCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  layout = 'horizontal'
}: StyleCardProps) {
  const content = (
    <div className="p-4 md:p-8 lg:p-6 space-y-2 flex flex-col justify-start h-full">
      <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold font-display text-white">
        {title}
      </h3>
      <p className="text-xs md:text-sm lg:text-base text-gray-300 font-body leading-4 md:leading-relaxed">
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

  // Layout vertical
  if (layout === 'text-top' || layout === 'text-bottom') {
    return (
      <div className="flex flex-col h-full">
        {layout === 'text-top' ? (
          <>
            <div className="h-1/2">{content}</div>
            <div className="h-1/2">{image}</div>
          </>
        ) : (
          <>
            <div className="h-1/2">{image}</div>
            <div className="h-1/2">{content}</div>
          </>
        )}
      </div>
    );
  }

  // Layout horizontal (original)
  return (
    <div className="flex h-full">
      {imagePosition === 'left' ? (
        <>
          <div className="w-1/2">{image}</div>
          <div className="w-1/2">{content}</div>
        </>
      ) : (
        <>
          <div className="w-1/2">{content}</div>
          <div className="w-1/2">{image}</div>
        </>
      )}
    </div>
  );
}
