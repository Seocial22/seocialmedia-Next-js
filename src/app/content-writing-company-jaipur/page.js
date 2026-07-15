import ContentWritingServices from "@/components/ContentWritingServices";
import React from "react";
export const metadata = {
  title: "Best Content Writing Company Jaipur | SEOcial Media",
  description:
    "Looking for top-notch content writing services in Jaipur? SEOcial Media Solutions delivers high-quality SEO content, blogs, website copy, and marketing content tailored for your business growth.",
  keywords:
    "Content writing company in Jaipur delivering SEO blogs, website content and conversion focused copywriting services.",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/content-writing-company-jaipur",
  },
  openGraph: {
    title: "Best Content Writing Company Jaipur | SEOcial Media",
    description:
      "Content writing company in Jaipur delivering SEO blogs, website content and conversion focused copywriting services.",
    url: "https://seocialmedia.in/content-writing-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-content-writing.jpg",
        width: 1200,
        height: 630,
        alt: "Content Writing Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Content Writing Company Jaipur | SEOcial Media",
    description:
      "Content writing company in Jaipur delivering SEO blogs, website content and conversion focused copywriting services.",
    images: ["https://seocialmedia.in/images/og-content-writing.jpg"],
  },
};

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://seocialmedia.in/content-writing-company-jaipur#service",
  name: "Best Content Writing Company in Jaipur | SEOcial Media Solutions",
  description:
    "SEOcial Media Solutions provides professional content writing services in Jaipur, including SEO content writing, website content, blog writing, copywriting, product descriptions, and marketing content to help businesses grow online.",
  url: "https://seocialmedia.in/content-writing-company-jaipur",
  image: "https://seocialmedia.in/images/og-content-writing.jpg",
  serviceType: "Content Writing Services",
  areaServed: {
    "@type": "City",
    name: "Jaipur"
  },
  provider: {
    "@type": "Organization",
    name: "SEOcial Media Solutions",
    url: "https://seocialmedia.in",
    logo: "https://seocialmedia.in/images/newlogo.png",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61564390163701",
      "https://www.instagram.com/seocialmediasolutions/",
      "https://www.linkedin.com/company/seocial-media-solution/",
      "https://x.com/seocialmedia"
    ]
  }
});

export default function Home() {
  return (
    <>
      <script
        id="content-writing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
      <ContentWritingServices />
    </>
  );
}
