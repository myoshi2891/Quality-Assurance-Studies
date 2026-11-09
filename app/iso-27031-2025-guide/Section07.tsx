import React from "react";
import Diagram from "./Diagram";

export default function Section07() {
    return (
        <>
<h3 id="step-1irbcをbcm事業継続マネジメントに組み込む第6章">{`
                Step 1：IRBCをBCM（事業継続マネジメント）に組み込む【第6章】
            `}</h3>{`
`}<p><strong>{`規格上の位置づけ`}</strong>{`（確度A）：第6章は次の6つの節で構成されます。`}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-1irbcをbcm事業継続マネジメントに組み込む第6章">{`
                `}<table><thead><tr className="header"><th>{`節`}</th><th>{`タイトル`}</th><th>{`趣旨`}</th></tr></thead><tbody><tr className="odd"><td>{`6.1`}</td><td>{`一般`}</td><td>{`全体の考え方`}</td></tr><tr className="even"><td>{`6.2`}</td><td>{`ガバナンスの実現`}</td><td>{`責任体制・意思決定の枠組み`}</td></tr><tr className="odd"><td>{`6.3`}</td><td>{`事業継続マネジメントの目標`}</td><td>{`BCMの目標とIRBCの結びつけ`}</td></tr><tr className="even"><td>{`6.4`}</td><td>{`リスクマネジメントとIRBCに適用するコントロール`}</td><td>{`リスクと対策の整理`}</td></tr><tr className="odd"><td>{`6.5`}</td><td>{`インシデントマネジメントとIRBCの関係`}</td><td>{`平時のインシデント対応との連携`}</td></tr><tr className="even"><td>{`6.6`}</td><td>{`BCM戦略とIRBCの整合`}</td><td>{`事業継続戦略とICT準備をそろえる`}</td></tr></tbody></table>{`
            `}</div>{`
`}<p>{`
                `}<strong>{`やさしく言うと`}</strong>{`
                IRBCを「ICT部門だけの別活動」にせず、会社全体の事業継続の取り組みの中に位置づける段階です。
            `}</p>{`
`}<Diagram id="mmd-4" />{`
`}<p><strong>{`実務のヒント`}</strong>{`（確度C）`}</p>{`
`}<ul>{`
                `}<li>{`
                    ICT部門が単独で目標値を決めない。事業部門・リスク管理・経営層と一緒に決める。
                `}</li>{`
                `}<li>{`
                    既に ISO/IEC 27001 や ISO 22301
                    を運用している場合は、`}<strong>{`二重の仕組みを作らず既存の運用に接続する`}</strong>{`（序文でも、既存の標準に沿った仕組みを考慮し二重プロセスを避けることが望ましいと述べられています）。
                `}</li>{`
            `}</ul>
        </>
    );
}
