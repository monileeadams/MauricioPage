import PageHero from "@/components/common/PageHero";
import GalleryGrid from "@/components/pages/gallery/GalleryGrid";
import { galleryImages } from "@/lib/data";

export default function GaleriasPage() {
  return (
    <>
      <PageHero title="Galerías" imageId="gallery-hero" />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Explora Nuestro Mundo Visual</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Una selección de momentos capturados a través de nuestro lente, desde la majestuosidad de la vida silvestre hasta la emoción detrás de cámaras.
            </p>
        </div>
        <GalleryGrid images={galleryImages} />
      </div>
    </>
  );
}
