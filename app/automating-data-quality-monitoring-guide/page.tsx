import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import './automating-data-quality-monitoring-guide.css';

export const metadata: Metadata = {
  title: 'データ品質モニタリングの自動化を学ぶ｜初学者向けステップバイステップガイド',
  description:
    'Jeremy Stanley, Paige Schwartz 著『Automating Data Quality Monitoring』の8章構成に沿って、教師なし機械学習によるデータ品質の自動監視を初学者向けに解説するガイド',
};

export default function AutomatingDataQualityMonitoringGuidePage() {
  return (
    <div className="dqm-layout">
      <NavBar />

      <main className="main">
        <div className="content">
          <section className="section" id="intro">
            <div className="hero">
              <div className="hero-kicker">
                <i className="ti ti-sparkles" aria-hidden="true"></i>初学者向け・ステップバイステップ解説
              </div>
              <h1>
                データ品質モニタリングの自動化を学ぶ<br />
                <span className="book-title">ルールベースを超えて機械学習でスケールする方法</span>
              </h1>
              <p className="lead">
                参照書籍：Jeremy Stanley, Paige Schwartz 著『Automating Data Quality
                Monitoring: Scaling Beyond Rules with Machine Learning』（O&apos;Reilly
                Media, 2024）
              </p>
            </div>

            <h2>
              <i className="ti ti-book-2" aria-hidden="true"></i>この記事について
            </h2>
            <p>
              「データが多すぎて、どのテーブルが壊れているか誰も気づけない」——多くのデータチームが抱えるこの悩みに、正面から答えるのが本ガイドで取り上げる書籍です。世界中の企業が生み出すデータ量は年々膨れ上がっており、その中のどれだけが「良品」なのかを人手だけで確かめるのはもはや不可能です。
            </p>
            <p>
              本書の著者であるJeremy StanleyとPaige
              Schwartzは、データ品質モニタリング企業Anomaloの共同創業者兼CTO、および同社のテクニカルライターです。二人は前職のInstacart（米国の食料品配達大手）で、共同創業者のElliot
              Shmuklerとともに「ルールベースのテストだけでは、企業規模のデータ品質は守れない」という現実に直面した経験からAnomaloを立ち上げました<sup>
                <a href="#ref1">[1]</a>
              </sup>
              。本書には、元米国チーフ・データサイエンティストのDJ
              Patil氏が序文を寄せています<sup>
                <a href="#ref2">[2]</a>
              </sup>
              。
            </p>
            <p>
              このガイドは、原書の8章構成に沿って、
              <strong>
                教師なし機械学習（Unsupervised Machine Learning,
                UML）を使ってデータ品質を自動監視する考え方
              </strong>
              を、初学者にもわかりやすいようにステップ・バイ・ステップで解説します。あわせて、Uber・Netflix・Monte
              Carlo（Barr
              Moses氏）など他の著名なデータエンジニアリング組織の実践例や、Great
              Expectations・Soda・dbtといったオープンソースのデータ品質ツールの位置づけにも触れ、原書の内容を2026年9月時点の業界動向と接続します。
            </p>
            <div className="callout">
              <i className="ti ti-users" aria-hidden="true"></i>
              <div className="callout-body">
                <p>
                  <strong>対象読者</strong>
                  ：データエンジニア、データアナリスト、データサイエンティスト、そして自社のデータ品質戦略を検討しているCDAO（チーフ・データ&amp;アナリティクス・オフィサー）やデータガバナンス責任者まで、データに関わるすべての人。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
