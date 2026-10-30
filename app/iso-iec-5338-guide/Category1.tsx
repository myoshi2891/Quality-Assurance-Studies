import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_0 } from './diagrams';
export default function Category1() { return <>
<h2 id="0-このガイドの使い方">{"0. このガイドの使い方"}</h2>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{"ISO/IEC 5338 が「何を」「なぜ」「どう」定めているかを、順を追って理解する"}</td></tr><tr className="even"><td>{"進め方"}</td><td>{"Step 1 → Step 10 の順に読む。各 Step は独立しても読める"}</td></tr><tr className="odd"><td>{"表記ルール"}</td><td>{"図解は Mermaid（フローチャート）と Markdown 表のみ使用"}</td></tr><tr className="even"><td>{"注意"}</td><td>{"規格本文は有料かつ著作権保護のため、本書は公開情報（ISO公式ページ・FDISプレビュー・専門家の解説）に基づく"}<strong>{"要約と解説"}</strong>{"です。適合性判断・監査対応には必ず正式な規格本文を参照してください"}</td></tr></tbody></table></div>

<h3 id="全体ロードマップ">{"全体ロードマップ"}</h3>

<div className="mermaid-diagram" id="diagram-1" role="img"><Mermaid chart={DIAGRAM_0} /></div>

<hr />

</>; }
