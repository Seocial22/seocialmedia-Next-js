import GoogleServices from "@/components/GoogleServices";
import React from "react";
export const metadata = {
  title: "Lead Generation Company in Jaipur | SEOcial Media",
  description:
    "Generate high quality B2B and B2C leads with Jaipur's trusted lead generation and performance marketing company.",
  keywords:
    "lead generation company Jaipur, B2B lead generation Jaipur, B2C lead generation Jaipur, sales leads Jaipur, business leads Jaipur, marketing leads Jaipur",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/lead-generation-company-jaipur",
  },
  openGraph: {
    title: "Lead Generation Company in Jaipur | SEOcial Media",
    description:
      "Generate high quality B2B and B2C leads with Jaipur's trusted lead generation and performance marketing company.",
    url: "https://seocialmedia.in/lead-generation-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-lead-generation.jpg",
        width: 1200,
        height: 630,
        alt: "Lead Generation Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Company in Jaipur | SEOcial Media",
    description:
      "Generate high quality B2B and B2C leads with Jaipur's trusted lead generation and performance marketing company.",
    images: ["https://seocialmedia.in/images/og-lead-generation.jpg"],
  },
};

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://seocialmedia.in/lead-generation-company-jaipur#service",
  name: "Lead Generation Company in Jaipur | SEOcial Media Solutions",
  description:
    "SEOcial Media Solutions provides professional lead generation services in Jaipur, helping businesses generate high-quality B2B and B2C leads through performance marketing, Google Ads, Meta Ads, and digital marketing strategies.",
  url: "https://seocialmedia.in/lead-generation-company-jaipur",
  image: "https://seocialmedia.in/images/og-lead-generation.jpg",
  serviceType: "Lead Generation Services",
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

function Home() {
  return (
  <>
  <script
    id="lead-generation-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(generateStructuredData()),
    }}
  />
  <GoogleServices />
  </>

  );
}

export default Home;
