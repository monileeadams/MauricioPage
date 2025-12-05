import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type PageHeroProps = {
  title: string;
  imageId: string;
};

export default function PageHero({ title, imageId }: PageHeroProps) {
  const heroImage = PlaceHolderImages.find((p) => p.id === imageId);
  
  const isMagazine = imageId === 'magazine-hero';

  return (
    <section className="relative h-[400px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={title}
          fill
          className={`object-cover ${isMagazine ? 'object-bottom' : ''}`}
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-center">
          {title}
        </h1>
      </div>
    </section>
  );
}
