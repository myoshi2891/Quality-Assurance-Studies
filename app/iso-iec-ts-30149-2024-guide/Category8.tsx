import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_6, DIAGRAM_7 } from './diagrams';

export default function Category8() {
    return <>
<h2 id="8-step-4-信頼に足る性質を構築する箇条8">{" 8. Step 4: 信頼に足る性質を「構築する」（箇条8） "}</h2>
{" "}
<p>{" 箇条8は、信頼に足る性質を"}<strong>{"作り込む"}</strong>{"ための見方を3つの視点で示します。 "}</p>
{" "}
<div aria-label="表：8 箇条8の3つの視点" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"節"}</th><th>{"視点"}</th><th>{"対応する図"}</th><th>{"問い"}</th></tr></thead><tbody><tr className="odd"><td>{"8.2"}</td><td>{"Capability viewpoint（能力の視点）"}</td><td>{"Figure 6: Goal oriented trustworthiness"}</td><td>{"何を達成できる能力があるか（目標指向）"}</td></tr><tr className="even"><td>{"8.3"}</td><td>{"Risk viewpoint（リスクの視点）"}</td><td>{"Figure 7: Risk oriented trustworthiness"}</td><td>{"何が起きうるか、どう抑えるか（リスク指向）"}</td></tr><tr className="odd"><td>{"8.4"}</td><td>{"Assurance viewpoint（保証の視点）"}</td><td>{" Figure 8: Assurance based on claims, arguments, and evidence "}</td><td>{"どう証明するか（主張・論拠・証拠）"}</td></tr><tr className="even"><td>{"8.5"}</td><td>{"Operationalization（運用化）"}</td><td>{"Table 2: Principles for trustworthiness operationalization"}</td><td>{"現場でどう回すか"}</td></tr></tbody></table>{" "}</div>
{" "}
<div aria-label="図：8 3つの視点の運用化" className="mermaid-diagram" id="mmd-7" role="region" tabIndex={0}><Mermaid chart={DIAGRAM_6} /></div>
{" "}
<h3 id="81-保証の核心-主張論拠証拠">{"8.1 保証の核心: 主張・論拠・証拠"}</h3>
{" "}
<p>{" Figure 8のタイトルが示すとおり、保証は "}<strong>{"claims（主張）・arguments（論拠）・evidence（証拠）"}</strong>{" で組み立てます。これはセーフティケース／アシュアランスケースと呼ばれる考え方に通じます。 "}</p>
{" "}
<div aria-label="図：8.1 保証の核心となる主張・論拠・証拠" className="mermaid-diagram" id="mmd-8" role="region" tabIndex={0}><Mermaid chart={DIAGRAM_7} /></div>
{" "}
<div aria-label="表：8.1 根拠のない主張と証拠に裏づけられた主張" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"悪い例（根拠のない主張）"}</th><th>{"良い例（証拠に裏づけられた主張）"}</th></tr></thead><tbody><tr className="odd"><td>{"「当社製品は安全です」とだけ述べる"}</td><td>{" 「異常電流時に100ms以内に遮断する」（主張）→ 保護回路の設計根拠（論拠）→ 試験成績書・FMEA記録（証拠） "}</td></tr></tbody></table>{" "}</div>
{" "}
<div className="callout callout-tip">{" "}<p>{" 良い例の主張は、供給者自身による自己申告（自己宣言）でもかまいません。問題は誰が述べるかではなく、主張が論拠と証拠で裏づけられ、検証できるかどうかです。 "}</p>{" "}<p>{" 上の数値や例は理解のための"}<strong>{"架空の例"}</strong>{"で、規格が定める値ではありません。 "}</p>{" "}</div>
{" "}
<h3 id="82-参照アーキテクチャ内のリスク要因">{" 8.2 参照アーキテクチャ内のリスク要因 "}</h3>
{" "}
<p>{" Figure 10 "}<strong>{"Determining risk factors within an RA"}</strong>{" は、IoT参照アーキテクチャ（RA）のどこにリスク要因があるかを特定する考え方に関する図です。30141の構成要素（ドメイン等）とリスクを結びつける発想だと理解してください（図の詳細は有料部分）。 "}</p>
{" "}
    </>;
}
