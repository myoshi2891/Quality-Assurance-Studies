import React from 'react';

export default function Category13() {
    return <>
<h2 id="13-理解度チェック">{"13. 理解度チェック"}</h2>
{" "}
<details className="quiz">{" "}<summary>{"Q1. trustworthinessを一言で説明してください"}</summary>{" "}<p>{" 期待に応えられることを、検証可能な形で示せる能力（Kasperskyの解説に基づく整理）。 "}</p>{" "}</details>
{" "}
<details className="quiz">{" "}<summary>{"Q2. TS 30149が扱う5つの特性を挙げてください"}</summary>{" "}<p>{"Safety、Security、Privacy、Resilience、Reliability。"}</p>{" "}</details>
{" "}
<details className="quiz">{" "}<summary>{"Q3. 保証（assurance）を組み立てる3要素は何ですか"}</summary>{" "}<p>{"主張（claims）、論拠（arguments）、証拠（evidence）。"}</p>{" "}</details>
{" "}
<details className="quiz">{" "}<summary>{"Q4. TS 30149とISO/IEC 30141の関係は"}</summary>{" "}<p>{" 30141（IoT参照アーキテクチャ）の「信頼に足る性質の視点」を専門化し、附属書Aで「構築の視点」で使えるパターンを列挙する関係。 "}</p>{" "}</details>
{" "}
<details className="quiz">{" "}<summary>{"Q5. ReliabilityとResilienceの違いは"}</summary>{" "}<p>{" Reliability（信頼性）は定められた条件のもとで、定められた期間、機能を果たす力。Resilienceは混乱を引き起こす事象に抵抗し、適応し、回復する力。 "}</p>{" "}</details>
{" "}
    </>;
}
