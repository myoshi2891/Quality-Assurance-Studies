import React from 'react';
import type { Metadata } from 'next';
import './iso-14496-22-2026-beginner-guide.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';
import Section13 from './Section13';
import Section14 from './Section14';
import Section15 from './Section15';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'ISO/IEC 14496-22:2026（Open Font Format）初学者向けステップバイステップ解説',
  description:
    '2026年7月発行の第5版Open Font Format（ISO/IEC 14496-22:2026）を、フォントファイルのバイナリ構造、表示パイプライン、可変フォント、実装現状から段階的に解説。',
};

export default function Iso1449622BeginnerGuidePage() {
  return (
    <div className="iso-14496-22-2026-page">
      <div className="layout">
        <NavBar />
        <main className="main">
          <Hero />
          <Section0 />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section11 />
          <Section12 />
          <Section13 />
          <Section14 />
          <Section15 />
          <Footer />
        </main>
      </div>
    </div>
  );
}
