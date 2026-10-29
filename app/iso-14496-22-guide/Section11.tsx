import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section11() { return <>
<h2 id="roadmap">{"学習ロードマップ"}</h2>
<div className="mermaid-diagram" id="mmd-10" role="img" aria-label="基礎から実践までの学習ロードマップ図" aria-describedby="mmd-10-desc"><p id="mmd-10-desc" hidden>{"基礎（グリフとGIDを理解）から構造（テーブルを読む）、描画の流れ（cmap・GSUB・GPOS）、発展（バリアブル・カラー）、最新（第5版の24ビット化）を経て、実践（fontToolsで検証）へ進む。"}</p><Mermaid chart={DIAGRAMS["mmd-10"]!} /></div>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"段階"}</th>

<th>{"目標"}</th>

<th>{"おすすめの題材"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"基礎"}</td>

<td>{"グリフとGIDの違いを説明できる"}</td>

<td>{"手元のフォントを "}
<code>{"ttx"}</code>
{" で開く"}</td>
</tr>

<tr className="even">
<td>{"構造"}</td>

<td>{"必須テーブルを言える"}</td>

<td>{"Microsoft の OpenType 仕様の各テーブルの章"}</td>
</tr>

<tr className="odd">
<td>{"描画の流れ"}</td>

<td>{"cmap→GSUB→GPOS→描画の順を説明できる"}</td>

<td>{"HarfBuzz の解説"}</td>
</tr>

<tr className="even">
<td>{"発展"}</td>

<td>{"バリアブルとカラーの違いを説明できる"}</td>

<td>{"仕様書の該当章"}</td>
</tr>

<tr className="odd">
<td>{"最新"}</td>

<td>{"64Kの壁と24ビット化の仕組みを説明できる"}</td>

<td>{"本稿 Step 7、実装者のPR"}</td>
</tr>

<tr className="even">
<td>{"実践"}</td>

<td>{"境界値のテストフォントを作れる"}</td>

<td>{"fontTools の FontBuilder"}</td>
</tr>
</tbody>
</table></div>
</>; }
