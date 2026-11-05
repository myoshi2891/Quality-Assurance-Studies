import React from 'react';
import Diagram from './Diagram';
export default function Category() { return <>
<h2 id="step-8-今後の動き">{"Step 8. 今後の動き"}</h2>
{"\n            "}
<h3 id="81-3つの動き">{"8.1 3つの動き"}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-8" />
{"\n            "}
<h3 id="82-wcag-30-はいつ使えるのか">{"8.2 WCAG 3.0 はいつ使えるのか"}</h3>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"現状"}</td><td>{"\n                                2026年9月10日に更新された\n                                "}<strong>{"Working Draft"}</strong>{"（未完成の草案）\n                            "}</td></tr><tr className="even"><td>{"WCAG 2 との関係"}</td><td>{"\n                                WCAG 3 は WCAG 2.2 の後継だが、"}<strong>{"WCAG 2 を廃止するものではない"}</strong>{"\n                            "}</td></tr><tr className="odd"><td>{"時期"}</td><td>{"\n                                確定した日程はなく、コミュニティからも日程への懐疑的な声がある。草案段階で変更される可能性が高い\n                            "}</td></tr><tr className="even"><td>{"実務判断"}</td><td>{"\n                                "}<strong>{"今は WCAG 2.2 に取り組むのが正解"}</strong>{"。2.2\n                                での取り組み（フォーカス、操作性、認知負荷の軽減など）は将来も無駄になりにくい\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    WCAG 3 の完成時期について、ベンダー系の解説記事は「Candidate Recommendation が\n                    2027年第4四半期ごろ、Recommendation は 2028年以降」と紹介しています。一方、W3C\n                    内部の議論では、スケジュールの実現可能性に懸念を示す発言（アクセシビリティテストで知られる\n                    Wilco Fiers\n                    氏）もあります。"}<strong>{"日程は不確実な見通し"}</strong>{"として扱ってください。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
</>; }
