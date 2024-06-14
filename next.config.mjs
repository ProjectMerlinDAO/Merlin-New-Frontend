/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['merlin-prod1.s3.eu-central-1.amazonaws.com'],
  },
};

export default nextConfig;
