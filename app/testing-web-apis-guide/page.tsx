import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Checklist from './Checklist';
import Mermaid from '../../components/Mermaid';
import './testing-web-apis-guide.css';

export const metadata: Metadata = {
  title: 'Web APIテスト実践ガイド ― 初学者のためのステップバイステップ・ベストプラクティス | QA Studies',
  description:
    'Mark Winteringham著『Testing Web APIs』、Martin Fowler・Kent C. Doddsのテスト戦略論、OWASP・Pact・k6等の標準仕様に基づくWeb APIテスト初学者向け完全ガイド。',
};

const DIAGRAM_TEST_PYRAMID = `flowchart TB
subgraph L3["少数: E2Eテスト（画面を含む一連のユーザーシナリオ）"]
E["遅い・コストが高いが本物の使われ方に近い"]
end
subgraph L2["中程度: 統合・契約テスト（API・サービス間連携）"]
I["サービス境界での入出力・契約を確認"]
end
subgraph L1["多数: 単体テスト（関数・モジュール単位）"]
U["高速・安定・原因特定が容易"]
end
L1 --> L2 --> L3`;

const DIAGRAM_TESTING_TROPHY = `flowchart TB
subgraph T4["少数: E2Eテスト"]
E2["主要なユーザーフローのみ"]
end
subgraph T3["最も厚い: 統合テスト"]
IT["APIテストの多くはここに分類される"]
end
subgraph T2["中程度: 単体テスト"]
UT["複雑なロジック・関数単位"]
end
subgraph T1["土台: 静的解析"]
ST["Lint・型チェックなど"]
end
T1 --> T2 --> T3 --> T4`;

const DIAGRAM_RISK_DRIVEN = `flowchart TD
A["APIの仕様・利用シーンを理解する"] --> B["品質特性を定義する<br/>例: 正確性・性能・安全性・可用性"]
B --> C["リスクを洗い出す<br/>例: 認可漏れ・大量データでの遅延"]
C --> D["リスクの大きさ×発生確率で優先度を付ける"]
D --> E["優先度に応じてテスト活動を選ぶ"]
E --> F["設計テスト / 探索的テスト / 自動化 / 契約 / 性能 / セキュリティ"]`;

const DIAGRAM_HTTP_FLOW = `flowchart TD
A["テスト対象のリクエストを組み立てる<br/>メソッド・URL・ヘッダー・ボディ"] --> B["APIを呼び出す"]
B --> C["レスポンスを受け取る"]
C --> D["ステータスコードを検証する"]
D --> E["レスポンスボディ・スキーマを検証する"]
E --> F{"期待通りか?"}
F -- "はい" --> G["テスト成功として記録"]
F -- "いいえ" --> H["失敗内容を明確なメッセージで報告"]`;

const DIAGRAM_EXPLORATORY = `flowchart TD
A["チャーターを決める<br/>例: 認可まわりのリスクを探る"] --> B["セッションで実際に触る"]
B --> C["気づいたことをメモする"]
C --> D["バグ・疑問点を記録する"]
D --> E["チームに共有する"]
E --> A`;

const DIAGRAM_PACT_FLOW = `sequenceDiagram
participant C as コンシューマー
participant B as Pactブローカー
participant P as プロバイダー

C->>C: モックを使った単体テストで契約を生成
C->>B: 契約(Pact)を公開する
P->>B: 最新の契約を取得する
P->>P: 契約内容を実際のプロバイダーに対して検証する
P->>B: 検証結果を公開する
C->>B: can-i-deploy でデプロイ可否を確認
C->>C: 判定がOKならデプロイを実行する
C->>B: record-deployment で環境の状態を記録する`;

const DIAGRAM_LOAD_TEST_TYPES = `flowchart TD
A["性能テストの目的を決める"] --> B{"何を確認したいか"}
B -- "通常時の性能確認" --> C["スモークテスト<br/>少人数で基本動作を確認"]
B -- "想定ピーク負荷への耐性" --> D["負荷テスト<br/>想定ユーザー数で一定時間実行"]
B -- "限界点の把握" --> E["ストレステスト<br/>限界を超えるまで負荷を上げる"]
B -- "急激なアクセス増への耐性" --> F["スパイクテスト<br/>短時間で急増させる"]
B -- "長時間の安定性" --> G["ソークテスト<br/>長時間一定負荷をかけ続ける"]`;

const DIAGRAM_SECURITY_FLOW = `flowchart TD
A["脅威モデリング<br/>例: STRIDEで脅威を洗い出す"] --> B["設計レビューにセキュリティ観点を追加"]
B --> C["探索的テストでの意図的な誤用<br/>他人のIDを指定する等"]
C --> D["自動テストへの組み込み<br/>認可漏れ・レート制限の回帰テスト"]
D --> E["継続的なスキャン<br/>依存パッケージ・設定の定期チェック"]`;

const DIAGRAM_CICD_FLOW = `flowchart TD
A["コードをコミット/プッシュ"] --> B["静的解析・単体テスト<br/>数秒〜数十秒で完了"]
B --> B1{"合格したか"}
B1 -- "いいえ" --> K["マージ/デプロイをブロックし<br/>修正して再実行"]
B1 -- "はい" --> C["契約テスト・スキーマ検証<br/>数十秒〜数分"]
C --> C1{"合格したか"}
C1 -- "いいえ" --> K
C1 -- "はい" --> D["統合テスト<br/>ステージング環境などで実行"]
D --> D1{"合格したか"}
D1 -- "いいえ" --> K
D1 -- "はい" --> E{"パフォーマンス/セキュリティテストの対象か"}
E -- "はい" --> F["性能テスト・セキュリティスキャンを実行"]
E -- "いいえ" --> G["本番デプロイへ進む"]
F --> J{"テストは合格したか"}
J -- "はい" --> G
J -- "いいえ" --> K
G --> H["本番環境への段階的デプロイ"]
H --> I["本番監視・シンセティックモニタリング"]`;

const DIAGRAM_PROD_OBSERVATION = `flowchart TD
A["SLI（サービスレベル指標）を決める<br/>例: p99レイテンシ・エラー率"] --> B["SLO（サービスレベル目標）を設定する"]
B --> C["本番トラフィックを継続的に観測する"]
C --> D{"SLOを逸脱しているか"}
D -- "はい" --> E["アラート・トリガーで検知し対応する"]
D -- "いいえ" --> F["合成監視(シンセティックモニタリング)で定期的に健全性を確認"]
E --> F
F --> C`;

export default function TestingWebApisGuidePage() {
  return (
    <div className="testing-web-apis-page">
      <div className="layout">
        <NavBar />

        <main className="main">
          <header className="hero">
            <span className="eyebrow">Beginner Guide · Web API Testing</span>
            <h1>
              Web APIテスト実践ガイド
              <br />
              初学者のためのステップバイステップ・ベストプラクティス
            </h1>
            <p className="lede">
              Mark Winteringham 著『Testing Web APIs』（Manning
              Publications、O'Reillyで閲覧）の構成、Martin Fowler・Kent C. Dodds
              によるテスト戦略論、OWASP・Pact・Postman・Grafana k6
              などの業界標準的な情報源をもとに、2026年8月時点の最新知見を踏まえて独自にまとめた解説書です。各セクションの根拠URLは末尾の「参考文献・出典」に記載しています。
            </p>
            <div className="meta-row">
              <span className="chip">全15章 · 10個のMermaid図解</span>
              <span className="chip">調査基準日: 2026年8月28日</span>
              <span className="chip">対象: API テスト初学者</span>
            </div>
          </header>

          <div className="prose">
            {/* Section 1 */}
            <section id="section-1" className="section">
              <h2>
                <span className="num">1</span>はじめに：なぜWeb APIのテストが重要なのか
              </h2>
              <p>
                現代のアプリケーションの多くは、画面（UI）の裏側でWeb
                API（主にHTTP経由でJSONなどをやり取りするインターフェース）が実際のデータ処理を担っています。フロントエンド、モバイルアプリ、他社サービスなど、複数のクライアントが同じAPIを利用することも珍しくありません。
              </p>
              <p>
                そのため、API自体にバグや仕様変更があると、影響はUIの不具合だけにとどまらず、連携している他システム全体に波及します。API層は「サイレントヒーロー」であると同時に、障害が起きたときの影響範囲が広い「サイレントリスク」でもあるのです。
              </p>
              <p>
                Web
                APIテストとは、HTTP（またはgRPC・GraphQLなど）のレイヤーでリクエストを送り、レスポンスの正しさ・パフォーマンス・信頼性・セキュリティを検証する活動全般を指します。UIを経由しないため、UIテストよりも高速かつ安定して不具合を検出できるという利点があります。
              </p>
              <p>このガイドでは、初めてAPIテストに取り組む方が迷わないように、以下の順序で解説します。</p>
              <ul>
                <li>
                  <strong>考え方</strong>：何をどれだけテストすべきかを決めるための土台（テストピラミッド／トロフィー、リスクベース思考）
                </li>
                <li>
                  <strong>手を動かす基本</strong>：仕様理解 → 基本的なリクエスト/レスポンス検証 → 探索的テスト
                </li>
                <li>
                  <strong>仕組み化</strong>：自動化、契約テスト、パフォーマンステスト、セキュリティテスト
                </li>
                <li>
                  <strong>運用への組み込み</strong>：CI/CD統合、本番監視
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="section">
              <h2>
                <span className="num">2</span>Web APIテストの全体像（テストピラミッドとテスティング・トロフィー）
              </h2>

              <h3>2.1 テストピラミッド</h3>
              <p>
                「テストピラミッド」は、実行速度と粒度が異なる複数のテストをバランスよく組み合わせるための考え方です。Martin
                Fowler のブログに掲載された Ham Vocke の "The Practical Test Pyramid"
                では、単体テストを土台に多く配置し、統合テストを中間層に、E2E（エンドツーエンド）テストを頂点に少数だけ配置するという構成が紹介されています。
              </p>

              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_TEST_PYRAMID} />
              </div>
              <figcaption className="fig-cap">
                図1: テストピラミッド（下ほど多く・高速、上ほど少なく・低速）
              </figcaption>

              <h3>2.2 テスティング・トロフィー（Testing Trophy）</h3>
              <p>
                一方で、JavaScriptコミュニティで著名な Kent C. Dodds は、"Write tests. Not too many. Mostly integration."
                というブログ記事で、開発ツールの進化により統合テストが以前ほど遅くも壊れやすくもなくなったと指摘し、統合テストに比重を置く「テスティング・トロフィー」という考え方を提唱しました。静的解析（Lint/型チェック）を最下層に加え、単体テストよりも統合テストを厚くする点がピラミッドとの大きな違いです。
              </p>

              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_TESTING_TROPHY} />
              </div>
              <figcaption className="fig-cap">
                図2: テスティング・トロフィー（統合テストが最も厚い層になる）
              </figcaption>

              <h3>2.3 どちらを使うべきか</h3>
              <p>
                Martin Fowler 自身も 2021年の記事 "On the Diverse And Fantastical Shapes of Testing"
                で、ピラミッド・ハニカム・トロフィーいずれも「テストの単位を誤解なく揃え、レイヤーごとに適量を保つ」という本質は共通していると述べています。初学者は、以下の表のように「自分のプロジェクトではどの形が実態に近いか」を意識する程度で十分です。重要なのは形そのものより、
                <strong>各テストが速く・信頼でき・失敗理由が明確であること</strong>です。
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>モデル</th>
                      <th>最重要視する層</th>
                      <th>向いている状況</th>
                      <th>注意点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ピラミッド型</td>
                      <td>単体テスト</td>
                      <td>複雑なビジネスロジック・計算処理が多いサービス</td>
                      <td>API結合部分の不具合を見落としやすい</td>
                    </tr>
                    <tr>
                      <td>トロフィー型</td>
                      <td>統合テスト</td>
                      <td>DBや外部APIとの入出力が主体のWebサービス</td>
                      <td>テストの実行時間・テストデータの管理コストが増加しやすい</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="section">
              <h2>
                <span className="num">Step 0</span>テスト計画とリスクベース思考
              </h2>
              <p>
                「すべてのエンドポイントをあらゆる組み合わせでテストする」ことは現実的に不可能です。限られた時間とリソースで最大の効果を上げるために、Winteringham
                は著書『Testing Web APIs』の中で、品質特性（正確性・パフォーマンス・セキュリティ・可用性など）ごとにリスクを洗い出し、テスト活動を選ぶ「リスクドリブン」なアプローチを提唱しています。
              </p>

              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_RISK_DRIVEN} />
              </div>
              <figcaption className="fig-cap">
                図3: リスクベースでテスト活動を選ぶ流れ
              </figcaption>

              <p>この段階でよく使われる質問の例です。</p>
              <ul>
                <li>
                  このエンドポイントが誤動作すると、誰が・どの程度困るか（金銭的損失、情報漏えい、体験の劣化など）
                </li>
                <li>
                  変更頻度が高い部分はどこか（頻繁に壊れやすい＝厚くテストすべき）
                </li>
                <li>
                  外部サービスや他チームとの境界はどこか（契約テストの対象になりやすい）
                </li>
                <li>
                  大量アクセスや大きなペイロードが想定される箇所はどこか（性能テストの対象）
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="section">
              <h2>
                <span className="num">Step 1</span>APIの仕様を理解する（OpenAPI/Swagger）
              </h2>
              <p>
                テストを書く前に、対象APIの「あるべき姿」を明文化した仕様書（OpenAPI/Swagger）を確認・整備します。仕様書はテストの土台であり、後述する自動生成型テスト（Schemathesis
                など）や契約テストの入力にもなります。
              </p>
              <h3>確認すべき主なポイント</h3>
              <ul>
                <li>
                  エンドポイントとHTTPメソッドの一覧（GET/POST/PUT/PATCH/DELETEなど）
                </li>
                <li>
                  リクエスト／レスポンスのスキーマ（必須フィールド、型、フォーマット）
                </li>
                <li>認証方式（APIキー、OAuth 2.0、Bearerトークンなど）</li>
                <li>
                  ステータスコードの使い分け（成功・クライアントエラー・サーバーエラー）
                </li>
                <li>バージョニング方針（URLパス、ヘッダーなど）</li>
              </ul>
              <p>
                仕様と実装が乖離していないかを機械的に確認する「スキーマ適合性テスト」も、この段階の延長として重要です。Schemathesis
                のようなツールはOpenAPI仕様を読み込み、境界値やあり得ない入力値を自動生成してAPIに送信し、レスポンスが仕様通りかを検証します（詳しくは7.2節「代表的なツールの比較」を参照）。
              </p>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="section">
              <h2>
                <span className="num">Step 2</span>基本のHTTPテスト設計（ステータスコードとレスポンス検証）
              </h2>

              <h3>5.1 テストの基本的な流れ</h3>
              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_HTTP_FLOW} />
              </div>
              <figcaption className="fig-cap">図4: 基本的なAPIテストの流れ</figcaption>

              <h3>5.2 代表的なHTTPステータスコードとテスト観点</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>コード帯</th>
                      <th>意味</th>
                      <th>テストで確認すべきこと</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>200 OK</td>
                      <td>リクエスト成功</td>
                      <td>レスポンスボディのデータ構造・型・値が仕様通りか</td>
                    </tr>
                    <tr>
                      <td>201 Created</td>
                      <td>リソース作成成功</td>
                      <td>Locationヘッダーに新リソースのURLが含まれているか</td>
                    </tr>
                    <tr>
                      <td>204 No Content</td>
                      <td>成功したが返すボディなし</td>
                      <td>ボディが空であること（DELETE処理などでよく使われる）</td>
                    </tr>
                    <tr>
                      <td>400 Bad Request</td>
                      <td>クライアント側の入力不正</td>
                      <td>どのフィールドがなぜ不正なのか、明確なエラーメッセージが返るか</td>
                    </tr>
                    <tr>
                      <td>401 Unauthorized</td>
                      <td>認証が必要・失敗</td>
                      <td>トークン未指定・期限切れ時に適切に弾かれるか</td>
                    </tr>
                    <tr>
                      <td>403 Forbidden</td>
                      <td>認証済みだが権限不足</td>
                      <td>他ユーザーのリソースや管理者機能へのアクセスが遮断されるか</td>
                    </tr>
                    <tr>
                      <td>404 Not Found</td>
                      <td>存在しないリソース</td>
                      <td>存在しないIDを指定したときに正しく返るか</td>
                    </tr>
                    <tr>
                      <td>422 Unprocessable Entity</td>
                      <td>構文は正しいが処理不能な値</td>
                      <td>バリデーションエラーの詳細（RFC 7807/9457形式など）が返るか</td>
                    </tr>
                    <tr>
                      <td>500 Internal Server Error</td>
                      <td>サーバー側の不具合</td>
                      <td>通常のテストでは発生してはならない（スタックトレースが漏洩していないかも確認）</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>5.3 初学者が最初に書くべき基本テストセット</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>テスト観点</th>
                      <th>目的</th>
                      <th>リクエスト例</th>
                      <th>期待される結果</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ハッピーパス（正常系）</td>
                      <td>最も基本的なユースケースが動作することを確認</td>
                      <td>全必須パラメータを含む正しいPOST</td>
                      <td>201 Created + 作成されたリソースのJSON</td>
                    </tr>
                    <tr>
                      <td>必須項目欠落</td>
                      <td>バリデーションが機能しているかを確認</td>
                      <td>必須の <code>name</code> を除いたPOST</td>
                      <td>400 または 422 + 欠落フィールドを示すエラー</td>
                    </tr>
                    <tr>
                      <td>境界値テスト</td>
                      <td>文字数・数値の境界で正しく動作するか</td>
                      <td>最大文字数ちょうどの文字列を送信</td>
                      <td>200/201（超過時は400/422）</td>
                    </tr>
                    <tr>
                      <td>認証なしアクセス</td>
                      <td>認可の抜け穴がないかを確認</td>
                      <td>AuthorizationヘッダーなしでGET</td>
                      <td>401 Unauthorized</td>
                    </tr>
                    <tr>
                      <td>存在しないID</td>
                      <td>404ハンドリングを確認</td>
                      <td><code>GET /users/99999999</code></td>
                      <td>404 Not Found</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="section">
              <h2>
                <span className="num">Step 3</span>探索的テスト（Exploratory Testing）
              </h2>
              <p>
                仕様書に書かれた通りにテストするだけでは、「仕様書自体の抜け漏れ」や「予期せぬ使い方の組み合わせ」によるバグを見つけられません。テスト設計と実行を並行して行い、観察結果をもとに次のテストを動的に決めるのが「探索的テスト」です。
              </p>
              <p>
                Winteringham
                は「チャーター（探索の目的・範囲を短く書いたメモ）」を用意し、時間を区切ってセッション形式で実施する方法を紹介しています。
              </p>

              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_EXPLORATORY} />
              </div>
              <figcaption className="fig-cap">
                図5: 探索的テストのセッションサイクル
              </figcaption>

              <p>探索的テストのアイデア出しには、次のような観点が役立ちます。</p>
              <ul>
                <li>「もし◯◯だったら？」という条件の組み合わせを変えてみる</li>
                <li>
                  実際のユーザーが行いそうな“変則的な操作順”を試す（例：作成前に削除を呼ぶ）
                </li>
                <li>
                  同じリソースに対するリクエストを並列に送ってみる（レースコンディションの確認）
                </li>
                <li>ドキュメントに書かれていない挙動を探す</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="section">
              <h2>
                <span className="num">Step 4</span>テストの自動化とツール選定
              </h2>

              <h3>7.1 自動化の目的を誤解しない</h3>
              <p>
                自動化は「テストを書けば安心」という魔法ではなく、<strong>変化を検知する仕組み</strong>です。仕様やコードが変わったときに、意図しない差分（リグレッション）へ素早く気づくことが目的だと理解しておくと、過剰なテストやメンテナンスコストの肥大化を避けやすくなります。
              </p>

              <h3>7.2 代表的なツールの比較</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>ツール</th>
                      <th>主な用途</th>
                      <th>特徴</th>
                      <th>学習コスト（目安）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Postman / Newman</td>
                      <td>手動確認〜CI組み込みまで幅広く対応</td>
                      <td>GUIで直感的、JavaScriptでアサーション記述、コレクション共有が容易</td>
                      <td>低</td>
                    </tr>
                    <tr>
                      <td>REST Assured（Java）</td>
                      <td>JVM系プロジェクトの自動テスト</td>
                      <td>BDD風の読みやすい記法、Javaエコシステムと親和性が高い</td>
                      <td>中</td>
                    </tr>
                    <tr>
                      <td>Supertest（Node.js）</td>
                      <td>Node/Express等のAPIテスト</td>
                      <td>Jest/Mochaと組み合わせやすい、CI高速</td>
                      <td>中</td>
                    </tr>
                    <tr>
                      <td>pytest + requests</td>
                      <td>Python製APIの自動テスト</td>
                      <td>シンプルで書きやすく、フィクスチャ管理がしやすい</td>
                      <td>低〜中</td>
                    </tr>
                    <tr>
                      <td>Schemathesis</td>
                      <td>OpenAPI仕様からのプロパティベーステスト</td>
                      <td>仕様さえあれば大量の境界値・異常系を自動生成</td>
                      <td>中</td>
                    </tr>
                    <tr>
                      <td>k6（Grafana Labs）</td>
                      <td>負荷・性能テスト</td>
                      <td>コードとしてバージョン管理でき、CIに組み込みやすい</td>
                      <td>中</td>
                    </tr>
                    <tr>
                      <td>Pact</td>
                      <td>消費者駆動契約テスト</td>
                      <td>マイクロサービス間の互換性担保に特化</td>
                      <td>中〜高</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>7.3 自動テストを書くときの原則</h3>
              <ul>
                <li>
                  <strong>1テスト1関心事</strong>：1つのテストで複数の観点を混在させない（失敗時に原因を特定しやすくするため）
                </li>
                <li>
                  <strong>独立性を保つ</strong>：各テストが自分でデータを準備し、後片付けまで行う。実行順に依存させない
                </li>
                <li>
                  <strong>環境変数の活用</strong>：ベースURLや認証情報はハードコードせず、環境（dev/staging/prod）ごとに切り替えられるようにする
                </li>
                <li>
                  <strong>記述的な名前を付ける</strong>：<code>test_1</code> ではなく
                  <code>returns_400_when_email_is_missing</code>
                  のように、失敗時にログを見ただけで内容が分かる名前にする
                </li>
                <li>
                  <strong>外部依存はスタブ化する</strong>：外部APIに依存するテストは、モック／スタブで置き換えて速度と決定性を確保する
                </li>
              </ul>

              <h3>7.4 簡単なテストコード例（pytest + requestsのイメージ）</h3>
              <div className="code-block">
                <div className="code-label">Python · pytest + requests</div>
                <pre>
                  <code className="hljs language-python">
                    <div className="code-line"><span className="hljs-keyword">import</span> os</div>
                    <div className="code-line"><span className="hljs-keyword">import</span> uuid</div>
                    <div className="code-line"><span className="hljs-keyword">from</span> urllib.parse <span className="hljs-keyword">import</span> urljoin</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-keyword">import</span> pytest</div>
                    <div className="code-line"><span className="hljs-keyword">import</span> requests</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-comment"># 環境（dev/staging/prod）ごとに切り替えられるよう環境変数から読み込む</span></div>
                    <div className="code-line"><span className="hljs-variable constant_">BASE_URL</span> = os.environ[<span className="hljs-string">&quot;API_BASE_URL&quot;</span>]</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-comment"># (接続タイムアウト, 読み取りタイムアウト)。前者は接続確立まで、後者はデータを</span></div>
                    <div className="code-line"><span className="hljs-comment"># 受信する間隔の上限であり、リクエスト全体の所要時間の上限ではない。</span></div>
                    <div className="code-line"><span className="hljs-comment"># 「通信が途絶えたまま待ち続ける」ことは防げるが、全体の期限が必要なら別途管理する</span></div>
                    <div className="code-line"><span className="hljs-variable constant_">TIMEOUT</span> = (<span className="hljs-number">3.05</span>, <span className="hljs-number">10</span>)</div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-keyword">def</span> <span className="hljs-title function_">_resolve_user_url</span>(created: requests.Response, email: <span className="hljs-built_in">str</span>) -&gt; <span className="hljs-built_in">str</span>:</div>
                    <div className="code-line">    <span className="hljs-string">&quot;&quot;&quot;作成済みユーザーの操作先URLを決める。</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-string">    レスポンスボディの id を第一候補としつつ、ボディが不正・id が欠落していても</span></div>
                    <div className="code-line"><span className="hljs-string">    作成済みユーザーを追跡できるよう、Location ヘッダーと一意なメールアドレスでの</span></div>
                    <div className="code-line"><span className="hljs-string">    検索へ順にフォールバックする。</span></div>
                    <div className="code-line"><span className="hljs-string">    &quot;&quot;&quot;</span></div>
                    <div className="code-line">    <span className="hljs-keyword">try</span>:</div>
                    <div className="code-line">        user_id = created.json()[<span className="hljs-string">&quot;id&quot;</span>]</div>
                    <div className="code-line">    <span className="hljs-keyword">except</span> (<span className="hljs-built_in">ValueError</span>, <span className="hljs-built_in">KeyError</span>, <span className="hljs-built_in">TypeError</span>):</div>
                    <div className="code-line">        <span className="hljs-comment"># ボディがJSONでない／id が無い／構造が想定と違う場合はフォールバックへ回す</span></div>
                    <div className="code-line">        user_id = <span className="hljs-literal">None</span></div>
                    <div className="code-line">    <span className="hljs-keyword">if</span> user_id <span className="hljs-keyword">is</span> <span className="hljs-keyword">not</span> <span className="hljs-literal">None</span>:</div>
                    <div className="code-line">        <span className="hljs-keyword">return</span> <span className="hljs-string">f&quot;</span>{'{'}<span className="hljs-variable constant_">BASE_URL</span>{'}'}<span className="hljs-string">/users/</span>{'{'}user_id{'}'}<span className="hljs-string">&quot;</span></div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="hljs-comment"># フォールバック1: 201 とともに返る Location ヘッダー（相対URLのこともある）</span></div>
                    <div className="code-line">    location = created.headers.get(<span className="hljs-string">&quot;Location&quot;</span>)</div>
                    <div className="code-line">    <span className="hljs-keyword">if</span> location:</div>
                    <div className="code-line">        <span className="hljs-keyword">return</span> urljoin(<span className="hljs-string">f&quot;</span>{'{'}<span className="hljs-variable constant_">BASE_URL</span>{'}'}<span className="hljs-string">/&quot;</span>, location)</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="hljs-comment"># フォールバック2: テストごとに一意にしたメールアドレスで検索して特定する</span></div>
                    <div className="code-line">    found = requests.get(<span className="hljs-string">f&quot;</span>{'{'}<span className="hljs-variable constant_">BASE_URL</span>{'}'}<span className="hljs-string">/users&quot;</span>, params={'{'}<span className="hljs-string">&quot;email&quot;</span>: email{'}'}, timeout=<span className="hljs-variable constant_">TIMEOUT</span>)</div>
                    <div className="code-line">    <span className="hljs-keyword">if</span> found.status_code == <span className="hljs-number">200</span>:</div>
                    <div className="code-line">        <span className="hljs-keyword">for</span> user <span className="hljs-keyword">in</span> found.json().get(<span className="hljs-string">&quot;items&quot;</span>, []):</div>
                    <div className="code-line">            <span className="hljs-keyword">if</span> user.get(<span className="hljs-string">&quot;email&quot;</span>) == email <span className="hljs-keyword">and</span> <span className="hljs-string">&quot;id&quot;</span> <span className="hljs-keyword">in</span> user:</div>
                    <div className="code-line">                <span className="hljs-keyword">return</span> <span className="hljs-string">f&quot;</span>{'{'}<span className="hljs-variable constant_">BASE_URL</span>{'}'}<span className="hljs-string">/users/</span>{'{'}user[<span className="hljs-string">&apos;id&apos;</span>]{'}'}<span className="hljs-string">&quot;</span></div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="hljs-keyword">raise</span> <span className="hljs-built_in">AssertionError</span>(</div>
                    <div className="code-line">        <span className="hljs-string">f&quot;作成したユーザーを特定できず後片付けができません: email=</span>{'{'}email{'}'}<span className="hljs-string"> &quot;</span></div>
                    <div className="code-line">        <span className="hljs-string">f&quot;(id・Location・検索のいずれからもURLを解決できませんでした)&quot;</span></div>
                    <div className="code-line">    )</div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-meta">@pytest.fixture</span></div>
                    <div className="code-line"><span className="hljs-keyword">def</span> <span className="hljs-title function_">created_user_url</span>():</div>
                    <div className="code-line">    <span className="hljs-string">&quot;&quot;&quot;テスト用ユーザーを作成し、そのURLを渡して、最後に必ず削除する。</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-string">    識別子の解決と後片付けの登録を同じ try/finally の中で行うことで、</span></div>
                    <div className="code-line"><span className="hljs-string">    「作成には成功したが id を取り出せなかった」場合でもデータを残さない。</span></div>
                    <div className="code-line"><span className="hljs-string">    &quot;&quot;&quot;</span></div>
                    <div className="code-line">    <span className="hljs-comment"># 検索フォールバックが効くよう、メールアドレスはテストごとに一意にする</span></div>
                    <div className="code-line">    email = <span className="hljs-string">f&quot;taro+</span>{'{'}uuid.uuid4().hex{'}'}<span className="hljs-string">@example.com&quot;</span></div>
                    <div className="code-line">    created = requests.post(</div>
                    <div className="code-line">        <span className="hljs-string">f&quot;</span>{'{'}<span className="hljs-variable constant_">BASE_URL</span>{'}'}<span className="hljs-string">/users&quot;</span>,</div>
                    <div className="code-line">        json={'{'}<span className="hljs-string">&quot;name&quot;</span>: <span className="hljs-string">&quot;Taro&quot;</span>, <span className="hljs-string">&quot;email&quot;</span>: email{'}'},</div>
                    <div className="code-line">        timeout=<span className="hljs-variable constant_">TIMEOUT</span>,</div>
                    <div className="code-line">    )</div>
                    <div className="code-line">    <span className="hljs-keyword">assert</span> created.status_code == <span className="hljs-number">201</span></div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="hljs-comment"># ここから先で何が起きても、作成済みユーザーは必ず削除する</span></div>
                    <div className="code-line">    user_url = <span className="hljs-literal">None</span></div>
                    <div className="code-line">    <span className="hljs-keyword">try</span>:</div>
                    <div className="code-line">        user_url = _resolve_user_url(created, email)</div>
                    <div className="code-line">        <span className="hljs-keyword">yield</span> user_url</div>
                    <div className="code-line">    <span className="hljs-keyword">finally</span>:</div>
                    <div className="code-line">        <span className="hljs-comment"># URLを解決できなかった場合（= 削除の手掛かりが無い場合）だけ削除を飛ばす</span></div>
                    <div className="code-line">        <span className="hljs-keyword">if</span> user_url <span className="hljs-keyword">is</span> <span className="hljs-keyword">not</span> <span className="hljs-literal">None</span>:</div>
                    <div className="code-line">            <span className="hljs-comment"># 後片付けはアサーションの成否にかかわらず実行する。</span></div>
                    <div className="code-line">            <span className="hljs-comment"># 戻り値を捨てると削除失敗（4xx/5xx）に気づけず、残ったデータが後続テストを</span></div>
                    <div className="code-line">            <span className="hljs-comment"># 汚染するため、APIが仕様として定める成功ステータスをここでも検証する</span></div>
                    <div className="code-line">            deleted = requests.delete(user_url, timeout=<span className="hljs-variable constant_">TIMEOUT</span>)</div>
                    <div className="code-line">            <span className="hljs-keyword">assert</span> deleted.status_code <span className="hljs-keyword">in</span> (<span className="hljs-number">200</span>, <span className="hljs-number">204</span>), <span className="hljs-string">f&quot;cleanup failed: </span>{'{'}deleted.status_code{'}'}<span className="hljs-string">&quot;</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-keyword">def</span> <span className="hljs-title function_">test_get_user_returns_200_and_expected_fields</span>(created_user_url):</div>
                    <div className="code-line">    response = requests.get(created_user_url, timeout=<span className="hljs-variable constant_">TIMEOUT</span>)</div>
                    <div className="code-line">    <span className="hljs-keyword">assert</span> response.status_code == <span className="hljs-number">200</span></div>
                    <div className="code-line">    body = response.json()</div>
                    <div className="code-line">    <span className="hljs-keyword">assert</span> <span className="hljs-string">&quot;id&quot;</span> <span className="hljs-keyword">in</span> body</div>
                    <div className="code-line">    <span className="hljs-keyword">assert</span> <span className="hljs-string">&quot;email&quot;</span> <span className="hljs-keyword">in</span> body</div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-keyword">def</span> <span className="hljs-title function_">test_create_user_missing_required_field_returns_400</span>():</div>
                    <div className="code-line">    response = requests.post(</div>
                    <div className="code-line">        <span className="hljs-string">f&quot;</span>{'{'}<span className="hljs-variable constant_">BASE_URL</span>{'}'}<span className="hljs-string">/users&quot;</span>, json={'{'}<span className="hljs-string">&quot;name&quot;</span>: <span className="hljs-string">&quot;Taro&quot;</span>{'}'}, timeout=<span className="hljs-variable constant_">TIMEOUT</span></div>
                    <div className="code-line">    )</div>
                    <div className="code-line">    <span className="hljs-keyword">assert</span> response.status_code == <span className="hljs-number">400</span></div>
                    <div className="code-line">    <span className="hljs-keyword">assert</span> <span className="hljs-string">&quot;email&quot;</span> <span className="hljs-keyword">in</span> response.json()[<span className="hljs-string">&quot;errors&quot;</span>]</div>
                  </code>
                </pre>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="section">
              <h2>
                <span className="num">Step 5</span>契約テスト（Contract Testing with Pact）
              </h2>

              <h3>8.1 契約テストが必要な理由</h3>
              <p>
                マイクロサービス構成では、あるチームが提供するAPI（プロバイダー）を、別チームのサービス（コンシューマー）が利用するという関係が多数発生します。すべての組み合わせをE2Eテストで確認しようとすると、環境構築が複雑になり、実行も遅く不安定になりがちです。
              </p>
              <p>
                契約テストは、コンシューマーとプロバイダーを<strong>同時に起動せず</strong>、それぞれが「契約（Pact）」という共通の約束事に対して独立に検証する手法です。Pact
                の公式ドキュメントでは、コンシューマーが期待するリクエスト・レスポンスの組を記述したテストを実行することで契約ファイル（JSON）を生成し、プロバイダー側がその契約を満たせるかを検証する、という流れが説明されています。
              </p>

              <h3>8.2 契約テストの流れ</h3>
              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_PACT_FLOW} />
              </div>
              <figcaption className="fig-cap">図6: Pactによる契約テストの流れ</figcaption>

              <h3>8.3 契約テストを書くときの注意点</h3>
              <p>
                Pact 公式ドキュメントでは、良い契約テストを書くコツとして次のような指針が示されています。
              </p>
              <ul>
                <li>
                  <strong>コンシューマーが実際に依存する部分だけをテストする</strong>：網羅性やカバレッジ目的で不要な項目まで契約に含めない
                </li>
                <li>
                  <strong>できるだけ緩い一致条件（マッチャー）を使う</strong>：完全一致ではなく型や形式でのマッチを優先し、壊れやすい契約を避ける
                </li>
                <li>
                  <strong>実際のクライアントコードを通す</strong>：<code>fetch</code> や <code>axios</code> を直接叩くのではなく、本番で使う実際のAPIクライアントを経由してテストする
                </li>
                <li>
                  <strong>UI層で契約テストを書かない</strong>：フロントエンド全体を通すと契約が肥大化し壊れやすくなるため、通信を担う層に絞る
                </li>
              </ul>

              <h3>8.4 契約テストとスキーマ検証の違い</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>観点</th>
                      <th>スキーマ検証（Schemathesis/Dreddなど）</th>
                      <th>契約テスト（Pactなど）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>検証対象</td>
                      <td>「仕様書通りに実装されているか」</td>
                      <td>「特定のコンシューマーが実際に使う形と一致するか」</td>
                    </tr>
                    <tr>
                      <td>入力の網羅性</td>
                      <td>仕様全体を幅広く自動生成してテスト</td>
                      <td>コンシューマーが依存する具体的な実例のみ</td>
                    </tr>
                    <tr>
                      <td>適した場面</td>
                      <td>公開APIの仕様適合性確認</td>
                      <td>マイクロサービス間の互換性確認</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="section">
              <h2>
                <span className="num">Step 6</span>パフォーマンス・負荷テスト
              </h2>

              <h3>9.1 何を測るかを先に決める</h3>
              <p>
                性能テストは「なんとなく負荷をかける」のではなく、事前にしきい値（閾値）を決めてから実施するのが実務的です。Grafana
                Labs が提供する k6
                は、テストシナリオをコードとして記述し、バージョン管理・CI組み込みができる負荷テストツールとして広く使われています。
              </p>
              <p>代表的な指標の例です。</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>指標</th>
                      <th>内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>レイテンシ（p95 / p99）</td>
                      <td>リクエストの95%・99%が何ミリ秒以内に返るか</td>
                    </tr>
                    <tr>
                      <td>スループット</td>
                      <td>単位時間あたりに処理できるリクエスト数</td>
                    </tr>
                    <tr>
                      <td>エラー率</td>
                      <td>高負荷時にエラーが発生する割合</td>
                    </tr>
                    <tr>
                      <td>同時接続数の限界</td>
                      <td>サービスが破綻し始める同時ユーザー数</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>9.2 負荷テストの種類</h3>
              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_LOAD_TEST_TYPES} />
              </div>
              <figcaption className="fig-cap">図7: 目的別に見る負荷テストの種類</figcaption>

              <h3>9.3 k6での簡単なテスト例</h3>
              <div className="code-block">
                <div className="code-label">JavaScript · k6</div>
                <pre>
                  <code className="hljs language-javascript">
                    <div className="code-line"><span className="hljs-keyword">import</span> http <span className="hljs-keyword">from</span> <span className="hljs-string">&apos;k6/http&apos;</span>;</div>
                    <div className="code-line"><span className="hljs-keyword">import</span> {'{'} check, sleep {'}'} <span className="hljs-keyword">from</span> <span className="hljs-string">&apos;k6&apos;</span>;</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">const</span> <span className="hljs-variable constant_">options</span> = {'{'}</div>
                    <div className="code-line">  <span className="hljs-attr">stages</span>: [</div>
                    <div className="code-line">    {'{'} <span className="hljs-attr">duration</span>: <span className="hljs-string">&apos;30s&apos;</span>, <span className="hljs-attr">target</span>: <span className="hljs-number">20</span> {'}'},</div>
                    <div className="code-line">    {'{'} <span className="hljs-attr">duration</span>: <span className="hljs-string">&apos;1m&apos;</span>, <span className="hljs-attr">target</span>: <span className="hljs-number">20</span> {'}'},</div>
                    <div className="code-line">    {'{'} <span className="hljs-attr">duration</span>: <span className="hljs-string">&apos;20s&apos;</span>, <span className="hljs-attr">target</span>: <span className="hljs-number">0</span> {'}'},</div>
                    <div className="code-line">  ],</div>
                    <div className="code-line">  <span className="hljs-attr">thresholds</span>: {'{'}</div>
                    <div className="code-line">    <span className="hljs-attr">http_req_duration</span>: [<span className="hljs-string">&apos;p(95) &lt; 500&apos;</span>],</div>
                    <div className="code-line">    <span className="hljs-attr">http_req_failed</span>: [<span className="hljs-string">&apos;rate &lt; 0.01&apos;</span>],</div>
                    <div className="code-line">    <span className="hljs-comment">// check が1件でも失敗したらCIを失敗させる</span></div>
                    <div className="code-line">    <span className="hljs-attr">checks</span>: [<span className="hljs-string">&apos;rate == 1&apos;</span>],</div>
                    <div className="code-line">  {'}'},</div>
                    <div className="code-line">{'}'};</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="hljs-keyword">export</span> <span className="hljs-keyword">default</span> <span className="hljs-keyword">function</span> () {'{'}</div>
                    <div className="code-line">  <span className="hljs-comment">// 対象環境は実行時に切り替えられるよう環境変数から受け取る</span></div>
                    <div className="code-line">  <span className="hljs-comment">//   例: k6 run --env BASE_URL=https://staging.example.com script.js</span></div>
                    <div className="code-line">  <span className="hljs-keyword">const</span> baseUrl = __ENV.<span className="hljs-property">BASE_URL</span>;</div>
                    <div className="code-line">  <span className="hljs-comment">// 未設定のまま実行すると &quot;undefined/products&quot; へリクエストしてしまうため、ここで止める</span></div>
                    <div className="code-line">  <span className="hljs-keyword">if</span> (!baseUrl) {'{'}</div>
                    <div className="code-line">    <span className="hljs-keyword">throw</span> <span className="hljs-keyword">new</span> <span className="hljs-title class_">Error</span>(<span className="hljs-string">&apos;BASE_URL is required. 例: k6 run --env BASE_URL=https://staging.example.com script.js&apos;</span>);</div>
                    <div className="code-line">  {'}'}</div>
                    <div className="code-line">  <span className="hljs-keyword">const</span> res = http.<span className="hljs-title function_">get</span>(<span className="hljs-string">`</span>${'{'}baseUrl{'}'}<span className="hljs-string">/products`</span>);</div>
                    <div className="code-line">  <span className="hljs-title function_">check</span>(res, {'{'} <span className="hljs-string">&apos;status is 200&apos;</span>: (r) =&gt; r.<span className="hljs-property">status</span> === <span className="hljs-number">200</span> {'}'});</div>
                    <div className="code-line">  <span className="hljs-title function_">sleep</span>(<span className="hljs-number">1</span>);</div>
                    <div className="code-line">{'}'}</div>
                  </code>
                </pre>
              </div>
              <p>
                このように、しきい値（<code>thresholds</code>）をコード内に明示しておくことで、CIパイプライン上で「性能劣化が起きたら自動的にビルドを失敗させる」ゲートとして機能させられます。
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="section">
              <h2>
                <span className="num">Step 7</span>セキュリティテスト（OWASP API Security Top 10）
              </h2>
              <p>
                セキュリティは後回しにされがちですが、OWASP（Open Web Application Security
                Project）はWeb API特有の脆弱性をまとめた「OWASP API Security Top
                10」を公開しており、2023年版が現在の最新版です。認可（Authorization）まわりの不備が上位を占めている点が大きな特徴です。
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>順位</th>
                      <th>名称（2023年版）</th>
                      <th>概要</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>API1</td>
                      <td>Broken Object Level Authorization</td>
                      <td>他人のリソースIDを指定するだけでアクセスできてしまう不備</td>
                    </tr>
                    <tr>
                      <td>API2</td>
                      <td>Broken Authentication</td>
                      <td>認証の実装不備によるなりすまし・トークン窃取</td>
                    </tr>
                    <tr>
                      <td>API3</td>
                      <td>Broken Object Property Level Authorization</td>
                      <td>オブジェクト内の特定フィールドへの過剰なアクセス・書き込み</td>
                    </tr>
                    <tr>
                      <td>API4</td>
                      <td>Unrestricted Resource Consumption</td>
                      <td>レート制限やリソース上限の欠如によるDoSやコスト増大</td>
                    </tr>
                    <tr>
                      <td>API5</td>
                      <td>Broken Function Level Authorization</td>
                      <td>管理者専用機能に一般ユーザーがアクセスできてしまう不備</td>
                    </tr>
                    <tr>
                      <td>API6</td>
                      <td>Unrestricted Access to Sensitive Business Flows</td>
                      <td>重要な業務フロー（購入・予約など）の自動化・悪用への対策不足</td>
                    </tr>
                    <tr>
                      <td>API7</td>
                      <td>Server Side Request Forgery (SSRF)</td>
                      <td>APIがサーバー側で外部URLを取得する際の悪用</td>
                    </tr>
                    <tr>
                      <td>API8</td>
                      <td>Security Misconfiguration</td>
                      <td>不要な機能の有効化、デフォルト設定の放置など</td>
                    </tr>
                    <tr>
                      <td>API9</td>
                      <td>Improper Inventory Management</td>
                      <td>管理されていない古いバージョンAPIやドキュメント未整備のエンドポイント</td>
                    </tr>
                    <tr>
                      <td>API10</td>
                      <td>Unsafe Consumption of APIs</td>
                      <td>外部APIからのレスポンスを無条件に信頼してしまう不備</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>10.1 テストに組み込む方法</h3>
              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_SECURITY_FLOW} />
              </div>
              <figcaption className="fig-cap">図8: セキュリティテストの組み込み方</figcaption>

              <p>
                特にAPI1（認可漏れ）は「あるユーザーのIDを別のユーザーのIDに書き換えるだけでアクセスできてしまわないか」という単純な観点のテストケースを、自動テストのスイートに恒常的に組み込んでおくだけでも効果があります。
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="section">
              <h2>
                <span className="num">Step 8</span>CI/CDへの統合
              </h2>
              <p>
                自動テストは、実行されて初めて価値を持ちます。コミットやプルリクエストのたびに自動実行される状態を作ることが、テスト戦略の完成形です。
              </p>

              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_CICD_FLOW} />
              </div>
              <figcaption className="fig-cap">
                図9: CI/CDパイプラインにおけるテストの位置づけ
              </figcaption>

              <h3>11.1 実務でのコツ</h3>
              <ul>
                <li>
                  <strong>速いテストを先に、遅いテストを後に</strong>：単体テストや静的解析はコミットのたびに、性能テストやE2Eはマージ前後などタイミングを絞って実行する
                </li>
                <li>
                  <strong>並列実行でフィードバックを短縮する</strong>：テストをサービス単位やタグ単位に分割し、複数ランナーで並列実行する
                </li>
                <li>
                  <strong>フレーキー（不安定）なテストを放置しない</strong>：広い範囲を検証する高レベルテストほど、外部依存やタイミングの影響を受けて不安定になりやすい。放置すると失敗が信用されなくなり、開発速度そのものを落とす原因になる
                </li>
                <li>
                  <strong>ビルドを止める基準を明確にする</strong>：性能テストのしきい値超過やセキュリティスキャンでの重大な指摘は、マージをブロックする条件として明示しておく
                </li>
              </ul>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="section">
              <h2>
                <span className="num">Step 9</span>本番環境でのテスト（Testing in Production）
              </h2>
              <p>
                事前のテストだけでは、実際の本番トラフィックが持つ多様性（想定外の入力、実際の負荷パターン、サードパーティの挙動変化など）を完全には再現できません。そのため、本番環境そのものを観測し続ける「テスティング・イン・プロダクション」という考え方も、近年のAPIテスト戦略に含まれるようになっています。
              </p>

              <div className="mermaid-wrapper">
                <Mermaid chart={DIAGRAM_PROD_OBSERVATION} />
              </div>
              <figcaption className="fig-cap">
                図10: 本番環境の継続的な観測サイクル
              </figcaption>

              <ul>
                <li>
                  <strong>SLI（Service Level Indicator）</strong>：実際に計測する数値（例：p99レイテンシ、成功率）
                </li>
                <li>
                  <strong>SLO（Service Level Objective）</strong>：SLIに対する目標値。<strong>計測窓と分母を必ず明示する</strong>（例①「直近28日間において、1分ごとに算出したp99レイテンシが300ms以内である時間の割合を99.9%以上に保つ」＝時間窓ベース／例②「直近28日間の全リクエストのうち、レイテンシ300ms未満のものを99.9%以上にする」＝リクエストベース）
                </li>
                <li>
                  <strong>SLA（Service Level Agreement）</strong>：SLOを外部との約束事として明文化したもの
                </li>
                <li>
                  <strong>シンセティックモニタリング</strong>：実ユーザーではなく、定期的に自動実行されるスクリプトで疑似的にAPIを呼び出し、可用性を継続確認する手法（k6のスクリプトを流用できる場合もある）
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="section">
              <h2>
                <span className="num">13</span>よくある落とし穴とアンチパターン
              </h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>アンチパターン</th>
                      <th>なぜ問題か</th>
                      <th>改善策</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ハッピーパスしかテストしない</td>
                      <td>実際の障害の多くは異常系・境界値から生まれる</td>
                      <td>5章の基本テストセット表を必ずチェックリスト化する</td>
                    </tr>
                    <tr>
                      <td>E2Eテストに寄せすぎる</td>
                      <td>実行が遅く、失敗原因の切り分けが困難になる</td>
                      <td>ピラミッド/トロフィーを参考に、レイヤーごとに責務を分ける</td>
                    </tr>
                    <tr>
                      <td>テスト同士が実行順に依存している</td>
                      <td>1件の失敗が無関係なテストの失敗を連鎖させる</td>
                      <td>各テストで独自にデータ準備・後片付けを行う</td>
                    </tr>
                    <tr>
                      <td>モックだけで満足し実環境で検証しない</td>
                      <td>モックと実際のプロバイダーの挙動が乖離する</td>
                      <td>契約テストで定期的にモックと実装の整合性を検証する</td>
                    </tr>
                    <tr>
                      <td>性能テストをリリース直前にしか行わない</td>
                      <td>性能劣化の原因特定が難しく手戻りが大きい</td>
                      <td>しきい値をCIに組み込み、変化を早期に検知する</td>
                    </tr>
                    <tr>
                      <td>セキュリティテストを別チーム任せにする</td>
                      <td>認可漏れなどの基本的な不備が最後まで残る</td>
                      <td>OWASP API Security Top 10の代表的ケースを自動回帰テストに含める</td>
                    </tr>
                    <tr>
                      <td>本番リリース後は監視しない</td>
                      <td>事前テストで再現できない障害パターンを見逃す</td>
                      <td>SLI/SLOを定義し、シンセティックモニタリングを併用する</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="section">
              <h2>
                <span className="num">14</span>まとめ：初学者向けチェックリスト
              </h2>
              <p>
                実際にチェックを入れながら、抜けがないか確認してみましょう（このページ内だけで完結し、外部には送信されません）。
              </p>
              <Checklist />
            </section>

            {/* Section 15 */}
            <section id="section-15" className="section">
              <h2>
                <span className="num">15</span>参考文献・出典
              </h2>
              <p>
                本ガイドの作成にあたり、以下の情報源を参照しました（2026年8月28日時点で確認）。
              </p>
              <div className="ref-wrap">
                <ol className="ref-list">
                  <li>
                    <span className="ref-title">
                      Mark Winteringham, <em>Testing Web APIs</em>（Manning Publications、O&apos;Reillyで閲覧）
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://www.oreilly.com/library/view/testing-web-apis/9781617299537/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.oreilly.com/library/view/testing-web-apis/9781617299537/
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Ham Vocke, &quot;The Practical Test Pyramid&quot; (martinfowler.com)
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://martinfowler.com/articles/practical-test-pyramid.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://martinfowler.com/articles/practical-test-pyramid.html
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Martin Fowler, &quot;On the Diverse And Fantastical Shapes of Testing&quot;
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://martinfowler.com/articles/2021-test-shapes.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://martinfowler.com/articles/2021-test-shapes.html
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Kent C. Dodds, &quot;Write tests. Not too many. Mostly integration.&quot;
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://kentcdodds.com/blog/write-tests"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://kentcdodds.com/blog/write-tests
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Kent C. Dodds, &quot;The Testing Trophy and Testing Classifications&quot;
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      OWASP API Security Project, &quot;OWASP Top 10 API Security Risks – 2023&quot;
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://owasp.org/API-Security/editions/2023/en/0x11-t10/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://owasp.org/API-Security/editions/2023/en/0x11-t10/
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      OWASP Foundation, &quot;OWASP API Security Top 10 2023 has been released&quot;
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://owasp.org/blog/2023/07/03/owasp-api-top10-2023"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://owasp.org/blog/2023/07/03/owasp-api-top10-2023
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">Pact Documentation, &quot;Introduction&quot;</span>
                    <span className="ref-url">
                      <a href="https://docs.pact.io/" target="_blank" rel="noopener noreferrer">
                        https://docs.pact.io/
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">Pact Documentation, &quot;Consumer Tests&quot;</span>
                    <span className="ref-url">
                      <a href="https://docs.pact.io/consumer" target="_blank" rel="noopener noreferrer">
                        https://docs.pact.io/consumer
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      PactFlow, &quot;What is Consumer-Driven Contract Testing (CDC)?&quot;
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://pactflow.io/what-is-consumer-driven-contract-testing/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://pactflow.io/what-is-consumer-driven-contract-testing/
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Postman, &quot;API Test Automation&quot; (Postman Best Practices)
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://www.postman.com/postman-best-practices/api-test-automation/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.postman.com/postman-best-practices/api-test-automation/
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Grafana Labs, &quot;Get started with k6&quot; (k6 documentation)
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://grafana.com/docs/k6/latest/get-started/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://grafana.com/docs/k6/latest/get-started/
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Grafana Labs, &quot;API load testing&quot; (k6 Testing Guides)
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://grafana.com/docs/k6/latest/testing-guides/api-load-testing/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://grafana.com/docs/k6/latest/testing-guides/api-load-testing/
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Schemathesis 公式サイト（OpenAPI/GraphQLに基づくプロパティベーステスト）
                    </span>
                    <span className="ref-url">
                      <a href="https://schemathesis.io/" target="_blank" rel="noopener noreferrer">
                        https://schemathesis.io/
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="ref-title">
                      Ministry of Testing, Mark Winteringham 講座ページ
                    </span>
                    <span className="ref-url">
                      <a
                        href="https://www.ministryoftesting.com/courses/let-s-build-an-api-checking-framework-mark-winteringham"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.ministryoftesting.com/courses/let-s-build-an-api-checking-framework-mark-winteringham
                      </a>
                    </span>
                  </li>
                </ol>
              </div>

              <p className="disclaimer">
                免責事項：本ガイドは各情報源の考え方を要約・再構成した独自の教育コンテンツであり、原文からの引用は最小限（要約・言い換え）に留めています。正確な原文表現や詳細な実装例が必要な場合は、各URLの一次情報を直接ご参照ください。
              </p>
            </section>
          </div>

          <footer className="footer">
            <p>
              Web APIテスト実践ガイド ― 初学者のためのステップバイステップ・ベストプラクティス
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
