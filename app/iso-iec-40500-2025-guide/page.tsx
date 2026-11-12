import React from 'react';
import type { Metadata } from 'next';
import '../fonts/noto-sans-jp-800.css';
import '../fonts/jetbrains-mono-600.css';
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
export const metadata: Metadata = { title: "ISO/IEC 40500:2025 初学者向けステップバイステップ解説ガイド", description: 'ISO/IEC 40500:2025とWCAG 2.2の関係、POUR・適合レベル・新規9基準の実装とQAでの検証方法を図解とコードで段階的に学ぶガイド。' };
export default function Page() {
    return <div className="wcag-40500-page"><NavBar /><main className="main">
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
    </main></div>;
}
