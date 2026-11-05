import React from 'react';
import Diagram from './Diagram';
export default function Category() { return <>
<h2 id="step-2-歴史と版の関係を押さえる">{"Step 2. 歴史と版の関係を押さえる"}</h2>
{"\n            "}
<h3 id="21-時系列">{"2.1 時系列"}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-2" />
{"\n            "}
<h3 id="22-いちばん大事な注意点初学者がつまずく所">{"\n                2.2 いちばん大事な注意点（初学者がつまずく所）\n            "}</h3>
{"\n            "}
<div aria-label="表：2.2 いちばん大事な注意点の質問と答え" className="table-scroll" role="region" tabIndex={0}>{"\n                "}<table><thead><tr className="header"><th>{"質問"}</th><th>{"答え"}</th></tr></thead><tbody><tr className="odd"><td>{"ISO/IEC 40500:2025 の中身は WCAG 2.2 のどの版か"}</td><td><strong>{"2023年10月版"}</strong>{"の WCAG 2.2 と同一（W3C の説明）"}</td></tr><tr className="even"><td>{"最新の W3C 勧告 WCAG 2.2 は何版か"}</td><td><strong>{"2024年12月12日版"}</strong>{"（軽微な編集上の更新を含む）"}</td></tr><tr className="odd"><td>{"両者は違うのか"}</td><td>{"\n                                編集上の更新に由来する差が生じています。W3C は 2024年12月版が\n                                "}<strong>{"2026年末ごろ ISO/IEC 40500:2026 として利用可能になる"}</strong>{"と見込んでいます\n                            "}</td></tr><tr className="even"><td>{"新しい達成基準が増えたり減ったりしたか"}</td><td>{"\n                                2024年12月版は「軽微な編集更新」とされており、達成基準の追加・削除はありません\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<p>{"\n                "}<strong>{"実務での考え方"}</strong>{": 実装・テストは、W3C の最新 WCAG\n                2.2（"}<code>{"https://www.w3.org/TR/WCAG22/"}</code>{"）を一次資料にして問題ありません。ISO/IEC\n                40500:2025 は「国際標準として引用するための正式な参照先」と考えてください。\n            "}</p>
{"\n            "}
<h3 id="23-wcag-22-と過去版の互換性">{"2.3 WCAG 2.2 と過去版の互換性"}</h3>
{"\n            "}
<ul>{"\n                "}<li>{"\n                    WCAG 2.2 に適合するコンテンツは、WCAG 2.0 と 2.1 にも適合します（2.2 は 2.1\n                    に新しい達成基準を"}<strong>{"追加"}</strong>{"した構造）。ただし 4.1.1（構文解析）は 2.2 で削除されたため、契約・調達要件や法令が WCAG 2.0 または 2.1 を参照している場合は、2.2 への適合だけでは足りず、引き続き 4.1.1 の試験と報告が求められることがあります。\n                "}</li>{"\n                "}<li>{"\n                    WCAG 2.2 の公開で、2.0 や 2.1 が廃止されたわけではありません。ただし W3C\n                    は、将来にわたる有効性を最大化するため\n                    "}<strong>{"最新の WCAG 2.2 の利用を推奨"}</strong>{"しています。\n                "}</li>{"\n            "}</ul>
{"\n            "}
</>; }
