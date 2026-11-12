import React from 'react';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: "ISO/IEC TR 29119-13:2022 初学者向けステップバイステップ解説ガイド",
  description: '生体認証システムの性能指標、リスクベースドテスト、品質特性とISO/IEC/IEEE 29119の適用を学ぶステップバイステップガイド。',
};

/** Render all twenty source categories inside the original responsive grid. */
export default function Page() {
  return <div className="iso29119-13-page"><div className="app">
    <NavBar />
    <div className="main">
      <header className="hero">
        <div className="eyebrow">ISO/IEC TR 29119-13:2022 ・ 初学者向けガイド</div>
        <h1>ISO/IEC TR 29119-13:2022 初学者向けステップバイステップ解説ガイド</h1>
      </header>
      <main className="doc">
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
        <Section15 />
        <Section16 />
        <Section17 />
        <Section18 />
        <Section19 />
      </main>
    </div>
  </div></div>;
}
