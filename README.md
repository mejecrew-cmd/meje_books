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

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- Custom domain: `books.mejeworks.com`

## Content

Imported manuscripts are stored in `content/books`.
The current import contains 10 books and 184 chapters.

Run `npm run import:books` again after source manuscript folders are updated.
The importer reads from the MEJE `_Code` source root by default. To use another source root:

```bash
MEJE_SOURCE_ROOT=/path/to/_Code npm run import:books
```
