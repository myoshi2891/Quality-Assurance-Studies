import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Section05() {
    return <section id="sec5">
        <div className="sec-head">
            <i className="ti ti-currency-dollar">

            </i>
            <h2>
                {"5. 品質コスト"}
            </h2>
        </div>
        <p>
            {" Crosbyが本書のタイトルの根拠としているのが、この「品質コスト（Cost of Quality, COQ）」というフレームワークです。 "}
        </p>
        <div className="diagram-block">
            <div className="diagram-caption">
                {" 図3: 品質コストの内訳（適合コストと不適合コスト） "}
            </div>
            <ChapterDiagram id="dg-coq" />
        </div>
        <div className="table-wrap">
            <div className="table-title">
                {"品質コストの4分類とソフトウェア開発の例"}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            {"分類"}
                        </th>
                        <th>
                            {"意味"}
                        </th>
                        <th>
                            {"製造業の例"}
                        </th>
                        <th>
                            {"ソフトウェア開発の例"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {"予防コスト"}
                        </td>
                        <td>
                            {"不良を未然に防ぐための投資"}
                        </td>
                        <td>
                            {"作業標準書、教育訓練"}
                        </td>
                        <td>
                            {" コーディング規約、設計レビュー、TDD、静的解析ツールの導入 "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"評価コスト"}
                        </td>
                        <td>
                            {"不良がないかを確認するための投資"}
                        </td>
                        <td>
                            {"抜き取り検査、監査"}
                        </td>
                        <td>
                            {" 単体・結合・E2Eテスト、コードレビュー、QAによる手動テスト "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"内部失敗コスト"}
                        </td>
                        <td>
                            {"リリース前に見つかった不良の手直し費用"}
                        </td>
                        <td>
                            {"手直し、廃棄、再検査"}
                        </td>
                        <td>
                            {" リリース前のバグ修正、再テスト、手戻りによる工数超過 "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"外部失敗コスト"}
                        </td>
                        <td>
                            {"顧客に届いた後に発覚した不良の費用"}
                        </td>
                        <td>
                            {"クレーム対応、返品、保証費用"}
                        </td>
                        <td>
                            {" 本番障害対応、緊急パッチ、SLA違反の賠償、顧客離反、ブランド毀損 "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" Crosbyの核心的な主張は、"}
            <strong>
                {"「予防コストへの投資を増やすと、評価コストと失敗コスト（特に外部失敗コスト）は、それを大きく上回る幅で減少する」"}
            </strong>
            {"というものです。適合コスト（POC）を適切に払うことで、不適合コスト（PONC）という「本来払わなくてよかったはずの罰金」を減らせる——だから差し引きで品質は「タダ」以上に「儲かる」というロジックです。 "}
        </p>
        <p>
            {" 多くの品質マネジメントの文献で、Crosbyのこの「conformance to requirements」という定義そのものが引用されています。ソフトウェア品質管理の分野で高く評価されているGerald M. Weinberg（"}
            <em>
                {"Perfect Software"}
            </em>
            {"の著者としても知られる、ソフトウェアテスト分野の国際的権威）も、著書『Quality Software Management: Systems Thinking』の中でCrosbyのこの定義を出発点として自身の議論を展開しています。 "}
        </p>
    </section>;
}
