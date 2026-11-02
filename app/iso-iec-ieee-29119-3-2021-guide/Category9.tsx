import React from 'react';
import Diagram from './Diagram';
import { DIAGRAM_6, DIAGRAM_7 } from './diagrams';

export default function Category9() {
    return <>
<h2 id="step-8-動的テストの文書clause-8">{"Step 8: 動的テストの文書（Clause 8）"}</h2>
{" "}
<p>{" 実際のテストの"}<strong>{"設計 → 準備 → 実行 → 問題報告"}</strong>{"で作られる文書群です。11種類の項目があり、初学者は最初に全体の流れをつかむと整理しやすくなります。 "}</p>
{" "}
<Diagram diagramKey="mm7" id="mermaid-diagram-7" chart={DIAGRAM_6} />
{" "}
<h3 id="8-1-テストモデル仕様82">{"8-1. テストモデル仕様（8.2）"}</h3>
{" "}
<p>{"テストの設計の出発点となる文書です（2021年版の新しい中心概念）。"}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"8.2.2"}</td><td>{"Unique identifier"}</td><td>{"ID"}</td></tr><tr className="even"><td>{"8.2.3"}</td><td>{"Objective"}</td><td>{"目的"}</td></tr><tr className="odd"><td>{"8.2.4"}</td><td>{"Priority"}</td><td>{"優先度"}</td></tr><tr className="even"><td>{"8.2.5"}</td><td>{"Test strategy extract"}</td><td>{"テスト戦略からの抜粋（このモデルに関係する部分）"}</td></tr><tr className="odd"><td>{"8.2.6"}</td><td>{"Test model"}</td><td>{"テストモデルそのもの"}</td></tr><tr className="even"><td>{"8.2.7"}</td><td>{"Traceability"}</td><td>{"追跡可能性"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="8-2-テストケース仕様83">{"8-2. テストケース仕様（8.3）"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"8.3.2"}</td><td>{"Test coverage items"}</td><td>{"テストカバレッジアイテム（何を網羅するかの単位）"}</td></tr><tr className="even"><td>{"8.3.3"}</td><td>{"Test cases"}</td><td>{"テストケース"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="8-3-テスト手順仕様84">{"8-3. テスト手順仕様（8.4）"}</h3>
{" "}
<p>{" テストケースを"}<strong>{"どの順番で、どう準備して、どう終えるか"}</strong>{"を書きます。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"8.4.2"}</td><td>{"Unique identifier"}</td><td>{"ID"}</td></tr><tr className="even"><td>{"8.4.3"}</td><td>{"Objective"}</td><td>{"目的"}</td></tr><tr className="odd"><td>{"8.4.4"}</td><td>{"Priority"}</td><td>{"優先度"}</td></tr><tr className="even"><td>{"8.4.5"}</td><td>{"Start up"}</td><td>{"開始時の準備"}</td></tr><tr className="odd"><td>{"8.4.6"}</td><td>{"Ordered test cases"}</td><td>{"順序付けられたテストケース"}</td></tr><tr className="even"><td>{"8.4.7"}</td><td>{"Relationship to other procedures"}</td><td>{"他の手順との関係"}</td></tr><tr className="odd"><td>{"8.4.8"}</td><td>{"Stop and wrap up"}</td><td>{"終了と後片付け"}</td></tr></tbody></table>{" "}</div>
{" "}
<blockquote>{" "}<p>{" 用語補足: 「テスト仕様（test specification）」とは、"}<strong>{"テスト設計・テストケース・テスト手順をまとめた総称"}</strong>{"です。1つの文書でも、複数文書でも、文書とデータベース項目の混在でもかまいません。 "}</p>{" "}</blockquote>
{" "}
<h3 id="8-4-テストデータ要求85とテスト環境要求86">{" 8-4. テストデータ要求（8.5）とテスト環境要求（8.6） "}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"文書"}</th><th>{"項目"}</th></tr></thead><tbody><tr className="odd"><td>{"テストデータ要求（8.5）"}</td><td>{" ID、Description（内容）、Responsibility（責任者）、Period needed（必要期間）、Resetting needs（リセット要否）、Archiving or disposal（保管・廃棄） "}</td></tr><tr className="even"><td>{"テスト環境要求（8.6）"}</td><td>{" ID、Test environment item（環境の構成要素）、Description、Responsibility、Period needed "}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{" テスト環境の構成要素とは、ハードウェア、ソフトウェア、インターフェース、周辺機器、ツールなど、"}<strong>{"他の部分と切り離して扱える要素"}</strong>{"です。 "}</p>
{" "}
<h3 id="8-5-レディネスレポート8788">{"8-5. レディネスレポート（8.7、8.8）"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"文書"}</th><th>{"目的"}</th><th>{"主な項目"}</th></tr></thead><tbody><tr className="odd"><td>{"テストデータレディネスレポート"}</td><td>{"各テストデータ要求の"}<strong>{"準備状況"}</strong>{"を伝える"}</td><td>{"ID、Description of status"}</td></tr><tr className="even"><td>{"テスト環境レディネスレポート"}</td><td>{"各テスト環境要求の"}<strong>{"準備状況"}</strong>{"を伝える"}</td><td>{"ID、Description of status"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="8-6-実際の結果とテスト結果89">{"8-6. 実際の結果とテスト結果（8.9）"}</h3>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"用語"}</th><th>{"意味"}</th></tr></thead><tbody><tr className="odd"><td>{"期待結果（expected results）"}</td><td>{"仕様など根拠に基づく、観察可能な予測動作"}</td></tr><tr className="even"><td><strong>{"実際の結果（actual results）"}</strong></td><td>{" テスト実行で"}<strong>{"実際に観察された"}</strong>{"振る舞い・状態（画面出力、データ変更、送信メッセージなど） "}</td></tr><tr className="odd"><td><strong>{"テスト結果（test result）"}</strong></td><td>{" 実際の結果が期待結果と一致したか（"}<strong>{"合格/不合格"}</strong>{"）を示す判定 "}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="8-7-テスト実行ログ810">{"8-7. テスト実行ログ（8.10）"}</h3>
{" "}
<p><strong>{"1つ以上のテスト手順を実行した記録"}</strong>{"です。"}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th></tr></thead><tbody><tr className="odd"><td>{"8.10.2"}</td><td>{"Unique identifier"}</td></tr><tr className="even"><td>{"8.10.3"}</td><td>{"Date/time"}</td></tr><tr className="odd"><td>{"8.10.4"}</td><td>{"Description"}</td></tr><tr className="even"><td>{"8.10.5"}</td><td>{"Impact"}</td></tr></tbody></table>{" "}</div>
{" "}
<h3 id="8-8-テストインシデントレポート811">{" 8-8. テストインシデントレポート（8.11） "}</h3>
{" "}
<p>{" テスト中に"}<strong>{"調査が必要な出来事"}</strong>{"が起きたときの報告書です。バグ票・不具合票・課題票など、さまざまな名前で呼ばれるものの総称として扱われています。 "}</p>
{" "}
<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"項番"}</th><th>{"項目"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"8.11.2"}</td><td>{"Timing information"}</td><td>{"いつ起きたか"}</td></tr><tr className="even"><td>{"8.11.3"}</td><td>{"Originator"}</td><td>{"報告者"}</td></tr><tr className="odd"><td>{"8.11.4"}</td><td>{"Context"}</td><td>{"発生時の状況"}</td></tr><tr className="even"><td>{"8.11.5"}</td><td>{"Description of the incident"}</td><td>{"事象の説明"}</td></tr><tr className="odd"><td>{"8.11.6"}</td><td>{"Originator's assessment of severity"}</td><td>{"報告者の判断による深刻度"}</td></tr><tr className="even"><td>{"8.11.7"}</td><td>{"Originator's assessment of priority"}</td><td>{"報告者の判断による優先度"}</td></tr><tr className="odd"><td>{"8.11.8"}</td><td>{"Risk"}</td><td>{"リスク"}</td></tr><tr className="even"><td>{"8.11.9"}</td><td>{"Status of the incident"}</td><td>{"インシデントの状態"}</td></tr></tbody></table>{" "}</div>
{" "}
<Diagram diagramKey="mm8" id="mermaid-diagram-8" chart={DIAGRAM_7} />
{" "}
    </>;
}
