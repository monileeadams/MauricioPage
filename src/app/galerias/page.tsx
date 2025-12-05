'use client';

import { useState } from 'react';
import PageHero from "@/components/common/PageHero";
import GalleryGrid from "@/components/pages/gallery/GalleryGrid";
import VideoGrid from "@/components/pages/gallery/VideoGrid";
import { galleryImages, videoGallery } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, Image as ImageIcon } from "lucide-react";

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

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12">
            <TabsTrigger value="videos" className="h-10 text-base">
              <Film className="mr-2 h-5 w-5" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="images" className="h-10 text-base">
              <ImageIcon className="mr-2 h-5 w-5" />
              Imágenes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="videos" className="mt-12">
            <VideoGrid videos={videoGallery} />
          </TabsContent>
          <TabsContent value="images" className="mt-12">
            <GalleryGrid images={galleryImages} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
