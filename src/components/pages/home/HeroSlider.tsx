"use client"

import Image from "next/image"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function HeroSlider() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <section className="relative h-screen w-full">
      <Carousel 
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
            <CarouselItem>
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </CarouselItem>
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
