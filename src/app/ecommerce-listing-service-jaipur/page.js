import EcommerceListingService from "@/components/EcommerceListingService";



export const metadata = {
  title: "Top E-commerce Listing Service Jaipur | SEOcial Media",
  description:
    "Professional eCommerce listing services in Jaipur for Amazon, Flipkart, Meesho and other online marketplaces.",
  keywords:
    "e-commerce listing service, multi-platform product listing, Amazon product listing, Flipkart listing service, marketplace SEO, eBay listing, Myntra product listing, Shopify listing service, Meesho listing, IndiaMart listing",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/ecommerce-listing-service-jaipur",
  },
  openGraph: {
    title: "Top E-commerce Listing Service Jaipur | SEOcial Media",
    description:
      "Professional eCommerce listing services in Jaipur for Amazon, Flipkart, Meesho and other online marketplaces..",
    url: "https://seocialmedia.in/ecommerce-listing-service-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-ecommerce-listing.jpg",
        width: 1200,
        height: 630,
        alt: "Multi-Platform E-commerce Listing Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top E-commerce Listing Service Jaipur | SEOcial Media",
    description:
      "Professional eCommerce listing services in Jaipur for Amazon, Flipkart, Meesho and other online marketplaces.",
    images: ["https://seocialmedia.in/images/og-ecommerce-listing.jpg"],
  },
};

const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://seocialmedia.in/ecommerce-listing-service-jaipur#service",
  name: "Top E-commerce Listing Service in Jaipur | SEOcial Media Solutions",
  description:
    "SEOcial Media Solutions provides professional eCommerce listing services in Jaipur for Amazon, Flipkart, Meesho, Shopify, Myntra, IndiaMart, and other online marketplaces. We optimize product listings to improve visibility, rankings, and sales.",
  url: "https://seocialmedia.in/ecommerce-listing-service-jaipur",
  image: "https://seocialmedia.in/images/og-ecommerce-listing.jpg",
  serviceType: "E-commerce Listing Services",
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


export default function EcommerceListingServiceJaipurPage() {
  return <>
  <script
        id="ecommerce-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
  <EcommerceListingService/>
  </>;
}   