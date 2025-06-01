const ImageMarquee = () => {
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748733214/carousel1_gftyhb.webp",
      alt: "Interior Design 1",
      width: 285,
      height: 200,
      rotate: "-3.40deg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748733292/carousel2_cjtiab.webp",
      alt: "Interior Design 2",
      width: 284,
      height: 200,
      rotate: "3.40deg",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748733334/carousel3_tmgnc5.webp",
      alt: "Interior Design 3",
      width: 277,
      height: 200,
      rotate: "-3.40deg",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748733437/carousel4_vmmfwl.webp",
      alt: "Interior Design 4",
      width: 285,
      height: 200,
      rotate: "3.40deg",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748733431/carousel5_yv5pg1.webp",
      alt: "Interior Design 5",
      width: 279,
      height: 200,
      rotate: "-3.40deg",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748733437/carousel4_vmmfwl.webp",
      alt: "Interior Design 5",
      width: 279,
      height: 200,
      rotate: "3.40deg",
    },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden pb-24 pt-12 hover:pause">
      <div className="flex animate-marquee hover:animate-pause">
        {duplicatedImages.map((image, index) => {
          return (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 gap-5 first:ml-0 z-0 hover:z-10 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{ transform: `rotate(${image.rotate})` }}
                className="object-contain gap-5 rounded-[20px] transition-all duration-200 ease-in group-hover:-translate-x-[20%] group-hover:scale-125"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageMarquee;
