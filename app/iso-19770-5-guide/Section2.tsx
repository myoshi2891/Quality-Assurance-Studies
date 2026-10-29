import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section2() { return <>
<h2 id="step-2規格の基本情報を確認する">
{"Step 2：規格の基本情報を確認する"}
</h2>
<h3 id="2-1-基本プロフィール">
{"2-1. 基本プロフィール"}
</h3>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"項目"}
</th>

<th>
{"内容"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"規格番号"}
</td>

<td>
{"ISO/IEC 19770-5:2015"}
</td>

</tr>

<tr className="even">

<td>
{"正式名称"}
</td>

<td>
{"\n                                        Information technology — IT asset management — Part 5:\n                                        Overview and vocabulary\n                                    "}
</td>

</tr>

<tr className="odd">

<td>
{"日本語訳（目安）"}
</td>

<td>
{"情報技術—ITアセットマネジメント—第5部：概要及び用語"}
</td>

</tr>

<tr className="even">

<td>
{"版"}
</td>

<td>
{"第2版（Edition 2）"}
</td>

</tr>

<tr className="odd">

<td>
{"発行時期"}
</td>

<td>
{"\n                                        2015年7月末〜8月（ISOのステージ表記では2015-07-31に発行）\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"ページ数"}
</td>

<td>
{"19ページ"}
</td>

</tr>

<tr className="odd">

<td>
{"担当委員会"}
</td>

<td>
{"\n                                        ISO/IEC JTC 1/SC\n                                        7（ソフトウェア及びシステムズエンジニアリング）\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"ICS分類"}
</td>

<td>
{"35.080（ソフトウェア）"}
</td>

</tr>

<tr className="odd">

<td>
{"前の版"}
</td>

<td>
{"ISO/IEC 19770-5:2013（既に廃止）"}
</td>

</tr>

<tr className="even">

<td>
{"適用対象"}
</td>

<td>
{"\n                                        営利企業、行政機関、非営利組織など"}
<strong>
{"あらゆる種類の組織"}
</strong>

</td>

</tr>

<tr className="odd">

<td>
{"価格"}
</td>

<td>

<strong>
{"無料"}
</strong>
{"（ISOのITTFサイトで公開されている規格）\n                                    "}
</td>

</tr>

</tbody>

</table>

</div>
<h3 id="2-2-2013年版からの大きな変化">
{"2-2. 2013年版からの大きな変化"}
</h3>
<p>
{"\n                        2013年版の表題は「"}
<strong>
{"ソフトウェア"}
</strong>
{"資産管理（Software asset\n                        management）」でしたが、2015年版では「"}
<strong>
{"IT"}
</strong>
{"資産管理（IT asset\n                        management）」に変わっています。対象が"}
<strong>
{"ソフトウェアだけでなくIT資産全般"}
</strong>
{"に広がったことを示す変化です。\n                    "}
</p>
<div className="mermaid-diagram" id="mmd-2" role="img" aria-label="図2"><Mermaid chart={DIAGRAMS["mmd-2"]!} /></div>
<h3 id="2-3-現在のステータス2026年10月18日時点">
{"\n                        2-3. 現在のステータス（2026年10月18日時点）\n                    "}
</h3>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"観点"}
</th>

<th>
{"状況"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"現行版としての扱い"}
</td>

<td>

<strong>
{"有効（Published）"}
</strong>
{"。2021年に見直しの結果「確認（confirmed）」された\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"改訂ステージ"}
</td>

<td>
{"\n                                        ISOのステージ表示は\n                                        "}
<strong>
{"90.92「改訂予定（To be revised）」"}
</strong>
{"（2023-08-21に遷移）\n                                    "}
</td>

</tr>

<tr className="odd">

<td>
{"後継"}
</td>

<td>

<strong>
{"ISO/IEC PRF\n                                            19770-5（第3版）"}
<strong>
{"が最終承認フェーズ。ISOページ上の発行予定は"}
</strong>
{"2026年11月"}
</strong>

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
{"重要"}
</strong>
{"：後継版は題名が「Part 5:\n                                "}
<strong>
{"Vocabulary"}
</strong>
{"」となっており、"}
<strong>
{"「Overview（概要）」が題名から外れています"}
</strong>
{"。第3版では用語集としての性格がより強まる可能性があります。ただし、本文は発行前のため、本ガイドでは内容に踏み込みません（詳細は\n                                Step 7）。\n                            "}
</p>

</div>

</div>
</>; }
