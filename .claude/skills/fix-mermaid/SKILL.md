---
name: fix-mermaid
description: >
  Use this skill to fix Mermaid diagram rendering problems in this Next.js project:
  syntax errors, black/unreadable edge-label backgrounds, clipped text, oversized or
  undersized SVGs, and theme mismatches when a page needs a light theme but the
  shared components/Mermaid.tsx is initialized with a global dark theme.
  Trigger when the user mentions: "mermaid error", "Syntax error in text",
  "mermaid not rendering", "diagram is broken", "edge label black", "エッジラベル 黒潰れ",
  "diagram theme", "all diagrams crashed", or a Mermaid version error.
  Also covers legacy static-HTML mermaid blocks still present under archive/html-archive/.
allowed-tools:
  - Read
  - Edit
  - Grep
  - Bash
---

# Mermaid 修正スキル（Next.js / mermaid v11 前提）

このプロジェクトは全ページ Next.js App Router へ移行済み（`docs/MIGRATION_PROGRESS.md` 参照）。
Mermaid 図はすべて `components/Mermaid.tsx`（`'use client'`、mermaid v11）経由で描画される。
静的 HTML 時代のスクリプトベース手順は `references/legacy-static-html-workflow.md` に退避した
（`archive/html-archive/` 配下の凍結ファイルを直接編集する稀なケースのみ参照）。

## 詰まったら最初に確認する3点（順序厳守）

見た目の修正が「効いていないように見える」場合、実装ミスではなく以下が原因であることが非常に多い。
コードを疑う前に必ずこの順で確認する。

1. **`.next` キャッシュ**: `*.css` を変更しても Next.js dev サーバーが古いチャンクを返し続けることがある。
   `mermaid.initialize()` は `components/Mermaid.tsx` のモジュール最上位で一度だけ実行されるため、HMR でも
   再実行されない。CSS・テーマ関連の修正がブラウザに反映されないときは、実装を疑う前に必ず:

   ```bash
   kill $(lsof -ti:3000) 2>/dev/null; rm -rf .next; bun run dev
   ```

   を実行し、**コンパイル済みチャンク**（`.next/dev/server/chunks/ssr/...` や `/_next/static/chunks/...css`）
   を `grep` して自分の変更が実際に含まれているかを機械的に確認してから、ブラウザ側の確認へ進む。
   詳細は `.claude/rules/css-cache-reset.md`。
2. **ブラウザのハードリロード**（⌘+Shift+R）。通常リロードでは古い SVG/CSS がブラウザキャッシュに残る。
3. **構文エラーではなく描画後の CSS/テーマ問題であること**。ブラウザ Console にエラーが出ていなければ、
   このファイルの「現行アーキテクチャ」節（テーマ・edgeLabel・SVG後処理）を疑う。

## 現行アーキテクチャ: mermaid v11 + 共通コンポーネント

図は共通コンポーネント `components/Mermaid.tsx`（`'use client'`）で描画する。`mermaid.render()` が返す
SVG 文字列を `dangerouslySetInnerHTML` で注入し、ページ固有スタイルは通常の CSS ファイルに書く。

### 症状と根本原因の対応表

| 症状 | 根本原因 | 対策 |
| ------ | --------- | ------ |
| 文字が低コントラストで読みづらい（エッジラベル・subgraph 見出し・シーケンス図 Note） | `theme:'base'` が明色背景を算出し、そこへ明色文字を当てると明×明で読めない | `theme:'dark'` + ソリッド濃色の `themeVariables` を明示（下記） |
| **ページだけライト/独自テーマにしたいのに、共通コンポーネントのダークテーマが効いてしまう** | `mermaid.initialize()` はモジュール最上位でアプリ全体に対して一度だけ実行される（1ページのために変更すると他30+ページが壊れる） | **`components/Mermaid.tsx` は変更しない**。ページ側で `%%{init}%%` ディレクティブを図の先頭に付与する（下記「ページ固有テーマの上書き」） |
| エッジラベル（分岐の「はい/いいえ」「継続的に関与」等）の背景が黒/濃紺の四角に潰れて文字が読めない | 共通コンポーネントの `edgeLabelBackground`（ダーク色）がページのライト配色と衝突。または CSS セレクタが mermaid 11.x の SVG 構造（`.edgeLabel p`, `foreignObject`, `.edgeLabels .label` 等）を網羅していない | `%%{init}%%` でページ単位に `edgeLabelBackground` を上書き **かつ** CSS 側にも `.edgeLabel`/`.edgeLabel span`/`.edgeLabel p`/`.edgeLabel text`/`.edgeLabels .label` と `.edgeLabels rect`/`.edgeLabel rect` の両方をセーフティネットとして定義する（片方だけでは mermaid のバージョン内の構造差異で漏れることがある） |
| ノード内の文字が下端で切れる | 採寸と実描画の数 px 差で SVG `viewBox` 下端が見切れる | 描画後に `viewBox` の高さを拡張（flowchart `+15` / sequence・state `+110`）+ `overflow:visible`（`components/Mermaid.tsx` の `applySvgFixups` が既に対応済み） |
| ノード文字が右端で切れる（emoji を含む図のみ） | `<foreignObject>` は SVG 仕様上 `overflow:hidden` がデフォルト。emoji は採寸時に「豆腐」幅で測られ実描画で広がる | CSS で `.mermaid-wrapper foreignObject { overflow: visible; }` |
| 日本語ラベルの幅不足による軽微な切れ | Web フォント（Noto Sans JP）読込前に採寸 | `mermaid.render()` 直前に `await document.fonts.ready`（`components/Mermaid.tsx` は対応済み） |

### 正準の `mermaid.initialize` 設定（`components/Mermaid.tsx`・アプリ全体で共有）

```ts
mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose', // DIAGRAMS は静的・作者管理の定数のみ（外部入力なし）なので安全
    themeVariables: {
        primaryColor: '#1a73e8', primaryTextColor: '#e8f0fe', primaryBorderColor: '#1a73e8',
        lineColor: '#5f7fb8', secondaryColor: '#0f9d58', tertiaryColor: '#0d1a2e',
        background: '#060b14', mainBkg: '#0f2040', nodeBorder: '#1a73e8',
        clusterBkg: '#0d1a2e', titleColor: '#e8f0fe', edgeLabelBackground: '#0d1a2e',
        fontFamily: "'Noto Sans JP', sans-serif", fontSize: '16px',
    },
    flowchart: { curve: 'basis', padding: 20 },
    sequence: { actorMargin: 60, mirrorActors: true },
});
```

> **この設定はアプリ全体の既定値。個別ページの都合で書き換えてはならない。** ライト/独自テーマのページは
> 次項の `%%{init}%%` ディレクティブでページ単位に上書きする。

### ページ固有テーマの上書き（`%%{init}%%` ディレクティブ）【最重要・頻出パターン】

書籍ガイド系やライト配色の独自デザインページ（`explore-it-guide`, `istqb-ctal-ta-chapter1-test-process` 等
10ページ以上で実績あり）は、共通コンポーネントを変更せず**図の定義文字列の先頭に init ディレクティブを付与**して
そのページの図だけテーマを上書きする。

#### ⚠️ 最頻出の致命的バグ：JSON 値の中にシングルクォートを入れてはならない

`%%{init: {...}}%%` の中身は完全な JSON ではなく mermaid 独自の簡易パーサで解釈される。
**ダブルクォート文字列の内部にシングルクォートをネストすると、パーサがディレクティブ全体を
黙って読み捨て、`mermaid.render()` はエラーを出さずに `components/Mermaid.tsx` のグローバル
ダークテーマへフォールバックする。** これが「CSS も page.tsx も正しく直したはずなのに
図だけ真っ暗のまま」という現象の最も多い原因（2026年9月に `istqb-ctal-ta-chapter1-test-process`
で実際に発生し、調査の結果 `app/*/page.tsx` の `%%{init}%%` を使う11ページ中9ページで同じ
バグ（`fontFamily` にシングルクォートを含む CSS フォントリストをそのまま入れていた）が
確認された）。

```ts
// ❌ 壊れる: "'Noto Sans JP', sans-serif" のシングルクォートでディレクティブ全体が無視される
"fontFamily": "'Noto Sans JP', sans-serif",

// ✅ 正しい: CSS のフォント名クォートは省略可能（スペースを含む複合語でも動く）
"fontFamily": "Noto Sans JP, sans-serif",
```

**この既存バグが疑われる場合の機械的な検知方法**（ブラウザなしで確認できる）:

```bash
grep -n "fontFamily.*'" app/*/page.tsx
```

1件でもヒットしたら、そのページの Mermaid 図はテーマ上書きが機能しておらず共通ダークテーマの
ままレンダリングされている可能性が高い。**該当ページを開いて目視で確認するまでもなく、
このコマンドだけで疑わしい箇所を特定できる。**

**さらに確実な検証方法**（ブラウザなしで実際に mermaid を実行し、生成される SVG のスタイルを見る）:

```bash
bun run -e '
import("@happy-dom/global-registrator").then(async ({ GlobalRegistrator }) => {
  GlobalRegistrator.register();
  const mermaid = (await import("mermaid")).default;
  mermaid.initialize({ startOnLoad:false, theme:"dark", securityLevel:"loose" });
  const chart = `%%{init: {"theme":"base","themeVariables":{"clusterBkg":"#f8fafc"}}}%%
flowchart LR
  subgraph S["t"]
    A["a"]
  end`;
  const { svg } = await mermaid.render("probe", chart);
  console.log(svg.match(/\.cluster rect\{[^}]*\}/g)); // #f8fafc が出れば成功、暗い色ならディレクティブ失敗
});'
```

`.cluster rect{fill:#f8fafc; ...}` のように**自分が指定した色**が出れば成功。グローバル設定の
暗い色（`#0d1a2e` 等）のままなら、ディレクティブの JSON がどこかで壊れている。

#### 実装手順

1. ページの `page.tsx` に、そのページの配色に合わせた `MERMAID_CONFIG` 定数を1つ定義する
   （**フォント名を含む全ての値でシングルクォートを使わないこと**）:

   ```ts
   const MERMAID_CONFIG = `%%{init: {
     "theme": "base",
     "themeVariables": {
       "background": "#ffffff",
       "primaryColor": "#eff6ff",
       "primaryBorderColor": "#2563eb",
       "primaryTextColor": "#1e293b",
       "lineColor": "#94a3b8",
       "edgeLabelBackground": "#ffffff",
       "fontFamily": "Noto Sans JP, sans-serif",
       "fontSize": "14px"
     },
     "flowchart": { "curve": "basis", "htmlLabels": true }
   }}%%`;
   ```

2. **全ての** `DIAGRAM_*` 定義の先頭に展開する（1つでも漏らすと、その図だけダークテーマのまま黒潰れが残る）:

   ```ts
   export const DIAGRAM_FOO = `${MERMAID_CONFIG}
   flowchart LR
       A["ノードA"] --> B["ノードB"]`;
   ```

3. **必ず CSS 側のセーフティネットも併用する**（下記「edgeLabel の CSS 完全保護」）。`%%{init}%%` は
   mermaid のテーマ変数を上書きするが、mermaid のバージョン内で SVG 構造の細部（`.label` ラップの有無等）が
   変わることがあるため、CSS 側でも背景色を強制しておくと安全。
4. **検証**: `page.tsx` を `grep` して、エクスポートされている `DIAGRAM_*` 定数の**すべて**が
   `${MERMAID_CONFIG}` で始まっていることを確認する。1つでも抜けがあると発見しづらいバグになる。

   ```bash
   grep -n "^export const DIAGRAM_" -A1 app/<page-slug>/page.tsx
   ```

5. **`MERMAID_CONFIG` 内にシングルクォートが無いことを確認する**（上記の致命的バグの再確認）:

   ```bash
   grep -n "'" app/<page-slug>/page.tsx | grep -A0 -B0 MERMAID_CONFIG
   # または MERMAID_CONFIG 定義ブロックだけを取り出して確認する
   sed -n '/const MERMAID_CONFIG = `/,/`;/p' app/<page-slug>/page.tsx | grep "'"
   ```

   何も出力されなければ安全。1件でも出力されたら、その値のシングルクォートを除去する
   （フォント名はクォートなしでも CSS として有効）。

### `.next` キャッシュ確認手順（CSS/テーマ変更を疑う前に必須）

CSS やテーマの修正をコードに入れたのにブラウザで反映されない場合、実装ミスではなく `.next` の古いチャンクを
返しているだけの可能性が高い。**キャッシュを疑わず実装を疑ってコードを何度も書き直す「もぐら叩き」に陥らないため**、
必ず以下の順で機械的に切り分ける:

```bash
# 1. dev サーバーを完全に再起動する（HMR では mermaid.initialize の再実行も CSS の完全反映もされない）
kill $(lsof -ti:3000) 2>/dev/null; rm -rf .next; bun run dev

# 2. 自分の変更が実際にコンパイル済み出力へ含まれているかを確認する（ブラウザを開く前に）
grep -n "border-right\|edgeLabel" .next/dev/server/chunks/ssr/*.js 2>/dev/null | grep -v node_modules
```

コンパイル済み出力に変更が反映されていれば、残る原因はブラウザのディスクキャッシュのみ。
その場合はブラウザのハードリロード（⌘+Shift+R）を依頼する。

### edgeLabel の CSS 完全保護（mermaid 11.x の SVG 構造ゆれに対応）

mermaid 11.x はバージョン/図種別によって edge label を `<span>`・`<p>`・`.label` ラッパーのいずれかで
出力することがある。1つのセレクタだけでは漏れるため、**必ずまとめて**指定する:

```css
.my-page .mermaid-wrapper .edgeLabels rect,
.my-page .mermaid-wrapper .edgeLabel rect {
    fill: #ffffff !important;
    stroke: none !important;
}

.my-page .mermaid-wrapper .edgeLabel,
.my-page .mermaid-wrapper .edgeLabel span,
.my-page .mermaid-wrapper .edgeLabel p,
.my-page .mermaid-wrapper .edgeLabel text,
.my-page .mermaid-wrapper .edgeLabels .label {
    background-color: #ffffff !important;
    color: #1e293b !important;
    fill: #1e293b !important;
    font-weight: 700 !important;
}
```

> `rect` に文字色用の変数（インク色）を当ててはならない。矩形がインク色で塗り潰され、かえって黒潰れの原因になる。
> セレクターは必ず `.mermaid-wrapper` 配下にスコープする。`span` / `text` を単独で書くとページ全体の
> 文字要素へ波及するため禁止。

### SVG 後処理は「文字列加工」ではなく「ライブ DOM 操作」で行う

`mermaid.render()` の戻り値（SVG 文字列）を **`DOMParser('image/svg+xml')` + `XMLSerializer` で往復させてはならない**。
`foreignObject` 内の htmlLabels（XHTML 名前空間の HTML）が壊れ、ラベルが `width=0`・テキスト空になって表示が潰れる。
`components/Mermaid.tsx` は `dangerouslySetInnerHTML` で注入した実 DOM に対し `useEffect` + `ref` で
`applySvgFixups()` を適用する方式が既に実装済み。新しいページを作る際もこの方式を再利用し、独自の
SVG 文字列加工ロジックを追加しないこと。

## Mermaid 構文の必須ルール（v11 でも共通・図種を問わず適用）

TSX のテンプレートリテラルで図を書く場合でも、Mermaid パーサ自体のルールは変わらない。

1. コンテンツは**カラム0配置**（先頭空白なし。ただし `mindmap` のみ例外で内部インデントを保持する）
2. 各ステートメントは**改行で分離**（1行に複数連結しない）
3. ノードラベル `A["text"]` の内容は**1行に収める**
4. `block-beta` は**使用禁止**（バージョンによって全体クラッシュの原因になる）。`graph TD` で代替する
5. 全角文字は極力半角に正規化する: `（）`→`()`、`―`→`-`、`：`→`:`、`〜`→「から」等の日本語
6. `subgraph` ラベルや `participant ... as` に絵文字・丸括弧を含めない
7. 菱形ノード `{}` や `quadrantChart` 内テキストはダブルクォーテーションで囲む

インデント汚染・行分断（フォーマッタによる破壊）のみを機械修正したい場合:

```bash
bun run .claude/skills/fix-mermaid/scripts/fix_mermaid.ts path/to/file.tsx
```

ダイアグラム種別ごとの詳細な文字置換表・エスケープ規則は `references/mermaid-v10-guide.md` を参照
（HTML/Markdown/TSX いずれのテンプレートリテラルにも共通して適用可能な内容）。

## 外側 DOMPurify による過剰サニタイズ（稀なケース）

`mermaid.render()` の出力 SVG を、コンポーネント側で**さらに外側から** `DOMPurify.sanitize(svg, { USE_PROFILES: { svg: true } })`
のように SVG 専用プロファイルでサニタイズすると、`foreignObject` 内の HTML ラベルや `<style>` ブロックごと
除去され、文字消失・配色崩れを起こす。図が開発者直書きの静的定数（外部入力なし）であれば、mermaid v11 は
内部で無害化済みのため**外側 DOMPurify は不要かつ有害**。詳細な解決記録は `docs/archive/MERMAID_TROUBLESHOOTING.md` を参照。

## Mermaid を諦めて HTML/CSS に置き換えるべきケース

以下は CSS では対処不能なため、純粋な HTML/CSS ウィジェットに置き換える:

- `flowchart TD` で 5〜6 ノードを直列チェーン → 縦長 900px 超
- 接続されていない複数のサブグラフ（ノード数が非対称なためアスペクト比が崩れる）

判断基準: 「ノード増減に関わらず、他の図と同じ高さに収まる保証がない場合」

## 静的 HTML（archive/html-archive/）を直接編集する稀なケース

このプロジェクトは全ページ Next.js へ移行済みで、通常は `.tsx` 内のテンプレートリテラルしか触らない。
`archive/html-archive/` 配下の凍結済み元 HTML を例外的に直接編集する必要がある場合のみ、
`references/legacy-static-html-workflow.md` を参照する。
