import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
const LABELS: Record<string, string> = {
  "diagram-0": "SQL標準のパート構成",
  "diagram-1": "Part 1とPart 2の関係",
  "diagram-2": "SQLデータの階層",
  "diagram-3": "クライアントとサーバーの関係",
  "diagram-4": "必須機能とオプション機能",
  "diagram-5": "SQL:2023の変更点",
  "diagram-6": "プロパティグラフ問合せ",
  "diagram-7": "規格の改訂状況",
  "diagram-8": "学習ロードマップ"
};
// 図の関係・順序を支援技術へ伝える説明文（aria-describedby の参照先）
const DESCRIPTIONS: Record<string, string> = {
  "diagram-0": "ISO/IEC 9075 シリーズは Part 1 Framework、Part 2 Foundation、Part 3 CLI、Part 4 PSM、Part 9 MED、Part 10 OLB、Part 11 Schemata、Part 13 JRT、Part 14 XML、Part 15 MDA、2023年に新設された Part 16 PGQ で構成される。Part 1 は Part 2 と Part 16 に用語・表記・概念を提供する。",
  "diagram-1": "Part 1 の概念・用語・表記は、Part 2 の文法と動作の規定から前提として参照される。Part 4・14・16 などは Part 2 を拡張し、Part 1 も前提として参照する。",
  "diagram-2": "SQL環境（SQL-environment）はカタログを含み、カタログはスキーマを含み、スキーマはテーブル・ビュー・型・ルーチンなどの SQL オブジェクトを含み、SQL オブジェクトが実際の SQL データを保持する。",
  "diagram-3": "処理の順序：1. アプリケーション（SQL-agent）が SQL-client へ SQL文を発行する。2. SQL-client がセッションを確立し SQL-server へ送信する。3. SQL-server がデータに対して解析・実行する。4. データから SQL-server へ結果が戻る。5. SQL-server から SQL-client へ結果（または例外）が戻る。6. SQL-client がアプリケーションへ結果を返却する。",
  "diagram-4": "SQL標準の全機能は、必須機能の集合である Core SQL と、機能ごとに識別子を持つオプション機能に分かれる。Core SQL に準拠すれば最低限の標準準拠を主張でき、オプション機能はベンダーが機能単位で対応を宣言する。",
  "diagram-5": "SQL:2023 の変更点は、既存SQLの小さな改良、JSON関連の新機能、新パート Part 16 SQL/PGQ の3つに分かれる。",
  "diagram-6": "person テーブルを頂点、friendship テーブルを辺として PROPERTY GRAPH を定義し、GRAPH_TABLE と MATCH による問合せでパターンに一致した結果表を得る。",
  "diagram-7": "撤回済みの2016年版 9075-1:2016 から、現行・第6版の2023年版 9075-1:2023 へ改訂された。Cor 1:2022 は旧版に対する訂正である。現行版には発行済みの訂正 Cor 1:2026 があり、後継版 ISO/IEC CD 9075-1 が開発中である。",
  "diagram-8": "学習手順：① 本ガイドで全体像を把握する。② modern-sql.com で機能別の対応状況を確認する。③ 利用中DBの SQL Conformance ドキュメントを読む。④ 機能IDごとの適合テストを作成する。⑤ 必要に応じて ISO OBP で規格本文を確認する。"
};
export default function Diagram({ id }: { id: string }) {
  const descId = `${id}-desc`;
  return <div className="mermaid-diagram" id={id} role="img" aria-label={LABELS[id]} aria-describedby={descId}><p id={descId} hidden>{DESCRIPTIONS[id]}</p><Mermaid chart={DIAGRAMS[id]!} /></div>;
}
