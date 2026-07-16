# Translation Manuscripts

Korean source manuscripts stay in each book's `chapters/` directory. Do not overwrite them when preparing an edition in another language.

For each translated edition, create a matching Markdown file at:

```text
<book-slug>/translations/en/<chapter-slug>.md
<book-slug>/translations/ja/<chapter-slug>.md
<book-slug>/translations/zh-Hant/<chapter-slug>.md
<book-slug>/translations/zh-Hans/<chapter-slug>.md
```

For example:

```text
meje-librarying/translations/en/03-본문-01-제1장.md
```

Use the original chapter slug so every language keeps a stable one-to-one URL relationship. A translated manuscript may include frontmatter:

```md
---
title: From Glossary to Cloud
---

Translated manuscript text.
```

Add `title` frontmatter when possible; the reader uses it for the localized page title, contents, and previous/next navigation.

When a translation file is absent, the localized catalogue and chapter route identify the Korean edition as the published source instead of presenting an automatic translation as an editorial text.
