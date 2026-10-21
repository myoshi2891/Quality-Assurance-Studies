import React from 'react';
import Diagram from './Diagram';
export default function Section17() { return <><h2 id="sec-35">{"17. QAエンジニア視点のチェックポイント"}</h2>

<h3 id="sec-36">{"17.1 トレーサビリティの全体像"}</h3>

<Diagram id="mmd-15" label="トレーサビリティの全体像" />

<h3 id="sec-37">{"17.2 チェックリスト"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"観点"}</th><th>{"確認内容"}</th><th style={{"textAlign":"center"}}>{"状態"}</th></tr></thead><tbody><tr className="odd"><td>{"計画"}</td><td>{"開発計画書が最新の運用を反映しているか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="even"><td>{"分類"}</td><td>{"安全クラスの判定根拠が記録されているか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="odd"><td>{"要求"}</td><td>{"各要求が曖昧さなくテスト可能か"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="even"><td>{"リスク"}</td><td>{"リスクコントロール手段が要求・テストまで追跡できるか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="odd"><td>{"設計"}</td><td>{"セグリゲーションの根拠が文書化されているか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="even"><td>{"検証"}</td><td>{"ユニット検証の受入基準が事前に定義されているか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="odd"><td>{"テスト"}</td><td>{"全要求がシステムテストでカバーされているか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="even"><td>{"回帰"}</td><td>{"変更時の回帰テストの範囲が根拠付きか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="odd"><td>{"SOUP（識別・全クラス）"}</td><td>{" 使用するSOUPごとに、名称・製造者（提供元）・版などの識別情報が記録されているか "}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="even"><td>{"SOUP（異常リスト・クラスB/C）"}</td><td>{" クラスB・Cでは、SOUPの既知異常リストを評価した結果が記録されているか（クラスAでは要求されない） "}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="odd"><td>{"リリース"}</td><td>{"既知の残存異常が評価・文書化されているか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="even"><td>{"変更"}</td><td>{"変更要求から検証までの記録がつながるか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr><tr className="odd"><td>{"保守"}</td><td>{"市販後の問題を受付・評価する手順が動いているか"}</td><td style={{"textAlign":"center"}}>{"☐"}</td></tr></tbody></table></div>
</>; }
