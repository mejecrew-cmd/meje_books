import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "./i18n";

export type Chapter = {
  slug: string;
  title: string;
  sourceFile: string;
  sourceHash?: string;
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

const localizedChapterSections: Record<Exclude<Locale, "ko">, Record<string, string>> = {
  en: {
    "목차": "Contents",
    "배경 섹션": "Background",
    "산출물 샘플": "Deliverable Sample",
    "캐릭터 섹션": "Characters"
  },
  ja: {
    "목차": "目次",
    "배경 섹션": "背景設定",
    "산출물 샘플": "成果物サンプル",
    "캐릭터 섹션": "キャラクター"
  },
  "zh-Hant": {
    "목차": "目錄",
    "배경 섹션": "背景設定",
    "산출물 샘플": "成果範例",
    "캐릭터 섹션": "角色"
  },
  "zh-Hans": {
    "목차": "目录",
    "배경 섹션": "背景设定",
    "산출물 샘플": "成果示例",
    "캐릭터 섹션": "角色"
  }
};

const localizedExternalChapterTitles: Record<Exclude<Locale, "ko">, Record<string, string>> = {
  en: { "15-pride-and-prejudice-sample": "Deliverable Sample: Pride and Prejudice" },
  ja: { "15-pride-and-prejudice-sample": "成果物サンプル：『高慢と偏見』" },
  "zh-Hant": { "15-pride-and-prejudice-sample": "成果範例：《傲慢與偏見》" },
  "zh-Hans": { "15-pride-and-prejudice-sample": "成果示例：《傲慢与偏见》" }
};

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

/** Localize chapter labels without changing their stable Korean URL slugs. */
export function localizeChapters(book: Book, locale: Locale): Chapter[] {
  if (locale === "ko") return book.chapters;
  return book.chapters.map((chapter) => {
    const localizedChapter = {
      ...chapter,
      section: chapter.section
        ? (localizedChapterSections[locale][chapter.section] ?? chapter.section)
        : localizedChapterSections[locale]["목차"]
    };
    const externalTitle = localizedExternalChapterTitles[locale][chapter.slug];
    if (externalTitle) return { ...localizedChapter, title: externalTitle };
    if (chapter.externalUrl || !chapter.file) return localizedChapter;
    const filePath = path.join(contentRoot, book.slug, "translations", locale, `${chapter.slug}.md`);
    if (!fs.existsSync(filePath)) return localizedChapter;
    const parsed = matter(fs.readFileSync(filePath, "utf8"));
    const title = typeof parsed.data.title === "string"
      ? parsed.data.title
      : parsed.content.match(/^#\s+(.+)\s*$/m)?.[1]?.trim();
    return title ? { ...localizedChapter, title } : localizedChapter;
  });
}

export function getBook(slug: string): Book | undefined {
  const filePath = path.join(contentRoot, slug, "book.json");
  if (!fs.existsSync(filePath)) return undefined;
  return readJson<Book>(filePath);
}

export async function getChapter(bookSlug: string, chapterSlug: string, locale: Locale = "ko") {
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
  const markdownTitle = parsed.content.match(/^#\s+(.+)\s*$/m)?.[1]?.trim();
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
    // Translated manuscripts generally use their first H1 as the title.  Falling
    // back to it prevents a localized reader page from retaining a Korean title
    // simply because a legacy translation lacks a `title` frontmatter field.
    translationTitle: isTranslation
      ? (typeof parsed.data.title === "string" ? parsed.data.title : markdownTitle)
      : undefined,
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
