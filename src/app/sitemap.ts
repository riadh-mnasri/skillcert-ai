import type { MetadataRoute } from "next";
import { certifications } from "@/content";

const BASE_URL = "https://skillcert-ai-eight.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/certifications`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/methode`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const certRoutes = certifications.flatMap((cert) => {
    const base = `${BASE_URL}/certifications/${cert.slug}`;
    const routes: MetadataRoute.Sitemap = [
      { url: base, changeFrequency: "monthly", priority: 0.8 },
      { url: `${base}/cours`, changeFrequency: "monthly", priority: 0.7 },
      { url: `${base}/fiches`, changeFrequency: "monthly", priority: 0.6 },
      { url: `${base}/qcm`, changeFrequency: "monthly", priority: 0.6 },
      { url: `${base}/examen-blanc`, changeFrequency: "monthly", priority: 0.6 },
    ];
    for (const courseModule of cert.modules) {
      routes.push({
        url: `${base}/cours/${courseModule.slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    return routes;
  });

  return [...staticRoutes, ...certRoutes];
}
