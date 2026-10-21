import React from 'react';
import Diagram from './Diagram';
export default function Section02() { return <><h2 id="sec-2">{"2. IEC 62304とは何か"}</h2>

<h3 id="sec-3">{"2.1 目的"}</h3>

<p>{" 規格の公式概要では、医療機器ソフトウェアのライフサイクル要求事項を定め、"}<strong>{"プロセス・活動・タスクの共通の枠組み"}</strong>{"を確立するものとされています。ソフトウェアが医療機器そのものである場合と、医療機器に組み込まれている場合の双方で、"}<strong>{"開発と保守"}</strong>{"に適用されます。 "}</p>

<h3 id="sec-4">{"2.2 なぜ必要なのか"}</h3>

<Diagram id="mmd-0" label="ソフトウェアの不具合が患者・使用者への危害につながる流れ" />

<p>{" ハードウェアと違い、ソフトウェアは「摩耗」では壊れません。壊れるのは"}<strong>{"設計・実装・変更管理のミス"}</strong>{"です。だから品質は完成品の検査だけでは担保できず、作り方（プロセス）を管理する必要があります。これが62304の根本的な考え方です。 "}</p>

<h3 id="sec-5">{"2.3 規格が「やらないこと」"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"やらない"}</th><th>{"補足"}</th></tr></thead><tbody><tr className="odd"><td>{"特定の開発ライフサイクルモデルの指定"}</td><td>{"モデルは自分で選び、規格の活動との対応を説明する"}</td></tr><tr className="even"><td>{"医療機器としてのバリデーション、最終リリース"}</td><td>{"別の規格・規制で扱う"}</td></tr><tr className="odd"><td>{"品質マネジメントシステムそのものの定義"}</td><td>{"ISO 13485等を前提とする"}</td></tr><tr className="even"><td>{"サイバーセキュリティ要求の詳細"}</td><td>{"別規格（IEC 81001-5-1等）と併用する"}</td></tr></tbody></table></div>
</>; }
