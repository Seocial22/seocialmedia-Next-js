import ContactForm from '@/components/ContactUs'
import React from 'react'
export const metadata = {
  title: "Contact SEOcial Media | Digital Marketing Jaipur",
  description:
    "Contact SEOcial Media in Jaipur for SEO, website development, Google Ads and social media marketing services.",
  keywords:
    "contact SEOcial Media, website development Jaipur contact, digital marketing agency Jaipur contact, SEO company Jaipur contact, social media marketing Jaipur contact, web design services Jaipur, startup marketing solutions contact",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/contact",
  },
  openGraph: {
    title: "Contact SEOcial Media | Digital Marketing Jaipur",
    description:
      "Contact SEOcial Media in Jaipur for SEO, website development, Google Ads and social media marketing services.",
    url: "https://seocialmedia.in/contact",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SEOcial Media OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SEOcial Media | Digital Marketing Jaipur",
    description:
      "Contact SEOcial Media in Jaipur for SEO, website development, Google Ads and social media marketing services.",
    images: ["https://seocialmedia.in/images/og-contact.jpg"],
  },
};
export default function Home() {
  return (
    <><ContactForm /></>
  )
}
