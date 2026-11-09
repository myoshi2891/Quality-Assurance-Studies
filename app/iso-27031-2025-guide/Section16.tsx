import React from "react";
import Diagram from "./Diagram";

export default function Section16() {
    return (
        <>
<h2 id="8-初学者向け全体を1本のストーリーで理解する架空の例">{`
                8. 初学者向け：全体を1本のストーリーで理解する（架空の例）
            `}</h2>{`
`}<blockquote>{`
                `}<p>{`以下は理解のための`}<strong>{`架空の事例`}</strong>{`です。`}</p>{`
            `}</blockquote>{`
`}<p>{`
                `}<strong>{`状況`}</strong>{`:
                ネット通販会社が、決済システムとWebサイトのICT継続を整備したい。
            `}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="8-初学者向け全体を1本のストーリーで理解する架空の例">{`
                `}<table><thead><tr className="header"><th>{`Step`}</th><th>{`やること`}</th><th>{`具体例`}</th></tr></thead><tbody><tr className="odd"><td>{`1`}</td><td>{`BCMに組み込む`}</td><td>{`事業継続委員会の下にICT継続の担当を置く`}</td></tr><tr className="even"><td>{`2`}</td><td>{`事業側の期待を確認`}</td><td>{`決済が止まると1時間で大きな機会損失、と事業部門から聞き取る`}</td></tr><tr className="odd"><td>{`3`}</td><td>{`RTO・RPOを決める`}</td><td>{`決済：RTO 数分／RPO ほぼゼロ、サイト：RTO 1時間／RPO 15分`}</td></tr><tr className="even"><td>{`4`}</td><td>{`戦略を選ぶ`}</td><td>{`決済は複数拠点で稼働、サイトはスケールダウン版を待機`}</td></tr><tr className="odd"><td>{`5`}</td><td>{`計画を作る`}</td><td>{`発動基準、担当、手順書、暫定手段（電話受付）を定める`}</td></tr><tr className="even"><td>{`6`}</td><td>{`演習する`}</td><td>{`半期に1回、拠点停止を想定して復旧演習。結果をRTO・RPOと比較`}</td></tr><tr className="odd"><td>{`7`}</td><td>{`経営層が評価`}</td><td>{`結果を報告し、最終MBCOと追加投資を決定`}</td></tr></tbody></table>{`
            `}</div>{`
`}<Diagram id="mmd-12" />
        </>
    );
}
