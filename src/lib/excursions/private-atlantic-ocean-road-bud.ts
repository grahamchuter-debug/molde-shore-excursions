import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const privateAtlanticOceanRoadBudExcursion: ExcursionData = {
  slug: "private-atlantic-ocean-road-bud",
  path: "/excursions/private-atlantic-ocean-road-bud",
  title: "Private Atlantic Ocean Road & Bud",
  headline: "Private Molde to Bud and Atlantic Ocean Road",
  lead: "Premium private sightseeing from Molde with flexible pace, Atlantic Ocean Road highlights, Bud fishing village, and coastal photo stops for families, couples and small groups.",
  metaTitle: "Private Molde to Bud & Atlantic Ocean Road Tour",
  metaDescription:
    "Private Molde to Bud and Atlantic Ocean Road shore excursion for cruise passengers. Flexible pacing, coastal photo stops, Bud village, and confirmed all-aboard planning.",
  heroImage: siteImages.privateAtlanticTour,
  heroImageAlt: imageAlts.privateAtlanticCard,
  heroBadge: "Premium private option for Molde cruise passengers",
  summary: {
    duration: "Approx. 5–7 hours (flexible)",
    meetingPoint:
      "Molde cruise port, harbour, or hotel pickup as confirmed on voucher",
    returnReassurance:
      "Private pacing still needs confirmed all-aboard and a generous return buffer; ship hours alone do not prove fit",
    bestFor:
      "Families, couples, and small groups who want flexible coastal sightseeing without a large coach group",
  },
  snapshotCards: [
    { label: "Group size", value: "Private vehicle for your party" },
    { label: "Pace", value: "Flexible stops and photo time" },
    { label: "Highlights", value: "Atlantic Ocean Road, Bud, coastal views" },
    { label: "Season", value: "Popular May–September" },
  ],
  gallery: [
    { src: siteImages.atlanticOceanRoadCoast, alt: imageAlts.atlanticOceanRoadCoast },
    { src: siteImages.atlanticOceanRoad, alt: imageAlts.atlanticOceanRoad },
    { src: siteImages.budFishingVillage, alt: imageAlts.budFishingVillage },
    { src: siteImages.moldeHarbour, alt: imageAlts.moldeHarbour },
  ],
  highlights: [
    "Private sightseeing with flexible pace",
    "Atlantic Ocean Road bridges and coastal curves",
    "Bud fishing village visit and harbour atmosphere",
    "Scenic coastal photo stops tailored to your group",
    "Ideal for families, couples, and small groups",
    "Return planning built around confirmed all-aboard, not hours alone",
  ],
  description: [
    "A private Molde to Bud and Atlantic Ocean Road tour gives your party control over pacing: linger at Storseisundet for photography, spend more time in Bud's harbour, or add extra coastal stops when your ship grants a long, confirmed port day.",
    "Your driver-guide focuses on the Romsdal shoreline east of Molde, explaining fishing heritage, wartime coastal history, and how exposed communities along this route have shaped Norwegian maritime culture. Without a large coach group, children and photographers especially benefit from unhurried viewpoints.",
    "The Atlantic Ocean Road section remains the visual centrepiece: dramatic bridges, open sea, and island skerries that define Norway's Atlantic facade. Private touring often allows brief detours to lesser-known pullouts when weather and schedule align.",
    "Expect about five to seven hours depending on stops. Private comfort does not remove the logistics gate. Published hours ashore alone do not prove the coastal loop will fit. Share your ship's all-aboard time with the operator and keep a clear return margin.",
  ],
  included: [
    "Private vehicle and guide for your party",
    "Flexible Atlantic Ocean Road and Bud itinerary",
    "Coastal photo stops as time allows",
    "Pickup and drop-off near Molde cruise berths when confirmed",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Entrance fees unless stated by operator",
    "Gratuities and personal expenses",
    "Extensions beyond agreed return time",
  ],
  timingAdvice: [
    "Best when you have six or more confirmed hours ashore so private flexibility does not compress the drive.",
    "Confirm vehicle capacity and child-seat needs when arranging the outing.",
    "Share your ship's all-aboard time with the operator. Private tours still need realistic coastal drive margins.",
    "On eight-plus-hour calls, pair with relaxed Molde harbour time after the coastal loop if buffer remains.",
  ],
  faqs: [
    {
      question: "How is a private tour different from the shared Atlantic Ocean Road excursion?",
      answer:
        "You travel only with your party, set a more flexible pace, and can often customise photo stops. Pricing is higher but comfort and timing control suit families and photographers.",
    },
    {
      question: "Do ship hours alone guarantee a private coastal day will fit?",
      answer:
        "No. Flexible pacing still needs confirmed all-aboard and traffic-aware return time. Hours ashore are a planning start, not proof.",
    },
    {
      question: "What group sizes work for private Molde coastal tours?",
      answer:
        "Most operators accommodate couples through small families in sedans, minivans, or small minibuses. Confirm maximum passengers when arranging.",
    },
    {
      question: "Is a private tour worth it for shorter port calls?",
      answer:
        "Usually only if you have at least six confirmed hours ashore. Under four hours, the City of Roses and Mount Varden tour is more realistic.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Private Atlantic Ocean Road & Bud" },
  ],
  relatedLinks: [
    {
      label: "Shared Atlantic Ocean Road tour",
      href: "/excursions/atlantic-ocean-road-bud",
    },
    {
      label: "Fishing village experience",
      href: "/excursions/atlantic-coast-fishing-village",
    },
    { label: "Molde port guide", href: "/molde-port-guide" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the private coastal notes, then compare other options",
  ctaText:
    "Use these notes to judge private Atlantic Ocean Road fit for your hours ashore. This site does not sell tickets.",
};
