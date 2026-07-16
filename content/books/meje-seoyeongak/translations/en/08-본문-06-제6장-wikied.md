---
sourceLocale: ko
locale: en
sourceHash: "sha256:8b638d3d42bccf2539865e2dfc4ba061554721f0ad8fc30335df594beada599b"
translationStatus: draft
---

# Chapter 6. A Sentence at a Fork: Material That Decides Structure in Advance

In the previous installment we went inside a segment table. Opening the table for Segment 9 of eighteen, we saw how each row holds time. This installment treats what tables cannot hold, yet where translation most often slips: **the structure of a sentence**.

## Where One Sentence Divides into Three

**A cat eating fish with a red head.**

What picture does this sentence bring to mind? Pause for a moment.

Three pictures are possible.

> 1) A **cat with a red head** is eating fish.
> 2) A cat is eating **a fish with red hair**.
> 3) A cat is eating **the head of a red fish**.

In the same sentence, what is red divides three ways, and so do who eats what. This is not particular to Korean. English has the same forks:

> *I saw the man with the telescope.*

Did I see the man using a telescope, or did I see the man who had a telescope? One English sentence divides in two. In any language, even when a word’s meaning is clear, forks arise from the ways words combine.

These forks hide throughout a work. When one sentence simultaneously lives as two or three meanings, the translator must select one and carry it into Korean. That selection must remain consistent across the work.

## What Thirty-Five Kinds of Materials Cannot Solve

The thirty-five kinds of materials we have seen so far all hold **the weight of words**. Character notes say what kind of person a character is; period encyclopedias say what a word of an era implies; motif dictionaries follow how a word repeats and changes within a work.

But no material can answer which of three readings one sentence takes. Materials can answer the weight of words, not the relations between words.

If we leave this blank, a translator decides every ambiguous sentence by personal judgment. Another translator makes another decision at the same point. Even one translator working on two parts of a work two or three months apart can give identical structures different decisions, because each must be solved again.

Consistency comes from not deciding again each time. So we made one more kind of material.

## The One Answer We Decide

Its promise is simple: **for every sentence in a work, we decide only once.** We write the decision as one line of text; when someone next meets the sentence, they open that line in the material.

The notation was not invented by us. Natural-language processing has used it as a standard for nearly sixty years: **bracket notation**. In scholarship it is called **Penn Treebank notation**; in practice, it is known as a **de facto standard**.

The first image above—where a red-headed cat eats fish—can be written as:

> (NP (NP (NP 머리가) (VP 빨간)) (VP (NP 생선을) (VP 먹는)) (NP 고양이))

It looks complicated at first, but the rule is simple. The first position inside a bracket is a **tag**; what follows is the **unit** gathered by that tag.

| Tag | Meaning |
|---|---|
| NP | Noun Phrase |
| VP | Verb Phrase or Adjective Phrase |
| S | Sentence |
| PP | Prepositional Phrase |

Read the line outward: the largest NP is “cat,” modified by two groups—“with a red head” and “eating fish.” In the second image, the bracket grouping changes: “fish with a red head” becomes one NP, and the cat eats it.

In the same Korean sentence, a different bracket position produces a different picture. Set the brackets once, and the picture is set once.

## English Example: The First Sentence of *Pride and Prejudice*

The first sentence of *Pride and Prejudice* is among the best-known lines in English literature.

> *It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.*

Literally, it says: “It is universally acknowledged that an unmarried man with a good fortune must need a wife.” In notation:

> (S (NP It) (VP is (NP (NP a truth) (VP universally acknowledged) (SBAR that (S (NP a single man (PP in possession of a good fortune)) (VP must be (PP in want of a wife))))))

It is a long line, but its groups are visible. The outer layer is the sentence “It is …”; within it is “a truth,” modified by “universally acknowledged” and the content clause “that ….” Inside the *that* clause is another sentence: “a single man … must be in want of a wife.”

One decision is needed here. Whom does **“in possession of a good fortune”** modify? If it modifies **a single man**, it means “a wealthy unmarried man needs a wife.” If it is taken as a complement of **must be**, it means “an unmarried man must be in the state of needing a wife while in possession of wealth.”

We chose the first, because it agrees with the work’s central motif: the position of a wealthy man in the marriage market. In the tree above, this decision is represented by `(NP a single man (PP in possession of a good fortune))`: PP appears inside NP and thus modifies *a single man*.

This decision operates consistently across the whole work. Expressions such as “in possession of” and “in want of,” which recur later, are handled with the same stance.

## The Shape of the Material

This material has its own place in the *Pride and Prejudice* folder. The folder is called “De Facto Standard,” and it contains one chapter file for each chapter. Since the work has sixty-one chapters, it has sixty-one files.

Inside a chapter file, entries look like this:

```
### [L0704]
Original: It is a truth universally acknowledged, that a single man...
Structure: (S (NP It) (VP is (NP (NP a truth) (VP universally acknowledged) ...)))
# Basis for decision: “in possession of a good fortune” is a PP modifying “a single man.”

### [L0707]
Original: However little known the feelings or views of such a man may be...
Structure: ...
```

One block has three or four lines: first, a **line label** that identifies the line in the original file; second, the **original text**; third, the **structure tree**; and, when the decision is non-obvious, one final line explaining its basis. Non-body lines—printing guides or illustration captions—are marked in advance as `Structure: (SKIP)` so they do not interrupt translation flow.

When a translator works on a chapter, they keep the corresponding chapter file beside them. On meeting an ambiguous sentence, they search the line label and immediately see the structure already decided.

## How It Is Made

The material is made in two stages.

**First, the stub stage.** The original text file is divided by chapter and saved as a Markdown file for each chapter. Trees are not filled in yet; only line labels and original text are aligned. Non-body lines are pre-marked `(SKIP)`.

**Second, the conversion stage.** The placeholders in each chapter file are filled once with a natural-language-processing tool, then reviewed by a person. Sentences grouped incorrectly by the tool are decided again by a person. A person adds a one-line note wherever the basis for a decision is non-obvious.

The total time is one to two hours per work: roughly thirty minutes of automatic generation plus thirty minutes to one hour of human review. Once made, it almost never needs to be made again—unless the original text changes.

## How It Works with the Thirty-Five Kinds

This material does not replace the thirty-five kinds. The thirty-five hold word meanings; this one holds sentence structure. Both use the same line labels, allowing a translator to view both sides in one place.

Free indirect discourse—where a narrator slips into a character’s interior voice—is a good example. The narrator guide among the thirty-five marks the walking scene in Chapter 36 as a free-indirect-discourse passage. This material shows how every sentence in that scene is structured. Read together, they make the technique’s structural features visible at once: clauses without main clauses, dependent clauses hanging independently, and points at which a character’s interior enters the narrator’s voice. Neither material alone can capture this combination.

Another collaboration concerns the honorific-and-tone guide, Common Core No. 8. It tracks changes in forms of address by character, but cannot capture precisely which noun-phrase position a title occupies—whether “Mr. Bennet” is a subject, a vocative, or an appositive. Here every title is marked as `(NP (NNP Mr.) (NNP Bennet))`; searching one pattern immediately finds every occurrence. Omission checks become automatic.

Materials support one another. The place where the weight of a word is recorded and the place where sentence structure is recorded bind the same work from two directions.

## The Attitude of Deciding in Advance

Translation consistency comes from not deciding anew each time. Whether two translators work on one text or one translator returns after six months, the same decisions must survive. Re-deciding produces divergence. To avoid divergence, decisions must be written into materials.

This one kind is an expression of that attitude. For roughly 5,000 sentences in a work, we decide once. The result is recorded in bracket notation on one line, and every time a translator meets an ambiguous sentence, they search that line. The decision is not solved again.

A cat eating fish with a red head: at three forks, we choose one of three once and for all. That is what material does.

Next time we move up one level. We will follow, decision by decision, how the kinds and number of all materials in *Pride and Prejudice* were set—the route that arrived at the number thirty-five.

---

Copyright (c) 2026 Kim Dong-eun WhtDrgon. MEJEWorks Corp. All rights reserved.
