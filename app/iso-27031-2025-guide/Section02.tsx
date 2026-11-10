import React from "react";
import Diagram from "./Diagram";

/** IRBC、BCM、BIA、RTO、RPO、MBCOの基本用語を説明する。 */
export default function Section02() {
    return (
        <>
<h2 id="2-まず覚える6つの用語">{`2. まず覚える6つの用語`}</h2>{`
`}<p>{`初学者が最初につまずくのは、略語です。先にここを押さえると、以降が楽になります。`}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="2-まず覚える6つの用語">{`
                `}<table><thead><tr className="header"><th>{`用語`}</th><th>{`正式名称`}</th><th>{`初学者向けの説明`}</th></tr></thead><tbody><tr className="odd"><td><strong>{`BCM`}</strong></td><td>{`Business Continuity Management（事業継続マネジメント）`}</td><td>{`
                                災害や障害が起きても、重要な事業を続ける・早く戻すための組織的な取り組み全体
                            `}</td></tr><tr className="even"><td><strong>{`BIA`}</strong></td><td>{`Business Impact Analysis（事業影響度分析）`}</td><td>{`「どの業務が止まると、どれだけ困るか」を調べる作業`}</td></tr><tr className="odd"><td><strong>{`IRBC`}</strong></td><td>{`ICT Readiness for Business Continuity`}</td><td>{`事業継続を支えるために、ICTが復旧できるよう備えている状態`}</td></tr><tr className="even"><td><strong>{`MBCO`}</strong></td><td>{`Minimum Business Continuity Objective（最低限の事業継続目標）`}</td><td>{`
                                障害中でも最低限これだけは提供し続ける、という業務・サービスの水準
                            `}</td></tr><tr className="odd"><td><strong>{`RTO`}</strong></td><td>{`Recovery Time Objective（目標復旧時間）`}</td><td>{`停止してから、どれくらいの時間以内に復旧させたいか`}</td></tr><tr className="even"><td><strong>{`RPO`}</strong></td><td>{`Recovery Point Objective（目標復旧時点）`}</td><td>{`障害時に、どれくらい前の状態までのデータ損失なら許容できるか`}</td></tr></tbody></table>{`
            `}</div>{`
`}<blockquote>{`
                `}<p>{`
                    規格の適用範囲（Scope）には、ICTの事業継続計画の一部として
                    `}<strong>{`MBCO・RPO・RTO`}</strong>{` に応える、と明記されています。
                `}</p>{`
            `}</blockquote>{`
`}<h3 id="21-rtoとrpoを図で理解する">{`2.1 RTOとRPOを図で理解する`}</h3>{`
`}<Diagram id="mmd-0" />{`
`}<h3 id="22-rtoとrpoの違いを表で整理">{`2.2 RTOとRPOの違いを表で整理`}</h3>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="22-rtoとrpoの違いを表で整理">{`
                `}<table><thead><tr className="header"><th>{`観点`}</th><th>{`RTO`}</th><th>{`RPO`}</th></tr></thead><tbody><tr className="odd"><td>{`問い`}</td><td>{`「いつまでに戻すか」`}</td><td>{`「どこまでのデータ損失なら許せるか」`}</td></tr><tr className="even"><td>{`単位`}</td><td>{`時間（分・時間・日）`}</td><td>{`時間（直近◯分/◯時間分のデータ）`}</td></tr><tr className="odd"><td>{`主に影響する対策`}</td><td>{`待機環境の用意、自動化、復旧手順`}</td><td>{`バックアップ頻度、レプリケーション方式`}</td></tr><tr className="even"><td>{`小さくする代償`}</td><td>{`コスト増・運用の複雑化`}</td><td>{`コスト増・同期の仕組みの複雑化`}</td></tr></tbody></table>{`
            `}</div>
        </>
    );
}
