import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section1() { return <>
<h2 id="step-1">{"Step 1：基本情報を押さえる"}</h2>
<h3 id="1-1-規格のプロフィール">{"1-1. 規格のプロフィール"}</h3>
<div className="table-scroll"><table>
<thead>
<tr className="header">
<th>{"項目"}</th>

<th>{"内容"}</th>
</tr>
</thead>

<tbody>
<tr className="odd">
<td>{"規格番号"}</td>

<td>{"ISO/IEC 14496-22:2026"}</td>
</tr>

<tr className="even">
<td>{"正式名称"}</td>

<td>{"Information technology — Coding of audio-visual objects — Part 22:\nOpen font format"}</td>
</tr>

<tr className="odd">
<td>{"通称"}</td>

<td>{"MPEG-4 Part 22 / Open Font Format（OFF）"}</td>
</tr>

<tr className="even">
<td>{"版"}</td>

<td>{"第5版（Edition 5）"}</td>
</tr>

<tr className="odd">
<td>{"発行年月"}</td>

<td>{"2026年7月"}</td>
</tr>

<tr className="even">
<td>{"ステージ"}</td>

<td>{"60.60（国際規格として発行済み）"}</td>
</tr>

<tr className="odd">
<td>{"担当委員会"}</td>

<td>{"ISO/IEC JTC 1/SC 29"}</td>
</tr>

<tr className="even">
<td>{"ICS分類"}</td>

<td>{"35.040.40"}</td>
</tr>

<tr className="odd">
<td>{"置き換え対象"}</td>

<td>{"ISO/IEC 14496-22:2019（および Amd 1:2020、Amd\n2:2023）は撤回済み"}</td>
</tr>
</tbody>
</table></div>
<h3 id="1-2-発行までの経緯isoの公開ライフサイクル">{"1-2.\n発行までの経緯（ISOの公開ライフサイクル）"}</h3>
<div className="mermaid-diagram" id="mmd-1" role="img" aria-label="試験・投票から発行までのISO/IEC 14496-22第5版の策定スケジュール図" aria-describedby="mmd-1-desc"><p id="mmd-1-desc" hidden>{"DIS登録（2024-12-20）からDIS投票開始（2025-02-24、12週間）、DIS投票終了（2025-05-20）、FDIS登録（2025-10-11）、FDIS投票開始（2026-03-03、8週間）、投票終了（2026-04-29）を経て、発行（2026-07-16）に至る。"}</p><Mermaid chart={DIAGRAMS["mmd-1"]!} /></div>
<div className="callout callout-note">
<p>{"用語："}
<strong>{"DIS"}</strong>
{" = Draft International\nStandard（国際規格案）、"}
<strong>{"FDIS"}</strong>
{" = Final Draft\nInternational\nStandard（最終国際規格案）。FDIS段階では「賛成／反対」の投票のみで、内容の修正はできません。"}</p>
</div>
</>; }
