// import { useState } from 'react';
import { ArrowUpRight } from "lucide-react";

const GalleryGrid = () => {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Kanakamala",
      image:
        "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748729931/gridimg1_cfxvkf.webp",
      description: "Modern living room with earthy tones",
      span: "normal", // regular size
    },
    {
      id: 2,
      title: "Kanakamala",
      image:
        "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748729572/791c21e166865767cbea97dccb35ef12da076a03_ahs94q.webp",
      description: "Minimalist hallway with natural light",
      span: "tall", // 2 rows
    },
    {
      id: 3,
      title: "Kanakamala",
      image:
        "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748729753/grindimg4_co4wh5.webp",
      description: "Vibrant yellow accent wall",
      span: "normal", // regular size
    },
    {
      id: 4,
      title: "Kanakamala",
      image:
        "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748729496/22f34490885a9cf34a9af9d50003bf0e444c581e_fiyojr.webp",
      description: "Warm wood paneling and natural elements",
      span: "tall", // 2 rows
    },
    {
      id: 5,
      title: "Kanakamala",
      image:
        "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748729496/22f34490885a9cf34a9af9d50003bf0e444c581e_fiyojr.webp",
      description: "Dark sophisticated interior",
      span: "tall", // 3 rows
    },
    {
      id: 6,
      title: "Kanakamala",
      image:
        "https://res.cloudinary.com/dpku5jzrf/image/upload/v1748725723/aboutheader_oepaz2.webp",
      description: "Clean contemporary living space",
      span: "normal", // regular size
    },
  ];

  const getSpanClasses = (span: string) => {
    switch (span) {
      case "tall":
        return "md:row-span-3";
      default:
        return "md:row-span-2";
    }
  };

  return (
    <div className="p-4 md:p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stack all items vertically */}
        <div className="block md:hidden space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 ease-out h-64
              `}
              // onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-full object-cover transition-transform duration-700 "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 ">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-white text-lg font-light tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Desktop: Masonry-style grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-[repeat(6,200px)]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 ease-out
                ${getSpanClasses(item.span)}

              `}
              // onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full h-full relative">
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-full object-cover transition-transform duration-700 "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-end  ">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-white text-2xl font-light tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
