import React from "react";
import Diagram from "./Diagram";

export default function Section09() {
    return (
        <>
<h3 id="step-3前提条件を決めrtorpoの目標を定める第8章">{`
                Step 3：前提条件を決め、RTO・RPOの目標を定める【第8章】
            `}</h3>{`
`}<p><strong>{`規格上の位置づけ`}</strong>{`（確度A）`}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-3前提条件を決めrtorpoの目標を定める第8章">{`
                `}<table><thead><tr className="header"><th>{`節`}</th><th>{`タイトル`}</th></tr></thead><tbody><tr className="odd"><td>{`8.1`}</td><td>{`
                                インシデントベース：インシデント前の準備（一般、ICT復旧能力、IRBCの確立、目的の設定、IRBCの成果・便益の決定、設備の冗長化計画、目的に関連するICTサービス範囲の決定）
                            `}</td></tr><tr className="even"><td>{`8.2`}</td><td>{`ICTの目標RTOとRPOの決定`}</td></tr></tbody></table>{`
            `}</div>{`
`}<p>{`
                `}<strong>{`やさしく言うと`}</strong>{`
                「何を、どこまで、どれくらいの速さで戻すか」を決める、全体の肝になる章です。
            `}</p>{`
`}<Diagram id="mmd-6" />{`
`}<h4 id="31-目標値の考え方架空の例">{`3.1 目標値の考え方（架空の例）`}</h4>{`
`}<blockquote>{`
                `}<p><strong>{`これは説明用の架空例であり、規格が示す値ではありません。`}</strong></p>{`
            `}</blockquote>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="31-目標値の考え方架空の例">{`
                `}<table><thead><tr className="header"><th>{`ICTサービス`}</th><th>{`事業上の重要度`}</th><th>{`RTO（例）`}</th><th>{`RPO（例）`}</th><th>{`考え方`}</th></tr></thead><tbody><tr className="odd"><td>{`決済処理`}</td><td>{`最重要`}</td><td>{`数分`}</td><td>{`ほぼゼロ`}</td><td>{`止まると売上と信用に直結`}</td></tr><tr className="even"><td>{`会員向けWebサイト`}</td><td>{`重要`}</td><td>{`1時間`}</td><td>{`15分`}</td><td>{`一定の停止は許容するが長時間は不可`}</td></tr><tr className="odd"><td>{`社内の経費精算`}</td><td>{`通常`}</td><td>{`1営業日`}</td><td>{`1日`}</td><td>{`数日は紙や別手段で代替可能`}</td></tr><tr className="even"><td>{`過去ログ分析基盤`}</td><td>{`低`}</td><td>{`3日`}</td><td>{`1週間`}</td><td>{`止まっても事業への即時影響は小さい`}</td></tr></tbody></table>{`
            `}</div>{`
`}<blockquote>{`
                `}<p>{`
                    `}<strong>{`ポイント`}</strong>{`:
                    全部を「最速・最小」にすると、コストが膨れます。重要度に応じて`}<strong>{`メリハリ`}</strong>{`をつけるのが基本です。
                `}</p>{`
            `}</blockquote>
        </>
    );
}
