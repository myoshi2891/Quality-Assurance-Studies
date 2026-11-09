import React from 'react';
import Diagram from './Diagram';

export default function Section11() {
    return <>
<h2 id="11-step-6問題解決箇条9">{"11. Step 6：問題解決（箇条9）"}</h2>{" "}<p>{" "}<strong>{"問題解決とは"}</strong>{": 出荷前後に見つかった不具合や懸念を、漏れなく記録・分析・処置する仕組みです。 "}</p>{" "}<Diagram id="mmd-10" />{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"要点"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"問題報告"}</td><td>{"不具合の内容、種別、重大度、影響範囲を記録"}</td></tr><tr className="even"><td>{"調査"}</td><td>{"原因と、"}<strong>{"安全への関連"}</strong>{"の有無を評価"}</td></tr><tr className="odd"><td>{"変更管理との連携"}</td><td>{"修正は変更管理を通す（箇条8と接続）"}</td></tr><tr className="even"><td>{"傾向分析"}</td><td>{"同種の不具合が続いていないかを分析"}</td></tr><tr className="odd"><td>{"検証"}</td><td>{"修正後、問題が解決し、新たな問題が生じていないことを確認"}</td></tr></tbody></table>{" "}</div>{" "}
    </>;
}
