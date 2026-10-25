export const masarValet = {
  slug: "masar-valet",
  name: "Masar Valet",
  pageTitle: "Masar Valet",
  metaDescription:
    "Case study of Masar Valet, a Saudi valet operations platform: zones and tickets, payment integrity, a guarded Odoo sync, and Cloudflare deployment.",
  liveUrl: "https://masarvalet.com/",
  role: "Software development, product engineering, and system integration",
  overview: [
    "Masar Valet is a valet parking platform for Saudi operations. A site takes a car in, parks it against a zone and a spot, and hands it back when the guest is ready. The same ticket is what the guest, the valet, and the back office follow.",
    "The engineering work connects that floor workflow to the records around it: who may see a tenant’s data, how a payment is allowed to settle, and how a parking zone lines up with an accounting account. I worked on the product as an engineer.",
  ],
  problem: [
    "Valet teams juggle zones, spots, and a ticket that moves from intake to parked, ready, and delivered. If those states live on paper or in separate chats, the handoff and the amount due drift apart.",
    "The business also needs the operational record and the accounting record to describe the same place. A zone in the valet system and an analytic account in the ledger are easy to rename or duplicate by accident.",
    "Payments add a second failure mode. A card provider can report success twice, or a callback can arrive before anyone has confirmed it is authentic. Those are operational risks the product is built to refuse, not measured customer outcomes.",
  ],
  contributions: [
    {
      title: "Zones, spots, and the ticket",
      kind: "Built",
      detail:
        "Parking zones and spots sit behind the ticket. Intake can start from a QR or NFC asset, and the staff workspace follows the car through parked, ready, and delivered, including the shift that records a collection.",
    },
    {
      title: "Payment integrity",
      kind: "Built, with gates",
      detail:
        "A payment attempt is bound to the ticket amount. Settlement is idempotent, and a capture that arrives after the ticket is already settled is held for review instead of booked again. Network International is the connected card path. Moyasar and Geidea callbacks stay closed until their authenticity check is explicitly turned on. Apple Pay is not enabled.",
    },
    {
      title: "Odoo and analytic accounts",
      kind: "Built, write still gated",
      detail:
        "A zone can sync to an Odoo analytic account. Writing over an existing account’s name or code is blocked unless that rename is explicitly allowed. A controlled write against the live ledger still needs an accountant’s confirmation, so this is not described as a finished production sync.",
    },
    {
      title: "Guest visit and Apple Wallet",
      kind: "Built, phone install not verified",
      detail:
        "The guest follows a visit link rather than a staff login. Vehicle photos are served through short-lived signed URLs. An Apple Wallet pass can be downloaded for an open ticket, and staff can share that link. A pass installed and updated on a real iPhone was not part of the verified record.",
    },
    {
      title: "Tenant data and release",
      kind: "Built",
      detail:
        "Tenant rows are protected with row-level security in Postgres. The public site and the staff app run on Cloudflare Workers, with production builds going through Workers Builds. The canonical public origin is https://masarvalet.com/.",
    },
    {
      title: "Validation and failure handling",
      kind: "Built",
      detail:
        "Pricing treats the grace boundary as inclusive, and that rule is covered by checks. Payment callbacks do not settle while provider authenticity is unverified. Plate reading retries only transient failures, and only a bounded number of times.",
    },
  ],
  architecture: [
    { name: "Interface", note: "TanStack Start and React, in TypeScript, with Arabic and English staff and guest screens." },
    { name: "Application", note: "Server functions on Cloudflare Workers. The staff app is served from app.masarvalet.com." },
    { name: "Data and access", note: "Supabase Postgres. Authentication and role checks sit on the server, and tenant tables use row-level security." },
    { name: "Payments", note: "Network International for the connected card flow. Other providers remain behind an authenticity gate." },
    { name: "Accounting", note: "Odoo, for zone sync into analytic accounts, with existing-account writes blocked by default." },
    { name: "Wallet", note: "Apple Wallet pass generation for an open ticket. Device installation is a separate, unverified step." },
  ],
  value: [
    "Operators can see a ticket, its spot, and its state in one workspace instead of reconstructing the visit from messages.",
    "Payment settlement refuses a second booking of the same capture, which keeps the operational record and the money record from diverging silently.",
    "Zone sync gives accounting a path to the same places the valets use, without letting an automatic job rename an account that accountants already rely on.",
    "Guests get a link for the visit, and private vehicle photos are not left on a permanent public URL.",
  ],
  screenshot: {
    src: "/work/masar-valet/staff-desktop.jpg",
    width: 1440,
    height: 900,
    alt: "Masar Valet staff workspace showing a fixture ticket that is ready for pickup, with spot, elapsed time, and an unpaid amount",
  },
  mark: {
    src: "/work/masar-valet/mark.webp",
    width: 256,
    height: 256,
    alt: "",
  },
} as const;
