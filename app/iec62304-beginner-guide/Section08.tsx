import React from 'react';
import Diagram from './Diagram';

export default function Section08() {
    return <>
<h2 id="8-step-3保守プロセス箇条6">{"8. Step 3：保守プロセス（箇条6）"}</h2>{" "}<p>{" "}<strong>{"保守とは"}</strong>{": 出荷後に、不具合修正や改良のためソフトウェアを変更する活動です。 "}</p>{" "}<Diagram id="mmd-6" />{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"要点"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"保守計画"}</td><td>{"出荷前から計画しておく（計画は SDP に含めても可）"}</td></tr><tr className="even"><td>{"フィードバック監視"}</td><td>{"顧客の声、不具合報告、市場の情報を継続的に集める"}</td></tr><tr className="odd"><td>{"安全影響の分析"}</td><td>{" 変更が"}<strong>{"既存のリスクコントロールに悪影響を与えないか"}</strong>{"を確認 "}</td></tr><tr className="even"><td>{"変更の実装"}</td><td>{" 変更部分は、開発プロセス（箇条5）を"}<strong>{"再び適用"}</strong>{"して実施 "}</td></tr></tbody></table>{" "}</div>{" "}<blockquote className="callout">{" "}<p>{" "}<strong>{"よくある誤解"}</strong>{": 「小さな修正だから文書は要らない」は危険です。小さな変更でも、安全影響の分析と、必要な再検証が求められます。 "}</p>{" "}</blockquote>{" "}
    </>;
}
