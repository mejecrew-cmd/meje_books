---
title: "Part 6. Practice C. Stage 2 Consolidation CSV Sample"
sourceLocale: ko
locale: en
sourceHash: "sha256:b82ae8931a2832d55e2cb66c30f8c0a401484bba480056275917902550623fc3"
translationStatus: draft
---

# Part 6. Practice C. Stage 2 Consolidation CSV Sample

This practice section is a constructed example showing how scattered Stage 1 rows become organized as headword units in Stage 2. Stage 2 aims not to write pretty sentences but to stably establish the canonical keywords, aliases, worldbuilding axes, and related keywords on which the Vault depends.

The example IP is **“Land of Nubi.”** It continues by showing how the Stage 1 extraction sample in Practice B is gathered into headwords in Stage 2.

## Thirteen-column definitions

| Column | Description |
|---|---|
| IDX | Headword row number |
| Classification | One of the nine classifications |
| Canonical keyword | Official headword that becomes the Vault filename |
| Worldbuilding axis | An axis allowed by the profile |
| Alternate names / aliases | Alternative spellings referring to the same thing |
| English name | Spelling for translation or internationalization |
| Romanization | Romanized spelling of the Korean headword |
| Definition | A self-contained definition of one or two sentences |
| Detailed description | A short explanation containing relations and operational context |
| Related keywords | List of related headwords by canonical keyword |
| Version status | current / past / retired / dual notation / unclassified |
| Translation note | Translation decisions and cautions |
| Source list | Bundle of Stage 1 row sources |

## Thirteen-column CSV sample

```csv
IDX,Classification,Canonical keyword,Worldbuilding axis,Alternate names / aliases,English name,Romanization,Definition,Detailed description,Related keywords,Version status,Translation note,Source list
1,Character,The Patternless,Memory,"the unpatterned one; people outside the ledger",Munmunja (the unwoven),Munmunja,The Patternless is a character or class unable to read or weave patterns but able to preserve clan affairs through bare memory.,The Patternless carries memory outside the record in a society where [[Nubi]] and [[Clan ledger]] monopolize knowledge. Even when [[Reweaving]] changes official records, the Patternless’s [[Bare memory]] grounds the restoration of erased names.,"Bare memory; Clan ledger; Reweaving; Nubi forgery",current,"Define as Munmunja (the unwoven) on first occurrence, then use Munmunja. Do not translate simply as illiterate.",Constructed text paragraph 1
2,Device,Reweaving,Weaving,"weave again; Nubi revision",Reweaving,Gochyeo Jjagi,Reweaving is the operating principle of rewriting Nubi to change records of history and law.,Reweaving alters the arrangement of events recorded in [[Nubi]] and modifies official memory. When successful, [[Clan ledger]] and trial records change together, but discrepancies remain for people with [[Bare memory]].,"Nubi; Clan ledger; Bare memory; Nubi forgery",current,"Reweaving recommended. Translating merely as repair weakens the sense of historical revision.",Constructed text paragraph 1
3,Place,Gray Weaving Hall,Law,"behind the Weaving Hall; gray hall",Grey Weaving Hall,Hoesaek Jikjodang,The Gray Weaving Hall is the judicial site of weaving law where reweaving trials are held.,The Gray Weaving Hall is where the legality of [[Nubi forgery]] and [[Reweaving]] is contested. Gray signifies neutrality belonging to no clan’s thread, although influential clans retain power in actual trials.,"Nubi forgery; Reweaving; Red Thread; Judge Yunhae",current,"Grey Weaving Hall recommended. Court is stronger than temple, but treat as a proper place name.",Constructed text paragraph 1
4,Mise-en-scène,Red Thread,Weaving,"forbidden red thread; red yarn",Red Thread,Bulgeun Sil,Red Thread is a color symbol forbidden in the Gray Weaving Hall.,After [[Nubi forgery]], Red Thread is forbidden in the Gray Weaving Hall and evokes both record manipulation and responsibility for blood. It may appear as an object but functions as a repeated image, so it is managed as mise-en-scène.,"Gray Weaving Hall; Nubi forgery; Clan ledger",current,"Red thread may conflict with East Asian fate metaphors. Reinforce its meaning as a forbidden color at first occurrence.",Constructed text paragraph 1
```

## Stage 2 review points

| Item | Passing criterion |
|---|---|
| Canonical-keyword duplication | The same canonical keyword does not exist in two rows. |
| Worldbuilding axes | Use only values allowed by the profile. |
| Aliases | Manually review if the same alias points to different headwords. |
| Related keywords | Write by canonical keyword; do not arbitrarily insert alias links. |
| Version status | Keep the unclassified proportion at 5% or lower. |
| Translation notes | State prohibited translations, source-language retention, and first-occurrence explanations where needed. |

## What humans decide finally in Stage 2

- Synonym bundles
- Canonical keywords
- Creation or change of worldbuilding axes
- Version status
- Translation decisions

Automation can make candidates, but humans approve these five because they change the meaning of the IP.

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
