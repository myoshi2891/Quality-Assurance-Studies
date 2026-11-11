import React from 'react';
import Diagram from './Diagram';

/** 3. 全体像：このTRが解決する問題 — preserve the complete original category. */
export default function Section04() {
  return <>
<h2 id={"s5"}>{"3. 全体像：このTRが解決する問題"}</h2>
{"\n"}
<h3 id={"s6"}>{"3.1 背景にある2つの世界"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"序文によると、生体認証の評価・テスト規格（ISO/IEC 19795シリーズなど）は次の特徴を持ちます。"}</p>
{"\n"}
<ul>{"\n"}<li>{"生体認証の"}<strong>{"専門家の視点"}</strong>{"で書かれている"}</li>{"\n"}<li>{"焦点は"}<strong>{"技術的な性能テスト"}</strong>{"（誤り率とスループット）"}</li>{"\n"}<li><strong>{"動的テスト"}</strong>{"が中心"}</li>{"\n"}<li>{"29119シリーズが求める"}<strong>{"リスクベースのアプローチを明示的には使っていない"}</strong></li>{"\n"}</ul>
{"\n"}
<p>{"一方、ソフトウェアテストの世界（29119）はリスクベースドテストを中核に据えています。このTRは、その"}<strong>{"ギャップを埋める"}</strong>{"ために作られました。"}</p>
{"\n"}
<figure className={"diagram"}><Diagram index={1} />{"\n"}</figure>
{"\n"}
<h3 id={"s7"}>{"3.2 このTRの7つの柱"}</h3>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"（スコープの要点を言い換えたもの）"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s7"}><table><thead><tr className={"header"}><th>{"#"}</th><th>{"柱"}</th><th>{"初学者向けの言い換え"}</th></tr></thead><tbody><tr className={"odd"}><td>{"1"}</td><td>{"体系的・リスクベースのテスト情報"}</td><td>{"「何を重点的にテストするか」をリストから決める方法"}</td></tr><tr className={"even"}><td>{"2"}</td><td>{"生体認証規格とテスト規格の重要性・概説"}</td><td>{"両方の世界の入門"}</td></tr><tr className={"odd"}><td>{"3"}</td><td>{"テスターにとって重要な生体認証規格の特定"}</td><td>{"「最低限これを知っておけ」の一覧"}</td></tr><tr className={"even"}><td>{"4"}</td><td>{"両規格の対応表"}</td><td>{"19795で書かれたことは29119のどこに当たるか"}</td></tr><tr className={"odd"}><td>{"5"}</td><td>{"性能だけに限らない品質特性"}</td><td>{"信頼性・可用性・保守性・セキュリティ・適合性・使いやすさ・人的要因・プライバシー規制適合"}</td></tr><tr className={"even"}><td>{"6"}</td><td>{"リスクベースアプローチの適用"}</td><td>{"製品リスクとプロジェクトリスクの両方"}</td></tr><tr className={"odd"}><td>{"7"}</td><td>{"文書化の対応表"}</td><td>{"19795-1, -2, -6 の文書要求と29119-3のテスト文書の対応"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<hr />
{"\n"}
  </>;
}
