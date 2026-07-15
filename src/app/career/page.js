import CareerPage from '@/components/CareerPage'
import React from 'react'
export const metadata = {
  title: " Join Digital Marketing & Web Development Team Jaipur",
  description:
    "Join SEOcial Media and build your career in digital marketing, SEO, web development, content writing and creative technologies in Jaipur.",
  keywords:
    "SEOcial Media careers, jobs in Jaipur digital marketing, web development jobs Jaipur, SEO company jobs, social media marketing careers, content writing jobs Jaipur, join SEOcial Media, digital marketing team Jaipur",
  authors: [{ name: "Mudit Mathur" }],
  publisher: "Mudit Mathur",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/career",
  },
  openGraph: {
    title: "Join Digital Marketing & Web Development Team Jaipur",
    description:
      "Join SEOcial Media and build your career in digital marketing, SEO, web development, content writing and creative technologies in Jaipur.",
    url: "https://seocialmedia.in/career",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "SEOcial Media Careers OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Digital Marketing & Web Development Team Jaipur",
    description:
      "Join SEOcial Media and build your career in digital marketing, SEO, web development, content writing and creative technologies in Jaipur.",
    images: ["https://seocialmedia.in/images/og-careers.jpg"],
  },
};


export default function Home() {
  
  return (
    <CareerPage />
  )
}
