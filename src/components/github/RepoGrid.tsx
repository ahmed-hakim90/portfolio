import type { RepoSummary } from "@/lib/github";
import { Column, Row, SmartLink, Text } from "@once-ui-system/core";

function formatDate(iso: string | null): string {
  if (!iso) {
    return "—";
  }
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function RepoGrid({
  repos,
  limit,
  excludeForks = false,
}: {
  repos: RepoSummary[];
  /** Max rows after sort (newest push first). Omit for all repos. */
  limit?: number;
  /** Hide forked repositories (useful on the home preview). */
  excludeForks?: boolean;
}) {
  let list = excludeForks ? repos.filter((r) => !r.fork) : repos;
  const sorted = [...list].sort((a, b) => {
    const ta = new Date(a.pushed_at || a.updated_at || 0).getTime();
    const tb = new Date(b.pushed_at || b.updated_at || 0).getTime();
    return tb - ta;
  });
  const rows = limit !== undefined ? sorted.slice(0, limit) : sorted;

  if (rows.length === 0) {
    return null;
  }

  return (
    <Column fillWidth gap="12">
      {rows.map((repo) => (
        <Row
          key={repo.id}
          fillWidth
          paddingY="12"
          paddingX="16"
          radius="m"
          border="neutral-alpha-weak"
          background="surface"
          horizontal="between"
          vertical="start"
          gap="16"
          s={{ direction: "column", horizontal: "start" }}
        >
          <Column gap="4" flex={1} minWidth={0}>
            <SmartLink href={repo.html_url}>
              <Text variant="heading-strong-s" wrap="balance">
                {repo.name}
              </Text>
            </SmartLink>
            {repo.description && (
              <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
                {repo.description}
              </Text>
            )}
            <Row gap="12" wrap marginTop="4">
              {repo.language && (
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {repo.language}
                </Text>
              )}
              <Text variant="label-default-xs" onBackground="neutral-weak">
                ★ {repo.stargazers_count}
              </Text>
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Forks {repo.forks_count}
              </Text>
              {repo.fork && (
                <Text variant="label-default-xs" onBackground="accent-weak">
                  fork
                </Text>
              )}
            </Row>
          </Column>
          <Column gap="4" horizontal="end" s={{ horizontal: "start" }}>
            <Text variant="label-default-xs" onBackground="neutral-weak">
              Pushed
            </Text>
            <Text variant="body-default-xs">{formatDate(repo.pushed_at)}</Text>
          </Column>
        </Row>
      ))}
    </Column>
  );
}
