import React from 'react';
import type { Metadata } from 'next';
import './ctal-tae-ch3.css';
import NavBar from './NavBar';
import Hero from './Hero';

export const metadata: Metadata = {
  title: 'CTAL-TAE v2.0 第3章：Test Automation Architecture 徹底解説',
  description:
    'gTAA・TAFレイヤー化・7つの自動化アプローチ・設計原則とデザインパターンまで、テスト自動化アーキテクチャの中核を初学者向けにステップバイステップで解説します。',
};

export default function CtalTaeChapter3Page() {
  return (
    <div className="ctal-tae-ch3-page">
      <div className="layout">
        <NavBar />
        <main className="main">
          <Hero />
        </main>
      </div>
    </div>
  );
}
