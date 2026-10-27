import React from 'react';
import Diagram from './Diagram';

export default function Section03() {
    return (
        <>
            <section className="section prose" id="s3">
                <h2>
                    <i className="ti ti-history"></i>
                    {
                        '3. 歴史的背景: BDDからSpecification by\n                        Exampleへ\n                    '
                    }
                </h2>
                <p>
                    {
                        '\n                        SbEは突然生まれた概念ではなく、2000年代前半からのTDD(テスト駆動開発)・BDD(ふるまい駆動開発)の系譜の上に成立しています。年表で整理すると以下の通りです。\n                    '
                    }
                </p>
                <div className="mermaid-wrap">
                    <Diagram id="diag-history" />
                </div>
                <p className="mermaid-caption">
                    {'図1: BDDからSpecification by Exampleに至る年表'}
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
                    {
                        '(2002年のワークショップで用語に触れた経緯を本人が記述)/\n                        '
                    }
                    <a
                        href="https://cucumber.io/docs/bdd/history/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Cucumber公式「History of BDD」'}
                    </a>
                    {'\n                        /\n                        '}
                    <a
                        href="https://dannorth.net/blog/introducing-bdd/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Dan North「Introducing BDD」(本人ブログ)'}
                    </a>
                </p>
                <p>
                    {
                        '\n                        Cucumber公式ドキュメントによれば、BDDはDaniel Terhorst-North(Dan\n                        North)氏が2000年代初頭に提唱したもので、TDDに対する応答として生まれました。氏は「テスト」という言葉が持つ誤解(何をテストすべきか、どこまでテストすべきかが曖昧になりがちな点)を避けるために「振る舞い(behaviour)」という言葉を使い始め、これが新人プログラマーへのコーチングを大きく改善したと述べています。2003年には「JBehave」というJUnitに代わるツールの開発に着手しました。\n                    '
                    }
                </p>
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
                        href="https://dannorth.net/blog/introducing-bdd/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Dan North「Introducing BDD」'}
                    </a>
                </p>
                <p>
                    {
                        '\n                        Given-When-Thenという構造については、Dan North氏とChris\n                        Matts氏が2004年ごろに考案したものです。Martin\n                        Fowler氏はこれを「振る舞いを記述するスタイル」として自身のbliki内で整理し、多くのテストフレームワーク(Cucumberなど)で構造化の手段として採用されていると説明しています。\n                    '
                    }
                </p>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://martinfowler.com/bliki/GivenWhenThen.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Martin Fowler「bliki: Given When Then」'}
                    </a>
                </p>
                <p>
                    {
                        '\n                        そして2011年、Gojko\n                        Adzic氏がこれらの流れを実務的なプロセスパターンとして体系化し、「Specification\n                        by Example」という書籍にまとめました。Dan\n                        North氏自身も、この本を「方法論としてのBDDを扱った書籍の中で最も近いもの」と評しています(Gojko\n                        Adzic氏の公式サイトに掲載されたレビューコメントより)。\n                    '
                    }
                </p>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://gojko.net/books/specification-by-example/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Gojko Adzic公式サイトの書籍紹介ページ'}
                    </a>
                </p>
                <p>
                    {
                        '\n                        なお、SbEやBDDが生み出す「実行可能な仕様＝ドキュメント」という考え方は、その後Cyrille\n                        Martraire氏(Arolla社CTO、Paris Software Crafters\n                        community創設者)によって2019年の書籍『Living Documentation: Continuous\n                        Knowledge Sharing by\n                        Design』としてさらに一般化・拡張されています。詳細はステップ7で解説します。\n                    '
                    }
                </p>
                <p className="callout source">
                    <i className="ti ti-link"></i>
                    {'出典:\n                        '}
                    <a
                        href="https://www.oreilly.com/library/view/living-documentation-continuous/9780134689418/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {"Living Documentation(O'Reilly掲載ページ)"}
                    </a>
                </p>
            </section>
        </>
    );
}
