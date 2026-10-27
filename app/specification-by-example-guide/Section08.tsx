import React from 'react';

export default function Section08() {
    return (
        <>
            <section className="section prose" id="s8">
                <h2>
                    <i className="ti ti-tools"></i>
                    {'8. 主要ツールエコシステム'}
                </h2>
                <p>
                    {
                        '\n                        SbE /\n                        BDDを実践するための代表的なオープンソースツールを整理します。いずれもGherkin(またはそれに準ずる自然言語記法)でシナリオを記述し、対応言語のステップ定義と結びつけて自動実行する点は共通しています。\n                    '
                    }
                </p>
                <div className="table-wrap">
                    <div className="table-title">
                        <i className="ti ti-tools"></i>
                        {'SbE / BDD 主要ツール一覧\n                        '}
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>{'ツール'}</th>
                                <th>{'主な対象言語'}</th>
                                <th>{'特徴'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{'Cucumber'}</td>
                                <td>{'Ruby / Java / JavaScript / Kotlin など多数'}</td>
                                <td>
                                    {
                                        '\n                                        Gherkin構文を広めた代表的な実装。Example\n                                        Mapping・Anti-patternsなど実践知の発信元でもある\n                                    '
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>{'JBehave'}</td>
                                <td>{'Java'}</td>
                                <td>
                                    {
                                        '\n                                        Dan\n                                        North氏が2003年に開発を始めた、歴史上最初期のBDDフレームワーク\n                                    '
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>{'Behave'}</td>
                                <td>{'Python'}</td>
                                <td>{'Pythonエコシステムで広く使われるGherkin実装'}</td>
                            </tr>
                            <tr>
                                <td>{'Reqnroll(旧SpecFlow)'}</td>
                                <td>{'.NET'}</td>
                                <td>
                                    {
                                        '\n                                        .NET向けの代表的なGherkin実装。SpecFlowは2024年末に開発元Tricentisによって公式にEnd-of-Life(提供終了)が発表され、コミュニティによるフォークであるReqnrollが後継として開発が続けられている\n                                    '
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://cucumber.io/docs/bdd/history/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Cucumber公式「History of BDD」'}
                    </a>
                    {'\n                        /\n                        '}
                    <a
                        href="https://reqnroll.net/news/2025/01/specflow-end-of-life-has-been-announced/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Reqnroll公式「SpecFlow end-of-life has been announced」'}
                    </a>
                    {'\n                        /\n                        '}
                    <a href="https://reqnroll.net/" target="_blank" rel="noopener noreferrer">
                        {'Reqnroll公式サイト'}
                    </a>
                </p>
                <div className="callout callout-warn">
                    <i className="ti ti-alert-triangle"></i>
                    <p>
                        <strong>{'注意:'}</strong>
                        {
                            '\n                            ツールはあくまで「⑤検証を自動化する」パターンを実現する手段です。ツール導入から入ってしまう(＝Three\n                            AmigosやExample\n                            Mappingを省略していきなりGherkinファイルを書き始める)ことは、7章で紹介したアンチパターンの温床になりやすい点に注意してください。\n                        '
                        }
                    </p>
                </div>
            </section>
        </>
    );
}
