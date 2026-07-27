"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Sparkles, TrendingUp, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

// ✅ 3D Floating Background Shapes
const FloatingShape = ({ delay, className, size = 100 }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 10 + delay * 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute rounded-full pointer-events-none filter blur-[80px] opacity-35 ${className}`}
    style={{ width: size, height: size }}
  />
);

// ✅ Background Component with ambient 3D blobs
const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 bg-slate-950 overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-[#101340] from-slate-950 via-blue-950 to-slate-900"
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    {/* Floating Ambient Light Blobs */}
    <FloatingShape delay={0} size={350} className="-top-20 -left-20 bg-blue-600/20" />
    <FloatingShape delay={4} size={450} className="top-1/3 -right-20 bg-indigo-600/20" />
    <FloatingShape delay={2} size={300} className="bottom-10 left-1/4 bg-violet-600/20" />
  </div>
);

// ✅ Wave Component
const WaveBottom = () => (
  <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
    <svg className="w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#f9fafb", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#f3f4f6", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M0,50 C150,20 350,0 500,15 C650,30 800,70 1000,80 C1200,90 1320,70 1440,40 L1440,100 L0,100 Z"
        fill="url(#gradient1)"
      />
    </svg>
  </div>
);

// ✅ Interactive 3D Phone Mockup (No external heavy assets)
// Uses CSS preserve-3d to make internal elements float forward in space
const Interactive3DPhone = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring motion for mouse coordinates
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates from -0.5 to 0.5 relative to the center
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full max-w-[400px] h-[540px] perspective-[1000px] z-20 flex justify-center items-center">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d", // Enables 3D Z-axis popups
        }}
        className="relative w-[280px] h-[490px] bg-slate-900/80 backdrop-blur-xl border-[6px] border-slate-800 rounded-[45px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer"
      >
        {/* Phone Notch/Speaker */}
        <div className="w-20 h-4 bg-slate-800 rounded-full absolute -top-1 left-1/2 -translate-x-1/2 flex items-center justify-center z-30">
          <div className="w-10 h-1 bg-slate-950 rounded-full" />
        </div>

        {/* Screen Content Wrapper */}
        <div className="w-full h-full rounded-[36px] bg-slate-950 border border-white/5 overflow-hidden p-4 flex flex-col justify-between relative">
          
          {/* Header */}
          <div className="flex justify-between items-center text-[9px] text-slate-500 font-bold tracking-wider">
            <span>SEOcial Live Feed</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500">Active Campaign</span>
            </div>
          </div>

          {/* Mini Social Media Post Mockup */}
          <div className="my-auto space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xs">
                S
              </div>
              <div>
                <div className="text-xs font-bold text-white">seocial_media</div>
                <div className="text-[9px] text-slate-400">Jaipur, Rajasthan</div>
              </div>
            </div>

            {/* Post Graphic/Visual */}
            <div className="w-full h-[180px] rounded-2xl bg-gradient-to-tr from-blue-600/30 to-indigo-900/30 border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px]" />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex flex-col items-center gap-1.5 z-10 text-center px-3"
              >
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">Brand Growth Strategy</span>
                <span className="text-[9px] text-blue-400 font-medium">99.8% Success Rate</span>
              </motion.div>
            </div>

            {/* Post Interactions */}
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <div className="flex gap-3 font-semibold">
                <span>❤️</span>
                <span>💬</span>
                <span>✈️</span>
              </div>
              <span className="font-bold text-white">4,820 Conversions</span>
            </div>
          </div>

          {/* Bottom Navigation Indicators */}
          <div className="flex justify-around items-center border-t border-white/5 pt-2 text-slate-600 text-xs">
            <span className="text-blue-500">●</span>
            <span>■</span>
            <span>▲</span>
          </div>
        </div>

        {/* 3D FLOATING BADGES (Screen से ऊपर उड़ते हुए दिखेंगे) */}
        
        {/* 1. SEO Google Rank Badge */}
        <motion.div
          style={{ transform: "translateZ(80px)" }}
          className="absolute top-10 -left-12 bg-slate-900/90 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl flex items-center gap-2.5 w-[160px]"
        >
          <div className="w-7 h-7 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
            <span className="text-yellow-400 font-extrabold text-xs">#1</span>
          </div>
          <div>
            <span className="text-[8px] text-slate-400 font-bold block uppercase tracking-wider">Google Rank</span>
            <span className="text-[11px] font-extrabold text-white">SEO Success</span>
          </div>
        </motion.div>

        {/* 2. Instagram Likes Pop-out */}
        <motion.div
          style={{ transform: "translateZ(100px)" }}
          className="absolute top-1/2 -right-16 bg-rose-600 text-white px-3 py-2.5 rounded-xl font-black shadow-xl flex items-center gap-1.5 text-xs border border-rose-500/30"
        >
          <span className="animate-bounce">❤️</span>
          <span>+2,450 Likes</span>
        </motion.div>

        {/* 3. Lead Generation Tracker */}
        <motion.div
          style={{ transform: "translateZ(70px)" }}
          className="absolute -bottom-4 -left-6 bg-slate-900/90 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl flex items-center gap-3 w-[180px]"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Leads Secured</span>
            <span className="text-xs font-black text-emerald-400">+312% ROI</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

// ✅ YouTube Player Component (Optionally integrated with 3D Tilt)
// const YouTubeVideo = ({ videoId }) => { ... };

// ✅ Animated Title with Dynamic TypeAnimation
const AnimatedTitle = () => (
  <div className="mb-6">
    <h1 className="text-white font-extrabold tracking-tight">
      <span className="block text-4xl sm:text-5xl lg:text-6xl leading-[1.2]">
        Jaipur's Trusted
      </span>

      <span className="inline-block w-fit text-4xl sm:text-5xl lg:text-6xl mt-2 pb-2 leading-[1.3] bg-gradient-to-r from-blue-400 via-white to-yellow-300 bg-clip-text text-transparent whitespace-normal sm:whitespace-nowrap">
        Digital Marketing Agency
      </span>

      <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 leading-[1.3]">
        <span className="text-white">for </span>
        <TypeAnimation
          sequence={[
            "Real Business Growth.",
            2000,
            "Targeted Leads.",
            2000,
            "SEO Dominance.",
            2000,
            "Social Media Buzz.",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text-yellow-400 font-bold italic"
        />
      </span>
    </h1>

    <div className="flex items-center gap-3 mt-6">
      <div className="w-14 h-1 rounded-full bg-blue-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-14 h-1 rounded-full bg-blue-500"></div>
    </div>
  </div>
);

// ✅ Hero Section
const HeroSection = () => {
  const youtubeVideoId = "obyYIaHxkSo";

  return (
    <section className="relative overflow-hidden min-h-[760px] lg:min-h-screen flex items-center bg-slate-950">
      <HeroBackground />
      <div className="relative container mx-auto px-4 z-20">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-6"
        >
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 font-black">
                SEO
              </span>
              cial Media Solutions
            </div>
          </div>
        </motion.nav>

        {/* Two Column Grid for Desktop / Responsive Stack for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[82vh] pt-12 pb-24">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full space-x-2 border border-white/10 w-fit"
            >
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 text-sm sm:text-base font-semibold">
                AI-Powered Digital Marketing Solutions
              </span>
            </motion.div>

            <AnimatedTitle />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl text-base sm:text-lg leading-8 text-gray-300"
            >
              From local startups to growing brands across Rajasthan,
              <span className="font-semibold text-white">
                {" "}SEOcial Media Solutions{" "}
              </span>
              helps businesses attract the right audience, generate quality leads,
              and turn online traffic into
              <span className="font-semibold text-blue-400">
                {" "}measurable business growth.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3
                px-8 py-4
                bg-gradient-to-r from-blue-500 to-indigo-600
                text-white text-base font-semibold
                rounded-xl
                shadow-xl shadow-blue-500/20
                hover:shadow-2xl hover:shadow-blue-500/30
                hover:scale-105
                transition-all duration-300"
              >
                {/* 3D button glow effect */}
                <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                
                <span>Get Your Free Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Component */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Interactive3DPhone />
          </div>
          
        </div>
      </div>
      <WaveBottom />
    </section>
  );
};

export default HeroSection;