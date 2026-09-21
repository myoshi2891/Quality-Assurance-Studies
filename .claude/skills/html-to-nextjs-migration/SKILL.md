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

Provide the complete, ordered workflow for converting a standalone HTML page (with embedded `<style>`) into a fully integrated Next.js App Router page within the QA_Studies project. This skill extends the global `html-to-nextjs-migration` skill (JSX pitfalls, `class`/`className`, `<pre>` blocks, HTML entities) with project-specific CSS token mapping, file organization, and integration steps.

**Prerequisite**: Read the global skill first — it covers `<pre>` block conversion, `class`→`className` rules, HTML entity handling, and `@layer` priority. This skill assumes that knowledge and focuses on the **end-to-end workflow**.

## セッション開始時に必ず読むファイル

1. **`docs/MIGRATION_PROGRESS.md`** — 現在地・残タスク・再開プロンプト
2. **このファイル（`SKILL.md`）** — 移行手順と QA_Studies 固有ルール
3. **`.claude/rules/tdd-mandatory-cycle.md`** — TDD必須サイクル & コミット分割ルール
4. **`.claude/rules/css-cache-reset.md`** — CSS 変更後に `.next` を再ビルドしないと反映されない既知の罠

## Instructions

### TDD 必須サイクルの適用（最重要）

移行作業中は、常に `.claude/rules/tdd-mandatory-cycle.md` に定められた TDD サイクル（Red → Green → Refactor → Docs）を最優先で適用しなければなりません。

1. **タスク設計の段階**: `task.md` 内のタスクを「Red（テスト失敗とコミット）」「Green（実装とコミット）」「Refactor（リファクタ/ビルド/Linter修正とコミット）」「Docs Sync（進捗同期とコミット）」のコミット単位に明確に構造化する。
2. **厳格な網羅的テストスイート（Redフェーズ）の作成【抜け漏れ防止の絶対ルール】**: 移行漏れを未然に防ぐため、`tests/<page-slug>/page.test.tsx` に構成要素インベントリ（下記 Phase 1）の全項目を1対1で網羅したテストスイートを作成して失敗させる。H1/見出し構造、TOC全リンク、全Mermaid図解、全テーブル、全コードブロック、全コールアウト、全参考文献(URL・`target="_blank"`・`rel="noopener noreferrer"`)、ナビゲーション機能を漏れなくカバーする。
3. **一括コミットの厳禁**: テスト（Red）、実装（Green）、ナビ・アーカイブ、ドキュメント（Docs）を1つのコミットにまとめず、各フェーズで必ず分割コミットを行う。

### Phase 1: Analysis — Audit the Source HTML & Create Component Inventory

Before writing any code, read the source HTML thoroughly and create a **Component Inventory Checklist**:

1. 見出し・セクション数（H1〜H4、全セクションID）、TOCリンク数
2. Mermaid図解数（FIG番号、`flowchart`/`stateDiagram`/`sequenceDiagram` 等の種別）
3. テーブル数（名称・列構成・行数・セル内インラインコード）
4. コードブロック数（言語、ハイライト構文）、コールアウト・カード数
5. 参考文献リンク数（URL、タイトル、セキュリティ属性）、インタラクティブ要素（チェックリスト、タブ等）
6. **CSS Custom Properties** — `:root` の色・フォント・角丸・シャドウ変数一覧
7. **Unique Component Classes** — `app/globals.css` に無いページ固有クラス
8. **Font Families** — `layout.tsx` の既存フォントと一致するか。編集用エディトリアルフォントが必要なら `layout.tsx` の `next/font/google` に追加
9. **Animation Keyframes** — 全 `@keyframes` 名（camelCase → kebab-case へリネーム予定）

※ このインベントリの全項目は、Phase 1（Redフェーズ）のテストスイートで1対1のアサーションとして網羅する。

### Phase 2: CSS Variable & Theme Mapping

- **書籍ガイド・独自エディトリアルデザインの忠実再現**: 独自テーマ（温かみのある紙の背景、インク色文字、セリフ書体等）を持つHTMLは、**原著HTMLのデザインを忠実に再現する**。無理にグローバルのダークテーマに統一しない。
- **globals.css 干渉の完全排除**: 独自テーマ実装時は、ページ固有クラス（例: `.secure-by-design-page`）でスコープし、`globals.css` のダークテーマ用要素セレクタが漏れ出さないよう `references/globals-css-reset-template.md` のリセットを完全に適用する。
- **標準ダークテーマページ**: HTMLのローカル変数を `globals.css` の `@theme` トークン（`--color-bg-*`, `--color-text-*`, `--color-accent-*`, `--color-border*`, `--radius-*`, `--shadow-*`, `--font-display/body/mono`）へマッピングする。フォールバック必須: `var(--radius-DEFAULT, 12px)`。

### Phase 3: Create Page-Specific CSS File

1. Create `app/<page-name>.css` for styles unique to this page
2. Do NOT use `@layer components` — use plain CSS selectors for proper specificity over Tailwind preflight
3. Replace all HTML-local CSS variables with project `@theme` tokens (with fallbacks)
4. Rename keyframes from camelCase to kebab-case（例: `fadeUp` → `fade-up`）
5. Import the CSS at the top of the page component: `import '../<page-name>.css';`
6. **既知の CSS 不具合パターン**は `references/css-pitfalls.md` を参照（テーブル文字色消失、サイドバー境界線のコントラスト不足、Mermaid表示圧縮など、コードレビューで繰り返し検出されてきた項目の一覧）。

### Phase 3b: 独自レイアウト & globals.css 干渉リセット【最重要】

サイドバーナビ＋メインコンテンツのレイアウトを持つページは、`globals.css` の汎用セレクター（レイアウト余白・テーブル・文字色）が深刻な干渉を引き起こす。**`references/globals-css-reset-template.md` の完全なリセットテンプレートとサイドバー sticky 計算をそのまま適用すること。**

### Phase 4: Convert HTML to TSX

1. **Remove** `<html>`, `<head>`, `<body>`, `<style>`, `<script>` — handled by `layout.tsx`
2. **Remove** `<link>` font tags — fonts loaded via `next/font/google` in `layout.tsx`
3. **`<nav>` ブロックの扱い**:
   - グローバルサイトナビ（全ページ共通）→ **削除**（`components/Header.tsx` が提供）
   - ページ固有のアンカーナビ（sticky + `IntersectionObserver` スクロールスパイ付き）→ **削除せず移行**:
     1. `app/<page-slug>/NavBar.tsx` を `'use client'` コンポーネントとして作成
     2. HTML の `<script>` 内 `IntersectionObserver` ロジックを `useEffect` に変換し、クリーンアップで `obs.disconnect()` を呼ぶ
     3. CSS の `position: sticky; top: 0` → `top: 60px`（グローバル Header の高さ分オフセット）、`z-index` は `40` 以下（Header の `z-50` を超えない）
     4. `page.tsx`（Server Component のまま）先頭で `<NavBar />` をインポート・配置
4. **`.code-block` 内の行区切り**: `{"\n"}` は `white-space: normal` 環境ではスペースに正規化されるため使わない。各行を `<div className="code-line">...</div>` でラップする（`.code-line` に `white-space: pre` 定義済み）。デシジョンテーブル・行列データはスペース揃えではなく `<table>` へ変換する。
5. **Mermaid 図解の移植**: `<div class="mermaid">` 等は共通コンポーネント `components/Mermaid.tsx` に移植する。構文規則（カラム0配置、1ステートメント1行、`block-beta`禁止、全角記号の半角化等）とページ固有テーマの上書き方法（`%%{init}%%` ディレクティブ）は **`.claude/skills/fix-mermaid/SKILL.md` を必ず参照**する。特に「JSON 値の中にシングルクォートを入れると `%%{init}%%` 全体が黙って無視され、共通のダークテーマにフォールバックする」バグは頻発するため、実装後に必ず `.claude/skills/fix-mermaid/SKILL.md` の該当チェックコマンドで検証すること。
6. **Wrap** page content in a React component（`<main>` ラッパーは追加しない。`layout.tsx` が既に `{children}` をラップ済み）:

   ```tsx
   import '../<page-name>.css';

   export default function PageName() {
     return (
       <>
         <section className="hero" id="top">{/* content */}</section>
       </>
     );
   }
   ```

7. **Convert attributes**: `class` → `className`, `for` → `htmlFor`。インラインスタイル `style="..."` → `style={{ ... }}`。自己終了タグ `<img>`/`<br>`/`<hr>` → `<img />`/`<br />`/`<hr />`。HTMLコメント `<!-- -->` → `{/* */}`。

### Phase 5: Integration Steps

1. **Header Navigation**: `lib/navigation.ts` の `NAV_ITEMS` に新規ページを追加する（`components/Header.tsx` と `/` index の両方に反映される Single Source of Truth）。`description` は必須・80文字以内。
2. **Navigation & E2E テスト整合性の更新（CRITICAL）**: `tests/lib/navigation.test.ts` の `NAV_ITEMS` 件数期待値、および `e2e/pages.ts` の `PAGES` 配列と `EXPECTED_PAGE_COUNT` を新規ページ分だけ増分する。片方だけ更新すると `tests/lib/navigation-e2e-sync.test.ts` が落ちる。
3. **Route Directory**: `app/<page-slug>/page.tsx` を Next.js App Router 規約で作成する。
4. **CLAUDE.md / GEMINI.md**: Architecture セクションに `app/<page-slug>/page.tsx` — ページの説明 を両ファイルへ追加する。
5. **`docs/coverage-dashboard.html`**: `tests/<page-slug>/page.test.tsx` 追加後、`DATA.pages` 配列にエントリを追加し、`--coverage` の数値を再計算する。

### Phase 6: Verification

#### サンドボックス環境必須ルール

> [!IMPORTANT]
> Antigravityのサンドボックス環境では、ビルドのバックグラウンド実行がローカルメモリを過度に圧迫しクラッシュを引き起こす問題が確認されている。AIエージェントは**自律的・自動的に本番ビルドコマンド（`bun run build` 等）を実行してはならない**。ローカル検証は `bun test` と `bun run lint` で行い、本番ビルド確認はユーザーへ依頼する。

```bash
# 1. ページ固有テストの実行
bun test tests/<page-slug>/page.test.tsx

# 2. ナビゲーション整合性テストの実行
bun test tests/lib/navigation.test.ts tests/lib/navigation-e2e-sync.test.ts

# 3. Linter の実行
bun run lint

# 4. JSX の class 属性の取りこぼしを機械的に検出する（Invalid DOM property 警告の防止）
#    グローバルスキルの class→className ルールを適用しても手作業で漏れることがあるため、
#    移行完了前に必ずこのコマンドでゼロ件であることを確認する
grep -n 'class="' app/<page-slug>/page.tsx
```

#### CSS 変更後は必ずキャッシュリセット（必須トリガー）

Phase 3 / 3b で `*.css` を編集したら、**Visual Verification に進む前に**必ず `.claude/rules/css-cache-reset.md` の手順（`rm -rf .next && bun run dev`）を実行する。古い `.next` チャンクが残ったまま目視確認すると、正しく直した修正が「反映されていない」ように見えて無駄な調査を繰り返すことになる（実際に2026年9月に発生）。dev サーバーを自分で起動・再起動した場合は、コンパイル済みチャンク（`.next/dev/server/chunks/ssr/*.js` や `/_next/static/chunks/*.css`）を `grep` して変更が実際に含まれているかを機械的に確認してから、ブラウザでの目視確認へ進む。

#### Visual Verification Checklist

- [ ] Page renders without console errors（`class="..."` による `Invalid DOM property` 警告が無いこと含む）
- [ ] テーブルの文字色が薄くならず、濃いインク色（`var(--ink)`）で明瞭に表示されている（`references/css-pitfalls.md` 参照）
- [ ] 構成要素インベントリの全図解・全表・全コード・全コールアウト・全参考文献に抜け漏れがない
- [ ] All `<pre>` code blocks display as multi-line、`.code-block` 内に `{"\n"}` が残っていない
- [ ] Mermaid 図がページのテーマ（ライト/独自配色）通りに表示され、共通コンポーネントのダークテーマが漏れ出していない（`.claude/skills/fix-mermaid/SKILL.md` の検証コマンドで確認済みであること）
- [ ] Cards, badges, callouts display correctly。Fonts load properly（display, body, mono）
- [ ] Navigation shows new page link and works。ページ固有スティッキーナビが Header 直下（60px）に表示されアクティブリンクが切り替わる
- [ ] Responsive layout at 768px and 640px breakpoints。z-index 競合がない
- [ ] サイドバー付きレイアウトの場合、境界線（`border-right`）が視認できるコントラストになっている

## セッション終了前同期（必須）

<ai_agent_directive>
**AI エージェントへの厳格な指示**: 以下のプロセスは**ゲート条件（Gate Condition）**です。タスクの報告を行う前に、テスト・Linter・PII スキャンおよび `docs/MIGRATION_PROGRESS.md` の更新まではステップバイステップで完了させてください。
ただし **`git commit` の実行にはユーザーの明示的な承認が必須**です。コミット前に必ず以下を行ってください。

1. `git status` / `git diff --cached` でコミット対象を確認し、**無関係な変更やステージ漏れが混入していないか**を点検する
2. コミット対象ファイルとコミットメッセージ案をユーザーへ提示する
3. ユーザーの明示的な承認を得てから `git commit` を実行する

承認を得ずに自動でコミットを作成してはなりません。
</ai_agent_directive>

**ゲート条件**: PII スキャンは **`git add` 後・最初の `git commit` 実行前**に必ず行う（コミット後は staged 差分が空になり検査が空振りするため）。コミット完了後は、次 HTML を `Read` し始める前に `docs/MIGRATION_PROGRESS.md` の同期まで済ませる。

```bash
# 1. テストとLinterの通過を確認（ビルドコマンドは実行しない）
bun test tests/<page-slug>/page.test.tsx
bun run lint

# 2. `git add` 後・`git commit` 実行前に staged 差分を走査する【必須 Gate Condition】
#    検出時は終了コード 1 で失敗させ、コミットを中止して相対パスへ修正する
if git diff --cached | grep -E '^\+[^+]' | grep -E '(/Us[e]rs/|/ho[m]e/|[A-Za-z]:\\[Uu][Ss][Ee][Rr][Ss]\\|\\\\[A-Za-z0-9._-]+\\[Uu][Ss][Ee][Rr][Ss]\\)'; then
  echo "PII detected — abort commit" >&2
  exit 1
fi
echo "PII check passed"
```

PII チェック通過後に `git commit` を実行する。その後 `docs/MIGRATION_PROGRESS.md` の以下を更新し、同じ手順（`git add` → PII スキャン → `git commit`）で再度コミットする:

| フィールド | 更新内容 |
|---|---|
| `最新 HEAD` | `git rev-parse --short HEAD` の実値 |
| `次の作業` | 次セッションで最初に着手するページ |
| `再開プロンプト` | 上記と整合した内容 |

手順の詳細は `.claude/rules/migration-progress-sync.md` を参照。

## Reference Files

| ファイル | 内容 |
| --- | --- |
| `references/css-pitfalls.md` | Phase 3 の既知 CSS 不具合パターン一覧（テーブル文字色、サイドバー境界線、Mermaid圧縮等） |
| `references/globals-css-reset-template.md` | Phase 3b の完全な globals.css リセットテンプレート、サイドバー sticky 計算、Reusable CSS Component Classes 一覧 |
| `.claude/skills/fix-mermaid/SKILL.md` | Mermaid 構文修正・テーマ上書き・edgeLabel 保護の専用スキル |
| `.claude/rules/css-cache-reset.md` | CSS 変更後の `.next` キャッシュリセット手順 |
| `.claude/rules/tdd-mandatory-cycle.md` | TDD必須サイクル & コミット分割ルール |
| `.claude/rules/migration-progress-sync.md` | `docs/MIGRATION_PROGRESS.md` 更新手順 |

## Constraints

- **Always reset table and text styling against globals.css interference** — `references/globals-css-reset-template.md` のテンプレートを適用すること
- **Always perform complete component inventory audit before coding** — Phase 1 のインベントリを Redフェーズのテストスイートで漏れなく網羅すること
- **Never run production build autonomously in sandbox environment** — 検証は `bun test` と `bun run lint` で行い、ビルド確認はユーザーへ依頼すること
- **Always scan cached diff for PII and local absolute paths before commit**
- **Always grep for stray `class="` attributes in page.tsx before considering migration complete** — グローバルスキルの `class`→`className` ルールを適用していても、大きいページでは数箇所取りこぼすことがある（2026-09 実例）。Phase 6 のコマンドで機械的にゼロ件を確認すること
- **Always run the `.next` cache reset after any `*.css` edit, before visual verification** — 古いキャッシュを見て「直っていない」と誤診断し、無駄な調査ループに入ることを防ぐ
- **Always verify Mermaid theme overrides actually applied** — `%%{init}%%` を使うページでは `.claude/skills/fix-mermaid/SKILL.md` の検証コマンド（特にシングルクォート混入チェック）を実行し、共通ダークテーマへのフォールバックが起きていないことを確認すること
- **Never import external fonts via `<link>` tags** — Use `next/font/google` in `layout.tsx` only
- **Never define duplicate CSS variables** in page CSS that already exist in `globals.css @theme`
- **Never use `@layer components`** for page-specific styles — plain CSS only for proper specificity
- **Never place responsive overrides outside `@media` queries**
- **Never use camelCase for `@keyframes` names** — use kebab-case
- **Pages are server-rendered** — no `useState`/`useEffect` unless explicitly needed (`'use client'`)
- **Always update Header.tsx (lib/navigation.ts) and CLAUDE.md/GEMINI.md** when adding a new page
- **Always use fallback values** for CSS vars that may not be defined: `var(--radius-DEFAULT, 12px)`
- **Never use `{"\n"}` for line breaks inside `.code-block`** — wrap each line in `<div className="code-line">`
- **Never align tabular data with spaces in `.code-block`** — use `<table>` instead
- **Never remove page-specific anchor nav bars** — migrate as `'use client'` `NavBar.tsx` with `top: 60px`
- **Never duplicate page scope classes in CSS selectors** — `.page-class .alert.green`、not `.page-class .alert.page-class .green`
- **Never add `margin-top: 60px` to page-specific layout wrappers** — `layout-content` already has `padding-top: 60px`
- **Always review and correct translation errors** — 「A of B」のような英語の直訳表現を「AのB」に修正する
- **Always restore list markers reset by Tailwind Preflight** — リストコンテナに `list-style-type: disc !important` / `decimal !important` を指定する
- **Never waste tokens on unnecessary browser subagent invocations** — 軽微な検証のためにブラウザサブエージェントを連続起動しない。CSS/DOM の静的解析と、必要ならヘッドレス mermaid 実行での検証を優先する
