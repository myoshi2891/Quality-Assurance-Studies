import React from 'react';
import type { Metadata } from 'next';
import './ctal-tae-ch4.css';
import Hero from './Hero';
import NavBar from './NavBar';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'CTAL-TAE v2.0 第4章 テスト自動化の実装',
  description: 'パイロットとデプロイのガイドライン、デプロイに伴うリスク、テスト自動化ソリューションの保守性を解説。',
};

export default function Page() {
  return (
    <div className="ctal-tae-ch4-page">
      <div className="layout">
        <NavBar />
        <main>
          <Hero />
          <Section0 />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Footer />
        </main>
      </div>
    </div>
  );
}
