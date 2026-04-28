# Project Overview

This project is a Next.js (App Router) web application designed as a comprehensive learning resource and guide for Quality Assurance (QA) and Software Testing. It provides extensive documentation on modern software testing methodologies (Unit, Functional, Integration, E2E, BDD, Security, Accessibility) as well as AI system testing based on ISTQB CT-AI and CT-GenAI standards.

## Core Technologies

- **Framework:** Next.js 15 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, PostCSS
- **Runtime / Package Manager:** Bun

## Building and Running

依存関係の管理、スクリプトの実行、および node ツールの実行には、必ず `bun` のみを使用してください。`npm`、`yarn`、または `pnpm` の使用は禁止されています。

- **Install dependencies:**

  ```bash
  bun install
  ```

- **Run development server:**

  ```bash
  bun run dev
  ```

- **Build for production:**

  ```bash
  bun run build
  ```

- **Start production server:**

  ```bash
  bun run start
  ```

- **Run Linter:**

  ```bash
  bun run lint
  ```

## Development Conventions

- **Application Structure:** Uses the Next.js App Router (`app/` directory) for routing and page structure. Reusable UI components are placed in the `components/` directory.
- **Styling Approach:** Tailwind CSS utility classes are the primary styling mechanism.
- **Content Language:** The main content and documentation are written in Japanese. Always preserve this localized context when updating or adding new content.
- **Markdown Conventions:** すべての Markdown ドキュメントは `.markdownlint.json` に準拠する必要があります。
  - 準拠状況を確認するには、次を実行します: `bun x markdownlint-cli <file>`
  - 一般的な問題（見出しのスペース、リンク、末尾の改行など）を自動整形して修正するには、次を実行します: `bun scripts/format-markdown.mjs <file>`
  - **エラー修正の原則:** マークダウンのエラー修正時は、スクリプトによる一括修正を禁止します。無理に一括での修正を行わず、必ずステップバイステップで確実に正確な修正を最優先してください。
- **Markdown Standardization:** 変換スクリプトに頼るのではなく、Markdown ソースファイル自体が標準的な仕様に準拠していることを最優先します。
  - 言語指定のないコードブロック（`` ``` ``）によるテキストの囲みは避け、引用（>）や適切な見出しを使用してください。
  - 表や図（Mermaid）はコードブロック内に閉じ込めず、Markdown 上で直接レンダリング可能な形で記述してください。
- **Educational Tone:** The codebase serves an educational purpose. Code additions should be well-documented and follow the structured, step-by-step explanatory format present in existing pages like `app/page.tsx` and `app/ai-test-guide/page.tsx`.
- **HTML Migration Workflow:** 静的 HTML ページを Next.js に移行する際のワークフロー:
    1. `scripts/extract-css.mjs` を使用して、CSS 変数を抽出しマッピングします。
    2. `scripts/html-to-tsx.mjs` を使用して、HTML を JSX に変換します。
    3. CSS の詳細度やスコープの問題を手動で修正します（すべてのスタイルがページ固有のクラスの下にスコープされていることを確認してください）。
    4. 元の HTML ファイルを `/html-archive/` ディレクトリに移動します。
    5. `components/Header.tsx` のナビゲーションと `CLAUDE.md`, `GEMINI.md` のアーキテクチャ情報を更新します。

## Migrated Pages (Tracking)

- `app/istqb-ctal-tae-complete-guide/page.tsx` (テスト自動化 CTAL-TAE 完全ガイド)
- `app/istqb-ctal-ta-complete-guide/page.tsx` (テストアナリスト CTAL-TA 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-tm-complete-guide/page.tsx` (テスト管理 CTAL-TM 完全ガイド、`NavBar.tsx` 付き)

## HTML → Next.js 移行 注意事項

移行時に頻発する問題。詳細は `.claude/skills/html-to-nextjs-migration/SKILL.md` を参照。

### `.code-block` 内の改行

`{"\n"}` は `.code-block`（`white-space: normal`）では改行にならずスペース扱いになる。
各行を必ず `<div className="code-line">` でラップすること（`.code-line` には `white-space: pre` が定義済み）。

```tsx
{/* ❌ NG */}
<div className="code-block">
  <span className="code-cyan">Given</span>{"\n"}
  <span className="code-white">条件</span>
</div>

{/* ✅ OK */}
<div className="code-block">
  <div className="code-line"><span className="code-cyan">Given</span><span className="code-white"> 条件</span></div>
</div>
```

### ページ固有スティッキーナビ

- HTML の `<nav>`（ページ内アンカー付き）はグローバル Header とは別物。削除せず `'use client'` コンポーネントとして移行する
- CSS: `position: sticky; top: 60px; z-index: 40`（Header は `fixed` / 高さ 60px / `z-50`）
- `IntersectionObserver` は `useEffect` で設定し、クリーンアップで `obs.disconnect()` を呼ぶ

### CSSセレクタのスコープ（クラス重複）

- ページ固有のCSSを作成する際、`.istqb-ctal-tm-page` のようなページ固有クラスを親に指定しますが、子要素のモディファイアなどで再度同じクラスを重複させないように注意してください。
- ❌ NG: `.page-class .alert.page-class .green`
- ✅ OK: `.page-class .alert.green`
