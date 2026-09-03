import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import {
  moldeScheduleIntegrity,
  formatScheduleDate,
} from "@/lib/molde-schedules";
import { moldeTourCards, moldeTourListItems } from "@/lib/molde-tours";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

const pageMeta = {
  title:
    "Molde Shore Excursions | Cruise Port Tours, Atlantic Ocean Road & City Guides",
  description:
    "Plan your Molde cruise port day: City of Roses and Mount Varden, Atlantic Ocean Road and Bud, published ship schedules, and honest return-buffer planning.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const homeFaqs = [
  {
    question: "Is this site for cruise passengers calling at Molde?",
    answer:
      "Yes. This is an independent Molde cruise-port planning site. It helps you choose between city and Varden time and a longer Atlantic Ocean Road day, check published ship calls, and leave a return buffer. Confirm final timings with your cruise line.",
  },
  {
    question: "Should I stay in town or take the Atlantic Ocean Road?",
    answer:
      "City and Mount Varden suit shorter calls and guests who want the harbour town itself. The Atlantic Ocean Road and Bud loop typically needs about five to six hours plus buffer. Pick one main direction unless tickets and timing are already locked in.",
  },
  {
    question:
      "Can I do Mount Varden and the Atlantic Ocean Road because my ship stays all day?",
    answer:
      "Published hours ashore are not enough. Combining them needs confirmed transfers and a clear return margin. This site does not invent current coach operation or road conditions.",
  },
  {
    question: "Can I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tours through operators or your usual booking channel.",
  },
] as const;

export default function Home() {
  const firstLabel = moldeScheduleIntegrity.firstDate
    ? formatScheduleDate(moldeScheduleIntegrity.firstDate)
    : "";
  const lastLabel = moldeScheduleIntegrity.lastDate
    ? formatScheduleDate(moldeScheduleIntegrity.lastDate)
    : "";
  const featured = moldeTourCards.slice(0, 3);
  const remaining = moldeTourCards.slice(3);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(moldeTourListItems),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your ship is in Molde. City and Varden, or a longer Atlantic Ocean
            Road day?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Harbour time and Mount Varden close to town, or the Atlantic Ocean
            Road and Bud when the clock and coach allow. Choose one main
            direction, then keep time to get back.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/excursions"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Molde excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Two Molde days</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              City and Varden versus a longer Atlantic Road day
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              The inventory on this site already splits that way. Use the
              one-day guide for hours, not as proof that the Atlantic Ocean Road
              will fit every call.
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  City and Varden
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  City of Roses harbour time and Mount Varden when you want the
                  town itself. Compact berths make this the default on shorter
                  calls.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/molde-city-varden-viewpoint"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    City of Roses and Mount Varden
                  </Link>
                  <Link
                    href="/molde-port-guide"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Molde port guide
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Longer Atlantic Road day
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Atlantic Ocean Road and Bud when you have a long, confirmed
                  window. About five to six hours is typical for the scenic loop,
                  but hours ashore still do not guarantee fit.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/excursions/atlantic-ocean-road-bud"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Atlantic Ocean Road and Bud
                  </Link>
                  <Link
                    href="/excursions/private-atlantic-ocean-road-bud"
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
                  >
                    Private Atlantic Ocean Road
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Molde
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {moldeScheduleIntegrity.total} published Molde calls from{" "}
              {firstLabel} to {lastLabel}. Arrival and departure times shape
              what is realistic ashore. Always confirm with your cruise line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Molde ship schedule
              </Link>
              <Link
                href="/one-day-in-molde"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
              >
                Then plan your hours
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experiences already on this site
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Four products. No invented prices. Durations are approximate. Keep
              a return buffer. This site does not sell tickets.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
            {remaining.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {remaining.map((tour) => (
                  <TourCard key={tour.href} {...tour} />
                ))}
              </div>
            ) : null}
            <p className="mt-8">
              <Link
                href="/excursions"
                className="text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
              >
                Compare all Molde excursions
              </Link>
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Town and coast</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Stacking stops is a stretch, not a timetable result
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Mount Varden plus the Atlantic Ocean Road needs a long confirmed
              day. Ship duration alone cannot prove it. Confirm each outing
              separately and leave buffer before all aboard.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Molde</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Useful planning guides
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/molde-port-guide",
                  title: "Cruise port guide",
                  text: "Harbour layout, town access and coach pickup context for Molde.",
                },
                {
                  href: "/one-day-in-molde",
                  title: "One day in Molde",
                  text: "Sample shapes for short, classic and longer port calls.",
                },
                {
                  href: "/is-molde-worth-visiting",
                  title: "Is Molde worth visiting?",
                  text: "Honest context if you are deciding how to spend hours ashore.",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="border-t border-[var(--border-light)] pt-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="planner"
          className="scroll-mt-24 border-y border-[var(--border-light)] bg-surface-muted py-14 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planning</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Think in hours, coast distance and return buffer
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Use published times as a planning start. This Cruise Smart Planner
              helps you think through the day. It does not invent coach
              operation or road conditions.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Norway beyond Molde</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Planning other Norwegian ports?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              For multi-port itineraries, the national planning site covers the
              wider Norway cruise picture.
            </p>
            <a
              href={siteConfig.nationalAuthorityUrl}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--norway-blue)] underline-offset-4 hover:underline"
            >
              Norway Shore Excursions
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Molde cruise questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Molde planning concierge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {siteConfig.contactEmailVerified
                ? `Questions about shaping a Molde port day? Email ${siteConfig.contactEmail}.`
                : "A destination email is being prepared. Until then, use the schedule, one-day guide and excursion pages on this site."}
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
