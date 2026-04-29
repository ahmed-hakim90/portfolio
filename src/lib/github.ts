/** Server-only GitHub REST + GraphQL helpers. Never expose GITHUB_TOKEN to the client. */

export type ContributionDay = {
  date: string;
  contributionCount: number;
  color?: string;
};

export type ContributionWeek = {
  contributionDays: ContributionDay[];
};

export type ContributionCalendarData = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

export type RepoSummary = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string | null;
  updated_at: string | null;
};

export type GitHubUserSummary = {
  login: string;
  public_repos: number;
  html_url: string;
  avatar_url: string;
};

const GITHUB_REST = "https://api.github.com";
const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const CACHE = { revalidate: 3600 } as const;

function restHeaders(token?: string): HeadersInit {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) {
    h.Authorization = `Bearer ${token}`;
  }
  return h;
}

export function parseGithubUsernameFromUrl(link: string): string | undefined {
  const m = link.trim().match(/github\.com\/([^/?#]+)/i);
  return m?.[1];
}

/** Prefer `GITHUB_USERNAME`, else caller-provided fallback (e.g. parsed from social link). */
export function resolveGithubUsername(fallback?: string): string | undefined {
  const env = process.env.GITHUB_USERNAME?.trim();
  if (env) {
    return env;
  }
  return fallback?.trim();
}

export function getGithubToken(): string | undefined {
  return process.env.GITHUB_TOKEN?.trim();
}

export async function fetchGitHubUser(
  username: string,
  token?: string,
): Promise<GitHubUserSummary> {
  const res = await fetch(`${GITHUB_REST}/users/${encodeURIComponent(username)}`, {
    headers: restHeaders(token),
    next: CACHE,
  });
  if (!res.ok) {
    throw new Error(`GitHub user request failed (${res.status})`);
  }
  const data = (await res.json()) as GitHubUserSummary;
  return data;
}

export async function fetchAllPublicRepos(
  username: string,
  token?: string,
): Promise<RepoSummary[]> {
  const all: RepoSummary[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const url = `${GITHUB_REST}/users/${encodeURIComponent(username)}/repos?per_page=${perPage}&page=${page}&sort=updated`;
    const res = await fetch(url, {
      headers: restHeaders(token),
      next: CACHE,
    });
    if (!res.ok) {
      throw new Error(`GitHub repos request failed (${res.status})`);
    }
    const batch = (await res.json()) as RepoSummary[];
    all.push(...batch);
    if (batch.length < perPage) {
      break;
    }
    page++;
  }

  return all;
}

const CONTRIBUTIONS_QUERY = `
query UserContributions($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            color
          }
        }
      }
    }
  }
}`;

/** Requires `GITHUB_TOKEN`. Returns null if no token or GraphQL error. */
export async function fetchContributionCalendar(
  username: string,
  token?: string,
): Promise<ContributionCalendarData | null> {
  if (!token) {
    return null;
  }

  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: CONTRIBUTIONS_QUERY,
      variables: { login: username },
    }),
    next: CACHE,
  });

  if (!res.ok) {
    return null;
  }

  const json = (await res.json()) as {
    errors?: { message: string }[];
    data?: {
      user?: {
        contributionsCollection?: {
          contributionCalendar?: ContributionCalendarData;
        };
      };
    };
  };

  if (json.errors?.length) {
    return null;
  }

  const cal = json.data?.user?.contributionsCollection?.contributionCalendar;
  if (!cal?.weeks) {
    return null;
  }

  return {
    totalContributions: cal.totalContributions,
    weeks: cal.weeks,
  };
}

export type GitHubSectionData =
  | {
      username: string;
      user: GitHubUserSummary;
      repos: RepoSummary[];
      calendar: ContributionCalendarData | null;
      calendarSkipped: boolean;
    }
  | {
      error: string;
      username: string;
    };

export async function loadGitHubSectionData(username: string): Promise<GitHubSectionData | null> {
  const token = getGithubToken();
  if (!username) {
    return null;
  }

  try {
    const user = await fetchGitHubUser(username, token);
    const repos = await fetchAllPublicRepos(username, token);
    const calendar = await fetchContributionCalendar(username, token);

    return {
      username,
      user,
      repos,
      calendar,
      calendarSkipped: !token,
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return { error: message, username };
  }
}
