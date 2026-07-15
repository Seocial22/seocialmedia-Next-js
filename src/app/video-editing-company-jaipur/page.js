
import VideoEditing from '@/components/VideoEditing'
import React from 'react'
export const metadata = {
  title: "Video Editing Company in Jaipur | SEOcial Media Solutions",
  description:
    "Transform your videos with SEOcial Media Solutions, a professional video editing company in Jaipur. We offer expert video editing, motion graphics, post-production, and promotional video services to enhance your brand presence.",
  keywords:
    "video editing company Jaipur, professional video editors Jaipur, motion graphics Jaipur, post-production Jaipur, promotional video services Jaipur, SEOcial Media Solutions",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/video-editing-company-jaipur",
  },
  openGraph: {
    title: "Video Editing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire SEOcial Media Solutions for professional video editing in Jaipur. Services include post-production, motion graphics, and promotional video creation.",
    url: "https://seocialmedia.in/video-editing-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-video-editing.jpg",
        width: 1200,
        height: 630,
        alt: "Video Editing Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Editing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional video editing services in Jaipur – motion graphics, post-production, and promotional videos to boost your brand.",
    images: ["https://seocialmedia.in/images/og-video-editing.jpg"],
  },
};

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://seocialmedia.in/video-editing-company-jaipur#service",
  name: "Video Editing Company in Jaipur | SEOcial Media Solutions",
  description:
    "SEOcial Media Solutions provides professional video editing services in Jaipur, including promotional videos, motion graphics, post-production, social media video editing, corporate videos, and brand video creation.",
  url: "https://seocialmedia.in/video-editing-company-jaipur",
  image: "https://seocialmedia.in/images/og-video-editing.jpg",
  serviceType: "Video Editing Services",
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
        id="video-editing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
    <VideoEditing />
    </>
  )
}

export default Home