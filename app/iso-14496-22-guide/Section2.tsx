import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section2() { return <>
<h2 id="step-2">{"Step\n2：OFFとOpenTypeの関係を理解する"}</h2>
<h3 id="2-1-3つの名前を整理する">{"2-1. 3つの名前を整理する"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"名前"}</th>

<th>{"何者か"}</th>

<th>{"管理者"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td><strong>{"OpenType"}</strong></td>

<td>{"業界仕様。実際のフォント制作で広く使われる名称"}</td>

<td>{"Microsoft の仕様書サイト等で公開・更新"}</td>
</tr>

<tr className="even">
<td><strong>{"OFF（Open Font Format）"}</strong></td>

<td>{"OpenTypeとほぼ同内容の"}
<strong>{"ISO国際規格"}</strong></td>

<td>{"ISO/IEC JTC 1/SC 29（MPEG）"}</td>
</tr>

<tr className="odd">
<td><strong>{"WOFF / WOFF2"}</strong></td>

<td>{"OpenType/TrueTypeフォントを"}
<strong>{"Web配信用に圧縮"}</strong>
{"したラッパー形式"}</td>

<td>{"W3C"}</td>
</tr>
</tbody>
</table></div>
<div className="mermaid-diagram" id="mmd-2" role="img" aria-label="TrueTypeとPostScript/CFFからOpenType、OFF、Web配信のWOFFへ至る関係図" aria-describedby="mmd-2-desc"><p id="mmd-2-desc" hidden>{"元になった技術であるTrueType（Apple / Microsoft）とPostScript Type 1 / CFF（Adobe）が統合された仕様であるOpenType（業界仕様）になり、OpenTypeとOFF（ISO/IEC 14496-22、国際標準）は内容を同期して維持され、OpenTypeからWeb配信用の圧縮ラッパーであるWOFF / WOFF2へ圧縮して配信される。"}</p><Mermaid chart={DIAGRAMS["mmd-2"]!} /></div>
<h3 id="2-2-同期の仕組み">{"2-2. 同期の仕組み"}</h3>
<ul>
<li>{"2007年の初版は、技術的に "}
<strong>{"OpenType 1.4"}</strong>
{"\n仕様と同等でした。"}</li>

<li>{"2009年の第2版は、OpenType仕様と「技術的に同等」と宣言され、以後\n"}
<strong>{"OFFとOpenTypeは同期して維持"}</strong>
{"されています。"}</li>

<li>{"Microsoft の OpenType 1.9.1\n仕様ページには、「第5版の予備作業草案の改訂を取り込んでいる」と明記されています。つまり、"}
<strong>{"OFF第5版の審議中の草案が、OpenType\n1.9.1 に取り込まれた"}</strong>
{"ことが確認できます。"}</li>
</ul>
<div className="callout callout-key">
<p>{"🔑 "}
<strong>{"初学者向けの覚え方"}</strong>
{"：OpenType =\n「現場で使う名前」、OFF =\n「国際標準として文書化された名前」。中身はほぼ同じ。"}</p>
</div>
</>; }
