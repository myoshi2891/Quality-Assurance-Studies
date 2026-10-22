import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="s-3-step-3-基本概念を理解する-sql環境のモデル">{"3. Step 3: 基本概念を理解する（SQL環境のモデル）"}</h2>

<div className="callout callout-warn"><p>{"※ ISO/IEC 9075-1:2023 は、ISO・IECの公式ストアで価格 CHF 0 と案内されています。これとは別に、ISOは規格本文のAI利用を認めていないため、本節は"}<strong>{"公開情報と一般的なSQL知識に基づく概念説明"}</strong>{"です。正確な定義文は、必ずISO Online Browsing Platform（OBP）のサンプルまたは規格本文で確認してください。"}</p></div>

<h3 id="s-3-1-sqlデータの入れ物の階層">{"3.1 SQLデータの入れ物の階層"}</h3>

<p>{"実務で見慣れた「データベース > スキーマ > テーブル」は、標準の用語では次のように整理されます。"}</p>

<Diagram id="diagram-2" />

<div className="table-scroll"><table aria-labelledby="s-3-1-sqlデータの入れ物の階層"><thead><tr className="header"><th>{"標準の用語"}</th><th>{"PostgreSQLでの近い概念"}</th><th>{"MySQLでの近い概念"}</th><th>{"注意点"}</th></tr></thead><tbody><tr className="odd"><td>{"カタログ"}</td><td>{"データベース"}</td><td>{"（実装依存）"}</td><td>{"製品ごとに呼び方・扱いが異なる"}</td></tr><tr className="even"><td>{"スキーマ"}</td><td>{"スキーマ"}</td><td>{"データベース（≒スキーマ）"}</td><td>{"MySQLは「スキーマ＝データベース」の扱い"}</td></tr><tr className="odd"><td>{"テーブル"}</td><td>{"テーブル"}</td><td>{"テーブル"}</td><td>{"ほぼ共通"}</td></tr></tbody></table></div>

<div className="callout callout-practice"><p><strong>{"QAの視点"}</strong>{": 「標準ではこう呼ぶ」と「製品ではこう呼ぶ」の差を意識すると、"}<strong>{"移植性テスト"}</strong>{"の観点が増えます。"}</p></div>

<h3 id="s-3-2-クライアントとサーバーの関係">{"3.2 クライアントとサーバーの関係"}</h3>

<Diagram id="diagram-3" />

<div className="callout callout-note"><p>{"上図は"}<strong>{"概念モデル"}</strong>{"です。実際の通信方式（ネットワークプロトコル等）は標準の対象外で、製品ごとに異なります。"}</p></div>

<h3 id="s-3-3-文の分類">{"3.3 文の分類"}</h3>

<p>{"SQL文は大きく次のように整理して理解すると、学習しやすくなります。"}</p>

<div className="table-scroll"><table aria-labelledby="s-3-3-文の分類"><thead><tr className="header"><th>{"分類"}</th><th>{"代表例"}</th><th>{"目的"}</th></tr></thead><tbody><tr className="odd"><td>{"スキーマ定義系"}</td><td><code>{"CREATE TABLE"}</code></td><td>{"構造を定義"}</td></tr><tr className="even"><td>{"データ操作系"}</td><td><code>{"SELECT"}</code>{" / "}<code>{"INSERT"}</code>{" / "}<code>{"UPDATE"}</code>{" / "}<code>{"DELETE"}</code></td><td>{"データを読み書き"}</td></tr><tr className="odd"><td>{"トランザクション系"}</td><td><code>{"COMMIT"}</code>{" / "}<code>{"ROLLBACK"}</code></td><td>{"一貫性の制御"}</td></tr><tr className="even"><td>{"接続・セッション系"}</td><td><code>{"SET"}</code>{" 系"}</td><td>{"接続状態の制御"}</td></tr></tbody></table></div>

<hr />

</>; }
