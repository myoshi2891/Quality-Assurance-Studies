import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_4 } from './diagrams';

export default function Category7() {
    return <>
<h2 id="step-6-組織レベルの文書clause-6">{"Step 6: 組織レベルの文書（Clause 6）"}</h2>
{" "}
<p>{"「プロジェクトを超えて、組織全体に共通する」文書です。"}</p>
{" "}
<Diagram diagramKey="mm5" id="mermaid-diagram-5" chart={DIAGRAM_4} />
{" "}
<h3 id="6-1-テストポリシーtest-policy-62">{" 6-1. テストポリシー（Test policy, 6.2） "}</h3>
{" "}
<p>{" "}<strong>{"経営層向けの「テストの憲法」"}</strong>{"です。「何を達成したいか」を書き、「どうやるか」は書きません。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"何を書くか"}</th></tr></thead><tbody><tr className="odd"><td>{"6.2.2"}</td><td>{"Objectives of testing"}</td><td>{"テストの目的"}</td></tr><tr className="even"><td>{"6.2.3"}</td><td>{"Test process"}</td><td>{"採用するテストプロセス"}</td></tr><tr className="odd"><td>{"6.2.4"}</td><td>{"Test organization structure"}</td><td>{"テスト組織の構造"}</td></tr><tr className="even"><td>{"6.2.5"}</td><td>{"Tester training"}</td><td>{"テスターの教育"}</td></tr><tr className="odd"><td>{"6.2.6"}</td><td>{"Tester ethics"}</td><td>{"テスターの倫理"}</td></tr><tr className="even"><td>{"6.2.7"}</td><td>{"Standards"}</td><td>{"準拠する標準"}</td></tr><tr className="odd"><td>{"6.2.8"}</td><td>{"Other relevant policies"}</td><td>{"関連する他の方針"}</td></tr><tr className="even"><td>{"6.2.9"}</td><td>{"Measuring the value of testing"}</td><td>{"テストの価値の測り方"}</td></tr><tr className="odd"><td>{"6.2.10"}</td><td>{"Test asset archiving and reuse"}</td><td>{"テスト資産の保管と再利用"}</td></tr><tr className="even"><td>{"6.2.11"}</td><td>{"Test process improvement"}</td><td>{"テストプロセス改善"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="6-2-組織テストプラクティスorganizational-test-practices-63">{" 6-2. 組織テストプラクティス（Organizational test practices, 6.3） "}</h3>
{" "}
<p><strong>{"ポリシーに沿った「具体的な進め方」"}</strong>{"を書きます。"}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"6.3.2"}</td><td>{"Organization-level test practice statements"}</td><td>{"組織全体で共通のプラクティス"}</td></tr><tr className="even"><td>{"6.3.3"}</td><td>{"Test level/type-specific practice statements"}</td><td>{"テストレベル・テストタイプごとの固有プラクティス"}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{"用語定義には、次のような補足があります（要旨）。"}</p>
{" "}
<ul>{" "}<li>{" 複数のプラクティス文書を持ってよい（例: モバイルアプリ用と安全重要システム用）。 "}</li>{" "}<li>{" 別立てのポリシーがない場合は、プラクティス文書にポリシーの内容を含めてよい。 "}</li>{" "}</ul>
{" "}
<h3 id="ポリシーとプラクティスの違い">{"ポリシーとプラクティスの違い"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"観点"}</th><th>{"テストポリシー"}</th><th>{"組織テストプラクティス"}</th></tr></thead><tbody><tr className="odd"><td>{"主な読者"}</td><td>{"経営層"}</td><td>{"テストの実施者・管理者"}</td></tr><tr className="even"><td>{"書く内容"}</td><td>{"目的、原則、範囲（What / Why）"}</td><td>{"推奨する手法（How）"}</td></tr><tr className="odd"><td>{"更新頻度"}</td><td>{"低い"}</td><td>{"中程度"}</td></tr><tr className="even"><td>{"例"}</td><td>{"「品質リスクに応じてテストを優先する」"}</td><td>{"「回帰テストは自動化を原則とする」"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}
