import React from 'react';
export default function Section() { return <>
<h2 id="step-10よくある誤解と理解度チェック">{"STEP\n10：よくある誤解と理解度チェック"}</h2>

<h3 id="10-1-よくある誤解">{"10-1. よくある誤解"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"誤解"}</th><th>{"正しい理解"}</th></tr></thead><tbody><tr className="odd"><td>{"11179 はデータベース設計規格だ"}</td><td><strong>{"意味と表現を記述・登録するための枠組み"}</strong>{"で、物理設計を決めるものではない"}</td></tr><tr className="even"><td>{"Part 1 だけ読めば実装できる"}</td><td>{"Part 1 は全体の入口。実装には Part 3 や拡張パートが必要"}</td></tr><tr className="odd"><td>{"メタデータ全般の百科事典だ"}</td><td>{"本規格群でのメタデータは"}<strong>{"データの記述"}</strong>{"に限定される"}</td></tr><tr className="even"><td>{"データエレメント＝列名"}</td><td>{"DE\nは"}<strong>{"意味（DEC）と表現（VD）の組"}</strong>{"であり、列名は実装の一形態にすぎない"}</td></tr><tr className="odd"><td>{"単位が違えば別の意味"}</td><td>{"単位は多くの場合"}<strong>{"表現（VD）の違い"}</strong>{"として整理できる"}</td></tr><tr className="even"><td>{"2023年版でも Part 3 に全部入っている"}</td><td>{"2023年版では"}<strong>{"複数パートに分割"}</strong>{"されている"}</td></tr></tbody></table></div>

<h3 id="10-2-理解度チェック自己採点">{"10-2.\n理解度チェック（自己採点）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"#"}</th><th>{"問題"}</th><th>{"解答の目安"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"ISO/IEC 11179-1:2023 の主目的は？"}</td><td>{"各パートの理解・関連付けの手段と、メタデータ／MDR\nの概念的基礎を提供すること"}</td></tr><tr className="even"><td>{"2"}</td><td>{"データエレメントの構成要素を2つ答えよ"}</td><td>{"データエレメントコンセプトと値領域"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"DEC はどの2つの組合せで作られるか"}</td><td>{"オブジェクトクラスとプロパティ"}</td></tr><tr className="even"><td>{"4"}</td><td>{"概念領域と値領域の違いは？"}</td><td>{"概念領域は"}<strong>{"意味の集合"}</strong>{"、値領域は"}<strong>{"実際に許す値（表現）の集合"}</strong></td></tr><tr className="odd"><td>{"5"}</td><td>{"「mmHg」と「kPa」は意味の違い？表現の違い？"}</td><td>{"通常は"}<strong>{"表現（VD）の違い"}</strong></td></tr><tr className="even"><td>{"6"}</td><td>{"2023年版で基本属性はどのパートへ？"}</td><td>{"Part 30"}</td></tr><tr className="odd"><td>{"7"}</td><td>{"データセットの登録を扱うパートは？"}</td><td>{"Part 33"}</td></tr><tr className="even"><td>{"8"}</td><td>{"Part 34 の対象は？"}</td><td>{"計算可能なデータの登録（2024年5月発行）"}</td></tr><tr className="odd"><td>{"9"}</td><td>{"MDR を運営する責任組織は？"}</td><td>{"Registration Authority（登録機関）"}</td></tr><tr className="even"><td>{"10"}</td><td>{"11179 の構成要素が「semantic」と言われる理由は？"}</td><td>{"データの"}<strong>{"意味"}</strong>{"を扱い、物理的な保存形式は規定しないため"}</td></tr></tbody></table></div>

</>; }
