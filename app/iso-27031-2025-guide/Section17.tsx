import React from "react";

/** IRBC導入時によくある誤解と回答を示す。 */
export default function Section17() {
    return (
        <>
<h2 id="9-よくある誤解faq">{`9. よくある誤解（FAQ）`}</h2>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="9-よくある誤解faq">{`
                `}<table><thead><tr className="header"><th>{`誤解`}</th><th>{`正しい理解`}</th></tr></thead><tbody><tr className="odd"><td>{`27031を満たすと認証が取れる`}</td><td>{`
                                ガイダンス規格であり、認証制度の対象ではない（認証対象となるのはISO/IEC
                                27001やISO 22301など）
                            `}</td></tr><tr className="even"><td>{`27031は災害復旧（DR）の技術規格`}</td><td>{`
                                DRも含むが、より広く「事業継続を支えるICT準備」の枠組み。ICTの災害復旧サービスはかつて
                                ISO/IEC 24762:2008 が扱っていたが、同規格は廃止済み
                            `}</td></tr><tr className="odd"><td>{`ICT部門だけで取り組めばよい`}</td><td>{`
                                経営層・事業部門・リスク管理との連携が前提。第6章・第13章がその部分
                            `}</td></tr><tr className="even"><td>{`バックアップを取れば十分`}</td><td>{`
                                バックアップは一部。復旧手順、人、設備、供給者、試験まで含めて準備する
                            `}</td></tr><tr className="odd"><td>{`クラウドに載せれば安全`}</td><td>{`外部依存が増えるため、供給者の障害も含めて準備する必要がある`}</td></tr><tr className="even"><td>{`一度作れば終わり`}</td><td>{`試験・演習・監査と見直しを繰り返す`}</td></tr></tbody></table>{`
            `}</div>
        </>
    );
}
