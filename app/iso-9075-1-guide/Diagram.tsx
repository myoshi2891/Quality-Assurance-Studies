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
export default function Diagram({ id }: { id: string }) { return <div className="mermaid-diagram" id={id} role="img" aria-label={LABELS[id]}><Mermaid chart={DIAGRAMS[id]!} /></div>; }
