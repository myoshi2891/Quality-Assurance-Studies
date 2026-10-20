import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Section04() {
    return <section id="sec4">
        <div className="sec-head">
            <i className="ti ti-certificate">

            </i>
            <h2>
                {"4. 品質の4つの絶対原則"}
            </h2>
        </div>
        <p>
            {" Crosbyの思想の中核が、この「4つの絶対原則（Four Absolutes of Quality Management）」です。それぞれが「世間でよくある誤解」に対するアンチテーゼとして提示されています。 "}
        </p>
        <div className="diagram-block">
            <div className="diagram-caption">
                {"図2: 品質の4つの絶対原則"}
            </div>
            <ChapterDiagram id="dg-absolutes" />
        </div>
        <div className="table-wrap">
            <div className="table-title">
                {"4つの絶対原則とソフトウェアでの読み替え"}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            {"#"}
                        </th>
                        <th>
                            {"絶対原則"}
                        </th>
                        <th>
                            {"よくある誤解"}
                        </th>
                        <th>
                            {"Crosbyの主張"}
                        </th>
                        <th>
                            {"ソフトウェアでの読み替え"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {"品質の定義"}
                        </td>
                        <td>
                            {"品質＝「良いもの」「豪華なもの」という曖昧な感覚"}
                        </td>
                        <td>
                            {"品質とは"}
                            <strong>
                                {"要求仕様への適合"}
                            </strong>
                            {"である"}
                        </td>
                        <td>
                            {" 「良いコード」ではなく「受け入れ基準を満たしているか」で判断する "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"品質を生むシステム"}
                        </td>
                        <td>
                            {"検査を強化すれば品質は上がる"}
                        </td>
                        <td>
                            {" 品質を生むのは"}
                            <strong>
                                {"予防"}
                            </strong>
                            {"であり、検査は既に起きた不良を見つけるだけ "}
                        </td>
                        <td>
                            {" 後工程のテストだけに頼らず、設計レビューやペアプログラミングで上流から欠陥を防ぐ "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"パフォーマンス基準"}
                        </td>
                        <td>
                            {"「まあこのくらいのバグは仕方ない」という許容ライン"}
                        </td>
                        <td>
                            {"基準は"}
                            <strong>
                                {"ゼロ・ディフェクト"}
                            </strong>
                            {"であるべき"}
                        </td>
                        <td>
                            {" 「バグ密度の目標値」ではなく「そもそも作り込まない」文化（TDD、静的解析の強制） "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"測定方法"}
                        </td>
                        <td>
                            {"品質指数やスコアのような抽象的な指標"}
                        </td>
                        <td>
                            {"品質は"}
                            <strong>
                                {"不適合のコスト（金額）"}
                            </strong>
                            {"で測る"}
                        </td>
                        <td>
                            {" インシデント対応工数、リワーク時間、本番障害の損失額を金額で可視化する "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" 初学者がつまずきやすいのは3番目の「ゼロ・ディフェクト」です。これは「絶対にミスを許さない恐怖政治」という意味ではなく、"}
            <strong>
                {"「妥協的な合格ラインを設定した瞬間に、そこまでの不良は許容されてしまう」という人間心理への警鐘"}
            </strong>
            {"として読むのが正しい理解です。 "}
        </p>
    </section>;
}
