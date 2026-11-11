import React from 'react';
import Diagram from './Diagram';
/** Preserve source category: 3. 規格ファミリー内での位置づけ. */
export default function Section04() {
    return <>
<h2 id="3-規格ファミリー内での位置づけ">{"3.\n規格ファミリー内での位置づけ"}</h2>{"\n"}
<div className="callout callout-intro">
<div className="callout-head">
<span className="callout-icon">{"💡"}</span>
<span className="callout-title">{"この章でやること"}</span>
</div>
<div className="callout-body">
<p>{"この章では、本規格が他のどの規格と関係するのかを整理します。ここを理解すると、「なぜ29119の考え方で進めるのか」が分かります。"}</p>
</div>
</div>{"\n"}
<h3 id="3-1-関連する規格-">{"3-1. 関連する規格 🟢🟡"}</h3>{"\n"}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="3-1-関連する規格-">
<table>
<thead>
<tr className="header">
<th>{"規格"}</th>
<th>{"位置づけ"}</th>
<th>{"本規格との関係"}</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td>{"ISO/IEC/IEEE 29119-1"}</td>
<td>{"ソフトウェアテストの一般概念と定義"}</td>
<td>{"テスト目的、テストケース、期待結果、テストオラクルなどの基本用語の土台🟡"}</td>
</tr>
<tr className="even">
<td>{"ISO/IEC/IEEE 29119-2"}</td>
<td>{"ソフトウェアテストのプロセス"}</td>
<td>{"計画、設計、実行、報告、終了などの手順の骨格。本規格が整合させる対象🟢"}</td>
</tr>
<tr className="odd">
<td>{"ISO/IEC TS 42119-2:2025"}</td>
<td>{"AIシステムのテスト概要"}</td>
<td>{"AIのライフサイクルとリスクに基づくテストの共通基盤🟡"}</td>
</tr>
<tr className="even">
<td>{"ISO/IEC AWI TS 42119-7"}</td>
<td>{"AIのレッドチーミング"}</td>
<td>
<strong>{"この文書の主題"}</strong>
</td>
</tr>
<tr className="odd">
<td>{"ISO/IEC 29147"}</td>
<td>{"脆弱性の開示"}</td>
<td>{"見つかった弱点を外部に知らせる手順の考え方。報告の章で関連🟡"}</td>
</tr>
<tr className="even">
<td>{"ISO/IEC 20246"}</td>
<td>{"作業成果物のレビュー"}</td>
<td>{"レッドチーミングの成果物をレビューする観点で関連🟡"}</td>
</tr>
</tbody>
</table>
</div>{"\n"}
<p>{"別の動きとして、シンガポールが "}<strong>{"ISO/IEC 42119-8"}</strong>{"\nを提案しています。これは生成AIシステムのテスト方法論を標準化するもので、ベンチマーク評価とレッドチーミングを中心に扱うと、2026年4月20日のシンガポール側の発表で説明されています🔵。42119-7\nとの役割分担や重なりがどう整理されるかは、公開情報からはまだ読み取れません\n⚪。"}</p>{"\n"}
<h3 id="3-2-規格どうしの関係図">{"3-2. 規格どうしの関係図"}</h3>{"\n"}
<p>{"この図は、規格が積み重なる構造を表しています。上から下へ、「土台 →\nAI向けの共通部分 →\nレッドチーミング専用部分」の順に読んでください。右側の四角は、規格ではない実務ガイドを表します。"}</p>{"\n"}
<Diagram index={1}/>{"\n"}
<div className="legend">
<div className="legend-head">{"各ノードの意味："}</div>
<ul>{"\n"}
<li>{"青い四角（29119-1、29119-2、42119-2）：すでに存在するテストの規格。レッドチーミングに必要な「テストの型」を提供する"}</li>{"\n"}
<li>{"黄色の四角（42119-7）：AI特有の攻撃や対象を上乗せする、この規格"}</li>{"\n"}
<li>{"緑の四角（NIST、OWASP、AISI）：規格を補う実務ガイド。標準化の議論でも参照されていると、ETRIは整理している🟡"}</li>{"\n"}
</ul>
</div>{"\n"}
<p>{"ETRIの論文は、現状を「単一の完成した標準」ではなく\n"}<strong>{"「標準ドラフト + 評価ガイド +\n実務フレームワーク」が一緒に育っている段階"}</strong>{"\nとまとめています🟡。"}</p>{"\n"}
<div className="glossary">
<div className="glossary-head">{"📖 このセクションで登場した用語"}</div>
<ul>{"\n"}
<li>{"テストオラクル：テスト結果が正しいかどうかを判定するための基準や仕組み"}</li>{"\n"}
<li>{"期待結果：テストを実行したときに、こうなるはずという結果"}</li>{"\n"}
<li>{"NIST：米国国立標準技術研究所"}</li>{"\n"}
<li>{"OWASP：Webやソフトウェアのセキュリティ向上に取り組む国際的な非営利コミュニティ"}</li>{"\n"}
<li>{"AISI：AIセーフティ・インスティテュート。各国が設けるAIの安全性を扱う公的機関"}</li>{"\n"}
</ul>
</div>{"\n"}
<hr />{"\n"}
</>;
}
