import React from 'react';
import Diagram from './Diagram';

/** 10. Step 6：生体認証システムのテスト範囲（6.2節） — preserve the complete original category. */
export default function Section11() {
  return <>
<h2 id={"s31"}>{"10. Step 6：生体認証システムのテスト範囲（6.2節）"}</h2>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"6.2節の構成は次のとおりです。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s31"}><table><thead><tr className={"header"}><th>{"節"}</th><th>{"タイトル"}</th><th>{"要点（初学者向けの言い換え）"}</th></tr></thead><tbody><tr className={"odd"}><td>{"6.2.2"}</td><td>{"Biometric enrolment and recognition"}</td><td>{"登録と認識の"}<strong>{"両方"}</strong>{"のプロセスをテスト対象にする"}</td></tr><tr className={"even"}><td>{"6.2.3"}</td><td>{"Biometric components and supporting components"}</td><td>{"センサやアルゴリズムなどの"}<strong>{"生体認証コンポーネント"}</strong>{"と、それを支える"}<strong>{"周辺コンポーネント"}</strong>{"（DB、UI、通信など）"}</td></tr><tr className={"odd"}><td>{"6.2.4"}</td><td>{"Biometric subsystem as part of a larger system"}</td><td>{"生体認証が"}<strong>{"大きなシステムの一部"}</strong>{"である場合の扱い"}</td></tr><tr className={"even"}><td>{"6.2.5"}</td><td>{"Static and dynamic testing of the biometric system"}</td><td><strong>{"静的・動的の両方"}</strong>{"で評価"}</td></tr><tr className={"odd"}><td>{"6.2.6"}</td><td>{"Testing all quality characteristics or limited to biometric performance"}</td><td>{"全品質特性か、生体認証性能に限定するかの判断"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<h3 id={"s32"}>{"10.1 テスト対象のスコープ図"}<span className={"tag tag-ex"}>{"例示"}</span></h3>
{"\n"}
<figure className={"diagram"}><Diagram index={8} />{"\n"}</figure>
{"\n"}
<h3 id={"s33"}>{"10.2 「性能だけ」vs「全品質特性」"}</h3>
{"\n"}
<figure className={"diagram"}><Diagram index={9} />{"\n"}</figure>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"上の品質特性は、スコープに明記された列挙（reliability, availability, maintainability, security, conformance, usability, human factors, privacy regulation compliance）に基づきます。"}</p>
{"\n"}
<hr />
{"\n"}
  </>;
}
