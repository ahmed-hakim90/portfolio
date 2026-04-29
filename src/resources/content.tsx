import { About, Blog, Gallery, Home, LegalTerms, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahmed",
  lastName: "Abdulhakim",
  name: "Ahmed Abdulhakim",
  role: "Frontend Engineer · fast, reliable eCommerce systems",
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
  title: `${person.name}'s Portfolio`,
  description: `${person.name} — frontend engineer building fast, reliable eCommerce. Next.js, WooCommerce, OMS/ERP integrations, performance and stability.`,
  headline: <>Frontend Engineer building fast, reliable eCommerce systems</>,
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
  description: `Meet ${person.name} — frontend engineer building fast, reliable eCommerce with Next.js, WooCommerce, and OMS/ERP integrations.`,
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
        I create high-performance storefronts using Next.js and connect them with WooCommerce APIs and external systems like
        OMS and ERP. I don&apos;t just build UI — I solve real problems like slow loading, unstable APIs (502 errors), and
        inefficient order workflows. Performance, scalability, and clean system architecture are what I optimize for. I have
        also shipped deadline-critical work (Grand Egyptian Museum countdown), RTL production tooling (Hakimo ERP), commerce
        flows including Sokany, years of client delivery via Mostaql, and I run my own business — so I align engineering
        with real operations and outcomes.
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
    title: "Technical skills",
    skills: [
      {
        title: "Stack & delivery",
        description: (
          <>
            Next.js, React, TypeScript, WooCommerce, REST APIs, integrations with OMS/ERP and external systems, JavaScript,
            HTML, CSS, SCSS, Tailwind CSS, responsive design, Firebase, Git, Postman — integrated commerce with performance,
            scalability, and reliability in mind.
          </>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "GitHub", icon: "github" },
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
  title: `Projects – ${person.name}`,
  description: `Selected projects and case studies by ${person.name}`,
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
