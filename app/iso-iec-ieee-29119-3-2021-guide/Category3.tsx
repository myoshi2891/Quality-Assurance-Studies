import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_2 } from './diagrams';

export default function Category3() {
    return <>
<h2 id="step-2-29119-シリーズ内での位置づけ">{" Step 2: 29119 シリーズ内での位置づけ "}</h2>
{" "}
<h3 id="各パートの役割">{"各パートの役割"}</h3>
{" "}
<div aria-label="表：各パートの役割" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"パート"}</th><th>{"内容"}</th><th>{"状況（IEEE SA ページの記載に基づく）"}</th></tr></thead><tbody><tr className="odd"><td>{"Part 1"}</td><td>{"一般概念"}</td><td>{" ISO/IEC/IEEE 29119-1:2022（第2版。IEEE SA 上の表記は 29119-1-2021） "}</td></tr><tr className="even"><td>{"Part 2"}</td><td>{"テストプロセス"}</td><td>{"29119-2-2021"}</td></tr><tr className="odd"><td><strong>{"Part 3"}</strong></td><td><strong>{"テスト文書化（本ガイドの対象）"}</strong></td><td><strong>{"29119-3-2021（Active）"}</strong></td></tr><tr className="even"><td>{"Part 4"}</td><td>{"テスト技法"}</td><td>{"29119-4-2021"}</td></tr><tr className="odd"><td>{"Part 5"}</td><td>{"キーワード駆動テスト"}</td><td>{"29119-5-2024"}</td></tr><tr className="even"><td>{"Part 8"}</td><td>{"モデルベーステスト"}</td><td>{"29119-8-2026（Active）。ISO 側は別途発行準備中（under publication）"}</td></tr><tr className="odd"><td>{"Part 14"}</td><td>{"データ移行テスト"}</td><td>{"ドラフト（P29119-14）"}</td></tr></tbody></table>{" "}</div>
{" "}
<blockquote>{" "}<p>{" 関連: IEEE SA の同ワーキンググループのページには、インシデント管理の標準 "}<strong>{"23612-2026"}</strong>{" も掲載されています（別規格）。 "}</p>{" "}</blockquote>
{" "}
<Diagram diagramKey="mm3" id="mermaid-diagram-3" chart={DIAGRAM_2} />
{" "}
<h3 id="part-2-と-part-3-の対応重要">{"Part 2 と Part 3 の対応（重要）"}</h3>
{" "}
<p>{" Part 3 の文書は、"}<strong>{"Part 2 の3つのプロセス階層"}</strong>{"に沿って並んでいます。 "}</p>
{" "}
<div aria-label="表：Part 2 と Part 3 の対応（重要）" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"Part 2 のプロセス階層"}</th><th>{"Part 3 の章"}</th><th>{"主な文書"}</th></tr></thead><tbody><tr className="odd"><td>{"組織テストプロセス"}</td><td>{"Clause 6"}</td><td>{"テストポリシー、組織テストプラクティス"}</td></tr><tr className="even"><td>{"テストマネジメントプロセス"}</td><td>{"Clause 7"}</td><td>{"テスト計画、テストステータスレポート、テスト完了報告書"}</td></tr><tr className="odd"><td>{"動的テストプロセス"}</td><td>{"Clause 8"}</td><td>{"テストモデル仕様、テストケース仕様、テスト手順仕様 ほか"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}
