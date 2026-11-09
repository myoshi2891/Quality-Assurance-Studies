import React from "react";

export default function Section18() {
    return (
        <>
<h2 id="10-導入チェックリスト初学者向け">{`10. 導入チェックリスト（初学者向け）`}</h2>{`
`}<div className="checklist-card" id="irbc-checklist">{`
                `}<div className="checklist-progress">{`
                    `}<span className="cp-label">{`進捗`}</span>{`
                    `}<div className="cp-bar"><div className="cp-fill"></div></div>{`
                    `}<span className="cp-count">{`0 / 9`}</span>{`
                `}</div>{`
                `}<div className="check-group">{`
                    `}<div className="cg-title">{`
                        `}<span className="cg-icon">{`🔍`}</span><span className="cg-phase">{`Phase 1`}</span><span className="cg-name">{`把握と準備`}</span>{`
                    `}</div>{`
                    `}<ul className="check-grid">{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`01`}</span><span className="ci-text">{`重要な事業プロセスとICTサービスの対応関係を整理した`}</span></label>{`
                        `}</li>{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`02`}</span><span className="ci-text">{`BIAの結果を、ICT側のRTO・RPOに反映した`}</span></label>{`
                        `}</li>{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`03`}</span><span className="ci-text">{`ICTの依存関係（クラウド・委託先・共通基盤）を洗い出した`}</span></label>{`
                        `}</li>{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`04`}</span><span className="ci-text">{`依存先との契約（SLA）がRTOを満たすか確認した`}</span></label>{`
                        `}</li>{`
                    `}</ul>{`
                `}</div>{`
                `}<div className="check-group">{`
                    `}<div className="cg-title">{`
                        `}<span className="cg-icon">{`🗺️`}</span><span className="cg-phase">{`Phase 2`}</span><span className="cg-name">{`戦略と計画`}</span>{`
                    `}</div>{`
                    `}<ul className="check-grid">{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`05`}</span><span className="ci-text">{`戦略を「人・設備・技術・データ・プロセス・供給者」の6観点で点検した`}</span></label>{`
                        `}</li>{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`06`}</span><span className="ci-text">{`発動基準・エスカレーション先・暫定回避策を決めた`}</span></label>{`
                        `}</li>{`
                    `}</ul>{`
                `}</div>{`
                `}<div className="check-group">{`
                    `}<div className="cg-title">{`
                        `}<span className="cg-icon">{`🧪`}</span><span className="cg-phase">{`Phase 3`}</span><span className="cg-name">{`検証と評価`}</span>{`
                    `}</div>{`
                    `}<ul className="check-grid">{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`07`}</span><span className="ci-text">{`試験・演習の計画を作り、結果をRTO・RPOと比較している`}</span></label>{`
                        `}</li>{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`08`}</span><span className="ci-text">{`経営層へ評価結果を報告する仕組みがある`}</span></label>{`
                        `}</li>{`
                    `}</ul>{`
                `}</div>{`
                `}<div className="check-group">{`
                    `}<div className="cg-title">{`
                        `}<span className="cg-icon">{`🔗`}</span><span className="cg-phase">{`Phase 4`}</span><span className="cg-name">{`既存の仕組みとの統合`}</span>{`
                    `}</div>{`
                    `}<ul className="check-grid">{`
                        `}<li className="check-item">{`
                            `}<label><input type="checkbox" /><span className="ci-box" aria-hidden="true">{`✓`}</span><span className="ci-num">{`09`}</span><span className="ci-text">{`ISO/IEC 27001・ISO
                                    22301など既存の仕組みと二重にならないよう整理した`}</span></label>{`
                        `}</li>{`
                    `}</ul>{`
                `}</div>{`
                `}<div className="cp-done" hidden={true}>{`
                    🎉 すべて確認できました。次は演習計画を立てましょう。
                `}</div>{`
            `}</div>
        </>
    );
}
