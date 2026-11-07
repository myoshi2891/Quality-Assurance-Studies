import React from 'react';
import Diagram from './Diagram';

export default function Section08() {
    return <>
<h2 id="step-8-annex-b3つのティア段階的導入">{" "}<span className="step-num">{"STEP 8"}</span>{"Annex B：3つのティア（段階的導入） "}</h2>{" "}<p>{" ティアは「"}<strong>{"全部を一度にやらず、段階的に成熟させる"}</strong>{"」ための目安です。ITAMSそのもの（箇条4〜10）はティアの土台であり、ティアには割り当てられません。 "}</p>{" "}<h3 id="8-1-3ティアの積み上げ">{"8-1. 3ティアの積み上げ"}</h3>{" "}<Diagram id="mermaid-diagram-6" />{" "}<div className="table-scroll">{" "}<table><thead><tr className="header"><th>{"ティア"}</th><th>{"名称"}</th><th>{"ねらい"}</th><th>{"主な担当"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td><strong>{"Trustworthy Data"}</strong></td><td>{" 「持っているものを知る」。インフラ・契約・ライセンスデータの収集、突合、分析 "}</td><td><strong>{"ITAMチームの責任"}</strong></td></tr><tr className="even"><td>{"2"}</td><td><strong>{"Life Cycle Integration"}</strong></td><td>{"調達〜廃棄の各段階にITAMを組み込む"}</td><td>{"既存プロセスとの"}<strong>{"共同責任"}</strong></td></tr><tr className="odd"><td>{"3"}</td><td><strong>{"Optimization"}</strong></td><td>{"契約・財務・SLAなど隣接する機能管理と統合し最適化"}</td><td>{"既存プロセスとの"}<strong>{"共同責任"}</strong></td></tr></tbody></table>{" "}</div>{" "}<h3 id="8-2-trustworthy-dataが最重要な理由">{"8-2. 「Trustworthy Data」が最重要な理由"}</h3>{" "}<p>{" ITAMのトップカンファレンスでの講演（IAITAM ACE 2022、Jeremy Boerger氏）では、Trustworthy Dataを「実際に管理できる状態にするための土台」と位置づけ、CMDBが信頼できるデータを持っているかを検証する手法が紹介されています。Flexera社のブログも、"}<strong>{"「把握していないものは最適化できない」（ブラックホール状態での最適化は危険）"}</strong>{" と述べています。 "}</p>{" "}<Diagram id="mermaid-diagram-7" />{" "}
    </>;
}
