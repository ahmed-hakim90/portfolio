import { About, Blog, Gallery, Home, LegalTerms, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahmed",
  lastName: "Abdulhakim",
  name: "Ahmed Abdulhakim",
  role: "Frontend Engineer · ERP & E-Commerce Systems Builder",
  avatar: "/me1.jpg",
  email: "ahmedabdulhakim90@gmail.com",
  location: "Africa/Cairo",
  languages: ["Arabic", "English"],
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
    link: "https://wa.me/201552900017",
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
  title: `${person.name} — ERP & E-Commerce Systems Builder`,
  description: `${person.name} builds ERP platforms, manufacturing systems, operational software, headless commerce, and modern web products.`,
  headline: <>Ahmed Abdulhakim</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Hakimo Production System
        </Text>
      </Row>
    ),
    href: "/work/hakimo-production-system",
  },
  subline: (
    <>
      <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
        I create high-performance storefronts using Next.js and connect them with WooCommerce APIs and external systems like
        OMS and ERP.
      </Text>
      <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak">
        I don&apos;t just build UI — I solve real problems like slow loading, unstable APIs (502 errors), and inefficient
        order workflows.
      </Text>
      <Text wrap="balance" variant="body-default-s" onBackground="neutral-alpha-medium">
        Focused on performance, scalability, and clean system architecture.
      </Text>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name} — frontend engineer, ERP systems builder, e-commerce architect, and operations software builder.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/201552900017",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I build manufacturing systems, ERP platforms, operational software, headless commerce solutions, and modern web
        products. My work sits where frontend engineering meets real business operations: production workflows, order
        lifecycle tools, KPI dashboards, role-based systems, integrations, and mobile-first RTL interfaces. I care about
        fast UI, stable architecture, and software that helps teams run the business more clearly.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
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
  title: "Writing on products and factories",
  description: `Articles by ${person.name} — including Hakimo ERP and Arabic technical posts.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Systems & Case Studies – ${person.name}`,
  description: `ERP platforms, operations software, headless commerce, and product systems by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Screenshots from portfolio projects (built from work MDX).`,
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

export { person, social, newsletter, home, about, blog, work, gallery, terms };
