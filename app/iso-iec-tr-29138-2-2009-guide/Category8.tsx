import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_3 } from './diagrams';

export default function Category8() {
    return <>
<h2 id="step-7作成の経緯20072009年">{"Step 7：作成の経緯（2007〜2009年）"}</h2>
{" "}
<p className="callout-practice">{" 💡 この章では、ISOページに記録されたステージ履歴をもとに、規格が完成するまでの流れを説明します。国際規格や技術報告書が、投票を経て作られる仕組みの例として読めます。 "}</p>
{" "}
<p>{" この図は、新規プロジェクトの承認から公開までの流れを表しています。左から右へ読み進めてください。 "}</p>
{" "}
<div className="mermaid-diagram" id="mmd-3"><Mermaid chart={DIAGRAM_3} /></div>
{" "}
<p>{"各ノードの意味："}</p>
{" "}
<ul>{" "}<li>{" 「CD」「DIS」「FDIS」：文書の完成度が上がるごとの名前。投票や意見募集を経て次へ進む "}</li>{" "}<li>{" 「2008-10-22」：DISの投票の結果が各国に配布され、次の段階へ進むことが承認された日 "}</li>{" "}<li>{"「2009-06-10」：公開（ステージ 60.60）に到達した日"}</li>{" "}</ul>
{" "}
<h3 id="作業部会の移り変わり">{"作業部会の移り変わり"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"時期"}</th><th>{"出来事"}</th><th>{"出典"}</th></tr></thead><tbody><tr className="odd"><td>{"2007年4月"}</td><td>{" JTC 1 の特別作業部会（SWG-A、アクセシビリティ担当）が、3部を1つのタイプ3 TRとして進めることに合意 "}</td><td>{"JTC 1 履歴ページ"}</td></tr><tr className="even"><td>{"2010年1月"}</td><td>{"第11回SWG-A会合で、Part 1 と Part 2 の更新計画が始まる"}</td><td>{"JTC 1 履歴ページ"}</td></tr><tr className="odd"><td>{"のち"}</td><td>{"SWG-A は解散し、作業はSC 35（User interfaces）へ移った"}</td><td>{"欧州委員会 Rolling Plan"}</td></tr></tbody></table>{" "}</div>
{" "}
<p className="gloss-title">{"📖 このセクションで登場した用語"}</p>
{" "}
<ul className="gloss-list">{" "}<li>{" CD / DIS / FDIS：ISO/IEC で文書が国際規格になるまでの段階（委員会原案、国際規格案、最終国際規格案） "}</li>{" "}<li>{"SWG-A：JTC 1 の特別作業部会。アクセシビリティを担当した"}</li>{" "}<li>{"JTC 1：ISOとIECが共同で設置した、情報技術分野の合同技術委員会"}</li>{" "}</ul>
{" "}
<hr />
{" "}
<p></p>
{" "}
    </>;
}
