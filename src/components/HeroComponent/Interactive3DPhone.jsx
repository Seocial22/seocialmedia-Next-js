// NOTE: "use client" ab zaroori nahi hai — is component mein koi browser
// API (mousemove, matchMedia, state) use nahi ho raha. Poora phone card
// static hai, sirf CSS animation (pulse) chal rahi hai jo GPU compositor
// free mein handle karta hai. Isse ye ab server par bhi render ho sakta
// hai (agar chaho to PhoneGate ka dynamic/ssr:false wrapper bhi hata
// sakte ho — neeche note dekho).

import { Sparkles, TrendingUp } from "lucide-react";
import styles from "./Interactive3DPhone.module.css";

export default function Interactive3DPhone() {
  return (
    <div className="relative w-full max-w-[400px] h-[540px] [perspective:1000px] z-20 flex justify-center items-center">
      <div
        className={`${styles.tiltCard} relative w-[280px] h-[490px] bg-slate-900/80 backdrop-blur-xl border-[6px] border-slate-800 rounded-[45px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer`}
      >
        {/* Phone Notch/Speaker */}
        <div className="w-20 h-4 bg-slate-800 rounded-full absolute -top-1 left-1/2 -translate-x-1/2 flex items-center justify-center z-30">
          <div className="w-10 h-1 bg-slate-950 rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="w-full h-full rounded-[36px] bg-slate-950 border border-white/5 overflow-hidden p-4 flex flex-col justify-between relative">
          <div className="flex justify-between items-center text-[9px] text-slate-500 font-bold tracking-wider">
            <span>SEOcial Live Feed</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500">Active Campaign</span>
            </div>
          </div>

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

            <div className="w-full h-[180px] rounded-2xl bg-gradient-to-tr from-blue-600/30 to-indigo-900/30 border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px]" />
              <div className={`${styles.pulse} flex flex-col items-center gap-1.5 z-10 text-center px-3`}>
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">Brand Growth Strategy</span>
                <span className="text-[9px] text-blue-400 font-medium">99.8% Success Rate</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <div className="flex gap-3 font-semibold">
                <span>❤️</span>
                <span>💬</span>
                <span>✈️</span>
              </div>
              <span className="font-bold text-white">4,820 Conversions</span>
            </div>
          </div>

          <div className="flex justify-around items-center border-t border-white/5 pt-2 text-slate-600 text-xs">
            <span className="text-blue-500">●</span>
            <span>■</span>
            <span>▲</span>
          </div>
        </div>

        {/* Floating badges — static, position fixed via translateZ, no JS needed */}
        <div
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
        </div>

        <div
          style={{ transform: "translateZ(100px)" }}
          className="absolute top-1/2 -right-16 bg-rose-600 text-white px-3 py-2.5 rounded-xl font-black shadow-xl flex items-center gap-1.5 text-xs border border-rose-500/30"
        >
          <span className="animate-bounce">❤️</span>
          <span>+2,450 Likes</span>
        </div>

        <div
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
        </div>
      </div>
    </div>
  );
}