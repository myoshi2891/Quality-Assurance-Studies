import React from 'react';
import Diagram from './Diagram';
export default function Section11() { return <><h2 id="sec-25">{"Step 5：リスクマネジメントを組み込む（箇条7）"}</h2>

<p>{" ISO 14971で機器全体のリスクを管理し、62304の箇条7は"}<strong>{"ソフトウェアに特有の部分"}</strong>{"を補います。 "}</p>

<Diagram id="mmd-10" />

<div className="table-scroll"><table><thead><tr className="header"><th>{"要点"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"分析の対象"}</td><td>{" ソフトウェアアイテムが危険状態の原因になりうるか。SOUPの既知の異常も確認する "}</td></tr><tr className="even"><td>{"リスクコントロール手段"}</td><td>{" ソフトウェアで実装するなら、要求として"}<strong>{"5.2に反映"}</strong></td></tr><tr className="odd"><td>{"検証"}</td><td>{" 実装した手段が"}<strong>{"有効に機能すること"}</strong>{"を確認し、記録する "}</td></tr><tr className="even"><td>{"変更時"}</td><td>{" 変更によって既存のリスクコントロール手段に影響が出ないか、新しい危険状態が生まれないかを評価 "}</td></tr></tbody></table></div>
</>; }
