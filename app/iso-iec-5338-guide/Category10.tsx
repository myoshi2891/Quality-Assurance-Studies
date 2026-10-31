import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_8 } from './diagrams';
export default function Category10() { return <>
<h2 id="step-9-他の規格との関係">{"Step 9. 他の規格との関係"}</h2>

<h3 id="9-1-関連規格の全体マップ">{"9-1. 関連規格の全体マップ"}</h3>

<div className="mermaid-diagram" id="diagram-9" role="img" aria-label="ISO/IEC 5338と15288・12207・22989・23053など関連規格の全体マップ"><Mermaid chart={DIAGRAM_8} /></div>

<h3 id="9-2-役割の違い比較表">{"9-2. 役割の違い（比較表）"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"規格"}</th><th>{"主題"}</th><th>{"5338 との違い"}</th></tr></thead><tbody><tr className="odd"><td>{"ISO/IEC 22989"}</td><td>{"AIの概念・用語"}</td><td>{"5338 の用語・ライフサイクル例の"}<strong>{"出典"}</strong></td></tr><tr className="even"><td>{"ISO/IEC 23053"}</td><td>{"MLを用いたAIシステムの枠組み"}</td><td>{"5338 に AI 固有プロセスを提供"}</td></tr><tr className="odd"><td>{"ISO/IEC 42001"}</td><td>{"AIマネジメントシステム（認証可能な要求事項）"}</td><td><strong>{"組織のガバナンス"}</strong>{"を扱う。5338 はそのライフサイクルの"}<strong>{"詳細"}</strong>{"を補う"}</td></tr><tr className="even"><td>{"ISO/IEC 23894"}</td><td>{"AIリスクマネジメント"}</td><td>{"5338 のリスクマネジメントプロセスから参照される"}</td></tr><tr className="odd"><td>{"ISO/IEC TR 5469"}</td><td>{"AIの機能安全"}</td><td>{"安全重要システムの追加配慮"}</td></tr><tr className="even"><td>{"IEC 62304"}</td><td>{"医療機器ソフトウェアのライフサイクル"}</td><td>{"医療AIでは 5338 と"}<strong>{"併せて"}</strong>{"考慮"}</td></tr></tbody></table></div>

<blockquote className="callout-practice"><p>{"💡 "}<strong>{"簡単な覚え方"}</strong>{"（SIG の説明の趣旨） "}<strong>{"42001 は「組織がAIをどう統治するか」、5338 は「チームがAIシステムをどう作り動かすか」。"}</strong></p></blockquote>

<h3 id="9-3-医療研究分野での活用イメージ">{"9-3. 医療・研究分野での活用イメージ"}</h3>

<p>{"医療・研究領域のAI（診断支援、解析パイプライン等）では、次のように読み替えると理解しやすくなります。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"5338 のプロセス"}</th><th>{"医療・研究AIでの具体例"}</th></tr></thead><tbody><tr className="odd"><td>{"AI data engineering"}</td><td>{"症例データの取得、匿名化、ラベル付け、データセット分割"}</td></tr><tr className="even"><td>{"Verification"}</td><td>{"展開前のモデル性能評価（感度・特異度など）"}</td></tr><tr className="odd"><td>{"Validation"}</td><td>{"臨床現場のニーズに合致するかの妥当性確認"}</td></tr><tr className="even"><td>{"Continuous validation"}</td><td>{"装置更新や患者集団の変化による性能劣化の監視"}</td></tr><tr className="odd"><td>{"Configuration management"}</td><td>{"学習データ・モデル・コードの版管理と追跡性"}</td></tr></tbody></table></div>

<blockquote className="callout-warn"><p>{"⚠️ 上記は理解のための"}<strong>{"解釈例"}</strong>{"です。医療機器として扱う場合は、各国の規制と IEC 62304 等を必ず確認してください。"}</p></blockquote>

<hr />

</>; }
