/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'merlin-prod1.s3.eu-central-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
