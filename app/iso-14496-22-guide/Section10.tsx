import React from 'react';

export default function Section10() { return <>
<h2 id="step-10">{"Step\n10：QAエンジニア視点のテスト観点"}</h2>
<div className="callout callout-note">
<p>{"以下は、本稿の筆者（Claude）が、調査結果をもとに整理した"}
<strong>{"テスト観点の提案"}</strong>
{"です。規格や実装者の公式な推奨ではありません。"}</p>
</div>
<h3 id="10-1-なぜqaの対象になるのか">{"10-1. なぜQAの対象になるのか"}</h3>
<p>{"フォント対応は「"}
<strong>{"表示される／されない"}</strong>
{"」が環境ごとに分かれやすい領域です。特に第5版は、"}
<strong>{"古い実装が新しいフォントを正しく扱えない"}</strong>
{"可能性があり、後方互換性が主要なリスクです。"}</p>
<h3 id="10-2-テスト観点の一覧">{"10-2. テスト観点の一覧"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"観点"}</th>

<th>{"確認したいこと"}</th>

<th>{"具体例"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"境界値"}</td>

<td>{"グリフ数 65,535 / 65,536 / 65,537 の前後"}</td>

<td>{"GID 65,536 の字形が描画されるか"}</td>
</tr>

<tr className="even">
<td>{"後方互換"}</td>

<td>{"小文字のみのフォントが従来どおり動くか"}</td>

<td>{"既存の日本語フォントで表示崩れがないか"}</td>
</tr>

<tr className="odd">
<td>{"テーブル選択"}</td>

<td>{"大文字・小文字が混在するフォントでの優先順位"}</td>

<td><code>{"GLYF"}</code>
{" があるのに旧 "}
<code>{"loca"}</code>
{"\nを参照していないか"}</td>
</tr>

<tr className="even">
<td>{"合成グリフ"}</td>

<td>{"24ビット参照を含む合成グリフ"}</td>

<td>{"16ビットと24ビット参照の混在"}</td>
</tr>

<tr className="odd">
<td>{"曲線"}</td>

<td>{"3次ベジェと2次の混在、境界での不正な連続"}</td>

<td>{"混在した制御点列を不正として扱えるか"}</td>
</tr>

<tr className="even">
<td>{"メトリクス"}</td>

<td>{"文字送り幅・縦組みの取得"}</td>

<td><code>{"HMTX"}</code>
{" の長いメトリクス数が32ビットのとき"}</td>
</tr>

<tr className="odd">
<td>{"サブセット化"}</td>

<td>{"不要な字形を削ったフォントの整合性"}</td>

<td>{"サブセット後も参照先GIDが壊れないか"}</td>
</tr>

<tr className="even">
<td>{"不正入力"}</td>

<td>{"壊れたヘッダー・不整合なグリフ数"}</td>

<td>{"クラッシュせず拒否できるか（安全性）"}</td>
</tr>

<tr className="odd">
<td>{"性能"}</td>

<td>{"10万グリフ超フォントの読み込み時間・メモリ"}</td>

<td>{"起動時間の悪化がないか"}</td>
</tr>
</tbody>
</table></div>
<h3 id="10-3-リスクの優先度筆者の見立て">{"10-3.\nリスクの優先度（筆者の見立て）"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"優先度"}</th>

<th>{"リスク"}</th>

<th>{"発生しやすさ"}</th>

<th>{"影響"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"★★★ 最優先"}</td>

<td>{"旧実装での表示欠け"}</td>

<td>{"高"}</td>

<td>{"大"}</td>
</tr>

<tr className="even">
<td>{"★★★ 最優先"}</td>

<td>{"テーブル選択の誤り（"}
<code>{"GLYF"}</code>
{" と "}
<code>{"glyf"}</code>
{"\nの取り違え）"}</td>

<td>{"中〜高"}</td>

<td>{"大"}</td>
</tr>

<tr className="odd">
<td>{"★★★ 最優先"}</td>

<td>{"不正入力でのクラッシュ"}</td>

<td>{"中"}</td>

<td>{"大"}</td>
</tr>

<tr className="even">
<td>{"★★ 重点"}</td>

<td>{"境界値 GID 65,536"}</td>

<td>{"高"}</td>

<td>{"中〜大"}</td>
</tr>

<tr className="odd">
<td>{"★★ 重点"}</td>

<td>{"従来フォントの退行"}</td>

<td>{"低〜中"}</td>

<td>{"大"}</td>
</tr>

<tr className="even">
<td>{"★ 余裕があれば"}</td>

<td>{"大規模フォントの性能"}</td>

<td>{"中"}</td>

<td>{"中"}</td>
</tr>
</tbody>
</table></div>
</>; }
