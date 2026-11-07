import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
// 図の内容を読み上げで追えるよう、図番号だけの既定名の代わりに全ノードと接続を文章で示す。
const LABELS: Record<string,string> = {
  'mmd-4': 'IEC 62304 図 5：箇条5の開発プロセスを構成する8つの活動の順序。5.1 開発計画、5.2 要求事項分析、5.3 アーキテクチャ設計、5.4 詳細設計、5.5 ユニット実装と検証、5.6 統合と統合テスト、5.7 システムテスト、5.8 リリースの順に進む。',
  'mmd-5': 'IEC 62304 図 6：ソフトウェア安全クラスごとに求められる活動の積み上がり。クラス A は計画・要求・実装・システムテスト・リリース。クラス B は A に加えて アーキテクチャ・ユニット検証・統合テスト。クラス C は B に加えて 詳細設計・追加受入基準・分離の識別。',
  'mmd-16': 'IEC 62304 図 17：初めて 62304 に取り組む手順の8ステップ。Step 1 製品の意図する用途と規制上の位置づけを確認、Step 2 QMS とリスクマネジメントの土台を確認、Step 3 ソフトウェアシステムを識別し安全クラスを仮決定、Step 4 開発計画 SDP を作成、Step 5 要求 → 設計 → 実装 → テストをトレーサビリティ付きで実施、Step 6 SOUP 一覧と構成管理を整備、Step 7 リリース判定と記録の確認、Step 8 保守・問題解決の運用開始の順に進む。Step 8 からは Step 3 へフィードバックが戻る。',
};
export default function Diagram({id,describedBy}: {id:string;describedBy?:string}) { return <div className="mermaid-diagram" id={id} role="img" aria-label={LABELS[id] ?? 'IEC 62304 図 '+(Number(id.split('-')[1])+1)} aria-describedby={describedBy}><Mermaid chart={DIAGRAMS[id]!} /></div>; }
