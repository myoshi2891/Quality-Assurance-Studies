import React from 'react';

export default function Category1() {
    return <>
<h2 id="1-この規格をひとことで言うと">{"1. この規格をひとことで言うと"}</h2>
{" "}
<p>{" "}<strong>{"「そのIoT製品は本当に信頼してよいのか？ を、ベンダーの自己申告を含む主張が根拠（証拠）で裏づけられているかで示すための考え方を整理した文書」"}</strong>{" です。自己申告そのものを否定するのではなく、証拠に支えられていない主張に頼らないことが要点です。 "}</p>
{" "}
<div aria-label="表：1 この規格が答える疑問" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"疑問"}</th><th>{"この規格が与える答えの方向性"}</th></tr></thead><tbody><tr className="odd"><td>{"「安全です」と言われたが本当か？"}</td><td>{"主張（claim）・論拠（argument）・証拠（evidence）で裏づける"}</td></tr><tr className="even"><td>{"何をもって「信頼できる」と言うのか？"}</td><td>{" 5つの特性（安全・セキュリティ・プライバシー・レジリエンス・信頼性）で分解する "}</td></tr><tr className="odd"><td>{"誰が・いつ・どこで考えるのか？"}</td><td>{" IoT参照アーキテクチャ（ISO/IEC 30141）の「信頼に足る性質の視点」で考える "}</td></tr><tr className="even"><td>{"具体的な進め方は？"}</td><td>{" 附属書Aのパターン（特性評価・成熟度・影響評価・エンジニアリング・保証）を使う "}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{"初学者が最初に覚えるべきキーワードは次の3つだけです。"}</p>
{" "}
<ol type="1">{" "}<li>{" "}<strong>{"Trustworthiness（信頼に足る性質）"}</strong>{": 期待に応えられることを、検証可能な形で示せる能力 "}</li>{" "}<li>{" "}<strong>{"5つの特性"}</strong>{": Safety / Security / Privacy / Resilience / Reliability "}</li>{" "}<li>{" "}<strong>{"Assurance（保証）"}</strong>{": 「主張が達成されている（される）」と言える、正当な確信の根拠 "}</li>{" "}</ol>
{" "}
    </>;
}
