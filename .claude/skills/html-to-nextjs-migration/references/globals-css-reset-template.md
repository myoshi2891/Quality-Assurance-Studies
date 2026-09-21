# Phase 3b: 独自レイアウト & テーマの globals.css 干渉リセット【最重要】

サイドバーナビ＋メインコンテンツのレイアウトや、エディトリアル・ペーパーテーマ等の独自テーマを持つページを
実装する場合、`globals.css` の汎用セレクター（レイアウト余白だけでなく、**テーブル・文字色・フォントサイズ**）が
深刻な干渉を引き起こす。必ず以下をページ固有 CSS で完全にリセットすること。

## 干渉の仕組み一覧

| globals.css の定義 | 干渉の症状 | 必須リセット対策 |
| --- | --- | --- |
| `body { padding-top: var(--disclaimer-height) }` | body 全体が disclaimer 分下にずれる | 意図通りのためそのまま活用 |
| `.layout-content { padding-top: 60px }` | layout-content がヘッダー分下にずれる | 意図通りのためそのまま活用（ラッパーに `margin-top: 60px` を付けない） |
| `section { padding-top: 5rem }` | 全 `<section>` に 80px の上余白が付く → ヒーロー等がずれる | `.my-page-layout section { padding-top: 0; }` |
| `.hero { min-height: 100vh; display: flex; }` | ヒーローが全画面高さになりコンテンツが押し下がる | `.my-page-layout .hero { min-height: 0; display: block; padding-top: 0; }` |
| `main { max-width: 1100px; margin: 0 auto }` | `<main>` 要素の幅が 1100px に制限・中央寄せになる | `.my-page-layout .main { flex: 1 1 auto; max-width: none !important; width: 100% !important; margin: 0 !important; }` |
| **`td { color: var(--color-text-secondary); }`** | **全テーブルの文字色が薄い青灰色（`#8ea3c3`）になり、白背景で視認性が崩壊する** | **`.my-page-layout tbody td, .my-page-layout td { color: var(--ink) !important; font-size: 1rem !important; }`** |
| **`th { white-space: nowrap; color: var(--color-accent-blue); }`** | **表頭テキストが折り返されず横にはみ出る、青文字になる** | **`.my-page-layout thead th { background: var(--navy) !important; color: #eaf4fb !important; white-space: normal !important; }`** |
| **`tr:hover td { background: rgba(99, 179, 237, 0.03); }`** | **テーブルホバー時に青灰色のオーバーレイが重なる** | **`.my-page-layout tbody tr:hover td { background: #fafbf8 !important; }`** |
| **`td strong, .callout strong { color: var(--color-text-primary); }`** | **強調文字が薄い白水色（`#e8f0fe`）になり白背景で文字が消える** | **`.my-page-layout td strong { color: var(--navy) !important; font-weight: 700 !important; }`, `.my-page-layout strong { color: var(--navy-deep) !important; }`** |

## 必須リセット CSS テンプレート（レイアウト ＆ テーブル完全版）

```css
/* 1. レイアウト余白のリセット */
.my-page-layout {
    display: flex;
    min-height: 100vh;
    width: 100%;
}

.my-page-layout section {
    padding-top: 0;
}

.my-page-layout .hero {
    min-height: 0;
    display: block;
    padding-top: 0;
}

.my-page-layout .main,
.my-page-layout .content {
    flex: 1 1 auto;
    min-width: 0;
    max-width: none !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 48px 64px 100px;
}

/* 2. テーブル＆テキスト色の完全リセット（globals.css 侵食の完全遮断） */
.my-page-layout table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card) !important;
    color: var(--ink) !important;
    font-size: 1rem !important;
    font-family: var(--sans) !important;
}

.my-page-layout thead tr {
    background: var(--navy) !important;
    border-bottom: 1px solid var(--line) !important;
}

.my-page-layout thead th,
.my-page-layout th {
    background: var(--navy) !important;
    color: #eaf4fb !important;
    font-family: var(--mono) !important;
    font-size: 1rem !important;
    letter-spacing: 0.05em !important;
    text-transform: uppercase !important;
    font-weight: 500 !important;
    padding: 11px 14px !important;
    text-align: left !important;
    border: none !important;
    border-bottom: 1px solid var(--line) !important;
    vertical-align: top !important;
    white-space: normal !important;
}

.my-page-layout thead th * {
    color: #eaf4fb !important;
}

.my-page-layout tbody td,
.my-page-layout td {
    padding: 11px 14px !important;
    text-align: left !important;
    border-bottom: 1px solid var(--line) !important;
    vertical-align: top !important;
    color: var(--ink) !important;
    font-family: var(--sans) !important;
    font-size: 1rem !important;
    line-height: 1.7 !important;
}

.my-page-layout td *,
.my-page-layout tbody td * {
    color: var(--ink);
}

.my-page-layout tbody tr {
    background: var(--card) !important;
}

.my-page-layout tbody tr:hover,
.my-page-layout tbody tr:hover td,
.my-page-layout tr:hover td {
    background: #fafbf8 !important;
}

.my-page-layout tbody tr:last-child td {
    border-bottom: none !important;
}

.my-page-layout td strong,
.my-page-layout tbody td strong {
    color: var(--navy) !important;
    font-weight: 700 !important;
}

.my-page-layout td em,
.my-page-layout tbody td em {
    color: var(--ink) !important;
    font-style: italic !important;
}

.my-page-layout td code,
.my-page-layout tbody td code {
    font-family: var(--mono) !important;
    background: #edeee8 !important;
    border: 1px solid var(--line) !important;
    padding: 1px 5px !important;
    border-radius: 3px !important;
    font-size: 0.95em !important;
    color: var(--navy-deep) !important;
}

/* 3. 強調・コールアウトの白飛び防止 */
.my-page-layout strong {
    color: var(--navy-deep) !important;
    font-weight: 700;
}

.my-page-layout .callout strong {
    color: var(--navy-deep) !important;
}
```

## サイドバーの sticky 計算

```css
.my-page-layout .sidebar {
    position: sticky;
    /* ヘッダー(60px) + DisclaimerBanner(var(--disclaimer-height)) の合算 */
    top: calc(60px + var(--disclaimer-height, 0px));
    height: calc(100vh - 60px - var(--disclaimer-height, 0px));
    z-index: 40; /* Header の z-50(50) より低く */
    /* 境界線は --border ではなく --border-strong 等の濃い変数を使う。
       淡いライトテーマでは --border 同士の明度差が小さく、境界線が事実上見えなくなる
       （2026-09 istqb-ctal-ta-chapter1-test-process で発生。references/css-pitfalls.md 参照） */
    border-right: 2px solid var(--border-strong);
}
```

**注意**: `--disclaimer-height` は `DisclaimerBanner` コンポーネントが JS で動的に計算してセットする。CSS 変数の初期値は `38px`（デスクトップ1行）、モバイルでは `76px`（2行）になる。

## Reusable CSS Component Classes（globals.css）

Do NOT redefine these in page-specific CSS. Use them directly in TSX:

| Class | Purpose |
| --- | --- |
| `.card` / `.card-sm` | Content cards with hover effects |
| `.card-grid` | Auto-fit grid layout |
| `.badge` + `.badge-unit/int/func/e2e/sec/perf/a11y/istqb` | Test type badges |
| `.code-block` / `.code-header` / `.code-dots` / `.code-lang` | Code block containers |
| `.callout` + `.callout-info/warn/good/danger` | Callout boxes |
| `.pyramid-container` / `.pyramid-layer` / `.py-unit/int/func/e2e` | Test pyramid visualization |
| `.tab-nav` / `.tab-btn` / `.tab-panel` | Tab UI |
| `.section-header` / `.section-num` / `.accent-line` | Section headings |
| `.hero` / `.hero-eyebrow` / `.hero-sub` / `.hero-stats` | Hero section |
| `.stat` / `.stat-num` / `.stat-label` | Statistics display |
| `.step-list` / `.step-item` / `.step-num-circle` / `.step-content` | Numbered step indicators |
| `.table-wrapper` | Responsive table container |
| `.tool-grid` / `.tool-card` / `.tool-name` / `.tool-desc` | Tool cards |
| `.gherkin` + `.kw-given/when/then/feat/scen` | BDD scenario formatting |
| `.cert-row` / `.cert-level-badge` / `.cert-info` | Certification roadmap |
