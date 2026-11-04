import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_11 } from './diagrams';

export default function Category15() {
    return <>
<h2 id="step-14-学習ロードマップと理解度チェック">{" Step 14: 学習ロードマップと理解度チェック "}</h2>
{" "}
<h3 id="14-1-学習ロードマップ">{"14-1. 学習ロードマップ"}</h3>
{" "}
<Diagram diagramKey="mm12" id="mermaid-diagram-12" chart={DIAGRAM_11} />
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"段階"}</th><th>{"ゴール"}</th><th>{"次にやること"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"Part 1〜4 の役割を説明できる"}</td><td>{"Part 2 のプロセス図と Part 3 の文書を対応づける"}</td></tr><tr className="even"><td>{"2"}</td><td>{"適合の2種類と shall/should/may を説明できる"}</td><td>{"自組織の文書を Annex A と照らす"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"各文書の目的を1行で言える"}</td><td>{"自プロジェクトの既存成果物とマッピングする"}</td></tr><tr className="even"><td>{"4"}</td><td>{" テストモデルからカバレッジアイテム、テストケースまでを説明できる "}</td><td>{"Part 4 の技法を1つ選んで例を作る"}</td></tr><tr className="odd"><td>{"5"}</td><td>{"トレーサビリティの取り方を設計できる"}</td><td>{"ツールのリンク機能で追跡を試す"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="14-2-理解度チェック">{"14-2. 理解度チェック"}</h3>
{" "}
<p><strong>{"Q1."}</strong>{" Part 3 は何を定めた規格ですか？"}</p>
{" "}
<details>{" "}<summary>{"答え"}</summary>{" テストプロセス（Part 2）の成果物として作るテスト文書のテンプレート（記載すべき情報）です。 "}</details>
{" "}
<p><strong>{"Q2."}</strong>{" 2021年版で「テスト条件」に代わって導入された概念は？"}</p>
{" "}
<details>{" "}<summary>{"答え"}</summary>{" テストモデル（test model）です。 "}</details>
{" "}
<p><strong>{"Q3."}</strong>{" 完全適合とテーラード適合の違いは？"}</p>
{" "}
<details>{" "}<summary>{"答え"}</summary>{" 完全適合はすべての shall を満たす。テーラード適合は使う文書のサブセットを記録し、そのサブセットの shall を満たす。要求を外す場合は理由が必要で、適用可能なリスクの考慮を含む根拠とすべてのテーラリング決定を記録し、関係するステークホルダーの合意を得ることも求められます。 "}</details>
{" "}
<p><strong>{"Q4."}</strong>{" テスト戦略は独立した文書として管理しなければなりませんか？"}</p>
{" "}
<details>{" "}<summary>{"答え"}</summary>{" いいえ。論理的にはテスト計画の一部ですが、別の文書として管理してもかまいません。 "}</details>
{" "}
<p><strong>{"Q5."}</strong>{" 「実際の結果」と「テスト結果」の違いは？"}</p>
{" "}
<details>{" "}<summary>{"答え"}</summary>{" 実際の結果は実行で観察された内容。テスト結果は、それが期待結果と一致したかどうか（合格/不合格）の判定です。 "}</details>
{" "}
<p><strong>{"Q6."}</strong>{" ステータスレポートにあって完了報告書にない項目は？"}</p>
{" "}
<details>{" "}<summary>{"答え"}</summary>{" Planned testing（今後の予定のテスト）。逆に、Residual risks・Reusable test assets・Lessons learned などは完了報告書側の項目です。 "}</details>
{" "}
<p><strong>{"Q7."}</strong>{" 文書は紙や Word でなければ適合できませんか？"}</p>
{" "}
<details>{" "}<summary>{"答え"}</summary>{" いいえ。テスト管理ツールの記録やスプレッドシートなど電子形式、他文書との統合でも構いません。 "}</details>
{" "}
<p><strong>{"Q8."}</strong>{" Annex A と Annex C〜R の位置づけの違いは？"}</p>
{" "}
<details>{" "}<summary>{"答え"}</summary>{" Annex A は規定（要求・推奨・許可の一覧）。Annex C〜R は参考の記入例です。 "}</details>
{" "}
    </>;
}
