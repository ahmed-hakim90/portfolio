import type { DomainId } from "./profile";

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  featured: boolean;
  domains: DomainId[];
  company?: string;
  role?: string;
  link?: string;
  github?: string;
  favicon?: string;
  /** Opens a written case study at /projects/[slug]. */
  caseStudy?: boolean;
  stack: string[];
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "masar-valet",
    name: "Masar Valet",
    blurb: "Valet operations for operators, drivers, and guests",
    description:
      "Saudi valet platform for zones, tickets, and guest pickup. QR and NFC intake, signed vehicle photos, and payment, wallet, and Odoo paths that stay gated until each provider is activated.",
    featured: true,
    domains: ["ops"],
    role: "Product engineering",
    link: "https://masarvalet.com/",
    favicon: "/work/masar-valet/mark.webp",
    caseStudy: true,
    stack: ["TanStack Start", "TypeScript", "Supabase", "Cloudflare Workers"],
  },
  {
    slug: "shams-stores",
    name: "Shams Stores",
    blurb: "Camera and creator-gear store, rebuilt for real buying",
    description:
      "Operational rebuild of an Egyptian WooCommerce store: theme architecture, catalog and stock cleanup, mobile commerce, and cross-sell paths that sell a camera with the lens and accessories around it.",
    featured: true,
    domains: ["commerce"],
    company: "Sokany",
    role: "Frontend Engineer",
    link: "https://www.shams-stores.com/",
    favicon: "https://www.shams-stores.com/favicon.ico",
    stack: ["WordPress", "WooCommerce", "PHP", "REST APIs"],
  },
  {
    slug: "haret-el-saada",
    name: "Haret El Saada",
    blurb: "Sokany appliances, shaped into a compact shop",
    description:
      "Egyptian WooCommerce store for Sokany kitchen, personal-care, and home appliances. Category shortcuts, tighter product cards, checkout styling, SEO pages, and mobile overflow fixes on the live theme.",
    featured: true,
    domains: ["commerce"],
    role: "E-commerce development",
    link: "https://haretalsaada.com/",
    favicon: "/work/haret-el-saada/mark.jpg",
    caseStudy: true,
    stack: ["WordPress", "WooCommerce", "PHP", "CSS", "LiteSpeed Cache"],
  },
  {
    slug: "velora",
    name: "Velora",
    blurb: "Arabic-first POS and light ERP",
    description:
      "Multi-location point of sale for cafés, restaurants, and retail: sales, shifts, inventory, purchasing, recipes, loyalty, accounting, reports, online orders, and tenant administration.",
    featured: true,
    domains: ["ops", "commerce"],
    role: "Frontend & Product Engineer",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    slug: "store-oms",
    name: "Store OMS",
    blurb: "Order desk for confirmation, warehouse, and returns",
    description:
      "Operations workspace for Sokany commerce: order confirmation, warehouse handoff, shipments, returns, roles, and analytics. It sits across WooCommerce, Bosta, WhatsApp, and Firebase.",
    featured: true,
    domains: ["ops", "commerce"],
    company: "Sokany",
    role: "Frontend Engineer",
    link: "https://workflow-management-ecommerce.vercel.app/",
    stack: ["Next.js", "Firebase", "WooCommerce", "Bosta API"],
  },
  {
    slug: "sokany-store",
    name: "Sokany Store",
    blurb: "Arabic RTL headless storefront",
    description:
      "Production storefront for Sokany Elmaghraby. Next.js and the WooCommerce REST API, so the catalog stays in WooCommerce while the shop itself is a faster mobile-first experience.",
    featured: true,
    domains: ["commerce"],
    company: "Sokany",
    role: "Frontend Engineer",
    link: "https://sokany.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WooCommerce"],
  },
  {
    slug: "hakimo-production",
    name: "HAKIMO Production System",
    blurb: "Manufacturing ERP for lines, reports, and cost",
    description:
      "Mobile-first Arabic system for production teams: lines, daily reports, dynamic permissions, cost and KPI dashboards, HR workflows, and approvals.",
    featured: true,
    domains: ["industrial", "ops"],
    role: "Frontend & Product Engineer",
    link: "https://production-line.vercel.app/",
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    slug: "souqna",
    name: "Souqna",
    blurb: "Local multi-vendor marketplace",
    description:
      "Arabic-first marketplace connecting customers, merchants, couriers, and operators. Catalog, stock, orders, wallets, and payouts stay isolated per merchant.",
    featured: true,
    domains: ["marketplace", "commerce"],
    role: "Frontend & Product Engineer",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    slug: "rentara",
    name: "Rentara",
    blurb: "Saudi rental operations",
    description:
      "Bilingual system for units, contracts, invoices, payments, debt aging, permissions, and a controlled Odoo sync. Imports preview before they commit.",
    featured: true,
    domains: ["ops"],
    role: "Frontend & Product Engineer",
    stack: ["Next.js", "TypeScript", "Supabase", "Odoo XML-RPC"],
  },
  {
    slug: "lin-studio",
    name: "Lin Studio",
    blurb: "Course booking and teacher operations",
    description:
      "Mobile-first bilingual platform for course discovery, guest booking, payment-proof review, demand, and teacher operations.",
    featured: false,
    domains: ["ops"],
    role: "Frontend & Product Engineer",
    stack: ["TanStack Start", "TypeScript", "Supabase", "React"],
  },
  {
    slug: "maghrabi-lista",
    name: "MAGHRABI LISTA",
    blurb: "Catalog workspace for product files",
    description:
      "Internal workspace that turns product files into searchable operational data, with exports and AI-assisted processing. Private catalogs stay out of the public write-up.",
    featured: false,
    domains: ["commerce", "ops"],
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "Firebase", "AI SDK"],
  },
  {
    slug: "arkan-studio",
    name: "Arkan Studio",
    blurb: "Bilingual flagship for a systems studio",
    description:
      "Systems Atlas, interactive control rooms, a project builder, a Supabase CMS, a lead pipeline, a media library, and hardened public APIs.",
    featured: false,
    domains: ["ops"],
    role: "Frontend & Product Engineer",
    stack: ["Next.js", "TypeScript", "next-intl", "Supabase"],
  },
  {
    slug: "ois-machinery",
    name: "OIS Machinery",
    blurb: "Industrial B2B hub for machinery",
    description:
      "Catalog, auxiliary parts, services, and a company profile for turnkey industrial work, with WhatsApp and email as the lead path.",
    featured: false,
    domains: ["industrial"],
    link: "https://oismachinery.com",
    favicon: "https://oismachinery.com/favicon.ico",
    stack: ["React", "TypeScript", "TanStack Start"],
  },
  {
    slug: "cairo-quarantine",
    name: "Cairo Quarantine",
    blurb: "Traveler portal in Arabic, English, and Chinese",
    description:
      "Services, vaccines, offices, PDFs, and WhatsApp for the Cairo Quarantine Administration. RTL-aware Next.js interface.",
    featured: false,
    domains: ["health", "gov"],
    link: "https://cairo-quarantine-management.vercel.app/ar",
    stack: ["Next.js", "TypeScript", "Vercel"],
  },
  {
    slug: "egypt-vision-2030",
    name: "Egypt Vision 2030",
    blurb: "National narrative platform",
    description:
      "Arabic RTL platform for ministry comparisons, project pages, a gallery, and digital-transformation notes. The public demo URL is environment-gated.",
    featured: false,
    domains: ["gov"],
    stack: ["React", "TanStack Start", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "agriculture-2030",
    name: "Agriculture 2030",
    blurb: "Projects and initiatives for agriculture",
    description:
      "GovTech discovery for agriculture projects: filters, detail pages, and Vision 2030 indicators in an Arabic interface.",
    featured: false,
    domains: ["gov"],
    link: "https://zra3a-2030.hakim90.workers.dev/",
    stack: ["React", "TypeScript", "TanStack Start", "Tailwind CSS"],
  },
  {
    slug: "nile-health",
    name: "Nile Health",
    blurb: "Ministry health portal concept",
    description:
      "Arabic RTL portal concept with central search, digital services, national campaigns, and official health information.",
    featured: false,
    domains: ["health", "gov"],
    link: "https://nile-health-portal.hakim90.workers.dev/",
    stack: ["React", "TypeScript"],
  },
  {
    slug: "woocommerce-api",
    name: "WooCommerce API layer",
    blurb: "Stable catalog and order payloads",
    description:
      "Next.js API layer that steadies WooCommerce catalog and order data for Sokany Store and Store OMS.",
    featured: false,
    domains: ["commerce"],
    company: "Sokany",
    stack: ["Next.js", "WooCommerce", "REST APIs"],
  },
  {
    slug: "gem-countdown",
    name: "GEM Countdown",
    blurb: "Grand Egyptian Museum opening timer",
    description:
      "Bilingual countdown with custom motion and a responsive layout, delivered on a short timeline.",
    featured: false,
    domains: ["gov"],
    link: "https://ahmed-hakim90.github.io/timer.github.io/",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "hakimo-cv",
    name: "HAKIMO CV",
    blurb: "Arabic personal site",
    description: "Arabic RTL personal site and CV, with the public portfolio preview on Vercel.",
    featured: false,
    domains: ["ops"],
    link: "https://hakimo-cv.vercel.app/",
    stack: ["Next.js", "MDX", "Vercel"],
  },
  {
    slug: "khatwa",
    name: "Khatwa",
    blurb: "Early freelancer–client marketplace",
    description: "Client-delivery marketplace with Mada payments, from the Mostaql years.",
    featured: false,
    domains: ["marketplace"],
    link: "https://ahmed-hakim90.github.io/khatwa/",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "brief-for-business",
    name: "Brief for Business",
    blurb: "Early marketing landing",
    description: "Semantic HTML, Bootstrap, and custom CSS across breakpoints.",
    featured: false,
    domains: ["commerce"],
    link: "https://ahmed-hakim90.github.io/khalil.github.io/",
    stack: ["HTML", "CSS", "Bootstrap"],
  },
  {
    slug: "personal-site",
    name: "Personal Site",
    blurb: "First site shipped end to end",
    description: "A small personal site used to learn the DOM, layout, and finishing a release.",
    featured: false,
    domains: ["ops"],
    link: "https://ahmed-hakim90.github.io/Personal/",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const featured = projects.filter((p) => p.featured);
export const tools = projects.filter((p) => !p.featured);
