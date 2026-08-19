import './istqb-ctfl-v4-chapter4-test-analysis-and-design.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';

export default function Page() {
    return (
        <div className="ctfl-v4-ch4-page">
            <NavBar />

            <main className="main">
                <div className="content-wrap">
                    {/* HERO */}
                    <div className="hero">
                        <span className="hero-eyebrow">ISTQB® Certified Tester Foundation Level v4.0.1</span>
                        <h1>第4章：テスト分析・設計</h1>
                        <div className="hero-en">Chapter 4 — Test Analysis and Design</div>
                        <p>
                            中級者から上級者を対象に、ブラックボックス・ホワイトボックス・経験ベースの各テスト技法とコラボレーションベースのテストアプローチを、公式シラバスに基づきステップバイステップで解説します。
                        </p>
                        <div className="hero-meta">
                            <span className="meta-pill">学習時間 <b>390分</b>（全6章中 最大）</span>
                            <span className="meta-pill">準拠版 <b>Syllabus v4.0.1</b></span>
                            <span className="meta-pill">K-Level <b>K1 / K2 / K3</b></span>
                            <span className="meta-pill">技法数 <b>9技法 + 3アプローチ</b></span>
                        </div>
                    </div>

                    {/* ============ SECTION 0 ============ */}
                    <section id="sec-0">
                        <span className="sec-kicker">INTRODUCTION</span>
                        <h2>0. 本章の位置づけと学習目標</h2>
                        <p>
                            第4章は、第1章で学んだ「テストプロセス」のうち<strong>テスト分析（Test Analysis）</strong>と<strong>テスト設計（Test Design）</strong>を、具体的な「技法（Technique）」レベルまで掘り下げる章です。テスト分析は「何をテストするか（What to test）」、テスト設計は「どのようにテストするか（How to test）」に答える活動であり、本章で学ぶ技法群はその両方を体系的に支援します。
                        </p>

                        <div className="pipeline">
                            <div className="step">テストベース</div>
                            <span className="arrow">→</span>
                            <div className="step">テスト分析</div>
                            <span className="arrow">→</span>
                            <div className="step">テスト設計</div>
                            <span className="arrow">→</span>
                            <div className="step">テスト実装</div>
                            <span className="arrow">→</span>
                            <div className="step">テスト実行</div>
                        </div>

                        <h3>0.1 学習目標（Learning Objectives）一覧</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>節</th>
                                        <th>LO番号</th>
                                        <th>K-Level</th>
                                        <th>内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4.1</td>
                                        <td><code>FL-4.1.1</code></td>
                                        <td><span className="badge k2">K2</span></td>
                                        <td>ブラックボックス・ホワイトボックス・経験ベースの技法を区別できる</td>
                                    </tr>
                                    <tr>
                                        <td>4.2</td>
                                        <td><code>FL-4.2.1〜4.2.4</code></td>
                                        <td><span className="badge k3">K3</span></td>
                                        <td>同値分割法・境界値分析・デシジョンテーブルテスト・状態遷移テストを使ってテストケースを導出できる</td>
                                    </tr>
                                    <tr>
                                        <td>4.3</td>
                                        <td><code>FL-4.3.1〜4.3.3</code></td>
                                        <td><span className="badge k2">K2</span></td>
                                        <td>ステートメントテスト・分岐テストを説明でき、ホワイトボックステストの価値を説明できる</td>
                                    </tr>
                                    <tr>
                                        <td>4.4</td>
                                        <td><code>FL-4.4.1〜4.4.3</code></td>
                                        <td><span className="badge k2">K2</span></td>
                                        <td>エラー推測・探索的テスト・チェックリストベースドテストを説明できる</td>
                                    </tr>
                                    <tr>
                                        <td>4.5</td>
                                        <td><code>FL-4.5.1〜4.5.3</code></td>
                                        <td><span className="badge k2">K2</span>/<span className="badge k3">K3</span></td>
                                        <td>3つのC、受け入れ基準の記述、ATDDを使ったテストケース導出（K3）ができる</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>0.2 重要キーワード</h3>
                        <div className="keyword-grid">
                            <span className="keyword-chip"><b>EP</b> 同値分割法</span>
                            <span className="keyword-chip"><b>BVA</b> 境界値分析</span>
                            <span className="keyword-chip"><b>DT</b> デシジョンテーブル</span>
                            <span className="keyword-chip"><b>ST</b> 状態遷移テスト</span>
                            <span className="keyword-chip"><b>SC</b> ステートメントカバレッジ</span>
                            <span className="keyword-chip"><b>BC</b> 分岐カバレッジ</span>
                            <span className="keyword-chip"><b>EG</b> エラー推測</span>
                            <span className="keyword-chip"><b>ET</b> 探索的テスト</span>
                            <span className="keyword-chip"><b>CBT</b> チェックリストベースド</span>
                            <span className="keyword-chip"><b>ATDD</b> 受け入れテスト駆動開発</span>
                            <span className="keyword-chip"><b>3Cs</b> Card, Conversation, Confirmation</span>
                            <span className="keyword-chip"><b>GWT</b> Given-When-Then</span>
                        </div>
                    </section>

                    {/* ============ SECTION 1 (4.1) ============ */}
                    <section id="sec-1">
                        <span className="sec-kicker">4.1</span>
                        <h2>テスト技法の全体像（Test Techniques Overview）</h2>
                        <p>
                            テスト技法（Test Technique）の主な目的は、<strong>テスト条件（test conditions）</strong>、<strong>テストケース（test cases）</strong>、および<strong>テストデータ（test data）</strong>の識別・設計を体系的に支援することです。テスト技法を用いることで、テストの網羅性を高め、属人性を排した再現性のあるテスト設計が可能になります。
                        </p>

                        <h3>1.1 テスト技法の役割</h3>
                        <p>技法を適用する主な活動：</p>
                        <ul>
                            <li>テスト条件（test condition）の定義</li>
                            <li>カバレッジ項目（coverage item）の識別</li>
                            <li>テストデータの識別</li>
                        </ul>
                        <p>シラバスでは、テスト技法を大きく3つに分類しています。</p>

                        <div className="diagram">
                            <Mermaid chart={`flowchart TD
A["テスト技法"] --> B["ブラックボックステスト技法（仕様ベース）"]
A --> C["ホワイトボックステスト技法（構造ベース）"]
A --> D["経験ベースのテスト技法"]
B --> B1["同値分割法"]
B --> B2["境界値分析"]
B --> B3["デシジョンテーブルテスト"]
B --> B4["状態遷移テスト"]
C --> C1["ステートメントテスト"]
C --> C2["分岐テスト"]
D --> D1["エラー推測"]
D --> D2["探索的テスト"]
D --> D3["チェックリストベースドテスト"]`} />
                            <div className="diagram-caption">図1: シラバス4.1節に基づくテスト技法の3分類</div>
                        </div>

                        <div className="callout point">
                            <span className="dot"></span>
                            <p>
                                <strong>図解上の注意</strong>：コラボレーションベースのテストアプローチ（4.5節）は、上記の「ブラックボックス／ホワイトボックス／経験ベース」という3分類には含まれません。技法群が主に「欠陥の検出（defect detection）」を目的とするのに対し、コラボレーションベースのアプローチは会話とコラボレーションによる「<strong>欠陥の回避（defect avoidance）</strong>」にも重点を置く点が特徴です。
                            </p>
                        </div>

                        <h3>1.2 3つの技法カテゴリの本質的な違い</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th><span className="badge bb">BLACK-BOX</span></th>
                                        <th><span className="badge wb">WHITE-BOX</span></th>
                                        <th><span className="badge eb">EXPERIENCE</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>別名</strong></td>
                                        <td>仕様ベース（Specification-based）</td>
                                        <td>構造ベース（Structure-based）</td>
                                        <td>経験ベース（Experience-based）</td>
                                    </tr>
                                    <tr>
                                        <td><strong>テストベース</strong></td>
                                        <td>仕様書・要件定義・ユースケース等の外部仕様</td>
                                        <td>ソースコード・アーキテクチャ・制御フロー等の内部構造</td>
                                        <td>テスター／開発者／利用者の知識・直感・過去の欠陥履歴</td>
                                    </tr>
                                    <tr>
                                        <td><strong>カバレッジ項目</strong></td>
                                        <td>仕様要素（同値パーティション、境界値、状態、決定ルール）</td>
                                        <td>コード要素（ステートメント、分岐、パス）</td>
                                        <td>体系的な項目を持たない（チェックリスト項目等）</td>
                                    </tr>
                                    <tr>
                                        <td><strong>適用タイミング</strong></td>
                                        <td>要件定義段階から設計可能</td>
                                        <td>コード実装後に適用可能</td>
                                        <td>開発ライフサイクルの全フェーズで補完的に利用</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-1-overview-of-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.1 Overview of Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/black-box-test-technique" target="_blank" rel="noopener">ISTQB Glossary, black-box test technique</a>
                            </p>
                        </div>
                    </section>

                    {/* ============ SECTION 2 (4.2) ============ */}
                    <section id="sec-2">
                        <span className="sec-kicker">4.2</span>
                        <h2>4.2 ブラックボックステスト技法（Black-box Test Techniques）</h2>
                        <p>
                            ブラックボックステスト技法（別名：仕様ベース技法）は、<strong>テスト対象の内部構造を参照せず、入力と出力の関係（振る舞い・仕様）に着目してテストケースを設計する技法群</strong>です。機能テストだけでなく非機能テスト（性能・ユーザビリティなど）にも適用できます。本節の4技法はすべて試験で<strong>K3レベル（導出問題・計算問題）</strong>として出題されます。
                        </p>
                    </section>

                    {/* 4.2.1 */}
                    <section id="sec-2-1">
                        <span className="sec-kicker">4.2.1</span>
                        <h2>同値分割法（Equivalence Partitioning, EP）</h2>
                        <p>
                            同値分割法は、入力や出力のデータ範囲を<strong>「同一パーティション内の要素であれば、ソフトウェアは同様に処理する（同様に成功するか、同様に失敗する）はずだ」と仮定できるグループ（同値パーティション）</strong>に分割する技法です。
                        </p>
                        <ul>
                            <li><strong>有効同値パーティション（Valid Partition）</strong>：システムが受け入れるべき有効な値の集合</li>
                            <li><strong>無効同値パーティション（Invalid Partition）</strong>：システムが拒否またはエラー処理すべき無効な値の集合</li>
                        </ul>

                        <h3>ステップバイステップ：同値分割の適用手順</h3>
                        <ol>
                            <li><strong>仕様の抽出</strong>：入力または出力の条件を特定する</li>
                            <li><strong>パーティションの識別</strong>：有効・無効の各パーティションを網羅的に列挙する</li>
                            <li><strong>代表値の選択</strong>：各パーティションから代表値を<strong>最低1つ</strong>選ぶ</li>
                            <li><strong>テストケースの合成</strong>：
                                <ul>
                                    <li>有効パーティション：複数の有効パーティションを1つのテストケースにまとめてよい（効率化）</li>
                                    <li>無効パーティション：<strong>1つのテストケースにつき1つの無効パーティションのみをテストする</strong>（マスキング効果を防ぐため）</li>
                                </ul>
                            </li>
                        </ol>

                        <h3>具体例：年齢入力フォーム（18歳以上65歳以下が成人割引対象）</h3>
                        <p>仕様：18歳から65歳の整数を入力可能。それ以外はエラー。</p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>パーティション種別</th>
                                        <th>範囲</th>
                                        <th>代表値</th>
                                        <th>期待結果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>無効パーティション (Invalid 1)</td>
                                        <td><code>age &lt; 18</code></td>
                                        <td><code>10</code></td>
                                        <td>エラー「対象外年齢です」</td>
                                    </tr>
                                    <tr>
                                        <td>有効パーティション (Valid)</td>
                                        <td><code>18 &lt;= age &lt;= 65</code></td>
                                        <td><code>30</code></td>
                                        <td>成人割引適用・正常処理</td>
                                    </tr>
                                    <tr>
                                        <td>無効パーティション (Invalid 2)</td>
                                        <td><code>age &gt; 65</code></td>
                                        <td><code>70</code></td>
                                        <td>エラー「対象外年齢です」</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>同値パーティションカバレッジの計算式</h4>
                        <div className="code-block">
                            <div className="code-label">coverage formula</div>
                            <pre className="code-content">同値パーティションカバレッジ(%) = (テストで網羅された識別済みパーティション数 ÷ 識別された全パーティション総数) × 100</pre>
                        </div>
                        <p>上記例では3パーティションすべてをテストすれば <code>(3 ÷ 3) × 100 = 100%</code> カバレッジとなります。</p>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-2-black-box-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.2 Black-box Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/equivalence-partitioning" target="_blank" rel="noopener">ISTQB Glossary, equivalence partitioning</a>
                            </p>
                        </div>
                    </section>

                    {/* 4.2.2 */}
                    <section id="sec-2-2">
                        <span className="sec-kicker">4.2.2</span>
                        <h2>境界値分析（Boundary Value Analysis, BVA）</h2>
                        <p>
                            欠陥はパーティションの「中央」よりも「境界（端）」に集中して潜みやすい（プログラマが <code>&lt;</code> と <code>&lt;=</code> を間違える、インデックスのオフバイワンエラー等）。この知見に基づき、<strong>順序付けられたパーティションの境界上およびその直近の値をテストする技法</strong>が境界値分析です。
                        </p>

                        <div className="callout warn">
                            <span className="dot"></span>
                            <p>
                                <strong>重要（シラバスv4.0の変更点）</strong>：CTFL v4.0では、<strong>2値境界値分析（2-value BVA）</strong>と<strong>3値境界値分析（3-value BVA）</strong>の両方が定義されています。試験ではどちらの方式で解くべきかが問題文で指定されます。
                            </p>
                        </div>

                        <h3>2値BVA と 3値BVA の違い</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>方式</th>
                                        <th>境界ごとに選ぶ値</th>
                                        <th>境界 <code>[18, 65]</code> のテスト値</th>
                                        <th>テスト値総数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>2値BVA</strong></td>
                                        <td>境界値そのもの ＋ 隣接する無効値（または有効値）の <strong>2点</strong></td>
                                        <td>下限: <code>17, 18</code> / 上限: <code>65, 66</code></td>
                                        <td><strong>4点</strong> (17, 18, 65, 66)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>3値BVA</strong></td>
                                        <td>境界値そのもの ＋ その直前 ＋ 直後の <strong>3点</strong></td>
                                        <td>下限: <code>17, 18, 19</code> / 上限: <code>64, 65, 66</code></td>
                                        <td><strong>6点</strong> (17, 18, 19, 64, 65, 66)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>具体例：入力値 1〜100（整数）の境界値設計</h3>
                        <p>有効範囲 <code>[1, 100]</code> の場合：</p>
                        <ul>
                            <li><strong>2値BVAの場合</strong>：<code>0</code> (無効), <code>1</code> (有効境界), <code>100</code> (有効境界), <code>101</code> (無効) → 計4点</li>
                            <li><strong>3値BVAの場合</strong>：<code>0, 1, 2</code> (下限側3点), <code>99, 100, 101</code> (上限側3点) → 計6点</li>
                        </ul>

                        <div className="code-block">
                            <div className="code-label">coverage formula</div>
                            <pre className="code-content">境界値カバレッジ(%) = (テストで網羅された識別済み境界値数 ÷ 識別された全境界値総数) × 100</pre>
                        </div>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-2-black-box-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.2 Black-box Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/boundary-value-analysis" target="_blank" rel="noopener">ISTQB Glossary, boundary value analysis</a>
                            </p>
                        </div>
                    </section>

                    {/* 4.2.3 */}
                    <section id="sec-2-3">
                        <span className="sec-kicker">4.2.3</span>
                        <h2>デシジョンテーブルテスト（Decision Table Testing）</h2>
                        <p>
                            システムが<strong>複数の条件の組み合わせに応じて異なる動作（アクション）を実行する複雑なビジネスロジック</strong>をテストする場合、デシジョンテーブル（決定表）が極めて有効です。条件の組み合わせの抜け漏れや矛盾を視覚的に浮き彫りにできます。
                        </p>

                        <h3>デシジョンテーブルの構成要素</h3>
                        <ul>
                            <li><strong>条件部（Conditions）</strong>：入力やシステム状態を表す真偽値（True/False）または複数値</li>
                            <li><strong>アクション部（Actions）</strong>：条件の組み合わせの結果として実行されるべき処理・出力</li>
                            <li><strong>ルール（Rules / 列）</strong>：条件とアクションの固有の組み合わせ（1列が1つのテストケースに対応）</li>
                        </ul>

                        <h3>ステップバイステップ：プレミアム会員割引と送料無料の例</h3>
                        <p>
                            仕様：購入金額が5,000円以上なら送料無料。さらにプレミアム会員なら全商品10%割引。ただしクーポン適用時はプレミアム割引と併用不可（クーポン優先）。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>要素</th>
                                        <th>条件 / アクション</th>
                                        <th>R1</th>
                                        <th>R2</th>
                                        <th>R3</th>
                                        <th>R4</th>
                                        <th>R5</th>
                                        <th>R6</th>
                                        <th>R7</th>
                                        <th>R8</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={3}><strong>条件</strong></td>
                                        <td>C1: 金額 &gt;= 5,000円</td>
                                        <td>Y</td>
                                        <td>Y</td>
                                        <td>Y</td>
                                        <td>Y</td>
                                        <td>N</td>
                                        <td>N</td>
                                        <td>N</td>
                                        <td>N</td>
                                    </tr>
                                    <tr>
                                        <td>C2: プレミアム会員</td>
                                        <td>Y</td>
                                        <td>Y</td>
                                        <td>N</td>
                                        <td>N</td>
                                        <td>Y</td>
                                        <td>Y</td>
                                        <td>N</td>
                                        <td>N</td>
                                    </tr>
                                    <tr>
                                        <td>C3: クーポン利用</td>
                                        <td>Y</td>
                                        <td>N</td>
                                        <td>Y</td>
                                        <td>N</td>
                                        <td>Y</td>
                                        <td>N</td>
                                        <td>Y</td>
                                        <td>N</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3}><strong>アクション</strong></td>
                                        <td>A1: 送料無料</td>
                                        <td>X</td>
                                        <td>X</td>
                                        <td>X</td>
                                        <td>X</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>A2: 10%割引適用</td>
                                        <td>-</td>
                                        <td>X</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>X</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>A3: クーポン割引適用</td>
                                        <td>X</td>
                                        <td>-</td>
                                        <td>X</td>
                                        <td>-</td>
                                        <td>X</td>
                                        <td>-</td>
                                        <td>X</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>デシジョンテーブルカバレッジの計算式</h4>
                        <div className="code-block">
                            <div className="code-label">coverage formula</div>
                            <pre className="code-content">デシジョンテーブルカバレッジ(%) = (テストで実行された実現可能なルール数 ÷ 実現可能な全ルール総数) × 100</pre>
                        </div>
                        <p>
                            不可能な組み合わせ（例：論理的にあり得ない条件の組み合わせ）は除外した「実現可能なルール数」を分母とします。
                        </p>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-2-black-box-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.2 Black-box Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/decision-table-testing" target="_blank" rel="noopener">ISTQB Glossary, decision table testing</a>
                            </p>
                        </div>
                    </section>

                    {/* 4.2.4 */}
                    <section id="sec-2-4">
                        <span className="sec-kicker">4.2.4</span>
                        <h2>状態遷移テスト（State Transition Testing）</h2>
                        <p>
                            システムが<strong>過去の履歴や現在の「状態（State）」に応じて、同じ入力（イベント）に対しても異なる振る舞いをする場合</strong>に適用する技法です。組込みシステム、トランザクション処理、UI画面遷移、オブジェクトのライフサイクル管理などに広く用いられます。
                        </p>

                        <h3>主要概念</h3>
                        <ul>
                            <li><strong>状態（State）</strong>：システムがイベントを待っている間の条件・状況</li>
                            <li><strong>イベント（Event / Trigger）</strong>：状態の変化を引き起こす入力・刺激</li>
                            <li><strong>アクション（Action）</strong>：遷移に伴って実行される処理・出力</li>
                            <li><strong>ガード条件（Guard condition）</strong>：遷移が発生するために満たすべきブール条件</li>
                        </ul>

                        <h3>状態遷移図（State Diagram）と状態表（State Table）</h3>
                        <p>
                            シラバスでは、<strong>状態遷移図</strong>と<strong>状態表（状態遷移表）</strong>は等価なモデルです。状態表は行に状態、列にイベントを配置し、セルに遷移先状態を書きます。<strong>状態図では見えにくい「無効な遷移（invalid transition）」が、状態表では空欄として明示される</strong>点が重要な違いです。
                        </p>

                        <h3>ステップバイステップ：ログイン試行制限機能の例</h3>
                        <p>仕様：ログイン画面で誤った認証情報を3回連続入力するとアカウントがロックされる。</p>

                        <h4>ステップ1：状態遷移図を作成する</h4>
                        <div className="diagram">
                            <Mermaid chart={`stateDiagram-v2
[*] --> LoggedOut
LoggedOut --> LoggedIn: 正しい認証情報
LoggedOut --> LoggedOut: 誤った認証情報(試行2回未満)
LoggedOut --> Locked: 誤った認証情報(3回目)
LoggedIn --> LoggedOut: ログアウト
Locked --> [*]`} />
                            <div className="diagram-caption">図2: ログイン試行制限機能の状態遷移図</div>
                        </div>

                        <h4>ステップ2：状態表を作成する（無効遷移を明示する）</h4>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>状態 ＼ イベント</th>
                                        <th>正しい認証情報</th>
                                        <th>誤った認証情報[試行&lt;2]</th>
                                        <th>誤った認証情報[試行=2]</th>
                                        <th>ログアウト</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>LoggedOut</strong></td>
                                        <td>→ LoggedIn</td>
                                        <td>→ LoggedOut</td>
                                        <td>→ Locked</td>
                                        <td><em>(無効)</em></td>
                                    </tr>
                                    <tr>
                                        <td><strong>LoggedIn</strong></td>
                                        <td><em>(無効)</em></td>
                                        <td><em>(無効)</em></td>
                                        <td><em>(無効)</em></td>
                                        <td>→ LoggedOut</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Locked</strong></td>
                                        <td><em>(無効)</em></td>
                                        <td><em>(無効)</em></td>
                                        <td><em>(無効)</em></td>
                                        <td><em>(無効)</em></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>状態遷移カバレッジの3つの水準</h4>
                        <ol>
                            <li><strong>全状態カバレッジ（All States Coverage）</strong>：すべての状態を最低1回訪れる（もっとも弱い水準）</li>
                            <li><strong>有効遷移カバレッジ（0-switch / Valid Transitions Coverage）</strong>：識別されたすべての有効な遷移を最低1回実行する（標準的な水準）</li>
                            <li><strong>全遷移カバレッジ（All Transitions Coverage）</strong>：有効な遷移に加え、状態表で示された<strong>無効な遷移（試行してエラーになること）</strong>もすべてテストする（もっとも強い水準）</li>
                        </ol>

                        <div className="code-block">
                            <div className="code-label">coverage formula</div>
                            <pre className="code-content">有効遷移カバレッジ(%) = (テストで実行された有効な遷移数 ÷ 識別された有効な遷移総数) × 100</pre>
                        </div>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-2-black-box-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.2 Black-box Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/state-transition-testing" target="_blank" rel="noopener">ISTQB Glossary, state transition testing</a>
                            </p>
                        </div>
                    </section>

                    {/* ============ SECTION 3 (4.3) ============ */}
                    <section id="sec-3">
                        <span className="sec-kicker">4.3</span>
                        <h2>4.3 ホワイトボックステスト技法（White-box Test Techniques）</h2>
                        <p>
                            ホワイトボックステスト技法（別名：構造ベース技法）は、<strong>テスト対象の内部構造（ソースコード、アーキテクチャ、詳細設計など）を直接参照してテストケースを設計・測定する技法群</strong>です。主にコンポーネントテスト（単体テスト）やコンポーネント統合テストのレベルで開発者または専門テスターによって適用されます。
                        </p>

                        <h3>共通の題材コード</h3>
                        <p>以下の Python 関数を題材に、ステートメントテストと分岐テストを比較します。</p>

                        <div className="code-block">
                            <div className="code-label">shipping.py</div>
                            <pre className="code-content">{`def calculate_shipping_fee(amount: int, is_member: bool) -> int:
    fee = 500                     # S1: ステートメント
    if amount >= 5000:            # D1: 分岐（決定）
        fee = 0                   # S2: ステートメント（D1がTrueの場合のみ実行）
    if is_member:                 # D2: 分岐（決定）
        fee = fee - 100           # S3: ステートメント（D2がTrueの場合のみ実行）
    return fee                    # S4: ステートメント`}</pre>
                        </div>

                        <p><strong>制御フローグラフ</strong></p>
                        <div className="diagram">
                            <Mermaid chart={`flowchart TD
Start(["開始"]) --> S1["S1: fee = 500"]
S1 --> D1{"D1: amount >= 5000 ?"}
D1 -->|"True"| S2["S2: fee = 0"]
D1 -->|"False"| D2{"D2: is_member ?"}
S2 --> D2
D2 -->|"True"| S3["S3: fee = fee - 100"]
D2 -->|"False"| Finish(["return fee"])
S3 --> Finish`} />
                            <div className="diagram-caption">図3: calculate_shipping_fee の制御フローグラフ</div>
                        </div>
                    </section>

                    {/* 4.3.1 */}
                    <section id="sec-3-1">
                        <span className="sec-kicker">4.3.1</span>
                        <h2>ステートメントテストとステートメントカバレッジ</h2>
                        <p>
                            ステートメントテストでは、<strong>カバレッジ項目は実行可能なステートメント（executable statement）</strong>です。
                        </p>
                        <div className="code-block">
                            <div className="code-label">coverage formula</div>
                            <pre className="code-content">ステートメントカバレッジ(%) = (テストで実行されたステートメント数 ÷ 実行可能なステートメント総数) × 100</pre>
                        </div>

                        <h4>ステップバイステップ</h4>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>テストケース</th>
                                        <th>入力 (amount, is_member)</th>
                                        <th>実行されるステートメント</th>
                                        <th>網羅ステートメント</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>TC1</strong></td>
                                        <td><code>(6000, True)</code></td>
                                        <td>S1 → D1(T) → S2 → D2(T) → S3 → S4</td>
                                        <td>S1, S2, S3, S4（全4個）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="coverage-block">
                            <div className="coverage-row">
                                <span className="coverage-label">TC1 実行後のSC:</span>
                                <div className="coverage-bar">
                                    <div className="seg on"></div>
                                    <div className="seg on"></div>
                                    <div className="seg on"></div>
                                    <div className="seg on"></div>
                                </div>
                                <span className="coverage-pct">100%</span>
                            </div>
                        </div>
                        <p>
                            <strong>注意</strong>：TC1の<strong>たった1つのテストケース</strong>で、すべてのステートメント（S1〜S4）が実行されたため、ステートメントカバレッジは <code>(4 ÷ 4) × 100 = 100%</code> に達します。しかし、D1がFalseの場合（5000円未満）やD2がFalseの場合（非会員）は<strong>一度もテストされていません</strong>。これがステートメントテストの限界です。
                        </p>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-3-white-box-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.3 White-box Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/statement-testing" target="_blank" rel="noopener">ISTQB Glossary, statement testing</a>
                            </p>
                        </div>
                    </section>

                    {/* 4.3.2 */}
                    <section id="sec-3-2">
                        <span className="sec-kicker">4.3.2</span>
                        <h2>分岐テストと分岐カバレッジ</h2>
                        <p>
                            分岐テストでは、<strong>カバレッジ項目は制御フロー上の分岐（Branch / 判定結果の真偽それぞれの枝）</strong>です。
                        </p>
                        <div className="code-block">
                            <div className="code-label">coverage formula</div>
                            <pre className="code-content">分岐カバレッジ(%) = (テストで実行された分岐数 ÷ 識別された分岐総数) × 100</pre>
                        </div>

                        <p>本例の分岐総数は <strong>4本</strong> です：</p>
                        <ul>
                            <li>D1: True (amount &gt;= 5000) / False (amount &lt; 5000)</li>
                            <li>D2: True (is_member == True) / False (is_member == False)</li>
                        </ul>

                        <h4>ステップバイステップ</h4>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>テストケース</th>
                                        <th>入力 (amount, is_member)</th>
                                        <th>実行される分岐</th>
                                        <th>累積分岐カバレッジ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>TC1</strong></td>
                                        <td><code>(6000, True)</code></td>
                                        <td>D1-True, D2-True</td>
                                        <td>2 / 4 (50%)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>TC2</strong></td>
                                        <td><code>(3000, False)</code></td>
                                        <td>D1-False, D2-False</td>
                                        <td>4 / 4 (100%)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="coverage-block">
                            <div className="coverage-row">
                                <span className="coverage-label">TC1 のみ:</span>
                                <div className="coverage-bar">
                                    <div className="seg on"></div>
                                    <div className="seg on"></div>
                                    <div className="seg"></div>
                                    <div className="seg"></div>
                                </div>
                                <span className="coverage-pct">50%</span>
                            </div>
                            <div className="coverage-row">
                                <span className="coverage-label">TC1 + TC2:</span>
                                <div className="coverage-bar">
                                    <div className="seg on"></div>
                                    <div className="seg on"></div>
                                    <div className="seg on"></div>
                                    <div className="seg on"></div>
                                </div>
                                <span className="coverage-pct">100%</span>
                            </div>
                        </div>

                        <div className="callout point">
                            <span className="dot"></span>
                            <p>
                                <strong>最重要原則（包含関係）</strong>：<strong>100% 分岐カバレッジを達成すれば、必ず 100% ステートメントカバレッジも達成されます</strong>（すべての分岐を網羅すれば、分岐先にある全ステートメントも必ず実行されるため）。しかし、<strong>逆は成立しません</strong>（100% ステートメントカバレッジを達成しても、上記のように分岐カバレッジは50%に留まることがあります）。
                            </p>
                        </div>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-3-white-box-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.3 White-box Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/branch-testing" target="_blank" rel="noopener">ISTQB Glossary, branch testing</a>
                            </p>
                        </div>
                    </section>

                    {/* 4.3.3 */}
                    <section id="sec-3-3">
                        <span className="sec-kicker">4.3.3</span>
                        <h2>ホワイトボックステストの価値</h2>
                        <div className="grid-2">
                            <div className="card">
                                <h5>ホワイトボックステストの強み</h5>
                                <ul>
                                    <li>仕様書に記載されていないコード（隠れた機能、デバッグ用バックドア、到達不能コード）を検出できる</li>
                                    <li>テストスイートの客観的な網羅率（カバレッジメトリクス）を定量的に測定できる</li>
                                    <li>ブラックボックステストで見逃されたロジックパスの追加テストを導出できる</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h5>ホワイトボックステストの限界</h5>
                                <ul>
                                    <li><strong>仕様そのものの抜け漏れ（Omission defects）</strong>は検出できない（実装されていない機能はコード上に存在しないため）</li>
                                    <li>コードの内部実装に密結合するため、リファクタリング時にテストが壊れやすい</li>
                                </ul>
                            </div>
                        </div>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-3-white-box-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.3 White-box Test Techniques</a>
                            </p>
                        </div>
                    </section>

                    {/* ============ SECTION 4 (4.4) ============ */}
                    <section id="sec-4">
                        <span className="sec-kicker">4.4</span>
                        <h2>4.4 経験ベースのテスト技法（Experience-based Test Techniques）</h2>
                        <p>
                            経験ベースのテスト技法は、<strong>テスター、開発者、ユーザーの知識、経験、直感を頼りにテストケースを設計・実行する技法群</strong>です。仕様が不十分・存在しない場合、時間的制約が厳しい場合、あるいは形式的なブラックボックス／ホワイトボックステストを補完して未知の欠陥を洗い出す目的で極めて有効です。
                        </p>
                    </section>

                    {/* 4.4.1 */}
                    <section id="sec-4-1">
                        <span className="sec-kicker">4.4.1</span>
                        <h2>エラー推測（Error Guessing）</h2>
                        <p>
                            テスターが以下の情報源を活用して、<strong>開発者が犯しやすい過ち（mistake）、それによって生じる欠陥（defect）、および障害（failure）を予測・リストアップしてテストする技法</strong>です。
                        </p>
                        <ul>
                            <li>過去の類似プロジェクトでの欠陥履歴やバグ傾向</li>
                            <li>開発者の癖やスキルレベル、使用フレームワークの典型的な落とし穴</li>
                            <li>他アプリケーションでよく見られる失敗パターン（ゼロ除算、NULLポインタ、特殊文字入力、タイムアウトなど）</li>
                        </ul>
                        <p>
                            シラバスでは、推測した欠陥リストを体系化した「<strong>欠陥分類リスト（defect taxonomy）</strong>」を活用してテストを設計する方法も紹介されています。
                        </p>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-4-experience-based-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.4 Experience-based Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/error-guessing" target="_blank" rel="noopener">ISTQB Glossary, error guessing</a>
                            </p>
                        </div>
                    </section>

                    {/* 4.4.2 */}
                    <section id="sec-4-2">
                        <span className="sec-kicker">4.4.2</span>
                        <h2>探索的テスト（Exploratory Testing）</h2>
                        <p>
                            探索的テストは、<strong>「テストの設計」「テストの実行」「テストの記録」「学習」を分離せず、同時に並行して行うアプローチ</strong>です。事前に詳細なテスト手順書を作成せず、システムを実行しながら得られた知見に基づいて次のテストを動的に組み立てていきます。
                        </p>

                        <h3>セッションベーステスト管理（Session-based Test Management, SBTM）</h3>
                        <p>
                            探索的テストの無秩序化・属人化を防ぐため、シラバスでは<strong>タイムボックス化されたセッション（通常60〜120分程度）</strong>で区切り、<strong>テストチャーター（Test Charter / テストの目的・対象範囲・観点を定めた指示書）</strong>に基づいて実施・記録するセッションベーステスト管理の手法が推奨されています。
                        </p>

                        <div className="code-block">
                            <div className="code-label">test charter example</div>
                            <pre className="code-content">{`チャーター: ショッピングカートの割引適用機能において、
           複数クーポンの連続適用・取消時の挙動を探索し、
           合計金額の不整合や表示崩れの欠陥を発見する。
タイムボックス: 90分
テスター: QAエンジニア A / 観点: 異常系・境界値・同時操作`}</pre>
                        </div>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-4-experience-based-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.4 Experience-based Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/exploratory-testing" target="_blank" rel="noopener">ISTQB Glossary, exploratory testing</a>
                            </p>
                        </div>
                    </section>

                    {/* 4.4.3 */}
                    <section id="sec-4-3">
                        <span className="sec-kicker">4.4.3</span>
                        <h2>チェックリストベースドテスト（Checklist-based Testing）</h2>
                        <p>
                            テスターが<strong>経験、テスト対象について知られていること、ユーザーが関心を持つ項目（ユーザーがなぜ・どのようにソフトウェアを使うか）、あるいはソフトウェアが失敗する理由などをまとめた「高レベルのチェックリスト」</strong>に基づいてテストを設計・実行する技法です。
                        </p>
                        <p>
                            チェックリストの各項目は、詳細な手順ではなく「〇〇の互換性を確認」「セッションタイムアウト時の再ログイン挙動」といった高レベルの指針として記述されます。テスターはチェックリスト項目を出発点として、具体的なテスト手順を柔軟に決定して実行します。
                        </p>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-4-experience-based-test-techniques/" target="_blank" rel="noopener">ASTQB, 4.4 Experience-based Test Techniques</a> / <a href="https://glossary.istqb.org/en_US/term/checklist-based-testing" target="_blank" rel="noopener">ISTQB Glossary, checklist-based testing</a>
                            </p>
                        </div>

                        <h3>経験ベース技法の比較まとめ</h3>
                        <div className="diagram">
                            <Mermaid chart={`flowchart LR
A["テスターの経験・知識・直感"] --> B["エラー推測"]
A --> C["探索的テスト"]
A --> D["チェックリストベースドテスト"]
B -->|"個別の欠陥を予測してピンポイントで狙う"| E["フォーマル技法が見逃す欠陥を検出"]
C -->|"学習しながら同時に設計・実行・評価"| E
D -->|"高レベルの網羅リストで抜け漏れを防ぐ"| E`} />
                            <div className="diagram-caption">図4: 経験ベースの3技法とその役割</div>
                        </div>
                    </section>

                    {/* ============ SECTION 5 (4.5) ============ */}
                    <section id="sec-5">
                        <span className="sec-kicker">4.5</span>
                        <h2>コラボレーションベースのテストアプローチ（Collaboration-based Test Approaches）</h2>
                        <p>
                            これまでの技法群が主に「欠陥の検出（defect detection）」を目的とするのに対し、コラボレーションベースのアプローチは、開発者・テスター・ビジネス代表者間の<strong>会話とコラボレーションによる欠陥の"回避"（defect avoidance）</strong>にも重点を置きます。アジャイル開発、特にユーザーストーリーを扱う文脈で中心的な役割を果たします。
                        </p>
                    </section>

                    {/* 4.5.1 */}
                    <section id="sec-5-1">
                        <span className="sec-kicker">4.5.1</span>
                        <h2>ユーザーストーリーの共同作成（Collaborative User Story Writing）</h2>
                        <p>
                            ユーザーストーリーは、システムやソフトウェアの利用者・購入者にとって価値のある機能を表現したものです。ユーザーストーリーには「<strong>3つのC（3 C&apos;s）</strong>」と呼ばれる重要な側面があります。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>要素</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Card（カード）</strong></td>
                                        <td>ユーザーストーリーを記述する媒体（インデックスカード、電子ボードのエントリーなど）</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Conversation（会話）</strong></td>
                                        <td>ソフトウェアがどう使われるかを説明するもの（文書化されている場合も口頭の場合もある）</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Confirmation（確認）</strong></td>
                                        <td>受け入れ基準（acceptance criteria）そのもの</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            ユーザーストーリーの作成は、開発者・テスター・ビジネス代表者（プロダクトオーナー、ビジネスアナリストなど）が共同で行う、静的テストの一環でもあります（第3章「協調的なユーザーストーリー作成」参照）。テスターはこのプロセスで、ユーザーストーリーの完全性・理解可能性・テスト可能な受け入れ基準の有無をレビューし、適切な質問を投げかけることで改善に貢献します。
                        </p>
                    </section>

                    {/* 4.5.2 */}
                    <section id="sec-5-2">
                        <span className="sec-kicker">4.5.2</span>
                        <h2>受け入れ基準（Acceptance Criteria）</h2>
                        <p>
                            受け入れ基準とは、あるユーザーストーリーの実装がステークホルダーに受け入れられるために満たすべき条件です。この観点から見ると、<strong>受け入れ基準はテストによって検証されるべきテスト条件そのもの</strong>とも言えます。受け入れ基準は通常、「Conversation（会話）」の結果として生まれます。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>形式</th>
                                        <th>特徴</th>
                                        <th>例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Scenario-oriented<br />(Given/When/Then)</td>
                                        <td>BDD（Behavior-Driven Development）でよく使われる、条件・操作・結果を構造化した形式</td>
                                        <td>下記参照</td>
                                    </tr>
                                    <tr>
                                        <td>Rule-oriented<br />（チェックリスト形式）</td>
                                        <td>満たすべきルールを箇条書きで列挙する形式</td>
                                        <td>「パスワードは8文字以上」「特殊文字を1つ以上含む」など</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p><strong>Given/When/Then形式の受け入れ基準の例</strong></p>
                        <div className="code-block">
                            <div className="code-label">login.feature</div>
                            <pre className="code-content">{`Feature: ログイン機能

  Scenario: 正しい認証情報でログインに成功する
    Given 登録済みユーザーがログイン画面を表示している
    When  正しいユーザー名とパスワードを入力し、ログインボタンを押す
    Then  ダッシュボード画面に遷移する
    And   ウェルカムメッセージが表示される`}</pre>
                        </div>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-5-collaboration-based-test-approaches/" target="_blank" rel="noopener">ASTQB, 4.5 Collaboration-based Test Approaches</a>
                            </p>
                        </div>
                    </section>

                    {/* 4.5.3 */}
                    <section id="sec-5-3">
                        <span className="sec-kicker">4.5.3</span>
                        <h2>受け入れテスト駆動開発（Acceptance Test-Driven Development, ATDD）</h2>
                        <p>
                            ATDDは<strong>テストファーストのアプローチ</strong>です。テストケースは、ユーザーストーリーの実装が始まる<strong>前に</strong>、受け入れ基準に基づいて作成されます。重要な特徴は、テストケースが単一の役割ではなく、<strong>顧客・開発者・テスターという異なる視点を持つチームメンバーによって共同作成される</strong>という点です。
                        </p>

                        <div className="diagram">
                            <Mermaid chart={`flowchart LR
A["ユーザーストーリー + 受け入れ基準"] --> B["受け入れテストケースの共同作成 (顧客・開発者・テスター)"]
B --> C["テストの実行 (実装前は当然Fail)"]
C --> D["プロダクトコードの実装"]
D --> E["テストの再実行"]
E -->|"Fail"| D
E -->|"Pass"| F["ユーザーストーリー完了 Done"]
F -.->|"自動テストとして資産化・回帰テストに活用"| G["リグレッションテストスイート"]`} />
                            <div className="diagram-caption">図5: ATDDのワークフロー</div>
                        </div>

                        <p>
                            ATDDのテストケースは、通常まず<strong>ポジティブケース（正しい振る舞いを確認するもの）</strong>から作成され、その後にネガティブケースや代替フローが追加されます。手動実行でも自動化でもよく、実装後もリグレッションテストの資産として長く活用されることが一般的です。
                        </p>

                        <p><strong>Given/When/Thenからpytestテストコードへの変換例</strong></p>
                        <div className="code-block">
                            <div className="code-label">tests/test_login.py</div>
                            <pre className="code-content">{`def test_login_success_with_valid_credentials(login_page, existing_user):
    # Given: 登録済みユーザーがログイン画面を表示している
    login_page.open()

    # When: 正しいユーザー名とパスワードを入力し、ログインボタンを押す
    login_page.enter_username(existing_user.username)
    login_page.enter_password(existing_user.password)
    login_page.click_login_button()

    # Then: ダッシュボード画面に遷移し、ウェルカムメッセージが表示される
    assert login_page.current_url().endswith("/dashboard")
    assert login_page.welcome_message_is_displayed()`}</pre>
                        </div>
                        <p>
                            このように、ATDDで合意した受け入れ基準がそのままテストコードの骨格になる点が、TDD／BDDとの共通点であり、シフトレフト（第2章参照）を体現する実践例です。
                        </p>

                        <div className="callout info">
                            <span className="dot"></span>
                            <p>
                                参考: <a href="https://astqb.org/4-5-collaboration-based-test-approaches/" target="_blank" rel="noopener">ASTQB, 4.5 Collaboration-based Test Approaches</a> / <a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf" target="_blank" rel="noopener">ISTQB CTFL Syllabus v4.0.1, Section 4.5</a>（p.45-46）
                            </p>
                        </div>
                    </section>

                    {/* ============ SECTION 6 ============ */}
                    <section id="sec-6">
                        <span className="sec-kicker">GUIDE</span>
                        <h2>6. 技法選択の指針：どの技法をいつ使うか</h2>
                        <p>
                            実務でもっとも重要なのは「暗記」ではなく「使い分け」です。以下の意思決定フローを参考にしてください。
                        </p>

                        <div className="diagram">
                            <Mermaid chart={`flowchart TD
Start(["これからテストを設計する"]) --> Q1{"仕様書・要件が明確に存在するか？"}
Q1 -->|"Yes"| Q2{"入力データに範囲・分類があるか？"}
Q1 -->|"No (曖昧)"| Exp["経験ベースの技法 (探索的テスト・エラー推測)"]
Q2 -->|"Yes"| Q3{"境界・順序性があるか？"}
Q2 -->|"No (複数条件の組合せロジック)"| DT["デシジョンテーブルテスト"]
Q3 -->|"Yes"| BVA["境界値分析 (同値分割法とセットで)"]
Q3 -->|"No"| EP["同値分割法"]
Start --> Q4{"状態・モードが変化するシステムか？"}
Q4 -->|"Yes"| ST["状態遷移テスト"]
Start --> Q5{"コードの内部構造にアクセスできるか？ (実装後)"}
Q5 -->|"Yes (網羅率を客観的に証明したい)"| WB["ホワイトボックス技法 (ステートメント／分岐カバレッジ)"]
Start --> Q6{"アジャイルでユーザーストーリーを扱っているか？"}
Q6 -->|"Yes"| Collab["コラボレーションベースのアプローチ (ATDD等)"]`} />
                            <div className="diagram-caption">図6: テスト技法の選択フローチャート</div>
                        </div>

                        <h3>6.1 技法比較総括表</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>技法</th>
                                        <th>カテゴリ</th>
                                        <th>カバレッジ項目</th>
                                        <th>適した対象</th>
                                        <th>弱点</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>同値分割法</td>
                                        <td><span className="badge bb">BB</span></td>
                                        <td>同値パーティション</td>
                                        <td>入力値の分類が明確な項目</td>
                                        <td>境界付近の欠陥は見逃しやすい</td>
                                    </tr>
                                    <tr>
                                        <td>境界値分析</td>
                                        <td><span className="badge bb">BB</span></td>
                                        <td>境界値（＋隣接値）</td>
                                        <td>順序性のある範囲入力</td>
                                        <td>順序のないデータには適用不可</td>
                                    </tr>
                                    <tr>
                                        <td>デシジョンテーブルテスト</td>
                                        <td><span className="badge bb">BB</span></td>
                                        <td>実現可能な列（ルール）</td>
                                        <td>複数条件の組合せビジネスロジック</td>
                                        <td>条件数増加で列数が指数的に増大</td>
                                    </tr>
                                    <tr>
                                        <td>状態遷移テスト</td>
                                        <td><span className="badge bb">BB</span></td>
                                        <td>状態／遷移</td>
                                        <td>モード・ステータスを持つシステム</td>
                                        <td>状態数が多いと組合せ爆発</td>
                                    </tr>
                                    <tr>
                                        <td>ステートメントテスト</td>
                                        <td><span className="badge wb">WB</span></td>
                                        <td>実行可能ステートメント</td>
                                        <td>最低限のコードカバレッジ保証</td>
                                        <td>分岐ロジックの網羅は保証しない</td>
                                    </tr>
                                    <tr>
                                        <td>分岐テスト</td>
                                        <td><span className="badge wb">WB</span></td>
                                        <td>分岐（決定の各結果）</td>
                                        <td>ロジックの網羅的検証</td>
                                        <td>パスの組合せまでは保証しない</td>
                                    </tr>
                                    <tr>
                                        <td>エラー推測</td>
                                        <td><span className="badge eb">EB</span></td>
                                        <td>なし（体系的基準を持たない）</td>
                                        <td>過去の欠陥傾向がある領域</td>
                                        <td>テスターのスキル依存、再現性が低い</td>
                                    </tr>
                                    <tr>
                                        <td>探索的テスト</td>
                                        <td><span className="badge eb">EB</span></td>
                                        <td>テストチャーターの達成度</td>
                                        <td>要件が曖昧・複雑なシステム</td>
                                        <td>設計と実行が同時のため事前見積りが難しい</td>
                                    </tr>
                                    <tr>
                                        <td>チェックリストベースドテスト</td>
                                        <td><span className="badge eb">EB</span></td>
                                        <td>チェックリスト項目</td>
                                        <td>繰り返し発生する既知の観点の網羅</td>
                                        <td>チェックリストの陳腐化リスク</td>
                                    </tr>
                                    <tr>
                                        <td>コラボレーションベース（ATDD等）</td>
                                        <td><span className="badge cb">CB</span></td>
                                        <td>受け入れ基準</td>
                                        <td>アジャイル・ユーザーストーリー駆動開発</td>
                                        <td>チーム全体のコラボレーション文化が前提</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ============ SECTION 7 ============ */}
                    <section id="sec-7">
                        <span className="sec-kicker">EXAM PREP</span>
                        <h2>7. 試験対策のポイント</h2>

                        <h3>7.1 頻出の引っかけポイント</h3>
                        <ol>
                            <li>
                                <strong>同値分割法とデシジョンテーブルテストの境界線</strong>：単一パラメータの分類 → 同値分割法。複数条件の<strong>組み合わせロジック</strong> → デシジョンテーブルテスト、という区別を問う問題が頻出です。
                            </li>
                            <li>
                                <strong>2値BVAと3値BVAの計算問題</strong>：「境界がN個ある場合、2値BVAでは2N個、3値BVAでは3N個のテストケース（カバレッジ項目）が必要」という計算をさせる問題が出ます。ただし境界同士が隣接（重複）している場合は重複値を1つにまとめられる点にも注意してください。
                            </li>
                            <li>
                                <strong>分岐カバレッジ＞ステートメントカバレッジの包含関係</strong>：「100%分岐カバレッジを達成したテストスイートは、必ず100%ステートメントカバレッジも達成する。逆は成立しない」という一方向の包含関係を問う問題は非常に頻出です。
                            </li>
                            <li>
                                <strong>状態遷移テストの3つのカバレッジ基準の強さの順序</strong>：全遷移カバレッジ ⊃ 有効遷移カバレッジ ⊃ 全状態カバレッジ、という包含関係。
                            </li>
                            <li>
                                <strong>経験ベース技法とコラボレーションベースアプローチの違い</strong>：後者は「4.1節の3分類」に含まれない独立したカテゴリである点。
                            </li>
                            <li>
                                <strong>チェックリストに含めるべきでない項目</strong>：自動化できる項目、エントリー/エグジット基準に該当する項目、一般的すぎる項目の3点は選択肢問題で頻出です。
                            </li>
                        </ol>

                        <h3>7.2 学習の進め方（ステップバイステップ）</h3>
                        <div className="diagram">
                            <Mermaid chart={`flowchart LR
A["1. 用語の暗記 (K1キーワード)"] --> B["2. 各技法の定義理解 (K2学習目標)"]
B --> C["3. 手計算でのテストケース導出練習 (K3学習目標)"]
C --> D["4. 公式サンプル問題を解く"]
D --> E["5. 誤答分析 → 該当セクションに戻る"]
E --> C`} />
                            <div className="diagram-caption">図7: 本章の学習サイクル</div>
                        </div>
                        <p>
                            K3レベルの学習目標（4.2節・4.5.3）は「実際に手を動かしてテストケースを導出できるか」が問われるため、本記事のような具体例を<strong>自分で紙に書いて再現できるか</strong>を必ず確認してください。
                        </p>
                    </section>

                    {/* ============ SECTION 8 ============ */}
                    <section id="sec-8">
                        <span className="sec-kicker">SUMMARY</span>
                        <h2>8. まとめ</h2>
                        <p>
                            第4章は、ISTQB CTFL v4.0の中で最もボリュームが大きく、実務での有用性も最も高い章です。要点を1枚で振り返ると以下のようになります。
                        </p>
                        <ul>
                            <li><strong>3分類＋1アプローチ</strong>：ブラックボックス（仕様）、ホワイトボックス（構造）、経験ベース（知識・直感）の3分類に、欠陥回避に重きを置くコラボレーションベース（会話）が加わる。</li>
                            <li><strong>K3技法の実践力</strong>：同値分割法・境界値分析・デシジョンテーブルテスト・状態遷移テスト・ATDDは、手計算でテストケースを導出できるレベルまで練習する。</li>
                            <li><strong>包含関係の理解</strong>：100%分岐カバレッジ ⇒ 100%ステートメントカバレッジ（逆は不成立）、全遷移カバレッジ ⇒ 有効遷移カバレッジ ⇒ 全状態カバレッジ。</li>
                            <li><strong>ATDDとシフトレフト</strong>：3つのC（Card, Conversation, Confirmation）を通じて受け入れ基準を事前に合意し、テストファーストで欠陥を未然に防ぐ。</li>
                        </ul>
                        <p>
                            第5章「テストマネジメント」では、これらの技法を用いて設計されたテスト活動を、プロジェクト全体の中でどのように計画・監視・制御・見積もりするかを学びます。
                        </p>
                    </section>

                    {/* ============ SECTION REFS ============ */}
                    <section id="sec-refs">
                        <span className="sec-kicker">SOURCES</span>
                        <h2>参考文献・引用元URL一覧</h2>
                        <ol className="ref-list">
                            <li>
                                <span className="ref-title">ISTQB®, <em>Certified Tester Foundation Level (CTFL) Syllabus v4.0.1</em> (2024)</span>
                                <a className="ref-url" href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf" target="_blank" rel="noopener">
                                    https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                </a>
                            </li>
                            <li>
                                <span className="ref-title">ASTQB, <em>CTFL Syllabus v4.0 - Chapter 4: Test Analysis and Design</em></span>
                                <a className="ref-url" href="https://astqb.org/4-1-overview-of-test-techniques/" target="_blank" rel="noopener">
                                    https://astqb.org/4-1-overview-of-test-techniques/
                                </a>
                            </li>
                            <li>
                                <span className="ref-title">ISTQB® Glossary of Testing Terms (Interactive / v4.0 対応)</span>
                                <a className="ref-url" href="https://glossary.istqb.org/" target="_blank" rel="noopener">
                                    https://glossary.istqb.org/
                                </a>
                            </li>
                            <li>
                                <span className="ref-title">JSTQB, <em>テスト技術者資格制度 Foundation Level シラバス Version 2023.J01</em> (2024)</span>
                                <a className="ref-url" href="https://jstqb.jp/syllabus.html" target="_blank" rel="noopener">
                                    https://jstqb.jp/syllabus.html
                                </a>
                            </li>
                            <li>
                                <span className="ref-title">Master Software Testing, <em>ISTQB CTFL Chapter 4: Test Analysis and Design Complete Guide</em></span>
                                <a className="ref-url" href="https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-test-analysis-design" target="_blank" rel="noopener">
                                    https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-test-analysis-design
                                </a>
                            </li>
                            <li>
                                <span className="ref-title">ToolsQA, <em>Error Guessing Technique in Software Testing</em></span>
                                <a className="ref-url" href="https://www.toolsqa.com/software-testing/error-guessing-technique-software-testing/" target="_blank" rel="noopener">
                                    https://www.toolsqa.com/software-testing/error-guessing-technique-software-testing/
                                </a>
                            </li>
                            <li>
                                <span className="ref-title">ISO/IEC/IEEE 29119-4:2021, <em>Software and systems engineering — Software testing — Part 4: Test techniques</em>（シラバス本文が参照する国際規格）</span>
                                <a className="ref-url" href="https://www.iso.org/standard/79430.html" target="_blank" rel="noopener">
                                    https://www.iso.org/standard/79430.html
                                </a>
                            </li>
                        </ol>
                        <div className="callout warn" style={{ marginTop: '24px' }}>
                            <span className="dot"></span>
                            <p>
                                本記事はISTQB® CTFL v4.0.1シラバスの内容を基に、実務での理解を助けるための独自の具体例（コード・図表）を追加して解説したものです。試験の正式な出題範囲・正誤判定は必ず上記シラバス原文を最終的な拠り所としてください。
                            </p>
                        </div>
                    </section>
                </div>

                <footer>
                    ISTQB®, ISTQB® CTFL は International Software Testing Qualifications Board の登録商標です。本ドキュメントは学習目的の独自解説であり、ISTQB®による公式資料ではありません。
                </footer>
            </main>
        </div>
    );
}
