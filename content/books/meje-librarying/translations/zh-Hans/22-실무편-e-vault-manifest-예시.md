---
sourceLocale: ko
locale: zh-Hans
sourceHash: "sha256:cfd9a8db6dcfe5d83f5d208b5740c6242f4b094dd28b5c0ef3296fcbb73de594"
translationStatus: draft
---

# 第6篇　实务篇 E．`_vault_manifest.json` 示例

manifest 既是构建的凭据，也是 handoff 的状态表。有了这个文件，就可以迅速判断 Vault 从哪些输入生成、已完成到哪个阶段，以及能否移交给下一项工作。

以下示例以虚构 IP **“努比之地”** 为基准，说明文件格式。实际项目应以测得的数据填写文件数量、轴线清单、批次状态和验证结果。

## manifest 示例

```json
{
  "schema_version": "meje-librarying-manifest-v1",
  "project": {
    "name": "努比之地",
    "profile": "努比之地_profile.md",
    "vault_path": "./vault",
    "source_catalog": "参考文件的名称与位置.md"
  },
  "build": {
    "current_phase": "phase_4_writing",
    "created_at": "2026-07-08T10:00:00+09:00",
    "updated_at": "2026-07-08T14:30:00+09:00",
    "source_csv": "02_整合词条.csv",
    "builder": "build_vault_skeleton",
    "idempotent_fields": ["llm_block", "memo_block"]
  },
  "allowed_values": {
    "categories": ["专业术语", "人物", "地点", "物件", "事件", "装置", "场面调度", "概念", "价值"],
    "worldbuilding_axes": ["编织", "记忆", "氏族", "法律", "禁忌", "一般", "未定"],
    "version_status": ["现行", "过去", "废弃", "双重标记", "未定"]
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
    "专业术语": 212, "人物": 301, "地点": 144, "物件": 228, "事件": 173,
    "装置": 181, "场面调度": 96, "概念": 135, "价值": 66
  },
  "stats_by_axis": {
    "编织": 332, "记忆": 286, "氏族": 244, "法律": 187,
    "禁忌": 169, "一般": 271, "未定": 47
  },
  "batches": [
    {"id": "hub_seed_001", "type": "hub_seed", "terms": 8, "status": "completed", "owner": "producer", "completed_at": "2026-07-08T11:20:00+09:00"},
    {"id": "leaf_batch_014", "type": "leaf", "terms": 18, "status": "pending", "owner": "ai_assisted_writer"}
  ],
  "aux_docs": [
    {"name": "人物关系图.md", "required": true, "status": "completed"},
    {"name": "年表.md", "required": true, "status": "completed"},
    {"name": "术语翻译表.md", "required": false, "status": "pending"}
  ],
  "verification": {
    "last_run_at": "2026-07-08T14:35:00+09:00",
    "automatic": {"yaml_parse_errors": 0, "file_count_matches_csv": true, "dangling_links": 0, "category_enum_errors": 0, "axis_enum_errors": 0, "duplicate_titles": 0},
    "manual_sample": {"sample_size": 30, "passed": 28, "warn": 2, "failed": 0},
    "integration_build": {"lorebook_export": "not_run", "story_skill_readiness": "pass"}
  },
  "handoff": {
    "status": "not_ready",
    "reason": "leaf_batch_014 pending; 术语翻译表.md pending",
    "ready_for_consumption": false,
    "last_handoff_at": null,
    "handoff_target": ["故事写作", "Lorebook 制作", "多语出版"]
  }
}
```

## 最低必填字段

| 字段 | 必填原因 |
|---|---|
| `schema_version` | 跟踪 manifest 格式变更 |
| `project.name` | 识别项目 |
| `build.current_phase` | 确认中断后的续作位置 |
| `allowed_values` | enum 验证的标准 |
| `stats.terms` | 核对文件数的依据 |
| `batches` | 恢复第 4 阶段写作的依据 |
| `verification` | handoff 前的质量状态 |
| `handoff.ready_for_consumption` | 消费端 skill 是否可投入 |

## 运行原则

manifest 不应是人工修饰的报告，而应尽可能作为由自动化流程更新的状态文件。即使需要手工记录，也应保留数值来源，并区分下次构建可覆盖的字段与必须保留的字段。

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
