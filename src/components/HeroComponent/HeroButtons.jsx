// Server Component — no "use client".
// The original wrapped this in a Framer Motion <motion.div> just for a
// mount fade-in and relied on Tailwind's hover:/group-hover: utilities
// (already pure CSS) for the interactive glow/scale. Framer Motion added
// nothing here that CSS didn't already do, so it's dropped entirely.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import contentStyles from "./HeroContent.module.css";

export default function HeroButtons() {
  return (
    <div className={`${contentStyles.fadeUp} ${contentStyles["delay-3"]} pt-2`}>
      <Link
        href="/contact"
        className="group relative inline-flex items-center justify-center gap-3
          px-8 py-4
          bg-gradient-to-r from-blue-500 to-indigo-600
          text-white text-base font-semibold
          rounded-xl
          shadow-xl shadow-blue-500/20
          transition-all duration-300
          hover:shadow-2xl hover:shadow-blue-500/30
          hover:scale-105"
      >
        <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
        <span>Get Your Free Consultation</span>
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}