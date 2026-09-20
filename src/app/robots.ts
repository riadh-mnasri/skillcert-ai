import type { MetadataRoute } from "next";

const BASE_URL = "https://skillcert-ai-eight.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/progression"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
