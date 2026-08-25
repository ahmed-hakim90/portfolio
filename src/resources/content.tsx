import { About, Blog, Gallery, Home, LegalTerms, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahmed",
  lastName: "Abdulhakim",
  name: "Ahmed Abdulhakim",
  role: "Frontend Engineer · Operational Products · Remote",
  avatar: "/me1.jpg",
  email: "ahmedabdulhakim90@gmail.com",
  location: "Africa/Cairo",
  languages: ["Arabic", "English"],
};

const contact = {
  phoneLocal: "01069005019",
  phoneInternational: "+201069005019",
  whatsapp: "https://wa.me/201069005019",
  tel: "tel:+201069005019",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <>Updates on projects and writing.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ahmed-hakim90",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmed-abdulhakim-sayed-471752174/",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ahmed_hakim900",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: contact.whatsapp,
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/me1.jpg",
  label: "Home",
  title: `${person.name} — Frontend Engineer building operational products`,
  description: `${person.name} is a Cairo-based Frontend Engineer building commerce, SaaS, POS, ERP, and operational products from interface architecture through data integration and release.`,
  headline: <>Ahmed Abdulhakim</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Current focus: Shams Stores
        </Text>
      </Row>
    ),
    href: "/work/shams-stores",
  },
  subline: (
    <>
      <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
        I build complete operational products — commerce platforms, SaaS tools, POS and ERP systems, and internal workflows that teams can rely on every day.
      </Text>
      <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak">
        My work starts with the people and process behind the screen. I turn unclear handoffs into responsive interfaces, connect them to secure data and integrations, verify the critical journey, and take the product to a reliable release.
      </Text>
      <Text wrap="balance" variant="body-default-s" onBackground="neutral-alpha-medium">
        Based in Cairo · Arabic and English · working remotely with Sokany on Shams Stores · available for selected remote products and collaborations.
      </Text>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name} — Frontend Engineer building operational products across commerce, SaaS, POS, ERP, and Arabic RTL experiences.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "/schedule",
  },
  intro: {
    display: true,
    title: "Professional story",
    description: (
      <>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
          I&apos;m Ahmed, a Cairo-based Frontend Engineer who builds operational products rather than isolated screens. My work spans commerce, SaaS, point of sale, ERP, marketplaces, and internal tools — products where the interface must reflect real roles, data, permissions, and business rules.
        </Text>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
          I started with client websites and hands-on freelance delivery, then moved toward deeper systems: storefronts connected to WooCommerce, order operations, factory workflows, multi-tenant Supabase products, bilingual RTL platforms, and Cloudflare/Vercel deployments. That progression taught me to ask what happens before and after every button — who owns the step, what can fail, and what the next team needs to see.
        </Text>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
          Today I work remotely with <strong>Sokany</strong> on <strong>Shams Stores</strong>, rebuilding the WooCommerce theme system, cleaning catalog and stock data, improving the mobile buying journey, and creating cross-sell experiences for complete creator setups. Alongside that work, I continue building selected operational products such as Masar Valet and Velora.
        </Text>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak">
          I am strongest when the brief is still messy but the operational problem is real. I can help clarify the workflow, model the product, build the frontend architecture, connect APIs and cloud data, test the critical path, and communicate the work through release. I work in Arabic and English, prefer clear asynchronous collaboration, and remain available for selected remote roles and product engagements.
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Sokany · Shams Stores",
        timeframe: "Aug 2026 – Present",
        role: "Frontend Engineer (Remote)",
        achievements: [
          <>
            Hired this month for remote work with Sokany on the Shams Stores rebuild: Blocksy child theme, catalog and
            stock cleanup, working commerce UX (Quick View, cards, mobile sticky CTA), and cross-sell via Gear Advisor +
            Shoppable Hero.
          </>,
          <>
            Same ops-first craft as Sokany commerce systems — storefront clarity, WooCommerce depth, and delivery that
            survives real traffic.
          </>,
          <>
            Case studies:{" "}
            <a href="/work/shams-stores">Shams Stores</a>,{" "}
            <a href="/work/sokany-store">Sokany Store</a>,{" "}
            <a href="/work/order-management-system-oms">Store OMS</a>.
          </>,
        ],
        images: [
          {
            src: "/shams-stores-hero.jpg",
            alt: "Shams Stores shoppable creator setup hero",
            width: 16,
            height: 9,
          },
          {
            src: "/sokany-store-desktop.png",
            alt: "Sokany Store desktop storefront",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Grand Egyptian Museum",
        timeframe: "Jul 2024 – Jul 2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Implemented the countdown page with custom animations, responsive layout, and bilingual (Arabic/English)
            content — delivered on an urgent timeline.
          </>,
        ],
        images: [],
      },
      {
        company: "Mostaql",
        timeframe: "Jan 2018 – Apr 2023",
        role: "Frontend Developer",
        achievements: [
          <>
            Delivered tailored web solutions for diverse clients — four years of hands-on projects and real-world shipping
            experience.
          </>,
        ],
        images: [],
      },
      {
        company: "ATHEEL Company",
        timeframe: "Jan 2019 – Apr 2020",
        role: "Customer Service",
        achievements: [
          <>
            Built communication, empathy, and a customer-first mindset that carries into how I build software today.
          </>,
        ],
        images: [],
      },
      {
        company: "My Business",
        timeframe: "Mar 2021 – Present",
        role: "Founder",
        achievements: [
          <>
            Ran planning, operations, customer relations, and sales — strong foundations in entrepreneurship and
            decision-making.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Technical Health Institute",
        description: (
          <>
            Associate Degree of Technical Health Insurance (2019–2021). Focus on structured learning alongside hands-on
            career experience.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Front-End Development",
        description: (
          <>
            Building fast, scalable, responsive interfaces with modern JavaScript frameworks and production-ready styling
            systems.
          </>
        ),
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Vue.js" },
          { name: "TypeScript" },
          { name: "JavaScript (ES6+)", icon: "javascript" },
          { name: "HTML5" },
          { name: "CSS3 / SCSS" },
          { name: "Tailwind CSS" },
          { name: "Bootstrap" },
          { name: "Responsive Design" },
          { name: "Mobile-First Development" },
          { name: "SSR / Performance Optimization" },
        ],
      },
      {
        title: "UI / UX & Design Systems",
        description: (
          <>
            Translating product requirements into polished component systems, bilingual interfaces, and SaaS-style user
            experiences.
          </>
        ),
        tags: [
          { name: "shadcn/ui" },
          { name: "Radix UI" },
          { name: "Framer Motion" },
          { name: "Component-Based Architecture" },
          { name: "Design Systems" },
          { name: "RTL/LTR Interfaces" },
          { name: "Modern SaaS & Corporate UI" },
        ],
      },
      {
        title: "State Management & Data",
        description: (
          <>
            Connecting front-end products to real APIs, managing client state, server data, and reliable data-processing
            workflows.
          </>
        ),
        tags: [
          { name: "Zustand" },
          { name: "TanStack Query" },
          { name: "React Query" },
          { name: "REST API Integration" },
          { name: "Webhooks" },
          { name: "JSON Processing" },
        ],
      },
      {
        title: "E-Commerce & Integrations",
        description: (
          <>
            Building commerce systems that connect storefronts, order workflows, automation tools, payment, shipping, and
            external APIs.
          </>
        ),
        tags: [
          { name: "WooCommerce REST API" },
          { name: "Headless Commerce" },
          { name: "Order Management Systems (OMS)" },
          { name: "Payment & Shipping Integrations" },
          { name: "Bosta API" },
          { name: "WhatsApp Automation" },
          { name: "API Integrations" },
        ],
      },
      {
        title: "Backend & Cloud",
        description: (
          <>
            Delivering serverless backends, authentication, storage, and cloud deployments for modern web applications.
          </>
        ),
        tags: [
          { name: "Firebase (Auth / Firestore / Storage)" },
          { name: "Supabase" },
          { name: "Node.js" },
          { name: "Cloudflare Workers" },
          { name: "Vercel" },
          { name: "Serverless Architecture" },
        ],
      },
      {
        title: "Tools & Workflow",
        description: (
          <>
            Working with professional development workflows, code quality tooling, API testing, automation, and delivery
            pipelines.
          </>
        ),
        tags: [
          { name: "Git & GitHub", icon: "github" },
          { name: "GitHub Actions" },
          { name: "CI/CD" },
          { name: "Postman" },
          { name: "VS Code / Cursor" },
          { name: "ESLint & Prettier" },
          { name: "Agile Workflow" },
        ],
      },
      {
        title: "ERP & Business Systems",
        description: (
          <>
            Understanding operational software for factories, inventory, HR, payroll, production, costing, and business
            automation.
          </>
        ),
        tags: [
          { name: "ERP Systems" },
          { name: "Manufacturing Systems" },
          { name: "Inventory Management" },
          { name: "HR & Payroll Systems" },
          { name: "Cost Accounting Systems" },
          { name: "Production Management" },
          { name: "Automation Workflows" },
        ],
      },
      {
        title: "AI & Automation",
        description: (
          <>
            Using AI tools and automation platforms to speed up development, connect systems, and design practical
            business workflows.
          </>
        ),
        tags: [
          { name: "n8n" },
          { name: "OpenRouter" },
          { name: "Ollama" },
          { name: "AI Workflow Automation" },
          { name: "AI Assisted Development" },
          { name: "Prompt Engineering" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing on systems and shipping",
  description: `Case studies by ${person.name} — Sokany commerce, ERP, GovTech, and product engineering notes.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Systems & Case Studies – ${person.name}`,
  description: `Sokany storefront & OMS, Shams Stores rebuild, manufacturing ERP, GovTech RTL portals, industrial B2B hubs, and commerce integrations by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Systems Gallery – ${person.name}`,
  description: `Screens from Sokany storefront & OMS, manufacturing ERP, GovTech portals, and industrial products by ${person.name}.`,
  images: [],
};

const terms: LegalTerms = {
  path: "/terms",
  label: "Terms",
  title: `Site terms and usage – ${person.name}`,
  description: `Content ownership, acceptable use, external links, and contact details for ${person.name}'s portfolio.`,
  sections: [
    {
      title: "Site and content ownership",
      content: (
        <>
          This personal portfolio was designed and developed by {person.name}. Unless stated otherwise, the original copy,
          project narratives, and selected media describe my work and experience. Open-source libraries used by the site
          do not transfer ownership of the original portfolio content.
        </>
      ),
    },
    {
      title: "Acceptable use",
      content: (
        <>
          You may browse and share links to this site for normal personal and professional use. Do not reproduce substantial
          parts of the content, use it commercially, or present it as someone else&apos;s work without written permission.
        </>
      ),
    },
    {
      title: "External links and responsibility",
      content: (
        <>
          This portfolio may link to third-party sites and services. I do not control their content, availability, or privacy
          practices, and you use those destinations at your own discretion.
        </>
      ),
    },
    {
      title: "Updates to these terms",
      content: (
        <>
          I may update this page when the portfolio or its usage terms change. Continued use of the site means you accept
          the current version.
        </>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          For questions about these terms or permission to use specific content, email{" "}
          <a href={`mailto:${person.email}`}>{person.email}</a>.
        </>
      ),
    },
  ],
};

export { person, contact, social, newsletter, home, about, blog, work, gallery, terms };
