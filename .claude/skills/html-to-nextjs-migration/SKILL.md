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
2. **実装前のテスト作成（Red）**:
   - 移行先のコード（`page.tsx` や `NavBar.tsx` 等）を実装する前に、必ず失敗するユニットテストを作成してコミットしてください。
3. **一括コミットの厳禁**:
   - テスト、実装、カバレッジ更新、ドキュメント更新を一つのコミットにまとめず、フェーズごとに分割コミットを行ってください。

### Phase 1: Analysis — Audit the Source HTML

Before writing any code, read the source HTML and extract:

1. **CSS Custom Properties** — List all `:root` variables (colors, fonts, radii, shadows)
2. **Unique Component Classes** — Classes not present in `app/globals.css` (page-specific UI)
3. **Font Families** — Check if fonts match `layout.tsx` (Noto Sans JP, JetBrains Mono, DM Sans). `layout.tsx` assigns `--font-display` to DM Sans, `--font-body` to Noto Sans JP, `--font-mono` to JetBrains Mono. If the HTML uses different fonts (e.g., `Playfair Display`, `Plus Jakarta Sans`, `Sora`), note these as needing replacement with these project fonts
4. **Animation Keyframes** — List all `@keyframes` names; rename camelCase to kebab-case
5. **Sections / IDs** — Map the HTML structure to plan the page.tsx component tree

### Phase 2: CSS Variable Mapping

Map every HTML CSS variable to the project's `globals.css` `@theme` token. Do NOT define HTML-local variables in the project.

#### Mapping Template (apply to each source HTML)

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

#### unit-testing-guide.html (Warm Editorial Theme) → Project Tokens

| HTML Variable | Project Token | Notes |
| --- | --- | --- |
| `--cream` | `--color-bg-primary` | Light → dark theme conversion |
| `--cream2` | `--color-bg-secondary` | |
| `--cream3` | `--color-bg-card` | |
| `--ink` | `--color-text-primary` | Inverted from dark-on-light |
| `--ink2` / `--ink3` | `--color-text-secondary` | |
| `--ink4` | `--color-text-muted` | |
| `--green` / `--green2` | `--color-accent-green` | Unify variations |
| `--green3` | N/A | Use `rgba(104, 211, 145, alpha)` |
| `--amber` | `--color-accent-orange` | |
| `--red` | `--color-accent-red` | |
| `--blue` | `--color-accent-blue` | |
| `--purple` | `--color-accent-purple` | |
| `--border` | `--color-border` | |
| `--border2` | `--color-border-bright` | |
| `--r` | `--radius-DEFAULT` | 12px |
| `--rs` | `--radius-sm` | 8px |
| `--font-display` (`Playfair Display`) | `--font-display` (Sora) | Font replacement |
| `--font-body` (`Plus Jakarta Sans`) | `--font-body` (Noto Sans JP) | Font replacement |

**Critical**: The project uses a **unified dark theme**. Light-theme HTML pages must be re-themed to match the dark color system. Do not attempt to preserve the original light color scheme.

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
| globals `main` 干渉 | `main { max-width: 1100px; margin: 0 auto; }` で幅が制限・中央寄せになる | `.page-layout .main { max-width: none; margin: 0; }` でリセット |
| Mermaid 図の表示圧縮 | ページ固有 Flexbox と `globals.css` の `.mermaid-wrapper` (max-width) が競合し、図が極端に縮小される | ページ固有 CSS で `.mermaid-wrapper` の `max-width: 100% !important` 化と背景・ボーダーの透明化リセットを適用 |
| コードブロックCSSの欠落 | ページ固有 CSS に `.code-block` や `.code-line` 等の定義が抜けている | ページ固有 CSS に `.code-block`, `.code-line` および `.code-keyword` 等のシンタックスハイライト定義を追加してインデント・配色を適用する |
| 機械翻訳調の誤記（of） | Mermaid 等の中に「成果物 of 誤り」「インタフェース of 検証」などの直訳表現が残る | 機械翻訳で発生しやすい「A of B」の直訳を「AのB」といった適切な日本語表現に修正する |

### Phase 3b: 独自レイアウト（サイドバー付きドキュメントページ）の globals.css 干渉リセット

サイドバーナビ＋メインコンテンツの2カラムレイアウト（`display: flex` で独自スコープを持つページ）を実装する場合、`globals.css` の汎用セレクターが干渉し**大きな余白崩れ**を引き起こす。必ず以下をページ固有 CSS でリセットすること。

#### 干渉の仕組み

| globals.css の定義 | 干渉の症状 |
| --- | --- |
| `body { padding-top: var(--disclaimer-height) }` | body 全体が disclaimer 分下にずれる（意図通り） |
| `.layout-content { padding-top: 60px }` | layout-content がヘッダー分下にずれる（意図通り） |
| `section { padding-top: 5rem }` | 全 `<section>` に 80px の上余白が付く → ヒーロー等がずれる |
| `.hero { min-height: 100vh; display: flex; justify-content: center }` | ヒーローが全画面高さになりコンテンツが中央に押し下がる |
| `main { max-width: 1100px; margin: 0 auto }` | `<main>` 要素の幅が 1100px に制限・中央寄せになる |

#### 必須リセット CSS テンプレート

```css
/* layout-content が padding-top: 60px を持つため、ページ固有 wrapper に margin-top は不要 */
.my-page-layout {
    display: flex;
    min-height: 100vh;
    width: 100%;
    /* margin-top: 60px は書かない */
}

/* globals.css の section { padding-top: 5rem } をリセット */
.my-page-layout section {
    padding-top: 0;
}

/* globals.css の .hero { min-height: 100vh } をリセット */
.my-page-layout .hero {
    min-height: 0;
    display: block;
    padding-top: 0;
    /* ページ固有の余白はここに追加 */
}

/* globals.css の main { max-width: 1100px; margin: 0 auto } をリセット */
.my-page-layout .main {
    flex: 1;
    min-width: 0;
    max-width: none;
    margin: 0;
    padding: 24px 20px;
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

#### Build Verification

```bash
rm -rf .next && bun run build
```

Common build failures:

- Unclosed JSX tags
- `class` not converted to `className` in JSX (keep `class` inside `dangerouslySetInnerHTML`)
- Missing closing `/>` on void elements
- Unescaped `{` or `}` in JSX text (use `{'{'}` or `{'}'}`)

#### Visual Verification Checklist

- [ ] Page renders without console errors
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
bun run build     # ビルド成功を確認
bun run lint      # ESLint エラーなし
```

その後 `docs/MIGRATION_PROGRESS.md` の以下を更新してコミット:

| フィールド | 更新内容 |
|---|---|
| `最新 HEAD` | `git rev-parse --short HEAD` の実値 |
| `次の作業` | 次セッションで最初に着手するページ（例: `istqb-ct-mbt-complete-guide.html 移行`） |
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
