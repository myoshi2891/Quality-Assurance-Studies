import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_1 } from './diagrams';

export default function Category4() {
    return <>
<h2 id="4-step-1-中心概念--trust-と-trustworthiness">{" 4. Step 1: 中心概念 ― trust と trustworthiness "}</h2>
{" "}
<h3 id="41-日本語にすると似ているが別物">{"4.1 日本語にすると似ているが、別物"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"用語"}</th><th>{"意味"}</th><th>{"性質"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"Trust（信頼）"}</strong></td><td>{"利用者や関係者が「きっと大丈夫」と"}<strong>{"思う"}</strong>{"状態"}</td><td>{" 前提（assumption）に基づく。正しい前提も、根拠のない前提も混ざる "}</td></tr><tr className="even"><td><strong>{"Trustworthiness（信頼に足る性質）"}</strong></td><td>{"期待に応えられることを"}<strong>{"検証可能に示せる"}</strong>{"能力"}</td><td>{"事実と証拠に基づく"}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{" Kaspersky（この規格の策定に参加したと公表している企業）の解説では、次の例が使われています。 "}</p>
{" "}
<ul>{" "}<li>{"「金属製である」: 観察できる性質に基づく前提"}</li>{" "}<li>{" 「秘密のバックアップパスワードを含まない」: 裏づけがなければ根拠のない前提になりうる "}</li>{" "}</ul>
{" "}
<div className="mermaid-diagram" id="mmd-2"><Mermaid chart={DIAGRAM_1} /></div>
{" "}
<h3 id="42-規格が整理する3つの関係箇条5">{"4.2 規格が整理する3つの関係（箇条5）"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"箇条"}</th><th>{"論点"}</th><th>{"初学者向けの理解"}</th></tr></thead><tbody><tr className="odd"><td>{"5.1"}</td><td>{"Relation to trust（信頼との関係）"}</td><td>{" 信頼は「相手を信じる側」の話、信頼に足る性質は「相手が示す側」の話 "}</td></tr><tr className="even"><td>{"5.2"}</td><td>{"Relation to context（文脈との関係）"}</td><td>{" 同じIoT機器でも、家庭用と工場用では「十分に信頼できる」の水準が違う "}</td></tr><tr className="odd"><td>{"5.3"}</td><td>{" Relation to characteristics, behaviour, assurance and confidence "}</td><td>{"特性・振る舞い・保証・確信がどうつながるか"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="43-重要用語箇条3の定義を要約">{"4.3 重要用語（箇条3の定義を要約）"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"用語"}</th><th>{"定義の要旨"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"assurance（保証）"}</strong></td><td>{" 主張（claim）が達成された、または達成されるという、正当な確信を持てる根拠。出典は ISO/IEC/IEEE 15026-1:2019 "}</td></tr><tr className="even"><td><strong>{"composability（合成可能性）"}</strong></td><td>{" 部品を"}<strong>{"改造や追加の接続作業なしに"}</strong>{"論理的・物理的に組み立てられる能力。「統合（integration）」は大きな労力を示唆し、「合成（composition）」は小さい〜ほぼ無い労力を示唆する。出典は ISO 22166-1:2021（一部修正） "}</td></tr></tbody></table>{" "}</div>
{" "}
<div className="callout callout-info">{" "}<p>{" 例（規格の例示の趣旨）: ハードウェアのセキュリティ部品と、データ保存部品を組み合わせて「安全なデータ保存部品」を作る。 "}</p>{" "}</div>
{" "}
    </>;
}
