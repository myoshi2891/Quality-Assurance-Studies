import React from 'react';
/** Preserve source category: 15. よくある誤解. */
export default function Section16() {
    return <>
<h2 id="15-よくある誤解">{"15. よくある誤解"}</h2>{"\n"}
<div className="callout callout-intro">
<div className="callout-head">
<span className="callout-icon">{"💡"}</span>
<span className="callout-title">{"この章でやること"}</span>
</div>
<div className="callout-body">
<p>{"この章では、初学者が陥りやすい誤解を、表で整理します。"}</p>
</div>
</div>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="15-よくある誤解">
<table>
<thead>
<tr className="header">
<th>{"よくある誤解"}</th>
<th>{"実際は"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"「42119-7 は発行済みの規格だ」"}</td>
<td>{"開発中（AWI、ステージ20.00）で、まだ発行されていません🟢"}</td>
</tr>
<tr className="even">
<td>{"「準拠すれば安全なAIになる」"}</td>
<td>{"規格は進め方の指針で、安全性そのものを保証するものではありません⚪"}</td>
</tr>
<tr className="odd">
<td>{"「ベンチマークで高得点なら、レッドチーミングは不要」"}</td>
<td>{"両者は目的が違います。Microsoftは「レッドチーミングは安全性ベンチマークではない」と述べています🔵"}</td>
</tr>
<tr className="even">
<td>{"「攻撃を自動で大量に試せば十分」"}</td>
<td>{"自動化は網羅性を上げますが、優先順位や文脈の判断には人が必要です🔵"}</td>
</tr>
<tr className="odd">
<td>{"「公開前に1回やれば終わり」"}</td>
<td>{"運用中にも新しい弱点が出るため、継続が前提です🟡"}</td>
</tr>
<tr className="even">
<td>{"「モデルが安全なら、システムも安全」"}</td>
<td>{"ツールや外部サービスが汚染されると、システム全体が失敗します🟡"}</td>
</tr>
<tr className="odd">
<td>{"「ガードレールが95%を止めるなら十分」"}</td>
<td>{"Willison氏は、この水準を不十分とし、危険な組み合わせを避ける設計を求めています🔵"}</td>
</tr>
<tr className="even">
<td>{"「脱獄とプロンプトインジェクションは同じ」"}</td>
<td>{"Willison氏は別の問題として区別しています🔵"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<hr />{"\n"}
</>;
}
