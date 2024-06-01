// next/src/ui/BackgroundImage.tsx
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-04-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

type BackgroundImageProps = {
  image: Sanity.Image;
  alt?: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({ image, alt = '' }) => {
  const imageUrl = builder.image(image).url();

  return (
    <div className="fixed inset-0 bg-white z-[-1]">
      <Image
				src={imageUrl}
				className="opacity-90 object-cover"
        alt={alt}
        fill
        quality={75}
        priority
      />
    </div>
  );
};

export default BackgroundImage;