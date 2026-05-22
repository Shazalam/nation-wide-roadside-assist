import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/generate-pdf',
        destination: '/api/generate-pdf',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
  // Allow puppeteer to run in server-side API routes
  serverExternalPackages: ['puppeteer'],
};

export default nextConfig;

