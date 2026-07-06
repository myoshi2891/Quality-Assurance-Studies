# Plan 003: シラバス改訂キャッチアップ機構を確立する（鮮度メタデータ + 定期巡回運用）

> **Executor instructions**: このプランをステップ順に実行すること。各ステップの
> 検証コマンドを実行し、期待結果を確認してから次へ進む。「STOP conditions」に
> 該当したら中断して報告する。完了したら `plans/README.md` の該当ステータス行を
> 更新する。
>
> **Drift check（最初に実行）**: `git diff --stat 9cf98a6..HEAD -- lib/ components/ docs/ app/layout.tsx`
> in-scope ファイルに変更があれば「Current state」の抜粋と実物を突合し、
> 不一致なら STOP condition として扱う。

## Status

- **Priority**: P1
- **Effort**: M（機構の確立）+ 継続運用（巡回ごとに S）
- **Risk**: LOW（メタデータ付与と運用ドキュメントが主体。本文改訂は差分検知後の別作業）
- **Depends on**: plans/002（`NavItem.syllabusVersion` フィールドを使うため。
  002 未完了の場合は Step 2 の保持場所を `docs/SYLLABUS_STATUS.md` のみとし、
  コード変更を保留する）
- **Category**: direction / docs
- **Planned at**: commit `9cf98a6`, 2026-07-06

## Why this matters

本サイトは 35 の資格ガイドを持つが、各ガイドが「どのシラバス版に準拠しているか」
「いつ最後に公式情報と突合したか」を記録していない。2026-07 時点で判明しているだけでも:

- CTFL-AT は **CTAL-AT v2.0 に置換**された（本サイトのガイドは旧 CTFL-AT のまま）
- CTAL-TA は **v4.0** がリリース済み（2025-05-02。旧 v3.1 は英語版 2026-05-16 廃止、
  非英語版 2026-11-16 廃止予定）。JSTQB 日本語版 v4.0.J01 は 2026-06-12 公開、
  日本語試験は 2026-11 中旬切替予定
- CT-AI は **v2.0**（2026-04-17、二次情報 — 要一次確認）、CT-GenAI は v1.1

「最新情報をキャッチアップできるプラットフォーム」を名乗るには、(a) 準拠版の宣言、
(b) 公式一次情報源の定期巡回、(c) 差分の記録と改訂タスク化、の 3 点が仕組みとして
必要である。サイトタイトルの「2025」も鮮度を年号で示す方式の限界を示している。

## Current state

- 各ガイド `app/<slug>/page.tsx` に準拠シラバス版・最終確認日の構造化表記なし
- `lib/navigation.ts` の `NavItem` にメタデータフィールドなし
  （plans/002 完了後は `syllabusVersion?: string` が存在する）
- `docs/` 配下にシラバス版管理ドキュメントなし（`MIGRATION_PROGRESS.md` は
  移行管理専用）
- `app/layout.tsx` のサイトメタデータに「現代ソフトウェアテスト完全ガイド 2025」
  の年号あり（実物を確認すること）
- docs-sync スキル（`.claude/skills/` 配下）が仕様書群の同期更新を扱う —
  本プランで新設するドキュメントも対象に追加する

### 公式一次情報源レジストリ（Step 1 でドキュメント化する内容の種）

| ボード | 情報源 | 監視対象 |
|---|---|---|
| ISTQB | [istqb.org](https://istqb.org/)（Certifications / News） | シラバス新版・新資格・廃止予定日 |
| JSTQB | [jstqb.jp](https://www.jstqb.jp/)（シラバスダウンロード / ISTQB NEWS） | 日本語版シラバス公開・試験切替日程 |
| JSTQB 試験運用 | [ピアソン VUE JSTQB](https://www.pearsonvue.com/jp/ja/jstqb.html)、[日科技連 SQiP](https://www.juse.or.jp/sqip/qualification/jstqb/foundation_cbt.html) | CBT/PBT 日程・申込条件 |
| ISTQB 用語集 | glossary.istqb.org | 用語定義の改訂 |
| TMMi | [GASQ TMMi](https://www.gasq.org/en/certification/tmmi.html)、tmmi.org | 資格体系の変更 |
| IREB | ireb.org | CPRE シラバス改訂 |
| A4Q / iSQI | [isqi.org](https://isqi.org/) | 自動化系資格の改廃 |
| IAAP | [accessibilityassociation.org](https://www.accessibilityassociation.org/certification-overview) | CPACC/WAS の Body of Knowledge 改訂 |

## Commands you will need

| 目的 | コマンド | 成功時の期待結果 |
|---|---|---|
| Lint | `bun run lint` | exit 0 |
| ユニットテスト | `bun test` | 全件パス |
| Markdown リント | `node node_modules/markdownlint-cli/markdownlint.js docs/SYLLABUS_STATUS.md` | 出力なし・exit 0 |

## Scope

**In scope**:

- `docs/SYLLABUS_STATUS.md`（新規 — 版管理台帳 + 巡回手順）
- `lib/navigation.ts` の `syllabusVersion` 値の付与（002 完了後のみ）
- 各ガイドページへの鮮度表記の追加（共通コンポーネント 1 つ +
  各 `page.tsx` への 1 行挿入に限る）
- `app/layout.tsx` のタイトル年号の扱い（Step 5）
- `CLAUDE.md` / docs-sync スキルへの台帳追加の反映

**Out of scope**（触らない）:

- **ガイド本文のシラバス新版への改訂そのもの**（差分検知後に 1 ガイド = 1 プランで
  起票する。本プランは機構の確立まで）
- 自動クローラー・CI での外部サイト巡回（外部サイトへの負荷と利用規約の問題。
  巡回は人間/エージェントの手動運用とする）
- 模擬問題・用語集の新設（plans/001）

## Git workflow

- ブランチ: `dev` から `feat/plan-003-syllabus-status` 等を切るか運用者指示に従う。
  push / PR は指示があるまで行わない
- コード変更を伴うステップは TDD コミット分割（test → feat → refactor）に従う

## Steps

### Step 1: 版管理台帳 `docs/SYLLABUS_STATUS.md` を作成する

以下の構成で新規作成する:

1. **台帳テーブル**: 全 35 ガイド × （対応ルート / 資格 / 準拠シラバス版 /
   公式最新版 / 状態〔最新・要改訂・要確認〕/ 最終確認日 / 一次情報源 URL）。
   初期値には本プラン「Why this matters」と plans/000 §2 の判明事実を転記し、
   一次確認できていない項目（CT-AI v2.0 の日付等）は状態を「要確認」とする
2. **公式一次情報源レジストリ**: 上記「Current state」の表を転記・拡充
3. **巡回手順**（運用 SOP）: 四半期に 1 回（および JSTQB の試験切替月の前月）、
   レジストリの各情報源を確認 → 台帳の「公式最新版」「最終確認日」を更新 →
   「要改訂」になったガイドを 1 件 = 1 プランとして `plans/` に起票、という手順を
   チェックリスト形式で明文化する

**Verify**: `node node_modules/markdownlint-cli/markdownlint.js docs/SYLLABUS_STATUS.md`
→ exit 0。台帳の行数 = 35（ガイド数）であること

### Step 2: 鮮度メタデータをデータ層に付与する（002 完了後のみ）

`lib/navigation.ts` の各ガイド項目に `syllabusVersion` を付与する（台帳と同値）。
台帳と `NAV_ITEMS` の版表記が一致することを検証する spec を `tests/lib/` に追加する
（Red → Green の順でコミット）。

**Verify**: `bun test tests/lib` → 全件パス

### Step 3: ページ上の鮮度表記コンポーネント

`components/SyllabusBadge.tsx`（仮名）を新設: 「準拠シラバス vX.Y ・最終確認
YYYY-MM-DD」を表示する小さな Server Component。既存の `.badge-istqb` 系 CSS
クラス（`app/globals.css` 定義済み）を再利用し、新規グローバル CSS を追加しない。
まず 1 ガイド（推奨: 改訂が判明している `app/istqb-ctal-ta-complete-guide/`）に
導入して表示を確認し、残りは機械的に展開する。

**Verify**: `bun test` → コンポーネント spec（`tests/components/` に追加）パス、
`bun run lint` → exit 0

### Step 4: 判明済み改訂のタスク起票

台帳で「要改訂」となった 4 件について、後続プランのスタブを `plans/README.md` の
ステータス表に追記する（プラン本文の作成は運用者の選択に委ねる）:

- CTFL-AT ガイド → CTAL-AT v2.0 対応（改称含む・影響最大）
- CTAL-TA ガイド → v4.0 対応（JSTQB 日本語試験は 2026-11 切替 — それまで両版併記が親切）
- CT-AI ガイド → v2.0 対応（一次確認後）
- CT-GenAI ガイド → v1.1 差分反映

**Verify**: `plans/README.md` に 4 行が追加されていること

### Step 5: サイトタイトルの年号問題を運用者に提起する

`app/layout.tsx` の「完全ガイド 2025」について、(a) 年号を外す、(b) 毎年更新する、
(c) 現状維持、の選択肢と推奨（a — 鮮度は SyllabusBadge が示すため）を運用者に
提示し、**指示を得てから**変更する。SEO・OGP に影響するため無断変更しない。

**Verify**: 運用者の回答が得られるまでこのステップは PENDING として報告

## Test plan

- `tests/lib/`: 台帳（`docs/SYLLABUS_STATUS.md`）と `NAV_ITEMS.syllabusVersion` の
  整合 spec（台帳をパースするテストが壊れやすければ、版定数を `lib/` に持ち
  台帳生成の一方向同期にする — その判断は実装時に行い README に記録）
- `tests/components/`: SyllabusBadge の表示 spec（版・日付の描画、`aria` 属性）
- 既存 spec の構造に倣う（`tests/components/` の Header spec が手本）

## Done criteria

- [ ] `docs/SYLLABUS_STATUS.md` が存在し、35 ガイド全行 + 情報源レジストリ +
      巡回 SOP を含む。markdownlint → exit 0
- [ ] `bun run lint` / `bun test` → exit 0・全件パス
- [ ] 判明済み改訂 4 件が `plans/README.md` に起票済み
- [ ] `CLAUDE.md` に台帳の存在と運用ルールが追記済み（docs-sync 対象化）
- [ ] Step 5 の提起が運用者に報告済み（回答待ちは BLOCKED ではなく完了扱い）

## STOP conditions

- plans/002 が未完了で、かつ運用者から「コード変更も進めよ」と指示された場合
  （依存関係の逆転 — 002 を先に実行すべきと報告する）
- istqb.org / jstqb.jp の構造が変わり、一次情報源の URL が台帳作成中に
  確認できない（見つかった代替 URL を報告し、確認を求める）
- 台帳整合 spec の設計（Step 2）で Markdown パースが 2 回の試行で安定しない
  （方式判断を運用者に仰ぐ）

## Maintenance notes

- 巡回は自動化しない設計判断（外部サイト負荷・規約・誤検知リスク）。
  ただし将来 ISTQB が RSS/JSON フィードを提供したら再検討する価値がある —
  巡回 SOP にその確認項目を含めておく
- ガイド新設時（plans/001 の各フェーズ）は台帳への行追加が必須。
  docs-sync スキルのチェック項目に含めること
- レビュー時の注視点: SyllabusBadge の日付が「ページ更新日」でなく
  「公式情報との最終突合日」であること — 意味の取り違えが最も起きやすい
