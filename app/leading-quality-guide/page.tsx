import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar, { NAV_ITEMS } from './NavBar';
import './leading-quality-guide.css';

const DIAGRAM_0 = `flowchart LR
    A["Section 1<br/>品質リーダーになる"] --> B["Section 2<br/>戦略的な品質判断を極める"]
    B --> C["Section 3<br/>チームを率いて<br/>成長を加速する"]
    C --> D(("高品質なソフトウェア<br/>+ 事業成長"))
    style A fill:#F2E4D0,stroke:#B8722E,color:#142433
    style B fill:#DCEAE1,stroke:#2E6E49,color:#142433
    style C fill:#E4E9F2,stroke:#3B5A80,color:#142433
    style D fill:#142433,stroke:#142433,color:#ffffff`;

export default function LeadingQualityGuidePage() {
  return (
    <div className="leading-quality-page">
      <header className="hero">
        <div className="hero-inner">
          <span className="kicker">LEADERSHIP × QUALITY ENGINEERING GUIDE</span>
          <h1>品質を、経営の言葉で語れるリーダーになる。</h1>
          <p className="lede">
            『Leading
            Quality』が説く、品質をテストチームの仕事から経営アジェンダへと引き上げるための10のステップを、初学者にもわかりやすく解説します。
          </p>
          <div className="book-card">
            <div>
              <strong>
                Leading Quality: How Great Leaders Deliver High-Quality Software and
                Accelerate Growth
              </strong>
            </div>
            <div style={{ marginTop: '6px' }}>
              著者：Ronald Cummings-John / Owais Peer（Global App Testing
              共同創業者）　発行：2019年／ROI Press
            </div>
            <span className="note">
              ※ 流通している副題「Build Winning Teams and Software
              Fast」は、実際に出版されている正式な副題ではありません。本ガイドは実在する書籍情報・著者インタビュー・書評など、正規に公開された一次/二次情報のみに基づいて作成しています。
            </span>
          </div>
        </div>
      </header>

      <div className="layout">
        <NavBar />

        <main>
          <details className="mobile-toc">
            <summary>ON THIS PAGE（目次を開く）</summary>
            <ol>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ol>
          </details>

          {/* 導入セクション */}
          <section>
            <p>
              本書は3部構成で、品質を「テストチームの仕事」から「経営・リーダーシップの課題」へと引き上げる考え方を説きます。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>セクション</th>
                    <th>テーマ</th>
                    <th>対応ステップ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Section 1</td>
                    <td>品質リーダーになる（Becoming a Leader of Quality）</td>
                    <td>Step 1〜4</td>
                  </tr>
                  <tr>
                    <td>Section 2</td>
                    <td>
                      戦略的な品質判断を極める（Mastering Your Strategic Quality
                      Decisions）
                    </td>
                    <td>Step 5〜8</td>
                  </tr>
                  <tr>
                    <td>Section 3</td>
                    <td>
                      チームを率いて成長を加速する（Leading Your Team to
                      Accelerate Growth）
                    </td>
                    <td>Step 9〜10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-0">
                <Mermaid chart={DIAGRAM_0} />
              </div>
            </div>
            <p>
              対象読者は、CTO・VPoE・QAリード・プロダクトオーナーはもちろん、「品質にもっと発言力を持ちたい」と考えるすべてのエンジニア・テスターです。
            </p>
          </section>

          {/* Section 1: #why */}
          <section id="why">
            <h2>
              <span className="num">01</span> なぜ品質は「経営課題」なのか
            </h2>
            <p>
              多くの組織では、品質は「バグを見つけて直す」という現場レベルの仕事だと思われがちです。しかし著者のRonald
              Cummings-Johnは、InfoQのインタビューで次のように説明しています。品質に関する調査機関CISQ（Consortium
              for Information &amp; Software
              Quality）の2018年の調査報告『The Cost of Poor Quality Software in the US: A 2018 Report』では、
              <strong>
                低品質なソフトウェアが米国内の組織にもたらした損失は約2.8兆米ドル（USD）
              </strong>
              にのぼるとされています（
              <a href="#sources">出典</a>
              ：調査対象は米国内に限定され、金額は米ドル建て）。
            </p>
            <p>さらに著者らは、品質問題の影響を「3つのC」という切り口で整理しています。</p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>3つのC</th>
                    <th>内容</th>
                    <th>具体例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Customer（顧客）</strong>
                    </td>
                    <td>顧客体験・信頼が損なわれる</td>
                    <td>予定通りサービスを使えない、旅行に行けない</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Company（会社）</strong>
                    </td>
                    <td>財務的損失・ブランド毀損</td>
                    <td>追加人件費、補償、株価・評判への影響</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Career（キャリア）</strong>
                    </td>
                    <td>担当者・リーダーの評価に影響</td>
                    <td>障害の責任者は昇進やプロジェクト任用で不利になる</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              書籍第1章では、実例として
              <strong>アメリカン航空の休暇スケジューリングシステムの不具合</strong>
              が紹介されています。システムの欠陥により、すべてのパイロットがクリスマス休暇を同時に申請できてしまい、結果として1万5000便以上のフライトにパイロットが割り当てられない事態を引き起こしました。これは「品質＝テストの問題」ではなく「品質＝経営判断の問題」であることを象徴する事例です。
            </p>
            <div className="callout">
              <span className="label">ポイント</span>
              <p>
                品質問題は「顧客」「会社」「個人のキャリア」の3方向に同時にダメージを与える。だからこそ品質はテスト担当者だけでなく、リーダーが主体的に扱うべき経営アジェンダである。
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
