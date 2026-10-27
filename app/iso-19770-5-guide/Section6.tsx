import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section6() { return <>
<h2 id="step-6なぜ今itamが重要かセキュリティとの関係">
{"\n                        Step 6：なぜ今ITAMが重要か（セキュリティとの関係）\n                    "}
</h2>
<p>
{"\n                        ITAMは「ライセンス節約の話」だけではなく、"}
<strong>
{"セキュリティの土台"}
</strong>
{"でもあります。\n                    "}
</p>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"観点"}
</th>

<th>
{"説明"}
</th>

<th>
{"根拠となる動き"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"脆弱性管理"}
</td>

<td>
{"\n                                        何が入っているか分からなければ、脆弱性の影響範囲も分からない\n                                    "}
</td>

<td>
{"\n                                        NISTは、SWIDタグがソフトウェア管理と情報セキュリティ管理の両方に役立つと説明\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"自動化"}
</td>

<td>
{"\n                                        タグ等の標準データがあれば、棚卸しや報告を自動化しやすい\n                                    "}
</td>

<td>
{"NISTはSCAP 1.3にSWIDタグの利用を取り込んでいる"}
</td>

</tr>

<tr className="odd">

<td>
{"管理システム統合"}
</td>

<td>
{"\n                                        ISO/IEC 27001などの資産管理と、ITAMの正確な台帳がつながる\n                                    "}
</td>

<td>
{"19770-1は管理システム規格の共通構造に沿っている"}
</td>

</tr>

</tbody>

</table>

</div>
<div className="mermaid-diagram" id="mmd-7" role="img" aria-label="図7"><Mermaid chart={DIAGRAMS["mmd-7"]!} /></div>
<div className="callout callout-note">

<div className="callout-icon">
{"📌"}
</div>

<div className="callout-body">

<p>

<strong>
{"QAエンジニア視点のヒント"}
</strong>
{"：テスト環境や検証ツールを含めた「使用ソフトウェアの一覧」を正確に持つことは、監査・再現性・脆弱性対応のいずれにも効きます。ITAMの用語（資産・権利・利用実績）を共通言語にすると、開発・QA・情シス・法務の会話がかみ合いやすくなります。\n                            "}
</p>

</div>

</div>
</>; }
