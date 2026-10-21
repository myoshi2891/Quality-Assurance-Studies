import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-8他の規格実システムとの関係">{"STEP\n8：他の規格・実システムとの関係"}</h2>

<h3 id="8-1-規格間の関係">{"8-1. 規格間の関係"}</h3>

<p>{"Part 1:2023 は、JTC 1/SC 32\nの他の規格との関係を説明する役割を持ちます。目次プレビューからは、例として\n"}<strong>{"ISO/IEC 19763 系（メタモデル相互運用フレームワーク）"}</strong>{" や\n"}<strong>{"ISO/IEC 20943 系（メタデータレジストリ内容の達成手順）"}</strong>{"\nへの言及が確認できます。"}</p>

<Diagram id="diagram-13" />

<h3 id="8-2-実システムコミュニティでの採用例">{"8-2.\n実システム・コミュニティでの採用例"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"事例"}</th><th>{"概要"}</th><th>{"位置づけ"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"Aristotle Metadata Registry"}</strong></td><td>{"ISO/IEC 11179\nに基づく"}<strong>{"オープンソースのMDRフレームワーク"}</strong>{"。Django\nベースで、組織が独自のレジストリを運用できる"}</td><td>{"実装（OSS）"}</td></tr><tr className="even"><td><strong>{"NCI caDSR（米国国立がん研究所）"}</strong></td><td>{"データエレメント、DEC、VD、許容値などを 11179\nに沿って管理。オブジェクトクラス・プロパティ・表現の命名に統制語彙を使用"}</td><td>{"大規模な医療研究での運用例"}</td></tr><tr className="odd"><td><strong>{"DDI Lifecycle（社会科学データの記述標準）"}</strong></td><td>{"変数やコンセプト等の構造を 11179 に対応づけている"}</td><td>{"他標準とのマッピング"}</td></tr><tr className="even"><td><strong>{"政府系メタデータレジストリ"}</strong></td><td>{"アイルランド住宅省、NSW（豪）等が Aristotle ベースで公開"}</td><td>{"行政データの標準化"}</td></tr><tr className="odd"><td><strong>{"医療標準の対応研究"}</strong></td><td>{"ODM、ClaML、LOINC、SNOMED CT 等の 11179 への対応づけ研究"}</td><td>{"医療情報の相互運用"}</td></tr></tbody></table></div>

<h3 id="8-3-実システムの発想を借りるときの注意">{"8-3.\n実システムの発想を借りるときの注意"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"注意点"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"版の違い"}</td><td>{"Aristotle のドキュメントは 2013 年版 Part 3\nの要件に基づく記述が中心（2023年版は分割後）"}</td></tr><tr className="even"><td>{"対応範囲"}</td><td>{"ツールが 2023 年版の全パート（例：Part 34,\n35）に対応しているとは限らない"}</td></tr><tr className="odd"><td>{"用語のゆれ"}</td><td>{"caDSR 等は固有の名称（Qualifier、Representation 等）を併用する"}</td></tr></tbody></table></div>

</>; }
