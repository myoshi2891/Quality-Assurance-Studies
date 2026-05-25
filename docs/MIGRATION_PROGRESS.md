# Migration Progress

HTML → Next.js App Router 移行の進行状況。セッション終了前に必ず更新すること。
更新手順は `.claude/rules/migration-progress-sync.md` を参照。

> **✅ 機能改修タスク完了**: グローバルヘッダーのハンバーガーメニュー化（TDD・全11ステップ・11/11 完了）。詳細は本ファイル末尾 [「完了: ハンバーガーメニュー化（TDD）」](#完了-ハンバーガーメニュー化tdd) を参照。

## 現在地

| フィールド | 値 |
|---|---|
| 最新 HEAD | `Merge pull request #60 from myoshi2891/dev` (`d87ac2c`) |
| 次の作業 | coverage-dashboard.html の残 P1（axe-core/playwright で WCAG 2.1 AA 自動検証、または Lighthouse CI でパフォーマンス予算） |
| ビルド状態 | ✅ `bun run build` 成功・`bun run lint` 0 errors / 11 warnings・`bun test` 126 pass / 0 fail（35 files）・`bun run e2e` 25 passed (24 pages + 1 sanity) / 0 fail |

## 2026/05/23 P1: Playwright スモーク E2E 導入

coverage-dashboard.html の P1 アクション「Playwright 導入と全ページのスモーク E2E」を完了した。

### 1. Playwright (@playwright/test@1.60.0) 導入

- `package.json`: devDependency に追加。scripts に `e2e` / `e2e:ui` / `e2e:install` / `e2e:report` を追加。
- `bunfig.toml`: コメントを更新。e2e ファイルは `.e2e.ts` 拡張子を採用し、`bun test` のデフォルト検出 (`*.test.ts` / `*.spec.ts`) と自然に分離。
- `.gitignore`: `playwright-report/` / `test-results/` / `playwright/.cache/` を追加。

### 2. スモーク E2E スイート

- `playwright.config.ts`: chromium のみ、`webServer` で `bun run build && bun run start` を auto-start。`reuseExistingServer: !CI`、`retries: CI ? 1 : 0`、reporter は list + html。
- `e2e/pages.ts`: 全 24 ルート (home + 23 ガイド) と h1 部分一致用 RegExp を単一情報源として定義。`EXPECTED_PAGE_COUNT=24` も export。
- `e2e/smoke.e2e.ts`: 各ページに対し HTTP 200 / `getByRole('link', { name: 'QA_STUDIES' })` 表示 / `getByRole('heading', level: 1, name: regex)` 一致 / `pageerror` 0件 / `console error` 0件（favicon・ResizeObserver・React DevTools 案内のみ allowlist 除外）を検証。`PAGES.length === EXPECTED_PAGE_COUNT` の sanity test も含む。

### 3. 検証結果

- `bun run e2e`: **25 passed** (24 pages + 1 sanity) / 0 fail / 約 35 秒。
- `bun test`: 125 pass / 0 fail 維持（`e2e/` は対象外として正しく無視）。
- 既存の Header 二重レンダ箇所（一部 page.tsx が layout.tsx と Header をダブル import）は `.first()` で吸収。構造修正は別タスク扱い。
- 既知のノイズ: `next start` + `output: 'standalone'` の警告（動作影響なし、将来 standalone server.js への切り替えで解消可能）。

### 4. ドキュメント同期

- `docs/coverage-dashboard.html`: KPI「Test Types Uncovered」を 5/6 → 4/6、Pages 行の E2E セルを Gap → 100%、「with E2E」chip を 0 → 24、P1 Playwright アクションを ✅ 完了化、ISTQB System Testing 行を Smoke 100%、E2E inventory セクションを追加。
- `CLAUDE.md`: コマンド節に E2E スクリプト 4 種と port 3000 衝突時のトラブルシュート手順を追加。

## 2026/05/23 修正・改善タスク完了

移行スクリプト類の品質向上とテストカバレッジの深化（P2アクション）を実施した。

### 1. 移行スクリプトのユニットテスト実装

`tests/scripts/` 配下に以下のテストを新規作成し、各スクリプトの入出力やエラーハンドリングを検証した。

- `validate-fences.test.ts`: 言語未指定フェンスや閉じられていないブロックの検出を検証。
- `fix-fences.test.ts`: 未指定フェンスへ自動で 'text' を付与する修正ロジックを検証。
- `format-markdown.test.ts`: リンク分離、見出し前空行（MD022）、空行圧縮（MD012）、末尾改行（MD047）のフォーマットを検証。
- `extract-css.test.ts`: style タグからの CSS 抽出、変数の置換、不要ルールの削除を検証。
- `html-to-tsx.test.ts`: HTML の React (TSX) 変換、クラス置換、pre ブロックの dangerouslySetInnerHTML 復元などを検証。

※サンドボックス環境の実行制約を回避するため、`process.exit` や `console.log` をモックし、キャッシュバスター付き動的インポートを用いることでインプロセス実行として実装。非同期処理の待機は `Promise` により同期化。

### 2. テストカバレッジダッシュボードの更新

- [docs/coverage-dashboard.html](coverage-dashboard.html) を最新化。
- 全体テストカバー率を **41% → 94%** へ引き上げ（ページ 100%、コンポーネント 100%、lib 100%、スクリプト 71%）。
- インベントリに `Script Utility Tests` セクションを追加し、追加した 5 つのテストファイルを掲載。
- カバレッジマトリクスに `Scripts Utilities` の充足状況 (5/7 カバー) を反映。

## 2026/05/18 修正・改善タスク完了

インラインコメントに基づき、以下の修正を実施した。

### 1. ガイドラインとルールの明確化

- `.claude/rules/tdd-mandatory-cycle.md`: `docs/MIGRATION_PROGRESS.md` の更新が必要な「移行タスク」の判定基準を具体化（HTML→React変換、ページ削除等）。

### 2. istqb-ct-pt-complete-guide（Next.js 移行後）の品質向上

- `app/istqb-ct-pt-complete-guide.css`:
  - Tailwind v4 規約（`@layer base/components`）への準拠。
  - `prefers-reduced-motion` 対応（アニメーション無効化、プログレスバー表示維持）。
  - `sticky-nav` の位置と `z-index` をプロジェクト規約に調整。
  - `body::before/after` オーバーレイの `z-index` を下げ、操作を妨げないように修正。
- `app/istqb-ct-pt-complete-guide/NavBar.tsx`: `use client` 追加と `IntersectionObserver` によるスクロールスパイ実装。
- `tests/istqb-ct-pt-complete-guide/page.test.tsx`: `afterAll` での `IntersectionObserver` モック復元処理追加。

### 3. istqb-ct-ut-complete-guide.md の修正（完了）

- **完了**:
  - ロードマップ、法的リスク（金額表記）、算術計算例（80%の分母修正）の修正。
  - 冒頭および Chapter 2 付近の ASCII アート・テーブルの Markdown 変換。
  - Chapter 3 以降に残存する約 27 箇所の無タグコードブロック（ASCII アート、テキストボックス等）の Markdown テーブル、リスト、または Mermaid への変換。

### 4. Test Coverage Dashboard の追加（完了）

HTML 移行とは独立した可視化タスク。プロジェクト自身のテストカバレッジを 1 ファイルで把握できるスタンドアロン HTML を追加した。

- 追加ファイル: [docs/coverage-dashboard.html](coverage-dashboard.html)（単一ファイル、外部依存は Google Fonts のみ）
- 構成: KPI 概要 / 11 カテゴリ × 6 種別マトリクス / 23 ページ別カバレッジ / 既存 13 テストのインベントリ / P0-P3 ネクストアクション / ISTQB テストレベル整合表
- 数値根拠: ページ 10/23 テスト済（43%）・コンポーネント 1/3・lib 2/2・scripts 0/5・CI 0 パイプライン
- 更新運用: `<script>` 内の `DATA` 定数を編集して再描画。HTML 構造の変更不要
- コミット: `322ca53 docs(coverage): add self-referential test coverage dashboard`

## 移行状況テーブル

### 移行完了（html-archive/ に移動済み）

| 元 HTML | 移行先ルート | 備考 |
|---|---|---|
| `acceptance-testing-guide.html` | `/acceptance-testing-guide` | ✅ |
| `e2e-testing-guide.html` | `/e2e-testing-guide` | ✅ |
| `integration-functional-testing-guide.html` | `/integration-functional-testing-guide` | ✅ |
| `integration-system-testing-guide.html` | `/integration-system-testing-guide` | ✅ |
| `istqb-ct-ai-complete-guide.html` | `/istqb-ct-ai-complete-guide` | ✅ NavBar あり |
| `istqb-ct-genai-complete-guide.html` | `/istqb-ct-genai-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mbt-complete-guide.html` | `/istqb-ct-mbt-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-pt-complete-guide.html` | `/istqb-ct-pt-complete-guide` | ✅ NavBar あり |
| `istqb-ct-act-complete-guide.html` | `/istqb-ct-act-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mat-complete-guide.html` | `/istqb-ct-mat-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-sec-complete-guide.html` | `/istqb-ct-sec-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-ste-complete-guide.html` | `/istqb-ct-ste-complete-guide` | ✅ NavBar あり |
| `istqb-ct-tas-complete-guide.html` | `/istqb-ct-tas-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-atlas-complete-guide.html` | `/istqb-ctal-atlas-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-att-complete-guide.html` | `/istqb-ctal-att-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-ta-complete-guide.html` | `/istqb-ctal-ta-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-tae-complete-guide.html` | `/istqb-ctal-tae-complete-guide` | ✅ |
| `istqb-ctal-tm-complete-guide.html` | `/istqb-ctal-tm-complete-guide` | ✅ NavBar あり |
| `modern-software-testing-complete-guide-2025.html` | `/` (ホームページ) | ✅ |
| `software-testing-methodologies-guide.html` | `/software-testing-methodologies-guide` | ✅ |
| `unit-testing-guide.html` | `/unit-testing-guide` | ✅ |

### 未移行（プロジェクトルートに残存）

| ファイル | 予定ルート | 状態 | 備考 |
|---|---|---|---|
| なし | - | ✅ | 全て完了 |

## 既知の留保事項

- `istqb-ctfl-at-complete-guide` と `bdd-testing-guide` / `ai-test-guide` は html-archive/ に元 HTML が存在しない（最初から Next.js で作成）

## 次回セッションでの再開プロンプト

```text
コンテキスト:
- 最新 HEAD: `d87ac2c` — Merge pull request #60 from myoshi2891/dev
- HTML→Next.js 移行は全 23 ページ完了済み（html-archive/ に元ファイル退避）。
- 移行スクリプト類のテスト実装・P2 アクション一部完了済み (`tests/scripts/` 下に 5 ファイル、`bun test` 126 pass / 0 fail)。
- P1 の Playwright スモーク E2E 導入完了 (`e2e/` 下に 2 ファイル、`bun run e2e` 25 passed / 0 fail、約 35 秒)。
- テストカバレッジ可視化ダッシュボード [docs/coverage-dashboard.html](docs/coverage-dashboard.html) 最新化（E2E 24/24 ページ含む）。
- ビルド: `bun run build` ✅ / `bun run lint` 0 errors / 11 warnings / `bun test` 126 pass / 0 fail / `bun run e2e` 25 passed / 0 fail。

【指示】
coverage-dashboard.html の残 P1 アクションを選択して実装してください：

1. **axe-core/playwright による WCAG 2.1 AA 自動アクセシビリティ検証**
   - `@axe-core/playwright` を導入し、全 24 ページに対する自動監査を実装する。ダークテーマのカラーコントラスト、aria-* 属性、キーボードフォーカス遷移、HTML5 ランドマーク構造を検証。`e2e/a11y.spec.ts` として既存の Playwright 構成に追加可能。
2. **Lighthouse CI によるパフォーマンス・SEO 品質予算の導入**
   - 主要ページに対し LCP / CLS / TBT / A11y / SEO スコアのしきい値を設定し (LCP < 2.0s 等)、PR ごとに `@lhci/cli` で予算超過を検知。
3. **構造修正タスク: Header 二重レンダ解消**
   - 9 ページが `app/layout.tsx` と独自 `<Header />` import の両方でヘッダーを 2 回描画している。各 page.tsx から重複 import を削除し、`e2e/smoke.e2e.ts` の `.first()` を strict mode のままに戻す。
```

---

## 完了: ハンバーガーメニュー化（TDD）

HTML 移行とは独立した機能改修タスク。グローバルヘッダー [components/Header.tsx](components/Header.tsx) を全画面幅でハンバーガーメニュー化し、将来のガイド追加に備えて [lib/navigation.ts](lib/navigation.ts) を Single Source of Truth として導入した。

### タスク結果

| 項目 | 値 |
|---|---|
| プランファイル | [.claude/plans/tdd-optimized-dragon.md](.claude/plans/tdd-optimized-dragon.md) |
| 作業ブランチ | `dev` |
| TDD ステップ | 全 11 ステップ（1 ステップ = 1 コミット）すべて完了 |
| 進捗 | **11 / 11 完了** ✓ |
| 直近 HEAD | `e13242f` — test(navigation): cover extensibility for future specialist guides (e.g. CT-TAS) |
| 検証結果 | `bun test` 67 pass / 2 fail（既知の無関係スケルトン: CT-ATLaS, CTAL-TA）<br>`bun run lint` 0 errors / 10 warnings（既存スケルトンの未使用変数のみ）<br>`bun run build` ✓ Compiled successfully / 22 static pages 生成 |
| ユーザー決定事項 | ① Top sheet ドロワー　② インライン SVG（依存追加なし）　③ CT-TAS は今回ナビ未追加　④ "Next.js SPA" バッジ削除 |

### 完了済みステップ

| Step | コミット | 内容 |
|---|---|---|
| 1 | `7468763` | `chore(test): add bun test npm scripts` |
| 2 | `f64eba4` | `test(navigation): add failing spec for NAV_ITEMS shape` (Red) |
| 3 | `d1e1cd7` | `feat(navigation): introduce NAV_ITEMS single source of truth` (Green: 20 件 / 5 カテゴリ) |
| 4 | `10a3cbd` | `feat(navigation): add groupByCategory helper for drawer rendering` |
| 5 | `ca88a3a` | `feat(header): add hamburger toggle button with aria-expanded` |
| 6 | `36843de` | `feat(header): render category drawer driven by NAV_ITEMS` |
| 7 | `7550269` | `feat(header): close drawer on escape, overlay click, link click` |
| 8 | `6620f92` | `refactor(header): drop legacy inline nav links and SPA badge, mark active via aria-current` |
| 9 | `0aa409a` | `style(header): add drawer/overlay/hamburger styles to globals.css` |
| 10 | `4aeb6b3` | `feat(header): lock body scroll and focus first link when drawer opens` |
| 11 | `e13242f` | `test(navigation): cover extensibility for future specialist guides (e.g. CT-TAS)` |

### 残作業（任意・次セッション以降）

- [ ] ブラウザ手動確認（プランの `## 検証` チェックリスト参照）
- [ ] `make css-reset` 実行（dev サーバー使用時のみ — `.next` は本タスク完了時点で削除済み）
- [ ] CT-TAS 実装完了時に `NAV_ITEMS` 末尾に 1 行追加（`lib/navigation.ts` 冒頭コメント参照）
- [ ] 既存スケルトン 2 件（`tests/istqb-ct-atlas-complete-guide/page.test.tsx`, `tests/istqb-ctal-ta-complete-guide/page.test.tsx`）の hero タイトル不一致は本タスクと無関係。別タスクで対応。
