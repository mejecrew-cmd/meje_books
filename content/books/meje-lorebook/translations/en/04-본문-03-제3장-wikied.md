---
sourceLocale: ko
locale: en
sourceHash: "sha256:9d7711a5ef240e82316b42f62263943bba9006f5faeb4a83261eca4077461897"
translationStatus: draft
---

# Chapter 3. After Librarying — From Vault to LOREBOOK

Imagine the desk of someone who has operated an IP for five years. Seven rulebooks are stacked on one side of the shelf. The first, second, and third editions of the core book are the thickest, with a few supplementary volumes between them and a worn copy of edition zero still remaining. A computer folder holds one hundred short stories as text files. The planning folder contains about thirty documents with names such as v1.0, v1.1, v1.1_revised, and v1.2_final_really-final. An external wiki is open on another monitor, fewer than two hundred of its pages still alive. Only one person's mind knows where the IP's **official material** begins and ends; if that knowledge fades, the IP itself fades. Librarying is the first step on the path from this scene to one LOREBOOK.

Now consider the scene after Librarying. Scattered materials have gathered in one Obsidian work folder. The sidebar lists 1,500 `.md` files alphabetically, and pressing the graph-view button reveals 1,500 nodes connected by 5,000–10,000 links on one screen. Densely clustered regions are the core of the IP; sparse regions are its outskirts. Material that existed only in one person's head has at last become something tangible. This is the Vault of an IP after Librarying, and the standard input accepted by LOREBOOK work.

Half the reason LOREBOOK can be completed in nine to fourteen months lies in the shape of this input. The stage of tracing scattered rulebooks, short stories, plans, and external wikis to extract, classify, and organize entries—Librarying—has already been completed. LOREBOOK receives the organized material and binds it into a book. This installment establishes the form of that input.

LOREBOOK may begin when a reasonable amount of IP material exists even if Librarying is not complete, with Librarying accompanying it as the paired tool for organization. This chapter, however, assumes a completed Vault as its standard input.

## Opening the Vault for the first time

When a completed Librarying work folder is first opened in Obsidian, the sidebar lists 1,000–2,000 `.md` files alphabetically. Folder structure differs by IP. Entry files may sit in folders by category—people, places, objects, and so on—or every file may occupy one folder, distinguished only by classification in frontmatter. LOREBOOK work is unaffected either way.

The interesting part is graph view. Press its button beside the search field and 1,500 nodes and the links between them spread across one screen. One node is one entry; one line is one wikilink leading from an entry to another. This image becomes a portrait of the IP.

Densely clustered regions are the IP's core. A group of characters may collect there, or the material for one city may converge in one region. Sparse areas hold less material, and that sparseness shows the IP's priorities rather than its weaknesses. If readers most often encountered shamanism, that region will be dense; if they most often encountered urban customs, that region will be dense. Librarying organizes the priorities already present in the IP.

LOREBOOK begins from 1,500 nodes and 5,000–10,000 links. The finished hardcover will be the result of gathering those nodes into parts, chapters, and sections.

## The shape of one entry

This text uses the fictional IP “XX” as an example. “XX” combines Korean shamanism and nineteenth-century British customs into a world where shamans, cuisine, and everyday life coexist in one city. Because the two source bodies are distant in time and space and overlap directly with no reader's IP, they make a useful abstract example for transferring the process. Entries such as spirit-possession ritual, male mudang, resentment, Haewon Restaurant, Six-Style District, Meryton, and the Hunsford parsonage belong to its material. The procedure applies in the same way to an IP of a different character.

Open one `.md` file in the Vault: an entry from the fictional IP “XX.”

```markdown
---
title: Spirit Possession Ritual
aliases: [Spirit-Descent Rite, Naerimgut]
category: Mechanism
worldbuilding_axis: Shamanism
english: Spirit Possession Ritual
romanization: Sinnaerim Uisik
version: Current
sources:
  - Rulebook 3rd ed. p.24
  - Short Story 047
related:
  - "[[Male Mudang]]"
  - "[[Resentment]]"
  - "[[Possession]]"
translation_notes:
  - preferred_transliteration: "Sinnaerim Uisik"
  - english_explanation: "spirit-descent ritual; the moment when a Mudang first hosts a deity"
tags:
  - category/mechanism
  - axis/shamanism
  - version/current
---

# Spirit Possession Ritual

## Definition

The rite in which a male mudang first receives a deity. In shamanism it is the weightiest moment in a mudang's life.

## Detailed explanation

The spirit-possession ritual is the first rite in which a male mudang accepts a deity into himself. After it ends, he becomes a conduit for that deity. The ritual lasts several days and is attended by his family and neighbors. If possession occurs, he is recognized as a formal male mudang; if it fails, he cannot try again.

%% LLM %%

Within this IP, the spirit-possession ritual is the moment when a mudang's soul first receives another soul. As the ritual proceeds, the mudang's body grows lighter until, at one moment, it no longer belongs to him alone. That lightness is the beginning of his vocation.

%% /LLM %%

## Related entries

- [[Male Mudang]]. The vocation after the ritual
- [[Resentment]]. What the ritual releases
- [[Possession]]. The phenomenon produced by the ritual
```

This one file is one unit of input received by LOREBOOK.

The area enclosed by `---` at the top is frontmatter. It is written in YAML (YAML Ain't Markup Language), a structure pairing keys and values with colons. People rarely read it directly. Obsidian search and automation scripts do, and LOREBOOK automation depends upon it.

Below comes a one- or two-line definition, followed by two or three paragraphs of detailed explanation. Next is the prose block enclosed by `%% LLM %%`. It contains 200–1,000 Korean characters of prose produced by an AI collaborator during Librarying's fourth narrative-writing pass. The `%%` is an Obsidian block marker that lets scripts extract the prose separately. A list of related entries comes last.

The fact that these five parts appear in the same form across 1,500 `.md` files makes LOREBOOK automation possible. When the same material always occupies the same place, all 1,500 entries can be handled together without reading them one by one.

## Nine classifications — what does it do in the narrative?

The value of the frontmatter `category` field is one of nine classifications. They ask what **function** a keyword performs in the narrative. The question is more interesting than the categories themselves.

What does this entry do in the story? Is it a label (technical term), a personality (person), a stage (place), a tool (object), something that happened (event), an operating principle (mechanism), an atmosphere (mise-en-scène), a unit of thought (concept), or an ethical principle (value)? The answer is one of nine.

Consider entries from the fictional “XX.” Black Aperture, Coffin, and Implant are IP-specific names, so they are technical terms. Kang Myeong-suk, male mudang, and the Bennet family are personalities, so they are people. Meryton, shrine, and the Hunsford parsonage are spaces, so they are places. Magic wand and East India Company are tools or abstract organizations, so they are objects. A proposal, the appearance of Black Aperture, and the spirit-possession ritual happened, so they are events. Dimensional travel, mating, and possession are operating principles, so they are mechanisms. Rain, black, and drumbeats are recurring sensory motifs, so they are mise-en-scène. Entailment and marriage economics are abstract ideas, so they are concepts. Freedom, sacrifice, and destiny are ethical principles, so they are values.

The unusual feature is that the nine classifications apply identically to every IP. A martial-arts technique in a wuxia IP, a warp drive in science fiction, and entailment in a nineteenth-century British IP all enter one of the same nine slots. Pass Tolkien's *Silmarillion* through them and Valinor (place), Ilúvatar (person), the Silmarils (objects), Dagor Dagorath (event), magic (mechanism), and the Ring of Barahir (object) all fit. Haruki Murakami's *Kafka on the Shore* likewise yields Takamatsu (place), Kafka Tamura (person), the entrance stone (object), the cat-killing incident (event), and dreams as mediation (mechanism). The very fact that every entry of every IP must fit the same nine classifications suggests a universal narrative skeleton: every story has people, places, events, tools, and operating principles.

## Worldbuilding axes — which domains compose this IP?

Worldbuilding axes ask a different question: to which **domain** of this IP does a keyword belong? Unlike the nine classifications, each IP gives a different answer.

The fictional “XX” has six axes: shamanism, cuisine, spirits, the living world, relationships, and general. This means the IP recognizes itself as a sum of six domains. Another IP defines them differently. Fantasy might use magic system, world geography, races, political factions, mythology, and general. Science fiction might use technology, social system, space geography, biology, history, and general. Wuxia might use martial arts, schools, jianghu factions, world, bonds, and general. *Eberron* recognizes itself through five axes such as magitech, dragonmarks, the Five Nations, religion, and general. The single axis Magitech distinguishes its identity from the Weave magic of *Forgotten Realms* and becomes a branch point separating *Eberron* from other D&D settings. An IP analysis of *Disco Elysium* might reveal political ideology, class conflict, amnesia, urban customs, and magical realism as five axes that show the game's identity.

The number and names of axes are decided in Librarying's first cycle. With too few—three or less—too many entries gather under one axis and classification loses meaning. With too many—eight or more—boundaries blur and assigning each entry becomes difficult every time. Five to seven is usually natural.

Worldbuilding axes are interesting because they are a **creative decision**. Declaring that “this IP consists of shamanism, cuisine, spirits, the living world, relationships, and general” means the same material could have been divided differently for another IP. “XX” might have combined shamanism and cuisine, or joined spirits and the living world rather than separating them. The decision about which domain becomes one axis reveals the IP's understanding of itself.

## Two orthogonal coordinates

The nine classifications and worldbuilding axes become core LOREBOOK data because neither affects the other. In mathematics, this relation is called orthogonal.

The same person may belong to shamanism, cuisine, or spirits. Being a person in the nine classifications does not decide the worldbuilding axis. The reverse is equally true: an entry in shamanism may be a person, a place, or a mechanism.

Each entry has two coordinates: one of nine classifications multiplied by one worldbuilding axis. “Spirit Possession Ritual,” for example, is mechanism × shamanism. The two coordinates form a plane, and each of 1,500 entries occupies one point somewhere on it.

This plane enables automated part mapping. The nine-classification coordinate can decide the part, and the worldbuilding axis the chapter within that part. Instead of manually assigning 1,500 entries one by one, a two-coordinate search automatically produces mapping candidates.

## Thirteen columns — the material carried by one entry

Librarying fills each entry with thirteen fields, called the thirteen columns. Grouped by function, they form five areas.

There are three identifiers: `IDX` (serial number), `title` (representative spelling), and `aliases` (alternative names). There are two classifications: `category` (nine classifications) and `worldbuilding_axis`. These five answer **what to call the entry** and **where to put it**. Three fields make body material: a one-line definition, two or three paragraphs of detailed explanation, and related keywords (`related`, other entries in wikilink form). Three are multilingual: `english`, `romanization`, and `translation_notes`, filled for IPs with foreign-language editions. Two are metadata: `version` (Current, Past, Discarded, Dual Label, or Undecided) and `sources` (where the entry appears in the IP's material).

Every one of the thirteen is called during LOREBOOK work. `title` becomes the entry title; `category` and `worldbuilding_axis` drive part mapping; the definition becomes a one-line summary; detailed explanation becomes an introductory paragraph; `related` becomes the Related entries section; and `version` determines whether the item may appear in the body. LOREBOOK directly inherits eight—`title`, `aliases`, `category`, `worldbuilding_axis`, `english`, `romanization`, `version`, and `translation_notes`—and adds three decisions of its own: `hub_or_leaf`, `lorebook_section`, and LOREBOOK-specific tags.

This principle is one axis of reducing the work to nine to fourteen months. If LOREBOOK directly decided frontmatter for 1,500 entries, it would take another week. Inheriting Librarying's thirteen columns removes that week.

## Conversion patterns — 1:1, N:1, and 1:N

The relationship between 1,500 Vault entries and LOREBOOK entries is usually 1:1, but not always. Two other patterns sometimes appear, and deciding them is part of the human work.

Most entries—about eighty percent—move across 1:1. One Vault entry becomes one LOREBOOK entry. The spirit-possession ritual above becomes an entry in Part 2, §3, Shamanic System. Its Librarying frontmatter moves directly into LOREBOOK frontmatter and its prose block into the body. This is the lightest conversion pattern.

About fifteen percent follow an N:1 pattern, integrating several Vault entries into one LOREBOOK entry. Suppose the “XX” Vault has six entries—Court District, Salons, Hip District, Capital District, Nomads, and Commoners' District—all classified as *places* on the *living-world* axis. If together they form one larger unit called “Six Mornings,” LOREBOOK must decide whether to integrate them into one entry or keep six separate.

An integrated entry shows all six areas together, giving readers the large picture of the IP's six style districts. Separate entries treat each in detail, letting readers move between and handle them individually. Both can coexist: an integrated overview in Part 4, §1 and six separate entries in Part 6, §1, so readers grasp the big picture first and detailed everyday life later. Someone who knows the IP's character and reader usage decides which approach fits.

Conversely, about five percent use a 1:N pattern, splitting one Vault entry into several LOREBOOK entries. It is limited to mega-hubs. Suppose the “XX” Vault has a mega-hub entry called `Black Aperture`. It stands at the IP's center and every other entry cites it. It is one entry in the Vault, but too long and too frequently cited to fit a single LOREBOOK article. LOREBOOK then divides it into three: Part 2 §1, the Nature of Black Aperture (definition and laws); Part 4 §3, Black Aperture Emergence Sites (geography of eruptions); and Part 7 §2, Black Aperture Response Professions (occupations that handle it).

Splitting too many entries scatters information, so 1:N applies only to mega-hubs, not ordinary hubs.

## Version status — the time layers of an IP

The `version` field has one of five states, each pointing to a temporal layer of the IP. It preserves traces of labels and meanings changing as an IP operates for five or ten years.

Most entries are **Current**: material used now, appearing normally in the LOREBOOK body. Next is **Past**. If a nation called “White Dragon Kingdom” in edition one is renamed “Camellia Kingdom” in edition three, the former becomes a past label. It may appear in the body, but must be marked as an old label and shown together with the current one. **Discarded** entries are no longer used and do not appear in the body, leaving traces only in the appendix glossary. **Dual Label** means two labels intentionally coexist, such as regional names for the same object. Both may appear in the body, or multilingual consistency material may be cited. **Undecided** entries are not yet confirmed and do not enter the body.

Only Current, Past, and Dual Label enter the LOREBOOK body. Discarded and Undecided must both return zero results in a body grep. The five states contain the IP's passage through time in one line of frontmatter.

## Tags — turning the Vault into a query engine

The frontmatter `tags` field connects directly to Obsidian's tag system. Librarying automatically attaches tags such as `category/mechanism`, `axis/shamanism`, and `version/current`. LOREBOOK adds `lorebook/hub` for hub or leaf classification and `lorebook_section/02-§3-shamanic-system` for part, chapter, and section location.

This tag system turns the Vault from static material into a queryable database.

Entering `tag:category/mechanism AND tag:axis/shamanism` in Obsidian search extracts every mechanism entry in the shamanism domain at once. `tag:category/person AND tag:axis/cuisine` finds the cuisine-domain characters. `tag:version/discarded` finds everything excluded from the body. `tag:lorebook/hub` finds every deep-entry candidate. Predefine two-coordinate combinations for each part of the twelve-part form and search them to generate part-mapping candidates automatically.

Appendix generation happens in the same place. Appendix 5's NPC mini-cards can be extracted from `tag:category/person`, Appendix 4's chronology compendium from `tag:category/event`, and Appendix 1's glossary by extracting the definition column of every entry. Consistency checks also follow: if `tag:version/discarded` appears in the body, FAIL; if `tag:lorebook/hub` has fewer than 200 Korean characters of body text, WARN.

The mere presence of one line of tags moves classification, search, and validation of 1,500 entries into automation.

## When full production begins

At the point where full production begins in the next installment, the material on the reader's desk is simple: one Obsidian Vault work folder; 1,000–2,000 `.md` files within it; thirteen columns filled in each file's frontmatter; nine classifications and worldbuilding axes decided for the IP; and a functioning Obsidian graph view.

If these conditions are not met, reinforce the material in Librarying. Return to the second integration pass to fill missing columns; return to the first cycle to decide the nine classifications and axes. If all are present, proceed directly to determining the skeleton.

This is the complete form of Librarying material: 1,500 Vault entries; the five-part structure of one `.md` file; thirteen columns; two coordinates of nine classifications and worldbuilding axes; three conversion patterns; five version states; and the tag system. This material is LOREBOOK's input. Full production receives it and moves it into one book.

---

Copyright © 2026 Kim Dong-eun WhtDrgon and MEJE Works Corp. All rights reserved.

Copyright in this work belongs to Kim Dong-eun WhtDrgon and MEJE Works Corp. Without the copyright holders' prior written consent, no part of this work may be reproduced, distributed, transmitted, displayed, performed, broadcast, translated, adapted, or otherwise used.
