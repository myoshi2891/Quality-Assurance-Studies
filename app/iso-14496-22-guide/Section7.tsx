import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section7() { return <>
<h2 id="step-7">{"Step\n7：2026年・第5版の最大のポイント「64Kの壁」の突破"}</h2>
<h3 id="7-1-なぜ問題だったのか">{"7-1. なぜ問題だったのか"}</h3>
<p>{"従来、グリフIDは\n"}
<strong>{"16ビット"}</strong>
{"で表されていたため、1つのフォントに入れられる字形数は"}
<strong>{"最大65,535個"}</strong>
{"でした。OpenType\n1.7時代の推奨事項にも「1つのフォントに含められるグリフ数は64kに制限される」と書かれていました。"}</p>
<p>{"CJK（中国語・日本語・韓国語）の漢字、異体字、絵文字、多言語統合フォントでは、この上限が実務上の制約になっていました。"}</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"桁数"}</th>

<th>{"表現できる数"}</th>

<th>{"状況"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"16ビット（従来）"}</td>

<td>{"65,536通り（GIDは最大65,535）"}</td>

<td>{"多言語統合フォントで足りない"}</td>
</tr>

<tr className="even">
<td><strong>{"24ビット（第5版）"}</strong></td>

<td><strong>{"16,777,216通り"}</strong></td>

<td>{"事実上の上限を大幅に緩和"}</td>
</tr>
</tbody>
</table></div>
<h3 id="7-2-仕組み大文字タグのテーブルを新設">{"7-2.\n仕組み：「大文字タグのテーブル」を新設"}</h3>
<p>{"第5版の拡張は、既存の小文字タグのテーブル（"}
<code>{"glyf"}</code>
{"、"}
<code>{"loca"}</code>
{"、"}
<code>{"maxp"}</code>
{"\nなど）を"}
<strong>{"直接書き換えるのではなく、24ビット対応の「大文字タグ」の新テーブルを並べる"}</strong>
{"方式です。"}</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"従来（小文字）"}</th>

<th>{"第5版の拡張（大文字）"}</th>

<th>{"主な変更点"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td><code>{"maxp"}</code></td>

<td><code>{"MAXP"}</code></td>

<td>{"グリフ数が"}
<strong>{"24ビット"}</strong></td>
</tr>

<tr className="even">
<td><code>{"hhea"}</code>
{" / "}
<code>{"hmtx"}</code></td>

<td><code>{"HHEA"}</code>
{" / "}
<code>{"HMTX"}</code></td>

<td>{"長いメトリクスの数が"}
<strong>{"32ビット"}</strong></td>
</tr>

<tr className="odd">
<td><code>{"vhea"}</code>
{" / "}
<code>{"vmtx"}</code></td>

<td><code>{"VHEA"}</code>
{" / "}
<code>{"VMTX"}</code></td>

<td>{"同上（縦組み）"}</td>
</tr>

<tr className="even">
<td><code>{"glyf"}</code>
{" / "}
<code>{"loca"}</code></td>

<td><code>{"GLYF"}</code>
{" / "}
<code>{"LOCA"}</code></td>

<td>{"合成グリフの参照が"}
<strong>{"24ビット"}</strong>
{"可能、3次曲線のフラグ"}</td>
</tr>

<tr className="odd">
<td><code>{"gvar"}</code></td>

<td><code>{"GVAR"}</code></td>

<td>{"24ビットのグリフ数・グリフ単位のデータ位置"}</td>
</tr>

<tr className="even">
<td><code>{"cmap"}</code></td>

<td>{"cmap フォーマット15"}</td>

<td>{"拡張グリフIDに対応"}</td>
</tr>
</tbody>
</table></div>
<div className="mermaid-diagram" id="mmd-7" role="img"><Mermaid chart={DIAGRAMS["mmd-7"]!} /></div>
<div className="callout callout-note">
<p>{"上の分岐は、実装者（HarfBuzzの作者でもある Behdad Esfahbod\n氏）がfontationsへ出したPRの説明に基づく"}
<strong>{"実装上の選択ルール"}</strong>
{"です。「"}
<code>{"GLYF"}</code>
{"\nがあれば、旧 "}
<code>{"loca"}</code>
{"\nへはフォールバックしない」と書かれています。規格本文そのものは本稿では確認できていません（"}
<a href="#caveats">{"確認できなかったこと"}</a>
{"を参照）。"}</p>
</div>
<h3 id="7-3-合わせて入った拡張">{"7-3. 合わせて入った拡張"}</h3>
<p>{"実装者のPR説明から読み取れる、第5版（beyond-64k）関連の拡張一覧です。"}</p>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"分類"}</th>

<th>{"内容"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"ファイル構造"}</td>

<td>{"TTCヘッダーのバージョン 1.1 / 2.1"}</td>
</tr>

<tr className="even">
<td>{"文字対応"}</td>

<td><code>{"cmap"}</code>
{" フォーマット15（フォーマット14より優先）"}</td>
</tr>

<tr className="odd">
<td>{"アウトライン"}</td>

<td>{"3次ベジェ曲線（"}
<code>{"GLYF"}</code>
{"\n内で扱える）、24ビットのコンポーネント参照"}</td>
</tr>

<tr className="even">
<td>{"メトリクス"}</td>

<td><code>{"MAXP"}</code>
{"、"}
<code>{"HHEA"}</code>
{"/"}
<code>{"HMTX"}</code>
{"、"}
<code>{"VHEA"}</code>
{"/"}
<code>{"VMTX"}</code></td>
</tr>

<tr className="odd">
<td>{"バリエーション"}</td>

<td><code>{"GVAR"}</code></td>
</tr>

<tr className="even">
<td>{"縦組み"}</td>

<td><code>{"VORG"}</code>
{" バージョン2"}</td>
</tr>

<tr className="odd">
<td>{"カラー"}</td>

<td><code>{"COLR"}</code>
{" の\n"}
<code>{"PaintGlyph2"}</code>
{"（24ビットのアウトラインGIDに対応）"}</td>
</tr>

<tr className="even">
<td>{"レイアウト"}</td>

<td>{"Coverage / ClassDef の拡張形式、GSUB/GPOS の拡張サブテーブル、GDEF\n1.4、BASE フォーマット4、JSTF 1.1"}</td>
</tr>
</tbody>
</table></div>
<h3 id="7-4-3次ベジェ曲線とは">{"7-4. 3次ベジェ曲線とは"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"項目"}</th>

<th>{"2次ベジェ"}</th>

<th>{"3次ベジェ"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"制御点の数（1区間）"}</td>

<td>{"1個"}</td>

<td>{"2個"}</td>
</tr>

<tr className="even">
<td>{"表現の自由度"}</td>

<td>{"低い（曲線を多く分割する必要）"}</td>

<td>{"高い（少ない点で滑らか）"}</td>
</tr>

<tr className="odd">
<td>{"従来の主な採用"}</td>

<td>{"TrueType（"}
<code>{"glyf"}</code>
{"）"}</td>

<td>{"CFF / PostScript"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-note">
<p>{"提案文書（WG 3 の提案資料）では、"}
<code>{"glyf"}</code>
{"\nの「フォーマット1」で2次と3次を混在でき、簡易グリフ用フラグに\n"}
<strong>{"CUBIC（ビット7）"}</strong>
{"\nを追加し、これは"}
<strong>{"オフカーブ点にのみ"}</strong>
{"使う、と説明されています。ただしこれは"}
<strong>{"審議中の提案文書"}</strong>
{"の記述であり、最終版の文面とは差がありうる点に注意してください。"}</p>
</div>
</>; }
