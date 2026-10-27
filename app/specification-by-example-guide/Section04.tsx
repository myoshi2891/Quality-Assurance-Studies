import React from 'react';
import Diagram from './Diagram';

export default function Section04() {
    return (
        <>
            <section className="section prose" id="s4">
                <h2>
                    <i className="ti ti-route"></i>
                    {'4. 全体プロセス: 7つのキー・プロセスパターン'}
                </h2>
                <p>
                    {
                        '\n                        Gojko Adzic氏は書籍第2部「Key Process\n                        Patterns」で、SbEを実践するチームに共通する7つのパターンを紹介しています。これらは厳密な手順(ウォーターフォール)ではなく、チームが「次の作業に取り掛かる準備ができたとき」に、循環的(サイクリック)に繰り返される緩やかなガイドラインとして提示されている点が重要です。\n                    '
                    }
                </p>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://gist.github.com/rpivo/1469476d9c4cd3ea41f8709eaae94920"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'The Key Process Patterns From Specification by Example(要約まとめ)'}
                    </a>
                    {'\n                        /\n                        '}
                    <a
                        href="https://www.oreilly.com/library/view/specification-by-example/9781617290084/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {"Specification by Example(O'Reilly目次ページ)"}
                    </a>
                </p>
                <div className="mermaid-wrap">
                    <Diagram id="diag-cycle" />
                </div>
                <p className="mermaid-caption">
                    {
                        '\n                        図2: SbEの7つのキー・プロセスパターン(循環プロセス)\n                    '
                    }
                </p>
                <h3>{'各パターンの目的一覧'}</h3>
                <div className="table-wrap">
                    <div className="table-title">
                        <i className="ti ti-route"></i>
                        {'7つのキー・プロセスパターンと目的\n                        '}
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>{'#'}</th>
                                <th>{'パターン名(原著)'}</th>
                                <th>{'目的・問いかけ'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{'1'}</td>
                                <td>{'Deriving scope from goals'}</td>
                                <td>
                                    {
                                        '\n                                        このビジネスゴールを達成するために、本当に必要な機能は何か\n                                    '
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>{'2'}</td>
                                <td>{'Specifying collaboratively'}</td>
                                <td>
                                    {
                                        '\n                                        ビジネス・開発・QAが一緒に仕様を作れているか(Three Amigos)\n                                    '
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>{'3'}</td>
                                <td>{'Illustrating using examples'}</td>
                                <td>
                                    {
                                        '\n                                        抽象的なルールを、誰もが誤解しない具体例で説明できているか\n                                    '
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>{'4'}</td>
                                <td>{'Refining the specification'}</td>
                                <td>{'その例は曖昧さなく、実行可能な形になっているか'}</td>
                            </tr>
                            <tr>
                                <td>{'5'}</td>
                                <td>{'Automating validation without changing specifications'}</td>
                                <td>{'人間が読む形式を保ったまま、自動テスト化できているか'}</td>
                            </tr>
                            <tr>
                                <td>{'6'}</td>
                                <td>{'Validating frequently'}</td>
                                <td>{'CI/CDで継続的に、素早く検証できているか'}</td>
                            </tr>
                            <tr>
                                <td>{'7'}</td>
                                <td>{'Evolving a documentation system'}</td>
                                <td>{'検証済みの例は、資産として整理・維持されているか'}</td>
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
                        {"Specification by Example(O'Reilly目次ページ)"}
                    </a>
                </p>
            </section>
        </>
    );
}
