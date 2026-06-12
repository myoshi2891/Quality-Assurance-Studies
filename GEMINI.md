# Project Overview

Updated 2026-06-10

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
- **Agent Protocol Enforcement (Gate Conditions & Commits):** プロジェクトのドキュメントやルール内で「ゲート条件 (Gate Condition)」「必ず実施する」「同期ルール」として明記されたプロセス（例: `git commit`、`docs/MIGRATION_PROGRESS.md` の更新）は、**AI エージェントがユーザーの許可を待たずに自律的・自動的に実行しなければならない厳格なプロトコル**です。タスクの完了を報告する前に、ルールに指定された `git add` と `git commit`、およびファイルの更新をステップバイステップで確実に実行してください。これらの手順をスキップしたり、ユーザーに実行の許可を求めたりすることは禁止されています。
- **Styling Approach:** Tailwind CSS utility classes are the primary styling mechanism.
- **Content Language:** The main content and documentation are written in Japanese. Always preserve this localized context when updating or adding new content.
- **Markdown Conventions:** すべての Markdown ドキュメントは `.markdownlint.json` に準拠する必要があります。
  - **コミット前必須検証 (Gate Condition):** Markdownファイルを新規作成または編集した場合は、コミットする前に必ず `.claude/skills/markdown-formatter/SKILL.md` をロードし、そこに定義されたリント検証コマンド（`node node_modules/markdownlint-cli/markdownlint.js <file_path>` など）を実行して、エラーが 0 件であることを検証しなければなりません。
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
- **PII / 絶対パスの記載禁止 (CRITICAL):** コミット予定のすべてのファイル（ドキュメント、設定、コード、コメント等）に、ユーザー名を含むローカルの絶対パス（`/Users/` や `/home/`、`C:\Users\` 等）を記載してはなりません。これは個人情報（PII）の流出につながる重大なセキュリティ違反です。AI エージェントは、**コミットを適用する前に、必ず `git diff --cached` でコミット差分を走査し、プレースホルダー (`johndoe`) 以外の絶対パスやローカル名が混入していないことを機械的（`grep`等）に検証するプロセスを自律的かつ自動的に実行してください。**
- **開発・デバッグ用スクリプトの管理ルール:** 開発中に作成するスクリプトは、その目的が一時的なものか永続的なものかを明確にし、厳格に管理しなければなりません。
  - **一時的なスクリプト (デバッグ・調査用):** ログ解析、単発のデータ抽出等の目的で作成したスクリプトおよび出力された一時ファイルは、作業完了後またはコミット前に必ずリポジトリから物理削除し、決してコミットに含めてはなりません。特にローカル絶対パス（PII）を含むものは、流出防止のため即時削除を徹底してください。作成時にはユーザーに「一時的なスクリプトであること」を明確に報告します。
  - **永続的なスクリプト (プロジェクト機能・テスト用):** プロジェクトの機能、自動テスト、CI/CDなどで永続的に使用するスクリプトは、作成時にその役割と設置場所を明記して報告します。当然、これらのファイルには PII やローカル絶対パスが含まれていないことを事前に走査・検証しなければなりません。

## Migrated Pages (Tracking)

- `app/page.tsx` (ホームページ — 2025 完全ガイド トップ)
- `app/acceptance-testing-guide/page.tsx` (受入テスト完全ガイド、`NavBar.tsx` 付き)
- `app/ai-test-guide/page.tsx` (AI テスト基礎)
- `app/bdd-testing-guide/page.tsx` (BDD（ビヘイビア駆動開発）完全ガイド)
- `app/e2e-testing-guide/page.tsx` (E2Eテスト完全ガイド、`NavBar.tsx` 付き)
- `app/integration-functional-testing-guide/page.tsx` (統合/機能テスト完全ガイド)
- `app/integration-system-testing-guide/page.tsx` (インテグレーション/システムテストガイド)
- `app/software-testing-methodologies-guide/page.tsx` (テスト手法ガイド)
- `app/unit-testing-guide/page.tsx` (ユニットテスト完全ガイド)
- `app/istqb-ctfl-at-complete-guide/page.tsx` (アジャイル(CTFL-AT)完全ガイド)
- `app/istqb-ctal-tae-complete-guide/page.tsx` (テスト自動化 CTAL-TAE 完全ガイド)
- `app/istqb-ctal-ta-complete-guide/page.tsx` (テストアナリスト CTAL-TA 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-tm-complete-guide/page.tsx` (テスト管理 CTAL-TM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-tta-complete-guide/page.tsx` (テクニカルテストアナリスト(CTAL-TTA)完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-att-complete-guide/page.tsx` (アジャイルテスト担当者 CTAL-ATT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-atlas-complete-guide/page.tsx` (アジャイルテストリーダーシップ CT-ATLaS 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ai-complete-guide/page.tsx` (AIテスト CT-AI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-complete-guide/page.tsx` (GenAIテスト CT-GenAI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-mbt-complete-guide/page.tsx` (モデルベーステスト CT-MBT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-act-complete-guide/page.tsx` (受入テスト CT-AcT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-aut-complete-guide/page.tsx` (自動車ソフトウェアテスター CT-AuT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-mat-complete-guide/page.tsx` (モバイルアプリテスト CT-MAT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-sec-complete-guide/page.tsx` (セキュリティテストガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ste-complete-guide/page.tsx` (セキュリティテストエンジニア(CT-STE)ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-game-complete-guide/page.tsx` (ゲームテスト CT-GaMe 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-pt-complete-guide/page.tsx` (パフォーマンステスト CT-PT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ut-complete-guide/page.tsx` (ユーザビリティテスト CT-UT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-tas-complete-guide/page.tsx` (テスト自動化戦略 CT-TAS 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-itp-atp-complete-guide/page.tsx` (テストプロセス評価 CTEL-ATP 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-itp-itpi-complete-guide/page.tsx` (テストプロセス改善実装 CTEL-ITPI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-sm-complete-guide/page.tsx` (テスト管理戦略 CTEL-TM-SM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-otm-complete-guide/page.tsx` (オペレーショナルテスト管理 CTEL-TM-OTM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-mtt-complete-guide/page.tsx` (テストチーム管理 CTEL-TM-MTT 完全ガイド、`NavBar.tsx` 付き)

## HTML → Next.js 移行 注意事項

移行時に頻発する問題。詳細は `.claude/skills/html-to-nextjs-migration/SKILL.md` および **`.claude/rules/tdd-mandatory-cycle.md` (TDD 必須サイクルルール)** を参照。

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

### アクセシビリティとZ-indexの罠

- **Z-index オーバーレイ**: `::before` や `::after` で画面全体にスキャンラインなどのテクスチャを配置する際、クリックを妨害しないように必ず `pointer-events: none` と背面の `z-index: 0`（または `-1`）を指定してください。
- **`prefers-reduced-motion` の罠**: 進捗バーなど `max-width: 0` から `100%` へアニメーションで伸ばす要素は、「視覚効果を減らす」環境下で `animation: none` となると幅 0 のまま消えてしまいます。必ず `@media (prefers-reduced-motion: reduce)` ブロック内で `max-width: 100% !important;` などを設定し、最終的な視認性を確保してください。
- **ResizeObserver による無限ループ防止**: DisclaimerBanner などで要素の高さを監視し、CSS変数を介して他の要素に高さを伝える場合、監視対象の高さが微小に変化し続けることで無限レイアウト再計算ループが発生する危険があります。高さを更新する際は、前回保存した高さ（`lastHeight`）と現在の高さの差分が実際に異なる場合のみ更新するように、必ずガード処理を入れてください。

## 移行状況テーブル

### 移行完了（html-archive/ に移動済み）

| 元 HTML | 移行先ルート | 備考 |
|---|---|---|
| `acceptance-testing-guide.html` | `/acceptance-testing-guide` | ✅ |
| `e2e-testing-guide.html` | `/e2e-testing-guide` | ✅ |
| `integration-functional-testing-guide.html` | `/integration-functional-testing-guide` | ✅ |
| `integration-system-testing-guide.html` | `/integration-system-testing-guide` | ✅ |
| `istqb-ct-ai-complete-guide.html` | `/istqb-ct-ai-complete-guide` | ✅ NavBar あり |
| `istqb-ct-genai-complete-guide.html` | `/istqb-ct-genai-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mbt-complete-guide.html` | `/istqb-ct-mbt-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-aut-complete-guide.html` | `/istqb-ct-aut-complete-guide` | ✅ NavBar あり |
| `istqb-ct-pt-complete-guide.html` | `/istqb-ct-pt-complete-guide` | ✅ NavBar あり |
| `istqb-ct-act-complete-guide.html` | `/istqb-ct-act-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mat-complete-guide.html` | `/istqb-ct-mat-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-sec-complete-guide.html` | `/istqb-ct-sec-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-ste-complete-guide.html` | `/istqb-ct-ste-complete-guide` | ✅ NavBar あり |
| `istqb-ct-game-complete-guide.html` | `/istqb-ct-game-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-tas-complete-guide.html` | `/istqb-ct-tas-complete-guide` | ✅ NavBar あり |
| `istqb-ct-ut-complete-guide.html` | `/istqb-ct-ut-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-atlas-complete-guide.html` | `/istqb-ctal-atlas-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-att-complete-guide.html` | `/istqb-ctal-att-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-ta-complete-guide.html` | `/istqb-ctal-ta-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-tae-complete-guide.html` | `/istqb-ctal-tae-complete-guide` | ✅ |
| `istqb-ctal-tm-complete-guide.html` | `/istqb-ctal-tm-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-tta-complete-guide.html` | `/istqb-ctal-tta-complete-guide` | ✅ NavBar あり |
| `istqb-ctel-itp-atp-complete-guide.html` | `/istqb-ctel-itp-atp-complete-guide` | ✅ NavBar あり |
| `istqb-ctel-itp-itpi-complete-guide.html` | `/istqb-ctel-itp-itpi-complete-guide` | ✅ NavBar あり |
| `istqb-ctel-tm-sm-complete-guide.html` | `/istqb-ctel-tm-sm-complete-guide` | ✅ NavBar あり |
| `ISTQB-CTEL-TM-OTM-Guide.html` | `/istqb-ctel-tm-otm-complete-guide` | ✅ NavBar あり |
| `istqb-ctel-tm-mtt-complete-guide.html` | `/istqb-ctel-tm-mtt-complete-guide` | ✅ NavBar あり |
| `modern-software-testing-complete-guide-2025.html` | `/` (ホームページ) | ✅ |
| `software-testing-methodologies-guide.html` | `/software-testing-methodologies-guide` | ✅ |
| `unit-testing-guide.html` | `/unit-testing-guide` | ✅ |
| `istqb-ct-gt-complete-guide.html` | `/istqb-ct-gt-complete-guide` | ✅ NavBar + aria-current あり |

### 未移行（プロジェクトルートに残存）

| ファイル | 予定ルート | 状態 | 備考 |
|---|---|---|---|
| (なし) | | | 全てのガイドの移行が完了しました |

## 既知の留保事項

- `istqb-ctfl-at-complete-guide` と `bdd-testing-guide` / `ai-test-guide` は html-archive/ に元 HTML が存在しない（最初から Next.js で作成）
- `istqb-ct-aut-complete-guide.html` はリポジトリ内に存在しません（not found）。

## 次回セッションでの再開プロンプト

```text
コンテキスト:
- 最新 HEAD: `1bfd639`
- **全ガイド移行完了**: プロジェクトルートに存在した全34ルート分のHTMLおよびMarkdownファイルの Next.js App Router への移行が完全に終了しました。
- 合計 34 ルート（ホーム + 33 ガイド）が管理されています。
- 各種テスト（ユニット、型チェック、ESLint）はすべて最新の構成に同期され、通過しています。

【指示】
全ガイドの Next.js 移行が完了しました。今後の品質向上、E2Eテストの拡充、または新しい機能追加について指示を仰ぎます。
```
