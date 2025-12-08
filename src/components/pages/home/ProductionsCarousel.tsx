"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

import { productionLogos } from "@/lib/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ProductionsCarousel() {
  return (
    <Carousel
        opts={{
            align: "start",
            loop: true,
        }}
        plugins={[
            Autoplay({
                delay: 3000,
                stopOnInteraction: true,
            }),
        ]}
        className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {productionLogos.map((logo, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <div className="p-1 cursor-pointer aspect-[2/3] w-[300px] relative">
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain rounded-md shadow-lg hover:shadow-xl transition-shadow"
                    />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-4 bg-background border-border">
                 <DialogTitle className="sr-only">{logo.alt}</DialogTitle>
                 <div className="aspect-[2/3] relative">
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain rounded-lg"
                    />
                 </div>
                 {logo.url && (
                    <DialogFooter className="sm:justify-center mt-4">
                        <Button asChild>
                            <Link href={logo.url} target="_blank" rel="noopener noreferrer">
                                Visitar Sitio <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </DialogFooter>
                 )}
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
    </Carousel>
  )
}
