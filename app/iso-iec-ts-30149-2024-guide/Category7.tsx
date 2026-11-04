import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_5 } from './diagrams';

export default function Category7() {
    return <>
<h2 id="7-step-3-信頼に足る性質を管理する箇条7">{" 7. Step 3: 信頼に足る性質を「管理する」（箇条7） "}</h2>
{" "}
<p>{" 箇条7は、信頼に足る性質を"}<strong>{"継続的に管理するための要素"}</strong>{"を扱います。 "}</p>
{" "}
<div aria-label="表：7 箇条7の管理要素" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"節"}</th><th>{"要素"}</th><th>{"初学者向けの意味（節タイトルからの一般的な解釈）"}</th></tr></thead><tbody><tr className="odd"><td>{"7.1"}</td><td>{"General"}</td><td>{"全般"}</td></tr><tr className="even"><td>{"7.2"}</td><td>{"Assumptions"}</td><td>{"「こう動くはず」という前提を明示し、管理する"}</td></tr><tr className="odd"><td>{"7.3"}</td><td>{"Assurance"}</td><td>{"主張を裏づける証拠を揃える"}</td></tr><tr className="even"><td>{"7.4"}</td><td>{"Risks"}</td><td>{"信頼に足る性質を損なう要因をリスクとして扱う"}</td></tr><tr className="odd"><td>{"7.5"}</td><td>{"Composition"}</td><td>{"部品・システムを組み合わせたときの信頼に足る性質を考える"}</td></tr><tr className="even"><td>{"7.6"}</td><td>{"Trustworthiness profiles"}</td><td>{"信頼に足る性質の要求を用途別にまとめた「型」"}</td></tr></tbody></table>{" "}</div>
{" "}
<div className="mermaid-diagram" id="mmd-6"><Mermaid chart={DIAGRAM_5} /></div>
{" "}
<div className="callout callout-warn">{" "}<p>{" 注意: 上図は"}<strong>{"学習しやすいように並べた整理"}</strong>{"であり、規格が「この順に実施せよ」と定めた手順ではありません。 "}</p>{" "}</div>
{" "}
<h3 id="71-composition合成が重要な理由">{"7.1 Composition（合成）が重要な理由"}</h3>
{" "}
<p>{" IoTは「センサ + ゲートウェイ + クラウド + アプリ」のように"}<strong>{"多数の部品の組合せ"}</strong>{"で動きます。 "}</p>
{" "}
<div aria-label="表：7.1 合成で起きがちな問題" className="table-scroll" role="region" tabIndex={0}>{" "}<table><thead><tr className="header"><th>{"状況"}</th><th>{"起きがちな問題"}</th></tr></thead><tbody><tr className="odd"><td>{"部品単体は信頼できる"}</td><td>{"組み合わせると前提が食い違い、全体として信頼できない"}</td></tr><tr className="even"><td>{"部品が増える"}</td><td>{"前提とリスクの管理対象が増え、見落としが生じる"}</td></tr></tbody></table>{" "}</div>
{" "}
<p>{" そのため、定義（3.2 composability）で「部品を改造なしに組める」ことを明確にしているのです。 "}</p>
{" "}
    </>;
}
