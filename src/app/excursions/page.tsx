import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { TourCard } from "@/components/tour-card";
import { moldeTourCards, moldeTourListItems } from "@/lib/molde-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Molde Excursions | All Shore Tours for Cruise Passengers",
  description:
    "Browse all Molde shore excursions for cruise passengers: Atlantic Ocean Road and Bud, private coastal tours, City of Roses and Mount Varden, and fishing village experiences.",
  path: "/excursions",
  ogImage: siteImages.atlanticOceanRoad,
  ogImageAlt: imageAlts.atlanticOceanRoad,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Excursions" },
] as const;

const relatedLinks = [
  { label: "Molde port guide", href: "/molde-port-guide" },
  { label: "One day in Molde", href: "/one-day-in-molde" },
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "Is Molde worth visiting?", href: "/is-molde-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What is the best Molde excursion for first-time cruise visitors?",
    answer:
      "The Molde to Bud Scenic Drive and Atlantic Ocean Road tour is the headline choice when you have a long, confirmed window (about five to six hours plus buffer). For shorter calls, the City of Roses and Mount Varden Viewpoint tour is the practical default.",
  },
  {
    question: "How do I choose between Molde shore excursions?",
    answer:
      "Match the tour to confirmed hours ashore and all aboard: Mount Varden suits under-four-hour calls; Atlantic Ocean Road and fishing village tours need more margin; private coastal drives suit longer confirmed days. Hours alone do not prove fit. Use the Cruise Smart Planner on the homepage to compare options.",
  },
  {
    question: "Do Molde excursions depart near the cruise port?",
    answer:
      "Yes. Featured tours meet in central Molde near the harbour, cruise berths, or designated coach pickups, typically a short walk or transfer from most piers.",
  },
] as const;

export default function ExcursionsIndexPage() {
  return (
    <>
      <JsonLd data={[buildItemListSchema(moldeTourListItems)]} />
      <ContentPage
        title="Molde Excursions"
        lead="Cruise-friendly shore excursion options in Molde: Atlantic Ocean Road drives, Bud fishing village, Mount Varden panoramas, and coastal culture tours. Durations are approximate; confirm all aboard before you treat any coastal day as locked."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Need help choosing a Molde tour?"
        ctaText="Use the Cruise Smart Planner on the homepage to match tours to your ship's timetable."
        ctaHref="/#planner"
        ctaButtonLabel="Open Cruise Smart Planner"
        belowHero={
          <section className="border-b bg-surface-muted">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {moldeTourCards.map((tour) => (
                  <TourCard
                    key={tour.href}
                    href={tour.href}
                    image={tour.image}
                    imageAlt={tour.imageAlt}
                    title={tour.title}
                    description={tour.description}
                    accent={tour.accent}
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <section>
          <h2>Compare Molde shore excursions</h2>
          <p>
            Each tour below is designed for cruise passengers calling at Molde.
            Atlantic Ocean Road drives need the longest port window; Mount
            Varden and harbour walks fit shorter schedules. Private tours suit
            families wanting flexible coastal pacing.
          </p>
          <p>
            For port-day planning tools and tier-based recommendations, use the{" "}
            <Link href="/#planner">Cruise Smart Planner</Link> on the homepage.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
