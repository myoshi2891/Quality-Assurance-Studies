import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="s-2-step-2-part-1-が-何を決めているか">{"2. Step 2: Part 1 が「何を決めているか」"}</h2>

<p>{"ISO公式ページの Scope（適用範囲）は、次の2点に集約されます（要約）。"}</p>

<ol type="1"><li>{"ISO/IEC 9075 シリーズの他パートが、"}<strong>{"SQLの文法"}</strong>{"と、SQL実装（SQL-implementation）が文を処理した"}<strong>{"結果"}</strong>{"を規定するために使う"}<strong>{"概念的な枠組み"}</strong>{"を説明する"}</li><li>{"他パートで使われる"}<strong>{"用語と表記法"}</strong>{"を定義する"}</li></ol>

<h3 id="s-2-1-役割をマークダウン表で整理">{"2.1 役割をマークダウン表で整理"}</h3>

<div className="table-scroll"><table aria-labelledby="s-2-1-役割をマークダウン表で整理"><thead><tr className="header"><th>{"Part 1 の役割"}</th><th>{"具体例（イメージ）"}</th><th>{"初学者への意味"}</th></tr></thead><tbody><tr className="odd"><td>{"概念の定義"}</td><td>{"SQL環境、カタログ、スキーマ、セッション、トランザクション"}</td><td>{"「SQLの世界の登場人物」の紹介"}</td></tr><tr className="even"><td>{"用語の定義"}</td><td>{"規格内で厳密に使う語（例: SQL-implementation）"}</td><td>{"規格を読むときの辞書"}</td></tr><tr className="odd"><td>{"表記法の定義"}</td><td>{"文法記述（BNF風）の読み方"}</td><td>{"規格の「凡例」"}</td></tr><tr className="even"><td>{"適合性（Conformance）の枠組み"}</td><td>{"何を実装すれば「SQL準拠」と言えるか"}</td><td>{"ベンダー比較の物差し"}</td></tr></tbody></table></div>

<h3 id="s-2-2-part-1-と-part-2-の関係-フローチャート">{"2.2 Part 1 と Part 2 の関係（フローチャート）"}</h3>

<Diagram id="diagram-1" />

<div className="callout callout-practice"><p><strong>{"ポイント"}</strong>{": "}<code>{"SELECT"}</code>{" の正確な文法や評価規則を知りたい → Part 2。 「そもそもSQLの世界はどんな構成要素でできているか」「準拠とは何か」を知りたい → "}<strong>{"Part 1"}</strong>{"。"}</p></div>

<hr />

</>; }
