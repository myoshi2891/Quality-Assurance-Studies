import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="0-このガイドの使い方">{"0. このガイドの使い方"}</h2>

<h3 id="0-1-学習ロードマップ">{"0-1. 学習ロードマップ"}</h3>

<Diagram id="diagram-1" />

<ol>
<li>{"STEP 1：課題を知る"}</li>
<li>{"STEP 2：規格の位置づけ"}</li>
<li>{"STEP 3：ファミリー全体像"}</li>
<li>{"STEP 4：2023年版の変更点"}</li>
<li>{"STEP 5：コア概念"}</li>
<li>{"STEP 6：2層構造"}</li>
<li>{"STEP 7：運用と役割"}</li>
<li>{"STEP 8：他規格・実装"}</li>
<li>{"STEP 9：実践"}</li>
<li>{"STEP 10：確認"}</li>
</ol>

<h3 id="0-2-先に押さえる3行まとめ">{"0-2. 先に押さえる3行まとめ"}</h3>

<div className="table-scroll"><table aria-labelledby="0-2-先に押さえる3行まとめ"><thead><tr className="header"><th>{"#"}</th><th>{"ポイント"}</th><th>{"一言で言うと"}</th></tr></thead><tbody><tr className="odd"><td>{"①"}</td><td>{"何の規格か"}</td><td>{"「データの意味と表現を、組織を超えて共有・再利用できるように記述・登録する仕組み」の"}<strong>{"入口となる枠組み"}</strong></td></tr><tr className="even"><td>{"②"}</td><td>{"Part 1 の役割"}</td><td>{"ISO/IEC 11179\nの"}<strong>{"各パートをつなぎ、メタデータとレジストリを概念的に理解するための土台"}</strong>{"を提供する"}</td></tr><tr className="odd"><td>{"③"}</td><td>{"最重要概念"}</td><td><strong>{"データエレメント ＝ データエレメントコンセプト（意味）＋\n値領域（表現）"}</strong></td></tr></tbody></table></div>

<h3 id="0-3-重要な前提">{"0-3. 重要な前提"}</h3>

<div className="callout callout-warn"><span className="callout-icon">{"⚠️"}</span><div className="callout-body"><p><strong>{"この規格は「データそのもの」ではなく「データを説明する情報（メタデータ）」を扱います。"}</strong>{"\nISO/IEC 11179 の各パートでいう「メタデータ」は "}<em>{"データの記述"}</em>{"\nを指し、メタデータ全般の包括的な解説書ではありません（ISO公式ページの要旨に基づく整理）。"}</p></div></div>

</>; }
