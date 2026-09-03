import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Molde for Cruise Passengers",
  description:
    "Sample one-day Molde itinerary for cruise guests with realistic timing for Atlantic Ocean Road, Bud, Mount Varden, harbour lunch, and return-buffer planning.",
  path: "/one-day-in-molde",
  ogImage: siteImages.oneDay,
  ogImageAlt: imageAlts.oneDay,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "One Day in Molde" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Molde port guide", href: "/molde-port-guide" },
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "Is Molde worth visiting?", href: "/is-molde-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What can cruise passengers do in Molde with only four hours ashore?",
    answer:
      "Focus on the City of Roses and Mount Varden tour or a self-guided harbour and town walk. Skip Atlantic Ocean Road drives: not enough margin for coach returns.",
  },
  {
    question: "Can I combine the Atlantic Ocean Road and Mount Varden in one Molde day?",
    answer:
      "Only on a long, confirmed call with clear return margin. Published hours ashore alone do not prove both will fit. Most guests choose one headline outing. Use the Cruise Smart Planner to think in hours, not as a guarantee.",
  },
  {
    question: "Should I arrange tickets before my cruise arrives in Molde?",
    answer:
      "On peak summer days, coastal outings can fill when several ships share the region. Confirm operator timing against your all-aboard separately.",
  },
  {
    question: "How much buffer time should I leave before all aboard?",
    answer:
      "Aim to be at the gangway 45 minutes before the published all-aboard time for coastal drives. Coach returns can compress that window quickly.",
  },
] as const;

export default function OneDayInMoldePage() {
  return (
    <ContentPage
      title="One Day in Molde"
      lead="A practical cruise-day plan for Molde: choose city and Varden time or a longer Atlantic Ocean Road day, then keep a clear return buffer. Ship hours alone do not prove a coastal loop will fit."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship&apos;s Molde schedule</h2>
        <p>
          Every good Molde day begins with your cruise line&apos;s arrival,
          departure, and all-aboard times. Subtract at least 45 minutes from your
          last possible departure to set a hard deadline for being back at the
          gangway. Confirm times on your ship&apos;s app the morning you arrive.
          Check the{" "}
          <Link href="/ship-schedule">published Molde ship schedule</Link> as a
          planning start only.
        </p>
      </section>

      <section>
        <h2>Morning: Atlantic Ocean Road or Mount Varden</h2>
        <p>
          Disembark as early as you are cleared ashore. With a long, confirmed
          window, head to your coach for the{" "}
          <Link href="/excursions/atlantic-ocean-road-bud">
            Molde to Bud and Atlantic Ocean Road tour
          </Link>{" "}
          (about five to six hours is typical, plus buffer). On shorter or
          uncertain calls, choose the{" "}
          <Link href="/excursions/molde-city-varden-viewpoint">
            City of Roses and Mount Varden tour
          </Link>{" "}
          instead. Published duration alone does not prove the coastal journey
          will fit.
        </p>
      </section>

      <section>
        <h2>Midday: Harbour lunch in the City of Roses</h2>
        <p>
          If your coastal tour returns with time to spare, lunch along the
          harbour promenade keeps you near the ship. Cafés and bakeries cluster
          within minutes of most cruise berths.
        </p>
      </section>

      <section>
        <h2>Afternoon: One main coastal direction, or relaxed town time</h2>
        <p>
          On six-to-eight-hour confirmed port days, the{" "}
          <Link href="/excursions/atlantic-coast-fishing-village">
            fishing village experience
          </Link>{" "}
          or a{" "}
          <Link href="/excursions/private-atlantic-ocean-road-bud">
            private Atlantic Ocean Road tour
          </Link>{" "}
          can be the headline outing. Treat stacking coast and Varden as a
          stretch that needs separate confirmation, not a timetable result.
        </p>
      </section>

      <section>
        <h2>Return buffer</h2>
        <p>
          Be at the gangway 45 minutes before all aboard for coastal drives. Use
          the <Link href="/#planner">Molde Cruise Smart Planner</Link> to think
          through hours. It does not invent coach operation or road conditions.
        </p>
      </section>
    </ContentPage>
  );
}
