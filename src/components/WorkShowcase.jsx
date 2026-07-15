import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const clientIndustries = [
    {
      image: "/images/realestate.jpg",
      industry: "Real Estate",
      description: "Helping property developers and realtors boost online visibility",
      achievement: "300% Lead Generation Increase",
      clientType: "Property Developers & Agents"
    },
    {
      image: "/images/medical.jpg",
      industry: "Healthcare",
      description: "Digital solutions for medical practices and healthcare providers",
      achievement: "200% Patient Inquiries",
      clientType: "Medical Practices & Clinics"
    },
    {
      image: "/images/online.jpg",
      industry: "E-commerce",
      description: "Driving sales for online retailers and brands",
      achievement: "5x Revenue Growth",
      clientType: "Online Retailers & D2C Brands"
    },
    {
      image: "/images/school.jpg",
      industry: "Education",
      description: "Marketing solutions for educational institutions",
      achievement: "150% Enrollment Growth",
      clientType: "Schools & Universities"
    },
    {
      image: "/images/law.jpg",
      industry: "Professional Services",
      description: "Digital presence for law firms and consultancies",
      achievement: "400% Quality Leads",
      clientType: "Law Firms & Consultants"
    },
    {
      image: "/images/hotel.jpg",
      industry: "Restaurant & Hospitality",
      description: "Boosting bookings and online orders",
      achievement: "250% Booking Increase",
      clientType: "Restaurants & Hotels"
    },
    {
      image: "/images/tech.jpg",
      industry: "Technology",
      description: "Marketing for SaaS and tech companies",
      achievement: "180% User Acquisition",
      clientType: "SaaS & Tech Companies"
    },
    {
      image: "/images/technology.jpg",
      industry: "Manufacturing",
      description: "Digital solutions for industrial clients",
      achievement: "3x B2B Leads",
      clientType: "Manufacturers & Suppliers"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 bg-transparent">
      <div className="text-center mb-6 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="block text-lg font-extrabold text-blue-600 tracking-wider uppercase mb-2">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="block">
              Digital Marketing Solutions
            </span>

            <span className="block text-blue-600 mt-1">
              for Every Industry
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </motion.div>
        <motion.p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg leading-8">
          From <span className="font-semibold text-gray-900">Real Estate</span> and
          <span className="font-semibold text-gray-900"> Healthcare</span> to
          <span className="font-semibold text-gray-900"> E-commerce</span>,
          <span className="font-semibold text-gray-900"> Education</span>,
          <span className="font-semibold text-gray-900"> Hospitality</span>,
          <span className="font-semibold text-gray-900"> Technology</span>, and
          <span className="font-semibold text-gray-900"> Manufacturing</span>,
          we've helped businesses generate more traffic, quality leads, and measurable growth.

          <br />

          <span className="text-blue-600 font-semibold">
            Every strategy is built around your industry, your audience, and your business goals
            — never a one-size-fits-all approach.
          </span>
        </motion.p>
      </div>

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
    </div>
  );
};

export default WorkShowcase;