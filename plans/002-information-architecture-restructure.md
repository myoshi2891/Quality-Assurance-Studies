# Plan 002: 情報アーキテクチャを多軸メタデータ駆動に再構成する

> **Executor instructions**: このプランをステップ順に実行すること。各ステップの
> 検証コマンドを実行し、期待結果を確認してから次へ進む。「STOP conditions」に
> 該当したら中断して報告する。完了したら `plans/README.md` の該当ステータス行を
> 更新する。
>
> **Drift check（最初に実行）**: `git diff --stat 9cf98a6..HEAD -- lib/ components/Header.tsx tests/lib tests/components app/page.tsx`
> in-scope ファイルに変更があれば「Current state」の抜粋と実物を突合し、
> 不一致なら STOP condition として扱う。

## Status

- **Priority**: P1（他プランの基盤。最初に実行することを推奨）
- **Effort**: M
- **Risk**: MED（全 36 ルートのナビに影響。ただし E2E スモークで全ルート検証可能）
- **Depends on**: なし
- **Category**: direction / tech-debt
- **Planned at**: commit `9cf98a6`, 2026-07-06

## Why this matters

現行のナビ体系は `lib/navigation.ts` の `NavCategory`（6 値の文字列 union）1 軸のみで、
ISTQB 単一ボードを前提としている。今後の拡張（JSTQB 固有情報、TMMi/IREB/A4Q/IAAP
等の非 ISTQB 資格、章別詳解・用語集・模擬問題などのコンテンツ種別 — plans/001）を
受け入れるには、「資格ボード × レベル × コンテンツ種別」の多軸メタデータが必要。
また現状はカテゴリ追加のたびに `NavCategory` 型・`CATEGORY_ORDER`・`CATEGORY_TITLES`
の 3 箇所を手動同期する必要があり、拡張コストと不整合リスクの源になっている。

## Current state

- `lib/navigation.ts`（117 行、リポジトリ唯一の `lib/` モジュール）:
  - `NavCategory` union（14〜20 行目）:

    ```ts
    export type NavCategory =
      | 'home'
      | 'foundation'
      | 'istqb-foundation-ext'
      | 'istqb-advanced'
      | 'istqb-specialist'
      | 'istqb-expert';
    ```

  - `NavItem` は `href` / `label` / `category` / `badge?` のみ（22〜27 行目）
  - `NAV_ITEMS`: 36 項目の `readonly NavItem[]`（35〜77 行目）
  - `CATEGORY_ORDER`（79〜86 行目）と `CATEGORY_TITLES`（88〜95 行目）が
    別定数として存在 — 冒頭 doc コメント自身が「3 箇所を同期して拡張する」と
    明記している（= 設計上の既知の弱点）
  - `groupByCategory(items)` が `NavGroup[]` を返す（104〜116 行目）
- `components/Header.tsx`: `groupByCategory(NAV_ITEMS)` でドロワーを描画。
  `g.category !== 'home'` のときのみ見出し表示、`aria-current="page"` 付与
- テスト: `tests/lib/`（navigation のユニットテスト）と `tests/components/`
  （Header のテスト）が存在。**変更前に必ず既存 spec を読むこと**
- `app/page.tsx`（ホーム、約 3200 行）にもガイドへのリンクカードがあるが、
  `NAV_ITEMS` とは独立にハードコードされている（本プランでは統合しない — Out of scope）
- TypeScript strict / `any` 禁止 / `const` デフォルトが規約
  （`CLAUDE.md`、`.claude/rules/tdd-mandatory-cycle.md` の TDD サイクル必須）

## 目標設計（target shape）

`NavItem` を多軸メタデータに拡張する。表示グルーピングは従来どおり 1 軸
（`category` 相当）から導出し、**URL・ページ構造は変更しない**（純粋にデータ層の再設計）。

```ts
export type CertBoard = 'istqb' | 'jstqb' | 'tmmi' | 'ireb' | 'a4q' | 'iaap' | 'none';
export type CertLevel = 'foundation' | 'advanced' | 'expert' | 'specialist' | 'none';
export type ContentType =
  | 'guide'        // 完全ガイド（現行 35 ページ）
  | 'chapter'      // 章別詳解
  | 'glossary'     // 用語集
  | 'practice'     // 模擬問題・演習
  | 'roadmap'      // 学習パス
  | 'home';

export interface NavItem {
  href: string;
  label: string;
  board: CertBoard;
  level: CertLevel;
  contentType: ContentType;
  /** 準拠シラバス版（plans/003 が使用。例: '4.0'） */
  syllabusVersion?: string;
  badge?: string;
}
```

- 表示グループは `deriveCategory(item)` 純関数で従来 6 カテゴリへ写像し、
  既存の `groupByCategory` の出力形（`NavGroup[]`）と表示順を**完全に維持**する
  （後方互換）。順序とタイトルは 1 つの設定オブジェクト
  （`CATEGORY_CONFIG: ReadonlyArray<{ key, title }>`）に統合し、3 箇所同期を解消する
- 新ボード追加時は `CertBoard` への追加 + `CATEGORY_CONFIG` への 1 エントリ追加のみで
  済むこと（型の網羅性チェックで漏れをコンパイルエラーにする）

## Commands you will need

| 目的 | コマンド | 成功時の期待結果 |
|---|---|---|
| 依存インストール | `bun install` | exit 0 |
| Lint | `bun run lint` | exit 0 |
| ユニットテスト | `bun test` | 全件パス（起点: 161 specs） |
| 対象テストのみ | `bun test tests/lib tests/components` | 全件パス |
| E2E スモーク | `bun run e2e` | 全 36 ルートパス |

## Scope

**In scope**:

- `lib/navigation.ts`（型と定数の再設計）
- `tests/lib/` `tests/components/` の対応 spec（先に Red を書く）
- `components/Header.tsx`（`groupByCategory` の呼び出しが変わる場合のみ最小変更）

**Out of scope**（触らない）:

- 各ページの `href`（URL）変更・リダイレクト追加 — 既存リンク・E2E を壊すため
- `app/page.tsx` のカードとの統合（有望な後続タスクだが、3200 行の巨大ファイルで
  リスクが別次元。別プランとして起票すること）
- 各ガイド `page.tsx` 本文・CSS
- ドロワー UI の視覚デザイン変更

## Git workflow

- ブランチ: `dev` から `feat/plan-002-nav-metadata` 等を切るか運用者指示に従う。
  push / PR は指示があるまで行わない
- TDD コミット分割必須: `test(nav): add failing spec for multi-axis nav metadata` →
  `feat(nav): ...` → `refactor(nav): ...`

## Steps

### Step 1: 既存挙動の固定（characterization）

`tests/lib/` の既存 spec を読み、現在の `groupByCategory(NAV_ITEMS)` の出力
（グループ数・順序・各グループの項目数と見出し）を網羅的に固定する spec を追加する。
これが後方互換の検証ゲートになる。

**Verify**: `bun test tests/lib` → 追加分含め全件パス（既存挙動の固定なので Green）

### Step 2: 新型の失敗テスト（Red）

新 `NavItem` 形（board / level / contentType）と `deriveCategory` の期待挙動、
`CATEGORY_CONFIG` 一元化の spec を書く。この時点では実装がないため失敗する。

**Verify**: `bun test tests/lib` → 新規 spec が失敗（コンパイルエラーも Red とみなす）。
コミット: `test(nav): add failing spec for multi-axis nav metadata`

### Step 3: 型と定数の実装（Green）

「目標設計」どおりに `lib/navigation.ts` を書き換える。36 項目それぞれに
board / level / contentType を付与（例: CTFL ガイド → `istqb` / `foundation` /
`guide`、基礎テスト手法 8 ガイド → `none` / `none` / `guide`）。
`groupByCategory` の公開シグネチャと出力形は維持する。

**Verify**: `bun test` → 全件パス（Step 1 の characterization spec が後方互換を保証）。
コミット: `feat(nav): introduce multi-axis nav metadata with derived categories`

### Step 4: Header の追随とリファクタ

`components/Header.tsx` に変更が必要なら最小限で追随。網羅性チェック
（`satisfies` や `never` チェック）で将来のボード追加漏れをコンパイル時に検出できる
形へ整える。

**Verify**: `bun test tests/components` → 全件パス、`bun run lint` → exit 0。
コミット: `refactor(nav): consolidate category config and exhaustiveness checks`

### Step 5: 全ルート回帰

**Verify**: `bun run e2e` → 全 36 ルートパス（ナビ経由の到達性が壊れていないこと）。
`bun run build` は実行せず、運用者にビルド確認を依頼する

## Test plan

- Step 1: characterization spec（グループ順序・件数・タイトルの完全一致）
- Step 2〜3: 新メタデータの spec — 全 36 項目に board/level/contentType が付与済み、
  `deriveCategory` の写像が仕様どおり、`CATEGORY_CONFIG` にないカテゴリが
  導出されない、重複 `href` がない
- 構造の手本: `tests/lib/` の既存 navigation spec に倣う

## Done criteria

- [ ] `bun run lint` → exit 0
- [ ] `bun test` → 全件パス（characterization + 新 spec）
- [ ] `bun run e2e` → 全 36 ルートパス
- [ ] `grep -n "CATEGORY_TITLES\|CATEGORY_ORDER" lib/navigation.ts` →
      旧 2 定数が `CATEGORY_CONFIG` に統合され、別定数としては存在しない
- [ ] ドロワーの表示グループ・順序が変更前と同一（Step 1 spec がその証明）
- [ ] `plans/README.md` のステータス行更新

## STOP conditions

- `lib/navigation.ts` の実物が「Current state」の抜粋と一致しない
- Step 1 の characterization spec 作成中に、現行 `groupByCategory` の挙動が
  `components/Header.tsx` 以外からも参照されていると判明した場合
  （`grep -rn "groupByCategory\|NAV_ITEMS" app/ components/ lib/ tests/` で確認し、
  想定外の参照元があれば報告）
- Step 3 完了後に characterization spec が失敗し、修正 2 回で解消しない
  （後方互換が壊れている — 設計を差し戻して報告）

## Maintenance notes

- 以後の新ページ追加者は `NAV_ITEMS` 1 エントリに board / level / contentType を
  必ず付与する。`lib/navigation.ts` 冒頭の doc コメントを新方式に書き換えること
- `syllabusVersion` フィールドは plans/003 が消費する接続点。003 実行者は
  この型を変更せず利用すること
- `app/page.tsx` のカードを `NAV_ITEMS` から生成する統合は意図的に見送った
  （3200 行ファイルの改修リスク）。実施する場合は characterization テストを
  先に整備する別プランとして起票する
