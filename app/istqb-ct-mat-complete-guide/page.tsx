
import "./istqb-ct-mat-complete-guide.css";
import NavBar from "./NavBar";

export default function IstqbCtMatCompleteGuide() {
    return (
        <div className="istqb-ct-mat-page">
            <NavBar />
            <main className="container">
            <section className="hero" id="top">
                <div className="hero-badge">ISTQB® SPECIALIST CERTIFICATION</div>
                <h1 className="hero-title">
                    <span className="accent2">Mobile Application</span><br /><span className="accent"
                        >Testing</span
                    >
                    完全ガイド
                </h1>
                <p className="hero-sub">
                    CT-MAT v1.0 シラバス完全準拠 ── 初学者から試験合格まで、<br />実践コード・図解・サンプル問題で徹底解説
                </p>
                <div className="hero-meta">
                    <div className="meta-pill">
                        <div>
                            <div className="val">40</div>
                            <div className="lbl">問題数</div>
                        </div>
                    </div>
                    <div className="meta-pill">
                        <div>
                            <div className="val">26</div>
                            <div className="lbl">合格点 (65%)</div>
                        </div>
                    </div>
                    <div className="meta-pill">
                        <div>
                            <div className="val">60</div>
                            <div className="lbl">試験時間 (分)</div>
                        </div>
                    </div>
                    <div className="meta-pill">
                        <div>
                            <div className="val">775</div>
                            <div className="lbl">推奨学習 (分)</div>
                        </div>
                    </div>
                    <div className="meta-pill">
                        <div>
                            <div className="val">K1-K3</div>
                            <div className="lbl">認知レベル</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            {/* TOC */}
            <section id="toc">
                <h2 className="section-title">目次 — チャプター構成</h2>
                <div className="toc-grid">
                    <a href="#ch0" className="toc-card"
                        ><span className="toc-num">CH.0</span>
                        <div>
                            <div className="toc-title">イントロダクション</div>
                            <div className="toc-mins">試験概要・ビジネスアウトカム</div>
                        </div></a
                    >
                    <a href="#ch1" className="toc-card"
                        ><span className="toc-num">CH.1</span>
                        <div>
                            <div className="toc-title">モバイル世界 ─ ビジネス・技術ドライバー</div>
                            <div className="toc-mins">⏱ 175分 | K1・K2・K3</div>
                        </div></a
                    >
                    <a href="#ch2" className="toc-card"
                        ><span className="toc-num">CH.2</span>
                        <div>
                            <div className="toc-title">モバイルアプリ テストタイプ</div>
                            <div className="toc-mins">⏱ 265分 | K1・K2</div>
                        </div></a
                    >
                    <a href="#ch3" className="toc-card"
                        ><span className="toc-num">CH.3</span>
                        <div>
                            <div className="toc-title">共通テストタイプ・テストプロセス</div>
                            <div className="toc-mins">⏱ 200分 | K1・K2・K3</div>
                        </div></a
                    >
                    <a href="#ch4" className="toc-card"
                        ><span className="toc-num">CH.4</span>
                        <div>
                            <div className="toc-title">プラットフォーム・ツール・環境</div>
                            <div className="toc-mins">⏱ 80分 | K1・K2</div>
                        </div></a
                    >
                    <a href="#ch5" className="toc-card"
                        ><span className="toc-num">CH.5</span>
                        <div>
                            <div className="toc-title">テスト実行の自動化</div>
                            <div className="toc-mins">⏱ 55分 | K1・K2・K3</div>
                        </div></a
                    >
                    <a href="#exam" className="toc-card"
                        ><span className="toc-num">試験</span>
                        <div>
                            <div className="toc-title">試験対策・サンプル問題</div>
                            <div className="toc-mins">チェックリスト完備</div>
                        </div></a
                    >
                    <a href="#refs" className="toc-card"
                        ><span className="toc-num">参考</span>
                        <div>
                            <div className="toc-title">参考文献・URL一覧</div>
                            <div className="toc-mins">カテゴリ別リンク集</div>
                        </div></a
                    >
                </div>
                <h3 className="sub-title" style={{marginTop: "2rem"}}>📊 章別 推奨学習時間配分</h3>
                <div style={{margin: "1rem 0"}}>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">Ch.1 モバイル世界・ビジネスドライバー</span
                            ><span className="progress-val">175分 (22.6%)</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: "22.6%"}}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">Ch.2 モバイルアプリテストタイプ</span
                            ><span className="progress-val">265分 (34.2%) ← 最大</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: "34.2%"}}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">Ch.3 共通テストタイプ・テストプロセス</span
                            ><span className="progress-val">200分 (25.8%)</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: "25.8%"}}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">Ch.4 プラットフォーム・ツール・環境</span
                            ><span className="progress-val">80分 (10.3%)</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: "10.3%"}}></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <div className="progress-header">
                            <span className="progress-label">Ch.5 テスト実行の自動化</span
                            ><span className="progress-val">55分 (7.1%)</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: "7.1%"}}></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            {/* CH0 */}
            <section id="ch0">
                <div className="chapter-header">
                    <span className="chapter-num" style={{background: "#00e5ff", color: "#030712"}}
                        >CH.0</span
                    >
                    <div>
                        <h1 className="chapter-title">イントロダクション ─ CT-MAT 概要</h1>
                        <div className="chapter-meta">
                            <span className="chapter-badge badge-time">前提: CTFL 必須</span>
                        </div>
                    </div>
                </div>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-val">40</div>
                        <div className="metric-label">問題数</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">26</div>
                        <div className="metric-label">合格点 (65%)</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">60</div>
                        <div className="metric-label">試験時間 (分)</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">75</div>
                        <div className="metric-label">非母語 +25% (分)</div>
                    </div>
                </div>
                <h2 className="section-title">7つのビジネスアウトカム (MAT-01〜07)</h2>
                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">01</div>
                        <div className="step-content">
                            <div className="step-title">MAT-01 テスト戦略への貢献</div>
                            <div className="step-desc">
                                モバイルアプリのビジネス・技術ドライバーを理解し、テスト戦略を策定できる
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">02</div>
                        <div className="step-content">
                            <div className="step-title">MAT-02 主要な課題・リスクの識別</div>
                            <div className="step-desc">
                                モバイルアプリテストに関わる課題・リスク・期待事項を理解・識別できる
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">03</div>
                        <div className="step-content">
                            <div className="step-title">
                                MAT-03 モバイル固有のテストタイプ・レベルの適用
                            </div>
                            <div className="step-desc">
                                モバイルアプリ固有のテストタイプ・レベルを適切に適用できる
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">04</div>
                        <div className="step-content">
                            <div className="step-title">
                                MAT-04 共通テストタイプのモバイル文脈での適用
                            </div>
                            <div className="step-desc">
                                CTFL に記載の共通テストタイプをモバイル文脈で適用できる
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">05</div>
                        <div className="step-content">
                            <div className="step-title">
                                MAT-05 モバイル固有のテストプロセス活動の実施
                            </div>
                            <div className="step-desc">
                                ISTQB
                                テストプロセスの主要活動の一環として、モバイル固有の活動を実行できる
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">06</div>
                        <div className="step-content">
                            <div className="step-title">MAT-06 適切な環境・ツールの識別・使用</div>
                            <div className="step-desc">
                                モバイルアプリテストに適した環境・ツールを識別・活用できる
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">07</div>
                        <div className="step-content">
                            <div className="step-title">MAT-07 テスト自動化手法・ツールの理解</div>
                            <div className="step-desc">
                                モバイルアプリテスト自動化を支援する手法とツールを理解できる
                            </div>
                        </div>
                    </li>
                </ul>
                <h2 className="section-title">認知レベル（K-Level）の定義</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>K-Level</th>
                                <th>認知レベル</th>
                                <th>動詞例</th>
                                <th>問題の特徴</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="tag tag-k1">K1</span></td>
                                <td>Remember（記憶）</td>
                                <td>Recall, Identify, List</td>
                                <td>用語・定義を答える</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-k2">K2</span></td>
                                <td>Understand（理解）</td>
                                <td>Describe, Distinguish, Explain</td>
                                <td>概念を説明・分類する</td>
                            </tr>
                            <tr>
                                <td><span className="tag tag-k3">K3</span></td>
                                <td>Apply（適用）</td>
                                <td>Apply, Create, Design, Execute</td>
                                <td>実際の状況に技法を適用する</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <div className="divider"></div>
            {/* CH1 */}
            <section id="ch1">
                <div className="chapter-header">
                    <span className="chapter-num" style={{background: "var(--neon-green)", color: "#030712"}}
                        >CH.1</span
                    >
                    <div>
                        <h1 className="chapter-title">モバイル世界 — ビジネス・技術ドライバー</h1>
                        <div className="chapter-meta">
                            <span className="chapter-badge badge-time">⏱ 175分</span
                            ><span className="chapter-badge badge-k2">K2 主体</span
                            ><span className="chapter-badge badge-k3">K3 あり</span>
                        </div>
                    </div>
                </div>
                <h2 className="section-title">1.1 モバイルアナリティクスデータ</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-1.1.1 K2</span
                    ><span className="lo-text"
                        >利用可能なモバイルアナリティクスデータが、テスト戦略とテスト計画のインプットとしてどのように使用できるかを説明できる</span
                    >
                </div>
                <p>
                    モバイルアプリテスターは、テスト計画の議論とテスト分析に効果的に貢献するために、以下の要素を把握しておく必要があります。
                </p>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">📊</span>
                        <div className="arch-content">
                            <div className="arch-label">プラットフォーム分布</div>
                            <div className="arch-desc">
                                iOS vs Android のシェア（地域別）・アプリダウンロード数の分布
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">📱</span>
                        <div className="arch-content">
                            <div className="arch-label">OSバージョン分布</div>
                            <div className="arch-desc">
                                各OSバージョンの市場シェア・サポート期限を考慮したテスト優先度設定
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">🖥️</span>
                        <div className="arch-content">
                            <div className="arch-label">デバイスタイプ・画面サイズ</div>
                            <div className="arch-desc">
                                地域別のデバイス種別シェア・解像度・DPIの分布データ
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">⌨️</span>
                        <div className="arch-content">
                            <div className="arch-label">入力方式・カメラタイプ</div>
                            <div className="arch-desc">
                                タッチ・ペン・キーボード・音声入力の種類・カメラ仕様の多様性
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <span className="arch-icon">🌍</span>
                        <div className="arch-content">
                            <div className="arch-label">地理的ユーザー分布</div>
                            <div className="arch-desc">
                                ターゲット市場に応じたデバイスポートフォリオ選定の根拠データ
                            </div>
                        </div>
                    </div>
                </div>
                <div className="callout info">
                    <span className="callout-icon">💡</span>
                    <div className="callout-body">
                        <div className="callout-title">アナリティクスデータの活用方法</div>
                        <p className="callout-text">
                            アナリティクスデータは<strong>デバイスポートフォリオ</strong>の選定に使用します。市場データに基づいて優先度を設定し、テスト実行するデバイスセットを決定します。心拍センサー付きデバイスなど特殊な機能がある場合は、デバイス固有のテストケースを追加設計します。
                        </p>
                    </div>
                </div>
                <h2 className="section-title">1.2 モバイルアプリのビジネスモデル</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-1.2.1 K2</span
                    ><span className="lo-text">モバイルアプリの様々なビジネスモデルを区別できる</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ビジネスモデル</th>
                                <th>概要</th>
                                <th>テスト上の注意点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>🆓 <strong>フリーミアム</strong></td>
                                <td>基本機能は無料、高度な機能は有料</td>
                                <td>無料/有料機能の境界・アップグレードフローをテスト</td>
                            </tr>
                            <tr>
                                <td>📢 <strong>広告ベース</strong></td>
                                <td>アプリ内に広告を表示して収益化</td>
                                <td>広告表示が操作の妨げにならないかのユーザビリティテスト</td>
                            </tr>
                            <tr>
                                <td>💳 <strong>トランザクションベース</strong></td>
                                <td>取引ごとまたは比率で課金</td>
                                <td>決済フロー・金額計算・エラー時のロールバックを徹底テスト</td>
                            </tr>
                            <tr>
                                <td>💰 <strong>フィーベース（有料）</strong></td>
                                <td>ダウンロード時に料金が発生</td>
                                <td>インストール・購入フロー・返金ポリシー対応をテスト</td>
                            </tr>
                            <tr>
                                <td>🏢 <strong>エンタープライズ/無料</strong></td>
                                <td>社内利用・組織サービスへの誘導が目的</td>
                                <td>認証・VPN・MDM連携・セキュリティポリシーをテスト</td>
                            </tr>
                            <tr>
                                <td>🛒 <strong>アプリ内購入（IAP）</strong></td>
                                <td>上記モデルに組み合わせて適用可能</td>
                                <td>ストア課金フロー・消費型/非消費型アイテム区別をテスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 className="section-title">1.3 モバイルデバイスの種類</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-1.3.1 K1</span
                    ><span className="lo-text">モバイルデバイスの異なる種類を想起できる</span>
                </div>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">📟</span>
                        <div className="arch-content">
                            <div className="arch-label">Basic Phone（基本携帯）</div>
                            <div className="arch-desc">
                                通話・SMSのみ。アプリインストール・ブラウジング不可。最低機能のデバイス
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">📲</span>
                        <div className="arch-content">
                            <div className="arch-label">Feature Phone（フィーチャーフォン）</div>
                            <div className="arch-desc">
                                限定的なアプリサポート・ブラウザ・カメラ搭載。アプリインストールに制限あり
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">📱</span>
                        <div className="arch-content">
                            <div className="arch-label">Smartphone（スマートフォン）</div>
                            <div className="arch-desc">
                                多数のセンサー・アプリインストール・マルチメディア・ブラウジング完全対応
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">📲</span>
                        <div className="arch-content">
                            <div className="arch-label">Tablet（タブレット）</div>
                            <div className="arch-desc">
                                スマートフォンより大きな画面・長いバッテリー寿命。UI
                                レイアウトが異なる
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <span className="arch-icon">⌚</span>
                        <div className="arch-content">
                            <div className="arch-label">Companion Device / Wearable</div>
                            <div className="arch-desc">
                                スマートウォッチ・フィットネスバンド・IoTデバイス。スマートフォンと連携
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="section-title">1.4 モバイルアプリの種類</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-1.4.1 K2</span
                    ><span className="lo-text">モバイルアプリの異なる種類を区別できる</span>
                </div>
                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-head">✅ ネイティブアプリ</div>
                        <div className="compare-item">✔️ 最高のパフォーマンス</div>
                        <div className="compare-item">✔️ プラットフォーム機能フル活用</div>
                        <div className="compare-item">✔️ オフライン動作可能</div>
                        <div className="compare-item" style={{color: "var(--neon-red)"}}>
                            ❌ 開発コスト高（プラットフォームごと）
                        </div>
                        <div className="compare-item" style={{color: "var(--neon-red)"}}>
                            ❌ 多数デバイスでのテストが必要
                        </div>
                    </div>
                    <div
                        className="compare-col"
                        style={{background: "rgba(0, 229, 255, 0.05)", borderColor: "rgba(0, 229, 255, 0.2)"}}
                    >
                        <div className="compare-head" style={{color: "var(--neon-cyan)"}}>
                            🌐 ブラウザベースアプリ
                        </div>
                        <div className="compare-item">✔️ マルチプラットフォーム対応が容易</div>
                        <div className="compare-item">✔️ 開発コスト低・インストール不要</div>
                        <div className="compare-item" style={{color: "var(--neon-red)"}}>
                            ❌ 常時接続が必要
                        </div>
                        <div className="compare-item" style={{color: "var(--neon-red)"}}>
                            ❌ センサーAPIへのアクセス限定
                        </div>
                        <div className="compare-item" style={{color: "var(--neon-red)"}}>
                            ❌ ブラウザ互換性テストが必須
                        </div>
                    </div>
                </div>
                <h3 className="sub-title">ブラウザベースアプリの4形態</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">🔗</span>
                        <div className="arch-content">
                            <div className="arch-label">モバイル専用サイト（m-dotサイト）</div>
                            <div className="arch-desc">
                                例: example.com → m.example.com へリダイレクト。専用URLで最適化
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">📐</span>
                        <div className="arch-content">
                            <div className="arch-label">レスポンシブWebアプリ</div>
                            <div className="arch-desc">
                                ビューポートに応じてデザインが自動調整。CSSメディアクエリで実装
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">🎯</span>
                        <div className="arch-content">
                            <div className="arch-label">アダプティブWebアプリ</div>
                            <div className="arch-desc">
                                事前定義のサイズに応じて異なるデザインを提供。機能も調整可能
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">⚡</span>
                        <div className="arch-content">
                            <div className="arch-label">プログレッシブWebアプリ（PWA）</div>
                            <div className="arch-desc">
                                ホーム画面にショートカット作成・ネイティブアプリのような外観・一部オフライン動作
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trend-card">
                    <div className="trend-tag">📦 ハイブリッドアプリ</div>
                    <div className="trend-title">ネイティブ × Webの最適解</div>
                    <p className="trend-desc">
                        ネイティブアプリのラッパー内にWebビューでWebアプリを実行。ストアからダウンロード可能で全デバイス機能にアクセス可能。Cordova/Capacitor/React
                        Native/Flutterなどで実装。パフォーマンスと開発コストのバランスを取る選択肢。オフライン時も利用可能。
                    </p>
                </div>
                <h2 className="section-title">1.5 モバイルアプリのアーキテクチャ</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-1.5.1 K2</span
                    ><span className="lo-text">モバイルアプリのアーキテクチャタイプを区別できる</span>
                </div>
                <h3 className="sub-title">接続モードの3分類（テスト上の重要概念）</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">🔌</span>
                        <div className="arch-content">
                            <div className="arch-label">Never-Connected（非接続型）</div>
                            <div className="arch-desc">
                                常にオフラインで動作。例：電卓、ゲームの一部。ネットワーク依存なし
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">🌐</span>
                        <div className="arch-content">
                            <div className="arch-label">Always-Connected（常時接続型）</div>
                            <div className="arch-desc">
                                永続的なネットワーク接続が必要。すべてのモバイルWebアプリが該当
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">🔄</span>
                        <div className="arch-content">
                            <div className="arch-label">Partially-Connected（部分接続型）</div>
                            <div className="arch-desc">
                                データ転送時のみ接続が必要。長期間オフラインでも動作可能。最も一般的
                            </div>
                        </div>
                    </div>
                </div>
                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-head">Thin Client（シンクライアント）</div>
                        <div className="compare-item">📋 アプリコードが最小限</div>
                        <div className="compare-item">📋 主にブラウザをフロントエンドとして使用</div>
                        <div className="compare-item">📋 クライアントロジックはJavaScriptで実装</div>
                    </div>
                    <div
                        className="compare-col"
                        style={{background: "rgba(180, 79, 255, 0.05)", borderColor: "rgba(180, 79, 255, 0.25)"}}
                    >
                        <div className="compare-head" style={{color: "var(--neon-purple)"}}>
                            Thick/Fat Client（ファットクライアント）
                        </div>
                        <div className="compare-item">📋 多層のアプリコードを保持</div>
                        <div className="compare-item">📋 モバイルOS機能を積極活用</div>
                        <div className="compare-item">📋 ネイティブ・ハイブリッドアプリが該当</div>
                    </div>
                </div>
                <h2 className="section-title">1.6 モバイルアプリのテスト戦略</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-1.6.1 K3</span
                    ><span className="lo-text"
                        >テスト戦略の策定において、モバイル市場の特性と固有の要素を適用できる</span
                    >
                </div>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">📊</span>
                        <div className="arch-content">
                            <div className="arch-label">デバイスポートフォリオの選定</div>
                            <div className="arch-desc">
                                アナリティクスデータに基づき、テスト対象デバイスセットを定義する
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">🏷️</span>
                        <div className="arch-content">
                            <div className="arch-label">ビジネスモデルの考慮</div>
                            <div className="arch-desc">
                                収益モデルに応じた機能テスト（課金フロー・広告表示など）を追加する
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">🔄</span>
                        <div className="arch-content">
                            <div className="arch-label">ライフサイクル全体でのリスク</div>
                            <div className="arch-desc">
                                新しい技術・デバイス・プラットフォームの導入、アップグレードパスの検証
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">🌍</span>
                        <div className="arch-content">
                            <div className="arch-label">ネットワークカバレッジの考慮</div>
                            <div className="arch-desc">
                                グローバルコンテキストでのネットワーク影響と様々な接続速度でのテスト
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="section-title">1.7 モバイルアプリテストの課題</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-1.7.1 K2</span
                    ><span className="lo-text"
                        >モバイルアプリテストに関連する課題の例を示すことができる</span
                    >
                </div>
                <div className="callout danger">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <div className="callout-title">モバイルテストの主要な課題</div>
                        <p className="callout-text">
                            ① デバイスの断片化（数千種類のデバイス）② OSバージョンの多様性 ③
                            画面サイズ・解像度の多様性 ④ ネットワーク接続の不安定性 ⑤
                            バッテリー消費とパフォーマンス ⑥ アプリストア審査プロセス ⑦
                            同時実行される他アプリとの干渉
                        </p>
                    </div>
                </div>
                <h2 className="section-title">1.8 モバイルアプリテストのリスク</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-1.8.1 K2</span
                    ><span className="lo-text"
                        >モバイルアプリ固有のリスクがどのように軽減できるかを説明できる</span
                    >
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>リスク</th>
                                <th>説明</th>
                                <th>軽減策</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>デバイス固有の欠陥</td>
                                <td>特定デバイスでのみ発生するバグ</td>
                                <td>デバイスポートフォリオに基づいた優先テスト</td>
                            </tr>
                            <tr>
                                <td>デバイスの可用性</td>
                                <td>必要なデバイスが社内にない</td>
                                <td>クラウドテストサービス・レンタルラボの活用</td>
                            </tr>
                            <tr>
                                <td>新技術・プラットフォームの登場</td>
                                <td>ライフサイクル中に新しいOSバージョンがリリース</td>
                                <td>プレプロダクションバージョンでの先行テスト</td>
                            </tr>
                            <tr>
                                <td>インストール・アップグレード</td>
                                <td>更新時にデータやプリファレンスが失われる</td>
                                <td>アップグレードパスの専用テスト実施</td>
                            </tr>
                            <tr>
                                <td>ネットワーク・グローバル展開</td>
                                <td>低速・不安定接続下でのアプリ動作</td>
                                <td>様々なネットワーク条件下でのテスト</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <div className="divider"></div>
            {/* CH2 */}
            <section id="ch2">
                <div className="chapter-header">
                    <span className="chapter-num" style={{background: "var(--neon-cyan)", color: "#030712"}}
                        >CH.2</span
                    >
                    <div>
                        <h1 className="chapter-title">モバイルアプリテストタイプ</h1>
                        <div className="chapter-meta">
                            <span className="chapter-badge badge-time">⏱ 265分（最大章）</span
                            ><span className="chapter-badge badge-k1">K1</span
                            ><span className="chapter-badge badge-k2">K2 主体</span>
                        </div>
                    </div>
                </div>
                <h2 className="section-title">2.1 デバイスハードウェア互換性テスト</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-2.1.1 K2</span
                    ><span className="lo-text">デバイス機能テストの目的と内容を説明できる</span>
                </div>
                <p>
                    デバイスの機能はデバイスごとに大きく異なり、同じメーカーの異なるモデル間でも差異があります。これらの機能がアプリの動作に悪影響を及ぼさないかを確認します。
                </p>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">📷</span>
                        <div className="arch-content">
                            <div className="arch-label">カメラ</div>
                            <div className="arch-desc">
                                前面/背面カメラ・解像度・フラッシュ・ARKit/ARCore対応
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">📍</span>
                        <div className="arch-content">
                            <div className="arch-label">GPS・位置情報</div>
                            <div className="arch-desc">
                                精度・高速測位（AGPS）・バックグラウンド位置取得の動作確認
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">💳</span>
                        <div className="arch-content">
                            <div className="arch-label">NFC</div>
                            <div className="arch-desc">
                                モバイル決済・タグ読み取り・P2P通信・NFC無効時のフォールバック
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">📻</span>
                        <div className="arch-content">
                            <div className="arch-label">Bluetooth</div>
                            <div className="arch-desc">
                                BLE（省電力）・Classic Bluetooth・ペアリングフロー・接続断・再接続
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <span className="arch-icon">🔢</span>
                        <div className="arch-content">
                            <div className="arch-label">生体認証センサー</div>
                            <div className="arch-desc">
                                指紋・顔認証・虹彩認証・代替認証（PIN/パスワード）へのフォールバック
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer blue">
                        <span className="arch-icon">❤️</span>
                        <div className="arch-content">
                            <div className="arch-label">ヘルスセンサー</div>
                            <div className="arch-desc">
                                心拍数・血中酸素・加速度計・ジャイロスコープ（デバイス固有機能）
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="sub-title">2.1.2 ディスプレイテスト</h3>
                <div className="compare-grid">
                    <div className="compare-col good">
                        <div className="compare-head">✅ テストすべき内容</div>
                        <div className="compare-item">✔️ 様々な画面サイズでのレイアウト確認</div>
                        <div className="compare-item">✔️ 高DPI/低DPIでの画像品質</div>
                        <div className="compare-item">✔️ OLED/LCD/AMOLEDでの色再現</div>
                        <div className="compare-item">✔️ ノッチ・パンチホール・フォールダブル対応</div>
                        <div className="compare-item">✔️ ダークモード切り替え時の表示</div>
                    </div>
                    <div className="compare-col bad">
                        <div className="compare-head">❌ よくある見落とし</div>
                        <div className="compare-item">❌ フォントスケーリング最大値でのテスト省略</div>
                        <div className="compare-item">❌ ランドスケープモードのUIレイアウト未確認</div>
                        <div className="compare-item">❌ 超高解像度（4K）での画像劣化チェック漏れ</div>
                        <div className="compare-item">❌ 小画面デバイスでのボタン操作性確認省略</div>
                    </div>
                </div>
                <h3 className="sub-title">2.1.7 典型的な割り込みテスト（試験頻出！）</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>割り込みの種類</th>
                                <th>テストシナリオ</th>
                                <th>期待動作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>📞 着信</td>
                                <td>ゲーム中・動画再生中に電話着信</td>
                                <td>状態保持・復帰後に正常再開</td>
                            </tr>
                            <tr>
                                <td>💬 SMS/通知</td>
                                <td>テキスト入力中に通知が来る</td>
                                <td>入力内容が保持される</td>
                            </tr>
                            <tr>
                                <td>🔔 アラーム</td>
                                <td>決済フロー中にアラーム発動</td>
                                <td>決済状態が保持される・二重課金なし</td>
                            </tr>
                            <tr>
                                <td>🔋 バッテリー低下</td>
                                <td>バッテリー残量が10%以下になる</td>
                                <td>適切な警告表示・データ保存</td>
                            </tr>
                            <tr>
                                <td>📡 ネットワーク切断</td>
                                <td>WiFi → モバイル切り替え・圏外</td>
                                <td>エラー処理・オフラインモード移行</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="code-block" data-lang="TEST CASES">
                    <div className="code-line"><span className="code-comment">// 画面向き変更テスト</span></div>
                    <div className="code-line"><span className="code-keyword">test</span>(<span className="code-string">"縦横切り替え時に状態が保持される"</span>, () =&gt; &#123;</div>
                    <div className="code-line">    <span className="code-func">enterText</span>(<span className="code-string">"フォームに入力"</span>)</div>
                    <div className="code-line">    <span className="code-func">rotateDevice</span>(<span className="code-string">"landscape"</span>)</div>
                    <div className="code-line">    <span className="code-func">expect</span>(<span className="code-func">getFormValue</span>()).<span className="code-func">toBe</span>(<span className="code-string">"フォームに入力"</span>)</div>
                    <div className="code-line">    <span className="code-func">expect</span>(<span className="code-func">getScrollPosition</span>()).<span className="code-func">toBePreserved</span>()</div>
                    <div className="code-line">&#125;)</div>
                </div>
                <h3 className="sub-title">2.1.8〜2.1.9 アクセス権限・電力消費テスト</h3>
                <div className="arch-layers">
                    <div className="arch-layer amber">
                        <span className="arch-icon">🔐</span>
                        <div className="arch-content">
                            <div className="arch-label">アクセス権限テスト</div>
                            <div className="arch-desc">
                                許可/拒否の両方でアプリが正しく動作するか。権限を後から変更した場合の動作確認
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <span className="arch-icon">🔋</span>
                        <div className="arch-content">
                            <div className="arch-label">電力消費テスト</div>
                            <div className="arch-desc">
                                バックグラウンド実行時のバッテリードレイン・スリープ/ウェイク状態での動作確認
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="section-title">2.2 デバイスソフトウェアとのアプリ連携テスト</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-2.2.1 K2</span
                    ><span className="lo-text"
                        >デバイスソフトウェアとのアプリ連携テスト項目を説明できる</span
                    >
                </div>
                <div className="code-block" data-lang="NOTIFICATION TEST">
                    <div className="code-line"><span className="code-keyword">const</span> <span className="code-green">notificationTests</span> = &#123;</div>
                    <div className="code-line">    <span className="code-string">"プッシュ通知"</span>: [</div>
                    <div className="code-line">        <span className="code-string">"フォアグラウンド時に通知が表示される"</span>,</div>
                    <div className="code-line">        <span className="code-string">"バックグラウンド時に通知が届く"</span>,</div>
                    <div className="code-line">        <span className="code-string">"アプリ終了時にも通知が届く"</span>,</div>
                    <div className="code-line">        <span className="code-string">"通知タップでアプリの正しい画面が開く"</span>,</div>
                    <div className="code-line">        <span className="code-string">"通知権限を拒否した場合のフォールバック"</span></div>
                    <div className="code-line">    ],</div>
                    <div className="code-line">    <span className="code-string">"バッジカウント"</span>: [</div>
                    <div className="code-line">        <span className="code-string">"未読数がホーム画面アイコンに正しく表示される"</span>,</div>
                    <div className="code-line">        <span className="code-string">"既読後にバッジがクリアされる"</span></div>
                    <div className="code-line">    ]</div>
                    <div className="code-line">&#125;</div>
                </div>
                <h3 className="sub-title">2.2.3 OSユーザー設定テスト</h3>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">🔤</span>
                        <div className="arch-content">
                            <div className="arch-label">フォントサイズ設定</div>
                            <div className="arch-desc">
                                OS設定の「大きな文字」でアプリのレイアウトが崩れないかを確認
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">🌍</span>
                        <div className="arch-content">
                            <div className="arch-label">言語・地域設定</div>
                            <div className="arch-desc">
                                日付形式・通貨・数値フォーマットがOS設定に連動するかを確認
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">🌙</span>
                        <div className="arch-content">
                            <div className="arch-label">ダークモード/テーマ</div>
                            <div className="arch-desc">
                                OSのダークモード切り替え時にアプリが適切にスタイルを変更するか
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">♿</span>
                        <div className="arch-content">
                            <div className="arch-label">アクセシビリティ設定</div>
                            <div className="arch-desc">
                                VoiceOver/TalkBack・反転色・透明度低下・モノオーディオ設定との互換性
                            </div>
                        </div>
                    </div>
                </div>
                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <div className="callout-title">OSバージョン間の相互運用性テスト</div>
                        <p className="callout-text">
                            異なるOSバージョン（iOS 15〜18 / Android
                            12〜15）での動作確認が必要です。特に<strong>非推奨APIの使用</strong>や<strong>新しいプライバシーポリシー</strong>への対応は最新OSバージョンでのテストが重要です。
                        </p>
                    </div>
                </div>
                <h2 className="section-title">2.3 各種接続方式のテスト</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>接続方式</th>
                                <th>テストシナリオ</th>
                                <th>重点確認項目</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>📶 2G/3G</td>
                                <td>低速接続での動作</td>
                                <td>タイムアウト処理・ローディング表示・データ節約</td>
                            </tr>
                            <tr>
                                <td>📶 4G/LTE</td>
                                <td>標準的なモバイル接続</td>
                                <td>ストリーミング品質・リアルタイム通信</td>
                            </tr>
                            <tr>
                                <td>🚀 5G</td>
                                <td>超高速・低遅延接続</td>
                                <td>高帯域アプリの品質・NR対応機能</td>
                            </tr>
                            <tr>
                                <td>📡 WiFi</td>
                                <td>安定した接続環境</td>
                                <td>WiFi → モバイルデータの切り替え処理</td>
                            </tr>
                            <tr>
                                <td>🔵 Bluetooth</td>
                                <td>近距離無線通信</td>
                                <td>ペアリング・接続断・再接続フロー</td>
                            </tr>
                            <tr>
                                <td>💳 NFC</td>
                                <td>非接触通信（決済・タグ）</td>
                                <td>NFC無効化時のフォールバック・距離の影響</td>
                            </tr>
                            <tr>
                                <td>❌ オフライン</td>
                                <td>完全な接続断</td>
                                <td>適切なエラーメッセージ・ローカルキャッシュ・同期処理</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="code-block" data-lang="NETWORK SIMULATION">
                    <div className="code-line"><span className="code-comment"># ネットワーク制限テスト（Android ADB使用例）</span></div>
                    <div className="code-line">$ adb shell <span className="code-string">"tc qdisc add dev rmnet0 root tbf rate 1000kbit burst 10kbit latency 50ms"</span></div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-comment"># iOS: Network Link Conditioner (Xcode Instruments)</span></div>
                    <div className="code-line"><span className="code-comment"># Settings &gt; Developer &gt; Network Link Conditioner</span></div>
                    <div className="code-line"><span className="code-green">Profiles:</span> [<span className="code-string">"3G"</span>, <span className="code-string">"Edge"</span>, <span className="code-string">"WiFi"</span>, <span className="code-string">"100% Loss"</span>, <span className="code-string">"Very Bad Network"</span>]</div>
                </div>
            </section>
            <div className="divider"></div>
            {/* CH3 */}
            <section id="ch3">
                <div className="chapter-header">
                    <span className="chapter-num" style={{background: "var(--neon-purple)", color: "#030712"}}
                        >CH.3</span
                    >
                    <div>
                        <h1 className="chapter-title">共通テストタイプとテストプロセス</h1>
                        <div className="chapter-meta">
                            <span className="chapter-badge badge-time">⏱ 200分</span
                            ><span className="chapter-badge badge-k2">K2 主体</span
                            ><span className="chapter-badge badge-k3">K3 あり</span>
                        </div>
                    </div>
                </div>
                <h2 className="section-title">3.1 インストール可能性テスト</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-3.1.1 K2</span
                    ><span className="lo-text"
                        >インストール可能性テストの目的・手順・モバイル固有の考慮点を説明できる</span
                    >
                </div>
                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">クリーンインストール</div>
                            <div className="step-desc">
                                初回インストール・起動確認。ストア経由・サイドロード両方を確認
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">アップデートインストール</div>
                            <div className="step-desc">
                                旧バージョンからの更新。ユーザーデータ・設定・認証情報の保持を確認
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">アンインストール</div>
                            <div className="step-desc">
                                アプリが完全に削除されるか。残留ファイル・キャッシュがないか確認
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">ダウングレード</div>
                            <div className="step-desc">
                                旧バージョンへの戻し（必要な場合）。データスキーマの後方互換性確認
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">デバイス間移行</div>
                            <div className="step-desc">
                                クラウドバックアップから新デバイスへの復元。データ整合性の確認
                            </div>
                        </div>
                    </li>
                </ul>

                <h2 className="section-title">3.2 セキュリティテスト（OWASP Mobile Top 10 2024）</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-3.1.3 K2</span
                    ><span className="lo-text">モバイルアプリのセキュリティテスト観点を説明できる</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>OWASP ID</th>
                                <th>リスク名</th>
                                <th>テスト方法</th>
                                <th>対策</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>M1</td>
                                <td>認証情報の不適切な使用</td>
                                <td>MobSF静的解析でハードコード検出</td>
                                <td>Android Keystore / iOS Secure Enclave</td>
                            </tr>
                            <tr>
                                <td>M3</td>
                                <td>不安全な認証・認可</td>
                                <td>FridaでMFAバイパステスト</td>
                                <td>多要素認証・適切なセッション管理</td>
                            </tr>
                            <tr>
                                <td>M5</td>
                                <td>安全でない通信</td>
                                <td>Burp SuiteでMITMシミュレーション</td>
                                <td>TLS 1.3・証明書ピンニング実装</td>
                            </tr>
                            <tr>
                                <td>M9</td>
                                <td>安全でないデータ保管</td>
                                <td>adb shell でDBファイル検査</td>
                                <td>AES-256暗号化・EncryptedSharedPreferences</td>
                            </tr>
                            <tr>
                                <td>M10</td>
                                <td>暗号化の不足</td>
                                <td>静的解析で暗号化アルゴリズム確認</td>
                                <td>強固な暗号スイート使用</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="code-block" data-lang="SECURITY / ANDROID">
                    <div className="code-line"><span className="code-comment">// EncryptedSharedPreferences の実装（Kotlin）</span></div>
                    <div className="code-line"><span className="code-keyword">val</span> <span className="code-green">encryptedPrefs</span> = EncryptedSharedPreferences.<span className="code-func">create</span>(</div>
                    <div className="code-line">    context,</div>
                    <div className="code-line">    <span className="code-string">"secure_prefs"</span>,</div>
                    <div className="code-line">    MasterKey.Builder(context).<span className="code-func">setKeyScheme</span>(MasterKey.KeyScheme.AES256_GCM).<span className="code-func">build</span>(),</div>
                    <div className="code-line">    EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,</div>
                    <div className="code-line">    EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM</div>
                    <div className="code-line">)</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-comment">// ✅ 良い例: 暗号化して保存</span></div>
                    <div className="code-line">encryptedPrefs.edit().<span className="code-func">putString</span>(<span className="code-string">"token"</span>, authToken).<span className="code-func">apply</span>()</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-comment">// ❌ 悪い例: 平文で保存（絶対禁止！）</span></div>
                    <div className="code-line"><span className="code-comment">// sharedPrefs.edit().putString("password", rawPassword).apply()</span></div>
                </div>

                <h2 className="section-title">3.3 パフォーマンステスト</h2>
                <div className="metric-grid">
                    <div className="metric-card">
                        <div className="metric-val">&lt;3s</div>
                        <div className="metric-label">コールドスタート目標</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">&lt;1s</div>
                        <div className="metric-label">ウォームスタート目標</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">60fps</div>
                        <div className="metric-label">UIスムーズ基準</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">&lt;2s</div>
                        <div className="metric-label">API応答目標</div>
                    </div>
                </div>

                <h2 className="section-title">3.4 経験ベーステスト技法（SFDPOT）</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-3.3.1 K3</span
                    ><span className="lo-text">経験ベーステスト技法をモバイルアプリに適用できる</span>
                </div>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">🏗️</span>
                        <div className="arch-content">
                            <div className="arch-label">S - Structure（構造）</div>
                            <div className="arch-desc">
                                画面遷移・ナビゲーション・情報アーキテクチャのテスト
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">⚙️</span>
                        <div className="arch-content">
                            <div className="arch-label">F - Function（機能）</div>
                            <div className="arch-desc">各機能が仕様通りに動作するかの機能テスト</div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">📊</span>
                        <div className="arch-content">
                            <div className="arch-label">D - Data（データ）</div>
                            <div className="arch-desc">
                                データの入出力・境界値・フォーマット・文字コードのテスト
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">🌍</span>
                        <div className="arch-content">
                            <div className="arch-label">P - Platform（プラットフォーム）</div>
                            <div className="arch-desc">
                                OS・デバイス・ブラウザの各組み合わせでの動作確認
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <span className="arch-icon">⏳</span>
                        <div className="arch-content">
                            <div className="arch-label">O - Operations（操作）</div>
                            <div className="arch-desc">
                                時間・割り込み・バックグラウンド/フォアグラウンド切り替え
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer blue">
                        <span className="arch-icon">⏰</span>
                        <div className="arch-content">
                            <div className="arch-label">T - Time（時間）</div>
                            <div className="arch-desc">
                                タイムゾーン・サマータイム・時刻に依存する機能のテスト
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="sub-title">セッションベーステスト管理（SBTM）</h3>
                <div className="code-block" data-lang="SESSION SHEET">
                    <div className="code-line"><span className="code-green">Session</span>: &#123;</div>
                    <div className="code-line">    charter: <span className="code-string">"ログイン画面のエラーハンドリングを探索する"</span>,</div>
                    <div className="code-line">    tester: <span className="code-string">"田中テスター"</span>,</div>
                    <div className="code-line">    date: <span className="code-string">"2025-05-01"</span>,</div>
                    <div className="code-line">    device: <span className="code-string">"iPhone 16 Pro, iOS 18.4, WiFi環境"</span>,</div>
                    <div className="code-line">    timeAllocation: &#123;</div>
                    <div className="code-line">        testing: <span className="code-string">"45分 (75%)"</span>,</div>
                    <div className="code-line">        bugInvestigation: <span className="code-string">"10分"</span>,</div>
                    <div className="code-line">        setup: <span className="code-string">"5分"</span></div>
                    <div className="code-line">    &#125;,</div>
                    <div className="code-line">    bugsFound: [</div>
                    <div className="code-line">        <span className="code-string">"5回ログイン失敗時のアカウントロック通知が表示されない"</span>,</div>
                    <div className="code-line">        <span className="code-string">"パスワードのペーストが特定の入力欄で無効になっている"</span></div>
                    <div className="code-line">    ],</div>
                    <div className="code-line">    nextCharter: <span className="code-string">"ソーシャルログインフローの探索"</span></div>
                    <div className="code-line">&#125;</div>
                </div>

                <h2 className="section-title">3.5 モバイルテストプロセス（ISTQB準拠）</h2>
                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">テスト計画策定</div>
                            <div className="step-desc">
                                デバイスポートフォリオ・環境（実機/エミュレータ）・スケジュール・リスク分析
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">テスト分析・設計</div>
                            <div className="step-desc">
                                テスト条件の導出・テストケース設計・デバイス×OSバージョン組み合わせマトリクス作成
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">テスト実装</div>
                            <div className="step-desc">
                                テストスクリプト作成・テストデータ準備・実機/エミュレータ設定・自動化スクリプト実装
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">テスト実行</div>
                            <div className="step-desc">
                                手動テスト・自動テスト実行・欠陥報告・再テスト・回帰テスト
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <div className="step-title">テスト完了</div>
                            <div className="step-desc">
                                テストレポート作成・欠陥サマリー・教訓の文書化・アプリストア提出前の最終確認
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <div className="divider"></div>
            {/* CH4 */}
            <section id="ch4">
                <div className="chapter-header">
                    <span className="chapter-num" style={{background: "var(--neon-amber)", color: "#030712"}}
                        >CH.4</span
                    >
                    <div>
                        <h1 className="chapter-title">プラットフォーム・ツール・テスト環境</h1>
                        <div className="chapter-meta">
                            <span className="chapter-badge badge-time">⏱ 80分</span
                            ><span className="chapter-badge badge-k1">K1</span
                            ><span className="chapter-badge badge-k2">K2 主体</span>
                        </div>
                    </div>
                </div>

                <h2 className="section-title">4.1 モバイルアプリ開発プラットフォーム</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-4.1.1 K1</span
                    ><span className="lo-text"
                        >主要なモバイルアプリ開発プラットフォームとテストツールを認識できる</span
                    >
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>プラットフォーム</th>
                                <th>言語</th>
                                <th>テストツール</th>
                                <th>対象デバイス</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>🍎 iOS (Apple)</td>
                                <td>Swift / Objective-C</td>
                                <td>XCTest, XCUITest, Instruments</td>
                                <td>iPhone / iPad / Watch / TV</td>
                            </tr>
                            <tr>
                                <td>🤖 Android (Google)</td>
                                <td>Kotlin / Java</td>
                                <td>Espresso, UIAutomator2, Android Studio Profiler</td>
                                <td>スマートフォン・タブレット・Watch・TV</td>
                            </tr>
                            <tr>
                                <td>⚛️ React Native</td>
                                <td>JavaScript/TypeScript</td>
                                <td>Detox, Jest, Appium</td>
                                <td>iOS + Android（クロスプラットフォーム）</td>
                            </tr>
                            <tr>
                                <td>🐦 Flutter (Google)</td>
                                <td>Dart</td>
                                <td>flutter_test, integration_test</td>
                                <td>iOS + Android + Web + Desktop</td>
                            </tr>
                            <tr>
                                <td>🔷 Xamarin (Microsoft)</td>
                                <td>C#</td>
                                <td>Xamarin.UITest, NUnit</td>
                                <td>iOS + Android</td>
                            </tr>
                            <tr>
                                <td>📱 Ionic/Cordova</td>
                                <td>HTML/CSS/JavaScript</td>
                                <td>Appium, Cypress Mobile</td>
                                <td>iOS + Android（ハイブリッド）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="section-title">4.2 共通開発プラットフォームツール</h2>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">🔧</span>
                        <div className="arch-content">
                            <div className="arch-label">ADB（Android Debug Bridge）</div>
                            <div className="arch-desc">
                                Androidデバイスとの通信ツール。アプリインストール・ログ取得・シェルコマンド実行に必須
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">🔍</span>
                        <div className="arch-content">
                            <div className="arch-label">Logcat / Console</div>
                            <div className="arch-desc">
                                リアルタイムログ監視。クラッシュ・エラー・警告の確認に必須。フィルタリング機能で絞り込み可能
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">🌐</span>
                        <div className="arch-content">
                            <div className="arch-label">プロキシツール（Charles / Burp Suite）</div>
                            <div className="arch-desc">
                                HTTPSトラフィックの傍受・分析。APIテスト・セキュリティテストに活用。MITMシミュレーション
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">📊</span>
                        <div className="arch-content">
                            <div className="arch-label">パフォーマンス計測ツール</div>
                            <div className="arch-desc">
                                Instruments (iOS) / Android Profiler:
                                CPU・メモリ・バッテリー・ネットワーク使用量の計測・可視化
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <span className="arch-icon">🗑️</span>
                        <div className="arch-content">
                            <div className="arch-label">クラッシュレポートツール</div>
                            <div className="arch-desc">
                                Firebase Crashlytics / Sentry:
                                本番クラッシュの自動収集・スタックトレース分析・アラート通知
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="section-title">4.3 エミュレータとシミュレータの違い（試験頻出！）</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-4.3.1 K2</span
                    ><span className="lo-text"
                        >エミュレータとシミュレータの違い・メリット・制限を区別できる</span
                    >
                </div>
                <div className="compare-grid">
                    <div
                        className="compare-col"
                        style={{background: "rgba(0, 229, 255, 0.05)", borderColor: "rgba(0, 229, 255, 0.25)"}}
                    >
                        <div className="compare-head" style={{color: "var(--neon-cyan)"}}>
                            🖥️ エミュレータ（Emulator）
                        </div>
                        <div className="compare-item">
                            📋 実際のハードウェアを<strong>完全に模倣</strong>
                        </div>
                        <div className="compare-item">📋 主に Android 開発で使用</div>
                        <div className="compare-item">📋 CPU・メモリ使用量が大きい</div>
                        <div className="compare-item">📋 ホストOSと異なるゲストOSを実行</div>
                        <div className="compare-item" style={{color: "var(--neon-green)"}}>
                            ✔️ ネイティブに近い動作精度
                        </div>
                    </div>
                    <div
                        className="compare-col"
                        style={{background: "rgba(0, 255, 136, 0.05)", borderColor: "rgba(0, 255, 136, 0.25)"}}
                    >
                        <div className="compare-head" style={{color: "var(--neon-green)"}}>
                            💻 シミュレータ（Simulator）
                        </div>
                        <div className="compare-item">
                            📋 ソフトウェアの動作環境を<strong>模擬</strong>
                        </div>
                        <div className="compare-item">📋 主に iOS 開発（Xcode Simulator）</div>
                        <div className="compare-item">📋 軽量・高速起動</div>
                        <div className="compare-item">📋 ホストOSと同じ環境で実行</div>
                        <div className="compare-item" style={{color: "var(--neon-red)"}}>
                            ❌ ハードウェアセンサーの模倣が不完全
                        </div>
                    </div>
                </div>
                <div className="callout warning">
                    <span className="callout-icon">⚠️</span>
                    <div className="callout-body">
                        <div className="callout-title">エミュレータ/シミュレータの限界</div>
                        <p className="callout-text">
                            GPS精度・カメラ品質・センサー応答・バッテリー消費・熱スロットリングは<strong>実機でのみ正確にテストできます</strong>。リリース前には必ず実機でのテストを実施してください。クラウドデバイスファームを活用することで多数の実機に低コストでアクセスできます。
                        </p>
                    </div>
                </div>

                <h2 className="section-title">4.4 クラウドデバイスファームの活用</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>サービス</th>
                                <th>実機数</th>
                                <th>特徴</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>☁️ Firebase Test Lab</td>
                                <td>多数の実機</td>
                                <td>Google公式・Roboテスト自動実行・Firebase統合</td>
                            </tr>
                            <tr>
                                <td>☁️ AWS Device Farm</td>
                                <td>250種類以上</td>
                                <td>AWS統合・複数フレームワーク対応・詳細レポート</td>
                            </tr>
                            <tr>
                                <td>☁️ BrowserStack</td>
                                <td>3000種類以上</td>
                                <td>最大規模・ライブデバッグ可能・豊富なOS/デバイス</td>
                            </tr>
                            <tr>
                                <td>☁️ Sauce Labs</td>
                                <td>800種類以上</td>
                                <td>エンタープライズ向け・詳細な分析・CI/CD統合</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="section-title">4.5 テストラボ構築ステップ</h2>
                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">デバイスポートフォリオの決定</div>
                            <div className="step-desc">
                                市場データ（StatCounter・Firebase・自社アナリティクス）に基づき、テストラボに揃えるデバイスを選定する
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">実機 vs エミュレータの分担</div>
                            <div className="step-desc">
                                自動化・回帰テストはエミュレータ/クラウド。機能確認・UXは一部実機。アプリストア提出前は必ず実機確認
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">クラウドテストサービスの選定</div>
                            <div className="step-desc">
                                AWS Device Farm / Firebase Test Lab / BrowserStack
                                で多数の実機をクラウド上でテスト。コストと品質のバランスを検討
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <div className="step-title">デバイス管理（MDM）体制の整備</div>
                            <div className="step-desc">
                                充電管理・OSアップデート管理・セキュリティポリシー（MDM）・デバイスの定期的な入れ替え計画を策定する
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <div className="divider"></div>
            {/* CH5 */}
            <section id="ch5">
                <div className="chapter-header">
                    <span className="chapter-num" style={{background: "var(--neon-red)", color: "#fff"}}
                        >CH.5</span
                    >
                    <div>
                        <h1 className="chapter-title">テスト実行の自動化</h1>
                        <div className="chapter-meta">
                            <span className="chapter-badge badge-time">⏱ 55分</span
                            ><span className="chapter-badge badge-k2">K2</span
                            ><span className="chapter-badge badge-k3">K3 あり</span>
                        </div>
                    </div>
                </div>

                <h2 className="section-title">5.1 自動化アプローチとテストピラミッド</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-5.1.1 K2</span
                    ><span className="lo-text"
                        >モバイルテスト自動化の様々なアプローチの適切な使用例を説明できる</span
                    >
                </div>
                <div className="pyramid">
                    <div className="pyramid-level">
                        E2E テスト <span className="pyramid-label">(少 / 遅い / 高コスト)</span>
                    </div>
                    <div className="pyramid-level">
                        統合テスト / API テスト <span className="pyramid-label">(中)</span>
                    </div>
                    <div className="pyramid-level">
                        UI コンポーネントテスト <span className="pyramid-label">(中)</span>
                    </div>
                    <div className="pyramid-level">
                        ユニットテスト <span className="pyramid-label">(多 / 速い / 低コスト)</span>
                    </div>
                </div>
                <div className="callout info">
                    <span className="callout-icon">💡</span>
                    <div className="callout-body">
                        <div className="callout-title">モバイル自動化ピラミッドの考え方</div>
                        <p className="callout-text">
                            ユニットテストが最も多く・速く・安定しています。E2Eテストは高コスト・低速・フレイキーになりやすいため、最重要シナリオのみ自動化します。<strong
                                >70% ユニット / 20% 統合 / 10% E2E</strong
                            >
                            の比率が推奨されます。モバイルE2Eは実機 vs
                            エミュレータのトレードオフを考慮して設計します。
                        </p>
                    </div>
                </div>

                <h2 className="section-title">5.2 自動化手法（6種類）</h2>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>手法</th>
                                <th>説明</th>
                                <th>ツール例</th>
                                <th>向いているケース</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>🎬 キャプチャ&amp;再生</td>
                                <td>手動操作を記録し再生。低スキルで開始可能</td>
                                <td>Squish, TestComplete</td>
                                <td>PoC・短期プロジェクト</td>
                            </tr>
                            <tr>
                                <td>📝 スクリプトベース</td>
                                <td>コードでテストを記述。柔軟性・メンテナンス性が高い</td>
                                <td>Appium, Espresso</td>
                                <td>長期・大規模プロジェクト</td>
                            </tr>
                            <tr>
                                <td>📊 データ駆動</td>
                                <td>テストデータを外部ファイルから読み込み多パターンをテスト</td>
                                <td>Appium + CSV</td>
                                <td>境界値・大量データ検証</td>
                            </tr>
                            <tr>
                                <td>🔑 キーワード駆動</td>
                                <td>
                                    テスト操作をキーワードとして定義。非エンジニアでもメンテ可能
                                </td>
                                <td>Robot Framework</td>
                                <td>BizDevOps・混成チーム</td>
                            </tr>
                            <tr>
                                <td>🤝 BDD</td>
                                <td>自然言語でシナリオを記述。ビジネス側との認識統一</td>
                                <td>Cucumber + Appium</td>
                                <td>受入テスト・ドキュメント兼用</td>
                            </tr>
                            <tr>
                                <td>🎨 ページオブジェクトモデル</td>
                                <td>画面ごとのクラスでUI要素を管理。変更時の修正箇所を最小化</td>
                                <td>Appium + POM</td>
                                <td>UI変更が多いアプリ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="sub-title">✅ Appium 実装例（Python）</h3>
                <div className="code-block" data-lang="PYTHON / APPIUM">
                    <div className="code-line"><span className="code-keyword">from</span> <span className="code-func">appium</span> <span className="code-keyword">import</span> webdriver</div>
                    <div className="code-line"><span className="code-keyword">from</span> <span className="code-func">appium.webdriver.common.appiumby</span> <span className="code-keyword">import</span> AppiumBy</div>
                    <div className="code-line"><span className="code-keyword">import</span> unittest</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-keyword">class</span> <span className="code-green">LoginTest</span>(unittest.TestCase):</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">setUp</span>(self):</div>
                    <div className="code-line">        caps = &#123;</div>
                    <div className="code-line">            <span className="code-string">"platformName"</span>: <span className="code-string">"Android"</span>,</div>
                    <div className="code-line">            <span className="code-string">"deviceName"</span>: <span className="code-string">"Pixel_7_API_34"</span>,</div>
                    <div className="code-line">            <span className="code-string">"app"</span>: <span className="code-string">"/path/to/app.apk"</span>,</div>
                    <div className="code-line">            <span className="code-string">"automationName"</span>: <span className="code-string">"UiAutomator2"</span>,</div>
                    <div className="code-line">        &#125;</div>
                    <div className="code-line">        self.driver = webdriver.<span className="code-func">Remote</span>(<span className="code-string">"http://localhost:4723"</span>, caps)</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">test_login_with_valid_credentials</span>(self):</div>
                    <div className="code-line">        self.driver.<span className="code-func">find_element</span>(AppiumBy.ACCESSIBILITY_ID, <span className="code-string">"email_input"</span>)\</div>
                    <div className="code-line">            .<span className="code-func">send_keys</span>(<span className="code-string">"test@example.com"</span>)</div>
                    <div className="code-line">        self.driver.<span className="code-func">find_element</span>(AppiumBy.ACCESSIBILITY_ID, <span className="code-string">"password_input"</span>)\</div>
                    <div className="code-line">            .<span className="code-func">send_keys</span>(<span className="code-string">"SecurePass123!"</span>)</div>
                    <div className="code-line">        self.driver.<span className="code-func">find_element</span>(AppiumBy.ACCESSIBILITY_ID, <span className="code-string">"login_button"</span>).<span className="code-func">click</span>()</div>
                    <div className="code-line">        home = self.driver.<span className="code-func">find_element</span>(AppiumBy.XPATH, <span className="code-string">"//*[@resource-id='home_screen']"</span>)</div>
                    <div className="code-line">        self.<span className="code-func">assertTrue</span>(home.<span className="code-func">is_displayed</span>())</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">tearDown</span>(self):</div>
                    <div className="code-line">        self.driver.<span className="code-func">quit</span>()</div>
                </div>

                <h3 className="sub-title">✅ Espresso 実装例（Android / Kotlin）</h3>
                <div className="code-block" data-lang="KOTLIN / ESPRESSO">
                    <div className="code-line"><span className="code-keyword">@RunWith</span>(AndroidJUnit4::<span className="code-keyword">class</span>)</div>
                    <div className="code-line"><span className="code-keyword">class</span> <span className="code-green">LoginActivityTest</span> &#123;</div>
                    <div className="code-line">    <span className="code-keyword">@get:Rule</span></div>
                    <div className="code-line">    <span className="code-keyword">val</span> activityRule = ActivityScenarioRule(LoginActivity::<span className="code-keyword">class</span>.java)</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">@Test</span></div>
                    <div className="code-line">    <span className="code-keyword">fun</span> <span className="code-func">testSuccessfulLogin</span>() &#123;</div>
                    <div className="code-line">        <span className="code-func">onView</span>(<span className="code-func">withId</span>(R.id.editUsername))</div>
                    <div className="code-line">            .<span className="code-func">perform</span>(<span className="code-func">typeText</span>(<span className="code-string">"testuser"</span>), <span className="code-func">closeSoftKeyboard</span>())</div>
                    <div className="code-line">        <span className="code-func">onView</span>(<span className="code-func">withId</span>(R.id.editPassword))</div>
                    <div className="code-line">            .<span className="code-func">perform</span>(<span className="code-func">typeText</span>(<span className="code-string">"password123"</span>), <span className="code-func">closeSoftKeyboard</span>())</div>
                    <div className="code-line">        <span className="code-func">onView</span>(<span className="code-func">withId</span>(R.id.btnLogin)).<span className="code-func">perform</span>(<span className="code-func">click</span>())</div>
                    <div className="code-line">        <span className="code-func">onView</span>(<span className="code-func">withId</span>(R.id.tvWelcome)).<span className="code-func">check</span>(<span className="code-func">matches</span>(<span className="code-func">isDisplayed</span>()))</div>
                    <div className="code-line">    &#125;</div>
                    <div className="code-line">&#125;</div>
                </div>

                <h3 className="sub-title">✅ XCUITest 実装例（iOS / Swift）</h3>
                <div className="code-block" data-lang="SWIFT / XCUITEST">
                    <div className="code-line"><span className="code-keyword">import</span> XCTest</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-keyword">class</span> <span className="code-green">LoginUITests</span>: XCTestCase &#123;</div>
                    <div className="code-line">    <span className="code-keyword">var</span> app: XCUIApplication!</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">override func</span> <span className="code-func">setUpWithError</span>() <span className="code-keyword">throws</span> &#123;</div>
                    <div className="code-line">        continueAfterFailure = <span className="code-keyword">false</span></div>
                    <div className="code-line">        app = XCUIApplication()</div>
                    <div className="code-line">        app.<span className="code-func">launch</span>()</div>
                    <div className="code-line">    &#125;</div>
                    <div className="code-line"></div>
                    <div className="code-line">    <span className="code-keyword">func</span> <span className="code-func">testSuccessfulLogin</span>() <span className="code-keyword">throws</span> &#123;</div>
                    <div className="code-line">        <span className="code-keyword">let</span> email = app.textFields[<span className="code-string">"usernameField"</span>]</div>
                    <div className="code-line">        email.<span className="code-func">tap</span>()</div>
                    <div className="code-line">        email.<span className="code-func">typeText</span>(<span className="code-string">"testuser@example.com"</span>)</div>
                    <div className="code-line"></div>
                    <div className="code-line">        <span className="code-keyword">let</span> pw = app.secureTextFields[<span className="code-string">"passwordField"</span>]</div>
                    <div className="code-line">        pw.<span className="code-func">tap</span>()</div>
                    <div className="code-line">        pw.<span className="code-func">typeText</span>(<span className="code-string">"password123"</span>)</div>
                    <div className="code-line"></div>
                    <div className="code-line">        app.buttons[<span className="code-string">"loginButton"</span>].<span className="code-func">tap</span>()</div>
                    <div className="code-line">        XCTAssertTrue(app.staticTexts[<span className="code-string">"welcomeLabel"</span>].exists)</div>
                    <div className="code-line">    &#125;</div>
                    <div className="code-line">&#125;</div>
                </div>

                <h2 className="section-title">5.3 自動化ツールの評価基準（MAT-5.3.1 K3）</h2>
                <div className="lo-box">
                    <span className="lo-tag">MAT-5.3.1 K3</span
                    ><span className="lo-text">モバイルアプリテスト自動化ツールを評価できる</span>
                </div>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>フレームワーク</th>
                                <th>プラットフォーム</th>
                                <th>言語</th>
                                <th>特徴</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>🤖 <strong>Appium</strong></td>
                                <td>iOS / Android / Web</td>
                                <td>Java / Python / JS / C#</td>
                                <td>オープンソース・最も広く使われる・WebDriverプロトコル準拠</td>
                            </tr>
                            <tr>
                                <td>🍎 <strong>XCUITest</strong></td>
                                <td>iOS のみ</td>
                                <td>Swift / Objective-C</td>
                                <td>Apple公式・高速・Xcode統合・iOS最適</td>
                            </tr>
                            <tr>
                                <td>🤖 <strong>Espresso</strong></td>
                                <td>Android のみ</td>
                                <td>Java / Kotlin</td>
                                <td>Google公式・Android Studio統合・高速・安定</td>
                            </tr>
                            <tr>
                                <td>🚀 <strong>Detox</strong></td>
                                <td>iOS / Android</td>
                                <td>JavaScript</td>
                                <td>React Native推奨・グレーボックス・高速</td>
                            </tr>
                            <tr>
                                <td>🎵 <strong>Maestro</strong></td>
                                <td>iOS / Android</td>
                                <td>YAML DSL</td>
                                <td>シンプルなYAML記述・ノーコード寄り・2024年注目</td>
                            </tr>
                            <tr>
                                <td>☁️ <strong>Firebase Test Lab</strong></td>
                                <td>Android / iOS</td>
                                <td>任意</td>
                                <td>Google実機クラウド・Roboテスト自動実行</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="arch-layers">
                    <div className="arch-layer green">
                        <span className="arch-icon">🎯</span>
                        <div className="arch-content">
                            <div className="arch-label">SUT適合性</div>
                            <div className="arch-desc">
                                テスト対象のプラットフォーム（iOS/Android）・アプリタイプ（Native/Hybrid）と一致しているか
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <span className="arch-icon">📚</span>
                        <div className="arch-content">
                            <div className="arch-label">学習コスト</div>
                            <div className="arch-desc">
                                チームのスキルセットに合っているか・学習リソースが豊富か・既存コードベースとの親和性
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <span className="arch-icon">🔗</span>
                        <div className="arch-content">
                            <div className="arch-label">CI/CD統合</div>
                            <div className="arch-desc">
                                GitHub Actions / Jenkins / GitLab CI / Bitrise と連携できるか
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <span className="arch-icon">💰</span>
                        <div className="arch-content">
                            <div className="arch-label">コスト（TCO）</div>
                            <div className="arch-desc">
                                ライセンス費用・インフラコスト・クラウドデバイス利用コストを含めた総所有コスト
                            </div>
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <span className="arch-icon">📈</span>
                        <div className="arch-content">
                            <div className="arch-label">スケーラビリティ</div>
                            <div className="arch-desc">
                                テスト数の増加・デバイスの追加・チームの拡大に対応できるか
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="section-title">5.4 CI/CDパイプライン統合例</h2>
                <div className="code-block" data-lang="YAML / GITHUB ACTIONS">
                    <div className="code-line"><span className="code-comment"># .github/workflows/mobile-test.yml</span></div>
                    <div className="code-line"><span className="code-green">name</span>: Mobile Automated Tests</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-keyword">on</span>:</div>
                    <div className="code-line">  <span className="code-green">push</span>:</div>
                    <div className="code-line">    <span className="code-green">branches</span>: [main, develop]</div>
                    <div className="code-line">  <span className="code-green">pull_request</span>:</div>
                    <div className="code-line">    <span className="code-green">branches</span>: [main]</div>
                    <div className="code-line"></div>
                    <div className="code-line"><span className="code-keyword">jobs</span>:</div>
                    <div className="code-line">  <span className="code-green">unit-tests</span>:</div>
                    <div className="code-line">    <span className="code-green">runs-on</span>: ubuntu-latest</div>
                    <div className="code-line">    <span className="code-keyword">steps</span>:</div>
                    <div className="code-line">      - <span className="code-green">uses</span>: actions/checkout@v4</div>
                    <div className="code-line">      - <span className="code-green">name</span>: Run Android Unit Tests</div>
                    <div className="code-line">        <span className="code-green">run</span>: <span className="code-string">./gradlew testDebugUnitTest</span></div>
                    <div className="code-line"></div>
                    <div className="code-line">  <span className="code-green">firebase-e2e</span>:</div>
                    <div className="code-line">    <span className="code-green">needs</span>: unit-tests</div>
                    <div className="code-line">    <span className="code-green">runs-on</span>: ubuntu-latest</div>
                    <div className="code-line">    <span className="code-keyword">steps</span>:</div>
                    <div className="code-line">      - <span className="code-green">uses</span>: actions/checkout@v4</div>
                    <div className="code-line">      - <span className="code-green">name</span>: Build APKs</div>
                    <div className="code-line">        <span className="code-green">run</span>: ./gradlew assembleDebug assembleAndroidTest</div>
                    <div className="code-line">      - <span className="code-green">name</span>: Run on Firebase Test Lab</div>
                    <div className="code-line">        <span className="code-green">run</span>: |</div>
                    <div className="code-line">          gcloud firebase test android run \</div>
                    <div className="code-line">            --type instrumentation \</div>
                    <div className="code-line">            --app app-debug.apk \</div>
                    <div className="code-line">            --test app-debug-androidTest.apk \</div>
                    <div className="code-line">            --device model=Pixel7,version=<span className="code-num">33</span>,locale=ja \</div>
                    <div className="code-line">            --device model=SamsungS23,version=<span className="code-num">33</span>,locale=ja \</div>
                    <div className="code-line">            --timeout <span className="code-num">5</span>m</div>
                </div>
            </section>
            <div className="divider"></div>
            {/* EXAM SECTION */}
            <section id="exam">
                <div className="chapter-header">
                    <span className="chapter-num" style={{background: "var(--neon-amber)", color: "#030712"}}
                        >試験</span
                    >
                    <div>
                        <h1 className="chapter-title">試験対策 — チェックリスト &amp; サンプル問題</h1>
                    </div>
                </div>

                <h2 className="section-title">章別 配点・重要度マップ</h2>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-ch">CHAPTER 1 | 175分</div>
                        <div className="exam-title">モバイル世界・ビジネスドライバー</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-pts">
                            K2主体 | アナリティクス・ビジネスモデル・アーキテクチャ・接続モード
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-ch">CHAPTER 2 | 265分 ← 最大</div>
                        <div className="exam-title">モバイルアプリテストタイプ</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-pts">
                            K2主体 | ハードウェア・割り込み・接続テスト・センサー
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-ch">CHAPTER 3 | 200分</div>
                        <div className="exam-title">共通テストタイプ・プロセス</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-pts">
                            K3あり | セキュリティ・パフォーマンス・SFDPOT・SBTM
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-ch">CHAPTER 4 | 80分</div>
                        <div className="exam-title">プラットフォーム・ツール・環境</div>
                        <div className="exam-stars">★★★☆☆</div>
                        <div className="exam-pts">
                            K2 | エミュレータ vs シミュレータの違い・クラウドファーム
                        </div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-ch">CHAPTER 5 | 55分</div>
                        <div className="exam-title">テスト実行の自動化</div>
                        <div className="exam-stars">★★★☆☆</div>
                        <div className="exam-pts">
                            K3あり | ツール評価・自動化手法選択・テストピラミッド
                        </div>
                    </div>
                </div>

                <h2 className="section-title">必ず覚える重要概念チェックリスト</h2>
                <div className="alert green">
                    <span className="alert-icon">📋</span>
                    <div className="alert-text">
                        <strong>Chapter 1:</strong>
                        ①モバイルアナリティクスデータの用途（デバイスポートフォリオ選定）
                        ②5つのビジネスモデル（フリーミアム/広告/トランザクション/フィー/エンタープライズ）
                        ③デバイスタイプ5分類 ④アプリタイプ（ネイティブ/Webの4形態/ハイブリッド）
                        ⑤接続モード3種（Never/Always/Partially-Connected）
                    </div>
                </div>
                <div className="alert cyan">
                    <span className="alert-icon">📋</span>
                    <div className="alert-text">
                        <strong>Chapter 2:</strong>
                        ①ハードウェア機能テスト項目（カメラ/GPS/NFC/Bluetooth/生体認証/ヘルスセンサー）
                        ②典型的な割り込みテスト5種
                        ③接続方式別テスト（2G〜5G/WiFi/Bluetooth/NFC/オフライン）
                        ④画面向き変更・OSユーザー設定テスト
                    </div>
                </div>
                <div className="alert amber">
                    <span className="alert-icon">📋</span>
                    <div className="alert-text">
                        <strong>Chapter 3:</strong> ①インストール可能性テストの5ステップ ②OWASP
                        Mobile Top 10（2024年版）の主要リスク
                        ③パフォーマンス目標値（コールドスタート3秒以内等） ④SFDPOT
                        ヒューリスティック6観点 ⑤セッションベーステスト管理（SBTM）
                    </div>
                </div>
                <div className="alert red">
                    <span className="alert-icon">📋</span>
                    <div className="alert-text">
                        <strong>Chapter 4 &amp; 5:</strong> ①エミュレータ vs
                        シミュレータの違い（Android/iOS対応と動作原理）
                        ②クラウドデバイスファームの用途と主要サービス
                        ③Appiumが最も広く使われるクロスプラットフォームツール ④テスト自動化手法6種
                        ⑤ツール評価基準5項目（SUT適合性/学習コスト/CI統合/TCO/スケーラビリティ）
                    </div>
                </div>

                <h2 className="section-title">📝 サンプル問題と解説</h2>

                <div className="trend-card">
                    <div className="trend-tag">問1 / K2 / Chapter 1.1</div>
                    <div className="trend-title">モバイルアナリティクスデータの主な活用目的</div>
                    <p className="trend-desc">
                        モバイルアプリのテスト計画において、モバイルアナリティクスデータの主な用途として最も適切なものはどれか？<br /><br />A)
                        アプリのパフォーマンスを改善するための開発タスクを特定する<br />B)
                        テスト実行のためのデバイスポートフォリオを選定する基準とする<br />C)
                        アプリのUI設計の品質を評価する<br />D)
                        ユーザーのアプリ内行動パターンを分析する<br /><br /><strong
                            style={{color: "var(--neon-green)"}}
                            >正解: B</strong
                        >
                        ─
                        アナリティクスデータ（OS分布・デバイスシェア・地域別分布）はテスト対象<strong>デバイスポートフォリオの選定</strong>に使用します（MAT-1.1.1
                        K2）。A・C・Dはテスト計画の文脈での主な用途ではありません。
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問2 / K2 / Chapter 1.4</div>
                    <div className="trend-title">ハイブリッドアプリの特徴</div>
                    <p className="trend-desc">
                        ハイブリッドアプリに関する記述として最も正確なものはどれか？<br /><br />A)
                        ネイティブSDKのみを使用して開発される<br />B)
                        常時インターネット接続が必要である<br />C)
                        ネイティブアプリのラッパー内でウェブアプリを実行する<br />D)
                        アプリストアからダウンロードできない<br /><br /><strong
                            style={{color: "var(--neon-green)"}}
                            >正解: C</strong
                        >
                        ─
                        ハイブリッドアプリはネイティブアプリのラッパー内にWebViewでWebアプリを実行します。オフライン時も使用でき、アプリストアからダウンロード可能です（MAT-1.4.1
                        K2）。
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問3 / K2 / Chapter 2.1.7</div>
                    <div className="trend-title">割り込みテストの主目的</div>
                    <p className="trend-desc">
                        決済処理フロー実行中に電話着信があったシナリオをテストする主な目的はどれか？<br /><br />A)
                        電話機能がアプリより優先されることを確認する<br />B)
                        着信後にアプリが正常に再開し、決済状態が保持されることを確認する<br />C)
                        着信時のアプリのパフォーマンスを計測する<br />D)
                        通話後にアプリが自動的にアンインストールされないことを確認する<br /><br /><strong
                            style={{color: "var(--neon-green)"}}
                            >正解: B</strong
                        >
                        ─
                        割り込みテストの目的は、割り込み後にアプリが正常に復帰し状態（決済情報）が保持されること、および二重課金が発生しないことを確認することです（MAT-2.1.7
                        K2）。
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問4 / K2 / Chapter 4.3</div>
                    <div className="trend-title">エミュレータとシミュレータの違い</div>
                    <p className="trend-desc">
                        シミュレータではなくエミュレータを使用する必要がある最も適切な理由はどれか？<br /><br />A)
                        シミュレータより起動が速いから<br />B)
                        実際のハードウェアアーキテクチャを完全に模倣するから<br />C)
                        ホストOSと同じ環境で動作するから<br />D) iOSテストに最適だから<br /><br /><strong
                            style={{color: "var(--neon-green)"}}
                            >正解: B</strong
                        >
                        ─
                        エミュレータは実際のハードウェアを完全に模倣します（主にAndroid）。シミュレータはソフトウェアの動作を模擬するもの（主にiOS）で、ホストOSと同じ環境で動作します（MAT-4.3.1
                        K2）。Cはシミュレータの特徴、DもiOSにはシミュレータが用いられます。
                    </p>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">問5 / K3 / Chapter 5.3</div>
                    <div className="trend-title">自動化ツールの選定</div>
                    <p className="trend-desc">
                        React
                        Nativeで開発されたiOS・Android両対応アプリのE2Eテスト自動化ツールを選定しています。最も重要な評価基準はどれか？<br /><br />A)
                        ツールのアイコンデザインが魅力的かどうか<br />B)
                        最も歴史が長いツールを選ぶ<br />C)
                        チームのスキルセット・CI/CD統合性・iOS/Android両プラットフォームのサポート<br />D)
                        最も安価なツールのみを選ぶ<br /><br /><strong
                            style={{color: "var(--neon-green)"}}
                            >正解: C</strong
                        >
                        ─
                        ツール評価はSUT適合性（両プラットフォーム対応）・学習コスト（チームスキル）・CI/CD統合性・スケーラビリティ・コスト（TCO）の観点で行います（MAT-5.3.1
                        K3）。React NativeならDetoxまたはAppiumが有力候補です。
                    </p>
                </div>

                <h2 className="section-title">推奨学習ステップ</h2>
                <ul className="step-list">
                    <li className="step-item">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <div className="step-title">Week 1〜2：基礎知識の習得</div>
                            <div className="step-desc">
                                ISTQB CT-MAT Syllabus v1.0 の精読。CTFL（Foundation
                                Level）の復習（テストプロセス・技法）。本ガイドのCh.1〜2を集中学習
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <div className="step-title">Week 3〜4：実践的理解</div>
                            <div className="step-desc">
                                実際にAndroid Emulatorでテスト実施。Appium / Espresso
                                の基本操作。OWASPモバイルセキュリティガイドの確認
                            </div>
                        </div>
                    </li>
                    <li className="step-item">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <div className="step-title">Week 5〜6：試験対策</div>
                            <div className="step-desc">
                                公式Sample Exam
                                Aを時間を計って解く。弱点分野の復習。本ガイドの試験対策チェックリストで最終確認
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <div className="divider"></div>
            {/* REFS */}
            <section id="refs">
                <h2 className="section-title">参考文献・URL一覧</h2>

                <h3 className="sub-title">🏛️ ISTQB® 公式リソース</h3>
                <div className="ref-grid">
                    <a
                        href="https://istqb.org/certifications/certified-tester-mobile-application-testing-ct-mat/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">公式認定ページ</span>
                        <span className="ref-title">CT-MAT 公式認定ページ</span>
                        <span className="ref-url">istqb.org/certifications/ct-mat/</span>
                    </a>
                    <a
                        href="https://www.istqb.org/?sdm_process_download=1&download_id=3551"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">シラバス PDF</span>
                        <span className="ref-title">ISTQB CT-MAT Syllabus v1.0 (2019)</span>
                        <span className="ref-url">istqb.org/...download_id=3551</span>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3553"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">サンプル試験問題</span>
                        <span className="ref-title">CT-MAT Sample Exam A Questions v1.3</span>
                        <span className="ref-url">istqb.org/...download_id=3553</span>
                    </a>
                    <a
                        href="https://istqb.org/?sdm_process_download=1&download_id=3554"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">サンプル試験解答</span>
                        <span className="ref-title">CT-MAT Sample Exam A Answers v1.3</span>
                        <span className="ref-url">istqb.org/...download_id=3554</span>
                    </a>
                    <a
                        href="https://glossary.istqb.org/en_US/search?term="
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">グロッサリー</span>
                        <span className="ref-title">ISTQB グロッサリー（用語集）</span>
                        <span className="ref-url">glossary.istqb.org</span>
                    </a>
                    <a href="https://istqb.org/exam-providers/" target="_blank" className="ref-card">
                        <span className="ref-cat">試験プロバイダー</span>
                        <span className="ref-title">試験プロバイダー検索</span>
                        <span className="ref-url">istqb.org/exam-providers/</span>
                    </a>
                </div>

                <h3 className="sub-title">📱 モバイルプラットフォーム 公式ドキュメント</h3>
                <div className="ref-grid">
                    <a
                        href="https://developer.android.com/studio/test"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">Android 公式</span>
                        <span className="ref-title">Android テストガイド（Android Studio）</span>
                        <span className="ref-url">developer.android.com/studio/test</span>
                    </a>
                    <a href="https://developer.apple.com/testing/" target="_blank" className="ref-card">
                        <span className="ref-cat">iOS 公式</span>
                        <span className="ref-title">Apple Developer Testing Guide</span>
                        <span className="ref-url">developer.apple.com/testing/</span>
                    </a>
                    <a
                        href="https://developer.apple.com/design/human-interface-guidelines/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">UI ガイドライン</span>
                        <span className="ref-title">Apple Human Interface Guidelines</span>
                        <span className="ref-url">developer.apple.com/design/hig/</span>
                    </a>
                    <a href="https://m3.material.io/" target="_blank" className="ref-card">
                        <span className="ref-cat">UI ガイドライン</span>
                        <span className="ref-title">Google Material Design 3</span>
                        <span className="ref-url">m3.material.io</span>
                    </a>
                    <a
                        href="https://firebase.google.com/docs/test-lab"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">クラウドテスト</span>
                        <span className="ref-title">Firebase Test Lab 公式ドキュメント</span>
                        <span className="ref-url">firebase.google.com/docs/test-lab</span>
                    </a>
                    <a href="https://aws.amazon.com/device-farm/" target="_blank" className="ref-card">
                        <span className="ref-cat">クラウドテスト</span>
                        <span className="ref-title">AWS Device Farm</span>
                        <span className="ref-url">aws.amazon.com/device-farm/</span>
                    </a>
                </div>

                <h3 className="sub-title">🤖 自動化ツール 公式ドキュメント</h3>
                <div className="ref-grid">
                    <a href="https://appium.io/docs/en/latest/" target="_blank" className="ref-card">
                        <span className="ref-cat">自動化ツール</span>
                        <span className="ref-title">Appium 公式ドキュメント</span>
                        <span className="ref-url">appium.io/docs/en/latest/</span>
                    </a>
                    <a
                        href="https://developer.android.com/training/testing/espresso"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">自動化ツール</span>
                        <span className="ref-title">Espresso (Android) 公式ガイド</span>
                        <span className="ref-url">developer.android.com/testing/espresso</span>
                    </a>
                    <a
                        href="https://developer.apple.com/documentation/xctest"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">自動化ツール</span>
                        <span className="ref-title">XCTest (iOS) 公式リファレンス</span>
                        <span className="ref-url">developer.apple.com/documentation/xctest</span>
                    </a>
                    <a href="https://wix.github.io/Detox/" target="_blank" className="ref-card">
                        <span className="ref-cat">自動化ツール</span>
                        <span className="ref-title">Detox（React Native）公式</span>
                        <span className="ref-url">wix.github.io/Detox/</span>
                    </a>
                    <a href="https://maestro.mobile.dev/" target="_blank" className="ref-card">
                        <span className="ref-cat">自動化ツール</span>
                        <span className="ref-title">Maestro Mobile 公式</span>
                        <span className="ref-url">maestro.mobile.dev/</span>
                    </a>
                    <a
                        href="https://www.browserstack.com/app-automate"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">クラウドデバイス</span>
                        <span className="ref-title">BrowserStack App Automate</span>
                        <span className="ref-url">browserstack.com/app-automate</span>
                    </a>
                </div>

                <h3 className="sub-title">🔐 セキュリティ参考資料</h3>
                <div className="ref-grid">
                    <a
                        href="https://owasp.org/www-project-mobile-top-10/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">セキュリティ標準</span>
                        <span className="ref-title">OWASP Mobile Top 10（公式）</span>
                        <span className="ref-url">owasp.org/mobile-top-10/</span>
                    </a>
                    <a href="https://mas.owasp.org/MASTG/" target="_blank" className="ref-card">
                        <span className="ref-cat">セキュリティ標準</span>
                        <span className="ref-title"
                            >OWASP Mobile App Security Testing Guide (MASTG)</span
                        >
                        <span className="ref-url">mas.owasp.org/MASTG/</span>
                    </a>
                    <a href="https://mas.owasp.org/MASVS/" target="_blank" className="ref-card">
                        <span className="ref-cat">セキュリティ標準</span>
                        <span className="ref-title">OWASP MASVS（モバイルセキュリティ検証標準）</span>
                        <span className="ref-url">mas.owasp.org/MASVS/</span>
                    </a>
                    <a
                        href="https://github.com/MobSF/Mobile-Security-Framework-MobSF"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">セキュリティツール</span>
                        <span className="ref-title">MobSF（静的・動的解析ツール）</span>
                        <span className="ref-url"
                            >github.com/MobSF/Mobile-Security-Framework-MobSF</span
                        >
                    </a>
                </div>

                <h3 className="sub-title">📊 市場データ・業界参考資料</h3>
                <div className="ref-grid">
                    <a
                        href="https://gs.statcounter.com/os-market-share/mobile/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">市場データ</span>
                        <span className="ref-title">StatCounter Global Stats（OS市場シェア）</span>
                        <span className="ref-url">gs.statcounter.com/os-market-share/mobile/</span>
                    </a>
                    <a
                        href="https://developer.android.com/about/dashboards"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">市場データ</span>
                        <span className="ref-title">Android Distribution Dashboard（公式）</span>
                        <span className="ref-url">developer.android.com/about/dashboards</span>
                    </a>
                    <a
                        href="https://datareportal.com/reports/digital-2026-global-overview-report"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">業界レポート</span>
                        <span className="ref-title">DataReportal Digital 2026 Global Overview</span>
                        <span className="ref-url">datareportal.com/reports/digital-2026</span>
                    </a>
                    <a
                        href="https://www.appypie.com/blog/mobile-app-testing"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">ベストプラクティス</span>
                        <span className="ref-title">モバイルテスト完全ガイド（AppyPie）</span>
                        <span className="ref-url">appypie.com/blog/mobile-app-testing</span>
                    </a>
                    <a
                        href="https://testlio.com/blog/mobile-app-testing-strategy/"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">ベストプラクティス</span>
                        <span className="ref-title">モバイルテスト戦略ガイド（Testlio）</span>
                        <span className="ref-url">testlio.com/blog/mobile-app-testing-strategy/</span>
                    </a>
                    <a
                        href="https://firebase.google.com/products/performance"
                        target="_blank"
                        className="ref-card"
                    >
                        <span className="ref-cat">パフォーマンス</span>
                        <span className="ref-title">Firebase Performance Monitoring（公式）</span>
                        <span className="ref-url">firebase.google.com/products/performance</span>
                    </a>
                </div>
            </section>
            <div className="divider"></div>
            </main>
        </div>
    );
}
