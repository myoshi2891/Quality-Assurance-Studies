import React from 'react';
import type { Metadata } from 'next';
import Section00 from './Section00';
import './quality-is-free-guide.css';

export const metadata: Metadata = {
    title: 'Quality Is Free 入門ガイド ― 品質はなぜタダなのか',
    description: 'Philip B. Crosbyの品質の4原則、品質コスト、14ステップ改善、成熟度グリッドをソフトウェア開発へ応用する実践ガイド。',
};

export default function Page() {
    return <div className="quality-is-free-page"><div className="layout"><main className="main">
        <header className="hero">
            <p className="hero-kicker">
                {"Classic Software Testing Books Series"}
            </p>
            <h1>
                {" Quality Is Free 入門ガイド"}
                <br />
                {"品質はなぜ「タダ」なのか、ソフトウェアエンジニアのための実践ステップ "}
            </h1>
            <p>
                {" Philip B. Crosby『Quality Is Free: The Art of Making Quality Certain』(1979) を、初めて品質管理・ソフトウェアテストを学ぶ人向けに、ステップバイステップで解説する副読ガイドです。 "}
            </p>
        </header>
        <div className="content">
            <Section00 />
        </div>
        <footer className="footer">
            {" 本ガイドはPhilip B. Crosby『Quality Is Free』の学習補助を目的とした独自解説であり、原著の文章を逐語的に引用したものではありません。原著の詳細な内容については、参考文献のGoogle Booksリンクまたは書籍そのものをご参照ください。 "}
        </footer>
    </main></div></div>;
}
