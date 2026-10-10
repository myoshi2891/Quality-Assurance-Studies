import React from 'react';
import type { Metadata } from 'next';
import './istqb-ct-genai-study-guide.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Overview from './Overview';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Roadmap from './Roadmap';
import References from './References';
// Diagrams in the chapter components use the shared components/Mermaid renderer.
export const metadata: Metadata = {
  title: 'ISTQB® CT-GenAI 完全学習ガイド',
  description: 'CT-GenAIの試験概要と全5章、プロンプト技法、リスク管理、LLM搭載テストインフラ、学習ロードマップを解説。',
};
export default function Page() {
  return <div className="ct-genai-study-page">
    <NavBar />
    <div className="layout">
      <main className="main">

        <Hero />

        <Overview />

        <Chapter1 />

        <Chapter2 />

        <Chapter3 />

        <Chapter4 />

        <Chapter5 />

        <Roadmap />

        <References />

      </main>
    </div>
  </div>;
}
