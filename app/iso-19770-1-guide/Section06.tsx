import React from 'react';
import Diagram from './Diagram';

export default function Section06() {
    return <>
<h2 id="step-6-iso-55001との関係">{" "}<span className="step-num">{"STEP 6"}</span>{"ISO 55001との関係 "}</h2>{" "}<p>{" ISO/IEC 19770-1:2017 は、"}<strong>{"ISO 55001:2014（アセットマネジメント — マネジメントシステム要求事項）の「分野特化型の拡張」"}</strong>{" です。ただし、ISO 55001の特定業種向け適用版ではないと位置づけられています。 "}</p>{" "}<Diagram id="mermaid-diagram-4" />{" "}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="step-6-iso-55001との関係">{" "}<table><thead><tr className="header"><th>{"ポイント"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"位置づけ"}</td><td>{" ISO 55001の"}<strong>{"ディシプリン特化型の拡張"}</strong>{"（変更を伴う） "}</td></tr><tr className="even"><td>{"追加要求"}</td><td>{" IT資産特有の性質（複製容易、契約・ライセンス依存、構成変化が速い等）に対応する要求を追加 "}</td></tr><tr className="odd"><td>{"重要な注意"}</td><td>{"19770-1に適合しても、ISO 55001に適合したことにはならない"}</td></tr></tbody></table>{" "}</div>{" "}
    </>;
}
