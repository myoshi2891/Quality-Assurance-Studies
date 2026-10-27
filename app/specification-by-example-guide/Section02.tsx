import React from 'react';

export default function Section02() {
    return (
        <>
            <section className="section prose" id="s2">
                <h2>
                    <i className="ti ti-alert-triangle"></i>
                    {
                        '2. なぜ必要なのか:\n                        従来の要件定義が抱える問題\n                    '
                    }
                </h2>
                <p>
                    {
                        '\n                        Martin Fowler氏(ThoughtWorks)は2004年のブログ記事「Specification By\n                        Example」の中で、伝統的な仕様の書き方(事前条件・事後条件を厳密に定義する形式手法やDesign\n                        by\n                        Contractなど)には限界があると指摘しています。事前条件・事後条件を正確に書き切ることは、実際のコードを書くのと同じくらい難しい場合が多く、一方で「例」を使えば非技術者にとっても格段に理解しやすくなる、という趣旨を述べています。\n                    '
                    }
                </p>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://martinfowler.com/bliki/SpecificationByExample.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Martin Fowler「bliki: Specification By Example」'}
                    </a>
                </p>
                <p>
                    {
                        '\n                        さらにFowler氏は、例だけでは全ての振る舞いを網羅できないという弱点も認めた上で、「例による仕様は、理論的には不完全でも、実務においては形式手法より価値が高いことが多い」という立場を取っています。つまりSbEは万能ではなく、'
                    }
                    <strong>{'「対話」を代替するものではなく、対話を促進するための道具'}</strong>
                    {'である点が重要です。\n                    '}
                </p>
                <p>
                    {
                        '\n                        同記事は、仕様をテストとして先に書く「ダブルチェック」の価値にも触れています。同じ振る舞いをコード(実装)とテスト(例)という異なる手段で二重に表現することで、誤りを発見しやすくなるという考え方です。\n                    '
                    }
                </p>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://martinfowler.com/bliki/SpecificationByExample.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Martin Fowler「bliki: Specification By Example」'}
                    </a>
                </p>
                <h3>{'現場でよくある問題の整理'}</h3>
                <div className="table-wrap">
                    <div className="table-title">
                        <i className="ti ti-alert-triangle"></i>
                        {'従来の要件定義の問題とSbEの解決の方向性\n                        '}
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>{'従来の要件定義でよくある問題'}</th>
                                <th>{'SbEが提供する解決の方向性'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{'ドキュメントが実装から乖離し、誰も信用しなくなる'}</td>
                                <td>
                                    {
                                        '\n                                        例＝自動テストなので、失敗すればすぐドキュメントの陳腐化がわかる\n                                    '
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>{'要件が曖昧なまま実装に着手し、手戻りが発生する'}</td>
                                <td>{'実装前にThree Amigosで具体例をすり合わせる'}</td>
                            </tr>
                            <tr>
                                <td>{'ビジネス・QA・開発の間で用語や理解が食い違う'}</td>
                                <td>{'共通言語(ユビキタス言語)としての具体例を用いる'}</td>
                            </tr>
                            <tr>
                                <td>{'テストが「実装の後付け」になり形骸化する'}</td>
                                <td>{'例を先に合意し、それをそのまま検証基準にする'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}
