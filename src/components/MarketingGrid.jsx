"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './MarketingGrid.module.css';

// ✅ framer-motion removed entirely. The only JS left is the expand/collapse
// state — every animation (entrance, hover, tap, rotate, expand, fade) is
// now plain CSS defined in MarketingGrid.module.css.

const services = [
    {
        title: "End-to-End Digital Solutions — SEO, social media, ads, websites and content all under one roof",
        description: "We don't just market your business—we build brands. From SEO and social media to PPC and content marketing, we craft strategies that drive real growth.",
        expandedText: "At SEOcial Media Solutions, we take a 360° approach to digital marketing. Our expert team blends creativity with data-driven insights to help you rank higher, attract more customers, and grow your business online."
    },
    {
        title: "6+ Years of Proven Results — Helping businesses turn online visibility into real revenue",
        description: "With over six years of experience, we've helped businesses in Jaipur and beyond turn clicks into customers and brands into success stories.",
        expandedText: "Our journey is built on trust, innovation, and results. We know what works in today's digital world, and we tailor every strategy to fit your business goals perfectly."
    },
    {
        title: "15+ Industries Served — From clinics to e-commerce brands, we understand your market",
        description: "Every business is unique, and so is our approach. Whether you're in healthcare, real estate, education, or e-commerce, we craft digital strategies that deliver results.",
        expandedText: "We take the time to understand your industry, competitors, and target audience to create a marketing plan that helps you stand out and stay ahead."
    },
    {
        title: "95% Client Retention — We build long-term partnerships, not one-off projects",
        description: "Our clients stay with us because we focus on results, not just promises. We believe in building long-term partnerships with honesty, transparency, and success.",
        expandedText: "From startups to established brands, we've helped businesses grow exponentially through data-backed strategies and continuous optimization."
    },
    {
        title: "Hassle-Free Onboarding & Execution",
        description: "We make digital marketing simple. Our streamlined onboarding process ensures you see results quickly—without the stress of managing it yourself.",
        expandedText: "From planning to execution, we handle everything so you can focus on what you do best—running your business. Think of us as your digital growth partner."
    },
    {
        title: "Smart Market Research for Smarter Strategies",
        description: "Great marketing starts with great insights. We dive deep into data, trends, and competitor analysis to create strategies that give you a competitive edge.",
        expandedText: "Using cutting-edge tools and a keen eye for market trends, we ensure your business reaches the right audience at the right time, turning visitors into loyal customers."
    }
];

const MarketingGrid = () => {
    const [expandedItems, setExpandedItems] = React.useState({});

    const toggleExpand = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className={`text-center mb-12 ${styles.headerFadeIn}`}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                    <span className="text-gray-900">
                        Why Jaipur Businesses
                    </span>

                    <br />

                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                        Trust SEOcial Media Solutions
                    </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    const isExpanded = !!expandedItems[index];

                    return (
                        <div
                            key={index}
                            style={{ animationDelay: `${index * 0.08}s` }}
                            className={`relative bg-white rounded-2xl p-8 overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 ${styles.card}`}
                        >
                            {/* Hover Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

                            <div className="relative z-10">
                                {/* Title */}
                                <h3 className="text-2xl font-bold leading-snug tracking-tight text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Accent Line */}
                                <div className="w-14 group-hover:w-20 h-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 mx-auto mb-5 group-hover:bg-white transition-all duration-300"></div>

                                {/* Description */}
                                <div
                                    className={`overflow-hidden ${styles.description} ${isExpanded ? styles.descriptionExpanded : ''}`}
                                >
                                    <p className="text-[16px] leading-8 text-slate-600 group-hover:text-blue-50 transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    {isExpanded && (
                                        <p className={`mt-4 text-[16px] leading-8 text-slate-600 group-hover:text-blue-50 transition-colors duration-300 ${styles.fadeIn}`}>
                                            {service.expandedText}
                                        </p>
                                    )}
                                </div>

                                {/* Button */}
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className={`mt-6 inline-flex items-center font-semibold text-blue-600 group-hover:text-white transition-all duration-300 ${styles.readMoreBtn}`}
                                >
                                    Read {isExpanded ? "Less" : "More"}

                                    <div className={`ml-2 ${styles.chevron} ${isExpanded ? styles.chevronRotated : ''}`}>
                                        <ChevronDown size={18} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MarketingGrid;