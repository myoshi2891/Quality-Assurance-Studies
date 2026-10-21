import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
const LABELS: Record<string, string> = {
  "diagram-1": "学習ロードマップ",
  "diagram-2": "従来の項目定義と11179の登録方式",
  "diagram-3": "Part 1の立ち位置",
  "diagram-4": "11179ファミリーの構造",
  "diagram-5": "2023年版の新旧比較",
  "diagram-6": "データエレメントの主要概念",
  "diagram-7": "オブジェクトクラスとプロパティ",
  "diagram-8": "値領域を構成する要素",
  "diagram-9": "意味を共有する複数の表現",
  "diagram-10": "主要概念のクラス図",
  "diagram-11": "概念レベルと表現レベル",
  "diagram-12": "レジストリ登録のシーケンス",
  "diagram-13": "周辺規格との関係",
  "diagram-14": "新しいデータ項目を登録する判断フロー"
};
export default function Diagram({ id }: { id: string }) { return <div className="mermaid-diagram" id={id} role="img" aria-label={LABELS[id]}><Mermaid chart={DIAGRAMS[id]!} /></div>; }
