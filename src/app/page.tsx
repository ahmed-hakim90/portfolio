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
import { Tilt3D } from "@/components/Tilt3D";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroSceneLazy } from "@/components/HeroSceneLazy";
import { getPosts } from "@/utils/utils";
import { resolveVisibleProjectLink } from "@/lib/project-links";


const services = [
  "Commerce platforms",
  "Operations & OMS",
  "POS and ERP products",
  "Multi-tenant SaaS",
  "Arabic RTL platforms",
  "API integrations",
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
  { title: "Production systems", detail: "Products connected to real users, data, permissions, and release workflows." },
  { title: "Commerce & operations", detail: "Storefronts, order lifecycles, inventory, POS, ERP, and internal tools." },
  { title: "Arabic + English RTL", detail: "Bilingual interfaces designed for both reading directions from the start." },
  { title: "Remote from Cairo", detail: "Clear asynchronous collaboration across product, engineering, and operations." },
];

const process = [
  {
    title: "Discover",
    detail: "Understand the operators, constraints, data, and business outcome before drawing screens.",
  },
  {
    title: "Model workflows",
    detail: "Turn real handoffs, roles, and failure states into a product model the team can trust.",
  },
  {
    title: "Build",
    detail: "Ship a responsive frontend connected to secure data, integrations, and operational rules.",
  },
  {
    title: "Verify",
    detail: "Test the critical journey, permissions, edge cases, performance, and mobile behavior.",
  },
  {
    title: "Ship",
    detail: "Deploy, observe the live workflow, communicate clearly, and improve what matters.",
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
  const featuredSystems = getPosts(["src", "app", "work", "projects"])
    .filter((project) => project.metadata.featured)
    .sort((a, b) => (a.metadata.featuredOrder ?? 99) - (b.metadata.featuredOrder ?? 99))
    .slice(0, 6)
    .map((project) => ({
      title: project.metadata.title,
      category: `${project.metadata.category} · ${project.metadata.status}`,
      href: `/work/${project.slug}`,
      liveUrl: resolveVisibleProjectLink(project.slug, project.metadata.link, project.metadata.visibility),
      image: project.metadata.images[0],
      summary: project.metadata.summary,
      highlights: project.metadata.highlights || [],
      stack: project.metadata.stack || [],
    }));
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
          <div className={styles.heroGlow} aria-hidden />
          <HeroSceneLazy />
          <Column gap="20" maxWidth="s" className={styles.heroContent}>
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
              className={styles.heroContent}
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
          <Row gap="12" wrap className={styles.heroContent}>
            <Button href="/work" size="m" variant="primary" suffixIcon="arrowRight">
              View Projects
            </Button>
            <Button href={whatsappLink || emailLink || about.path} size="m" variant="secondary">
              Contact Me
            </Button>
          </Row>
          <Grid columns="4" m={{ columns: 2 }} s={{ columns: 1 }} gap="12" fillWidth className={styles.heroContent}>
            {proofPoints.map((point, index) => (
              <ScrollReveal key={point.title} delayMs={index * 50}>
                <Tilt3D maxTilt={6}>
                  <Column
                    className={styles.proofCard}
                    border="neutral-alpha-weak"
                    background="surface"
                    radius="m"
                    padding="20"
                    gap="8"
                  >
                    <Text variant="heading-strong-s">{point.title}</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                      {point.detail}
                    </Text>
                  </Column>
                </Tilt3D>
              </ScrollReveal>
            ))}
          </Grid>
        </Column>
      </RevealFx>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Selected systems"
            title="Products built around real operational work."
            description="Six focused case studies across SaaS, commerce, POS, and internal operations — each framed by the problem, my role, and the system shipped."
          />
        </ScrollReveal>
        <Column fillWidth gap="24">
          {featuredSystems.map((system, index) => (
            <ScrollReveal key={system.title} delayMs={index * 70}>
              <Tilt3D maxTilt={7}>
                <Column
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
                    <div className={styles.systemImageMedia}>
                      {system.image && <Media
                        priority={index === 0}
                        aspectRatio="16 / 10"
                        radius="m"
                        border="neutral-alpha-medium"
                        sizes="(max-width: 960px) 100vw, 720px"
                        alt={`${system.title} screenshot`}
                        src={system.image}
                      />}
                    </div>
                  </Column>
                </Row>
                </Column>
              </Tilt3D>
            </ScrollReveal>
          ))}
        </Column>
      </Column>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <ScrollReveal>
          <SectionHeader
            eyebrow="What I build"
            title="Frontend engineering that reaches beyond the screen."
            description="I connect clear interfaces to data, permissions, business rules, and integrations so teams can run the work in one product."
          />
        </ScrollReveal>
        <Grid columns="3" m={{ columns: 2 }} s={{ columns: 1 }} gap="16" fillWidth>
          {services.map((service, index) => (
            <ScrollReveal key={service} delayMs={index * 50}>
              <Tilt3D maxTilt={6}>
                <Column
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
                    Product interfaces grounded in real roles, workflows, data boundaries, and the decisions operators make every day.
                  </Text>
                </Column>
              </Tilt3D>
            </ScrollReveal>
          ))}
        </Grid>
      </Column>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Engineering depth"
            title="A frontend that respects the whole system."
            description="Responsive product architecture connected to secure data, integrations, deployment workflows, and verification."
          />
        </ScrollReveal>
        <Grid columns="4" m={{ columns: 2 }} s={{ columns: 1 }} gap="16" fillWidth>
          {architecture.map((group, index) => (
            <ScrollReveal key={group.title} delayMs={index * 50}>
              <Tilt3D maxTilt={5}>
                <Column
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
              </Tilt3D>
            </ScrollReveal>
          ))}
        </Grid>
      </Column>

      <Column as="section" fillWidth gap="32" className={styles.section}>
        <ScrollReveal>
          <SectionHeader
            eyebrow="How I work"
            title="From an unclear workflow to a product people can operate."
            description="A practical delivery loop that keeps product thinking, engineering quality, and business reality connected."
          />
        </ScrollReveal>
        <Column fillWidth gap="12" className={styles.timeline}>
          {process.map((item, index) => (
            <ScrollReveal key={item.title} delayMs={index * 50}>
              <Tilt3D maxTilt={4}>
                <Row
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
              </Tilt3D>
            </ScrollReveal>
          ))}
        </Column>
      </Column>

      <ScrollReveal delayMs={80}>
        <Column as="section" fillWidth gap="16" className={styles.section}>
          <Text variant="label-default-s" onBackground="brand-weak">Current focus</Text>
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Rebuilding Shams Stores with Sokany.
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
            My current remote work covers the WooCommerce theme system, catalog and stock cleanup, mobile commerce UX, and cross-sell journeys that help creators build a complete setup instead of buying isolated products.
          </Text>
          <SmartLink href="/work/shams-stores">See the current case study →</SmartLink>
        </Column>
      </ScrollReveal>

      <ScrollReveal delayMs={80}>
      <Column as="section" fillWidth gap="24" className={styles.contactBlock}>
        <Column gap="12" maxWidth="s">
          <Text variant="label-default-s" onBackground="brand-weak">
            Contact
          </Text>
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Have an operational problem? Let&apos;s turn it into a product.
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
            Bring me the workflow, users, and constraints. I&apos;ll help shape the product, build the interface, connect the system, and take it to a reliable release.
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
      </ScrollReveal>

      {(contributionCalendar || homeGithubRepos.length > 0 || routes["/blog"]) && (
        <ScrollReveal>
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
        </ScrollReveal>
      )}

      <Mailchimp />
    </Column>
  );
}
