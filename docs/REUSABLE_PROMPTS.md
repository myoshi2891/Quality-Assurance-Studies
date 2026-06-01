# REUSABLE_PROMPTS.md

最終更新日: 2026-06-01

再利用可能なプロンプト集。Claude Code への依頼文を記録し、同パターンの作業を効率化する。

---

## 目次

### ナビゲーション UI

- [NAV-1] [ページ内スティッキーナビの不具合修正](#nav-1-ページ内スティッキーナビの不具合修正)
- [NAV-2] [ページ内スティッキーナビの新規追加](#nav-2-ページ内スティッキーナビの新規追加)

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
**NavBar 未実装のページ（2025-05-17 時点）**:

- なし（すべて実装完了）

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
