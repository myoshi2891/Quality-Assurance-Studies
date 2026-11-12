import React from "react";
import Diagram from "./Diagram";

/** ICT継続計画の発動・連絡・復旧手順を説明する。 */
export default function Section12() {
    return (
        <>
<h3 id="step-5ict継続計画を作る第10章">{`Step 5：ICT継続計画を作る【第10章】`}</h3>{`
`}<p><strong>{`規格上の位置づけ`}</strong>{`（確度A）`}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-5ict継続計画を作る第10章">{`
                `}<table><thead><tr className="header"><th>{`節`}</th><th>{`タイトル`}</th><th>{`内容の概要`}</th></tr></thead><tbody><tr className="odd"><td>{`10.1`}</td><td>{`計画策定の前提条件`}</td><td>{`
                                復旧組織、計画策定・報告・試験の時間枠、資源、IRBC要員の力量、技術的ソリューション
                            `}</td></tr><tr className="even"><td>{`10.2`}</td><td>{`復旧計画の発動`}</td><td>{`ICT事業継続計画（BCP）の発動、エスカレーション`}</td></tr><tr className="odd"><td>{`10.3`}</td><td>{`ICT復旧計画`}</td><td>{`RPO・RTO計画、施設、技術、データ、対応・復旧手順、人員`}</td></tr><tr className="even"><td>{`10.4`}</td><td>{`一時的な回避策計画`}</td><td>{`完全復旧までの暫定手段`}</td></tr><tr className="odd"><td>{`10.5`}</td><td>{`外部連絡先と手続き`}</td><td>{`外部との連絡窓口・手順`}</td></tr></tbody></table>{`
            `}</div>{`
`}<p>{`
                `}<strong>{`やさしく言うと`}</strong>{` Step
                3〜4で決めた目標と戦略を、`}<strong>{`「誰が・いつ・何をするか」という行動計画`}</strong>{`に落とし込みます。
            `}</p>{`
`}<h4 id="51-計画の発動イメージ説明用の例">{`5.1 計画の発動イメージ（説明用の例）`}</h4>{`
`}<Diagram id="mmd-9" />{`
`}<p><strong>{`実務のヒント`}</strong>{`（確度C）`}</p>{`
`}<ul>{`
                `}<li>{`
                    「発動の基準」と「誰が発動を決めるか」を事前に決める。曖昧だと、肝心なときに判断が遅れる。
                `}</li>{`
                `}<li>{`
                    暫定回避策（手作業、縮退運転など）は、`}<strong>{`復旧そのものと並行して動かせる`}</strong>{`ように用意する。
                `}</li>{`
                `}<li>{`
                    外部連絡先（クラウド事業者の窓口、保守ベンダー、監督当局など）は、`}<strong>{`常に最新`}</strong>{`に保つ。
                `}</li>{`
            `}</ul>
        </>
    );
}
