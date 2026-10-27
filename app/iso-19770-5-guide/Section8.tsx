import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section8() { return <>
<h2 id="step-8学習ロードマップと読む順番">
{"\n                        Step 8：学習ロードマップと読む順番\n                    "}
</h2>
<h3 id="8-1-目的別次に読む規格">
{"8-1. 目的別・次に読む規格"}
</h3>
<div className="mermaid-diagram" id="mmd-9" role="img" aria-label="図9"><Mermaid chart={DIAGRAMS["mmd-9"]!} /></div>
<h3 id="8-2-初学者向け5ステップ学習プラン">
{"\n                        8-2. 初学者向け5ステップ学習プラン\n                    "}
</h3>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"ステップ"}
</th>

<th>
{"内容"}
</th>

<th>
{"目安時間"}
</th>

<th>
{"ゴール"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"①"}
</td>

<td>
{"本ガイドを通読する"}
</td>

<td>
{"30〜40分"}
</td>

<td>
{"全体像をつかむ"}
</td>

</tr>

<tr className="even">

<td>
{"②"}
</td>

<td>
{"19770-5の原文（無料）を読む"}
</td>

<td>
{"1時間"}
</td>

<td>
{"用語の公式定義を確認する"}
</td>

</tr>

<tr className="odd">

<td>
{"③"}
</td>

<td>
{"ITAM Standardsのサイトで各パートの概要を見る"}
</td>

<td>
{"30分"}
</td>

<td>
{"ファミリーの関係を理解する"}
</td>

</tr>

<tr className="even">

<td>
{"④"}
</td>

<td>
{"NIST IR 8060／RFC 9393の概要を読む"}
</td>

<td>
{"1〜2時間"}
</td>

<td>
{"SWIDの実務利用を知る"}
</td>

</tr>

<tr className="odd">

<td>
{"⑤"}
</td>

<td>
{"19770-1を読む（有償）"}
</td>

<td>
{"数時間"}
</td>

<td>
{"ITAMシステムの要求事項を理解する"}
</td>

</tr>

</tbody>

</table>

</div>
</>; }
