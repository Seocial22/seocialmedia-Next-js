// Server Component — no "use client", no hooks, no browser APIs.
// Renders once on the server as static markup + CSS; ships zero JS.

import styles from "./HeroBackground.module.css";

// Defensive fallback: if the CSS Module ever fails to resolve (wrong
// filename/case, wrong path, stale cache), don't crash the whole page.
const blobClass = styles?.blob ?? "";

const SHAPES = [
  { size: 350, duration: "10s", position: "-top-20 -left-20 bg-blue-600/20" },
  { size: 450, duration: "18s", position: "top-1/3 -right-20 bg-indigo-600/20" },
  { size: 300, duration: "14s", position: "bottom-10 left-1/4 bg-violet-600/20" },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-slate-950 overflow-hidden">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          className={`${blobClass} ${shape.position}`}
          style={{
            width: shape.size,
            height: shape.size,
            animationDuration: shape.duration,
          }}
        />
      ))}
    </div>
  );
}