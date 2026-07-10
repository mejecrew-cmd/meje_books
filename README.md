# MEJE BOOKS

MEJE BOOKS is a public manuscript reading site for MEJE Works.

## Local Development

```bash
npm install
npm run import:books
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

The repository deploys through the GitHub Pages workflow on `main`.
The custom domain is `books.meje.kr`.

## Content

Imported manuscripts are stored in `content/books`.
The current import contains 10 books and 246 chapters.

Run `npm run import:books` again after source manuscript folders are updated.
The importer reads from the MEJE `_Code` source root by default. To use another source root:

```bash
MEJE_SOURCE_ROOT=/path/to/_Code npm run import:books
```

## English Edition

English catalogue and book-overview pages use the `/en/` prefix. Korean source URLs remain unchanged.

To publish an editorial English chapter, add a Markdown file at:

```text
content/books/<book-slug>/translations/en/<chapter-slug>.md
```

Use the optional `title` frontmatter field for the English chapter title. When the file exists, the corresponding `/en/books/.../` reader page renders it; otherwise that page links to the Korean source text.
