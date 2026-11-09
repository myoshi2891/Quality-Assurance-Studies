import React from "react";
import Diagram from "./Diagram";

/** 規格外の実務補足としてRTO・RPOに応じたクラウドDR方式を比較する。 */
export default function Section11() {
    return (
        <>
<h3 id="step-45実務補足rtorpoからクラウドdr方式を選ぶ規格外の補足">{`
                Step 4.5（実務補足）：RTO・RPOからクラウドDR方式を選ぶ【規格外の補足】
            `}</h3>{`
`}<blockquote>{`
                `}<p>{`
                    `}<strong>{`注意`}</strong>{`: この節は ISO/IEC 27031
                    の要求事項ではありません。27031が示す「RTO・RPOを決める →
                    戦略を選ぶ」を、クラウド実務に当てはめた際の`}<strong>{`参考例`}</strong>{`です（確度C）。
                `}</p>{`
            `}</blockquote>{`
`}<p>{`
                AWSの災害復旧ホワイトペーパーおよびAWS Well-Architected
                Frameworkでは、DR戦略を4つに整理しています。Google
                Cloudでは、cold・warm・hotの3つのパターンで整理されています。
            `}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-45実務補足rtorpoからクラウドdr方式を選ぶ規格外の補足">{`
                `}<table><thead><tr className="header"><th>{`考え方`}</th><th>{`AWS`}</th><th>{`Google Cloud`}</th><th>{`復旧速度`}</th><th>{`コスト`}</th></tr></thead><tbody><tr className="odd"><td>{`バックアップから復元`}</td><td>{`Backup and Restore`}</td><td>{`Cold`}</td><td>{`遅い（時間単位）`}</td><td>{`低`}</td></tr><tr className="even"><td>{`最小限の中核だけ常時稼働`}</td><td>{`Pilot Light`}</td><td>{`Cold〜Warm`}</td><td>{`数十分程度`}</td><td>{`低〜中`}</td></tr><tr className="odd"><td>{`縮小版を常時稼働`}</td><td>{`Warm Standby`}</td><td>{`Warm`}</td><td>{`分単位`}</td><td>{`中〜高`}</td></tr><tr className="even"><td>{`本番相当を複数拠点で稼働`}</td><td>{`Multi-site active/active`}</td><td>{`Hot`}</td><td>{`ほぼゼロ`}</td><td>{`最高`}</td></tr></tbody></table>{`
            `}</div>{`
`}<Diagram id="mmd-8" />{`
`}<p><strong>{`根拠となる整理`}</strong></p>{`
`}<ul>{`
                `}<li>{`
                    AWSのWell-Architected Frameworkは、Backup and Restore、Pilot Light、Warm
                    Standby、Multi-Region（Multi-site）active-activeを、RPO・RTOとコストのバランスで選ぶ戦略として紹介しています。
                `}</li>{`
                `}<li>{`
                    Google
                    Cloudの災害復旧ガイドは、DR対策を「アプリケーションがどれだけ速く復旧できるか」を示すcold・warm・hotのパターンで整理しています。
                `}</li>{`
            `}</ul>
        </>
    );
}
