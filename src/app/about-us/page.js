import AboutUs from "@/components/AboutUs";
import React from "react";
export const metadata = {
  title: "About SEOcial Media Solutions | Accelerating Digital Growth",
  description:
    "Meet SEOcial Media Solutions - driving business transformation through data-backed SEO, high-ROI paid ads, and full-funnel digital strategy across India.",
  keywords:
    "best website development company in Jaipur, top digital marketing agency, SEO company Jaipur, social media marketing Jaipur, content writing services, Google Ads Jaipur, web design services, responsive websites, Jaipur web development, startup marketing solutions",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/about-us",
  },
  openGraph: {
    title: "About SEOcial Media Solutions | Accelerating Digital Growth",
    description:
      "Meet SEOcial Media Solutions - driving business transformation through data-backed SEO, high-ROI paid ads, and full-funnel digital strategy across India.",
    url: "https://seocialmedia.in/about-us",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "SEOcial Media OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SEOcial Media Solutions | Accelerating Digital Growth",
    description:
      "Meet SEOcial Media Solutions - driving business transformation through data-backed SEO, high-ROI paid ads, and full-funnel digital strategy across India.",
    images: ["https://seocialmedia.in/images/og-home.jpg"],
  },
};


export default function Home() {
  return (<AboutUs />);
}
