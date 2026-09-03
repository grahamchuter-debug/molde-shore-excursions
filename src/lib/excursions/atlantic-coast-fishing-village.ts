import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const atlanticCoastFishingVillageExcursion: ExcursionData = {
  slug: "atlantic-coast-fishing-village",
  path: "/excursions/atlantic-coast-fishing-village",
  title: "Atlantic Coast & Fishing Village",
  headline: "Atlantic Coast and Fishing Village Experience",
  lead: "Coastal culture and nature tour from Molde: fishing village atmosphere, rugged Atlantic landscapes, ocean road scenery, local history, and photography stops along the Romsdal shore.",
  metaTitle: "Atlantic Coast & Fishing Village Molde Excursion",
  metaDescription:
    "Atlantic Coast and Fishing Village Experience from Molde for cruise passengers. Rugged shoreline, Bud atmosphere, ocean road views, history, and photography stops with return-buffer planning.",
  heroImage: siteImages.fishingVillageTour,
  heroImageAlt: imageAlts.fishingVillageCard,
  heroBadge: "Coastal culture and nature focus",
  summary: {
    duration: "Approx. 4–5 hours",
    meetingPoint:
      "Central Molde near cruise berths or coach pickup as on voucher",
    returnReassurance:
      "Coastal loop that needs confirmed hours and buffer before all aboard; ship times alone do not prove fit",
    bestFor:
      "Travellers who want fishing village heritage, rugged coastlines, and photography without a full private charter",
  },
  snapshotCards: [
    { label: "Theme", value: "Coastal culture, history, and scenery" },
    { label: "Fitness level", value: "Easy, coach with village walks" },
    { label: "Highlights", value: "Fishing villages, ocean road views" },
    { label: "Season", value: "Popular May–September" },
  ],
  gallery: [
    { src: siteImages.budFishingVillage, alt: imageAlts.budFishingVillage },
    { src: siteImages.coastalRoad, alt: imageAlts.coastalRoad },
    { src: siteImages.atlanticOceanRoadCoast, alt: imageAlts.atlanticOceanRoadCoast },
    { src: siteImages.moldeHarbour, alt: imageAlts.moldeHarbour },
  ],
  highlights: [
    "Fishing village atmosphere and maritime heritage",
    "Rugged coastal landscapes along the Romsdal shore",
    "Atlantic Ocean Road scenery and bridge viewpoints",
    "Local history from coastal communities",
    "Photography stops at harbours and open-ocean outlooks",
    "Balanced pacing when hours and all aboard are confirmed",
  ],
  description: [
    "The Atlantic Coast and Fishing Village Experience emphasises culture and coastline rather than rushing between checkpoints. From Molde you follow the shore toward communities where fishing shaped daily life: wooden quays, small churches, and harbours that still feel connected to the North Atlantic.",
    "Bud and neighbouring villages provide the human story behind the scenery: how cod and herring economies built these settlements, how storms and wars touched the coast, and why photography enthusiasts return for moody skies and weather-beaten facades.",
    "Ocean road sections add iconic bridge views when the itinerary includes Atlanterhavsveien segments, the same dramatic curves that define Molde-region marketing, framed here with more time for village walks and history than a pure scenic dash.",
    "Expect about four to five hours. Coastal distance still needs a confirmed window and return buffer. Published hours ashore alone do not prove the loop will fit. Confirm bridge stops and timing on your operator voucher.",
  ],
  included: [
    "Guided coastal drive with fishing village stops",
    "Commentary on local history and maritime culture",
    "Photography stops at harbours and shoreline viewpoints",
    "Itinerary intended for moderate-length port calls when timing is confirmed",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Museum tickets unless stated by operator",
    "Private vehicle exclusivity",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Best when you have four to six confirmed hours ashore.",
    "Bring a weatherproof layer for exposed harbour and bridge stops.",
    "If your ship stays eight or more hours, consider the private Atlantic Ocean Road tour for extra flexibility.",
    "Allow 45 minutes before all aboard for coach return on busy summer days.",
  ],
  faqs: [
    {
      question: "How is this different from the headline Atlantic Ocean Road tour?",
      answer:
        "Both visit coastal highlights, but the fishing village experience spends more time on community heritage, harbour walks, and photography rather than maximising bridge viewpoints alone.",
    },
    {
      question: "Does this tour always include the Atlantic Ocean Road bridges?",
      answer:
        "Most itineraries include ocean road scenery; confirm bridge stops on your operator voucher as routes can vary by season and traffic.",
    },
    {
      question: "Do published ship hours guarantee this coastal loop?",
      answer:
        "No. Hours ashore are a planning start. Confirm coach timing, stops and all aboard separately.",
    },
    {
      question: "Can I book this on a short port call?",
      answer:
        "It needs at least four confirmed hours ashore. Under four hours, choose the City of Roses and Mount Varden tour or a harbour walk.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Atlantic Coast & Fishing Village" },
  ],
  relatedLinks: [
    {
      label: "Atlantic Ocean Road & Bud",
      href: "/excursions/atlantic-ocean-road-bud",
    },
    {
      label: "Private Atlantic Ocean Road",
      href: "/excursions/private-atlantic-ocean-road-bud",
    },
    { label: "One day in Molde", href: "/one-day-in-molde" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the fishing village notes, then compare other options",
  ctaText:
    "Use these notes to judge coastal culture fit for your hours ashore. This site does not sell tickets.",
};
