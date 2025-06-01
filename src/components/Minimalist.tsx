const ModernMinimalistComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 py-6 md:py-10 lg:py-18 px-2 sm:px-4 md:px-8 lg:px-16 items-center w-full max-w-full overflow-x-hidden">
      {/* Main Image Container */}
      <div className="w-full lg:flex-1 mb-4 lg:mb-0">
        <img
          src="https://res.cloudinary.com/dpku5jzrf/image/upload/v1748738858/Group_8733_klwwnx.webp"
          alt="Main design showcase"
          className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-full object-cover rounded-lg"
        />
      </div>

      {/* Boxes Container */}
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-4 lg:gap-10 w-full sm:w-auto lg:w-96 lg:ml-10 self-center lg:self-auto">
        <Box1 />
        <Box2 />
      </div>
    </div>
  );
};

function Box1() {
  return (
    <div className="w-full sm:w-1/2 lg:w-full h-40 xs:h-48 sm:h-56 md:h-56 lg:h-64 relative bg-[#E6D4C5] rounded-2xl overflow-hidden min-w-[0]">
      {/* Badge */}
      <div className="px-2 py-1 xs:px-3 xs:py-1.5 md:px-3.5 md:py-2 left-2 xs:left-4 md:left-8 top-2 xs:top-4 md:top-6 absolute bg-[#E6D4C5] rounded-full md:rounded-[20px] border border-black inline-flex justify-center items-center">
        <div className="text-black text-xs xs:text-sm font-medium">Aesthetic</div>
      </div>

      {/* Description */}
      <div className="left-2 xs:left-4 md:left-8 top-12 xs:top-16 md:top-20 absolute pr-2 xs:pr-4 md:pr-8">
        <p className="text-black text-xs xs:text-sm md:text-sm font-normal leading-tight">
          Aesthetic design where every piece tells a story of style
        </p>
      </div>

      {/* Main Title */}
      <div className="left-2 xs:left-4 md:left-8 bottom-2 xs:bottom-4 md:bottom-6 absolute pr-2 xs:pr-4 md:pr-8">
        <h3 className="text-black text-base xs:text-lg md:text-2xl lg:text-3xl font-medium leading-tight">
          Into a gallery of elegance
        </h3>
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-full h-48 xs:h-64 sm:h-64 md:h-80 lg:h-96 relative rounded-2xl overflow-hidden bg-cover bg-center min-w-[0]"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dpku5jzrf/image/upload/v1748736365/c4170d38c3ac39166a3ef1f2d8c42fb810430bb6_1_lbp5mo.webp)",
      }}
    >
      {/* Badge */}
      <div className="px-2 py-1 xs:px-3 xs:py-1.5 md:px-3.5 md:py-2 left-2 xs:left-4 md:left-10 top-2 xs:top-6 md:top-12 absolute bg-black/20 backdrop-blur-sm rounded-full md:rounded-[20px] border border-white/50 inline-flex justify-center items-center">
        <div className="text-white text-xs xs:text-sm font-medium">Furniture</div>
      </div>

      {/* Description */}
      <div className="left-2 xs:left-4 md:left-10 top-12 xs:top-16 md:top-28 absolute pr-2 xs:pr-4 md:pr-10">
        <p className="text-white text-xs xs:text-sm md:text-lg lg:text-xl font-normal leading-tight">
          Indulge in the artistry of everyday living
        </p>
      </div>
    </div>
  );
}

export default ModernMinimalistComponent;
