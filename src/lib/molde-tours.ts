import { imageAlts, siteImages } from "@/lib/site-images";

export type MoldeTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent: "blue" | "red";
};

export const moldeTourCards: readonly MoldeTourCard[] = [
  {
    href: "/excursions/atlantic-ocean-road-bud",
    image: siteImages.atlanticOceanRoadBudTour,
    imageAlt: imageAlts.atlanticOceanRoadBudCard,
    title: "Molde to Bud Scenic Drive and the Atlantic Ocean Road",
    description:
      "Headline Molde shore excursion: Atlantic Ocean Road bridges, Bud fishing village, coastal scenery and ocean views. About five to six hours, with confirmed all-aboard required.",
    accent: "blue",
  },
  {
    href: "/excursions/private-atlantic-ocean-road-bud",
    image: siteImages.privateAtlanticTour,
    imageAlt: imageAlts.privateAtlanticCard,
    title: "Private Molde to Bud and Atlantic Ocean Road",
    description:
      "Premium private sightseeing with flexible pace, Atlantic Ocean Road highlights, Bud fishing village and coastal photo stops for families, couples and small groups.",
    accent: "red",
  },
  {
    href: "/excursions/molde-city-varden-viewpoint",
    image: siteImages.cityVardenTour,
    imageAlt: imageAlts.cityVardenCard,
    title: "Molde City of Roses and Mount Varden Viewpoint",
    description:
      "Shorter scenic city tour: Molde town, harbour area, Mount Varden viewpoint and town panorama for tighter port calls.",
    accent: "blue",
  },
  {
    href: "/excursions/atlantic-coast-fishing-village",
    image: siteImages.fishingVillageTour,
    imageAlt: imageAlts.fishingVillageCard,
    title: "Atlantic Coast and Fishing Village Experience",
    description:
      "Coastal culture and nature: fishing village atmosphere, rugged landscapes, ocean road scenery, local history and photography stops along the Romsdal coast.",
    accent: "red",
  },
] as const;

export const moldeTourListItems = moldeTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
