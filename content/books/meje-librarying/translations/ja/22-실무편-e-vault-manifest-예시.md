---
title: "第6編　実務編E　`_vault_manifest.json`の例"
sourceLocale: ko
locale: ja
sourceHash: "sha256:cfd9a8db6dcfe5d83f5d208b5740c6242f4b094dd28b5c0ef3296fcbb73de594"
translationStatus: draft
---

# 第6編　実務編E　`_vault_manifest.json`の例

manifestはビルドの領収書であり、handoffの状態表です。このファイルがあれば、Vaultがどの入力から作られ、どの段階まで終わり、次の作業へ渡せるかを素早く判断できます。

下の例は加工IP**「ヌビの地」**を基準とした形式例です。実プロジェクトでは、ファイル数、軸一覧、バッチ状態、検証結果を実測値で満たします。

## manifestの例

```json
{
  "schema_version": "meje-librarying-manifest-v1",
  "project": {"name": "ヌビの地", "profile": "ヌビの地_profile.md", "vault_path": "./vault", "source_catalog": "参照ファイルの名前と位置.md"},
  "build": {"current_phase": "phase_4_writing", "created_at": "2026-07-08T10:00:00+09:00", "updated_at": "2026-07-08T14:30:00+09:00", "source_csv": "02_統合見出し語.csv", "builder": "build_vault_skeleton", "idempotent_fields": ["llm_block", "memo_block"]},
  "allowed_values": {"categories": ["専門用語", "人物", "場所", "事物", "事件", "装置", "ミザンセーヌ", "概念", "価値"], "worldbuilding_axes": ["織り", "記憶", "氏族", "法", "禁忌", "一般", "未定"], "version_status": ["現行", "過去", "廃棄", "二重表記", "未定"]},
  "stats": {"source_documents": 28, "phase1_rows": 8420, "terms": 1536, "stub_files": 2114, "aux_docs": 3, "llm_completed": 1478, "llm_completion_rate": 0.962},
  "stats_by_category": {"専門用語": 212, "人物": 301, "場所": 144, "事物": 228, "事件": 173, "装置": 181, "ミザンセーヌ": 96, "概念": 135, "価値": 66},
  "stats_by_axis": {"織り": 332, "記憶": 286, "氏族": 244, "法": 187, "禁忌": 169, "一般": 271, "未定": 47},
  "batches": [{"id": "hub_seed_001", "type": "hub_seed", "terms": 8, "status": "completed", "owner": "producer", "completed_at": "2026-07-08T11:20:00+09:00"}, {"id": "leaf_batch_014", "type": "leaf", "terms": 18, "status": "pending", "owner": "ai_assisted_writer"}],
  "aux_docs": [{"name": "人物関係図.md", "required": true, "status": "completed"}, {"name": "年表.md", "required": true, "status": "completed"}, {"name": "用語翻訳表.md", "required": false, "status": "pending"}],
  "verification": {"last_run_at": "2026-07-08T14:35:00+09:00", "automatic": {"yaml_parse_errors": 0, "file_count_matches_csv": true, "dangling_links": 0, "category_enum_errors": 0, "axis_enum_errors": 0, "duplicate_titles": 0}, "manual_sample": {"sample_size": 30, "passed": 28, "warn": 2, "failed": 0}, "integration_build": {"lorebook_export": "not_run", "story_skill_readiness": "pass"}},
  "handoff": {"status": "not_ready", "reason": "leaf_batch_014 pending; 用語翻訳表.md pending", "ready_for_consumption": false, "last_handoff_at": null, "handoff_target": ["ストーリー執筆", "ロアブック制作", "多言語刊行"]}
}
```

## 最低必須フィールド

| フィールド | 必須の理由 |
|---|---|
| `schema_version` | manifest形式の変化を追跡 |
| `project.name` | プロジェクト識別 |
| `build.current_phase` | 中断後の再開地点を確認 |
| `allowed_values` | enum検証基準 |
| `stats.terms` | ファイル数対照の基準 |
| `batches` | 第4次執筆再開の基準 |
| `verification` | handoff前の品質状態 |
| `handoff.ready_for_consumption` | 消費スキル投入可否 |

## 運用原則

manifestは人が手で飾る報告書ではなく、できるだけ自動化が更新する状態ファイルであるべきです。人が直接書く場合も値の出所を残し、次ビルドで上書きしてよいフィールドと保存すべきフィールドを区別します。

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
