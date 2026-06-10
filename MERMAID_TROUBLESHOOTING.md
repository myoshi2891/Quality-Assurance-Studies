# Mermaid図面およびCSS表示不具合の精査報告書

## 1. 発生している問題

Next.js（App Router）へ移行・追加された各種学習ガイドページにおいて、Mermaidコンポーネントで描画される図表内のテキストが表示されない、または表示が著しく崩れる現象が発生しています。

具体的には、ダークモードの背景において、ノード内のテキストが背景と同化（黒または透明化）して読み取れず、また矢印や枠線のスタイルも適用されていません。

## 2. 根本原因とDOMPurifyによるサニタイズの影響

直近のプルリクエスト／コミットにおいて、XSS（クロスサイトスクリプティング）脆弱性を防止するために `components/Mermaid.tsx` に対し `DOMPurify.sanitize` によるサニタイズ処理が導入されました。

しかし、DOMPurifyはデフォルト仕様でセキュリティ確保のため、SVG内の `<style>` タグやインラインの `style` 属性を危険な要素として一括除去します。

Mermaidは生成するSVGの内部に描画用スタイルシート（フォント指定、テキスト色、背景色、矢印やノードの枠線等）を `<style>` タグとして内包しており、また各要素に `style` 属性を付与しています。このサニタイズ処理によってスタイル定義および属性が消失し、表示不具合を引き起こしています。

## 3. 試行された対策とその結果

`components/Mermaid.tsx` において、`DOMPurify.sanitize` を実行する際のオプション設定に以下を追加しました。

- `ADD_TAGS: ['style']`（`<style>` タグの保持を許可）

### 結果

上記オプションを追加したものの、依然としてノード内のテキストが表示されない（または表示が崩れる）状態が続いています。

### 技術的な推察・仮説

1. **`<style>` タグ内部のCSSテキストの消失**:
   `ADD_TAGS: ['style']` を指定してタグ自体を許可しても、DOMPurifyがパース時に `<style>` タグの内部テキスト（CSSルール）をサニタイズ対象として空にする、またはパースエラーによって中身が失われている可能性があります。
2. **インライン `style` 属性の除去**:
   DOMPurifyはデフォルトでインラインの `style` 属性を除去するため、`ADD_ATTR: ['style']` や `ADD_ATTR: ['class']` を明示的に追加しない限り、個別要素のインラインスタイルが適用されません。
3. **`USE_PROFILES` の制限**:
   `USE_PROFILES: { svg: true, svgFilters: true }` を使用している場合、SVGプロファイル固有の制限により、HTML要素として扱われる `<style>` タグや特定の属性のハンドリングが意図通りに動作していない可能性があります。

## 4. 今後の調査および対応が必要な項目

他者がこの問題の修正を引き継ぐにあたり、以下の調査・検証が必要です。

- **DOMPurifyサニタイズ後のDOM比較**:
  サニタイズを適用する前のSVGソース（`newSvg`）と、サニタイズ適用後のHTMLソース（`sanitizedSvg`）をコンソールに出力し、どの要素（`<style>` 等）や属性（`style`, `class` 等）が具体的に削除・改変されているかを正確に特定すること。
- **DOMPurifyオプションの調整**:
  `ADD_ATTR: ['style', 'class']` などの属性の許可設定の追加、または `FORCE_BODY: true` などのパース関連オプションの組み合わせを検証すること。
- **代替サニタイズ手法の検討**:
  DOMPurifyのフック機能（`afterSanitizeAttributes` など）を用いた安全な属性・タグの個別許可、あるいはSVG専用のセキュアなパーサーの導入を検討すること。

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
