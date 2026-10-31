import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_5 } from './diagrams';
export default function Category8() { return <>
<h2 id="step-7-ai固有の3プロセスを深掘りする">{"Step 7. AI固有の3プロセスを深掘りする"}</h2>

<h3 id="7-1-knowledge-acquisition知識獲得-647">{"7-1. Knowledge acquisition（知識獲得）— 6.4.7"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"定義（要約）"}</td><td>{"知識を探し・集め・精緻化し、知識ベースシステムが処理できる形に変換するプロセス"}</td></tr><tr className="even"><td>{"重要になる場面"}</td><td><strong>{"ヒューリスティックモデル"}</strong>{"（知識が明示的にコード化され、その質が正しさを決める）"}</td></tr><tr className="odd"><td>{"MLとの関係"}</td><td>{"知識獲得は ML でも重要な構成要素（どのデータを選び、どう準備するかの文脈理解に必要）"}</td></tr><tr className="even"><td>{"担当者像"}</td><td>{"ナレッジエンジニアの関与が一般的"}</td></tr></tbody></table></div>

<h3 id="7-2-ai-data-engineeringaiデータエンジニアリング-648">{"7-2. AI data engineering（AIデータエンジニアリング）— 6.4.8"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td>{"AIシステムの"}<strong>{"学習・テスト・検証・妥当性確認"}</strong>{"に必要なデータを用意する"}</td></tr><tr className="even"><td>{"主な活動"}</td><td>{"データの"}<strong>{"取得と更新"}</strong>{"、データの"}<strong>{"準備"}</strong></td></tr><tr className="odd"><td>{"重視される観点"}</td><td>{"バイアスの低減、安易な一般化の回避、悪意ある第三者によるデータ悪用の防止"}</td></tr><tr className="even"><td>{"品質面の考え方"}</td><td>{"十分で"}<strong>{"代表性のあるデータ"}</strong>{"を確保する（データ品質）"}</td></tr></tbody></table></div>

<blockquote className="callout-practice"><p>{"💡 "}<strong>{"QAエンジニア向けポイント"}</strong>{" データは「テストの入力」であると同時に「製品の仕様そのもの」です。"}<strong>{"データのバージョン管理、出所（プロビナンス）、分割（学習/検証/テスト）の独立性"}</strong>{"が、品質保証の最重要ポイントになります。"}</p></blockquote>

<h3 id="7-3-continuous-validation継続的検証-6414">{"7-3. Continuous validation（継続的検証）— 6.4.14"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"目的"}</td><td><strong>{"展開後"}</strong>{"も、AIシステムが期待どおりに振る舞い続けているかを確認する"}</td></tr><tr className="even"><td>{"検出対象"}</td><td>{"データドリフト、コンセプトドリフト、技術的な不具合"}</td></tr><tr className="odd"><td>{"適用範囲"}</td><td><strong>{"継続学習（continuous learning）をしていないシステムにも適用"}</strong>{"される"}</td></tr><tr className="even"><td>{"位置づけ"}</td><td>{"22989 のライフサイクル例では「継続学習の場合のみ」とされていた段階を、5338 では"}<strong>{"常に対象"}</strong>{"に拡張している"}</td></tr></tbody></table></div>

<div className="mermaid-diagram" id="diagram-6" role="img" aria-label="展開済みモデルを監視しドリフト検知時に原因分析と再学習へつなぐ継続的検証の流れ"><Mermaid chart={DIAGRAM_5} /></div>

<hr />

</>; }
