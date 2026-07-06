# Plan 000: プラットフォーム現状監査と拡張方向性（Direction Audit）

> 本ドキュメントは improve スキル（senior advisor モード）による direction 特化監査の成果物である。
> コード品質・セキュリティ・パフォーマンス等の全カテゴリ監査は今回のスコープ外
> （未監査領域は末尾「監査しなかった範囲」を参照）。
> 実装は行わない。実行可能な計画は `plans/001`〜`plans/003` に分離してある。

## Status

- **種別**: 監査レポート（direction findings）— 実行対象ではなく、001〜003 の根拠資料
- **Planned at**: commit `9cf98a6`, 2026-07-06
- **調査手段**: リポジトリ読み取り（読み取り専用）+ Web 調査（2026-07-06 時点）

## 1. 現状棚卸し

### 1.1 プラットフォーム概要

「現代ソフトウェアテスト完全ガイド 2025」— ISTQB 準拠の QA 学習用静的サイト。

- **スタック**: Next.js (App Router) + Tailwind CSS v4 + TypeScript (strict) + Bun
- **ルート数**: 36（ホーム + 35 ガイド）
- **検証基盤**: `bun test`（161 specs）/ Playwright スモーク E2E（全 36 ルート）/ Lighthouse CI
- **ナビゲーション SSOT**: `lib/navigation.ts` の `NAV_ITEMS`（36 項目・6 カテゴリ）

### 1.2 情報アーキテクチャ（IA）の現状

`lib/navigation.ts` の `NavCategory` が事実上のカテゴリ体系:

| カテゴリ | タイトル | ルート数 |
|---|---|---|
| `home` | ホーム | 1 |
| `foundation` | 基礎テスト手法 | 8（テスト手法 / AI テスト / unit / integration×2 / E2E / 受入 / BDD） |
| `istqb-foundation-ext` | ISTQB Foundation Extension | 3（CTFL v4.0 / CTFL v4.0 第 1 章 / CTFL-AT） |
| `istqb-advanced` | ISTQB Advanced | 6（CTAL-TAE / TA / TM / TTA / ATT / CT-ATLaS） |
| `istqb-specialist` | ISTQB Specialist | 13（CT-AI / GenAI / MBT / AuT / AcT / MAT / SEC / STE / GaMe / TAS / PT / UT / GT） |
| `istqb-expert` | ISTQB Expert | 5（CTEL-ATP / ITPI / TM-SM / TM-OTM / TM-MTT） |

### 1.3 章別学習コンテンツの現状（IA の萌芽と負債）

- ルート化済み: `app/istqb-ctfl-v4-chapter1-fundamentals/` のみ（CTFL v4.0 第 1 章）
- **ルート直下に未移行の章別 Markdown/HTML が 9 組残存**:
  CTFL v4 第 2〜6 章（`Ctfl-v4-chapter2-sdlc-and-testing.md` 等）、
  CTFL-AT 第 1〜3 章（`Ctfl-at-chapter1-agile-software-development.md` 等）
- `git log` 直近 30 コミットの大半がこの章別コンテンツの追加・修正 —
  **章別詳解が現在の実質的な開発方向**であり、IA がそれに追随できていない

### 1.4 ガイドのメタデータ現状

各ガイドページには「準拠シラバスバージョン」「最終確認日」の構造化メタデータが存在しない。
`NAV_ITEMS` も `href` / `label` / `category` のみで、資格ボード・レベル・シラバス版を持たない。

## 2. 資格ランドスケープ調査結果（2026-07-06 時点）

### 2.1 ISTQB の直近の動き（公式: [istqb.org](https://istqb.org/)）

| 動き | 日付 | 本プラットフォームへの影響 |
|---|---|---|
| **CT-FT（Finance Testing）v1.0 新設** | 2026-05-27 | **未カバー**。Specialist の新資格 |
| **CT-AI v2.0 リリース**（v1.0 を置換、ML/GenAI テスト重視に再編） | 2026-04-17 | 既存 CT-AI ガイドの準拠版要確認 |
| **CTAL-TA v4.0 リリース**（v3.1 は英語版 2026-05-16 / 非英語版 2026-11-16 に廃止） | 2025-05-02 | 既存 CTAL-TA ガイドの準拠版要確認 |
| **CTAL-AT v2.0 リリース**（**CTFL-AT を置換**） | 2025〜2026（要確認） | 既存 CTFL-AT ガイドは旧体系。改称・改訂が必要 |
| CT-GenAI v1.1（マイナー更新） | 要確認 | 既存 CT-GenAI ガイドの準拠版要確認 |

出典: [ISTQB 公式](https://istqb.org/)、[CTAL-TA v4.0 プレスリリース](https://istqb.org/istqb-certified-tester-advanced-level-test-analyst-ctal-ta-v4-0-press-release/)、[ISTQB 認定一覧（istqb.com ※非公式ミラーの可能性、公式は istqb.org）](https://www.istqb.com/certifications/)、[MSTB: CTAL-AT v2.0](https://mstb.org/istqb-ctal-at-v2-0/)

> **注**: `istqb.guru` / `istqb.com` 由来の情報（CT-AI v2.0 の日付等）は二次情報。
> plans/003 のパイプラインで公式 istqb.org の Syllabus ページから一次確認すること。

### 2.2 JSTQB（日本語展開、公式: [jstqb.jp](https://www.jstqb.jp/)）

- CTAL-TA 日本語版シラバス **Version 4.0.J01 を 2026-06-12 公開**。
  対象試験は 2026 年 11 月中旬開始予定、それまで v3.1.1J03 試験を継続
- 日本語受験者にとって「ISTQB 原文の改訂 → JSTQB 日本語版の追随 → 日本語試験切替」の
  **タイムラグ自体が重要な試験対策情報**（どの版で受験すべきかの判断材料）
- 出典: [JSTQB CTAL-TA v4.0.J01 シラバス PDF](https://www.jstqb.jp/wordpress/wp-content/uploads/2026/06/JSTQB-Syllabus.Advanced_TA_VersionV4.0.J01.pdf)、[プレスリリース](https://prtimes.jp/main/html/rd/p/000000054.000054604.html)

### 2.3 ISTQB 以外の国際資格（未カバー領域）

| 資格体系 | 発行体 | 概要 | 関連度 |
|---|---|---|---|
| TMMi Professional / Test Process Improver | TMMi Foundation（試験は [GASQ](https://www.gasq.org/en/certification/tmmi.html) 等） | テストプロセス成熟度。CTEL-ITP 系ガイドと隣接 | 高 |
| IREB CPRE（Foundation/Advanced） | IREB | 要件エンジニアリング。ISTQB 公式アライアンス | 高 |
| A4Q Selenium 4 Tester / Appium / SDET | A4Q（[iSQI](https://isqi.org/) 経由） | 自動化実技系。CTAL-TAE/CT-TAS と補完関係 | 高 |
| TMAP 系 | Sogeti | テストマネジメント方法論 | 中 |
| UXQB CPUX | UXQB | ユーザビリティ。CT-UT と隣接 | 中 |
| IQBBA CFLBA | IQBBA | ビジネス分析。ISTQB 公式アライアンス | 中 |
| QAI CSTE / CSQA | QAI | 北米系の老舗テスター資格 | 低〜中 |
| iSAQB CPSA | iSAQB | ソフトウェアアーキテクチャ（品質特性の設計側） | 低 |
| IAAP CPACC / WAS / CPWA | [IAAP](https://www.accessibilityassociation.org/certification-overview) | アクセシビリティ。QA エンジニアの受験例多数 | 高 |

出典: [iSQI](https://isqi.org/Software-Testing-Quality/)、[GASQ TMMi](https://www.gasq.org/en/certification/tmmi.html)、[IAAP](https://www.accessibilityassociation.org/certification-overview)、[ANZTB](https://www.anztb.org/certification/)

### 2.4 ギャップ表（カバレッジ判定）

| 判定 | 対象 |
|---|---|
| ✅ カバー済み | ISTQB CTFL / CTAL 全 6 / CT-Specialist 13 / CTEL 5、基礎テスト手法 8 ガイド |
| ⚠️ カバー済みだが改訂追随が必要 | CTFL-AT（→ CTAL-AT v2.0 へ置換された）、CTAL-TA（v4.0）、CT-AI（v2.0）、CT-GenAI（v1.1） |
| ❌ 未カバー（ISTQB） | **CT-FT（Finance Testing）v1.0** |
| ❌ 未カバー（非 ISTQB・優先度高） | TMMi Professional、IREB CPRE、A4Q 自動化系、IAAP CPACC/WAS |
| ❌ 未カバー（カテゴリ自体が不在） | JSTQB 固有情報（日本語シラバス版・試験日程・CBT/PBT）、模擬問題・演習、用語集（ISTQB Glossary）、学習パス／資格ロードマップ |
| 対象外と判断 | CompTIA Security+ 等の純セキュリティ資格・PSM/CSM 等のアジャイル資格（テスト資格でないため。既存ガイド内での言及に留める）、GAQM 系（業界認知度が低く一次情報が薄い） |

## 3. Direction Findings（vetted）

| # | Finding | 根拠 | Impact | Effort | 対応計画 |
|---|---|---|---|---|---|
| D1 | **シラバス改訂追随の仕組みが無い**。CTFL-AT は CTAL-AT v2.0 に置換され、CTAL-TA v4.0・CT-AI v2.0 が出たが、各ガイドに準拠版・最終確認日のメタデータが無く、陳腐化を検知できない | §1.4, §2.1 | 高（誤情報での受験リスク） | M | plans/003 |
| D2 | **新設・未カバー資格**: CT-FT v1.0（2026-05 新設）、非 ISTQB（TMMi/IREB/A4Q/IAAP）と JSTQB 固有情報のカテゴリが不在 | §2.3, §2.4 | 高 | M〜L | plans/001 |
| D3 | **試験対策カテゴリの不在**: ガイド（読み物）のみで、模擬問題・演習、用語集、学習パスが無い。章別詳解も CTFL 第 1 章のみルート化され残り 9 組がルート直下に滞留 | §1.3, §2.4 | 高（「対策」プラットフォームとしての中核機能） | L | plans/001 |
| D4 | **IA が ISTQB 単一ボード前提**。`NavCategory` が `istqb-*` 固定で、資格ボード別 × レベル別の 2 軸や章別階層を表現できない。拡張のたびに型・順序・タイトルの 3 箇所同期が必要 | §1.2, `lib/navigation.ts:14-20` | 中（拡張の前提条件） | M | plans/002 |
| D5 | サイト名「完全ガイド 2025」が 2026 年時点で陳腐化を示唆。鮮度を年号でなくメタデータ（最終確認日）で示す方式への転換が必要 | `app/layout.tsx` メタデータ | 低 | S | plans/003 に包含 |

**推奨実行順**: 002（IA 基盤）→ 003（鮮度メタデータ + キャッチアップ運用）→ 001（コンテンツ拡張）。
ただし 001 の個別コンテンツ追加は 002 完了を待たず現行パターン（NAV_ITEMS 1 行追加）でも着手可能。

## 4. 今後扱うべきカテゴリ体系（提案サマリ）

詳細設計は plans/001（コンテンツ）・plans/002（IA）に委ねるが、方向性は以下:

1. **資格ボード軸**: ISTQB / JSTQB（日本語展開・試験運用情報）/ その他国際資格（TMMi・IREB・A4Q・IAAP）
2. **レベル軸**: Foundation / Advanced / Expert / Specialist（現行を維持）
3. **コンテンツ種別軸**（新設）: 完全ガイド / 章別詳解 / 模擬問題・演習 / 用語集 / 学習パス / 更新情報（シラバス改訂トラッカー）
4. **鮮度管理**: 全ガイドに「準拠シラバス vX.Y・最終確認日」を構造化メタデータとして付与し、公式一次情報源の定期巡回で更新（plans/003）

## 5. 監査しなかった範囲

- correctness / security / performance / test-quality / tech-debt / dependencies / DX / docs の
  各カテゴリ監査（direction 特化のため）。必要なら improve スキルの standard/deep 監査を別途実行する
- 各ガイド本文とシラバス原文の逐条突合（plans/003 の実行時に実施する作業として定義）
- Web 調査は 2026-07-06 時点のスナップショット。二次情報源由来の日付には「要確認」を明記した
