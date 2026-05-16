# Migration Progress

HTML → Next.js App Router 移行の進行状況。セッション終了前に必ず更新すること。
更新手順は `.claude/rules/migration-progress-sync.md` を参照。

> **⚠️ 進行中の機能改修タスクあり**: グローバルヘッダーのハンバーガーメニュー化（TDD・全11ステップ・3/11 完了）。詳細は本ファイル末尾 [「進行中: ハンバーガーメニュー化（TDD）」](#進行中-ハンバーガーメニュー化tdd) を参照。HTML 移行と独立した別タスクのため、両者を混在させずに作業すること。

## 現在地

| フィールド | 値 |
|---|---|
| 最新 HEAD | `6faee46` — feat(mat): migrate CT-MAT guide to Next.js App Router |
| 次の作業 | `istqb-ct-tas-complete-guide.html` 移行（TAS ガイド page.tsx 新規作成） |
| ビルド状態 | ✅ ビルド成功・ESLint エラーなし（warnings のみ、既存ファイル由来） |

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
| `istqb-ct-act-complete-guide.html` | `/istqb-ct-act-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mat-complete-guide.html` | `/istqb-ct-mat-complete-guide` | ✅ NavBar + aria-current あり |
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
| `istqb-ct-tas-complete-guide.html` | `/istqb-ct-tas-complete-guide` | ⏳ 未着手 | 新規ファイル（untracked） |

## 既知の留保事項

- `istqb-ctfl-at-complete-guide` と `bdd-testing-guide` / `ai-test-guide` は html-archive/ に元 HTML が存在しない（最初から Next.js で作成）

## 次回セッションでの再開プロンプト

```
最新 HEAD: 6faee46
次の作業: istqb-ct-tas-complete-guide.html を app/istqb-ct-tas-complete-guide/page.tsx へ移行（未移行 HTML 残り 1 件）

手順:
1. MIGRATION_PROGRESS.md を確認（このファイル）
2. .claude/skills/html-to-nextjs-migration/SKILL.md を確認
3. istqb-ct-tas-complete-guide.html を Read して CSS 変数マッピングと構造を把握
4. NavBar が必要かどうか判断（IntersectionObserver スクロールスパイが HTML にあれば必要）
5. SKILL.md の Phase 1-6 の手順で移行を実施
6. bun run build && bun run lint で確認後コミット
7. MIGRATION_PROGRESS.md を更新してコミット
```

---

## 進行中: ハンバーガーメニュー化（TDD）

HTML 移行とは独立した機能改修タスク。グローバルヘッダー [components/Header.tsx](components/Header.tsx) を全画面幅でハンバーガーメニュー化し、将来のガイド追加に備えて `lib/navigation.ts` を Single Source of Truth として導入する。

### タスク概要

| 項目 | 値 |
|---|---|
| プランファイル | [.claude/plans/tdd-optimized-dragon.md](.claude/plans/tdd-optimized-dragon.md) |
| 作業ブランチ | `dev` |
| TDD ステップ | 全 11 ステップ（1 ステップ = 1 コミット） |
| 進捗 | **6 / 11 完了** |
| 直近 HEAD | `36843de` — feat(header): render category drawer driven by NAV_ITEMS |
| ビルド/Lint 状態 | `bun test` は本タスク関連 19/19 グリーン（既存スケルトン 2 件のみ既知の無関係失敗）。components/Header.tsx は型・ESLint 上問題なし |
| ユーザー決定事項 | ① Top sheet ドロワー　② インライン SVG（依存追加なし）　③ CT-TAS は今回ナビ未追加　④ "Next.js SPA" バッジ削除 |

### 完了済みステップ

| Step | コミット | 内容 |
|---|---|---|
| 1 | `7468763` | `chore(test): add bun test npm scripts` — `package.json` に `test` / `test:watch` を追加 |
| 2 | `f64eba4` | `test(navigation): add failing spec for NAV_ITEMS shape` — Red: `tests/lib/navigation.test.ts` を追加 |
| 3 | `d1e1cd7` | `feat(navigation): introduce NAV_ITEMS single source of truth` — Green: `lib/navigation.ts` を実装（20 件 / 5 カテゴリ） |
| 4 | `10a3cbd` | `feat(navigation): add groupByCategory helper for drawer rendering` — Red→Green: 順序固定 + 日本語タイトル付き純関数 |
| 5 | `ca88a3a` | `feat(header): add hamburger toggle button with aria-expanded` — Red→Green: インライン SVG + `aria-label` / `aria-expanded` / `aria-controls` トグル |
| 6 | `36843de` | `feat(header): render category drawer driven by NAV_ITEMS` — Red→Green: `<aside role="dialog">` 内に 4 カテゴリ見出し + 全 20 リンクを描画（home は見出しなし） |

### 残りステップ（次回セッションで実施）

| Step | 種類 | 内容 | 対象ファイル |
|---|---|---|---|
| 7 | Red→Green | close 動作（Escape / overlay クリック / リンククリック） | `tests/components/Header.test.tsx`, `components/Header.tsx` |
| 8 | Red→Green→Refactor | `aria-current="page"` 付与 + 旧 `.nav-links` ハードコード削除 + `Next.js SPA` バッジ削除 | 同上 |
| 9 | Red→Green | CSS 追加（`.nav-hamburger`, `.nav-overlay`, `.nav-drawer*`） + 旧 `.nav-links` セレクタ削除 + `make css-reset` 実行 | `app/globals.css` |
| 10 | Red→Green | `document.body.style.overflow` ロック + 最初のリンクへ初期フォーカス | `tests/components/Header.test.tsx`, `components/Header.tsx` |
| 11 | Red→Green | 拡張性ガード（CT-TAS 追加シナリオを `groupByCategory` 純関数テストで保証） | `tests/lib/navigation.test.ts`, `lib/navigation.ts` 先頭コメント追加 |
| 最終 | 検証 | `bun test` 全グリーン / `bun run lint` / `bun run build` / ブラウザ手動確認 | — |

### 次回セッションでの再開プロンプト

```
最新 HEAD: 36843de
進行中タスク: グローバルヘッダーのハンバーガーメニュー化（TDD・6/11 完了）
プランファイル: .claude/plans/tdd-optimized-dragon.md

次の作業: Step 7 — close 動作の Red → Green
  1. tests/components/Header.test.tsx に describe('Header drawer close behavior') を追加し、以下 3 件を Red で書く
     - Escape キー押下で dialog が消える（fireEvent.keyDown(document, { key: 'Escape' })）
     - ドロワー内のリンクをクリックすると dialog が消える
     - overlay 要素クリックで dialog が消える（overlay は `aria-hidden="true"` の `div.nav-overlay` として追加予定）
  2. bun test tests/components/Header.test.tsx で Red を確認
  3. components/Header.tsx を Green 実装
     - close を `useCallback` で集約: const close = useCallback(() => setIsOpen(false), [])
     - isOpen 中だけ document.addEventListener('keydown', onEsc) を `useEffect` 内で設定し cleanup で remove
     - dialog の前に `<div className="nav-overlay" aria-hidden="true" onClick={close} />` を追加
     - ドロワー内の各 Link に onClick={close} を付与
  4. Green 確認後コミット: `feat(header): close drawer on escape, overlay click, link click`
  5. Step 8 へ進む

注意事項:
  - 既存 tests/istqb-ctal-ta-complete-guide/page.test.tsx と tests/istqb-ctal-tm-complete-guide/page.test.tsx
    の 2 件は失敗するが、これは本タスクと無関係（既存スケルトンの page 構造追従漏れ）。修正対象外。
  - app/globals.css を編集した時点で必ず `make css-reset` を実行すること
    （ルール: .claude/rules/css-cache-reset.md）。
  - 11 ステップ完了後の最終検証で bun run build / bun run lint をパスさせる。
```
