import React from 'react';
import type { Metadata } from 'next';
import './ctal-tae-ch2.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'CTAL-TAE v2.0 Ch.2 テスト自動化の準備 | 初学者向け解説ガイド',
  description:
    'SUTのテスト容易性（観測性・制御性・透明性）、各種環境での自動テスト活用、SUT分析の8観点、ツール比較表と7つの技術要件を解説します。',
};

export default function CtalTaeChapter2Page() {
  return (
    <div className="ctal-tae-ch2-page">
      <div className="layout">
        <NavBar />
        <main className="main">
          <Hero />
          <Section0 />
          <Section1 />
          <Section2 />
          <Footer />
        </main>
      </div>
    </div>
  );
}
