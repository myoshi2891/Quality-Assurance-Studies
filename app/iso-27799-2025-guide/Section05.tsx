import React from 'react';
import Diagram from './Diagram';
export default function Section05() { return <>
<h2 id="step-5規格全体の構造を地図で見る">{"\n                    Step 5：規格全体の構造を地図で見る"}<a aria-label="リンク" className="anchor" href="#step-5規格全体の構造を地図で見る">{"#"}</a></h2>

<h3 id="5-1-本文の章構成">{"\n                    5-1. 本文の章構成"}<a aria-label="リンク" className="anchor" href="#5-1-本文の章構成">{"#"}</a></h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"章"}</th><th>{"内容"}</th><th>{"備考"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"Scope（適用範囲）"}</td><td>{"Step 3 参照"}</td></tr><tr className="even"><td>{"2"}</td><td>{"Normative references（規範的参照）"}</td><td>{"ISO/IEC 27002:2022、ISO 81001-1"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"Terms, definitions and abbreviated terms"}</td><td>{"Step 4 参照"}</td></tr><tr className="even"><td><strong>{"4"}</strong></td><td><strong>{"General（一般）"}</strong></td><td>{"構造、安全性、コントロールの選択と適用、27001との併用"}</td></tr><tr className="odd"><td><strong>{"5"}</strong></td><td><strong>{"Organizational controls（組織的管理策）"}</strong></td><td>{"5.1〜5.43（うちHLT 6個）"}</td></tr><tr className="even"><td><strong>{"6"}</strong></td><td><strong>{"People controls（人的管理策）"}</strong></td><td>{"6.1〜6.9（うちHLT 1個）"}</td></tr><tr className="odd"><td><strong>{"7"}</strong></td><td><strong>{"Physical controls（物理的管理策）"}</strong></td><td>{"7.1〜7.14"}</td></tr><tr className="even"><td><strong>{"8"}</strong></td><td><strong>{"Technological controls（技術的管理策）"}</strong></td><td>{"8.1〜8.35（うちHLT 1個）"}</td></tr></tbody></table></div>

<div className="callout callout-note"><div className="callout-title"><span className="callout-icon">{"ℹ"}</span><span>{"メモ"}</span></div><div className="callout-body"><p>{"\n                            第5〜8章の番号体系は、ISO/IEC 27002:2022\n                            の第5〜8章と"}<strong>{"同じ"}</strong>{"です。27002の「5.15\n                            アクセス制御」は、27799でも「5.15\n                            アクセス制御」です。HLTの追加分だけが、末尾の番号（5.38〜5.43、6.9、8.35）に追加されています。\n                        "}</p></div></div>

<h3 id="5-2-付録annexの構成">{"\n                    5-2. 付録（Annex）の構成"}<a aria-label="リンク" className="anchor" href="#5-2-付録annexの構成">{"#"}</a></h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"Annex"}</th><th>{"区分"}</th><th>{"内容"}</th><th>{"ページ（英語版目安）"}</th></tr></thead><tbody><tr className="odd"><td>{"A"}</td><td>{"参考"}</td><td>{"\n                                    医療向けの管理策の"}<strong>{"リファレンス一覧"}</strong>{"（補足管理策＋追加管理策）\n                                "}</td><td>{"約2ページ"}</td></tr><tr className="even"><td>{"B"}</td><td>{"参考"}</td><td><strong>{"2016年版との対応表"}</strong>{"（移行用）"}</td><td>{"約1ページ"}</td></tr><tr className="odd"><td>{"C"}</td><td>{"参考"}</td><td>{"\n                                    医療組織における情報セキュリティ（医療ならではの重要な側面の解説）\n                                "}</td><td>{"約11ページ"}</td></tr><tr className="even"><td>{"D"}</td><td>{"参考"}</td><td>{"\n                                    医療情報システムの"}<strong>{"セキュリティ／プライバシー要求の例"}</strong>{"と、27799管理策・IEC/TS\n                                    81001-2-2のセキュリティ能力との対応づけ\n                                "}</td><td>{"約20ページ（最大）"}</td></tr></tbody></table></div>

<Diagram id="mermaid-diagram-3" />

<h3 id="5-3-管理策の数を整理する">{"\n                    5-3. 管理策の数を整理する"}<a aria-label="リンク" className="anchor" href="#5-3-管理策の数を整理する">{"#"}</a></h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"テーマ"}</th><th>{"27002:2022 の管理策"}</th><th>{"27799 で追加（HLT）"}</th><th>{"27799 での合計"}</th></tr></thead><tbody><tr className="odd"><td>{"組織的（5章）"}</td><td>{"37"}</td><td>{"6（5.38〜5.43）"}</td><td>{"43"}</td></tr><tr className="even"><td>{"人的（6章）"}</td><td>{"8"}</td><td>{"1（6.9）"}</td><td>{"9"}</td></tr><tr className="odd"><td>{"物理的（7章）"}</td><td>{"14"}</td><td>{"0"}</td><td>{"14"}</td></tr><tr className="even"><td>{"技術的（8章）"}</td><td>{"34"}</td><td>{"1（8.35）"}</td><td>{"35"}</td></tr><tr className="odd"><td><strong>{"合計"}</strong></td><td><strong>{"93"}</strong></td><td><strong>{"8"}</strong></td><td><strong>{"101"}</strong></td></tr></tbody></table></div>

<hr  />

</>; }
