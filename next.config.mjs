import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,

  turbopack: {
    root: __dirname,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },

  headers: async () => [
    // ── Security + page cache — all routes ──
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options",        value: "DENY"                            },
        { key: "X-Content-Type-Options", value: "nosniff"                         },
        { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
        { key: "X-XSS-Protection",       value: "1; mode=block"                   },
        { key: "Cache-Control",          value: "public, max-age=3600, stale-while-revalidate=86400" },
      ],
    },

    // ── Next.js static chunks — cache forever ──
    {
      source: "/_next/static/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },

    // ── Next.js images ──
    {
      source: "/_next/image(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
      ],
    },

    // ── Public images ──
    {
      source: "/images/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
      ],
    },

    // ── Fonts — cache forever ──
    {
      source: "/fonts/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },

    // ── Favicon + manifest ──
    {
      source: "/(favicon.ico|manifest.json|robots.txt|sitemap.xml)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
      ],
    },
  ],
};

export default nextConfig;
