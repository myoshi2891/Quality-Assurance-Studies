import React from 'react';
import Diagram from './Diagram';

export default function Section09() {
    return <>
<h2 id="step-9-導入ロードマップ実務の進め方">{" "}<span className="step-num">{"STEP 9"}</span>{"導入ロードマップ（実務の進め方） "}</h2>{" "}<div className="callout callout-info">{" "}<span aria-hidden="true" className="callout-icon">{"📝"}</span>{" "}<div className="callout-body">{" "}<p>{" 規格自体は「導入のステップ順序」を定めていません。以下は、公開されている実務解説を踏まえた"}<strong>{"一般的な進め方の例"}</strong>{"です。 "}</p>{" "}</div>{" "}</div>{" "}<Diagram id="mermaid-diagram-8" />{" "}<h3 id="実務のコツflexera社ブログの要点を整理">{" 実務のコツ（Flexera社ブログの要点を整理） "}</h3>{" "}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="実務のコツflexera社ブログの要点を整理">{" "}<table><thead><tr className="header"><th>{"観点"}</th><th>{"ポイント"}</th></tr></thead><tbody><tr className="odd"><td>{"進め方"}</td><td>{" まず低い所から段階的に。対象範囲は契約種別、リスク、更新時期などで優先づける "}</td></tr><tr className="even"><td>{"体制"}</td><td>{" ITAMチームだけでなく、情報セキュリティ、調達、財務、ITSM等と"}<strong>{"横断的に"}</strong>{"進める "}</td></tr><tr className="odd"><td>{"最適化の順序"}</td><td>{" 把握が不十分な段階での最適化は避ける。ただし、クラウドやSaaSで早期に成果を出す並行戦略もある "}</td></tr><tr className="even"><td>{"よくある課題"}</td><td>{" データのサイロ化、手作業での正規化、契約情報の粒度不足、ユーザーとアプリの利用関係が不明 "}</td></tr></tbody></table>{" "}</div>{" "}
    </>;
}
