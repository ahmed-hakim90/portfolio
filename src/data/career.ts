import type { DomainId, Track } from "./profile";

export type Role = {
  id: string;
  company: string;
  url?: string;
  title: string;
  kind: "full-time" | "contract" | "founding" | "lead";
  location: string;
  /** inclusive, YYYY-MM */
  start: string;
  /** inclusive, YYYY-MM — null means still running */
  end: string | null;
  summary: string;
  domains: DomainId[];
  /** how much each track was exercised in this role, 0–3 */
  weights: Partial<Record<Track, number>>;
  highlights: string[];
  stack: string[];
};

/** Ordered newest-first. */
export const roles: Role[] = [
  {
    id: "sokany",
    company: "Sokany · Shams Stores",
    url: "https://www.shams-stores.com/",
    title: "Frontend Engineer",
    kind: "full-time",
    location: "Remote",
    start: "2026-08",
    end: null,
    summary:
      "Remote frontend work on Sokany commerce: the Shams Stores rebuild, the Arabic storefront, and the order desk behind it.",
    domains: ["commerce", "ops"],
    weights: { interface: 3, commerce: 3, systems: 2, data: 2, cloud: 2, product: 2 },
    highlights: [
      "Rebuilding Shams Stores out of a heavy theme: Blocksy child theme, catalog and stock cleanup, Quick View, product cards, and a mobile sticky call to action.",
      "Cross-sell for complete creator setups through Gear Advisor and a shoppable hero that links equipment in the photo to WooCommerce products.",
      "Sokany Store: an Arabic RTL headless storefront on Next.js, with WooCommerce kept as the commerce backend.",
      "Store OMS: order confirmation, warehouse handoff, shipments, returns, roles, and analytics across WooCommerce, Bosta, WhatsApp, and Firebase.",
    ],
    stack: ["Next.js", "TypeScript", "WooCommerce", "WordPress", "PHP", "Firebase", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "studio",
    company: "My Business",
    title: "Founder",
    kind: "founding",
    location: "Cairo, Egypt",
    start: "2021-03",
    end: null,
    summary:
      "Planning, delivery, and customer relationships for selected operational products built alongside client work.",
    domains: ["ops", "marketplace", "gov", "industrial"],
    weights: { interface: 2, systems: 2, data: 1, cloud: 1, product: 2 },
    highlights: [
      "Own planning, operations, customer relations, and sales for the products I take on directly.",
      "Shipped operational systems including Masar Valet, Velora POS, Rentara, Souqna, Lin Studio, and the HAKIMO production system.",
      "Public Arabic platforms for Egypt Vision themes, agriculture initiatives, Nile Health, Cairo Quarantine, and OIS Machinery.",
    ],
    stack: ["React", "Next.js", "TypeScript", "TanStack Start", "Supabase", "PostgreSQL", "Cloudflare Workers", "Vercel", "Tailwind CSS"],
  },
  {
    id: "gem",
    company: "Grand Egyptian Museum",
    url: "https://ahmed-hakim90.github.io/timer.github.io/",
    title: "Frontend Developer",
    kind: "contract",
    location: "Cairo, Egypt",
    start: "2024-07",
    end: "2024-07",
    summary: "Opening countdown page: bilingual content, motion, and a responsive layout on an urgent timeline.",
    domains: ["gov"],
    weights: { interface: 3, cloud: 2, product: 1 },
    highlights: [
      "Implemented the countdown with custom animations, a responsive layout, and Arabic/English content.",
      "Shipped it through a short holiday deadline without dropping either language.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "mostaql",
    company: "Mostaql",
    url: "https://mostaql.com",
    title: "Frontend Developer",
    kind: "contract",
    location: "Remote",
    start: "2018-01",
    end: "2023-04",
    summary: "Four years of client websites and small products, shipped directly with the people who asked for them.",
    domains: ["commerce"],
    weights: { interface: 2, commerce: 1, cloud: 1, product: 1 },
    highlights: [
      "Delivered tailored web projects for clients across marketing sites and early product experiments.",
      "Early public pieces from this stretch include Brief for Business, Khatwa, and a personal site used to learn shipping end to end.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: "atheel",
    company: "ATHEEL Company",
    title: "Customer Service",
    kind: "full-time",
    location: "Cairo, Egypt",
    start: "2019-01",
    end: "2020-04",
    summary: "Customer-facing work that still shapes how I treat the person on the other side of a workflow.",
    domains: [],
    weights: { product: 1 },
    highlights: [
      "Built communication, empathy, and a customer-first habit that carries into how I scope and ship software.",
    ],
    stack: [],
  },
];

export type Milestone = {
  /** YYYY-MM */
  month: string;
  roleId: string;
  label: string;
};

/** Dated shipping events. These add heat on top of role weights. */
export const milestones: Milestone[] = [
  { month: "2022-06", roleId: "mostaql", label: "Brief for Business landing shipped" },
  { month: "2023-06", roleId: "mostaql", label: "Khatwa freelancer–client marketplace" },
  { month: "2023-09", roleId: "studio", label: "Personal site, shipped end to end" },
  { month: "2024-07", roleId: "gem", label: "Grand Egyptian Museum countdown, Arabic and English" },
  { month: "2025-02", roleId: "studio", label: "HAKIMO CV portfolio live on Vercel" },
  { month: "2025-08", roleId: "studio", label: "Sokany Store Arabic RTL storefront" },
  { month: "2025-10", roleId: "studio", label: "Store OMS for confirmation, shipping, and returns" },
  { month: "2025-11", roleId: "studio", label: "HAKIMO production system for factory lines" },
  { month: "2026-04", roleId: "studio", label: "Cairo Quarantine portal in Arabic, English, and Chinese" },
  { month: "2026-05", roleId: "studio", label: "OIS Machinery B2B hub and Vision 2030 platforms" },
  { month: "2026-06", roleId: "studio", label: "Souqna multi-vendor marketplace case study" },
  { month: "2026-08", roleId: "sokany", label: "Shams Stores rebuild: catalog, mobile commerce, cross-sell" },
  { month: "2026-08", roleId: "studio", label: "Masar Valet, Velora, Rentara, and Arkan Studio" },
];

export const education = {
  degree: "Associate Degree, Technical Health Insurance",
  school: "Technical Health Institute",
  period: "2019 – 2021",
  notes: [
    "Studied alongside client delivery and the start of my own product work.",
  ],
};
