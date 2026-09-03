import {
  getMoldeMonthSummaries,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/molde-schedules";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/atlantic-ocean-road-bud",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-atlantic-ocean-road-bud",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/molde-city-varden-viewpoint",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/atlantic-coast-fishing-village",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/molde-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-molde",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-molde-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-molde",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: shipScheduleHubPath,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
] as const;

export function getSiteRoutes() {
  const monthRoutes = getMoldeMonthSummaries().map((month) => ({
    path: shipScheduleMonthPath(month.slug),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));
  return [...staticRoutes, ...monthRoutes];
}

export const siteRoutes = staticRoutes;
