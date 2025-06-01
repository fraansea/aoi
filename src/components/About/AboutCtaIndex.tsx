import { ArrowRight } from "lucide-react";

export const AboutCtaIndex = () => {
  return (
    <div className="w-full h-full ">
      <div className="max-w-8xl mx-auto p-12 ">
        <div className="flex flex-col lg:flex-row gap-8  items-center">
          {/* Left side - Image container */}
          <div className=" w-full md:w-auto flex-shrink-0 flex-[3]">
            <div className="rounded-3xl overflow-hidden relative">
              <div className="w-full h-[600px] flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dpku5jzrf/image/upload/v1748734655/aboutctaimage_hsrka4.webp"
                  className="w-full h-full rounded-xl object-cover"
                  alt="About Studio AOI"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-[2] space-y-8  py-8 ">
            {/* Top tagline */}
            <div className="space-y-2">
              <p className="text-sm md:text-start sm:text-center  font-medium text-black tracking-wide">
                Elegance . Timeless . Minimalist
              </p>
            </div>

            {/* Main heading */}
            <div className="space-y-4 md:text-start sm:text-center">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-tight">
                Minimalist design
                <br />
                <span className="text-black">with natural light</span>
              </h1>
            </div>

            {/* Description text */}
            <div className="space-y-6">
              <p className="text-black text-sm font-normal ">
                Discover a symphony of form and function, where innovative
                design meets timeless elegance. Our architecture studio crafts
                spaces that not only captivate the eye but also enrich the soul.
                Let us transform your vision into awe-inspiring structures that
                redefine the art of living.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium">
                About us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
