import React from 'react';

export default function Section11() {
  return (
    <section>
<h2 id="step-11この規格をめぐる議論を知っておく">
                        STEP 11：この規格をめぐる議論を知っておく
                    </h2>
                    <p>
                        29119シリーズ（特に初期の2013〜2016年の各パート）は、テストコミュニティで大きな議論を呼びました。中立的に整理します。
                    </p>
                    <h3 id="11-1-議論の概要">11-1. 議論の概要</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>立場</th>
                                    <th>主な論点</th>
                                    <th>代表的な発信者・出典</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>反対（コンテキスト駆動テストの立場）</td>
                                    <td>
                                        規格がテストを文書化中心の作業にしてしまう懸念。コンテキスト駆動の考え方が策定過程で十分に反映されなかったという主張。標準化の動機への疑問
                                    </td>
                                    <td>
                                        James Bach、Michael Bolton、James Christie（CAST
                                        2014）、Huib Schoots
                                        など。国際ソフトウェアテスト協会（ISST）が中止を求める署名活動を実施（InfoQ、SD
                                        Times）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>推進側</td>
                                    <td>
                                        国際的に合意された共通の枠組みを提供する。リスクベースドテストを基盤とする。規格は組織が使える柔軟なもの
                                    </td>
                                    <td>
                                        Stuart Reid（WG26議長）が2014年9月に反論を発信（Wikipedia
                                        系資料、SoftwareTestPro など）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>中立的見解</td>
                                    <td>
                                        大半のテスターはこの論争に関与していない。単一の学派や規格でテスト世界を定義できない
                                    </td>
                                    <td>SD Times 編集部の論説</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="11-2-2022年版の読み方への示唆">11-2. 2022年版の読み方への示唆</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>観点</th>
                                    <th>2022年版Part 1に見られる点（序文・目次による）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>探索的テスト</td>
                                    <td>
                                        4.4.3
                                        でスクリプト化テストと<strong>並べて</strong>扱われ、用語定義も立てられている
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>経験ベース</td>
                                    <td>
                                        4.4.5
                                        に専用節があり、エラー推測・チェックリスト・ツアーなどに言及
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>適合の柔軟性</td>
                                    <td>
                                        序文で<strong>調整適合（tailored conformance）</strong
                                        >を明示
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>位置付け</td>
                                    <td>
                                        Part 1
                                        自体は<strong>情報提供</strong>で、要求事項を課す文書ではない
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <aside className="callout callout-warn">
                        <div className="callout-title">重要</div>
                        <div className="callout-body">
                            <p>
                                重要：上記は規格の記述を示すもので、論争の当事者が2022年版をどう評価しているかを示すものではありません。批判的視点も含めて<strong>自分の現場で何が役立つかを検討する</strong>姿勢が大切です。
                            </p>
                        </div>
                    </aside>
                    <h3 id="11-3-istqbとの関係">11-3. ISTQBとの関係</h3>
                    <p>
                        ポーランドのテスターコミュニティ（testerzy.pl）の紹介では、本規格はISTQB
                        Foundation Level
                        のシラバスに<strong>部分的に取り込まれている</strong>ため、元の定義に当たる意義があると述べられています。ISTQB
                        の用語と本規格の用語は近いものが多いですが、定義の細部が異なる場合があるため、試験対策では各シラバスを正としてください。
                    </p>

                    
    </section>
  );
}