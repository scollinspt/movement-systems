import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/foundations",
  "/foundations/attain-sustain-maintain",
  "/research-approach",
  "/theory",
  "/research",
  "/hms-lab",
  "/hms-lab/about",
  "/hms-lab/projects",
  "/hms-lab/projects/movesense-opensense",
  "/hms-lab/projects/tilt-ecg-measurement-review",
  "/hms-lab/projects/ventilatory-pump-measurement-mechanics",
  "/hms-lab/people",
  "/hms-lab/participate",
  "/hms-lab/library",
  "/clinical-inquiry",
  "/measurement-modeling",
  "/applications",
  "/education",
  "/resources",
  "/health-systems-project",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://movementsystems.org${route}`,
    lastModified: new Date(
      route === "/foundations"
      || route === "/foundations/attain-sustain-maintain"
      || route === "/research-approach"
        ? "2026-10-25"
        : route === "/hms-lab"
      || route === "/hms-lab/projects"
      || route === "/hms-lab/projects/tilt-ecg-measurement-review"
        ? "2026-10-23"
        : route.startsWith("/hms-lab/")
          ? "2026-10-11"
          : route === "/health-systems-project"
            ? "2026-10-08"
            : "2026-09-25",
    ),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}