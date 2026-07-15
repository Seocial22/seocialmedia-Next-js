import AppDevelopmentServices from "@/components/AppDevelopmentServices";
export const metadata = {
    title: "Top App Development Company in Jaipur | SEOcial Media",
    description:
        "Top app development company in Jaipur building Android, iOS and hybrid mobile applications for startups and enterprises.",
    keywords:
        "app development company in Jaipur, mobile app development Jaipur, iOS app development, Android app development, cross-platform app solutions, best app developers Jaipur, custom app development services, secure mobile applications, scalable app development",
    authors: [{ name: "SEOcial Media Solutions" }],
    publisher: "SEOcial Media Solutions",
    robots: "index, follow",
    alternates: {
        canonical: "https://seocialmedia.in/top-app-development-company-jaipur",
    },
    openGraph: {
        title: "Top App Development Company in Jaipur | SEOcial Media",
        description:
            "Top app development company in Jaipur building Android, iOS and hybrid mobile applications for startups and enterprises.",
        url: "https://seocialmedia.in/top-app-devlopment-company-jaipur",
        siteName: "SEOcial Media Solutions",
        images: [
            {
                url: "https://seocialmedia.in/images/og-app-development.jpg",
                width: 1200,
                height: 630,
                alt: "App Development Company in Jaipur",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top App Development Company in Jaipur | SEOcial Media",
        description:
            "Top app development company in Jaipur building Android, iOS and hybrid mobile applications for startups and enterprises.",
        images: ["https://seocialmedia.in/images/og-app-development.jpg"],
    },
};

const generateStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://seocialmedia.in/top-app-development-company-jaipur#service",
    name: "Top App Development Company in Jaipur | SEOcial Media Solutions",
    description:
        "SEOcial Media Solutions provides professional app development services in Jaipur, including Android app development, iOS app development, hybrid app development, cross-platform mobile applications, and custom business app solutions.",
    url: "https://seocialmedia.in/top-app-development-company-jaipur",
    image: "https://seocialmedia.in/images/og-app-development.jpg",
    serviceType: "App Development Services",
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

export default function TopAppDevelopmentCompanyJaipur() {
    return (
        <>
            <script
                id="app-development-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateStructuredData()),
                }}
            />
            <AppDevelopmentServices />


        </>
    );
}