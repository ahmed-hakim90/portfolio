const DEMO_ENV_BY_SLUG: Record<string, string> = {
  "egypt-vision-2030-digital-platform": "NEXT_PUBLIC_EGYPT_VISION_2030_DEMO_URL",
};

export function resolveProjectLink(slug: string, linkFromFrontmatter = ""): string {
  const envKey = DEMO_ENV_BY_SLUG[slug];
  if (envKey) {
    const fromEnv = process.env[envKey]?.trim();
    if (fromEnv) return fromEnv;
  }
  return linkFromFrontmatter.trim();
}
