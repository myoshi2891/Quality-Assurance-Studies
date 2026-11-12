import React from 'react';
import Diagram from './Diagram';

/** 11. Step 7：従来の評価（19795系）とTRの違い — preserve the complete original category. */
export default function Section12() {
  return <>
<h2 id={"s34"}>{"11. Step 7：従来の評価（19795系）とTRの違い"}</h2>
{"\n"}
<h3 id={"s35"}>{"11.1 評価レベル"}<span className={"tag tag-gen"}>{"一般知識"}</span></h3>
{"\n"}
<p>{"TR 6.1.2節は「Evaluation levels for biometric systems」を扱います。生体認証の評価は一般に次の3レベルで語られます（ISO/IEC 19795系の考え方）。TRの該当節の詳細な文言は有料のため未確認ですが、概念の理解用に示します。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s35"}><table><thead><tr className={"header"}><th>{"レベル"}</th><th>{"概要"}</th><th>{"特徴"}</th></tr></thead><tbody><tr className={"odd"}><td><strong>{"技術評価（Technology evaluation）"}</strong></td><td>{"蓄積済みのデータセットでアルゴリズムを評価"}</td><td>{"再現性が高い、条件を統制しやすい"}</td></tr><tr className={"even"}><td><strong>{"シナリオ評価（Scenario evaluation）"}</strong></td><td>{"模擬的な運用環境で被験者を使って評価"}</td><td>{"人とセンサの相互作用を含む"}</td></tr><tr className={"odd"}><td><strong>{"運用評価（Operational evaluation）"}</strong></td><td>{"実際の運用環境で評価"}</td><td>{"現実に最も近いが統制は難しい"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<figure className={"diagram"}><Diagram index={10} />{"\n"}</figure>
{"\n"}
<h3 id={"s36"}>{"11.2 従来評価とTRアプローチの比較"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"（序文の記述を整理）"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s36"}><table><thead><tr className={"header"}><th>{"観点"}</th><th>{"従来の生体認証評価（19795系）"}</th><th>{"TR 29119-13 のアプローチ"}</th></tr></thead><tbody><tr className={"odd"}><td>{"視点"}</td><td>{"生体認証の専門家"}</td><td>{"ソフトウェアテスターにも分かる"}</td></tr><tr className={"even"}><td>{"主眼"}</td><td>{"誤り率・スループット"}</td><td><strong>{"全品質特性"}</strong></td></tr><tr className={"odd"}><td>{"テスト形態"}</td><td>{"動的テスト中心"}</td><td><strong>{"静的＋動的"}</strong></td></tr><tr className={"even"}><td>{"戦略の決め方"}</td><td>{"明示的なリスクベースではない"}</td><td><strong>{"リスクベース"}</strong></td></tr><tr className={"odd"}><td>{"対象"}</td><td>{"生体認証システム／アルゴリズム"}</td><td>{"生体認証システム＋"}<strong>{"生体認証を含む大規模システム"}</strong></td></tr><tr className={"even"}><td>{"文書"}</td><td>{"19795の文書要求"}</td><td><strong>{"29119-3のテスト文書"}</strong>{"との対応付け"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<hr />
{"\n"}
  </>;
}
