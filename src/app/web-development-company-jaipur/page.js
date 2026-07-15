import WebDevelopment from '@/components/WebDevelopment'
import React from 'react'
export const metadata = {
  title: "Web Development Company in Jaipur | SEOcial Media",
  description:
    "Leading web development company in Jaipur creating responsive websites, eCommerce stores and custom business portals.",
  keywords:
    "web development company Jaipur, website design Jaipur, responsive websites Jaipur, e-commerce development Jaipur, SEOcial Media Solutions, web development services Jaipur",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/web-development-company-jaipur",
  },
  openGraph: {
    title: "Web Development Company in Jaipur | SEOcial Media",
    description:
      "Leading web development company in Jaipur creating responsive websites, eCommerce stores and custom business portals.",
    url: "https://seocialmedia.in/web-development-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Jaipur | SEOcial Media",
    description:
      "Leading web development company in Jaipur creating responsive websites, eCommerce stores and custom business portals.",
    images: ["https://seocialmedia.in/images/og-web-development.jpg"],
  },
};

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://seocialmedia.in/web-development-company-jaipur#service",
  name: "Web Development Company in Jaipur | SEOcial Media Solutions",
  description:
    "SEOcial Media Solutions provides professional web development services in Jaipur, including responsive website development, eCommerce websites, custom web applications, business portals, and website maintenance.",
  url: "https://seocialmedia.in/web-development-company-jaipur",
  image: "https://seocialmedia.in/images/og-web-development.jpg",
  serviceType: "Web Development Services",
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
        id="web-development-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
      <WebDevelopment />
    </>
  )
}

export default Home