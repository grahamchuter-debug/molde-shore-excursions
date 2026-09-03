/**
 * Image provenance registry for Molde Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status:
    | "KEEP"
    | "REPLACE"
    | "WRONG_LOCATION"
    | "DUPLICATE"
    | "PROVENANCE_UNKNOWN"
    | "BROKEN";
  notes: string;
};

export const moldeImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Molde_Hafen.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Molde harbour. Rights later-hardening.",
  },
  {
    key: "atlanticOceanRoad",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Storseisundet_bridge.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Storseisundet bridge on the Atlantic Ocean Road.",
  },
  {
    key: "atlanticOceanRoadCoast",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Fv64_Storseisundet_bru_02.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Atlantic Ocean Road / Storseisundet coastal bridge.",
  },
  {
    key: "budFishingVillage",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Sj%C3%B8hus%2C_Bud.JPG",
    status: "KEEP",
    notes: "Wikimedia Commons. Bud sjøhus. Rights later-hardening.",
  },
  {
    key: "moldeHarbour",
    urlOrPath: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Molde_Hafen.jpg",
    status: "KEEP",
    notes: "Same verified Molde harbour asset as hero.",
  },
  {
    key: "mountVarden",
    urlOrPath: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Molde_P9250493.JPG",
    status: "KEEP",
    notes: "Wikimedia Commons. Molde outlook suitable for Mount Varden / town panorama.",
  },
  {
    key: "romsdalAlps",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Fv64_Storseisundet_bru_02.jpg",
    status: "WRONG_LOCATION",
    notes:
      "Asset is Storseisundet bridge, not Romsdal Alps mountains. Alt corrected; removed from city/Varden gallery in favour of mountVarden. Prefer atlanticOceanRoadCoast key for coastal use.",
  },
  {
    key: "cityRoses",
    urlOrPath: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Molde_Hafen.jpg",
    status: "KEEP",
    notes:
      "Harbour waterfront, not a rose-garden close-up. Alt text made honest; no new images authorised.",
  },
  {
    key: "cityVardenTour",
    urlOrPath: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Molde_P9250493.JPG",
    status: "KEEP",
    notes:
      "Remounted from harbour duplicate to Mount Varden / town panorama asset already in repo.",
  },
  {
    key: "sisterPortCards",
    urlOrPath:
      "src/lib/site-images.ts flam/bergen/stavanger/alesund related-port cards",
    status: "KEEP",
    notes:
      "Related-port assets in explore-norwegian-ports. Not labelled as Molde local.",
  },
] as const;
