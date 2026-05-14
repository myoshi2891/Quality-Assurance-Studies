# Migration Progress

HTML → Next.js App Router 移行の進行状況。セッション終了前に必ず更新すること。
更新手順は `.claude/rules/migration-progress-sync.md` を参照。

## 現在地

| フィールド | 値 |
|---|---|
| 最新 HEAD | `5b88458` — fix(act): correct invalid SVG DOM properties in page.tsx |
| 次の作業 | `istqb-ct-mat-complete-guide.html` 移行（MAT ガイド page.tsx 新規作成） |
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
| `istqb-ct-mat-complete-guide.html` | `/istqb-ct-mat-complete-guide` | ⏳ 未着手 | |
| `istqb-ct-tas-complete-guide.html` | `/istqb-ct-tas-complete-guide` | ⏳ 未着手 | 新規ファイル（untracked） |

## 既知の留保事項

- `istqb-ctfl-at-complete-guide` と `bdd-testing-guide` / `ai-test-guide` は html-archive/ に元 HTML が存在しない（最初から Next.js で作成）

## 次回セッションでの再開プロンプト

```
最新 HEAD: 5b88458
次の作業: istqb-ct-mat-complete-guide.html を app/istqb-ct-mat-complete-guide/page.tsx へ移行（未移行 HTML 残り 2 件）

手順:
1. MIGRATION_PROGRESS.md を確認（このファイル）
2. .claude/skills/html-to-nextjs-migration/SKILL.md を確認
3. istqb-ct-mat-complete-guide.html を Read して CSS 変数マッピングと構造を把握
4. NavBar が必要かどうか判断（IntersectionObserver スクロールスパイが HTML にあれば必要）
5. SKILL.md の Phase 1-6 の手順で移行を実施
6. bun run build && bun run lint で確認後コミット
7. MIGRATION_PROGRESS.md を更新してコミット
```
