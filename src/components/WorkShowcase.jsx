import React from 'react';
import WorkShowcaseCarousel from './WorkShowcaseCarousel';
import styles from './WorkShowcase.module.css';

// ✅ Server Component — no "use client" here. The header below is fully
// static markup, so it costs zero JS. Only the carousel (which genuinely
// needs the browser for Embla) is split out into a Client Component.

const clientIndustries = [
  {
    image: "/images/realestate.webp",
    industry: "Real Estate",
    description: "Helping property developers and realtors boost online visibility",
    achievement: "300% Lead Generation Increase",
    clientType: "Property Developers & Agents"
  },
  {
    image: "/images/medical.webp",
    industry: "Healthcare",
    description: "Digital solutions for medical practices and healthcare providers",
    achievement: "200% Patient Inquiries",
    clientType: "Medical Practices & Clinics"
  },
  {
    image: "/images/online.webp",
    industry: "E-commerce",
    description: "Driving sales for online retailers and brands",
    achievement: "5x Revenue Growth",
    clientType: "Online Retailers & D2C Brands"
  },
  {
    image: "/images/school.webp",
    industry: "Education",
    description: "Marketing solutions for educational institutions",
    achievement: "150% Enrollment Growth",
    clientType: "Schools & Universities"
  },
  {
    image: "/images/law.webp",
    industry: "Professional Services",
    description: "Digital presence for law firms and consultancies",
    achievement: "400% Quality Leads",
    clientType: "Law Firms & Consultants"
  },
  {
    image: "/images/hotel.webp",
    industry: "Restaurant & Hospitality",
    description: "Boosting bookings and online orders",
    achievement: "250% Booking Increase",
    clientType: "Restaurants & Hotels"
  },
  {
    image: "/images/tech.webp",
    industry: "Technology",
    description: "Marketing for SaaS and tech companies",
    achievement: "180% User Acquisition",
    clientType: "SaaS & Tech Companies"
  },
  {
    image: "/images/technology.webp",
    industry: "Manufacturing",
    description: "Digital solutions for industrial clients",
    achievement: "3x B2B Leads",
    clientType: "Manufacturers & Suppliers"
  }
];

const WorkShowcase = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 bg-transparent">
      <div className="text-center mb-6 sm:mb-10">
        <div className={`inline-block ${styles.fadeInUp}`}>
          <span className="block text-lg font-extrabold text-blue-600 tracking-wider uppercase mb-2">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="block">Digital Marketing Solutions</span>
            <span className="block text-blue-600 mt-1">for Every Industry</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg leading-8">
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
        </p>
      </div>

      <WorkShowcaseCarousel clientIndustries={clientIndustries} />
    </div>
  );
};

export default WorkShowcase;