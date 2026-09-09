import Mermaid from '../../components/Mermaid';
import Checklist from './Checklist';
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

const DIAGRAM_4 = `flowchart LR
    S1["① プロダクト<br/>マーケットフィット期<br/>（正しいものを<br/>作れているか検証）"] --> S2["② 予測可能性期<br/>（Predictability Stage）<br/>基盤・自動化への投資"]
    S2 --> S3["③ スケール期<br/>（Scaling Stage）<br/>自動化と探索的テストの<br/>バランス"]
    style S1 fill:#F2E4D0,stroke:#B8722E,color:#142433
    style S2 fill:#E4E9F2,stroke:#3B5A80,color:#142433
    style S3 fill:#DCEAE1,stroke:#2E6E49,color:#142433`;

const DIAGRAM_5 = `flowchart LR
    Idea["アイデア・企画"] --> Design["設計"]
    Design --> Code["実装"]
    Code --> Build["ビルド／CI"]
    Build --> Release["リリース"]
    Release --> Prod["本番運用"]
    Prod -.フィードバック.-> Idea
    style Idea fill:#F2E4D0,stroke:#B8722E,color:#142433
    style Design fill:#F2E4D0,stroke:#B8722E,color:#142433
    style Code fill:#E4E9F2,stroke:#3B5A80,color:#142433
    style Build fill:#E4E9F2,stroke:#3B5A80,color:#142433
    style Release fill:#DCEAE1,stroke:#2E6E49,color:#142433
    style Prod fill:#DCEAE1,stroke:#2E6E49,color:#142433`;

const DIAGRAM_6 = `flowchart TD
    QA["QAエンジニア"] <--> Dev["開発者"]
    Design["デザイナー"] <--> Dev
    Dev <--> PM["プロダクトマネージャー"]
    style QA fill:#DCEAE1,stroke:#2E6E49,color:#142433
    style Dev fill:#142433,stroke:#142433,color:#ffffff
    style Design fill:#F2E4D0,stroke:#B8722E,color:#142433
    style PM fill:#E4E9F2,stroke:#3B5A80,color:#142433`;

const DIAGRAM_7 = `flowchart TD
    PV["① 個人のビジョン<br/>自分は何を実現したいか"] --> Check{"② 会社のビジョンと<br/>方向性が一致しているか？"}
    Check -->|一致している| DV["③ 部門・チームのビジョン<br/>6ヶ月/12ヶ月後の理想像"]
    Check -->|一致していない| Rethink["キャリアの方向性を<br/>再検討する"]
    DV --> Daily["④ チームの日々の意思決定・行動"]
    style PV fill:#F2E4D0,stroke:#B8722E,color:#142433
    style DV fill:#E4E9F2,stroke:#3B5A80,color:#142433
    style Daily fill:#DCEAE1,stroke:#2E6E49,color:#142433`;

const DIAGRAM_8 = `flowchart TD
    Start(("スタート")) --> Step1["Step 1<br/>品質ナラティブを言語化"]
    Step1 --> Step2["Step 2<br/>所有権を全員に広げる"]
    Step2 --> Step3["Step 3<br/>テスト手法の思い込みを捨てる"]
    Step3 --> Step4["Step 4<br/>品質を売上の言葉で語る"]
    Step4 --> Step5["Step 5<br/>成熟度に応じ戦略を見直す"]
    Step5 --> Step6["Step 6<br/>継続的テストを設計"]
    Step6 --> Step7["Step 7<br/>ペアリングで文化を浸透"]
    Step7 --> Step8["Step 8<br/>ローカルペルソナを考慮"]
    Step8 --> Step9["Step 9<br/>本番テストの土台を整備"]
    Step9 --> Step10["Step 10<br/>ビジョンを描き鼓舞する"]
    Step10 --> Goal(("品質文化が<br/>根付いた組織"))
    style Start fill:#142433,stroke:#142433,color:#ffffff
    style Goal fill:#142433,stroke:#142433,color:#ffffff`;

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

          {/* Section: #step5 */}
          <section id="step5">
            <span className="step-tag">STEP 05 / 10</span>
            <h2>プロダクトの成熟度に応じて戦略を変える</h2>
            <p>
              書籍第5章では、プロダクトのライフサイクル（成熟度）によって、最適な品質戦略・テスト戦略が変化することが解説されています。「今のやり方が6ヶ月後・12ヶ月後にも正しいとは限らない」という前提を持つことが重要です。
            </p>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-4">
                <Mermaid chart={DIAGRAM_4} />
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>段階</th>
                    <th>主な目的</th>
                    <th>テスト戦略の重心</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>プロダクトマーケットフィット期</td>
                    <td>「正しいものを作れているか」の検証</td>
                    <td>ユニットテスト中心、フル自動化は急がない</td>
                  </tr>
                  <tr>
                    <td>予測可能性期</td>
                    <td>安定した基盤の構築</td>
                    <td>自動化への投資を本格化させる</td>
                  </tr>
                  <tr>
                    <td>スケール期</td>
                    <td>効率的な拡大</td>
                    <td>自動化と探索的テストのバランスを取り直す</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              著者は「一部のチームは、この評価を継続的にやり直すべきなのに、一度決めたやり方に固執してしまう」と指摘しています。プロダクトの変化・顧客動向の変化・チームスキルの変化のいずれかが起きたら、戦略を見直すタイミングです。
            </p>
          </section>

          {/* Section: #step6 */}
          <section id="step6">
            <span className="step-tag">STEP 06 / 10</span>
            <h2>継続的テスト（Continuous Testing）を設計する</h2>
            <p>
              「継続的テスト」と聞くと、CI/CDパイプラインでの自動テスト実行を思い浮かべる方が多いかもしれません。しかし著者はより広い定義を採用しています。
            </p>
            <div className="callout definition">
              <span className="label">定義</span>
              <p>
                継続的テストとは、開発ライフサイクルのあらゆる段階でアプリケーションをテストする能力のことである。コードが1行も書かれる前から、リリース後の運用に至るまで、テストは継続する。
              </p>
            </div>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-5">
                <Mermaid chart={DIAGRAM_5} />
              </div>
            </div>
            <h3>この視点を採用するメリット</h3>
            <ul>
              <li>
                <strong>問題の先回り</strong> ――
                コードが書かれる前に「アイデアそのもの」や「設計」を検証できる
              </li>
              <li>
                <strong>テスタビリティの作り込み</strong> ――
                TDDなどを通じて、最初から「テストしやすい設計」を意識できる
              </li>
              <li>
                <strong>手戻りコストの削減</strong> ――
                後工程で見つかるほど修正コストが高くなるバグを、早期に発見できる
              </li>
            </ul>
          </section>

          {/* Section: #step7 */}
          <section id="step7">
            <span className="step-tag">STEP 07 / 10</span>
            <h2>ペアリングで品質文化を組織に浸透させる</h2>
            <p>
              著者はInfoQインタビューの中で、ペアリング（Pairing）が品質文化の浸透に有効だと述べています。ポイントは「共感（empathy）」の構築です。
            </p>
            <ul>
              <li>
                QAエンジニアと開発者がペアを組むことで、開発者は「品質を意識するとはどういうことか」を体感的に理解する
              </li>
              <li>
                デザイナーと開発者がペアを組むことで、デザイン意図が実装に正しく反映されやすくなる
              </li>
              <li>
                例として、Atlassianでは品質チームと開発者のペアリングが実践されている
              </li>
            </ul>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-6">
                <Mermaid chart={DIAGRAM_6} />
              </div>
            </div>
            <h3>実践のポイント</h3>
            <ul>
              <li>定例のペア作業（モブテスト・ペアテスト）を週次で設定する</li>
              <li>
                ペアリングの目的を「作業の分担」ではなく「相互理解」として位置づける
              </li>
              <li>
                異なる職種間のインタラクションが増えるほど、プロダクト全体への理解が深まり、結果的に品質が向上する
              </li>
            </ul>
          </section>

          {/* Section: #step8 */}
          <section id="step8">
            <span className="step-tag">STEP 08 / 10</span>
            <h2>ローカルペルソナを意識したテスト戦略</h2>
            <p>
              マーケティングや製品企画で使われる「ペルソナ」は、多くの場合かなり大まかな人物像（例：「エンタープライズのAaron」）です。しかしエンジニアリング・品質の観点では、利用されるOS・デバイス・地域の組み合わせすべてが1つの「ローカルペルソナ」になり得ます。
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>企業の取り組み例</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Airbnb</td>
                    <td>
                      エンジニアを実際の現地に派遣し、ローカライズ版アプリの使われ方を体感させる
                    </td>
                  </tr>
                  <tr>
                    <td>Google（Google Mapsなど）</td>
                    <td>
                      世界各地の既存ユーザーに、新機能（3Dストリートビューなど）のローカルテストを依頼
                    </td>
                  </tr>
                  <tr>
                    <td>Global App Testing（著者らの会社）</td>
                    <td>
                      105カ国以上・数万人のテスターを活用したクラウドテスティング
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              このステップの狙いは、「1つのUIが世界中どこでも同じように機能する」という思い込みを捨てることです。前述のインドネシアの「姓」フィールドの例も、まさにローカルペルソナへの配慮不足から生まれた問題でした。
            </p>
          </section>

          {/* Section: #step9 */}
          <section id="step9">
            <span className="step-tag">STEP 09 / 10</span>
            <h2>本番環境でのテスト（Testing in Production）</h2>
            <p>
              「本番環境でテストする」という考え方には抵抗を感じる人も多いはずです。著者は、テスト自動化・ソフトウェア観測可能性（Observability）の分野で知られるエンジニア
              <strong>Cindy Sridharan</strong> の記事「Testing in Production, the Safe
              Way」を引用しながら、次のように整理しています。
            </p>
            <ul>
              <li>
                本番環境でのテストは、
                <strong>すべてのチームに向いているわけではない</strong>
              </li>
              <li>
                実施するには、高度なインフラと、そもそも「本番でテストしやすい」設計思想が前提になる
              </li>
              <li>
                十分な自動化基盤が整っていることが、安全に本番テストを行うための土台になる
              </li>
            </ul>
            <h3>実践のポイント（本番テストを始める前のチェック）</h3>
            <Checklist />
          </section>

          {/* Section: #step10 */}
          <section id="step10">
            <span className="step-tag">STEP 10 / 10</span>
            <h2>ビジョンを描き、チームを鼓舞する</h2>
            <p>
              著者が本書の最後に置いた（本来は冒頭に置きたかったと語る）テーマが「ビジョン」です。リーダーがまず自分自身の人生の方向性（個人のビジョン）を明確にし、それが会社のビジョンと重なっているかを確認する。そのうえで、チーム・部門のビジョンを描くという順序を提唱しています。
            </p>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-7">
                <Mermaid chart={DIAGRAM_7} />
              </div>
            </div>
            <div className="callout insight">
              <span className="label">着眼点</span>
              <p>
                著者は、多くの人が会社のビジョンそのものより「その会社が自分個人のビジョン実現に役立つかどうか」を気にしている、と指摘しています。リーダーがこの順番（個人
                → 会社との整合 →
                チーム）を意識することで、初めてチームを本気で鼓舞できるとしています。
              </p>
            </div>
            <p>
              また、リーダーシップに不可欠なもう一つのスキルとして、著者は説得力・影響力（Persuasion
              &amp;
              Influence）を挙げています。エンジニアリング出身の人ほど「説得」をネガティブに捉えがちですが、相手のゴールや懸念を理解し、論理的に語ることは、家庭でも職場でも役立つ普遍的なスキルだと述べています。
            </p>
          </section>

          {/* Section: #roadmap */}
          <section id="roadmap">
            <h2>
              <span className="num">02</span> まとめ：品質リーダーへのロードマップ
            </h2>
            <p>
              ここまでの10ステップを、実践する順番の目安として1つのフローにまとめます（あくまで目安であり、組織の状況に応じて並び替えて構いません）。
            </p>
            <div className="diagram notranslate" translate="no">
              <div className="diagram-live notranslate" translate="no" id="diag-8">
                <Mermaid chart={DIAGRAM_8} />
              </div>
            </div>
            <div className="table-wrap">
              <table className="roadmap-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ステップ</th>
                    <th>一言でいうと</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>品質ナラティブの理解</td>
                    <td>自社の「品質の語られ方」を可視化する</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>所有権ナラティブ</td>
                    <td>品質を全員の仕事にする</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>How-to-Testナラティブ</td>
                    <td>銀の弾丸探しをやめる</td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>価値ナラティブ</td>
                    <td>品質を「売上・成長」の言葉で語る</td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>成熟度に応じた戦略</td>
                    <td>プロダクトの段階ごとに戦略を見直す</td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>継続的テスト</td>
                    <td>テストを開発ライフサイクル全体に広げる</td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>ペアリング</td>
                    <td>職種を越えた共感で品質文化を育てる</td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td>ローカルペルソナ</td>
                    <td>「世界中どこでも同じ」という思い込みを捨てる</td>
                  </tr>
                  <tr>
                    <td>09</td>
                    <td>本番テスト</td>
                    <td>安全に本番環境で学ぶ仕組みを整える</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>ビジョン</td>
                    <td>個人→会社→チームの順でビジョンを揃える</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
