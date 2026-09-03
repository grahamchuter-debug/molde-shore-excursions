import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About Molde Shore Excursions",
  description:
    "About Molde Shore Excursions: independent cruise-port planning for the City of Roses, Mount Varden, Atlantic Ocean Road and published ship schedules.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ContentPage
      title="About Molde Shore Excursions"
      lead="An independent planning site for cruise passengers calling at Molde. City and Varden time, Atlantic Ocean Road days and published ship schedules in one place."
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath="/about"
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About" },
      ]}
      ctaTitle="Start with your Molde day"
      ctaText="Check the ship schedule, then explore city and Varden options or a longer Atlantic Ocean Road day that fits your hours ashore."
      ctaHref="/ship-schedule"
      ctaButtonLabel="Check ship schedule"
      showShipReassurance={false}
      relatedLinks={[
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ]}
    >
      <section>
        <h2>What this site is</h2>
        <p>
          Molde Shore Excursions helps cruise passengers plan a realistic day in
          Molde: City of Roses harbour time, Mount Varden viewpoints, Atlantic
          Ocean Road and Bud coastal drives, fishing-village outings, and
          published ship-call information drawn from the Norway Shore Excursions
          master schedule.
        </p>
      </section>

      <section>
        <h2>What this site is not</h2>
        <ul>
          <li>Not a cruise line, coach operator or port authority</li>
          <li>Not an official tourism board</li>
          <li>Not a live booking checkout</li>
          <li>Not a guarantee of berth, timings or ticket availability</li>
        </ul>
      </section>

      <section>
        <h2>National context</h2>
        <p>
          For multi-port Norway planning, see{" "}
          <a href={siteConfig.nationalAuthorityUrl}>Norway Shore Excursions</a>.
          This site stays focused on Molde.
        </p>
        <p>
          <Link href="/contact">Contact</Link>
          {" · "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
        </p>
      </section>
    </ContentPage>
  );
}
