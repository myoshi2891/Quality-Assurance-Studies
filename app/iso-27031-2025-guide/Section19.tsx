import React from "react";

/** 本ガイドの参考ソースと正式情報へのリンクを示す。 */
export default function Section19() {
    return (
        <>
<h2 id="11-参考ソースurl">{`11. 参考ソース（URL）`}</h2>{`
`}<blockquote>{`
                `}<p>{`
                    情報時点：2026年10月26日。
                    ご指定のISO公式ページ（`}<code>{`https://www.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/08/09/80975.html`}</code>{`）は、取得時にボット判定でアクセスが遮断されました。そのため、同じ規格の公式ページの別URLと、他機関・専門家の情報で補完しています。
                `}</p>{`
            `}</blockquote>{`
`}<h3 id="111-規格の公式準公式情報">{`11.1 規格の公式・準公式情報`}</h3>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="111-規格の公式準公式情報">{`
                `}<table><thead><tr className="header"><th>{`種別`}</th><th>{`内容`}</th><th>{`URL`}</th></tr></thead><tbody><tr className="odd"><td>{`ご指定のISO公式ページ`}</td><td>{`ISO/IEC 27031:2025（今回は取得不可）`}</td><td>{`
                                `}<a href="https://www.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/08/09/80975.html" rel="noopener noreferrer" target="_blank">{`ご指定のISO公式ページ：ISO/IEC 27031:2025（今回は取得不可）`}</a>{`
                            `}</td></tr><tr className="even"><td>{`ISO公式`}</td><td>{`規格の概要・FAQ・発行情報（2025年5月、第2版）`}</td><td>{`
                                `}<a href="https://www.iso.org/standard/27031" rel="noopener noreferrer" target="_blank">{`ISO公式：規格の概要・FAQ・発行情報（2025年5月、第2版）`}</a>{`
                            `}</td></tr><tr className="odd"><td>{`ISO公式`}</td><td>{`同規格のページ（ID 80975）`}</td><td>{`
                                `}<a href="https://www.iso.org/standard/80975.html" rel="noopener noreferrer" target="_blank">{`ISO公式：同規格のページ（ID 80975）`}</a>{`
                            `}</td></tr><tr className="even"><td>{`ISO/IEC 規格プレビュー（VDE Verlag配布）`}</td><td>{`目次・序文・適用範囲・主な変更点の確認に使用（確度A）`}</td><td>{`
                                `}<a href="https://www.vde-verlag.de/iec-normen/preview-pdf/info_isoiec27031%7Bed2.0%7Den.pdf" rel="noopener noreferrer" target="_blank">{`ISO/IEC 規格プレビュー（VDE
                                    Verlag配布）：目次・序文・適用範囲・主な変更点の確認に使用（確度A）`}</a>{`
                            `}</td></tr><tr className="odd"><td>{`IEC Webstore`}</td><td>{`発行日、版、ページ数、委員会`}</td><td>{`
                                `}<a href="https://webstore.iec.ch/en/publication/107542" rel="noopener noreferrer" target="_blank">{`IEC Webstore：発行日、版、ページ数、委員会`}</a>{`
                            `}</td></tr><tr className="even"><td>{`IEC Webstore（2011年版）`}</td><td>{`旧版の位置づけ`}</td><td>{`
                                `}<a href="https://webstore.iec.ch/publication/11304" rel="noopener noreferrer" target="_blank">{`IEC Webstore（2011年版）：旧版の位置づけ`}</a>{`
                            `}</td></tr><tr className="odd"><td>{`各国規格機関（SIS）`}</td><td>{`発行・置き換え関係`}</td><td>{`
                                `}<a href="https://www.sis.se/en/produkter/information-technology-office-machines/it-security/isoiec-270312025/" rel="noopener noreferrer" target="_blank">{`各国規格機関（SIS）：発行・置き換え関係`}</a>{`
                            `}</td></tr></tbody></table>{`
            `}</div>{`
`}<h3 id="112-解説専門家による情報">{`11.2 解説・専門家による情報`}</h3>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="112-解説専門家による情報">{`
                `}<table><thead><tr className="header"><th>{`内容`}</th><th>{`URL`}</th></tr></thead><tbody><tr className="odd"><td>{`
                                ISO27k
                                Forum系（iso27001security.com）：27031の構造・位置づけと専門家コメント
                            `}</td><td>{`
                                `}<a href="https://www.iso27001security.com/html/27031" rel="noopener noreferrer" target="_blank">{`ISO27k
                                    Forum系（iso27001security.com）：27031の構造・位置づけと専門家コメント`}</a>{`
                            `}</td></tr><tr className="even"><td>{`BSI：BS ISO/IEC 27031:2025 の概要と主な変更点`}</td><td>{`
                                `}<a href="https://knowledge.bsigroup.com/products/cybersecurity-information-and-communication-technology-readiness-for-business-continuity" rel="noopener noreferrer" target="_blank">{`BSI：BS ISO/IEC 27031:2025 の概要と主な変更点`}</a>{`
                            `}</td></tr><tr className="odd"><td>{`Mitratech：2025年版の更新ポイントと2011年版との比較`}</td><td>{`
                                `}<a href="https://mitratech.com/resource-hub/blog/how-iso-27031-supports-ict-resilience-in-2025/" rel="noopener noreferrer" target="_blank">{`Mitratech：2025年版の更新ポイントと2011年版との比較`}</a>{`
                            `}</td></tr></tbody></table>{`
            `}</div>{`
`}<h3 id="113-実務補足クラウドdrの根拠">{`11.3 実務補足（クラウドDR）の根拠`}</h3>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="113-実務補足クラウドdrの根拠">{`
                `}<table><thead><tr className="header"><th>{`内容`}</th><th>{`URL`}</th></tr></thead><tbody><tr className="odd"><td>{`AWS：Disaster Recovery of Workloads on AWS（DRオプション）`}</td><td>{`
                                `}<a href="https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud" rel="noopener noreferrer" target="_blank">{`AWS：Disaster Recovery of Workloads on AWS（DRオプション）`}</a>{`
                            `}</td></tr><tr className="even"><td>{`
                                AWS Well-Architected：REL13-BP02 定義した復旧戦略で復旧目標を満たす
                            `}</td><td>{`
                                `}<a href="https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_disaster_recovery.html" rel="noopener noreferrer" target="_blank">{`AWS Well-Architected：REL13-BP02
                                    定義した復旧戦略で復旧目標を満たす`}</a>{`
                            `}</td></tr><tr className="odd"><td>{`AWS Architecture Blog：DR architecture on AWS Part I`}</td><td>{`
                                `}<a href="https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud" rel="noopener noreferrer" target="_blank">{`AWS Architecture Blog：DR architecture on AWS Part I`}</a>{`
                            `}</td></tr><tr className="even"><td>{`Google Cloud：Disaster recovery planning guide`}</td><td>{`
                                `}<a href="https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide" rel="noopener noreferrer" target="_blank">{`Google Cloud：Disaster recovery planning guide`}</a>{`
                            `}</td></tr><tr className="odd"><td>{`Google Cloud：DR scenarios for applications（cold・warm・hot）`}</td><td>{`
                                `}<a href="https://docs.cloud.google.com/architecture/dr-scenarios-for-applications" rel="noopener noreferrer" target="_blank">{`Google Cloud：DR scenarios for
                                    applications（cold・warm・hot）`}</a>{`
                            `}</td></tr><tr className="even"><td>{`
                                Google Cloud：Architecting disaster recovery for cloud
                                infrastructure outages
                            `}</td><td>{`
                                `}<a href="https://docs.cloud.google.com/architecture/disaster-recovery" rel="noopener noreferrer" target="_blank">{`Google Cloud：Architecting disaster recovery for cloud
                                    infrastructure outages`}</a>{`
                            `}</td></tr></tbody></table>{`
            `}</div>{`
`}<h3 id="114-ソースの信頼度メモ">{`11.4 ソースの信頼度メモ`}</h3>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="114-ソースの信頼度メモ">{`
                `}<table><thead><tr className="header"><th>{`区分`}</th><th>{`扱い`}</th></tr></thead><tbody><tr className="odd"><td>{`ISO/IEC/IEC Webstore/規格プレビュー`}</td><td>{`規格の構造・範囲・変更点の根拠（最優先）`}</td></tr><tr className="even"><td>{`BSI・各国規格機関`}</td><td>{`概要・変更点の補強`}</td></tr><tr className="odd"><td>{`専門家・ベンダー記事`}</td><td>{`
                                位置づけ・背景の補足。`}<strong>{`規格本文の代わりにはならない`}</strong>{`
                            `}</td></tr><tr className="even"><td>{`AWS・Google Cloud公式`}</td><td>{`実務的なDRパターンの参考。27031の要求事項ではない`}</td></tr></tbody></table>{`
            `}</div>
        </>
    );
}
