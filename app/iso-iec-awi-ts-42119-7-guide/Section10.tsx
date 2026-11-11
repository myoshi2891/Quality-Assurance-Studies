import React from 'react';
import Diagram from './Diagram';
/** Preserve source category: 9. Step 6：発見事項の文書化と報告. */
export default function Section10() {
    return <>
<h2 id="9-step-6発見事項の文書化と報告">{"9. Step\n6：発見事項の文書化と報告"}</h2>{"\n"}
<div className="callout callout-intro">
<div className="callout-head">
<span className="callout-icon">{"💡"}</span>
<span className="callout-title">{"この章でやること"}</span>
</div>
<div className="callout-body">
<p>{"この章では、第四のテーマである「文書化と報告」を扱います。見つけた弱点が、改善につながらなければ意味がありません。そのための記録の考え方を説明します。"}</p>
</div>
</div>{"\n"}
<h3 id="9-1-ドラフトが提案する文書-">{"9-1. ドラフトが提案する文書 🟡"}</h3>{"\n"}
<p>{"ETRIの論文は、報告書の構成、連絡の手順、機密の保持、文書テンプレートの例とあわせて、次の文書が提案されていると紹介しています。"}</p>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="9-1-ドラフトが提案する文書-">
<table>
<thead>
<tr className="header">
<th>{"文書"}</th>
<th>{"目的"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"テスト計画書"}</td>
<td>{"何を、どの範囲で、どう試すかを事前に決める"}</td>
</tr>
<tr className="even">
<td>{"推奨事項と改善計画の報告書"}</td>
<td>{"見つかった弱点と、直すべき内容、順序"}</td>
</tr>
<tr className="odd">
<td>{"高水準の教訓報告書"}</td>
<td>{"技術的な詳細を省いた、組織としての学び"}</td>
</tr>
<tr className="even">
<td>{"コミュニケーション計画のテンプレート"}</td>
<td>{"誰に、いつ、どう伝えるか"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<p>{"論文は、AIレッドチーミングの成果が\n"}<strong>{"単なる脆弱性の一覧に終わらず、組織の改善計画と知識資産につながるべき"}</strong>{"\nだと述べています🟡。"}</p>{"\n"}
<h3 id="9-2-重大な発見は即時に伝える-">{"9-2. 重大な発見は即時に伝える\n🟡"}</h3>{"\n"}
<p>{"5-2の対応表で見たとおり、「重大な脆弱性の即時報告」は、29119-2\nのインシデント報告の手順に対応します。この図は、重大な弱点を見つけたときの連絡の流れの一例です（⚪\n筆者による一般的な例であり、規格の規定ではありません）。"}</p>{"\n"}
<Diagram index={6}/>{"\n"}
<div className="legend">
<div className="legend-head">{"各登場人物の意味："}</div>
<ul>{"\n"}
<li>{"レッドチーム：攻撃役として弱点を探すチーム"}</li>{"\n"}
<li>{"テスト責任者：レッドチーミング全体の進行を管理する人"}</li>{"\n"}
<li>{"システム責任者：対象のAIシステムの運用に責任を持つ人"}</li>{"\n"}
<li>{"開発チーム：修正や緩和策を実装する人たち"}</li>{"\n"}
</ul>
</div>{"\n"}
<h3 id="9-3-発見事項の記録項目例">{"9-3. 発見事項の記録項目（例）⚪"}</h3>{"\n"}
<p>{"次は、筆者による記録項目の例です。規格の様式ではないため、自分の組織に合わせて調整してください。"}</p>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="9-3-発見事項の記録項目例">
<table>
<thead>
<tr className="header">
<th>{"項目"}</th>
<th>{"記入内容の例"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"識別番号"}</td>
<td>{"発見事項を区別するための番号"}</td>
</tr>
<tr className="even">
<td>{"関連するリスクシナリオ"}</td>
<td>{"どの「困ること」に対応するか"}</td>
</tr>
<tr className="odd">
<td>{"対象"}</td>
<td>{"モデル、システム、エージェントのどのレベルか"}</td>
</tr>
<tr className="even">
<td>{"手順の概要"}</td>
<td>{"何をしたか。再現に必要な範囲で、機密に配慮して書く"}</td>
</tr>
<tr className="odd">
<td>{"結果"}</td>
<td>{"実際に何が起きたか。何回中何回起きたか"}</td>
</tr>
<tr className="even">
<td>{"影響の大きさ"}</td>
<td>{"想定される被害と、その根拠"}</td>
</tr>
<tr className="odd">
<td>{"推奨される対応"}</td>
<td>{"直す内容と、優先度"}</td>
</tr>
<tr className="even">
<td>{"ステータス"}</td>
<td>{"未対応、対応中、修正済み、再確認済み"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<h3 id="9-4-弱点の公開の仕方にも標準がある-">{"9-4.\n弱点の「公開の仕方」にも標準がある 🟡"}</h3>{"\n"}
<p>{"ETRIの論文は、外部に弱点を知らせる手順の考え方として、ISO/IEC\n29147（脆弱性の開示）との関連を指摘しています。善意の研究者や外部の専門機関が、一定の手順と保護のもとで、弱点の発見と報告に参加できる基盤を整えることが重要だとしています。これは、国内制度との接続を考えるうえでの拡張課題として位置づけられています🟡。"}</p>{"\n"}
<div className="glossary">
<div className="glossary-head">{"📖 このセクションで登場した用語"}</div>
<ul>{"\n"}
<li>{"緩和策：弱点を完全に直せなくても、被害を小さくするための対策"}</li>{"\n"}
<li>{"暫定対応：本格的な修正の前に、とりあえず行う応急処置"}</li>{"\n"}
<li>{"脆弱性：システムの弱点や欠陥で、攻撃に悪用されうるもの"}</li>{"\n"}
<li>{"CVD（協調的な脆弱性開示）：発見者と開発者が連携して、弱点を適切な時期に公表する方法"}</li>{"\n"}
</ul>
</div>{"\n"}
<hr />{"\n"}
</>;
}
