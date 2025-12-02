import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import { biography, history, achievements } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Eye, Handshake } from "lucide-react";

export default function NosotrosPage() {
  const bioImage = PlaceHolderImages.find(p => p.id === 'biography-mauricio');
  const valueIcons = {
      'Conservación': <Handshake className="h-8 w-8 text-accent" />,
      'Creatividad': <Award className="h-8 w-8 text-accent" />,
      'Excelencia': <Target className="h-8 w-8 text-accent" />,
      'Compromiso Social': <Eye className="h-8 w-8 text-accent" />
  };

  return (
    <>
      <PageHero title="Nosotros" imageId="about-hero" />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Nuestra Historia</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>{biography.full}</p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              {bioImage && (
                <Image
                  src={bioImage.imageUrl}
                  alt="Mauricio De la Maza-Benignos"
                  width={350}
                  height={350}
                  className="rounded-lg object-cover shadow-xl"
                  data-ai-hint={bioImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-headline text-3xl font-bold mb-4">Misión</h3>
              <p className="text-lg text-muted-foreground">{history.mission}</p>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold mb-4">Visión</h3>
              <p className="text-lg text-muted-foreground">{history.vision}</p>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="font-headline text-3xl font-bold mb-8 text-center">Nuestros Valores</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {history.values.map((value) => (
                <Card key={value.title} className="text-center p-6">
                    <div className="flex justify-center mb-4">
                       {valueIcons[value.title as keyof typeof valueIcons]}
                    </div>
                  <h4 className="font-headline text-2xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">Logros y Reconocimientos</h2>
            <div className="max-w-3xl mx-auto">
                <ul className="space-y-8">
                    {achievements.map((achievement) => (
                        <li key={achievement.title} className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                                <span className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary">
                                    <Award className="h-8 w-8 text-accent"/>
                                </span>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-muted-foreground">{achievement.year}</p>
                                <h3 className="font-headline text-2xl font-bold">{achievement.title}</h3>
                                <p className="text-lg text-muted-foreground">{achievement.organization}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>
    </>
  );
}
