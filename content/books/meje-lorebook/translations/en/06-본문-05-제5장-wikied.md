---
sourceLocale: ko
locale: en
sourceHash: "sha256:811044369b63c756519c1cec59c5c166043d3f1361691fccb069b5fd2c97ca57"
translationStatus: draft
---

# Chapter 5. The Shape of One Entry — Standard Template and Frontmatter

Think of a Wikipedia entry: Admiral Yi Sun-sin, Hwaseong Haenggung, or the Imjin War. Open the page and there is a one-line summary at the top, an introductory paragraph below it, body sections divided by `##` headings, and related documents, external links, and notes at the end. Move to another entry and the form is the same. Readers are already accustomed to that consistency.

The form of a LOREBOOK entry is a contract between writer and reader: a promise to apply Wikipedia's consistency to one volume.

No matter which page readers open, the same kind of material appears in the same place. They do not need to relearn the format when moving between entries and can concentrate on content. From entry 1 to entry 1,500, the one-line summary is always in the same position, followed by the introduction; body sections always begin with `##`; related entries always come at the end. That consistency is the value of a standard template.

Using one vessel for different material does not make the vessel monotonous. Because the vessel is the same, differences in material become clearer. That is why *Forgotten Realms* has maintained one entry structure for more than thirty years since its first edition in 1987, and why the *Final Fantasy Ultimania* series repeats the same two-page spread from X (2001) to XVI (2024). The more consistently the form repeats, the more deeply differences in material stand out.

## Five parts of one entry `.md` file

One `.md` file has five parts, each corresponding to a different **reading speed**.

Frontmatter is invisible to readers. Written as YAML metadata at the head of the file, it is read by Obsidian search and automation scripts. Readers do not see it, but it supports search accuracy, automated part mapping, and consistency in multilingual publication. Invisible material creates trust.

The one-line summary lets readers identify the entry in one second. It is one sentence of no more than one hundred Korean characters in a blockquote beginning with `>`.

The introductory paragraph gives the large picture within one minute. It has no heading and runs one to three paragraphs, or 200–600 Korean characters, adding substance to the identity established in the summary.

Body sections are where readers stay for about ten minutes. Several natural sections begin with `## Title` and hold the deeper material.

Related entries are the exit to the next entry. Five to ten wikilinks let readers move through and touch the LOREBOOK's connected structure.

The five parts therefore build depth in steps suited to four units of time: one second, one minute, ten minutes, and movement.

## Frontmatter — the weight of invisible material

Open the frontmatter for an entry in the fictional IP “XX.”

```yaml
---
title: Spirit Possession Ritual
aliases: [Spirit-Descent Rite, Naerimgut]
category: Mechanism
worldbuilding_axis: Shamanism
english: Spirit Possession Ritual
romanization: Sinnaerim Uisik
version: Current
hub_or_leaf: hub
lorebook_section: 02-§3-Shamanic-System
tags:
  - category/mechanism
  - axis/shamanism
  - version/current
  - lorebook/hub
  - lorebook_section/02-§3-Shamanic-System
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
---
```

These eleven or twelve fields are all called by LOREBOOK at different moments. `title` appears in the body heading and index; `aliases` lets a search for an alternative name find the canonical entry; `category` and `worldbuilding_axis` are the two coordinates for part mapping; `english` and `romanization` serve the English edition and parenthetical first mentions; `version` prevents a **Discarded** entry from entering the body.

LOREBOOK adds three fields above the eight inherited from Librarying. `hub_or_leaf` classifies weight; Librarying proposes candidates by automatic counts and LOREBOOK makes the final decision. `lorebook_section` records the part, chapter, and section. `tags` combines Librarying's automatic tags with `lorebook/hub` and `lorebook_section/*`. An IP with multilingual publication adds `translation_notes` as the twelfth field; one without it ends at eleven.

Frontmatter writes the identity of an entry in advance at the metadata layer. Although invisible to readers, accurate metadata moves search, part mapping, and multilingual publication into automation.

## One-line summary — the one-second promise

The one-line summary lets a reader identify the entry within one second: a single blockquote line of no more than one hundred Korean characters.

```markdown
> The rite in which a male mudang first receives a deity. The weightiest moment in a mudang's life.
```

The difference between a good summary and one to avoid is often metacommentary. “This page discusses the spirit-possession ritual” consumes the entire line while conveying nothing. The page's location already says what entry it covers. A good summary delivers the core immediately. The second sentence above tells us that this rite divides one person's entire life.

For the Six-Style Districts of “XX,” a good line is “Six mornings: six style districts that determine the character of one city,” not a bare list of district names. For the mega-hub Black Aperture, “Every mechanic in this IP flows from this one black smoke” invites the reader more effectively than “Definition, history, and operating principles of Black Aperture.”

Market examples follow the same rule. Waterdeep is *The City of Splendors, the greatest jewel of the Sword Coast.* Sharn is *the City of Towers, where magic and ambition reach the clouds.* Tidus in *Final Fantasy X Ultimania* is “A blitzball prodigy. The son of a dream that grew well.” Each compresses the entry's place in the IP and the first thing a reader should know. Those are the two answers that belong within the line.

## Introductory paragraph — the large picture in one minute

The introduction follows without a heading, in one to three paragraphs or 200–600 Korean characters.

```markdown
The spirit-possession ritual is the first rite in which a male mudang accepts a deity into himself. When it ends, he becomes a conduit for the deity. It lasts several days and is attended by his family and neighbors.

The rite begins the vocation of mudang and shows how this IP's shamanic system determines a person's life. If possession occurs, he is recognized as a formal male mudang; if it fails, he cannot try again.
```

The introduction needs three things: a flowing definition longer than the summary but shorter than the body; the entry's position in the IP and relationship to other entries; and why the reader should know it. Together they provide the large picture in one minute. More than 800 Korean characters delays the body; fewer than 150 leaves a weak bridge.

## Body sections — the weight of natural titles

Body sections follow with natural `##` headings.

```markdown
## The course of the rite

The spirit-possession ritual proceeds over several days or weeks. ...

## In the mudang family's house

The rite usually takes place in the family's home. ...

## Changes after the rite

A mudang who completes the rite successfully ...
```

The major decision is the heading. “The course of the rite” immediately signals time; “In the mudang family's house” signals space. Avoid generic meta labels such as “Information,” “Details,” and “Overview,” which can apply to any section and identify none. Remove temporary labels such as TBD and WIP during review. Also avoid report-like combinations such as “1. Environmental Impact” when a natural prose title would fit. Every `##` heading should reveal its subject before the paragraph is read.

## Entry categories — card, standard, and deep

The 1,500 entries do not all have the same length. Their weight, decided through `hub_or_leaf`, divides them into three categories.

A **card entry** runs 800–2,000 Korean characters, about one page. It suits NPCs, companies, tools, and short events, using an introduction, one or two body sections, and related entries. Roughly 1,000–1,200 of 1,500 are cards, usually leaf entries.

A **standard entry** runs 1,500–3,000 Korean characters, about one and a half to two pages. It suits places, everyday life, and culture, with two or three body sections. Roughly 200–300 are standard, usually middle-weight entries.

A **deep entry** runs 3,000–5,000 Korean characters, about two to three pages. It suits cities, factions, and core laws, with three to five body sections. Roughly 100–150 are deep, usually hubs.

The natural distribution is seven to ten percent deep, thirteen to twenty percent standard, and seventy to eighty percent card. Citation counts suggest hub and leaf candidates automatically, but a person who understands the IP makes the final decision: a central person may be deep while a minor person remains a card.

## Related entries — bridges to the next entry

```markdown
## Related entries

- [[Male Mudang]]. The vocation after the rite
- [[Resentment]]. What the rite releases
- [[Possession]]. The phenomenon produced by the rite
- [[Mudang Family House]]. Where the rite often takes place
```

This section builds the LOREBOOK's network. It inherits `related` from Librarying and expands five to ten wikilinks, each with a short explanation of the relationship. Across 1,500 entries this creates roughly 5,000–10,000 links. LOREBOOK may add connections that Librarying did not cover, such as links between entries within one part. Relationship text matters: without it, readers cannot easily choose where to move; with it, they follow their interest naturally.

## Editorial notes and footer — material hidden from readers

After related entries comes an HTML comment, hidden in Obsidian preview, static-site output, and print conversion.

```markdown
<!--
Editorial notes:
- Primary source: Vault [[Spirit Possession Ritual]]
- Librarying frontmatter synchronized: 2026-04-30
- Illustration spec: ritual scene, full color, two-page spread possible
- Undecided setting: duration of the rite
- Writing issue: review whether the possession description is too violent
- Status: ●
-->
```

It stores the source, synchronization date, illustration specification, undecided settings requiring human judgment, review issues, and six-stage progress state (`☐/◐/◑/◕/●/✓`). These traces belong in the file but not before readers.

The final line is a footer.

```markdown
*- 02_Part2_World-Laws/03_Shamanic-System/01_Spirit-Possession-Ritual / [LOREBOOK name] v0.3 / 2026-05-01*
```

It records file location, LOREBOOK version, and creation or update date. In print it becomes small text at the page bottom; on the web it becomes page metadata. It gives readers a stable citation location.

## Direct conversion of Librarying frontmatter

Frontmatter is the most automatable of the five parts. LOREBOOK inherits eight Librarying fields through mechanical mapping. In a thirteen-column CSV, **representative keyword** maps to `title`; **classification** to `category`; **worldbuilding axis** to `worldbuilding_axis`; **alternative names** to `aliases`; **English name** to `english`; **romanization** to `romanization`; **version status** to `version`; and **translation notes** to `translation_notes`. **Definition** supplies the one-line summary and first introductory sentence; **detailed explanation** supplies the introduction; **related keywords** map to `related`; **source list** to `sources`. `IDX` is not used by LOREBOOK.

LOREBOOK adds `hub_or_leaf`, `lorebook_section`, and `lorebook/*` tags.

Because the mapping is mechanical, it is ideal for automation. Given the thirteen-column CSV, an AI collaborator can generate 1,500 `.md` files with filled frontmatter in about five minutes. Work that would take a person a week is reduced to minutes. This is one axis of the shortened LOREBOOK schedule.

## The same vessel makes differences clearer

At first, using the same format for 1,500 entries may look monotonous. Reading through a volume reveals the opposite effect.

The summary is always first, the introduction second, body sections next, and related entries last. Consistency reduces cognitive load. Readers moving between entries never have to ask how the next page is organized; their attention goes directly to **content**.

The same vessel makes differences between materials more visible because they are not buried in visual or structural noise. When the spirit-possession ritual and the character Kim Mi-seon share the same five-part structure, their distinction—rite and person, mechanic and lifetime, abstraction and concrete life—reaches readers as a difference in content rather than format.

When a reader meeting an IP after five years moves smoothly from the first entry to the next, half that smoothness comes from interesting material and half from formal consistency. This is why a reader following *Forgotten Realms* across five editions can orient themselves immediately, and why *Eberron* (2004) and *Rising from the Last War* (2019) meet on the same entry structure fifteen years apart. A standard template does not restrict the writer's freedom; it creates the reader's trust.

---

Copyright © 2026 Kim Dong-eun WhtDrgon and MEJE Works Corp. All rights reserved.

Copyright in this work belongs to Kim Dong-eun WhtDrgon and MEJE Works Corp. Without the copyright holders' prior written consent, no part of this work may be reproduced, distributed, transmitted, displayed, performed, broadcast, translated, adapted, or otherwise used.
