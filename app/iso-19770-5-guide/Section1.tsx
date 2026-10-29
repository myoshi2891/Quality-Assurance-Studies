import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section1() { return <>
<h2 id="step-1まず基本用語を押さえる">
{"Step 1：まず基本用語を押さえる"}
</h2>
<p>
{"\n                        規格の話に入る前に、最低限の言葉を整理します。（以下は初学者向けの"}
<strong>
{"やさしい言い換え"}
</strong>
{"で、規格本文の定義そのものではありません）\n                    "}
</p>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"用語"}
</th>

<th>
{"略称"}
</th>

<th>
{"やさしい説明"}
</th>

<th>
{"具体例"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"IT Asset Management"}
</td>

<td>
{"ITAM"}
</td>

<td>
{"\n                                        組織が持つITの資産を、入手から廃棄まで管理して価値を引き出す活動\n                                    "}
</td>

<td>
{"PC、サーバー、ソフトウェア、クラウド契約の管理"}
</td>

</tr>

<tr className="even">

<td>
{"Software Asset Management"}
</td>

<td>
{"SAM"}
</td>

<td>
{"\n                                        ITAMのうち、特に"}
<strong>
{"ソフトウェア"}
</strong>
{"を対象にした管理\n                                    "}
</td>

<td>
{"ライセンス数と実際の利用数の突き合わせ"}
</td>

</tr>

<tr className="odd">

<td>
{"Hardware Asset Management"}
</td>

<td>
{"HAM"}
</td>

<td>
{"\n                                        ITAMのうち、"}
<strong>
{"ハードウェア"}
</strong>
{"を対象にした管理\n                                    "}
</td>

<td>
{"端末の台帳管理、保守期限の管理"}
</td>

</tr>

<tr className="even">

<td>
{"資産（アセット）"}
</td>

<td>
{"—"}
</td>

<td>
{"組織にとって価値があり、管理すべきもの"}
</td>

<td>
{"ライセンス、サーバー、アプリケーション"}
</td>

</tr>

<tr className="odd">

<td>
{"権利（エンタイトルメント）"}
</td>

<td>
{"ENT"}
</td>

<td>
{"\n                                        ソフトウェアを"}
<strong>
{"どう使ってよいか"}
</strong>
{"という利用権の情報\n                                    "}
</td>

<td>
{"「100ユーザーまで」「1サーバーまで」"}
</td>

</tr>

<tr className="even">

<td>
{"ソフトウェア識別タグ"}
</td>

<td>
{"SWID"}
</td>

<td>
{"ソフトウェア自身が持つ「名札」のようなデータ"}
</td>

<td>
{"製品名・版数・提供元などを記録したXML"}
</td>

</tr>

<tr className="odd">

<td>
{"資源利用の測定"}
</td>

<td>
{"RUM"}
</td>

<td>
{"実際にどれだけ使われたかの計測データ"}
</td>

<td>
{"CPU使用量、ユーザー数、利用時間"}
</td>

</tr>

</tbody>

</table>

</div>
<h3 id="itamの基本サイクル">
{"ITAMの基本サイクル"}
</h3>
<p>
{"\n                        SAMは「購入・導入・保守・利用・廃棄」といった"}
<strong>
{"ライフサイクル全体"}
</strong>
{"を管理する事業活動として説明されます。\n                    "}
</p>
<div className="mermaid-diagram" id="mmd-1" role="img" aria-label="IT資産ライフサイクルの流れ図" aria-describedby="mmd-1-desc"><p id="mmd-1-desc" hidden>{"調達（購入・契約）、導入（配備・設定）、運用（利用状況の把握）、保守（更新・パッチ）、廃棄・返却（権利の整理）の順に進みます。廃棄・返却から調達へは、棚卸しの結果を次の調達へ生かす点線の戻り経路があります。"}</p><Mermaid chart={DIAGRAMS["mmd-1"]!} /></div>
</>; }
