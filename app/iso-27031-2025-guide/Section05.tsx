import React from "react";
import Diagram from "./Diagram";

/** 第6〜13章の流れと戦略・計画へのフィードバックを示す。 */
export default function Section05() {
    return (
        <>
<h2 id="5-規格の全体構造章マップ">{`5. 規格の全体構造（章マップ）`}</h2>{`
`}<p>{`公開されている目次にもとづく構成です（確度A）。`}</p>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="5-規格の全体構造章マップ">{`
                `}<table><thead><tr className="header"><th>{`章`}</th><th>{`タイトル（日本語訳は筆者）`}</th><th>{`ざっくり何をする章か`}</th></tr></thead><tbody><tr className="odd"><td>{`1`}</td><td>{`適用範囲`}</td><td>{`何を対象にするか`}</td></tr><tr className="even"><td>{`2`}</td><td>{`引用規格`}</td><td>{`併せて参照する規格`}</td></tr><tr className="odd"><td>{`3`}</td><td>{`用語及び定義`}</td><td>{`用語の意味`}</td></tr><tr className="even"><td>{`4`}</td><td>{`略語`}</td><td>{`略語の一覧`}</td></tr><tr className="odd"><td>{`5`}</td><td>{`本文書の構成`}</td><td>{`この文書の読み方`}</td></tr><tr className="even"><td><strong>{`6`}</strong></td><td><strong>{`IRBCのBCMへの統合`}</strong></td><td>{`ガバナンス・目標・リスク・インシデント・戦略との接続`}</td></tr><tr className="odd"><td><strong>{`7`}</strong></td><td><strong>{`IRBCに対する事業側の期待`}</strong></td><td>{`リスクレビュー、BIAの入力、対象範囲と依存関係`}</td></tr><tr className="even"><td><strong>{`8`}</strong></td><td><strong>{`IRBCの前提条件の定義`}</strong></td><td>{`事前準備、目的設定、RTO・RPO目標の決定`}</td></tr><tr className="odd"><td><strong>{`9`}</strong></td><td><strong>{`IRBC戦略の決定`}</strong></td><td>{`戦略の選択肢（人・設備・技術・データ・プロセス・供給者）`}</td></tr><tr className="even"><td><strong>{`10`}</strong></td><td><strong>{`ICT継続計画の決定`}</strong></td><td>{`計画の前提、発動、復旧計画、代替策、外部連絡先`}</td></tr><tr className="odd"><td><strong>{`11`}</strong></td><td><strong>{`試験・演習・監査`}</strong></td><td>{`計画が実際に機能するかを確かめる`}</td></tr><tr className="even"><td><strong>{`12`}</strong></td><td><strong>{`最終的なMBCO`}</strong></td><td>{`最低限の事業継続目標の確定`}</td></tr><tr className="odd"><td><strong>{`13`}</strong></td><td><strong>{`IRBC評価に関する経営層の責任`}</strong></td><td>{`経営層が評価・関与する`}</td></tr><tr className="even"><td>{`附属書A（参考）`}</td><td>{`RTOとRPOをICT復旧の事業目標と比較する`}</td><td>{`目標値と事業目標の整合確認`}</td></tr><tr className="odd"><td>{`附属書B（参考）`}</td><td>{`FMEAのためのリスク報告`}</td><td>{`故障モード影響解析の観点でのリスク報告`}</td></tr></tbody></table>{`
            `}</div>{`
`}<h3 id="51-全体の流れ">{`5.1 全体の流れ`}</h3>{`
`}<Diagram id="mmd-3" />{`
`}<blockquote>{`
                `}<p>{`
                    `}<strong>{`読み方のコツ`}</strong>{`: 第6〜13章は、「統合 → 期待把握 → 前提設定 → 戦略
                    → 計画 → 検証 →
                    経営評価」という`}<strong>{`一本の流れ`}</strong>{`になっています。第11章の検証結果は、戦略や計画へフィードバックされます。
                `}</p>{`
            `}</blockquote>
        </>
    );
}
