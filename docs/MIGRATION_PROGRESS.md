# Migration Progress

HTML → Next.js App Router 移行の進行状況。セッション終了前に必ず更新すること。
更新手順は `.claude/rules/migration-progress-sync.md` を参照。

> **✅ 機能改修タスク完了**: グローバルヘッダーのハンバーガーメニュー化（TDD・全11ステップ・11/11 完了）。詳細は本ファイル末尾 [「完了: ハンバーガーメニュー化（TDD）」](#完了-ハンバーガーメニュー化tdd) を参照。

## 現在地

| フィールド | 値 |
|---|---|
| 最新 HEAD | `322ca53` — docs(coverage): add self-referential test coverage dashboard |
| 次の作業 | [docs/coverage-dashboard.html](coverage-dashboard.html) の P0 アクション着手（CI 構築、未テストページ 13 件への page.test.tsx 追加、DisclaimerBanner / Mermaid テスト追加）または別の修正タスク |
| ビルド状態 | ✅ `bun run build` 成功・`bun run lint` 0 errors / 10 warnings（既知のスケルトン）・`bun test` 79 pass / 0 fail |

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
- 数値根拠: ページ 10/23 テスト済（43%）・コンポーネント 1/3・lib 2/1・scripts 0/5・CI 0 パイプライン
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
- 最新 HEAD: `322ca53` — docs(coverage): add self-referential test coverage dashboard
- HTML→Next.js 移行は全 23 ページ完了済み（html-archive/ に元ファイル退避）。
- テストカバレッジ可視化ダッシュボード [docs/coverage-dashboard.html](docs/coverage-dashboard.html) を追加。
  現状: ページ 10/23（43%）・コンポーネント 1/3・CI/CD 未構築。
- ビルド: `bun run build` ✅ / `bun run lint` 0 errors / `bun test` 79 pass / 0 fail。

【指示】
次のいずれかを開始してください:
1. coverage-dashboard.html の P0 アクション:
   a. `.github/workflows/ci.yml` で `bun test` + `bun run build` + `bun run lint` を PR 毎に走らせる CI 構築
   b. 未テストページ 13 件への page.test.tsx 追加（既存 10 件の `tests/*/page.test.tsx` をパターン流用）
   c. DisclaimerBanner / Mermaid のコンポーネントテスト追加
2. または別の修正・リファクタリングタスク。
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
