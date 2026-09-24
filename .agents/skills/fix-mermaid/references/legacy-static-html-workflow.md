# レガシー: 静的 HTML 内 Mermaid の手直し（archive/html-archive/ 専用）

このプロジェクトは全ページ Next.js App Router へ移行済み（`docs/MIGRATION_PROGRESS.md`）。
以下は `archive/html-archive/` 配下に凍結されている元 HTML ファイルを例外的に直接編集する
必要が生じた場合のみの手順。新規ページや `.tsx` の編集では使わない
（SKILL.md 本文の「現行アーキテクチャ」を参照）。

> **注記**: 過去バージョンのこのスキルは `apply_render_pipeline.ts` / `restore_diagrams.ts` という
> 自動化スクリプトを案内していたが、これらは現在リポジトリに存在しない（HTML 静的パイプライン自体が
> 廃止されたため削除された）。実在するのは `scripts/fix_mermaid.ts`（インデント汚染・行分断の修正）のみ。
> 存在しないスクリプトを実行しようとして時間を浪費しないこと。

## 対象

- `.html` ファイル内の `<div class="mermaid">` ブロック（`archive/html-archive/` 配下のみ）
- `.md` ファイル内の ` ```mermaid ` ブロック（`archive/md-archive/` 配下、および GitHub / VS Code の
  Markdown プレビューなど「mermaid ブロックをそのまま描画するレンダラー」向けの素の Markdown のみ。
  Next.js ページの `.tsx` 内テンプレートリテラルは対象外 — SKILL.md 本文を参照）

## よくある破壊パターン（フォーマッタ由来）

HTML/コードのフォーマッタ（Prettier 等）が `<div class="mermaid">` 内のインデントを保存のたびに
書き換え、Mermaid 構文を壊すことがある:

- 14スペース等のインデントが Mermaid コンテンツに混入する
- 長いノードラベルが行分断される（`A["テキスト` と `続き"]` に分かれる）
- 複数ステートメントが1行に連結される（`graph TD A["x"] B["y"] A --> B`）

**恒久対策**: `<div class="mermaid">` に直接ソースを書かず、JS テンプレートリテラルへ移管する
（IDE のフォーマッタが触れない場所に置く）:

```html
<!-- ❌ Prettier が保存時にインデントを付加して破壊する -->
<div class="mermaid">
graph LR
A --> B
</div>

<!-- ✅ JSテンプレートリテラル方式（IDEが一切触れない） -->
<div id="diag-0"></div>
<script>
const DIAGRAMS = {
  'diag-0': `graph LR
A --> B`,
};
mermaid.initialize({ startOnLoad: false });
(async () => {
  for (const [id, src] of Object.entries(DIAGRAMS)) {
    const { svg } = await mermaid.render('svg-' + id, src);
    document.getElementById(id).innerHTML = svg;
  }
})();
</script>
```

この方式ではソースがフォーマッタの整形対象から外れるため、保存のたびにインデントや改行が書き換えられることがなくなる。

インデント汚染・行分断のみを機械修正したい場合は既存スクリプトを使う:

```bash
bun run .claude/skills/fix-mermaid/scripts/fix_mermaid.ts <file>
```

## ブラウザレンダラーで Syntax Error を起こす文字・構文

| 箇所 | 問題のある記述 | 対処 |
| ------ | --------------- | ------ |
| `subgraph` ラベル | 丸括弧 `()` を含む | 削除または別表現に置換 |
| `subgraph` ラベル | 絵文字（`🌐` `🖥️` 等） | 削除 |
| `participant ... as` | 絵文字（`👤` `⚡` 等） | 削除 |
| エッジラベル `\|...\|` | 先頭スラッシュ `\|/command\|` | スラッシュを除去 |
| ノードラベル `["..."]` | 全角波ダッシュ `〜` | `から` 等の日本語に置換 |
| ノードラベル `["..."]` | スラッシュ `path/to` | `-` またはスペースに置換 |
| 菱形ノード `{}` | クォートなし日本語 `{新しいファイル}` | `{"新しいファイル"}` とクォートする |
| `quadrantChart` の座標 / テキスト | ダブルクォーテーションなしの文字列 | `""` で囲む (例: `"CEO/CTO": [0.8, 0.9]`) |
| 全ての図解 (全般) | 全角丸括弧 `（）` | 半角丸括弧 `( )` に置換する |
| 全ての図解 (全般) | 全角ダッシュ `―` | 半角ハイフン `-` に置換する |
| 全ての図解 (全般) | 全角コロン `：` | 半角コロン `:` に置換する |

## SVG サイズ制御（静的 HTML 版）

Mermaid は SVG 要素に絶対ピクセル値の `width`/`height` 属性を付与する。`mermaid.render()` 後に必ず除去する。

```js
svgEl.removeAttribute('width');
svgEl.removeAttribute('height');
svgEl.style.maxWidth = '100%';
svgEl.style.height = 'auto';

// 幅は viewBox の第3要素（自然 px 幅）から取得する。viewBox が無い/壊れている場合
// （4 値でない・有限数でない値を含む・幅または高さが 0 以下）は幅を設定しない
// （width を付けないまま maxWidth:100% + height:auto で描画させる）。
const viewBox = svgEl.getAttribute('viewBox');
const parts = viewBox ? viewBox.trim().split(/[\s,]+/).map(Number) : [];
if (parts.length === 4 && parts.every(Number.isFinite) && parts[2] > 0 && parts[3] > 0) {
    svgEl.style.width = `${parts[2]}px`; // viewBox 由来の自然 px 幅 + maxWidth:100% の新ルールに準拠
}
```

CSS にもフォールバックを追加する:

```css
.mermaid-wrap svg {
  max-width: 100% !important;
  height: auto !important;
}
```

**SVG 幅の鉄則**: `width:'100%'` も `width:'auto'`（viewBox のみで intrinsic サイズを持たない SVG では
コンテナ全幅へ伸びる）も、小さい `flowchart LR` 図を異常拡大させるため使わない。

## シーケンス図・状態遷移図の下部見切れ（クリッピング）対策

Mermaid のシーケンス図（`sequenceDiagram`）や状態遷移図（`stateDiagram`）は、最下部要素（ライフライン下端、
下部アクターボックス、ループブロック、警告メモ等）の境界座標を正しく計算できず、生成される SVG の
`viewBox` の高さが不足することがある。親要素に `overflow-x: auto` 等が指定されていると縦方向も
クリッピングされ、はみ出た下部要素が切り落とされる。

```javascript
// viewBox の高さを拡張して、下部見切れを解消
const viewBoxStr = svgEl.getAttribute('viewBox');
if (viewBoxStr) {
    const parts = viewBoxStr.split(' ').map(Number);
    if (parts.length === 4) {
        // %%{init}%% ディレクティブが先頭にあると図種判定が常に外れるため、先に除去してから判定する
        const diagramSrc = src.replace(/^\s*%%\{[\s\S]*?\}%%\s*/, '').trim();
        const isSequenceOrState = diagramSrc.startsWith('sequenceDiagram') || diagramSrc.startsWith('stateDiagram');
        // mirrorActors: true（上下両方のアクターボックス表示）の場合は縦幅が大きく伸びるため余裕を持たせる
        const extraHeight = isSequenceOrState ? 110 : 15;
        svgEl.setAttribute('viewBox', `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3] + extraHeight}`);
    }
}
```

## `quadrantChart` の文字被り対策

```javascript
mermaid.initialize({
    quadrantChart: {
        chartWidth: 800,  // デフォルトの500から拡大
        chartHeight: 600, // デフォルトの400から拡大
        pointRadius: 8,
        pointLabelFontSize: 14
    }
});
```

このうえで、HTML のラッパー（`.mermaid-wrap` 等）に `style="max-width: 750px; margin: 0 auto;"` 等で
表示幅を制限すると、描画文字同士の被りを回避しつつレスポンシブ表示できる。

## HTML での中央寄せ Flexbox スタイル

```css
.mermaid-wrap {
    display: flex;
    justify-content: center;
}
.mermaid {
    display: flex;
    justify-content: center;
    width: 100%;
}
.mermaid svg {
    display: block;
    margin: 0 auto;
    max-width: 100% !important;
    height: auto !important;
}
```

## React 移行の過渡期に踏んだ落とし穴（CSS Modules）

共通の `MermaidDiagram` コンポーネントが出力するグローバルクラス `"mermaid"` は、CSS Modules
（`*.module.css`）側でクラス名がハッシュ化されるためスタイルが当たらず左寄せになることがあった
（現行の `components/Mermaid.tsx` は素の CSS を使うため通常発生しない。CSS Modules を使う独自実装を
検討する場合のみ参照）。

```tsx
<div id="diag-0" className={styles.mermaid}>
  <MermaidDiagram chart={DIAGRAM_0} />
</div>
```

```css
.mermaid {
  display: flex;
  justify-content: center;
}
.mermaid :global(svg) {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
```

テスト環境（Vitest/bun test）では `MermaidDiagram` を必ずモック化する:

```typescript
vi.mock("@/components/MermaidDiagram", () => ({
  default: function DummyMermaidDiagram({ chart }: { chart: string }) {
    return <pre data-testid="mermaid">{chart}</pre>;
  },
}));
```

現行の `tests/**/page.test.tsx` では `bun:test` の `mock()` で `mermaid.render` 自体を差し替える方式
（`happydom-setup.ts` の `mock.module('mermaid', ...)`）を使っており、こちらが優先パターン。
