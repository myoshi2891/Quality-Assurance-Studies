import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
const LABELS: Record<string, string> = {
  "mmd-1": "ISO/IEC 9075 の各パート → Part 1Framework本ガイドの対象 → Part 2Foundation中核言語 → Part 3CLI → Part 4PSM → Part 9MED → Part 10OLB → Part 11Schemata → Part 13JRT → Part 14XML → Part 15MDA → Part 16PGQ2023で新設",
  "mmd-2": "Part 1Framework → 他パートを日付なしで引用 → 常に最新版の他パートと整合 → Part 1だけでは仕様が完結しない",
  "mmd-3": "STEP1：4章 概念 → STEP2：5章 パート紹介 → STEP3：6章 記法 → STEP4：9章 適合性 → STEP5：Annex B と C",
  "mmd-4": "SQL-implementation → SQL-agentアプリ側の実行主体 → SQL-client → SQL-server → SQL-schema表やビューの入れ物 → SQL-data格納された行",
  "mmd-5": "標準準拠を主張したい → Core SQLの必須機能を満たす? → 準拠は主張できない → 最小適合の要件を確認 → 追加機能も主張する? → 機能ID単位で対応を宣言 → Core SQLの範囲で主張 → 実装定義の要素は実装側で決めて文書化 → 実装定義の要素は実装側で決めて文書化",
  "mmd-6": "SQL:2023の変更 → 言語の小さな改善 → JSON関連 → 新Part 16SQL/PGQ → F292 UNIQUE NULLS → T054 GREATEST/LEAST → T626 ANY_VALUE → T801 JSON型 → T860-T864簡易アクセサ → T865-T878項目メソッド → CREATEPROPERTY GRAPH → GRAPH_TABLEと MATCH",
  "mmd-7": "既存の表頂点表と辺表 → CREATE PROPERTY GRAPHビューに似た定義 → GRAPH_TABLE と MATCHグラフパターンで検索 → 結果は通常の行と列 → JOINや集計と組み合わせ可能",
  "mmd-8": "2026年6月PG19 beta1早期版SQL/PGQを含む → 2026-08-25Robert Haas氏がrevert候補をML上で問う → 2026-09-07SQL/PGQをrevert47コミットを巻き戻し → 2026-09-24PG19 beta4複数機能のrevertを告知 → 2026-10-15RC1予定 → 2026-11-19GA予定RC2は11-12予定",
  "mmd-9": "9075-1:2016撤回済み → Cor 1:2022撤回済み → 9075-1:2023第6版 2023-06 → 2025-06-22改訂予定ステージへ → Cor 1:20262026-08-03 → CD 9075-1次期版 開発中",
  "mmd-10": "対象DBMSの適合性一覧を確認 → 使いたい機能の機能IDを特定 → DBMSが対応している? → 標準構文を採用 → 方言構文を分離して隔離 → 標準構文の移植テストを作成 → 方言差を吸収するテストを作成"
};
export default function Diagram({ id }: { id: string }) {
    return <div className="mermaid-diagram" id={id} role="img" aria-label={LABELS[id]} tabIndex={0}><Mermaid chart={DIAGRAMS[id]!} /></div>;
}
