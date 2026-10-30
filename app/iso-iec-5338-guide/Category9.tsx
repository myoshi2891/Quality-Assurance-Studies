import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_6, DIAGRAM_7 } from './diagrams';
export default function Category9() { return <>
<h2 id="step-8-機械学習モデル開発はどのプロセスに対応するか">{"Step 8. 機械学習モデル開発は、どのプロセスに対応するか"}</h2>

<p>{"規格は、ML モデル開発の技術的な作業が、ライフサイクルプロセスにどう組み込まれるかを示しています。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"MLの作業"}</th><th>{"対応するプロセス"}</th></tr></thead><tbody><tr className="odd"><td>{"モデルへの要件を決める"}</td><td>{"System requirements definition（6.4.3）"}</td></tr><tr className="even"><td>{"データを取得・更新する"}</td><td>{"AI data engineering（6.4.8）"}</td></tr><tr className="odd"><td>{"データを準備する"}</td><td>{"AI data engineering（6.4.8）"}</td></tr><tr className="even"><td>{"モデルを（再）学習・チューニングする"}</td><td>{"Implementation（6.4.9）と Maintenance（6.4.16）"}</td></tr><tr className="odd"><td>{"展開前にモデルをテストする"}</td><td>{"Verification（6.4.11）"}</td></tr><tr className="even"><td>{"モデルを展開する"}</td><td>{"Transition（6.4.12）"}</td></tr><tr className="odd"><td>{"展開後にモデルをテストする"}</td><td>{"Continuous validation（6.4.14）"}</td></tr></tbody></table></div>

<div className="mermaid-diagram" id="diagram-7" role="img"><Mermaid chart={DIAGRAM_6} /></div>

<blockquote className="callout-note"><p>{"📌 "}<strong>{"Model Engineering が独立プロセスでない理由"}</strong>{" SIG の解説によれば、「モデルエンジニアリング」という AI 活動は、ライフサイクルの観点では既存の "}<strong>{"Implementation プロセスにうまく収まる"}</strong>{"ため、別プロセスとしては立てられていません。"}</p></blockquote>

<h3 id="8-1-ライフサイクルは直線ではなく反復する">{"8-1. ライフサイクルは直線ではなく反復する"}</h3>

<div className="mermaid-diagram" id="diagram-8" role="img"><Mermaid chart={DIAGRAM_7} /></div>

<p>{"規格は、再評価ステージの中で開発と展開が"}<strong>{"何度も繰り返される"}</strong>{"ことを例示しています（バグ修正やシステム更新のため）。"}</p>

<hr />

</>; }
