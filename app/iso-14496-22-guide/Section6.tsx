import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section6() { return <>
<h2 id="step-6">{"Step 6：規格の主要機能"}</h2>
<h3 id="6-1-2種類のアウトライン形式">{"6-1. 2種類のアウトライン形式"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"項目"}</th>

<th>{"TrueType形式（"}
<code>{"glyf"}</code>
{"）"}</th>

<th>{"CFF / CFF2形式"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"曲線の種類（従来）"}</td>

<td>{"2次ベジェ"}</td>

<td>{"3次ベジェ"}</td>
</tr>

<tr className="even">
<td>{"由来"}</td>

<td>{"Apple / Microsoft"}</td>

<td>{"Adobe（PostScript）"}</td>
</tr>

<tr className="odd">
<td>{"向いている用途"}</td>

<td>{"画面表示、ヒンティング重視"}</td>

<td>{"印刷・DTP、データ量の効率"}</td>
</tr>

<tr className="even">
<td>{"識別"}</td>

<td>{"TrueType系の識別子"}</td>

<td><code>{"OTTO"}</code>
{" 系の識別子"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-new">
<p>{"🆕 "}
<strong>{"第5版"}</strong>
{"では、"}
<code>{"GLYF"}</code>
{"\n側でも"}
<strong>{"3次ベジェ曲線"}</strong>
{"を扱えるようにする拡張が入りました（Step\n7）。"}</p>
</div>
<h3 id="6-2-レイアウト機能off-layout">{"6-2. レイアウト機能（OFF\nLayout）"}</h3>
<p>{"規格は、フォント制作者が国際的・高度な組版を設計できるよう、"}
<strong>{"グリフ置換・グリフ位置調整・ベースライン情報"}</strong>
{"などを持つレイアウトテーブルを定義しています。"}</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"テーブル"}</th>

<th>{"役割"}</th>

<th>{"例"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td><code>{"GSUB"}</code></td>

<td>{"グリフ置換"}</td>

<td>{"合字、異体字、縦書き用字形"}</td>
</tr>

<tr className="even">
<td><code>{"GPOS"}</code></td>

<td>{"グリフ位置調整"}</td>

<td>{"カーニング、アクセント位置"}</td>
</tr>

<tr className="odd">
<td><code>{"GDEF"}</code></td>

<td>{"グリフ定義"}</td>

<td>{"グリフの分類、合字のキャレット位置"}</td>
</tr>

<tr className="even">
<td><code>{"BASE"}</code></td>

<td>{"ベースライン"}</td>

<td>{"欧文・和文の混植時の基準線"}</td>
</tr>

<tr className="odd">
<td><code>{"JSTF"}</code></td>

<td>{"両端揃え"}</td>

<td>{"行末調整の情報"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-note">
<p>{"日本語組版では、縦書き用の機能（"}
<code>{"vert"}</code>
{"\nなど）や、約物の幅調整（"}
<code>{"chws"}</code>
{" 機能が Amd 1\nで追加）が重要になります。"}</p>
</div>
<h3 id="6-3-カラーフォント">{"6-3. カラーフォント"}</h3>
<div className="mermaid-diagram" id="mmd-6" role="img" aria-label="ビットマップ・レイヤー・SVGの3方式によるカラーフォントの分類図" aria-describedby="mmd-6-desc"><p id="mmd-6-desc" hidden>{"カラーフォントは、ビットマップ方式（CBDT / CBLC：絵文字など、拡大に弱い）、レイヤー方式（COLR / CPAL：ベクターで拡大に強い）、SVG方式（SVG テーブル：表現力が高い、XML準拠が必須）の3方式に分かれる。"}</p><Mermaid chart={DIAGRAMS["mmd-6"]!} /></div>
<div className="callout callout-note">
<p>{"Amd 1:2020 では、SVGテーブルは TrueType・CFF・CFF2\nのいずれのアウトラインを持つフォントでも使え、SVG文書はXML定義に準拠しなければならない、と整理されています。"}</p>
</div>
<h3 id="6-4-バリアブルフォント">{"6-4. バリアブルフォント"}</h3>
<p>{"1つのフォントファイルの中に"}
<strong>{"太さ・幅などの連続的な変化"}</strong>
{"（軸）を持たせる仕組みです。"}</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"テーブル"}</th>

<th>{"役割"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td><code>{"fvar"}</code></td>

<td>{"軸の定義（太さ、幅など）"}</td>
</tr>

<tr className="even">
<td><code>{"gvar"}</code></td>

<td>{"TrueTypeアウトラインの変化データ"}</td>
</tr>

<tr className="odd">
<td><code>{"CFF2"}</code></td>

<td>{"変化に対応したCFF"}</td>
</tr>

<tr className="even">
<td><code>{"avar"}</code>
{" / "}
<code>{"cvar"}</code>
{" / "}
<code>{"HVAR"}</code>
{" /\n"}
<code>{"MVAR"}</code>
{" / "}
<code>{"VVAR"}</code></td>

<td>{"軸の補正、メトリクスの変化"}</td>
</tr>

<tr className="odd">
<td><code>{"STAT"}</code></td>

<td>{"スタイル属性"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-note">
<p>{"第4版（2019）の規格本文に「OFF Font\nvariations」の節があり、この仕組みが標準として整理されています。"}</p>
</div>
</>; }
