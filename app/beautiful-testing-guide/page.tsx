import React from 'react';
import type { Metadata } from 'next';
import './beautiful-testing-guide.css';

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
