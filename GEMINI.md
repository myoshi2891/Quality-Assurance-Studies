# Project Overview

Updated 2026-10-22

This project is a Next.js (App Router) web application designed as a comprehensive learning resource and guide for Quality Assurance (QA) and Software Testing. It provides extensive documentation on modern software testing methodologies (Unit, Functional, Integration, E2E, BDD, Security, Accessibility) as well as AI system testing based on ISTQB CT-AI and CT-GenAI standards.

## Core Technologies

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, PostCSS
- **Runtime / Package Manager:** Bun

## Building and Running

依存関係の管理、スクリプトの実行、および node ツールの実行には、必ず `bun` のみを使用してください。`npm`、`yarn`、または `pnpm` の使用は禁止されています。

> [!IMPORTANT]
> **ビルド実行に関する重要ルール (AIエージェント用規約):**
> **Antigravityのサンドボックス環境においては**、ビルドのバックグラウンド実行が正常にハンドリングされず、
> ビルド待ちの状態が続いてローカルメモリを過度に圧迫し、最終的にクラッシュを引き起こす問題が
> 確認されています。
> そのため、本プロジェクトのルール（`migration-progress-sync.md` や `tdd-mandatory-cycle.md`
> などのゲート条件）でビルドの検証が義務付けられている場合であっても、AIエージェント
> （Antigravity）は**自律的・自動的に本番ビルドコマンド（`bun run build`、`next build` 等）を
> 実行してはなりません（このサンドボックス上の制約は他のあらゆるゲート条件より最優先されます）**。
> ビルド検証が必要な場合は、自らコマンドを実行せず、必ずユーザーにビルドの実行および成否の確認を
> 依頼してください。

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
  - **コミット前必須検証 (Gate Condition):** Markdownファイルを新規作成または編集した場合は、コミットする前に必ず `.claude/skills/markdown-formatter/SKILL.md` をロードし、そこに定義されたリント検証コマンド（`bun node_modules/markdownlint-cli/markdownlint.js <file_path>` など）を実行して、エラーが 0 件であることを検証しなければなりません。
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
    4. 元の HTML ファイルを `archive/html-archive/` ディレクトリ（カテゴリ別サブディレクトリあり: `cicd/` `ctal/` `ctel/` `ctfl/` `tools/` など）に移動します。
    5. `lib/navigation.ts` の `NAV_ITEMS` と `e2e/pages.ts` の `PAGES` / `EXPECTED_PAGE_COUNT` に新ルートを追加し、`CLAUDE.md`, `GEMINI.md` のアーキテクチャ情報を更新します（`components/Header.tsx` は `NAV_ITEMS` から描画するため直接編集は不要）。
- **PII / 絶対パスの記載禁止 (CRITICAL):** コミット予定のすべてのファイル（ドキュメント、設定、コード、コメント等）に、ユーザー名を含むローカルの絶対パス（`/Users/` や `/home/`、`C:\Users\` 等）を記載してはなりません。これは個人情報（PII）の流出につながる重大なセキュリティ違反です。AI エージェントは、**コミットを適用する前に、必ず `git diff --cached` でコミット差分を走査し、プレースホルダー (`johndoe`) 以外の絶対パスやローカル名が混入していないことを機械的（`grep`等）に検証するプロセスを自律的かつ自動的に実行してください。**
- **開発・デバッグ用スクリプトの管理ルール:** 開発中に作成するスクリプトは、その目的が一時的なものか永続的なものかを明確にし、厳格に管理しなければなりません。
  - **一時的なスクリプト (デバッグ・調査用):** ログ解析、単発のデータ抽出等の目的で作成したスクリプトおよび出力された一時ファイルは、作業完了後またはコミット前に必ずリポジトリから物理削除し、決してコミットに含めてはなりません。特にローカル絶対パス（PII）を含むものは、流出防止のため即時削除を徹底してください。作成時にはユーザーに「一時的なスクリプトであること」を明確に報告します。
  - **永続的なスクリプト (プロジェクト機能・テスト用):** プロジェクトの機能、自動テスト、CI/CDなどで永続的に使用するスクリプトは、作成時にその役割と設置場所を明記して報告します。当然、これらのファイルには PII やローカル絶対パスが含まれていないことを事前に走査・検証しなければなりません。

## Migrated Pages (Tracking)

- `app/page.tsx` (ガイドライブラリ index — 全ガイドをカテゴリ別カードで一覧、検索付き)
- `app/GuideIndex.tsx` (index の検索 + レベル別セクション、`'use client'`)
- `app/modern-software-testing-complete-guide-2025/page.tsx` (現代ソフトウェアテスト完全ガイド 2025 — 旧ホーム本文の移設先)
- `app/acceptance-testing-guide/page.tsx` (受入テスト完全ガイド、`NavBar.tsx` 付き)
- `app/ai-test-guide/page.tsx` (AI テスト基礎)
- `app/bdd-testing-guide/page.tsx` (BDD（ビヘイビア駆動開発）完全ガイド)
- `app/e2e-testing-guide/page.tsx` (E2Eテスト完全ガイド、`NavBar.tsx` 付き)
- `app/integration-functional-testing-guide/page.tsx` (統合/機能テスト完全ガイド)
- `app/integration-system-testing-guide/page.tsx` (インテグレーション/システムテストガイド)
- `app/software-testing-methodologies-guide/page.tsx` (テスト手法ガイド)
- `app/unit-testing-guide/page.tsx` (ユニットテスト完全ガイド)
- `app/istqb-ctfl-at-complete-guide/page.tsx` (アジャイル(CTFL-AT)完全ガイド)
- `app/istqb-ctfl-at-chapter1-agile-software-development/page.tsx` (アジャイル(CTFL-AT)1章ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/page.tsx` (アジャイル(CTFL-AT)2章ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctfl-at-chapter3-agile-testing-techniques-tools/page.tsx` (アジャイル(CTFL-AT)3章ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctfl-complete-guide/page.tsx` (ISTQB CTFL v4.0 完全解説ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter1-fundamentals/page.tsx` (CTFL v4.0 第1章 テストの基礎、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter2-sdlc-and-testing/page.tsx` (CTFL v4.0 第2章 SDLCとテスト、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter3-static-testing/page.tsx` (CTFL v4.0 第3章 静的テスト、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter4-test-analysis-and-design/page.tsx` (CTFL v4.0 第4章 テスト分析・設計、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter5-test-management/page.tsx` (CTFL v4.0 第5章 テスト活動の管理、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter6-test-tools/page.tsx` (CTFL v4.0 第6章 テストツール、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-complete-guide/page.tsx` (テスト自動化 CTAL-TAE 完全ガイド)
- `app/istqb-ctal-tae-chapter1-introduction-and-objectives/page.tsx` (CTAL-TAE 第1章 テスト自動化の導入と目的、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-chapter2-preparing-for-test-automation/page.tsx` (CTAL-TAE 第2章 テスト自動化の準備、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-chapter3-test-automation-architecture/page.tsx` (CTAL-TAE 第3章 テスト自動化アーキテクチャ、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-chapter4-implementing-test-automation/page.tsx` (CTAL-TAE 第4章 テスト自動化の実装、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-chapter5-implementation-deployment-strategies/page.tsx` (CTAL-TAE 第5章 実装・デプロイ戦略、`NavBar.tsx`・`diagrams.ts`・専用CSS付き)
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/page.tsx` (CTAL-TAE 第6章 レポートとメトリクス、カテゴリー別本文・`NavBar.tsx`・`ChecklistCard.tsx`・図定義・専用CSS付き)
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/page.tsx` (CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別本文・静的構文色・目次と進捗・図定義・専用CSS付き)
- `app/istqb-ctal-tae-chapter8-continuous-improvement/page.tsx` (CTAL-TAE第8章 継続的改善、本文8カテゴリー・目次70リンク・16図・構文色付きコード6例・専用ライトCSS)
- `app/istqb-ctal-ta-complete-guide/page.tsx` (テストアナリスト CTAL-TA 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter1-test-process/page.tsx` (CTAL-TA 第1章 テストプロセス、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter2-risk-based-testing/page.tsx` (CTAL-TA 第2章 リスクベースドテスト、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter3-test-analysis-and-design/page.tsx` (CTAL-TA 第3章 テスト分析とテスト設計、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter4-quality-characteristics/page.tsx` (CTAL-TA 第4章 品質特性のテスト、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter5-defect-prevention/page.tsx` (CTAL-TA 第5章 ソフトウェア欠陥防止、TOCナビ付き)
- `app/istqb-ctal-tm-chapter1-managing-the-test-activities/page.tsx` (CTAL-TM 第1章 テスト活動の管理、`NavBar.tsx` 付き)
- `app/istqb-ctal-tm-chapter2-managing-the-product/page.tsx` (CTAL-TM 第2章 プロダクトのマネジメント、`NavBar.tsx` 付き)
- `app/istqb-ctal-tm-chapter3-managing-the-team/page.tsx` (CTAL-TM 第3章 チームの管理、`NavBar.tsx` 付き)
- `app/istqb-ctal-tm-complete-guide/page.tsx` (テスト管理 CTAL-TM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-tta-complete-guide/page.tsx` (テクニカルテストアナリスト(CTAL-TTA)完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-att-complete-guide/page.tsx` (アジャイルテスト担当者 CTAL-ATT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-atlas-complete-guide/page.tsx` (アジャイルテストリーダーシップ CT-ATLaS 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ai-complete-guide/page.tsx` (AIテスト CT-AI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-complete-guide/page.tsx` (GenAIテスト CT-GenAI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter1-introduction/page.tsx` (CT-GenAI 第1章 生成AIソフトウェアテスト入門完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter2-prompt-engineering/page.tsx` (CT-GenAI 第2章 プロンプトエンジニアリング完全解説ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter3-risk-management/page.tsx` (CT-GenAI 第3章 生成AIのリスク管理完全解説ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter4-llm-powered-solutions/page.tsx` (CT-GenAI 第4章 LLM搭載テストインフラ完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter5-deploying-and-integrating/page.tsx` (CT-GenAI 第5章 テスト組織における生成AIの導入と統合完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-mbt-complete-guide/page.tsx` (モデルベーステスト CT-MBT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-act-complete-guide/page.tsx` (受入テスト CT-AcT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-aut-complete-guide/page.tsx` (自動車ソフトウェアテスター CT-AuT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-mat-complete-guide/page.tsx` (モバイルアプリテスト CT-MAT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-sec-complete-guide/page.tsx` (セキュリティテストガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ste-complete-guide/page.tsx` (セキュリティテストエンジニア(CT-STE)ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-game-complete-guide/page.tsx` (ゲームテスト CT-GaMe 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-gt-complete-guide/page.tsx` (ギャンブル産業テスター CT-GT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ft-complete-guide/page.tsx` (金融テスト CT-FT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-pt-complete-guide/page.tsx` (パフォーマンステスト CT-PT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ut-complete-guide/page.tsx` (ユーザビリティテスト CT-UT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-tas-complete-guide/page.tsx` (テスト自動化戦略 CT-TAS 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-itp-atp-complete-guide/page.tsx` (テストプロセス評価 CTEL-ATP 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-itp-itpi-complete-guide/page.tsx` (テストプロセス改善実装 CTEL-ITPI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-sm-complete-guide/page.tsx` (テスト管理戦略 CTEL-TM-SM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-otm-complete-guide/page.tsx` (オペレーショナルテスト管理 CTEL-TM-OTM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-mtt-complete-guide/page.tsx` (テストチーム管理 CTEL-TM-MTT 完全ガイド、`NavBar.tsx` 付き)
- `app/github-actions/page.tsx` (GitHub Actions 完全ガイド 〜初学者向けステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/github-actions-guide/page.tsx` (GitHub Actions 中級〜上級者向け完全ガイド、`NavBar.tsx` 付き)
- `app/playwright-beginner-guide/page.tsx` (Playwright 完全入門ガイド 〜初学者のためのステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/playwright-intermediate-advanced-guide/page.tsx` (Playwright 実践ガイド 〜中級者から上級者のためのステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/cucumber-beginner-guide/page.tsx` (Cucumber 入門ガイド 〜BDDではじめる自動テスト〜、`NavBar.tsx` 付き)
- `app/cypress-beginner-guide/page.tsx` (Cypress 入門ガイド 〜初学者のためのステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/selenium-beginner-guide/page.tsx` (Selenium 完全ガイド 〜初心者のためのステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/clean-code-cookbook-guide/page.tsx` (Clean Code Cookbook 実践ガイド、`NavBar.tsx` 付き)
- `app/the-way-of-the-web-tester-guide/page.tsx` (The Way of the Web Tester 実践ガイド、`NavBar.tsx` 付き)
- `app/testing-web-apis-guide/page.tsx` (Web APIテスト実践ガイド、`NavBar.tsx` 付き)
- `app/software-test-design-guide/page.tsx` (ソフトウェアテスト設計実践ガイド、`NavBar.tsx` 付き)
- `app/secure-by-design-guide/page.tsx` (セキュア・バイ・デザイン実践ガイド、`NavBar.tsx` 付き)
- `app/sonarqube-intermediate-guide/page.tsx` (SonarQube 完全解説ガイド、`NavBar.tsx` 付き)
- `app/how-google-tests-software-guide/page.tsx` (How Google Tests Software 完全ガイド、`NavBar.tsx` 付き)
- `app/leading-quality-guide/page.tsx` (Leading Quality 実践ガイド、`NavBar.tsx` 付き)
- `app/agile-testing-practical-guide/page.tsx` (Agile Testing 実践ガイド、`NavBar.tsx` 付き)
- `app/explore-it-guide/page.tsx` (Explore It! 探索的テスト実践ガイド、`NavBar.tsx` 付き)
- `app/owasp-zap-beginner-guide/page.tsx` (OWASP ZAP 完全ガイド、`NavBar.tsx` 付き)
- `app/lessons-learned-in-software-testing-guide/page.tsx` (Lessons Learned in Software Testing 実践ガイド、`NavBar.tsx` 付き)
- `app/art-of-software-testing-guide/page.tsx` (『The Art of Software Testing』から学ぶソフトウェアテスト実践ガイド、`NavBar.tsx` 付き)
- `app/test-driven-development-by-example-guide/page.tsx` (Test-Driven Development: By Example 実践ガイド、`NavBar.tsx` 付き)
- `app/unit-testing-principles-practices-patterns-guide/page.tsx` (Unit Testing Principles, Practices, and Patterns 完全ガイド、`NavBar.tsx` 付き)
- `app/component-based-testing-qa-guide/page.tsx` (コンポーネントベースソフトウェアシステムのテストと品質保証完全ガイド、`NavBar.tsx` 付き)
- `app/perfect-software-guide/page.tsx` (Perfect Software 実践ガイド、`NavBar.tsx` 付き)
- `app/software-testing-with-generative-ai-guide/page.tsx` (生成AIとソフトウェアテスト実践ガイド、`NavBar.tsx` 付き)
- `app/ai-driven-software-testing-guide/page.tsx` (AI駆動ソフトウェアテスト入門ガイド、`NavBar.tsx` 付き)
- `app/appium-essentials-guide/page.tsx` (Appium Essentials 完全ガイド、`NavBar.tsx` 付き)
- `app/testing-ai-confidence-engineering-guide/page.tsx` (Testing AI 完全ガイド、`NavBar.tsx` 付き)
- `app/automating-data-quality-monitoring-guide/page.tsx` (データ品質モニタリング自動化ガイド、`NavBar.tsx` 付き)
- `app/langgraph-qa-agent-guide/page.tsx` (LangGraphとNeo4jによるQAエージェント構築ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-study-guide/page.tsx` (CT-GenAI完全学習ガイド、既存画面と併存、`NavBar.tsx` 付き)
- `app/beautiful-testing-guide/page.tsx` (Beautiful Testing ガイド、`NavBar.tsx` 付き)
- `app/quality-is-free-guide/page.tsx` (Quality Is Free入門、紙色テーマ・全16セクション・目次15リンク・8図・6表・チェック11項目)
- `app/iec-62304-beginner-guide/page.tsx`（ダーク配色・全22セクション・目次50リンク・18図・37表。`NavBar.tsx`・`toc.ts`・`Diagram.tsx`・`diagrams.ts`・専用CSSで構成）
- `app/beyond-legacy-code-guide/page.tsx` (Beyond Legacy Code 実践ガイド、`NavBar.tsx` 付き)
- `app/iso-29119-1-2022-guide/page.tsx` (ISO/IEC/IEEE 29119-1:2022 完全解説ガイド、`NavBar.tsx` 付き)

CT-GenAI学習ガイドの横スクロールは外側`.mermaid-container`に集約し、内側`.mermaid-wrapper`を`display: block; overflow: visible`にする。広いSVGの中央寄せによる負のスクロール原点を防止する。`bunx playwright test --config playwright.mermaid-css.config.ts`でビルドなしのCSS座標検証を実行できる。

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

### グローバルナビ（ドロワー / ガイド index）

- ルートの Single Source of Truth は `lib/navigation.ts` の `NAV_ITEMS`（105 件）。
  `components/Header.tsx` のドロワーと `app/page.tsx` のガイドライブラリ index が共用する
- 新ガイド追加時は `NAV_ITEMS` に `{ href, label, description, category }` を 1 件追加するだけでよい。
  `description` は必須（80 文字以内、index のカード本文かつ検索対象）
- `e2e/pages.ts` にも同じ path を追加し `EXPECTED_PAGE_COUNT` を更新する。
  片方だけの更新は `tests/lib/navigation-e2e-sync.test.ts` が検知して落ちる
- ドロワーはガイド数に対してスケールするよう、検索ボックス + `<details>` アコーディオン方式。
  既定では現在ページのカテゴリのみ展開し、検索中は残ったカテゴリを全展開する
- index（`/`）は ISTQB の認定レベルの階梯を情報構造として使う。ヒーローは階段で、段の縦位置が
  資格レベルの高さ、バーの伸びがそのレベルのガイド数。バーの軌道幅は全段で固定（`--bar-col`）で、
  `1fr` にすると量の比較が壊れる。CI/CD・ツール・書籍は階梯の段ではないため `data-track="practice"`
  として「実務の棚」に分ける。いずれも装飾ではないので変更時に意味を壊さないこと
- レベル色（`--level`）は寒色 → 暖色の 1 本のランプ。定義は `app/globals.css` の
  `[data-category='...']` にあり、index とドロワーがこの 1 箇所を共有する
- 新カテゴリを足す場合は `NavCategory` / `CATEGORY_ORDER` / `CATEGORY_TITLES` / `CATEGORY_CODES` の
  4 箇所と、`app/globals.css` の `[data-category='...']` のレベル色を同期する
- `summary` の `onClick` は `preventDefault()` でネイティブトグルを止め、開閉を React state に一本化している。
  Enter / Space も click を発火するためキーボード操作は維持される

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

### テーブル文字色と `globals.css` 干渉リセット（CRITICAL GOTCHA）

- `globals.css` に定義された要素セレクタ（特に `td { color: var(--color-text-secondary); }`（`#8ea3c3`、薄い青灰色）、`th { white-space: nowrap; }`、`td strong { color: var(--color-text-primary); }`、`tr:hover td` 等）が、ページ固有のテーブルに干渉して文字色を薄くさせたりレイアウトを崩す重大な不具合が頻発します。
- ページ固有 CSS では必ず `.my-page-layout tbody td, .my-page-layout td` に対して `color: var(--ink) !important;` および `font-size: 1rem !important;` を指定し、`thead th`、`td strong`、`td code`、`tbody tr:hover td` などの完全リセットを適用してください（詳細は `.claude/skills/html-to-nextjs-migration/SKILL.md` の Phase 3b 参照）。

### 構成要素インベントリ作成と網羅的テストスイート（抜け漏れ防止の絶対ルール）

- 移行着手前に元HTMLの全構成要素（H1〜H4見出し、全TOCリンク、全Mermaid図解、全テーブル、全コードブロック、全コールアウト・カード、全参考文献）を棚卸しする「構成要素インベントリ」を作成してください。
- Redフェーズのテストスイート（`tests/<page-slug>/page.test.tsx`）では、上記インベントリの全項目を1対1でアサーションとして網羅し、デザインや図解・表の抜け漏れを機械的にゼロにしてください。

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
| `Istqb-ctfl.html` | `/istqb-ctfl-complete-guide` | ✅ NavBar あり |
| `Ctfl-v4-chapter1-fundamentals.html` | `/istqb-ctfl-v4-chapter1-fundamentals` | ✅ NavBar あり |
| `Ctfl-v4-chapter2-sdlc-and-testing.html` | `/istqb-ctfl-v4-chapter2-sdlc-and-testing` | ✅ NavBar あり |
| `Ctfl-v4-chapter3-static-testing.html` | `/istqb-ctfl-v4-chapter3-static-testing` | ✅ NavBar あり |
| `Istqb-ctfl-v4-chapter4.html` | `/istqb-ctfl-v4-chapter4-test-analysis-and-design` | ✅ NavBar あり |
| `Istqb-ctfl-chapter5.html` | `/istqb-ctfl-v4-chapter5-test-management` | ✅ NavBar あり |
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
| `modern-software-testing-complete-guide-2025.html` | `/modern-software-testing-complete-guide-2025` | ✅ |
| `software-testing-methodologies-guide.html` | `/software-testing-methodologies-guide` | ✅ |
| `unit-testing-guide.html` | `/unit-testing-guide` | ✅ |
| `istqb-ct-gt-complete-guide.html` | `/istqb-ct-gt-complete-guide` | ✅ NavBar + aria-current あり |
| `Finance-testing-ct-ft-guide.html` | `/istqb-ct-ft-complete-guide` | ✅ NavBar + aria-current あり |
| `Ctfl-at-chapter1-agile-software-development.html` | `/istqb-ctfl-at-chapter1-agile-software-development` | ✅ NavBar あり |
| `Ctfl-at-chapter2.html` | `/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles` | ✅ NavBar あり |
| `Ctfl-at-chapter3-agile-testing-techniques-tools.html` | `/istqb-ctfl-at-chapter3-agile-testing-techniques-tools` | ✅ NavBar あり |
| `Github-actions.html` | `/github-actions` | ✅ NavBar + aria-current あり (archive/html-archive/cicd/) |
| `Github-actions-guide.html` | `/github-actions-guide` | ✅ NavBar + aria-current あり (archive/html-archive/cicd/) |
| `Playwright-beginner-guide.html` | `/playwright-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/playwright/) |
| `Cucumber-beginner-guide.html` | `/cucumber-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Cypress-beginner-guide.html` | `/cypress-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Selenium-beginner-guide.html` | `/selenium-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Clean-code-cookbook-guide.html` | `/clean-code-cookbook-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `The-way-of-the-web-tester-guide.html` | `/the-way-of-the-web-tester-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Testing-web-apis-guide.html` | `/testing-web-apis-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Software-test-design-guide.html` | `/software-test-design-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Secure-by-design-guide.html` | `/secure-by-design-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Playwright-intermediate-advanced-guide.html` | `/playwright-intermediate-advanced-guide` | ✅ NavBar + aria-current あり (archive/html-archive/playwright/) |
| `Sonarqube-intermediate.html` | `/sonarqube-intermediate-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `How-google-tests-software-guide.html` | `/how-google-tests-software-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Leading-quality-guide.html` | `/leading-quality-guide` | ✅ NavBar あり (archive/html-archive/books/) |
| `Agile-testing-practical-guide.html` | `/agile-testing-practical-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Istqb-ctfl-v4-chapter6.html` | `/istqb-ctfl-v4-chapter6-test-tools` | ✅ NavBar + aria-current あり (archive/html-archive/ctfl/) |
| `Explore-it-guide.html` | `/explore-it-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Owasp-zap-beginner-guide.html` | `/owasp-zap-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Lessons-learned-in-software-testing-guide.html` | `/lessons-learned-in-software-testing-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Art-of-software-testing-guide.html` | `/art-of-software-testing-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Test-driven-development-by-example-guide.html` | `/test-driven-development-by-example-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Unit-testing-principles-practices-patterns-guide.html` | `/unit-testing-principles-practices-patterns-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Component-based-testing-qa-guide.html` | `/component-based-testing-qa-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Perfect-software-guide.html` | `/perfect-software-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Software-testing-with-generative-ai-guide.html` | `/software-testing-with-generative-ai-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Ai-driven-software-testing-guide.html` | `/ai-driven-software-testing-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Appium-essentials-guide.html` | `/appium-essentials-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Testing-ai-confidence-engineering-guide.html` | `/testing-ai-confidence-engineering-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Beyond-legacy-code-guide.html` | `/beyond-legacy-code-guide` | ✅ 階層目次18リンク・Mermaid図6件・紙色テーマ。HTML/MDはarchive配下で追跡管理 |
| `Automating-data-quality-monitoring-guide.html` | `/automating-data-quality-monitoring-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Langgraph-qa-agent-guide.html` | `/langgraph-qa-agent-guide` | ✅ NavBar + aria-current あり (tests/fixtures/source-html/、HTML・MD両方) |
| `Ct-genai-study-guide.html` | `/istqb-ct-genai-study-guide` | ✅ 既存CT-GenAI画面と併存。目次25リンク・Mermaid図13件。HTML/MDはarchive配下で追跡管理 |
| `Beautiful-testing-guide.html` | `/beautiful-testing-guide` | ✅ モバイル目次・チェックリスト・Mermaid図8件あり (tests/fixtures/source-html/、HTML・MD両方) |
| `Ctal-ta-v4.0-ch1.html` | `/istqb-ctal-ta-chapter1-test-process` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-ta-v4.0-ch2.html` | `/istqb-ctal-ta-chapter2-risk-based-testing` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-ta-v4-chapter3-testanalysisanddesign-guide.html` | `/istqb-ctal-ta-chapter3-test-analysis-and-design` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-ta-v4-ch4-quality-characteristics-guide.html` | `/istqb-ctal-ta-chapter4-quality-characteristics` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-tm-v3.0-ch1-managing-the-test-activities.html` | `/istqb-ctal-tm-chapter1-managing-the-test-activities` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-tm-v3.0-ch2-managing-the-product.html` | `/istqb-ctal-tm-chapter2-managing-the-product` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-tm-v3-ch3-managing-the-team-guide.html` | `/istqb-ctal-tm-chapter3-managing-the-team` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-ta-v4-ch5-software-defect-prevention.html` | `/istqb-ctal-ta-chapter5-defect-prevention` | ✅ スティッキーTOCナビ + aria-current あり (archive/html-archive/ctal/) |
| `Ct-genai-chapter1.html` | `/istqb-ct-genai-chapter1-introduction` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Ct-genai-chapter2.html` | `/istqb-ct-genai-chapter2-prompt-engineering` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Ct-genai-chapter3.html` | `/istqb-ct-genai-chapter3-risk-management` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Ctgenai-ch4-llm-powered-solutions-guide.html` | `/istqb-ct-genai-chapter4-llm-powered-solutions` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Ct-genai-chapter5.html` | `/istqb-ct-genai-chapter5-deploying-and-integrating` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Iso-29119-1-2022-guide.html` | `/iso-29119-1-2022-guide` | ✅ スティッキーNavBar + Mermaid図19件 + 全39表 + 目次69リンク (archive/html-archive/iso/) |
| `Ctal-tae-ch3-test-automation-architecture.html` | `/istqb-ctal-tae-chapter3-test-automation-architecture` | ✅ スティッキーNavBar + Mermaid図9件 + 全8表 + 目次11リンク (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch1-introduction-and-objectives.html` | `/istqb-ctal-tae-chapter1-introduction-and-objectives` | ✅ スティッキーNavBar + Mermaid図7件 + 全5表 + 目次8リンク + チェックリスト (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch2.html` | `/istqb-ctal-tae-chapter2-preparing-for-test-automation` | ✅ スティッキーNavBar + Mermaid図6件 + 全7表 + 目次 + チェックリスト (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch4-implementing-test-automation.html` | `/istqb-ctal-tae-chapter4-implementing-test-automation` | ✅ スティッキーNavBar + Mermaid図6件 + 全5表 + 目次26リンク + インタラクティブチェックリスト (archive/html-archive/ctal/) |
| `Ctal-tae-ch5-implementation-deployment-strategies.html` | `/istqb-ctal-tae-chapter5-implementation-deployment-strategies` | ✅ 固定サイドバー + 7目次リンク + Mermaid図5件 + 全6表 + チェック項目6件 (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch6-test-automation-reporting-and-metrics.html` | `/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics` | ✅ 固定サイドバー・モバイル目次43リンク + Mermaid図11件 + 全31表 + コード2件 + 学習進捗13項目 (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch7-verifying-the-test-automation-solution.html` | `/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution` | ✅ 固定サイドバー・モバイル目次40リンク + Mermaid図11件 + 全30表 + 構文色付きコード7件 + 学習進捗6項目 (archive/html-archive/ctal/) |
| `Ctal-tae-ch8-continuous-improvement.html` | `/istqb-ctal-tae-chapter8-continuous-improvement` | ✅ 固定サイドバー・モバイル目次70リンク + Mermaid図16件 + 全36表 + 構文色付きコード6件 + 確認問題6件 (archive/html-archive/ctal/) |
| `Quality-is-free-guide.html` | `/quality-is-free-guide` | ✅ 紙色テーマ・目次15リンク・全16セクション・6表・Mermaid8図・チェック11項目・参考文献16カード (archive/html-archive/books/) |
| `Iec-62304-beginner-guide.html` | `/iec-62304-beginner-guide` | ✅ ダーク配色・22セクション・目次50リンク・37表・18図・13注記・30外部リンク (tests/fixtures/source-html/、HTML・MD両方) |

### ISTQB CTAL-TAE 第4章「Implementing Test Automation（テスト自動化の実装）」の追加移行（2026-10-16）

- `/istqb-ctal-tae-chapter4-implementing-test-automation`をISTQB高度レベル（`istqb-advanced`）へ追加。パイロットとデプロイのガイドライン、一般的・技術的デプロイリスク、保守性とクリーンコード原則、Mermaid図6件、全5表、チェックリストを完全保持。
- `tests/istqb-ctal-tae-chapter4-implementing-test-automation/page.test.tsx`で16テスト（197 expect() calls）を検証。ナビ・E2E対象は97ルート、Advancedカテゴリは18件。
- 原本は`archive/html-archive/ctal/Ctal-tae-v2.0-ch4-implementing-test-automation.html`と`archive/md-archive/ctal/Ctal-tae-v2.0-ch4-implementing-test-automation.md`へ移動。
- 検証は`bun test`および`bun run lint`で実施。ビルド・目視確認は実施しない。

### ISTQB CTAL-TAE 第2章「テスト自動化の準備」の追加移行（2026-10-12）

- `/istqb-ctal-tae-chapter2-preparing-for-test-automation`をISTQB高度レベル（`istqb-advanced`）へ追加。テスト容易性の3側面（Observability・Controllability・Architecture Transparency）、各種環境での自動テスト活用、SUT分析とツール評価プロセス、Mermaid図6件、全7表、チェックリストを完全保持。
- `tests/istqb-ctal-tae-chapter2-preparing-for-test-automation/page.test.tsx`で26テスト（383 expect() calls）を検証。ナビ・E2E対象は96ルート、Advancedカテゴリは17件。
- 原本は`archive/html-archive/ctal/Ctal-tae-v2.0-ch2.html`と`archive/md-archive/ctal/Ctal-tae-v2.0-ch2.md`へ移動。
- 検証は`bun test`（2793 pass / 0 fail）および`bun run lint`で実施。ビルド・目視確認は実施しない。

### ISTQB CTAL-TAE 第1章「テスト自動化の導入と目的」の追加移行（2026-10-12）

- `/istqb-ctal-tae-chapter1-introduction-and-objectives`をISTQB高度レベル（`istqb-advanced`）へ追加。自動化の目的、メリット・デメリット・限界、SDLCモデル適用、ツール選定プロセス、Mermaid図7件、全5表、チェックリストを完全保持。
- `tests/istqb-ctal-tae-chapter1-introduction-and-objectives/page.test.tsx`で16テスト（206 expect() calls）を検証。ナビ・E2E対象は95ルート、Advancedカテゴリは16件。
- 原本は`archive/html-archive/ctal/Ctal-tae-v2.0-ch1-introduction-and-objectives.html`と`archive/md-archive/ctal/Ctal-tae-v2.0-ch1-introduction-and-objectives.md`へ移動。
- 検証は`bun test`（2781 pass / 0 fail）で実施。ビルド・目視確認は実施しない。

### ISTQB CTAL-TAE 第3章 テスト自動化アーキテクチャの追加移行（2026-10-12）

- `/istqb-ctal-tae-chapter3-test-automation-architecture`をISTQB高度レベル（`istqb-advanced`）へ追加。gTAA概念、TAF3層レイヤー構造、7つの自動化アプローチ、OOP/SOLID設計原則、デザインパターン、Mermaid図9件を完全保持。
- `tests/istqb-ctal-tae-chapter3-test-automation-architecture/page.test.tsx`で11テスト（206 expect() calls）を検証。ナビ・E2E対象は94ルート、Advancedカテゴリは15件。
- 原本は`archive/html-archive/ctal/Ctal-tae-ch3-test-automation-architecture.html`と`archive/md-archive/ctal/Ctal-tae-ch3-test-automation-architecture.md`へ移動。
- 検証は`bun test`（2756 pass / 0 fail）および`bun run lint`で実施。ビルド・目視確認は実施しない。

### ISO/IEC/IEEE 29119-1:2022の追加移行（2026-10-10）

- `/iso-29119-1-2022-guide`を新設カテゴリ「ISO 国際規格」（`iso`）へ追加。全70見出し、目次69リンク、全39表、Mermaid図19件を保持。
- `tests/iso-29119-1-2022-guide/page.test.tsx`で129件を検証。ナビ・E2E対象は93ルート、ISOカテゴリは1件。
- 原本は`archive/html-archive/iso/Iso-29119-1-2022-guide.html`と`archive/md-archive/iso/Iso-29119-1-2022-guide.md`へ移動し、SHA-256一致を確認。
- 検証は`bun test`で実施。ビルド・目視確認は実施しない。

### Beyond Legacy Codeの追加移行（2026-10-07）

- `/beyond-legacy-code-guide`を名著・実践ガイドへ追加。紙色・藍色の元テーマ、全87CSSルール、階層目次18リンク、Mermaid図6件を保持。
- `tests/beyond-legacy-code-guide/page.test.tsx`で501件を検証。ナビ・E2E対象は92ルート、書籍カテゴリは22件。
- 原本は`archive/html-archive/books/Beyond-legacy-code-guide.html`と`archive/md-archive/books/Beyond-legacy-code-guide.md`へ移動し、SHA-256一致を確認。
- 検証は`bun test`・`bun run lint`・`bunx tsc --noEmit`で実施。ビルド・目視確認は実施しない。

### 未移行（プロジェクトルートに残存）

プロジェクトルート直下には App Router に未登録の静的ドキュメント（プロジェクト仕様書を除く）が残っている。
これらは現時点で**ルート登録対象外**として扱っており、ルート化の可否は未決定。
この一覧の正は `docs/MIGRATION_PROGRESS.md`。CLAUDE.md / GEMINI.md には同一の表を複製しているため、
ファイルを追加・削除した場合は 3 ファイルすべてを同時に更新すること。

| ファイル | 予定ルート | 状態 | 備考 |
|---|---|---|---|
| 書籍ガイド系（HTML + Markdown の 4 ペア = 8 ファイル）: `Software-testing-craftsmans-approach-guide.*` / `Specification-by-example-guide.*` / `Testing-computer-software-guide.*` / `Working-effectively-with-legacy-code-guide.*` | 未定 | ⏸ ルート登録対象外 | 静的ドキュメントとして残置。各ガイドは `.html` と `.md` が対になっている |
| ツール系（1 ファイル）: `Sonarqube.html` | 未定 | ⏸ ルート登録対象外 | `/sonarqube-intermediate-guide` とは別系統の旧ドキュメント |
| 新規ガイド系（1 ファイル）: `Ctal-ta-v4-chapter3-testanalysisanddesign-guide.md` | 未定 | ⏸ ルート登録対象外 | 静的ドキュメントとして残置。ルート化の可否は未定 |
| 追加ガイド系: `Iso-*.html` / `Iso-*.md` | 未定 | ⏸ 未移行の追加ソース | CTAL-TAE第1〜8章は移行・アーカイブ済み。ISO 規格各部などの残存ソース。既存登録ルートと重なる内容は差分を確認して移行方針を決定 |

## 既知の留保事項

- `istqb-ctfl-at-complete-guide` と `bdd-testing-guide` / `ai-test-guide` は html-archive/ に元 HTML が存在しない（最初から Next.js で作成）
- `istqb-ct-aut-complete-guide.html` はリポジトリ内に存在しません（not found）。

## 次回セッションでの再開プロンプト

```text
コンテキスト:
- 最新 HEAD は `docs/MIGRATION_PROGRESS.md` の「現在地」テーブルを参照（ここに固定値を書かない）。
- **移行対象ガイドの移行完了**: 「移行状況テーブル」に掲載した HTML / Markdown の Next.js App Router への移行は完了しています。
- 合計 105 ルート（ガイドライブラリ index + 104 ガイド）が `lib/navigation.ts` / `e2e/pages.ts` で管理されています。
- ただしプロジェクトルートには App Router に未登録の静的ドキュメントが残っています（書籍ガイド、`Sonarqube.html`、ISO 各規格など）。これらは現時点でルート登録対象外の静的ドキュメントとして扱っており、ルート化するかどうかは未決定です。
- 全体テストすべて成功（直近 5637件（133ファイル））。ページ単体、ナビゲーション、Mermaid契約も全て成功。
- 新規追加「ISO 11179-1 メタデータレジストリガイド」（`/iso-11179-1-2023-guide`）を登録済み。次の作業として、同ページの目視確認をユーザーに依頼する。

【ビルド検証の制約】
サンドボックス環境では `bun run build` を直接実行しない。ビルド確認が必要な場合はユーザーに実行を依頼すること。
ローカル検証は `bun run lint` と `bun test` で行う。

【指示】
登録済みガイドの Next.js 移行が完了しました。今後の品質向上、E2Eテストの拡充、または新しい機能追加について指示を仰ぎます。
```

## LangGraphコード表示

`app/langgraph-qa-agent-guide/SyntaxCode.tsx`はPython・Bashのコードをサーバー側でハイライトする。追加ライブラリ・CDNを使わず、Reactの文字列エスケープによりコードの安全性と改行を維持する。全15ブロックの本文一致と色分けをテストしている。

## 2026-10-17: CTAL-TAE 第5章移行の検証

- ナビ・E2E登録は98ルート、Advancedカテゴリーは19件。新規ページ196件・原本保持と登録4件を検証。全体テスト3063件（119ファイル）とlintが成功。
- 原本HTML・MDは各アーカイブの`ctal/`へ移動しSHA-256一致。ビルド・ブラウザE2E・目視確認は未実施。型検査は既存テストのエラーが残存。

## 2026-10-17: CTAL-TAE 第6章移行の検証

- ナビ・E2E登録は99ルート、Advancedカテゴリーは20件。第6章のページ409件・登録と原本保持4件を検証。
- 49見出し・43目次リンク・31表・11図・コード例2件・コールアウト13件・解答開閉5件・チェック項目13件・参考文献12リンクを固定インベントリと照合。CSS全160ルールと追加上書きを検証。
- 元HTML・MDは各アーカイブの`ctal/`へ移動しSHA-256一致。全体テスト3480件（121ファイル）とlintが成功。ビルド・ブラウザE2E・目視確認は未実施。型検査の既存エラーは移行対象を除いた場合と一致し、新規ファイルの診断なし。

## 2026-10-17: CTAL-TAE 第7章移行の検証

- ナビ・E2E登録は100ルート、Advancedカテゴリーは21件。第7章のページ406件・登録と原本保持4件を検証。全体テスト3894件（123ファイル）とlintが成功。
- 58見出し・40目次リンク・30表・11図・コード例7件・コールアウト18件・解答6件・チェック項目6件・参考URL13件を固定インベントリと照合。CSS全99ルールとハイライト配色14ルールを検証。
- 構文色は原本と同じhighlight.js 11.10.0で事前生成し、原本全文・言語・構文トークンを照合。追加の実行時依存・CDNスクリプトはなく、配色のライセンスを保存。
- 原本HTML・MDは各アーカイブの`ctal/`へ移動しSHA-256一致。ビルド・ブラウザE2E・目視確認は未実施。型検査のエラー位置・メッセージは既存基準と一致し、新規ファイルの診断なし。

## 2026-10-17: CTAL-TAE第7章 Mermaid黒塗りの修正

- 原因: ページのライト設定は共通Mermaidの`themeVariables`とマージされるため、`primaryColor`だけでは共通の`mainBkg: #0f2040`が残る。文字色`#1c2536`とのコントラストは約1.05となり判読困難だった。
- 対応: 第7章のページ設定に`mainBkg: #eaf0ff`を追加。共通コンポーネントと図の内容は変更しない。
- 回帰検証: `e2e/ctal-tae-ch7-mermaid-colors.e2e.ts`で共通の初期設定・実Mermaid・ページCSSを組み合わせ、390px／1440pxの全11図を検査。背景色と実際の文字を描くSVG／HTML要素のコントラスト比4.5以上を確認。シーケンス図は親`text`と子`tspan`の描画色を区別する。
- 結果: `playwright.mermaid-css.config.ts`によるビルド・サーバー不要のブラウザ検証34件（第7章22件＋既存レイアウト12件）、関連ユニット555件、lintが成功。ページ全体の目視確認と本番ビルドは未実施。

## 2026-10-17: CTAL-TAE第7章 チェックリストとコード表示の改善

- 原因: 他ルートの未スコープ`.code-block code`が残ると、コードに`white-space: pre-wrap`と異なる文字サイズ・行高が適用される。第7章内で明示的に上書きし、字下げ・改行を保持して外側の`pre`で横スクロールする。
- チェックリスト: 全6項目の文章・状態管理を保持し、行全体を押せるカード、2段の進捗表示、完了時の読みやすい緑色、キーボードフォーカスを追加。
- 検証: `e2e/ctal-tae-ch7-learning-ui.e2e.ts`で390px／1440px、他ルートCSSの前後両順序、全7コード、チェックリストの操作領域・完了色・フォーカスを検査。Playwrightテストケース6件で対象項目40件（コード例28件＋チェックリスト12件）を検証、全体ユニット3894件（123ファイル）、lint成功。ビルド・サーバー起動・ページ全体の目視確認は未実施。

## 2026-10-18: CTAL-TAE第6章 Mermaid色検証の追加

- 対応: 第6章のページ設定に`mainBkg: #dbeafe`を追加。共通コンポーネントと図の内容は変更しない。
- 回帰検証: `e2e/ctal-tae-ch6-mermaid-colors.e2e.ts`で共通の初期設定・実Mermaid・CSSを組み合わせ、ページCSSあり／初期設定のみの2バリアント×390px／1440px×全11図の44ケースを検査。classDefのないノードは`#dbeafe`、classDefのあるノードは原本の塗り色を保ち、文字のコントラスト比4.5以上を確認。
- 結果: `playwright.mermaid-css.config.ts`によるビルド・サーバー不要のブラウザ検証で、Playwrightテストケース84件（第6章44件＋第7章22件＋第7章学習UI 6件＋既存レイアウト12件）が成功。第7章学習UIはテストケース6件で対象項目40件（コード例28件＋チェックリスト12件）を検証。ページ全体の目視確認と本番ビルドは未実施。

## 2026-10-20: CTAL-TAE第8章 継続的改善の移行

- 移行先: `/istqb-ctal-tae-chapter8-continuous-improvement`。Advancedカテゴリーの第7章直後に登録し、ナビ・E2E一覧を101ルートへ同期。
- 原本71見出し・目次70リンク・36表の全セル・16図・Python/YAMLコード6例・注記8件・解答6件・確認問題6件・参考URL13件・全本文・フッターを固定インベントリと出現順で照合。
- 原本CSS全77ルールとAtom One Light配色14ルールを照合。ライト背景・ヒーロー装飾・900px条件・余白を保持し、共通CSSの疑似要素・表・リスト・コード・固定要素の干渉を補正。
- コードは原本と同じhighlight.js 11.9.0で事前生成。全文・空白・改行・言語・全構文トークンを検証し、追加の実行時依存やCDNスクリプトなし。
- 全16図を実Mermaidパーサーで検証。ページ専用ライト設定でフロー・シーケンス・XYチャートを維持し、黒背景・文字切れ・縮小を保護。目次70リンクの開閉・追従・Escape・スクリム・Observer解除を検証。外部出典13リンクのtarget・relと、共有Mermaidの横スクロール・フッター干渉の追加回帰検証も実施。
- Red先行後、デザイン、構文色、本文8カテゴリー、Mermaid、目次、ナビ、アーカイブを分割コミット。全コミット前にPII検査を実施。
- HTMLは`archive/html-archive/ctal/Ctal-tae-ch8-continuous-improvement.html`、MDは`archive/md-archive/ctal/Ctal-tae-ch8-continuous-improvement.md`へ移動。双方のSHA-256一致を検証。既存のarchive除外設定を維持。
- 検証: ページ445件＋登録・アーカイブ6件の計451件成功。全体4386件（125ファイル）成功、lint成功。ユーザー指定により`npm exec -- bun test`と`npm run lint`で実行。第8章のコード・テストの型検査も成功。全体型検査は既存ファイルのエラーで失敗（第8章の診断なし）。ビルド・ブラウザE2Eは未実施、目視確認はユーザーが担当。

## 2026-10-20: CTAL-TAE第7・8章のコード改行・インデント修正

- 原因: 各行末のJSX改行エンティティ`&#10;`がNext.js/SWCで除去され、インラインの行要素が連結。従来のBun・TypeScriptによる変換では再現せず、DOM照合とCSS検証だけでは検知できなかった。
- 修正: 両章の`CodeExample.tsx`でLFを実行時に生成する`CodeLine`へ変更。13コードの全文・改行・空行・インデント・構文トークンを保持。第8章はハイライトCSSの詳細度による余白二重化と内側スクロールも解消し、`pre`へ横スクロールを集約。
- 回帰検証: Next.js/SWCの開発・本番変換26ケースを追加し、修正前の全26失敗を確認。ブラウザー側もTypeScript変換からSWCへ変更。
- 実ブラウザー: 全13コード×390px/1440px×CSS読込3条件の78ケース、第7章学習UI6ケース、起動済みNext.jsの実ページ4ケースの計88件が成功。実ページでも全コードの改行・字下げ・行位置を原本と照合。
- 検証: 両章関連902件、全体4419件（125ファイル）、lintが成功。ユーザー指定によりnpm経由で実行。本番ビルドは未実施。

## 2026-10-20: Quality Is Free入門ガイドの移行

- 移行先: `/quality-is-free-guide`。名著・実践ガイドの末尾へ登録し、ナビ・E2E一覧を102ルート、書籍カテゴリーを23件へ同期。
- 原本の16セクション・22見出し・目次15リンク・6表全セル・図8件と全キャプション・チェック11項目・参考文献16カード・外部リンク6件・アイコン31個・引用2件・タグ6件・全本文とフッターを固定インベントリと出現順で照合。コードブロックはなし。
- 原本全79 CSSルールと960px条件を保存。紙色・セリフ体・紫のヒーローを保持し、共有CSS・残留CSSによる文字色、リスト余白、表の罫線・フォント・大文字化・最小幅、入力装飾を補正。既存のフォント・アイコン読み込みを再利用。
- 目次の追従・開閉・リンク選択・Escape・スクリム・Observer解除、11チェックの選択と解除・件数・完了装飾を検証。全8図は原本のノード・接続・classDefと紙色設定を保持して共有Mermaidへ接続。
- 原本との実スタイル・寸法・ホバー比較8ケース（390/960/961/1440px×CSS読込2順序）、実SVGの配色・スクロール端検証32ケース、起動済みNext.jsの操作・図描画2ケースが成功。実ページは`QIF_ORIGIN=http://localhost:3000`で検証し、サーバー起動・本番ビルドは行わない。
- Red先行、デザイン、各16セクション、図、目次、登録、アーカイブ、実ブラウザーで発見した補正、仕様書を分割コミット。コミットごとにPII検査。
- 原本HTMLは`archive/html-archive/books/Quality-is-free-guide.html`、MDは`archive/md-archive/books/Quality-is-free-guide.md`へ同名で移動し、双方のSHA-256一致を確認。archiveの既存Git除外設定を維持。
- 検証: ページ289件＋登録・アーカイブ6件の計295件、全体4718件（127ファイル）、ブラウザー42件、対象型検査、lint、変更Markdownのlintが成功。ユーザー指定によりnpm経由で実行。目視確認はユーザー担当、本番ビルドは未実施。

## 2026-10-21: IEC 62304初学者向けガイドの移行

- 移行先は`/iec-62304-beginner-guide`。国際規格カテゴリーへ追加し、ナビ・E2E一覧を103ルートへ同期。
- 全22セクション・59見出し・階層目次50リンク・37表の全セル・図18件・コールアウト13件・外部リンク30件・全本文とフッターを固定インベントリと照合。コードブロックなし。QAチェック表の13項目は原本の静的な記号を保持。
- 原本全65 CSSルールと960px条件を保存。ダーク配色・ヒーロー装飾・固定目次を維持し、共有/他ルートCSSによる書体・文字塗り・本文色・表・注記余白・疑似要素の干渉を補正。原本のNoto Sans JP 800ウェイトを追加読み込み。
- HTML内の実SVGからノード・判断形状・接続・ラベル・グループを抽出し、共通Mermaidで再描画。Markdownと形式が異なる版履歴・改訂動向・導入ロードマップはHTMLの形式を採用。縦配置と分離図の方向、配色、横スクロールの両端を検証。
- 目次のモバイル開閉・リンク選択・Escape・フォーカス復帰・全50アンカーのObserver追従・親グループ展開・目次内スクロール・Observer解除を検証。全本文はNext.js/SWCの開発/本番変換後も照合。
- Red先行、デザイン、図、目次、基礎解説、Step 1〜3、Step 4、Step 5〜7、実務、改訂/FAQ/参考資料、登録、アーカイブ、補正、リファクタリング、仕様書を分割コミット。各コミット前にPII検査。
- HTMLとMDはGit追跡下の`tests/fixtures/source-html/Iec-62304-beginner-guide.html`・`.md`へ同名で移動し、クリーンなチェックアウトでもSHA-256一致を常に検証。
- 検証はnpm経由。対象351件、全体5075件（129ファイル）、ビルド/サーバー不要のブラウザー80件（4幅×18図＋CSS読込2順序×4幅）、lint成功。対象型検査成功。全体型検査には既存エラーが残存。ビルド未実施、目視確認はユーザー担当。

## 2026-10-21: ISO/IEC 9075-1 SQL/Frameworkガイドの移行

- 移行先は`/iso-9075-1-guide`。国際規格カテゴリーへ追加し、ナビ・E2E一覧を104ルートへ同期。
- 全35見出し・階層目次34リンク・19表の全セル・9図・SQLコード3例・コールアウト11件・外部リンク20件・ヒーロー・全本文・フッターを固定インベントリで出現順に照合。
- 原本CSS全63ルールと960px条件を保存。ダーク配色、ヒーロー装飾、固定サイドバー、SQL構文色を保持し、共有CSS・残留CSSの余白・文字・表・インラインコード・コード枠への干渉を補正。
- 図はHTML内の実SVGから全ノード・接続・ラベルを抽出。HTMLとMarkdownで異なる図の方向はHTMLを採用し、共有Mermaidで描画。シーケンス図の参加者・メッセージと全図の原本配色を実ブラウザーで照合。
- 目次の開閉・リンク選択・Escape・フォーカス復帰・全34アンカーのObserver追従と解除を検証。Next.js/SWCの開発・本番変換で全文・構造・SQLの改行と字下げを照合。
- Red先行、CSS、図、SQL、目次、ヒーロー、要約、Step 1〜8、用語集、参考資料、注意点、ページ構成、登録、アーカイブ、補正、仕様書を分割コミット。各コミット直前にPII検査。
- 原本HTMLは`archive/html-archive/iso/Iso-9075-1-guide.html`、MDは`archive/md-archive/iso/Iso-9075-1-guide.md`へ同名で移動し、Git追跡とSHA-256一致を検証。作業中に検出した外部の整形差分も`archive/html-archive/iso/Iso-9075-1-guide.formatted.html`へ別途保全。
- 検証はnpm経由。対象218件、全体5298件（131ファイル）、ビルド・サーバー不要のブラウザー44件（4幅×9図＋CSS読込2順序×4幅）、lint、対象型検査が成功。全体型検査には既存テストの型エラーが残存。本番ビルド未実施、目視確認はユーザー担当。

## 2026-10-22: ISO/IEC 11179-1:2023メタデータレジストリガイドの移行

- 移行先は`/iso-11179-1-2023-guide`。国際規格カテゴリーへ追加し、ナビ・E2E一覧を105ルートへ同期。
- 全58見出し・階層目次57リンク・32表の全セル・14図・YAMLコード1例・コールアウト15件・外部リンク21件・学習チェック6項目・ヒーロー・全本文・フッターを固定インベントリで出現順に照合。
- 原本CSS全80ルールと960px条件を保存。ダーク配色、ヒーロー装飾、固定サイドバー、表の交互背景、YAMLの全構文トークンと改行・空行・字下げを保持し、共有CSSと残留CSSの干渉を補正。
- 図のラベル・ノード形状・接続・矢印・太線・点線・グループ名をHTML内の実SVGから抽出。Markdownと異なるグループ名や接続はHTMLを採用。クラス図・シーケンス図を含む全14図を共有Mermaidで描画し、実SVGの意味・配色と横スクロール端を検証。
- 目次の開閉・リンク選択・Escape・フォーカス復帰・全57アンカーのObserver追従と解除、チェック6項目の全選択・全解除・件数・進捗を検証。Next.js/SWCの開発・本番変換でも全文・構造とYAMLの改行・字下げを照合。
- Red先行、CSS、図、目次、YAML、チェック、ヒーロー、導入、STEP 1〜10、付録A〜C、ページ構成、登録、アーカイブ、補正、仕様書を分割コミット。本文は1カテゴリーずつ実装→原本照合→コミットを実行。各コミット直前にPII検査。
- 原本HTMLは`archive/html-archive/iso/Iso-11179-1-2023-guide.html`、MDは`archive/md-archive/iso/Iso-11179-1-2023-guide.md`へ同名で移動し、Git追跡とSHA-256一致を検証。
- 検証はnpm経由。対象325件、全体5627件（133ファイル）、ビルド・サーバー不要のブラウザー64件（4幅×14図＋CSS読込2順序×4幅）、lint、対象型検査が成功。全体型検査には既存テストの型エラーが残存。本番ビルド未実施、目視確認はユーザー担当。
