import React from 'react';

export default function Section9() { return <>
<h2 id="よくある誤解-qa">
{"よくある誤解 Q&A"}
</h2>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"誤解"}
</th>

<th>
{"実際"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"19770-5を取得すると「ITAM認証」が受けられる"}
</td>

<td>
{"\n                                        19770-5は概要・用語の規格であり、"}
<strong>
{"認証対象となる要求事項を規定する規格ではありません"}
</strong>
{"。管理システムの要求事項は"}
<strong>
{"19770-1"}
</strong>
{"です（認証機関向けの19770-11は計画段階）\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"ソフトウェアのライセンス管理だけの規格"}
</td>

<td>
{"\n                                        2015年版でタイトルが「IT資産管理」に変わり、"}
<strong>
{"IT資産全般"}
</strong>
{"を対象にしています。ただしSAMの基本原則の説明が中心である点は変わりません\n                                    "}
</td>

</tr>

<tr className="odd">

<td>
{"規格は有償で買わないと読めない"}
</td>

<td>
{"\n                                        19770-5:2015は"}
<strong>
{"無料"}
</strong>
{"で入手できます（ISOの公開規格）\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"19770-5だけ読めば実装できる"}
</td>

<td>
{"\n                                        実装には"}
<strong>
{"19770-1（仕組み）と、SWID・ENT・RUMなどのデータ標準"}
</strong>
{"の理解が必要です\n                                    "}
</td>

</tr>

<tr className="odd">

<td>
{"最新版はすでに第3版"}
</td>

<td>
{"\n                                        2026年10月18日時点では、第3版は"}
<strong>
{"制定前（最終承認フェーズ）"}
</strong>
{"で、"}
<strong>
{"現行は第2版"}
</strong>
{"です\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"SWIDはISO内だけの規格"}
</td>

<td>
{"\n                                        IETFのRFC 9393（CoSWID）やNISTの指針、SCAP\n                                        1.3など、"}
<strong>
{"外部の標準・指針が活用"}
</strong>
{"しています\n                                    "}
</td>

</tr>

</tbody>

</table>

</div>
</>; }
