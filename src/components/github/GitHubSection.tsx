import type { GitHubSectionData } from "@/lib/github";
import { ContributionGraph } from "@/components/github/ContributionGraph";
import { RepoGrid } from "@/components/github/RepoGrid";
import { Column, Heading, Row, SmartLink, Text } from "@once-ui-system/core";

export function GitHubSection({ data }: { data: GitHubSectionData }) {
  if ("error" in data) {
    return (
      <Column fillWidth gap="m" marginBottom="40">
        <Heading as="h2" id="GitHub" variant="display-strong-s" marginBottom="m">
          GitHub
        </Heading>
        <Text variant="body-default-m" onBackground="accent-weak">
          Could not load GitHub data: {data.error}
        </Text>
      </Column>
    );
  }

  const { user, repos, calendar, calendarSkipped } = data;

  return (
    <Column fillWidth gap="24" marginBottom="40">
      <Heading as="h2" id="GitHub" variant="display-strong-s" marginBottom="m">
        GitHub
      </Heading>
      <Text variant="body-default-m" onBackground="neutral-weak">
        Public profile activity and repositories for{" "}
        <SmartLink href={user.html_url}>{user.login}</SmartLink> —{" "}
        <Text as="span" variant="label-strong-s">
          {user.public_repos}
        </Text>{" "}
        public repos (GitHub count).
      </Text>

      {calendar ? (
        <ContributionGraph data={calendar} />
      ) : (
        <Column
          fillWidth
          padding="16"
          radius="m"
          border="neutral-alpha-weak"
          background="surface"
          gap="8"
        >
          <Text variant="body-default-s" onBackground="neutral-weak">
            {calendarSkipped
              ? "Contribution graph needs a server-side GitHub token. Add GITHUB_TOKEN to your environment (see .env.example)."
              : "Contribution calendar could not be loaded (check token scopes or try again later)."}
          </Text>
        </Column>
      )}

      <Row horizontal="between" vertical="center" marginTop="8">
        <Heading as="h3" variant="heading-strong-xl">
          Repositories ({repos.length})
        </Heading>
      </Row>
      <RepoGrid repos={repos} />
    </Column>
  );
}
