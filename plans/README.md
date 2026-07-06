# Implementation Plans

improve スキル（direction 特化監査）により 2026-07-06 に生成
（基準 commit: `9cf98a6`）。実行者への指示: 依存関係が許す限り下表の順に実行し、
各プランを開始前に全文読み、STOP conditions を厳守し、完了時に自分の行の
Status を更新すること。

## Execution order & status

| Plan | Title | Priority | Effort | Depends on | Status |
|------|-------|----------|--------|------------|--------|
| [000](000-platform-audit-and-direction.md) | プラットフォーム現状監査と拡張方向性 | — | — | — | DONE（監査レポート。実行対象外） |
| [002](002-information-architecture-restructure.md) | IA を多軸メタデータ駆動に再構成 | P1 | M | — | TODO |
| [003](003-syllabus-catchup-pipeline.md) | シラバス改訂キャッチアップ機構の確立 | P1 | M | 002 | TODO |
| [001](001-content-category-expansion.md) | 試験対策コンテンツカテゴリの拡張 | P1 | L | （推奨: 002） | TODO |

Status values: TODO | IN PROGRESS | DONE | BLOCKED（1 行の理由付き）|
REJECTED（1 行の根拠付き — 独立に解消済み、または方針放棄）

### plans/003 Step 4 で起票される後続タスク（スタブ）

| 後続タスク | 発生源 | Status |
|---|---|---|
| CTFL-AT ガイドの CTAL-AT v2.0 対応（改称含む） | 003 | 未起票 |
| CTAL-TA ガイドの v4.0 対応（JSTQB 日本語試験 2026-11 切替） | 003 | 未起票 |
| CT-AI ガイドの v2.0 対応（リリース日は要一次確認） | 003 | 未起票 |
| CT-GenAI ガイドの v1.1 差分反映 | 003 | 未起票 |

## Dependency notes

- **003 → 002**: 003 の Step 2（`NavItem.syllabusVersion` の付与）は 002 が導入する
  フィールドを前提とする。002 未完了時、003 は台帳（`docs/SYLLABUS_STATUS.md`）の
  作成までに縮退可能（003 冒頭の Depends on 参照）
- **001 →（推奨）002**: 001 の新カテゴリ（用語集・学習パス・非 ISTQB 資格）は
  002 の多軸メタデータがあると自然に収まる。ただし 001 Phase A（章別詳解の
  ルート化）は既存カテゴリで収容できるため 002 を待たずに着手可能
- 001 Phase B（CT-FT ガイド）は 003 の鮮度メタデータ方式の最初の適用例とすること

## Findings considered and rejected

（再監査の重複を防ぐための記録）

- **CompTIA Security+ / PSM / CSM 等のガイド新設**: テスト資格ではないため対象外。
  既存ガイド内での言及に留める（plans/000 §2.4）
- **GAQM 系資格のカバー**: 業界認知度が低く一次情報が薄い。見送り（plans/000 §2.4）
- **シラバス巡回の CI 自動化（クローラー）**: 外部サイト負荷・利用規約・誤検知
  リスクから見送り。手動 SOP を採用（plans/003 Maintenance notes）
- **`app/page.tsx` のカードと `NAV_ITEMS` の統合**: 有望だが 3200 行ファイルの
  改修リスクが別次元のため 002 のスコープから除外。実施するなら
  characterization テスト整備を含む別プランとして起票（plans/002 Maintenance notes）

## 監査のスコープ注記

本 plans/ は direction（方向性・拡張）特化の監査に基づく。correctness / security /
performance / test-quality / tech-debt / dependencies / DX / docs の各カテゴリは
未監査 — 必要になったら improve スキルの standard / deep 監査を別途実行する。
