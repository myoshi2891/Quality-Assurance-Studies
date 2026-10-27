import React from 'react';
import Diagram from './Diagram';

export default function Practice02() {
    return (
        <>
            <h3 id="s5-2">{'ステップ2: 協働で仕様化する (Three Amigos)'}</h3>
            <p>
                {
                    '\n                        このパターンの中核が「Three\n                        Amigos(3人の仲間)」と呼ばれる仕様ワークショップです。ビジネス視点・開発視点・QA(テスト)視点の最低3つの立場が同席し、実装に着手する前に共通理解を作ります。\n                    '
                }
            </p>
            <div className="mermaid-wrap">
                <Diagram id="diag-amigos" />
            </div>
            <p className="mermaid-caption">{'図3: Three Amigosの3つの視点'}</p>
            <p>
                {
                    '\n                        「Three Amigos」という用語自体は、Gojko\n                        Adzic氏ではなくアジャイルコーチのGeorge\n                        Dinwiddie氏が2009年のブログ記事で最初に用いたとAgile\n                        Allianceの用語集は説明しています。3人ちょうどという意味ではなく、少なくともビジネス・開発・テストの3つの視点を集めるべきだという「姿勢」を指す言葉である点が強調されています。\n                    '
                }
            </p>
            <p className="callout source">
                <i className="ti ti-link"></i>
                {'出典:\n                        '}
                <a
                    href="https://agilealliance.org/glossary/three-amigos/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'Agile Alliance「What are the Three Amigos in Agile?」'}
                </a>
            </p>
            <p>
                <strong>{'実践のポイント'}</strong>
            </p>
            <ul>
                <li>
                    {'\n                            実装に着手する'}
                    <strong>{'前'}</strong>
                    {'に、15〜30分程度の短いセッションとして開催する\n                        '}
                </li>
                <li>
                    {
                        '\n                            目的は「合意された仕様書を作ること」ではなく「認識のズレをその場で発見すること」\n                        '
                    }
                </li>
                <li>
                    {
                        '\n                            ビジネス側が一方的に要求を提示する「契約」の場にしない。むしろ「解決したい問題」を提示し、チーム全体で解決策を考える対話の場にする\n                        '
                    }
                </li>
            </ul>
            <p className="callout source">
                <i className="ti ti-link"></i>
                {'出典:\n                        '}
                <a
                    href="https://johnfergusonsmart.com/three-amigos-requirements-discovery/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {
                        'John Ferguson Smart「The anatomy of a Three Amigos Requirements\n                            Discovery workshop」'
                    }
                </a>
            </p>
        </>
    );
}
