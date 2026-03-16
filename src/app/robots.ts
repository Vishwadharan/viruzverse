import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/privacy-policy", "/terms-of-service"],
      },
    ],
    sitemap: "https://viruzverse.com/sitemap.xml",
    host: "https://viruzverse.com",
  };
}
