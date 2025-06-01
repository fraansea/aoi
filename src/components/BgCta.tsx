import { AoiTraced } from "./svg/AoiTraced";

export const BgCta = () => {
  return (
    <div className="w-full py-2 sm:py-4 px-4 sm:px-8 lg:px-16">
      <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl">
        <img
          src="https://res.cloudinary.com/dpku5jzrf/image/upload/v1748738668/AboutBgImage_v8ixi5.webp"
          alt="About bg image"
          className="w-full h-auto object-cover"
        />

        {/* Centered AoiTraced using flexbox centering */}
        <div className="absolute inset-0 flex items-center justify-center z-10 ">
          <div className="w-32 sm:w-48 md:w-64 lg:w-84 xl:w-96 ">
            <AoiTraced />
          </div>
        </div>

        {/* Left Gradient */}
        <div className="absolute left-0 top-0 h-full w-1/4 sm:w-1/6 md:w-1/8 bg-gradient-to-r from-black to-transparent z-10" />

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 h-full w-1/4 sm:w-1/6 md:w-1/8 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </div>
  );
};
