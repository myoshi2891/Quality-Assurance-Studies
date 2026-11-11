import React from 'react';
import Diagram from './Diagram';

/** 9. Step 5：リスクベースドテスト（RBT）— このTRの心臓部 — preserve the complete original category. */
export default function Section10() {
  return <>
<h2 id={"s26"}>{"9. Step 5：リスクベースドテスト（RBT）— このTRの心臓部"}</h2>
{"\n"}
<h3 id={"s27"}>{"9.1 RBTとは"}<span className={"tag tag-tr"}>{"TR確認済"}</span></h3>
{"\n"}
<p>{"リスクベースドテスト（Risk-Based Testing）は、"}<strong>{"リスクをテスト戦略の内容を決める最大の推進力"}</strong>{"とする考え方で、29119シリーズの中核概念です。TRの5.6節がこれを解説しています。"}</p>
{"\n"}
<h3 id={"s28"}>{"9.2 リスク管理プロセス"}<span className={"tag tag-tr"}>{"TR確認済"}</span></h3>
{"\n"}
<figure className={"diagram"}><Diagram index={7} />{"\n"}</figure>
{"\n"}
<p><span className={"tag tag-lead tag-tr"}>{"TR確認済"}</span>{"リスク識別では、ISO/IEC 25010 の品質特性に基づくチェックリストを使うことがある、と述べられています。"}</p>
{"\n"}
<h3 id={"s29"}>{"9.3 リスクの2分類【TR確認済（5.6.2節の存在）／内容は一般知識】"}</h3>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s29"}><table><thead><tr className={"header"}><th>{"分類"}</th><th>{"意味"}</th><th>{"例"}<span className={"tag tag-ex"}>{"例示"}</span></th></tr></thead><tbody><tr className={"odd"}><td><strong>{"製品リスク"}</strong></td><td>{"納品された製品が引き起こす問題"}</td><td>{"誤認証で他人が入室できる／本人が入れない"}</td></tr><tr className={"even"}><td><strong>{"プロジェクトリスク"}</strong></td><td>{"プロジェクトの進行を妨げる問題"}</td><td>{"被験者の募集が遅れる／テストデータの確保が困難"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<h3 id={"s30"}>{"9.4 リスク露出度の算出例"}<span className={"tag tag-ex"}>{"例示"}</span></h3>
{"\n"}
<p>{"影響度と発生可能性を3段階（1=低, 2=中, 3=高）で評価し、積を露出度とします。"}</p>
{"\n"}
<div className={"table-wrap"} tabIndex={0} role={"region"} aria-labelledby={"s30"}><table><thead><tr className={"header"}><th>{"リスクID"}</th><th>{"リスク（例）"}</th><th>{"影響度"}</th><th>{"発生可能性"}</th><th>{"露出度"}</th><th>{"優先度"}</th></tr></thead><tbody><tr className={"odd"}><td>{"R-01"}</td><td>{"他人受入（FMRが要件より高い）"}</td><td>{"3"}</td><td>{"2"}</td><td><strong>{"6"}</strong></td><td>{"高"}</td></tr><tr className={"even"}><td>{"R-02"}</td><td>{"暗所・逆光での本人拒否増加"}</td><td>{"2"}</td><td>{"3"}</td><td><strong>{"6"}</strong></td><td>{"高"}</td></tr><tr className={"odd"}><td>{"R-03"}</td><td>{"特定の年齢層・属性で誤り率が偏る"}</td><td>{"3"}</td><td>{"2"}</td><td><strong>{"6"}</strong></td><td>{"高"}</td></tr><tr className={"even"}><td>{"R-04"}</td><td>{"生体データの漏えい・不適切保管"}</td><td>{"3"}</td><td>{"1"}</td><td><strong>{"3"}</strong></td><td>{"中"}</td></tr><tr className={"odd"}><td>{"R-05"}</td><td>{"センサ故障時のフォールバック不全"}</td><td>{"2"}</td><td>{"2"}</td><td><strong>{"4"}</strong></td><td>{"中"}</td></tr><tr className={"even"}><td>{"R-06"}</td><td>{"試験用被験者の確保遅延（プロジェクト）"}</td><td>{"1"}</td><td>{"3"}</td><td><strong>{"3"}</strong></td><td>{"中"}</td></tr></tbody></table>{"\n"}</div>
{"\n"}
<blockquote>{"\n"}<p>{"露出度の高いものから、"}<strong>{"テスト工数・テスト技法・テストの深さ"}</strong>{"を厚く配分します。露出度の低いものは軽く扱う、あるいは対象外とすることを合意します。"}</p>{"\n"}</blockquote>
{"\n"}
<hr />
{"\n"}
  </>;
}
