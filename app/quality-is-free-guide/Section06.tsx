import React from 'react';
import ChapterDiagram from './ChapterDiagram';

export default function Section06() {
    return <section id="sec6">
        <div className="sec-head">
            <i className="ti ti-stairs">

            </i>
            <h2>
                {"6. 品質改善の14ステップ"}
            </h2>
        </div>
        <p>
            {" 品質を組織に定着させるための実行プログラムが、有名な「14ステップ」です。Crosbyはこれを1つの部署やプロジェクトから始め、全社に広げていくロードマップとして提示しています。 "}
        </p>
        <div className="diagram-block">
            <div className="diagram-caption">
                {" 図4: 品質改善の14ステップ（フェーズごとに色分け） "}
            </div>
            <ChapterDiagram id="dg-steps" />
        </div>
        <div className="table-wrap">
            <div className="table-title" id="qif-sec6-table">
                {"14ステップ一覧"}
            </div>
            <table aria-labelledby="qif-sec6-table">
                <thead>
                    <tr>
                        <th>
                            {"Step"}
                        </th>
                        <th>
                            {"名称"}
                        </th>
                        <th>
                            {"内容"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {"1"}
                        </td>
                        <td>
                            {"経営層のコミットメント"}
                        </td>
                        <td>
                            {"経営陣が品質改善への本気度を明確に、全員に伝える"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"2"}
                        </td>
                        <td>
                            {"品質改善チームの結成"}
                        </td>
                        <td>
                            {"各部門から代表者を集めた横断チームを作る"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"3"}
                        </td>
                        <td>
                            {"品質の測定"}
                        </td>
                        <td>
                            {" 現状の品質問題がどこにあるかを可視化する仕組みを作る "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"4"}
                        </td>
                        <td>
                            {"品質コストの算定"}
                        </td>
                        <td>
                            {" 不良によって実際にいくら失っているかを金額で算出する "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"5"}
                        </td>
                        <td>
                            {"品質意識の向上"}
                        </td>
                        <td>
                            {"品質について前向きに話す文化を、全従業員に広める"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"6"}
                        </td>
                        <td>
                            {"是正処置"}
                        </td>
                        <td>
                            {" 見つかった問題を、その場しのぎでなく根本から解決する "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"7"}
                        </td>
                        <td>
                            {"ゼロ・ディフェクト計画委員会"}
                        </td>
                        <td>
                            {" ゼロ・ディフェクトの考え方を検討し、導入計画を立てる特別委員会 "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"8"}
                        </td>
                        <td>
                            {"監督者訓練"}
                        </td>
                        <td>
                            {"現場の管理職に品質の考え方と実践方法を教育する"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"9"}
                        </td>
                        <td>
                            {"ゼロ・ディフェクト・デー"}
                        </td>
                        <td>
                            {" 「品質への姿勢が変わった」ことを全員に体感させるイベントを開く "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"10"}
                        </td>
                        <td>
                            {"目標設定"}
                        </td>
                        <td>
                            {" 各チーム・各個人が、具体的で測定可能な改善目標を設定する "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"11"}
                        </td>
                        <td>
                            {"エラー原因の除去"}
                        </td>
                        <td>
                            {" 従業員自身が「目標達成の障害」を報告し、それを組織が取り除く "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"12"}
                        </td>
                        <td>
                            {"表彰"}
                        </td>
                        <td>
                            {"金銭ではなく、公の場での承認・称賛で貢献を評価する"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"13"}
                        </td>
                        <td>
                            {"品質評議会"}
                        </td>
                        <td>
                            {" 品質担当者たちが定期的に集まり、知見を共有し合う場を設ける "}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {"14"}
                        </td>
                        <td>
                            {"もう一度繰り返す"}
                        </td>
                        <td>
                            {" プログラムは12〜18ヶ月で一巡する。その後、新しいメンバーで再スタートする "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" ここで特に強調しておきたいのが"}
            <strong>
                {"Step 12（表彰）"}
            </strong>
            {"です。Crosbyは金銭的報酬よりも「公の場での承認」の方が効果的だと述べています。これはのちの行動科学・モチベーション研究（内発的動機づけの理論）とも符合する、先見性のある指摘です。 "}
        </p>
        <p>
            {" また"}
            <strong>
                {"Step 14（もう一度繰り返す）"}
            </strong>
            {"は、品質改善が「一度導入して終わり」のプロジェクトではなく、"}
            <strong>
                {"継続的なサイクル"}
            </strong>
            {"であることを明示しています。この考え方は、現代のアジャイル開発における「レトロスペクティブ」や、DevOpsにおける「継続的改善（Kaizen）」の思想と直接つながっています。 "}
        </p>
    </section>;
}
