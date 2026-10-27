import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section3() { return <>
<h2 id="step-3">{"Step 3：5つの版の歴史をたどる"}</h2>
<h3 id="3-1-版ごとの主な出来事">{"3-1. 版ごとの主な出来事"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"版"}</th>

<th>{"発行年"}</th>

<th>{"ポイント"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"第1版"}</td>

<td>{"2007"}</td>

<td>{"OpenType 1.4 相当をISO化"}</td>
</tr>

<tr className="even">
<td>{"第2版"}</td>

<td>{"2009"}</td>

<td>{"OpenTypeと「技術的に同等」と宣言。TrueTypeヒンティング言語を含む"}</td>
</tr>

<tr className="odd">
<td>{"第3版"}</td>

<td>{"2015"}</td>

<td>{"カラーフォント（CBDT/CBLC、COLR/CPAL、SVG）と数式組版（MATH）などを追加"}</td>
</tr>

<tr className="even">
<td>{"第4版"}</td>

<td>{"2019"}</td>

<td>{"Amd 1・Amd\n2（2015版への修正）を統合。バリアブルフォント関連を整理"}</td>
</tr>

<tr className="odd">
<td>{"Amd 1"}</td>

<td>{"2020"}</td>

<td>{"カラーフォント技術などの更新（SVGテーブルの扱い、"}
<code>{"chws"}</code>
{"\n機能など）"}</td>
</tr>

<tr className="even">
<td>{"Amd 2"}</td>

<td>{"2023"}</td>

<td>{"4版への追加修正"}</td>
</tr>

<tr className="odd">
<td><strong>{"第5版"}</strong></td>

<td><strong>{"2026"}</strong></td>

<td><strong>{"64Kグリフ上限の突破（24ビット化）、3次ベジェ曲線など"}</strong></td>
</tr>
</tbody>
</table></div>
<div className="mermaid-diagram" id="mmd-3" role="img" aria-label="第1版から第5版までのOFF規格の版の変遷図" aria-describedby="mmd-3-desc"><p id="mmd-3-desc" hidden>{"第1版（2007）から第2版（2009）、第3版（2015、カラー・MATH）、第4版（2019、バリアブル）、Amd 1 / Amd 2（2020 / 2023）を経て、第5版（2026、24ビット GID）へ改訂された。"}</p><Mermaid chart={DIAGRAMS["mmd-3"]!} /></div>
<h3 id="3-2-第3版でカラーフォントが入った背景">{"3-2.\n第3版でカラーフォントが入った背景"}</h3>
<p>{"業界各社が独自に提案したカラー表現を、ISOの枠組みで標準化した経緯があります。"}</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"提案元"}</th>

<th>{"方式"}</th>

<th>{"主なテーブル"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"Google"}</td>

<td>{"カラービットマップ"}</td>

<td><code>{"CBDT"}</code>
{" / "}
<code>{"CBLC"}</code></td>
</tr>

<tr className="even">
<td>{"Microsoft"}</td>

<td>{"レイヤー方式のカラー"}</td>

<td><code>{"COLR"}</code>
{" / "}
<code>{"CPAL"}</code></td>
</tr>

<tr className="odd">
<td>{"Adobe・Mozilla"}</td>

<td>{"SVGベース"}</td>

<td><code>{"SVG␠"}</code></td>
</tr>
</tbody>
</table></div>
<div className="callout callout-note">
<p>{"表記："}
<code>{"␠"}</code>
{"\nは半角スペース（U+0020）を表します。タグは4文字固定のため、"}
<code>{"SVG␠"}</code>
{"\nの実際のタグは「SVG」の後ろに半角スペース1つが付いた4バイトです。"}</p>
</div>
</>; }
