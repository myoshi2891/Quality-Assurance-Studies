# CLAUDE.md

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
```

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
- `app/istqb-ctal-ta-complete-guide.css` — テストアナリスト(CTAL-TA)ガイド固有スタイル
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
- `app/istqb-ct-pt-complete-guide.css` — パフォーマンステスト(CT-PT)ガイド固有スタイル
- `app/istqb-ct-pt-complete-guide/page.tsx` — パフォーマンステスト(CT-PT)ガイドページ
- `app/istqb-ct-pt-complete-guide/NavBar.tsx` — CT-PT ページ固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）
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
| なし | - | 全て完了 |

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
