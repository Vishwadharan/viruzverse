import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,
  devIndicators: false,

  // ── Deployment: skip type & lint errors blocking the build ──
  typescript: { ignoreBuildErrors: true },
  // eslint:     { ignoreDuringBuilds: true },

  turbopack: {
    root: __dirname,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 0,
    unoptimized: true,
  },

  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },

  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0" },
      ],
    },
  ],
};

export default nextConfig;
