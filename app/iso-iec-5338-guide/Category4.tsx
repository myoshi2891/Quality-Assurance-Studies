import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_2 } from './diagrams';
export default function Category4() { return <>
<h2 id="step-3-aiシステムはなぜ特別扱いが必要なのか">{"Step 3. AIシステムはなぜ「特別扱い」が必要なのか"}</h2>

<p>{"規格は、AIシステムが従来システムと"}<strong>{"ライフサイクルの観点で異なる"}</strong>{"ポイントを 8 つ挙げています（以下は要約です）。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"#"}</th><th>{"特徴（英語名）"}</th><th>{"日本語での意味"}</th><th>{"現場での具体例"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"Measurable potential decay"}</td><td>{"劣化が計測できる"}</td><td>{"本番データの傾向が変わる（データドリフト）、望ましい出力が変わる（コンセプトドリフト）。入出力を検証して初めて気づける"}</td></tr><tr className="even"><td>{"2"}</td><td>{"Potentially autonomous"}</td><td>{"自律的になりうる"}</td><td>{"判断の自動化・高速化により、公平性・安全性・プライバシー・説明責任などへの配慮が増す"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"Iterative in requirements"}</td><td>{"要件が反復的"}</td><td>{"プロトタイプを見せて要件を磨く。運用で想定外の状況が出て要件が進化する"}</td></tr><tr className="even"><td>{"4"}</td><td>{"Probabilistic"}</td><td>{"確率的"}</td><td>{"MLの判断は常に正しいとは限らない。正しさを形式的に保証するのには限界がある"}</td></tr><tr className="odd"><td>{"5"}</td><td>{"Reliant on data"}</td><td>{"データ依存"}</td><td>{"振る舞いはプログラムではなくデータから学習される。データ品質が決定的に重要"}</td></tr><tr className="even"><td>{"6"}</td><td>{"Knowledge intensive"}</td><td>{"知識集約的"}</td><td>{"ヒューリスティックモデルでは、知識獲得の良し悪しがそのまま正しさを決める"}</td></tr><tr className="odd"><td>{"7"}</td><td>{"Novel"}</td><td>{"新規性が高い"}</td><td>{"新しいスキルが必要。ユーザーも不慣れで、過信や過度な期待、逆に不信感が生じやすい"}</td></tr><tr className="even"><td>{"8"}</td><td>{"Incomprehensible"}</td><td>{"理解しにくい"}</td><td>{"振る舞いが「創発的」で、予測可能性・説明可能性・透明性が下がり、信頼が揺らぎやすい"}</td></tr></tbody></table></div>

<h3 id="3-1-特に重要な2つドリフトとデータ依存">{"3-1. 特に重要な2つ：ドリフトとデータ依存"}</h3>

<div className="mermaid-diagram" id="diagram-3" role="img" aria-label="AIモデルのリリース後にデータドリフトで性能が低下し継続的検証で検知する流れ"><Mermaid chart={DIAGRAM_2} /></div>

<blockquote className="callout-practice"><p>{"💡 "}<strong>{"初学者向けポイント"}</strong>{" 従来のソフトウェアは「コードを変えない限り挙動は変わらない」のが基本でした。AI は"}<strong>{"コードが同じでも、世界が変われば性能が劣化する"}</strong>{"点が最大の違いです。"}</p></blockquote>

<hr />

</>; }
