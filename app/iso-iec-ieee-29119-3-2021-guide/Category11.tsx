import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_9 } from './diagrams';

export default function Category11() {
    return <>
<h2 id="step-10-文書どうしのつながりトレーサビリティ">{" Step 10: 文書どうしのつながり（トレーサビリティ） "}</h2>
{" "}
<h3 id="10-1-全体の依存関係">{"10-1. 全体の依存関係"}</h3>
{" "}
<Diagram diagramKey="mm10" id="mermaid-diagram-10" chart={DIAGRAM_9} />
{" "}
<h3 id="10-2-テストトレーサビリティマトリクス">{" 10-2. テストトレーサビリティマトリクス "}</h3>
{" "}
<p>{" 規格の用語定義では、"}<strong>{"要求とそれに対応するテストなど、文書とソフトウェアの関連する項目を結びつける文書・スプレッドシート・ツール"}</strong>{"を「テストトレーサビリティマトリクス」と呼んでいます（別名: 検証相互参照マトリクス、要求テストマトリクス、要求検証表）。形式や詳細度は用途によって異なってよい、とされています。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"追跡の方向"}</th><th>{"何がわかるか"}</th></tr></thead><tbody><tr className="odd"><td>{"要求 → テストモデル → テストケース"}</td><td>{"要求がテストされているか（抜け漏れ）"}</td></tr><tr className="even"><td>{"テストケース → 実行結果 → インシデント"}</td><td>{"不合格の影響範囲"}</td></tr><tr className="odd"><td>{"インシデント → 要求"}</td><td>{"不具合がどの要求に関わるか"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}
