export const haretElSaada = {
  slug: "haret-el-saada",
  name: "Haret El Saada",
  arabicName: "حارة السعادة",
  pageTitle: "Haret El Saada",
  metaDescription:
    "Case study of Haret El Saada (حارة السعادة): WooCommerce customization for a Sokany appliances store, including category UX, checkout styling, SEO pages, and mobile overflow fixes.",
  liveUrl: "https://haretalsaada.com/",
  role: "E-commerce development, UX, WooCommerce customization, SEO, responsive optimization, and production troubleshooting",
  quote: "كل اللي نفسك فيه.. في مكان واحد",
  overview: [
    "Haret El Saada is an Egyptian online store specializing in Sokany appliances for kitchens, personal care, and home use. Shoppers are buying for their own household. The storefront already tells them they can pay cash on delivery and that shipping covers Egyptian governorates.",
    "The shop runs on WordPress and WooCommerce. The work was customization and optimization of that live store: a more compact shopping path, clearer category entry points, checkout presentation, SEO pages, and fixes for layout bugs that showed up in production. It is not a new commerce platform built beside WooCommerce.",
  ],
  challenges: [
    "Category navigation and product discovery needed a shorter path from the homepage into the right stall.",
    "Product cards needed to stay compact and consistent across offers, kitchen, personal care, and home appliances.",
    "Homepage product sections and shopping shortcuts had to stay obvious on a long Arabic page.",
    "Mobile layout had horizontal overflow, including on the contact form and checkout.",
    "Checkout needed a clearer presentation without changing how WooCommerce takes the order.",
    "SEO copy was spread across the homepage, category pages, and a dedicated shopping guide, and it had to stay internally linked.",
    "Social profiles and a WhatsApp conversation needed to stay reachable while someone is browsing.",
  ],
  solutions: [
    {
      title: "Homepage and category UX",
      kind: "Customization",
      detail:
        "The homepage now opens into four stalls — kitchen, personal care, home, and offers — each one a shortcut into its WooCommerce category, with the existing catalog still behind those links.",
    },
    {
      title: "Responsive product grids and cards",
      kind: "Customization",
      detail:
        "Product cards were tightened so the model, price, and add-to-cart action sit in a consistent block. The grid reflows for smaller screens instead of introducing a separate storefront.",
    },
    {
      title: "Cart and checkout styling",
      kind: "Customization",
      detail:
        "Cart and checkout presentation was restyled around the store’s orange stall look. WooCommerce still owns the cart, customer fields, and order placement.",
    },
    {
      title: "Technical SEO",
      kind: "Optimization",
      detail:
        "Canonical URLs, indexability, and page metadata were checked for the homepage, category pages, and the shopping guide. Existing category descriptions were left in place.",
    },
    {
      title: "Arabic shopping guide",
      kind: "Added on the live store",
      detail:
        "A shopping guide in Arabic, with FAQ sections and internal links back into the catalog, sits at /shopping-guide/. It explains how to choose and order. It does not replace the shop.",
    },
    {
      title: "WhatsApp and social access",
      kind: "Added on the live store",
      detail:
        "A floating WhatsApp shortcut uses the store’s published number. Facebook and Instagram stay visible from the shop so a visitor can leave the page without hunting the footer.",
    },
    {
      title: "RTL and mobile layout",
      kind: "Optimization",
      detail:
        "Arabic RTL reading order stays intact. The reported horizontal overflow on the contact form and checkout was fixed so those screens stay inside the viewport.",
    },
  ],
  stack: [
    { name: "WordPress", note: "The store and its pages, including the shopping guide." },
    { name: "WooCommerce", note: "Catalog, cart, checkout, and the purchase flow that was left in place." },
    { name: "PHP", note: "Theme and WooCommerce customization on the server." },
    { name: "CSS", note: "Compact cards, checkout presentation, and the mobile overflow fixes." },
    {
      name: "JavaScript",
      note: "Only where the theme and WooCommerce already use it. No separate frontend framework was added.",
    },
    { name: "LiteSpeed Cache", note: "Caching on the production store." },
  ],
  results: [
    "Selected pages were tested on mobile and desktop, including the homepage stalls, category entry, the shopping guide, and the screens that had been overflowing.",
    "The reported horizontal overflow on the contact form and checkout was fixed.",
    "Internal links and SEO metadata were checked on the pages in scope, including canonical URLs and the shopping guide.",
    "Existing category descriptions and WooCommerce purchasing behavior were preserved.",
  ],
  cover: {
    src: "/work/haret-el-saada/hero.webp",
    width: 1024,
    height: 572,
    alt: "Haret El Saada homepage banner: an illustrated market alley of appliance stalls",
  },
  mark: {
    src: "/work/haret-el-saada/mark.jpg",
    width: 300,
    height: 200,
    alt: "حارة السعادة logo, a smiling orange market stall",
  },
  gallery: [
    {
      src: "/work/haret-el-saada/kitchen.webp",
      width: 257,
      height: 250,
      alt: "Kitchen stall artwork used on the Haret El Saada homepage",
      label: "Kitchen",
    },
    {
      src: "/work/haret-el-saada/care.webp",
      width: 257,
      height: 250,
      alt: "Personal care stall artwork used on the Haret El Saada homepage",
      label: "Personal care",
    },
    {
      src: "/work/haret-el-saada/home.webp",
      width: 600,
      height: 600,
      alt: "Home appliances stall artwork used on the Haret El Saada homepage",
      label: "Home",
    },
    {
      src: "/work/haret-el-saada/offers.webp",
      width: 257,
      height: 250,
      alt: "Offers stall artwork used on the Haret El Saada homepage",
      label: "Offers",
    },
  ],
} as const;
