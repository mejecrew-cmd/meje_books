---
title: "Part 6. Practice B. Stage 1 Extraction CSV Sample"
sourceLocale: ko
locale: en
sourceHash: "sha256:731e5b56009a0b65acd423331e5e45c07f17be63037d4158566baf0f2d6a4690"
translationStatus: draft
---

# Part 6. Practice B. Stage 1 Extraction CSV Sample

This practice section is a constructed example showing the output of Stage 1 extraction. Its purpose is not completeness but attitude. Stage 1 allows duplication and incompleteness, and gives priority to not missing material.

The example IP is **“Land of Nubi.”** All sample headwords are treated as coming from the same scene in this constructed IP.

## Input example

The paragraph below is constructed explanatory text.

> The Patternless stood behind the Gray Weaving Hall, where the reweaving trial was being held, holding an old lamp. The Weaving Maiden said that the lamp’s soot was evidence of Nubi forgery. Judge Yunhae opened the clan ledger, but the child with bare memory clearly spoke a name absent from the ledger. From that day, red thread was forbidden in the Gray Weaving Hall.

## Five-column CSV sample

```csv
IDX,Classification,Keyword,Description,Source
1,Character,The Patternless,A character or class unable to read or weave patterns but able to remember clan affairs through bare memory,Constructed text paragraph 1
2,Device,Reweaving,An operating principle that rewrites Nubi to alter records of history and law,Constructed text paragraph 1
3,Place,Gray Weaving Hall,The place where the reweaving trial took place,Constructed text paragraph 1
4,Object,Old lamp,An object held by the Patternless whose soot becomes a clue,Constructed text paragraph 1
5,Character,Weaving Maiden,A character who interprets the lamp soot as evidence of Nubi forgery,Constructed text paragraph 1
6,Event,Nubi forgery,An event or charge in which Nubi records were manipulated,Constructed text paragraph 1
7,Character,Judge Yunhae,A judge who conducted the trial by opening the clan ledger,Constructed text paragraph 1
8,Object,Clan ledger,A ledger containing clan names and records,Constructed text paragraph 1
9,Concept,Bare memory,A way of transmitting memory through bodies and speech without letters or patterns,Constructed text paragraph 1
10,Character,Child,A child who speaks a name absent from the ledger; identity unclassified,Constructed text paragraph 1
11,Value,A name absent from the ledger,A thematic expression revealing an existence excluded from official records,Constructed text paragraph 1
12,Mise-en-scène,Red thread,A color symbol forbidden in the Gray Weaving Hall,Constructed text paragraph 1
```

## Judgment notes

| Item | Judgment | Reason |
|---|---|---|
| Duplication allowed | PASS | It is not yet necessary to decide whether `The Patternless` is a character or a class. |
| Unclassified allowed | PASS | The child’s identity is confirmed in Stage 2. |
| Implicative-keyword extraction | PASS | `A name absent from the ledger` is not an explicit term, but is retained as a value-classification candidate. |
| No premature consolidation | PASS | `Nubi forgery` and `Reweaving` are not yet combined. |

## What Stage 1 does not do

- It does not confirm canonical keywords.
- It does not force synonym consolidation.
- It does not finalize worldbuilding axes.
- It does not decide hub and leaf.
- It does not decide translation names.

Stage 1 passes not when it is “organized,” but when it contains enough material for the next stage to judge.

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
