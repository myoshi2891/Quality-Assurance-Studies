---
name: fix-mermaid
description: >
  Use this skill to fix Mermaid diagram rendering problems in this Next.js project:
  syntax errors, black/unreadable edge-label backgrounds, clipped text, oversized or
  undersized SVGs, and theme mismatches when a page needs a light theme but the
  shared components/Mermaid.tsx is initialized with a global dark theme.
---

# Mermaid 修正スキル（Next.js / mermaid v11 前提）

Mermaid 図はすべて `components/Mermaid.tsx`（`'use client'`、mermaid v11）経由で描画されます。

## 0. 最初に必ず実行する契約テスト

ブラウザを開く前に機械的検査を実行します。

```bash
bun test tests/lib/mermaid-theme-contract.test.ts
```

| テスト名 | 原因と対処 |
| --- | --- |
| `never uses !important in layered .mermaid-wrapper rules` | `app/globals.css` の `@layer` 内に `!important` が混入。ページ固有 CSS から上書き不能になるため削除する |
| `keeps the %%{init}%% directive free of single quotes` | `%%{init}%%` 内にシングルクォートが混入。テーマ上書きが無効化されるため除去する |
| `prefixes every DIAGRAM_* constant with the shared config` | 一部の図で `MERMAID_CONFIG` の付与が漏れている |
| `resets the global dark .mermaid-wrapper card` | ページ固有 CSS で globals のダークカード既定を打ち消していない |

## 1. ページ固有テーマの上書き（ライト配色ページの必須パターン）

`components/Mermaid.tsx` はアプリ共通コンポーネントのため**直接変更してはなりません**。
各ページの `page.tsx` 先頭で `MERMAID_CONFIG` を定義し、全 `DIAGRAM_*` の先頭に展開します。

### ⚠️ 最重要ルール：JSON 内でシングルクォートを使用してはならない

`%%{init: {...}}%%` の値にシングルクォートを含めると、mermaid の簡易パーサが設定を読み捨て、エラーを出さずにダークテーマへフォールバックします。

```ts
// ❌ NG: シングルクォートでディレクティブ全体が無効化される
"fontFamily": "'Noto Sans JP', sans-serif",

// ✅ OK: クォートなしで記述
"fontFamily": "Noto Sans JP, sans-serif",
```

### 正準 `MERMAID_CONFIG` テンプレート（ライトテーマ用）

```ts
const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#eff6ff",
    "primaryBorderColor": "#2563eb",
    "primaryTextColor": "#1e293b",
    "lineColor": "#64748b",
    "secondaryColor": "#f8fafc",
    "tertiaryColor": "#f1f5f9",
    "nodeBorder": "#2563eb",
    "clusterBkg": "#f8fafc",
    "clusterBorder": "#cbd5e1",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "flowchart": { "curve": "basis", "htmlLabels": true }
}}%%`;

export const DIAGRAM_EXAMPLE = `${MERMAID_CONFIG}
flowchart LR
    A["ノードA"] --> B["ノードB"]`;
```

## 2. globals.css ダークカード既定の打ち消し（必須リセット CSS）

`app/globals.css` の `@layer components` によるダークカード既定（暗い背景色・`max-width: 760px` 制限）をページ固有 CSS で必ず打ち消します。

```css
/* ページ固有 CSS に必ず追加 */
.my-page-layout .mermaid-wrapper {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    max-width: none !important;
}

/* 外側コンテナで横スクロールを許可し、縮小表示を防ぐ */
.my-page-layout .mermaid-container,
.my-page-layout .mermaid-wrap {
    overflow-x: auto !important;
    max-width: 100% !important;
    width: 100% !important;
}

.my-page-layout .mermaid-wrapper svg {
    max-width: none !important;
    height: auto !important;
}
```

## 3. edgeLabel の完全保護 CSS

mermaid 11.x の SVG 構造ゆれに対応するため、以下セレクタをまとめて定義します。

```css
.my-page-layout .mermaid-wrapper .edgeLabels rect,
.my-page-layout .mermaid-wrapper .edgeLabel rect {
    fill: #ffffff !important;
    stroke: none !important;
}

.my-page-layout .mermaid-wrapper .edgeLabel,
.my-page-layout .mermaid-wrapper .edgeLabel span,
.my-page-layout .mermaid-wrapper .edgeLabel p,
.my-page-layout .mermaid-wrapper .edgeLabel text,
.my-page-layout .mermaid-wrapper .edgeLabels .label {
    background-color: #ffffff !important;
    color: #1e293b !important;
    fill: #1e293b !important;
    font-weight: 700 !important;
}
```

## 4. ステート図（stateDiagram-v2）の黒潰れ防止 CSS

ステート図の背景矩形や境界線が黒潰れすることを防ぎます。

```css
.my-page-layout .mermaid-wrapper g.stateGroup rect {
    fill: #eff6ff !important;
    stroke: #2563eb !important;
}

.my-page-layout .mermaid-wrapper g.stateGroup text {
    fill: #1e293b !important;
}

.my-page-layout .mermaid-wrapper .transition {
    stroke: #64748b !important;
}
```

## 5. 文字下部見切れ防止 CSS

`<foreignObject>` 内のテキストが下端や右端で見切れる現象を防ぎます。

```css
.my-page-layout .mermaid-wrapper foreignObject {
    overflow: visible !important;
}

.my-page-layout .mermaid-wrapper foreignObject p,
.my-page-layout .mermaid-wrapper foreignObject span,
.my-page-layout .mermaid-wrapper foreignObject div {
    margin: 0 !important;
    line-height: 1.4 !important;
    word-break: break-word !important;
}
```

## 6. Mermaid 構文の必須ルール

1. コンテンツは**カラム0配置**（先頭空白なし。`mindmap` のみインデント保持）
2. 各ステートメントは**改行で分離**（1行に連結しない）
3. ノードラベル `A["text"]` は**1行に収める**
4. `block-beta` は**使用禁止**（`flowchart TD` / `graph TD` で代替）
5. 全角記号は半角に正規化する: `（）`→`()`、`―`→`-`、`：`→`:`
6. 菱形 `{}` や `quadrantChart` 内テキストはダブルクォートで囲む
