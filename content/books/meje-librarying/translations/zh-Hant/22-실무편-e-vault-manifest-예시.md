---
sourceLocale: ko
locale: zh-Hant
sourceHash: "sha256:cfd9a8db6dcfe5d83f5d208b5740c6242f4b094dd28b5c0ef3296fcbb73de594"
translationStatus: draft
---

# 第6篇　實務篇 E．`_vault_manifest.json` 範例

manifest 是建置的收據，也是 handoff 的狀態表。有了這個檔案，就能快速判斷 Vault 由哪些輸入建立、完成到哪個階段，以及是否可交給下一項工作。

下列範例以虛構 IP **「努比之地」** 為準，呈現檔案格式。實際專案應以實測值填入檔案數量、軸線清單、批次狀態與驗證結果。

## manifest 範例

```json
{
  "schema_version": "meje-librarying-manifest-v1",
  "project": {
    "name": "努比之地",
    "profile": "努比之地_profile.md",
    "vault_path": "./vault",
    "source_catalog": "參照檔案的名稱與位置.md"
  },
  "build": {
    "current_phase": "phase_4_writing",
    "created_at": "2026-07-08T10:00:00+09:00",
    "updated_at": "2026-07-08T14:30:00+09:00",
    "source_csv": "02_整合詞條.csv",
    "builder": "build_vault_skeleton",
    "idempotent_fields": ["llm_block", "memo_block"]
  },
  "allowed_values": {
    "categories": ["專門術語", "人物", "場所", "物件", "事件", "裝置", "場面調度", "概念", "價值"],
    "worldbuilding_axes": ["織造", "記憶", "氏族", "法律", "禁忌", "一般", "未定"],
    "version_status": ["現行", "過去", "廢棄", "雙重表記", "未定"]
  },
  "stats": {
    "source_documents": 28,
    "phase1_rows": 8420,
    "terms": 1536,
    "stub_files": 2114,
    "aux_docs": 3,
    "llm_completed": 1478,
    "llm_completion_rate": 0.962
  },
  "stats_by_category": {
    "專門術語": 212, "人物": 301, "場所": 144, "物件": 228, "事件": 173,
    "裝置": 181, "場面調度": 96, "概念": 135, "價值": 66
  },
  "stats_by_axis": {
    "織造": 332, "記憶": 286, "氏族": 244, "法律": 187,
    "禁忌": 169, "一般": 271, "未定": 47
  },
  "batches": [
    {
      "id": "hub_seed_001",
      "type": "hub_seed",
      "terms": 8,
      "status": "completed",
      "owner": "producer",
      "completed_at": "2026-07-08T11:20:00+09:00"
    },
    {
      "id": "leaf_batch_014",
      "type": "leaf",
      "terms": 18,
      "status": "pending",
      "owner": "ai_assisted_writer"
    }
  ],
  "aux_docs": [
    {"name": "人物關係圖.md", "required": true, "status": "completed"},
    {"name": "年表.md", "required": true, "status": "completed"},
    {"name": "術語翻譯表.md", "required": false, "status": "pending"}
  ],
  "verification": {
    "last_run_at": "2026-07-08T14:35:00+09:00",
    "automatic": {
      "yaml_parse_errors": 0, "file_count_matches_csv": true, "dangling_links": 0,
      "category_enum_errors": 0, "axis_enum_errors": 0, "duplicate_titles": 0
    },
    "manual_sample": {"sample_size": 30, "passed": 28, "warn": 2, "failed": 0},
    "integration_build": {"lorebook_export": "not_run", "story_skill_readiness": "pass"}
  },
  "handoff": {
    "status": "not_ready",
    "reason": "leaf_batch_014 pending; 術語翻譯表.md pending",
    "ready_for_consumption": false,
    "last_handoff_at": null,
    "handoff_target": ["故事寫作", "Lorebook 製作", "多語出版"]
  }
}
```

## 最低必要欄位

| 欄位 | 必要原因 |
|---|---|
| `schema_version` | 追蹤 manifest 格式的變更 |
| `project.name` | 識別專案 |
| `build.current_phase` | 確認中斷後的續作位置 |
| `allowed_values` | enum 驗證的基準 |
| `stats.terms` | 核對檔案數量的基準 |
| `batches` | 重新開始第 4 階段寫作的依據 |
| `verification` | handoff 前的品質狀態 |
| `handoff.ready_for_consumption` | 可否投入消費端 skill |

## 營運原則

manifest 不應是人工修飾的報告，而應盡可能由自動化流程更新的狀態檔。即使由人手記錄，也要留下數值的來源，並區分下一次建置可覆寫的欄位與必須保留的欄位。

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
