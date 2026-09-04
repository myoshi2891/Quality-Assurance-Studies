---
name: qa-studies-html-to-nextjs-migration
description: >
  Complete workflow for migrating static HTML pages to Next.js App Router page.tsx
  in the QA_Studies project. Covers CSS variable mapping (HTML vars to Tailwind v4
  @theme tokens), page-specific CSS extraction, Header.tsx navigation updates,
  and CLAUDE.md documentation. Extends the global html-to-nextjs-migration skill
  with project-specific knowledge including font loading via next/font/google,
  design token alignment, and accessibility patterns.
  Trigger: HTMLマイグレーション, ページ移行, HTML変換, 静的HTML移行, CSS変数マッピング,
  unit-testing-guide.html migration, new page creation from HTML, HTMLからpage.tsx,
  mat/mbt/tas guide migration.
---

# QA_Studies HTML → Next.js Migration Workflow

## Goal

Provide the complete, ordered workflow for converting a standalone HTML page (with embedded `<style>`) into a fully integrated Next.js App Router page within the QA_Studies project. This skill extends the global `html-to-nextjs-migration` skill (JSX pitfalls) with project-specific CSS token mapping, file organization, and integration steps.

**Prerequisite**: The global skill covers `<pre>` block conversion, `class`/`className` rules, HTML entity handling, `@layer` priority, and cache invalidation. This skill assumes that knowledge and focuses on the **end-to-end workflow**.

## セッション開始時に必ず読むファイル

1. **`docs/MIGRATION_PROGRESS.md`** — 現在地・残タスク・再開プロンプト
2. **このファイル（`SKILL.md`）** — 移行手順と QA_Studies 固有ルール
3. **`.claude/rules/tdd-mandatory-cycle.md`（または `.gemini/rules/tdd-mandatory-cycle.md`）** — TDD必須サイクル & コミット分割ルール

## 未移行 HTML（2026-05-16 時点）

| ファイル | 予定ルート | 状態 |
|---|---|---|
| なし | - | ✅ 全て完了 |

## Instructions

### TDD 必須サイクルの適用（最重要）

移行作業中は、常に `.claude/rules/tdd-mandatory-cycle.md`（または `.gemini/rules/tdd-mandatory-cycle.md`）に定められた TDD サイクル（Red → Green → Refactor → Docs）を最優先で適用しなければなりません。

1. **タスク設計の段階（`task.md` の作成時）**:
   - `task.md` 内のタスクを「Red（テスト失敗とコミット）」「Green（実装とコミット）」「Refactor（リファクタ/ビルド/Linter修正とコミット）」「Docs Sync（進捗同期とコミット）」のコミット単位に明確に構造化してください。
2. **実装前のテスト作成（Red）**
3. **厳格な網羅的テストスイート（Redフェーズ）の作成【抜け漏れ防止の絶対ルール】**:
   - 移行漏れ（図解、表、コードブロック、コールアウト、参考文献等の欠落）を未然に防ぐため、`tests/<page-slug>/page.test.tsx` に以下の検証を**漏れなく網羅したテストスイート**を作成して失敗させます：
     - **H1 & ヘッダー情報**: メインタイトル、サブタイトル、メタデータブロック
     - **サイドバーTOCリンク**: 目次の全アンカーリンク数および `href="#secX"` の完全一致
     - **全セクション・サブセクション**: H2/H3/H4 見出しの存在と順序
     - **全 Mermaid 図解**: 全FIG番号（例: `FIG. 01`〜`FIG. 13`）および `<Mermaid chart={...} />` の存在
     - **全テーブル**: 全テーブル要素数、各表の `<th>` ヘッダーおよび代表セルの存在
     - **全コードブロック**: プログラミング言語構文および `.code-line` ラッパーの存在
     - **全コールアウト・カード**: 警告、引用、比較カード、スタットカードの存在
     - **全参考文献**: 全外部リンクの総数、URL、および `target="_blank"`, `rel="noopener noreferrer"` 属性の検証
     - **ナビゲーション機能**: プログレスバー、モバイルトグル、トップ戻るボタン等の存在
4. **一括コミットの厳禁**:
   - テスト（Red）、実装（Green）、ナビ・アーカイブ（Navigation）、ドキュメント（Docs）を一つのコミットにまとめず、各フェーズで必ず分割コミットを行ってください。

### Phase 1: Analysis — Audit the Source HTML & Create Component Inventory

Before writing any code, read the source HTML thoroughly and create a **Component Inventory Checklist** to prevent any omissions:

1. **構成要素インベントリ（抜け漏れ防止の事前棚卸し）の作成【必須】**:
   - **見出し・セクション数**: H1〜H4の構造、全セクション数・ID一覧
   - **目次（TOC）リンク数**: サイドバー・ドロワーに含まれる全リンクのアンカー先
   - **Mermaid図解数**: 全ダイアグラム（FIG番号、チャート種別 `flowchart`, `stateDiagram`, `sequenceDiagram` 等）
   - **テーブル数**: 全表の名称・列構成・行数・セル内のインラインコードや強調要素
   - **コードブロック数**: プログラミング言語、行数、ハイライト構文
   - **コールアウト・カード数**: 警告、引用、スタットカード、比較グリッド
   - **参考文献リンク数**: 全外部リンク（URL、タイトル、セキュリティ属性）
   - **インタラクティブ要素**: チェックリスト、タブ、プログレスバー等
   ※ このインベントリの全項目は、**Phase 1（Redフェーズ）のテストスイートで1対1のアサーションとして網羅**します。

2. **CSS Custom Properties** — List all `:root` variables (colors, fonts, radii, shadows)
3. **Unique Component Classes** — Classes not present in `app/globals.css` (page-specific UI)
4. **Font Families** — Check if fonts match `layout.tsx` or require external Google Fonts (`Source Serif 4`, `Noto Serif JP`, `Cinzel`, `Inter` 等). If specific editorial fonts are needed for paper themes, import them at the top of the page-specific CSS or via `layout.tsx`.
5. **Animation Keyframes** — List all `@keyframes` names; rename camelCase to kebab-case

### Phase 2: CSS Variable & Theme Mapping

#### テーマ設計の原則【最重要】

- **書籍ガイド・独自エディトリアルデザインの忠実再現**: 書籍ガイド（Recommended Books）や固有のエディトリアル・ペーパーテーマ（温かみのある紙の背景 `#f5f6f2` / `#faf6ee`、インク色文字 `#181c1e` / `#241f1a`、セリフ書体等）を持つHTMLは、**原著HTMLのデザインを忠実に再現します**。無理にグローバルのダークテーマに統一してはなりません。
- **globals.css 干渉の完全排除**: 独自テーマ（特にライト/ペーパーテーマ）を実装する場合、ページ固有クラス（例: `.secure-by-design-page`）でスコープを作成し、`globals.css` のダークテーマ用要素セレクタ（特に `td { color: #8ea3c3 }` など）が漏れ出さないよう、**Phase 3b に示すテーブル・文字色リセットを完全に適用してください**。
- **標準ダークテーマページの場合**: 既存のダークテーマに統合する一般的な解説ページでは、HTMLのローカル変数を `globals.css` の `@theme` トークンへマッピングします。

#### Mapping Template (標準ダークテーマ用)

| HTML Variable | Project Token | Notes |
| --- | --- | --- |
| Background vars | `--color-bg-primary` / `--color-bg-secondary` / `--color-bg-card` | |
| Text vars | `--color-text-primary` / `--color-text-secondary` / `--color-text-muted` | |
| Accent colors | `--color-accent-{blue,cyan,green,yellow,orange,red,purple,pink}` | |
| Border vars | `--color-border` / `--color-border-bright` | |
| Radius `--r` / `--rs` / `--r-sm` | `--radius-DEFAULT` (12px) / `--radius-sm` (8px) | Always add fallback: `var(--radius-DEFAULT, 12px)` |
| Shadow vars | `--shadow-DEFAULT` / `--shadow-glow-blue` / `--shadow-glow-cyan` | |
| Font display | `--font-display` | Resolved by next/font/google in layout.tsx |
| Font body | `--font-body` | Resolved by next/font/google in layout.tsx |
| Font mono | `--font-mono` | Resolved by next/font/google in layout.tsx |

### Phase 3: Create Page-Specific CSS File

1. Create `app/<page-name>.css` for styles unique to this page
2. Do NOT use `@layer components` — use plain CSS selectors for proper specificity over Tailwind preflight
3. Replace all HTML-local CSS variables with project `@theme` tokens (with fallbacks)
4. Rename keyframes from camelCase to kebab-case (e.g., `fadeUp` → `fade-up`)
5. Place `@keyframes` definitions that are page-specific in the page CSS, not globals
6. Import the CSS at the top of the page component: `import '../<page-name>.css';`

#### CSS Pitfalls Checklist (learned from code reviews)

| Issue | Wrong | Correct |
| --- | --- | --- |
| **テーブル文字色消失（薄水色グレー化）** | `td` に `color` 指定なし → `globals.css` の `td { color: var(--color-text-secondary); }`（`#8ea3c3`）が当たり文字が薄くなる | `.my-page tbody td, .my-page td { color: var(--ink) !important; font-size: 1rem !important; }` および `.my-page td * { color: var(--ink); }` でインク色を強制適用 |
| **テーブルヘッダー・ホバー崩れ** | `th { white-space: nowrap }` や `tr:hover td` の青背景が干渉 | `.my-page thead th { background: var(--navy) !important; color: #eaf4fb !important; white-space: normal !important; }`、`.my-page tbody tr:hover td { background: #fafbf8 !important; }` でリセット |
| **`strong` タグの白飛び** | `globals.css` の `td strong`, `.callout strong { color: var(--color-text-primary); }` が当たり白背景で文字が消える | `.my-page td strong { color: var(--navy) !important; }`, `.my-page strong, .my-page .callout strong { color: var(--navy-deep) !important; }` を明示指定 |
| Invalid property | `scrollbar-: none;` | `scrollbar-width: none;` |
| z-index duplication | `nav { z-index: 100; }` in CSS + `z-50` in JSX | Single source: Tailwind `z-50` in JSX only |
| Responsive outside @media | `.box { grid-template-columns: 1fr; }` at root | Wrap in `@media (max-width: 768px) { ... }` |
| KeyFrame naming | `@keyframes fadeUp` | `@keyframes fade-up` |
| Undefined CSS vars | `var(--r)` | `var(--radius-DEFAULT, 12px)` |
| Vendor scrollbar only | `::-webkit-scrollbar` (WebKit) | Add `scrollbar-width: none` (Firefox) |
| `.code-block` 内の改行 | `<span>line1</span>{"\n"}<span>line2</span>` | 各行を `<div className="code-line"><span>line1</span></div>` でラップ |
| page-sticky nav の top | `position: sticky; top: 0;` | `top: 60px`（グローバル Header の高さ分オフセット） |
| アニメーションの消失 | `max-width: 0` のまま固定され見えなくなる | `@media (prefers-reduced-motion: reduce)` 内で `max-width: 100% !important;` を指定 |
| 背景クリック妨害 | `::before` に `z-index` 指定なし | `pointer-events: none;` と `z-index: 0`（または負の値）を指定 |
| ヘッダーオフセット二重カウント | `.page-layout { margin-top: 60px; }` | 削除。`layout-content` が既に `padding-top: 60px` を持つため不要。60px の余白が二重になる |
| globals `section` 干渉 | ページ固有 section に余分な `padding-top: 5rem`(80px) が付く | `.page-layout section { padding-top: 0; }` でリセット |
| globals `.hero` 干渉 | `.hero { min-height: 100vh; }` でヒーローが全画面高さになりコンテンツが押し下がる | `.page-layout .hero { min-height: 0; display: block; padding-top: 0; }` でリセット |
| globals `main` 干渉 | `main { max-width: 1100px; margin: 0 auto; }` で幅が制限・中央寄せになる | `.page-layout .main { flex: 1 1 auto; max-width: none !important; width: 100% !important; margin: 0 !important; }` で画面いっぱいに広げる |
| Mermaid 図の表示圧縮 | ページ固有 Flexbox と `globals.css` の `.mermaid-wrapper` (max-width) が競合し、図が極端に縮小される | ページ固有 CSS で `.mermaid-wrapper` の `max-width: 100% !important` 化と背景・ボーダーの透明化リセットを適用 |
| Mermaid エッジラベルの黒潰れ/色崩れ | `Mermaid.tsx` のグローバルダークテーマ設定や SVG 内部構造（`foreignObject`, `rect`）と競合し、分岐テキスト（はい/いいえ）が黒四角に潰れる | ページ固有 CSS で `.mermaid-wrapper .edgeLabel`, `.edgeLabels rect`, `span`, `text` に `background-color: var(--card) !important; color: var(--ink) !important; fill: var(--ink) !important; stroke: none !important; font-weight: 700 !important; overflow: visible !important;` を指定し、無駄な背景色を排除して文字のみクリアに表示する |
| リストの点（マーカー）消失 | Tailwind Preflight が `ul`, `ol` を `list-style: none` にリセットし、箇条書きの点（•）が消える | ページ固有 CSS で `.page-layout ul.plain` 等のリスト**コンテナ**に `list-style-type: disc !important;`（順序付きは `decimal !important;`）を指定して復元する |
| コードブロックCSSの欠落 | ページ固有 CSS に `.code-block` や `.code-line` 等の定義が抜けている | ページ固有 CSS に `.code-block`, `.code-line` および `.code-keyword` 等のシンタックスハイライト定義を追加してインデント・配色を適用する |
| 機械翻訳調の誤記（of） | Mermaid 等の中に「成果物 of 誤り」「インタフェース of 検証」などの直訳表現が残る | 機械翻訳で発生しやすい「A of B」の直訳を「AのB」といった適切な日本語表現に修正する |

### Phase 3b: 独自レイアウト & テーマの globals.css 干渉リセット【最重要】

サイドバーナビ＋メインコンテンツのレイアウトや、エディトリアル・ペーパーテーマ等の独自テーマを持つページを実装する場合、`globals.css` の汎用セレクター（レイアウト余白だけでなく、**テーブル・文字色・フォントサイズ**）が深刻な干渉を引き起こす。必ず以下をページ固有 CSS で完全にリセットすること。

#### 干渉の仕組み一覧

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

#### 必須リセット CSS テンプレート（レイアウト ＆ テーブル完全版）

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

#### サイドバーの sticky 計算

```css
.my-page-layout .sidebar {
    position: sticky;
    /* ヘッダー(60px) + DisclaimerBanner(var(--disclaimer-height)) の合算 */
    top: calc(60px + var(--disclaimer-height, 0px));
    height: calc(100vh - 60px - var(--disclaimer-height, 0px));
    z-index: 40; /* Header の z-50(50) より低く */
}
```

**注意**: `--disclaimer-height` は `DisclaimerBanner` コンポーネントが JS で動的に計算してセットする。CSS 変数の初期値は `38px`（デスクトップ1行）、モバイルでは `76px`（2行）になる。

### Phase 4: Convert HTML to TSX

1. **Remove** `<html>`, `<head>`, `<body>`, `<style>`, `<script>` — handled by `layout.tsx`
2. **Remove** `<link>` font tags — fonts loaded via `next/font/google` in `layout.tsx`
3. **`<nav>` ブロックの扱い**:
   - グローバルサイトナビ（全ページ共通）→ **削除**（`components/Header.tsx` が提供）
   - ページ固有のアンカーナビ（sticky + `IntersectionObserver` スクロールスパイ付き）→ **削除せず移行**:
     1. `app/<page-slug>/NavBar.tsx` を `'use client'` コンポーネントとして作成
     2. HTML の `<script>` 内 `IntersectionObserver` ロジックを `useEffect` に変換し、クリーンアップで `obs.disconnect()` を呼ぶ
     3. CSS の `position: sticky; top: 0` → `top: 60px`（グローバル Header の高さ分オフセット）、`z-index` は Header の `z-50`（50）を超えないよう `40` 以下に設定
     4. `page.tsx`（Server Component のまま）先頭で `<NavBar />` をインポート・配置

4. **`.code-block` 内の行区切りパターン** — HTMLの `white-space: pre` コンテキストから JSX へ変換する際に最も多発する問題:

   ```tsx
   {/* ❌ NG: {"\n"} は white-space:normal 環境では改行にならずスペース扱い */}
   <div className="code-block">
     <span className="code-cyan">Given</span>{"\n"}
     <span className="code-white">条件テキスト</span>
   </div>

   {/* ✅ OK: <div className="code-line"> でラップ（CSS に white-space:pre が当たる） */}
   <div className="code-block">
     <div className="code-line"><span className="code-cyan">Given</span><span className="code-white"> 条件テキスト</span></div>
     <div className="code-line"><span className="code-cyan">When</span><span className="code-white"> 操作テキスト</span></div>
   </div>
   ```

   **なぜ失敗するか**: `.code-block` のデフォルト `white-space` は `normal`。`{"\n"}` はHTMLテキストノードの改行文字になるが、`white-space: normal` 環境ではブラウザが空白として正規化する。`.code-line` クラスには `white-space: pre` が定義済みのため、このラッパーが必須。

   **デシジョンテーブル・行列データ**: テキストのスペース揃えで列を表現している場合はフォント変更に脆弱なため、`<table>` 要素への変換を優先する。

   **Mermaid 図解の移植**:
   - HTML 内に Mermaid 図解（`<div class="mermaid">` 等）が含まれる場合は、プロジェクト共通の `<Mermaid>` コンポーネントに移植してください。
   - 移植の際は、以下の Mermaid 構文規則（ブラウザレンダラーでシンタックスエラーを起こさないための必須ルール）を遵守してください：
     1. **カラム0配置 (先頭空白なし)**: Mermaid ブロック内のコンテンツはインデントなし（先頭空白なし）でカラム0に配置します。
     2. **改行で分離**: 各ステートメントは改行で分離し、1行に複数ステートメントを連結しないでください。
     3. **ノードラベルの1行化**: ノードラベル `A["text"]` の内容は必ず1行に収めてください。
     4. **mindmap例外**: `mindmap` はインデントを保持して記述します。
     5. **block-beta禁止**: `block-beta` は全体クラッシュの原因になるため、使用禁止とします（`graph TD` 等で代替してください）。
     6. **全角・特殊記号の制限**:
        - 全角波ダッシュ `〜` → `から` 等の日本語に置換
        - 全角丸括弧 `（）` → 半角 `()` に置換
        - 全角ダッシュ `―` → 半角ハイフン `-` に置換
        - 全角コロン `：` → 半角コロン `:` に置換
        - `subgraph` ラベルや `participant` 等に丸括弧 `()` や絵文字（`🌐` `🖥️` `👤` `⚡` 等）を含めない（削除・置換する）
        - 菱形ノード `{}` や `quadrantChart` 内テキストはダブルクォーテーションで適切に囲む
   - また、共通コンポーネントが出力する `.mermaid-wrapper` の表示圧縮や二重枠線を防ぐため、必ずページ固有 CSS にて正準リセットスタイル（`width: 100%`, `max-width: 100% !important`, `background: transparent !important` 等）を記述してください。

5. **Wrap** page content in a React component:

```tsx
import '../<page-name>.css';

export default function PageName() {
  return (
    <>
      <section className="hero" id="top">
        {/* content */}
      </section>
      {/* more sections */}
    </>
  );
}
```

1. **Do NOT add `<main>` wrapper** — `layout.tsx` already wraps `{children}` in a `<div>` (app/layout.tsx)
2. **Convert attributes**: `class` → `className`, `for` → `htmlFor`
3. **Inline styles**: `style="font-family: var(--font-display)"` → `style={{ fontFamily: 'var(--font-display)' }}`
4. **Self-closing tags**: `<img>` → `<img />`, `<br>` → `<br />`, `<hr>` → `<hr />`
5. **HTML comments**: `<!-- comment -->` → `{/* comment */}`
6. **Apply global skill rules** for `<pre>` blocks and HTML entities

### Phase 5: Integration Steps

#### 5a. Update Header Navigation (Single Source of Truth)

`components/Header.tsx` is driven by `lib/navigation.ts`. Add your new page entry to the `NAV_ITEMS` array in `lib/navigation.ts`:

```typescript
  { href: '/<page-slug>', label: 'ページ表示名', category: '<category>' },
```

#### 5b. Update Navigation & E2E Testing Assertions (CRITICAL: Do NOT skip)

To prevent CI/CD and test suite breakages, you must update the page count expectations in the following test-related files:

1. **`tests/lib/navigation.test.ts`**:
   - Increment the overall count in `expect(NAV_ITEMS).toHaveLength(N)` and update the test case description to reflect the new category counts.
   - Example:

     ```typescript
     it('contains 25 entries (home + 8 foundation + 1 fdn-ext + 5 advanced + 10 specialist)', () => {
       expect(NAV_ITEMS).toHaveLength(25);
     });
     ```

2. **`e2e/pages.ts`**:
   - Add the path and header regex for the new page into the `PAGES` array.
   - Increment `EXPECTED_PAGE_COUNT` to the new page total.
   - Example:

     ```typescript
     export const PAGES: readonly PageMeta[] = [
       ...
       { path: '/istqb-ct-ut-complete-guide', h1: /Usability Testing/ },
     ] as const;
     export const EXPECTED_PAGE_COUNT = 25;
     ```

#### 5c. Create Route Directory

Create `app/<page-slug>/page.tsx` following Next.js App Router conventions.

#### 5d. Update CLAUDE.md and GEMINI.md

Add the new page to the Architecture section of **both** `CLAUDE.md` and `GEMINI.md`:

```markdown
- `app/<page-slug>/page.tsx` — ページの説明
```

If a page-specific CSS file was created, also document it. Then add an entry to the **Migrated Pages (Tracking)** list in `GEMINI.md`:

```markdown
- `app/<page-slug>/page.tsx` (ページ日本語タイトル、`NavBar.tsx` 付き)
```

#### 5e. Update docs/coverage-dashboard.html

After adding `tests/<page-slug>/page.test.tsx`, update the `DATA.pages` array in the `<script>` block at the bottom of `docs/coverage-dashboard.html`:

```js
{ path: '/<page-slug>', topic: 'ISTQB Specialist — <略称>', tested: true },
```

Also recalculate the overall coverage percentage (`--coverage` CSS variable and the `<span>` displaying the % value) to reflect the updated tested/total page count.

### Phase 6: Verification

#### Test & Lint Verification（サンドボックス環境必須ルール）

> [!IMPORTANT]
> **サンドボックス環境におけるビルド実行禁止ルール:**
> Antigravityのサンドボックス環境においては、ビルドのバックグラウンド実行が正常にハンドリングされずローカルメモリを過度に圧迫しクラッシュを引き起こす問題が確認されています。
> そのため、AIエージェントは**自律的・自動的に本番ビルドコマンド（`bun run build`、`npm run build` 等）を実行してはなりません**。
> ローカルでの検証は、必ずテストおよびLinterで実施し、本番ビルドの検証が必要な場合はユーザーへ依頼してください。

```bash
# 1. ページ固有テストの実行
npm test tests/<page-slug>/page.test.tsx

# 2. ナビゲーション整合性テストの実行
npm test tests/lib/navigation.test.ts tests/lib/navigation-e2e-sync.test.ts

# 3. Linter の実行
npm run lint
```

#### Visual Verification Checklist

- [ ] Page renders without console errors
- [ ] **テーブルの文字色が薄くならず、濃いインク色（`var(--ink)`）で明瞭に表示されているか**（`globals.css` の `td { color: #8ea3c3 }` が当たっていないか）
- [ ] **テーブルヘッダー（`thead th`）、強調（`strong`）、インラインコード（`code`）、ホバー背景（`tr:hover td`）が正しくレンダリングされているか**
- [ ] **構成要素インベントリの全図解・全表・全コード・全コールアウト・全参考文献に抜け漏れがないか**
- [ ] All `<pre>` code blocks display as multi-line
- [ ] Syntax highlighting colors render (`.kw`, `.str`, `.cm`, `.fn`, `.cls`, `.num`)
- [ ] **`.code-block` 内の各行が正しく改行されている**（`{"\n"}` を使っている箇所がないか確認。あれば `<div className="code-line">` ラッパーに置換）
- [ ] **デシジョンテーブル・行列データが列ズレなく表示されている**（テキストのスペース揃えではなく `<table>` を使用しているか）
- [ ] Cards, badges, callouts display correctly
- [ ] Fonts load properly (display, body, mono)
- [ ] Navigation shows new page link and works
- [ ] **ページ固有のスティッキーナビゲーションが Header の直下（60px 位置）に表示され、スクロール時にアクティブリンクが切り替わる**
- [ ] Responsive layout at 768px and 640px breakpoints
- [ ] No z-index conflicts with navigation (nav must stay on top)
- [ ] Animations play correctly (fade-up, pulse-border)
- [ ] Scrollbar styling matches (thin, styled thumb)

## セッション終了前同期（必須）

<ai_agent_directive>
**AI エージェントへの厳格な指示**: 以下のプロセスは**ゲート条件（Gate Condition）**です。タスクの報告を行う前に、ユーザーの許可を待たずに**自律的かつ自動的に、ステップバイステップでコミットまで完了させてください**。ルールに反してコミットを後回しにすることは禁止されています。
</ai_agent_directive>

**ゲート条件**: 1ページの `git commit` 完了後、次 HTML を `Read` し始める前に必ず実施する。

```bash
# 1. テストとLinterの通過を確認（ビルドコマンドは実行しない）
npm test tests/<page-slug>/page.test.tsx
npm run lint

# 2. コミット予定差分の PII / ローカル絶対パス機械的走査【必須 Gate Condition】
git diff --cached | grep -E "(/Users/|/home/|[A-Za-z]:\\\\Users\\\\)" || echo "PII check passed"
```

その後 `docs/MIGRATION_PROGRESS.md` の以下を更新してコミット:

| フィールド | 更新内容 |
|---|---|
| `最新 HEAD` | `git rev-parse --short HEAD` の実値 |
| `次の作業` | 次セッションで最初に着手するページ |
| `再開プロンプト` | 上記と整合した内容 |

手順の詳細は `.claude/rules/migration-progress-sync.md` を参照。

## Reusable CSS Component Classes (globals.css)

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

## Constraints

- **Always reset table and text styling against globals.css interference** — `globals.css` の `td { color: var(--color-text-secondary); }`（`#8ea3c3`）等によるテーブル文字色の薄れや白飛びを防ぐため、必ずページ固有 CSS で `table`, `tbody td`, `thead th`, `td strong`, `td code`, `tbody tr:hover td` 等に `color: var(--ink) !important;` などの完全リセットを適用すること
- **Always perform complete component inventory audit before coding** — 移行着手前に元HTMLの全構成要素（見出し、TOC、Mermaid全図解、全表、全コード、全コールアウト、全参考文献）のインベントリ表を作成し、Redフェーズのテストスイートで漏れなく網羅すること
- **Never run production build autonomously in sandbox environment** — サンドボックス環境クラッシュ防止のため、AIエージェントは自律的・自動的に本番ビルド（`bun run build` / `npm run build`）を実行してはならない。検証は `npm test` と `npm run lint` で行い、ビルド確認はユーザーへ依頼すること
- **Always scan cached diff for PII and local absolute paths before commit** — コミット前に必ず `git diff --cached` でローカル絶対パス（`/Users/` 等）の混入を機械的に走査・検証すること
- **Never import external fonts via `<link>` tags** — Use `next/font/google` in `layout.tsx` only. If a new font is needed, add it to `layout.tsx` with a CSS variable
- **Never define duplicate CSS variables** in page CSS that already exist in `globals.css @theme`
- **Never use `@layer components`** for page-specific styles — plain CSS only for proper specificity
- **Never duplicate z-index in CSS** when Tailwind class is used in JSX
- **Never place responsive overrides outside `@media` queries**
- **Never use camelCase for `@keyframes` names** — use kebab-case
- **Pages are server-rendered** — no `useState`, `useEffect`, or client-side interactivity unless explicitly needed (use `'use client'` directive)
- **Always update Header.tsx and CLAUDE.md** when adding a new page
- **Always use fallback values** for CSS vars that may not be defined: `var(--radius-DEFAULT, 12px)`
- **Never use `{"\n"}` for line breaks inside `.code-block`** — `.code-block` の `white-space` はデフォルト `normal` のため `{"\n"}` はスペースに正規化される。各行を `<div className="code-line">...</div>` でラップすること（`.code-line` には `white-space: pre` が定義済み）
- **Never align tabular data with spaces in `.code-block`** — デシジョンテーブルや行列データはフォント変更で列ズレが起きるため `<table>` 要素を使うこと
- **Never remove page-specific anchor nav bars** — ページ固有のスティッキーナビ（`IntersectionObserver` 付き）はグローバル Header と別物。`'use client'` コンポーネントとして移行し `top: 60px` を設定すること
- **Never duplicate page scope classes in CSS selectors** — `.page-class .alert.page-class .green` ではなく、`.page-class .alert.green` のようにページクラスは最上位の1回のみ使用すること
- **Never add `margin-top: 60px` to page-specific layout wrappers** — `layout-content` が既に `padding-top: 60px`（ヘッダー分）を持つ。さらに `margin-top: 60px` を追加すると 60px の余白が二重になる
- **Always reset globals.css interference for custom layout pages** — サイドバー付き独自レイアウトでは `section { padding-top: 0 }`, `.hero { min-height: 0; display: block; padding-top: 0 }`, `.main { max-width: none; margin: 0 }` を必ずリセットすること（Phase 3b 参照）
- **Always verify and reset Mermaid sizing rules for migrated pages** — 移行するページ内に Mermaid が含まれる場合は、必ず `.claude/skills/fix-mermaid/SKILL.md` の確認を徹底し、かつページ固有 CSS 内で `.mermaid-wrapper` の幅を `100%` に広げて背景・枠線を透明化するリセット規則を追加し、表示サイズが極端に圧縮されるのを防ぐこと。
- **Always ensure code block CSS is defined** — ページ固有 CSS ファイル内に `.code-block`, `.code-line`, および必要なシンタックスハイライト（`.code-keyword`, `.code-cyan` 等）のスタイル定義が存在していることを必ず確認する。定義がない場合は、他の移行済みページから定義をコピーして追加すること。
- **Always review and correct translation errors** — 特に「A of B」（例: `成果物 of 誤り`, `インタフェース of 検証` など）のように英語の直訳表現が不自然に日本語テキストや Mermaid 図の中に残っていないかを必ず走査し、「AのB」などの自然な日本語表現に修正すること。
- **Always restore list markers reset by Tailwind Preflight** — Tailwind Preflight が `ul`, `ol` をリセットするため、箇条書きリストを含むページでは必ずページ固有 CSS でリストコンテナ（`ul` / `ol`）に `list-style-type: disc !important` / `decimal !important` を指定してマーカーを復元すること。`ul` / `ol` 自体に `display: list-item` を付けてはならない（コンテナ自身がマーカーを持つ）。`li` の `display` が上書きされマーカーが消えている場合に限り、該当 `li` へ `display: list-item` を指定する。
- **Always style Mermaid edge labels cleanly without dark box artifacts** — Mermaid の分岐ラベル（はい/いいえ等）は、共通ダークテーマや SVG 内部構造（foreignObject, rect）の競合により黒潰れや意図しない背景色になりやすい。ページ固有 CSS で `.mermaid-wrapper .edgeLabel`, `.edgeLabels rect`, `span`, `text` に対して背景（カード同化または透明）、高コントラストなテキスト色、枠線除去（`stroke: none`）を確実に指定し、文字のみを鮮明に表示すること。
- **Never waste tokens on unnecessary browser subagent invocations** — スタイリングやマークアップの軽微な検証のために高負荷なブラウザサブエージェントを連続起動してはならない。CSS セレクタと DOM 構造の静的解析を優先し、的確なピンポイント修正で迅速に完了させること。
