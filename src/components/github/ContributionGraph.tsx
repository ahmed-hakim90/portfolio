import type { ContributionCalendarData } from "@/lib/github";
import { Column, Row, Text } from "@once-ui-system/core";

function cellBackground(day: ContributionCalendarData["weeks"][0]["contributionDays"][0]): string {
  if (day.color) {
    return day.color;
  }
  const n = day.contributionCount;
  if (n <= 0) {
    return "var(--neutral-alpha-medium)";
  }
  if (n <= 3) {
    return "var(--brand-alpha-medium)";
  }
  if (n <= 8) {
    return "var(--brand-background-strong)";
  }
  return "var(--brand-background-strong)";
}

export function ContributionGraph({
  data,
}: {
  data: ContributionCalendarData;
}) {
  const weeks = data.weeks;

  return (
    <Column fillWidth gap="12">
      <Row horizontal="between" vertical="center" wrap gap="8">
        <Text variant="label-default-s" onBackground="neutral-weak">
          Last year on GitHub
        </Text>
        <Text variant="label-strong-s" onBackground="brand-weak">
          {data.totalContributions.toLocaleString()} contributions
        </Text>
      </Row>
      <Row
        fillWidth
        style={{
          gap: "3px",
          overflowX: "auto",
          flexWrap: "nowrap",
          paddingBottom: "8px",
          direction: "ltr",
        }}
      >
        {weeks.map((week, wi) => (
          <Column key={wi} flex={0} style={{ gap: "3px" }}>
            {week.contributionDays.map((day, di) => (
              <span
                key={`${wi}-${di}-${day.date}`}
                title={`${day.date}: ${day.contributionCount} contributions`}
                style={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "2px",
                  background: cellBackground(day),
                  flexShrink: 0,
                }}
              />
            ))}
          </Column>
        ))}
      </Row>
      <Row gap="8" vertical="center">
        <Text variant="body-default-xs" onBackground="neutral-weak">
          Less
        </Text>
        <Row vertical="center" style={{ gap: "3px" }}>
          {[0, 1, 4, 10, 15].map((n) => (
            <span
              key={n}
              style={{
                width: "11px",
                height: "11px",
                borderRadius: "2px",
                background:
                  n === 0
                    ? "var(--neutral-alpha-medium)"
                    : n <= 4
                      ? "var(--brand-alpha-medium)"
                      : n <= 10
                        ? "var(--brand-background-strong)"
                        : "var(--brand-background-strong)",
              }}
            />
          ))}
        </Row>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          More
        </Text>
      </Row>
    </Column>
  );
}
