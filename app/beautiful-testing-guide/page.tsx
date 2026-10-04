import React from 'react';
import type { Metadata } from 'next';
import './beautiful-testing-guide.css';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';

export const metadata: Metadata = { title: '『Beautiful Testing』完全ガイド ― 初学者のためのステップバイステップ・ベストプラクティス', description: 'Beautiful Testingの23章を現代のテスト実践と結び、TDD・探索的テスト・自動化・AI時代の品質を段階的に学ぶガイド。' };

export default function Page(){
 return (
 <div className="bt-page">
    <div className="layout">
        <main className="main">
            <header className="hero">
                <h1>
                    {" 『Beautiful Testing』完全ガイド"}
                    <br />
                    {"― 初学者のためのステップバイステップ・ベストプラクティス "}
                </h1>
                <div className="meta">
                    <p>
                        {" 原著: "}
                        <em>
                            {"Beautiful Testing: Leading Professionals Reveal How They Improve Software"}
                        </em>
                        {"（O'Reilly Media, 2009年10月刊） "}
                    </p>
                    <p>
                        {"編者: Adam Goucher / Tim Riley（Mozilla QAディレクター）"}
                    </p>
                    <p>
                        {" 参照元: "}
                        <a href="https://www.oreilly.com/library/view/beautiful-testing/9780596806934/" target="_blank" rel="noopener noreferrer">
                            {"oreilly.com/library/view/beautiful-testing/9780596806934"}
                        </a>
                    </p>
                </div>
                <p className="lead">
                    {" 本ガイドは、ソフトウェアテストの古典的名著『Beautiful Testing』の構成とエッセンスを、2026年時点の現代的なテスト実践（テストピラミッド／テスティングトロフィー／Googleのテストサイズ分類／AIエージェント時代のテストなど）と橋渡ししながら、初学者が実務で使える形に再構成した学習ガイドです。主要な解説セクションの末尾には、根拠とした参考資料のURLを明記しています（チェックリストなど一部のセクションには個別のURLを付していません）。 "}
                </p>
            </header>
            <section className="section" id="sec-1">
                <h2>
                    {"1. はじめに：なぜ「美しい」テストなのか"}
                </h2>
                <div className="prose">
                    <p>
                        {" 『Beautiful Testing』は、Adam GoucherとTim Rileyが編集し、27名の著名なテスター・開発者が23本のエッセイを寄稿したオムニバス形式の書籍です。表紙の惹句が語るとおり、「ソフトウェアの成功は、優れたアーキテクチャや洗練されたコードと同じくらい、入念なテストに支えられている」という思想が本書全体を貫いています。 "}
                    </p>
                    <p>
                        {" 本書がユニークなのは、テストを単なる「バグ探しの作業」ではなく、"}
                        <strong>
                            {"創造性・コミュニケーション・美意識を伴う職人技（クラフト）"}
                        </strong>
                        {"として描いている点です。寄稿者にはMicrosoftのAlan Page、パフォーマンステストの専門家Scott Barber、25年のキャリアを持つRex Black、アジャイルテストの第一人者Lisa Crispin、数学者John D. Cookなど、業界で広く知られる実務家・研究者が名を連ねています。また、著者印税はマラリア予防のための慈善活動「Nothing But Nets」に全額寄付されるという背景も、本書の「テストへの誠実な姿勢」を象徴しています。 "}
                    </p>
                    <p>
                        {" 初学者がこの本から学ぶべき最大のポイントは、"}
                        <strong>
                            {"「テストのやり方（How）」の前に「テストの目的（Why / For Whom）」を考える"}
                        </strong>
                        {"という姿勢です。本ガイドでは、この考え方を軸に、原著の各章のエッセンスを実務で使えるステップに分解し、2026年現在の標準的な実践（テストピラミッド、TDD、CI/CD、探索的テストなど）と接続していきます。 "}
                    </p>
                </div>
                <div className="section-refs">
                    {" 参照: "}
                    <a href="https://www.oreilly.com/library/view/beautiful-testing/9780596806934/" target="_blank" rel="noopener noreferrer">
                        {"oreilly.com/library/view/beautiful-testing/9780596806934"}
                    </a>
                    {" ／ "}
                    <a href="https://www.oreilly.com/pub/pr/2453" target="_blank" rel="noopener noreferrer">
                        {"oreilly.com/pub/pr/2453"}
                    </a>
                </div>
            </section>
            <section className="section" id="sec-2">
                <h2>
                    {"2. 本書の全体構成（3部構成マップ）"}
                </h2>
                <div className="prose">
                    <p>
                        {" 原著は「Beautiful Testers（美しいテスター）」「Beautiful Process（美しいプロセス）」「Beautiful Tools（美しいツール）」の3部・23章で構成されています。まず全体像を俯瞰しましょう。 "}
                    </p>
                </div>
                <div className="mermaid-wrapper diagram-frame"><Mermaid chart={DIAGRAMS[0]} /></div>
                <div className="prose">
                    <ul>
                        <li>
                            <strong>
                                {"Part I（第1〜4章）"}
                            </strong>
                            {"は「誰がテストするのか／誰のためにテストするのか」という人とステークホルダーの視点。 "}
                        </li>
                        <li>
                            <strong>
                                {"Part II（第5〜17章）"}
                            </strong>
                            {"は最もボリュームが大きく、バグ管理・自動化・TDD・アジャイルなど「プロセス」に焦点を当てます。 "}
                        </li>
                        <li>
                            <strong>
                                {"Part III（第18〜23章）"}
                            </strong>
                            {"は具体的なOSSプロジェクト（ClamAV、eBox等）での実践事例を通じて「ツール」を学びます。 "}
                        </li>
                    </ul>
                    <p>
                        {" 初学者は、いきなり全章を読むのではなく、次章以降で示す「9つのステップ」の順で本書のエッセンスをつまみ食いすることをお勧めします。 "}
                    </p>
                </div>
                <div className="section-refs">
                    {" 参照: "}
                    <a href="https://www.oreilly.com/library/view/beautiful-testing/9780596806934/" target="_blank" rel="noopener noreferrer">
                        {"oreilly.com/library/view/beautiful-testing/9780596806934"}
                    </a>
                </div>
            </section>
            <footer className="footer">
                <p>
                    {" 本ガイドは学習目的の要約・再構成であり、原著本文の引用ではありません。詳細な内容は必ず原著『Beautiful Testing』（O'Reilly）をご参照ください。 "}
                </p>
            </footer>
        </main>
    </div>
 </div>
 );
}
