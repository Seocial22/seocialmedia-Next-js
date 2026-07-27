"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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


const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// ✅ Interactive 3D CTA Box Component
const InteractiveCTABox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Gentle 3D tilt for the entire CTA banner (max 4 degrees)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 100, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 100, damping: 25 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1500px] w-full mt-16 z-20">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(79,70,229,0.25)] hover:shadow-[0_30px_70px_rgba(99,102,241,0.4)] border border-indigo-500/20 transition-all duration-500 relative overflow-hidden group cursor-default"
      >
        {/* Luminous Ambient Background Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-[80px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[80px] pointer-events-none"
        />

        {/* Premium Gloss Shimmer Sweep */}
        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-out pointer-events-none z-10" />

        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10" style={{ transform: "translateZ(20px)" }}>
          
          {/* Sparkles & Heading */}
          <div className="relative">
            <Sparkles className="absolute -top-6 -left-6 w-8 h-8 text-yellow-300 animate-bounce" />
            <Sparkles className="absolute -top-6 -right-6 w-8 h-8 text-yellow-300 animate-bounce" style={{ animationDelay: "0.5s" }} />

            <div className="space-y-4">
              <span 
                style={{ transform: "translateZ(30px)" }}
                className="text-xs uppercase font-extrabold tracking-widest text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20 w-fit mx-auto block"
              >
                Limited Offer
              </span>
              
              <h2 
                style={{ transform: "translateZ(35px)" }}
                className="text-3xl md:text-5xl font-black text-white leading-tight filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
              >
                Get Your Customized Website
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                  in Just 7 Days!
                </span>
              </h2>

              <p 
                style={{ transform: "translateZ(25px)" }}
                className="text-base md:text-lg text-slate-300 max-w-xl mx-auto font-medium leading-relaxed"
              >
                Transform your online presence with our expert web development services.
              </p>

              {/* Feature list badges */}
              <div 
                style={{ transform: "translateZ(25px)" }}
                className="flex flex-wrap gap-3 justify-center text-white max-w-lg mx-auto font-semibold"
              >
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
            <div 
              style={{ transform: "translateZ(30px)" }}
              className="bg-slate-950/40 border border-white/5 hover:border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:bg-slate-950/60 transition-all duration-300 group/item"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3 group-hover/item:scale-110 transition-transform">
                <Code className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-bold mb-1 text-sm text-white">
                Custom Development
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tailored solutions built with modern technologies
              </p>
            </div>

            <div 
              style={{ transform: "translateZ(30px)" }}
              className="bg-slate-950/40 border border-white/5 hover:border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:bg-slate-950/60 transition-all duration-300 group/item"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3 group-hover/item:scale-110 transition-transform">
                <Paintbrush className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold mb-1 text-sm text-white">Unique Design</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stand out with stunning, brand-aligned visuals
              </p>
            </div>

            <div 
              style={{ transform: "translateZ(30px)" }}
              className="bg-slate-950/40 border border-white/5 hover:border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:bg-slate-950/60 transition-all duration-300 group/item"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3 group-hover/item:scale-110 transition-transform">
                <Rocket className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold mb-1 text-sm text-white">Fast Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">From concept to launch in just 7 days</p>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ transform: "translateZ(40px)" }} className="pt-2">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 px-8 py-4 rounded-full font-black text-base hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 flex items-center gap-2 mx-auto group w-fit shadow-lg shadow-yellow-500/10"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const ProductServicesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-8 pb-8 bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 30, -20, 0],
            y: [0, 40, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-72 h-72 bg-blue-200/50 rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, -40, 20, 0],
            y: [0, -30, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-10 right-10 w-72 h-72 bg-yellow-200/40 rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 0.8, 1],
            x: [0, 20, -30, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute -bottom-10 left-20 w-72 h-72 bg-pink-200/40 rounded-full filter blur-[80px]"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] z-10">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="block text-lg font-extrabold text-blue-600 tracking-wider uppercase mb-3">
              Why Choose Us
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              <span className="block font-bold text-gray-900">
                A Digital Marketing Partner
              </span>
              <span className="block font-black text-gray-900 mt-2">
                That Delivers —
                <span className="text-blue-600 italic ml-2">
                  Not Just Promises
                </span>
              </span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 max-w-4xl mx-auto text-center text-gray-600 text-base sm:text-lg leading-8 font-normal"
          >
            For over 6 years, SEOcial Media Solutions has helped businesses across Jaipur and India build a digital presence that actually drives results — more visibility, more leads, and more customers.
            Whether you need to rank higher on Google, grow your following on social media, run high-converting ad campaigns, or launch a brand-new website, our team builds strategies tailored to your business — not templates copied from someone else's.
          </motion.p>
        </div>

        {/* Services Grid with Custom Image Animations */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-8 gap-4 mx-auto max-w-[1000px] perspective-[1000px]">
          
          {/* Product Strategy */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-5 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-purple-100"
          >
            <div className="absolute inset-0 bg-purple-100/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-3">
                Product Strategy
              </h2>
              <p className="text-purple-800 text-base sm:text-lg font-semibold">
                Crafting visionary blueprints to drive your product's success.
              </p>
            </div>
            
            <motion.div
              variants={{
                hover: { scale: 1.1, y: -10 }
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="absolute left-0 right-0 bottom-0 h-1/2 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full h-full bg-cover bg-center opacity-90"
                style={{
                  backgroundImage: 'url("images/grid.png")',
                  backgroundPosition: "center bottom",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </motion.div>
          </motion.div>

          {/* UI & UX Design */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-3 md:col-start-3 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-pink-400"
          >
            <div className="absolute inset-0 bg-pink-400/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                UI & UX Design
              </h2>
              <p className="text-gray-700 text-base sm:text-lg font-semibold">
                Designing delightful and intuitive user experiences.
              </p>
            </div>

            <motion.div
              variants={{
                hover: { scale: 1.08, x: -12 }
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="absolute top-1/4 right-0 w-1/2 h-3/4 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="w-full h-full bg-contain bg-no-repeat bg-right"
                style={{ backgroundImage: 'url("images/grid2.png")' }}
              />
            </motion.div>
          </motion.div>

          {/* Product Research */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-green-200"
          >
            <div className="absolute inset-0 bg-green-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-green-900 mb-3">
                Product Research
              </h2>
              <p className="text-green-800 text-base font-semibold">
                Uncovering deep insights to fuel informed decisions.
              </p>
            </div>

            <motion.div
              variants={{
                hover: { scale: 1.12, rotate: 3, y: -6 }
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="w-full h-full bg-contain bg-no-repeat bg-right-bottom"
                style={{ backgroundImage: 'url("images/grid4.png")' }}
              />
            </motion.div>
          </motion.div>

          {/* Product Growth */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-blue-200"
          >
            <div className="absolute inset-0 bg-blue-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
                Product Growth
              </h2>
              <p className="text-blue-800 text-base font-semibold">
                Accelerating your product's journey to market dominance.
              </p>
            </div>

            <motion.div
              variants={{
                hover: { scale: 1.12, y: -10, x: 5 }
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="w-full h-full bg-contain bg-no-repeat bg-right-bottom"
                style={{ backgroundImage: 'url("images/grid4.webp")' }}
              />
            </motion.div>
          </motion.div>

          {/* Software Development */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-3 md:row-start-6 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-orange-200"
          >
            <div className="absolute inset-0 bg-orange-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16 text-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-3">
                Software Development
              </h2>
              <p className="text-orange-800 text-base sm:text-lg font-semibold">
                Building robust software solutions tailored to your needs.
              </p>
            </div>

            <motion.div
              variants={{
                hover: { scale: 1.08, y: -8, rotate: -1 }
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="absolute bottom-0 left-0 w-1/2 h-3/4 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="w-full h-full bg-contain bg-no-repeat bg-left-bottom"
                style={{ backgroundImage: 'url("images/grid5.png")' }}
              />
            </motion.div>
          </motion.div>

          {/* Maintenance & Support */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-6 rounded-2xl p-6 relative overflow-hidden group cursor-pointer bg-yellow-200"
          >
            <div className="absolute inset-0 bg-yellow-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-900 mb-3">
                Maintenance & Support
              </h2>
              <p className="text-yellow-800 text-base font-semibold">
                Keeping your software seamless with expert updates and support.
              </p>
            </div>

            <motion.div
              variants={{
                hover: { scale: 1.08, x: 8, y: -5 }
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="absolute bottom-0 right-0 w-2/3 h-1/2 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full h-full bg-contain bg-no-repeat bg-right-bottom"
                style={{ backgroundImage: 'url("images/grid7.png")' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* 7 Days Section (Upgraded with Interactive 3D Glow Design) */}
        <InteractiveCTABox />

        <WorkShowcase />
        <MarketingGrid />
      </div>
    </div>
  );
};

export default ProductServicesPage;