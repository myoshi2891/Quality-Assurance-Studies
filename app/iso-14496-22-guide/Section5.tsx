import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section5() { return <>
<h2 id="step-5">{"Step\n5：文字が画面に出るまでの流れを知る"}</h2>
<p>{"規格は「フォント描画エンジンとテキストシェーピングエンジンを、規格準拠で作るための詳細」を定義する、と明記されています。実際の流れを追うと、テーブルの役割がつかめます。"}</p>
<div className="mermaid-diagram" id="mmd-5" role="img"><Mermaid chart={DIAGRAMS["mmd-5"]!} /></div>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"段階"}</th>

<th>{"担当"}</th>

<th>{"初学者向けの例え"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"文字→GID"}</td>

<td><code>{"cmap"}</code></td>

<td>{"辞書で「あ」の字形番号を引く"}</td>
</tr>

<tr className="even">
<td>{"置換"}</td>

<td><code>{"GSUB"}</code></td>

<td>{"「fi」を1つの合字に置き換える"}</td>
</tr>

<tr className="odd">
<td>{"位置調整"}</td>

<td><code>{"GPOS"}</code></td>

<td>{"「AV」の間隔を詰める"}</td>
</tr>

<tr className="even">
<td>{"輪郭取得"}</td>

<td><code>{"glyf"}</code>
{" / "}
<code>{"CFF"}</code></td>

<td>{"字形の設計図を取り出す"}</td>
</tr>

<tr className="odd">
<td>{"描画"}</td>

<td>{"ラスタライザ"}</td>

<td>{"設計図を画素で塗る"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-note">
<p>{"この「"}
<strong>{"シェーピング（GSUB/GPOS）→\n描画"}</strong>
{"」の2段階を担う代表的なオープンソース実装が\n"}
<strong>{"HarfBuzz"}</strong>
{"（シェーピング）です。Step 8 で触れます。"}</p>
</div>
</>; }
