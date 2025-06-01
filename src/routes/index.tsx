import { AboutCtaIndex } from "@/components/About/AboutCtaIndex";

import PhotographyComponent from "@/components/bg";
import GalleryGrid from "@/components/GalleryGrid";
import { Galleryheader } from "@/components/Galleryheader";
import StatsCounter from "@/components/StatsCounter";
import ModernMinimalistComponent from "@/components/Minimalist";
import Carousel from "@/components/Carousel";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="font-clash font-light  ">
      <PhotographyComponent />
      <ModernMinimalistComponent />
      <StatsCounter />

      <AboutCtaIndex />
      <Galleryheader />
      <GalleryGrid />
      <Carousel />
    </div>
  );
}
