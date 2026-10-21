import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-7レジストリの運用と役割">{"STEP\n7：レジストリの運用と役割"}</h2>

<h3 id="7-1-登録して終わりではない">{"7-1. 「登録して終わり」ではない"}</h3>

<p>{"MDR は、データエレメントなどの"}<strong>{"メタデータ項目（Administered\nItem）を登録・管理・共有する仕組み"}</strong>{"です。そのため、定義だけでなく"}<strong>{"誰が責任を持つか"}</strong>{"の枠組みが必要になります。"}</p>

<p>{"LLNL\nの解説では、登録と運用に関わる主要な概念として次が挙げられています。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"役割／概念"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"Registration Authority（RA／登録機関）"}</td><td>{"MDR を運営する"}<strong>{"責任組織"}</strong></td></tr><tr className="even"><td>{"Submitter（提出者）"}</td><td>{"新しい項目を"}<strong>{"登録申請"}</strong>{"する側"}</td></tr><tr className="odd"><td>{"Steward（管理者）"}</td><td>{"項目の"}<strong>{"内容に責任"}</strong>{"を持つ側"}</td></tr><tr className="even"><td>{"Registrar（登録官）"}</td><td>{"登録の"}<strong>{"手続きを担当"}</strong>{"する役"}</td></tr><tr className="odd"><td>{"Context（コンテキスト）"}</td><td>{"項目が"}<strong>{"どの文脈で使われるか"}</strong>{"の区分"}</td></tr></tbody></table></div>

<h3 id="7-2-登録の概念的な流れイメージ">{"7-2.\n登録の概念的な流れ（イメージ）"}</h3>

<div className="callout callout-note"><span className="callout-icon">{"ℹ️"}</span><div className="callout-body"><p>{"下図は役割を理解するための"}<strong>{"概念図"}</strong>{"です。実際の登録状態や手続きの詳細は\nPart 6 などの原典で確認してください。"}</p></div></div>

<Diagram id="diagram-12" />

<h3 id="7-3-命名定義のルールは別パートへ">{"7-3.\n命名・定義のルールは別パートへ"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"テーマ"}</th><th>{"担当パート"}</th><th>{"Part 1 での扱い"}</th></tr></thead><tbody><tr className="odd"><td>{"定義の書き方"}</td><td>{"Part 4"}</td><td>{"全体像の案内"}</td></tr><tr className="even"><td>{"命名・識別の原則"}</td><td>{"Part 5"}</td><td>{"全体像の案内"}</td></tr><tr className="odd"><td>{"登録・ライフサイクル"}</td><td>{"Part 6"}</td><td>{"全体像の案内"}</td></tr></tbody></table></div>

</>; }
