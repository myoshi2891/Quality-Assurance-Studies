import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
const LABELS: Record<string, string> = {
  "mmd-1": "ISO/IEC 9075 の各パート11件を示す一覧図。配置は順序や依存関係を表さない。Part 1 Frameworkは本ガイドの対象、Part 2 Foundationは中核言語、Part 16 PGQは2023で新設。ほかにPart 3 CLI、Part 4 PSM、Part 9 MED、Part 10 OLB、Part 11 Schemata、Part 13 JRT、Part 14 XML、Part 15 MDAがある。",
  "mmd-2": "Part 1の規定引用の影響を示す流れ図。Part 1 Frameworkは他パートを日付なしで引用する。そのため常に最新版の他パートと整合し、結果としてPart 1だけでは仕様が完結しない。",
  "mmd-3": "初学者向けの読む順番を示す流れ図。STEP1：4章 概念、STEP2：5章 パート紹介、STEP3：6章 記法、STEP4：9章 適合性、STEP5：Annex B と Cの順に読む。",
  "mmd-4": "SQLが実行される流れの概念図。アプリ側の実行主体であるSQL-agentが、SQL-implementation内のSQL-clientへSQL文を渡す。SQL-clientはSQL-serverへ要求する。SQL-serverは表やビューの入れ物であるSQL-schemaへつながり、さらに格納された行であるSQL-dataへつながる。",
  "mmd-5": "標準準拠を主張したい場合の判断フロー。Core SQLの必須機能を満たすか判定する。満たさない場合（いいえ）は準拠を主張できない。満たす場合（はい）は最小適合の要件を確認し、追加機能も主張するか判定する。追加機能も主張する場合（はい）は機能ID単位で対応を宣言し、実装定義の要素は実装側で決めて文書化する。追加機能を主張しない場合（いいえ）はCore SQLの範囲で主張し、実装定義の要素は実装側で決めて文書化する。",
  "mmd-6": "SQL:2023の変更を3系統に分けた分類図。枝分かれは順序ではなく分類を表す。言語の小さな改善にはF292 UNIQUE NULLS、T054 GREATEST/LEAST、T626 ANY_VALUEが属する。JSON関連にはT801 JSON型、T860-T864 簡易アクセサ、T865-T878 項目メソッドが属する。新Part 16 SQL/PGQにはCREATE PROPERTY GRAPH、GRAPH_TABLE と MATCHが属する。",
  "mmd-7": "SQL/PGQの処理の流れ図。既存の表である頂点表と辺表をもとに、ビューに似た定義であるCREATE PROPERTY GRAPHを作る。次にGRAPH_TABLE と MATCHを使い、グラフパターンで検索する。結果は通常の行と列で返り、JOINや集計と組み合わせ可能。",
  "mmd-8": "PostgreSQL 19のSQL/PGQの経緯を示す時系列図。2026年6月のPG19 beta1は早期版SQL/PGQを含む。2026-08-25にRobert Haas氏がrevert候補をML上で問う。2026-09-07にSQL/PGQをrevertし、47コミットを巻き戻した。2026-09-24のPG19 beta4で複数機能のrevertを告知した。2026-10-15はRC1予定、2026-11-19はGA予定で、RC2は11-12予定。",
  "mmd-9": "ISO/IEC 9075-1の版の流れ図。9075-1:2016は撤回済み、Cor 1:2022も撤回済み。9075-1:2023は第6版 2023-06で、2025-06-22に改訂予定ステージへ移った。続いてCor 1:2026が2026-08-03に出た。CD 9075-1は次期版 開発中。",
  "mmd-10": "DBMSの対応状況に応じた構文選択フロー。対象DBMSの適合性一覧を確認し、使いたい機能の機能IDを特定して、DBMSが対応しているか判定する。対応している場合（はい）は標準構文を採用し、標準構文の移植テストを作成する。対応していない場合（いいえ）は方言構文を分離して隔離し、方言差を吸収するテストを作成する。"
};
export default function Diagram({ id }: { id: string }) {
    return <div className="mermaid-diagram" id={id} role="img" aria-label={LABELS[id]} tabIndex={0}><Mermaid chart={DIAGRAMS[id]!} /></div>;
}
