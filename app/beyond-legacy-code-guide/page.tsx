import React from 'react';
import type { Metadata } from 'next';
import './beyond-legacy-code-guide.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Background from './Background';
import WhatIsLegacy from './WhatIsLegacy';
import ShuHaRi from './ShuHaRi';
import Overview from './Overview';
import Practice1 from './Practice1';
import Practice2 from './Practice2';
import Practice3 from './Practice3';
import Practice4 from './Practice4';
import Practice5 from './Practice5';
import Practice6 from './Practice6';
import Practice7 from './Practice7';
import Practice8 from './Practice8';
import Practice9 from './Practice9';
import Pitfalls from './Pitfalls';
import Roadmap from './Roadmap';
import Summary from './Summary';
import References from './References';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'レガシーコードからの脱却 ― 初学者向け9つのプラクティス実践ガイド',
  description: 'Beyond Legacy Codeの9つのプラクティスを、CLEANなコード、TDD、継続的統合と4週間のロードマップで学ぶ初学者向け実践ガイド。',
};

export default function BeyondLegacyCodeGuide() {
  return <div className="beyond-legacy-page layout">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link rel="stylesheet" precedence="beyond-legacy-font" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Noto+Sans+JP:wght@400;500;700&display=swap" />
    <NavBar />
    <main className="main">
      <Hero />
      <div className="content-wrap">
        <Background />
        <WhatIsLegacy />
        <ShuHaRi />
        <Overview />
        <section id="practices">
          <p className="section-eyebrow"><i className="ti ti-tools" />DEEP DIVE</p>
          <h2>プラクティス1から9 詳細解説</h2>
          <Practice1 />
          <Practice2 />
          <Practice3 />
          <Practice4 />
          <Practice5 />
          <Practice6 />
          <Practice7 />
          <Practice8 />
          <Practice9 />
        </section>
        <Pitfalls />
        <Roadmap />
        <Summary />
        <References />
      </div>
      <Footer />
    </main>
  </div>;
}
