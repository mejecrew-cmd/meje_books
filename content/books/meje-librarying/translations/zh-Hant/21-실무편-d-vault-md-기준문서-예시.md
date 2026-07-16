---
title: "第6篇　實務篇 D．Vault `.md` 基準文件範例"
sourceLocale: ko
locale: zh-Hant
sourceHash: "sha256:41e2c66b8cc721b2aba03d49397cc566e89c71a08317260590800466753e21fa"
translationStatus: draft
---

# 第6篇　實務篇 D．Vault `.md` 基準文件範例

本實務篇展示第三階段骨架建置產生的基本 `.md` 檔案形貌。實際專案中，第二階段 CSV 的一列會轉為一個採用此結構的檔案。

## 詞條檔案範例

檔名：`無紋者.md`

```markdown
---
title: 無紋者
aliases:
  - 無紋之人
  - 帳冊外的人
category: 人物
worldbuilding_axis: 記憶
english: Munmunja (the unwoven)
romanization: Munmunja
version: 現行
tags:
  - category/人物
  - axis/記憶
  - version/現行
sources:
  - 加工本文第1段
related:
  - "[[赤裸記憶]]"
  - "[[氏族帳冊]]"
  - "[[重新編織]]"
  - "[[努比]]"
---

**無紋者是無法讀取或編織紋樣，但以赤裸記憶保存氏族事務的人物或階層。**

無紋者在[[努比]]與[[氏族帳冊]]壟斷知識的社會中承擔紀錄之外的記憶。即使[[重新編織]]改變官方紀錄，無紋者的[[赤裸記憶]]仍是復原被抹名字的根據。

**翻譯**：Munmunja (the unwoven)。初次出現附括號解說，之後使用 Munmunja。若單純譯為 "illiterate"，會失去無法讀取紋樣的世界觀特有含意，因此禁止。

%% LLM %%

無紋者是最安靜地違逆這個世界將紀錄織入布料之前提的存在。他不能讀紋樣，也不能完全遵從氏族帳冊之法，但正因這種缺失，他能察覺重新編織所改變紀錄的縫隙。所有人都把新織成的努比接受為官方記憶時，無紋者的赤裸記憶抓住留在帳冊外的名字。因此無紋者不是無能者，而是追問紀錄體系自行抹除之物的人。

%% /LLM %%

%% 備註 %%

- 第四階段範例文體基準：維持紀錄／記憶／排除的張力。
- 翻譯時禁止 illiterate。
- 未來 lorebook 可用「紀錄之外的證人」系列標題擴展。

%% /備註 %%
```

## Stub 檔案範例

檔名：`無紋之人.md`

```markdown
---
title: 無紋之人
redirect: 無紋者
type: stub
tags:
  - stub
---

參照 [[無紋者]]。
```

## 結構判定

| 區域 | 是否必須 | 驗證方式 |
|---|---|---|
| frontmatter | 必須 | YAML 解析 PASS |
| title | 必須 | 與代表關鍵字一致 |
| aliases | 條件式 | 有別名時以陣列存在 |
| category | 必須 | 九分類允許值 |
| worldbuilding_axis | 必須 | Profile 允許值 |
| related | 條件式 | 目標詞條或 stub 存在 |
| 定義 | 必須 | 存在第一個粗體段落 |
| 翻譯 | 條件式 | 有英文名／翻譯註解時存在 |
| `%% LLM %%` | 必須 | 第四階段前可留空，handoff 前填滿 95% 以上 |
| `%% 備註 %%` | 必須 | 保存工作備註 |

## 冪等更新規則

- 重建時更新：frontmatter、定義、詳細說明、翻譯註解。
- 重建時保留：`%% LLM %%`、`%% 備註 %%`。
- 詞條名變更時，手動檢查是否移植既有檔案的 LLM／備註。

---

© 2026 MEJE WORKS Corp. & 김동은WhtDrgon. All rights reserved.
