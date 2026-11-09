import React from "react";

export default function Section00() {
    return (
        <>
<h2 id="0-先に知っておきたいこの資料の確度">{`0. 先に知っておきたい「この資料の確度」`}</h2>
<p>{`
                規格の本文そのものは有料です。そのため、本ガイドは次の3段階で情報の確度を分けて書いています。
            `}</p>
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="0-先に知っておきたいこの資料の確度">{`
                `}<table><thead><tr className="header"><th>{`区分`}</th><th>{`内容`}</th><th>{`根拠`}</th></tr></thead><tbody><tr className="odd"><td>{`確度A`}</td><td>{`
                                規格の公式な構成（章立て・附属書）、適用範囲、序文、第2版の主な変更点
                            `}</td><td>{`公開されている目次・序文プレビュー、ISO等の公式概要`}</td></tr><tr className="even"><td>{`確度B`}</td><td>{`規格の狙いや位置づけの解説`}</td><td>{`ISO・BSI・各国規格機関・専門家の解説記事`}</td></tr><tr className="odd"><td>{`確度C`}</td><td>{`実務への落とし込み（クラウドDRパターンとの対応、演習例など）`}</td><td>{`筆者による補足。規格の要求事項ではない`}</td></tr></tbody></table>{`
            `}</div>
<blockquote>{`
                `}<p>{`
                    `}<strong>{`重要`}</strong>{`:
                    各章の「詳細な要求・推奨内容」は本文を読まないと確定できません。実際の導入・監査対応では、必ず正式版を購入して確認してください。
                `}</p>{`
            `}</blockquote>
        </>
    );
}
