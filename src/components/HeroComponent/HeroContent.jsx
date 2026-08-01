// Server Component — no "use client".
// react-type-animation and Framer Motion are both fully removed here.
// The cycling word effect and the fade-in-on-load effect are done in
// plain CSS (HeroContent.module.css), so this renders as static HTML
// with zero client-side JavaScript and nothing to hydrate.

import { Sparkles } from "lucide-react";
import styles from "./HeroContent.module.css";

const PHRASES = [
  "Real Business Growth.",
  "Targeted Leads.",
  "SEO Dominance.",
  "Social Media Buzz.",
];

function AnimatedTitle() {
  return (
    <div className="mb-6">
      <h1 className="text-white font-extrabold tracking-tight">
        <span className="block text-4xl sm:text-5xl lg:text-6xl leading-[1.2]">
          Jaipur&apos;s Trusted
        </span>

        <span className="inline-block w-fit text-4xl sm:text-5xl lg:text-6xl mt-2 pb-2 leading-[1.3] bg-gradient-to-r from-blue-400 via-white to-yellow-300 bg-clip-text text-transparent whitespace-normal sm:whitespace-nowrap">
          Digital Marketing Agency
        </span>

        <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 leading-[1.3]">
          <span className="text-white">for </span>
          <span className={`${styles.wordWrap} text-yellow-400 font-bold italic`}>
            {PHRASES.map((phrase) => (
              <span key={phrase} className={styles.word}>
                {phrase}
              </span>
            ))}
          </span>
        </span>
      </h1>

      <div className="flex items-center gap-3 mt-6">
        <div className="w-14 h-1 rounded-full bg-blue-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-14 h-1 rounded-full bg-blue-500" />
      </div>
    </div>
  );
}

export default function HeroContent() {
  return (
    <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
      <div
        className={`${styles.fadeUp} ${styles["delay-0"]} inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full space-x-2 border border-white/10 w-fit`}
      >
        <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 text-sm sm:text-base font-semibold">
          AI-Powered Digital Marketing Solutions
        </span>
      </div>

      <div className={`${styles.fadeUp} ${styles["delay-1"]}`}>
        <AnimatedTitle />
      </div>

      <p
        className={`${styles.fadeUp} ${styles["delay-2"]} max-w-2xl text-base sm:text-lg leading-8 text-gray-300`}
      >
        From local startups to growing brands across Rajasthan,
        <span className="font-semibold text-white"> SEOcial Media Solutions </span>
        helps businesses attract the right audience, generate quality leads, and
        turn online traffic into
        <span className="font-semibold text-blue-400"> measurable business growth.</span>
      </p>
    </div>
  );
}