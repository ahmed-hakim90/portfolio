export const shamsStores = {
  slug: "shams-stores",
  name: "Shams Stores",
  pageTitle: "Shams Stores",
  metaDescription:
    "Case study of Shams Stores, an Egyptian WooCommerce store for photo and video gear: mount-based lens categories, product cards, mobile shell, and a checkout phone field. SEO stays on the existing plugin.",
  liveUrl: "https://shams-stores.com/",
  role: "E-commerce development on the live WordPress and WooCommerce store",
  overview: [
    "Shams Stores is an Egyptian shop for cameras, lenses, and video gear. The public site is the existing WooCommerce store, and the work is customization of that store: how people browse, how a lens is grouped, and how checkout asks for a phone number.",
    "The storefront still runs on WordPress, WooCommerce, and the Electro theme. Custom plugins on the live site cover the shell, product cards, shop filters, and checkout presentation. This is not a separate storefront built beside WooCommerce.",
  ],
  responsibilities: [
    "Shopping flow on the catalog, category, and product surfaces.",
    "Lens classification by camera mount, using the categories already in WooCommerce.",
    "Mobile presentation, including the live mobile bar.",
    "Checkout layout, with the phone field kept visible and full width.",
    "Product links and the metadata a shared link shows, without replacing the SEO plugin.",
  ],
  stack: [
    { name: "WordPress", note: "The live store, its pages, and the custom storefront plugins." },
    { name: "WooCommerce", note: "Catalog, cart, and checkout. Purchasing still goes through WooCommerce." },
    { name: "PHP", note: "Theme and plugin behavior on the server." },
    { name: "CSS", note: "Product cards, the mobile shell, and the checkout field layout." },
    { name: "All in One SEO", note: "Already on the store. Canonical URLs and social titles stay on this plugin." },
  ],
  improvements: [
    {
      title: "Shopping experience",
      kind: "Live",
      detail:
        "The production category pages use the store’s own shell, product cards, filters, and header. A lens shopper can move from the Lenses page into a mount without leaving WooCommerce.",
    },
    {
      title: "Lens categories by mount",
      kind: "Live, cleanup still open",
      detail:
        "The Lenses page groups Canon EF, Canon RF, Fujifilm X, Nikon F, Nikon Z, and Sony E. A “Mount to Verify” group is still on that page, so mount classification is not finished.",
    },
    {
      title: "Mobile layout",
      kind: "Live",
      detail:
        "The live theme shell includes a mobile header and a mobile bar. This pass did not add a separate phone screenshot of that bar.",
    },
    {
      title: "Checkout phone field",
      kind: "Live in the checkout stylesheet",
      detail:
        "On the live checkout, the phone field spans the full form width, stays left-to-right, and uses heavier type so the number is readable. An empty cart redirects to the cart page, so this review used the published checkout CSS rather than a filled checkout screenshot.",
    },
    {
      title: "Sharing a product link",
      kind: "Live metadata, image preview not confirmed",
      detail:
        "A sampled product publishes a canonical URL plus an Open Graph title and description through All in One SEO. That is what a shared catalog link can carry. A large preview image was not confirmed on that sample.",
    },
    {
      title: "SEO while the store changes",
      kind: "Live",
      detail:
        "All in One SEO is still the generator. The homepage and a product page keep their own canonical URLs. The shopping changes sit on the theme and plugins rather than replacing that SEO setup.",
    },
  ],
  screenshot: {
    src: "/work/shams-stores/lens-category.jpg",
    width: 1280,
    height: 900,
    alt: "Live Shams Stores Lenses category, with mount groups such as Canon EF, Canon RF, Sony E, and Mount to Verify",
  },
  mark: {
    src: "/work/shams-stores/mark.png",
    width: 512,
    height: 512,
    alt: "",
  },
} as const;
