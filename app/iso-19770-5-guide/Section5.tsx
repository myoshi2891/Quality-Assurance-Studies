import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section5() { return <>
<h2 id="step-5データ標準swidentrumのつながり">
{"\n                        Step 5：データ標準（SWID・ENT・RUM）のつながり\n                    "}
</h2>
<p>
{"\n                        19770-5の「概要」部分を理解する最大のコツは、"}
<strong>
{"3つのデータ標準が1つの問いに答えるために連携する"}
</strong>
{"と捉えることです。\n                    "}
</p>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"問い"}
</th>

<th>
{"担当する標準"}
</th>

<th>
{"例え"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"「何がインストールされているか？」"}
</td>

<td>
{"SWID（19770-2）"}
</td>

<td>
{"荷物の"}
<strong>
{"名札"}
</strong>
</td>

</tr>

<tr className="even">

<td>
{"「何を使う権利があるか？」"}
</td>

<td>
{"ENT（19770-3）"}
</td>

<td>
{"購入した"}
<strong>
{"チケット"}
</strong>
</td>

</tr>

<tr className="odd">

<td>
{"「実際どれだけ使われたか？」"}
</td>

<td>
{"RUM（19770-4）"}
</td>

<td>
{"実際の"}
<strong>
{"利用記録"}
</strong>
</td>

</tr>

</tbody>

</table>

</div>
<p>
{"\n                        3つを突き合わせれば、「権利は足りているか（過不足）」「使われていないものはないか」を定量的に判断できます。19770-4は、識別情報（19770-2）や権利情報（19770-3）と整合するよう設計されている、と説明されています。\n                    "}
</p>
<div className="mermaid-diagram" id="mmd-5" role="img" aria-label="SWID・ENT・RUMの突き合わせによる判定フロー図" aria-describedby="mmd-5-desc"><p id="mmd-5-desc" hidden>{"SWID（何が入っているか）、ENT（何を使ってよいか）、RUM（どれだけ使ったか）の3つのデータを突き合わせてライセンスの過不足を判定し、その結果をコンプライアンスの証明とコスト最適化に活用します。"}</p><Mermaid chart={DIAGRAMS["mmd-5"]!} /></div>
<h3 id="swidタグのライフサイクル補足">
{"SWIDタグのライフサイクル（補足）"}
</h3>
<p>
{"\n                        SWIDタグには、ソフトウェアの状態に応じた種類があります（NIST IR\n                        8060の整理による）。\n                    "}
</p>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"タグの種類"}
</th>

<th>
{"意味"}
</th>

<th>
{"作られるタイミング"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"コーパス（Corpus）"}
</td>

<td>
{"インストール前のソフト（パッケージなど）を表す"}
</td>

<td>
{"配布前"}
</td>

</tr>

<tr className="even">

<td>
{"プライマリ（Primary）"}
</td>

<td>
{"インストール済みの製品そのものを表す"}
</td>

<td>
{"インストール時"}
</td>

</tr>

<tr className="odd">

<td>
{"パッチ（Patch）"}
</td>

<td>
{"修正プログラムを表す"}
</td>

<td>
{"パッチ適用時"}
</td>

</tr>

<tr className="even">

<td>
{"サプリメンタル（Supplemental）"}
</td>

<td>
{"利用者側が追加情報を足すためのタグ"}
</td>

<td>
{"利用者が随時"}
</td>

</tr>

</tbody>

</table>

</div>
<div className="mermaid-diagram" id="mmd-6" role="img" aria-label="SWIDタグ種別（コーパス・プライマリ・パッチ・サプリメンタル）の関係図" aria-describedby="mmd-6-desc"><p id="mmd-6-desc" hidden>{"コーパスタグ（配布前）はインストールによってプライマリタグ（インストール済み）になり、更新によってパッチタグ（修正適用）が加わります。サプリメンタルタグ（利用者が情報を追加）からプライマリタグへは、元のタグを変更せずに補足する点線の関係があります。"}</p><Mermaid chart={DIAGRAMS["mmd-6"]!} /></div>
<div className="callout callout-practice">

<div className="callout-icon">
{"💡"}
</div>

<div className="callout-body">

<p>

<strong>
{"IETFの発展形"}
</strong>
{"：SWIDのXML形式をコンパクトなバイナリ形式（CBOR）にした\n                                "}
<strong>
{"CoSWID"}
</strong>
{" が、IETFの\n                                "}
<strong>
{"RFC 9393（2023年6月）"}
<strong>
{"として標準化されています。RFC 9393自身が、ISO/IEC\n                                        19770-2:2015のSWIDタグを土台にしていると明記しており、ISO規格が"}
</strong>
{"インターネット標準の基盤"}
</strong>
{"として実際に使われている好例です。\n                            "}
</p>

</div>

</div>
</>; }
