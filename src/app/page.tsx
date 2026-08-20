import {
  Button,
  Column,
  Grid,
  Heading,
  Line,
  Media,
  Meta,
  RevealFx,
  Row,
  Schema,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, social } from "@/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { ContributionGraph } from "@/components/github/ContributionGraph";
import { RepoGrid } from "@/components/github/RepoGrid";
import {
  loadGitHubSectionData,
  parseGithubUsernameFromUrl,
  resolveGithubUsername,
} from "@/lib/github";
import styles from "./page.module.scss";

const featuredSystems = [
  {
    title: "Sokany Store",
    category: "Day job · Headless Commerce",
    href: "/work/sokany-store",
    liveUrl: "https://sokany.vercel.app/",
    image: "/sokany-store-desktop.png",
    summary:
      "Arabic RTL storefront for Sokany Elmaghraby — Next.js on WooCommerce REST APIs, tuned for mobile shopping, performance, and modern product flows.",
    highlights: [
      "WooCommerce headless",
      "Arabic RTL",
      "PWA",
      "Performance",
      "Mobile UX",
      "Production storefront",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "WooCommerce"],
  },
  {
    title: "Store OMS",
    category: "Day job · Operations Platform",
    href: "/work/order-management-system-oms",
    liveUrl: "https://workflow-management-ecommerce.vercel.app/",
    image: "/store-oms-orders.png",
    summary:
      "The operations workspace behind Sokany commerce — order confirmation, warehouse handoff, shipments, returns, roles, and analytics in one UI.",
    highlights: [
      "Order lifecycle",
      "Warehouse workflows",
      "Bosta shipping",
      "WhatsApp",
      "Role workflows",
      "Analytics",
    ],
    stack: ["Next.js", "Firebase", "WooCommerce", "Bosta API"],
  },
  {
    title: "HAKIMO ERP",
    category: "Manufacturing ERP",
    href: "/work/hakimo-production-system",
    liveUrl: "https://production-line.vercel.app/",
    image: "/hakimoerp.png",
    summary:
      "Mobile-first RTL ERP for production teams — daily reporting, approvals, KPI dashboards, HR workflows, RBAC, and cost analytics.",
    highlights: [
      "Production management",
      "HR workflows",
      "KPI dashboards",
      "Cost analytics",
      "RBAC",
      "Mobile-first RTL",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Firebase", "Zustand", "Tailwind"],
  },
  {
    title: "رؤية مصر 2030",
    category: "GovTech · National narrative platform",
    href: "/work/egypt-vision-2030-digital-platform",
    image: "/egypt-vision-2030-hero.png",
    summary:
      "Arabic RTL platform that compares legacy government portals with modern previews — ministry routes, project studies, gallery, and insights on Vercel.",
    highlights: [
      "Before/after ministries",
      "Project detail routes",
      "Insights articles",
      "Live gallery",
      "TanStack Start",
      "Vercel",
    ],
    stack: ["React 19", "TanStack Start", "TypeScript", "Tailwind", "Vercel"],
  },
  {
    title: "OIS Machinery",
    category: "Industrial B2B Hub",
    href: "/work/ois-machinery-industrial-b2b-hub",
    liveUrl: "https://oismachinery.com",
    image: "/ois-machinery-hub.png",
    summary:
      "Premium B2B industrial machinery hub — catalog routes, auxiliary parts, turnkey services, SEO, and WhatsApp lead capture.",
    highlights: [
      "Machine catalog",
      "Dynamic detail pages",
      "Auxiliary parts",
      "Turnkey services",
      "WhatsApp leads",
    ],
    stack: ["React 19", "TanStack Start", "Vite 7", "Tailwind CSS 4", "Framer Motion"],
  },
  {
    title: "بوابة وزارة الصحة والسكان",
    category: "GovTech · معاينة تطوير",
    href: "/work/nile-health-portal",
    liveUrl: "https://nile-health-portal.hakim90.workers.dev/",
    image: "/egypt-vision-2030-health-compare.png",
    summary:
      "بوابة RTL موحّدة «صحة المصريين أولوية» — بحث مركزي، خدمات رقمية، حملات قومية، وأخبار رسمية.",
    highlights: [
      "بحث مركزي",
      "طوارئ 123/105/137",
      "خدمات رقمية",
      "حملات قومية",
      "مركز إعلامي",
      "mobile-first RTL",
    ],
    stack: ["React", "TypeScript", "RTL GovTech"],
  },
  {
    title: "منصة وزارة الزراعة الرقمية 2030",
    category: "GovTech · معاينة تطوير",
    href: "/work/agriculture-2030-platform",
    liveUrl: "https://zra3a-2030.hakim90.workers.dev/",
    image: "/egypt-vision-2030-agriculture-compare.png",
    summary:
      "منصة لعرض مشروعات ومبادرات الوزارة مع بحث وتصفية ولوحة مؤشرات مرتبطة برؤية 2030.",
    highlights: [
      "قائمة مشروعات موحّدة",
      "بحث وتصفية",
      "صفحات تفاصيل",
      "لوحة مؤشرات",
      "scraper-ready",
      "mobile-first RTL",
    ],
    stack: ["React 19", "TanStack Start", "Tailwind", "shadcn/ui"],
  },
];

const services = [
  "Headless Commerce",
  "OMS & Order Workflows",
  "ERP & Factory Dashboards",
  "GovTech RTL Portals",
  "Industrial B2B Sites",
  "API Integrations",
];

const architecture = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TanStack Start", "Tailwind"],
  },
  {
    title: "Cloud",
    items: ["Firebase", "Supabase", "Vercel", "Cloudflare"],
  },
  {
    title: "Commerce",
    items: ["WooCommerce", "OMS", "Bosta", "Webhooks"],
  },
  {
    title: "Automation",
    items: ["n8n", "WhatsApp", "OpenRouter", "Ollama"],
  },
];

const proofPoints = [
  "Sokany day-job systems",
  "Commerce integrations",
  "ERP & factory workflows",
  "GovTech RTL products",
];

const timeline = [
  {
    title: "Sokany Elmaghraby — Frontend Engineer",
    detail:
      "Current role: storefront, Store OMS, dashboards, and WooCommerce-facing APIs for live commerce operations.",
  },
  {
    title: "HAKIMO ERP",
    detail: "Manufacturing ERP for production, HR, approvals, dashboards, RBAC, and cost analytics.",
  },
  {
    title: "رؤية مصر 2030 + ministry previews",
    detail: "National narrative platform and RTL GovTech previews for health and agriculture.",
  },
  {
    title: "OIS Machinery",
    detail: "Industrial B2B hub with catalog, services, and lead capture for manufacturers.",
  },
  {
    title: "Grand Egyptian Museum",
    detail: "Deadline-critical bilingual countdown with responsive UI and custom animations.",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Column gap="12" maxWidth="s">
      <Text variant="label-default-s" onBackground="brand-weak">
        {eyebrow}
      </Text>
      <Heading as="h2" variant="display-strong-xs" wrap="balance">
        {title}
      </Heading>
      <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
        {description}
      </Text>
    </Column>
  );
}

export default async function Home() {
  const ghSocial = social.find((s) => s.icon === "github")?.link;
  const githubUsername = resolveGithubUsername(
    ghSocial ? parseGithubUsernameFromUrl(ghSocial) : undefined,
  );
  const githubData = githubUsername ? await loadGitHubSectionData(githubUsername) : null;
  const contributionCalendar =
    githubData && !("error" in githubData) ? githubData.calendar : null;
  const homeGithubRepos =
    githubData && !("error" in githubData)
      ? githubData.repos.filter((r) => !r.fork)
      : [];
  const githubLink = social.find((item) => item.icon === "github")?.link;
  const linkedinLink = social.find((item) => item.icon === "linkedin")?.link;
  const whatsappLink = social.find((item) => item.icon === "whatsapp")?.link;
  const emailLink = social.find((item) => item.icon === "email")?.link;

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <RevealFx translateY="8" fillWidth>
        <Column as="section" fillWidth className={styles.hero} gap="32">
          <Column gap="20" maxWidth="s">
            <Text variant="label-default-s" onBackground="brand-weak">
              {person.role}
            </Text>
            <Heading as="h1" variant="display-strong-xl" wrap="balance">
              {home.headline}
            </Heading>
            <Column gap="12">{home.subline}</Column>
          </Column>
          {home.featured.display && (
            <Row
              fitWidth
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              vertical="center"
            >
              <Row paddingX="8">{home.featured.title}</Row>
              <Button
                href={home.featured.href}
                data-border="rounded"
                variant="secondary"
                size="s"
                suffixIcon="arrowRight"
              >
                Open
              </Button>
            </Row>
          )}
          <Row gap="12" wrap>
            <Button href="/work" size="m" variant="primary" suffixIcon="arrowRight">
              View Projects
            </Button>
            <Button href={whatsappLink || emailLink || about.path} size="m" variant="secondary">
              Contact Me
            </Button>
          </Row>
          <Grid columns="4" m={{ columns: 2 }} s={{ columns: 1 }} gap="12" fillWidth>
            {proofPoints.map((point) => (
              <Column
                key={point}
                className={styles.proofCard}
                border="neutral-alpha-weak"
                background="surface"
                radius="m"
                padding="20"
                gap="8"
              >
                <Text variant="heading-strong-s">{point}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  Tied to real company workflows at Sokany and beyond — not template demos.
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>
      </RevealFx>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <SectionHeader
          eyebrow="Featured systems"
          title="What I ship at work — and what I build beyond it."
          description="Sokany commerce systems first, then ERP, GovTech, and industrial products that use the same production mindset."
        />
        <Column fillWidth gap="24">
          {featuredSystems.map((system, index) => (
            <Column
              key={system.title}
              fillWidth
              border="neutral-alpha-weak"
              background="surface"
              radius="m"
              padding="24"
              gap="24"
              className={styles.systemCard}
            >
              <Row fillWidth gap="24" s={{ direction: "column" }}>
                <Column flex={5} gap="20">
                  <Column gap="8">
                    <Text variant="label-default-s" onBackground="brand-weak">
                      {system.category}
                    </Text>
                    <Heading as="h3" variant="display-strong-xs" wrap="balance">
                      {system.title}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                      {system.summary}
                    </Text>
                  </Column>
                  <Row wrap gap="8">
                    {system.highlights.map((highlight) => (
                      <Tag key={highlight} size="m">
                        {highlight}
                      </Tag>
                    ))}
                  </Row>
                  <Column gap="8">
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      Stack
                    </Text>
                    <Row wrap gap="8">
                      {system.stack.map((item) => (
                        <Tag key={item} size="s">
                          {item}
                        </Tag>
                      ))}
                    </Row>
                  </Column>
                  <Row gap="24" wrap>
                    <SmartLink href={system.href}>
                      Read case study →
                    </SmartLink>
                    {"liveUrl" in system && system.liveUrl && (
                      <SmartLink
                        href={system.liveUrl}
                        suffixIcon="arrowUpRightFromSquare"
                      >
                        View live demo
                      </SmartLink>
                    )}
                  </Row>
                </Column>
                <Column flex={index === 0 ? 7 : 6} className={styles.systemImage}>
                  <Media
                    priority={index === 0}
                    aspectRatio="16 / 10"
                    radius="m"
                    border="neutral-alpha-medium"
                    sizes="(max-width: 960px) 100vw, 720px"
                    alt={`${system.title} screenshot`}
                    src={system.image}
                  />
                </Column>
              </Row>
            </Column>
          ))}
        </Column>
      </Column>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <SectionHeader
          eyebrow="Services"
          title="Systems I design and ship for operators."
          description="Frontend engineering for teams that need reliable commerce flows, internal tools, and clear Arabic RTL products."
        />
        <Grid columns="3" m={{ columns: 2 }} s={{ columns: 1 }} gap="16" fillWidth>
          {services.map((service) => (
            <Column
              key={service}
              border="neutral-alpha-weak"
              background="surface"
              radius="m"
              padding="24"
              gap="12"
              className={styles.serviceCard}
            >
              <Heading as="h3" variant="heading-strong-l">
                {service}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Practical product engineering for commerce teams, factories, and
                internal operations — starting from the UI operators use every day.
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <SectionHeader
          eyebrow="Technical architecture"
          title="Modern frontend connected to real operational systems."
          description="A practical stack for responsive products, cloud data, commerce integrations, and automation workflows."
        />
        <Grid columns="4" m={{ columns: 2 }} s={{ columns: 1 }} gap="16" fillWidth>
          {architecture.map((group) => (
            <Column
              key={group.title}
              border="neutral-alpha-weak"
              background="surface"
              radius="m"
              padding="24"
              gap="16"
            >
              <Heading as="h3" variant="heading-strong-m">
                {group.title}
              </Heading>
              <Row wrap gap="8">
                {group.items.map((item) => (
                  <Tag key={item} size="m">
                    {item}
                  </Tag>
                ))}
              </Row>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <SectionHeader
          eyebrow="Timeline"
          title="From client delivery to a Sokany systems role."
          description="Selected milestones from freelance and GEM work into manufacturing ERP and the current commerce operations stack."
        />
        <Column fillWidth gap="12" className={styles.timeline}>
          {timeline.map((item) => (
            <Row
              key={item.title}
              fillWidth
              gap="16"
              padding="20"
              radius="m"
              border="neutral-alpha-weak"
              background="surface"
              s={{ direction: "column" }}
            >
              <Heading as="h3" variant="heading-strong-m">
                {item.title}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {item.detail}
              </Text>
            </Row>
          ))}
        </Column>
      </Column>

      <Column as="section" fillWidth gap="24" className={styles.contactBlock}>
        <Column gap="12" maxWidth="s">
          <Text variant="label-default-s" onBackground="brand-weak">
            Contact
          </Text>
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Need a frontend engineer for commerce ops or internal systems?
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
            I build storefronts, OMS workflows, ERP dashboards, Arabic RTL portals,
            and integrations that match how teams actually work.
          </Text>
        </Column>
        <Row gap="12" wrap>
          {whatsappLink && (
            <Button href={whatsappLink} prefixIcon="whatsapp" variant="primary">
              WhatsApp
            </Button>
          )}
          {emailLink && (
            <Button href={emailLink} prefixIcon="email" variant="secondary">
              Email
            </Button>
          )}
          {githubLink && (
            <Button href={githubLink} prefixIcon="github" variant="secondary">
              GitHub
            </Button>
          )}
          {linkedinLink && (
            <Button href={linkedinLink} prefixIcon="linkedin" variant="secondary">
              LinkedIn
            </Button>
          )}
        </Row>
      </Column>

      {(contributionCalendar || homeGithubRepos.length > 0 || routes["/blog"]) && (
        <Column as="section" fillWidth gap="32" className={styles.secondarySection}>
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <SectionHeader
            eyebrow="Engineering activity"
            title="More signals from the workbench."
            description="Open-source activity and writing stay available here, but the primary story is the systems work above."
          />
          {contributionCalendar && (
            <Column fillWidth paddingTop="8">
              <ContributionGraph data={contributionCalendar} />
            </Column>
          )}
          {homeGithubRepos.length > 0 && githubData && !("error" in githubData) && (
            <Column fillWidth gap="16">
              <Heading as="h3" variant="heading-strong-l" wrap="balance">
                Recent repositories
              </Heading>
              <RepoGrid repos={homeGithubRepos} limit={6} />
              <Row horizontal="center" paddingTop="4">
                <SmartLink href={`${githubData.user.html_url}?tab=repositories`}>
                  View all on GitHub →
                </SmartLink>
              </Row>
            </Column>
          )}
          {routes["/blog"] && (
            <Column fillWidth gap="20">
              <Heading as="h3" variant="heading-strong-l" wrap="balance">
                Latest writing
              </Heading>
              <Posts range={[1, 2]} columns="2" />
            </Column>
          )}
        </Column>
      )}

      <Mailchimp />
    </Column>
  );
}
