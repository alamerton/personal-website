/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The About page was folded into the home page.
  async redirects() {
    return [{ source: "/about", destination: "/#about", permanent: true }];
  },
};

export default nextConfig;
