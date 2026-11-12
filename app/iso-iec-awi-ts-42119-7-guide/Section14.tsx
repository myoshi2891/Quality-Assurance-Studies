import React from 'react';
/** Preserve source category: 13. ミニ演習：社内FAQボット（RAG）をレッドチーミングしてみる. */
export default function Section14() {
    return <>
<h2 id="13-ミニ演習社内faqボットragをレッドチーミングしてみる">{"13.\nミニ演習：社内FAQボット（RAG）をレッドチーミングしてみる"}</h2>{"\n"}
<div className="callout callout-intro">
<div className="callout-head">
<span className="callout-icon">{"💡"}</span>
<span className="callout-title">{"この章でやること"}</span>
</div>
<div className="callout-body">
<p>{"この章では、ここまでの知識を使って、小さな例で全体の流れを体験します。実際の攻撃文面は扱わず、考え方の練習に絞ります。⚪\n全体が筆者による演習例です。"}</p>
</div>
</div>{"\n"}
<h3 id="13-1-題材">{"13-1. 題材"}</h3>{"\n"}
<p>{"次のシステムを想定します。"}</p>{"\n"}
<ul>{"\n"}
<li>{"社員が質問すると、社内の規程文書を検索して回答する\n"}<strong>{"FAQボット（RAG方式）"}</strong>
</li>{"\n"}
<li>{"社内の人事規程、経費規程、一部の機密資料が検索対象に入っている"}</li>{"\n"}
<li>{"回答は画面に表示されるだけで、外部への送信機能はない"}</li>{"\n"}
</ul>{"\n"}
<h3 id="13-2-ステップごとの進め方">{"13-2. ステップごとの進め方"}</h3>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="13-2-ステップごとの進め方">
<table>
<thead>
<tr className="header">
<th style={{ "textAlign": "center" }}>{"ステップ"}</th>
<th>{"何をするか"}</th>
<th>{"この例での具体例"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td style={{ "textAlign": "center" }}>{"①"}</td>
<td>{"守る資産と使われ方を確認する"}</td>
<td>{"機密資料、個人情報、社員だけが使う"}</td>
</tr>
<tr className="even">
<td style={{ "textAlign": "center" }}>{"②"}</td>
<td>{"三つ組の条件を確認する"}</td>
<td>{"非公開データ：あり、信頼できない内容：検索対象に外部文書が混じる可能性、外部通信：なし。外部通信がなくても、"}<strong>{"画面への回答そのものが情報漏えいの経路"}</strong>{"になる（閲覧権限のない社員に機密資料の内容が表示される）。そのため外部通信の有無だけで経路を限定せず、"}<strong>{"検索時と回答時の両方で利用者の閲覧権限が確認されるか"}</strong>{"を評価に含める"}</td>
</tr>
<tr className="odd">
<td style={{ "textAlign": "center" }}>{"③"}</td>
<td>{"リスクシナリオを作る"}</td>
<td>{"「権限のない社員が、閲覧不可の資料の内容を知ってしまう」「古い規程に基づく誤回答で、手続きを誤る」"}</td>
</tr>
<tr className="even">
<td style={{ "textAlign": "center" }}>{"④"}</td>
<td>{"攻撃シナリオを設計する"}</td>
<td>{"検索対象に紛れた文書による指示の混入、質問の言い換えによる閲覧制限の回避、など（カテゴリの設計まで）"}</td>
</tr>
<tr className="odd">
<td style={{ "textAlign": "center" }}>{"⑤"}</td>
<td>{"環境と中止基準を決める"}</td>
<td>{"検証用環境を使う。本番データは使わない。個人情報が出たら即中止して連絡"}</td>
</tr>
<tr className="even">
<td style={{ "textAlign": "center" }}>{"⑥"}</td>
<td>{"繰り返し実行して記録する"}</td>
<td>{"出力が揺れるので、同じシナリオを複数回試し、結果を毎回記録する"}</td>
</tr>
<tr className="odd">
<td style={{ "textAlign": "center" }}>{"⑦"}</td>
<td>{"結果を判定する"}</td>
<td>{"自動判定と人のレビューを併用。判定の基準と不一致時の扱いを先に決めておく"}</td>
</tr>
<tr className="even">
<td style={{ "textAlign": "center" }}>{"⑧"}</td>
<td>{"報告し、直し、再テストする"}</td>
<td>{"発見事項を記録し、修正後に同じシナリオで再確認する"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<h3 id="13-3-この演習で身につくこと">{"13-3. この演習で身につくこと"}</h3>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="13-3-この演習で身につくこと">
<table>
<thead>
<tr className="header">
<th>{"学べること"}</th>
<th>{"対応する章"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"リスクシナリオと攻撃シナリオを分けて考える"}</td>
<td>{"6-4"}</td>
</tr>
<tr className="even">
<td>{"出力が揺れる前提で、繰り返し測る"}</td>
<td>{"8章"}</td>
</tr>
<tr className="odd">
<td>{"判定基準を事前に決めておく"}</td>
<td>{"8章"}</td>
</tr>
<tr className="even">
<td>{"修正後に同じシナリオで再確認する"}</td>
<td>{"9章、10章"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<div className="glossary">
<div className="glossary-head">{"📖 このセクションで登場した用語"}</div>
<ul>{"\n"}
<li>{"閲覧制限（アクセス制御）：誰がどの情報を見られるかを制限する仕組み"}</li>{"\n"}
<li>{"中止基準：問題が起きたときに、テストを止める条件"}</li>{"\n"}
<li>{"再テスト：修正後に、同じ条件で再度確かめること"}</li>{"\n"}
</ul>
</div>{"\n"}
<hr />{"\n"}
</>;
}
