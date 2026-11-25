import React from 'react';
import Diagram from './Diagram';
/** 第4章 組織テストプロセス（第6章） — preserve the complete source order and inline text. */
export default function Section05() {
    return (
        <>
            <h2 id="第4章-組織テストプロセス第6章">{'第4章　組織テストプロセス（第6章）'}</h2>
            {'\n'}
            <p className="callout">
                {
                    '💡\nこの章では、組織全体のテストの「ルールブック」を作り、保つ第1層のプロセスを説明します。第5章の「テスト計画」が、このルールブックを土台にしている点を意識して読んでください。'
                }
            </p>
            {'\n'}
            <h3 id="4-1-なぜ必要か">{'4-1　なぜ必要か'}</h3>
            {'\n'}
            <p>
                {
                    'プロジェクトのたびに「テストはどこまでやるのか」「どんな文書を残すのか」を議論していると、時間がかかるうえ、品質にばらつきが出ます。'
                }
                <strong>{'組織として共通の方針を持つ'}</strong>
                {
                    'ことで、各プロジェクトは同じ土台から計画を作れます。会社の「就業規則」にあたるものと考えると分かりやすいでしょう。'
                }
            </p>
            {'\n'}
            <h3 id="4-2-何を作るか">{'4-2　何を作るか'}</h3>
            {'\n'}
            <p>
                {'組織テストプロセスで扱う主な成果物は、'}
                <strong>{'組織テスト仕様（Organizational\nTest Specification）'}</strong>
                {
                    ' です。Part\n3の文書化規格（2021年版）では、組織テスト仕様の代表例として次の2つの文書を挙げています。これですべてではなく、組織によってはほかの文書も組織テスト仕様に含まれます。'
                }
            </p>
            {'\n'}
            <div className="table-scroll" tabIndex={0} role="region" aria-label="4-2　何を作るか">
                <table>
                    <thead>
                        <tr className="header">
                            <th>{'文書'}</th>
                            <th>{'役割'}</th>
                            <th>{'たとえ'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td>{'組織テストポリシー（Organizational Test Policy）'}</td>
                            <td>{'組織がテストに何を求めるかの方針'}</td>
                            <td>{'憲法'}</td>
                        </tr>
                        <tr className="even">
                            <td>{'組織テストプラクティス（Organizational Test Practices）'}</td>
                            <td>
                                {
                                    '方針を実現するための組織共通のテストの進め方（2013年版の「組織テスト戦略」にあたる）'
                                }
                            </td>
                            <td>{'法律'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {'\n'}
            <h3 id="4-3-アクティビティ">{'4-3　アクティビティ'}</h3>
            {'\n'}
            <p>
                {
                    '2013年版の目次では、組織テストプロセスは3つのアクティビティで構成されています。2021年版も第6.2節に同名のプロセスがあります。アクティビティ単位の名称は、2021年版の目次では確認できていないため、🔎として扱ってください。'
                }
            </p>
            {'\n'}
            <div
                className="table-scroll"
                tabIndex={0}
                role="region"
                aria-label="4-3　アクティビティ"
            >
                <table>
                    <thead>
                        <tr className="header">
                            <th>{'略号'}</th>
                            <th>{'アクティビティ'}</th>
                            <th>{'内容'}</th>
                            <th>{'確認度'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td>{'OT1'}</td>
                            <td>
                                {
                                    '組織テスト仕様を作る（Develop Organizational Test\nSpecification）'
                                }
                            </td>
                            <td>{'方針と戦略を文書にする'}</td>
                            <td>{'🔎'}</td>
                        </tr>
                        <tr className="even">
                            <td>{'OT2'}</td>
                            <td>{'使用状況を監視し制御する（Monitor and Control Use）'}</td>
                            <td>{'各プロジェクトが方針に従っているか確認する'}</td>
                            <td>{'🔎'}</td>
                        </tr>
                        <tr className="odd">
                            <td>{'OT3'}</td>
                            <td>
                                {
                                    '組織テスト仕様を更新する（Update Organizational Test\nSpecification）'
                                }
                            </td>
                            <td>{'現場の結果をふまえて見直す'}</td>
                            <td>{'🔎'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {'\n'}
            <p>
                {
                    'この図は、組織テスト仕様が「作る → 使われる →\n見直す」と循環する様子を表しています。'
                }
            </p>
            {'\n'}
            <div
                className="mermaid-diagram"
                id="mmd5"
                tabIndex={0}
                role="region"
                aria-label="図5（横スクロール可能）"
            >
                <Diagram index={4} />
            </div>
            {'\n'}
            <p>{'各ノードの意味：'}</p>
            {'\n'}
            <ul>
                {'\n'}
                <li>{'OT1：最初の版を作る。既存の社内ルールを整理するところから始めてもよい'}</li>
                {'\n'}
                <li>{'「各プロジェクトが計画に取り込む」：第5章のテスト戦略・計画で参照される'}</li>
                {'\n'}
                <li>
                    {
                        'OT2：ルールが現場で形骸化していないか、逆に現場に合わず守れていないのかを確認する'
                    }
                </li>
                {'\n'}
                <li>
                    {'OT3：確認結果を反映する。ここで第2層から戻ってくる完了報告や教訓が使われる'}
                </li>
                {'\n'}
            </ul>
            {'\n'}
            <h3 id="4-4-初学者が誤解しやすい点">{'4-4　初学者が誤解しやすい点'}</h3>
            {'\n'}
            <ul>
                {'\n'}
                <li>
                    {'「組織テストプロセス」は、1回作って終わりの文書作成ではありません。'}
                    <strong>{'更新までがワンセット'}</strong>
                    {'です。'}
                </li>
                {'\n'}
                <li>
                    {
                        '小さなチームでも、共通の方針（たとえば「リリース前に必ず回帰テストを実行する」）を持つなら、すでに第1層を実践しています。'
                    }
                </li>
                {'\n'}
            </ul>
            {'\n'}
            <div className="glossary">
                <p>{'📖 この章で登場した用語'}</p>
                <ul>
                    {'\n'}
                    <li>
                        {
                            '組織テスト仕様：組織全体のテストの方針や進め方を定める文書の総称。代表例は組織テストポリシーと組織テストプラクティスで、これらに限らない'
                        }
                    </li>
                    {'\n'}
                    <li>{'組織テストポリシー：テストの目的と原則を示す、組織レベルの短い方針'}</li>
                    {'\n'}
                    <li>
                        {
                            '回帰テスト：変更したときに、以前動いていた部分が壊れていないかを確かめるテスト'
                        }
                    </li>
                    {'\n'}
                    <li>{'形骸化：ルールが存在するだけで、実際には守られていない状態'}</li>
                    {'\n'}
                </ul>
            </div>
            {'\n\n'}
            <hr />
            {'\n'}
        </>
    );
}
