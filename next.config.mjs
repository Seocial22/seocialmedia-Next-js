/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
  return [
    {
      source: "/digital-marketing-company-jaipur",
      destination: "/about-us",
      permanent: true,
    },
    {
      source: "/blog/best-digital-marketing-company-jaipur-seocial-media",
      destination: "/blog/top-10-digital-marketing-agencies-jaipur-seocial-media-solutions",
      permanent: true,
    },
    {
      source: "/blog/best-social-media-marketing-agency-jaipur-seocial-media",
      destination: "/blog/top-10-digital-marketing-agencies-jaipur-seocial-media-solutions",
      permanent: true,
    },
  ];
}
};

export default nextConfig;
