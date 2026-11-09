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
import Section15 from './Section15';
import Section16 from './Section16';
import Section17 from './Section17';
import Section18 from './Section18';
import Section19 from './Section19';
import Section20 from './Section20';

export const metadata: Metadata = {
    title: 'ISO/IEC 27031:2025 初学者向けステップバイステップ解説',
    description: 'ISO/IEC 27031:2025（Cybersecurity — ICT readiness for business continuity）の初学者向けステップバイステップ解説ガイド。',
};

/** Render the complete ISO/IEC 27031:2025 guide with its TOC and all 21 sections. */
export default function Page() {
    return (
        <div className="iso27031-page">
            <NavBar />
            <main className="main">
                <header className="hero">{" "}
                    <span className="eyebrow">ISO規格ガイドシリーズ</span>{" "}
                    <h1 className="hero-title">ISO/IEC 27031:2025 初学者向けステップバイステップ解説</h1>{" "}
                    <div className="hero-meta">{" "}
                        <p>
                            対象規格 : ISO/IEC 27031:2025 Cybersecurity — Information and communication technology readiness for business continuity （サイバーセキュリティ — 事業継続のための情報通信技術（ICT）の準備） 情報時点 : 2026年10月26日 想定読者 : ICT運用・インフラ・SRE・情報セキュリティ・BCP担当の初学者〜中級者 この資料の立ち位置 : 規格本文は有償・著作権保護のため転載せず、公開されている目次・序文・適用範囲・各機関の概要情報をもとに、自分の言葉で解説しています
                        </p>{" "}
                    </div>{" "}
                </header>{" "}
                <hr />{" "}
                <Section00 />{" "}
                <hr />{" "}
                <Section01 />{" "}
                <hr />{" "}
                <Section02 />{" "}
                <hr />{" "}
                <Section03 />{" "}
                <hr />{" "}
                <Section04 />{" "}
                <hr />{" "}
                <Section05 />{" "}
                <hr />{" "}
                <Section06 />{" "}
                <hr />{" "}
                <Section07 />{" "}
                <hr />{" "}
                <Section08 />{" "}
                <hr />{" "}
                <Section09 />{" "}
                <hr />{" "}
                <Section10 />{" "}
                <hr />{" "}
                <Section11 />{" "}
                <hr />{" "}
                <Section12 />{" "}
                <hr />{" "}
                <Section13 />{" "}
                <hr />{" "}
                <Section14 />{" "}
                <hr />{" "}
                <Section15 />{" "}
                <hr />{" "}
                <Section16 />{" "}
                <hr />{" "}
                <Section17 />{" "}
                <hr />{" "}
                <Section18 />{" "}
                <hr />{" "}
                <Section19 />{" "}
                <hr />{" "}
                <Section20 />{" "}
                <footer className="page-footer">
                    ISO/IEC 27031:2025 初学者向け解説ガイド ／ 情報時点 2026年10月26日
                </footer>
            </main>
        </div>
    );
}
