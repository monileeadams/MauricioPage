"use client"

import Image from "next/image"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Autoplay from "embla-carousel-autoplay"

export default function HeroSlider() {
  const heroImages = [
    PlaceHolderImages.find(p => p.id === 'hero-1'),
    PlaceHolderImages.find(p => p.id === 'hero-2'),
    PlaceHolderImages.find(p => p.id === 'hero-3'),
  ].filter(Boolean);

  return (
    <section className="relative h-screen w-full">
      <Carousel 
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image.imageHint}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">
          Cine Ambiental...
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
          Explorando la belleza de nuestro planeta y las historias que merecen ser contadas.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white text-lg">
          <a href="https://panterracinefest.com" target="_blank" rel="noopener noreferrer">Conoce más</a>
        </Button>
      </div>
    </section>
  )
}
