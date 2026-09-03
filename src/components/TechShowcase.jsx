"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const TechGridMotion = dynamic(() => import("./TechStack"), {
  ssr: false,
  loading: () => <div className="w-full h-64 flex items-center justify-center text-gray-400">Loading Tech Stack...</div>,
});

const technologies = [
  // Digital Marketing Tools
  {
    name: "Google Analytics",
    category: "Analytics",
    logo: "/images/google.webp",
  },
  {
    name: "Google Ads",
    category: "Advertising",
    logo: "/images/ad.webp",
  },
  {
    name: "SEMrush",
    category: "SEO",
    logo: "/images/semrush.webp",
  },
  {
    name: "Premiere",
    category: "Video Editing",
    logo: "/images/premiere.webp",
  },
  {
    name: "HootSuite",
    category: "Social Media",
    logo: "/images/hoot.webp",
  },
  {
    name: "Meta Ads",
    category: "Advertising",
    logo: "/images/meta.webp",
  },
  // Web Development Tools
  {
    name: "React",
    category: "Frontend",
    logo: "/images/react.webp",
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: "/images/nodejs.webp",
  },
  {
    name: "WordPress",
    category: "CMS",
    logo: "/images/wordpress.webp",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "/images/mongodb.webp",
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: "/images/typescript.webp",
  },
  {
    name: "Next.js",
    category: "Framework",
    logo: "/images/nextjs.webp",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    logo: "/images/tailwind.webp",
  },
  {
    name: "Canva",
    category: "Design",
    logo: "/images/canva.webp",
  },
  {
    name: "GitHub",
    category: "Version Control",
    logo: "/images/github.webp",
  },
  {
    name: "Docker",
    category: "DevOps",
    logo: "/images/docker.webp",
  },
  {
    name: "AWS",
    category: "Cloud",
    logo: "/images/aws.webp",
  },
  {
    name: "Figma",
    category: "Design",
    logo: "/images/figma.webp",
  },
];

const TechShowcase = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold mb-6">Our Technology Stack</h2>
          <p className="text-gray-600 mb-4">
            We combine powerful digital marketing tools with cutting-edge web
            development technologies to create comprehensive digital solutions.
            Our expertise spans from SEO and social media marketing to
            full-stack web development.
          </p>
          <p className="text-gray-600">
            As certified partners with major platforms and technology providers,
            we deliver scalable, modern, and effective digital solutions for
            your business.
          </p>
        </div>
        {isDesktop ? (
          <TechGridMotion className="w-full" />
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div className="w-16 h-16 mb-3 p-2 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-center font-medium text-gray-700">
                  {tech.name}
                </span>
                <span className="text-xs text-center text-gray-500 mt-1">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechShowcase;
