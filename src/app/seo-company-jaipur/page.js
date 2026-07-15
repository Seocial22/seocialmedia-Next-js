import AboutUs from "@/components/AboutUs";
import Seo from "@/components/Seo";
import React from "react";

export const metadata = {
  title: "Best SEO Company in Jaipur | SEOcial Media Solutions",
  description:
    "Boost your online presence with SEOcial Media Solutions, the leading SEO company in Jaipur. We provide expert on-page, off-page, and local SEO services to help your business rank higher in search results.",
  keywords:
    "SEO company Jaipur, SEO services Jaipur, local SEO Jaipur, on-page SEO Jaipur, off-page SEO Jaipur, digital marketing Jaipur, SEOcial Media Solutions",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/seo-company-jaipur",
  },
  openGraph: {
    title: "SEO Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire the best SEO company in Jaipur. SEOcial Media Solutions provides on-page, off-page, and local SEO services to increase your website’s visibility and rankings.",
    url: "https://seocialmedia.in/seo-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-seo-company.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Company Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional SEO services in Jaipur – on-page, off-page, and local SEO to help your business rank higher in search engines.",
    images: ["https://seocialmedia.in/images/og-seo-company.jpg"],
  },
};

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://seocialmedia.in/seo-company-jaipur#service",
  name: "SEO services in Jaipur",
  description:
    "SEOcial Media Solutions provides professional SEO services in Jaipur including on-page SEO, off-page SEO, local SEO, technical SEO, and SEO strategy.",
  url: "https://seocialmedia.in/seo-company-jaipur",
  image: "https://seocialmedia.in/images/og-seo-company.jpg",
  provider: {
    "@type": "Organization",
    name: "SEOcial Media Solutions",
    url: "https://seocialmedia.in",
    logo: "https://seocialmedia.in/images/newlogo.png",
    sameAs: [
          "https://www.facebook.com/profile.php?id=61564390163701", // Replace with actual social profiles
          "https://www.instagram.com/seocialmediasolutions/",
          "https://www.linkedin.com/company/seocial-media-solution/",
          "https://X.com/seocialmedia"
    ]
  },
  areaServed: {
    "@type": "City",
    name: "Jaipur"
  },
  serviceType: [
    "SEO Services",
]
});

export default function Home() {
  return (
    <>
      <script
        id="seo-company-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />

      <Seo />
    </>
  );
}