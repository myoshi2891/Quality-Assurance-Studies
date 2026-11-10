import React from 'react';
import type { Metadata } from 'next';
import '../fonts/noto-sans-jp-800.css';
import './guide.css';
import NavBar from './NavBar';
import Section00 from './Section00';
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';
import Section05 from './Section05';
import Section06 from './Section06';
import Section07 from './Section07';
import Section08 from './Section08';
import Section09 from './Section09';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';
import Section13 from './Section13';
import Section14 from './Section14';

export const metadata: Metadata = {
    title: 'ISO/IEC 30173:2023 デジタルツイン 概念と用語 初学者向けガイド',
    description: 'ISO/IEC 30173:2023（Digital twin — Concepts and terminology）の初学者向けステップバイステップ解説ガイド。',
};

/** Render the complete ISO/IEC 30173:2023 guide with its TOC and all 15 sections. */
export default function Page() {
    return (
        <div className="iso30173-page">
            <NavBar />
            <main className="main">
                <header className="hero">{" "}
                    <span className="eyebrow">ISO規格ガイド ・ 初学者向け</span>{" "}
                    <h1 className="hero-title">
                        ISO/IEC 30173:2023（デジタルツイン
                        概念と用語）初学者向けステップバイステップ解説
                    </h1>{" "}
                    <div className="meta">{" "}
                        <div className="meta-item">
                            <span className="meta-label">対象読者</span>
                            <span className="meta-value">ソフトウェア／QAエンジニア、DX・IoT・医療・製造分野の担当者（初学者）</span>
                        </div>{" "}
                        <div className="meta-item">
                            <span className="meta-label">調査日</span>
                            <span className="meta-value">2026年10月22日</span>
                        </div>{" "}
                        <div className="meta-item">
                            <span className="meta-label">対象規格</span>
                            <span className="meta-value">ISO/IEC 30173:2023 Digital twin — Concepts and terminology</span>
                        </div>{" "}
                    </div>{" "}
                </header>{" "}
                <Section00 />
                <Section01 />
                <Section02 />
                <Section03 />
                <Section04 />
                <Section05 />
                <Section06 />
                <Section07 />
                <Section08 />
                <Section09 />
                <Section10 />
                <Section11 />
                <Section12 />
                <Section13 />
                <Section14 />
                <footer className="page-footer">
                    本ガイドは、公開情報（目次、序文、適用範囲、用語3.1.1・3.1.2、各社の公開ページ）に基づく初学者向けの解説であり、規格本文の代替ではありません。第10章は著者の実務上の提案です。規格の正確な文言は、必ず正規の入手先で確認してください。
                </footer>
            </main>
        </div>
    );
}
