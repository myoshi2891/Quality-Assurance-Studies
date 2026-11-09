import React from "react";

export default function Section01() {
    return (
        <>
<h2 id="1-isoiec-270312025-を一言でいうと">{`1. ISO/IEC 27031:2025 を一言でいうと`}</h2>
<p>{`
                `}<strong>{`「事業を止めないために、ICT（情報システム・ネットワーク）側が何をどこまで準備しておくか」を整理するための手引き（ガイダンス）規格です。`}</strong>{`
            `}</p>
<ul>{`
                `}<li>{`
                    ICTの障害・サイバー攻撃・災害などで業務が止まるリスクに対して、ICT部門が`}<strong>{`事前に計画し、準備し、復旧できる状態`}</strong>{`を作ることを扱います。
                `}</li>{`
                `}<li>{`
                    この「準備ができている状態」を
                    `}<strong>{`IRBC（ICT Readiness for Business
                        Continuity：事業継続のためのICT準備）`}</strong>{`
                    と呼びます。
                `}</li>{`
                `}<li>{`
                    認証を取る規格（ISO/IEC
                    27001のような認証制度）ではなく、`}<strong>{`考え方と進め方を示すガイダンス`}</strong>{`です。
                `}</li>{`
            `}</ul>
<h3 id="11-基本情報">{`1.1 基本情報`}</h3>
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="11-基本情報">{`
                `}<table><thead><tr className="header"><th>{`項目`}</th><th>{`内容`}</th></tr></thead><tbody><tr className="odd"><td>{`規格番号`}</td><td>{`ISO/IEC 27031:2025`}</td></tr><tr className="even"><td>{`版`}</td><td>{`第2版（Edition 2）`}</td></tr><tr className="odd"><td>{`発行`}</td><td>{`2025年5月（ISO/IEC）`}</td></tr><tr className="even"><td>{`担当委員会`}</td><td>{`
                                ISO/IEC JTC 1/SC
                                27（情報セキュリティ、サイバーセキュリティ及びプライバシー保護）
                            `}</td></tr><tr className="odd"><td>{`ICS分類`}</td><td>{`35.030（ITセキュリティ）`}</td></tr><tr className="even"><td>{`ページ数`}</td><td>{`33ページ`}</td></tr><tr className="odd"><td>{`前版`}</td><td>{`ISO/IEC 27031:2011（2025年5月16日付で置き換え・廃止）`}</td></tr><tr className="even"><td>{`性格`}</td><td>{`要求事項ではなく、考え方と方法を示す手引き（認証対象ではない）`}</td></tr></tbody></table>{`
            `}</div>
        </>
    );
}
