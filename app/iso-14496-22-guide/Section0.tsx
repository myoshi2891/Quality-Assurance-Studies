import React from 'react';

export default function Section0() { return <>
<h2 id="step-0">{"0. この規格を一言でいうと"}</h2>
<p><strong>{"ISO/IEC 14496-22\nは、「OpenType」とほぼ同じ内容を国際標準として定めた、アウトラインフォントのファイル形式規格"}</strong>
{"です。正式名称は\n"}
<em>{"Open Font Format"}</em>
{"（略称 "}
<strong>{"OFF"}</strong>
{"）。"}</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"質問"}</th>

<th>{"答え"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"何を決めている？"}</td>

<td>{"フォントファイルの中身（テーブル構造、字形データ、文字の並べ方のルール）"}</td>
</tr>

<tr className="even">
<td>{"誰のための規格？"}</td>

<td>{"フォントを"}
<strong>{"作る人"}</strong>
{"、フォントを"}
<strong>{"描画・組版するエンジン"}</strong>
{"を作る人"}</td>
</tr>

<tr className="odd">
<td>{"何が新しい（2026年）？"}</td>

<td>{"1つのフォントに入れられる字形数が "}
<strong>{"65,535 →\n約1,677万（24ビット）"}</strong>
{" に拡張された第5版"}</td>
</tr>

<tr className="even">
<td>{"OpenTypeとの違いは？"}</td>

<td>{"ほぼ同じ内容。OpenTypeは業界仕様（Microsoft等が管理）、OFFはISO標準"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-tip">
<p>{"💡 "}
<strong>{"ポイント"}</strong>
{"：OFFは「Web Open Font\nFormat（WOFF）」とは"}
<strong>{"別物"}</strong>
{"です。名前が似ていますが、WOFFはWeb配信用の圧縮ラッパーです（Step\n2 で図解します）。"}</p>
</div>
</>; }
