import { ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export const Galleryheader = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-12 sm:py-24 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
        {/* Left side - Main heading */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-black leading-tight">
            Explore Our Curated Project Gallery
          </h1>
        </div>
        {/* Right side - Button and Description Container */}
        <div className="flex flex-col items-end gap-4">
          {/* Button */}
          <button
            onClick={() => navigate({ to: "/gallery" })}
            className="flex items-center gap-3 bg-black text-white px-7 py-3 rounded-xl hover:bg-gray-900 transition-colors duration-200 font-medium text-base shadow min-w-[140px] justify-center"
          >
            View More
            <ArrowRight className="w-5 h-5" />
          </button>
          {/* Description */}
          <p className="text-black text-base text-right font-normal leading-relaxed max-w-md">
            Our portfolio showcases a range of projects, from cozy living rooms to luxurious bedrooms, and everything in between. We have worked on residential projects, commercial spaces, and hospitality interiors, and have experience working with a variety of design styles.
          </p>
        </div>
      </div>
    </div>
  );
};
