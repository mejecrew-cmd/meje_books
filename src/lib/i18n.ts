import type { Book, Chapter } from "./books";

export type Locale = "ko" | "en";

type BookTranslation = Pick<Book, "title" | "subtitle" | "line" | "category" | "author" | "description">;

const englishBooks: Record<string, BookTranslation> = {
  "meje-librarying": {
    title: "MEJE Librarying Workflow",
    subtitle: "A production workflow for organizing source materials into worldbuilding knowledge systems",
    line: "MEJE PROCESS",
    category: "Process 02",
    author: "MEJE Works",
    description: "MEJE's librarying workflow extracts keywords, concepts, relationships, places, and events from dispersed source materials, then organizes them into a usable worldbuilding knowledge system."
  },
  "meje-seoyeongak": {
    title: "MEJE Seoyeongak Translation Workflow",
    subtitle: "A production workflow for translation, adaptation, and reference editions",
    line: "MEJE PROCESS",
    category: "Process 03",
    author: "MEJE Works",
    description: "A practical manuscript on the Seoyeongak workflow, from planning to delivery for multilingual content, translation, adaptation, and reference editions."
  },
  "pride-and-prejudice-data": {
    title: "Pride and Prejudice Worldbuilding Data",
    subtitle: "A Seoyeongak deliverable sample with setting sheets and character sheets",
    line: "MEJE PROCESS",
    category: "Reference",
    author: "MEJE Works",
    description: "A Seoyeongak deliverable sample that brings together setting sheets and character sheets for Pride and Prejudice."
  },
  "meje-lorebook": {
    title: "MEJE Lorebook Production Workflow",
    subtitle: "A workflow for worldbuilding guides and lorebook production",
    line: "MEJE PROCESS",
    category: "Process 04",
    author: "MEJE Works",
    description: "MEJE's workflow for editing libraryed knowledge into official setting guides, lorebooks, public wikis, and book structures."
  },
  "meje-character-process": {
    title: "MEJE Character Creation Workflow",
    subtitle: "A design guide for character creation and character sheets",
    line: "MEJE PROCESS",
    category: "Process 05",
    author: "MEJE Works",
    description: "A new-character workflow that develops a character through narrative, desire, lack, relationships, voice, visual elements, and working sheets."
  },
  "meje-storytelling-100": {
    title: "MEJE Storytelling 100",
    subtitle: "From worldbuilding and characters to one hundred story scenes",
    line: "MEJE PROCESS",
    category: "Process 06",
    author: "MEJE Works",
    description: "A storytelling workflow that produces one hundred scenes of daily life, events, changing relationships, and audience participation from worldbuilding and character sheets."
  },
  "atmosphere-engineering": {
    title: "Atmosphere Engineering",
    subtitle: "How place, sensation, and relationships create a story",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A manuscript series by Kim Dong-eun WhtDrgon., MEJE's founder and worldbuilder, on atmosphere, sensation, place, and relationships."
  },
  "mobile-game-bm-renewal": {
    title: "New-Content Business Models and the IP Expansion Economy",
    subtitle: "Payment habits and monetization across games, music, video, webtoons, and IP",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A manuscript on new-content business models, tracing payment habits through games, music, video, webtoons, and the IP expansion economy."
  },
  "new-content-ftue": {
    title: "FTUE: First-Time User Experience",
    subtitle: "Designing the first encounter with a new content world",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A manuscript on first-time user experience, from the user's state and prior experience to feedback, recovery, measurement, and iteration."
  },
  "reading-the-world-through-universe": {
    title: "Reading the World Through Worldbuilding",
    subtitle: "Worldbuilding as a lens for systems, communities, fandom, and IP",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A manuscript that reads systems, communities, fandom, and IP through worldbuilding, by Kim Dong-eun WhtDrgon., MEJE's founder and worldbuilder."
  }
};

export const copy = {
  ko: {
    home: "Home",
    books: "Books",
    allBooks: "전체 책",
    catalog: "전체 목록",
    contents: "목차",
    chapters: "편",
    chapter: "편",
    author: "Author",
    assets: "Assets",
    line: "Line",
    readOriginal: "한국어 원문 보기",
    originalAvailable: "한국어 원문 공개",
    languageLabel: "언어 선택",
    englishEdition: "English edition"
  },
  en: {
    home: "Home",
    books: "Books",
    allBooks: "All books",
    catalog: "Catalog",
    contents: "Contents",
    chapters: "chapters",
    chapter: "chapter",
    author: "Author",
    assets: "Assets",
    line: "Line",
    readOriginal: "Read the Korean original",
    originalAvailable: "Korean original available",
    languageLabel: "Language",
    englishEdition: "English edition"
  }
} as const;

export function localizeBook(book: Book, locale: Locale): Book {
  if (locale === "ko") return book;
  return { ...book, ...(englishBooks[book.slug] ?? {}) };
}

export function localizeBooks(books: Book[], locale: Locale): Book[] {
  return books.map((book) => localizeBook(book, locale));
}

export function bookTitleWithCount(book: Pick<Book, "title" | "chapterCount">, locale: Locale): string {
  return locale === "en" ? `${book.title} (${book.chapterCount} chapters)` : `${book.title} (${book.chapterCount}편)`;
}

export function chapterCountLabel(book: Pick<Book, "chapterCount">, locale: Locale): string {
  return locale === "en" ? `${book.chapterCount} chapters` : `${book.chapterCount}편`;
}

export function localePrefix(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}

export function bookHref(book: Pick<Book, "slug">, locale: Locale): string {
  return `${localePrefix(locale)}/books/${book.slug}/`;
}

export function chapterHref(book: Pick<Book, "slug">, chapter: Chapter, locale: Locale): string {
  if (chapter.externalUrl) return `${localePrefix(locale)}${chapter.externalUrl}`;
  return `${localePrefix(locale)}/books/${book.slug}/${chapter.slug}/`;
}

export function localizePath(pathname: string, locale: Locale): string {
  const koreanPath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === "en" ? `/en${koreanPath}` : koreanPath;
}
