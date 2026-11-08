import React from 'react';
import Diagram from './Diagram';

export default function Section11() {
    return <>
<h2 id="step-11-他のisoマネジメントシステムとの統合">{" "}<span className="step-num">{"STEP 11"}</span>{"他のISOマネジメントシステムとの統合 "}</h2>{" "}<p>{" 第3版の大きな特徴は、"}<strong>{"MSS共通構造の採用により、他のISOマネジメントシステムと一体運用しやすくなった"}</strong>{"ことです。 "}</p>{" "}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-11-他のisoマネジメントシステムとの統合">{" "}<table><thead><tr className="header"><th>{"統合先の規格"}</th><th>{"統合しやすいポイント"}</th></tr></thead><tbody><tr className="odd"><td>{"ISO/IEC 27001（情報セキュリティ）"}</td><td>{" 資産台帳、リスクアセスメント、内部監査、マネジメントレビューを共通化 "}</td></tr><tr className="even"><td>{"ISO/IEC 20000-1（ITサービスマネジメント）"}</td><td>{"構成情報、変更管理、サービスレベルとの連携"}</td></tr><tr className="odd"><td>{"ISO 9001（品質）"}</td><td>{"文書化した情報、是正処置、継続的改善の共通化"}</td></tr></tbody></table>{" "}</div>{" "}<Diagram id="mermaid-diagram-10" />{" "}<p>{" Boerger氏の講演でも、ISO/IECが示す関連規格（19770、20000、27001）それぞれが自分用の台帳を持つ現実を踏まえ、信頼できるデータをどう確立し共有するかが論点として紹介されています。 "}</p>{" "}
    </>;
}
