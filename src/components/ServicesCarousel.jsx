import React from 'react';
import {
  Code, Search, PenTool, MousePointer, Share2, Clapperboard
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Fast, mobile-friendly, SEO-optimized websites launched in as little as 7 days.',
    actionLink: '/web-development-company-jaipur',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'On-page, off-page, technical and local SEO built for long-term, sustainable growth.',
    actionLink: '/seo-company-jaipur',
  },
  {
    icon: Clapperboard,
    title: 'Video Editing',
    description: 'Professional video content for social media, ads, and brand storytelling.',
    actionLink: '/video-editing-company-jaipur',
  },
  {
    icon: MousePointer,
    title: 'Google Ads & PPC',
    description: 'High-ROI Google Ads and lead generation campaigns that reach ready-to-buy customers.',
    actionLink: '/lead-generation-company-jaipur',
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'SEO-friendly blogs, website copy and marketing content that ranks and reads well.',
    actionLink: '/content-writing-company-jaipur',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Strategic content, community management, and paid social across Instagram, Facebook and LinkedIn.',
    actionLink: '/social-media-marketing-jaipur',
  },
];

// Duplicate the list so the track can loop seamlessly.
const trackServices = [...services, ...services];

const ServicesCarousel = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 bg-yellow-400/10 rounded-full mb-2 backdrop-blur-sm border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors">
            <span className="text-yellow-400 text-sm font-semibold">Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-400">
            Digital Solutions
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <div className="group overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee-right group-hover:[animation-play-state:paused]">
            {trackServices.map((service, index) => (
              <a
                key={index}
                href={service.actionLink}
                className="peer/card flex-shrink-0 w-56 md:w-64 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-5 hover:border-yellow-400/50 hover:bg-gray-800/80 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-yellow-400/10 mb-4">
                  <service.icon className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-400">
                  Learn more
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee animation + reduced-motion support.
         If your Tailwind config supports arbitrary keyframes globally,
         you can move this into tailwind.config.js instead. */}
      <style jsx global>{`
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
        .animate-marquee-right {
          animation: marquee-right 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesCarousel;