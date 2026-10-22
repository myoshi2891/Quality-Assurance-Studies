# CLAUDE.md

Updated 2026-10-22

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

「現代ソフトウェアテスト完全ガイド 2025」— ISTQB 準拠の QA 学習用静的サイト。

**スタック**: Next.js (App Router) + Tailwind CSS v4 + TypeScript（strict）

## コマンド

```sh
bun install          # 依存関係インストール
bun run dev          # 開発サーバー起動（HMR あり）
bun run build        # 本番ビルド（.next/ へ出力）
bun start            # ビルド成果物をプロダクションモードで起動
bun run lint         # ESLint 実行
bun test             # ユニットテスト (bun test, 5637 tests)
```

### E2E テスト (Playwright)

```sh
bun run e2e:install  # 初回のみ: chromium バイナリ取得 (~150 MB)
bun run e2e          # 全 105 ルートのスモーク E2E (webServer 自動起動)
bun run e2e:ui       # Playwright UI モードで対話実行
bun run lhci:autorun # Lighthouse CI 自動実行（本番ビルドの品質予算検証）
bun run e2e:report   # 直近の HTML レポートを表示
```

`playwright.config.ts` の `webServer` が `bun run build && bun run start` を auto-start する。ローカルでは `reuseExistingServer: !CI` で既存サーバーを再利用するため、`bun run dev` を別タブで起動済みなら高速反復が可能。

**port 3000 衝突時のリカバリ**:

```sh
lsof -i :3000        # 占有プロセスを確認
kill $(lsof -ti:3000) # 解放
```

`bun test` と `bun run e2e` は別ランナー (Bun test runner vs `@playwright/test`)。e2e ファイルは `.e2e.ts` 拡張子を採用しており、`bun test` のデフォルト検出 (`*.test.ts` / `*.spec.ts`) からは自然に除外される。両者を独立して実行できる。

## Docker コマンド

```sh
# 本番環境
make build      # 本番イメージをビルドする
make up         # 本番コンテナを起動する（port 3002）
make down       # 本番コンテナを停止・削除する
make logs       # ログをストリーム表示する
make shell      # コンテナ内でシェルを起動する

# 開発環境（HMR 有効）
make dev        # 開発コンテナを起動する（フォアグラウンド）
make dev-up     # 開発コンテナをバックグラウンドで起動する
make dev-down   # 開発コンテナを停止する
make dev-logs   # ログをストリーム表示する
make dev-shell  # コンテナ内でシェルを起動する

# クリーンアップ
make clean      # 未使用イメージを削除する
make clean-all  # 全リソース（ボリューム含む）を削除する（⚠️ データ消失注意）
```

### Docker 構成メモ

- **ベースイメージ**: `oven/bun:1.3.5-alpine`（全ステージ共通、package.json の packageManager に固定）
- **マルチステージ**: `deps` → `builder` → `runner` の 3 ステージ
- **runner**: Next.js `output: 'standalone'` の最小イメージ。`nobody` ユーザー（uid=65534）で実行
- **開発 HMR**: `WATCHPACK_POLLING=true` で Docker Desktop (Mac/Windows) のファイル変更検知を有効化

## アーキテクチャ

Next.js App Router 構成:

- `app/layout.tsx` — ルートレイアウト（メタデータ、グローバルフォント設定）
- `app/globals.css` — Tailwind v4 の `@theme` ブロックでデザイントークンを定義し、`@layer base / utilities` および プレーンセレクタでコンポーネントスタイルを記述
- `app/page.tsx` — ガイドライブラリ index（ルート `/`）。全ガイドをカテゴリ別カードで一覧する入口
- `app/GuideIndex.tsx` — index の検索 + レベル別セクション（`'use client'`、`matchesQuery` で絞り込み）
- `app/index-page.css` — ガイドライブラリ index 固有スタイル（階段ヒーロー・背骨・カード）
- `app/modern-software-testing-complete-guide-2025/page.tsx` — 現代ソフトウェアテスト完全ガイド 2025（旧ホーム本文の移設先）
- `app/ai-test-guide/page.tsx` — AI テストガイドページ
- `app/ai-guide.css` — AI テストガイド固有スタイル
- `app/unit-testing-guide/page.tsx` — ユニットテスト完全ガイドページ
- `app/unit-testing.css` — ユニットテストガイド固有スタイル
- `app/integration-functional-testing-guide/page.tsx` — 統合/機能テスト完全ガイドページ
- `app/integration-functional-testing-guide.css` — 統合/機能テストガイド固有スタイル
- `app/integration-system-testing-guide/page.tsx` — インテグレーション／システムテストガイドページ
- `app/integration-system-testing-guide.css` — インテグレーション／システムテストガイド固有スタイル
- `app/e2e-testing-guide/page.tsx` — E2Eテスト完全ガイドページ
- `app/e2e-testing-guide.css` — E2Eテストガイド固有スタイル
- `app/acceptance-testing-guide/page.tsx` — 受入テスト完全ガイドページ
- `app/acceptance-testing-guide.css` — 受入テストガイド固有スタイル
- `app/bdd-testing-guide/page.tsx` — BDD（ビヘイビア駆動開発）完全ガイドページ
- `app/bdd-testing-guide.css` — BDDガイド固有スタイル
- `app/istqb-ctfl-at-guide.css` — アジャイル(CTFL-AT)ガイド固有スタイル
- `app/istqb-ctfl-at-complete-guide/page.tsx` — アジャイル(CTFL-AT)ガイドページ
- `app/istqb-ctfl-at-chapter1-agile-software-development/istqb-ctfl-at-chapter1-agile-software-development.css` — アジャイル(CTFL-AT)1章ガイド固有スタイル
- `app/istqb-ctfl-at-chapter1-agile-software-development/page.tsx` — アジャイル(CTFL-AT)1章ガイドページ
- `app/istqb-ctfl-at-chapter1-agile-software-development/NavBar.tsx` — アジャイル(CTFL-AT)1章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles.css` — アジャイル(CTFL-AT)2章ガイド固有スタイル
- `app/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/page.tsx` — アジャイル(CTFL-AT)2章ガイドページ
- `app/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/NavBar.tsx` — アジャイル(CTFL-AT)2章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctfl-at-chapter3-agile-testing-techniques-tools/istqb-ctfl-at-chapter3-agile-testing-techniques-tools.css` — アジャイル(CTFL-AT)3章ガイド固有スタイル
- `app/istqb-ctfl-at-chapter3-agile-testing-techniques-tools/page.tsx` — アジャイル(CTFL-AT)3章ガイドページ
- `app/istqb-ctfl-at-chapter3-agile-testing-techniques-tools/NavBar.tsx` — アジャイル(CTFL-AT)3章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctfl-complete-guide/istqb-ctfl-complete-guide.css` — ISTQB CTFL v4.0 ガイド固有スタイル
- `app/istqb-ctfl-complete-guide/page.tsx` — ISTQB CTFL v4.0 ガイドページ
- `app/istqb-ctfl-complete-guide/NavBar.tsx` — CTFL ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ctfl-v4-chapter1-fundamentals/istqb-ctfl-v4-chapter1-fundamentals.css` — CTFL v4.0 第1章ガイド固有スタイル
- `app/istqb-ctfl-v4-chapter1-fundamentals/page.tsx` — CTFL v4.0 第1章ガイドページ
- `app/istqb-ctfl-v4-chapter1-fundamentals/NavBar.tsx` — CTFL v4.0 第1章ページ固有スティッキーナビ
- `app/istqb-ctfl-v4-chapter2-sdlc-and-testing/istqb-ctfl-v4-chapter2-sdlc-and-testing.css` — CTFL v4.0 第2章ガイド固有スタイル
- `app/istqb-ctfl-v4-chapter2-sdlc-and-testing/page.tsx` — CTFL v4.0 第2章ガイドページ
- `app/istqb-ctfl-v4-chapter2-sdlc-and-testing/NavBar.tsx` — CTFL v4.0 第2章ページ固有スティッキーナビ
- `app/istqb-ctfl-v4-chapter3-static-testing/istqb-ctfl-v4-chapter3-static-testing.css` — CTFL v4.0 第3章ガイド固有スタイル
- `app/istqb-ctfl-v4-chapter3-static-testing/page.tsx` — CTFL v4.0 第3章ガイドページ
- `app/istqb-ctfl-v4-chapter3-static-testing/NavBar.tsx` — CTFL v4.0 第3章ページ固有スティッキーナビ
- `app/istqb-ctfl-v4-chapter4-test-analysis-and-design/istqb-ctfl-v4-chapter4-test-analysis-and-design.css` — CTFL v4.0 第4章ガイド固有スタイル
- `app/istqb-ctfl-v4-chapter4-test-analysis-and-design/page.tsx` — CTFL v4.0 第4章ガイドページ
- `app/istqb-ctfl-v4-chapter4-test-analysis-and-design/NavBar.tsx` — CTFL v4.0 第4章ページ固有スティッキーナビ
- `app/istqb-ctfl-v4-chapter5-test-management/istqb-ctfl-v4-chapter5-test-management.css` — CTFL v4.0 第5章ガイド固有スタイル
- `app/istqb-ctfl-v4-chapter5-test-management/page.tsx` — CTFL v4.0 第5章ガイドページ
- `app/istqb-ctfl-v4-chapter5-test-management/NavBar.tsx` — CTFL v4.0 第5章ページ固有スティッキーナビ
- `app/istqb-ctfl-v4-chapter6-test-tools/istqb-ctfl-v4-chapter6.css` — CTFL v4.0 第6章ガイド固有スタイル
- `app/istqb-ctfl-v4-chapter6-test-tools/page.tsx` — CTFL v4.0 第6章ガイドページ
- `app/istqb-ctfl-v4-chapter6-test-tools/NavBar.tsx` — CTFL v4.0 第6章ページ固有スティッキーナビ
- `app/software-testing-methodologies-guide.css` — テスト手法ガイド固有スタイル
- `app/software-testing-methodologies-guide/page.tsx` — テスト手法ガイドページ
- `app/istqb-ctal-tae-complete-guide.css` — テスト自動化(CTAL-TAE)ガイド固有スタイル
- `app/istqb-ctal-tae-complete-guide/page.tsx` — テスト自動化(CTAL-TAE)ガイドページ
- `app/istqb-ctal-tae-chapter1-introduction-and-objectives/ctal-tae-ch1.css` — CTAL-TAE 第1章ガイド固有スタイル
- `app/istqb-ctal-tae-chapter1-introduction-and-objectives/page.tsx` — CTAL-TAE 第1章ガイドページ（`NavBar.tsx` 付き）
- `app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css` — CTAL-TAE 第2章ガイド固有スタイル
- `app/istqb-ctal-tae-chapter2-preparing-for-test-automation/page.tsx` — CTAL-TAE 第2章ガイドページ（`NavBar.tsx` 付き）
- `app/istqb-ctal-tae-chapter3-test-automation-architecture/page.tsx` — CTAL-TAE 第3章 テスト自動化アーキテクチャガイドページ（`NavBar.tsx` 付き）
- `app/istqb-ctal-tae-chapter4-implementing-test-automation/ctal-tae-ch4.css` — CTAL-TAE 第4章ガイド固有スタイル
- `app/istqb-ctal-tae-chapter4-implementing-test-automation/page.tsx` — CTAL-TAE 第4章ガイドページ（`NavBar.tsx` 付き）
- `app/istqb-ctal-tae-chapter5-implementation-deployment-strategies/page.tsx` — CTAL-TAE 第5章 実装・デプロイ戦略、本文・全7セクション
- `app/istqb-ctal-tae-chapter5-implementation-deployment-strategies/ctal-tae-ch5.css` — CTAL-TAE 第5章 実装・デプロイ戦略、元HTML全89 CSSルールと共通CSS干渉補正
- `app/istqb-ctal-tae-chapter5-implementation-deployment-strategies/NavBar.tsx` — CTAL-TAE 第5章 実装・デプロイ戦略、IntersectionObserverによる目次追従
- `app/istqb-ctal-tae-chapter5-implementation-deployment-strategies/diagrams.ts` — CTAL-TAE 第5章 実装・デプロイ戦略、原本に対応する全5図とライトテーマ
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/page.tsx` — CTAL-TAE 第6章 レポートとメトリクス、本文カテゴリーの組み立てとメタデータ
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/ctal-tae-ch6.css` — CTAL-TAE 第6章 レポートとメトリクス、元HTML全160 CSSルール・900pxレスポンシブ表示・共通CSS干渉補正
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/NavBar.tsx` — CTAL-TAE 第6章 レポートとメトリクス、階層目次43リンク・開閉・スクロール追従
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/ChecklistCard.tsx` — CTAL-TAE 第6章 レポートとメトリクス、全13項目のチェック状態・進捗バーと完了数
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/diagrams.ts` — CTAL-TAE 第6章 レポートとメトリクス、フローチャート9図・状態図1図・シーケンス図1図の原本定義
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/ChapterDiagram.tsx` — CTAL-TAE 第6章 レポートとメトリクス、共通Mermaidへの配線と図ID保持
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/IntroTerms.tsx` — CTAL-TAE 第6章 レポートとメトリクス、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/DataCollection.tsx` — CTAL-TAE 第6章 レポートとメトリクス、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/DataAnalysis.tsx` — CTAL-TAE 第6章 レポートとメトリクス、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/Reporting.tsx` — CTAL-TAE 第6章 レポートとメトリクス、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/SummaryQuestions.tsx` — CTAL-TAE 第6章 レポートとメトリクス、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/LearningReferences.tsx` — CTAL-TAE 第6章 レポートとメトリクス、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/page.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、本文カテゴリーの組み立てとメタデータ
- `app/istqb-ctal-tae-chapter8-continuous-improvement/BestPractices.tsx` — CTAL-TAE第8章 カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter8-continuous-improvement/ChapterDiagram.tsx` — CTAL-TAE第8章 共有Mermaidへの接続
- `app/istqb-ctal-tae-chapter8-continuous-improvement/CodeExample.tsx` — CTAL-TAE第8章 静的構文色付きPython/YAMLコード6例
- `app/istqb-ctal-tae-chapter8-continuous-improvement/DataAnalysis.tsx` — CTAL-TAE第8章 カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter8-continuous-improvement/ExamPractice.tsx` — CTAL-TAE第8章 カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter8-continuous-improvement/GlossaryReferences.tsx` — CTAL-TAE第8章 カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter8-continuous-improvement/NavBar.tsx` — CTAL-TAE第8章 目次70リンクの開閉・追従
- `app/istqb-ctal-tae-chapter8-continuous-improvement/Overview.tsx` — CTAL-TAE第8章 カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter8-continuous-improvement/TechnicalImprovements.tsx` — CTAL-TAE第8章 カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter8-continuous-improvement/TestwareRefactoring.tsx` — CTAL-TAE第8章 カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter8-continuous-improvement/ToolOpportunities.tsx` — CTAL-TAE第8章 カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter8-continuous-improvement/ctal-tae-ch8.css` — CTAL-TAE第8章 原本デザインのスコープと共通CSS補正
- `app/istqb-ctal-tae-chapter8-continuous-improvement/diagrams.ts` — CTAL-TAE第8章 全16図とライトテーマ
- `app/istqb-ctal-tae-chapter8-continuous-improvement/highlight-LICENSE.txt` — CTAL-TAE第8章 配色のライセンス
- `app/istqb-ctal-tae-chapter8-continuous-improvement/highlight.css` — CTAL-TAE第8章 原本デザインのスコープと共通CSS補正
- `app/istqb-ctal-tae-chapter8-continuous-improvement/page.tsx` — CTAL-TAE第8章 ページ組み立てとmetadata
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/ctal-tae-ch7.css` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、原本全99 CSSルール・900px/640px表示条件と共通CSS干渉補正
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/NavBar.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、階層目次40リンク・開閉・スクリム・追従
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/ChecklistCard.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、全6項目のチェック状態・進捗と完了数
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/diagrams.ts` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、フローチャート10図・シーケンス図1図の原本定義とライトテーマ
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/ChapterDiagram.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、共通Mermaidへの配線と図ID保持
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/CodeExample.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、原本と同じhighlight.js 11.10.0で事前生成した全7コード例
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/highlight.css` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、スコープしたAtom One Lightの全14ルール
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/highlight-LICENSE.txt` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、ハイライト配色のライセンス
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/OverviewTerminology.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/EnvironmentVerification.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/ScriptSuiteBehavior.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/UnexpectedResults.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/StaticAnalysis.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/ReviewQuestions.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別の原本本文
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/GlossaryReferences.tsx` — CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別の原本本文
- `app/istqb-ctal-ta-complete-guide/istqb-ctal-ta-complete-guide.css` — テストアナリスト(CTAL-TA)ガイド固有スタイル
- `app/istqb-ctal-ta-complete-guide/page.tsx` — テストアナリスト(CTAL-TA)ガイドページ
- `app/istqb-ctal-ta-complete-guide/NavBar.tsx` — CTAL-TA ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ctal-ta-chapter1-test-process/istqb-ctal-ta-chapter1-test-process.css` — CTAL-TA 第1章ガイド固有スタイル
- `app/istqb-ctal-ta-chapter1-test-process/page.tsx` — CTAL-TA 第1章ガイドページ
- `app/istqb-ctal-ta-chapter1-test-process/NavBar.tsx` — CTAL-TA 第1章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctal-ta-chapter1-test-process/Checklist.tsx` — CTAL-TA 第1章チェックリスト（`'use client'`）
- `app/istqb-ctal-ta-chapter2-risk-based-testing/istqb-ctal-ta-chapter2-risk-based-testing.css` — CTAL-TA 第2章ガイド固有スタイル
- `app/istqb-ctal-ta-chapter2-risk-based-testing/page.tsx` — CTAL-TA 第2章ガイドページ
- `app/istqb-ctal-ta-chapter2-risk-based-testing/NavBar.tsx` — CTAL-TA 第2章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctal-ta-chapter3-test-analysis-and-design/istqb-ctal-ta-chapter3-test-analysis-and-design.css` — CTAL-TA 第3章ガイド固有スタイル
- `app/istqb-ctal-ta-chapter3-test-analysis-and-design/page.tsx` — CTAL-TA 第3章ガイドページ
- `app/istqb-ctal-ta-chapter3-test-analysis-and-design/NavBar.tsx` — CTAL-TA 第3章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctal-ta-chapter3-test-analysis-and-design/Checklist.tsx` — CTAL-TA 第3章チェックリスト（`'use client'`）
- `app/istqb-ctal-ta-chapter4-quality-characteristics/istqb-ctal-ta-chapter4-quality-characteristics.css` — CTAL-TA 第4章ガイド固有スタイル
- `app/istqb-ctal-ta-chapter4-quality-characteristics/page.tsx` — CTAL-TA 第4章ガイドページ
- `app/istqb-ctal-ta-chapter4-quality-characteristics/NavBar.tsx` — CTAL-TA 第4章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctal-ta-chapter4-quality-characteristics/ChecklistCard.tsx` — CTAL-TA 第4章チェックリストカード（`'use client'`）
- `app/istqb-ctal-ta-chapter5-defect-prevention/istqb-ctal-ta-chapter5-defect-prevention.css` — CTAL-TA 第5章ガイド固有スタイル
- `app/istqb-ctal-ta-chapter5-defect-prevention/page.tsx` — CTAL-TA 第5章ガイドページ
- `app/istqb-ctal-tm-chapter1-managing-the-test-activities/istqb-ctal-tm-chapter1-managing-the-test-activities.css` — CTAL-TM 第1章ガイド固有スタイル
- `app/istqb-ctal-tm-chapter1-managing-the-test-activities/page.tsx` — CTAL-TM 第1章ガイドページ
- `app/istqb-ctal-tm-chapter1-managing-the-test-activities/NavBar.tsx` — CTAL-TM 第1章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctal-tm-chapter1-managing-the-test-activities/ChecklistCard.tsx` — CTAL-TM 第1章チェックリストカード（`'use client'`）
- `app/istqb-ctal-tm-chapter2-managing-the-product/istqb-ctal-tm-chapter2-managing-the-product.css` — CTAL-TM 第2章ガイド固有スタイル
- `app/istqb-ctal-tm-chapter2-managing-the-product/page.tsx` — CTAL-TM 第2章ガイドページ
- `app/istqb-ctal-tm-chapter2-managing-the-product/NavBar.tsx` — CTAL-TM 第2章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctal-tm-chapter2-managing-the-product/diagrams.ts` — CTAL-TM 第2章 Mermaid 図解定義（全15図、`fix-mermaid` スキル準拠）
- `app/istqb-ctal-tm-chapter3-managing-the-team/istqb-ctal-tm-chapter3-managing-the-team.css` — CTAL-TM 第3章ガイド固有スタイル
- `app/istqb-ctal-tm-chapter3-managing-the-team/page.tsx` — CTAL-TM 第3章ガイドページ
- `app/istqb-ctal-tm-chapter3-managing-the-team/NavBar.tsx` — CTAL-TM 第3章ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctal-tm-chapter3-managing-the-team/ChecklistCard.tsx` — CTAL-TM 第3章チェックリストカード（`'use client'`）
- `app/istqb-ctal-tm-chapter3-managing-the-team/diagrams.ts` — CTAL-TM 第3章 Mermaid 図解定義（全7図、`fix-mermaid` スキル準拠）
- `app/istqb-ctal-tm-complete-guide/istqb-ctal-tm-complete-guide.css` — テスト管理(CTAL-TM)ガイド固有スタイル
- `app/istqb-ctal-tm-complete-guide/page.tsx` — テスト管理(CTAL-TM)ガイドページ
- `app/istqb-ctal-tm-complete-guide/NavBar.tsx` — CTAL-TM ページ固有スティッキーナビ
- `app/istqb-ctal-att-complete-guide/istqb-ctal-att-complete-guide.css` — アジャイル(CTAL-ATT)ガイド固有スタイル
- `app/istqb-ctal-att-complete-guide/page.tsx` — アジャイル(CTAL-ATT)ガイドページ
- `app/istqb-ctal-att-complete-guide/NavBar.tsx` — CTAL-ATT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ctal-atlas-complete-guide/istqb-ctal-atlas-complete-guide.css` — アジャイル(CT-ATLaS)ガイド固有スタイル
- `app/istqb-ctal-atlas-complete-guide/page.tsx` — アジャイル(CT-ATLaS)ガイドページ
- `app/istqb-ctal-atlas-complete-guide/NavBar.tsx` — CT-ATLaS ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-ai-complete-guide/istqb-ct-ai-complete-guide.css` — AIテスト(CT-AI)ガイド固有スタイル
- `app/istqb-ct-ai-complete-guide/page.tsx` — AIテスト(CT-AI)ガイドページ
- `app/istqb-ct-ai-complete-guide/NavBar.tsx` — CT-AI ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-genai-complete-guide/istqb-ct-genai-complete-guide.css` — GenAIテスト(CT-GenAI)ガイド固有スタイル
- `app/istqb-ct-genai-complete-guide/page.tsx` — GenAIテスト(CT-GenAI)ガイドページ
- `app/istqb-ct-genai-complete-guide/NavBar.tsx` — CT-GenAI ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-genai-chapter1-introduction/istqb-ct-genai-chapter1-introduction.css` — CT-GenAI 第1章ガイド固有スタイル
- `app/istqb-ct-genai-chapter1-introduction/page.tsx` — CT-GenAI 第1章ガイドページ
- `app/istqb-ct-genai-chapter1-introduction/NavBar.tsx` — CT-GenAI 第1章ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-genai-chapter1-introduction/diagrams.ts` — CT-GenAI 第1章 Mermaid 図解定義（fix-mermaid 準拠）
- `app/istqb-ct-genai-chapter2-prompt-engineering/istqb-ct-genai-chapter2-prompt-engineering.css` — CT-GenAI 第2章ガイド固有スタイル
- `app/istqb-ct-genai-chapter2-prompt-engineering/page.tsx` — CT-GenAI 第2章ガイドページ
- `app/istqb-ct-genai-chapter2-prompt-engineering/NavBar.tsx` — CT-GenAI 第2章ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-genai-chapter2-prompt-engineering/ChecklistCard.tsx` — CT-GenAI 第2章チェックリストカードコンポーネント（`'use client'`、進捗バーと完了カウント動的連動）
- `app/istqb-ct-genai-chapter2-prompt-engineering/diagrams.ts` — CT-GenAI 第2章 Mermaid 図解定義（fix-mermaid 準拠、全9図）
- `app/istqb-ct-genai-chapter3-risk-management/istqb-ct-genai-chapter3-risk-management.css` — CT-GenAI 第3章ガイド固有スタイル
- `app/istqb-ct-genai-chapter3-risk-management/page.tsx` — CT-GenAI 第3章ガイドページ
- `app/istqb-ct-genai-chapter3-risk-management/NavBar.tsx` — CT-GenAI 第3章ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-genai-chapter3-risk-management/ChecklistCard.tsx` — CT-GenAI 第3章チェックリストカードコンポーネント（`'use client'`、進捗バーと完了カウント動的連動）
- `app/istqb-ct-genai-chapter3-risk-management/diagrams.ts` — CT-GenAI 第3章 Mermaid 図解定義（fix-mermaid 準拠、全10図）
- `app/istqb-ct-genai-chapter4-llm-powered-solutions/istqb-ct-genai-chapter4-llm-powered-solutions.css` — CT-GenAI 第4章ガイド固有スタイル
- `app/istqb-ct-genai-chapter4-llm-powered-solutions/page.tsx` — CT-GenAI 第4章ガイドページ
- `app/istqb-ct-genai-chapter4-llm-powered-solutions/NavBar.tsx` — CT-GenAI 第4章ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-genai-chapter4-llm-powered-solutions/ChecklistCard.tsx` — CT-GenAI 第4章チェックリストカードコンポーネント（`'use client'`、進捗バーと完了カウント動的連動）
- `app/istqb-ct-genai-chapter4-llm-powered-solutions/diagrams.ts` — CT-GenAI 第4章 Mermaid 図解定義（fix-mermaid 準拠、全10図）
- `app/istqb-ct-genai-chapter5-deploying-and-integrating/istqb-ct-genai-chapter5-deploying-and-integrating.css` — CT-GenAI 第5章ガイド固有スタイル
- `app/istqb-ct-genai-chapter5-deploying-and-integrating/page.tsx` — CT-GenAI 第5章ガイドページ
- `app/istqb-ct-genai-chapter5-deploying-and-integrating/NavBar.tsx` — CT-GenAI 第5章ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-genai-chapter5-deploying-and-integrating/ChecklistCard.tsx` — CT-GenAI 第5章チェックリストカードコンポーネント（`'use client'`、進捗バーと完了カウント動的連動）
- `app/istqb-ct-genai-chapter5-deploying-and-integrating/diagrams.ts` — CT-GenAI 第5章 Mermaid 図解定義（fix-mermaid 準拠、全16図）
- `app/istqb-ct-mbt-complete-guide/istqb-ct-mbt-complete-guide.css` — モデルベーステスト(CT-MBT)ガイド固有スタイル
- `app/istqb-ct-mbt-complete-guide/page.tsx` — モデルベーステスト(CT-MBT)ガイドページ
- `app/istqb-ct-mbt-complete-guide/NavBar.tsx` — CT-MBT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-aut-complete-guide/istqb-ct-aut-complete-guide.css` — 自動車ソフトウェアテスター(CT-AuT)ガイド固有スタイル
- `app/istqb-ct-aut-complete-guide/page.tsx` — 自動車ソフトウェアテスター(CT-AuT)ガイドページ
- `app/istqb-ct-aut-complete-guide/NavBar.tsx` — CT-AuT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-act-complete-guide/istqb-ct-act-complete-guide.css` — 受入テスト(CT-AcT)ガイド固有スタイル
- `app/istqb-ct-act-complete-guide/page.tsx` — 受入テスト(CT-AcT)ガイドページ
- `app/istqb-ct-act-complete-guide/NavBar.tsx` — CT-AcT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-mat-complete-guide/istqb-ct-mat-complete-guide.css` — モバイルアプリテスト(CT-MAT)ガイド固有スタイル
- `app/istqb-ct-mat-complete-guide/page.tsx` — モバイルアプリテスト(CT-MAT)ガイドページ
- `app/istqb-ct-mat-complete-guide/NavBar.tsx` — CT-MAT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-tas-complete-guide/istqb-ct-tas-complete-guide.css` — テスト自動化戦略(CT-TAS)ガイド固有スタイル
- `app/istqb-ct-tas-complete-guide/page.tsx` — テスト自動化戦略(CT-TAS)ガイドページ
- `app/istqb-ct-tas-complete-guide/NavBar.tsx` — CT-TAS ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ct-sec-complete-guide/istqb-ct-sec-complete-guide.css` — セキュリティテスト(CT-SEC)ガイド固有スタイル
- `app/istqb-ct-sec-complete-guide/page.tsx` — セキュリティテスト(CT-SEC)ガイドページ
- `app/istqb-ct-sec-complete-guide/NavBar.tsx` — CT-SEC ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ct-ste-complete-guide.css` — セキュリティテストエンジニア(CT-STE)ガイド固有スタイル
- `app/istqb-ct-ste-complete-guide/page.tsx` — セキュリティテストエンジニア(CT-STE)ガイドページ
- `app/istqb-ct-ste-complete-guide/NavBar.tsx` — CT-STE ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css` — ゲームテスト(CT-GaMe)ガイド固有スタイル
- `app/istqb-ct-game-complete-guide/page.tsx` — ゲームテスト(CT-GaMe)ガイドページ
- `app/istqb-ct-game-complete-guide/NavBar.tsx` — CT-GaMe ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ct-gt-complete-guide/istqb-ct-gt-complete-guide.css` — ギャンブル産業テスター(CT-GT)ガイド固有スタイル
- `app/istqb-ct-gt-complete-guide/page.tsx` — ギャンブル産業テスター(CT-GT)ガイドページ
- `app/istqb-ct-gt-complete-guide/NavBar.tsx` — CT-GT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-ft-complete-guide/istqb-ct-ft-complete-guide.css` — 金融テスト(CT-FT)ガイド固有スタイル
- `app/istqb-ct-ft-complete-guide/page.tsx` — 金融テスト(CT-FT)ガイドページ
- `app/istqb-ct-ft-complete-guide/NavBar.tsx` — CT-FT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-pt-complete-guide.css` — パフォーマンステスト(CT-PT)ガイド固有スタイル
- `app/istqb-ct-pt-complete-guide/page.tsx` — パフォーマンステスト(CT-PT)ガイドページ
- `app/istqb-ct-pt-complete-guide/NavBar.tsx` — CT-PT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ct-ut-complete-guide.css` — ユーザビリティテスト(CT-UT)ガイド固有スタイル
- `app/istqb-ct-ut-complete-guide/page.tsx` — ユーザビリティテスト(CT-UT)ガイドページ
- `app/istqb-ct-ut-complete-guide/NavBar.tsx` — CT-UT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
- `app/istqb-ctel-itp-atp-complete-guide/istqb-ctel-itp-atp-complete-guide.css` — テストプロセス評価(CTEL-ATP)ガイド固有スタイル
- `app/istqb-ctel-itp-atp-complete-guide/page.tsx` — テストプロセス評価(CTEL-ATP)ガイドページ
- `app/istqb-ctel-itp-atp-complete-guide/NavBar.tsx` — CTEL-ATP ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctel-itp-itpi-complete-guide/istqb-ctel-itp-itpi-complete-guide.css` — テストプロセス改善実装(CTEL-ITPI)ガイド固有スタイル
- `app/istqb-ctel-itp-itpi-complete-guide/page.tsx` — テストプロセス改善実装(CTEL-ITPI)ガイドページ
- `app/istqb-ctel-itp-itpi-complete-guide/NavBar.tsx` — CTEL-ITPI ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctel-tm-sm-complete-guide/istqb-ctel-tm-sm-complete-guide.css` — テスト管理戦略(CTEL-TM-SM)ガイド固有スタイル
- `app/istqb-ctel-tm-sm-complete-guide/page.tsx` — テスト管理戦略(CTEL-TM-SM)ガイドページ
- `app/istqb-ctel-tm-sm-complete-guide/NavBar.tsx` — CTEL-TM-SM ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctel-tm-otm-complete-guide/istqb-ctel-tm-otm-complete-guide.css` — オペレーショナルテスト管理(CTEL-TM-OTM)ガイド固有スタイル
- `app/istqb-ctel-tm-otm-complete-guide/page.tsx` — オペレーショナルテスト管理(CTEL-TM-OTM)ガイドページ
- `app/istqb-ctel-tm-otm-complete-guide/NavBar.tsx` — CTEL-TM-OTM ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctel-tm-mtt-complete-guide.css` — テストチーム管理(CTEL-TM-MTT)ガイド固有スタイル
- `app/istqb-ctel-tm-mtt-complete-guide/page.tsx` — テストチーム管理(CTEL-TM-MTT)ガイドページ
- `app/istqb-ctel-tm-mtt-complete-guide/NavBar.tsx` — CTEL-TM-MTT ページ固有スティッキーナビ（`'use client'`）
- `app/istqb-ctal-tta-complete-guide/istqb-ctal-tta.css` — テクニカルテストアナリスト(CTAL-TTA)ガイド固有スタイル
- `app/istqb-ctal-tta-complete-guide/page.tsx` — テクニカルテストアナリスト(CTAL-TTA)ガイドページ
- `app/istqb-ctal-tta-complete-guide/NavBar.tsx` — CTAL-TTA ページ固有スティッキーナビ（'use client'）
- `app/github-actions/github-actions.css` — GitHub Actions 入門ガイド固有スタイル
- `app/github-actions/page.tsx` — GitHub Actions 入門ガイドページ
- `app/github-actions/NavBar.tsx` — GitHub Actions 入門ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応）
- `app/github-actions-guide/github-actions-guide.css` — GitHub Actions ガイド固有スタイル
- `app/github-actions-guide/page.tsx` — GitHub Actions ガイドページ
- `app/github-actions-guide/NavBar.tsx` — GitHub Actions ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応）
- `app/github-actions-guide/Checklist.tsx` — GitHub Actions プロダクションレディ・チェックリスト（`'use client'`、クリック・キーボードトグル、打消し線、進捗バー対応）
- `app/playwright-beginner-guide/playwright-beginner-guide.css` — Playwright 完全入門ガイド固有スタイル
- `app/playwright-beginner-guide/page.tsx` — Playwright 完全入門ガイドページ
- `app/playwright-beginner-guide/NavBar.tsx` — Playwright 完全入門ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応）
- `app/playwright-intermediate-advanced-guide/playwright-intermediate-advanced-guide.css` — Playwright 実践ガイド（中上級）固有スタイル
- `app/playwright-intermediate-advanced-guide/page.tsx` — Playwright 実践ガイド（中上級）ページ
- `app/playwright-intermediate-advanced-guide/NavBar.tsx` — Playwright 実践ガイド（中上級）ページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応）
- `app/sonarqube-intermediate-guide/sonarqube-intermediate-guide.css` — SonarQube 完全解説ガイド固有スタイル
- `app/sonarqube-intermediate-guide/page.tsx` — SonarQube 完全解説ガイドページ
- `app/sonarqube-intermediate-guide/NavBar.tsx` — SonarQube 完全解説ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/cucumber-beginner-guide/cucumber-beginner-guide.css` — Cucumber 入門ガイド固有スタイル
- `app/cucumber-beginner-guide/page.tsx` — Cucumber 入門ガイドページ
- `app/cucumber-beginner-guide/NavBar.tsx` — Cucumber 入門ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応）
- `app/cypress-beginner-guide/cypress-beginner-guide.css` — Cypress 入門ガイド固有スタイル
- `app/cypress-beginner-guide/page.tsx` — Cypress 入門ガイドページ
- `app/cypress-beginner-guide/NavBar.tsx` — Cypress 入門ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応）
- `app/selenium-beginner-guide/selenium-beginner-guide.css` — Selenium 完全ガイド固有スタイル
- `app/selenium-beginner-guide/page.tsx` — Selenium 完全ガイドページ
- `app/selenium-beginner-guide/NavBar.tsx` — Selenium 完全ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応）
- `app/appium-essentials-guide/appium-essentials-guide.css` — Appium Essentials 完全ガイド固有スタイル
- `app/appium-essentials-guide/page.tsx` — Appium Essentials 完全ガイドページ
- `app/appium-essentials-guide/NavBar.tsx` — Appium Essentials 完全ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、モバイルトグル対応）
- `app/appium-essentials-guide/Checklist.tsx` — Appium ベストプラクティスチェックリスト（`'use client'`、動的カウンター・トグル対応）
- `app/clean-code-cookbook-guide/clean-code-cookbook-guide.css` — Clean Code Cookbook 実践ガイド固有スタイル
- `app/clean-code-cookbook-guide/page.tsx` — Clean Code Cookbook 実践ガイドページ
- `app/clean-code-cookbook-guide/NavBar.tsx` — Clean Code Cookbook 実践ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応）
- `app/the-way-of-the-web-tester-guide/the-way-of-the-web-tester-guide.css` — The Way of the Web Tester 実践ガイド固有スタイル
- `app/the-way-of-the-web-tester-guide/page.tsx` — The Way of the Web Tester 実践ガイドページ
- `app/the-way-of-the-web-tester-guide/NavBar.tsx` — The Way of the Web Tester 実践ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応）
- `app/testing-web-apis-guide/testing-web-apis-guide.css` — Web APIテスト実践ガイド固有スタイル
- `app/testing-web-apis-guide/page.tsx` — Web APIテスト実践ガイドページ
- `app/testing-web-apis-guide/NavBar.tsx` — Web APIテスト実践ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応）
- `app/testing-web-apis-guide/Checklist.tsx` — Web APIテスト実践ガイド セクション14用インタラクティブチェックリスト（`'use client'`）
- `app/software-test-design-guide/software-test-design-guide.css` — ソフトウェアテスト設計実践ガイド固有スタイル
- `app/software-test-design-guide/page.tsx` — ソフトウェアテスト設計実践ガイドページ
- `app/software-test-design-guide/NavBar.tsx` — ソフトウェアテスト設計実践ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応）
- `app/software-test-design-guide/Checklist.tsx` — ソフトウェアテスト設計実践ガイド セクション15用インタラクティブチェックリスト（`'use client'`）
- `app/secure-by-design-guide/secure-by-design-guide.css` — セキュア・バイ・デザイン実践ガイド固有スタイル
- `app/secure-by-design-guide/page.tsx` — セキュア・バイ・デザイン実践ガイドページ
- `app/secure-by-design-guide/NavBar.tsx` — セキュア・バイ・デザイン実践ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応、読了プログレスバー、トップ戻るボタン）
- `app/how-google-tests-software-guide/how-google-tests-software-guide.css` — How Google Tests Software 完全ガイド固有スタイル
- `app/how-google-tests-software-guide/page.tsx` — How Google Tests Software 完全ガイドページ
- `app/how-google-tests-software-guide/NavBar.tsx` — How Google Tests Software 完全ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/leading-quality-guide/leading-quality-guide.css` — Leading Quality 実践ガイド固有スタイル
- `app/leading-quality-guide/page.tsx` — Leading Quality 実践ガイドページ
- `app/leading-quality-guide/NavBar.tsx` — Leading Quality 実践ガイドページ固有スティッキーナビ（`'use client'`）
- `app/leading-quality-guide/Checklist.tsx` — Leading Quality 実践ガイド セクション9用インタラクティブチェックリスト（`'use client'`）
- `app/agile-testing-practical-guide/agile-testing-practical-guide.css` — Agile Testing 実践ガイド固有スタイル
- `app/agile-testing-practical-guide/page.tsx` — Agile Testing 実践ガイドページ
- `app/agile-testing-practical-guide/NavBar.tsx` — Agile Testing 実践ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/explore-it-guide/explore-it-guide.css` — Explore It! 探索的テスト実践ガイド固有スタイル
- `app/explore-it-guide/page.tsx` — Explore It! 探索的テスト実践ガイドページ
- `app/explore-it-guide/NavBar.tsx` — Explore It! 探索的テスト実践ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/owasp-zap-beginner-guide/owasp-zap-beginner-guide.css` — OWASP ZAP 完全ガイド固有スタイル
- `app/owasp-zap-beginner-guide/page.tsx` — OWASP ZAP 完全ガイドページ
- `app/owasp-zap-beginner-guide/NavBar.tsx` — OWASP ZAP 完全ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、モバイルトグル対応）
- `app/lessons-learned-in-software-testing-guide/lessons-learned-guide.css` — Lessons Learned in Software Testing 実践ガイド固有スタイル
- `app/lessons-learned-in-software-testing-guide/page.tsx` — Lessons Learned in Software Testing 実践ガイドページ
- `app/lessons-learned-in-software-testing-guide/NavBar.tsx` — Lessons Learned in Software Testing 実践ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/lessons-learned-in-software-testing-guide/SummaryChecklist.tsx` — Lessons Learned in Software Testing 実践ガイド セクション16用インタラクティブチェックリスト（`'use client'`）
- `app/art-of-software-testing-guide/art-of-testing-guide.css` — The Art of Software Testing 実践ガイド固有スタイル
- `app/art-of-software-testing-guide/page.tsx` — The Art of Software Testing 実践ガイドページ
- `app/art-of-software-testing-guide/NavBar.tsx` — The Art of Software Testing 実践ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/test-driven-development-by-example-guide/tdd-guide.css` — Test-Driven Development: By Example 実践ガイド固有スタイル
- `app/test-driven-development-by-example-guide/page.tsx` — Test-Driven Development: By Example 実践ガイドページ
- `app/test-driven-development-by-example-guide/NavBar.tsx` — Test-Driven Development: By Example 実践ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/test-driven-development-by-example-guide/Checklist.tsx` — Test-Driven Development: By Example 実践ガイド セクション13用インタラクティブチェックリスト（`'use client'`）
- `app/unit-testing-principles-practices-patterns-guide/unit-testing-guide.css` — Unit Testing Principles, Practices, and Patterns 完全ガイド固有スタイル
- `app/unit-testing-principles-practices-patterns-guide/page.tsx` — Unit Testing Principles, Practices, and Patterns 完全ガイドページ
- `app/unit-testing-principles-practices-patterns-guide/NavBar.tsx` — Unit Testing Principles, Practices, and Patterns 完全ガイドページ固有スティッキーナビ（`'use client'`、`scroll` イベント + 各セクションの `offsetTop` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/unit-testing-principles-practices-patterns-guide/Checklist.tsx` — Unit Testing Principles, Practices, and Patterns 完全ガイド セクション14用インタラクティブチェックリスト（`'use client'`）
- `app/component-based-testing-qa-guide/component-based-testing-qa-guide.css` — コンポーネントベースソフトウェアシステムのテストと品質保証完全ガイド固有スタイル
- `app/component-based-testing-qa-guide/page.tsx` — コンポーネントベースソフトウェアシステムのテストと品質保証完全ガイドページ
- `app/component-based-testing-qa-guide/NavBar.tsx` — コンポーネントベースソフトウェアシステムのテストと品質保証完全ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/component-based-testing-qa-guide/Checklist.tsx` — コンポーネントベースソフトウェアシステムのテストと品質保証完全ガイド セクション11用インタラクティブチェックリスト（`'use client'`）
- `app/perfect-software-guide/perfect-software-guide.css` — Perfect Software 実践ガイド固有スタイル
- `app/perfect-software-guide/page.tsx` — Perfect Software 実践ガイドページ
- `app/perfect-software-guide/NavBar.tsx` — Perfect Software 実践ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/perfect-software-guide/Checklist.tsx` — Perfect Software 実践ガイド セクション11用インタラクティブチェックリスト（`'use client'`）
- `app/software-testing-with-generative-ai-guide/software-testing-with-generative-ai-guide.css` — 生成AIとソフトウェアテスト実践ガイド固有スタイル
- `app/software-testing-with-generative-ai-guide/page.tsx` — 生成AIとソフトウェアテスト実践ガイドページ
- `app/software-testing-with-generative-ai-guide/NavBar.tsx` — 生成AIとソフトウェアテスト実践ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/software-testing-with-generative-ai-guide/Checklist.tsx` — 生成AIとソフトウェアテスト実践ガイド 第12章用インタラクティブチェックリスト（`'use client'`）
- `app/ai-driven-software-testing-guide/ai-driven-software-testing-guide.css` — AI駆動ソフトウェアテスト入門ガイド固有スタイル
- `app/ai-driven-software-testing-guide/page.tsx` — AI駆動ソフトウェアテスト入門ガイドページ
- `app/ai-driven-software-testing-guide/NavBar.tsx` — AI駆動ソフトウェアテスト入門ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/ai-driven-software-testing-guide/Checklist.tsx` — AI駆動ソフトウェアテスト入門ガイド用インタラクティブチェックリスト（`'use client'`）
- `app/appium-essentials-guide/appium-essentials-guide.css` — Appium Essentials 完全ガイド固有スタイル
- `app/appium-essentials-guide/page.tsx` — Appium Essentials 完全ガイドページ
- `app/appium-essentials-guide/NavBar.tsx` — Appium Essentials 完全ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/appium-essentials-guide/Checklist.tsx` — Appium Essentials 完全ガイド用インタラクティブチェックリスト（`'use client'`）
- `app/testing-ai-confidence-engineering-guide/testing-ai-confidence-engineering-guide.css` — Testing AI 完全ガイド固有スタイル
- `app/testing-ai-confidence-engineering-guide/page.tsx` — Testing AI 完全ガイドページ
- `app/testing-ai-confidence-engineering-guide/NavBar.tsx` — Testing AI 完全ガイドページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/testing-ai-confidence-engineering-guide/Checklist.tsx` — Testing AI 完全ガイド用インタラクティブチェックリスト（`'use client'`）
- `app/automating-data-quality-monitoring-guide/automating-data-quality-monitoring-guide.css` — データ品質モニタリング自動化ガイド固有スタイル
- `app/automating-data-quality-monitoring-guide/page.tsx` — データ品質モニタリング自動化ガイドページ
- `app/automating-data-quality-monitoring-guide/NavBar.tsx` — データ品質モニタリング自動化ガイドページ固有スティッキーナビ（`'use client'`、`lib/useScrollSpy.ts` でアクティブリンク制御、`aria-current` 対応、モバイルトグル対応）
- `app/automating-data-quality-monitoring-guide/Checklist.tsx` — データ品質モニタリング自動化ガイド用インタラクティブチェックリスト（`'use client'`、進捗カウンタ連動）
- `app/automating-data-quality-monitoring-guide/diagrams.ts` — データ品質モニタリング自動化ガイド Mermaid 図解定義（全13図、`fix-mermaid` スキル準拠）
- `components/Header.tsx` — 共有 React コンポーネント（クライアントコンポーネント。現在のパスに応じたアクティブリンク表示をサポート。高さ 60px・`fixed`・`z-50`）。ドロワーは検索 + `<details>` アコーディオン方式（下記「グローバルナビの拡張性」参照）
- `lib/useScrollSpy.ts` — 目次のアクティブ節を決定する共有フック。スクロール／リサイズのたびに各節と読み取り帯の重なりを実測するため、交差状態を保ったまま可視率が逆転する場合にも追従する（`IntersectionObserver` + `threshold: 0` の `intersectionRatio` 保持では追従できない）。playwright-intermediate-advanced / sonarqube-intermediate / cucumber / cypress / selenium / clean-code-cookbook / the-way-of-the-web-tester / testing-web-apis / software-test-design / secure-by-design / how-google-tests-software / agile-testing-practical の各 NavBar が共用する
- `app/langgraph-qa-agent-guide/page.tsx` — LangGraphとNeo4jによるQAエージェント構築ガイド
- `app/langgraph-qa-agent-guide/langgraph-qa-agent-guide.css` — 元HTMLのダーク配色・固定サイドバー・表・カード・コードをスコープしたCSS
- `app/langgraph-qa-agent-guide/NavBar.tsx` — `useScrollSpy`と`aria-current`対応の目次（モバイルでは元HTML同様に非表示）
- `app/langgraph-qa-agent-guide/diagrams.ts` — 元ソースと元テーマを維持したMermaid図3件
- `app/langgraph-qa-agent-guide/SyntaxCode.tsx` — 追加依存関係なしでPython/Bashの全15コード例をサーバー側で色分け。Reactによる文字列エスケープで元コードを安全に表示
- `tests/langgraph-qa-agent-guide/page.test.tsx` — 元HTMLとの本文・構造・CSS・コード・参考文献の照合テスト153件
- `app/istqb-ct-genai-study-guide/page.tsx` — 元HTMLの全5章・試験概要・ロードマップ・参考資料を既存画面と併存する新規ルートへ移行
- `app/istqb-ct-genai-study-guide/istqb-ct-genai-study-guide.css` — 全55CSSルール・白背景と青の配色・880pxモバイル境界を保持し、共有スタイルをページ内でリセット
- `app/istqb-ct-genai-study-guide/NavBar.tsx` — 目次25リンク、開閉・Escape・スクロール追従・IntersectionObserver解除
- `playwright.mermaid-css.config.ts` / `e2e/ct-genai-study-mermaid-css.e2e.ts` — サーバー・ビルド不要のChromium座標検証（4画面幅×3図幅、両端到達性と小図の中央寄せ）
- `e2e/ctal-tae-code-layout.e2e.ts` — 第7・8章の13コードをSWC経由で描画し、改行・字下げ・横スクロールを検証。`CTAL_CODE_ORIGIN`指定時は起動済みNext.jsの実ページ4ケースも検証
- `e2e/quality-is-free-layout.e2e.ts` / `tests/helpers/source-module.ts` — SWC出力と原本の実スタイル比較、実SVG検証、任意の起動済みNext.js操作検証
- `app/istqb-ct-genai-study-guide/diagrams.ts` — 元配色・ノード・接続を保持するMermaid図13件
- `app/istqb-ct-genai-study-guide/` — Hero・Overview・Chapter1〜5・Roadmap・Referencesのカテゴリー別コンポーネント
- `tests/istqb-ct-genai-study-guide/page.test.tsx` — 本文・全DOM・表全セル・図の配置・全CSS・既存画面ハッシュ・アーカイブを照合する305テスト
- `app/beautiful-testing-guide/page.tsx` — Beautiful Testing全15セクションを元HTMLの本文・構造に沿って移行
- `app/iec-62304-beginner-guide/Diagram.tsx` — 共有Mermaidへの配線
- `app/iec-62304-beginner-guide/NavBar.tsx` — 階層目次・開閉・追従・親展開・解放
- `app/iec-62304-beginner-guide/Section01.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section02.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section03.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section04.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section05.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section06.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section07.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section08.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section09.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section10.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section11.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section12.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section13.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section14.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section15.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section16.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section17.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section18.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section19.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section20.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section21.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/Section22.tsx` — IEC 62304、原本のカテゴリー別本文
- `app/iec-62304-beginner-guide/diagrams.ts` — HTMLの18図・ダーク配色・縦配置
- `app/iec-62304-beginner-guide/iec-62304-beginner-guide.css` — 全65原本CSS・960px条件・共有CSS干渉補正
- `app/iec-62304-beginner-guide/page.tsx` — 22セクションの組み立て・metadata・800ウェイト
- `app/iec-62304-beginner-guide/toc.ts` — 全50リンクの原本順序
- `tests/iec-62304-beginner-guide/page.test.tsx` / `integration.test.ts` — 原本全量・操作・CSS・登録・原本ハッシュの351件
- `e2e/iec-62304-layout.e2e.ts` / `playwright.iec-62304.config.ts` — ビルド/サーバー不要の実スタイル比較・実SVGの80件
- `app/quality-is-free-guide/ChapterDiagram.tsx` — Quality Is Free、原本カードと共有Mermaidの接続
- `app/quality-is-free-guide/NavBar.tsx` — Quality Is Free、15目次リンク・開閉・追従・サーバー本文のchildrenスロット
- `app/quality-is-free-guide/Section00.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section01.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section02.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section03.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section04.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section05.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section06.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section07.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section08.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section09.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section10.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section11.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section12.tsx` — Quality Is Free、11チェックの状態・完了件数・原本装飾
- `app/quality-is-free-guide/Section13.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section14.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/Section15.tsx` — Quality Is Free、カテゴリー別の原本本文
- `app/quality-is-free-guide/diagrams.ts` — Quality Is Free、全8図の原本定義と紙色テーマ
- `app/quality-is-free-guide/page.tsx` — Quality Is Free、全16セクションの組み立てとmetadata
- `app/quality-is-free-guide/quality-is-free-guide.css` — Quality Is Free、全79原本CSSルール・960px条件・共有/残留CSS干渉補正
- `app/beautiful-testing-guide/beautiful-testing-guide.css` — 元の濃紺・ミント配色、表、目次、モバイル表示をページ内にスコープ
- `app/beautiful-testing-guide/NavBar.tsx` — 開閉、Escape、フォーカス復帰、`useScrollSpy`と`aria-current`対応の目次
- `app/beautiful-testing-guide/Checklist.tsx` — 全11項目のチェック状態・完了装飾・ライブ進捗を管理
- `app/beautiful-testing-guide/diagrams.ts` — 元ソース・元配色を保持するMermaid図8件
- `tests/beautiful-testing-guide/page.test.tsx` — 元HTML・固定インベントリ・65CSSルール・インタラクションを照合する265テスト
- `app/beyond-legacy-code-guide/page.tsx` — Beyond Legacy Codeの全9プラクティス実践ガイド（紙色・藍色テーマ）
- `app/beyond-legacy-code-guide/beyond-legacy-code-guide.css` — 元87CSSルール、900pxレスポンシブ条件、共有CSS干渉リセット
- `app/beyond-legacy-code-guide/NavBar.tsx` — 階層目次18リンク、位置ベース追従、モバイルinert・開閉・Escape・イベント解除
- `app/beyond-legacy-code-guide/diagrams.ts` — 元6図のソースとライト配色設定
- `app/beyond-legacy-code-guide/Hero.tsx` / `Background.tsx` / `WhatIsLegacy.tsx` / `ShuHaRi.tsx` / `Overview.tsx` — ヒーロー・背景・定義・守破離・全体像
- `app/beyond-legacy-code-guide/Practice1.tsx`〜`Practice9.tsx` — 各プラクティスを独立移行しカテゴリー別コミット
- `app/beyond-legacy-code-guide/Pitfalls.tsx` / `Roadmap.tsx` / `Summary.tsx` / `References.tsx` / `Footer.tsx` — つまずき・4週間計画・まとめ・参考資料・出典注記
- `tests/beyond-legacy-code-guide/page.test.tsx` — 501テスト。本文全文・DOM順序・全表セル・図構文と配置・CSS全宣言・目次動作・原本ハッシュを照合
- `docs/migration-inventory/beyond-legacy-code-guide.json` — 元HTML/MDのハッシュと全構成要素を固定記録
- `app/iso-29119-1-2022-guide/page.tsx` — ISO/IEC/IEEE 29119-1:2022 完全解説ガイド（新設カテゴリ「ISO 国際規格」）
- `app/iso-29119-1-2022-guide/iso-29119-1-2022-guide.css` — 元CSSルール、レスポンシブ条件、共有CSS干渉リセット
- `app/iso-29119-1-2022-guide/NavBar.tsx` — 階層目次69リンク、`scroll` イベント + `getBoundingClientRect()` によるアクティブ節追従、モバイルトグル対応のスティッキー目次
- `app/iso-29119-1-2022-guide/diagrams.ts` — 元19図のソースとMermaid構文設定
- `tests/iso-29119-1-2022-guide/page.test.tsx` — 129テスト。本文全文・DOM順序・全表セル・図構文と配置・CSS宣言・目次動作を完全検証
- `docs/migration-inventory/iso-29119-1-2022-guide.json` — 元HTML/MDのハッシュと全構成要素を固定記録
- `lib/navigation.ts` — ルートの Single Source of Truth（`NAV_ITEMS` 105 件・`CATEGORY_ORDER` / `CATEGORY_TITLES` / `CATEGORY_CODES` / `groupByCategory` / `matchesQuery`）。Header と index 画面が共用する
- `scripts/` — 移行支援ツール
  - `html-to-tsx.mjs` — HTML を JSX に変換し、プロジェクト共通のクラス名に置換
  - `extract-css.mjs` — HTML から `<style>` ブロックを抽出し、デザイントークン変数へ置換
- `archive/html-archive/` — 移行済みの元 HTML ファイルの保管場所（移行後にここへ移動。カテゴリ別サブディレクトリあり: `books/` `cicd/` `iso/` `tools/` 等）
- `archive/md-archive/` — 移行済みの元 Markdown ファイルの保管場所（カテゴリ別サブディレクトリあり: `books/` `iso/` `tools/` 等）

## 移行進行状況

移行作業の詳細（HEAD・次タスク・再開プロンプト）は `docs/MIGRATION_PROGRESS.md` を参照。

**未移行の静的ドキュメント（Markdown / HTML、プロジェクトルートに残存）:**

プロジェクトルート直下に 22 ファイルが残存している。内訳は本ファイル下部の
「移行状況テーブル > 未移行（プロジェクトルートに残存）」を参照（同一の表を
`docs/MIGRATION_PROGRESS.md` と `GEMINI.md` にも複製している）。

移行した場合は、HTML を `archive/html-archive/` へ、Markdown を `archive/md-archive/` へ移動し、
上記 3 ファイルの表から同時に削除する。

## 開発規約

### パッケージマネージャー: Bun-only（例外あり）

本リポジトリの依存関係インストール・スクリプト実行・テスト実行は **Bun に統一**する（`bun install` / `bun run <script>` / `bun test`）。`npm` / `yarn` / `pnpm` をプロジェクトのビルド・テスト用途で使用してはならない。

**唯一の例外: Appium のサーバー・ドライバー・プラグイン管理**

Appium は Node.js `^20.19.0 || ^22.12.0 || >=24.0.0` と npm 10 以上を動作要件として明示しており、公式にサポートされる導入手順が `npm` ベースであるため、以下のコマンドに限り Node.js / npm の使用を認める。

| 用途 | 許可されるコマンド |
|---|---|
| 前提バージョン確認 | `node -v` / `npm -v` |
| サーバー導入 | `npm install -g appium` |
| サーバーのバージョン確認 | `appium -v` |
| ドライバー管理 | `appium driver install` / `appium driver doctor` / `appium driver list --installed` |
| プラグイン管理 | `appium plugin install` / `appium plugin list --installed` |
| サーバー起動 | `appium --address 127.0.0.1`（`--use-plugins` を含む）を推奨構成とする。Appium の既定バインドアドレスは `0.0.0.0`（全インターフェース）であり、`--address 127.0.0.1` を明示しない `appium` 単体での起動は安全な起動方法として扱わない。リモートCIから接続させる場合に限り、プライベートネットワーク／VPN 内かつファイアウォールで接続元を限定した保護されたネットワーク上であることを確認したうえでバインドアドレスを広げる |

この例外は上記の Appium 関連コマンド（およびその前提となる `node` / `npm` のバージョン確認）のみに適用される。本プロジェクト自体の依存関係管理・スクリプト実行・Node ツールの実行（`bun install` / `bun run build` / `bun test` / `bun run e2e` 等）は、Appium 関連であるかどうかを境界として区別し、従来どおり Bun を使用すること。詳細な背景は [Appium-essentials-guide.md](Appium-essentials-guide.md) の「環境構築ステップバイステップ」節を参照。

### CSS 変更後のキャッシュリセット（必須）

`app/globals.css` または任意の `*.css` ファイルを変更した後は、`.next` キャッシュが古い CSS チャンクを返しダークモードが崩れることがある。

**症状**: `body` の `background-color` が透明になり、ページが白く表示される。

**対処**: CSS 変更後は必ずキャッシュを削除して dev サーバーを再起動する。

```bash
make css-reset   # .next 削除 + dev サーバー再起動（推奨）
# または手動で:
rm -rf .next && bun run dev
```

詳細は `.claude/rules/css-cache-reset.md` を参照。

### Markdown 標準化

変換スクリプトに頼るのではなく、Markdown ソースファイル自体が標準的な仕様に準拠していることを最優先します。

- **コミット前必須検証 (Gate Condition):** Markdownファイルを編集した場合は、コミットする前に必ず `.claude/skills/markdown-formatter/SKILL.md` の手順に従い、リント検証コマンド（`bun node_modules/markdownlint-cli/markdownlint.js <file_path>` など）を実行してエラーが 0 件であることを確認してください。
- 言語指定のないコードブロック（```）によるテキストの囲みは避け、引用（>）や適切な見出しを使用してください。
- 表や図（Mermaid）はコードブロック内に閉じ込めず、Markdown 上で直接レンダリング可能な形で記述してください。
- 共通の Markdown 整形ツール: `bun scripts/format-markdown.mjs <file>`

### Tailwind v4 テーマ構造

`app/globals.css` の `@theme {}` で CSS カスタムプロパティを定義:

- `--color-bg-*` — 背景色（primary / secondary / card）
- `--color-text-*` — テキスト色（primary / secondary / muted）
- `--color-accent-*` — アクセント色（blue / cyan / green / yellow / orange / red / purple / pink）
- `--color-unit/integration/functional/e2e` — テストレイヤー別の識別色
- `--font-display / --font-body / --font-mono` — フォントファミリー

Tailwind のアルファ修飾子（`bg-accent-cyan/10` 等）が正しく動作しない場合に備え、`@layer utilities` にフォールバック CSS を定義済み。

### ページ固有スティッキーナビの実装パターン

HTML から移行した `<nav>` がページ内アンカーリンク + `IntersectionObserver` スクロールスパイを持つ場合:

1. `app/<page-slug>/NavBar.tsx` を `'use client'` で作成し `useEffect` 内で `IntersectionObserver` を設定（クリーンアップ: `obs.disconnect()`）
2. CSS の `position: sticky` には `top: calc(60px + var(--disclaimer-height, 0px))`（Header 高さ + DisclaimerBanner 高さ）・`z-index: 40`（Header の `z-50` より低く）を設定
3. `page.tsx`（Server Component）先頭で `<NavBar />` をインポートして配置
4. アクティブリンクに `aria-current="location"` を付与（アクセシビリティ必須）:

   ```tsx
   <a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}>
   ```

### グローバルナビの拡張性（ガイド追加時の手順）

グローバルヘッダーのドロワーとガイドライブラリ index（`/`）は、どちらも
`lib/navigation.ts` の `NAV_ITEMS` から描画される。**新しいガイドページを追加したら、
`NAV_ITEMS` に 1 件追加するだけでドロワー・index 画面・検索の 3 箇所に反映される。**

```ts
{ href: '/new-guide',
  label: '新しいガイド',
  description: '1 行説明（80 文字以内。index のカード本文かつ検索対象）。',
  category: 'foundation' },
```

- `description` は必須。空文字・80 文字超はユニットテストで落ちる
- `category` は `NavCategory` の 9 種類から選ぶ。新カテゴリが必要な場合は
  `NavCategory` / `CATEGORY_ORDER` / `CATEGORY_TITLES` / `CATEGORY_CODES` の 4 箇所を同期し、
  `app/globals.css` の `[data-category='...']` にレベル色（`--level`）を追加する
- カテゴリ値はそのまま index のセクション ID になる（`/#istqb-advanced` で直リンク可能）
- **`e2e/pages.ts` にも同じ path を追加し `EXPECTED_PAGE_COUNT` を更新する。**
  片方だけ更新すると `tests/lib/navigation-e2e-sync.test.ts` が落ちる

**ドロワーの構造（項目数に対してスケールする設計）:**

| 要素 | 役割 |
|---|---|
| `.nav-drawer-pinned` | `/`（全ガイド一覧）への固定リンク。検索でも消えない |
| `.nav-drawer-search-input` | インクリメンタル検索。`matchesQuery` で label / description / href を部分一致 |
| `details.nav-drawer-section` | カテゴリ単位の折りたたみ。既定は現在ページのカテゴリのみ展開、検索中は全展開 |
| `summary.nav-drawer-heading` | `<h2>` を内包（HTML 仕様上 summary は heading 1 個を許容）。件数は `data-count` + CSS `::after` で表示しアクセシブル名を汚さない |

`summary` の `onClick` は `preventDefault()` してネイティブトグルを止め、開閉を React state
（`openCategories`）に一本化している。テストの決定論性を保つための意図的な設計であり、
Enter / Space も click を発火するためキーボード操作は失われない。

### ガイド index（`/`）のデザイン規約

index は「ISTQB の認定レベルは並列のカテゴリではなく階梯である」という事実を
デザインの芯に据えている。以下は装飾ではなく情報の符号なので、変更時は意味を壊さないこと。

| 要素 | 何を符号化しているか |
|---|---|
| ヒーローの階段（`.climb-stairs` の `.ladder-rung`） | 段の縦位置 = 資格レベルの高さ、バーの伸び = そのレベルのガイド数。各段は該当セクションへのアンカー |
| 段のインデント（`--step-indent`） | 1 段上がるごとに右へずれることが「登る」ことの符号。蹴上げ線（`::before`）の着地位置はここから幾何学的に決まる |
| バーの軌道幅（`--bar-col`） | 全段で固定。段をインデントしても量の比較が壊れないための固定幅であり、`1fr` にしてはならない |
| `data-track` | `certification`（ISTQB 5 レベル）と `practice`（CI/CD・ツール・書籍）の区別。後者は資格階梯の段ではないので階段に積まず「実務の棚」に置く |
| `CATEGORY_CODES` | ラベルの短縮版ではなく実際の資格略号（CTFL / CTAL / CT-\* / CTEL）。コード自体が資格体系を示す |
| レベルランプ（`--level`） | 無関係な 8 色ではなく寒色 → 暖色の 1 本のランプ。ランプ上の位置がレベルの高さを示す。実務トラックはランプ外の 1 色（`#7f96b8`）に統合する |
| セクションの並び順 | 基礎 → CTFL → CTAL → CT-\* → CTEL → 実務。学習の進み方そのもの |

- **レベルランプの定義は `app/globals.css` の `[data-category='...']` にある。** ドロワーも同じ
  `data-category` を出力するため、この 1 箇所で index とドロワーの色が一致する
  （`components/Header.tsx` 側に色の指定を書かないこと）
- `.climb-stairs` は `column-reverse`。文書順（＝カリキュラム順）を保ったまま BASE を最下段に置く。
  テストは `querySelectorAll` の文書順を検証するので、DOM 側で順序を反転してはならない
- 書体は index のみ Bricolage Grotesque（`--font-bricolage`）をディスプレイに使う。
  h1 は日本語なので実際に効くのはガイド総数の数字とラテン略号だけ。そこだけ声が切り替わる混植が狙いなので、
  `'Noto Sans JP'` を必ず後段に置く。1 ルートでしか使わないため `preload: false`
- 階段の日本語ラベル（`.ladder-label`）はホバー／フォーカス時のチップ。常時表示すると
  第二の階段になって蹴上げ線と干渉する。DOM からは外さないこと（リンクのアクセシブル名になる）

### CSS コンポーネントクラス

プレーンセレクタで以下を定義（`@layer` を使わず、セレクタ順で優先度を制御）:

| クラス | 用途 |
|---|---|
| `.card` / `.card-sm` | コンテンツカード |
| `.badge-unit/int/func/e2e/sec/perf/a11y/istqb` | テスト種別バッジ |
| `.code-block` / `.code-header` | コードブロック表示（`white-space` はデフォルト `normal`） |
| `.code-line` | コードブロック内の1行ラッパー（`white-space: pre`）。**`{"\n"}` で改行せず必ずこれを使う** |
| `.callout-info/warn/good/danger` | 注釈ボックス |
| `.pyramid-layer` / `.py-unit/int/func/e2e` | テストピラミッド図 |
| `.tab-btn` / `.tab-panel` | タブ UI |

### globals.css のグローバルスタイル干渉（サイドバー付き独自レイアウト）

サイドバー＋メインコンテンツの2カラムレイアウトを持つページでは、`globals.css` の汎用セレクターが干渉して**大きな余白崩れ**を引き起こす既知パターンがある。

**干渉する globals.css の定義（抜粋）:**

| セレクター | 干渉の症状 |
|---|---|
| `section { padding-top: 5rem }` | 全 `<section>` に 80px の上余白 → ヒーロー等が押し下がる |
| `.hero { min-height: 100vh; display: flex; justify-content: center }` | ヒーローが全画面高さになりコンテンツが中央に押し下がる |
| `main { max-width: 1100px; margin: 0 auto }` | `<main>` 幅が 1100px に制限・中央寄せになる |

**必須リセット（ページ固有 CSS に追加）:**

```css
/* globals の section { padding-top: 5rem } をリセット */
.my-page-layout section { padding-top: 0; }

/* globals の .hero { min-height: 100vh } をリセット */
.my-page-layout .hero { min-height: 0; display: block; padding-top: 0; }

/* globals の main { max-width: 1100px } をリセット */
.my-page-layout .main { max-width: none; margin: 0; }
```

**ヘッダーオフセットの二重カウント禁止:**

`layout-content` が既に `padding-top: 60px`（ヘッダー分）を持つため、ページ固有の layout wrapper に `margin-top: 60px` を追加してはならない。追加すると 60px の余白が二重になる。

詳細は `.claude/skills/html-to-nextjs-migration/SKILL.md` の Phase 3b を参照。

### テーブル文字色と globals.css 干渉リセット（CRITICAL GOTCHA）

`globals.css` に定義された要素セレクタ（特に `td { color: var(--color-text-secondary); }`（`#8ea3c3`、薄い青灰色）、`th { white-space: nowrap; }`、`td strong { color: var(--color-text-primary); }`、`tr:hover td` 等）が、ページ固有のテーブルに干渉して文字色を薄くさせたりレイアウトを崩す重大な不具合が頻発します。
ページ固有 CSS では必ず `.my-page-layout tbody td, .my-page-layout td` に対して `color: var(--ink) !important;` および `font-size: 1rem !important;` を指定し、`thead th`、`td strong`、`td code`、`tbody tr:hover td` などの完全リセットを適用してください。

### 構成要素インベントリ作成と網羅的テストスイート（抜け漏れ防止の絶対ルール）

移行着手前に元HTMLの全構成要素（H1〜H4見出し、全TOCリンク、全Mermaid図解、全テーブル、全コードブロック、全コールアウト・カード、全参考文献）を棚卸しする「構成要素インベントリ」を作成してください。
Redフェーズのテストスイート（`tests/<page-slug>/page.test.tsx`）では、上記インベントリの全項目を1対1でアサーションとして網羅し、デザインや図解・表の抜け漏れを機械的にゼロにしてください。

### 開発・デバッグ用スクリプトの管理ルール

一時的に作成する開発・調査用スクリプトと、永続的にリポジトリに残すスクリプトを厳密に区別して管理します。

- **一時的なスクリプト (デバッグ・調査用):** ログ解析やデータ抽出などで一時的に作成するスクリプト、およびそこから生成される一時ファイルは、作業完了後またはコミット前に必ずリポジトリから物理削除（`rm`）し、絶対にコミットに含めない。特にローカル絶対パス（PII）を含んでいるものは、即時削除を徹底する。作成する際にはユーザーに「一時的なものである」ことを明確に報告する。
- **永続的なスクリプト (機能・テスト用):** プロジェクトの機能、テスト、ビルド、CI/CDで永続的に使用するスクリプトは、作成時に役割と配置場所を明記して報告する。当然、コミットされるすべてのファイルに対して PII やローカル絶対パスが混入していないことを事前に機械的（`git diff --cached` 走査など）に検証する。

## 移行作業ルール

### Faithful Migration（忠実移行）

HTML の全コンテンツ（リスト項目・コードブロック・テーブル・callout・図・SVG）を page.tsx に転写すること。要約・省略・縮約は禁止。

### セッション終了前チェックリスト

1ページ移行の `git commit` 完了直後、次の HTML を `Read` し始める前に必ず実施する（ゲート条件）:

```bash
bun run lint    # ESLint エラーなし
bun test        # ユニットテスト成功
```

> **本番ビルド検証の制約:** サンドボックス環境では `bun run build` を直接実行しない。
> ビルド検証が必要な場合は、エージェントが自律実行するのではなく**ユーザーに実行を依頼**し、
> 結果の共有を待つこと（`docs/MIGRATION_PROGRESS.md` の「ビルド状態」欄もこの方針に従う）。

その後 `docs/MIGRATION_PROGRESS.md` を更新してコミット。手順は `.claude/rules/migration-progress-sync.md` を参照。

### 外部リンク

すべての外部リンクに `target="_blank" rel="noopener noreferrer"` を付与する。

### テストカバレッジ可視化

プロジェクト自身のテストカバレッジを 1 ファイルで把握できるスタンドアロン HTML を追加した。

- 追加ファイル: [docs/coverage-dashboard.html](coverage-dashboard.html)（単一ファイル、外部依存は Google Fonts のみ）
- 構成: KPI 概要 / 11 カテゴリ × 6 種別マトリクス / 23 ページ別カバレッジ / 既存 13 テストのインベントリ / P0-P3 ネクストアクション / ISTQB テストレベル整合表
- 数値根拠: ページ 10/23 テスト済（43%）・コンポーネント 1/3・lib 2/2・scripts 0/5・CI 0 パイプライン
- 更新運用: `<script>` 内の `DATA` 定数を編集して再描画. HTML 構造の変更不要
- コミット: `322ca53 docs(coverage): add self-referential test coverage dashboard`

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

## 次回セッションでの再開プロンプト

```text
コンテキスト:
- **移行対象ガイドの移行完了**: 「移行状況テーブル」に掲載した HTML / Markdown の Next.js App Router への移行は完了しています。
- 合計 105 ルート（ガイドライブラリ index + 104 ガイド）が `lib/navigation.ts` / `e2e/pages.ts` で管理されています。
- ただしプロジェクトルートには App Router に未登録の静的ドキュメント（書籍ガイド、`Sonarqube.html`、ISO 各規格など）が残っています。これらは現時点でルート登録対象外の静的ドキュメントとして扱っており、ルート化するかどうかは未決定です。
- 全体テストすべて成功。ページ単体、ナビゲーション、Mermaid契約も全て成功。
- 新規追加「ISO 11179-1 メタデータレジストリガイド」（`/iso-11179-1-2023-guide`）を登録済み。次の作業として、同ページの目視確認をユーザーに依頼する。
- 最新 HEAD は `docs/MIGRATION_PROGRESS.md` の「現在地」テーブルを参照（ここに固定値を書かない）。

【ビルド検証の制約】
サンドボックス環境では `bun run build` を直接実行しない。ビルド確認が必要な場合はユーザーに実行を依頼すること。
ローカル検証は `bun run lint` と `bun test` で行う。

【指示】
登録済みガイドの Next.js 移行が完了しました。今後の品質向上、E2Eテストの拡充、または新しい機能追加について指示を仰ぎます。
```

---

## 完了: ハンバーガーメニュー化（TDD）

...

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

### ISO 9075-1配置

- `app/iso-9075-1-guide/page.tsx` — ページ構成とメタデータ
- `app/iso-9075-1-guide/iso-9075-1-guide.css` — 原本CSSと干渉補正
- `app/iso-9075-1-guide/Section00.tsx`〜`Section12.tsx` — 原本のヒーローと12章
- `app/iso-9075-1-guide/NavBar.tsx` / `toc.ts` — 階層目次と追従
- `app/iso-9075-1-guide/CodeExample.tsx` — SQLの構文色と改行
- `app/iso-9075-1-guide/Diagram.tsx` / `diagrams.ts` — 原本由来の9図
- `tests/iso-9075-1-guide/page.test.tsx` / `integration.test.ts` — 225件の原本・登録・アーカイブ契約
- `e2e/iso-9075-layout.e2e.ts` / `playwright.iso-9075.config.ts` — ビルド・サーバー不要の44件

## 2026-10-22: ISO/IEC 11179-1:2023メタデータレジストリガイドの移行

- 移行先は`/iso-11179-1-2023-guide`。国際規格カテゴリーへ追加し、ナビ・E2E一覧を105ルートへ同期。
- 全58見出し・階層目次57リンク・32表の全セル・14図・YAMLコード1例・コールアウト15件・外部リンク21件・学習チェック6項目・ヒーロー・全本文・フッターを固定インベントリで出現順に照合。
- 原本CSS全80ルールと960px条件を保存。ダーク配色、ヒーロー装飾、固定サイドバー、表の交互背景、YAMLの全構文トークンと改行・空行・字下げを保持し、共有CSSと残留CSSの干渉を補正。
- 図のラベル・ノード形状・接続・矢印・太線・点線・グループ名をHTML内の実SVGから抽出。Markdownと異なるグループ名や接続はHTMLを採用。クラス図・シーケンス図を含む全14図を共有Mermaidで描画し、実SVGの意味・配色と横スクロール端を検証。
- 目次の開閉・リンク選択・Escape・フォーカス復帰・全57アンカーのObserver追従と解除、チェック6項目の全選択・全解除・件数・進捗を検証。Next.js/SWCの開発・本番変換でも全文・構造とYAMLの改行・字下げを照合。
- Red先行、CSS、図、目次、YAML、チェック、ヒーロー、導入、STEP 1〜10、付録A〜C、ページ構成、登録、アーカイブ、補正、仕様書を分割コミット。本文は1カテゴリーずつ実装→原本照合→コミットを実行。各コミット直前にPII検査。
- 原本HTMLは`archive/html-archive/iso/Iso-11179-1-2023-guide.html`、MDは`archive/md-archive/iso/Iso-11179-1-2023-guide.md`へ同名で移動し、Git追跡とSHA-256一致を検証。
- 検証はnpm経由。対象325件、全体5627件（133ファイル）、ビルド・サーバー不要のブラウザー64件（4幅×14図＋CSS読込2順序×4幅）、lint、対象型検査が成功。全体型検査には既存テストの型エラーが残存。本番ビルド未実施、目視確認はユーザー担当。

### ISO 11179-1配置

- `app/iso-11179-1-2023-guide/page.tsx` — ページ構成とメタデータ
- `app/iso-11179-1-2023-guide/iso-11179-1-2023-guide.css` — 原本CSSと干渉補正
- `app/iso-11179-1-2023-guide/Section00.tsx`〜`Section14.tsx` — ヒーロー・導入・STEP 1〜10・付録A〜C
- `app/iso-11179-1-2023-guide/NavBar.tsx` / `toc.ts` — 階層目次57リンクと追従
- `app/iso-11179-1-2023-guide/Checklist.tsx` — 設計チェック6項目と進捗
- `app/iso-11179-1-2023-guide/CodeExample.tsx` — 原本のYAML構文色と改行
- `app/iso-11179-1-2023-guide/Diagram.tsx` / `diagrams.ts` — 原本由来の14図
- `tests/iso-11179-1-2023-guide/page.test.tsx` / `integration.test.ts` — 328件の原本・操作・登録・アーカイブ契約
- `e2e/iso-11179-layout.e2e.ts` / `playwright.iso-11179.config.ts` — ビルド・サーバー不要の64件
