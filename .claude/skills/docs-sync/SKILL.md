---
name: qa-studies-docs-sync
description: >
  Spec document sync skill for the QA_Studies project.
  Provides per-operation checklists, concrete update steps, and gate conditions
  to keep CLAUDE.md / GEMINI.md / docs/MIGRATION_PROGRESS.md /
  docs/coverage-dashboard.html in sync without omissions.
  Trigger: 仕様書の更新, 更新漏れ確認, ドキュメント同期, 各仕様書を更新,
  各仕様書の更新漏れがないか, docs sync, 仕様書同期, spec sync.
---

# QA_Studies 仕様書同期スキル

## Goal

`CLAUDE.md` / `GEMINI.md` / `docs/MIGRATION_PROGRESS.md` / `docs/coverage-dashboard.html` の
4 ファイルを常に最新状態に保ち、更新漏れをゼロにする。
操作のたびに下記マトリクスを参照し、「どのファイルを・何を・どう書くか」を確認すること。

## 管理対象ファイルと役割

| ファイル | 役割 | 更新頻度 |
| --- | --- | --- |
| `CLAUDE.md` | アーキテクチャの真実の源泉（全ページ・CSS・NavBar.tsx を記載） | ページ追加・変更時 |
| `GEMINI.md` | 移行済みページの追跡リスト（Migrated Pages セクション） | ページ追加時 |
| `docs/MIGRATION_PROGRESS.md` | セッション進捗・ビルド状態・再開プロンプト | セッション終了・移行完了時 |
| `docs/coverage-dashboard.html` | テストカバレッジ数値・ページ別テスト状態（`const DATA`） | テスト追加時 |

## セッション開始時に必ず実行するコマンド

```bash
git rev-parse --short HEAD
bun test 2>&1 | tail -5
bun run build 2>&1 | tail -5
bun run lint 2>&1 | tail -5
```

結果を `docs/MIGRATION_PROGRESS.md` の `現在地` テーブルと照合し、乖離があれば即修正する。

---

## 操作 → 更新ファイル マトリクス（クイックリファレンス）

| 操作 | CLAUDE.md | GEMINI.md | MIGRATION_PROGRESS.md | coverage-dashboard.html |
| --- | --- | --- | --- | --- |
| 新規 page.tsx 作成 | ✅ アーキテクチャ追記 | ✅ Migrated Pages 追記 | 移行タスクなら ✅ テーブル追記 | ✅ DATA.pages 追記 |
| ページ固有 CSS 作成 | ✅ アーキテクチャ追記 | ❌ | ❌ | ❌ |
| NavBar.tsx 追加 | ✅ アーキテクチャ追記 | ✅ `NavBar.tsx` 付き明記 | ❌ | ❌ |
| page.test.tsx 追加 | ❌ | ❌ | ❌ | ✅ tested: true + inventory + % |
| コンポーネントテスト追加 | ❌ | ❌ | ❌ | ✅ inventory.components + matrix + % |
| lib テスト追加 | ❌ | ❌ | ❌ | ✅ inventory.lib + % |
| セッション終了 | ❌ | ❌ | ✅ HEAD + build + next + prompt | ❌ |

---

## 操作種別チェックリスト

### A. 新規ページ追加時（HTML 移行・新規作成）

新規 `app/<page-slug>/page.tsx` を作成・移行した後、以下を**すべて**確認する。

#### A-1. `CLAUDE.md` のアーキテクチャセクションに追記

```markdown
- `app/<page-slug>/page.tsx` — <ページの説明（日本語）>
- `app/<page-slug>.css` — <ページ名>固有スタイル                            ← CSS ファイルを作成した場合のみ
- `app/<page-slug>/NavBar.tsx` — <ページ名>固有スティッキーナビ（`'use client'`、`IntersectionObserver` でアクティブリンク制御）  ← NavBar を作成した場合のみ
```

#### A-2. `GEMINI.md` の Migrated Pages リストに追記

```markdown
- `app/<page-slug>/page.tsx` (<日本語タイトル>、`NavBar.tsx` 付き)
```

NavBar なしの場合は「`NavBar.tsx` 付き」を削除する。

#### A-3. `docs/MIGRATION_PROGRESS.md` の移行状況テーブルを更新（移行タスクのみ）

`### 移行完了（html-archive/ に移動済み）` テーブルに追記:

```markdown
| `<元HTMLファイル名>.html` | `/<page-slug>` | ✅ NavBar あり |
```

#### A-4. `docs/coverage-dashboard.html` の `DATA.pages[]` に追記

`const DATA` の `pages` 配列末尾に追加する（テスト未追加なら `tested: false`）:

```js
{ path: '/<page-slug>', topic: '<日本語トピック説明>', tested: false },
```

追加後は `--coverage` 変数とゲージ数値を再計算する（手順は後述）。

---

### B. テスト追加時

#### B-1. `page.test.tsx` を追加した場合

`docs/coverage-dashboard.html` の **3 箇所**を更新する:

1. `DATA.pages[]` の対象ページを `tested: true` に変更

   ```js
   { path: '/<page-slug>', topic: '...', tested: true },
   ```

2. `DATA.inventory.pages[]` にテストファイルパスを追加

   ```js
   'tests/<page-slug>/page.test.tsx',
   ```

3. `--coverage` とゲージ数値を再計算（手順は後述）

#### B-2. コンポーネントテスト（`tests/components/*.test.tsx`）を追加した場合

1. `DATA.inventory.components[]` にテストファイルパスを追加

   ```js
   'tests/components/<ComponentName>.test.tsx',
   ```

2. `DATA.matrix` の `Shared Components` 行の `cells[0]`（Unit テスト列）の `value` を更新
3. `--coverage` とゲージ数値を再計算

#### B-3. lib テスト（`tests/lib/*.test.ts`）を追加した場合

1. `DATA.inventory.lib[]` にテストファイルパスを追加

   ```js
   'tests/lib/<feature>.test.ts',
   ```

2. `--coverage` とゲージ数値を再計算

---

### C. セッション終了時（必須ゲート条件）

<ai_agent_directive>
**AI エージェントへの厳格な指示**: 以下は**ゲート条件（Gate Condition）**です。セッション終了を報告する前に、ユーザーの許可を待たずに自律的・自動的にステップバイステップで完了させてください。コミットを後回しにしたり、ユーザーに判断を委ねたりすることは規約違反です。
</ai_agent_directive>

#### C-1. ビルド・テスト確認

```bash
bun run build 2>&1 | tail -5
bun run lint  2>&1 | tail -5
bun test      2>&1 | tail -5
git rev-parse --short HEAD
```

#### C-2. `docs/MIGRATION_PROGRESS.md` を更新

| フィールド | 更新内容 |
| --- | --- |
| `最新 HEAD` | `git rev-parse --short HEAD` の実値 + コミットメッセージ要約 |
| `ビルド状態` | `bun run build` / `bun run lint` / `bun test` のコマンド出力実値 |
| `次の作業` | 次セッションで最初に着手する内容（具体的に） |

#### C-3. `## 次回セッションでの再開プロンプト` を同期

`現在地` テーブルの値と一致させる（HEAD・ビルド状態・次の作業）。

#### C-4. コミット

```bash
git add docs/MIGRATION_PROGRESS.md
git commit -m "chore(docs): update MIGRATION_PROGRESS.md — <作業内容の1行要約>"
```

---

### D. 更新漏れ確認依頼時（「各仕様書の更新漏れがないか確認して」）

#### D-1. 現在の状態を収集する

```bash
# 最新コミット確認
git log --oneline -10
git rev-parse --short HEAD

# 現在のページ一覧
ls app/*/page.tsx 2>/dev/null | sed 's|app/||' | sed 's|/page.tsx||'

# 現在のテストファイル一覧
find tests/ -name "*.test.ts" -o -name "*.test.tsx" 2>/dev/null | sort

# coverage-dashboard の tested 状態
grep -c 'tested: true' docs/coverage-dashboard.html
grep -c 'tested: false' docs/coverage-dashboard.html

# テスト実行結果
bun test 2>&1 | tail -5
bun run build 2>&1 | tail -5
```

#### D-2. 各ファイルの確認ポイント

| ファイル | 確認内容 |
| --- | --- |
| `CLAUDE.md` | アーキテクチャセクションに全 `app/**/page.tsx` が記載されているか |
| `GEMINI.md` | Migrated Pages リストに全移行済みページが記載されているか |
| `docs/MIGRATION_PROGRESS.md` | `最新 HEAD` が `git rev-parse --short HEAD` と一致するか。`bun test` のパス数が実測値と一致するか |
| `docs/coverage-dashboard.html` | `DATA.pages` 件数 = `app/**/page.tsx` 件数か。`--coverage` 値は計算式通りか |

#### D-3. 差分があれば即修正してコミット

```bash
git add CLAUDE.md GEMINI.md docs/MIGRATION_PROGRESS.md docs/coverage-dashboard.html
git commit -m "chore(docs): sync spec files — <何を・なぜ>"
```

---

## coverage-dashboard.html 更新の具体的手順

### DATA 構造の場所

ファイル末尾 `<script>` ブロック内の `const DATA = { ... }` を編集する（行 1157 付近）。
HTML 構造の変更は不要。

### カバレッジ率の計算式

```text
カバレッジ% = Math.floor( tested: true の件数 ÷ DATA.pages の総件数 × 100 )
```

例: 23 件中 23 件が `tested: true` → `Math.floor(23/23 * 100)` = **100**

### 更新が必要な 3 箇所

1. `DATA.pages[]` — `tested` の変更 または 新エントリ追加（行 1293 付近）
2. `DATA.inventory.pages[]` — テストファイルパスの追加（行 1320 付近）
3. ゲージ HTML（行 966 付近）— 以下の 3 値を同時に更新する

```html
<!-- Before -->
<div class="mc-gauge" style="--coverage: 41;" role="img" aria-label="全体テストカバー率 約41パーセント">
  ...
  <div class="pct">41<span style="font-size:0.5em">%</span></div>

<!-- After（計算結果を N とした場合） -->
<div class="mc-gauge" style="--coverage: N;" role="img" aria-label="全体テストカバー率 約Nパーセント">
  ...
  <div class="pct">N<span style="font-size:0.5em">%</span></div>
```

- `style="--coverage: N;"` の N を更新
- `aria-label` の `約Nパーセント` を同期
- `.pct` 内の数値テキストを同期

---

## コミット規約

| 作業内容 | コミット形式 |
| --- | --- |
| 仕様書のみ更新 | `chore(docs): <1行要約>` |
| coverage-dashboard のみ更新 | `chore(docs): update coverage dashboard — <理由>` |
| 移行進捗のみ更新 | `chore(docs): update MIGRATION_PROGRESS.md — <作業内容>` |
| 複数仕様書を一括更新 | `chore(docs): sync spec files — <何を・なぜ>` |

仕様書の更新コミットには**ソースコードを含めない**（TDD コミット分割ルールに準拠）。

---

## リファレンス

- `CLAUDE.md` アーキテクチャセクション（行 53 付近）
- `GEMINI.md` Migrated Pages セクション（行 67 付近）
- `docs/MIGRATION_PROGRESS.md` 現在地テーブル（行 9 付近）
- `docs/coverage-dashboard.html` `const DATA`（行 1157 付近）、ゲージ HTML（行 966 付近）
- `.claude/rules/migration-progress-sync.md` — MIGRATION_PROGRESS 更新の詳細手順
- `.claude/rules/tdd-mandatory-cycle.md` — TDD サイクル・コミット分割ルール

## Constraints

- **ビルド状態はコマンド実行の実値のみ記載する** — 推測や「おそらく成功」は禁止
- **coverage の % は `Math.floor` で切り捨て整数に統一する** — 小数点を使わない
- **マトリクスを参照してから更新する** — 不要なファイルを誤って更新しない
- **仕様書更新のコミットにソースコードを含めない** — 仕様書のみ `git add` する
