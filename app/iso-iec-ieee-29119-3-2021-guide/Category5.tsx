import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_3 } from './diagrams';

export default function Category5() {
    return <>
<h2 id="step-4-適合conformanceの考え方">{"Step 4: 適合（Conformance）の考え方"}</h2>
{" "}
<h3 id="4-1-動詞の意味">{"4-1. 動詞の意味"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"動詞"}</th><th>{"意味"}</th></tr></thead><tbody><tr className="odd"><td>{"shall"}</td><td>{"要求"}</td></tr><tr className="even"><td>{"should"}</td><td>{"推奨"}</td></tr><tr className="odd"><td>{"may"}</td><td>{"許可"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="4-2-2つの適合方法">{"4-2. 2つの適合方法"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"方法"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"Full conformance（完全適合）"}</strong></td><td>{" Clause 5〜8 と Annex A のすべての要求（shall）を満たした証拠を示す "}</td></tr><tr className="even"><td><strong>{"Tailored conformance（テーラード適合）"}</strong></td><td>{" 使う文書のサブセットを記録し、そのサブセットの shall をすべて満たす。"}<strong>{"要求を外す場合は理由（正当化）の提示が必要"}</strong>{"。さらに、"}<strong>{"適用可能なリスクの考慮を含む根拠とともにすべてのテーラリング決定を記録し、関係するステークホルダーの合意を得る"}</strong>{"ことが必要 "}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{"さらに重要な点:"}</p>
{" "}
<ul>{" "}<li>{" 組織は"}<strong>{"完全適合とテーラード適合のどちらを主張するかを明言する"}</strong>{"（shall）。 "}</li>{" "}<li>{" 文書名・見出し・レイアウトは"}<strong>{"変更してよい"}</strong>{"（追加、統合、名称変更など）。この規格の呼び名の使用は必須ではありません。 "}</li>{" "}<li>{"電子データ、複数文書への分割、他文書との統合でも適合と見なされます。"}</li>{" "}<li>{" 発注者と供給者の契約に使う場合は、規格への適合ではなく"}<strong>{"契約への準拠"}</strong>{"を主張するほうが適切、という注記があります。 "}</li>{" "}</ul>
{" "}
<Diagram diagramKey="mm4" id="mermaid-diagram-4" chart={DIAGRAM_3} />
{" "}
    </>;
}
