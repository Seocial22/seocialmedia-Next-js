import React from "react";
import WorkShowcase from "./WorkShowcase";
import MarketingGrid from "./MarketingGrid";

import {
  ArrowRight,
  Code,
  Paintbrush,
  Sparkles,
  Check,
  Rocket,
} from "lucide-react";
import Link from "next/link";

import styles from "./ProductServicesPage.module.css";

// ✅ No "use client" needed — no hooks, no browser-only APIs, no event handlers.
// This entire page now renders as a Server Component: zero JS shipped for it.
// All entrance/fade animations that used to run through framer-motion are now
// plain CSS (@keyframes) defined in ProductServicesPage.module.css.

// ✅ CTA Box — mouse-tilt, ambient orb animation and hover shimmer removed.
// Box is static; only plain CSS hover states remain (button, icons).
const InteractiveCTABox = () => {
  return (
    <div className="w-full mt-16 z-20">
      <div className="w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(79,70,229,0.25)] border border-indigo-500/20 relative overflow-hidden cursor-default">
        {/* Static ambient background accents (no longer animated) */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[80px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          {/* Sparkles & Heading */}
          <div className="relative">
            <Sparkles className="absolute -top-6 -left-6 w-8 h-8 text-yellow-300 animate-bounce" />
            <Sparkles
              className="absolute -top-6 -right-6 w-8 h-8 text-yellow-300 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />

            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20 w-fit mx-auto block">
                Limited Offer
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                Get Your Customized Website
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                  in Just 7 Days!
                </span>
              </h2>

              <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
                Transform your online presence with our expert web development services.
              </p>

              {/* Feature list badges */}
              <div className="flex flex-wrap gap-3 justify-center text-white max-w-lg mx-auto font-semibold">
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Check className="w-4 h-4 text-emerald-400 stroke-[3px]" />
                  <span className="text-xs sm:text-sm text-slate-200">Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Check className="w-4 h-4 text-emerald-400 stroke-[3px]" />
                  <span className="text-xs sm:text-sm text-slate-200">SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Check className="w-4 h-4 text-emerald-400 stroke-[3px]" />
                  <span className="text-xs sm:text-sm text-slate-200">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of 3 highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
            <div className="bg-slate-950/40 border border-white/5 hover:border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:bg-slate-950/60 transition-all duration-300 group/item">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3 group-hover/item:scale-110 transition-transform">
                <Code className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-bold mb-1 text-sm text-white">Custom Development</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tailored solutions built with modern technologies
              </p>
            </div>

            <div className="bg-slate-950/40 border border-white/5 hover:border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:bg-slate-950/60 transition-all duration-300 group/item">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3 group-hover/item:scale-110 transition-transform">
                <Paintbrush className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold mb-1 text-sm text-white">Unique Design</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stand out with stunning, brand-aligned visuals
              </p>
            </div>

            <div className="bg-slate-950/40 border border-white/5 hover:border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:bg-slate-950/60 transition-all duration-300 group/item">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3 group-hover/item:scale-110 transition-transform">
                <Rocket className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold mb-1 text-sm text-white">Fast Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">From concept to launch in just 7 days</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 px-8 py-4 rounded-full font-black text-base hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 flex items-center gap-2 mx-auto group w-fit shadow-lg shadow-yellow-500/10"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductServicesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-8 pb-8 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Static background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/50 rounded-full filter blur-[80px]" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-200/40 rounded-full filter blur-[80px]" />
        <div className="absolute -bottom-10 left-20 w-72 h-72 bg-pink-200/40 rounded-full filter blur-[80px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] z-10">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-block">
            <span className="block text-lg font-extrabold text-blue-600 tracking-wider uppercase mb-3">
              Why Choose Us
            </span>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl leading-tight ${styles.fadeInUp}`}>
              <span className="block font-bold text-gray-900">A Digital Marketing Partner</span>
              <span className="block font-black text-gray-900 mt-2">
                That Delivers —
                <span className="text-blue-600 italic ml-2">Not Just Promises</span>
              </span>
            </h2>
          </div>

          <p
            className={`mt-6 max-w-4xl mx-auto text-center text-gray-600 text-base sm:text-lg leading-8 font-normal ${styles.fadeInUpDelayed}`}
          >
            For over 6 years, SEOcial Media Solutions has helped businesses across Jaipur and India
            build a digital presence that actually drives results — more visibility, more leads, and
            more customers. Whether you need to rank higher on Google, grow your following on social
            media, run high-converting ad campaigns, or launch a brand-new website, our team builds
            strategies tailored to your business — not templates copied from someone else&apos;s.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-8 gap-4 mx-auto max-w-[1000px]">
          {/* Product Strategy */}
          <div
            className={`md:col-span-2 md:row-span-5 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-purple-100 ${styles.card}`}
          >
            <div className="absolute inset-0 bg-purple-100/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-3">Product Strategy</h2>
              <p className="text-purple-800 text-base sm:text-lg font-semibold">
                Crafting visionary blueprints to drive your product&apos;s success.
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-1/2 pointer-events-none">
              <div
                className="w-full h-full bg-cover bg-center opacity-90"
                style={{
                  backgroundImage: 'url("images/grid.png")',
                  backgroundPosition: "center bottom",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>

          {/* UI & UX Design */}
          <div
            className={`md:col-span-4 md:row-span-3 md:col-start-3 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-pink-400 ${styles.card}`}
          >
            <div className="absolute inset-0 bg-pink-400/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">UI & UX Design</h2>
              <p className="text-gray-700 text-base sm:text-lg font-semibold">
                Designing delightful and intuitive user experiences.
              </p>
            </div>
            <div className="absolute top-1/4 right-0 w-1/2 h-3/4 pointer-events-none">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-right"
                style={{ backgroundImage: 'url("images/grid2.png")' }}
              />
            </div>
          </div>

          {/* Product Research */}
          <div
            className={`md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-green-200 ${styles.card}`}
          >
            <div className="absolute inset-0 bg-green-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-green-900 mb-3">Product Research</h2>
              <p className="text-green-800 text-base font-semibold">
                Uncovering deep insights to fuel informed decisions.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-right-bottom"
                style={{ backgroundImage: 'url("images/grid4.png")' }}
              />
            </div>
          </div>

          {/* Product Growth */}
          <div
            className={`md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-blue-200 ${styles.card}`}
          >
            <div className="absolute inset-0 bg-blue-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Product Growth</h2>
              <p className="text-blue-800 text-base font-semibold">
                Accelerating your product&apos;s journey to market dominance.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-right-bottom"
                style={{ backgroundImage: 'url("images/grid4.webp")' }}
              />
            </div>
          </div>

          {/* Software Development */}
          <div
            className={`md:col-span-4 md:row-span-3 md:row-start-6 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-orange-200 ${styles.card}`}
          >
            <div className="absolute inset-0 bg-orange-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16 text-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-3">Software Development</h2>
              <p className="text-orange-800 text-base sm:text-lg font-semibold">
                Building robust software solutions tailored to your needs.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-3/4 pointer-events-none">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-left-bottom"
                style={{ backgroundImage: 'url("images/grid5.png")' }}
              />
            </div>
          </div>

          {/* Maintenance & Support */}
          <div
            className={`md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-6 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-yellow-200 ${styles.card}`}
          >
            <div className="absolute inset-0 bg-yellow-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-900 mb-3">Maintenance & Support</h2>
              <p className="text-yellow-800 text-base font-semibold">
                Keeping your software seamless with expert updates and support.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-1/2 pointer-events-none">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-right-bottom"
                style={{ backgroundImage: 'url("images/grid7.png")' }}
              />
            </div>
          </div>
        </div>

        {/* 7 Days Section */}
        <InteractiveCTABox />

        <WorkShowcase />
        <MarketingGrid />
      </div>
    </div>
  );
};

export default ProductServicesPage;