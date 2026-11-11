import React from 'react';
/** Preserve source category: 11. Step 8：エージェント型AIのレッドチーミング. */
export default function Section12() {
    return <>
<h2 id="11-step-8エージェント型aiのレッドチーミング">{"11. Step\n8：エージェント型AIのレッドチーミング"}</h2>{"\n"}
<div className="callout callout-intro">
<div className="callout-head">
<span className="callout-icon">{"💡"}</span>
<span className="callout-title">{"この章でやること"}</span>
</div>
<div className="callout-body">
<p>{"この章では、標準化の関心が移りつつある「エージェント型AI」を扱います。自律的に動くAIは、会話するだけのAIとは、リスクの構造が違います。"}</p>
</div>
</div>{"\n"}
<h3 id="11-1-何が違うのか-">{"11-1. 何が違うのか 🟡"}</h3>{"\n"}
<p>{"ETRIの論文は、次のように違いを説明しています。"}</p>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="11-1-何が違うのか-">
<table>
<thead>
<tr className="header">
<th>{"比較"}</th>
<th>{"従来の生成AI"}</th>
<th>{"エージェント型AI"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"見るもの"}</td>
<td>{"1回の質問と応答"}</td>
<td>{"目標の解釈、計画、ツールの選択、実行の順序、長期の状態維持、外部システムとのやり取り"}</td>
</tr>
<tr className="even">
<td>{"中心の問い"}</td>
<td>{"「モデルが何を言うか」"}</td>
<td>{"「エージェントが何を決め、実際に何を実行するか」"}</td>
</tr>
<tr className="odd">
<td>{"テストの単位"}</td>
<td>{"プロンプト"}</td>
<td>{"作業と運用"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<div className="callout callout-practice">
<div className="callout-head">
<span className="callout-icon">{"💡"}</span>
<span className="callout-title">{"例え話 ⚪"}</span>
</div>
<div className="callout-body">
<p>{"例え話\n⚪：従来の生成AIは「受付で質問に答える案内係」、エージェント型AIは「鍵と社員証を持って、実際に各部署で作業する新人」です。案内係の間違いは発言の誤りで済みますが、新人の間違いは、実際の操作として現実に影響します。"}</p>
</div>
</div>{"\n"}
<h3 id="11-2-エージェント特有の主な脅威-">{"11-2.\nエージェント特有の主な脅威 🟡"}</h3>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="11-2-エージェント特有の主な脅威-">
<table>
<thead>
<tr className="header">
<th>{"脅威"}</th>
<th>{"内容"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"目標の乗っ取り"}</td>
<td>{"入力の操作で、エージェントが解釈する上位の目標が変わる"}</td>
</tr>
<tr className="even">
<td>{"ツールの誤用と悪用"}</td>
<td>{"許可されたツールを、不適切に使う"}</td>
</tr>
<tr className="odd">
<td>{"身元と権限の乱用"}</td>
<td>{"権限の仕組みを悪用する"}</td>
</tr>
<tr className="even">
<td>{"メモリと文脈の汚染"}</td>
<td>{"保存された文脈や記憶が汚され、以降の判断が歪む"}</td>
</tr>
<tr className="odd">
<td>{"安全でないエージェント間通信"}</td>
<td>{"通信の認証や完全性の問題"}</td>
</tr>
<tr className="even">
<td>{"統制を外れたエージェント"}</td>
<td>{"制御できない自律的な行動の広がり"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<h3 id="11-3-新しい用語と統制の考え方-">{"11-3. 新しい用語と統制の考え方\n🟡"}</h3>{"\n"}
<p>{"ETRIの論文は、最近のドラフト（作業文書）が、エージェントの運用統制に関わる新しい用語を加えていると述べています。"}</p>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="11-3-新しい用語と統制の考え方-">
<table>
<thead>
<tr className="header">
<th>{"用語"}</th>
<th>{"意味（論文の説明に基づく意訳）"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"アクション・トレーサビリティ"}</td>
<td>{"誰が、どの権限で、どのツールを呼び出したかを、検証できる記録として残すこと。エージェントの安全性と責任を評価する基本とされる"}</td>
</tr>
<tr className="even">
<td>{"チェッカー・アウト・オブ・ザ・ループ"}</td>
<td>{"確認役が、処理の流れから外れてしまう状態"}</td>
</tr>
<tr className="odd">
<td>{"オーケストレーターの状態汚染"}</td>
<td>{"複数のエージェントを取りまとめる仕組みの内部状態が汚されること"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<h3 id="11-4-外部ツールの仕組みも攻撃面になる-">{"11-4.\n外部ツールの仕組みも攻撃面になる 🟡"}</h3>{"\n"}
<p>{"MCPサーバー、プラグイン、第三者のAPI、エージェントの取りまとめ役、ツールの説明書やマニフェストが汚染されると、"}<strong>{"モデル自体が安全でもシステム全体が失敗する"}</strong>{"\n可能性があります。そのため、供給網の検証、ツール登録の検証、実行環境の隔離、状態の保護、エージェント間通信の完全性検証が、独立したテストの軸として浮上している、とETRIの論文は述べています。"}</p>{"\n"}
<h3 id="11-5-人の監督は承認ボタンだけでは足りない-">{"11-5.\n人の監督は「承認ボタン」だけでは足りない 🟡"}</h3>{"\n"}
<p>{"論文は、人の監督を、単なる承認手続きではなく、次を含む\n"}<strong>{"拡張された監督構造"}</strong>{"\nとして設計すべきだと述べています。"}</p>{"\n"}
<ul>{"\n"}
<li>{"高リスクな行動に対する、承認の関所の設定"}</li>{"\n"}
<li>{"自動の監視と人のレビューの階層化"}</li>{"\n"}
<li>{"監督者の疲れや、監督のすり抜けの可能性の点検"}</li>{"\n"}
</ul>{"\n"}
<h3 id="11-6-評価は作業を単位にする-">{"11-6. 評価は「作業」を単位にする\n🟡"}</h3>{"\n"}
<p>{"論文は、シンガポールのAI安全研究機関などによる評価事例を紹介しています。顧客サポート、社内の生産性、投稿、分析、取引といった現実的な作業を設定し、MCPサーバーを使った実際のツール環境で多段階の作業をさせる方法で、"}<strong>{"作業完了率、方針の順守度、データの漏えい、文脈の認識、利用者の指示への従い方"}</strong>{"\nといった、システムレベルの指標を重視します。これは、関心が「単純な攻撃成功率」から「作業全体のリスク測定」に移っていることを示しています🟡。"}</p>{"\n"}
<div className="glossary">
<div className="glossary-head">{"📖 このセクションで登場した用語"}</div>
<ul>{"\n"}
<li>{"エージェント型AI：目標を受けて、自分で計画し、ツールを使って作業を進めるAI"}</li>{"\n"}
<li>{"MCP（Model Context\nProtocol）：AIが外部のツールやデータにつながるための共通の仕組み"}</li>{"\n"}
<li>{"オーケストレーター：複数のエージェントや処理の順序を取りまとめる仕組み"}</li>{"\n"}
<li>{"最小権限：必要な最小限の権限だけを与えるという原則"}</li>{"\n"}
<li>{"供給網（サプライチェーン）：部品や外部サービスなど、システムが依存する外部の要素の連なり"}</li>{"\n"}
</ul>
</div>{"\n"}
<hr />{"\n"}
</>;
}
