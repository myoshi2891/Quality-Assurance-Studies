import React from 'react';
import type { Metadata } from 'next';
import './ctal-tae-ch1.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';

export const metadata: Metadata = {
  title: 'CTAL-TAE v2.0 第1章「テスト自動化の導入と目的」初学者向け解説ガイド',
  description:
    'なぜテスト自動化を行うのか、SDLCの中でどう位置づけられるのかという、テスト自動化エンジニア（CTAL-TAE）の土台となる考え方をステップバイステップで整理します。',
};

export default function CtalTaeChapter1Page() {
  return (
    <div className="ctal-tae-ch1-page">
      <div className="layout">
        <NavBar />
        <main className="main">
          <Hero />
          <Section0 />
          <Section1 />
          <Section2 />
        </main>
      </div>
    </div>
  );
}
