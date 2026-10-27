import React from 'react';

export default function Practice01() {
    return (
        <>
            <h3 id="s5-1">{'ステップ1: ゴールからスコープを導く'}</h3>
            <p>
                {
                    '\n                        書籍の要約記事によれば、Gojko\n                        Adzic氏はこのパターンを「曖昧な要求をそのまま鵜呑みにせず、まずビジネスゴールに立ち返る」プロセスとして説明しています。チームは顧客のビジネスゴールから出発し、そのゴールを達成するために本当に必要なスコープを協働で定義します。ビジネス側は「何を」「なぜ」実現したいかという意図と期待価値の伝達に集中し、開発側はそれをより安く・早く・保守しやすい形で実現する解決策を提案する、という役割分担が推奨されています。\n                    '
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
            </p>
            <p>
                <strong>{'実践のポイント'}</strong>
            </p>
            <ul>
                <li>{'「この機能は何のビジネス指標に効くのか」を常に問い直す'}</li>
                <li>
                    {
                        '\n                            ゴールが曖昧なままだと、後続のスコープ・具体例・仕様のすべてが弱くなる(同記事はこの因果関係を明確に指摘しています)\n                        '
                    }
                </li>
                <li>{'大きすぎる要求は、ゴールを軸に分割する'}</li>
            </ul>
        </>
    );
}
