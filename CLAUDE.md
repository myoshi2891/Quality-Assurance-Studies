# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

「現代ソフトウェアテスト完全ガイド 2025」— ISTQB 準拠の QA 学習用単一ページ静的サイト。

**スタック**: Vite + Tailwind CSS v4 + TypeScript（strict）

> このプロジェクトは Vite を使用しています。グローバルの CLAUDE.md にある「Don't use vite」ルールはここには適用されません。

## コマンド

```sh
bun install          # 依存関係インストール
bun run dev          # 開発サーバー起動（HMR あり）
bun run build        # 本番ビルド（dist/ へ出力）
bun run preview      # ビルド成果物をローカルプレビュー
```

## アーキテクチャ

現在、ソースファイルは 2 つのみ:

- `index.html` — ページ全体のマークアップ（セクション単位でコメント区切り）
- `input.css` — Tailwind v4 の `@theme` ブロックでデザイントークンを定義し、`@layer base / components / utilities` でコンポーネントスタイルを記述

JavaScript/TypeScript ソースファイルは存在しない（将来追加する場合は `<script type="module" src="./main.ts">` で `index.html` からインポートする）。

### Tailwind v4 テーマ構造

`input.css` の `@theme {}` で CSS カスタムプロパティを定義:

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
