import React from 'react';
export default function Category6() { return <>
<h2 id="step-5-規格の構成目次を把握する">{"Step 5. 規格の構成（目次）を把握する"}</h2>

<p>{"規格本文の構成は次のとおりです（FDISプレビューの目次に基づく）。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"箇条"}</th><th>{"タイトル"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"Scope"}</td><td>{"適用範囲"}</td></tr><tr className="even"><td>{"2"}</td><td>{"Normative references"}</td><td>{"引用規格（15288, 12207, 22989, 23053）"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"Terms and definitions"}</td><td>{"用語定義（例：knowledge acquisition）"}</td></tr><tr className="even"><td>{"4"}</td><td>{"Abbreviated terms"}</td><td>{"略語（AI, ML）"}</td></tr><tr className="odd"><td>{"5"}</td><td>{"Key concepts"}</td><td>{"基本概念（3種類のプロセス、AIの特徴、ライフサイクルモデル、適合性）"}</td></tr><tr className="even"><td>{"6"}</td><td>{"AI system life cycle processes"}</td><td><strong>{"本体：プロセスの詳細（6.1〜6.4）"}</strong></td></tr><tr className="odd"><td>{"Annex A"}</td><td>{"Observations based on use cases in ISO/IEC TR 24030"}</td><td>{"ユースケースに基づく所見（参考）"}</td></tr><tr className="even"><td>{"Bibliography"}</td><td>{"参考文献"}</td><td>{"—"}</td></tr></tbody></table></div>

<h3 id="5-1-第5章の中身">{"5-1. 第5章の中身"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"節"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"5.1 General"}</td><td>{"3種類のプロセスとAIの8つの特徴"}</td></tr><tr className="even"><td>{"5.2 AI system concepts"}</td><td>{"モデルには ML モデルとヒューリスティックモデルがあり、"}<strong>{"データと知識の両方が必須"}</strong></td></tr><tr className="odd"><td>{"5.3 AI system life cycle model"}</td><td>{"特定のライフサイクルを"}<strong>{"規定しない"}</strong>{"。AI固有プロセスが生じうる場所を示す"}</td></tr><tr className="even"><td>{"5.4 Process concepts"}</td><td>{"プロセスの基準、記述方法、適合性（Conformance）"}</td></tr></tbody></table></div>

<blockquote className="callout-note"><p>{"📌 "}<strong>{"重要"}</strong>{"：規格は「ウォーターフォールで進めよ」「アジャイルで進めよ」といった"}<strong>{"特定のライフサイクルを強制しません"}</strong>{"。各ステージは繰り返されうる（例：再評価ステージで開発と展開を何度も繰り返す）ことが前提です。"}</p></blockquote>

<hr />

</>; }
