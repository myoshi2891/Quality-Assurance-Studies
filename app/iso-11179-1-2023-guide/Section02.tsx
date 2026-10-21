import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-1なぜメタデータレジストリが必要なのか">{"STEP\n1：なぜ「メタデータレジストリ」が必要なのか"}</h2>

<h3 id="1-1-現場で起きる典型的な問題">{"1-1. 現場で起きる典型的な問題"}</h3>

<p>{"3つのシステムが同じ「性別」を別々の形式で持っているとします。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"システム"}</th><th>{"項目名"}</th><th>{"保存形式"}</th><th>{"値の例"}</th></tr></thead><tbody><tr className="odd"><td>{"電子カルテ"}</td><td><code>{"sex"}</code></td><td>{"文字（1桁）"}</td><td><code>{"M"}</code>{" / "}<code>{"F"}</code>{" / "}<code>{"U"}</code></td></tr><tr className="even"><td>{"治験データ管理"}</td><td><code>{"GENDER"}</code></td><td>{"数値（1桁）"}</td><td><code>{"1"}</code>{" / "}<code>{"2"}</code>{" / "}<code>{"9"}</code></td></tr><tr className="odd"><td>{"受付システム"}</td><td><code>{"性別"}</code></td><td>{"日本語文字列"}</td><td><code>{"男"}</code>{" / "}<code>{"女"}</code>{" / "}<code>{"不明"}</code></td></tr></tbody></table></div>

<p>{"見た目は違っても、"}<strong>{"「意味」は同じ"}</strong>{"です。ところが、意味と表現が分離されていないと次のようなことが起きます。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"問題"}</th><th>{"具体例"}</th></tr></thead><tbody><tr className="odd"><td>{"統合時の誤変換"}</td><td><code>{"1"}</code>{"\nを「男」と解釈するシステムと「女」と解釈するシステムが混在する"}</td></tr><tr className="even"><td>{"重複定義"}</td><td>{"同じ意味の項目が部署ごとに別名・別定義で乱立する"}</td></tr><tr className="odd"><td>{"説明責任の欠如"}</td><td>{"「この項目は誰が、どの定義で、いつ承認したのか」が追えない"}</td></tr><tr className="even"><td>{"テスト困難"}</td><td>{"期待値（許容値の集合）が文書化されておらず、検証観点が属人化する"}</td></tr></tbody></table></div>

<h3 id="1-2-11179-が提案する解決の発想">{"1-2. 11179\nが提案する解決の発想"}</h3>

<Diagram id="diagram-2" />

<p><strong>{"キーワード"}</strong>{"：「"}<strong>{"意味（コンセプト）"}</strong>{"」と「"}<strong>{"表現（値の持ち方）"}</strong>{"」を分離し、意味は共通、表現は用途ごとに複数持てるようにする。"}</p>

<div className="callout callout-practice"><span className="callout-icon">{"💡"}</span><div className="callout-body"><div className="callout-title">{"ベストプラクティス"}</div><p>{"データ統合や標準化の議論では、まず「それは意味の違いか、表現の違いか」を切り分ける癖をつけると、議論が劇的に整理されます。11179\nはこの切り分けの語彙を提供する規格です。"}</p></div></div>

</>; }
