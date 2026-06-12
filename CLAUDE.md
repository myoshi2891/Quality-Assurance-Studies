# CLAUDE.md

Updated 2026-06-11

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
bun test             # ユニットテスト (bun test, 154 specs)
```

### E2E テスト (Playwright)

```sh
bun run e2e:install  # 初回のみ: chromium バイナリ取得 (~150 MB)
bun run e2e          # 全 33 ルートのスモーク E2E (webServer 自動起動)
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
- `app/page.tsx` — ホームページ
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
- `app/software-testing-methodologies-guide.css` — テスト手法ガイド固有スタイル
- `app/software-testing-methodologies-guide/page.tsx` — テスト手法ガイドページ
- `app/istqb-ctal-tae-complete-guide.css` — テスト自動化(CTAL-TAE)ガイド固有スタイル
- `app/istqb-ctal-tae-complete-guide/page.tsx` — テスト自動化(CTAL-TAE)ガイドページ
- `app/istqb-ctal-ta-complete-guide/istqb-ctal-ta-complete-guide.css` — テストアナリスト(CTAL-TA)ガイド固有スタイル
- `app/istqb-ctal-ta-complete-guide/page.tsx` — テストアナリスト(CTAL-TA)ガイドページ
- `app/istqb-ctal-ta-complete-guide/NavBar.tsx` — CTAL-TA ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
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
- `components/Header.tsx` — 共有 React コンポーネント（クライアントコンポーネント。現在のパスに応じたアクティブリンク表示をサポート。高さ 60px・`fixed`・`z-50`）
- `scripts/` — 移行支援ツール
  - `html-to-tsx.mjs` — HTML を JSX に変換し、プロジェクト共通のクラス名に置換
  - `extract-css.mjs` — HTML から `<style>` ブロックを抽出し、デザイントークン変数へ置換
- `/html-archive/` — 移行済みの元 HTML ファイルの保管場所（移行後にここへ移動）

## 移行進行状況

移行作業の詳細（HEAD・次タスク・再開プロンプト）は `docs/MIGRATION_PROGRESS.md` を参照。

**未移行 HTML（プロジェクトルートに残存）:**

| ファイル | 対応する予定ルート | 状態 |
|---|---|---|
| なし | - | ✅ 全て完了 |

移行完了後は `html-archive/` へ移動し、上記テーブルから削除する。

## 開発規約

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

- **コミット前必須検証 (Gate Condition):** Markdownファイルを編集した場合は、コミットする前に必ず `.claude/skills/markdown-formatter/SKILL.md` の手順に従い、リント検証コマンド（`node node_modules/markdownlint-cli/markdownlint.js <file_path>` など）を実行してエラーが 0 件であることを確認してください。
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
bun run build   # ビルド成功を確認
bun run lint    # ESLint エラーなし
```

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
| `istqb-ct-pt-complete-guide.html` | `/istqb-ct-pt-complete-guide` | ✅ NavBar あり |
| `istqb-ct-act-complete-guide.html` | `/istqb-ct-act-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mat-complete-guide.html` | `/istqb-ct-mat-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-sec-complete-guide.html` | `/istqb-ct-sec-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-ste-complete-guide.html` | `/istqb-ct-ste-complete-guide` | ✅ NavBar あり |
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
| `modern-software-testing-complete-guide-2025.html` | `/` (ホームページ) | ✅ |
| `software-testing-methodologies-guide.html` | `/software-testing-methodologies-guide` | ✅ |
| `unit-testing-guide.html` | `/unit-testing-guide` | ✅ |

### 未移行（プロジェクトルートに残存）

| ファイル | 予定ルート | 状態 | 備考 |
|---|---|---|---|
| (なし) | | | |

## 既知の留保事項

- `istqb-ctfl-at-complete-guide` と `bdd-testing-guide` / `ai-test-guide` は html-archive/ に元 HTML が存在しない（最初から Next.js で作成）

## 次回セッションでの再開プロンプト

```text
コンテキスト:
- 最新 HEAD: `0896a34`
- **全ガイド移行完了**: プロジェクトルートに存在した全34ルート分のHTMLおよびMarkdownファイルの Next.js App Router への移行が完全に終了しました。
- 合計 34 ルート（ホーム + 33 ガイド）が管理されています。
- 各種テスト（ユニット、型チェック、ESLint）はすべて最新の構成に同期され、通過しています。

【指示】
全ガイドの Next.js 移行が完了しました。今後の品質向上、E2Eテストの拡充、または新しい機能追加について指示を仰ぎます。
```

---

## 完了: ハンバーガーメニュー化（TDD）

...
