import React from 'react';

export default function Practice07() {
    return (
        <>
            <h3 id="s5-7">
                {
                    '\n                        ステップ7: ドキュメントシステムを進化させる (Living Documentation)\n                    '
                }
            </h3>
            <p>
                {
                    '\n                        自動検証され続けている例の集合は、単なるテストコードではなく「常に正しいことが保証されたドキュメント」＝Living\n                        Documentation(生きたドキュメント)として機能します。この概念をさらに体系化したのが、Arolla社CTOのCyrille\n                        Martraire氏による2019年の書籍『Living Documentation: Continuous Knowledge\n                        Sharing by Design』です。\n                    '
                }
            </p>
            <p>
                {
                    '\n                        InfoQのインタビューでMartraire氏は、従来のドキュメントが抱える根本的な問題は「信用できないこと」(情報が欠落・陳腐化・誤解を招く状態になりがちなこと)だと述べ、コードと同じペースで進化するドキュメントを目指すべきだと主張しています。氏はドメイン駆動設計(DDD)の考え方を応用し、ビジネスゴールの設定からドメイン知識、アーキテクチャ、設計、デプロイに至るまで、あらゆる局面でドキュメントを「生かす」手法を体系化しました。\n                    '
                }
            </p>
            <p className="callout source">
                <i className="ti ti-link"></i>
                {'出典:\n                        '}
                <a
                    href="https://www.infoq.com/articles/book-review-living-documentation/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'InfoQ「Q&A with Cyrille Martraire on the Book Living Documentation」'}
                </a>
                {'\n                        /\n                        '}
                <a
                    href="https://www.oreilly.com/library/view/living-documentation-continuous/9780134689418/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"Living Documentation(O'Reilly掲載ページ)"}
                </a>
            </p>
            <p>
                <strong>{'実践のポイント'}</strong>
            </p>
            <ul>
                <li>
                    {
                        '\n                            Gherkinのフィーチャーファイルは、単なるテストではなく「読み物」として整理する(タグ・カテゴリ分けなど)\n                        '
                    }
                </li>
                <li>
                    {
                        '\n                            ドキュメントの生成・公開自体もCIで自動化し、常に最新版が閲覧できる状態を保つ\n                        '
                    }
                </li>
                <li>{'古くなった・使われなくなったシナリオは放置せず、定期的に棚卸しする'}</li>
            </ul>
        </>
    );
}
