import { About, Blog, Gallery, Home, LegalTerms, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahmed",
  lastName: "Abdulhakim",
  name: "Ahmed Abdulhakim",
  role: "Frontend Engineer · Remote with Sokany · Shams Stores",
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
  title: `${person.name} — Frontend Engineer · Shams Stores (remote with Sokany)`,
  description: `${person.name} is a Frontend Engineer hired this month for remote work with Sokany on Shams Stores — theme, catalog, commerce UX, and cross-sell — open to ship more remote tasks.`,
  headline: <>Ahmed Abdulhakim</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Shams Stores rebuild
        </Text>
      </Row>
    ),
    href: "/work/shams-stores",
  },
  subline: (
    <>
      <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
        Just started this month — remote Frontend Engineer with Sokany, deep in Shams Stores: new theme, clean data,
        a storefront that actually sells, and cross-sell that builds a full creator setup.
      </Text>
      <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak">
        I don&apos;t wait for perfect tickets. Theme swap, catalog cleanup, Quick View, Gear Advisor, sticky mobile
        checkout — if it moves revenue or removes chaos, I ship it.
      </Text>
      <Text wrap="balance" variant="body-default-s" onBackground="neutral-alpha-medium">
        Cairo timezone · Arabic & English · open for more remote missions. Send the task; I&apos;ll take it live.
      </Text>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name} — Frontend Engineer, remote with Sokany on Shams Stores since Aug 2026. Open for more remote work; ships briefs end to end.`,
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
    title: "The short version",
    description: (
      <>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
          I&apos;m Ahmed — Cairo-based, remote by default. This month I started with{" "}
          <strong>Sokany</strong> on <strong>Shams Stores</strong>: the screens where a photographer decides to buy,
          not just browse. New theme, honest catalog, commerce UX that works on a phone, cross-sell that builds a full
          setup.
        </Text>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
          Before that path I shipped Sokany-style storefronts & OMS thinking, ERP for factories, GovTech RTL portals,
          and industrial B2B hubs. Same habit everywhere: less theater, more &quot;it&apos;s live.&quot;
        </Text>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
          Give me the task — theme, bug, API, dashboard, data cleanup, full rebuild — and I own it from fuzzy brief to
          production. Async updates, Arabic & English, no half-wired buttons.
        </Text>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak">
          Still open for more remote collaborations alongside Shams. WhatsApp, email, or a call — send the brief; I&apos;ll
          answer with a plan, then with pixels that ship.
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
  title: `شروط الموقع وسياسة الاستخدام – ${person.name}`,
  description: `ملكية المحتوى، قواعد الاستخدام، وحقوق ${person.name} على هذا الموقع.`,
  sections: [
    {
      title: "ملكية الموقع والمحتوى",
      content: (
        <>
          هذا الموقع شخصي وتم تصميمه وتطويره بواسطة {person.name}. النصوص، الصور، والمشاريع المعروضة هنا تعبّر عن
          عملي وتجربتي ما لم يُذكر غير ذلك. استخدام القالب والمكتبات مفتوحة المصدر لا يعني تنازلي عن حقوقي في المحتوى
          الأصلي الذي أضيفه.
        </>
      ),
    },
    {
      title: "استخدام الموقع",
      content: (
        <>
          يُسمح بالاطلاع على الموقع للأغراض الشخصية والمهنية الطبيعية. لا يجوز إعادة إنتاج المحتوى أو نسخ أجزاء كبيرة منه
          دون إذن كتابي، سواء لأغراض تجارية أو نشرها كأنها ملك لغيري. يُحظر أي استخدام قد يسيء إلى الموقع أو إلى طرف ثالث.
        </>
      ),
    },
    {
      title: "الروابط الخارجية والمسؤولية",
      content: (
        <>
          قد يحتوي الموقع على روابط لمواقع أو خدمات خارجية؛ أنا غير مسؤول عن محتواها أو سياسات الخصوصية الخاصة بها.
          استخدامك لتلك الروابط يكون على مسؤوليتك.
        </>
      ),
    },
    {
      title: "التعديلات على هذه الشروط",
      content: (
        <>
          أحتفظ بحق تحديث هذه الصفحة عند الحاجة. تاريخ آخر مراجعة يُذكر أسفل النص عند التحديث. الاستمرار في استخدام الموقع
          بعد أي تعديل يعني موافقتك على النسخة الحالية.
        </>
      ),
    },
    {
      title: "التواصل",
      content: (
        <>
          لأي استفسار بخصوص هذه الشروط أو طلب إذن لاستخدام محتوى معيّن، يمكنك التواصل عبر البريد:{" "}
          <a href={`mailto:${person.email}`}>{person.email}</a>.
        </>
      ),
    },
  ],
};

export { person, contact, social, newsletter, home, about, blog, work, gallery, terms };
