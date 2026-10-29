import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section4() { return <>
<h2 id="step-4">{"Step\n4：フォントファイルの構造を知る"}</h2>
<h3 id="4-1-全体像">{"4-1. 全体像"}</h3>
<p>{"OFFフォントは、"}
<strong>{"「ヘッダー → テーブル一覧 →\n各テーブル」"}</strong>
{"\nという構造です。1つのフォントは複数の"}
<strong>{"テーブル"}</strong>
{"（専門データの入れ物）の集まりで、各テーブルは4文字の"}
<strong>{"タグ"}</strong>
{"で呼ばれます。"}</p>
<div className="mermaid-diagram" id="mmd-4" role="img" aria-label="OFFフォントファイルのsfntヘッダー、テーブルディレクトリと各テーブル群の構成図" aria-describedby="mmd-4-desc"><p id="mmd-4-desc" hidden>{"OFFフォントファイルはsfntヘッダー（形式識別子・テーブル数）とテーブルディレクトリ（タグ・位置・長さの一覧）を持ち、そこから必須テーブル群（cmap / head / hhea / hmtx / maxp / name / OS/2 / post）、アウトラインテーブル群（TrueType形式のglyf+loca、PostScript形式のCFF / CFF2）、レイアウトテーブル群（GSUB / GPOS / GDEF）、カラーテーブル群（COLR / CPAL / SVG / CBDT / CBLC）、バリエーションテーブル群（fvar / gvar / avar / STAT など）に分かれる。"}</p><Mermaid chart={DIAGRAMS["mmd-4"]!} /></div>
<h3 id="4-2-ファイル先頭のテーブルディレクトリ">{"4-2.\nファイル先頭の「テーブルディレクトリ」"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"フィールド"}</th>

<th>{"型"}</th>

<th>{"意味"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"sfntVersion"}</td>

<td>{"uint32"}</td>

<td>{"形式の識別子（TrueType系かCFF系かの目印）"}</td>
</tr>

<tr className="even">
<td>{"numTables"}</td>

<td>{"uint16"}</td>

<td>{"収録テーブル数"}</td>
</tr>

<tr className="odd">
<td>{"searchRange / entrySelector / rangeShift"}</td>

<td>{"uint16"}</td>

<td>{"二分探索用の補助値"}</td>
</tr>

<tr className="even">
<td><strong>{"テーブルレコード"}</strong>
{"（テーブル数ぶん繰り返し）"}</td>

<td></td>

<td></td>
</tr>

<tr className="odd">
<td>{"tableTag"}</td>

<td>{"4文字"}</td>

<td>{"テーブル名（例："}
<code>{"glyf"}</code>
{"）"}</td>
</tr>

<tr className="even">
<td>{"checksum"}</td>

<td>{"uint32"}</td>

<td>{"チェックサム"}</td>
</tr>

<tr className="odd">
<td>{"offset"}</td>

<td>{"uint32"}</td>

<td>{"ファイル先頭からの位置"}</td>
</tr>

<tr className="even">
<td>{"length"}</td>

<td>{"uint32"}</td>

<td>{"テーブル長"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-note">
<p>{"📝\n規格上、"}
<strong>{"各テーブルは4バイト境界に揃え、ゼロで埋める"}</strong>
{"（long-aligned\nand padded with zeroes）と定められています。"}</p>
</div>
<h3 id="4-3-主要テーブルの早見表">{"4-3. 主要テーブルの早見表"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"タグ"}</th>

<th>{"日本語名"}</th>

<th>{"役割"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td><code>{"cmap"}</code></td>

<td>{"文字→字形対応表"}</td>

<td>{"「文字コード」から「字形番号（グリフID）」を引く"}</td>
</tr>

<tr className="even">
<td><code>{"head"}</code></td>

<td>{"フォントヘッダー"}</td>

<td>{"全体設定（座標の単位など）"}</td>
</tr>

<tr className="odd">
<td><code>{"hhea"}</code>
{" / "}
<code>{"hmtx"}</code></td>

<td>{"水平メトリクス"}</td>

<td>{"横組みの文字送り幅"}</td>
</tr>

<tr className="even">
<td><code>{"maxp"}</code></td>

<td>{"最大プロファイル"}</td>

<td><strong>{"グリフ総数"}</strong>
{"などの上限値"}</td>
</tr>

<tr className="odd">
<td><code>{"name"}</code></td>

<td>{"名前表"}</td>

<td>{"フォント名・著作権など多言語文字列"}</td>
</tr>

<tr className="even">
<td><code>{"OS/2"}</code></td>

<td>{"OS/2メトリクス"}</td>

<td>{"太さ・幅・各種指標"}</td>
</tr>

<tr className="odd">
<td><code>{"post"}</code></td>

<td>{"PostScript情報"}</td>

<td>{"グリフ名など"}</td>
</tr>

<tr className="even">
<td><code>{"glyf"}</code>
{" / "}
<code>{"loca"}</code></td>

<td>{"TrueTypeアウトライン"}</td>

<td>{"字形の輪郭データと位置索引"}</td>
</tr>

<tr className="odd">
<td><code>{"CFF␠"}</code>
{" / "}
<code>{"CFF2"}</code></td>

<td>{"CFFアウトライン"}</td>

<td>{"PostScript系の輪郭データ"}</td>
</tr>

<tr className="even">
<td><code>{"GSUB"}</code></td>

<td>{"グリフ置換"}</td>

<td>{"合字・異体字などの置換"}</td>
</tr>

<tr className="odd">
<td><code>{"GPOS"}</code></td>

<td>{"グリフ位置調整"}</td>

<td>{"カーニングなどの位置調整"}</td>
</tr>
</tbody>
</table></div>
<div className="callout callout-note">
<p>{"表記："}
<code>{"␠"}</code>
{"\nは半角スペース（U+0020）を表します。"}
<code>{"CFF␠"}</code>
{"\nの実際のタグは「CFF」の後ろに半角スペース1つが付いた4バイトです。"}</p>

<p><strong>{"用語"}</strong>
{"："}
<strong>{"グリフ（glyph）"}</strong>
{" =\n画面に描く1つの字形。"}
<strong>{"グリフID（GID）"}</strong>
{" =\nそのグリフの通し番号。後述の第5版は、この "}
<strong>{"GIDの桁数"}</strong>
{"\nが主役です。"}</p>
</div>
</>; }
