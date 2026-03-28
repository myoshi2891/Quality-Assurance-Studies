# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

「現代ソフトウェアテスト完全ガイド 2025」— ISTQB 準拠の QA 学習用静的サイト。

**スタック**: Next.js (App Router) + Tailwind CSS v4 + TypeScript（strict）

## コマンド

```sh
npm install          # 依存関係インストール
npm run dev          # 開発サーバー起動（HMR あり）
npm run build        # 本番ビルド（.next/ へ出力）
npm start            # ビルド成果物をプロダクションモードで起動
npm run lint         # ESLint 実行
```

## アーキテクチャ

Next.js App Router 構成:

- `app/layout.tsx` — ルートレイアウト（メタデータ、グローバルフォント設定）
- `app/globals.css` — Tailwind v4 の `@theme` ブロックでデザイントークンを定義し、`@layer base / components / utilities` でコンポーネントスタイルを記述
- `app/page.tsx` — ホームページ
- `app/ai-test-guide/page.tsx` — AI テストガイドページ
- `app/ai-guide.css` — AI テストガイド固有スタイル
- `app/unit-testing-guide/page.tsx` — ユニットテスト完全ガイドページ
- `app/unit-testing.css` — ユニットテストガイド固有スタイル
- `components/` — 共有 React コンポーネント（Header など）

### Tailwind v4 テーマ構造

`app/globals.css` の `@theme {}` で CSS カスタムプロパティを定義:

- `--color-bg-*` — 背景色（primary / secondary / card）
- `--color-text-*` — テキスト色（primary / secondary / muted）
- `--color-accent-*` — アクセント色（blue / cyan / green / yellow / orange / red / purple / pink）
- `--color-unit/integration/functional/e2e` — テストレイヤー別の識別色
- `--font-display / --font-body / --font-mono` — フォントファミリー

Tailwind のアルファ修飾子（`bg-accent-cyan/10` 等）が正しく動作しない場合に備え、`@layer utilities` にフォールバック CSS を定義済み。

### CSS コンポーネントクラス

`@layer components` で以下を定義（Tailwind ユーティリティより優先度が低い）:

| クラス | 用途 |
|---|---|
| `.card` / `.card-sm` | コンテンツカード |
| `.badge-unit/int/func/e2e/sec/perf/a11y/istqb` | テスト種別バッジ |
| `.code-block` / `.code-header` | コードブロック表示 |
| `.callout-info/warn/good/danger` | 注釈ボックス |
| `.pyramid-layer` / `.py-unit/int/func/e2e` | テストピラミッド図 |
| `.tab-btn` / `.tab-panel` | タブ UI |
