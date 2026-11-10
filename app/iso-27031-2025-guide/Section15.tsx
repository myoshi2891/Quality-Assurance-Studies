import React from "react";

/** 附属書の位置づけと読み方を説明する。 */
export default function Section15() {
    return (
        <>
<h2 id="7-附属書の読み方">{`7. 附属書の読み方`}</h2>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="7-附属書の読み方">{`
                `}<table><thead><tr className="header"><th>{`附属書`}</th><th>{`タイトル`}</th><th>{`初学者向けの要点`}</th></tr></thead><tbody><tr className="odd"><td>{`附属書A（参考）`}</td><td>{`RTOとRPOをICT復旧の事業目標と比較する`}</td><td>{`
                                決めたRTO・RPOが、事業側の目標に見合っているかを`}<strong>{`突き合わせる`}</strong>{`ための考え方
                            `}</td></tr><tr className="even"><td>{`附属書B（参考）`}</td><td>{`FMEAのためのリスク報告`}</td><td>{`
                                FMEA（故障モード影響解析）の観点で、障害の原因・影響・優先度を`}<strong>{`整理して報告する`}</strong>{`ための考え方
                            `}</td></tr></tbody></table>{`
            `}</div>{`
`}<blockquote>{`
                `}<p>{`附属書の詳細は本文確認が必要です。ここでは位置づけのみ示しています。`}</p>{`
            `}</blockquote>
        </>
    );
}
