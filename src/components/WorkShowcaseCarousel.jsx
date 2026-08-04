"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ✅ Client Component — this is the only part of WorkShowcase that
// genuinely needs the browser (Embla measures/scrolls real DOM nodes).
// No framer-motion here; card hover/scale effects were already plain
// Tailwind transition classes and are untouched.

const WorkShowcaseCarousel = ({ clientIndustries }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {clientIndustries.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 pl-4 py-4"
            >
              <div className="group relative overflow-hidden rounded-lg h-64 sm:h-72 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={item.image}
                  alt={item.industry}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                      {item.industry}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{item.clientType}</h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-2">{item.description}</p>
                    <div className="flex items-center">
                      <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded backdrop-blur">
                        {item.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default WorkShowcaseCarousel;