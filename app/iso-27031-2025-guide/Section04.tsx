import React from "react";
import Diagram from "./Diagram";

/** 2011年版から2025年版への変更と外部依存の拡大を説明する。 */
export default function Section04() {
    return (
        <>
<h2 id="4-2011年版から何が変わった">{`4. 2011年版から何が変わった？`}</h2>{`
`}<p>{`第2版は、2011年の初版以来`}<strong>{`約14年ぶりの大きな改訂`}</strong>{`です。`}</p>{`
`}<h3 id="41-公式に示されている主な変更点確度a">{`
                4.1 公式に示されている主な変更点（確度A）
            `}</h3>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="41-公式に示されている主な変更点確度a">{`
                `}<table><thead><tr className="header"><th>{`変更点`}</th><th>{`内容`}</th></tr></thead><tbody><tr className="odd"><td>{`構成の変更`}</td><td>{`文書の章構成が組み替えられた`}</td></tr><tr className="even"><td>{`適用範囲の明確化`}</td><td>{`スコープの記述が整理された`}</td></tr><tr className="odd"><td>{`技術内容の追加`}</td><td>{`6.4、6.5、6.6、9.2、10.1.5 に技術的内容が追加された`}</td></tr></tbody></table>{`
            `}</div>{`
`}<h3 id="42-追加された節が意味すること">{`4.2 追加された節が意味すること`}</h3>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="42-追加された節が意味すること">{`
                `}<table><thead><tr className="header"><th>{`追加・拡充された節`}</th><th>{`テーマ`}</th><th>{`実務上のポイント`}</th></tr></thead><tbody><tr className="odd"><td>{`6.4`}</td><td>{`IRBCのためのリスクマネジメントと適用するコントロール`}</td><td>{`リスク評価とコントロール選定をICT継続につなげる`}</td></tr><tr className="even"><td>{`6.5`}</td><td>{`インシデントマネジメントとIRBCの関係`}</td><td>{`日常のインシデント対応と継続計画をつなげる`}</td></tr><tr className="odd"><td>{`6.6`}</td><td>{`BCM戦略とIRBCの整合`}</td><td>{`事業側の戦略とICT側の準備をそろえる`}</td></tr><tr className="even"><td>{`9.2`}</td><td>{`IRBC戦略の選択肢`}</td><td>{`人材・設備・技術・データ・プロセス・供給者の6観点で考える`}</td></tr><tr className="odd"><td>{`10.1.5`}</td><td>{`技術的ソリューション`}</td><td>{`復旧計画で使う技術の考慮`}</td></tr></tbody></table>{`
            `}</div>{`
`}<h3 id="43-改訂の背景確度b">{`4.3 改訂の背景（確度B）`}</h3>{`
`}<p>{`
                序文では、クラウドなどインターネットベースのICTサービスが主流になったことで、`}<strong>{`備えの性質が「自社の内部プロセス中心」から「他組織のサービス品質や取引関係への依存」へ変わった`}</strong>{`と述べられています。ISOの概要ページでも、依存先であるクラウド事業者などのサードパーティまで含めて準備を考える点が強調されています。
            `}</p>{`
`}<Diagram id="mmd-2" />
        </>
    );
}
