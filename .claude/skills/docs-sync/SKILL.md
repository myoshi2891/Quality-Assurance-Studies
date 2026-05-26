---
name: qa-studies-docs-sync
description: >
  Ensures all project specification documents (CLAUDE.md, GEMINI.md, README.md,
  docs/MIGRATION_PROGRESS.md, docs/REUSABLE_PROMPTS.md, docs/coverage-dashboard.html,
  and individual skills/rules in .claude and .gemini) are kept synchronized and updated
  with the latest project status, test counts, paths, and clear pending migrations.
  Requires updating the "Last Updated" or "Updated YYYY-MM-DD" timestamp in each document
  whenever a change is made.
  Trigger: 仕様書の更新, 更新漏れ確認, ドキュメント同期, 各仕様書を更新,
  各仕様書の更新漏れがないか, docs sync, 仕様書同期, spec sync, test追加,
  テスト追加, 依存関係の更新, CIワークフロー変更, 設定ファイル追加,
  セッション終了, 再開プロンプト, MIGRATION_PROGRESS, CLAUDE.md, GEMINI.md,
  README.md, REUSABLE_PROMPTS.md, docs-sync, spec-sync, 最終更新日,
  Last Updated.
---

# QA_Studies 仕様書同期スキル

## Goal

`CLAUDE.md` / `GEMINI.md` / `README.md` / `docs/MIGRATION_PROGRESS.md` / `docs/REUSABLE_PROMPTS.md` / `docs/coverage-dashboard.html` / 各種個別スキル・ルールの全仕様書を、常にプロジェクトの最新状況（実装、テスト、構成）と乖離させず、漏れなく最新に保つ。

---

## 最終更新日（Last Updated）の記載ルール

すべての仕様書および進捗管理ドキュメントには、**更新を行った日付**を必ず明記し、いつ時点の仕様であるかを誰でも判断できるようにしなければなりません。

### 記載フォーマットと場所

各ドキュメントの以下の位置に、最終更新日を記載または更新してください：

| ドキュメント | 最終更新日の記載方法 | 記載・更新場所 |
|---|---|---|
| `CLAUDE.md` | `Updated YYYY-MM-DD` | ファイル冒頭付近 |
| `GEMINI.md` | `Updated YYYY-MM-DD` | ファイル冒頭付近 |
| `README.md` | `最終更新日: YYYY-MM-DD` | ファイル冒頭付近（見出しの直下） |
| `docs/MIGRATION_PROGRESS.md` | `Updated YYYY-MM-DD`（現在地テーブル内） | 現在地テーブル内、または「最終 HEAD」欄 |
| `docs/coverage-dashboard.html` | `<time datetime="YYYY-MM-DD">YYYY-MM-DD</time>` | ヘッダーのメタ情報エリア（`Updated`）およびフッター |
| `docs/REUSABLE_PROMPTS.md` | `最終更新日: YYYY-MM-DD` | ファイル冒頭付近 |
| 各個別 `SKILL.md` / `*.md` | `(最終更新日: YYYY-MM-DD)` または未移行HTMLリスト等の日付 | タイトル下、または進捗管理の日付欄 |

---

## いつ、どのタイミングで、どの仕様書を更新するか

開発中に発生する操作（イベント）と、更新が必要な仕様書の対応関係は以下の通りです。イベント発生後、**直ちに（次のタスクに移る前に）**対象の仕様書をすべて更新しなければなりません。

graph TD
Event1[A. 新規ページ追加] --> |即時更新| DocC[CLAUDE.md]
Event1 --> |即時更新| DocG[GEMINI.md]
Event1 --> |即時更新| DocM[MIGRATION_PROGRESS.md]
Event1 --> |即時更新| DocD[coverage-dashboard.html]
Event1 --> |即時更新| DocS[個別SKILL.md / 未移行リスト]

Event2[B. テスト追加] --> |即時更新| DocD[coverage-dashboard.html]
Event2 --> |即時更新| DocC[CLAUDE.md]
Event2 --> |即時更新| DocM[MIGRATION_PROGRESS.md]

Event3[C. ナビゲーション変更] --> |即時更新| DocC[CLAUDE.md]
Event3 --> |即時更新| DocG[GEMINI.md]
Event3 --> |即時更新| DocR[REUSABLE_PROMPTS.md]

Event4[D. 手順・構成の変更] --> |即時更新| DocR2[README.md]
Event4 --> |即時更新| DocC[CLAUDE.md]

Event5[E. セッション終了] --> |ゲート条件| DocM[MIGRATION_PROGRESS.md]

### イベント別更新マトリクス（チェックリスト）

| 更新対象ドキュメント | A. 新規ページ追加時 | B. テスト追加時 | C. ナビゲーション変更時 | D. 手順・構成変更時 | E. セッション終了時 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| `CLAUDE.md` | **`Update`**<br>(アーキテクチャ追記) | **`Update`**<br>(テスト数更新) | **`Update`**<br>(NavBarパスの同期) | **`Update`**<br>(コマンド更新) | — |
| `GEMINI.md` | **`Update`**<br>(Migrated Pages) | — | **`Update`**<br>(NavBar有無) | — | — |
| `README.md` | — | — | — | **`Update`**<br>(Dockerや定義) | — |
| `MIGRATION_PROGRESS.md` | **`Update`**<br>(移行テーブル) | **`Update`**<br>(テスト数実測) | — | — | **`Update`**<br>(HEAD/ビルド/再開) |
| `coverage-dashboard.html` | **`Update`**<br>(DATA.pages) | **`Update`**<br>(inventory / % / ゲージ) | — | — | — |
| `REUSABLE_PROMPTS.md` | — | — | **`Update`**<br>(NavBar未実装) | — | — |
| 個別 `SKILL.md` / `*.md` | **`Update`**<br>(未移行HTML等) | — | — | — | — |
| **最終更新日の更新** | **必須** | **必須** | **必須** | **必須** | **必須** |

---

## 監査・確認プロセス（「更新漏れがないか確認して」への対応）

ユーザーまたはシステムから「更新漏れがないか確認」の依頼を受けた際、またはセッション終了時には、以下の監査手順を実行し、すべての不整合を解消してください。

### 1. 現在のステータス情報の収集

以下のコマンドを実行し、プロジェクトの「実装・テストの実態値」を取得します。

```bash
# A. 最新の HEAD コミット値の取得
git log --oneline -5
git rev-parse --short HEAD

# B. 現在のNext.jsルート一覧 of 取得
ls app/*/page.tsx 2>/dev/null | sed 's|app/||' | sed 's|/page.tsx||'

# C. テストファイル実数の取得 (Bunユニットテスト)
find tests/ -name "*.test.ts" -o -name "*.test.tsx" 2>/dev/null | sort

# D. テスト実行結果の取得
bun test 2>&1 | tail -5
bun run lint 2>&1 | tail -5
```

### 2. 監査チェックリスト

収集した実態値と、各仕様書の記述に乖離がないか検証します。

- [ ] **`CLAUDE.md` 監査**
  - [ ] `app/**/page.tsx` および `app/**/*.css` の全配置パスが `CLAUDE.md` の「アーキテクチャ」セクションに正しく記載されているか。
  - [ ] コマンド節のユニットテスト数（`126 specs`等）が現在の実測値と一致しているか。
  - [ ] 最終更新日のタイムスタンプが最新化されているか。
- [ ] **`GEMINI.md` 監査**
  - [ ] `Migrated Pages (Tracking)` に、現在 Next.js 上に存在する全ページ（ホームページ・基礎ガイド・ISTQBガイド）が漏れなく載っているか。
  - [ ] 最終更新日のタイムスタンプが最新化されているか。
- [ ] **`README.md` 監査**
  - [ ] Dockerコマンドや起動手順、機能・非機能テストの定義に変更はないか。
  - [ ] 最終更新日のタイムスタンプが最新化されているか。
- [ ] **`docs/MIGRATION_PROGRESS.md` 監査**
  - [ ] `最新 HEAD` が `git rev-parse --short HEAD` の出力と完全に一致しているか。
  - [ ] `ビルド状態` の `bun test` の pass 数が現在の実測値と一致しているか。
  - [ ] `## 次回セッションでの再開プロンプト` の `最新 HEAD`、`テスト件数` が上記と同期しているか。
  - [ ] 最終更新日（タイムスタンプ）が更新されているか。
- [ ] **`docs/coverage-dashboard.html` 監査**
  - [ ] `DATA.pages` の配列件数と Next.js のルート件数が一致しているか。
  - [ ] `DATA.inventory`（`pages`, `components`, `lib`, `scripts`, `e2e`）に、上記で検出したすべてのテストファイルパスが登録されているか。
  - [ ] HTML内の初期表示のテストファイル総数（`inv-total`）、および各カテゴリのファイルカウントが、`DATA.inventory` の実数と一致しているか。
  - [ ] `--coverage` およびプログレスバーの % 数値が、数式 `Math.floor(tested/total * 100)` に基づき同期されているか。
  - [ ] メタ情報の `Updated` タイムスタンプが最新化されているか。
- [ ] **`docs/REUSABLE_PROMPTS.md` 監査**
  - [ ] NavBar未実装リストなど、すでに完了しているタスクの進捗が「なし（すべて実装完了）」に更新されているか。
  - [ ] 最終更新日のタイムスタンプが最新化されているか。
- [ ] **個別 `SKILL.md` / `*.md` 監査**
  - [ ] 完了した移行タスクや使用が禁止された古いコマンド（例: npm や pnpm）の記述が残っていないか。
  - [ ] 最終更新日のタイムスタンプが最新化されているか。

---

## 修正とコミット規約

監査の結果、1つでも乖離が検出された場合は**直ちに修正**し、以下の規約に従ってコミットしてください。

### コミットメッセージ

仕様書のみの同期更新のコミットには**ソースコードの変更を一切含めない**でください（TDD コミット分割ルール）。

```bash
git add CLAUDE.md GEMINI.md README.md docs/MIGRATION_PROGRESS.md docs/REUSABLE_PROMPTS.md docs/coverage-dashboard.html .claude/skills/ .gemini/skills/
git commit -m "chore(docs): sync spec files — <具体的な更新理由や同期内容>"
```
