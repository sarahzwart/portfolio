// Reads journal posts from src/content/journal/*.md at build time.
// Files starting with "_" (like _template.md) are skipped.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const dir = path.join(process.cwd(), "src", "content", "journal");

export type Post = {
  slug: string;
  title: string;
  season: string;
  date: string; // YYYY-MM-DD
  summary: string;
  html: string;
};

const toDate = (v: unknown) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? ""));

function readPost(file: string): Post {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  const post = {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? ""),
    season: String(data.season ?? ""),
    date: toDate(data.date),
    summary: String(data.summary ?? ""),
    html: marked.parse(content, { async: false }),
  };
  // Fail the build with a clear message instead of publishing a half-filled post
  for (const key of ["title", "season", "date", "summary"] as const) {
    if (!post[key]) throw new Error(`Journal post ${file} is missing "${key}" in its front matter`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date)) {
    throw new Error(`Journal post ${file} needs a date like 2026-10-23, got "${post.date}"`);
  }
  return post;
}

export function getPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
