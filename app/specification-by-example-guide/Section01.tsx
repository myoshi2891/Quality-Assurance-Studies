import React from 'react';

export default function Section01() {
    return (
        <>
            <section className="section prose" id="s1">
                <h2>
                    <i className="ti ti-bulb"></i>
                    {'1. Specification by Exampleとは何か'}
                </h2>
                <p>
                    {'\n                        Specification by Example(実例による仕様化)とは、'}
                    <strong>
                        {
                            '具体的で現実的な「例」を使ってソフトウェアの要件を協働で定義し、その例をそのまま自動テストとして継続的に実行することで、「検証済みの例がカバーする範囲に限って」最新かつ信頼できるドキュメント(Living\n                            Documentation)を維持する'
                        }
                    </strong>
                    {
                        '開発プラクティスです。裏を返せば、例として書き起こされていない要件、誤った前提で書かれた例、自動テスト化されていない例については信頼性は保証されません。ドキュメントの信頼性は、あくまで「自動テストが通っている具体例の範囲」に限定されます。\n                    '
                    }
                </p>
                <p>
                    {
                        '\n                        この言葉と体系を世に広めたのは、UK在住のコンサルタントであるGojko\n                        Adzic氏です。氏は2011年に出版した書籍の中で、世界中の30チーム・50以上のプロジェクトを調査した経験から、この手法を効果的に機能させるための「7つのキー・プロセスパターン」を導き出しました。同書は2012年のJolt\n                        Award(最優秀書籍部門)を受賞しています。\n                    '
                    }
                </p>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://www.oreilly.com/library/view/specification-by-example/9781617290084/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {"Specification by Example(O'Reilly掲載ページ)"}
                    </a>
                    {'\n                        /\n                        '}
                    <a
                        href="https://gojko.net/books/specification-by-example/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Gojko Adzic公式サイトの書籍紹介ページ'}
                    </a>
                </p>
                <h3>{'SbEがもたらす4つの効果'}</h3>
                <p>
                    {
                        "\n                        O'Reillyの書籍紹介によれば、この手法がもたらす主な効果は次の4点に整理されています。\n                    "
                    }
                </p>
                <div className="table-wrap">
                    <div className="table-title">
                        <i className="ti ti-list-check"></i>
                        {'SbEがもたらす主な効果\n                        '}
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>{'#'}</th>
                                <th>{'もたらされる効果'}</th>
                                <th>{'内容'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{'1'}</td>
                                <td>{'生きた・信頼できるドキュメントの生成'}</td>
                                <td>{'実行可能な例＝ドキュメントとなり、コードと乖離しない'}</td>
                            </tr>
                            <tr>
                                <td>{'2'}</td>
                                <td>{'期待値の明確化と検証の効率化'}</td>
                                <td>{'「合格 / 不合格」を誰もが一目で判断できる'}</td>
                            </tr>
                            <tr>
                                <td>{'3'}</td>
                                <td>{'手戻りの削減'}</td>
                                <td>{'実装前に認識のズレを解消できる'}</td>
                            </tr>
                            <tr>
                                <td>{'4'}</td>
                                <td>{'「正しいものを作れている」という確信'}</td>
                                <td>{'ビジネス側と開発側の双方が安心して開発を進められる'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://www.oreilly.com/library/view/specification-by-example/9781617290084/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {"Specification by Example(O'Reilly掲載ページ)"}
                    </a>
                </p>
                <div className="callout callout-info">
                    <i className="ti ti-bulb"></i>
                    <p>
                        <strong>{'初学者向けポイント:'}</strong>
                        {
                            '\n                            SbEは特定のツール(CucumberやGherkinなど)を指す言葉ではありません。あくまで「例を中心に協働で仕様を作り、それを自動検証し、ドキュメントとして維持し続ける」という'
                        }
                        <strong>{'プロセス・考え方'}</strong>
                        {'です。ツールはその実現手段の一つに過ぎません。\n                        '}
                    </p>
                </div>
            </section>
        </>
    );
}
