---
title: "Part 6. Practice D. Vault `.md` Reference Document Sample"
sourceLocale: ko
locale: en
sourceHash: "sha256:41e2c66b8cc721b2aba03d49397cc566e89c71a08317260590800466753e21fa"
translationStatus: draft
---

# Part 6. Practice D. Vault `.md` Reference Document Sample

This practice section shows the shape of the basic `.md` files created by Stage 3 skeleton building. In an actual project, one Stage 2 CSV row becomes one file in this structure.

## Headword file sample

Filename: `Munmunja.md`

```markdown
---
title: Munmunja
aliases:
  - the unpatterned one
  - people outside the ledger
category: character
worldbuilding_axis: memory
english: Munmunja (the unwoven)
romanization: Munmunja
version: current
tags:
  - category/character
  - axis/memory
  - version/current
sources:
  - constructed text paragraph 1
related:
  - "[[Bare Memory]]"
  - "[[Clan Ledger]]"
  - "[[Reweaving]]"
  - "[[Nubi]]"
---

**Munmunja is a character or class unable to read or weave patterns but able to preserve clan affairs through bare memory.**

Munmunja carries memory outside the record in a society where [[Nubi]] and [[Clan Ledger]] monopolize knowledge. Even when [[Reweaving]] changes official records, Munmunja’s [[Bare Memory]] grounds the restoration of erased names.

**Translation**: Munmunja (the unwoven). Add the parenthetical explanation at first occurrence, then write Munmunja. Do not render it simply as “illiterate,” because that loses the world-specific implication of being unable to read patterns.

%% LLM %%

Munmunja is the existence that most quietly resists this world’s premise that it weaves records into cloth. Unable to read patterns and unable to obey the clan ledger’s law entirely, that lack is precisely what lets Munmunja notice gaps in records altered through reweaving. When everyone accepts newly woven Nubi as official memory, Munmunja’s bare memory holds on to the names that remain outside the ledger. Munmunja is therefore not an incompetent person, but one who asks again about what the record system has erased for itself.

%% /LLM %%

%% Notes %%

- Stage 4 sample-tone standard: retain tension among record, memory, and exclusion.
- Do not translate as illiterate.
- Future lorebook may expand under a title family such as “witnesses outside the record.”

%% /Notes %%
```

## Stub-file sample

Filename: `the-unpatterned-one.md`

```markdown
---
title: the unpatterned one
redirect: Munmunja
type: stub
tags:
  - stub
---

See [[Munmunja]].
```

## Structure judgment

| Area | Required? | Validation method |
|---|---|---|
| frontmatter | Required | YAML parsing PASS |
| title | Required | Matches canonical keyword |
| aliases | Conditional | Exists as an array when aliases exist |
| category | Required | Nine-classification allowed value |
| worldbuilding_axis | Required | Profile allowed value |
| related | Conditional | Target headword or stub exists |
| Definition | Required | First bold paragraph exists |
| Translation | Conditional | Exists when English name / translation note exists |
| `%% LLM %%` | Required | Empty allowed before Stage 4; filled 95% or more before handoff |
| `%% Notes %%` | Required | Work notes preserved |

## Idempotent-update rules

- Update on rebuild: frontmatter, definition, detailed description, translation notes.
- Preserve on rebuild: `%% LLM %%`, `%% Notes %%`.
- When a headword name changes, manually review whether to transplant LLM / notes from the old file.

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
