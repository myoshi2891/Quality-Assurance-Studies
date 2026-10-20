import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Section09() {
    return <section id="sec9">
        <div className="sec-head">
            <i className="ti ti-scale">

            </i>
            <h2>
                {"9. 批判的に読む"}
            </h2>
        </div>
        <p>
            {" 権威ある本の主張であっても鵜呑みにせず、根拠を検証する姿勢が欠かせません。Crosbyの品質コストの考え方自体は現在も広く支持されていますが、そこから派生して業界で独り歩きした「欠陥修正コストの指数関数的増大カーブ」（しばしば「1x/6.5x/15x/100x」のような表で紹介される）については、近年の調査で重大な疑義が呈されています。 "}
        </p>
        <p>
            {" フランスの著名なアジャイル実践者であり、2006年のAgile AllianceのGordon Pask賞受賞者でもあるLaurent Bossavitは、著書"}
            <em>
                {"The Leprechauns of Software Engineering"}
            </em>
            {"（2013年初版）の中で、この「コスト曲線」の出典を丹念に遡り、しばしば根拠として引用される「IBM System Science Institute」の研究について、公表された論文としての実在が確認できないことを指摘しました。この調査はBudgetOverrun.comなど、複数の独立した検証記事でも追認されています。 "}
        </p>
        <div className="diagram-block">
            <div className="diagram-caption">
                {"図7: 「コスト曲線」の主張と検証結果"}
            </div>
            <ChapterDiagram id="dg-critique" />
        </div>
        <div className="table-wrap">
            <div className="table-title" id="qif-sec9-table">
                {"コスト曲線をめぐる論点整理"}
            </div>
            <table aria-labelledby="qif-sec9-table">
                <thead>
                    <tr>
                        <th>
                            {"論点"}
                        </th>
                        <th>
                            {"評価"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {" 「後工程で見つかった不具合ほど修正コストが高い」という"}
                            <strong>
                                {"方向性"}
                            </strong>
                        </td>
                        <td>
                            {" Barry BoehmやBoehm and Basili（2001）など複数の独立研究が支持しており、経験則として妥当性が高い "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {" 「1x/6.5x/15x/100x」のような"}
                            <strong>
                                {"具体的な固定倍率"}
                            </strong>
                        </td>
                        <td>
                            {" 出典が孫引きの繰り返しによって誇張・単純化されたものであり、元となる一次データが確認できない "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"実務上の教訓"}
                        </td>
                        <td>
                            {" シフトレフトという"}
                            <strong>
                                {"方向性の判断"}
                            </strong>
                            {"には使ってよいが、ROI試算などに"}
                            <strong>
                                {"具体的な倍率の数字"}
                            </strong>
                            {"をそのまま流用するのは避けるべき "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" Bossavit自身も、この種の「業界のleprechaun（言い伝えだけの妖精）」を暴くことの目的は、シフトレフトや予防重視という結論そのものを否定することではなく、「なぜそれが正しいと言えるのか」を自分の頭で検証する姿勢を、ソフトウェア工学というまだ若い専門分野に根付かせることにある、と述べています。これはCrosby自身が本書で繰り返し説く「品質は測定できるものでなければならない」という精神とも、実は矛盾しません。数字を使うなら、その数字の出所を必ず確認する——これもまた一つの「品質」の実践です。 "}
        </p>
    </section>;
}
