# Mermaid 図面およびテキスト表示不具合 — 解決済みレポート

## ステータス

**解決済み（2026-06-10）**。`components/Mermaid.tsx` の外側 DOMPurify サニタイズを撤去して修正完了。

## 1. 発生していた問題

Next.js（App Router）へ移行・追加された各種学習ガイドページにおいて、Mermaid コンポーネントで描画される図表内のテキストが表示されない、または表示が著しく崩れる現象が発生していた。

具体的には、ダークモードの背景において、ノード内のテキストが背景と同化（黒または透明化）して読み取れず、また矢印や枠線のスタイルも適用されていなかった。

## 2. 根本原因

直近のコミット（`858160b`）で XSS 対策として `components/Mermaid.tsx` に `DOMPurify.sanitize` による**外側サニタイズ**が導入された。続く `b05183b` で `ADD_TAGS: ['style']` を追加したが解消しなかった。

真因は **`USE_PROFILES: { svg: true, svgFilters: true }`** で適用していた点にある。この SVG プロファイルは HTML 要素を許可しないため、以下が同時に発生していた。

- Mermaid v11 は `securityLevel: 'loose'` + `htmlLabels: true` でノードラベルを `<foreignObject>` 内の `<div class="nodeLabel">`（＝HTML）として描画する。SVG プロファイルがこの `div` / `span` を除去 → **ノード内テキストが消失**。
- ノード/エッジ/テキストの色を与える `<style>` ブロックが、SVG プロファイル下で `<style>` 要素ごと除去される → **色・矢印・枠線が既定（黒）に戻る**。

`ADD_TAGS: ['style']` で `<style>` タグの許可を試みても、`USE_PROFILES` の制約下では除去が継続していた。

### なぜ外側サニタイズ自体が不要だったか

図表は全て開発者がソースに直書きした静的定数（`DIAGRAM_*` 等）であり、外部入力は一切存在しない。XSS の攻撃面が無いため、外側 DOMPurify の実セキュリティ価値はほぼゼロだった。加えて Mermaid v11 は内部に DOMPurify を同梱しており、必要に応じて自前で出力を無害化できる。

## 3. 適用した修正

`components/Mermaid.tsx` から外側 DOMPurify サニタイズ（および `dompurify` の import）を撤去し、`DOMParser` によるサイズ調整を施した SVG をそのまま `setSvgStr` で描画するように変更した。`securityLevel: 'loose'` / `htmlLabels: true` / `theme: 'dark'` の初期化は維持し、htmlLabels・改行・ダークテーマ色を完全に復元した。

- 成功分岐: `XMLSerializer` で直列化した `newSvg` を直接描画。
- パーサーエラー分岐: Mermaid の生出力 `svg` をそのまま描画。

## 4. 退行防止（テスト）

`tests/components/Mermaid.test.tsx` に、`<style>` ブロックと `<foreignObject>` 内 HTML ラベルを含む実出力に近い SVG をモックで返すケースを追加した。

happy-dom は SVG 内 `<style>` 内容や `foreignObject` の HTML 子要素について `DOMParser` / `XMLSerializer` のラウンドトリップを完全再現できないため、ユニットテストでは機械的に確実な「**`<style>` 要素が除去されないこと**」のみを検証する。色・ラベル文字列の可視性は実ブラウザでの目視（Playwright 等）で担保する。

## 5. 検証結果

- `bun test` — 全パス（`<style>` 要素保持の退行スペックを含む）。
- `bun run build` / `bun run lint` — エラーなし。
- 実ブラウザでの目視 — ノード内テキスト可視・ノード色・矢印・枠線の適用を確認済み。

## 6. 影響を受けていた画面

Mermaid コンポーネントを使用する全ガイドページ（CT-GaMe・CT-AuT・CTAL-TTA 等、計 9 ファイル）。修正はコンポーネント内の局所変更のみで、各ページの編集は不要だった。
