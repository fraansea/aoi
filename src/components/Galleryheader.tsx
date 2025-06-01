import { ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export const Galleryheader = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-10 px-4 flex flex-col items-center text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black leading-tight max-w-xl mx-auto mb-6">
        Explore Our Curated Project Gallery
      </h1>
      <p className="text-black text-base font-normal leading-relaxed max-w-md mx-auto mb-8">
        Our portfolio showcases a range of projects, from cozy living rooms to luxurious bedrooms, and everything in between. We have worked on residential projects, commercial spaces, and hospitality interiors, and have experience working with a variety of design styles.
      </p>
      <button
        onClick={() => navigate({ to: "/gallery" })}
        className="flex items-center gap-3 bg-black text-white px-7 py-3 rounded-xl hover:bg-gray-900 transition-colors duration-200 font-medium text-base shadow min-w-[140px] justify-center mx-auto"
      >
        View More
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
