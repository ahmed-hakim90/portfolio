import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahmed",
  lastName: "Abdulhakim",
  name: "Ahmed Abdulhakim",
  role: "Software Engineer",
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
  description: `Portfolio of ${person.name} — ${person.role}, entrepreneur, and builder.`,
  headline: <>Software engineer · entrepreneur · shipping real products</>,
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
      My journey started over five years ago: client work on platforms like Mostaql, urgent delivery for the Grand Egyptian
      Museum countdown, and building products with React and Firebase. I care about commitment, precision, and results —
      and I am working toward launching my own software company.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} — Helwan, Cairo.`,
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
        Software engineer turned entrepreneur: I love building things and helping people. I have worked on real-life client
        projects and founded my own business. Notable work includes the Grand Egyptian Museum countdown (delivered on a tight
        holiday timeline) and Hakimo ERP — a production management system with RTL Arabic UI. Earlier projects were part of
        my foundations; recent work reflects where I am today technically.
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
            React, TypeScript, Vue.js, JavaScript, HTML, CSS, SCSS, Bootstrap, Tailwind CSS, responsive design, jQuery,
            Flutter, Firebase, Git, Postman — production-minded delivery on real deadlines.
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
  description: `Photos`,
  images: [
    {
      src: "/me1.jpg",
      alt: "Ahmed Abdulhakim",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
