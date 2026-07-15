import SocialMediaServicesAjmer from '@/components/SocialMediaServicesAjmer'
import React from 'react'
export const metadata = {
  title: "Social Media Marketing Company Ajmer | SEOcial Media",
  description:
    "Social media marketing company in Ajmer helping brands improve engagement, reach and customer acquisition.",
  keywords:
    "social media marketing company Ajmer, SMM services Ajmer, Facebook marketing Ajmer, Instagram marketing Ajmer, LinkedIn marketing Ajmer, Twitter marketing Ajmer, digital marketing Ajmer",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/social-media-marketing-company-ajmer",
  },
  openGraph: {
    title: "Social Media Marketing Company Ajmer | SEOcial Media",
    description:
      "Social media marketing company in Ajmer helping brands improve engagement, reach and customer acquisition.",
    url: "https://seocialmedia.in/social-media-marketing-company-ajmer",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-smm.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Ajmer OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Company Ajmer | SEOcial Media",
    description:
      "Social media marketing company in Ajmer helping brands improve engagement, reach and customer acquisition..",
    images: ["https://seocialmedia.in/images/og-smm.jpg"],
  },
};

export default function Home() {
  return (
    <SocialMediaServicesAjmer />
  )
}
