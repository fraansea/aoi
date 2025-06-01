import { BgCta } from "@/components/BgCta";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
// import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="font-clash   w-full bg-white ">
      <BgCta />
      <div className="max-w-7xl mx-auto my-12   ">
        <AboutUsIntro />
        <FounderData />
      </div>
    </div>
  );
}

function AboutUsIntro() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 mb-24 px-4 md:px-12">
      <div className="space-y-8 flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
          About us
        </h1>
        <div className="space-y-6">
          <p className="text-black font-normal text-sm leading-normal">
            At *Studio AOI, we are a versatile architecture firm specializing in
            a wide range of design services, including **interior and exterior**
            architecture, **landscaping, and the creation of custom
            **furniture** and **artworks**. Our approach combines creativity
            with functionality to craft spaces that are not only aesthetically
            striking but also deeply aligned with the needs and aspirations of
            our clients. Whether transforming interiors, designing outdoor
            landscapes, or producing unique pieces of furniture and art, we are
            committed to delivering innovative, tailored solutions that enhance
            the way people experience and interact with their environments.
          </p>
        </div>
      </div>

      <div className="hidden md:inline w-full md:w-auto flex-shrink-0">
        <div className="rounded-3xl overflow-hidden relative">
          <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dpku5jzrf/image/upload/v1748725723/aboutheader_oepaz2.webp"
              className="w-full h-full rounded-xl object-cover"
              alt="About Studio AOI"
            />
          </div>
          <div className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center">
            <WhiteCircleArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

function FounderData() {
  return (
    <div className="space-y-24 py-8">
      {/* First founder - Image first on desktop, Image first on mobile */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
        <div className=" flex-shrink-0 px-4 md:px-8 lg:px-16">
          <img
            src="https://res.cloudinary.com/dpku5jzrf/image/upload/v1748725012/founder.webp"
            className="w-full h-auto max-h-64 md:max-h-80 lg:h-96 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] object-contain md:object-cover"
            alt="Affrin Firos - Co-Founder"
          />
        </div>
        <div className=" space-y-6 md:space-y-8 px-4 md:px-8 lg:px-12">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
              AFFRIN FIROS
            </h2>
            <p className="text-zinc-600 text-md md:text-xl font-normal uppercase tracking-wide">
              CO-FOUNDER
            </p>
          </div>
          <p className="text-black font-normal text-sm leading-normal">
            Discover a symphony of form and function, where innovative design
            meets timeless elegance. Our architecture studio crafts spaces that
            not only captivate the eye but also enrich the soul. Let us
            transform your vision into awe-inspiring structures that redefine
            the art of living.
          </p>
        </div>
      </div>

      {/* Second founder - Content first on desktop, Image first on mobile */}
      <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 lg:gap-16 items-center">
        <div className=" flex-shrink-0 px-4 md:px-8 lg:px-16 order-1 lg:order-none">
          <img
            src="https://res.cloudinary.com/dpku5jzrf/image/upload/v1748725012/founder.webp"
            className="w-full h-auto max-h-64 md:max-h-80 lg:h-96 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] object-contain md:object-cover"
            alt="Second Founder - Co-Founder"
          />
        </div>
        <div className=" space-y-6 md:space-y-8 px-4 md:px-8 lg:px-12 order-2 lg:order-none">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
              ANU JOJO
            </h2>
            <p className="text-zinc-600 text-md md:text-xl font-normal uppercase tracking-wide">
              CO-FOUNDER
            </p>
          </div>
          <p className="text-black font-normal text-sm leading-normal">
            Discover a symphony of form and function, where innovative design
            meets timeless elegance. Our architecture studio crafts spaces that
            not only captivate the eye but also enrich the soul. Let us
            transform your vision into awe-inspiring structures that redefine
            the art of living.
          </p>
        </div>
      </div>
    </div>
  );
}

function WhiteCircleArrow() {
  return (
    <div className="inline-block bg-white rounded-full p-3 md:p-4 lg:p-5">
      <ArrowUpRight
        color="#FFFFFF"
        size={32} // Increased base size
        className="bg-black p-3 md:p-4 lg:p-5 rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
      />
    </div>
  );
}
