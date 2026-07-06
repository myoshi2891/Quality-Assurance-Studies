# Plan 001: 試験対策コンテンツカテゴリを拡張する（章別詳解・新資格・演習・用語集・学習パス）

> **Executor instructions**: このプランをステップ順に実行すること。各ステップの
> 検証コマンドを実行し、期待結果を確認してから次へ進む。「STOP conditions」に
> 該当したら中断して報告する（独自判断で回避しない）。完了したら
> `plans/README.md` の該当ステータス行を更新する。
>
> **Drift check（最初に実行）**: `git diff --stat 9cf98a6..HEAD -- lib/navigation.ts app/ tests/`
> in-scope ファイルに変更があれば「Current state」の抜粋と実物を突合し、
> 不一致なら STOP condition として扱う。

## Status

- **Priority**: P1
- **Effort**: L（フェーズ分割済み。1 フェーズ = S〜M）
- **Risk**: LOW（既存ページの変更は最小限、追加が主体）
- **Depends on**: なし（ただし plans/002 完了後は新カテゴリ追加が容易になる。
  002 未完了時は既存 `NavCategory` の範囲で追加し、再分類は 002 に委ねる）
- **Category**: direction
- **Planned at**: commit `9cf98a6`, 2026-07-06

## Why this matters

本サイトは 35 ガイド（読み物）を持つが、「試験対策プラットフォーム」の中核である
演習（模擬問題）・用語集・学習パスが存在せず、章別詳解も CTFL v4.0 第 1 章のみ
ルート化されている（残り 9 組の章別 Markdown/HTML がリポジトリルートに滞留）。
また 2026-05-27 に ISTQB の新 Specialist 資格 CT-FT（Finance Testing）v1.0 が
新設されたが未カバー。本プランはこれらを優先度順に追加し、読み物サイトから
試験対策プラットフォームへ拡張する。

## Current state

- `lib/navigation.ts` — ナビの Single Source of Truth。`NAV_ITEMS` 配列に
  1 行追加するだけでヘッダーのドロワーに反映される（同ファイル冒頭の
  doc コメント参照）。カテゴリは `NavCategory` 型の 6 種
  （`home` / `foundation` / `istqb-foundation-ext` / `istqb-advanced` /
  `istqb-specialist` / `istqb-expert`）
- ルート直下に未ルート化の章別コンテンツが 9 組残存:
  - CTFL v4.0: `Ctfl-v4-chapter2-sdlc-and-testing.md`(+.html)、
    `Ctfl-v4-chapter3-static-testing.md`(+.html)、`Istqb-ctfl-v4-chapter4.md`(+.html)、
    `Istqb-ctfl-chapter5.md`(+.html)、`Istqb-ctfl-v4-chapter6.md`(+.html)
  - CTFL-AT: `Ctfl-at-chapter1-agile-software-development.md`(+.html)、
    `Ctfl-at-chapter2.md`(+.html)、`Ctfl-at-chapter3-agile-testing-techniques-tools.md`(.md のみ)
- 章別ページの実装済み手本: `app/istqb-ctfl-v4-chapter1-fundamentals/`
  （`page.tsx` + 同名 `.css` + `NavBar.tsx`）とそのテスト
  `tests/istqb-ctfl-v4-chapter1-fundamentals/`
- ガイドページの共通パターン: `app/<slug>/page.tsx`（Server Component）+
  ページ固有 CSS + 必要なら `NavBar.tsx`（`'use client'`、`IntersectionObserver`
  スクロールスパイ、`aria-current="location"`）。詳細手順はスキル
  `.claude/skills/html-to-nextjs-migration/SKILL.md` にある — 移行ステップでは必ず読むこと
- E2E: `e2e/` に全ルートのスモークテストあり。新ルート追加時は対象ルート一覧への
  追加が必要（`e2e/` 内の既存実装を確認して同じ形式で追加）
- 2026-07 時点の外部事実（監査 plans/000 より）:
  - CT-FT v1.0 は 2026-05-27 リリースの新 Specialist 資格（公式: istqb.org）
  - 非 ISTQB の高関連資格: TMMi Professional、IREB CPRE、A4Q 自動化系、IAAP CPACC/WAS
  - ISTQB 用語集は公式 Glossary（glossary.istqb.org）が一次情報源

### 必ず守るリポジトリ規約（抜粋・インライン）

1. **TDD 必須サイクル**（`.claude/rules/tdd-mandatory-cycle.md`）: 新ページは
   ①失敗テストを先にコミット（`test(<scope>): add failing spec for <feature>`）→
   ②最小実装（`feat(<scope>): ...`）→ ③リファクタ（`refactor(<scope>): ...`）→
   ④移行タスク時は `docs/MIGRATION_PROGRESS.md` 更新（`chore(docs): ...`）。
   一括コミットは重大な規約違反
2. **Faithful Migration**: 元 Markdown/HTML の全コンテンツを転写。要約・省略禁止
3. 外部リンクは `target="_blank" rel="noopener noreferrer"` 必須
4. CSS 変更後は `make css-reset`（`.next` キャッシュ汚染対策）
5. `bun run build` はサンドボックスで実行せず、ユーザーに実行を依頼する
6. コミット前に PII チェック:
   `git diff --cached | grep -E '^\+[^+]' | grep -E '(/Users/|/home/|C:\\Users\\)' | grep -vE 'johndoe'`
   → 出力なしを確認

## Commands you will need

| 目的 | コマンド | 成功時の期待結果 |
|---|---|---|
| 依存インストール | `bun install` | exit 0 |
| Lint | `bun run lint` | exit 0、エラーなし |
| ユニットテスト | `bun test` | 全件パス（起点: 161 specs） |
| E2E スモーク | `bun run e2e` | 全ルートパス |
| Markdown リント | `node node_modules/markdownlint-cli/markdownlint.js <file>` | 出力なし・exit 0 |

## Scope

**In scope**（変更・作成してよいもの）:

- `app/<新スラッグ>/`（新ページ一式）、対応する `tests/<新スラッグ>/`、`e2e/` のルート一覧
- `lib/navigation.ts`（`NAV_ITEMS` への行追加のみ。002 未完了時は型の変更禁止）
- ルート直下の章別 `.md` / `.html`（移行後に `html-archive/` へ移動）
- `docs/MIGRATION_PROGRESS.md`、`CLAUDE.md` のアーキテクチャ一覧・移行テーブル

**Out of scope**（触らない）:

- 既存 35 ガイドの本文改訂（シラバス版追随は plans/003 の担当）
- `NavCategory` 型の再設計・カテゴリ体系変更（plans/002 の担当）
- `app/globals.css` のデザイントークン変更

## Git workflow

- ブランチ: `dev` から作業ブランチを切る（例: `feat/plan-001-<phase>`）か、
  運用者の指示に従う。push / PR は指示があるまで行わない
- コミット形式: `<type>(<scope>): <subject>`（既存 `git log` に倣う）

## Steps

フェーズ順 = 優先度順。各フェーズは独立して完了・コミットできる。

### Phase A: 章別詳解の体系化（滞留 9 組のルート化）

1. `docs/MIGRATION_PROGRESS.md` と `.claude/skills/html-to-nextjs-migration/SKILL.md` を読む
2. 1 章 = 1 ルートとして、`app/istqb-ctfl-v4-chapter1-fundamentals/` を手本に
   TDD サイクルで移行する。推奨スラッグ: `istqb-ctfl-v4-chapter<N>-<topic>` /
   `istqb-ctfl-at-chapter<N>-<topic>`（既存第 1 章と同形式）
3. 各章の移行完了ごとに: 元ファイルを `html-archive/` へ移動し、
   `NAV_ITEMS` に追加（カテゴリは既存章と同じ `istqb-foundation-ext`）、
   `docs/MIGRATION_PROGRESS.md` と `CLAUDE.md` を更新

**Verify**（各章ごと）: `bun run lint` → exit 0、`bun test` → 全件パス、
`ls <元ファイル名>` → No such file（ルート直下から消えている）

### Phase B: CT-FT（Finance Testing）ガイド新設

1. istqb.org の CT-FT v1.0 シラバス（公式 PDF）を一次情報源として内容を構成する。
   二次情報のみで本文を書かない
2. 既存 Specialist ガイド（手本: `app/istqb-ct-mat-complete-guide/`）と同じ構成
   （ヒーロー / 章別セクション / NavBar / 用語）で `app/istqb-ct-ft-complete-guide/` を作成
3. `NAV_ITEMS` に `category: 'istqb-specialist'` で追加。ページ内に
   「準拠シラバス: v1.0 / 最終確認日」を明記（plans/003 のメタデータ方式が
   実装済みならそれに従う）

**Verify**: Phase A と同じ + `bun run e2e` で新ルートがスモークを通過

### Phase C: 用語集（ISTQB Glossary 準拠）

1. `app/istqb-glossary/` を新設。まず CTFL v4.0 の頻出キーワード（各章の
   「キーワード」節に列挙済みの用語）から開始し、日英対訳 + 定義 + 出典章を表形式で持つ
2. データはページ内ハードコードでなく `lib/` 配下の型付き定数
   （例: `lib/glossary.ts`、`readonly` 配列 + interface）に分離し、
   テストでスキーマ（重複キーなし・空定義なし）を検証する

**Verify**: `bun test` に glossary スキーマ検証 spec が追加されパスする

### Phase D: 学習パス（資格ロードマップ）ページ

1. `app/certification-roadmap/` を新設。plans/000 §2 のランドスケープ
   （ISTQB レベル構造、JSTQB 日本語試験の時差、TMMi/IREB/A4Q/IAAP との関係）を
   1 ページに可視化する。Mermaid を使う場合は既存章ページのレンダリング実装に倣う
2. 各ノードから該当ガイドへ内部リンクする

**Verify**: Phase A と同じ

### Phase E: 模擬問題・演習（設計スパイクのみ — 本実装は別プラン）

1. 出題データ構造（設問・選択肢・解説・出典シラバス節・K レベル）の TypeScript 型と
   サンプル 5 問を `lib/` に定義し、表示だけの最小ページを 1 つ作る
2. **著作権制約を必ず調査すること**: ISTQB 公式サンプル試験の転載条件、
   JSTQB 過去問の利用条件を確認し、結果を `plans/README.md` に追記する。
   条件が不明・不許可なら自作問題のみとし、その方針を記録する

**Verify**: `bun test` にデータ構造検証 spec が追加されパスする

## Test plan

- 各新ページ: `tests/istqb-ctfl-v4-chapter1-fundamentals/` の spec を構造の手本に、
  見出し・主要セクション・外部リンク属性（`rel="noopener noreferrer"`）を検証する
  spec を**実装より先に**書く（TDD Red）
- データ層（Phase C/E）: スキーマ整合性の spec（重複・空値・型）
- E2E: 新ルートを `e2e/` のルート一覧に追加しスモーク通過を確認

## Done criteria

すべて機械検証可能であること:

- [ ] `bun run lint` → exit 0
- [ ] `bun test` → 全件パス（起点 161 specs から純増）
- [ ] `bun run e2e` → 新ルート含め全件パス
- [ ] ルート直下に章別 `.md` / `.html` が残っていない（Phase A 完了時）:
      `ls Ctfl-* Istqb-* 2>/dev/null` → 出力なし
- [ ] `docs/MIGRATION_PROGRESS.md` / `CLAUDE.md` / `plans/README.md` が更新済み
- [ ] 各フェーズが TDD サイクルのコミット分割（test → feat → refactor → docs）に
      なっている: `git log --oneline` で確認

## STOP conditions

以下に該当したら中断して報告する:

- `lib/navigation.ts` の構造が「Current state」の記述と一致しない
  （plans/002 が先に実行された可能性 — その場合は 002 後の新構造に従う旨を
  報告し、指示を待つ）
- CT-FT の公式シラバス PDF が istqb.org で見つからない、または有償でしか
  入手できない
- Phase E で ISTQB/JSTQB 公式問題の転載条件が確認できない（自作問題方針の
  承認を運用者に求める）
- 同一フェーズで `bun test` の失敗が修正 2 回で解消しない

## Maintenance notes

- Phase A 完了後、`CLAUDE.md` の「未移行 HTML」テーブルと
  「既知の留保事項」を必ず同期する（docs-sync スキルの対象）
- 章別ページが増えると `NAV_ITEMS` の `istqb-foundation-ext` が肥大化する —
  plans/002 の階層化がその受け皿。002 実装時に本プランで追加した項目の
  再分類を忘れないこと
- Phase B のガイドは plans/003 の鮮度メタデータ運用（準拠シラバス版・最終確認日）
  の最初の適用例にすること
