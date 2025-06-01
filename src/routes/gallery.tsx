import { BgCta } from "@/components/BgCta";
import ImageMarquee from "@/components/Carousel";
import GalleryGrid from "@/components/GalleryGrid";
import { Galleryheader } from "@/components/Galleryheader";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="font-clash w-full bg-white">
      <BgCta />
      <Galleryheader />
      <GalleryGrid />
      <ImageMarquee />
    </div>
  );
}
