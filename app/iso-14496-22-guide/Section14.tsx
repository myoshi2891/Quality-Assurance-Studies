import React from 'react';

export default function Section14() { return <>
<h2 id="用語集">{"用語集"}</h2>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"用語"}</th>

<th>{"意味"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"OFF"}</td>

<td>{"Open Font Format。ISO/IEC 14496-22 の通称"}</td>
</tr>

<tr className="even">
<td>{"sfnt"}</td>

<td>{"フォントファイルの基本コンテナ構造の名称"}</td>
</tr>

<tr className="odd">
<td>{"グリフ"}</td>

<td>{"画面に描く1つの字形"}</td>
</tr>

<tr className="even">
<td>{"GID"}</td>

<td>{"グリフID。グリフの通し番号"}</td>
</tr>

<tr className="odd">
<td>{"アウトライン"}</td>

<td>{"字形の輪郭を曲線で表現したデータ"}</td>
</tr>

<tr className="even">
<td>{"シェーピング"}</td>

<td>{"文字列を、合字・位置調整などを経て字形列に変換する処理"}</td>
</tr>

<tr className="odd">
<td>{"ヒンティング"}</td>

<td>{"小さいサイズで字形を崩さないための補正"}</td>
</tr>

<tr className="even">
<td>{"バリアブルフォント"}</td>

<td>{"太さ・幅などを連続的に変えられるフォント"}</td>
</tr>

<tr className="odd">
<td>{"beyond-64k"}</td>

<td>{"65,535を超えるグリフ数を扱う拡張の通称（実装者が使う呼び名）"}</td>
</tr>

<tr className="even">
<td>{"DIS / FDIS"}</td>

<td>{"国際規格案 / 最終国際規格案"}</td>
</tr>
</tbody>
</table></div>
</>; }
