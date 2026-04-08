// app/sitemap.js
const URL = "https://seocialmedia.in";

export default async function sitemap() {
  const routes = [
    "/",
    "/blog",
    "/career",
    "/contact",
    "/content-writing-company-jaipur",
    "/content-writing-company-ajmer",
    "/digital-marketing-company-jaipur",
    "/digital-marketing-services-ajmer",
    "/digital-marketing-services-jaipur",
    "/google-business-profile-services-jaipur",
    "/lead-generation-company-ajmer",
    "/lead-generation-company-jaipur ",
    "/privacy-policy",
    "/seo-company-ajmer",
    "/seo-company-jaipur",
    "/social-media-marketing-company-ajmer",
    "/social-media-marketing-jaipur",
    "/top-content-writing-company-jaipur",
    "/top-lead-generation-company-jaipur",
    "/top-seo-company-jaipur",
    "/top-social-media-solution-company-jaipur",
    "/top-video-editing-company-jaipur",
    "/video-editing-company-ajmer",
    "/video-editing-company-jaipur",
    "/web-development-company-ajmer",
    "/web-development-company-jaipur",
    "/best-digital-marketing-branding-services-jaipur",
    "/top-app-development-company-jaipur",
    "/seocial-media-total-solution-application",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));

  // Dynamic blog posts
  const blogPosts = [
    "/blog/best-digital-marketing-agency-jaipur-seocial-media-solutions",
    // "/blog/best-digital-marketing-company-jaipur-seocial-media",
    "/blog/best-google-ads-company-jaipur-seocial-media",
    "/blog/content-marketing-in-jaipur",
    // "/blog/digital-marketing-company-jaipur",
    "/blog/fast-loading-websites-customer-conversion-google-ranking",
    "/blog/how-to-choose-best-digital-marketing-company-jaipur",
    "/blog/local-seo-jaipur-businesses-dominate-search-2025",
    "/blog/seo-for-small-businesses-jaipur",
    "/blog/seo-web-development-agency-jaipur",
    "/blog/top-10-digital-marketing-agencies-jaipur-seocial-media-solutions",
    // "/blog/seo-company-jaipur",
    "/blog/top-app-development-company-jaipur-seocial-media",
    "/blog/top-10-website-development-companies-jaipur-2025",
    "/blog/social-media-optimization-checklist-2025",
    "/blog/seo-services-jaipur-write-content-ranks",
    "/blog/how-to-rank-number-1-google-2025",
    "/blog/ecommerce-website-cost-india",
    "/blog/digital-marketing-agency-for-startups-jaipur-seocial-media",
    "/blog/best-it-company-jaipur-software-web-digital-marketing",
    "/blog/seo-vs-google-ads-which-is-better-jaipur",
    "/blog/proven-seo-tips-improve-website-ranking-jaipur",
    "/blog/how-digital-marketing-helps-doctors-get-more-patients",
    "/blog/latest-google-seo-updates-2026-explained",
    "/blog/impact-of-ai-on-seo-what-businesses-should-know",
    "/blog/website-speed-and-seo-google-ranking",
    "/blog/10-proven-digital-marketing-strategies-grow-your-business-online",
    "/blog/best-digital-marketing-company-jaipur-guide",
    "/blog/website-vs-google-listing",
    "/blog/complete-seo-strategy-for-small-businesses-2026",
  ].map((post) => ({
    url: `${URL}${post}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.95,
  }));

  return [...routes, ...blogPosts];
  ``;
}

// Helper functions for SEO optimization
function getPriority(route) {
  if (route === "/") return 1.0; // Homepage highest priority
  // if (route === "") return 0.9;
  // if (route === "") return 0.9;
  // if (route === "") return 0.85;
  return 0.7;
}

function getChangeFrequency(route) {
  if (route === "/blog") return "daily";
  // if (route === "/") return "weekly";
  return "monthly";
}
