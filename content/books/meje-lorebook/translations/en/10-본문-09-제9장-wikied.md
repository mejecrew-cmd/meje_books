---
sourceLocale: ko
locale: en
sourceHash: "sha256:1a35f9b698fd6f81905a3e11c5aa4bbfcf7fa655c5fd2d586533118d8527bc95"
translationStatus: draft
---

# Chapter 9. Quoting Short Stories and Publishing in Multiple Languages — What Belongs in the Main Volume and What Does Not

Imagine a bookstore shelf holding *Forgotten Realms Campaign Setting* (2001), alongside more than a dozen Faerûn short-story collections such as *Realms of Mystery* (1998) and *Realms of Infamy* (1994). Both kinds of books belong to the same IP, but they are different books. One catalogs cities, characters, and factions; the other tells the story of one character or one event. Their series design makes the shared IP visible at a glance, yet their identities and uses remain distinct. CD Projekt's *The Witcher* follows the same structure: its *Compendium* (LOREBOOK) and Sapkowski's story collections are separate volumes. A book is defined not only by what it contains, but also by what it does **not** contain.

Six kinds of material do not enter the main LOREBOOK: the full text of the IP's short stories; numerical rules, if the IP has game rules; Librarying frontmatter entries marked **undecided**; entries marked **discarded**; game meta-language; and rule codes used for internal organization. The reasons for excluding these six categories shape the character of the LOREBOOK.

This is where the term SSOT (Single Source of Truth) first enters. It determines where a given fact is decided. If the LOREBOOK sits below the rulebook in the SSOT hierarchy, the rulebook determines numerical rules and the LOREBOOK merely receives that decision. An undecided entry would make the LOREBOOK itself provisional, so it moves into the body only after it has been settled during Librarying. A discarded entry does not appear in the body; it may be listed with its reason for rejection in Appendix 1, the glossary, or leave a trace only in an editorial note (an HTML comment). Game meta-language (“the player rolls the dice”) and rule codes (PHYS-M01) likewise belong elsewhere—in a rulebook, an appendix, or an editorial note.

The largest of the six excluded categories is the short-story text. Even if five years of operating an IP produces fifty to one hundred stories, their full texts do not enter the LOREBOOK. The first half of this chapter explains why and how those stories are handled; the second concerns multilingual publication, the work of carrying the main volume into other languages. The two subjects share a chapter because both require deciding **what enters the main volume and what stays outside it**.

## Why Short Stories Become a Separate Volume

Suppose an IP has one hundred short stories. At an average of 7,000 Korean characters each, they total 700,000 characters, or roughly 1,000–1,200 book pages. If the main LOREBOOK is about 450 pages, combining it with those stories creates a 1,450-page volume. A B5 hardcover of that length would have a spine more than 80 millimeters thick and would be difficult to hold in one hand.

Length alone makes separation natural, but the decisive reason is that readers have different **purposes**.

A LOREBOOK reader opens the book to search or browse an IP's materials. They want answers to questions such as “Who is this person?”, “Where is this city?”, or “Where did this event occur?”, and expect to obtain the relevant information from a page in one or two minutes. Dictionary and guidebook functions coexist in the same volume.

A short-story reader opens the book to experience the IP's stories in units of reading time. They read one story from beginning to end in a sitting, then meet the next at another time. The collection has almost no dictionary use, and even its sequential reading differs from reading a LOREBOOK: browsing a LOREBOOK means moving between entries; reading a collection means following one story from first line to last.

When both uses are bound together, readers must repeatedly decide whether they are searching, browsing the LOREBOOK, or reading a story. That decision burden makes the entire volume harder to approach. Separate volumes divide the burden: the main LOREBOOK serves search and browsing, while the companion collection serves narrative reading. Readers simply choose the book that matches their purpose.

The companion collection should be designed as a pair with the main volume. A B5 format matching the main book—or a portable A5 format—is recommended. One hundred stories at six to ten pages each produce 600–1,000 pages; hardcover or flexibound binding should account for the weight. The cover shares the series design, and a deluxe option may place both volumes in a slipcase. The collection receives its own ISBN and carries its own indexes by story, character, viewpoint, and location.

## Three Forms of Short-Story Citation — Three Levels of Depth

Full stories remain outside the main volume, but citations from them appear inside it. These are brief encounters with the IP's fiction while reading the LOREBOOK, divided into three forms by depth.

The deepest form is the *pull quote*. When an entry depends strongly on story material, a paragraph from the story is set off in a quotation box within the entry.

```markdown
The day of Kim Miseon, a paksu mudang, begins at three in the morning.
Before the household shrine she trims the incense and loosens the ash
that hardened overnight. This is the first rite of her working day.

> “That dawn began like every other. The incense burned a little longer,
> and a strand of smoke touched the shrine's ceiling before dispersing.
> Kim Miseon opened her palm at the shrine's feet. For the first time
> that day, a god touched it.”
> — Short Stories 023, “Dawn at the Shrine,” opening paragraph

The scene in which incense begins the day appears throughout the IP's
shaman households. Three in the morning is when a family meets its god,
and that hour gives form to a mudang's vocation.
```

A story paragraph enters the flow of the main prose as a quotation box, and the prose after it receives and develops the cited material. The standard is to quote about 50–200 Korean characters, state the source (“Short Stories XXX, ‘Title,’ paragraph location”), then interpret it immediately afterward. This form appears about five to ten times per Part.

A lighter form adds a companion-volume pointer to a **brief quotation**. One or two quoted lines establish the connection, followed by a note such as “Read the full text in Companion Short Stories §023.” It appears about ten to twenty times per Part.

The lightest form **mentions context without quoting**. The prose briefly locates the story—“Kim Miseon's initiation rite is the setting of Short Stories 023, ‘Dawn at the Shrine’”—without depending on its text. It tells readers where to go if they want the story and appears about twenty to thirty times per Part.

Together, the three forms yield roughly thirty-five to sixty references per Part, or about 400–700 citations across a twelve-Part LOREBOOK. This is enough for the IP's narrative material to flow naturally through the main volume without swallowing it.

## When a Short Story and the LOREBOOK Conflict

Story material and LOREBOOK material can conflict—for example, when a character's history is A in a story but B in the LOREBOOK. Priority is determined by the SSOT hierarchy.

The standard order places the character sheet first, then a story approved by the master reviewer, then the LOREBOOK, and finally prose in the Librarying Vault. Depending on the IP, a rulebook may rank higher still.

This means the LOREBOOK must follow facts established in an approved story. It cannot negate them; if its body conflicts with them, the LOREBOOK is updated to match.

The reverse principle governs untouched areas. The LOREBOOK may freely fill what the story never addresses. If no story covers a character's childhood, the LOREBOOK may do so and becomes that material's SSOT. In one sentence: **where a story speaks, the story takes priority; where it does not, the LOREBOOK decides**.

One more rule applies to the paired volumes: references must be bidirectional. If the main volume cites the companion, the companion should cite the main volume. After a story, a margin note might say: “This story, ‘Dawn at the Shrine,’ is also cited in LOREBOOK §2-3, Shamanic Systems. For more on Kim Miseon, see §9-1, Shamanic Figures.” Readers can then move freely from story to LOREBOOK and back again.

The long partnership between *Forgotten Realms* LOREBOOKs and story collections models this approach. Since *Realms of Valor* in 1988, around twenty collections have appeared beside the reference books. A story's first page might carry coordinates such as *Setting: Waterdeep, 1372 DR*, while the Waterdeep entry in a LOREBOOK contains a boxed story citation. A reader can leave the story to learn more about Waterdeep, or leave the reference entry to read the full narrative of an event. The two books support one another while carrying two different textures of the same IP.

## Multilingual Publication — Built on the Definitive Korean Edition

The second subject begins after the Korean LOREBOOK has been published: carrying it into other languages.

There are three principles: **the definitive Korean edition comes first**, **multilingual editions have a separate cycle**, and **translation notes are used directly**.

Multilingual publication begins only after the Korean edition reaches v1.0. If both proceed simultaneously, the Korean text starts bending under multilingual influence while translations fail to keep up with Korean revisions, splitting the material into divergent branches. Finishing the definitive edition first and assigning translation its own cycle protects consistency between them.

The central resource is the `translation_notes` field in Librarying frontmatter. Librarying has already recorded how each entry should travel—recommended transliteration, an English explanation, or a recommended footnote—so multilingual production can use those decisions directly.

For the fictional IP “○○,” the translation notes for “Sinnaenim Uisik” might read:

```yaml
translation_notes:
  - recommended_transliteration: "Sinnaenim Uisik"
  - english_explanation: "spirit-descent ritual; the moment when a Mudang first hosts a deity"
  - footnote_on_first_appearance: true
  - why_simple_translation_fails: "Western 'shaman' is broader; Mudang is gender-specific"
```

The English LOREBOOK then uses the data like this:

```markdown
The Sinnaenim Uisik¹ is the first ritual in which a Mudang receives
a deity. The ceremony lasts for several days, with family members
and neighbors present. ...

¹ Spirit-descent ritual. The Korean term Sinnaenim ("spirit-descent")
  Uisik ("ritual") refers specifically to the moment when a Mudang
  (Korean shaman) first hosts a deity. Western 'shaman' is broader;
  Mudang is gender-specific (often female).
```

The transliterated name appears in the English prose, the first occurrence receives footnote ¹, and the prepared explanation enters that note. Translation therefore does not begin from a blank page; it receives material designed upstream during Librarying.

The purpose is speed and consistency. Starting from scratch can require thirty to sixty minutes per entry, or 750–1,500 hours for 1,500 entries. Using prepared notes reduces that to roughly five to ten hours of review. Consistency also begins upstream: once Librarying establishes standard forms, every multilingual edition can reuse them instead of varying by work or translator.

## Transliteration, Semantic Translation, and Explanation — How a Name Travels

The decision for each entry branches among transliteration, semantic translation, and explanation. Three familiar publishing examples show why.

The names in *Harry Potter* split clearly even within one work. Korean editions transliterate “Hogwarts,” “Muggle,” and “Quidditch,” while translating “Sorting Hat” by function and treating “Diagon Alley” through an explanatory phonetic solution. Names close to proper nouns or world identity tend toward transliteration; functional terms tend toward semantic translation. If Librarying notes decide these branches in advance, Korean, Japanese, and Chinese editions remain consistent.

Tolkien provides an even clearer case. He wrote *Guide to the Names in The Lord of the Rings* for translators, specifying that some names should be transliterated, such as Frodo, while others, such as Bag End, should be translated for meaning. His guide became an SSOT for translations into more than forty languages. A LOREBOOK's Librarying translation notes occupy the same position.

Haruki Murakami's translations show a similar consistency. In the English *Norwegian Wood*, “Watanabe” and “Gotanda” are transliterated, while “Tokyo University” is explained in English. Character names follow transliteration, while institutions and places follow explanation. Categories must be decided before multilingual editions diverge.

These examples show that translation is fundamentally an act of **classification**. Every IP divides its terms into those to transliterate, translate semantically, or explain. Good classification lets each new language build naturally on the preceding edition; poor classification makes the same term shift across editions and confuses readers.

## Three Forms of Multilingual Publication

A LOREBOOK can be published in multiple languages in three ways.

The most common adds a separate English edition to the Korean main volume. The same material appears as a paired volume with matching design and specifications, usually six to twelve months after the definitive Korean edition.

A lighter form limits the main volume to Korean but adds English matter to selected end appendices, such as the glossary and name index. Readers receive English forms while reading Korean. This takes roughly one to two months after the definitive edition, because the forms come directly from the frontmatter's `english` and `romanization` fields.

The largest form is simultaneous multilingual publication of the main volume. It takes at least twice the production time of the Korean edition. The first two forms are standard; simultaneous publication is recommended only for a very large IP.

## Principles for Language in the Main Text

The definitive Korean LOREBOOK follows a simple rule: write the body in Korean; do not insert foreign-language prose directly except for necessary Chinese-character or Latin-script forms; manage multilingual forms only in frontmatter, glossaries, and metadata; and produce other-language editions on separate cycles.

In the Sinnaenim example, the body uses only the Korean term. On first appearance, a parenthesis may briefly add Chinese characters or romanization: “Sinnaenim Uisik (身降神 儀式, Sinnaenim Uisik) is …” Chinese characters are used only where the IP needs them, and romanization follows the national standard. An English semantic form such as “Spirit Possession Ritual” does not enter the Korean first occurrence; it appears only when the text is carried into an English edition.

The choice of what enters and what stays out defines the LOREBOOK. When excluded material—full stories, numerical rules, undecided entries, game meta-language, rule codes, and foreign-language body text—is clearly assigned elsewhere, the voice of what remains comes alive. The book holds a precise territory and sends material beyond it to other books: a companion story collection, a rulebook, or a multilingual edition. A book's weight is determined not by its page count, but by the clarity of its domain.

---

Copyright © 2026 Kim Dongeun WhtDrgon. and MEJE Works Corp. All rights reserved.

The copyright in this work belongs to Kim Dongeun WhtDrgon. and MEJE Works Corp. No part of this work may be reproduced, distributed, transmitted, displayed, performed, broadcast, translated, adapted, or otherwise used by any means without prior written permission from the copyright holders.
