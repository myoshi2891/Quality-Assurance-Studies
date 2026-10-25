# REUSABLE_PROMPTS.md

最終更新日: 2026-10-25

再利用可能なプロンプト集。Claude Code への依頼文を記録し、同パターンの作業を効率化する。

---

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
**NavBar 未実装のページ（2026-10-20 時点）**:

- なし（すべて実装完了）。Quality Is Freeも`app/quality-is-free-guide/NavBar.tsx`で対応済み。960px以下のモバイルバー・固定目次の開閉とスクロール追従を保持。IEC 62304も`app/iec-62304-beginner-guide/NavBar.tsx`で階層目次50リンクの開閉・追従に対応済み。

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

現在の登録は106ルート（2026-10-25）です。`/beyond-legacy-code-guide`は`books-practices`に追加済みで、目次18リンク・モバイル開閉・スクロール追従を実装しています。全体の目次登録とE2E対象の整合性は`bun test tests/lib/navigation.test.ts tests/lib/navigation-e2e-sync.test.ts`で確認します。

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

Mermaidの左端切れの再発確認は`bunx playwright test --config playwright.mermaid-css.config.ts`で行う。外側コンテナに横スクロールを集約し、内側の共有ラッパーのflex中央寄せ・横スクロールをページ内で解除する。CSS単独テストのためサーバーと本番ビルドは起動しない。

## CTAL-TAEコードの改行検証

各行末のJSX改行エンティティ`&#10;`はNext.js/SWCで除去されるため、`CodeLine`でLFを実行時に生成する。Bun・TypeScript変換だけのテストで合格しても、実ページの改行は保証できない。第7・8章はSWC変換後の全文・空行・字下げを照合する。

既存devサーバーに対する検証は、次のコマンドで実行する。サーバー起動と本番ビルドは行わない。

```sh
CTAL_CODE_ORIGIN=http://127.0.0.1:3000 bunx playwright test --config playwright.mermaid-css.config.ts e2e/ctal-tae-code-layout.e2e.ts
```

`CTAL_CODE_ORIGIN`を省略すると実ページ4ケースはスキップし、SWC経由のCSS・行配置78ケースを実行する。必要に応じて`PLAYWRIGHT_CHROMIUM_EXECUTABLE`で利用するブラウザーを指定する。

## 紙色テーマ移行の原本比較

Quality Is Freeは、固定インベントリ・SWC出力に加え、原本と移行後の計算済みスタイル、寸法、表ホバーを390/960/961/1440pxで比較する。残留CSSを前後両順序で読み込み、全8図の実SVG配色とスクロール端も検証する。

```sh
bunx playwright test --config playwright.mermaid-css.config.ts e2e/quality-is-free-layout.e2e.ts
QIF_ORIGIN=http://localhost:3000 bunx playwright test --config playwright.mermaid-css.config.ts e2e/quality-is-free-layout.e2e.ts --grep 'live quality-is-free'
```

最初のコマンドは40ケースをサーバー・ビルドなしで実行する。実ページ2ケースは、既存devサーバーがある場合に`QIF_ORIGIN`を指定する。この環境では`localhost`を維持してHMRの初期化を確認し、テスト内でIPv4へ解決する。目視確認は別途実施する。

## IEC 62304移行後の確認（2026-10-21）

移行先は`/iec-62304-beginner-guide`。原本はGit追跡下の`tests/fixtures/source-html/`へ移動済み。目視確認はユーザー担当。今回のサンドボックス検証はユーザー指定によりnpmを使用し、ビルドは実行しません。

```bash
npm exec -- bun test tests/iec-62304-beginner-guide
npm exec -- playwright test --config playwright.iec-62304.config.ts
npm run lint
```

## ISO 9075-1移行後の確認（2026-10-21）

`/iso-9075-1-guide`は階層目次34リンク・モバイル開閉・スクロール追従を実装済み。サンドボックスではユーザー指定により`npm test -- tests/iso-9075-1-guide`と`npm run lint`で検証し、`npm exec -- playwright test --config playwright.iso-9075.config.ts`でビルド・サーバー不要の実スタイル・図検証44件を実行できます。目視確認はユーザーが担当し、本番ビルドは実行しません。

## ISO 11179-1移行後の確認（2026-10-22）

`/iso-11179-1-2023-guide`は階層目次57リンク・モバイル開閉・スクロール追従とチェック6項目を実装済み。サンドボックスではユーザー指定により`npm test -- tests/iso-11179-1-2023-guide`と`npm run lint`で検証し、`npm exec -- playwright test --config playwright.iso-11179.config.ts`でビルド・サーバー不要の実スタイル・YAML・図検証64件を実行できます。目視確認はユーザーが担当し、本番ビルドは実行しません。

## ホーム・メニューの拡張

ガイドを追加するときは `lib/navigation.ts` の `NAV_ITEMS` を更新し、ホーム・マップ・カテゴリ件数・メニューへの自動反映を確認してください。カテゴリ追加時の定義・配色・資格トラックの扱いは [LIBRARY_DESIGN.md](LIBRARY_DESIGN.md) を参照してください。回帰検証は `bun test tests/index/page.test.tsx tests/components/Header.test.tsx` と `bunx playwright test --config playwright.library.config.ts` で行います。
