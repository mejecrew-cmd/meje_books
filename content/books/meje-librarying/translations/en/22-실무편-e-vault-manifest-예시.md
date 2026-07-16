---
title: "Part 6. Practice E. `_vault_manifest.json` Sample"
sourceLocale: ko
locale: en
sourceHash: "sha256:cfd9a8db6dcfe5d83f5d208b5740c6242f4b094dd28b5c0ef3296fcbb73de594"
translationStatus: draft
---

# Part 6. Practice E. `_vault_manifest.json` Sample

A manifest is the receipt of a build and the status board for handoff. With this file, one can quickly judge which inputs created the Vault, how far completion has progressed, and whether it can be handed to the next task.

The sample below is a format example for the constructed IP **“Land of Nubi.”** In an actual project, file counts, axis lists, batch states, and verification results are filled with measured values.

## Manifest sample

```json
{
  "schema_version": "meje-librarying-manifest-v1",
  "project": {
    "name": "Land of Nubi",
    "profile": "land_of_nubi_profile.md",
    "vault_path": "./vault",
    "source_catalog": "reference_file_names_and_locations.md"
  },
  "build": {
    "current_phase": "phase_4_writing",
    "created_at": "2026-07-08T10:00:00+09:00",
    "updated_at": "2026-07-08T14:30:00+09:00",
    "source_csv": "02_consolidated_headwords.csv",
    "builder": "build_vault_skeleton",
    "idempotent_fields": ["llm_block", "memo_block"]
  },
  "allowed_values": {
    "categories": ["technical_term", "character", "place", "object", "event", "device", "mise_en_scene", "concept", "value"],
    "worldbuilding_axes": ["weaving", "memory", "clan", "law", "taboo", "general", "unclassified"],
    "version_status": ["current", "past", "retired", "dual_notation", "unclassified"]
  },
  "stats": {"source_documents": 28, "phase1_rows": 8420, "terms": 1536, "stub_files": 2114, "aux_docs": 3, "llm_completed": 1478, "llm_completion_rate": 0.962},
  "stats_by_category": {"technical_term": 212, "character": 301, "place": 144, "object": 228, "event": 173, "device": 181, "mise_en_scene": 96, "concept": 135, "value": 66},
  "stats_by_axis": {"weaving": 332, "memory": 286, "clan": 244, "law": 187, "taboo": 169, "general": 271, "unclassified": 47},
  "batches": [
    {"id": "hub_seed_001", "type": "hub_seed", "terms": 8, "status": "completed", "owner": "producer", "completed_at": "2026-07-08T11:20:00+09:00"},
    {"id": "leaf_batch_014", "type": "leaf", "terms": 18, "status": "pending", "owner": "ai_assisted_writer"}
  ],
  "aux_docs": [
    {"name": "character_relationship_map.md", "required": true, "status": "completed"},
    {"name": "chronology.md", "required": true, "status": "completed"},
    {"name": "term_translation_table.md", "required": false, "status": "pending"}
  ],
  "verification": {
    "last_run_at": "2026-07-08T14:35:00+09:00",
    "automatic": {"yaml_parse_errors": 0, "file_count_matches_csv": true, "dangling_links": 0, "category_enum_errors": 0, "axis_enum_errors": 0, "duplicate_titles": 0},
    "manual_sample": {"sample_size": 30, "passed": 28, "warn": 2, "failed": 0},
    "integration_build": {"lorebook_export": "not_run", "story_skill_readiness": "pass"}
  },
  "handoff": {
    "status": "not_ready",
    "reason": "leaf_batch_014 pending; term_translation_table.md pending",
    "ready_for_consumption": false,
    "last_handoff_at": null,
    "handoff_target": ["story writing", "lorebook production", "multilingual publication"]
  }
}
```

## Minimum required fields

| Field | Why required |
|---|---|
| `schema_version` | Tracks manifest-format changes |
| `project.name` | Identifies the project |
| `build.current_phase` | Confirms the resume point after interruption |
| `allowed_values` | Enum-validation criteria |
| `stats.terms` | Basis for file-count comparison |
| `batches` | Basis for resuming Stage 4 writing |
| `verification` | Quality status before handoff |
| `handoff.ready_for_consumption` | Whether consuming skills may be run |

## Operating principle

A manifest should not be a report that people decorate by hand, but a state file updated by automation as far as possible. Even when a person writes it directly, record each value’s source and distinguish fields that may be overwritten in the next build from those that must be preserved.

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
