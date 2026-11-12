import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_0 } from './diagrams';

export default function Category3() {
    return <>
<h2 id="3-step-0-前提知識--isoiec-30141-との関係">{" 3. Step 0: 前提知識 ― ISO/IEC 30141 との関係 "}</h2>
{" "}
<p>{" TS 30149 は、"}<strong>{"ISO/IEC 30141（IoT参照アーキテクチャ）の一部を深掘りした文書"}</strong>{"です。規範的引用文献はないため単独でも読めますが、先に 30141 の概要を押さえておくと理解しやすくなります。規格の序文（Introduction）では、次の2点が明記されています。 "}</p>
{" "}
<ol type="1">{" "}<li>{" TS 30149 は、IoT参照アーキテクチャの「"}<strong>{"信頼に足る性質の視点（trustworthiness view）"}</strong>{"」を専門化する "}</li>{" "}<li>{" 附属書Aで、参照アーキテクチャの「"}<strong>{"構築の視点（construction view）"}</strong>{"」で使えるパターンを列挙する "}</li>{" "}</ol>
{" "}
<div className="mermaid-diagram" id="mmd-1"><Mermaid chart={DIAGRAM_0} /></div>
{" "}
<h3 id="初学者向けの例え">{"初学者向けの例え"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"例え"}</th><th>{"対応するもの"}</th></tr></thead><tbody><tr className="odd"><td>{"建築の「基本設計図一式」"}</td><td>{"ISO/IEC 30141（IoT全体の設計図）"}</td></tr><tr className="even"><td>{"その中の「耐震・防火・防犯の設計ルール集」"}</td><td>{"TS 30149（信頼に足る性質に特化した部分）"}</td></tr></tbody></table>{" "}</div>
{" "}
<div className="callout callout-tip">{" "}<p>{" 学習順序のおすすめ: まず 30141 の全体像（ドメインやビュー）をざっくり掴み、その後で 30149 を読むと「どこの話をしているのか」が迷子になりません。 "}</p>{" "}</div>
{" "}
    </>;
}
