import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import {
  formatMonthLabel,
  getMoldeEntriesForMonthKey,
  getMoldeMonthKeysWithCalls,
  getMoldeMonthSummaries,
  monthKeyToSlug,
  monthSlugToKey,
  scheduleDisclaimer,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/molde-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

type MonthPageProps = {
  params: Promise<{ monthSlug: string }>;
};

export function generateStaticParams() {
  return getMoldeMonthKeysWithCalls().map((monthKey) => ({
    monthSlug: monthKeyToSlug(monthKey),
  }));
}

export async function generateMetadata({
  params,
}: MonthPageProps): Promise<Metadata> {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) return {};
  const label = formatMonthLabel(monthKey);
  return buildPageMetadata({
    title: `Molde Cruise Ship Schedule ${label}`,
    description: `View the Molde cruise ship schedule for ${label} including arrival times, departure times, and cruise lines visiting Molde, Norway.`,
    path: shipScheduleMonthPath(monthSlug),
  });
}

export default async function MoldeShipScheduleMonthPage({
  params,
}: MonthPageProps) {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) notFound();

  const entries = getMoldeEntriesForMonthKey(monthKey);
  if (entries.length === 0) notFound();

  const label = formatMonthLabel(monthKey);
  const otherMonths = getMoldeMonthSummaries().filter(
    (m) => m.slug !== monthSlug,
  );

  return (
    <ContentPage
      title={`Molde cruise schedule: ${label}`}
      lead={`${entries.length} published ship call${entries.length === 1 ? "" : "s"} for ${label}. Find your vessel, note arrival and departure, then choose a realistic Molde plan.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleMonthPath(monthSlug)}
      pageDescription={`Molde cruise ship schedule for ${label}.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule", href: shipScheduleHubPath },
        { label },
      ]}
      ctaTitle="Plan your Molde port day"
      ctaText="Use your hours ashore to choose between city and Varden time or a longer Atlantic Ocean Road day, with a clear return buffer."
      ctaHref="/one-day-in-molde"
      ctaButtonLabel="Plan your Molde day"
      relatedLinks={[
        { label: "All months", href: shipScheduleHubPath },
        { label: "Explore excursions", href: "/excursions" },
        { label: "Port guide", href: "/molde-port-guide" },
        { label: "One day in Molde", href: "/one-day-in-molde" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
      </section>

      <section>
        <h2>{label} ship calls</h2>
        <ShipScheduleTable entries={entries} />
      </section>

      <section>
        <h2>Next: turn your date into a plan</h2>
        <p>
          Once you know roughly how long you have ashore, choose one main
          experience that fits. Ship times alone cannot prove that the Atlantic
          Ocean Road and Bud journey will work on every call.
        </p>
        <ul>
          <li>
            <Link href="/one-day-in-molde">One day in Molde</Link>
          </li>
          <li>
            <Link href="/excursions">Molde shore excursions</Link>
          </li>
          <li>
            <Link href="/molde-port-guide">Molde cruise port guide</Link>
          </li>
          <li>
            <Link href="/is-molde-worth-visiting">Is Molde worth visiting?</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Molde months</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link href={shipScheduleMonthPath(month.slug)}>
                {month.label} · {month.callCount} calls
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
