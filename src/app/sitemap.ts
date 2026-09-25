import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/theory",
  "/research",
  "/hms-lab",
  "/clinical-inquiry",
  "/measurement-modeling",
  "/applications",
  "/education",
  "/resources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://movementsystems.org${route}`,
    lastModified: new Date("2026-09-25"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}