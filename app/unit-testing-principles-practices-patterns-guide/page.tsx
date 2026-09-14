import React from 'react';
import NavBar from './NavBar';
import './unit-testing-guide.css';

export const metadata = {
  title: 'Unit Testing Principles, Practices, and Patterns 完全ガイド ― 初学者のためのステップバイステップ ベストプラクティス',
  description: 'Vladimir Khorikov著『Unit Testing Principles, Practices, and Patterns』に基づく単体テスト実践ガイド。4本柱、AAAパターン、古典派vsロンドン派、モックの正しい使い方まで。',
};

export default function Page() {
  return (
    <div className="unit-testing-layout">
      <NavBar />

      <main className="content">
        <header className="hero">
          <div className="hero-eyebrow">Book Guide</div>
          <h1>Unit Testing Principles, Practices, and Patterns 完全ガイド</h1>
          <p className="lead">初学者のためのステップバイステップ ベストプラクティス</p>
          <p>
            この記事は、ソフトウェアテスト分野で国際的に高く評価されている書籍<em>Unit Testing Principles, Practices, and Patterns</em>（Vladimir Khorikov 著）の考え方を土台に、初学者でも迷わず実践できるよう「ステップ形式」で再構成した学習ガイドです。あわせて、Martin Fowler・Kent Beck・Kent C. Dodds・Ian Cooper・Gary Bernhardt といった著名な国際的開発者の発信内容、および2025〜2026年にかけての最新の議論（Test Desiderata 2.0、AI生成コードのテストなど）も参照し、現在の実務にそのまま使える形にまとめています。参照したソースのURLはすべて末尾の「参考文献・情報源」にまとめています。
          </p>
          <div className="book-card">
            <div>
              <div className="label"><i className="ti ti-book"></i>書名</div>
              <div className="value">Unit Testing Principles, Practices, and Patterns</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-user"></i>著者</div>
              <div className="value">Vladimir Khorikov</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-building"></i>出版社</div>
              <div className="value">Manning Publications</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-calendar"></i>刊行</div>
              <div className="value">2020年1月 / 304ページ</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-barcode"></i>ISBN</div>
              <div className="value">978-1-61729-627-7</div>
            </div>
            <div>
              <div className="label"><i className="ti ti-external-link"></i>出版社ページ</div>
              <div className="value">
                <a
                  href="https://www.oreilly.com/library/view/unit-testing-principles/9781617296277/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  O&apos;Reilly で見る
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Categories will be populated here */}
        <section className="section" id="about"></section>
        <section className="section" id="step1"></section>
        <section className="section" id="step2"></section>
        <section className="section" id="step3"></section>
        <section className="section" id="step4"></section>
        <section className="section" id="step5"></section>
        <section className="section" id="step6"></section>
        <section className="section" id="step7"></section>
        <section className="section" id="step8"></section>
        <section className="section" id="step9"></section>
        <section className="section" id="step10"></section>
        <section className="section" id="step11"></section>
        <section className="section" id="step12"></section>
        <section className="section" id="step13"></section>
        <section className="section" id="checklist"></section>
        <section className="section" id="update2026"></section>
        <section className="section" id="references"></section>

        <footer className="footer">
          <p>
            Unit Testing Principles, Practices, and Patterns 完全ガイド ― Classic Software Testing Books companion series
          </p>
        </footer>
      </main>
    </div>
  );
}
