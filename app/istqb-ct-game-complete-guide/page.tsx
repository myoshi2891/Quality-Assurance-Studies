
import NavBar from './NavBar';
import './istqb-ct-game-complete-guide.css';
import Mermaid from '../../components/Mermaid';

export default function IstqbCtGameCompleteGuide() {
    return (
        <div className="istqb-ct-game-page">
            <NavBar />
        <section className="hero">
            <div className="container">
                <div className="hero-glow"></div>
                <div className="hero-badge">ISTQB&#174; Specialist Stream</div>
                <h1 className="hero-title">&#127918; ゲームテスト<br />完全学習ガイド 2025</h1>
                <p className="hero-subtitle">
                    ISTQB&#174; CT-GaMe v1.0.1 準拠 &#xFF5C; 初学者から実践者まで
                    ステップバイステップ解説
                </p>
                <div className="hero-meta">
                    <span className="meta-chip green">40問 / 60分</span>
                    <span className="meta-chip cyan">合格点 26/40（65%）</span>
                    <span className="meta-chip amber">前提: CTFL必須</span>
                    <span className="meta-chip purple">学習時間: 15h25m</span>
                </div>
            </div>
        </section>

        <section className="section" id="overview">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">OVERVIEW</span>
                    <h2 style={{marginBottom: "0"}}>CT-GaMe 概要&#xFF06;試験スペック</h2>
                </div>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value">40</div>
                        <div className="metric-label">出題数</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">26</div>
                        <div className="metric-label">合格点（40点満点）</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">60</div>
                        <div className="metric-label">試験時間（分）</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value">55</div>
                        <div className="metric-label">学習目標数（LO）</div>
                    </div>
                </div>
                <h3>資格ロードマップ</h3>
                <div className="mermaid-wrap">
                    <Mermaid chart={`
                        flowchart LR CTFL["&#127891; CTFL v4.0 Foundation Level&#40;前提必須&#41;"]
                        GaMe["&#127918; CT-GaMe v1.0.1 Certified Tester - Game Testing"]
                        Other["Other Core / Agile / Specialist Certifications"] CTFL --> GaMe -->
                        Other style CTFL fill:#0a1020,stroke:#00d4ff,color:#00d4ff style GaMe
                        fill:#0a1020,stroke:#00ff88,color:#00ff88 style Other
                        fill:#0a1020,stroke:#ffaa00,color:#ffaa00
                    `} />
                </div>
                <h3>6つのビジネスアウトカム</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <div className="arch-accent green"></div>
                        <div className="arch-content">
                            <div className="arch-title">BO1&#12288;基本概念の説明</div>
                            <div className="arch-desc">
                                ビデオゲームとゲームソフトウェアテストの基本概念を説明できる
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent cyan"></div>
                        <div className="arch-content">
                            <div className="arch-title">BO2&#12288;リスク・目標・要件の特定</div>
                            <div className="arch-desc">
                                ステークホルダーのニーズに基づいてリスク・目標・ゲームソフトウェア要件を特定できる
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent amber"></div>
                        <div className="arch-content">
                            <div className="arch-title">BO3&#12288;テストの設計・実装・実行</div>
                            <div className="arch-desc">
                                ゲームソフトウェアテストを概念的に設計・実装・実行できる
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent red"></div>
                        <div className="arch-content">
                            <div className="arch-title">BO4&#12288;テストアプローチの把握</div>
                            <div className="arch-desc">
                                ゲームソフトウェアテストのアプローチとその目的を把握できる
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent purple"></div>
                        <div className="arch-content">
                            <div className="arch-title">BO5&#12288;ツールの認識</div>
                            <div className="arch-desc">
                                テストへのAI活用など、ゲームテストを支援するツールを認識できる
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent pink"></div>
                        <div className="arch-content">
                            <div className="arch-title">BO6&#12288;SDLCとの整合</div>
                            <div className="arch-desc">
                                テスト活動がSDLCとどのように整合し、開発・パブリッシングコストを削減するかを特定できる
                            </div>
                        </div>
                    </div>
                </div>
                <h3>章別学習時間配分</h3>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="progress-name">Ch.4 サウンドのテスト（最大章）</span
                        ><span className="progress-val">190分 (20.5%)</span>
                    </div>
                    <div className="progress-bar-track">
                        <div
                            className="progress-bar-fill cyan"
                            style={{ "--target-width": "100%", width: "100%"} as React.CSSProperties}
                        ></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="progress-name">Ch.2 ゲームメカニクスのテスト</span
                        ><span className="progress-val">180分 (19.5%)</span>
                    </div>
                    <div className="progress-bar-track">
                        <div
                            className="progress-bar-fill green"
                            style={{ "--target-width": "95%", width: "95%"} as React.CSSProperties}
                        ></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="progress-name">Ch.3 グラフィックスのテスト</span
                        ><span className="progress-val">160分 (17.3%)</span>
                    </div>
                    <div className="progress-bar-track">
                        <div
                            className="progress-bar-fill amber"
                            style={{ "--target-width": "85%", width: "85%"} as React.CSSProperties}
                        ></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="progress-name">Ch.7 ローカリゼーションテスト</span
                        ><span className="progress-val">155分 (16.8%)</span>
                    </div>
                    <div className="progress-bar-track">
                        <div
                            className="progress-bar-fill purple"
                            style={{ "--target-width": "82%", width: "82%"} as React.CSSProperties}
                        ></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="progress-name">Ch.5 コントローラーのテスト</span
                        ><span className="progress-val">95分 (10.3%)</span>
                    </div>
                    <div className="progress-bar-track">
                        <div
                            className="progress-bar-fill pink"
                            style={{ "--target-width": "50%", width: "50%"} as React.CSSProperties}
                        ></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="progress-name">Ch.1 ゲームテストの特殊性</span
                        ><span className="progress-val">75分 (8.1%)</span>
                    </div>
                    <div className="progress-bar-track">
                        <div
                            className="progress-bar-fill red"
                            style={{ "--target-width": "40%", width: "40%"} as React.CSSProperties}
                        ></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span className="progress-name">Ch.6 ゲームレベルのテスト</span
                        ><span className="progress-val">55分 (5.9%)</span>
                    </div>
                    <div className="progress-bar-track">
                        <div
                            className="progress-bar-fill green"
                            style={{ "--target-width": "29%", width: "29%"} as React.CSSProperties}
                        ></div>
                    </div>
                </div>
                <h3 style={{marginTop: "2rem"}}>目次</h3>
                <div className="toc-grid">
                    <a className="toc-card" href="#ch1"
                        ><div className="toc-card-num">Chapter 1 | K1-K2</div>
                        <div className="toc-card-title">ゲームテストの特殊性</div>
                        <div className="toc-card-sub">75分 | 配点 ~8%</div></a
                    >
                    <a className="toc-card" href="#ch2"
                        ><div className="toc-card-num">Chapter 2 | K1-K3 &#11088;</div>
                        <div className="toc-card-title">ゲームメカニクスのテスト</div>
                        <div className="toc-card-sub">180分 | 配点 ~20%</div></a
                    >
                    <a className="toc-card" href="#ch3"
                        ><div className="toc-card-num">Chapter 3 | K1-K3</div>
                        <div className="toc-card-title">グラフィックスのテスト</div>
                        <div className="toc-card-sub">160分 | 配点 ~17%</div></a
                    >
                    <a className="toc-card" href="#ch4"
                        ><div className="toc-card-num">Chapter 4 | K1-K3 &#11088;</div>
                        <div className="toc-card-title">サウンドのテスト</div>
                        <div className="toc-card-sub">190分 | 配点 ~20%（最大章）</div></a
                    >
                    <a className="toc-card" href="#ch5"
                        ><div className="toc-card-num">Chapter 5 | K1-K2</div>
                        <div className="toc-card-title">コントローラーのテスト</div>
                        <div className="toc-card-sub">95分 | 配点 ~10%</div></a
                    >
                    <a className="toc-card" href="#ch6"
                        ><div className="toc-card-num">Chapter 6 | K1-K2</div>
                        <div className="toc-card-title">ゲームレベルのテスト</div>
                        <div className="toc-card-sub">55分 | 配点 ~6%</div></a
                    >
                    <a className="toc-card" href="#ch7"
                        ><div className="toc-card-num">Chapter 7 | K1-K3 &#11088;</div>
                        <div className="toc-card-title">ローカリゼーションテスト</div>
                        <div className="toc-card-sub">155分 | 配点 ~17%</div></a
                    >
                </div>
            </div>
        </section>

        <section className="section" id="ch1">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">Chapter 1</span>
                    <span className="klevel-badge">K1&#12288;K2</span>
                    <h2 style={{marginBottom: "0"}}>ゲームテストの特殊性</h2>
                </div>
                <h3>1.1 定義&#xFF1A;テスト vs プレイ — 最大の誤解（K2）</h3>
                <p>
                    「ゲームテスターは仕事でゲームを楽しむだけ」という誤解が広く存在しますが、これは正反対の認識です。ゲームテストは<strong>体系的・計画的な品質保証活動</strong>であり、娯楽目的のプレイとは根本的に異なります。
                </p>
                <div className="compare">
                    <div className="compare-box bad">
                        <div className="compare-head">&#10060; ゲームをプレイする</div>
                        <ul>
                            <li>目的: 楽しむ・クリアする</li>
                            <li>行動: 自然・直感的な動線のみ</li>
                            <li>境界値・異常系を意図的に試さない</li>
                            <li>バグに気づかないことが多い</li>
                            <li>主観的な体験が中心</li>
                        </ul>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-head">&#9989; ゲームをテストする</div>
                        <ul>
                            <li>目的: 欠陥を発見・品質を担保する</li>
                            <li>行動: 体系的・計画的・文書化</li>
                            <li>意図的に境界値・エッジケースを試す</li>
                            <li>客観的に欠陥を記録・報告する</li>
                            <li>「普通しない操作」を意図的に実行</li>
                        </ul>
                    </div>
                </div>
                <h3>1.2 ゲームテスト固有の難しさ（K2）</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <div className="arch-accent red"></div>
                        <div className="arch-content">
                            <div className="arch-title">① リアルタイム応答性の要求</div>
                            <div className="arch-desc">
                                60fps維持・入力ラグ検証など、通常アプリにはない時間的制約がある。VRでは20ms以下の遅延が必須で、これを超えるとVR酔いの原因になる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent amber"></div>
                        <div className="arch-content">
                            <div className="arch-title">② 非決定論的動作</div>
                            <div className="arch-desc">
                                ランダム要素・AI行動・物理シミュレーションは毎回異なる結果を返す。再現性のあるバグ報告と、同じバグを再発させることが困難。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent cyan"></div>
                        <div className="arch-content">
                            <div className="arch-title">③ 感情的・美的品質の評価</div>
                            <div className="arch-desc">
                                「楽しい」「快適」「没入感がある」は数値化しにくく、定性的な評価が必要。プレイテストとの組み合わせが重要。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent purple"></div>
                        <div className="arch-content">
                            <div className="arch-title">④ マルチプラットフォーム複雑性</div>
                            <div className="arch-desc">
                                PC・コンソール・モバイルで動作が異なる。Sony・Microsoft・Nintendoの各プラットフォームに固有の認証要件が存在する。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent green"></div>
                        <div className="arch-content">
                            <div className="arch-title">⑤ オンライン・マルチプレイヤー</div>
                            <div className="arch-desc">
                                同時接続・ネットワーク遅延・チート行為への対応は単体テストでは確認できない。実際のサーバー環境でのテストが必須。
                            </div>
                        </div>
                    </div>
                </div>
                <h3>1.3 ゲーム製品リスク（K2）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>リスクカテゴリ</th>
                                <th>内容</th>
                                <th>影響</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag red">Critical</span>ゲームバランスの不均衡</td>
                                <td>特定武器・キャラクターが圧倒的に強すぎる</td>
                                <td>ユーザー離脱・レビュー低評価</td>
                            </tr>
                            <tr>
                                <td><span className="tag red">Critical</span>不正行為への脆弱性</td>
                                <td>チートツール・ハックによるアンフェアなゲームプレイ</td>
                                <td>オンラインゲームの致命的問題</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">High</span>市場成功の主観依存</td>
                                <td>「面白さ」は客観的に測定しにくい</td>
                                <td>商業的失敗のリスク</td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="tag amber">High</span>マルチプラットフォーム問題
                                </td>
                                <td>特定プラットフォームのみで発生するバグ</td>
                                <td>コンソール認証失敗リスク</td>
                            </tr>
                            <tr>
                                <td><span className="tag cyan">Medium</span>パフォーマンス問題</td>
                                <td>
                                    特定シーンでのフレームドロップ・長時間プレイでのメモリリーク
                                </td>
                                <td>体験品質の大幅低下</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>1.4 ゲーム開発ライフサイクルとテスト（K2）</h3>
                <div className="mermaid-wrap">
                    <Mermaid chart={`
                        flowchart LR A["&#128161; コンセプト プリプロダクション"] B["&#128296;
                        プロダクション"] C["&#128300; アルファ&#183;ベータ"] D["&#127942;
                        ゴールドマスター リリース"] E["&#128225; ポストリリース ライブ運営"] A
                        -->|"プロトタイプUX リスク評価"| B B -->|"スプリント毎テスト アルファ回帰"|
                        C C -->|"認証テスト準備 ローカライゼーション"| D D -->|"パッチ&#183;DLC
                        継続監視"| E style A fill:#0a1020,stroke:#cc55ff,color:#cc55ff style B
                        fill:#0a1020,stroke:#00d4ff,color:#00d4ff style C
                        fill:#0a1020,stroke:#ffaa00,color:#ffaa00 style D
                        fill:#0a1020,stroke:#00ff88,color:#00ff88 style E
                        fill:#0a1020,stroke:#ff66cc,color:#ff66cc
                    `} />
                </div>
                <div className="callout info">
                    <div className="callout-title">&#128204; 試験ポイント K2</div>
                    <p>
                        ゲームテストと通常ソフトウェアテストの最大の違いは、<strong>「楽しさ・バランス・没入感」という非機能品質の評価</strong>が必要である点です。試験では「テスト
                        vs プレイ」の概念が頻出します。
                    </p>
                </div>
            </div>
        </section>

        <section className="section" id="ch2">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">Chapter 2</span>
                    <span className="klevel-badge">K1&#12288;K2&#12288;K3</span>
                    <h2 style={{marginBottom: "0"}}>
                        ゲームメカニクスのテスト &#11088;最重要章（~20%）
                    </h2>
                </div>
                <h3>2.1 ゲームメカニクスとは？（K1）</h3>
                <div className="callout info">
                    <div className="callout-title">定義</div>
                    <p>
                        <strong>ゲームメカニクス</strong> =
                        ゲーム内でプレイヤーと相互作用するルール・システム・仕組みの総体。「何ができるか」「何が起きるか」「どう反応するか」を決めるもの。
                    </p>
                </div>
                <div className="code-block" data-lang="具体例：RPG">
                    <code
                        ><span className="code-green">&#9654; コアメカニクス（Core Mechanics）:</span>
                        ターン制バトル・移動・攻撃・スキル使用 &#10140; 毎プレイで繰り返す基本操作

                        <span className="code-amber">&#9654; メタメカニクス（Meta Mechanics）:</span>
                        経験値・レベルアップ・装備・ストーリー進行 &#10140;
                        コアメカニクスを包む長期的な進行システム

                        <span className="code-cyan">&#9654; 非ゲームプレイメカニクス:</span>
                        セーブ/ロード・設定変更・マッチング・課金処理 &#10140;
                        ゲームを「管理する」ための仕組み</code
                    >
                </div>
                <h3>2.2 ゲームメカニクスの3分類（K2）&#8212;試験最頻出！</h3>
                <h4>分類1：ゲームプレイ vs 非ゲームプレイメカニクス</h4>
                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-head">&#9989; ゲームプレイメカニクス</div>
                        <ul>
                            <li>直接ゲーム体験に影響する仕組み</li>
                            <li>移動・攻撃・防御・スキル使用</li>
                            <li>アイテム取得・スコア計算・ダメージ計算</li>
                            <li>プレイヤーが「ゲームをする」要素</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-head">&#9881;&#65039; 非ゲームプレイメカニクス</div>
                        <ul>
                            <li>ゲームを「管理する」ための仕組み</li>
                            <li>セーブ / ロード機能</li>
                            <li>設定変更・マッチング・UI操作</li>
                            <li>課金処理・実績・トロフィー管理</li>
                        </ul>
                    </div>
                </div>
                <h4>分類2：コアループ vs メタループ（K2）</h4>
                <div className="mermaid-wrap">
                    <Mermaid chart={`
                        flowchart LR subgraph Core["&#128260; コアループ（数分単位の繰り返し）"]
                        C1["&#9876;&#65039; バトル"] --> C2["&#10024; 経験値獲得"] --> C3["&#128200;
                        レベルアップ"] --> C1 end subgraph Meta["&#127758;
                        メタループ（数時間&#183;数日単位）"] M1["&#9876;&#65039; 強力な装備収集"]
                        --> M2["&#127758; 新エリア解放"] --> M3["&#128214; ストーリー進行"] --> M1
                        end Core -->|"積み重なる"| Meta style Core fill:#0a1020,stroke:#00ff88 style
                        Meta fill:#0a1020,stroke:#ffaa00
                    `} />
                </div>
                <h4>分類3：クライアント / サーバー / クライアント-サーバーメカニクス（K2）</h4>
                <div className="arch-layers">
                    <div className="arch-row">
                        <div className="arch-accent green"></div>
                        <div className="arch-content">
                            <div className="arch-title">クライアントメカニクス</div>
                            <div className="arch-desc">
                                ローカルデバイスのみで処理。オフラインゲーム向け。<br />例:
                                ローカルセーブ・入力処理・ローカルAI判定
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent amber"></div>
                        <div className="arch-content">
                            <div className="arch-title">
                                サーバーメカニクス（サーバー権威型）&#10024;
                            </div>
                            <div className="arch-desc">
                                サーバー側が正しい状態を決定。チート対策として重要。<br />例:
                                ゲームの勝敗判定・ランキング・課金処理・HP管理
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent cyan"></div>
                        <div className="arch-content">
                            <div className="arch-title">クライアント-サーバーメカニクス</div>
                            <div className="arch-desc">
                                双方が連携して処理。マルチプレイヤーゲームに使用。<br />例:
                                プレイヤー位置の同期・リアルタイムバトル判定
                            </div>
                        </div>
                    </div>
                </div>
                <h3>2.3 サーバー権威型（Server Authoritative）モデルのテスト（K3）</h3>
                <div className="callout warning">
                    <div className="callout-title">&#9888;&#65039; なぜサーバー権威型が重要か</div>
                    <p>
                        悪意あるプレイヤーがローカルデータを改ざんしても、<strong>サーバーが「正しい状態」を管理している</strong>ため改ざんは無効化されます。これがオンラインゲームの公平性を守る根幹です。
                    </p>
                </div>
                <div className="mermaid-wrap">
                    <Mermaid chart={`
                        flowchart TB Player["&#127918; プレイヤー（クライアント）"] Cheat["&#128296;
                        チート試行: HP=9999に改ざん"] Server["&#128421;&#65039; サーバー（権威型）
                        HP=100を管理"] Result["&#10060; 改ざん無効 サーバー値が優先される"] Player
                        -->|"ローカル改ざん"| Cheat Cheat -->|"リクエスト送信"| Server Server -->
                        Result style Server fill:#0a1020,stroke:#00ff88,color:#00ff88 style Result
                        fill:#0a1020,stroke:#ff4466,color:#ff4466 style Cheat
                        fill:#0a1020,stroke:#ffaa00,color:#ffaa00
                    `} />
                </div>
                <div className="code-block" data-lang="テストチェックリスト">
                    <code
                        ><span className="code-green">&#9745; サーバー権威型テストの主要観点:</span>

                        <span className="code-cyan">&#9744; クライアントデータ改ざん耐性</span>
                        &#10140; メモリエディタでHPを書き換えてもサーバー値が維持されるか

                        <span className="code-cyan">&#9744; ネットワーク遅延（ラグ）時の状態同期</span>
                        &#10140; 300ms の遅延でも正しい判定結果が返されるか

                        <span className="code-cyan">&#9744; パケットロス時のゲーム安定性</span>
                        &#10140; 20% パケットロスでクラッシュしないか

                        <span className="code-cyan"
                            >&#9744; クライアント予測とサーバー修正の整合性</span
                        >
                        &#10140; Lag Compensation が正しく機能するか

                        <span className="code-red">&#10007; 発見すべきチート脆弱性の例:</span>
                        &#10140; スピードハックがアンチチートに検出されない &#10140;
                        開発者専用デバッグモードが本番ビルドに残存 &#10140;
                        オフライン時でも課金アイテムが使用できる</code
                    >
                </div>
                <h3>2.4 ゲームバランスのテスト（K3）</h3>
                <div className="grid-2">
                    <div>
                        <h4>バランステストの主要観点</h4>
                        <ul className="step-list">
                            <li className="step-item">
                                <div className="step-num">1</div>
                                <div className="step-content">
                                    <div className="step-title">難易度バランス</div>
                                    <div className="step-desc">
                                        簡単すぎる・難しすぎる → プレイヤーが飽きる or 諦める
                                    </div>
                                </div>
                            </li>
                            <li className="step-item">
                                <div className="step-num">2</div>
                                <div className="step-content">
                                    <div className="step-title">武器・能力バランス</div>
                                    <div className="step-desc">
                                        特定アイテムが「壊れ性能」になっていないか（支配的すぎないか）
                                    </div>
                                </div>
                            </li>
                            <li className="step-item">
                                <div className="step-num">3</div>
                                <div className="step-content">
                                    <div className="step-title">マップの公平性</div>
                                    <div className="step-desc">
                                        マルチプレイヤーマップの有利・不利ポイントが偏っていないか
                                    </div>
                                </div>
                            </li>
                            <li className="step-item">
                                <div className="step-num">4</div>
                                <div className="step-content">
                                    <div className="step-title">経済システム</div>
                                    <div className="step-desc">
                                        ゲーム内通貨のインフレ・デフレ問題、課金要素との整合性
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>バランステストの手法</h4>
                        <div className="arch-layers">
                            <div className="arch-row">
                                <div className="arch-accent green"></div>
                                <div className="arch-content">
                                    <div className="arch-title">データ解析</div>
                                    <div className="arch-desc">
                                        勝率・使用率・選択率データを収集して統計分析
                                    </div>
                                </div>
                            </div>
                            <div className="arch-row">
                                <div className="arch-accent cyan"></div>
                                <div className="arch-content">
                                    <div className="arch-title">AIシミュレーション</div>
                                    <div className="arch-desc">
                                        AIを使った大量のゲーム実行で傾向を統計化
                                    </div>
                                </div>
                            </div>
                            <div className="arch-row">
                                <div className="arch-accent amber"></div>
                                <div className="arch-content">
                                    <div className="arch-title">プレイテスト</div>
                                    <div className="arch-desc">
                                        実際のプレイヤーによる主観的な体験評価
                                    </div>
                                </div>
                            </div>
                            <div className="arch-row">
                                <div className="arch-accent purple"></div>
                                <div className="arch-content">
                                    <div className="arch-title">数値モデリング</div>
                                    <div className="arch-desc">
                                        パラメータを数式でモデル化して理論的に検証
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>2.5 ゲームメカニクス欠陥カタログ（K2）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>種別</th>
                                <th>具体的な欠陥例</th>
                                <th>重大度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>コアループ</td>
                                <td>特定地点でジャンプすると境界外に出られる（Out of Bounds）</td>
                                <td><span className="tag red">Critical</span></td>
                            </tr>
                            <tr>
                                <td>コアループ</td>
                                <td>ダメージ計算式にバグがあり弱い武器の方が強い</td>
                                <td><span className="tag red">Critical</span></td>
                            </tr>
                            <tr>
                                <td>コアループ</td>
                                <td>AI敵が特定地形でスタックして動かなくなる</td>
                                <td><span className="tag amber">High</span></td>
                            </tr>
                            <tr>
                                <td>メタループ</td>
                                <td>レベルアップしても能力値が増加しない</td>
                                <td><span className="tag red">Critical</span></td>
                            </tr>
                            <tr>
                                <td>メタループ</td>
                                <td>クリア済みクエストが未完了として表示される</td>
                                <td><span className="tag amber">High</span></td>
                            </tr>
                            <tr>
                                <td>クライアント-サーバー</td>
                                <td>ラグ時に弾が当たっていないのにダメージ判定される</td>
                                <td><span className="tag amber">High</span></td>
                            </tr>
                            <tr>
                                <td>セキュリティ</td>
                                <td>メモリエディタで所持金を書き換えられる</td>
                                <td><span className="tag red">Critical</span></td>
                            </tr>
                            <tr>
                                <td>セキュリティ</td>
                                <td>開発者専用のデバッグモードが本番ビルドに残存</td>
                                <td><span className="tag red">Critical</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout info">
                    <div className="callout-title">&#128204; 試験ポイント</div>
                    <p>
                        試験では「コアループ vs メタループ」「クライアント vs
                        サーバーメカニクス」「サーバー権威型とチート対策の関係」が頻出です。各概念を具体例とセットで覚えましょう。
                    </p>
                </div>
            </div>
        </section>

        <section className="section" id="ch3">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">Chapter 3</span
                    ><span className="klevel-badge">K1&#12288;K2&#12288;K3</span>
                    <h2 style={{marginBottom: "0"}}>グラフィックスのテスト（160分・17%）</h2>
                </div>
                <h3>3.1 ゲームグラフィックスの主要構成要素（K1）</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <div className="arch-accent cyan"></div>
                        <div className="arch-content">
                            <div className="arch-title">3Dモデル（3D Models）</div>
                            <div className="arch-desc">
                                キャラクター・建物・小道具の3D形状データ。テスト観点:
                                変形・歪み・頂点の欠落・LOD切り替えの自然さ
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent green"></div>
                        <div className="arch-content">
                            <div className="arch-title">テクスチャ（Textures）</div>
                            <div className="arch-desc">
                                3Dモデルの表面に貼り付ける2D画像。テスト観点:
                                引き伸ばし・ズレ・低解像度・欠落・Z-ファイティング
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent amber"></div>
                        <div className="arch-content">
                            <div className="arch-title">ライティング（Lighting）</div>
                            <div className="arch-desc">
                                ポイント・ディレクショナル・スポット・アンビエント光源。テスト観点:
                                不自然な影・光の貫通・オーバーブライト
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent purple"></div>
                        <div className="arch-content">
                            <div className="arch-title">アニメーション（Animations）</div>
                            <div className="arch-desc">
                                スケルタルアニメーション（キャラクターの動き）。テスト観点:
                                関節の歪み・クリッピング・遷移のズレ・T字ポーズ
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent red"></div>
                        <div className="arch-content">
                            <div className="arch-title">ビジュアルエフェクト（VFX）</div>
                            <div className="arch-desc">
                                パーティクル・炎・煙・爆発の特殊効果。テスト観点:
                                タイミングのズレ・表示されない・消えずに残存
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent pink"></div>
                        <div className="arch-content">
                            <div className="arch-title">コリジョン（Collision）</div>
                            <div className="arch-desc">
                                物理的な接触判定。テスト観点:
                                見た目と判定のズレ・すり抜け・段差での引っかかり
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent cyan"></div>
                        <div className="arch-content">
                            <div className="arch-title">LOD（Level of Detail）</div>
                            <div className="arch-desc">
                                距離に応じてポリゴン数を減らす最適化技術。テスト観点:
                                LOD切り替え時の不自然なポップアップ（急激な変化）
                            </div>
                        </div>
                    </div>
                </div>
                <h3>3.2 グラフィックステストの3アプローチ（K2）&#8212;試験頻出！</h3>
                <div className="mermaid-wrap">
                    <Mermaid chart={`
                        flowchart TB G["&#127912; グラフィックステスト"] G --> A1["&#128444;&#65039;
                        アーティスティックテスト Artistic Testing"] G --> A2["&#9881;&#65039;
                        テクニカルテスト Technical Testing"] G --> A3["&#127918;
                        ゲームプレイグラフィックステスト Gameplay Graphics Testing"] A1 -->
                        D1["ビジュアルスタイルの一貫性 色彩&#183;トーン&#183;雰囲気
                        アートガイドライン準拠"] A2 --> D2["フレームレート維持
                        レンダリングエラー検出 メモリ使用量確認"] A3 -->
                        D3["ヒットボックスと見た目の一致 敵&#183;重要アイテムの視認性
                        VFXによる視野妨害なし"] style G fill:#0a1020,stroke:#00d4ff,color:#00d4ff
                        style A1 fill:#0a1020,stroke:#cc55ff,color:#cc55ff style A2
                        fill:#0a1020,stroke:#00ff88,color:#00ff88 style A3
                        fill:#0a1020,stroke:#ffaa00,color:#ffaa00
                    `} />
                </div>
                <h3>3.3 グラフィックス欠陥カタログ（K2）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>欠陥名</th>
                                <th>説明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag cyan">テクスチャ</span></td>
                                <td>テクスチャ欠落</td>
                                <td>モデルが真っ黒・チェッカーボーン表示になる</td>
                            </tr>
                            <tr>
                                <td><span className="tag cyan">テクスチャ</span></td>
                                <td>Z-ファイティング</td>
                                <td>2サーフェスが重なり画面がちらちらする</td>
                            </tr>
                            <tr>
                                <td><span className="tag cyan">テクスチャ</span></td>
                                <td>引き伸ばし</td>
                                <td>特定の角度で画像が不自然に引き伸ばされる</td>
                            </tr>
                            <tr>
                                <td><span className="tag purple">ジオメトリ</span></td>
                                <td>クリッピング（埋まり）</td>
                                <td>キャラクターが壁・床・天井に埋まる</td>
                            </tr>
                            <tr>
                                <td><span className="tag purple">ジオメトリ</span></td>
                                <td>LODポップ</td>
                                <td>距離変化で急にモデルの詳細度が変わる</td>
                            </tr>
                            <tr>
                                <td><span className="tag purple">ジオメトリ</span></td>
                                <td>ポリゴン欠落</td>
                                <td>モデルに穴が開いている（面法線の反転）</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">アニメーション</span></td>
                                <td>T字ポーズ</td>
                                <td>キャラクターが初期ポーズのまま固まる</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">アニメーション</span></td>
                                <td>スキニング問題</td>
                                <td>服・髪が身体から離れて浮く</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">アニメーション</span></td>
                                <td>アニメーション遅延</td>
                                <td>アクションと見た目のタイミングがズレる</td>
                            </tr>
                            <tr>
                                <td><span className="tag green">ライティング</span></td>
                                <td>光の貫通</td>
                                <td>壁を通過して光が差し込む</td>
                            </tr>
                            <tr>
                                <td><span className="tag green">ライティング</span></td>
                                <td>影の欠落</td>
                                <td>浮いているオブジェクトに影がない</td>
                            </tr>
                            <tr>
                                <td><span className="tag red">VFX</span></td>
                                <td>エフェクト残存</td>
                                <td>弾着エフェクトが消えずに残り続ける</td>
                            </tr>
                            <tr>
                                <td><span className="tag red">VFX</span></td>
                                <td>エフェクト未表示</td>
                                <td>爆発・炎が全く表示されない</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout info">
                    <div className="callout-title">&#128204; 試験ポイント K2</div>
                    <p>
                        試験では「グラフィックステストの3アプローチ（アーティスティック・テクニカル・ゲームプレイ）」と「Z-ファイティング・クリッピング・LODポップ」などの欠陥名の識別が頻出です。
                    </p>
                </div>
            </div>
        </section>

        <section className="section" id="ch4">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">Chapter 4</span
                    ><span className="klevel-badge">K1&#12288;K2&#12288;K3</span>
                    <h2 style={{marginBottom: "0"}}>サウンドのテスト &#11088;最大章（190分・20%）</h2>
                </div>
                <h3>4.1 ゲームサウンドの3大カテゴリ（K1）</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <div className="arch-accent green"></div>
                        <div className="arch-content">
                            <div className="arch-title">① サウンドエフェクト（SE / Sound Effects）</div>
                            <div className="arch-desc">
                                ゲーム内アクションに対応する効果音。<strong>環境サウンド</strong>（川のせせらぎ等）・<strong>ダイエゲティック</strong>（銃声・足音:
                                ゲーム世界内の音＝キャラクターも聞こえる）・<strong>ノンダイエゲティック</strong>（UIクリック音:
                                キャラクターには聞こえない）に分類。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent cyan"></div>
                        <div className="arch-content">
                            <div className="arch-title">② BGM（サウンドトラック）</div>
                            <div className="arch-desc">
                                ゲームの雰囲気を演出する音楽。<strong>アダプティブミュージック</strong>（状況に応じてシームレスに変化する音楽システム）と<strong>スティンガー</strong>（特定イベントで一時的に鳴る音楽断片）が重要概念。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent amber"></div>
                        <div className="arch-content">
                            <div className="arch-title">③ ボイス（ダイアログ）</div>
                            <div className="arch-desc">
                                キャラクター音声・ナレーション。ローカライゼーション課題として<strong>リップシンクのズレ</strong>（日本語版で特に頻出）・音声尺の差による再収録が発生しやすい。
                            </div>
                        </div>
                    </div>
                </div>
                <h3>4.2 ダイエゲティック vs ノンダイエゲティックサウンド（K2）&#8212;試験頻出！</h3>
                <div className="compare">
                    <div className="compare-box good">
                        <div className="compare-head">&#127925; ダイエゲティックサウンド</div>
                        <ul>
                            <li>ゲーム世界内に「実在する」音</li>
                            <li>ゲームキャラクターも「聞こえる」</li>
                            <li>例: 銃声・足音・爆発音・ドアの開閉音</li>
                            <li>例: ゲーム世界内のラジオ・テレビ音</li>
                            <li>没入感・リアリティを高める重要要素</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-head">&#128266; ノンダイエゲティックサウンド</div>
                        <ul>
                            <li>ゲーム世界外の音・UI音</li>
                            <li>キャラクターには「聞こえない」</li>
                            <li>例: メニューのクリック音・通知音</li>
                            <li>例: タイトル画面のBGM・ゲームオーバー音楽</li>
                            <li>ゲーム体験を「外側から」演出する</li>
                        </ul>
                    </div>
                </div>
                <h3>4.3 アダプティブミュージックの仕組み（K2）&#8212;試験頻出！</h3>
                <div className="callout info">
                    <div className="callout-title">定義: アダプティブミュージック</div>
                    <p>
                        ゲームの状況（戦闘・探索・会話・危機）に応じて<strong>シームレスに変化する音楽システム</strong>。プレイヤーに気づかれないよう自然に遷移することが品質基準。
                    </p>
                </div>
                <div className="mermaid-wrap">
                    <Mermaid chart={`
                        flowchart LR A["&#127807; 穏やかな フィールド曲"] -->|"敵を検知"| B["&#9889;
                        テンション 上昇曲（移行）"] B -->|"バトル開始"| C["&#9876;&#65039;
                        バトルBGM"] C -->|"敵全滅"| D["&#127942; 勝利スティンガー"] D
                        -->|"フィールド復帰"| A C -->|"プレイヤー撃破"| E["&#128128; ゲームオーバー
                        スティンガー"] style A fill:#0a1020,stroke:#00ff88,color:#00ff88 style B
                        fill:#0a1020,stroke:#ffaa00,color:#ffaa00 style C
                        fill:#0a1020,stroke:#ff4466,color:#ff4466 style D
                        fill:#0a1020,stroke:#00d4ff,color:#00d4ff style E
                        fill:#0a1020,stroke:#cc55ff,color:#cc55ff
                    `} />
                </div>
                <h3>4.4 サウンド製作プロセスとテスト段階（K2）</h3>
                <ol className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">録音・制作フェーズ</div>
                            <div className="step-desc">
                                Foley・実物録音・シンセサイザー生成 &#8594;
                                <strong>テスト観点:</strong> クリップノイズ・歪みの有無・音声品質
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">編集・最適化フェーズ</div>
                            <div className="step-desc">
                                ノイズ除去・ピッチ調整・ループ設定 &#8594;
                                <strong>テスト観点:</strong>
                                ループポイントの継ぎ目が自然か・音量レベルの統一性
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">エンジン統合（Wwise/FMOD）</div>
                            <div className="step-desc">
                                ゲームエンジンへの組み込み &#8594;
                                <strong>テスト観点:</strong>
                                正しいオブジェクトに設定されているか・3Dサウンドの距離減衰が自然か
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">ゲームプレイ統合テスト</div>
                            <div className="step-desc">
                                実際のゲームプレイ中の確認 &#8594;
                                <strong>テスト観点:</strong>
                                BGMとSEのバランス・リップシンク・アダプティブ遷移のスムーズさ
                            </div>
                        </div>
                    </li>
                </ol>
                <h3>4.5 サウンド欠陥カタログ（3レイヤー分類）（K2）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>欠陥レイヤー</th>
                                <th>欠陥例</th>
                                <th>修正担当</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag cyan">ソースファイル</span></td>
                                <td>クリップノイズ（音が割れている）</td>
                                <td>サウンドエンジニア</td>
                            </tr>
                            <tr>
                                <td><span className="tag cyan">ソースファイル</span></td>
                                <td>ループポイントが不自然でBGMに継ぎ目のズレがある</td>
                                <td>サウンドエンジニア</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">統合</span></td>
                                <td>木材オブジェクトに金属の衝突音が設定されている</td>
                                <td>レベルデザイナー</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">統合</span></td>
                                <td>距離に関係なく同じ音量でSEが鳴る（3Dサウンド未適用）</td>
                                <td>サウンドエンジニア</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">統合</span></td>
                                <td>爆発SEが視覚エフェクトより0.5秒遅れて鳴る</td>
                                <td>開発者</td>
                            </tr>
                            <tr>
                                <td><span className="tag green">状態管理</span></td>
                                <td>BGMが特定シーン切り替えで停止したまま再生されない</td>
                                <td>開発者</td>
                            </tr>
                            <tr>
                                <td><span className="tag green">状態管理</span></td>
                                <td>同じSEが重複して複数回同時に鳴る（スタック問題）</td>
                                <td>開発者</td>
                            </tr>
                            <tr>
                                <td><span className="tag red">プラットフォーム</span></td>
                                <td>PC版は正常だがPS5版でのみ音飛びが発生する</td>
                                <td>開発者・プラットフォーム対応</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>4.6 主要オーディオミドルウェア（K1）</h3>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-value" style={{fontSize: "1.2rem"}}>Wwise</div>
                        <div className="metric-label">業界最大手<br />アダプティブ&#183;3D音響</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value" style={{fontSize: "1.2rem"}}>FMOD</div>
                        <div className="metric-label">リアルタイム制御<br />Unity/UE両対応</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-value" style={{fontSize: "1.2rem"}}>Unity</div>
                        <div className="metric-label">エンジン内蔵<br />小規模プロジェクト向け</div>
                    </div>
                </div>
                <div className="callout info">
                    <div className="callout-title">&#128204; 試験ポイント</div>
                    <p>
                        「ダイエゲティック vs
                        ノンダイエゲティック」「アダプティブミュージックの定義と仕組み」「スティンガーとは何か」「サウンド欠陥の3レイヤー（ソース・統合・状態管理）」が頻出です。
                    </p>
                </div>
            </div>
        </section>

        <section className="section" id="ch5">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">Chapter 5</span
                    ><span className="klevel-badge">K1&#12288;K2</span>
                    <h2 style={{marginBottom: "0"}}>ゲームコントローラーのテスト（95分・10%）</h2>
                </div>
                <h3>5.1 入力デバイスの種類（K1）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>デバイス種別</th>
                                <th>主な製品例</th>
                                <th>主なゲームジャンル</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag green">標準ゲームパッド</span></td>
                                <td>DualSense / Xbox Controller / Switch Pro</td>
                                <td>アクション・RPG・スポーツ全般</td>
                            </tr>
                            <tr>
                                <td><span className="tag cyan">キーボード&#38;マウス</span></td>
                                <td>PC標準（最も精密な入力）</td>
                                <td>FPS・RTS・MMO</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">スペシャリスト</span></td>
                                <td>
                                    フライトスティック・レーシングホイール・アーケードスティック
                                </td>
                                <td>フライトシム・レーシング・格闘ゲーム</td>
                            </tr>
                            <tr>
                                <td><span className="tag purple">モバイル</span></td>
                                <td>タッチスクリーン</td>
                                <td>パズル・カジュアル・モバイルRPG</td>
                            </tr>
                            <tr>
                                <td><span className="tag pink">モーション</span></td>
                                <td>Nintendo Joy-Con / Meta Touch Controllers</td>
                                <td>スポーツ・VRゲーム</td>
                            </tr>
                            <tr>
                                <td><span className="tag red">アクセシビリティ</span></td>
                                <td>Xbox Adaptive Controller・スイッチアクセス・視線入力</td>
                                <td>障害を持つゲーマー向け全ジャンル</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>5.2 コントローラーテストの主要観点（K2）</h3>
                <div className="grid-2">
                    <div>
                        <div className="arch-layers">
                            <div className="arch-row">
                                <div className="arch-accent green"></div>
                                <div className="arch-content">
                                    <div className="arch-title">ボタンマッピングのテスト</div>
                                    <div className="arch-desc">
                                        全ボタン・スティック・トリガーが正しく機能するか。カスタムキーマッピング変更後も正常動作するか。ゲーム内表示アイコンと実際のボタンが一致するか。
                                    </div>
                                </div>
                            </div>
                            <div className="arch-row">
                                <div className="arch-accent cyan"></div>
                                <div className="arch-content">
                                    <div className="arch-title">コントローラー切り替えテスト</div>
                                    <div className="arch-desc">
                                        ゲーム中に抜き差ししても安定しているか。コントローラーとキーボード/マウスを切り替えても正常動作するか。
                                    </div>
                                </div>
                            </div>
                            <div className="arch-row">
                                <div className="arch-accent amber"></div>
                                <div className="arch-content">
                                    <div className="arch-title">触覚フィードバックのテスト</div>
                                    <div className="arch-desc">
                                        振動（Haptic
                                        Feedback）のタイミングが適切か。DualSenseのアダプティブトリガー設定が正しく動作するか。
                                    </div>
                                </div>
                            </div>
                            <div className="arch-row">
                                <div className="arch-accent purple"></div>
                                <div className="arch-content">
                                    <div className="arch-title">アクセシビリティのテスト</div>
                                    <div className="arch-desc">
                                        ボタン長押しとタップの切り替え可能か。コントローラー感度の調整が可能か。障害者向けコントローラーが正常認識されるか。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>入力ラグ（Input Lag）業界基準（K2）</h4>
                        <div className="callout warning">
                            <div className="callout-title">&#9889; 入力ラグとは</div>
                            <p>
                                ボタンを押してから画面に反映されるまでの遅延時間。数ms単位で体験品質が大きく変わります。
                            </p>
                        </div>
                        <div className="progress-item">
                            <div className="progress-label">
                                <span className="progress-name">一般コンソール/PC (&lt;50ms)</span
                                ><span className="progress-val">許容範囲</span>
                            </div>
                            <div className="progress-bar-track">
                                <div
                                    className="progress-bar-fill green"
                                    style={{ "--target-width": "55%", width: "55%"} as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-label">
                                <span className="progress-name"
                                    >格闘ゲーム (&lt;33ms = 2フレーム以内)</span
                                ><span className="progress-val">厳格</span>
                            </div>
                            <div className="progress-bar-track">
                                <div
                                    className="progress-bar-fill amber"
                                    style={{ "--target-width": "75%", width: "75%"} as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-label">
                                <span className="progress-name">VRゲーム (&lt;20ms ← VR酔い防止)</span
                                ><span className="progress-val">最厳格</span>
                            </div>
                            <div className="progress-bar-track">
                                <div
                                    className="progress-bar-fill red"
                                    style={{ "--target-width": "100%", width: "100%"} as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                        <div className="alert cyan">
                            VRゲームで入力ラグが大きいと「VR酔い」の直接原因となります。ユーザーの健康に関わるため最も厳しい基準が適用されます。
                        </div>
                    </div>
                </div>
                <h3>5.3 プラットフォーム間のボタン表示差異（K2）</h3>
                <div className="compare">
                    <div className="compare-box bad">
                        <div className="compare-head">&#10060; よくある欠陥例</div>
                        <ul>
                            <li>PS版「&#9675;ボタン」でXbox版「Bボタン」の表示になっている</li>
                            <li>Nintendo Switch版でXboxのアイコンが誤表示される</li>
                            <li>カスタムマッピング後にUI表示が更新されない</li>
                            <li>複数コントローラー接続時に誤った番号のコントローラーを認識</li>
                        </ul>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-head">&#9989; 正しい実装</div>
                        <ul>
                            <li>接続コントローラーを自動検出してアイコンを動的に変更</li>
                            <li>設定変更後に全UIのボタン表示を即座に更新</li>
                            <li>複数コントローラー接続時も個別に正しいアイコンを表示</li>
                            <li>プラットフォームごとのガイドライン（HIG等）に準拠</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="ch6">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">Chapter 6</span
                    ><span className="klevel-badge">K1&#12288;K2</span>
                    <h2 style={{marginBottom: "0"}}>ゲームレベルのテスト（55分・6%）</h2>
                </div>
                <h3>6.1 ゲームレベルの構成要素（K1）</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <div className="arch-accent green"></div>
                        <div className="arch-content">
                            <div className="arch-title">地形（Terrain）</div>
                            <div className="arch-desc">
                                山・川・平地・建物等の地形構造。地形メッシュの精度と視覚表現の一致を確認する。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent cyan"></div>
                        <div className="arch-content">
                            <div className="arch-title">NavMesh（AIナビゲーションメッシュ）</div>
                            <div className="arch-desc">
                                AIの移動経路データ。NavMeshが正しく生成されていないとAI敵がスタックして動けなくなる。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent amber"></div>
                        <div className="arch-content">
                            <div className="arch-title">スポーンポイント</div>
                            <div className="arch-desc">
                                プレイヤー・敵の出現位置。マルチプレイヤーでは公平な配置が必要で、特定チームが有利にならないよう確認する。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent purple"></div>
                        <div className="arch-content">
                            <div className="arch-title">トリガーゾーン</div>
                            <div className="arch-desc">
                                イベント発動領域。正しい領域サイズ・正しいイベントが発動するかを確認する。
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent pink"></div>
                        <div className="arch-content">
                            <div className="arch-title">配置オブジェクト（Props）</div>
                            <div className="arch-desc">
                                木・椅子・コンテナ等の配置物。コリジョン設定・視覚的な一貫性・パフォーマンスへの影響を確認する。
                            </div>
                        </div>
                    </div>
                </div>
                <h3>6.2 レベル製作の3フェーズ（K2）&#8212;試験頻出！</h3>
                <div className="pyramid">
                    <div className="pyramid-level lvl-1">
                        &#127942; 最終レベル:
                        全要素完成&#12288;&#8594;&#12288;全項目の最終確認を実施
                    </div>
                    <div className="pyramid-level lvl-2">
                        &#127912; ドレスアップ: テクスチャ&#183;小道具&#183;照明を追加した中間レベル
                    </div>
                    <div className="pyramid-level lvl-3">
                        &#11035; ホワイトボックス（グレーボックス）: 基本形のみのプロトタイプレベル
                    </div>
                    <div className="pyramid-level lvl-4">
                        &#128196; 開始: レベルデザインドキュメント&#183;アートガイド
                    </div>
                </div>
                <div className="callout info">
                    <div className="callout-title">
                        &#128161; ホワイトボックス段階からテストを開始する理由
                    </div>
                    <p>
                        ホワイトボックス段階でナビゲーションテストを開始することで、<strong>設計の根本的な問題を最低コストで発見</strong>できます。最終レベルになってからの修正は時間・コストが格段に増加します（シフトレフトの原則）。
                    </p>
                </div>
                <h3>6.3 レベルテストの5カテゴリチェックリスト（K2）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>主なチェック項目</th>
                                <th>欠陥例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag green">ナビゲーション</span></td>
                                <td>
                                    全エリアへの正常アクセス確認。到達できないはずの場所に侵入できないか確認。
                                </td>
                                <td>境界外に出られる「飛び出しバグ」</td>
                            </tr>
                            <tr>
                                <td><span className="tag cyan">コリジョン</span></td>
                                <td>
                                    壁・床のすり抜けがないか。インビジブルウォールが適切な場所にあるか。
                                </td>
                                <td>キャラクターが壁を突き抜けてショートカットできる</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">ゲームプレイ</span></td>
                                <td>
                                    難易度曲線がレベル設計と一致するか。スポーン位置が公平・合理的か。
                                </td>
                                <td>誘導が不十分でプレイヤーが迷子になる</td>
                            </tr>
                            <tr>
                                <td><span className="tag red">パフォーマンス</span></td>
                                <td>
                                    特定ポイントでのフレームドロップがないか。ロード時間が許容範囲か。
                                </td>
                                <td>大規模戦闘シーンで20fps以下に低下</td>
                            </tr>
                            <tr>
                                <td><span className="tag purple">ビジュアル</span></td>
                                <td>Z-ファイティング・クリッピング・テクスチャ欠落がないか。</td>
                                <td>特定角度でテクスチャが真っ黒になる</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section className="section" id="ch7">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">Chapter 7</span
                    ><span className="klevel-badge">K1&#12288;K2&#12288;K3</span>
                    <h2 style={{marginBottom: "0"}}>
                        ローカリゼーションテスト &#11088;重要（155分・17%）
                    </h2>
                </div>
                <h3>7.1 翻訳 vs ローカリゼーション（K1）&#8212;試験頻出！</h3>
                <div className="compare">
                    <div className="compare-box bad">
                        <div className="compare-head">&#10060; 翻訳（Translation）のみ</div>
                        <ul>
                            <li>言語変換のみを行う</li>
                            <li>「Hello, hero!」&#8594;「こんにちは、英雄よ！」</li>
                            <li>文法は正しいがゲームのトーンに合わない</li>
                            <li>文化的文脈・キャラクター性格を無視</li>
                            <li>UIの文字数差・レイアウト問題を無視</li>
                        </ul>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-head">&#9989; ローカリゼーション（L10n）</div>
                        <ul>
                            <li>文化・法的・技術的な総合的適応</li>
                            <li>「Hello, hero!」&#8594;「よう、勇者！」（トーン一致）</li>
                            <li>文化的文脈・ジョーク・隠喩を適切に書き換え</li>
                            <li>UIレイアウトの文字数差に対応</li>
                            <li>各国の法規制・年齢レーティングに準拠</li>
                        </ul>
                    </div>
                </div>
                <h3>7.2 ローカリゼーションがカバーする範囲（K1）</h3>
                <div className="arch-layers">
                    <div className="arch-row">
                        <div className="arch-accent green"></div>
                        <div className="arch-content">
                            <div className="arch-title">① 言語テキスト</div>
                            <div className="arch-desc">UI・ダイアログ・チュートリアル・字幕の翻訳</div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent cyan"></div>
                        <div className="arch-content">
                            <div className="arch-title">② 音声</div>
                            <div className="arch-desc">ローカル言語のボイス収録・リップシンク調整</div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent amber"></div>
                        <div className="arch-content">
                            <div className="arch-title">③ 文化的適合</div>
                            <div className="arch-desc">ユーモア・隠喩・慣用句・ジョークの書き換え</div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent red"></div>
                        <div className="arch-content">
                            <div className="arch-title">④ 宗教&#183;政治的内容</div>
                            <div className="arch-desc">
                                地域の規制に準拠した表現変更（中国・ドイツ等で特に重要）
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent purple"></div>
                        <div className="arch-content">
                            <div className="arch-title">⑤ UI/UX調整</div>
                            <div className="arch-desc">
                                文字の長さ・書字方向（アラビア語等のRTL: 右から左）の対応
                            </div>
                        </div>
                    </div>
                    <div className="arch-row">
                        <div className="arch-accent pink"></div>
                        <div className="arch-content">
                            <div className="arch-title">⑥ 法的要件</div>
                            <div className="arch-desc">
                                各国ゲーム規制・年齢レーティング（CERO/ESRB/PEGI）への準拠
                            </div>
                        </div>
                    </div>
                </div>
                <h3>7.3 ローカリゼーションテストの3種類（K2）&#8212;試験頻出！</h3>
                <div className="mermaid-wrap">
                    <Mermaid chart={`
                        flowchart TB L["&#127758; ローカリゼーションテスト"] L -->
                        F["&#9881;&#65039; 機能ローカリゼーションテスト Functional Localization
                        Testing"] L --> Q["&#128221; 言語品質テスト Linguistic Quality Testing"] L
                        --> C["&#127914; 文化的適合性テスト Cultural Appropriateness Testing"] F -->
                        FD["UIの動作確認 テキストオーバーフロー フォント&#183;エンコーディング
                        未翻訳テキスト&#40;プレースホルダー&#41;残存"] Q --> QD["文法的正確性
                        ゲーム内用語の一貫性 キャラクターのトーン&#183;性格 専門用語の正確性"] C -->
                        CD["ジョーク&#183;隠喩の適切性 宗教&#183;政治的な表現
                        文化的に敏感なコンテンツ 地域固有の変更"] style L
                        fill:#0a1020,stroke:#00d4ff,color:#00d4ff style F
                        fill:#0a1020,stroke:#00ff88,color:#00ff88 style Q
                        fill:#0a1020,stroke:#ffaa00,color:#ffaa00 style C
                        fill:#0a1020,stroke:#cc55ff,color:#cc55ff
                    `} />
                </div>
                <h3>7.4 テキストオーバーフロー問題（K3）</h3>
                <div className="callout warning">
                    <div className="callout-title">&#9888;&#65039; テキストオーバーフローとは</div>
                    <p>
                        英語基準のUIサイズに対し、翻訳後の文字数が増加してUIからテキストがはみ出す問題。<strong>英語&#8594;ドイツ語は平均30%文字数が増加</strong>します。設計段階から対策が必要です。
                    </p>
                </div>
                <div className="code-block" data-lang="具体例">
                    <code
                        ><span className="code-green">英語:</span> [ PLAY ]
                        <span className="code-comment">&#10140; 4文字 = UIに収まる</span>
                        <span className="code-red">ドイツ語:</span> [SPIELEN ]
                        <span className="code-comment">&#10140; 7文字 = ボタンからはみ出す！</span>
                        <span className="code-amber">ロシア語:</span>
                        [&#1048;&#1043;&#1056;&#1040;&#1058;&#1068; ]
                        <span className="code-comment">&#10140; キリル文字で更に幅が増える</span>

                        <span className="code-cyan">&#10004; 対策:</span>
                        &#10140; UIコンポーネントを「文字数が増える」前提で設計 &#10140;
                        フォントサイズを可変にする（auto-fit） &#10140;
                        テキストを省略表示にする（&#8230;） &#10140;
                        UI枠を動的に拡張するデザインにする &#10140;
                        翻訳前に最大文字数ガイドラインを設定しておく</code
                    >
                </div>
                <h3>7.5 主要市場の特記事項（K1）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>市場</th>
                                <th>審査機関</th>
                                <th>主な考慮事項</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&#127471;&#127477; 日本</td>
                                <td>CERO（A/B/C/D/Z の5段階）</td>
                                <td>縦書き対応・敬語レベルの選択・日本語特有の表現調整</td>
                            </tr>
                            <tr>
                                <td>&#127464;&#127475; 中国</td>
                                <td>CAC（国家インターネット信息弁公室）</td>
                                <td>
                                    簡体字使用・骨/血の表現規制・歴史的&#183;政治的内容の修正が必要
                                </td>
                            </tr>
                            <tr>
                                <td>&#127465;&#127466; ドイツ</td>
                                <td>USK（U3/U6/U12/U16/U18）</td>
                                <td>ゴア表現規制・ナチス象徴は歴史的文脈のみ許可（2018年緩和）</td>
                            </tr>
                            <tr>
                                <td>&#127482;&#127480; 米国</td>
                                <td>ESRB（E/T/M/AO）</td>
                                <td>アクセシビリティ対応推奨・英語方言対応（米語 vs 英語）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>7.6 ローカリゼーション典型欠陥カタログ（K2）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>欠陥種別</th>
                                <th>具体例</th>
                                <th>重大度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>テキストオーバーフロー</td>
                                <td>ドイツ語UIでボタンラベルが枠からはみ出す</td>
                                <td><span className="tag amber">High</span></td>
                            </tr>
                            <tr>
                                <td>プレースホルダー残存</td>
                                <td>
                                    "AUDIO_SETTING_KEY" のような開発用テキストが製品版に表示される
                                </td>
                                <td><span className="tag amber">High</span></td>
                            </tr>
                            <tr>
                                <td>リップシンクのズレ</td>
                                <td>
                                    日本語音声とキャラクターの口の動きがズレる（英語ベースのアニメーション）
                                </td>
                                <td><span className="tag amber">High</span></td>
                            </tr>
                            <tr>
                                <td>フォント問題</td>
                                <td>韓国語・アラビア語の特殊文字が文字化けする</td>
                                <td><span className="tag amber">High</span></td>
                            </tr>
                            <tr>
                                <td>RTL未対応</td>
                                <td>
                                    アラビア語でUIが左から右表示のまま（右から左に読む言語に未対応）
                                </td>
                                <td><span className="tag amber">High</span></td>
                            </tr>
                            <tr>
                                <td>文化的問題</td>
                                <td>特定の宗教的象徴が不適切な文脈で使われている</td>
                                <td><span className="tag red">Critical</span></td>
                            </tr>
                            <tr>
                                <td>法規制違反</td>
                                <td>
                                    中国版で規制対象のコンテンツ（骨・血）がそのまま残存している
                                </td>
                                <td><span className="tag red">Critical</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section className="section" id="tools">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">TOOLS</span>
                    <h2 style={{marginBottom: "0"}}>ゲームテスト自動化ツール 2025年版</h2>
                </div>
                <h3>テスト自動化フレームワーク</h3>
                <div className="trend-card">
                    <div className="trend-title">&#127918; Unity Test Framework（UTF）</div>
                    <div className="trend-desc">
                        Unity エンジンに直接統合。Edit Mode &#38; Play Mode の両テストに対応。NUnit
                        フレームワーク使用。CI/CDパイプラインへの統合が容易。<br /><a
                            href="https://docs.unity3d.com/Packages/com.unity.test-framework@1.1/manual/index.html"
                            target="_blank"
                            >公式ドキュメント &#8594;</a
                        >
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-title">&#128296; GameDriver</div>
                    <div className="trend-desc">
                        Unity &#38; Unreal Engine
                        両対応。PC・コンソール・モバイル対応。ソースコードなしでテスト作成可能。ゲームテスト自動化の業界標準ツール。<br /><a
                            href="https://gamedriver.io/"
                            target="_blank"
                            >公式サイト &#8594;</a
                        >
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-title">
                        &#128065;&#65039; Applitools（AIビジュアルテスト）
                    </div>
                    <div className="trend-desc">
                        AI搭載のビジュアルリグレッションテスト。UIの微妙な変化も自動検出。全解像度・デバイスでのスクリーンショット比較が可能。<br /><a
                            href="https://applitools.com/"
                            target="_blank"
                            >公式サイト &#8594;</a
                        >
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-title">&#128202; GameBench（モバイルパフォーマンス）</div>
                    <div className="trend-desc">
                        モバイルゲームのパフォーマンス測定専門ツール。FPS・CPU/GPU使用率・メモリ・温度のリアルタイム計測が可能。<br /><a
                            href="https://www.gamebench.net/"
                            target="_blank"
                            >公式サイト &#8594;</a
                        >
                    </div>
                </div>
                <h3>パフォーマンス目標値（2025年）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>プラットフォーム</th>
                                <th>目標FPS</th>
                                <th>最大入力ラグ</th>
                                <th>ロード時間目標</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag green">コンソール PS5/Xbox Series X</span></td>
                                <td>60fps（一部120fps対応）</td>
                                <td>50ms以下</td>
                                <td>5秒以内（SSD活用）</td>
                            </tr>
                            <tr>
                                <td><span className="tag cyan">PC</span></td>
                                <td>60fps以上（可変）</td>
                                <td>50ms以下</td>
                                <td>10秒以内</td>
                            </tr>
                            <tr>
                                <td><span className="tag amber">モバイル iOS/Android</span></td>
                                <td>60fps（一部30fps）</td>
                                <td>50ms以下</td>
                                <td>15秒以内</td>
                            </tr>
                            <tr>
                                <td><span className="tag red">VR Meta Quest / PS VR2</span></td>
                                <td><strong>90fps以上</strong></td>
                                <td><strong>20ms以下</strong></td>
                                <td>&#8212;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout danger">
                    <div className="callout-title">&#128680; VRゲームのフレームドロップは安全基準</div>
                    <p>
                        VRゲームではフレームドロップが直接「VR酔い」の原因になります。90fps維持・20ms以下の入力ラグは<strong>ユーザーの健康に関わる安全基準</strong>として最も厳しく管理されます。
                    </p>
                </div>
                <h3>グラフィックスデバッグ&#183;パフォーマンスツール一覧</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ツール名</th>
                                <th>用途</th>
                                <th>対応環境</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://renderdoc.org/" target="_blank">RenderDoc</a>
                                </td>
                                <td>グラフィックスAPIレベルのデバッグ</td>
                                <td>DX11/DX12/Vulkan/OpenGL</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://devblogs.microsoft.com/pix/" target="_blank"
                                        >PIX for Windows</a
                                    >
                                </td>
                                <td>Xbox/Windows GPU分析専用</td>
                                <td>Xbox/PC</td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://docs.unity3d.com/Manual/Profiler.html"
                                        target="_blank"
                                        >Unity Profiler</a
                                    >
                                </td>
                                <td>リアルタイムパフォーマンス分析</td>
                                <td>Unity全プラットフォーム</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://gpuinspector.dev/" target="_blank"
                                        >Android GPU Inspector</a
                                    >
                                </td>
                                <td>AndroidのGPU使用率・シェーダー分析</td>
                                <td>Android</td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://developer.apple.com/instruments/"
                                        target="_blank"
                                        >Xcode Instruments</a
                                    >
                                </td>
                                <td>iOS ゲームのCPU・GPU・メモリ分析</td>
                                <td>iOS/macOS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section className="section" id="exam">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">EXAM</span>
                    <h2 style={{marginBottom: "0"}}>試験対策&#183;サンプル問題</h2>
                </div>
                <h3>章別重要度と出題比率</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 1 | ~8%</div>
                        <div className="exam-title">ゲームテストの特殊性</div>
                        <div className="exam-meta">
                            <span className="exam-stars">&#11088;&#11088;&#11088;&#9733;&#9733;</span
                            ><span className="exam-pct">75分</span>
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 2 | ~20% &#11088;</div>
                        <div className="exam-title">ゲームメカニクスのテスト</div>
                        <div className="exam-meta">
                            <span className="exam-stars">&#11088;&#11088;&#11088;&#11088;&#11088;</span
                            ><span className="exam-pct">180分</span>
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 3 | ~17%</div>
                        <div className="exam-title">グラフィックスのテスト</div>
                        <div className="exam-meta">
                            <span className="exam-stars">&#11088;&#11088;&#11088;&#11088;&#11088;</span
                            ><span className="exam-pct">160分</span>
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 4 | ~20% &#11088;</div>
                        <div className="exam-title">サウンドのテスト</div>
                        <div className="exam-meta">
                            <span className="exam-stars">&#11088;&#11088;&#11088;&#11088;&#11088;</span
                            ><span className="exam-pct">190分</span>
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 5 | ~10%</div>
                        <div className="exam-title">コントローラーのテスト</div>
                        <div className="exam-meta">
                            <span className="exam-stars">&#11088;&#11088;&#11088;&#11088;&#9733;</span
                            ><span className="exam-pct">95分</span>
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 6 | ~6%</div>
                        <div className="exam-title">ゲームレベルのテスト</div>
                        <div className="exam-meta">
                            <span className="exam-stars">&#11088;&#11088;&#11088;&#9733;&#9733;</span
                            ><span className="exam-pct">55分</span>
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">Chapter 7 | ~17% &#11088;</div>
                        <div className="exam-title">ローカリゼーションテスト</div>
                        <div className="exam-meta">
                            <span className="exam-stars">&#11088;&#11088;&#11088;&#11088;&#11088;</span
                            ><span className="exam-pct">155分</span>
                        </div>
                    </div>
                </div>
                <h3>必ず覚える重要概念チェックリスト</h3>
                <div className="alert cyan">
                    &#9989; ゲームテスト vs ゲームプレイの違い（体系的&#183;計画的 vs
                    娯楽目的。意図的にエッジケースを試す）
                </div>
                <div className="alert green">
                    &#9989; ゲームメカニクス3分類: ①ゲームプレイ/非ゲームプレイ
                    &#12288;②コアループ/メタループ
                    &#12288;③クライアント/サーバー/クライアント-サーバー
                </div>
                <div className="alert cyan">
                    &#9989; サーバー権威型モデル: サーバーが正しい状態を決定 &#8594;
                    チート対策として重要
                </div>
                <div className="alert amber">
                    &#9989; グラフィックステスト3アプローチ: アーティスティック / テクニカル /
                    ゲームプレイグラフィックス
                </div>
                <div className="alert green">
                    &#9989; ゲームサウンド3カテゴリ: SE（サウンドエフェクト）/ BGM / ボイス
                </div>
                <div className="alert cyan">
                    &#9989; アダプティブミュージック:
                    ゲーム状況に応じてシームレスに変化する音楽システム
                </div>
                <div className="alert amber">
                    &#9989; ダイエゲティック vs
                    ノンダイエゲティックサウンド（キャラクターが聞こえるか否か）
                </div>
                <div className="alert green">
                    &#9989; ローカリゼーション vs
                    翻訳の違い（文化&#183;法的&#183;技術的な総合的適応）
                </div>
                <div className="alert cyan">
                    &#9989; ローカリゼーションテスト3種類: 機能ローカリゼーション / 言語品質 /
                    文化的適合性
                </div>
                <div className="alert amber">
                    &#9989; テキストオーバーフロー:
                    翻訳文字数の差によるUI崩れ（英語&#8594;ドイツ語は約30%増）
                </div>
                <div className="alert green">
                    &#9989; レベル製作3フェーズ: ホワイトボックス &#8594; ドレスアップ &#8594;
                    最終レベル
                </div>
                <div className="alert red">
                    &#9989; VR入力ラグ基準: 20ms以下（VR酔い防止のため最も厳格な安全基準）
                </div>
                <h3 style={{marginTop: "2rem"}}>サンプル問題と解説</h3>
                <div className="trend-card">
                    <div className="trend-title">問1（K2 / Chapter 2）メカニクス分類</div>
                    <p>
                        オンラインRPGのHPがサーバーで管理され、クライアント側でのデータ改ざんが無効化されている。このアーキテクチャは？
                    </p>
                    <p style={{marginTop: "0.75rem"}}>
                        <strong>A)</strong> クライアントメカニクス&#12288;<strong>B)</strong>
                        サーバーメカニクス&#12288;<strong>C)</strong>
                        クライアント-サーバーメカニクス&#12288;<strong>D)</strong>
                        メタループメカニクス
                    </p>
                    <div className="alert green" style={{marginTop: "0.75rem"}}>
                        &#9989; 正解:
                        B&#12288;サーバーメカニクス（サーバー権威型）はサーバー側がゲームの重要な状態を管理し、クライアント側の不正改ざんを防ぐ仕組みです。
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-title">問2（K2 / Chapter 4）サウンド分類</div>
                    <p>
                        ゲームのBGMが「静かな村では穏やかな音楽で、敵が接近すると自動的に緊張した音楽に切り替わる」機能を何と呼ぶか？
                    </p>
                    <p style={{marginTop: "0.75rem"}}>
                        <strong>A)</strong> ダイエゲティックサウンド&#12288;<strong>B)</strong>
                        アダプティブミュージック&#12288;<strong>C)</strong>
                        サウンドエフェクト&#12288;<strong>D)</strong> スティンガー
                    </p>
                    <div className="alert green" style={{marginTop: "0.75rem"}}>
                        &#9989; 正解:
                        B&#12288;アダプティブミュージックはゲームの状況に応じてシームレスに音楽が変化するシステム。Dのスティンガーは特定イベントで一時的に鳴る短い音楽断片です。
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-title">問3（K3 / Chapter 7）ローカリゼーション</div>
                    <p>
                        ゲームをドイツ語にローカライズした際、ボタンのUIテキストが枠からはみ出している。最も可能性の高い原因は？
                    </p>
                    <p style={{marginTop: "0.75rem"}}>
                        <strong>A)</strong> テクスチャの解像度不足&#12288;<strong>B)</strong>
                        テキストオーバーフロー&#12288;<strong>C)</strong>
                        フォントエンコーディング問題&#12288;<strong>D)</strong>
                        アニメーションタイミングズレ
                    </p>
                    <div className="alert green" style={{marginTop: "0.75rem"}}>
                        &#9989; 正解:
                        B&#12288;英語&#8594;ドイツ語は平均30%文字数が増加（PLAY&#8594;SPIELEN）。英語基準でUIサイズが設定されていると翻訳後にはみ出す「テキストオーバーフロー」が典型的な欠陥です。
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-title">問4（K2 / Chapter 3）グラフィックス欠陥</div>
                    <p>
                        テスターが「特定エリアでキャラクターが壁の中に半分埋まる」欠陥を発見した。このカテゴリは？
                    </p>
                    <p style={{marginTop: "0.75rem"}}>
                        <strong>A)</strong> テクスチャ欠陥&#12288;<strong>B)</strong>
                        アニメーション欠陥&#12288;<strong>C)</strong> コリジョン欠陥&#12288;<strong
                            >D)</strong
                        >
                        ライティング欠陥
                    </p>
                    <div className="alert green" style={{marginTop: "0.75rem"}}>
                        &#9989; 正解:
                        C&#12288;「クリッピング」はコリジョン（当たり判定）欠陥の典型例。物理的な接触判定が正しく機能していないため、キャラクターが壁に埋まります。
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-title">問5（K2 / Chapter 1）ゲームテストの特殊性</div>
                    <p>
                        ゲームのテストにおいて、テスターが「普通のプレイヤーがしないような操作」を意図的に行う理由として最も適切なものはどれか？
                    </p>
                    <p style={{marginTop: "0.75rem"}}>
                        <strong>A)</strong> テスターはゲームを楽しむことが目的だから&#12288;<strong
                            >B)</strong
                        >
                        ゲームのバランスを壊すことが目的だから&#12288;<strong>C)</strong>
                        通常プレイで発見しにくいエッジケースの欠陥を発見するため&#12288;<strong
                            >D)</strong
                        >
                        チート方法をプレイヤーに教えるため
                    </p>
                    <div className="alert green" style={{marginTop: "0.75rem"}}>
                        &#9989; 正解:
                        C&#12288;ゲームテストは通常プレイヤーが試さない操作（境界値・異常操作・意図しない組み合わせ）を意図的に実行することで、ユーザーが発見する前に欠陥を検出することを目的とします。
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="refs">
            <div className="container">
                <div className="chapter-header">
                    <span className="chapter-num">REFS</span>
                    <h2 style={{marginBottom: "0"}}>参照URL一覧</h2>
                </div>
                <h3>&#127984;&#65039; ISTQB&#174; 公式リソース</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-label">公式</div>
                        <div className="ref-title">CT-GaMe 公式認定ページ</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/certifications/certified-tester-game-testing-ct-game/"
                            target="_blank"
                            >https://istqb.org/certifications/certified-tester-game-testing-ct-game/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">公式</div>
                        <div className="ref-title">CT-GaMe v1.0.1 プレスリリース</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/istqb-releases-certified-tester-game-testing/"
                            target="_blank"
                            >https://istqb.org/istqb-releases-certified-tester-game-testing/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">公式</div>
                        <div className="ref-title">シラバスPDF（ASTQB）</div>
                        <a
                            className="ref-url"
                            href="https://astqb.org/assets/documents/ISTQB_CT_GaMe_Syllabus_v1.0.1.pdf"
                            target="_blank"
                            >https://astqb.org/assets/documents/ISTQB_CT_GaMe_Syllabus_v1.0.1.pdf</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">公式</div>
                        <div className="ref-title">ISTQB グロッサリー</div>
                        <a
                            className="ref-url"
                            href="https://glossary.istqb.org/en_US/search?term="
                            target="_blank"
                            >https://glossary.istqb.org/en_US/search?term=</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">試験</div>
                        <div className="ref-title">iSQI（CT-GaMe 試験）</div>
                        <a
                            className="ref-url"
                            href="https://isqi.org/ISTQB-Certified-Tester-Game-Testing-CT-GaMe/CT-GaMe"
                            target="_blank"
                            >https://isqi.org/ISTQB-Certified-Tester-Game-Testing-CT-GaMe/CT-GaMe</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">試験</div>
                        <div className="ref-title">ASTQB（米国 CT-GaMe）</div>
                        <a
                            className="ref-url"
                            href="https://astqb.org/istqb-game-testing-syllabus/"
                            target="_blank"
                            >https://astqb.org/istqb-game-testing-syllabus/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">学習</div>
                        <div className="ref-title">ISTQB.Guru CT-GaMe ガイド</div>
                        <a
                            className="ref-url"
                            href="https://www.istqb.guru/game-testing/"
                            target="_blank"
                            >https://www.istqb.guru/game-testing/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">前提資格</div>
                        <div className="ref-title">CTFL v4.0（前提資格）</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/certifications/certified-tester-foundation-level/"
                            target="_blank"
                            >https://istqb.org/certifications/certified-tester-foundation-level/</a
                        >
                    </div>
                </div>
                <h3>&#128296; ゲームテストツール</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-label">テスト自動化</div>
                        <div className="ref-title">Unity Test Framework</div>
                        <a
                            className="ref-url"
                            href="https://docs.unity3d.com/Packages/com.unity.test-framework@1.1/manual/index.html"
                            target="_blank"
                            >https://docs.unity3d.com/Packages/com.unity.test-framework@1.1/manual/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">テスト自動化</div>
                        <div className="ref-title">GameDriver（Unity/UE）</div>
                        <a className="ref-url" href="https://gamedriver.io/" target="_blank"
                            >https://gamedriver.io/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">ビジュアルAI</div>
                        <div className="ref-title">Applitools</div>
                        <a className="ref-url" href="https://applitools.com/" target="_blank"
                            >https://applitools.com/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">モバイル性能</div>
                        <div className="ref-title">GameBench</div>
                        <a className="ref-url" href="https://www.gamebench.net/" target="_blank"
                            >https://www.gamebench.net/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">グラフィックス</div>
                        <div className="ref-title">RenderDoc</div>
                        <a className="ref-url" href="https://renderdoc.org/" target="_blank"
                            >https://renderdoc.org/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">グラフィックス</div>
                        <div className="ref-title">PIX for Windows</div>
                        <a
                            className="ref-url"
                            href="https://devblogs.microsoft.com/pix/"
                            target="_blank"
                            >https://devblogs.microsoft.com/pix/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">Android GPU</div>
                        <div className="ref-title">Android GPU Inspector</div>
                        <a className="ref-url" href="https://gpuinspector.dev/" target="_blank"
                            >https://gpuinspector.dev/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">iOS 性能</div>
                        <div className="ref-title">Xcode Instruments</div>
                        <a
                            className="ref-url"
                            href="https://developer.apple.com/instruments/"
                            target="_blank"
                            >https://developer.apple.com/instruments/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">バグ追跡</div>
                        <div className="ref-title">Jira（Atlassian）</div>
                        <a className="ref-url" href="https://www.atlassian.com/jira" target="_blank"
                            >https://www.atlassian.com/jira</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">テスト管理</div>
                        <div className="ref-title">TestRail</div>
                        <a className="ref-url" href="https://www.testrail.com/" target="_blank"
                            >https://www.testrail.com/</a
                        >
                    </div>
                </div>
                <h3>&#127925; オーディオ&#183;ローカライゼーション</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-label">オーディオ</div>
                        <div className="ref-title">Wwise（Audiokinetic）</div>
                        <a className="ref-url" href="https://www.audiokinetic.com/" target="_blank"
                            >https://www.audiokinetic.com/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">オーディオ</div>
                        <div className="ref-title">FMOD</div>
                        <a className="ref-url" href="https://fmod.com/" target="_blank"
                            >https://fmod.com/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">ローカリゼーション</div>
                        <div className="ref-title">IGDA ローカリゼーション SIG</div>
                        <a
                            className="ref-url"
                            href="https://igda.org/sigs/localization/"
                            target="_blank"
                            >https://igda.org/sigs/localization/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">ローカリゼーション</div>
                        <div className="ref-title">Crowdin（翻訳管理ツール）</div>
                        <a className="ref-url" href="https://crowdin.com/" target="_blank"
                            >https://crowdin.com/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">レーティング</div>
                        <div className="ref-title">CERO（日本）</div>
                        <a className="ref-url" href="https://www.cero.gr.jp/" target="_blank"
                            >https://www.cero.gr.jp/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">レーティング</div>
                        <div className="ref-title">ESRB（北米）</div>
                        <a className="ref-url" href="https://www.esrb.org/" target="_blank"
                            >https://www.esrb.org/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">レーティング</div>
                        <div className="ref-title">PEGI（欧州）</div>
                        <a className="ref-url" href="https://pegi.info/" target="_blank"
                            >https://pegi.info/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-label">キャリア</div>
                        <div className="ref-title">ゲームテスターキャリアガイド</div>
                        <a
                            className="ref-url"
                            href="https://www.cgspectrum.com/career-pathways/qa-game-tester"
                            target="_blank"
                            >https://www.cgspectrum.com/career-pathways/qa-game-tester</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <footer
            style={{background: "rgba(0, 0, 0, 0.4)", borderTop: "1px solid var(--border-subtle)", padding: "2.5rem 0", textAlign: "center"}}
        >
            <div className="container">
                <div
                    style={{fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-accent-green)", marginBottom: "0.5rem"}}
                >
                    &#127918; ISTQB&#174; CT-GaMe v1.0.1 完全学習ガイド 2025
                </div>
                <div style={{fontSize: "0.8rem", color: "var(--text-muted)"}}>
                    本ガイドはISTQB&#174;が公認したトレーニング資料ではありません。公式シラバス・サンプル問題と合わせてご使用ください。<br />試験情報の最終確認は
                    <a
                        href="https://istqb.org/certifications/certified-tester-game-testing-ct-game/"
                        target="_blank"
                        >istqb.org</a
                    >
                    で行ってください。
                </div>
            </div>
        </footer>
        <script>
            mermaid.initialize(&#123;
                startOnLoad: true,
                theme: 'dark',
                themeVariables: &#123;
                    primaryColor: '#0a1020',
                    primaryTextColor: '#e2e8f0',
                    primaryBorderColor: '#00d4ff',
                    lineColor: '#00d4ff',
                    secondaryColor: '#0f1a2e',
                    tertiaryColor: '#162035',
                    background: '#030712',
                    mainBkg: '#0a1020',
                    nodeBorder: '#00d4ff',
                    clusterBkg: '#0f1a2e',
                    titleColor: '#00ff88',
                    edgeLabelBackground: '#0a1020',
                    fontSize: '14px',
                &#125;,
            &#125;);
        </script>
    
        </div>
    );
}
