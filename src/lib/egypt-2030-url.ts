export function getEgyptVision2030BaseUrl(): string {
  return (process.env.NEXT_PUBLIC_EGYPT_VISION_2030_DEMO_URL ?? "").replace(/\/$/, "");
}

export function egyptVision2030Url(path = ""): string {
  const base = getEgyptVision2030BaseUrl();
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

const EGYPT_VISION_2030_PLACEHOLDER = "{{EGYPT_VISION_2030_BASE}}";

export function applyEgyptVision2030Placeholders(content: string): string {
  return content.replaceAll(EGYPT_VISION_2030_PLACEHOLDER, getEgyptVision2030BaseUrl());
}
