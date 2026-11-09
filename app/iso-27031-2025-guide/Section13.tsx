import React from "react";
import Diagram from "./Diagram";

export default function Section13() {
    return (
        <>
<h3 id="step-6試験演習監査で本当に動くかを確かめる第11章">{`
                Step 6：試験・演習・監査で「本当に動くか」を確かめる【第11章】
            `}</h3>{`
`}<p><strong>{`規格上の位置づけ`}</strong>{`（確度A）`}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-6試験演習監査で本当に動くかを確かめる第11章">{`
                `}<table><thead><tr className="header"><th>{`節`}</th><th>{`タイトル`}</th></tr></thead><tbody><tr className="odd"><td>{`11.1`}</td><td>{`性能基準`}</td></tr><tr className="even"><td>{`11.2`}</td><td>{`
                                依存関係の試験（試験と演習、プログラム、範囲、計画、アラートベースと復旧段階ごとの違い、演習の管理）
                            `}</td></tr><tr className="odd"><td>{`11.3`}</td><td>{`試験からの学び`}</td></tr><tr className="even"><td>{`11.4`}</td><td>{`IRBCの監査`}</td></tr><tr className="odd"><td>{`11.5`}</td><td>{`文書化された情報の管理`}</td></tr></tbody></table>{`
            `}</div>{`
`}<p>{`
                `}<strong>{`やさしく言うと`}</strong>{`
                計画は「作っただけ」では意味がありません。`}<strong>{`実際に動かして、穴を見つけて、直す`}</strong>{`ことが重要です。
            `}</p>{`
`}<Diagram id="mmd-10" />{`
`}<h4 id="61-演習で確認したいこと筆者の補足">{`6.1 演習で確認したいこと（筆者の補足）`}</h4>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="61-演習で確認したいこと筆者の補足">{`
                `}<table><thead><tr className="header"><th>{`確認項目`}</th><th>{`具体例`}</th></tr></thead><tbody><tr className="odd"><td>{`目標を満たせたか`}</td><td>{`復旧にかかった時間はRTO以内か、失われたデータはRPO以内か`}</td></tr><tr className="even"><td>{`手順は実行可能か`}</td><td>{`手順書どおりに復旧できたか。前提知識が抜けていないか`}</td></tr><tr className="odd"><td>{`連絡は機能したか`}</td><td>{`エスカレーション、外部連絡先は正しく機能したか`}</td></tr><tr className="even"><td>{`依存先は想定どおりか`}</td><td>{`クラウドや委託先の挙動が想定と合っていたか`}</td></tr><tr className="odd"><td>{`文書は最新か`}</td><td>{`構成変更に手順書が追従しているか`}</td></tr></tbody></table>{`
            `}</div>
        </>
    );
}
