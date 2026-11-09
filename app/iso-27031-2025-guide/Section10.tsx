import React from "react";
import Diagram from "./Diagram";

/** 人材・設備・技術・データ・プロセス・供給者の観点でIRBC戦略を説明する。 */
export default function Section10() {
    return (
        <>
<h3 id="step-4irbc戦略を選ぶ第9章">{`Step 4：IRBC戦略を選ぶ【第9章】`}</h3>{`
`}<p><strong>{`規格上の位置づけ`}</strong>{`（確度A）`}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-4irbc戦略を選ぶ第9章">{`
                `}<table><thead><tr className="header"><th>{`節`}</th><th>{`タイトル`}</th></tr></thead><tbody><tr className="odd"><td>{`9.1`}</td><td>{`一般`}</td></tr><tr className="even"><td>{`9.2`}</td><td>{`IRBC戦略の選択肢（9.2.2〜9.2.7 の6観点）`}</td></tr></tbody></table>{`
            `}</div>{`
`}<p><strong>{`9.2 の6観点`}</strong></p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-4irbc戦略を選ぶ第9章">{`
                `}<table><thead><tr className="header"><th>{`観点`}</th><th>{`節`}</th><th>{`考えること（筆者の補足）`}</th></tr></thead><tbody><tr className="odd"><td>{`人材・知識`}</td><td>{`9.2.2`}</td><td>{`復旧できる人がいるか、手順を知っているか、代替要員は誰か`}</td></tr><tr className="even"><td>{`設備・施設`}</td><td>{`9.2.3`}</td><td>{`代替拠点、電源、空調、物理的な場所`}</td></tr><tr className="odd"><td>{`技術`}</td><td>{`9.2.4`}</td><td>{`冗長構成、バックアップ、フェイルオーバーの仕組み`}</td></tr><tr className="even"><td>{`データ`}</td><td>{`9.2.5`}</td><td>{`バックアップ方式、世代管理、複製の頻度`}</td></tr><tr className="odd"><td>{`プロセス`}</td><td>{`9.2.6`}</td><td>{`復旧手順、運用プロセス、連絡の流れ`}</td></tr><tr className="even"><td>{`供給者`}</td><td>{`9.2.7`}</td><td>{`クラウド事業者・委託先・保守ベンダーへの依存`}</td></tr></tbody></table>{`
            `}</div>{`
`}<Diagram id="mmd-7" />{`
`}<p><strong>{`実務のヒント`}</strong>{`（確度C）`}</p>{`
`}<ul>{`
                `}<li>{`
                    技術だけを冗長化しても、`}<strong>{`手順を知る人がいなければ復旧は進みません`}</strong>{`。6つの観点をセットで確認します。
                `}</li>{`
                `}<li>{`
                    供給者（クラウド事業者など）に任せる部分と、自社で担う部分の`}<strong>{`責任分界`}</strong>{`を明確にします。
                `}</li>{`
            `}</ul>
        </>
    );
}
