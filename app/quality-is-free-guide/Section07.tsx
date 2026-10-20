import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Section07() {
    return <section id="sec7">
        <div className="sec-head">
            <i className="ti ti-chart-dots">

            </i>
            <h2>
                {"7. 成熟度グリッド"}
            </h2>
        </div>
        <p>
            {" Crosbyは、組織の品質に対する成熟度を測るための簡易ツールとして「品質管理成熟度グリッド（Quality Management Maturity Grid, QMMG）」を提示しました。これは「経営者の品質理解」「問題処理」「品質コスト」など6つのカテゴリーについて、組織が5段階のどこにいるかを診断する5×6のマトリクスです。 "}
        </p>
        <div className="diagram-block">
            <div className="diagram-caption">
                {"図5: 品質管理成熟度グリッドの5段階"}
            </div>
            <ChapterDiagram id="dg-maturity" />
        </div>
        <div className="table-wrap">
            <div className="table-title">
                {"成熟度グリッドの5段階"}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            {"段階"}
                        </th>
                        <th>
                            {"名称"}
                        </th>
                        <th>
                            {"特徴"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {"Uncertainty（不確実）"}
                        </td>
                        <td>
                            {" 品質は理解されておらず、問題への対応は事後的・反応的 "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"Awakening（気づき）"}
                        </td>
                        <td>
                            {" 品質の重要性に気づき始めるが、取り組みは断片的で場当たり的 "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"Enlightenment（啓発）"}
                        </td>
                        <td>
                            {"予防を重視した体系だった手法・基準が整い始める"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"Wisdom（英知）"}
                        </td>
                        <td>
                            {"品質改善が組織文化の一部として定着している"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"5"}
                        </td>
                        <td>
                            {"Certainty（確信）"}
                        </td>
                        <td>
                            {" 品質マネジメントが特別な取り組みではなく、日常業務そのものになっている "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" このグリッドは、10年後に登場するソフトウェア工学のCapability Maturity Model（CMM）の直接の先駆けと位置づけられています。ソフトウェアの成熟度モデル（CMM/CMMI）に馴染みのあるエンジニアであれば、「Initial → Repeatable → Defined → Managed → Optimizing」という5段階の構造がCrosbyのこのグリッドと酷似していることにすぐ気づくはずです。つまり、私たちが日常的に接しているソフトウェアプロセス成熟度という概念のルーツは、1979年のこの本にまで遡れるのです。 "}
        </p>
    </section>;
}
