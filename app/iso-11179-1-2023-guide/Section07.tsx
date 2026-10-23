import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-6概念レベルと表現レベルの2層構造">{"STEP\n6：概念レベルと表現レベルの2層構造"}</h2>

<p>{"MDR（メタデータレジストリ）は、"}<strong>{"概念レベル"}</strong>{"と"}<strong>{"表現レベル"}</strong>{"の2つに整理して理解すると見通しが立ちます（LLNL\nの解説論文の整理に基づく）。"}</p>

<div className="table-scroll"><table aria-labelledby="step-6概念レベルと表現レベルの2層構造"><thead><tr className="header"><th>{"レベル"}</th><th>{"含まれるクラス"}</th><th>{"問い"}</th></tr></thead><tbody><tr className="odd"><td>{"概念レベル"}</td><td>{"データエレメントコンセプト、概念領域"}</td><td>{"「それは"}<strong>{"何を意味するか"}</strong>{"」"}</td></tr><tr className="even"><td>{"表現レベル"}</td><td>{"データエレメント、値領域"}</td><td>{"「それを"}<strong>{"どう表すか"}</strong>{"」"}</td></tr></tbody></table></div>

<Diagram id="diagram-11" />

<h3 id="6-1-semantic意味であってphysical物理ではない">{"6-1.\n「semantic（意味）」であって「physical（物理）」ではない"}</h3>

<div className="table-scroll"><table aria-labelledby="6-1-semantic意味であってphysical物理ではない"><thead><tr className="header"><th>{"観点"}</th><th>{"11179 の構成要素"}</th><th>{"物理テーブル／列"}</th></tr></thead><tbody><tr className="odd"><td>{"抽象度"}</td><td>{"意味的（semantic）"}</td><td>{"物理的（physical）"}</td></tr><tr className="even"><td>{"依存先"}</td><td>{"システムに依存しない"}</td><td>{"DBMS・スキーマに依存"}</td></tr><tr className="odd"><td>{"目的"}</td><td>{"共有・再利用・合意"}</td><td>{"保存・検索・性能"}</td></tr></tbody></table></div>

<div className="callout callout-practice"><span className="callout-icon">{"💡"}</span><div className="callout-body"><div className="callout-title">{"実務への示唆"}</div><p>{"11179 の DE\nは「物理列の説明」ではなく「"}<strong>{"列が従うべき意味と値の約束"}</strong>{"」です。物理列は、DE\nを参照して作る"}<strong>{"実装"}</strong>{"と捉えるとスッキリします。"}</p></div></div>

</>; }
