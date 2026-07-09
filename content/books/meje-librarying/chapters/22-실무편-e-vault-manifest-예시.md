# 제6편. 실무편 E. `_vault_manifest.json` 예시

manifest는 빌드의 영수증이자 핸드오프의 상태표다. 이 파일이 있으면 Vault가 어느 입력에서 만들어졌고, 어떤 단계까지 완료되었으며, 다음 작업에 넘길 수 있는지를 빠르게 판단할 수 있다.

아래 예시는 가공 IP **「누비의 땅」** 기준의 형식 예시다. 실제 프로젝트에서는 파일 수, 축 목록, 배치 상태, 검증 결과를 실측값으로 채운다.

## manifest 예시

```json
{
  "schema_version": "meje-librarying-manifest-v1",
  "project": {
    "name": "누비의 땅",
    "profile": "누비의_땅_profile.md",
    "vault_path": "./vault",
    "source_catalog": "참조_파일의_이름과_위치.md"
  },
  "build": {
    "current_phase": "phase_4_writing",
    "created_at": "2026-07-08T10:00:00+09:00",
    "updated_at": "2026-07-08T14:30:00+09:00",
    "source_csv": "02_통합_표제어.csv",
    "builder": "build_vault_skeleton",
    "idempotent_fields": [
      "llm_block",
      "memo_block"
    ]
  },
  "allowed_values": {
    "categories": [
      "전문용어",
      "인물",
      "장소",
      "사물",
      "사건",
      "장치",
      "미장센",
      "개념",
      "가치"
    ],
    "worldbuilding_axes": [
      "직조",
      "기억",
      "씨족",
      "법",
      "금기",
      "일반",
      "미정"
    ],
    "version_status": [
      "현행",
      "과거",
      "폐기",
      "이중표기",
      "미정"
    ]
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
    "전문용어": 212,
    "인물": 301,
    "장소": 144,
    "사물": 228,
    "사건": 173,
    "장치": 181,
    "미장센": 96,
    "개념": 135,
    "가치": 66
  },
  "stats_by_axis": {
    "직조": 332,
    "기억": 286,
    "씨족": 244,
    "법": 187,
    "금기": 169,
    "일반": 271,
    "미정": 47
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
    {
      "name": "인물관계도.md",
      "required": true,
      "status": "completed"
    },
    {
      "name": "연대기.md",
      "required": true,
      "status": "completed"
    },
    {
      "name": "용어_번역표.md",
      "required": false,
      "status": "pending"
    }
  ],
  "verification": {
    "last_run_at": "2026-07-08T14:35:00+09:00",
    "automatic": {
      "yaml_parse_errors": 0,
      "file_count_matches_csv": true,
      "dangling_links": 0,
      "category_enum_errors": 0,
      "axis_enum_errors": 0,
      "duplicate_titles": 0
    },
    "manual_sample": {
      "sample_size": 30,
      "passed": 28,
      "warn": 2,
      "failed": 0
    },
    "integration_build": {
      "lorebook_export": "not_run",
      "story_skill_readiness": "pass"
    }
  },
  "handoff": {
    "status": "not_ready",
    "reason": "leaf_batch_014 pending; 용어_번역표.md pending",
    "ready_for_consumption": false,
    "last_handoff_at": null,
    "handoff_target": [
      "스토리 집필",
      "로어북 제작",
      "다국어 발간"
    ]
  }
}
```

## 최소 필수 필드

| 필드 | 필수 이유 |
|---|---|
| `schema_version` | manifest 형식 변화 추적 |
| `project.name` | 프로젝트 식별 |
| `build.current_phase` | 중단 후 재개 지점 확인 |
| `allowed_values` | enum 검증 기준 |
| `stats.terms` | 파일 수 대조 기준 |
| `batches` | 4차 집필 재개 기준 |
| `verification` | 핸드오프 전 품질 상태 |
| `handoff.ready_for_consumption` | 소비 스킬 투입 가능 여부 |

## 운영 원칙

manifest는 사람이 손으로 꾸미는 보고서가 아니라, 가능한 한 자동화가 갱신하는 상태 파일이어야 한다. 사람이 직접 적는 경우에도 값의 출처를 남기고, 다음 빌드에서 덮어써도 되는 필드와 보존해야 하는 필드를 구분한다.

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
