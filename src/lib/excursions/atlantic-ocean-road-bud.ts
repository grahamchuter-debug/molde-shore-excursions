import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const atlanticOceanRoadBudExcursion: ExcursionData = {
  slug: "atlantic-ocean-road-bud",
  path: "/excursions/atlantic-ocean-road-bud",
  title: "Atlantic Ocean Road & Bud",
  headline: "Molde to Bud Scenic Drive and the Atlantic Ocean Road",
  lead: "Molde's headline shore excursion: scenic coastal drive to Bud fishing village and the Atlantic Ocean Road with ocean views, local history, and honest return-buffer planning.",
  metaTitle: "Molde to Bud & Atlantic Ocean Road Shore Excursion",
  metaDescription:
    "Plan the Molde to Bud scenic drive and Atlantic Ocean Road shore excursion for cruise passengers. Coastal bridges, Bud fishing village, ocean panoramas, and confirmed all-aboard planning.",
  heroImage: siteImages.atlanticOceanRoadBudTour,
  heroImageAlt: imageAlts.atlanticOceanRoadBudCard,
  heroBadge: "Headline Molde shore excursion for cruise passengers",
  summary: {
    duration: "Approx. 5–6 hours",
    meetingPoint:
      "Central Molde near cruise berths, harbour, or designated coach pickup",
    returnReassurance:
      "Needs a confirmed port window plus buffer before all aboard; ship hours alone do not prove fit",
    bestFor:
      "First-time visitors who want the Atlantic Ocean Road, Bud, and coastal scenery in one outing when timing is confirmed",
  },
  snapshotCards: [
    { label: "Drive time", value: "Scenic coastal route east of Molde" },
    { label: "Fitness level", value: "Easy, coach touring with photo stops" },
    { label: "Highlights", value: "Atlantic Ocean Road, Bud, ocean views" },
    { label: "Season", value: "Popular May–September" },
  ],
  gallery: [
    { src: siteImages.atlanticOceanRoad, alt: imageAlts.atlanticOceanRoad },
    { src: siteImages.atlanticOceanRoadCoast, alt: imageAlts.atlanticOceanRoadCoast },
    { src: siteImages.budFishingVillage, alt: imageAlts.budFishingVillage },
    { src: siteImages.coastalRoad, alt: imageAlts.coastalRoad },
  ],
  highlights: [
    "Atlantic Ocean Road bridges and iconic coastal curves",
    "Bud fishing village atmosphere and maritime history",
    "Panoramic ocean views along the Romsdal coast",
    "Scenic drive from Molde with photography stops",
    "Local history commentary from coastal communities",
    "Plan around confirmed all-aboard, not published hours alone",
  ],
  description: [
    "The Molde to Bud scenic drive is the essential introduction for cruise passengers who want Norway's Atlantic coast in one outing. Your guide leads you east from Molde through rugged shoreline landscapes toward Bud, a historic fishing community where wooden warehouses, harbour life, and North Atlantic weather define the character of the Romsdal coast.",
    "The route continues onto the Atlantic Ocean Road (Atlanterhavsveien), famous for its dramatic bridges linking small islands and skerries. Storseisundet and neighbouring spans deliver the panoramic ocean views that make this one of Norway's most photographed coastal drives, especially rewarding on clear days when waves break against the rocks below.",
    "Commentary connects the scenery to local history: fishing traditions, wartime coastal heritage, and how communities along this exposed shoreline have lived with the sea for generations. Photo stops are built into the itinerary so you capture the drive without rushing past the signature viewpoints.",
    "Most operators run about five to six hours including driving, Bud village time, Atlantic Ocean Road photo stops and return to Molde. That duration needs a genuine confirmed port window plus buffer. Published hours ashore alone do not prove the route will fit. Confirm meeting points, coach timing and all aboard with your cruise line before you treat this as locked.",
  ],
  included: [
    "Guided scenic drive from Molde to Bud and the Atlantic Ocean Road",
    "Coastal photo stops at signature bridge and shoreline viewpoints",
    "Commentary on local history and fishing village heritage",
    "Itinerary intended for cruise passengers when timing is confirmed",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Museum admission unless stated by operator",
    "Optional extended stops beyond published itinerary",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Treat five to six hours as a planning estimate, not a guarantee from the ship timetable.",
    "Disembark promptly on busy turnaround days. Coastal departures fill when multiple ships share the region.",
    "Keep 45 minutes or more before all aboard for the coach return to your gangway.",
    "Pack a windproof layer. Exposed bridges and Bud harbour can be breezy even in summer. This site does not invent live road conditions.",
  ],
  faqs: [
    {
      question: "How long is the Molde to Bud and Atlantic Ocean Road tour?",
      answer:
        "Most operators run five to six hours including driving, Bud village time, and Atlantic Ocean Road photo stops with return to Molde cruise berths. Confirm the published duration on your voucher.",
    },
    {
      question: "Do ship hours ashore guarantee this journey will fit?",
      answer:
        "No. Hours ashore do not prove coach operation, traffic or return buffer. Confirm tickets, pickup and all aboard separately.",
    },
    {
      question: "How far is the Atlantic Ocean Road from the Molde cruise port?",
      answer:
        "Roughly 45–60 minutes each way by coach from central Molde, depending on traffic and berth location. Confirm meeting points on your voucher.",
    },
    {
      question: "Can I combine this tour with Mount Varden on the same day?",
      answer:
        "Only on very long, confirmed port calls. Most guests choose either the coastal drive or the City of Roses and Mount Varden tour. Use the Cruise Smart Planner to think in hours, not as a guarantee.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Atlantic Ocean Road & Bud" },
  ],
  relatedLinks: [
    {
      label: "Private Atlantic Ocean Road tour",
      href: "/excursions/private-atlantic-ocean-road-bud",
    },
    {
      label: "City of Roses & Mount Varden",
      href: "/excursions/molde-city-varden-viewpoint",
    },
    { label: "One day in Molde", href: "/one-day-in-molde" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the Atlantic Ocean Road notes, then compare other options",
  ctaText:
    "Use these notes to judge coastal fit for your hours ashore, then compare city and Varden options. This site does not sell tickets.",
};
