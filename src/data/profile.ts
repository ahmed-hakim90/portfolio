export const profile = {
  name: "Ahmed Abdulhakim",
  handle: "",
  github: "ahmed-hakim90",
  title: "Frontend Engineer",
  tagline:
    "I build operational products — commerce, SaaS, POS, ERP, and the workflows teams rely on every day.",
  location: "Cairo, Egypt",
  openTo: "Remote · selected products",
  email: "ahmedabdulhakim90@gmail.com",
  site: "portfolio-hakim90.vercel.app",
  summary: [
    "Cairo-based Frontend Engineer. I build complete operational products rather than isolated screens: commerce platforms, SaaS tools, point of sale, ERP, and internal workflows.",
    "The work starts with the people and the process. I turn unclear handoffs into responsive interfaces, connect them to real data and integrations, and take the critical journey through to release.",
    "I work remotely with Sokany on Shams Stores, and I keep building selected products such as Masar Valet and Velora. Arabic and English. Available for selected remote products and collaborations.",
  ],
  links: {
    github: "https://github.com/ahmed-hakim90",
    linkedin: "https://www.linkedin.com/in/ahmed-abdulhakim-sayed-471752174/",
    x: "https://x.com/ahmed_hakim900",
    whatsapp: "https://wa.me/201069005019",
    hinew: "https://hi.new/hakimo",
  },
} as const;

export type Track = "interface" | "commerce" | "systems" | "data" | "cloud" | "product";

export const tracks: { id: Track; label: string; blurb: string }[] = [
  { id: "interface", label: "Interfaces", blurb: "React, Next.js, RTL, design systems, mobile-first UI" },
  { id: "commerce", label: "Commerce", blurb: "WooCommerce, storefronts, catalogs, cross-sell" },
  { id: "systems", label: "Systems", blurb: "POS, ERP, OMS, valet, rental, and course operations" },
  { id: "data", label: "Data", blurb: "Supabase, Firebase, REST, WooCommerce, Odoo" },
  { id: "cloud", label: "Cloud", blurb: "Vercel, Cloudflare, release checks, CI" },
  { id: "product", label: "Product", blurb: "Roles, workflows, bilingual delivery, ownership" },
];

export const domains = [
  { id: "commerce", label: "Commerce", note: "Storefronts, WooCommerce, catalogs, cross-sell" },
  { id: "ops", label: "Operations", note: "POS, ERP, OMS, valet, rental, courses" },
  { id: "gov", label: "GovTech", note: "Arabic RTL public platforms and portals" },
  { id: "marketplace", label: "Marketplaces", note: "Multi-vendor commerce and local trade" },
  { id: "health", label: "Health", note: "Ministry and quarantine information portals" },
  { id: "industrial", label: "Industrial", note: "Manufacturing systems and B2B machinery" },
] as const;

export type DomainId = (typeof domains)[number]["id"];
