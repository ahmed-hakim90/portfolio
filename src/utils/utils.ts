import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

export type ProjectMetadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  category?: string;
  role?: string;
  featured?: boolean;
  featuredOrder?: number;
  status?: string;
  year?: string;
  highlights?: string[];
  stack?: string[];
  visibility?: "public" | "case-study" | "archive";
};

import { applyEgyptVision2030Placeholders } from "@/lib/egypt-2030-url";
import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: ProjectMetadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
    category: data.category || "Product engineering",
    role: data.role || "Frontend Engineer",
    featured: data.featured === true,
    featuredOrder: Number.isFinite(data.featuredOrder) ? data.featuredOrder : undefined,
    status: data.status || "Shipped",
    year: data.year || (data.publishedAt ? String(data.publishedAt).slice(0, 4) : ""),
    highlights: data.highlights || [],
    stack: data.stack || [],
    visibility: data.visibility || "public",
  };

  return { metadata, content: applyEgyptVision2030Placeholders(content) };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}

/** Unique project screenshots for /gallery — newest projects first; skips personal avatar paths. */
export function getProjectGalleryImages(): Array<{
  src: string;
  alt: string;
  orientation: string;
  title: string;
  slug: string;
  publishedAt: string;
}> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  const sorted = [...posts].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
  const seen = new Set<string>();
  const excludeSrc = new Set(["/me1.jpg"]);
  const out: Array<{
    src: string;
    alt: string;
    orientation: string;
    title: string;
    slug: string;
    publishedAt: string;
  }> = [];

  for (const post of sorted) {
    const title = post.metadata.title?.trim() || post.slug;
    for (const src of post.metadata.images || []) {
      if (!src || typeof src !== "string" || seen.has(src) || excludeSrc.has(src)) {
        continue;
      }
      seen.add(src);
      out.push({
        src,
        alt: title,
        orientation: "horizontal",
        title,
        slug: post.slug,
        publishedAt: post.metadata.publishedAt,
      });
    }
  }

  return out;
}
