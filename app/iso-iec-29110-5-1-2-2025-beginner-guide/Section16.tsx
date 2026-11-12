import React from 'react';
import Checklist from './Checklist';
/** 15. 理解度チェック */
export default function Section16(){return <><h2 id="15-理解度チェック">{"15. 理解度チェック"}</h2>
{"\n            "}
<Checklist />
{"\n            "}
<h3 id="確認問題">{"確認問題"}</h3>
{"\n            "}
<details className="quiz-card">{"\n                "}<summary>{"\n                    "}<span className="qz-badge">{"問1"}</span><span className="qz-text">{"\n                        5人のチームが、2つの別製品を並行して開発している。Basicプロファイルは適切か？ "}</span><span className="qz-hint">{"答えを見る"}</span>{"\n                "}</summary>{"\n                "}<div className="qz-answer">{"\n                    "}<span className="qz-a-badge">{"答え"}</span>{"\n                    "}<div className="qz-a-body">{"\n                        適切とは限りません。Basicは"}<strong>{"1チーム1製品"}</strong>{"が前提で、複数並行の開発は上位プロファイルが想定されます。（S1、S5）\n                    "}</div>{"\n                "}</div>{"\n            "}</details>
{"\n            "}
<details className="quiz-card">{"\n                "}<summary>{"\n                    "}<span className="qz-badge">{"問2"}</span><span className="qz-text">{"\n                        顧客が運用ガイドを求めた場合、2025年版ではどう扱われるか？ "}</span><span className="qz-hint">{"答えを見る"}</span>{"\n                "}</summary>{"\n                "}<div className="qz-answer">{"\n                    "}<span className="qz-a-badge">{"答え"}</span>{"\n                    "}<div className="qz-a-body">{"\n                        「条件付きタスク」として、条件を満たすときに作成するタスクの形で表現されます。（S3）\n                    "}</div>{"\n                "}</div>{"\n            "}</details>
{"\n            "}
<details className="quiz-card">{"\n                "}<summary>{"\n                    "}<span className="qz-badge">{"問3"}</span><span className="qz-text">{" 規格の適合要件はどのパートに書かれているか？ "}</span><span className="qz-hint">{"答えを見る"}</span>{"\n                "}</summary>{"\n                "}<div className="qz-answer">{"\n                    "}<span className="qz-a-badge">{"答え"}</span>{"\n                    "}<div className="qz-a-body">{"ISO/IEC 29110-4-1 です。（S3）"}</div>{"\n                "}</div>{"\n            "}</details>
{"\n\n            "}</>;}
