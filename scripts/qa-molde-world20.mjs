/**
 * Molde World 2.0 destination QA.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

const dataPath = path.join(root, "src/data/molde-cruise-schedules.generated.json");
if (!existsSync(dataPath)) {
  fail("missing molde-cruise-schedules.generated.json");
  process.exit(1);
}

const data = JSON.parse(readFileSync(dataPath, "utf8"));
const rows = data.rows || [];
const integrity = data.integrity || {};

const expected = {
  total: 114,
  y2026: 43,
  y2027: 37,
  y2028: 34,
  first: "2026-06-05",
  last: "2028-10-24",
  ships: 38,
  lines: 18,
  months: 18,
  busiest: { key: "2026-07", count: 14 },
  light: { key: "2027-12", count: 1 },
};

if (data.port !== "molde") {
  fail(`generated port ${data.port}, expected molde`);
} else {
  pass("generated JSON filtered to port === molde");
}

if (integrity.total !== expected.total || rows.length !== expected.total) {
  fail(`total calls ${integrity.total}/${rows.length}, expected ${expected.total}`);
} else {
  pass(`total Molde calls ${expected.total}`);
}

if ((integrity.byYear?.["2026"] ?? 0) !== expected.y2026) {
  fail(`2026 ${integrity.byYear?.["2026"]}, expected ${expected.y2026}`);
} else {
  pass(`2026 calls ${expected.y2026}`);
}

if ((integrity.byYear?.["2027"] ?? 0) !== expected.y2027) {
  fail(`2027 ${integrity.byYear?.["2027"]}, expected ${expected.y2027}`);
} else {
  pass(`2027 calls ${expected.y2027}`);
}

if (integrity.firstDate !== expected.first || integrity.lastDate !== expected.last) {
  fail(`date range ${integrity.firstDate}..${integrity.lastDate}`);
} else {
  pass(`date range ${expected.first} .. ${expected.last}`);
}

if (integrity.uniqueShips !== expected.ships) {
  fail(`unique ships ${integrity.uniqueShips}, expected ${expected.ships}`);
} else {
  pass(`unique ships ${expected.ships}`);
}

if (integrity.cruiseLines !== expected.lines) {
  fail(`cruise lines ${integrity.cruiseLines}, expected ${expected.lines}`);
} else {
  pass(`cruise lines ${expected.lines}`);
}

if ((integrity.byYear?.["2028"] ?? 0) !== 34 || !integrity.has2028) {
  fail(`2028 ${integrity.byYear?.["2028"]}, expected 34`);
} else {
  pass(`2028 calls 34`);
}

const required = [
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/ship-schedule/page.tsx",
  "src/app/ship-schedule/[monthSlug]/page.tsx",
  "src/app/excursions/page.tsx",
  "src/app/molde-port-guide/page.tsx",
  "src/app/one-day-in-molde/page.tsx",
  "src/app/is-molde-worth-visiting/page.tsx",
  "src/app/best-time-to-visit-molde/page.tsx",
  "src/lib/image-provenance.ts",
];
for (const rel of required) {
  if (!existsSync(path.join(root, rel))) fail(`missing ${rel}`);
  else pass(`exists ${rel}`);
}

const preserved = [
  "src/app/page.tsx",
  "src/app/excursions/atlantic-ocean-road-bud/page.tsx",
  "src/app/excursions/private-atlantic-ocean-road-bud/page.tsx",
  "src/app/excursions/molde-city-varden-viewpoint/page.tsx",
  "src/app/excursions/atlantic-coast-fishing-village/page.tsx",
  "src/app/molde-port-guide/page.tsx",
  "src/app/one-day-in-molde/page.tsx",
  "src/app/is-molde-worth-visiting/page.tsx",
  "src/app/best-time-to-visit-molde/page.tsx",
];
for (const rel of preserved) {
  if (!existsSync(path.join(root, rel))) fail(`preserved route missing ${rel}`);
  else pass(`preserved ${rel}`);
}

pass("no /excursions redirect required; Molde hub is already /excursions");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const srcFiles = walk(path.join(root, "src"));
const banned = [/BOOK NOW/i, /Book a Tour/, /Book this excursion/, /Ready to book/i];
let bannedHits = 0;
for (const file of srcFiles) {
  const text = readFileSync(file, "utf8");
  for (const pattern of banned) {
    if (pattern.test(text)) {
      bannedHits += 1;
      fail(`banned CTA pattern ${pattern} in ${path.relative(root, file)}`);
    }
  }
  if (/stripe|checkout\.session|payment.?intent/i.test(text)) {
    bannedHits += 1;
    fail(`payment infrastructure ref in ${path.relative(root, file)}`);
  }
}
if (bannedHits === 0) {
  pass("no BOOK NOW / Book a Tour / Book this excursion / Ready to book / payment infra in src");
}

const home = readFileSync(path.join(root, "src/app/page.tsx"), "utf8");
if (/Whether you're|Whether you are/i.test(home)) {
  fail('homepage contains "Whether you\'re" pattern');
} else {
  pass("homepage avoids Whether you're pattern");
}
if (/—/.test(home)) {
  fail("homepage contains prose em dash");
} else {
  pass("homepage has zero prose em dashes");
}
if (!home.includes("/ship-schedule")) {
  fail("homepage missing ship-schedule link");
} else {
  pass("homepage links to ship-schedule");
}
if (!home.includes("CruisePortDayPlanner")) {
  fail("homepage missing Cruise Smart Planner");
} else {
  pass("homepage keeps Cruise Smart Planner");
}

const chromeFiles = [
  "src/components/site-footer.tsx",
  "src/app/page.tsx",
  "src/app/ship-schedule/page.tsx",
];
for (const rel of chromeFiles) {
  const text = readFileSync(path.join(root, rel), "utf8");
  if (
    /Lysefjord|Pulpit Rock|Preikestolen|Bryggen|Mostraumen|Nidaros|Bakklandet|Flamsbana|Stegastein|Dalsnibba|Flydalsjuvet|Vøringsfossen|Hardangervidda|Art Nouveau/.test(
      text,
    )
  ) {
    fail(`sibling-destination remnant in ${rel}`);
  } else {
    pass(`no sibling remnant in ${rel}`);
  }
}

const config = readFileSync(path.join(root, "src/lib/site-config.ts"), "utf8");
if (!config.includes("moldeshoreexcursions.com")) {
  fail("canonical domain missing from site-config");
} else {
  pass("canonical domain moldeshoreexcursions.com present");
}

if (!config.includes("contactEmailVerified: true")) {
  fail("contactEmailVerified should be true after Cloudflare routing activation");
} else {
  pass("contact email marked verified");
}

if (!config.includes("hello@moldeshoreexcursions.com")) {
  fail("reserved contact email missing from config");
} else {
  pass("reserved contact email present in config");
}

if (/mailto:hello@moldeshoreexcursions\.com/.test(config)) {
  fail("mailto on unverified address in site-config");
} else {
  pass("no mailto in site-config");
}

const footer = readFileSync(path.join(root, "src/components/site-footer.tsx"), "utf8");
const contactPage = readFileSync(path.join(root, "src/app/contact/page.tsx"), "utf8");
if (
  /mailto:hello@moldeshoreexcursions\.com/.test(footer) ||
  (/mailto:\$\{siteConfig\.contactEmail\}/.test(footer) &&
    !footer.includes("contactEmailVerified"))
) {
  fail("footer may expose unverified mailto without gate");
} else {
  pass("footer contact email gated");
}
if (
  contactPage.includes("contactEmailVerified") &&
  !/mailto:hello@moldeshoreexcursions\.com/.test(contactPage)
) {
  pass("contact page gates mailto behind verification");
} else if (/mailto:hello@moldeshoreexcursions\.com/.test(contactPage)) {
  fail("hardcoded mailto on contact page");
} else {
  pass("contact page has no hardcoded unverified mailto");
}

const sitemapSrc = readFileSync(path.join(root, "src/app/sitemap.ts"), "utf8");
if (!sitemapSrc.includes("getSiteRoutes")) {
  fail("sitemap does not use getSiteRoutes");
} else {
  pass("sitemap uses getSiteRoutes including populated months");
}

const monthKeys = [...new Set(rows.map((r) => r.arrival_date.slice(0, 7)))].sort();
if (monthKeys.length !== expected.months) {
  fail(`populated months ${monthKeys.length}, expected ${expected.months}`);
} else {
  pass(`${expected.months} populated Molde months`);
}

const expectedMonths = [
  "2026-06",
  "2026-07",
  "2026-08",
  "2026-09",
  "2027-06",
  "2027-07",
  "2027-08",
  "2027-09",
  "2027-10",
  "2027-12",
  "2028-03",
  "2028-04",
  "2028-05",
  "2028-06",
  "2028-07",
  "2028-08",
  "2028-09",
  "2028-10"
];
if (monthKeys.join(",") !== expectedMonths.join(",")) {
  fail(`month keys ${monthKeys.join(",")} do not match expected set`);
} else {
  pass("month key set matches authority list");
}

const byMonth = {};
for (const row of rows) {
  const key = row.arrival_date.slice(0, 7);
  byMonth[key] = (byMonth[key] || 0) + 1;
}
if ((byMonth[expected.busiest.key] ?? 0) !== expected.busiest.count) {
  fail(
    `busiest ${expected.busiest.key} ${byMonth[expected.busiest.key]}, expected ${expected.busiest.count}`,
  );
} else {
  pass(`busiest month ${expected.busiest.key} has ${expected.busiest.count} calls`);
}
if ((byMonth[expected.light.key] ?? 0) !== expected.light.count) {
  fail(
    `light ${expected.light.key} ${byMonth[expected.light.key]}, expected ${expected.light.count}`,
  );
} else {
  pass(`light month ${expected.light.key} has ${expected.light.count} call`);
}

const provenance = readFileSync(path.join(root, "src/lib/image-provenance.ts"), "utf8");
if (!/romsdalAlps[\s\S]*WRONG_LOCATION|romsdalAlps[\s\S]*PROVENANCE_UNKNOWN/.test(provenance)) {
  fail("romsdalAlps not flagged WRONG_LOCATION or PROVENANCE_UNKNOWN");
} else {
  pass("romsdalAlps provenance flagged");
}

const aor = readFileSync(
  path.join(root, "src/lib/excursions/atlantic-ocean-road-bud.ts"),
  "utf8",
);
if (/Timed for typical Molde port calls/i.test(aor)) {
  fail("Atlantic Ocean Road still uses 'timed for typical port calls' claim");
} else {
  pass("Atlantic Ocean Road logistics language softened");
}
if (!/hours ashore alone|Published hours|do not prove|does not prove/i.test(aor)) {
  fail("Atlantic Ocean Road missing hard-gate buffer language");
} else {
  pass("Atlantic Ocean Road includes hard-gate planning language");
}

console.log(
  "\nINFO: sync source = norway-shore-excursions generated JSON, filter port===molde",
);
if (process.exitCode) {
  console.error("\nQA FAILED");
  process.exit(1);
}
console.log("\nQA PASSED");
