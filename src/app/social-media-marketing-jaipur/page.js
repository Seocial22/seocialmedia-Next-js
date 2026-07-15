
import SocialMediaServices from '@/components/SocialMediaServices'
import React from 'react'
export const metadata = {
  title: "Social Media Marketing in Jaipur | SEOcial Media",
  description:
    "Grow your audience with social media marketing services in Jaipur across Facebook, Instagram and LinkedIn.",
  keywords:
    "social media marketing Jaipur, SMM services Jaipur, Facebook marketing Jaipur, Instagram marketing Jaipur, LinkedIn marketing Jaipur, Twitter marketing Jaipur, digital marketing Jaipur",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/social-media-marketing-jaipur",
  },
  openGraph: {
    title: "Social Media Marketing in Jaipur | SEOcial Media",
    description:
      "Grow your audience with social media marketing services in Jaipur across Facebook, Instagram and LinkedIn.",
    url: "https://seocialmedia.in/social-media-marketing-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-smm.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing in Jaipur | SEOcial Media",
    description:
      "Grow your audience with social media marketing services in Jaipur across Facebook, Instagram and LinkedIn.",
    images: ["https://seocialmedia.in/images/og-smm.jpg"],
  },
};

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://seocialmedia.in/social-media-marketing-jaipur#service",
  name: "Social Media Marketing in Jaipur | SEOcial Media Solutions",
  description:
    "SEOcial Media Solutions provides professional social media marketing services in Jaipur, helping businesses grow through Facebook, Instagram, LinkedIn, X, and other social media platforms.",
  url: "https://seocialmedia.in/social-media-marketing-jaipur",
  image: "https://seocialmedia.in/images/og-smm.jpg",
  serviceType: "Social Media Marketing",
  areaServed: {
    "@type": "City",
    name: "Jaipur",
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
        id="social-media-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />

      <SocialMediaServices />
    </>
  )
}

export default Home