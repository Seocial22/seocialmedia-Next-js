// Server Component — pure static SVG markup, identical to the original.
// No motion, no state, nothing to hydrate.

export default function WaveBottom() {
  return (
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
}