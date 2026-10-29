import React from 'react';
import Diagram from './Diagram';
export default function Section09() { return <>
<h2 id="step-8dash-クライアントの動き方">{"Step 8：DASH\nクライアントの動き方"}</h2>

<p><strong>{"【一般知識】"}</strong>{" プレーヤーは概ね次の順で動きます。"}</p>

<Diagram id="mermaid-diagram-4" />

<h3 id="abr-ロジックは規格の対象外">{"ABR ロジックは規格の対象外"}</h3>

<p><strong>{"【一般知識】"}</strong>{"\nどのタイミングでどの画質に切り替えるか（ABR アルゴリズム）は\n"}<strong>{"規格では定められておらず、プレーヤー実装の領域"}</strong>{"\nです。規格が定めるのは「選べる選択肢とその取得方法（MPD\nとセグメント）」です。だからこそ、dash.js・Shaka Player\nなど各実装で挙動が異なります。"}</p>

</>; }
