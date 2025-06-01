import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="my-2 container mx-auto font-clash max-w-[1760px] h-[841px] relative rounded-lg overflow-hidden">
      <img
        src="https://res.cloudinary.com/dpku5jzrf/image/upload/v1748738340/BG_cnzbln.jpg"
        className="w-[1760px] h-[841px] object-cover rounded-lg brightness-90 z-0"
        alt="Background"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <h1 className="text-center text-white text-2xl sm:text-4xl lg:text-6xl font-semibold [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)] max-w-4xl">
          We design your dreams
        </h1>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 right-4 sm:left-8 sm:right-8 lg:left-20 lg:right-auto lg:w-[450px] rounded-2xl shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.20)] backdrop-blur-xl bg-white/10 p-4 sm:p-5 lg:p-6">
        <div className="text-white text-xs sm:text-sm lg:text-sm font-light pb-2 leading-relaxed pr-8">
          Discover a symphony of form and function, where innovative design
          meets timeless elegance. Our architecture studio crafts spaces that
          not only captivate the eye but also enrich the soul.
        </div>
        <div className="flex justify-center items-center gap-2 w-full max-w-[140px] sm:max-w-[150px] lg:max-w-[144px] h-9 sm:h-10 lg:h-10 bg-black rounded-lg">
          <div className="font-figtree text-center text-white text-xs sm:text-sm font-medium">
            View More
          </div>
          <ArrowRight color="#FFFFFF" className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>

      {/* Circular Text Badge */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
        <svg
          className="w-full h-full animate-spin"
          style={{ animationDuration: "20s" }}
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circle"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text className="fill-white text-[8px] sm:text-[7px] lg:text-[10px] font-light tracking-wider ">
            <textPath href="#circle" startOffset="0%">
              luxury • modern • minimalist • luxury • modern • minimalist •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
