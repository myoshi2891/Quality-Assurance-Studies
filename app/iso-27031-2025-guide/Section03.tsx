import React from "react";
import Diagram from "./Diagram";

/** 事業継続・情報セキュリティの関連規格との関係を示す。 */
export default function Section03() {
    return (
        <>
<h2 id="3-この規格はどこに位置づく関連規格マップ">{`
                3. この規格はどこに位置づく？（関連規格マップ）
            `}</h2>{`
`}<p>{`
                ISO/IEC 27031
                は単独で完結せず、`}<strong>{`事業継続の規格群`}</strong>{`と`}<strong>{`情報セキュリティの規格群`}</strong>{`の橋渡しをします。
            `}</p>{`
`}<p>{`
                規格の序文では、27031が ISO/IEC 27002 の事業継続関連コントロールを補完し、ISO/IEC
                27005
                の情報セキュリティリスクマネジメントを支援する、と述べられています。また、適用範囲の引用規格には
                ISO 22301、ISO/IEC 27035-1:2023 なども挙がっています。
            `}</p>{`
`}<Diagram id="mmd-1" />{`
`}<h3 id="31-初学者向け3つの規格の役割分担">{`3.1 初学者向け：3つの規格の役割分担`}</h3>{`
`}<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="31-初学者向け3つの規格の役割分担">{`
                `}<table><thead><tr className="header"><th>{`規格`}</th><th>{`一言でいうと`}</th><th>{`27031との関係`}</th></tr></thead><tbody><tr className="odd"><td>{`ISO 22301`}</td><td>{`組織全体の事業継続の仕組みを作るための要求事項`}</td><td>{`27031は、その中の`}<strong>{`ICT部分の準備`}</strong>{`を深掘りする`}</td></tr><tr className="even"><td>{`ISO/IEC 27001 / 27002`}</td><td>{`情報セキュリティを管理する仕組みと対策集`}</td><td>{`27031は、`}<strong>{`ICT継続の観点`}</strong>{`でそれを補完する`}</td></tr><tr className="odd"><td>{`ISO/IEC 27031`}</td><td>{`ICTが事業継続を支えられる状態を作る手引き`}</td><td>{`上記2つの間をつなぐ`}</td></tr></tbody></table>{`
            `}</div>{`
`}<blockquote>{`
                `}<p>{`
                    補足：専門家の中には、「ISO
                    22301がこの領域をすでによくカバーしており、ICT災害復旧そのものは ISO/IEC 24762
                    が扱う」という指摘もあります（iso27001security.com の解説）。ただし ISO/IEC
                    24762:2008（ICT災害復旧サービスの指針）はすでに廃止（withdrawn）されており、歴史的には
                    ICT
                    災害復旧サービスの指針を担っていた規格です。27031は「ICT側の準備」に焦点を当てる位置づけ、と理解すると整理しやすいです。
                `}</p>{`
            `}</blockquote>
        </>
    );
}
