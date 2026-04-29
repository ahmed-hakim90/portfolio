import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  SmartLink,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, social } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { ContributionGraph } from "@/components/github/ContributionGraph";
import { RepoGrid } from "@/components/github/RepoGrid";
import {
  loadGitHubSectionData,
  parseGithubUsernameFromUrl,
  resolveGithubUsername,
} from "@/lib/github";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function Home() {
  const ghSocial = social.find((s) => s.icon === "github")?.link;
  const githubUsername = resolveGithubUsername(
    ghSocial ? parseGithubUsernameFromUrl(ghSocial) : undefined,
  );
  const githubData = githubUsername ? await loadGitHubSectionData(githubUsername) : null;
  const contributionCalendar =
    githubData && !("error" in githubData) ? githubData.calendar : null;
  /** Non-fork repos for the home preview (forks stay on About → full list). */
  const homeGithubRepos =
    githubData && !("error" in githubData)
      ? githubData.repos.filter((r) => !r.fork)
      : [];

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
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Column maxWidth="s" horizontal="center" gap="m">
              {home.subline}
            </Column>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="s"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
        {contributionCalendar && (
          <RevealFx translateY="12" delay={0.5} fillWidth horizontal="center">
            <Column fillWidth maxWidth="m" paddingX="l" paddingTop="16">
              <ContributionGraph data={contributionCalendar} />
            </Column>
          </RevealFx>
        )}
        {homeGithubRepos.length > 0 && githubData && !("error" in githubData) && (
          <RevealFx translateY="12" delay={0.52} fillWidth horizontal="center">
            <Column fillWidth maxWidth="m" paddingX="l" paddingTop="24" gap="16">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Recent repositories
              </Heading>
              <RepoGrid repos={homeGithubRepos} limit={8} />
              <Row horizontal="center" paddingTop="4">
                <SmartLink href={`${githubData.user.html_url}?tab=repositories`}>
                  View all on GitHub →
                </SmartLink>
              </Row>
            </Column>
          </RevealFx>
        )}
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2]} />
      <Mailchimp />
    </Column>
  );
}
