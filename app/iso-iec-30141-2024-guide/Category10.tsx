import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_9 } from './diagrams';
export default function Category10() { return <>
<h2 id="10-step-8-関連規格関連フレームワークとの関係">{" 10. Step 8: 関連規格・関連フレームワークとの関係 "}</h2>

<div className="mermaid-diagram" id="diagram-10" role="img" aria-label="図10: ISO/IEC 30141:2024IoT参照アーキテクチャ、ISO/IEC 20924IoTとデジタルツインの用語（規範的引用）、ISO/IEC/IEEE 42010:2022アーキテクチャ記述（準拠）、ISO/IEC TS 30149:2024IoTの信頼性原則（30141に基づく）、ISO/IEC 21823 シリーズIoTシステムの相互運用性、IIC IIRA産業用IoT参照アーキテクチャ（ISO/IEC 30141の第1版（2018）の土台の一つ）"><Mermaid chart={DIAGRAM_9} /></div>

<div className="table-scroll"><table><thead><tr className="header"><th>{"関連文書"}</th><th>{"関係"}</th><th>{"根拠"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"ISO/IEC 20924"}</strong></td><td>{"用語の定義元。本規格は用語をこれに従う"}</td><td>{"規格プレビューの2章・3章"}</td></tr><tr className="even"><td><strong>{"ISO/IEC/IEEE 42010:2022"}</strong></td><td>{"本規格が、アスペクト、パースペクティブ、決定事項、根拠を除き準拠するアーキテクチャ記述規格"}</td><td>{"ISO公式ページ、規格プレビュー"}</td></tr><tr className="odd"><td><strong>{"ISO/IEC TS 30149:2024"}</strong></td><td>{"「ISO/IEC 30141に基づくIoT信頼性の原則」。2024年5月発行"}</td><td>{" ISO公式ページ。TS 30149の目次には「ISO/IEC 30141との関係」図もあり "}</td></tr><tr className="even"><td><strong>{"ISO/IEC 21823 シリーズ"}</strong></td><td>{" IoTシステムの相互運用性（枠組み、トランスポート、意味、構文、振る舞い・ポリシー）。SC 41の規格群 "}</td><td>{" ISOのSC 41規格一覧。※部によって開発段階が異なる。最新状況はISOカタログで確認 "}</td></tr><tr className="odd"><td><strong>{"IIC IIRA"}</strong></td><td>{" 第1版（2018）は、IoT-AとIIRAなどのトップダウン／モデルベースの参照アーキテクチャの上に立つと学術論文が述べている。第2版はビジネス・利用・機能・構築といった視点の並びが似ている "}</td><td>{"Birmingham City University（ERAMIS論文）、IIC IIRA v1.10"}</td></tr></tbody></table></div>

<div className="callout"><p><strong>{"IIRAとの違い"}</strong>{": IIRAは"}<strong>{"産業分野（IIoT）"}<strong>{"に焦点を当てています。一方、30141は"}</strong>{"特定の産業に限定しない汎用的"}</strong>{"なIoT参照アーキテクチャです（ドイツの技術者Stefan Malich氏のブログが、規格の草案段階でそう整理しています）。 "}</p></div>

<hr />
</>; }
