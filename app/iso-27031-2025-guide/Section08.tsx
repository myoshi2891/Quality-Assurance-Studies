import React from "react";
import Diagram from "./Diagram";

/** 事業側の期待とICTサービスの依存関係を把握する手順を説明する。 */
export default function Section08() {
    return (
        <>
<h3 id="step-2事業側の期待を把握する第7章">{`Step 2：事業側の期待を把握する【第7章】`}</h3>{`
`}<p><strong>{`規格上の位置づけ`}</strong>{`（確度A）`}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-2事業側の期待を把握する第7章">{`
                `}<table><thead><tr className="header"><th>{`節`}</th><th>{`タイトル`}</th><th>{`趣旨`}</th></tr></thead><tbody><tr className="odd"><td>{`7.1`}</td><td>{`リスクレビュー`}</td><td>{`脅威・事象の監視、検知、分析を含む`}</td></tr><tr className="even"><td>{`7.2`}</td><td>{`事業影響度分析（BIA）からの入力`}</td><td>{`
                                重要なICTサービスの理解、事業継続要件に対するICTの準備状況の評価
                            `}</td></tr><tr className="odd"><td>{`7.3`}</td><td>{`範囲と接点`}</td><td>{`ICTの依存関係、依存関係に関する契約面の確認`}</td></tr></tbody></table>{`
            `}</div>{`
`}<p>{`
                `}<strong>{`やさしく言うと`}</strong>{`
                「事業側が何を守りたいか」を聞き取り、それを支えるICTサービスと、その`}<strong>{`裏にある依存関係`}</strong>{`（ネットワーク、クラウド、外部委託先など）を洗い出します。
            `}</p>{`
`}<Diagram id="mmd-5" />{`
`}<p><strong>{`実務のヒント`}</strong>{`（確度C）`}</p>{`
`}<ul>{`
                `}<li>{`
                    依存関係の洗い出しでは、クラウドのリージョン、認証基盤、DNS、メール、決済など、`}<strong>{`見落としやすい共通基盤`}</strong>{`を必ず含める。
                `}</li>{`
                `}<li>{`契約（SLA）に書かれた復旧時間が、自社のRTOを満たすか確認する。`}</li>{`
            `}</ul>
        </>
    );
}
