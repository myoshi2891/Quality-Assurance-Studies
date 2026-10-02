import React from 'react';
import type { Metadata } from 'next';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import { DIAGRAM_ROADMAP } from './diagrams';
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

          <section className="section" id="book-info">
            <h2>
              <i className="ti ti-book" aria-hidden="true"></i>書籍情報
            </h2>
            <div className="book-card">
              <div className="book-cover">
                <i className="ti ti-book-2" aria-hidden="true"></i>
                <div>
                  <div className="cover-title">Automating Data Quality Monitoring</div>
                  <div className="cover-author">Jeremy Stanley &amp; Paige Schwartz</div>
                  <div className="cover-author">O&apos;Reilly Media, 2024</div>
                </div>
              </div>
              <div className="table-wrap" style={{ margin: 0, border: 'none' }}>
                <table className="kv-table">
                  <tbody>
                    <tr>
                      <th>タイトル</th>
                      <td>
                        Automating Data Quality Monitoring: Scaling Beyond Rules with Machine
                        Learning
                      </td>
                    </tr>
                    <tr>
                      <th>著者</th>
                      <td>
                        Jeremy Stanley（Anomalo共同創業者・CTO）、Paige
                        Schwartz（Anomaloテクニカルライター）
                      </td>
                    </tr>
                    <tr>
                      <th>序文</th>
                      <td>DJ Patil（元米国チーフ・データサイエンティスト）</td>
                    </tr>
                    <tr>
                      <th>出版社</th>
                      <td>O&apos;Reilly Media</td>
                    </tr>
                    <tr>
                      <th>出版日</th>
                      <td>2024年2月13日</td>
                    </tr>
                    <tr>
                      <th>ページ数</th>
                      <td>200ページ超</td>
                    </tr>
                    <tr>
                      <th>ISBN</th>
                      <td>9781098145934</td>
                    </tr>
                    <tr>
                      <th>想定読者</th>
                      <td>
                        CDAO/VP of
                        Data、データガバナンス責任者、データエンジニア・アナリスト・データサイエンティスト
                      </td>
                    </tr>
                    <tr>
                      <th>参照URL</th>
                      <td>
                        <a
                          className="ref-url"
                          href="https://www.oreilly.com/library/view/automating-data-quality/9781098145927/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          oreilly.com/library/view/automating-data-quality/9781098145927
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3>章構成一覧</h3>
            <div className="table-wrap">
              <div className="table-title">全8章の構成</div>
              <table>
                <thead>
                  <tr>
                    <th>章</th>
                    <th>タイトル（原題）</th>
                    <th>内容の要点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>The Data Factory</td>
                    <td>データ品質はなぜ・どこで劣化するのか、ビジネスへの影響</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>A Four-Pillar Approach to Data Quality Monitoring</td>
                    <td>観測性・検証ルール・主要指標・教師なしMLの4本柱</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Is Automated Data Quality Monitoring Right for Your Business?</td>
                    <td>自動化の投資判断とROIの考え方</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>How to Build a Machine Learning Model for Data Quality Monitoring</td>
                    <td>教師なしMLモデルの設計アルゴリズム</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Making Data Quality Monitoring Models Work in the Real World</td>
                    <td>季節性・カオスなテーブルなど実データ特有の課題への対処</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>High-Quality Notifications</td>
                    <td>アラート疲れを避けながら適切な通知を届ける設計</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Integrations Multiply the Power of Your Tools</td>
                    <td>データウェアハウスからMLOpsまでの統合ポイント</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Towards a Self-Driving Data Future</td>
                    <td>本番展開、ビルド・バイ判断、継続的改善</td>
                  </tr>
                  <tr>
                    <td>付録</td>
                    <td>Common Data Quality Issues</td>
                    <td>よくあるデータ品質問題のカタログ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="section" id="roadmap">
            <h2>
              <i className="ti ti-route" aria-hidden="true"></i>学習ロードマップ
            </h2>
            <p>
              以下のステップで、ルールベースの限界から教師なし機械学習による自動化、そして組織への定着までを順に見ていきます。
            </p>
            <div className="diagram-wrap" id="dwrap-1">
              <Mermaid chart={DIAGRAM_ROADMAP} />
            </div>
            <p className="diagram-caption">
              <b>図1</b>｜Step 0からStep 8までの学習ロードマップ
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
