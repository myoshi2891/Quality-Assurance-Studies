import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_10 } from './diagrams';

export default function Category11() {
    return <>
<h2 id="11-関連する規格フレームワークとの違い">{" 11. 関連する規格・フレームワークとの違い "}</h2>
{" "}
<div aria-label="表：11 関連する規格・フレームワークとの違い" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"文書"}</th><th>{"発行元"}</th><th>{"位置づけ"}</th><th>{"TS 30149との関係"}</th></tr></thead><tbody><tr className="odd"><td>{"ISO/IEC 30141"}</td><td>{"ISO/IEC JTC 1/SC 41"}</td><td>{"IoT参照アーキテクチャ"}</td><td>{" "}<strong>{"親"}</strong>{"。30149はその信頼に足る性質の視点を専門化 "}</td></tr><tr className="even"><td>{"IIoT Trustworthiness Framework Foundations"}</td><td>{"Industry IoT Consortium（IIC）"}</td><td>{" 産業IoT向けの信頼に足る性質のフレームワーク（2021年7月公表） "}</td><td>{" 同じ5特性を扱う。IIRAのPDFとは別の文書で、IICのIIRAプログラムに関連づけられている "}</td></tr><tr className="odd"><td>{"IISF（Industrial Internet of Things Security Framework）"}</td><td>{"IIC"}</td><td>{"産業IoTのセキュリティフレームワーク"}</td><td>{" 関連文書。Trustworthiness Framework Foundations はIISFを基にしている "}</td></tr><tr className="even"><td>{"ISO/IEC/IEEE 15026-1"}</td><td>{"ISO/IEC/IEEE"}</td><td>{"保証（assurance）の用語・概念"}</td><td>{"30149の用語定義の出典"}</td></tr><tr className="odd"><td>{"ISO 22166-1"}</td><td>{"ISO"}</td><td>{"ロボティクス分野のモジュール性の用語"}</td><td>{"composabilityの定義の出典"}</td></tr></tbody></table>{" "}</div>
{" "}
<div className="mermaid-diagram" id="mmd-11"><Mermaid chart={DIAGRAM_10} /></div>
{" "}
<div className="callout callout-info">{" "}<p>{" SC 41の事業計画（2020年版）でも、信頼に足る性質（Trustworthiness）はIoTシステムに重要なシステム工学上の属性として位置づけられ、信頼性・可用性・レジリエンス・セキュリティ・プライバシー・安全などが挙げられています。IoTの信頼に足る性質は、TS 30149の発行以前からSC 41の重点領域でした。 "}</p>{" "}</div>
{" "}
    </>;
}
