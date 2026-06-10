# Mermaid図面およびCSS表示不具合の精査報告書

## 1. 発生している問題

Next.js（App Router）へ移行・追加された各種学習ガイドページにおいて、Mermaidコンポーネントで描画される図表内のテキストが表示されない、または表示が著しく崩れる現象が発生しています。

## 2. 根本原因の特定

直近のプルリクエスト／コミット（コミットID: `7c2246a` 付近）において、XSS（クロスサイトスクリプティング）脆弱性を防止するために `components/Mermaid.tsx` に対し `DOMPurify.sanitize` によるサニタイズ処理が導入されました。

しかし、DOMPurifyはデフォルト仕様でセキュリティ確保のため、SVG内の `<style>` タグやインラインの `style` 属性を危険な要素として一括除去します。

Mermaidは生成するSVGの内部に描画用スタイルシート（フォント指定、テキスト色、背景色、矢印やノードの枠線等）を `<style>` タグとして内包しているため、このサニタイズ処理によってスタイル定義が完全に消失し、結果として以下の不具合が発生しました。

- ノード内のテキストが不可視化（デフォルトの黒文字になり、ダークモードの背景色と一体化して見えなくなる）
- 矢印や枠線の配色崩れ

## 3. 現在の対応状況と解決アプローチ

`components/Mermaid.tsx` において、`DOMPurify.sanitize` を実行する際のオプション設定を拡張し、SVG内部のスタイルシート定義が除去されないよう修正を行いました。

具体的には、`DOMPurify.sanitize` の設定に以下を追加しました。

- `ADD_TAGS: ['style']`（`<style>` タグの保持を許可）

これにより、Mermaid図面が内包する CSS 定義が破棄されずにレンダリングされるようになります。

## 4. これからの検証項目

- **表示の復旧検証**: `/istqb-ctfl-at-complete-guide` および `/istqb-ctal-tta-complete-guide` のMermaid図表が、意図通りカラーおよびテキストを表示しているかブラウザで確認します。
- **インラインスタイルの確認**: `style` 属性や `class` 属性の除去有無を確認し、もし必要であれば `ADD_ATTR: ['style', 'class']` なども追加で適用して完全に再現できるか検証します。

## 5. 影響を受ける画面

Mermaidコンポーネントを使用している、Next.js上のすべてのガイドページ（約33ルート中、以下を含む主要ページ）。

- `/istqb-ctfl-at-complete-guide`（アジャイルテスター）
- `/istqb-ctal-tta-complete-guide`（テクニカルテストアナリスト）
- `/istqb-ct-ai-complete-guide`（AIテスト完全ガイド）
- `/istqb-ct-genai-complete-guide`（GenAIテスト完全ガイド）
- `/istqb-ct-mbt-complete-guide`（モデルベーステスト）
- `/istqb-ct-pt-complete-guide`（パフォーマンステスト）
- `/istqb-ct-ut-complete-guide`（ユーザビリティテスト）
- `/istqb-ct-sec-complete-guide`（セキュリティテスト）
- `/istqb-ct-game-complete-guide`（ゲームテスト）
- `/ai-test-guide`（AIテスト基礎）
