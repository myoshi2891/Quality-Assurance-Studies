import './istqb-ctfl-v4-chapter3-static-testing.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';

const DIAGRAM_1 = `flowchart TD
    A["ソフトウェアテスト"] --> B["静的テスト（実行しない）"]
    A --> C["動的テスト（実行する）"]
    B --> B1["レビュー（人手による評価）"]
    B --> B2["静的解析（ツールによる評価）"]
    C --> C1["テストケースの設計と実行"]
    C --> C2["故障の検出と欠陥の特定"]

    classDef staticNode fill:#173430,stroke:#4fd1c5,color:#a8ece4
    classDef dynamicNode fill:#211c38,stroke:#8b7cf6,color:#c7bdfa
    class B,B1,B2 staticNode
    class C,C1,C2 dynamicNode`;

const DIAGRAM_2 = `flowchart LR
    A["1. 計画"] --> B["2. レビューの開始"]
    B --> C["3. 個々のレビュー"]
    C --> D["4. コミュニケーションと分析"]
    D --> E["5. 修正と報告"]
    D -.->|"終了基準未達の場合"| C

    classDef step fill:#16202e,stroke:#7fa8e8,color:#e7e8ee
    class A,B,C,D,E step`;

const DIAGRAM_3 = `flowchart LR
    A["非公式レビュー"] --> B["ウォークスルー"]
    B --> C["テクニカルレビュー"]
    C --> D["インスペクション"]

    classDef low fill:#3a2418,stroke:#f08a5d,color:#f7c4a8
    classDef high fill:#173430,stroke:#4fd1c5,color:#a8ece4
    class A,B low
    class C,D high`;

export default function Page() {
    return (
        <div className="istqb-ctfl-v4-chapter3-page">
            <div className="layout">
                <NavBar />
                <main className="content">
                    <span className="hero-eyebrow">
                        <i className="ti ti-shield-check"></i>ISTQB® CTFL v4.0.1 準拠
                    </span>
                    <h1>第3章：静的テスト 徹底解説</h1>
                    <p className="lede">
                        ソフトウェアを実行せずに欠陥を見つける――静的テストの基本から、レビュープロセス、役割分担、レビュー種別の選び方までを、公式シラバスと実務の両面からステップバイステップで解説します。
                    </p>

                    <section id="overview">
                        <h2>
                            <i className="ti ti-map"></i>&nbsp;0. この章の位置づけ
                        </h2>
                        <p>
                            CTFL v4.0 シラバスは全6章で構成され、Chapter 3「静的テスト」の標準学習時間は<strong>80分</strong>と、6章の中では最も短い部類に入ります。とはいえ出題範囲としての重要度が低いわけではなく、「欠陥をできるだけ早く・安く見つける」というテストの大原則（第1章で学ぶ7原則の3番目「早期テストは時間とコストを節約する」）を実践するうえでの中核技法がここに詰まっています。
                        </p>

                        <Mermaid chart={DIAGRAM_1} />

                        <p>
                            第2章で学ぶ「シフトレフト」の考え方とも直結しており、コードがまだ実行できない段階（要件定義・設計フェーズ）から欠陥を発見できる唯一の手段が静的テストです。動的テストが「動かして壊れ方を見る」アプローチだとすれば、静的テストは「動かす前に、人の目とツールでミスを見つける」アプローチだと整理すると理解しやすくなります。
                        </p>

                        <h3>学習目標一覧</h3>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>項番</th>
                                        <th>学習目標</th>
                                        <th>認知レベル</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FL-3.1.1</td>
                                        <td>静的テストで検証できる作業成果物の種類を認識する</td>
                                        <td>
                                            <span className="badge badge-k1">K1 記憶</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FL-3.1.2</td>
                                        <td>静的テストの価値を説明する</td>
                                        <td>
                                            <span className="badge badge-k2">K2 理解</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FL-3.1.3</td>
                                        <td>静的テストと動的テストを比較対比する</td>
                                        <td>
                                            <span className="badge badge-k2">K2 理解</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FL-3.2.1</td>
                                        <td>早期かつ頻繁なステークホルダーからのフィードバックの利点を識別する</td>
                                        <td>
                                            <span className="badge badge-k1">K1 記憶</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FL-3.2.2</td>
                                        <td>レビュープロセスの活動を要約する</td>
                                        <td>
                                            <span className="badge badge-k2">K2 理解</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FL-3.2.3</td>
                                        <td>レビューの主要な役割にどの責務が割り当てられるかを想起する</td>
                                        <td>
                                            <span className="badge badge-k1">K1 記憶</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FL-3.2.4</td>
                                        <td>さまざまなレビュー種別を比較対比する</td>
                                        <td>
                                            <span className="badge badge-k2">K2 理解</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FL-3.2.5</td>
                                        <td>レビューを成功させる要因を想起する</td>
                                        <td>
                                            <span className="badge badge-k1">K1 記憶</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            <strong>キーワード（暗記必須）</strong>：anomaly（不正）、dynamic testing（動的テスト）、formal review（公式レビュー）、informal review（非公式レビュー）、inspection（インスペクション）、review（レビュー）、static analysis（静的解析）、static testing（静的テスト）、technical review（テクニカルレビュー）、walkthrough（ウォークスルー）
                        </p>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>
                                    出典：ISTQB® Certified Tester Foundation Level Syllabus v4.0.1（2024-09-15）, Chapter 3, p.32-33
                                </p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="sec-31">
                        <h2>
                            <i className="ti ti-clipboard-list"></i>&nbsp;1. 3.1 静的テストの基本
                        </h2>

                        <h3>1.1 静的テストとは何か</h3>
                        <p>
                            静的テストは、対象のソフトウェアを実際に動かさずに、要件定義書・設計書・ソースコードといった作業成果物を<strong>人手による精査（レビュー）</strong>、あるいは<strong>ツールによる自動チェック（静的解析）</strong>によって評価するアプローチです。動的テストとの最大の違いは「実行するかどうか」であり、静的テストは実行不可能な文書段階の成果物にも適用できる点が大きな強みになります。
                        </p>
                        <p>
                            静的テストの目的は、欠陥の検出だけにとどまりません。可読性・完全性・正確性・試験性・一貫性といった品質特性を評価し、成果物全体の品質を底上げすることも狙いの一つです。さらに静的テストは、「仕様通りに作られているか」を確認する<strong>検証（Verification）</strong>と、「本当にユーザーが欲しいものになっているか」を確認する<strong>妥当性確認（Validation）</strong>の両方に活用できます。
                        </p>
                        <p>
                            近年のアジャイル開発では、テスト担当者・ビジネス側の代表者（プロダクトオーナーやビジネスアナリスト）・開発担当者が共同で行う<strong>Example Mapping（実例マッピング）</strong>、<strong>ユーザーストーリーの共同執筆</strong>、<strong>バックログリファインメント</strong>といった協働作業も、広い意味での静的テストに含まれます。これらの場では、ユーザーストーリーが「Definition of Ready（準備完了の定義）」を満たしているか、受け入れ基準がテスト可能な形になっているかを、適切な質問を投げかけながら確認していきます。
                        </p>

                        <h3 id="sec-311">1.2 静的テストで検証可能な作業成果物</h3>
                        <p>
                            レビューの対象になり得る作業成果物は非常に幅広く、「人が読んで理解できるもの」であればほぼすべてが対象になります。一方、静的解析の対象にするには、検査の前提となる構造（コードの文法、モデルの記法など）が必要です。
                        </p>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>分類</th>
                                        <th>静的テストの対象となる作業成果物の例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>要求関連</td>
                                        <td>要件仕様書、ユーザーストーリー、受け入れ基準</td>
                                    </tr>
                                    <tr>
                                        <td>設計関連</td>
                                        <td>システムアーキテクチャ仕様書、詳細設計書、データモデル、画面遷移図</td>
                                    </tr>
                                    <tr>
                                        <td>実装関連</td>
                                        <td>ソースコード、ビルドスクリプト、設定ファイル</td>
                                    </tr>
                                    <tr>
                                        <td>テスト関連</td>
                                        <td>テスト計画書、テストケース、テストチャーター、自動化スクリプト</td>
                                    </tr>
                                    <tr>
                                        <td>プロジェクト管理関連</td>
                                        <td>プロジェクト計画書、契約書、製品バックログアイテム</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            一方で、静的テストに適さない作業成果物も存在します。具体的には、人間にとって解釈が困難なもの（例：機械生成された難読化コード）や、ツールで分析すべきでない成果物が該当します。代表例として挙げられるのが<strong>サードパーティの実行可能コード</strong>です。これは多くの場合ライセンス契約上の制約によって、逆コンパイルや静的解析ツールでの分析自体が認められていないためです。この「静的テストに適さない成果物」という観点はシラバスv4.0で新たに明文化された考え方であり、実務でOSSライブラリやベンダー提供のバイナリを扱う際に意識しておくべきポイントです。
                        </p>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>出典：ISTQB® CTFL Syllabus v4.0.1, Section 3.1.1, p.33</p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                            </div>
                        </div>

                        <h3 id="sec-312">1.3 静的テストの価値</h3>
                        <p>静的テストの価値は、大きく次の4つに整理できます。</p>
                        <ol className="steps">
                            <li>
                                <strong>最も早い段階で欠陥を検出できる</strong>　コードが1行も書かれていない要件定義の段階からレビューを始められるため、「早期テストの原則」を最も忠実に実践できる手段です。要件の段階で見つかる矛盾や曖昧さは、設計・実装・テストの各工程に伝播する前に取り除けます。
                            </li>
                            <li>
                                <strong>動的テストでは発見しにくい欠陥を見つけられる</strong>　到達不能コード（どんな条件分岐をたどっても実行されないコードの塊）、意図したとおりに実装されていない設計パターン、そもそも実行できないドキュメントに内在する欠陥などは、動的テストでは原理的に発見が難しいか非常に手間がかかります。
                            </li>
                            <li>
                                <strong>成果物への信頼を積み上げ、共通理解を醸成する</strong>　レビューを通じて要件を確認するプロセスは、書かれた要件が本当にステークホルダーの真のニーズを反映しているかを早期に検証する機会にもなります。これにより開発に関わる人々の間で「何を作るべきか」の認識のずれを防ぎ、コミュニケーションの質も向上します。
                            </li>
                            <li>
                                <strong>結果的にプロジェクト全体のコストを削減する</strong>　レビューの実施自体にはコストがかかりますが、後工程での手戻りコストを考えれば、レビューを行わない場合よりもプロジェクト全体のコストは下がるのが一般的です。静的解析で検出できる種類のコード欠陥は、動的テストで見つけるよりも効率的に検出でき、開発工数全体の削減にもつながります。
                            </li>
                        </ol>
                        <p>
                            静的解析についても補足しておくと、静的解析はテストケースを必要とせず、ツールによって自動実行できるため、レビューよりも少ない工数で多くの欠陥候補を洗い出せるという特徴があります。多くの組織では、CI（継続的インテグレーション）パイプラインに静的解析を組み込み、コードがコミットされるたびに自動でチェックする運用が一般的になっています。静的解析は主にコードの欠陥検出に使われますが、保守性やセキュリティの評価にも活用され、スペルチェッカーや文章の読みやすさを評価するツールも広い意味では静的解析の一種です。
                        </p>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>出典：ISTQB® CTFL Syllabus v4.0.1, Section 3.1.2, p.33-34</p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                            </div>
                        </div>

                        <h3 id="sec-313">1.4 静的テストと動的テストの違い</h3>
                        <p>
                            静的テストと動的テストは対立する技法ではなく、互いの弱点を補い合う<strong>補完関係</strong>にあります。「欠陥を検出する」という目的は共通していますが、検出のメカニズムや得意領域は異なります。
                        </p>

                        <Mermaid chart={DIAGRAM_2} />

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>静的テスト</th>
                                        <th>動的テスト</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ソフトウェアの実行</td>
                                        <td>不要</td>
                                        <td>必要</td>
                                    </tr>
                                    <tr>
                                        <td>欠陥の発見プロセス</td>
                                        <td>欠陥を直接発見する</td>
                                        <td>テスト実行が故障を引き起こし、その後の分析で欠陥を特定する</td>
                                    </tr>
                                    <tr>
                                        <td>適用できる対象</td>
                                        <td>実行不可能な成果物（文書・モデルなど）にも適用可能</td>
                                        <td>実行可能な成果物のみが対象</td>
                                    </tr>
                                    <tr>
                                        <td>検出が得意な品質特性</td>
                                        <td>保守性など、実行しなくても評価できる特性</td>
                                        <td>性能効率性など、実行しないと評価できない特性</td>
                                    </tr>
                                    <tr>
                                        <td>めったに実行されない処理経路の欠陥</td>
                                        <td>比較的見つけやすい</td>
                                        <td>到達・再現が難しい場合がある</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            実務上特に重要なのは、「静的テストでしか見つからない欠陥」と「動的テストでしか見つからない欠陥」がそれぞれ存在するという点です。たとえば実行時のパフォーマンス劣化は動的テストでなければ確認できませんが、コーディング規約違反や到達不能コードは動的テストではほぼ検出できません。したがって、どちらか一方に偏ったテスト戦略はリスクが高く、両方を組み合わせることが推奨されます。
                        </p>

                        <p>
                            シラバスでは、静的テストによって早期かつ安価に検出しやすい欠陥の代表例として、次の7カテゴリが挙げられています。
                        </p>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>欠陥カテゴリ</th>
                                        <th>具体例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>要件の欠陥</td>
                                        <td>矛盾、曖昧な表現、記載漏れ、不正確な記述、重複した記載</td>
                                    </tr>
                                    <tr>
                                        <td>設計の欠陥</td>
                                        <td>非効率なデータベース構造、モジュール分割の悪さ</td>
                                    </tr>
                                    <tr>
                                        <td>一部のコーディング欠陥</td>
                                        <td>
                                            未定義値のままの変数、未宣言変数の使用、到達不能コード、コードの重複、過度に複雑なロジック
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>コーディング標準からの逸脱</td>
                                        <td>命名規則などコーディング規約への不適合</td>
                                    </tr>
                                    <tr>
                                        <td>インタフェース仕様の誤り</td>
                                        <td>パラメータの数・型・順序の不一致</td>
                                    </tr>
                                    <tr>
                                        <td>特定のセキュリティ脆弱性</td>
                                        <td>バッファオーバーフローなど</td>
                                    </tr>
                                    <tr>
                                        <td>テストベースに対するカバレッジの不備</td>
                                        <td>ある受け入れ基準に対応するテストが漏れている、など</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>出典：ISTQB® CTFL Syllabus v4.0.1, Section 3.1.3, p.34</p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="sec-32">
                        <h2>
                            <i className="ti ti-users-group"></i>&nbsp;2. 3.2 フィードバックとレビュープロセス
                        </h2>

                        <h3 id="sec-321">2.1 早期かつ頻繁なステークホルダーフィードバックの利点</h3>
                        <p>
                            レビューの議論に入る前に、なぜそもそも「早期かつ頻繁なフィードバック」が重要なのかを押さえておきます。
                        </p>
                        <p>
                            開発の初期段階でステークホルダーの関与が乏しいと、開発チームが作っているものが、ステークホルダーが本来思い描いていたビジョンとずれていく危険があります。このずれに気づくのが終盤であればあるほど軌道修正のコストは増大し、最悪の場合は納期遅延や責任の押し付け合い、プロジェクト自体の失敗に直結します。
                        </p>
                        <p>
                            逆に、開発ライフサイクル全体を通じて頻繁にフィードバックを得られれば、要件に対する誤解を未然に防ぎ、要件の変更が必要になった場合にも早い段階で気づき、対応できます。これは開発チーム自身が「自分たちが何を作っているのか」をより深く理解することにもつながり、ステークホルダーにとって価値の高い機能や、リスクへの影響が大きい部分に開発の力を集中させやすくなるという副次的な効果もあります。レビューは、この「早期かつ頻繁なフィードバック」を構造的に実現するための代表的な手段の一つです。
                        </p>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>出典：ISTQB® CTFL Syllabus v4.0.1, Section 3.2.1, p.35</p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                            </div>
                        </div>

                        <h3 id="sec-322">2.2 レビュープロセスの活動</h3>
                        <p>
                            レビューには様々な形式があり、案件の重要度やリスクに応じて柔軟に調整される必要があります。シラバスでは、その柔軟性の土台として ISO/IEC 20246 規格が定義する汎用的なレビュープロセスを参照しています。ISO/IEC 20246 は、インスペクション・レビュー・ウォークスルーといった作業成果物レビュー全般について、ライフサイクルのどの段階でも使える汎用的なプロセス、活動、タスク、レビュー技法、文書テンプレートを定めた国際標準です。「より公式なレビューが必要であれば、各活動でより多くのタスクをこなすことになる」という考え方が基本になります。
                        </p>
                        <p>
                            対象となる作業成果物のサイズが大きい場合、1回のレビューですべてをカバーしきれないことがあります。その場合は、同じ成果物に対してレビュープロセス全体を複数回繰り返す（章やモジュール単位で分割してレビューする）運用も想定されています。
                        </p>

                        <Mermaid chart={DIAGRAM_3} />

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>活動</th>
                                        <th>主な目的</th>
                                        <th>具体的なタスクの例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>① 計画</td>
                                        <td>レビューのスコープを定義する</td>
                                        <td>
                                            レビューの目的・対象成果物・評価する品質特性・重点領域・終了基準・参照すべき標準・工数とスケジュールを決定する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>② レビューの開始</td>
                                        <td>参加者と成果物の準備を整える</td>
                                        <td>
                                            参加者全員が対象成果物にアクセスできる状態にし、各自の役割と責務を理解させ、必要な情報を行き渡らせる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>③ 個々のレビュー</td>
                                        <td>レビューアが各自で成果物を精査する</td>
                                        <td>
                                            チェックリストベースドレビューやシナリオベースドレビューなどの技法を用いて、不正・提案・疑問点を識別し記録する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>④ コミュニケーションと分析</td>
                                        <td>見つかった不正を議論し合意する</td>
                                        <td>
                                            レビューミーティングなどを通じて各不正のステータス・担当者・必要な対応を決定し、成果物全体の品質レベルとフォローアップの要否を判断する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>⑤ 修正と報告</td>
                                        <td>欠陥を修正し結果を報告する</td>
                                        <td>
                                            欠陥ごとに欠陥レポートを作成し、是正措置を追跡できるようにする。終了基準を満たした時点で成果物を受け入れ、結果を関係者に報告する
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout callout-tip">
                            <i className="ti ti-bulb"></i>
                            <p>
                                レビューア個人が気づいた「気になる点」は、確定した欠陥（defect）ではなく、まず<strong>不正（anomaly）</strong>として扱われます。不正は、レビューミーティングなどでの議論・分析を経て初めて、欠陥として認定されるか「問題なし」と判断されるかが決まります。この「いきなり欠陥と決めつけない」姿勢は、後述する成功要因（参加者を責めない文化づくり）とも密接に関係しています。
                            </p>
                        </div>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>出典：ISTQB® CTFL Syllabus v4.0.1, Section 3.2.2, p.35-36</p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                                <p>
                                    ISO/IEC 20246:2017 Software and systems engineering — Work product reviews（概要）
                                </p>
                                <p>
                                    <a
                                        href="https://www.iso.org/standard/67407.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.iso.org/standard/67407.html
                                    </a>
                                </p>
                            </div>
                        </div>

                        <h3 id="sec-323">2.3 レビューでの役割と責務</h3>
                        <p>
                            レビューには複数のステークホルダーが関わり、それぞれが異なる役割を担います。1人が複数の役割を兼任することも一般的ですが、シラバスでは以下の6つの principal role（主要な役割）が定義されています。
                        </p>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>役割</th>
                                        <th>主な責務</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>マネージャー</td>
                                        <td>何をレビュー対象とするかを決定し、要員や時間といったリソースを提供する</td>
                                    </tr>
                                    <tr>
                                        <td>作成者（オーサー）</td>
                                        <td>レビュー対象の作業成果物を作成し、指摘された不正・欠陥を修正する</td>
                                    </tr>
                                    <tr>
                                        <td>モデレーター（ファシリテーター）</td>
                                        <td>
                                            レビューミーティングが効果的に進行するよう、議論の調整・時間管理・誰もが安心して発言できる雰囲気づくりを担う
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>書記（スクライブ／レコーダー）</td>
                                        <td>
                                            レビューアから集まった不正情報をまとめ、ミーティング中の決定事項や新たに見つかった不正を記録する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>レビューア</td>
                                        <td>
                                            実際にレビューを行う。プロジェクトに関わる人だけでなく、その分野の専門家やその他のステークホルダーが担うこともある
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>レビューリーダー</td>
                                        <td>
                                            誰を関与させるか、いつ・どこでレビューを行うかなど、レビュー全体に対して最終的な責任を持つ
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            より詳細な役割分担は ISO/IEC 20246 でさらに細かく定義されていますが、CTFL試験で問われるのはこの6つの基本形です。
                        </p>

                        <div className="callout callout-warning">
                            <i className="ti ti-alert-triangle"></i>
                            <p>
                                <strong>実務・試験で押さえておきたいポイント</strong>：最も公式なレビュー種別である<strong>インスペクション</strong>では、客観性を担保するために<strong>作成者がレビューリーダーや書記を兼任することはできません</strong>。作成者自身が自分の成果物の評価プロセスをコントロールしてしまうことを防ぐための仕組みであり、CTFL試験でも頻出のポイントです。
                            </p>
                        </div>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>出典：ISTQB® CTFL Syllabus v4.0.1, Section 3.2.3, p.36</p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                            </div>
                        </div>

                        <h3 id="sec-324">2.4 レビュー種別</h3>
                        <p>
                            レビューには「非公式」から「非常に公式」まで、さまざまな形式が存在します。どの程度の公式さが必要かは、採用しているSDLC、開発プロセスの成熟度、対象成果物の重要度や複雑さ、法規制や監査証跡の必要性といった要因によって決まります。同じ成果物に対して、まず非公式レビューを行い、その後でより公式なレビューを実施するという段階的な運用も可能です。
                        </p>

                        <div className="flow-spectrum">
                            <span><i className="ti ti-arrow-left"></i>&nbsp;軽量・非公式</span>
                            <hr />
                            <span>厳格・公式&nbsp;<i className="ti ti-arrow-right"></i></span>
                        </div>

                        <p>
                            公式度・プロセスの厳密さが高まり、それに比例して文書化の要求レベルや必要な準備工数も増えていきます。シラバスで定義される4種別を観点ごとに比較します。
                        </p>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>非公式レビュー</th>
                                        <th>ウォークスルー</th>
                                        <th>テクニカルレビュー</th>
                                        <th>インスペクション</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>主な目的</td>
                                        <td>不正の検出</td>
                                        <td>
                                            品質評価・信頼の醸成・教育・合意形成・アイデア創出・改善動機づけなど多目的
                                        </td>
                                        <td>
                                            技術的な合意形成・意思決定、不正の検出、品質評価、信頼の醸成、改善動機づけ
                                        </td>
                                        <td>
                                            不正を最大限に検出すること。加えて品質評価・信頼の醸成・改善動機づけも目的に含まれる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>主導者</td>
                                        <td>特に定めなし</td>
                                        <td>作成者</td>
                                        <td>モデレーター</td>
                                        <td>モデレーター（作成者は主導しない）</td>
                                    </tr>
                                    <tr>
                                        <td>プロセスの定義・文書化</td>
                                        <td>定義されたプロセスはなく公式な文書化も求められない</td>
                                        <td>比較的軽量。個々のレビューは必須ではない</td>
                                        <td>ある程度形式的。個々のレビューを伴うのが一般的</td>
                                        <td>シラバスの汎用プロセス全工程に従う、最も公式な形式</td>
                                    </tr>
                                    <tr>
                                        <td>メトリクスの収集</td>
                                        <td>通常なし</td>
                                        <td>通常なし</td>
                                        <td>行われることがある</td>
                                        <td>収集したメトリクスをSDLCやインスペクション自体の改善に活用する</td>
                                    </tr>
                                    <tr>
                                        <td>典型的な利用シーン</td>
                                        <td>ペアプログラミングでの相互チェックなど</td>
                                        <td>設計内容の共有を兼ねたミーティング、デモを兼ねた説明</td>
                                        <td>アーキテクチャ選定など技術的な意思決定が必要な場面</td>
                                        <td>安全性・ミッションクリティカルな成果物に対する厳格な品質保証</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            実務での感覚としては、非公式レビューはコードレビューツール上での気軽なコメントのやり取りに近く、インスペクションは監査証跡が必要な規制産業（医療機器・航空宇宙・金融システムなど）でよく採用される、というイメージを持つと理解しやすくなります。
                        </p>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>出典：ISTQB® CTFL Syllabus v4.0.1, Section 3.2.4, p.36-37</p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                            </div>
                        </div>

                        <h3 id="sec-325">2.5 レビューの成功要因</h3>
                        <p>
                            最後に、レビューを「やって終わり」にせず、実効性のある活動にするための成功要因を整理します。シラバスでは9つの要因が挙げられています。
                        </p>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>成功要因</th>
                                        <th>補足</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>明確な目的と測定可能な終了基準を定義する</td>
                                        <td>
                                            <strong>参加者個人の評価を目的に含めてはならない</strong>。あくまで成果物の品質向上が目的であることを徹底する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>目的に合った適切なレビュー種別を選ぶ</td>
                                        <td>
                                            成果物の種類・参加者・プロジェクトのニーズやコンテキストに応じて選択する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>対象を小さな単位に分割して実施する</td>
                                        <td>
                                            1回のレビューで扱う範囲を絞り、個々のレビューやミーティングで集中力が途切れるのを防ぐ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>レビュー結果をフィードバックする</td>
                                        <td>
                                            結果をステークホルダーや作成者に返し、今後の活動そのものの改善につなげる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>参加者に十分な準備時間を与える</td>
                                        <td>事前に成果物を読み込んで個々のレビューを行える時間を確保する</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>マネジメントからの支援を得る</td>
                                        <td>レビュープロセスが組織として正式にサポートされている状態をつくる</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>レビューを組織文化の一部にする</td>
                                        <td>学習とプロセス改善を促す culture として、レビューを当たり前の習慣にしていく</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>参加者に適切なトレーニングを提供する</td>
                                        <td>全員が自分の役割を理解し、果たせるようにする</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>ミーティングを適切にファシリテーションする</td>
                                        <td>議論が脱線したり停滞したりしないよう、効果的に進行を管理する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            特に1番目の「参加者個人の評価を目的にしない」という原則は、レビュー文化を定着させるうえで最も重要なポイントです。レビューで指摘された不正の件数を人事評価に直結させてしまうと、参加者は不正を見つけても報告をためらうようになり、レビュー本来の目的である品質向上が機能しなくなります。心理的安全性が確保された環境でこそ、率率な指摘とそれに対する前向きな受け止め方が成立し、レビューが効果を発揮します。
                        </p>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>出典：ISTQB® CTFL Syllabus v4.0.1, Section 3.2.5, p.37</p>
                                <p>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="sec-tools">
                        <h2>
                            <i className="ti ti-tool"></i>&nbsp;3. シラバス補足：実務における静的解析ツールの活用
                        </h2>
                        <p>
                            ここからはシラバス本体の範囲を超えた補足情報として、2026年時点での静的解析ツールの実務動向を整理します。CTFL試験の直接の出題範囲ではありませんが、「静的解析」を実務でどう活用するかをイメージできると3.1節の理解がより立体的になります。
                        </p>

                        <h3>3.1 代表的な静的解析ツールの位置づけ</h3>
                        <p>
                            静的解析ツールは大きく「言語特化型のリンター」と「横断的な品質プラットフォーム」の2層に分かれます。リンターはエディタやコミット前のフックで即座にフィードバックを返す一方、単一ファイル単位の解析にとどまり、ファイルをまたいだ解析や品質ゲートの仕組みは持たないのが一般的です。これに対してプラットフォーム型のツールは、複数ファイル・複数言語を横断して解析し、品質の推移をダッシュボードで追跡し、しきい値を下回るコードのマージを品質ゲートでブロックする機能を備えています。
                        </p>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>分類</th>
                                        <th>代表的なツール</th>
                                        <th>主な特徴</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>言語特化型リンター</td>
                                        <td>
                                            ESLint（JavaScript / TypeScript）、Pylint・Ruff（Python）、RuboCop（Ruby）、golangci-lint（Go）
                                        </td>
                                        <td>
                                            軽量・高速で、エディタ上やコミット前フックでのリアルタイムなフィードバックに向く。基本的に単一ファイル・単一言語の解析にとどまる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>横断的な品質プラットフォーム</td>
                                        <td>SonarQube、Codacy、DeepSource</td>
                                        <td>
                                            複数言語・複数ファイルを横断して解析し、技術的負債やコード重複・セキュリティ脆弱性を可視化。CI/CDパイプラインに組み込み品質ゲートとして運用するのが一般的
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>セキュリティ特化型（SAST）</td>
                                        <td>Semgrep、Bandit（Python）</td>
                                        <td>
                                            ファイルをまたぐデータフロー解析により、インジェクション系の脆弱性などを検出する
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            実務でよく採用される組み合わせとしては、「開発中はエディタ上のリンターで即時フィードバックを得て、CI/CDパイプライン上ではプラットフォーム型ツールで品質ゲートを通す」という二段構えの運用が紹介されています。エディタでの即時フィードバックとパイプライン上の包括的な解析を組み合わせることで、開発の初期段階での問題検出とリリース前の品質保証の両方を実現する考え方であり、3.1.2節で説明した「シフトレフト」の実践そのものと言えます。
                        </p>

                        <h4>CI/CDパイプラインへの組み込み例</h4>
                        <p>
                            静的解析をシフトレフトの一環としてCIに組み込む典型的な構成を、GitHub Actionsのワークフロー例で示します。
                        </p>
                        <div className="code-block">
                            <div className="code-line"><span className="token attr-name">name</span>: <span className="token string">static-analysis</span></div>
                            <div className="code-line"><span className="token attr-name">on</span>: [<span className="token string">pull_request</span>]</div>
                            <div className="code-line"><span className="token attr-name">jobs</span>:</div>
                            <div className="code-line">  <span className="token attr-name">lint-and-scan</span>:</div>
                            <div className="code-line">    <span className="token attr-name">runs-on</span>: <span className="token string">ubuntu-latest</span></div>
                            <div className="code-line">    <span className="token attr-name">steps</span>:</div>
                            <div className="code-line">      - <span className="token attr-name">uses</span>: <span className="token string">actions/checkout@v4</span></div>
                            <div className="code-line">      - <span className="token attr-name">name</span>: <span className="token string">Run ESLint</span></div>
                            <div className="code-line">        <span className="token attr-name">run</span>: <span className="token string">npx eslint . --max-warnings=0</span></div>
                            <div className="code-line">      - <span className="token attr-name">name</span>: <span className="token string">Run SonarQube quality gate</span></div>
                            <div className="code-line">        <span className="token attr-name">uses</span>: <span className="token string">SonarSource/sonarqube-scan-action@v3</span></div>
                            <div className="code-line">        <span className="token attr-name">env</span>:</div>
                            <div className="code-line">          <span className="token attr-name">SONAR_TOKEN</span>: <span className="token string">{"${{ secrets.SONAR_TOKEN }}"}</span></div>
                        </div>
                        <p>
                            プルリクエストが作成されるたびに静的解析が自動実行され、品質ゲートを満たさないコードはマージ前に検知されます。これは3.2.2節で扱ったレビュープロセスの「個々のレビュー」を、機械的に検出可能な範囲について自動化したものと捉えることができます。
                        </p>

                        <div className="callout callout-source">
                            <i className="ti ti-external-link"></i>
                            <div>
                                <p>
                                    出典：SonarQube vs ESLint: Code Quality Platform vs JavaScript Linter（2026）
                                </p>
                                <p>
                                    <a
                                        href="https://dev.to/rahulxsingh/sonarqube-vs-eslint-code-quality-platform-vs-javascript-linter-2026-i55"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://dev.to/rahulxsingh/sonarqube-vs-eslint-code-quality-platform-vs-javascript-linter-2026-i55
                                    </a>
                                </p>
                                <p>12 Best Code Quality Tools in 2026</p>
                                <p>
                                    <a
                                        href="https://dev.to/rahulxsingh/12-best-code-quality-tools-in-2026-platforms-linters-and-metrics-a12"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://dev.to/rahulxsingh/12-best-code-quality-tools-in-2026-platforms-linters-and-metrics-a12
                                    </a>
                                </p>
                            </div>
                        </div>

                        <h3>3.2 静的解析はレビューの代替にはならない</h3>
                        <p>
                            ここで強調しておきたいのは、静的解析はあくまで「機械的に検出できる種類の欠陥」を効率よく洗い出すための手段であり、3.1.2節で説明した「人手によるレビュー」を置き換えるものではないという点です。静的解析ツールは構文上の問題やパターン化された欠陥（未使用変数、コーディング規約違反、既知の脆弱性パターンなど）の検出には強い一方、「この設計はビジネス要件を正しく満たしているか」「このユーザーストーリーの受け入れ基準は本当に妥当か」といった文脈理解を要する判断は、依然として人手によるレビューでなければ評価できません。CTFL試験的な整理をするなら、静的解析は3.1節（静的テストの基本）の話であり、レビュープロセス（3.2節）はあくまで人を中心とした活動である、という区別を意識しておくとよいでしょう。
                        </p>
                    </section>

                    <section id="sec-pitfalls">
                        <h2>
                            <i className="ti ti-alert-triangle"></i>&nbsp;4. よくある誤解・試験で問われやすいポイント
                        </h2>
                        <p>
                            CTFL試験の出題傾向や受験者の体験談を踏まえ、特に誤解されやすいポイントを整理しておきます。
                        </p>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>誤解されがちな点</th>
                                        <th>正しい理解</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>「静的テスト＝コードレビューのこと」</td>
                                        <td>
                                            静的テストはコードに限らず、要件・設計・テストケース・契約書など、人が読んで理解できるあらゆる作業成果物が対象になる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>「静的解析にはテストケースが必要」</td>
                                        <td>
                                            静的解析はテストケースを必要とせず、ツールによって自動的に実行できる点が静的テストの効率の良さの理由の一つ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>「静的テストは欠陥を見つけるだけ」</td>
                                        <td>
                                            検証だけでなく妥当性確認にも使え、品質特性（可読性・保守性など）の評価や、ステークホルダー間の共通理解の醸成にも貢献する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>「インスペクションが常に最善のレビュー種別」</td>
                                        <td>
                                            公式度が高いほど準備・実施のコストも増える。プロジェクトのリスクや成果物の重要度に見合った種別を選ぶことが重要で、常にインスペクションが正解とは限らない
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>「レビューでの指摘＝確定した欠陥」</td>
                                        <td>
                                            個々のレビューで見つかったものはまず「不正（anomaly）」であり、コミュニケーションと分析の活動を経て初めて欠陥かどうかが判断される
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>「レビューの成果を担当者の評価に使ってよい」</td>
                                        <td>
                                            シラバスは明確に「参加者の評価をレビューの目的にしてはならない」としている。これを破ると心理的安全性が損なわれ、レビューが形骸化する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>「インスペクションでは作成者がリーダーを兼任できる」</td>
                                        <td>
                                            インスペクションでは客観性確保のため、作成者はレビューリーダーにも書記にもなれない
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="sec-summary">
                        <h2>
                            <i className="ti ti-checkbox"></i>&nbsp;5. まとめ
                        </h2>
                        <p>第3章「静的テスト」の要点を、もう一度俯瞰しておきます。</p>
                        <ul className="summary-list">
                            <li>
                                <i className="ti ti-circle-check"></i>
                                <span>
                                    <strong>
                                        静的テストはソフトウェアを実行せずに行うテストであり、レビュー（人手）と静的解析（ツール）の2本柱から成る。
                                    </strong>
                                </span>
                            </li>
                            <li>
                                <i className="ti ti-circle-check"></i>
                                <span>
                                    <strong>
                                        静的テストの最大の価値は「最も早い段階で、かつ動的テストでは見つけにくい種類の欠陥を検出できる」ことにある。
                                    </strong>
                                    早期テストの原則・シフトレフトと直結する。
                                </span>
                            </li>
                            <li>
                                <i className="ti ti-circle-check"></i>
                                <span>
                                    <strong>
                                        静的テストと動的テストは対立関係ではなく補完関係にあり、両方を組み合わせて初めて効果的な品質保証が成立する。
                                    </strong>
                                </span>
                            </li>
                            <li>
                                <i className="ti ti-circle-check"></i>
                                <span>
                                    <strong>
                                        レビュープロセスは「計画→開始→個々のレビュー→コミュニケーションと分析→修正と報告」の5活動で構成され、ISO/IEC 20246がその汎用フレームワークを提供している。
                                    </strong>
                                </span>
                            </li>
                            <li>
                                <i className="ti ti-circle-check"></i>
                                <span>
                                    <strong>
                                        レビューには6つの主要な役割があり、特にインスペクションでは作成者がリーダーや書記を兼任できない。
                                    </strong>
                                </span>
                            </li>
                            <li>
                                <i className="ti ti-circle-check"></i>
                                <span>
                                    <strong>
                                        レビュー種別は非公式レビュー・ウォークスルー・テクニカルレビュー・インスペクションの順に公式度が高まり、目的や成果物の重要度に応じて選択する。
                                    </strong>
                                </span>
                            </li>
                            <li>
                                <i className="ti ti-circle-check"></i>
                                <span>
                                    <strong>
                                        レビューを成功させる鍵は多岐にわたるが、「参加者を評価しない」という原則が土台になる。
                                    </strong>
                                </span>
                            </li>
                        </ul>
                        <p>
                            静的テストは、動的テストに比べて地味に見えるかもしれませんが、コストパフォーマンスの高い品質向上手段として、現場での実践価値は非常に高い領域です。次章（第4章：テスト分析と設計）では動的テストにおけるテストケースの導出技法を扱いますが、本章で学んだ「早期にレビューで欠陥を取り除く」という発想は、第4章以降のテスト設計の土台としても活きてきます。
                        </p>
                    </section>

                    <section id="sec-refs">
                        <h2>
                            <i className="ti ti-link"></i>&nbsp;6. 参考文献・出典一覧
                        </h2>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>資料名</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            ISTQB® Certified Tester Foundation Level Syllabus v4.0.1（英語版、2024-09-15）
                                        </td>
                                        <td>
                                            <a
                                                href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                istqb.org（PDF）
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>ISTQB® CTFL v4.0 認定情報ページ</td>
                                        <td>
                                            <a
                                                href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                istqb.org
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            JSTQB テスト技術者資格制度 Foundation Level シラバス Version 2023V4.0.J02（日本語版）
                                        </td>
                                        <td>
                                            <a
                                                href="https://jstqb.jp/dl/JSTQB-SyllabusFoundation_VersionV40.J02.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                jstqb.jp（PDF）
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            ISO/IEC 20246:2017 Software and systems engineering — Work product reviews
                                        </td>
                                        <td>
                                            <a
                                                href="https://www.iso.org/standard/67407.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                iso.org
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ISO/IEC 20246 関連解説（Stuart Reid, 2018）</td>
                                        <td>
                                            <a
                                                href="https://www.stureid.info/wp-content/uploads/2018/01/Software-Reviews.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                stureid.info（PDF）
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>SonarQube vs ESLint: Code Quality Platform vs JavaScript Linter（2026）</td>
                                        <td>
                                            <a
                                                href="https://dev.to/rahulxsingh/sonarqube-vs-eslint-code-quality-platform-vs-javascript-linter-2026-i55"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                dev.to
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>12 Best Code Quality Tools in 2026</td>
                                        <td>
                                            <a
                                                href="https://dev.to/rahulxsingh/12-best-code-quality-tools-in-2026-platforms-linters-and-metrics-a12"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                dev.to
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>SonarQube 公式製品ページ（SonarSource）</td>
                                        <td>
                                            <a
                                                href="https://www.sonarsource.com/products/sonarqube/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                sonarsource.com
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <footer>
                            本資料はISTQB®／JSTQB®の公式シラバスの内容を独自に要約・解説したものであり、公式シラバス本文の逐語的な転載ではありません。試験対策としては必ず公式シラバス原文（上記出典1・3）を一次情報として参照してください。
                        </footer>
                    </section>
                </main>
            </div>
        </div>
    );
}
