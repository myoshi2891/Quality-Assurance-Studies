import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './ai-driven-software-testing-guide.css';

export const metadata: Metadata = {
  title: 'AI駆動ソフトウェアテスト入門ガイド ― AI-Driven Software Testing',
  description:
    'Srinivasa Rao Bittla『AI-Driven Software Testing』の目次構成をもとにした、初学者向けステップバイステップ解説ガイド',
};

export const DIAGRAM_STRUCTURE = `flowchart LR
    Title["書籍全体像"] --> P1["Part1 基礎編 全6章"]
    P1 --> P2["Part2 実践編 全6章"]
    P2 --> P3["Part3 発展編 全6章"]
    classDef hub fill:#c9c4ef,color:#221f52;
    class Title hub;`;

export default function AiDrivenSoftwareTestingGuidePage() {
  return (
    <div className="ai-driven-test-layout">
      <NavBar />

      <main className="main">
        <header className="hero">
          <div className="hero-kicker">初学者向け解説ガイド</div>
          <h1>AI駆動ソフトウェアテスト入門ガイド</h1>
          <p className="hero-lead">
            Srinivasa Rao Bittla著『AI-Driven Software Testing: Transforming Software
            Testing with Artificial Intelligence and Machine
            Learning』の目次構成をもとに、AIによるソフトウェアテスト変革のテーマを初学者向けに再構成し、国際的に著名な実践者・組織による2026年時点の一次情報を交えて解説します。
          </p>
          <div className="hero-meta">
            <span className="hero-tag">
              <i className="ti ti-book-2" aria-hidden="true"></i>全3部 全18章
            </span>
            <span className="hero-tag">
              <i className="ti ti-diagram-3" aria-hidden="true"></i>図解14点 Mermaid
            </span>
            <span className="hero-tag">
              <i className="ti ti-link" aria-hidden="true"></i>参考文献12件
            </span>
          </div>
        </header>

        <div className="content">
          {/* Section 1: intro */}
          <section className="section" id="intro">
            <div className="section-kicker">
              <i className="ti ti-compass" aria-hidden="true"></i>この記事の読み方
            </div>
            <div className="prose">
              <p className="lead">
                本ガイドは、Apress刊行・O&apos;Reilly収録の書籍『AI-Driven Software
                Testing』（著者: Srinivasa Rao
                Bittla、2025年10月刊、536ページ）の目次構成をもとに、AIによるソフトウェアテスト変革のテーマを初学者向けに再構成し、業界の著名な実践者・組織による2026年時点の一次情報を交えて解説したものです。書籍本文の逐語的な引用は行わず、各章のテーマを独自の説明・図解で再構成しています。
              </p>
              <ul>
                <li>
                  ソフトウェアテストの基礎（テストケース、CI/CD、回帰テストなど）を触ったことがある人を主な対象にしつつ、専門用語はその都度かみ砕いて説明します。
                </li>
                <li>
                  図解はすべてMermaidのフローチャートを使用しています（ASCIIアートは使用していません）。ページを開くとブラウザ上で描画されます。
                </li>
                <li>
                  各ステップは書籍の該当する章に対応させていますが、内容は独自にまとめ直したものです。書籍そのものを読む際の「地図」として使ってください。
                </li>
                <li>
                  末尾に、Mark WinteringhamやAngie
                  Jones、ThoughtWorks、DORA、ISTQB、James Bach / Michael
                  Boltonなど、国際的に著名な実践者・組織による一次情報・参考情報への参照リンクをまとめています。
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: glossary */}
          <section className="section" id="glossary">
            <div className="section-kicker">
              <i className="ti ti-abc" aria-hidden="true"></i>用語ミニ辞典
            </div>
            <h2>まず押さえておきたい7つの用語</h2>
            <div className="table-wrap">
              <div className="table-title">用語ミニ辞典</div>
              <table>
                <thead>
                  <tr>
                    <th>用語</th>
                    <th>意味</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>QE（品質エンジニアリング）</td>
                    <td>
                      バグを見つける「テスト」より広く、品質を作り込む活動全体を指す言葉
                    </td>
                  </tr>
                  <tr>
                    <td>SDLC</td>
                    <td>
                      Software Development Life
                      Cycle。要件定義からリリース・保守までのソフトウェア開発全体の流れ
                    </td>
                  </tr>
                  <tr>
                    <td>STLC</td>
                    <td>
                      Software Testing Life
                      Cycle。テスト要件分析からテストクローズまでのテスト活動の流れ
                    </td>
                  </tr>
                  <tr>
                    <td>自己修復（セルフヒーリング）テスト</td>
                    <td>
                      UIの変更などでテストが壊れたとき、AIがセレクタや手順を自動的に修正する仕組み
                    </td>
                  </tr>
                  <tr>
                    <td>予測分析</td>
                    <td>
                      過去のデータやパターンから、将来起こりうる不具合やリスクを事前に予測する手法
                    </td>
                  </tr>
                  <tr>
                    <td>CI/CD</td>
                    <td>
                      継続的インテグレーション・継続的デリバリー。コード変更を自動でビルド・テスト・リリースする仕組み
                    </td>
                  </tr>
                  <tr>
                    <td>LLM</td>
                    <td>
                      Large Language
                      Model。大規模言語モデル。ChatGPTなどの基盤となる自然言語処理モデル
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: book-info */}
          <section className="section" id="book-info">
            <div className="section-kicker">
              <i className="ti ti-book-2" aria-hidden="true"></i>書籍情報
            </div>
            <div className="book-card">
              <div className="book-cover">
                <div className="book-cover-top">APRESS / O&apos;REILLY</div>
                <div className="book-cover-title">AI-Driven Software Testing</div>
                <div className="book-cover-author">Srinivasa Rao Bittla</div>
              </div>
              <div className="book-card-body">
                <h3>AI-Driven Software Testing</h3>
                <p className="lead">
                  Transforming Software Testing with Artificial Intelligence and Machine Learning
                </p>
                <div className="table-wrap">
                  <table className="kv-table">
                    <tbody>
                      <tr>
                        <th>著者</th>
                        <td>Srinivasa Rao Bittla</td>
                      </tr>
                      <tr>
                        <th>出版社</th>
                        <td>Apress（O&apos;Reilly収録）</td>
                      </tr>
                      <tr>
                        <th>刊行</th>
                        <td>2025年10月</td>
                      </tr>
                      <tr>
                        <th>ページ数</th>
                        <td>536ページ</td>
                      </tr>
                      <tr>
                        <th>読者レベル</th>
                        <td>中級から上級（Intermediate to advanced）</td>
                      </tr>
                      <tr>
                        <th>想定読者</th>
                        <td>
                          品質エンジニア、データサイエンティスト、AI/MLをテスト・自動化に組み込みたい開発者
                        </td>
                      </tr>
                      <tr>
                        <th>構成</th>
                        <td>全3部・18章</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: structure */}
          <section className="section" id="structure">
            <div className="section-kicker">
              <i className="ti ti-map" aria-hidden="true"></i>全体構成をつかむ
            </div>
            <h2>3部構成の地図</h2>
            <div className="prose">
              <p>
                書籍は「基礎」「実践」「発展」の3部構成になっています。まず全体地図を頭に入れておくと、各章がどこに位置づけられるかが分かりやすくなります。詳しい全18章のタイトルは、後半の「全18章
                一覧」セクションにまとめています。
              </p>
            </div>
            <div className="diagram-block">
              <div className="diagram-caption">図1 書籍全体の3部構成</div>
              <div className="mermaid-wrap">
                <Mermaid chart={DIAGRAM_STRUCTURE} />
              </div>
            </div>
          </section>
        </div>

        <footer>
          本ガイドは2026年9月14日時点の公開情報をもとに作成しています。AI駆動テストは変化の速い領域のため、実務での採用検討にあたっては各ソース元の最新情報も併せてご確認ください。書籍本文の逐語的な引用は行わず、目次構成をもとに独自に再構成した解説コンテンツです。
        </footer>
      </main>
    </div>
  );
}
