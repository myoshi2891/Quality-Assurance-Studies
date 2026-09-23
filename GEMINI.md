# Project Overview

Updated 2026-09-23

This project is a Next.js (App Router) web application designed as a comprehensive learning resource and guide for Quality Assurance (QA) and Software Testing. It provides extensive documentation on modern software testing methodologies as well as AI system testing based on ISTQB CT-AI and CT-GenAI standards.

## Core Technologies

- **Framework:** Next.js 15 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, PostCSS
- **Runtime / Package Manager:** Bun

## Building and Running

依存関係の管理、スクリプトの実行、および node ツールの実行には、必ず `bun` のみを使用してください。`npm`、`yarn`、または `pnpm` の使用は禁止されています。

> [!IMPORTANT]
> **ビルド実行に関する重要ルール (AIエージェント用規約):**
> **Antigravityのサンドボックス環境においては**、ビルドのバックグラウンド実行がローカルメモリを過度に圧迫しクラッシュを引き起こす問題が確認されています。
> AIエージェントは**自律的・自動的に本番ビルドコマンド（`bun run build`、`next build` 等）を実行してはなりません**。
> ビルド検証が必要な場合は、自らコマンドを実行せず、必ずユーザーにビルドの実行および成否の確認を依頼してください。

- **Install dependencies:** `bun install`
- **Run development server:** `bun run dev`
- **Run tests:** `bun test`
- **Run Linter:** `bun run lint`

## Development Conventions

- **Application Structure:** Uses the Next.js App Router (`app/` directory). Reusable UI components are placed in `components/`.
- **Single Source of Truth for Progress:** 全移行済みページ一覧および未移行ドキュメントの詳細は `docs/MIGRATION_PROGRESS.md` を参照してください。
- **Agent Protocol Enforcement (Gate Conditions & Commits):** プロジェクトのドキュメントやルール内で「ゲート条件 (Gate Condition)」として明記されたプロセス（`bun test`, `bun run lint`, PII 検査等）を厳格に実施してください。
- **Content Language:** The main content and documentation are written in Japanese. Always preserve this localized context.
- **Markdown Conventions:** すべての Markdown ドキュメントは `.markdownlint.json` に準拠する必要があります。コミット前に `bun node_modules/markdownlint-cli/markdownlint.js <file_path>` でエラーが 0 件であることを確認してください。
- **PII / 絶対パスの記載禁止 (CRITICAL):** コミット予定の全ファイルに、ローカルの絶対パス（`/Users/` 等）を記載してはなりません。コミット前に必ず `git diff --cached | grep -E "(/Users/|/home/|C:\\\\Users)"` を自律実行し、PII が混入していないことを検証してください。
- **一時スクリプトの削除:** デバッグ用スクリプトは作業完了後またはコミット前に必ずリポジトリから物理削除してください。

## Architecture & Navigation Single Source of Truth

- **ルート管理 (Single Source of Truth):** `lib/navigation.ts` の `NAV_ITEMS`。`components/Header.tsx`（ドロワー）と `app/page.tsx`（index）が共用します。
- 新ガイド追加時は `NAV_ITEMS` に `{ href, label, description, category }` を追加し、`e2e/pages.ts` の `PAGES` および `EXPECTED_PAGE_COUNT` と同期してください。
- ページ固有目次ナビは `NavBar.tsx`（`'use client'`）として各ページディレクトリに配置します。

## Key Gotchas & Implementation Rules

詳細は `.agents/skills/` または `.claude/skills/` を参照してください。

1. **`.code-block` 内の改行:** `{"\n"}` は使わず、各行を `<div className="code-line">` でラップします。
2. **テーブル文字色リセット:** `globals.css` の干渉（`#8ea3c3` 等の薄青灰色）を防ぐため、ページ固有 CSS で `tbody td` の文字色（`var(--ink)` や `var(--text)`）を完全リセットしてください。
3. **Mermaid 図解:** 共通コンポーネント `components/Mermaid.tsx` を直接変更せず、ページ固有の `MERMAID_CONFIG`（`%%{init}%%` ディレクティブ）でテーマを上書きします。JSON 値にシングルクォートを含めると無効化されるため厳禁です。
4. **スクロールバー:** `globals.css` の黒帯干渉を防ぐため、ページ固有 CSS でスクロールバートラックを透明、サムを適切な薄グレーにリセットしてください。
5. **ヒーロー高さ:** `globals.css` による `100vh` 膨張を防ぐため、カード型ヒーローには `min-height: 0 !important;` を指定してください。
