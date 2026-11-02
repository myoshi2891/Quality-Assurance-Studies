import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_5 } from './diagrams';

export default function Category8() {
    return <>
<h2 id="step-7-テストマネジメントの文書clause-7">{" Step 7: テストマネジメントの文書（Clause 7） "}</h2>
{" "}
<p>{"プロジェクトの"}<strong>{"計画 → 進捗報告 → 完了報告"}</strong>{"を担います。"}</p>
{" "}
<Diagram diagramKey="mm6" id="mermaid-diagram-6" chart={DIAGRAM_5} />
{" "}
<h3 id="7-1-テスト計画test-plan-72">{"7-1. テスト計画（Test plan, 7.2）"}</h3>
{" "}
<p>{" **「何を、どこまで、どの方針で、誰が、いつまでにテストするか」**をまとめる中心文書です。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"何を書くか（要点）"}</th></tr></thead><tbody><tr className="odd"><td>{"7.2.2"}</td><td>{"Context of testing"}</td><td>{"テストの背景・前提"}</td></tr><tr className="even"><td>{"7.2.3"}</td><td>{"Assumptions and constraints"}</td><td>{"前提条件と制約"}</td></tr><tr className="odd"><td>{"7.2.4"}</td><td>{"Stakeholders"}</td><td>{"ステークホルダー"}</td></tr><tr className="even"><td>{"7.2.5"}</td><td>{"Testing communication"}</td><td>{"関係者との連絡方法"}</td></tr><tr className="odd"><td>{"7.2.6"}</td><td>{"Risk register"}</td><td>{"リスク登録簿"}</td></tr><tr className="even"><td>{"7.2.7"}</td><td>{"Test strategy"}</td><td>{"テスト戦略（下記参照）"}</td></tr><tr className="odd"><td>{"7.2.8"}</td><td>{"Testing activities and estimates"}</td><td>{"作業項目と見積り"}</td></tr><tr className="even"><td>{"7.2.9"}</td><td>{"Staffing"}</td><td>{"要員計画"}</td></tr><tr className="odd"><td>{"7.2.10"}</td><td>{"Schedule"}</td><td>{"スケジュール"}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{" "}<strong>{"テスト戦略はテスト計画の一部"}</strong>{"です（別の独立文書ではありません）。用語定義の注記によると、戦略には通常、次のような内容が含まれます。 "}</p>
{" "}
<ul>{" "}<li>{"実施するテストレベルとテストタイプ"}</li>{" "}<li>{"再テストと回帰テストの方針"}</li>{" "}<li>{"使うテスト設計技法と、対応する完了基準"}</li>{" "}<li>{"テストデータ、テスト環境、ツールの要求"}</li>{" "}<li>{"成果物に対する期待"}</li>{" "}</ul>
{" "}
<p>{"また、次のような注記があります（要旨）。"}</p>
{" "}
<ul>{" "}<li>{" プロジェクトには"}<strong>{"複数のテスト計画"}</strong>{"があってよい（全体を包括するマスターテスト計画と、システムテスト計画・性能テスト計画などの個別計画）。 "}</li>{" "}<li>{" テスト計画は保守テストなど、"}<strong>{"プロジェクト以外の活動"}</strong>{"にも書ける。 "}</li>{" "}</ul>
{" "}
<h3 id="7-2-テストステータスレポートtest-status-report-73">{" 7-2. テストステータスレポート（Test status report, 7.3） "}</h3>
{" "}
<p>{"**指定した報告期間の「いまの状況」**を伝える文書です。"}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"何を書くか"}</th></tr></thead><tbody><tr className="odd"><td>{"7.3.2"}</td><td>{"Test status"}</td><td>{"現在のステータス"}</td></tr><tr className="even"><td>{"7.3.3"}</td><td>{"Reporting period"}</td><td>{"報告期間"}</td></tr><tr className="odd"><td>{"7.3.4"}</td><td>{"Progress against test plan"}</td><td>{"計画に対する進捗"}</td></tr><tr className="even"><td>{"7.3.5"}</td><td>{"Factors blocking progress"}</td><td>{"進捗を妨げている要因"}</td></tr><tr className="odd"><td>{"7.3.6"}</td><td>{"Test measures"}</td><td>{"テストの測定値"}</td></tr><tr className="even"><td>{"7.3.7"}</td><td>{"New and changed risks"}</td><td>{"新規・変更されたリスク"}</td></tr><tr className="odd"><td>{"7.3.8"}</td><td>{"Planned testing"}</td><td>{"次に予定しているテスト"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="7-3-テスト完了報告書test-completion-report-74">{" 7-3. テスト完了報告書（Test completion report, 7.4） "}</h3>
{" "}
<p><strong>{"テスト活動の総括"}</strong>{"です（別名: テストサマリーレポート）。"}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"何を書くか"}</th></tr></thead><tbody><tr className="odd"><td>{"7.4.2"}</td><td>{"Summary of testing performed"}</td><td>{"実施したテストの要約"}</td></tr><tr className="even"><td>{"7.4.3"}</td><td>{"Deviations from planned testing"}</td><td>{"計画からの逸脱"}</td></tr><tr className="odd"><td>{"7.4.4"}</td><td>{"Test completion evaluation"}</td><td>{"完了基準に照らした評価"}</td></tr><tr className="even"><td>{"7.4.5"}</td><td>{"Factors that blocked progress"}</td><td>{"進捗を妨げた要因"}</td></tr><tr className="odd"><td>{"7.4.6"}</td><td>{"Test measures"}</td><td>{"テストの測定値"}</td></tr><tr className="even"><td>{"7.4.7"}</td><td>{"Residual risks"}</td><td>{"残留リスク"}</td></tr><tr className="odd"><td>{"7.4.8"}</td><td>{"Test deliverables"}</td><td>{"テスト成果物"}</td></tr><tr className="even"><td>{"7.4.9"}</td><td>{"Reusable test assets"}</td><td>{"再利用できるテスト資産"}</td></tr><tr className="odd"><td>{"7.4.10"}</td><td>{"Lessons learned"}</td><td>{"教訓"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="ステータスレポートと完了報告書の比較">{" ステータスレポートと完了報告書の比較 "}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"観点"}</th><th>{"ステータスレポート"}</th><th>{"完了報告書"}</th></tr></thead><tbody><tr className="odd"><td>{"タイミング"}</td><td>{"期間ごとに繰り返し"}</td><td>{"テスト終了時"}</td></tr><tr className="even"><td>{"視点"}</td><td>{"現在と次の一歩"}</td><td>{"全体の総括と振り返り"}</td></tr><tr className="odd"><td>{"固有項目"}</td><td>{"Planned testing（今後の予定）"}</td><td>{"Residual risks、Reusable test assets、Lessons learned"}</td></tr><tr className="even"><td>{"共通項目"}</td><td>{"Test measures、進捗を妨げた要因"}</td><td>{"Test measures、進捗を妨げた要因"}</td></tr></tbody></table>{" "}</div>
{" "}
    </>;
}
