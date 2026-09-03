import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Molde Shore Excursions",
  url: "https://moldeshoreexcursions.com",
  locale: "en_GB",
  tagline: "City and Varden time or a longer Atlantic Ocean Road day",
  defaultDescription:
    "Independent Molde cruise-port planning: City of Roses and Mount Varden, Atlantic Ocean Road and Bud, fishing-village coast days, and published ship schedules for your hours ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Molde Shore Excursions",
  shoreExcursionsPath: "/excursions",
  plannerPath: "/one-day-in-molde",
  schedulePath: "/ship-schedule",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@moldeshoreexcursions.com",
  contactEmailVerified: true,
} as const;
