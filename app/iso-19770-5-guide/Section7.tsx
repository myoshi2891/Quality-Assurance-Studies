import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section7() { return <>
<h2 id="step-7改訂動向第3版への置き換え">
{"\n                        Step 7：改訂動向（第3版への置き換え）\n                    "}
</h2>
<h3 id="7-1-改訂の経緯isoのステージ記録より">
{"\n                        7-1. 改訂の経緯（ISOのステージ記録より）\n                    "}
</h3>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"時期"}
</th>

<th>
{"できごと"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"2015年7月"}
</td>

<td>
{"第2版（現行版）発行"}
</td>

</tr>

<tr className="even">

<td>
{"2021年2月"}
</td>

<td>
{"定期見直しの結果、現行版が「確認（confirmed）」"}
</td>

</tr>

<tr className="odd">

<td>
{"2023年8月"}
</td>

<td>
{"\n                                        「改訂予定」ステージへ。同日、新規プロジェクトが承認され委員会ドラフト登録\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"2024年8月〜10月"}
</td>

<td>
{"DIS（国際規格案）登録、10月23日にDIS投票開始（12週間）"}
</td>

</tr>

<tr className="odd">

<td>
{"2025年1月"}
</td>

<td>
{"DIS投票終了"}
</td>

</tr>

<tr className="even">

<td>
{"2026年7月"}
</td>

<td>
{"DIS承認→FDIS登録（7月3日、7月14日）"}
</td>

</tr>

<tr className="odd">

<td>
{"2026年9月22日"}
</td>

<td>
{"最終承認投票（8週間）開始（ステージ50.20）"}
</td>

</tr>

<tr className="even">

<td>
{"2026年11月（予定）"}
</td>

<td>
{"第3版発行予定"}
</td>

</tr>

</tbody>

</table>

</div>
<div className="mermaid-diagram" id="mmd-8" role="img" aria-label="図8"><Mermaid chart={DIAGRAMS["mmd-8"]!} /></div>
<h3 id="7-2-第2版現行と第3版予定の比較">
{"\n                        7-2. 第2版（現行）と第3版（予定）の比較\n                    "}
</h3>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"項目"}
</th>

<th>
{"第2版（2015年）"}
</th>

<th>
{"第3版（PRF／2026年11月予定）"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"題名"}
</td>

<td>
{"Part 5: Overview and vocabulary"}
</td>

<td>
{"Part 5: "}
<strong>
{"Vocabulary"}
</strong>
</td>

</tr>

<tr className="even">

<td>
{"ページ数"}
</td>

<td>
{"19ページ"}
</td>

<td>
{"16ページ"}
</td>

</tr>

<tr className="odd">

<td>
{"ICS"}
</td>

<td>
{"35.080"}
</td>

<td>
{"35.020 / 01.040.35（用語分野の分類が追加）"}
</td>

</tr>

<tr className="even">

<td>
{"関連するSDGs"}
</td>

<td>
{"9"}
</td>

<td>
{"9、8、12"}
</td>

</tr>

<tr className="odd">

<td>
{"状態"}
</td>

<td>
{"有効（改訂予定）"}
</td>

<td>
{"最終承認フェーズ（制定前）"}
</td>

</tr>

</tbody>

</table>

</div>
<div className="callout callout-warn">

<div className="callout-icon">
{"⚠️"}
</div>

<div className="callout-body">

<p>

<strong>
{"実務上の注意"}
</strong>
{"：第3版が発行されると、現行の第2版は置き換えられる見込みです。"}
<strong>
{"社内規程や調達仕様書で規格を引用する場合は、版（年）を明記"}
</strong>
{"し、発行後は第3版の本文で用語の変更点を確認してください。なお、題名の変更（Overviewの削除）や、ページ数の減少から、内容構成の変更が想定されますが、"}
<strong>
{"中身は発行まで確認できないため断定はできません"}
</strong>
{"。\n                            "}
</p>

</div>

</div>
</>; }
