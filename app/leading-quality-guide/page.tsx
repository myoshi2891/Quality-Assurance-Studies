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

const DIAGRAM_1 = `flowchart TD
    QN["品質ナラティブ<br/>Quality Narrative"] --> ON["① 所有権のナラティブ<br/>Ownership Narrative"]
    QN --> HT["② テスト手法のナラティブ<br/>How-to-Test Narrative"]
    QN --> VN["③ 価値のナラティブ<br/>Value Narrative"]
    ON --> ON1["誰が品質に<br/>責任を持つのか？"]
    HT --> HT1["どうやって<br/>テストすべきか？"]
    VN --> VN1["品質はコストか、<br/>それとも収益貢献か？"]
    style ON fill:#DCEAE1,stroke:#2E6E49,color:#142433
    style HT fill:#F2E4D0,stroke:#B8722E,color:#142433
    style VN fill:#E4E9F2,stroke:#3B5A80,color:#142433`;

const DIAGRAM_2 = `flowchart LR
    subgraph 現状["よくある状態（属人化）"]
        direction TB
        QAonly["QA/テスターのみが<br/>品質に責任を持つ"]
    end
    subgraph 理想["目指す状態（全員参加）"]
        direction TB
        Dev["開発者"] --- PM["プロダクトマネージャー"]
        PM --- Design["デザイナー"]
        Design --- QA["QA/テスター"]
        QA --- Dev
    end
    現状 -.移行.-> 理想
    style 現状 fill:#F3E3E1,stroke:#A23B34
    style 理想 fill:#DCEAE1,stroke:#2E6E49`;

const DIAGRAM_3 = `flowchart TD
    A["品質チームの発見:<br/>姓の必須入力が<br/>サインアップを妨げている"] --> B["修正を実施"]
    B --> C["サインアップ数が増加"]
    C --> D["経営層が品質チームを<br/>「コストセンター」から<br/>「成長への貢献者」と認識"]
    style A fill:#F2E4D0,stroke:#B8722E,color:#142433
    style B fill:#E4E9F2,stroke:#3B5A80,color:#142433
    style C fill:#DCEAE1,stroke:#2E6E49,color:#142433
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

          {/* Section: #step1 */}
          <section id="step1">
            <span className="step-tag">STEP 01 / 10</span>
            <h2>3つの「品質ナラティブ（物語）」を理解する</h2>
            <p>
              著者が提唱する中心概念が「品質ナラティブ（Quality
              Narrative）」です。これは「組織の中で品質がどのように語られ、認識されているか」という物語（暗黙のストーリー）を指します。まず自社の現状のナラティブを言語化することが、変革の第一歩になります。
            </p>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-1">
                <Mermaid chart={DIAGRAM_1} />
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ナラティブ</th>
                    <th>問いかけ</th>
                    <th>ありがちな失敗</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>所有権</td>
                    <td>品質は誰の仕事か？</td>
                    <td>QA・テスターだけの責任にしてしまう</td>
                  </tr>
                  <tr>
                    <td>How-to-Test</td>
                    <td>どうテストすべきか？</td>
                    <td>
                      「このツール／手法さえ導入すれば解決する」という銀の弾丸思考
                    </td>
                  </tr>
                  <tr>
                    <td>価値</td>
                    <td>品質はどんな価値を生むか？</td>
                    <td>リスク低減の話ばかりで、売上・成長への貢献を語らない</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              以降のStep
              2〜4で、この3つのナラティブをそれぞれ実務でどう扱うかを見ていきます。
            </p>
          </section>

          {/* Section: #step2 */}
          <section id="step2">
            <span className="step-tag">STEP 02 / 10</span>
            <h2>所有権ナラティブ ―― 品質を全員のものにする</h2>
            <p>
              理想的な組織では、品質の責任はQAエンジニアや自動化エンジニアだけに閉じません。プロダクトマネージャー、デザイナー、エンジニア全員が「自分ごと」として品質に関わる状態を目指します。
            </p>
            <h3>実践のポイント</h3>
            <ul>
              <li>
                スプリントの計画段階から品質基準（Definition of Done）を全職種で合意する
              </li>
              <li>
                バグ報告を「テスターの仕事の成果物」ではなく「チーム全体の学び」として扱う
              </li>
              <li>品質に関する意思決定の場に、開発者・デザイナー・PMを必ず同席させる</li>
            </ul>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-2">
                <Mermaid chart={DIAGRAM_2} />
              </div>
            </div>
          </section>

          {/* Section: #step3 */}
          <section id="step3">
            <span className="step-tag">STEP 03 / 10</span>
            <h2>How-to-Testナラティブ ―― 銀の弾丸を捨てる</h2>
            <p>
              著者は「自動化さえ導入すれば品質問題はすべて解決する」という考え方を明確に否定しています。料理やスポーツに多様なスタイルがあるように、テストにも唯一の正解はなく、状況に応じたブレンドが必要だと説きます。
            </p>
            <p>
              書籍では、著名なテスト専門家
              <strong>Elisabeth Hendrickson</strong>
              が示した「テストで何を学びたいのか」という問いと、テストの種類を結びつける考え方が紹介されています（書籍66ページ付近）。「テストを実行すること」自体が目的ではなく、「そのテストから何を学びたいのか」を先に定義する姿勢が重要だとされています。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>知りたいこと（テストの問い）</th>
                    <th>適したテストの例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>この機能は仕様通りに動くか？</td>
                    <td>機能テスト・回帰テスト</td>
                  </tr>
                  <tr>
                    <td>ユーザーは直感的に使えるか？</td>
                    <td>探索的テスト・ユーザビリティテスト</td>
                  </tr>
                  <tr>
                    <td>想定外の負荷に耐えられるか？</td>
                    <td>負荷テスト・パフォーマンステスト</td>
                  </tr>
                  <tr>
                    <td>セキュリティ上の穴はないか？</td>
                    <td>セキュリティテスト</td>
                  </tr>
                  <tr>
                    <td>リリース後も安定して動き続けるか？</td>
                    <td>監視・本番環境でのテスト</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="callout">
              <span className="label">ポイント</span>
              <p>
                「何を自動化するか」より先に「何を学びたいか」を定義する。手法や1つのツールに依存する思考から抜け出すことが、成熟した品質戦略への第一歩。
              </p>
            </div>
          </section>

          {/* Section: #step4 */}
          <section id="step4">
            <span className="step-tag">STEP 04 / 10</span>
            <h2>価値ナラティブ ―― 品質を売上の言葉で語る</h2>
            <p>
              著者が最も力を入れて語るのが、この「価値のナラティブ」です。多くの品質チームは「リスクをどれだけ減らしたか」「コストをどれだけ抑えたか」という守りの言葉でしか語られません。しかし著者は、品質チームが事業成長（growth
              metric）に直結する成果を語れるようになるべきだと主張します。
            </p>
            <p>
              InfoQインタビューおよびTestGuildポッドキャストで紹介されている、成長指標（growth
              metric）の3類型は次の通りです。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>成長指標のタイプ</th>
                    <th>意味</th>
                    <th>代表企業の例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>アテンション型</strong>
                    </td>
                    <td>ユーザーがどれだけ製品に時間を使うか</td>
                    <td>SNS系プロダクトの日次アクティブユーザー（DAU）</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>トランザクション型</strong>
                    </td>
                    <td>価値の交換（取引）が成立した回数</td>
                    <td>Airbnbの「予約された宿泊数」</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>プロダクティビティ型</strong>
                    </td>
                    <td>ユーザーがどれだけ製品内で生産的な行動を取ったか</td>
                    <td>
                      Slackの「一定数のメッセージ送信で契約継続率が大きく上がる」という知見
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              著者が語る象徴的なエピソードとして、あるインドネシア向けサービスのサインアップ画面で「姓（Last
              Name）」を必須項目にしていたケースがあります。インドネシアでは姓を持たない人も多く、この必須項目が新規登録の妨げになっていました。テストチームがこれを指摘して修正した結果、サインアップ数が大きく伸び、経営層が初めて「品質チームは売上に貢献する」と認識するきっかけになったといいます。
            </p>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-3">
                <Mermaid chart={DIAGRAM_3} />
              </div>
            </div>
            <h3>実践のポイント</h3>
            <ul>
              <li>
                バグ報告のたびに「これは何ドルの節約/損失回避になるか」を可能な範囲で言語化する
              </li>
              <li>
                自社の成長指標（何が「価値」の単位なのか）を明確にし、品質チームの日々の意思決定をその指標に結びつける
              </li>
              <li>
                経営層への報告は「見つけたバグの数」ではなく「事業指標への影響」で語る
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
