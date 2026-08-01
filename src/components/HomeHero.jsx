// Server Component — "use client" removed entirely.
// This file does ONLY composition/layout: it lays out children and
// contains no hooks, no event handlers, no browser APIs. Next.js can
// render it fully on the server and stream static HTML to the client.
//
// Interactive3DPhone is the single "use client" boundary in the whole
// tree. React Server Components let a server component render a client
// component directly — you do NOT need to make HeroSection (or any of
// its siblings) client just because one leaf needs interactivity.
//
// Mobile visibility: the phone is hidden with a plain CSS utility
// (`hidden lg:flex`) on the wrapping div, done here on the server, so
// no client logic is needed to decide whether to show it. (For an
// optional extra step — actually skipping the phone's JS *download* on
// mobile via next/dynamic — see the note at the bottom of this file.)

import HeroBackground from "./HeroComponent/HeroBackground";
import HeroContent from "./HeroComponent/HeroContent";
import HeroButtons from "./HeroComponent/HeroButtons";
import WaveBottom from "./HeroComponent/WaveBottom";
import Interactive3DPhone from "./HeroComponent/Interactive3DPhone";

export default function HomeHero() {

  
  return (
    <section className="relative overflow-hidden min-h-[760px] lg:min-h-screen flex items-center bg-slate-950">
      <HeroBackground />

      <div className="relative container mx-auto px-4 z-20">
        <nav className="py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 font-black">
                SEO
              </span>
              cial Media Solutions
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[82vh] pt-12 pb-24">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <HeroContent />
            <HeroButtons />
          </div>

          {/* Hidden below the lg breakpoint — mobile users never see
              the phone. Pure CSS, evaluated on the server, zero JS. */}
          <div className="hidden lg:col-span-5 lg:flex justify-center lg:justify-end">
            <Interactive3DPhone />
          </div>
        </div>
      </div>

      <WaveBottom />
    </section>
  );
}

// -----------------------------------------------------------------------
// OPTIONAL further optimization (not applied above, offered as a choice):
//
// The `hidden lg:flex` approach above stops the phone from being painted
// or laid out on mobile, and Interactive3DPhone bails out of its own
// mouse-tilt logic via matchMedia — but the RSC client-reference chunk
// for Interactive3DPhone is still referenced by the page, so it can still
// be fetched by the browser. To skip fetching that JS chunk entirely on
// small screens, wrap the import in next/dynamic with ssr:false — but
// that requires its own "use client" boundary, since ssr:false isn't
// allowed directly inside a Server Component in the App Router:
//
//   // PhoneGate.jsx
//   "use client";
//   import dynamic from "next/dynamic";
//   const Interactive3DPhone = dynamic(() => import("./Interactive3DPhone"), {
//     ssr: false,
//   });
//   export default function PhoneGate() {
//     return <Interactive3DPhone />;
//   }
//
// This trades one extra small client file for genuinely smaller JS
// transferred on mobile. Given the CSS-hide + internal matchMedia bail-out
// already used above, this is a marginal gain — worth doing only if
// bundle analysis shows the phone chunk is still costing real bytes on
// mobile after the changes in this refactor.
// -----------------------------------------------------------------------