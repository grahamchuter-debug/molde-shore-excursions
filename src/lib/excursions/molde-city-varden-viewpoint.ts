import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const moldeCityVardenViewpointExcursion: ExcursionData = {
  slug: "molde-city-varden-viewpoint",
  path: "/excursions/molde-city-varden-viewpoint",
  title: "City of Roses & Mount Varden",
  headline: "Molde City of Roses and Mount Varden Viewpoint",
  lead: "Shorter scenic city tour: Molde town, harbour area, Mount Varden viewpoint, and town panorama designed for tighter cruise port calls.",
  metaTitle: "Molde City of Roses & Mount Varden Shore Excursion",
  metaDescription:
    "Molde City of Roses and Mount Varden viewpoint tour for cruise passengers. Harbour walks, town centre, Mount Varden panorama, and return-buffer planning for shorter port calls.",
  heroImage: siteImages.cityVardenTour,
  heroImageAlt: imageAlts.cityVardenCard,
  heroBadge: "Best for shorter Molde port calls",
  summary: {
    duration: "Approx. 2–3 hours",
    meetingPoint:
      "Molde harbour, cruise berth, or town centre meeting point",
    returnReassurance:
      "Compact itinerary for under-four-hour and four-hour port windows with gangway buffer",
    bestFor:
      "Guests with limited time ashore who still want Molde's signature panorama and harbour atmosphere",
  },
  snapshotCards: [
    { label: "Walk from ship", value: "Often 5–15 minutes to town centre" },
    { label: "Fitness level", value: "Easy to moderate (Varden path optional)" },
    { label: "Highlights", value: "Harbour, town, Mount Varden panorama" },
    { label: "Season", value: "Popular May–September" },
  ],
  gallery: [
    { src: siteImages.moldeHarbour, alt: imageAlts.moldeHarbour },
    { src: siteImages.mountVarden, alt: imageAlts.mountVarden },
    { src: siteImages.cityRoses, alt: imageAlts.cityRoses },
    { src: siteImages.mountVarden, alt: imageAlts.mountVarden },
  ],
  highlights: [
    "Molde town and City of Roses character",
    "Harbour area and waterfront stroll",
    "Mount Varden viewpoint with town and fjord panorama",
    "Compact touring for shorter port calls",
    "Photo stops over Molde harbour and town rooftops",
    "Return-buffer pacing near cruise berths",
  ],
  description: [
    "When your ship grants limited hours in port, the City of Roses and Mount Varden tour delivers Molde's essentials without the long drive to the Atlantic Ocean Road. Your guide introduces the harbour, where cruise ships meet local ferries and coastal life, then the town centre known for roses, parks, and relaxed Nordic urban charm.",
    "Mount Varden rises behind Molde with a cable car or walking path to a viewpoint that looks across the town, Moldefjord, and on clear days wider Romsdal scenery. Commentary explains why Molde brands itself the City of Roses and how the local landscape shapes identity.",
    "This excursion keeps transfers minimal so you spend time on scenery rather than motorways. It pairs naturally with an independent harbour lunch or souvenir shopping when your schedule allows a buffer before all aboard.",
    "Our Cruise Smart Planner flags this tour for under-four-hour and tight four-hour port calls, the practical choice when Atlantic Ocean Road touring would cut too close to your gangway deadline.",
  ],
  included: [
    "Guided Molde town and harbour orientation",
    "Mount Varden viewpoint visit (transport or path as per itinerary)",
    "Commentary on City of Roses heritage and local scenery",
    "Route paced for shorter cruise port timings",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Cable car ticket unless stated by operator",
    "Atlantic Ocean Road or Bud extensions",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal when you have under four hours ashore or want a light morning before another activity.",
    "Wear comfortable shoes for Varden paths if your tour includes walking sections.",
    "Do not add Atlantic Ocean Road drives on the same short port day.",
    "Keep 30 minutes before all aboard for the walk back to your pier.",
  ],
  faqs: [
    {
      question: "How long is the City of Roses and Mount Varden tour?",
      answer:
        "Most operators run two to three hours, covering harbour areas, town highlights, and the Varden viewpoint with photo time.",
    },
    {
      question: "Is Mount Varden reachable without a long hike?",
      answer:
        "Many tours use the cable car or a short path. Check your voucher for walking requirements and accessibility.",
    },
    {
      question: "Is this tour enough for a full Molde port day?",
      answer:
        "It is the best fit for short calls. With six or more confirmed hours, consider the Atlantic Ocean Road tour instead, or as a second booking only if timing and buffer allow.",
    },
    {
      question: "How far is the meeting point from the cruise port?",
      answer:
        "Typically a 5–15 minute walk from main Molde berths. Confirm the exact location on your voucher.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "City of Roses & Mount Varden" },
  ],
  relatedLinks: [
    {
      label: "Atlantic Ocean Road & Bud",
      href: "/excursions/atlantic-ocean-road-bud",
    },
    { label: "Molde port guide", href: "/molde-port-guide" },
    { label: "Is Molde worth visiting?", href: "/is-molde-worth-visiting" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the city and Varden notes, then compare other options",
  ctaText:
    "Use these notes to judge short-call fit, then compare Atlantic Ocean Road options if you have a longer confirmed window. This site does not sell tickets.",
};
