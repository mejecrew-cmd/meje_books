---
sourceLocale: ko
locale: en
sourceHash: "sha256:7e5d06f665a26adf6e54c2520632e09197837a58337b9d7b27dfc6faa739bf61"
translationStatus: draft
---

# Chapter 5. Looking into One Segment, Unpacking One Cluster of Events

In the previous installment we saw the outer form of the folder. This time we enter its innermost part: the segment tables on the second level. We choose one of the eighteen segments, open a single table, and see how the events written there connect to the causal chain of the event master.

## Why a Table Is a Table

Let us first briefly ask why the most basic form of material is a table. Suppose one character, one place, or one word appears a hundred times across a work. Those hundred appearances do not all have the same meaning. Darcy in Segment 1 and Darcy in Segment 12 carry different weights; the word “civility” also carries a different weight at the time of Segment 1 and at the time of Segment 9.

Anyone who has used Excel or Google Sheets will recognize how a table works: one row is one item and one column one attribute. Our segment tables look the same, but with one difference. An ordinary spreadsheet gathers information about the same item in one row. Our tables do not. **Even for the same character under the same name, we make a new row when the meaning changes within the work.** A row points not to a person, but to that person at one moment in time.

One row holds **what a keyword means at that point in time.** If the moment changes and its meaning changes, a new row is added for the same keyword. That is why a table is less a dictionary than **a vessel that holds time**.

## The Structure of a Segment Table

One row in a segment table consists of eleven fields.

**Category**—character, place, object, concept, institution, group, or event. **English keyword**—as written in the original. **Korean translation candidates**—alternatives divided by slashes. **Description or event account**—what the keyword means at that point, or what happens in the event. **Source**—the segment and chapter where it appears. **Row type**—whether the row is a simple description or an event. **Event number**—a serial number if it is an event row. **Preceding event**—the event of which this one is a result. **Related keywords**—keywords affected by the event. **Time marker**—time information in the work.

Eleven may look like many, but in practice all are needed. Remove any one of them and the material becomes lame.

## One Segment — The Hunsford Proposal Segment

Let us look at one actual segment: Segment 9 of *Pride and Prejudice* (Chapters 33–34). It is the work’s first major turning point.

As we saw in the previous installment, the novel is divided into eighteen segments. Segment 9 is when Elizabeth is visiting the Collinses at Hunsford in Kent. At the same time Darcy and his cousin Colonel Fitzwilliam are visiting Rosings, the estate of their aunt Lady Catherine. The two meet often; eventually Darcy proposes, and Elizabeth refuses him.

The table for Segment 9 has about thirty to forty rows. Here are several.

> **Category**: character | **English**: Colonel Fitzwilliam | **Korean**: 피츠윌리엄 대령 | **Description**: Darcy’s cousin, a military officer in his early thirties. Courteous and likeable. Becomes close to Elizabeth. Casually reveals that Darcy separated Bingley from Jane (Event 27). | **Row type**: description | **Time**: spring, Easter week

> **Category**: event | **Korean event name**: Colonel Fitzwilliam reveals Darcy’s separation of Bingley and Jane | **Event number**: 27 | **Preceding event**: 19 (Bingley’s sudden withdrawal to London) | **Related keywords**: Mr. Darcy, Elizabeth, Mr. Bingley, Jane Bennet | **Time**: Chapter 33, spring Easter week

> **Category**: event | **Korean**: Darcy’s first proposal and refusal | **Event number**: 28 | **Preceding event**: 27 | **Related keywords**: Mr. Darcy, Elizabeth, Mr. Wickham, Jane Bennet | **Time**: Chapter 34, spring Easter week

> **Category**: character (updated) | **English**: Mr. Darcy | **Korean**: 다아시 씨 | **Description**: By the revelation of Event 27, Elizabeth fixes him as “the chief agent of the separation.” In Event 28 he proposes and is refused. The segment ends with his pride deeply wounded. | **Row type**: description (updated) | **Time**: immediately after Chapter 34

The final row matters. Even within Segment 9, the same Darcy changes meaning twice. He begins as “the cousin of the man Elizabeth might have come to like”; after Event 27 he becomes “the chief agent of the separation”; after Event 28 he becomes “the rejected proposer.” Two new descriptive rows are added for the same person within a single segment.

This is the temporality of the table. One row is one point in time, the next row the next point. Even with the same keyword, different time means different meaning, and different meaning means a different row.

## A Handover Note Is Attached to the End of the Table

When a segment table is finished, we add a short note at the end. The note at the end of Segment 9 reads:

> Last event number: 28 (rejection of Darcy’s first proposal). Unresolved foreshadowing: Darcy appears likely to write a letter the following morning. The truth about Wickham and the Bingley–Jane matter will soon come out. Main relation states: Elizabeth ↔ Darcy — peak hostility. Elizabeth ↔ Wickham — still favorable (before the letter).

This note becomes the starting point of work on the next segment. When the next person—or the same person some days later—begins Segment 10, they read it and recover the context. It compresses the state of the work at the end of Segment 9 into one paragraph: a kind of time stamp.

## When They Merge into the Event Master

The **event master** is made by extracting only event rows from the eighteen segment tables and assembling them in one chronological table. It contains forty-nine main events, forty-one background events before the work begins, and the links between events.

Here is how Events 27 and 28 from Segment 9 look in the event master.

> **Event 19** (autumn, Chapter 21): Bingley’s sudden withdrawal to London. This becomes the remote cause of the disclosure of Darcy’s influence.
> **Event 27** (spring Easter week, Chapter 33): Colonel Fitzwilliam reveals Darcy’s separation.
> **Event 28** (spring Easter week, Chapter 34): Darcy’s first proposal and refusal.
> **Event 29** (the following morning, Chapter 35): Darcy’s letter, explaining both the Wickham matter and the Bingley matter.
> **Event 30** (Chapter 36): Elizabeth’s recognition: “Till this moment, I never knew myself.”

These five events are bound into a chain of causality. Event 19 makes Event 27 possible; Event 27 calls Event 28; Event 28 produces Event 29; Event 29 causes Event 30. The table shows that five scenes which might appear accidental or unconnected are in fact joined by one line of cause and effect.

When a translator works on Event 28, the first-proposal scene, one opening of the event master reveals this five-event chain. Event 28 did not happen abruptly: it directly results from the disclosure in Event 27, and Event 29’s letter will come after it and overturn everything. Translating Scene 28 with that connection in view produces a different Korean tone from translating it without it.

## Events Not Directly Shown in the Text Also Enter the Index

There is one final point. The event master also includes **events not directly depicted in the work’s text.**

Darcy’s birth, for example, is never directly described. Yet the event master has Background Event 8: “Darcy’s birth, approximately twenty-eight years earlier.” Where did that come from?

In one scene, Pemberley’s housekeeper Mrs. Reynolds says, “I have known Mr. Darcy since he was four years old.” The work’s timeline begins around 1811; Darcy is estimated at about twenty-eight in the novel. Combining these two facts yields his birth around twenty-eight years earlier—Background Event 8.

There are forty-one such background events in *Pride and Prejudice*: the building of Pemberley (inferred from Darcy’s reference to “the work of several generations”), Mr. and Mrs. Bennet’s marriage (stated as “three-and-twenty years ago”), and the period when Wickham was supported by Darcy’s father as a child. They result from gathering scattered fragments in the work and weaving them into one time map.

Why are such background events necessary? Because they determine the roots of age, relationship, and conflict. The fact that Wickham is “nearly of the same age” as Darcy and “grew up together” gives weight to Event 27 and Darcy’s letter in Event 29. One line saying that Collins’s father was at odds with Mr. Bennet provides the background for every conflict that follows when Collins appears, proposes, and is refused. These backgrounds must be organized as materials for a translator to identify characters’ motives accurately within a scene.

## Five Grades of Time Marking

Some background-event dates can be known exactly; others are estimates. We therefore attach five grades.

**[Confirmed]** — when the original states a date or weekday. “Monday, November 18th” in *Pride and Prejudice* has this grade; this line establishes 1811 as the work’s reference year.

**[Calculated]** — mechanically calculated from a confirmed date. “Twenty-three years before the reference year” receives this grade, becoming around 1788.

**[Range]** — narrowed but not exact. “Several generations ago” is [Range], estimated at between fifty and 150 years.

**[Estimated]** — calculated from age or duration with a margin of ±2–5 years. Darcy’s birth is [Estimated].

**[Relative]** — when only relative placement such as “the next day” or “immediately after” is known.

By marking these grades, the reliability of materials becomes visible. A translator can immediately see whether a time point is exact information or an estimate.

The next installment examines one more resource. It is not among the thirty-five kinds, but fills the parts those thirty-five cannot resolve: a resource that decides all sentence structures in a work at once. It is the practice of not solving the same fork again whenever one sentence divides into two or three. It is short, but was decisive for *Pride and Prejudice*.

---

Copyright (c) 2026 Kim Dong-eun WhtDrgon. MEJEWorks Corp. All rights reserved.
