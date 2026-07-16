---
title: "第6篇　实务篇 D．Vault `.md` 基准文档示例"
sourceLocale: ko
locale: zh-Hans
sourceHash: "sha256:41e2c66b8cc721b2aba03d49397cc566e89c71a08317260590800466753e21fa"
translationStatus: draft
---

# 第6篇　实务篇 D．Vault `.md` 基准文档示例

本实务篇展示第三阶段骨架构建产生的基本 `.md` 文件形态。实际项目中，第二阶段 CSV 的一行会转为一个采用此结构的文件。

## 词条文件示例

文件名：`无纹者.md`

```markdown
---
title: 无纹者
aliases:
  - 无纹之人
  - 账册外的人
category: 人物
worldbuilding_axis: 记忆
english: Munmunja (the unwoven)
romanization: Munmunja
version: 现行
tags:
  - category/人物
  - axis/记忆
  - version/现行
sources:
  - 加工正文第1段
related:
  - "[[赤裸记忆]]"
  - "[[氏族账册]]"
  - "[[重新编织]]"
  - "[[努比]]"
---

**无纹者是无法读取或编织纹样，但以赤裸记忆保存氏族事务的人物或阶层。**

无纹者在[[努比]]与[[氏族账册]]垄断知识的社会中承担记录之外的记忆。即使[[重新编织]]改变官方记录，无纹者的[[赤裸记忆]]仍是复原被擦除名字的依据。

**翻译**：Munmunja (the unwoven)。初次出现附括号解释，之后使用 Munmunja。若简单译为 "illiterate"，会失去无法读取纹样这一世界观特有含义，因此禁止。

%% LLM %%

无纹者是最安静地违逆这个世界将记录织入布料之前提的存在。他不能读纹样，也不能完全遵从氏族账册之法，但正因这种缺失，他能察觉重新编织所改变记录的缝隙。所有人都把新织成的努比接受为官方记忆时，无纹者的赤裸记忆抓住留在账册外的名字。因此无纹者不是无能者，而是追问记录体系自行抹除之物的人。

%% /LLM %%

%% 备注 %%

- 第四阶段示例文体标准：保持记录/记忆/排除之间的张力。
- 翻译时禁止 illiterate。
- 未来 lorebook 可用“记录之外的证人”系列标题扩展。

%% /备注 %%
```

## Stub 文件示例

文件名：`无纹之人.md`

```markdown
---
title: 无纹之人
redirect: 无纹者
type: stub
tags:
  - stub
---

参照 [[无纹者]]。
```

## 结构判定

| 区域 | 是否必须 | 验证方式 |
|---|---|---|
| frontmatter | 必须 | YAML 解析 PASS |
| title | 必须 | 与代表关键词一致 |
| aliases | 条件式 | 有别名时以数组存在 |
| category | 必须 | 九分类允许值 |
| worldbuilding_axis | 必须 | Profile 允许值 |
| related | 条件式 | 目标词条或 stub 存在 |
| 定义 | 必须 | 存在第一个粗体段落 |
| 翻译 | 条件式 | 有英文名/翻译注释时存在 |
| `%% LLM %%` | 必须 | 第四阶段前可留空，handoff 前填满 95% 以上 |
| `%% 备注 %%` | 必须 | 保存工作备注 |

## 幂等更新规则

- 重建时更新：frontmatter、定义、详细说明、翻译注释。
- 重建时保留：`%% LLM %%`、`%% 备注 %%`。
- 词条名变更时，手动检查是否移植既有文件的 LLM/备注。

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
