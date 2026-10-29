import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section3() { return <>
<h2 id="step-3規格が扱う4つの柱を理解する">
{"\n                        Step 3：規格が扱う4つの柱を理解する\n                    "}
</h2>
<p>
{"ISOの公式な要旨（abstract）によると、本規格は次の4点を提供します。"}
</p>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"柱"}
</th>

<th>
{"公式要旨の内容（言い換え）"}
</th>

<th>
{"初学者向けの理解"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"① 全体像"}
</td>

<td>
{"ISO/IEC 19770ファミリーの概要"}
</td>

<td>
{"「どの規格が何を担当しているか」の地図"}
</td>

</tr>

<tr className="even">

<td>
{"② 入門"}
</td>

<td>
{"ITAMとSAMの紹介"}
</td>

<td>
{"「そもそもITAM／SAMとは何か」の導入"}
</td>

</tr>

<tr className="odd">

<td>
{"③ 基本原則"}
</td>

<td>
{"SAMの土台となる原則やアプローチの簡潔な説明"}
</td>

<td>
{"「なぜそのやり方をするのか」の考え方"}
</td>

</tr>

<tr className="even">

<td>
{"④ 用語"}
</td>

<td>
{"ファミリー全体で一貫して使う用語と定義"}
</td>

<td>
{"「同じ言葉は同じ意味」にそろえる共通辞書"}
</td>

</tr>

</tbody>

</table>

</div>
<div className="mermaid-diagram" id="mmd-3" role="img" aria-label="図3"><Mermaid chart={DIAGRAMS["mmd-3"]!} /></div>
<h3 id="itamsamを実践する意義3つの目的">
{"\n                        ITAM／SAMを実践する意義（3つの目的）\n                    "}
</h3>
<p>
{"\n                        ISO/IEC 19770の策定を担うコミュニティ（ITAM\n                        Standards）は、導入効果を次のように整理しています。\n                    "}
</p>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"目的"}
</th>

<th>
{"内容"}
</th>

<th>
{"現場でのうれしさ"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"リスク管理"}
</td>

<td>
{"ITサービスの中断、契約違反、監査リスクを抑える"}
</td>

<td>
{"ライセンス監査で慌てない"}
</td>

</tr>

<tr className="even">

<td>
{"コスト削減"}
</td>

<td>
{"重複購入や使われていないソフトの無駄をなくす"}
</td>

<td>
{"更新時に不要なライセンスを手放せる"}
</td>

</tr>

<tr className="odd">

<td>
{"意思決定の質向上"}
</td>

<td>
{"正確なデータに基づいて判断できる"}
</td>

<td>
{"「どの製品を何人が使っているか」を即答できる"}
</td>

</tr>

</tbody>

</table>

</div>
</>; }
