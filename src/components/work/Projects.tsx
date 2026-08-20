import { getPosts } from "@/utils/utils";
import { Column, Text } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { resolveProjectLink } from "@/lib/project-links";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  /** When true (default on full listing), pin flagship systems before date sort. */
  pinFeatured?: boolean;
}

/** Flagship systems shown first on /work — day-job commerce, then ERP / GovTech / industrial. */
const FEATURED_SLUG_ORDER = [
  "shams-stores",
  "sokany-store",
  "order-management-system-oms",
  "woocommerce-api-integration",
  "hakimo-production-system",
  "egypt-vision-2030-digital-platform",
  "nile-health-portal",
  "agriculture-2030-platform",
  "cairo-quarantine-administration-web-portal",
  "ois-machinery-industrial-b2b-hub",
];

const RELATED_BY_SLUG: Record<string, string[]> = {
  "sokany-store": [
    "shams-stores",
    "order-management-system-oms",
    "woocommerce-api-integration",
  ],
  "shams-stores": [
    "sokany-store",
    "woocommerce-api-integration",
    "order-management-system-oms",
  ],
  "order-management-system-oms": [
    "sokany-store",
    "woocommerce-api-integration",
    "shams-stores",
  ],
  "woocommerce-api-integration": ["sokany-store", "shams-stores", "order-management-system-oms"],
  "hakimo-production-system": [
    "order-management-system-oms",
    "sokany-store",
    "egypt-vision-2030-digital-platform",
  ],
  "egypt-vision-2030-digital-platform": [
    "nile-health-portal",
    "agriculture-2030-platform",
    "cairo-quarantine-administration-web-portal",
  ],
  "nile-health-portal": [
    "egypt-vision-2030-digital-platform",
    "cairo-quarantine-administration-web-portal",
    "agriculture-2030-platform",
  ],
  "agriculture-2030-platform": [
    "egypt-vision-2030-digital-platform",
    "nile-health-portal",
    "ois-machinery-industrial-b2b-hub",
  ],
  "cairo-quarantine-administration-web-portal": [
    "nile-health-portal",
    "egypt-vision-2030-digital-platform",
  ],
  "ois-machinery-industrial-b2b-hub": [
    "hakimo-production-system",
    "egypt-vision-2030-digital-platform",
  ],
};

function sortByFeaturedThenDate(
  projects: ReturnType<typeof getPosts>,
  pinFeatured: boolean,
) {
  const byDate = (a: { metadata: { publishedAt: string } }, b: { metadata: { publishedAt: string } }) =>
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();

  if (!pinFeatured) {
    return [...projects].sort(byDate);
  }

  const featuredSet = new Set(FEATURED_SLUG_ORDER);
  const featured = FEATURED_SLUG_ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter(
    Boolean,
  ) as ReturnType<typeof getPosts>;
  const rest = projects.filter((p) => !featuredSet.has(p.slug)).sort(byDate);
  return [...featured, ...rest];
}

export function Projects({ range, exclude, pinFeatured = false }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = sortByFeaturedThenDate(allProjects, pinFeatured);

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  if (displayedProjects.length === 0) {
    return (
      <Column fillWidth paddingX="l" marginBottom="40">
        <Text variant="body-default-m" onBackground="neutral-weak">
          No related projects to show yet.
        </Text>
      </Column>
    );
  }

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={resolveProjectLink(post.slug, post.metadata.link)}
        />
      ))}
    </Column>
  );
}

/** Curated related case studies for a work slug (falls back to newest peers). */
export function RelatedProjects({ slug, limit = 2 }: { slug: string; limit?: number }) {
  const preferred = RELATED_BY_SLUG[slug] || [];
  const allProjects = getPosts(["src", "app", "work", "projects"]).filter((p) => p.slug !== slug);
  const bySlug = new Map(allProjects.map((p) => [p.slug, p]));
  const curated = preferred.map((s) => bySlug.get(s)).filter(Boolean) as ReturnType<typeof getPosts>;
  const remaining = allProjects
    .filter((p) => !preferred.includes(p.slug))
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    );
  const picked = [...curated, ...remaining].slice(0, limit);

  if (picked.length === 0) return null;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {picked.map((post, index) => (
        <ProjectCard
          priority={index < 1}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={resolveProjectLink(post.slug, post.metadata.link)}
        />
      ))}
    </Column>
  );
}
