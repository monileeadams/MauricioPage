import Link from 'next/link';
import PageHero from "@/components/common/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { CheckCircle } from 'lucide-react';

export default function ServiciosPage() {
  return (
    <>
      <PageHero title="Nuestros Servicios" imageId="services-hero" />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Un Abanico de Soluciones</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde la concepción de una idea hasta su ejecución final, ofrecemos una gama completa de servicios para contar historias, proteger ecosistemas y fomentar una cultura de sostenibilidad.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {services.map((service, index) => (
              <AccordionItem key={service.title} value={`item-${index}`}>
                <AccordionTrigger className="text-2xl font-headline hover:no-underline">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <p className="text-lg text-muted-foreground mb-6">{service.summary}</p>
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="mb-6">
                      <h4 className="font-bold text-xl mb-4 text-foreground">{detail.title}</h4>
                       <ul className="space-y-3">
                        {detail.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                             <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

       <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold max-w-2xl mx-auto">¿Listo para dar vida a tu proyecto?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Sea una idea para un documental, una necesidad de consultoría o un evento cultural, estamos aquí para ayudarte a hacerlo realidad.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90">
              <Link href="/contacto">Solicita una cotización</Link>
            </Button>
          </div>
        </section>
    </>
  );
}
