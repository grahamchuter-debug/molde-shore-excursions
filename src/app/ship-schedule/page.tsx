import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import {
  moldeScheduleIntegrity,
  formatScheduleDate,
  getMoldeMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
} from "@/lib/molde-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Molde Cruise Ship Schedule",
  description:
    "Browse Molde cruise ship schedules by month. View arrival times, departure times, and cruise lines visiting Molde, Norway to plan your shore day.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getMoldeMonthSummaries();
  const firstLabel = moldeScheduleIntegrity.firstDate
    ? formatScheduleDate(moldeScheduleIntegrity.firstDate)
    : "";
  const lastLabel = moldeScheduleIntegrity.lastDate
    ? formatScheduleDate(moldeScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Molde cruise ship schedule"
      lead={`Published calls for Molde from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then decide between city and Varden time or a longer Atlantic Ocean Road day.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Molde port day"
      ctaText="Once you know your hours ashore, compare City of Roses and Mount Varden with Atlantic Ocean Road and Bud options. Keep a clear return buffer."
      ctaHref="/one-day-in-molde"
      ctaButtonLabel="Plan your Molde day"
      relatedLinks={[
        { label: "Molde shore excursions", href: "/excursions" },
        { label: "One day in Molde", href: "/one-day-in-molde" },
        { label: "Port guide", href: "/molde-port-guide" },
        { label: "Is Molde worth visiting?", href: "/is-molde-worth-visiting" },
        { label: "Best time to visit Molde", href: "/best-time-to-visit-molde" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {moldeScheduleIntegrity.total} Molde calls,{" "}
          {moldeScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {moldeScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {moldeScheduleIntegrity.uniqueShips} ships.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Molde</h2>
        <p>
          A short call usually suits the City of Roses harbour and Mount Varden.
          The Atlantic Ocean Road and Bud loop typically needs about five to six
          hours plus buffer. Published duration alone does not prove that longer
          coastal journey will fit.
        </p>
        <p>
          Continue to{" "}
          <Link href="/one-day-in-molde">one day in Molde</Link>,{" "}
          <Link href="/excursions">excursion options</Link>, the{" "}
          <Link href="/molde-port-guide">port guide</Link>, or{" "}
          <Link href="/is-molde-worth-visiting">is Molde worth visiting?</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
