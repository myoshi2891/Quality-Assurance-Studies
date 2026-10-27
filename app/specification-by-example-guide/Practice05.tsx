import React from 'react';

export default function Practice05() {
    return (
        <>
            <h3 id="s5-5">{'ステップ5: 仕様を変えずに検証を自動化する'}</h3>
            <p>
                {
                    '\n                        このパターン名が示す通り、重要なのは「自動化のためにシナリオの文面を技術寄りに書き換えない」という点です。仕様(Gherkinのシナリオ)はあくまで人間が読むためのものであり、その裏側の実装(ステップ定義)だけを技術的に構築します。Cucumberチームは、UIの操作手順をそのままシナリオに落とし込む書き方(実装への依存)を代表的なアンチパターンとして警告しています。詳細は7章で扱います。\n                    '
                }
            </p>
            <p className="callout source">
                <i className="ti ti-link"></i>
                {'出典:\n                        '}
                <a
                    href="https://cucumber.io/docs/guides/anti-patterns/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'Cucumber公式「Anti-patterns」'}
                </a>
            </p>
            <p>
                <strong>{'実践のポイント'}</strong>
            </p>
            <ul>
                <li>{'シナリオの文面(Gherkin)とステップ定義(実装コード)を明確に分離する'}</li>
                <li>{'UIの実装が変わってもシナリオ文面は変わらないように設計する'}</li>
                <li>
                    {
                        '\n                            ドメインロジック層・APIレイヤーなど、UIより下のレイヤーで検証できる構成を検討する\n                        '
                    }
                </li>
            </ul>
        </>
    );
}
