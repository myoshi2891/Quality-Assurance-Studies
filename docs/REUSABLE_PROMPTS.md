# REUSABLE_PROMPTS.md

最終更新日: 2026-11-13

`/iso-33063-fdis-guide`は導入＋14章をカテゴリーごとに個別コミットして移行済み。HTML・Markdownは同一内容でアーカイブ済み。`npm test -- tests/iso-33063-fdis-guide`と`npm run e2e:layout -- --project=iso-33063-fdis`で274件の契約と33件の原本デザイン自動比較を再検証できます。目視確認はユーザー担当、ビルド未実施。複合階層図では公式ELK拡張0.2.0をページ側で登録します。経路長は描画器が再計算します。

`/iso-iec-2382-15-guide`は導入＋9章をカテゴリーごとに個別コミットして移行済み。HTML・Markdownは同一内容でアーカイブ済み。`npm test -- tests/iso-iec-2382-15-guide`と`npm run e2e:layout -- --project=iso-2382-15`で349件の契約と44件の原本デザイン自動比較を再検証できます。目視確認はユーザー担当、ビルド未実施。

`/iso-iec-29110-5-1-2-2025-beginner-guide`は全18カテゴリーを個別コミットして移行済み。原本HTML・Markdownは同一内容でアーカイブ済み。目視確認はユーザー担当、ビルド未実施。`npm test -- tests/iso-iec-29110-5-1-2-2025-beginner-guide`と`npm run e2e:layout -- --project=iso-29110-5-1-2`で再検証できます。

`/iso-iec-42001-2023-beginner-guide`は21カテゴリーを個別コミットして移行済み。原本HTML・Markdownはアーカイブ済み。目視確認はユーザー担当、ビルド未実施。`npm test -- tests/iso-iec-42001-2023-beginner-guide`と`npm run e2e:layout -- --project=iso-42001`で自動検証を再実行できます。

再利用可能なプロンプト集。Claude Code への依頼文を記録し、同パターンの作業を効率化する。

---

## 2026-11-10: 生体認証テストガイドの確認

`/iso-iec-awi-ts-42119-7-guide`を移行・登録・原本HTML/MDのアーカイブ済み。全19カテゴリーを個別コミット。目視確認はユーザー担当、ビルド未実施。自動検証は`npm test -- tests/iso-iec-awi-ts-42119-7-guide`と`npm run e2e:layout -- --project=iso-42119-7`で再実行可能。登録数128ルート、全体13178件（234ファイル）、対象426件、ブラウザー比較31件が成功。

`/iso-iec-tr-29119-13-guide`を移行・登録・原本アーカイブ済み。目視確認はユーザー担当、ビルド未実施です。自動検証は`npm test -- tests/iso-iec-tr-29119-13-guide`と`npm run e2e:layout -- --project=iso-29119-13`で再実行できます。後者はビルド・サーバーを起動しません。前回の移行時点では127ルート、全体12770件（231ファイル）、対象383件、ブラウザー比較49件が成功。

## 2026-11-09: ISO/IEC 27031:2025 ガイドの移行とレイアウト・完全性レビュー修正

- `Iso-27031-2025-guide.html`を`/iso-27031-2025-guide`へ移行し、ISOカテゴリー・ナビ・E2E一覧を125ルートへ同期。
- 全21カテゴリー（Section00〜20）を順に個別実装・個別コミット。37見出し、階層目次33リンク、26表、14 Mermaid図、注記、外部リンク、コード例、全76 CSSルールとレスポンシブ境界、ヒーロー・本文・フッターを固定インベントリと一対一照合。
- レイアウト・完全性修正:
  - `guide.css`先頭の`main { margin: 0 !important; padding: 0 !important; }`および`.hero { padding-top: 0 !important; overflow: visible !important; }`が原本の`.main { margin-left: var(--sw); padding: 40px 48px 80px; }`を潰し、メインコンテンツが左の固定サイドバーの下に隠れていた不具合を解消。
  - 固定ヘッダー（60px）と動的ディスクレーマー（`var(--disclaimer-height, 0px)`）に合わせて`.sidebar`・`.nav-toggle`・見出し（`h2, h3, h4`）のオフセットと900px以下の`visibility: hidden`・`prefers-reduced-motion: reduce`・`:focus-visible`輪郭を追加。
  - `Section18.tsx`（`#irbc-checklist`）の9項目の進捗バー（`.cp-fill`）・カウント（`0 / 9`〜`9 / 9`）・完了バナー（`.cp-done`）のインタラクション、およびモバイル目次開放中の背面`main.main`の`inert`化・修飾キークリック維持を実装。
  - `Section14.tsx`に残存していた未変換のMarkdown `**...**`を`<strong>`へ修正し、原本HTML生成時の`$10`〜`$13`展開バグによる末尾ゴミ数字の除去と合わせて`review-corrections.ts`で原本側を補正。`diagrams.ts`のMermaid配色（`lineColor`・`signalColor`・`clusterBorder`・`edgeLabelBackground`）と`mmd-0`の`classDef pt`、`.nav-toggle`の文言を原本HTMLと完全一致させた。
- 追加レビュー: 図3の試験結果から戦略・計画への経路と図8のRPO判定の両分岐を代替説明へ補完し、全14図の名前・描画失敗時説明を独立した期待値で照合。進捗行はページをスクロールコンテナーにせず固定ヘッダー・免責表示・モバイル目次ボタンの下へ追従し、4幅でスクロール・免責表示の高さ変更を検証。ナビのIRBC説明をガイダンスへ修正し、ガイド内の名前付き関数29件すべてへJSDocを付与。
- 対象299件（page: 282件, interactions: 14件, integration: 3件）およびビルド・サーバー不要のChrome比較40件（`e2e/iso-27031-layout.e2e.ts`：4幅×CSS前後2順序の8件、2幅×14実SVGの28件、4幅のヘッダー・Disclaimerオフセットとサイドバー余白4件）が成功。
- 元HTML・Markdownを`archive/html-archive/iso/Iso-27031-2025-guide.html`・`archive/md-archive/iso/Iso-27031-2025-guide.md`へ移動し、Git追跡とSHA-256一致を確認。
- npm経由で検証、対象ソース・テスト・E2EのTypeScript、lint、Markdown lint成功。全体12032件（225ファイル）成功。ビルド未実施、目視確認はユーザー担当（`http://localhost:3000/iso-27031-2025-guide`）。

## 2026-11-08: CIの実行順依存によるテスト失敗の修正

- 症状: CIで`tests/iso-29119-1-2022-guide/review-a11y.test.tsx`の`aria-current`のテスト1件だけが失敗。ローカルは成功。
- 原因: `tests/iec62304-beginner-guide/interactions.test.tsx`の`restore`が`window.scrollY`を`delete`していた。`scrollY`は`window`自身の値で、削除すると`window`を共有する後続ファイルで`undefined`になる。NavBarの`scrollY + 100`が`NaN`になり、強調先を失う。`bun test`の処理順はOSで異なり、ローカルではiso-29119-1が先に動くため表面化しない。次のテストは`afterEach`が`scrollY`を0へ戻すため成功する。製品コードの不具合ではない。
- 修正: 読み込み時に`scrollY`の定義を保存し、`restore`で元へ戻す。回帰テストを1件追加。
- 検証: `scrollY`を消した状態を一時preloadで再現し、CIと同じ1件の失敗を確認。修正後は全テスト開始時の状態を記録する一時preloadで`document.body`と`scrollY`の漏れがないことを確認。対象324件、lint、全体11712件（222ファイル）が成功。CIでの再実行は未確認。

## 2026-11-08: ISO/IEC 19770-1ガイドのレビュー修正

- 図: `Diagram.tsx`の「図 N」だけだった名前を、全10図とも主題・全ノード・グループ・辺ラベルを示す文章へ変更。図8は①〜⑧の順序と⑧から③へ戻る流れを含む。図5の矢印のない点線は「関連する」と表現し、向きを示さない。
- 本文: `Section07.tsx`の入れ子の`strong`を解消し、適用宣言書と15のプロセス領域だけを強調。`Section13.tsx`のQ1に残ったMarkdownの`**`を`<strong>`へ変更。
- テスト: 補正は`tests/iso-19770-1-guide/review-corrections.ts`で原本側だけへ適用し、インベントリとアーカイブは変更せず、この差分を原本からの逸脱として記録する。ブラウザー比較も補正後の原本を基準にする。補正の空振りを防ぐため、補正後の原本に入れ子の`strong`と`**`がないことも検証。
- 検証: 対象275件、ブラウザー34件、対象のTypeScript、lint、Markdown lint、全体11711件（222ファイル）が成功。スクリーンリーダーでの読み上げ、本番ビルド、目視確認は未実施。

## 2026-11-07: IEC 62304追加原稿のレビュー修正

- 目次: 初期値を先頭項目へ変更し、読み込み直後から強調と`aria-current`を付与。`IntersectionObserver`の通知は再計測の合図にとどめ、`scroll`・`resize`ごとに見出しの位置と`scroll-margin-top`を実測する。帯を飛び越えるスクロール、全見出しより上、ページ末尾で帯に届かない最後の節にも追従。
- 図: `mmd-4`・`mmd-5`・`mmd-16`のアクセシブル名を、主題と全ノードを示す文章へ変更。`mmd-16`は全8ステップとStep 8からStep 3へのフィードバックを含む。`mmd-4`・`mmd-5`は隣接する注記を`aria-describedby`で参照。
- 本文: 9.2でソフトウェアの故障確率と危害の発生確率を区別し、原本の入れ子の`strong`を解消。6.4と18をFDAの2023年ガイダンスのBasic / Enhancedへ更新し、旧Level of Concernとの関係を明記。20.1へFDAガイダンスを追加し、IEC Webstoreの行は医療機器のバリデーション・最終リリースが対象外と明確化。
- 表: `Section07.tsx`の7表と`Section18.tsx`の1表を名前付きのキーボード操作領域にし、`.table-scroll:focus-visible`の輪郭を追加。
- テスト: 補正は`tests/iec62304-beginner-guide/review-corrections.ts`で原本側だけへ適用し、インベントリとアーカイブは変更せず。組み立て後のページから共有Mermaidへ渡る全18図を、出現順にインベントリと照合。ブラウザー比較も補正後の原本を基準にし、先頭の目次項目は原本側にも`active`を付けて比較。8表は390pxでは折り返しで収まるため、キー操作の検証では表の最小幅をテスト内で900pxにして横スクロールを再現。
- 仕様書: 再開プロンプトの全体件数を現在地の値へ同期し、`e2e/mermaid-layout.e2e.ts`の固定ルート数を削除。
- 見送り: Docstring Coverageは`.coderabbit.yaml`に設定がなく既定の参考チェックで、コンポーネント全体への追記は変更の最小化に反するため対応せず。
- 検証: 対象323件、ブラウザー45件、対象のTypeScript、lint、Markdown lint、全体11697件（222ファイル）が成功。本番ビルド、目視確認は未実施。
- 対象外: 残り15図のアクセシブル名と残り26表の領域化は、今回の指摘の範囲外のため未変更。

## 2026-11-07: ISO/IEC 19770-1:2017ガイドの移行

- `Iso-19770-1-guide.html`を`/iso-19770-1-guide`へ移行し、ISOカテゴリー・ナビ・E2E一覧を124ルートへ同期。
- 14カテゴリーを順に個別実装・個別コミット。見出し31件、階層目次30リンク、16表の全セル、10図、注記7件、外部リンク18件、開閉式回答6件、メタ情報4件、STEPラベル13件、全66 CSSルールと900px境界、ヒーロー・本文・フッターを固定インベントリと一対一照合。コードブロックは原本どおり0件。
- 対象261件が成功。SWC開発・本番変換後の完全DOM・インライン文字列、実ハイドレーションと表の警告、目次の開閉・Escape・フォーカス復帰・全30見出しの監視と解除・選択リンクへのスクロールを検証。
- ビルド・サーバー不要のChrome比較34件が成功（4幅×CSS前後2順序の8件、2幅×10実SVGの20件、2幅の回答開閉、4幅のヘッダー・Disclaimer下のアンカー余白）。STEPラベルの枠・書体・寸法と注記文字色の残留CSS干渉を補正。図はHTML内SVGを基準に、縦配置の履歴、PDCAクラスターの所属とノード順、双方向矢印と矢印なし点線、全ラベル・形状・線幅・配色・接続方向・非ゼロ寸法・横スクロール到達性を照合。
- 元HTML・Markdownを`archive/html-archive/Iso-19770-1-guide.html`・`archive/md-archive/Iso-19770-1-guide.md`へ移動し、Git追跡とSHA-256一致を確認。
- npm経由で全体11679件（222ファイル）、対象ソース・テスト・E2EのTypeScript、lint、Markdown lintが成功。ビルド未実施、目視確認はユーザー担当。

## 2026-11-07: IEC 62304追加原稿の移行

- `Iec62304-beginner-guide.html`を`/iec62304-beginner-guide`へ移行。旧`/iec-62304-beginner-guide`とは別原稿として保持し、ナビ・E2Eを123ルートへ同期。
- 21カテゴリーを個別実装・個別コミット。見出し58件、目次21リンク、34表の全セル、18図、注記18件、外部リンク20件、ネイティブ回答7件、全49 CSSルールと900px境界、ヒーロー・本文・フッターを固定インベントリで照合。コードブロックは原本どおり0件。
- 対象305件が成功。SWC開発・本番変換後のDOM・インライン文字列、実ハイドレーション、表構造の警告、目次開閉・Escape・フォーカス復帰・全21見出しの監視と解放、原本SHA-256を検証。
- ビルド・サーバー不要のChrome比較44件が成功（4幅×CSS前後2順序の8件と、2幅×18実SVGの36件）。表のホバー・文字色、ヒーローの擬似要素・書体・文字グラデーション・追加アニメーションの干渉を補正。SVGのラベル・形状・線幅・色・矢印・接続方向・非ゼロ寸法・横スクロール到達性を原本と比較。
- 元HTML・Markdownを`archive/html-archive/Iec62304-beginner-guide.html`・`archive/md-archive/Iec62304-beginner-guide.md`へ移動し、Git追跡とSHA-256一致を確認。
- npm経由で検証。対象ソース・テスト・E2EのTypeScriptとlint成功。ビルド未実施、目視確認はユーザー担当。

## 2026-11-05: ISO/IEC 40500:2025 WCAG 2.2ガイド

`/iso-iec-40500-2025-guide`を122番目のルートとして登録。`app/iso-iec-40500-2025-guide/NavBar.tsx`・`toc.ts`に目次50リンクの階層と追従を実装済み。14カテゴリーの原本照合・操作・hydration・型検査313件、ビルド不要の原本CSS・SVG・アンカー比較32件が成功。原本HTML・MDは両方アーカイブ済み。図はMarkdownと差があるためHTMLのSVGを基準に復元。次の確認はユーザー担当の目視確認。ビルドは実行しない。

## 2026-11-05: SQLフレームワーク追加原本

`/iso-iec-9075-1-2023-guide`を121番目のルートとして登録。目次は`app/iso-iec-9075-1-2023-guide/NavBar.tsx`・`toc.ts`へ実装済み。14カテゴリーの原本照合327件と、ビルド不要の原本CSS・SVG・アンカー余白比較32件が成功。旧`/iso-9075-1-guide`も維持。元HTML・MDは両方アーカイブ済み。次の確認はユーザー担当の目視確認。ビルドは実行しない。

## 目次

### ナビゲーション UI

- [NAV-1] [ページ内スティッキーナビの不具合修正](#nav-1-ページ内スティッキーナビの不具合修正)
- [NAV-2] [ページ内スティッキーナビの新規追加](#nav-2-ページ内スティッキーナビの新規追加)
- [NAV-3] [新ガイドをグローバルナビとガイド index に登録](#nav-3-新ガイドをグローバルナビとガイド-index-に登録)

---

## ナビゲーション UI

---

### [NAV-1] ページ内スティッキーナビの不具合修正

**目的**: スクロール時に消えたり、DisclaimerBanner と重なるページ内ナビを修正する  
**参照実装**: `app/istqb-ct-ai-complete-guide/` — 正常動作するページ  
**既知の不具合パターン（3種類）**:

1. ページ root div に `overflow-x: hidden` → `position: sticky` が無効化される
2. NavBar.tsx のレンダークラス名（例: `sticky-nav`）と CSS セレクター（例: `.nav`）が不一致
3. CSS の `top` が `60px` 固定で DisclaimerBanner の高さ未考慮 / page.tsx に `div.layout-content` が二重ネスト

> 以下の各画面での画面内のナビゲーションリンクが警告のディスクレーマーと重なっていたり
> スクロールすると画面から消えてしまうので、
> /istqb-ct-ai-complete-guide の画面と同様に
> ディスクレーマーの下にナビゲーションを表示させ、
> スクロールしても画面から消えないように固定してください。
>
> 改修が必要な画面:
>
> - \<ページ名1\>（例: モデルベーステスト(CT-MBT)ガイド）
> - \<ページ名2\>
> - ...
>
> 参照実装:
> app/istqb-ct-ai-complete-guide/NavBar.tsx および
> app/istqb-ct-ai-complete-guide/istqb-ct-ai-complete-guide.css
>
> 調査・修正の観点:
>
> 1. 各ページの root div（例: .istqb-ct-XXX-page）に overflow-x: hidden がないか確認する。
>    ある場合はコンテンツラッパー div（NavBar の兄弟要素）に移動する。
> 2. NavBar.tsx のレンダーするクラス名と CSS セレクターが一致しているか確認する。
> 3. CSS の sticky-nav / page-nav の top 値が
>    top: calc(60px + var(--disclaimer-height, 0px)) になっているか確認する。
> 4. page.tsx 内に \<div className="layout-content"\> が二重ネストしていないか確認する。
>    Root layout の \<main className="layout-content"\> と重複する場合はページ側を削除する。

**チェックリスト（修正後）**:

- [ ] `bun run build` エラーなし
- [ ] `bun run lint` エラーなし
- [ ] 各対象ページをブラウザで確認: DisclaimerBanner 直下に NavBar が表示され、スクロールで消えない

---

### [NAV-2] ページ内スティッキーナビの新規追加

**目的**: ページ内ナビゲーションがないページに、CT-AI と同じパターンで新規実装する  
**参照実装**: `app/istqb-ct-ai-complete-guide/` — NavBar.tsx・CSS・page.tsx の 3 点セット  
**NavBar 未実装のページ（2026-11-02 時点）**:

- なし（すべて実装完了）。ISO/IEC 30141も`app/iso-iec-30141-2024-guide/NavBar.tsx`で階層目次44リンクの開閉・追従・Escape・フォーカス復帰・Observer解除に対応。ナビ・E2E一覧は120ルート。Quality Is Freeも`app/quality-is-free-guide/NavBar.tsx`で対応済み。960px以下のモバイルバー・固定目次の開閉とスクロール追従を保持。IEC 62304も`app/iec-62304-beginner-guide/NavBar.tsx`で階層目次50リンクの開閉・追従に対応済み。

> 以下の画面にページ内のスティッキーナビゲーションを新規追加してください。
> /istqb-ct-ai-complete-guide の実装を参考にしてください。
>
> 追加対象:
>
> - \<ページルートパス\>（例: /acceptance-testing-guide）
>   対応ファイル: app/acceptance-testing-guide/page.tsx
>
> 実装要件:
>
> 1. app/\<ページ名\>/NavBar.tsx を新規作成する
>    - 'use client' ディレクティブを付与する
>    - useEffect + IntersectionObserver でスクロールスパイを実装する
>    - activeId に一致するリンクに aria-current="location" を付与する
>    - リンクはページ内の section\[id\] に対応させる
> 2. CSS（ページ固有の \*.css ファイル）に以下を追加する
>
>    ```css
>    .sticky-nav {
>      position: sticky;
>      top: calc(60px + var(--disclaimer-height, 0px));
>      z-index: 40;
>      background: rgba(10, 14, 26, 0.92);
>      backdrop-filter: blur(16px);
>      border-bottom: 1px solid var(--color-border);
>      overflow-x: auto;
>    }
>    .nav-inner {
>      display: flex;
>      align-items: center;
>      gap: 0;
>      padding: 0 1rem;
>      white-space: nowrap;
>    }
>    ```
>
> 3. page.tsx の return の最初（コンテンツより前）に \<NavBar /\> を配置する
> 4. ページ root div に overflow-x: hidden を付けない（付ける場合はコンテンツラッパーに限定する）
>
> 参照実装:
> app/istqb-ct-ai-complete-guide/NavBar.tsx
> app/istqb-ct-ai-complete-guide/istqb-ct-ai-complete-guide.css（sticky-nav 部分）
> app/istqb-ct-ai-complete-guide/page.tsx（\<NavBar /\> の配置位置）

**チェックリスト（追加後）**:

- [ ] `bun run build` エラーなし
- [ ] `bun run lint` エラーなし
- [ ] 対象ページをブラウザで確認: DisclaimerBanner 直下に NavBar が表示される
- [ ] スクロール時に NavBar が固定されたまま残る
- [ ] アクティブセクションのリンクがハイライトされる

---

### [NAV-3] 新ガイドをグローバルナビとガイド index に登録

**目的**: 新規ガイドページを、ヘッダードロワー・ガイドライブラリ index（`/`）・スモーク E2E の 3 箇所へ漏れなく登録する  
**単一情報源**: `lib/navigation.ts` の `NAV_ITEMS`（ドロワーと index が共用）／ `e2e/pages.ts` の `PAGES`  

> 新しく追加したガイドページ \<ルートパス\> をグローバルナビとガイド index に登録してください。
>
> 1. `lib/navigation.ts` の `NAV_ITEMS` に該当カテゴリの位置へ 1 件追加する
>    - `href` / `label` / `description`（80 文字以内の 1 行説明）/ `category` を指定する
>    - `description` は index のカード本文かつ検索対象になるため、内容が伝わる文にする
> 2. `e2e/pages.ts` の `PAGES` に同じ path と h1 の RegExp を追加し、`EXPECTED_PAGE_COUNT` を +1 する
> 3. `tests/lib/navigation.test.ts` の件数アサーションとカテゴリ件数を更新する
> 4. `bun test` で `tests/lib/navigation-e2e-sync.test.ts` がパスすることを確認する
>
> `components/Header.tsx` と `app/GuideIndex.tsx` は `NAV_ITEMS` から描画するため、直接編集は不要です。

`/working-effectively-with-legacy-code-guide`も`books-practices`へ登録済みです。原本の目次19リンク、モバイル開閉、スクロール追従、Escapeとフォーカス復帰を実装し、HTML・MDをアーカイブしました。ユーザー指定時のサンドボックス検証はnpmで行い、本番ビルドは起動しません。

`/testing-computer-software-guide`も`books-practices`へ登録済みです。全18目次リンク・開閉・スクロール追従・キーボード操作を移行し、HTML・MDをアーカイブしました。対象295テストとビルド不要のブラウザー26件で検証しています。

`/software-testing-craftsmans-approach-guide`も`books-practices`へ登録済みです。原本の全16目次リンク・モバイル開閉・スクロール追従・Escapeとフォーカス復帰を移行し、HTML・MDをアーカイブしました。対象259テストとビルド不要のChromium30件で検証。サンドボックスではnpmを使用し、目視確認はユーザー担当です。

`/specification-by-example-guide`も`books-practices`へ登録済みです。階層目次18リンク・モバイル開閉・スクロール追従・Escapeとフォーカス復帰を移行し、保存機能付きチェック8項目とGherkinコードの構文色を保持。HTML・MDは同名でアーカイブ済みです。対象446テストとビルド不要のChromium22件で検証。共有ダーク設定の背景継承による黒塗りを修正し、SVG比較では実際の共有初期化設定を使います。サンドボックスではnpmを使用し、目視確認はユーザー担当です。

現在の登録は120ルート（2026-11-03）です。`/iso-iec-5338-guide`はISOカテゴリーへ追加済みで、目次14リンク・モバイル開閉・Escape・フォーカス復帰・全見出し追従を実装しています。`/iso-27799-2025-guide`はISOカテゴリーへ追加済みで、目次19リンク・モバイル開閉・Escape・フォーカス復帰・スクロール追従を実装しています。`/iso-23009-1-2026-guide`はISOカテゴリーへ追加済みで、階層目次40リンク・モバイル開閉・Escape・フォーカス復帰・スクロール追従を実装しています。`/iso-19770-5-guide`はISOカテゴリーへ追加済みで、目次29リンク・モバイル開閉・背景クリック・スクロール追従を実装しています。`/iso-14496-22-guide`はISOカテゴリーへ追加済みで、階層目次46リンク・モバイル開閉・スクロール追従を実装しています。`/beyond-legacy-code-guide`は`books-practices`に追加済みで、目次18リンク・モバイル開閉・スクロール追従を実装しています。全体の目次登録とE2E対象の整合性は`bun test tests/lib/navigation.test.ts tests/lib/navigation-e2e-sync.test.ts`で確認します。

## テストカバレッジ可視化ダッシュボード生成依頼

## 🎯 目的

このプロジェクトのテストカバレッジを視覚的に把握できる **単一HTMLファイル** を生成してください。現状の網羅状況の把握と、今後のテスト戦略立案に活用します。

---

## 📋 依頼内容

### 1. プロジェクト概要の自動分析

以下を参照してプロジェクト構成・技術スタックを把握してください。

- `package.json` / `pyproject.toml` など依存関係ファイル
- `src/` 配下のディレクトリ構成
- 既存のテストファイル（`*.test.*` / `*.spec.*` / `tests/` 配下など）
- CI設定ファイル（`.github/workflows/` / `jest.config.*` / `vitest.config.*` など）

### 2. カテゴリー別テストマトリクス

以下のカテゴリーを軸に、現状のカバレッジをマトリクス形式で可視化してください。

#### テストカテゴリー（行）

| カテゴリー | 説明 |
|---|---|
| Unit | 個別関数・コンポーネントの単体テスト |
| Integration | モジュール間の連携テスト |
| E2E | ユーザーシナリオを再現したエンドツーエンド |
| Visual / Snapshot | UIの見た目の回帰テスト |
| Accessibility (a11y) | アクセシビリティ基準への適合テスト |
| Performance | レンダリング・バンドルサイズ等のパフォーマンス計測 |
| API / Contract | APIレスポンス・型契約のテスト |
| Security | XSS・CSRF・依存関係の脆弱性チェック |

> **注意:** プロジェクトの性質に合わせてカテゴリーを追加・削除してください。

#### カバレッジ対象（列）

プロジェクトの主要機能ドメインまたはディレクトリ構成を列に配置してください（例：`components/`, `hooks/`, `utils/`, `pages/`, `api/` など）。

### 3. ステータス表現

各セルは以下の3段階で表現してください。

| ステータス | 表現 | 意味 |
|---|---|---|
| ✅ 実装済み | 緑系の塗り | テストが存在し、CIで実行されている |
| ⚠️ 部分的 | 黄系の塗り | テストはあるが網羅が不十分、またはスキップあり |
| ❌ 未実装 | 赤系の塗り | テストが存在しない |

### 4. ネクストアクション（優先度付き）

マトリクスの下部に、以下の観点で整理したテスト導入計画を記載してください。

- **🔴 高優先度（即対応）** — ビジネスロジック・重要フロー・セキュリティ関連
- **🟡 中優先度（次スプリント）** — リグレッション防止・DX改善
- **🟢 低優先度（中長期）** — Nice-to-have・パフォーマンス最適化

各アクションには以下を含めてください。

> - 対象カテゴリー・ファイル
> - 推奨ツール・ライブラリ（既存スタックと整合するもの）
> - 導入コスト感（小 / 中 / 大）
> - 期待効果

---

## 🖥️ 成果物の仕様

### ファイル形式

- **単一HTMLファイル**（外部CDN可、ビルド不要で開けること）
- ファイル名: `docs/coverage-dashboard.html`

### UI要件

- [ ] レスポンシブ対応（最低1024px幅で崩れないこと）
- [ ] マトリクスのセルにホバーで詳細ツールチップ表示（該当テストファイル名・件数など）
- [ ] カバレッジサマリー（全体の達成率をパーセンテージ＋プログレスバーで表示）
- [ ] カテゴリーまたはドメイン軸でのフィルタリング機能
- [ ] ダークモード対応（システム設定に追従）
- [ ] 印刷・PDF出力に適したprint CSS

### デザイン基準

- カラーパレット・フォントはプロジェクトの既存デザインシステムに準拠（なければ中性的なシステムフォント＋セマンティックカラーで）
- アクセシビリティ: WCAG 2.1 AA準拠（コントラスト比・キーボード操作）

---

## ⚙️ 補足・制約

- テストカバレッジの数値は **実際のファイルスキャン結果** を元にしてください。推測で埋めないこと。
- 既存の `coverage/` ディレクトリや `lcov.info` がある場合はそれを優先参照してください。
- 使用しているテストランナー（Jest / Vitest / Playwright / Cypress など）を明記してください。
- 外部連携（DatadogやSonarCloudなど）がある場合はリンクも記載してください。

---

## 📎 参考情報（任意・あれば提供）

> - 既知のテスト負債や意図的にスキップしているテストがあれば教えてください
> - 特に重点的にカバレッジを上げたい機能領域があれば教えてください
> - チームのテスト方針・規約ドキュメントがあれば共有してください

<!-- 新しいプロンプトはここに追加する -->
<!-- フォーマット:
### [カテゴリ略称-N] タイトル
**目的**: ...
**参照実装**: ...（あれば）

> プロンプト本文

**チェックリスト（実施後）**:
- [ ] ...
-->

## LangGraph QAエージェント構築ガイドの確認

`/langgraph-qa-agent-guide`は移行済み。元HTML・MDは`tests/fixtures/source-html/`で追跡管理。目次・Mermaid図・表・コードのブラウザ目視確認はユーザーが実施する。追加依存関係は不要。全15コードブロックのハイライトは`SyntaxCode.tsx`で実装済み。

## Beautiful Testing完全ガイドの確認

`/beautiful-testing-guide`のモバイル目次、Mermaid図8件、表5件、チェックリスト11項目は移行済み。ブラウザ目視確認はユーザーが実施する。元HTML・MDは`tests/fixtures/source-html/`で追跡管理している。テスト補正の復旧コミットは承認待ちのため、進捗文書の留保を確認すること。

## CT-GenAI完全学習ガイドの追加移行（2026-10-07）

`/istqb-ct-genai-study-guide`を追加済み。既存の総合・第1〜5章画面は保持する。目視確認はユーザーが行い、ビルドは自動実行しない。元HTML・MDは`archive/html-archive/ct-specialist/`・`archive/md-archive/ct-specialist/`で追跡管理し、固定インベントリと305テストで内容・図・デザインを照合する。CSSコミットの復旧承認の状況は`MIGRATION_PROGRESS.md`を参照。

Mermaidの左端切れの再発確認は`bunx playwright test --config=playwright.layout.config.ts --project=mermaid-css`で行う。外側コンテナに横スクロールを集約し、内側の共有ラッパーのflex中央寄せ・横スクロールをページ内で解除する。CSS単独テストのためサーバーと本番ビルドは起動しない。

## CTAL-TAEコードの改行検証

各行末のJSX改行エンティティ`&#10;`はNext.js/SWCで除去されるため、`CodeLine`でLFを実行時に生成する。Bun・TypeScript変換だけのテストで合格しても、実ページの改行は保証できない。第7・8章はSWC変換後の全文・空行・字下げを照合する。

既存devサーバーに対する検証は、次のコマンドで実行する。サーバー起動と本番ビルドは行わない。

```sh
CTAL_CODE_ORIGIN=http://127.0.0.1:3000 bunx playwright test --config=playwright.layout.config.ts --project=mermaid-css e2e/ctal-tae-code-layout.e2e.ts
```

`CTAL_CODE_ORIGIN`を省略すると実ページ4ケースはスキップし、SWC経由のCSS・行配置78ケースを実行する。必要に応じて`PLAYWRIGHT_CHROMIUM_EXECUTABLE`で利用するブラウザーを指定する。

## 紙色テーマ移行の原本比較

Quality Is Freeは、固定インベントリ・SWC出力に加え、原本と移行後の計算済みスタイル、寸法、表ホバーを390/960/961/1440pxで比較する。残留CSSを前後両順序で読み込み、全8図の実SVG配色とスクロール端も検証する。

```sh
bunx playwright test --config=playwright.layout.config.ts --project=mermaid-css e2e/quality-is-free-layout.e2e.ts
QIF_ORIGIN=http://localhost:3000 bunx playwright test --config=playwright.layout.config.ts --project=mermaid-css e2e/quality-is-free-layout.e2e.ts --grep 'live quality-is-free'
```

最初のコマンドは40ケースをサーバー・ビルドなしで実行する。実ページ2ケースは、既存devサーバーがある場合に`QIF_ORIGIN`を指定する。この環境では`localhost`を維持してHMRの初期化を確認し、テスト内でIPv4へ解決する。目視確認は別途実施する。

## IEC 62304移行後の確認（2026-10-21）

移行先は`/iec-62304-beginner-guide`。原本はGit追跡下の`tests/fixtures/source-html/`へ移動済み。目視確認はユーザー担当。今回のサンドボックス検証はユーザー指定によりnpmを使用し、ビルドは実行しません。

```bash
npm exec -- bun test tests/iec-62304-beginner-guide
npm exec -- playwright test --config=playwright.layout.config.ts --project=iec-62304
npm run lint
```

## ISO 9075-1移行後の確認（2026-10-21）

`/iso-9075-1-guide`は階層目次34リンク・モバイル開閉・スクロール追従を実装済み。サンドボックスではユーザー指定により`npm test -- tests/iso-9075-1-guide`と`npm run lint`で検証し、`npm exec -- playwright test --config=playwright.layout.config.ts --project=iso-9075`でビルド・サーバー不要の実スタイル・図検証44件を実行できます。目視確認はユーザーが担当し、本番ビルドは実行しません。

## ISO 11179-1移行後の確認（2026-10-22）

`/iso-11179-1-2023-guide`は階層目次57リンク・モバイル開閉・スクロール追従とチェック6項目を実装済み。サンドボックスではユーザー指定により`npm test -- tests/iso-11179-1-2023-guide`と`npm run lint`で検証し、`npm exec -- playwright test --config=playwright.layout.config.ts --project=iso-11179`でビルド・サーバー不要の実スタイル・YAML・図検証64件を実行できます。目視確認はユーザーが担当し、本番ビルドは実行しません。

## ホーム・メニューの拡張

ガイドを追加するときは `lib/navigation.ts` の `NAV_ITEMS` を更新し、ホーム・マップ・カテゴリ件数・メニューへの自動反映を確認してください。カテゴリ追加時の定義・配色・資格トラックの扱いは [LIBRARY_DESIGN.md](LIBRARY_DESIGN.md) を参照してください。回帰検証は `bun test tests/index/page.test.tsx tests/components/Header.test.tsx` と `bunx playwright test --project=library` で行います。

## ISO 30130 移行後の確認

`/iso-iec-5338-guide`と`/iso-30130-guide`は移行・原本HTML/MDアーカイブ済み。目視確認はユーザー担当。ビルドは未実施。

## ISO/IEC TR 29138-2:2009移行後の確認（2026-11-02）

`/iso-iec-tr-29138-2-2009-guide`は階層目次42リンク・モバイル開閉・Escape・フォーカス復帰・全見出し追従を実装済み。原本HTML・MDはアーカイブ済み。`npm test -- tests/iso-iec-tr-29138-2-2009-guide`で263件、関連546件が成功。`npm run e2e:layout -- --project=iso-29138-2`でビルド・サーバー不要の原本比較20件を実行可能。Playwright付属Chromium未導入時は`PLAYWRIGHT_CHROMIUM_EXECUTABLE`へ利用可能なChrome実行ファイルを指定。目視確認はユーザー担当、ビルドは未実施。

## ISO/IEC TS 30149:2024移行後の確認（2026-11-03）

`/iso-iec-ts-30149-2024-guide`は階層目次33リンク・モバイル開閉・Escape・フォーカス復帰・全見出し追従、自己点検7項目の進捗更新を実装済み。原本HTML・MDはISOアーカイブへ同名で移動済み。`npm exec -- bun test tests/iso-iec-ts-30149-2024-guide`で275件、関連563件が成功。`npm run e2e:layout -- --project=iso-30149`でビルド・サーバー不要の原本比較35件を実行可能。目視確認はユーザー担当、ビルドは未実施。

## ISO/IEC/IEEE 29119-3:2021移行後の確認（2026-11-03）

`/iso-iec-ieee-29119-3-2021-guide`は目次16リンク・モバイル開閉・Escape・フォーカス復帰・スクロール追従を実装済み。原本HTML・MDはISOアーカイブへ同名で移動済み。`npm exec -- bun test tests/iso-iec-ieee-29119-3-2021-guide`で257件、関連550件が成功。`npm run e2e:layout -- --project=iso-29119-3`で、共有Mermaidの実際の後処理と原本SVG寸法復元を含む、ビルド・サーバー不要の原本比較37件を実行可能。目視確認はユーザー担当、ビルドは未実施。
