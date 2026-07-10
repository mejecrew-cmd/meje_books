# Translation Manuscripts

Korean source manuscripts stay in each book's `chapters/` directory. Do not overwrite them when preparing an edition in another language.

For an English chapter, create a matching Markdown file at:

```text
<book-slug>/translations/en/<chapter-slug>.md
```

For example:

```text
meje-librarying/translations/en/03-본문-01-제1장.md
```

Use the original chapter slug so the Korean and English editions keep a stable one-to-one URL relationship. An English manuscript may include frontmatter:

```md
---
title: From Glossary to Cloud
---

English manuscript text.
```

When a translation file is absent, the English catalogue and chapter route identify the Korean edition as the published source instead of presenting an automatic translation as an editorial text.
