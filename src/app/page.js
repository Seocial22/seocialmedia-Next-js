import { Metadata } from 'next';
import HomePage from "@/components/Home";
import NewYearPopup from '@/components/NewYearPopup';

export const metadata = {
  title: "Best Digital Marketing Agency in Jaipur | SEOcial",
  description: "SEOcial Media is a Jaipur based digital marketing agency offering SEO, social media marketing, Google Ads, web development and branding solutions.",
  keywords: [
    "digital marketing agency Jaipur",
    "SEO services Jaipur",
    "social media marketing Jaipur",
    "PPC advertising Jaipur",
    "web development Jaipur",
    "content marketing Jaipur",
    "online marketing Rajasthan",
    "digital marketing company Jaipur",
    "search engine optimization Jaipur",
    "Google ads management Jaipur",
    "Facebook marketing Jaipur",
    "Instagram marketing Jaipur",
    "website design Jaipur",
    "local SEO Jaipur",
    "e-commerce marketing Jaipur",
    "Web Development Company in Jaipur",
    "Content Writing Agency in India",
    "Video Editing Services",
    "Digital Marketing Agency For Ecommerce",
    "Mobile app development company in jaipur",
    "Graphic Designers Near me"
  ],
  authors: [{ name: "SEOcial Media Solutions" }],
  creator: "SEOcial Media Solutions",
  publisher: "SEOcial Media Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seocialmedia.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Jaipur | SEOcial",
    description: "SEOcial Media is a Jaipur based digital marketing agency offering SEO, social media marketing, Google Ads, web development and branding solutions.",

    url: 'https://seocialmedia.in', // Replace with your actual domain
    siteName: 'SEOcial Media Solutions',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'SEOcial Media Solutions - Digital Marketing Agency Jaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Digital Marketing Agency in Jaipur | SEOcial",
    description: "SEOcial Media is a Jaipur based digital marketing agency offering SEO, social media marketing, Google Ads, web development and branding solutions.",
    images: ['/twitter-image.jpg'], // Add your Twitter card image
    creator: '@seocialmedia', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Digital Marketing',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  applicationName: 'SEOcial Media Solutions',
  generator: 'Next.js',
  abstract: "SEOcial Media is a Jaipur based digital marketing agency offering SEO, social media marketing, Google Ads, web development and branding solutions.",
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur',
    'geo.position': '26.9124;75.7873', // Jaipur coordinates
    'ICBM': '26.9124, 75.7873',
    'contact:phone_number': '+91-9461677122',
    'contact:email': 'seocialmediasolutions@gmail.com', // Replace with actual email
    'contact:address': 'Sagar, 1, opp. VS Medihub, Nirman Nagar, Ranisati Nagar, Jaipur, Rajasthan 302019',
    'business:contact_data:street_address': 'Sagar, 1, opp. VS Medihub, Nirman Nagar',
    'business:contact_data:locality': 'Ranisati Nagar',
    'business:contact_data:region': 'Rajasthan',
    'business:contact_data:postal_code': '302019',
    'business:contact_data:country_name': 'India',
    'dc.language': 'en',
    'dc.title': 'Best Digital Marketing Agency in Jaipur - SEOcial Media Solutions',
    'dc.creator': 'SEOcial Media Solutions',
    'dc.subject': 'Digital Marketing, SEO, Social Media Marketing, PPC, Web Development',
    'dc.description': 'SEOcial Media is a Jaipur based digital marketing agency offering SEO, social media marketing, Google Ads, web development and branding solutions.',
    'rating': 'General',
    'distribution': 'Global',
    'revisit-after': '7 days',
    'language': 'English',
    'coverage': 'Worldwide',
    'target': 'all',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#000000', // Adjust to your brand color
    'msapplication-navbutton-color': '#000000', // Adjust to your brand color
    'apple-mobile-web-app-title': 'SEOcial Media Solutions',
    'msapplication-TileColor': '#000000', // Adjust to your brand color
  },
};

// JSON-LD Structured Data for better SEO
export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://seocialmedia.in/#organization",
        "name": "SEOcial Media Solutions",
        "alternateName": "SEOcial Media",
        "url": "https://seocialmedia.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://seocialmedia.in/images/company-logo.jpeg" // Replace with actual logo URL
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61564390163701", // Replace with actual social profiles
          "https://www.instagram.com/seocialmediasolutions/",
          "https://www.linkedin.com/company/seocial-media-solution/",
          "https://X.com/seocialmedia"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9461677122",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-8949342270",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sagar, 1, opp. VS Medihub, Nirman Nagar",
          "addressLocality": "Ranisati Nagar",
          "addressRegion": "Rajasthan",
          "postalCode": "302019",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://seocialmedia.in/#localbusiness",
        "name": "SEOcial Media Solutions",
        "image": "https://seocialmedia.in/company-logo.jpg",
        "telephone": "+91-9461677122",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sagar, 1, opp. VS Medihub, Nirman Nagar",
          "addressLocality": "Ranisati Nagar",
          "addressRegion": "Rajasthan",
          "postalCode": "302019",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.9124",
          "longitude": "75.7873"
        },
        "url": "https://seocialmedia.in",
        "priceRange": "₹₹",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "servesCuisine": null,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://seocialmedia.in/#service",
        "name": "Digital Marketing Services",
        "provider": {
          "@id": "https://seocialmedia.in/#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": "Rajasthan"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Search Engine Optimization (SEO)",
                "description": "Comprehensive SEO services to improve website rankings and organic traffic"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing",
                "description": "Strategic social media campaigns across Facebook, Instagram, LinkedIn, and Twitter"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pay-Per-Click (PPC) Advertising",
                "description": "Google Ads and social media advertising management for maximum ROI"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom website design and development with responsive, mobile-friendly designs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Marketing",
                "description": "Engaging content creation and marketing strategies to attract and retain customers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Video Editing Services",
                "description": "Professional video editing services for businesses and brands."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Writing Services",
                "description": "SEO-friendly content writing services for websites and blogs."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "Android and iOS mobile app development services."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Graphic Design Services",
                "description": "Creative graphic design and branding services."
              }
            }

          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://seocialmedia.in/om/#website",
        "url": "https://seocialmedia.in",
        "name": "SEOcial Media Solutions",
        "description": "SEOcial Media is a Jaipur based digital marketing agency offering SEO, social media marketing, Google Ads, web development and branding solutions.",
        "publisher": {
          "@id": "https://seocialmedia.in/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://seocialmedia.in/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-IN"
      }
    ]
  };
}

export default function MainHomePage() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <HomePage />
      {/* <NewYearPopup/> */}
    </>
  );
} 