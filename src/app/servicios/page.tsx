'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from "@/components/common/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Service } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function ServiciosPage() {
  const talentImage1 = PlaceHolderImages.find(p => p.id === 'talent-1');
  const talentImage2 = PlaceHolderImages.find(p => p.id === 'talent-2');
  const ctaImage = PlaceHolderImages.find(p => p.id === 'services-cta-bg');
  const [selectedService, setSelectedService] = useState<Service | null>(services[0]);

  return (
    <>
      <PageHero title="Servicios" imageId="services-hero-1" />

      {/* Grid de Servicios Interactivo */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-semibold mb-4 block">Portafolio Profesional</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold">Nuestra Oferta Creativa</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
            {/* Lista de Navegación Lateral */}
            <div className="lg:col-span-4 space-y-4">
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setSelectedService(service)}
                  className={cn(
                    "w-full text-left p-6 rounded-lg transition-all duration-300 border-l-4",
                    selectedService?.title === service.title 
                      ? "bg-secondary border-accent shadow-md" 
                      : "bg-transparent border-transparent hover:bg-secondary/50"
                  )}
                >
                  <h3 className={cn(
                    "font-headline text-xl font-bold transition-colors",
                    selectedService?.title === service.title ? "text-accent" : "text-foreground"
                  )}>
                    {service.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Visualización del Detalle */}
            <div className="lg:col-span-8">
              {selectedService && (
                <div className="bg-secondary p-8 md:p-12 rounded-2xl shadow-sm border animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="relative aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
                    {PlaceHolderImages.find(p => p.id === selectedService.imageId) && (
                      <Image
                        src={PlaceHolderImages.find(p => p.id === selectedService.imageId)!.imageUrl}
                        alt={selectedService.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground leading-tight">
                      {selectedService.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic border-l-2 border-accent/30 pl-6">
                      {selectedService.summary}
                    </p>
                    
                    {selectedService.details && selectedService.details.length > 0 && (
                      <div className="pt-6 grid md:grid-cols-2 gap-8">
                        {selectedService.details.map((detail, idx) => (
                          <div key={idx} className="space-y-4">
                            <h4 className="font-bold text-lg uppercase tracking-widest text-accent">{detail.title}</h4>
                            <ul className="space-y-2">
                              {detail.items.map((item, i) => (
                                <li key={i} className="flex items-center text-muted-foreground text-sm">
                                  <ArrowRight className="h-3 w-3 mr-2 text-accent" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-8">
                      <Button asChild className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold px-8 h-12">
                        <Link href="/contacto">Solicitar este servicio</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Adicionales */}
      <section className="py-24 border-t bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">Desarrollamos Talento</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  La experiencia y la visión se comparten para inspirar a las nuevas generaciones de creativos y conservacionistas.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-20">
                  {talentImage1 && (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <Image src={talentImage1.imageUrl} alt={talentImage1.description} fill className="object-cover" />
                    </div>
                  )}
                  {talentImage2 && (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <Image src={talentImage2.imageUrl} alt={talentImage2.description} fill className="object-cover" />
                    </div>
                  )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <div className="p-8 border rounded-2xl hover:border-accent transition-colors group">
                  <h3 className="font-headline text-3xl font-bold mb-4 group-hover:text-accent transition-colors">Acciones con Propósito</h3>
                  <p className="text-muted-foreground mb-6 text-lg">Las nuevas ideas, proyectos, sueños y mejoras para proteger y resguardar los derechos del medio ambiente son siempre bienvenidos en nuestro espacio creativo.</p>
                   <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/contacto">Contrátanos</Link>
                  </Button>
                </div>
                 <div className="p-8 border rounded-2xl hover:border-accent transition-colors group">
                  <h3 className="font-headline text-3xl font-bold mb-4 group-hover:text-accent transition-colors">Dirección Creativa</h3>
                  <p className="text-muted-foreground mb-6 text-lg">Muchos de los jóvenes que participaron en la preproducción de nuestros documentales quedaron enamorados de el mundo del cine, ciencia y naturaleza.</p>
                   <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/contacto">Contrátanos</Link>
                  </Button>
                </div>
              </div>
          </div>
       </section>

       <section className="relative py-32">
          {ctaImage && (
            <Image
              src={ctaImage.imageUrl}
              alt={ctaImage.description}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h2 className="font-headline text-3xl md:text-5xl font-bold max-w-3xl mx-auto">¿Listo para dar vida a tu proyecto?</h2>
            <p className="mt-6 text-xl max-w-2xl mx-auto text-gray-200">
              Sea una idea para un documental, una necesidad de consultoría o un evento cultural, estamos aquí para ayudarte a hacerlo realidad.
            </p>
            <Button asChild size="lg" className="mt-10 bg-accent text-primary-foreground hover:bg-accent/90 px-12 h-14 text-lg">
              <Link href="/contacto">Solicita una cotización</Link>
            </Button>
          </div>
        </section>
    </>
  );
}
