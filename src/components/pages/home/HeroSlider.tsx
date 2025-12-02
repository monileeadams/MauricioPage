"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function HeroSlider() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <section className="relative h-screen w-full">
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
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
        <h1 className="font-headline text-5xl font-bold leading-tight drop-shadow-2xl md:text-7xl lg:text-8xl">
          Cine Ambiental...
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
          Explorando la belleza de nuestro planeta y las historias que merecen ser contadas.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-lg text-white hover:bg-accent/90">
          <a href="https://panterracinefest.com" target="_blank" rel="noopener noreferrer">Conoce más</a>
        </Button>
      </div>
    </section>
  )
}
