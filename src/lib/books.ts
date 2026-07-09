import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Chapter = {
  slug: string;
  title: string;
  sourceFile: string;
  file: string;
  order: number;
};

export type BookAsset = {
  title: string;
  sourceFile: string;
  url: string;
};

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  line: string;
  category: string;
  author: string;
  description: string;
  order: number;
  chapterCount: number;
  chapters: Chapter[];
  cover?: string;
  assetCount?: number;
  assets?: BookAsset[];
};

const contentRoot = path.resolve(process.cwd(), "content/books");

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

export function getBooks(): Book[] {
  if (!fs.existsSync(contentRoot)) return [];
  const slugs = fs
    .readdirSync(contentRoot)
    .filter((entry) => fs.existsSync(path.join(contentRoot, entry, "book.json")));

  return slugs
    .map((slug) => readJson<Book>(path.join(contentRoot, slug, "book.json")))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, "ko"));
}

export function getBook(slug: string): Book | undefined {
  const filePath = path.join(contentRoot, slug, "book.json");
  if (!fs.existsSync(filePath)) return undefined;
  return readJson<Book>(filePath);
}

export async function getChapter(bookSlug: string, chapterSlug: string) {
  const book = getBook(bookSlug);
  if (!book) return undefined;
  const chapter = book.chapters.find((item) => item.slug === chapterSlug);
  if (!chapter) return undefined;

  const filePath = path.join(contentRoot, book.slug, chapter.file);
  const source = fs.readFileSync(filePath, "utf8");
  const parsed = matter(source);
  const html = await marked.parse(parsed.content, {
    async: true,
    gfm: true,
    breaks: false
  });
  const index = book.chapters.findIndex((item) => item.slug === chapter.slug);

  return {
    book,
    chapter,
    html,
    prev: index > 0 ? book.chapters[index - 1] : undefined,
    next: index < book.chapters.length - 1 ? book.chapters[index + 1] : undefined
  };
}

export function getLineGroups() {
  const groups = new Map<string, Book[]>();
  for (const book of getBooks()) {
    const current = groups.get(book.line) ?? [];
    current.push(book);
    groups.set(book.line, current);
  }
  return [...groups.entries()];
}
