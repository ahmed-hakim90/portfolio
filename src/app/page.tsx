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
    title: "OIS Machinery",
    category: "Industrial B2B Hub",
    href: "/work/ois-machinery-industrial-b2b-hub",
    image: "/ois-machinery-hub.png",
    summary:
      "A premium B2B industrial machinery hub with catalog routes, auxiliary parts, turnkey services, SEO, and lead capture.",
    highlights: [
      "Machine catalog",
      "Dynamic detail pages",
      "Auxiliary parts",
      "Turnkey services",
      "WhatsApp leads",
      "Cloudflare Workers",
    ],
    stack: ["React 19", "TanStack Start", "Vite 7", "Tailwind CSS 4", "Framer Motion"],
  },
  {
    title: "HAKIMO ERP",
    category: "Manufacturing ERP",
    href: "/work/hakimo-production-system",
    image: "/hakimoerp.png",
    summary:
      "A mobile-first RTL ERP for production teams, daily reporting, approvals, KPI dashboards, HR workflows, and cost analytics.",
    highlights: [
      "Production management",
      "HR workflows",
      "KPI dashboards",
      "Cost analytics",
      "RBAC",
      "Mobile-first RTL",
      "PWA",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Firebase", "Zustand", "Tailwind"],
  },
  {
    title: "Sokany Store",
    category: "Headless Commerce",
    href: "/work/sokany-store",
    image: "/sokany-store-desktop.png",
    summary:
      "A fast Arabic storefront powered by WooCommerce REST APIs, tuned for mobile UX, performance, and modern shopping flows.",
    highlights: [
      "WooCommerce headless",
      "PWA",
      "3D product viewer",
      "Performance optimization",
      "Mobile UX",
      "Modern storefront",
    ],
    stack: ["Next.js", "WooCommerce", "Tailwind", "TypeScript"],
  },
  {
    title: "OMS Platform",
    category: "Operations Platform",
    href: "/work/order-management-system-oms",
    image: "/store-oms-orders.png",
    summary:
      "A commerce operations workspace for orders, warehouse handoff, shipments, returns, role workflows, and analytics.",
    highlights: [
      "Order lifecycle",
      "Warehouse workflows",
      "Shipping integrations",
      "Returns management",
      "Role workflows",
    ],
    stack: ["Next.js", "Firebase", "WooCommerce", "Bosta API", "WhatsApp"],
  },
];

const services = [
  "ERP Systems",
  "Industrial Platforms",
  "Headless Commerce",
  "OMS Systems",
  "AI Automation",
  "Internal Dashboards",
];

const architecture = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind"],
  },
  {
    title: "Cloud",
    items: ["Firebase", "Supabase", "Cloudflare", "Vercel"],
  },
  {
    title: "Commerce",
    items: ["WooCommerce", "OMS", "Webhooks"],
  },
  {
    title: "Automation",
    items: ["n8n", "OpenRouter", "Ollama"],
  },
];

const proofPoints = [
  "ERP Modules Built",
  "Commerce Integrations",
  "Production Workflows",
  "Operational Systems",
];

const timeline = [
  {
    title: "Grand Egyptian Museum",
    detail: "Deadline-critical bilingual launch page with responsive UI and custom animations.",
  },
  {
    title: "Mostaql",
    detail: "Years of client delivery across frontend builds, responsive websites, and production work.",
  },
  {
    title: "HAKIMO ERP",
    detail: "Manufacturing ERP for production, HR, approvals, dashboards, RBAC, and cost analytics.",
  },
  {
    title: "Sokany Store",
    detail: "Headless WooCommerce storefront with fast Arabic RTL shopping experiences.",
  },
  {
    title: "OMS Platform",
    detail: "Operations platform for order lifecycle, warehouse workflows, shipping, and returns.",
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
              Frontend Engineer | ERP & E-Commerce Systems Builder
            </Text>
            <Heading as="h1" variant="display-strong-xl" wrap="balance">
              {home.headline}
            </Heading>
            <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance">
              I build manufacturing systems, ERP platforms, operational software,
              headless commerce solutions, and modern web products.
            </Text>
          </Column>
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
                  Built around real operational workflows, not template demos.
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>
      </RevealFx>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <SectionHeader
          eyebrow="Featured systems"
          title="Products built around business operations."
          description="Case studies across manufacturing, commerce, and operations software."
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
                  <SmartLink href={system.href}>
                    Read case study →
                  </SmartLink>
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
          title="Systems I can design and ship."
          description="Focused software for companies that need reliable internal tools, commerce flows, and operational clarity."
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
                Structured product engineering for production teams, commerce teams,
                and internal operations.
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
          title="A path from frontend delivery to systems engineering."
          description="Selected milestones that shaped how I build products for operations, commerce, and manufacturing."
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
            Need a serious product system built around real operations?
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
            I can help design, build, and ship ERP modules, dashboards, commerce
            workflows, integrations, and internal tools.
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
