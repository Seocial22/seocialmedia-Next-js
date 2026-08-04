"use client";

import dynamic from "next/dynamic";

// Interactive3DPhone ko sirf client-side pe, on-demand load karo.
// ssr: false => is component ka JS/HTML server se kabhi render nahi hoga,
// aur is component ka JS bundle mobile ke initial load mein bhi shamil nahi hoga
// jab tak ye actually mount na ho (yahan sirf lg+ screens pe).
const Interactive3DPhone = dynamic(
  () => import("./Interactive3DPhone"),
  {
    ssr: false,
    loading: () => null, // koi placeholder chahiye to yahan add kar sakte ho
  }
);

export default function PhoneGate(props) {
  return (
    <div className="hidden lg:flex">
      <Interactive3DPhone {...props} />
    </div>
  );
}