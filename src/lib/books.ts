import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Chapter = {
  slug: string;
  title: string;
  sourceFile: string;
  file?: string;
  order: number;
  section?: string;
  externalUrl?: string;
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
    .filter((book) => book.chapterCount > 0 && book.chapters.length > 0)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, "ko"));
}

export function bookTitleWithCount(book: Pick<Book, "title" | "chapterCount">): string {
  return `${book.title} (${book.chapterCount}편)`;
}

export function chapterCountLabel(book: Pick<Book, "chapterCount">): string {
  return `${book.chapterCount}편`;
}

export function chapterHref(book: Pick<Book, "slug">, chapter: Chapter): string {
  return chapter.externalUrl ?? `/books/${book.slug}/${chapter.slug}/`;
}

export function groupedChapters(book: Pick<Book, "chapters">): Array<[string, Chapter[]]> {
  const groups = new Map<string, Chapter[]>();
  for (const chapter of book.chapters) {
    const section = chapter.section ?? "목차";
    const current = groups.get(section) ?? [];
    current.push(chapter);
    groups.set(section, current);
  }
  return [...groups.entries()];
}

export function getBook(slug: string): Book | undefined {
  const filePath = path.join(contentRoot, slug, "book.json");
  if (!fs.existsSync(filePath)) return undefined;
  return readJson<Book>(filePath);
}

export async function getChapter(bookSlug: string, chapterSlug: string, locale: "ko" | "en" = "ko") {
  const book = getBook(bookSlug);
  if (!book) return undefined;
  const chapter = book.chapters.find((item) => item.slug === chapterSlug);
  if (!chapter || chapter.externalUrl || !chapter.file) return undefined;

  const sourceFilePath = path.join(contentRoot, book.slug, chapter.file);
  const translatedFilePath = path.join(contentRoot, book.slug, "translations", locale, `${chapter.slug}.md`);
  const isTranslation = locale !== "ko" && fs.existsSync(translatedFilePath);
  const filePath = isTranslation ? translatedFilePath : sourceFilePath;
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
    isTranslation,
    translationTitle: isTranslation && typeof parsed.data.title === "string" ? parsed.data.title : undefined,
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
