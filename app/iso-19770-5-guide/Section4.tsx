import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export default function Section4() { return <>
<h2 id="step-4isoiec-19770ファミリー全体像">
{"\n                        Step 4：ISO/IEC 19770ファミリー全体像\n                    "}
</h2>
<p>
{"\n                        19770-5は「地図」なので、地図に載っている"}
<strong>
{"他の規格"}
</strong>
{"も知っておきましょう。\n                    "}
</p>
<h3 id="4-1-各パートの役割">
{"4-1. 各パートの役割"}
</h3>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"パート"}
</th>

<th>
{"名称（略称）"}
</th>

<th>
{"種類"}
</th>

<th>
{"役割"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
<strong>
{"19770-1"}
</strong>
{":2017"}
</td>

<td>
{"ITアセットマネジメントシステム—要求事項"}
</td>

<td>
{"マネジメントシステム規格"}
</td>

<td>
{"\n                                        組織がITAMの仕組み（ITAMS）を確立・運用・改善するための要求事項\n                                    "}
</td>

</tr>

<tr className="even">

<td>
<strong>
{"19770-2"}
</strong>
{":2015"}
</td>

<td>
{"ソフトウェア識別タグ（SWID）"}
</td>

<td>
{"データ標準"}
</td>

<td>
{"\n                                        ソフトウェアを識別・説明するための"}
<strong>
{"XMLデータ形式"}
</strong>

</td>

</tr>

<tr className="odd">

<td>
<strong>
{"19770-3"}
</strong>
{":2016"}
</td>

<td>
{"権利スキーマ（ENT）"}
</td>

<td>
{"データ標準"}
</td>

<td>
{"\n                                        ソフトウェアの"}
<strong>
{"利用権（ライセンス条件）"}
</strong>
{"を表すデータ形式\n                                    "}
</td>

</tr>

<tr className="even">

<td>
<strong>
{"19770-4"}
</strong>
{":2017"}
</td>

<td>
{"資源利用の測定（RUM）"}
</td>

<td>
{"データ標準"}
</td>

<td>
<strong>
{"実際の利用量"}
</strong>
{"を表すデータ形式"}
</td>

</tr>

<tr className="odd">

<td>
<strong>
{"19770-5"}
</strong>
{":2015"}
</td>

<td>
{"概要と用語"}
</td>

<td>
{"概要・用語集"}
</td>

<td>
<strong>
{"本ガイドの対象"}
</strong>
{"。全体像と共通用語"}
</td>

</tr>

<tr className="even">

<td>
<strong>
{"19770-6"}
</strong>
{":2024"}
</td>

<td>
{"ハードウェア識別タグ"}
</td>

<td>
{"データ標準"}
</td>

<td>
{"ハードウェアを識別・説明するためのデータ形式"}
</td>

</tr>

<tr className="odd">

<td>
<strong>
{"19770-8"}
</strong>
{":2020"}
</td>

<td>
{"業界プラクティスのマッピング指針"}
</td>

<td>
{"ガイドライン"}
</td>

<td>
{"他の業界慣行と19770シリーズを対応づける文書の作り方"}
</td>

</tr>

<tr className="even">

<td>
<strong>
{"19770-10"}
</strong>
{":2025"}
</td>

<td>
{"ITAM実装ガイダンス（Guidance for implementing ITAM）"}
</td>

<td>
{"技術仕様書（TS・第1版 / Edition 1）"}
</td>

<td>
{"ITAMを実装するための実践的な指針（Technical Specification）"}
</td>

</tr>

<tr className="odd">

<td>
<strong>
{"19770-11"}
</strong>
{":2021"}
</td>

<td>
{"ITAMシステムの審査・認証を行う機関への要求事項"}
</td>

<td>
{"国際規格（第1版 / Edition 1）"}
</td>

<td>
{"19770-1に基づくITAMシステムの審査・認証を行う機関への要求事項と指針"}
</td>

</tr>

<tr className="even">
<td><strong>{"19770-13"}</strong>{":2026"}</td>
<td>{"ITAMシステムへの持続可能性の組込みに関する指針"}</td>
<td>{"発行済み・技術仕様書（TS・第1版 / Edition 1）"}</td>
<td>{"IT資産マネジメントシステム（ITAMS）に持続可能性の観点を組み込むためのガイダンス"}</td>
</tr>

</tbody>

</table>

</div>
<div className="callout callout-practice">

<div className="callout-icon">
{"💡"}
</div>

<div className="callout-body">

<p>

<strong>
{"19770-1の位置づけ"}
</strong>
{"：2017年版は\n                                "}
<strong>
{"ISO 55001:2014（アセットマネジメント）の分野別拡張"}
</strong>
{"として作られており、管理システム規格に共通する構造に沿っています。なお2012年版までは「プロセス＋段階（ティア）評価」型でしたが、2017年版で現在の管理システム型に改められました。また、2024年に追補（Amd\n                                1:2024、気候変動対応の変更）が出ています。\n                            "}
</p>

</div>

</div>
<h3 id="4-2-ファミリーの関係図">
{"4-2. ファミリーの関係図"}
</h3>
<div className="mermaid-diagram" id="mmd-4" role="img" aria-label="19770ファミリー各パートの関係図" aria-describedby="mmd-4-desc"><Mermaid chart={DIAGRAMS["mmd-4"]!} /></div>
<p id="mmd-4-desc">
{"19770-5（概要と用語・全体の共通言語）から、19770-1（ITAMシステム要求事項）、19770-2（SWID）、19770-3（ENT）、19770-4（RUM）、19770-8（マッピング指針）の各パートへ矢印が伸びています。さらに、19770-1から19770-2へは「プロセスがデータを活用」する点線、19770-2と19770-3の間は「識別情報を整合」、19770-3と19770-4の間は「権利情報を整合」する双方向の矢印で結ばれています。"}
</p>
<h3 id="4-3-今後追加が計画されているパート">
{"\n                        4-3. 今後追加が計画されているパート\n                    "}
</h3>
<p>
{"\n                        ITAM Standardsの「Coming\n                        Soon」ページには、次の計画が掲載されています（"}
<strong>
{"計画段階のため変更・中止の可能性あり"}
</strong>
{"）。\n                    "}
</p>
<div className="table-scroll">

<table>

<thead>

<tr className="header">

<th>
{"計画中のパート"}
</th>

<th>
{"内容"}
</th>

</tr>

</thead>

<tbody>

<tr className="odd">

<td>
{"19770-2"}
</td>

<td>
{"SWID 第3版の改訂"}
</td>

</tr>

<tr className="even">

<td>
{"19770-5"}
</td>

<td>
{"概要と用語 第3版の改訂（Step 7参照）"}
</td>

</tr>

<tr className="odd">

<td>
{"19770-7"}
</td>

<td>
{"\n                                        ITAMデータ構造要素のオーケストレーション（技術報告書の可能性）\n                                    "}
</td>

</tr>

<tr className="even">

<td>
{"19770-8の次版"}
</td>

<td>
{"\n                                        業界プラクティスと19770ファミリーを相互にマッピングするための指針\n                                    "}
</td>

</tr>

<tr className="odd">

<td>
{"19770-11（第2版）"}
</td>

<td>
{"ITAMシステムの審査・認証を行う機関への要求事項"}
</td>

</tr>

</tbody>

</table>

</div>
</>; }
