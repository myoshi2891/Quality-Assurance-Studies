import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
// role="img" の下では図の文字を読み上げられないため、図番号だけの名前の代わりに全ノードと接続を文章で示す。
const LABELS: Record<string,string> = {
  'mermaid-diagram-1': 'ISO/IEC 19770-1 図 1：規格の版の変遷。2006：初版（ソフトウェア資産管理のプロセス）、2012：第2版（SAMプロセスと段階的適合性評価）、2017：第3版（ITAMシステム要求事項へ全面改訂）、2024：定期見直しで確認（現行維持）と Amd 1（気候変動対応）発行、2025：実装ガイダンス（ISO/IEC TS 19770-10 発行）の順に進む。',
  'mermaid-diagram-2': 'ISO/IEC 19770-1 図 2：ISO/IEC 19770-1:2017 の構成。本文 箇条1〜3（適用範囲・引用規格・用語）、本文 箇条4〜10（マネジメントシステム要求事項）、Annex A（規定）（ITAMプロセス領域）、Annex B（参考）（3つのティア）、Annex C（参考）（IT資産の特性と追加要求の理由）の5つに分かれる。箇条4〜10 は ISO 55001の要求事項をベースに拡張する。Annex A では 適用するITAMプロセスを組織が決定し適用宣言書に記録する。Annex B は 導入順序の推奨を示す。',
  'mermaid-diagram-3': 'ISO/IEC 19770-1 図 3：箇条とPDCAサイクルの対応。Plan 計画は 箇条4 組織の状況、箇条5 リーダーシップ、箇条6 計画、箇条7 支援。Do 実行は 箇条8 運用（Annex Aプロセス）。Check 評価は 箇条9 パフォーマンス評価。Act 改善は 箇条10 改善。箇条4から箇条10まで順に進み、箇条10から箇条4へ点線で戻る（継続的改善）。',
  'mermaid-diagram-4': 'ISO/IEC 19770-1 図 4：ISO 55001 との関係。ISO 55001:2014 アセットマネジメント（主に物理資産向け）に変更を加えて拡張したものが ISO/IEC 19770-1:2017 ITアセットマネジメントである。ISO/IEC 19770-1:2017 には IT資産ならではの追加要求事項がある。注意点として、19770-1への適合は55001への適合を意味しない。',
  'mermaid-diagram-5': 'ISO/IEC 19770-1 図 5：IT資産ライフサイクルの流れ。仕様策定、調達、開発、リリース、展開、運用、廃棄の順に進み、廃棄から仕様策定へ点線で戻る（再利用・教訓）。Trustworthy Data（変更・データ・ライセンス・セキュリティ）は仕様策定と運用に関連し、Optimization（関係・財務・SLA）は運用に関連する。',
  'mermaid-diagram-6': 'ISO/IEC 19770-1 図 6：3つのティアの積み上げ。マネジメントシステム（箇条4〜10）が全ティアの土台となる。その上に Tier 1：Trustworthy Data 信頼できるデータ『持っているものを知る』、Tier 2：Life Cycle Integration ライフサイクル統合『IT資産ライフサイクルで効率とコスト効果を上げる』、Tier 3：Optimization 最適化『機能横断の連携で更なる効率とコスト効果』の順に積み上がる。',
  'mermaid-diagram-7': 'ISO/IEC 19770-1 図 7：データの状態がもたらす2つの流れ。データが不正確だと、ライセンス過不足の誤判断につながり、監査での追徴リスクまたは過剰購入に至る。一方、Trustworthy Data確立により正確な把握ができ、契約交渉・最適化が可能になる。',
  'mermaid-diagram-8': 'ISO/IEC 19770-1 図 8：導入ロードマップの8ステップ。① 目的・経営課題の整理（箇条4・5）、② 適用範囲（スコープ）決定（対象資産・拠点・環境）、③ 現状把握（ベースライン）（As-Isの台帳・ツール・プロセス）、④ ITAM方針・目的・役割定義（箇条5・6）、⑤ Tier 1：Trustworthy Data構築（棚卸し・突合・ライセンス把握）、⑥ Tier 2：ライフサイクル統合（調達・展開・廃棄との連携）、⑦ Tier 3：最適化（財務・契約・SLA連携）、⑧ 評価と改善（箇条9・10）（内部監査・マネジメントレビュー）の順に進む。⑧から点線で③へ戻り、継続する。',
  'mermaid-diagram-9': 'ISO/IEC 19770-1 図 9：ISO/IEC 19770 ファミリーの構成。19770-1:2017 ITAMシステム要求事項（本書）、19770-2 ソフトウェア識別タグ（SWID）、19770-3 権利（Entitlement）スキーマ、19770-4 リソース使用量、19770-5:2015 概要と用語、19770-10:2025（TS） ITAM実装ガイダンスから成る。19770-5:2015 は 19770-1:2017 の用語を定義し、19770-10:2025（TS） は 19770-1:2017 の実装の手引きとなる。',
  'mermaid-diagram-10': 'ISO/IEC 19770-1 図 10：他のマネジメントシステム規格との統合。共通の骨格（箇条4〜10）から ISO/IEC 19770-1 ITAM、ISO/IEC 27001 ISMS、ISO/IEC 20000-1 ITSM、ISO 9001 QMS が派生する。ISO/IEC 19770-1 と ISO/IEC 27001 は相互に資産台帳・変更履歴を共有し、ISO/IEC 19770-1 と ISO/IEC 20000-1 は相互に構成情報・SLAを共有する。',
};
export default function Diagram({id}: {id:string}) { return <div className="mermaid-diagram" id={id} role="img" aria-label={LABELS[id]}><Mermaid chart={DIAGRAMS[id]!} /></div>; }
