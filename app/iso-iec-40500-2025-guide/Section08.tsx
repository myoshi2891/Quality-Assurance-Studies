import React from 'react';
import Diagram from './Diagram';
export default function Category() { return <>
<h2 id="step-7-法規制標準との関係eu-を例に">{"\n                Step 7. 法規制・標準との関係（EU を例に）\n            "}</h2>
{"\n            "}
<h3 id="71-全体の関係">{"7.1 全体の関係"}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-7" />
{"\n            "}
<h3 id="72-en-301-549-の最新状況2026年10月時点">{"\n                7.2 EN 301 549 の最新状況（2026年10月時点）\n            "}</h3>
{"\n            "}
<div aria-label="表：7.2 EN 301 549 の最新状況（2026年10月時点）" className="table-scroll" role="region" tabIndex={0}>{"\n                "}<table><thead><tr className="header"><th>{"項目"}</th><th>{"状況"}</th></tr></thead><tbody><tr className="odd"><td>{"最新版"}</td><td>{"\n                                "}<strong>{"EN 301 549 V4.1.1"}</strong>{"（ETSI・CEN・CENELEC が\n                                2026年9月2日に公開）\n                            "}</td></tr><tr className="even"><td>{"WCAG の参照"}</td><td>{"\n                                旧版 V3.2.1 は WCAG "}<strong>{"2.1"}</strong>{" A/AA。V4.1.1 は WCAG\n                                "}<strong>{"2.2"}</strong>{" A/AA に更新\n                            "}</td></tr><tr className="odd"><td>{"追加の変更"}</td><td>{"\n                                EAA との対応づけを明示する附属書の追加、リアルタイム通信要件の見直し\n                                など\n                            "}</td></tr><tr className="even"><td>{"法的な位置づけ"}</td><td>{"EU 官報（OJEU）に引用されると、適合推定を与える整合規格になる"}</td></tr><tr className="odd"><td>{"官報引用の見込み"}</td><td>{"\n                                "}<strong>{"情報源により差があります"}</strong>{"（Deque は\n                                2026年11月30日ごろ、アイルランド NDA は\n                                2026年12月16日の見込みと記載）\n                            "}</td></tr><tr className="even"><td>{"注意"}</td><td>{"\n                                "}<strong>{"WCAG 2.2 AA を満たすことと、EN 301 549 V4.1.1\n                                    に適合することは同じではありません"}</strong>{"（EN 301 549 には WCAG 以外の要件もあります）\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="73-日本の読者へ">{"7.3 日本の読者へ"}</h3>
{"\n            "}
<p>{"\n                日本では JIS X 8341-3:2016 が WCAG 2.0（および ISO/IEC\n                40500:2012）に対応した規格として広く参照されてきました。WCAG 2.2 / ISO/IEC\n                40500:2025\n                を受けた国内の規格・ガイドラインの更新状況は、本ガイドの調査範囲外です。"}<strong>{"最新の JIS\n                    やデジタル庁・各自治体のガイドラインを個別に確認してください。"}</strong>{"\n            "}</p>
{"\n            "}
</>; }
