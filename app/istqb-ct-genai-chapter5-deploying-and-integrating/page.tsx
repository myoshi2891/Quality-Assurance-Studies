import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import {
    DIAGRAM_D1,
    DIAGRAM_D2,
    DIAGRAM_D3,
    DIAGRAM_D4,
    DIAGRAM_D5,
    DIAGRAM_D6,
    DIAGRAM_D7,
    DIAGRAM_D8,
    DIAGRAM_D9,
} from './diagrams';
import './istqb-ct-genai-chapter5-deploying-and-integrating.css';

export default function CtGenAiChapter5Page() {
    return (
        <div className="ct-genai-chapter5-page">
            <NavBar />
            <main className="main">
                <header className="hero">
                    <div className="hero-eyebrow">
                        ISTQB® Certified Tester — Testing with Generative AI
                    </div>
                    <h1>第5章：テスト組織における生成AIの導入と統合</h1>
                    <p>
                        シラバス v1.1（2026年改訂版）第5章「Deploying and Integrating Generative AI in Test Organizations」を、初学者向けにステップバイステップで解説する学習ガイドです。CTFL取得済みのテスター・テストマネージャー・開発者・QA担当者を対象としています。
                    </p>
                    <div className="hero-meta">
                        <span>対象シラバス：v1.1（80分）</span>
                        <span>前提資格：CTFL</span>
                        <span>K1／K2レベル中心・K3なし</span>
                        <span>作成日：2026-09-24</span>
                    </div>
                </header>

                <div className="content" id="content-root">
                    {/* ========== 1. この章の全体像 ========== */}
                    <section className="doc-section" id="s1">
                        <h1 className="doc-h1">1. この章の全体像</h1>

                        <h2 className="doc-h2">1.1 第5章は何を学ぶ章か</h2>
                        <p>
                            第1章〜第4章では、「生成AIとは何か」「どう指示するか（プロンプト）」「どんな危険があるか」「どんな仕組みで動かすか」を学びました。第5章はその<strong>最後の仕上げ</strong>として、次の問いに答えます。
                        </p>
                        <blockquote className="doc-quote">
                            <strong>「個人が使えるだけでなく、テスト組織として、安全に・継続的に・成果が出る形で、生成AIを導入するにはどうすればよいか？」</strong>
                        </blockquote>
                        <p>
                            つまり、<strong>技術の話から「組織と人」の話へ</strong>視点が切り替わる章です。
                        </p>

                        <h2 className="doc-h2">1.2 第5章の構成（2つの柱）</h2>
                        <div className="diagram-card" data-diagram="d1">
                            <Mermaid chart={DIAGRAM_D1} />
                            <div className="diagram-caption">
                                第5章の全体構成：5.1 導入ロードマップと5.2 変革管理の2本柱
                            </div>
                        </div>

                        <h2 className="doc-h2">1.3 学習目標（Learning Objectives）一覧</h2>
                        <p>
                            各項目の<strong>Kレベル</strong>（K1＝思い出す／K2＝理解して説明する）が試験の出題スタイルを決めます。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>LO番号</th>
                                        <th>学習目標（要約）</th>
                                        <th>Kレベル</th>
                                        <th>出題スタイルの目安</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>GenAI-5.1.1</td>
                                        <td>シャドーAIのリスクを<strong>思い出せる</strong></td>
                                        <td><span className="k-badge">K1</span></td>
                                        <td>用語・リスクの種類を選ぶ</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-5.1.2</td>
                                        <td>テスト向け生成AI戦略を定める際の<strong>主要な観点を説明できる</strong></td>
                                        <td><span className="k-badge">K2</span></td>
                                        <td>観点の意味・理由を選ぶ</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-5.1.3</td>
                                        <td>テストタスク向けLLM/SLMの<strong>選定基準を要約できる</strong>（状況に応じて）</td>
                                        <td><span className="k-badge">K2</span></td>
                                        <td>状況に合う基準を選ぶ</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-5.1.4</td>
                                        <td>導入の<strong>主要フェーズを思い出せる</strong></td>
                                        <td><span className="k-badge">K1</span></td>
                                        <td>フェーズ名・特徴を選ぶ</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-5.2.1</td>
                                        <td>生成AIを使ったテストに必要な<strong>スキルと知識を説明できる</strong></td>
                                        <td><span className="k-badge">K2</span></td>
                                        <td>スキルの理由・具体例を選ぶ</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-5.2.2</td>
                                        <td>テストチームでAIスキルを育てる<strong>戦略を思い出せる</strong></td>
                                        <td><span className="k-badge">K1</span></td>
                                        <td>プロンプトパターン等を選ぶ</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-5.2.3</td>
                                        <td>導入に伴い<strong>テストプロセスと責任がどう変わるか認識できる</strong></td>
                                        <td><span className="k-badge">K1</span></td>
                                        <td>テスター/マネージャーの役割変化</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout source">
                            <div className="callout-icon">ℹ️</div>
                            <div className="callout-body">
                                <div className="callout-label">ソース</div>
                                <p>
                                    Exactpro「Chapter 5 Reading Materials（CT-GenAI v1.1）」および ISTQB公式シラバス。Kレベルは各見出しに付記されたものに基づきます。
                                </p>
                            </div>
                        </div>

                        <h2 className="doc-h2">1.4 試験での位置づけ（参考情報）</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>内容</th>
                                        <th>根拠の種類</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>試験全体</td>
                                        <td>40問／合計46点／合格30点（65%）／60分（非母語話者は+25%）</td>
                                        <td><span className="tag tag-b">準拠</span> ISTQB公式ページ</td>
                                    </tr>
                                    <tr>
                                        <td>第5章の想定配点</td>
                                        <td>7問・7点（全体の約15%）、K1が4問・K2が3問・K3なし</td>
                                        <td>
                                            参考：第三者の学習サイト（Mock Exam Network）による整理。<strong>公式数値ではありません</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>前提資格</td>
                                        <td>CTFL（Foundation Level）取得が必須</td>
                                        <td><span className="tag tag-b">準拠</span> ISTQB公式ページ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <strong>この章が「得点源」と言われる理由</strong>：K3（応用）問題が無く、すべてK1/K2（暗記＋理解）です。<strong>用語と分類を正確に覚えれば取りこぼしが少ない</strong>章です。
                        </p>

                        <h2 className="doc-h2">1.5 前の章とのつながり</h2>
                        <p>
                            第5章は、第2〜4章の知識を「組織導入」の文脈で再利用します。<strong>どの章のどの知識が使われるか</strong>を先に押さえておくと、暗記が楽になります。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>第5章の項目</th>
                                        <th>参照される章</th>
                                        <th>何が使われるか</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5.1.1 シャドーAI</td>
                                        <td>第3章（3.2 プライバシー・セキュリティ、3.4 規制）</td>
                                        <td>情報漏えい、GDPR等の規制リスク</td>
                                    </tr>
                                    <tr>
                                        <td>5.1.2 戦略の観点</td>
                                        <td>第2章（2.3.1 評価指標）</td>
                                        <td>精度・再現率・実行成功率・時間効率などの指標</td>
                                    </tr>
                                    <tr>
                                        <td>5.1.3 LLM/SLM選定</td>
                                        <td>第1章（1.1.2 LLM/SLM）、第3章（3.1.3 モデル選択）</td>
                                        <td>モデルの種類、モデル比較による誤り検出</td>
                                    </tr>
                                    <tr>
                                        <td>5.1.3 ファインチューニング可能性</td>
                                        <td>第4章（4.2.1 ファインチューニング）</td>
                                        <td>追加学習で精度を上げられるか</td>
                                    </tr>
                                    <tr>
                                        <td>5.1.4 フェーズ2（インフラ評価）</td>
                                        <td>第4章（4.1 LLM搭載テストインフラ）</td>
                                        <td>フレームワーク、ホスティング環境</td>
                                    </tr>
                                    <tr>
                                        <td>5.2.1 スキル（サニタイズ）</td>
                                        <td>第3章（3.2.3 緩和策：データサニタイズ）</td>
                                        <td>マスキング・仮名化の具体的手法</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ========== 2. 5.1 生成AI導入ロードマップ（概要） ========== */}
                    <section className="doc-section" id="s2">
                        <h1 className="doc-h1">2. 5.1 生成AI導入ロードマップ（概要）</h1>

                        <h2 className="doc-h2">2.1 まず結論（1分で分かる要約）</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            テスト戦略に生成AIを組み込むときは、次の<strong>4つの関心事がつながっている</strong>ことを意識します。
                        </p>
                        <ol className="doc-list">
                            <li><strong>テスト目標</strong>：何を達成したいのか（例：テスト工数削減、品質向上）</li>
                            <li><strong>モデル選定</strong>：どのLLM/SLMを使うか</li>
                            <li><strong>入力データの品質と取り扱い</strong>：プロンプトに入れるデータは正確か、安全か</li>
                            <li><strong>AI関連の標準・規制への準拠</strong>：守るべきルールは何か</li>
                        </ol>
                        <p>
                            この戦略から、<strong>現実的なロードマップ</strong>（段階的な導入計画）を作り、進捗を監視します。ロードマップには次を含めます。
                        </p>
                        <ul className="doc-list">
                            <li><strong>段階的な導入ステップ</strong>（いきなり全面導入しない）</li>
                            <li><strong>コンプライアンスと品質のマイルストーン確認</strong></li>
                            <li><strong>フィードバックの仕組み</strong>（現場の結果やリスクの変化に合わせて戦略を調整する）</li>
                        </ul>

                        <h2 className="doc-h2">2.2 戦略とロードマップの関係（図解）</h2>
                        <div className="diagram-card" data-diagram="d2">
                            <Mermaid chart={DIAGRAM_D2} />
                            <div className="diagram-caption">
                                4つの関心事 → テスト戦略 → 現実的なロードマップ → フィードバックによる見直し
                            </div>
                        </div>

                        <h2 className="doc-h2">2.3 なぜ「ロードマップ」が必要なのか（初学者向けの説明）</h2>
                        <p>
                            生成AIの導入を「新しいツールを入れる」程度に考えると、次のような失敗が起こりがちです。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>よくある失敗</th>
                                        <th>何が起きるか</th>
                                        <th>ロードマップがあると</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>目的があいまいなまま導入</td>
                                        <td>「使ってみたが効果が測れない」</td>
                                        <td>測定可能な目標が最初に決まる</td>
                                    </tr>
                                    <tr>
                                        <td>個人がバラバラにAIを使う</td>
                                        <td>情報漏えい、品質のばらつき（→ 5.1.1 シャドーAI）</td>
                                        <td>承認済みツールと利用ルールが揃う</td>
                                    </tr>
                                    <tr>
                                        <td>一気に全面展開</td>
                                        <td>現場が混乱、反発、リスク顕在化</td>
                                        <td>小さく試して段階的に広げられる</td>
                                    </tr>
                                    <tr>
                                        <td>導入して終わり</td>
                                        <td>効果が続かず、使われなくなる</td>
                                        <td>継続的に計測・改善する仕組みがある</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mnemonic">
                            <strong>覚え方：</strong>ロードマップ ＝ 「目的 → 準備 → 小さく試す → 測る → 広げる」をあらかじめ設計すること。
                        </div>
                    </section>

                    {/* ========== 3. 5.1.1 シャドーAIのリスク ========== */}
                    <section className="doc-section" id="s3">
                        <h1 className="doc-h1">
                            3. 5.1.1 シャドーAIのリスク <span className="k-badge">K1</span>
                        </h1>

                        <h2 className="doc-h2">3.1 用語の定義</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            <strong>シャドーAI（Shadow AI）</strong>とは、<strong>従業員が、組織の承認を得ていない個人用または未承認のAIツールを、非公式に業務で使うこと</strong>です。
                        </p>
                        <div className="spec-block">
                            <div className="spec-label">たとえ話</div>
                            <p>
                                「会社が許可していない私物のUSBメモリで社内データを持ち出す」のAI版と考えると理解しやすいでしょう。悪意がなくても、「早く仕事を終わらせたい」という善意から起こります。
                            </p>
                        </div>

                        <h2 className="doc-h2">3.2 シラバスが挙げる3つのリスク</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>リスク</th>
                                        <th>内容（要約）</th>
                                        <th>テスト業務での具体例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>①</td>
                                        <td><strong>情報セキュリティ・データプライバシーの弱点</strong></td>
                                        <td>個人向けAIツールは企業水準のセキュリティを備えていないことが多く、機密情報が漏れる可能性がある</td>
                                        <td><span className="tag tag-y">例</span> 本番相当の顧客データを含むテストログを、個人アカウントのチャットボットに貼り付けて解析させる</td>
                                    </tr>
                                    <tr>
                                        <td>②</td>
                                        <td><strong>コンプライアンス・規制上の問題</strong></td>
                                        <td>未承認ツールを使うと、法令・規制・監査要件に違反し、法的・監査上の問題を招く恐れがある</td>
                                        <td><span className="tag tag-y">例</span> 個人情報を含むテストデータを、適法な処理根拠・処理者契約（DPA）・域外移転の保護措置を欠いたまま未承認の外部サービスに送信し、GDPR等に抵触するおそれ</td>
                                    </tr>
                                    <tr>
                                        <td>③</td>
                                        <td><strong>知的財産（IP）の不明確さ</strong></td>
                                        <td>ライセンスが不明確なツールや、許可なく著作物を処理することで、紛争・請求のリスクがある</td>
                                        <td><span className="tag tag-y">例</span> 顧客から預かった仕様書や、他社製ソースコードを、利用規約を確認していないAIに入力する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mnemonic">
                            <strong>暗記用フレーズ：</strong>「漏れる・違反する・権利があいまい」（セキュリティ／コンプライアンス／IP）
                        </div>

                        <h2 className="doc-h2">3.3 シャドーAIが生まれる構図（図解）</h2>
                        <div className="diagram-card" data-diagram="d3">
                            <Mermaid chart={DIAGRAM_D3} />
                            <div className="diagram-caption">
                                現場のニーズと組織側の不備が重なり、未承認ツール利用から3つのリスクへつながる構図
                            </div>
                        </div>

                        <h2 className="doc-h2">3.4 対策：シラバスの結論</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            シラバスは、シャドーAIのリスクを避ける方法として、次の組み合わせを示しています。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>対策の要素</th>
                                        <th>意味</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>明確な生成AI戦略</strong></td>
                                        <td>何のために、どのAIを、どこまで使うかを決める</td>
                                    </tr>
                                    <tr>
                                        <td><strong>統制された導入ステップ</strong></td>
                                        <td>段階的に、管理された形で展開する</td>
                                    </tr>
                                    <tr>
                                        <td><strong>ガバナンス</strong></td>
                                        <td>利用ルール、責任者、監視・監査の仕組み</td>
                                    </tr>
                                    <tr>
                                        <td><strong>承認済みツール</strong></td>
                                        <td>組織が安全性・契約・ライセンスを確認したツールを用意する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="spec-block">
                            <div className="spec-label">ポイント</div>
                            <p>
                                単に「禁止」するのではなく、<strong>安全に使える承認済みの選択肢を用意すること</strong>が対策の中心です。
                            </p>
                        </div>

                        <h2 className="doc-h2">3.5 ベストプラクティス（シャドーAI対策）</h2>
                        <h3 className="doc-h3">シラバス準拠のベストプラクティス</h3>
                        <ul className="doc-list">
                            <li>生成AI戦略の中で、<strong>利用してよいツール・データ・用途</strong>をあらかじめ定める</li>
                            <li><strong>データの機密度に応じた環境</strong>を選ぶ（第3章の3.2.3）：商用LLMプロバイダーのセキュアな提供プラン、セキュアなクラウド上での運用、自組織のインフラ内へのLLM導入、などから機密性に合わせて選ぶ</li>
                            <li>個人情報などの<strong>機密データはそもそも入力しない（データ最小化）</strong>、<strong>匿名化・仮名化</strong>する</li>
                            <li><strong>教育とポリシー</strong>：責任ある使い方を徹底する（第3章の3.2.3、5.2.1）</li>
                        </ul>

                        <div className="callout practice">
                            <div className="callout-icon">💡</div>
                            <div className="callout-body">
                                <div className="callout-label">実務ベストプラクティス（試験範囲外）</div>
                                <div className="table-wrap">
                                    <table className="doc-table">
                                        <thead>
                                            <tr>
                                                <th>実務施策</th>
                                                <th>ねらい</th>
                                                <th>根拠</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>承認済みAIツールの<strong>一覧（インベントリ）</strong>を作り公開する</td>
                                                <td>「何を使ってよいか」を明確にし、未承認利用を減らす</td>
                                                <td>NIST AI RMF（Govern機能）、ISO/IEC 42001（AIマネジメントシステム）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>データ分類ルール</strong>（公開／社内／機密／個人情報）と、AIに入力してよい区分の対応表を作る</td>
                                                <td>判断のばらつきを防ぐ</td>
                                                <td>NIST AI 600-1（生成AIのデータプライバシー・情報セキュリティリスク）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>利用ログ・監査</strong>を取れる法人向け環境を用意する</td>
                                                <td>個人アカウント利用では追跡できないため</td>
                                                <td>OWASP Top 10 for LLM Applications 2025：LLM02 Sensitive Information Disclosure</td>
                                            </tr>
                                            <tr>
                                                <td><strong>申請から承認までを短く</strong>する（使いたいツールの審査フローを軽くする）</td>
                                                <td>承認が遅いと、現場が非公式ツールに流れるため</td>
                                                <td>実務で広く指摘されている点（各社セキュリティ解説）</td>
                                            </tr>
                                            <tr>
                                                <td>「入れてはいけない情報」を<strong>具体例付きで</strong>周知する</td>
                                                <td>善意の誤用を防ぐ</td>
                                                <td>同上</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h3 className="doc-h3">判断フロー例：「このデータをこのAIに入れて良いか？」</h3>
                        <div className="diagram-card" data-diagram="d4">
                            <Mermaid chart={DIAGRAM_D4} />
                            <div className="diagram-caption">
                                <span className="tag tag-y">例</span> 承認済みツールか、機密情報の有無、マスキング可否、データ区分の許可を順に確認する判断フロー
                            </div>
                        </div>

                        <h2 className="doc-h2">3.6 試験対策メモ（5.1.1）</h2>
                        <ul className="doc-list">
                            <li>出題は<strong>K1（思い出す）</strong>。「シャドーAIの定義」と「3つのリスク」を選ばせる形が中心です。</li>
                            <li><strong>ひっかけ注意</strong>：「シャドーAIとは、承認済みの高性能AIツールを社内で運用すること」→ <strong>誤り</strong>。<strong>未承認・個人用ツールの非公式利用</strong>です。</li>
                            <li>シャドーAIは<strong>悪意の問題ではなく、統制の問題</strong>として整理されています。</li>
                        </ul>
                    </section>

                    {/* ========== 4. 5.1.2 生成AI戦略の主要な観点 ========== */}
                    <section className="doc-section" id="s4">
                        <h1 className="doc-h1">
                            4. 5.1.2 生成AI戦略の主要な観点 <span className="k-badge">K2</span>
                        </h1>

                        <h2 className="doc-h2">4.1 学ぶこと</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            生成AIをテストに導入するとき、<strong>戦略に含めるべき観点</strong>を説明できるようにします。シラバス（v1.1の解説教材）が示す観点を、次の6つに整理します。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>観点</th>
                                        <th>一言でいうと</th>
                                        <th>中身（要約）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>①</td>
                                        <td><strong>明確で測定可能な目標</strong></td>
                                        <td>「何のために使うか」を数字で決める</td>
                                        <td>テスト生産性の向上、テストサイクル短縮、テスト品質の向上など</td>
                                    </tr>
                                    <tr>
                                        <td>②</td>
                                        <td><strong>LLM/SLMの選定</strong></td>
                                        <td>目標に合うモデルを選ぶ</td>
                                        <td>目標に照らし、既存テストインフラとの統合しやすさ、拡張性（スケーラビリティ）で選ぶ</td>
                                    </tr>
                                    <tr>
                                        <td>③</td>
                                        <td><strong>データ品質とセキュリティ</strong></td>
                                        <td>入力が悪ければ出力も悪い</td>
                                        <td>正確で関連性の高い入力データを、堅牢なセキュリティ手順で保護する。データ品質は信頼できる出力の<strong>前提条件</strong></td>
                                    </tr>
                                    <tr>
                                        <td>④</td>
                                        <td><strong>教育・トレーニング</strong></td>
                                        <td>技術と倫理の両方を教える</td>
                                        <td>技術スキルと、責任ある利用のための倫理意識の両方が必要</td>
                                    </tr>
                                    <tr>
                                        <td>⑤</td>
                                        <td><strong>効果を測る指標</strong></td>
                                        <td>効果を客観的に確認する</td>
                                        <td>第2章2.3.1の評価指標（精度、再現率など）を活用する</td>
                                    </tr>
                                    <tr>
                                        <td>⑥</td>
                                        <td><strong>プロセスガイドライン</strong></td>
                                        <td>使い方のルール</td>
                                        <td>機密データの取り扱い、<strong>透明性</strong>（どの成果物がGenAI由来かを明記）、<strong>品質ゲート</strong>（生成物を受け入れる前にレビューを必須にする）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            教材は、これらをまとめて「<strong>パイロット段階のGenAI機能を、繰り返し利用できる、統制された（ガバナンスされた）テストプロセスの一部へ変えるための運用の背骨</strong>」と表現しています。
                        </p>

                        <h2 className="doc-h2">4.2 観点どうしの関係（図解）</h2>
                        <div className="diagram-card" data-diagram="d5">
                            <Mermaid chart={DIAGRAM_D5} />
                            <div className="diagram-caption">
                                6つの観点が組み合わさって、パイロットから統制されたテストプロセスへ移行する
                            </div>
                        </div>

                        <h2 className="doc-h2">
                            4.3 各観点を初学者向けにステップバイステップで理解する
                        </h2>
                        <h3 className="doc-h3">ステップ1：測定可能な目標を決める（観点①）</h3>
                        <p>
                            「AIを使う」は目標ではなく手段です。<strong>数字で確認できる目標</strong>にします。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>ダメな目標</th>
                                        <th>良い目標の例</th>
                                        <th>対応する目標カテゴリ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className="tag tag-y">例</span> AIでテストを効率化する</td>
                                        <td><span className="tag tag-y">例</span> 「テストケース作成にかかる時間を、四半期内に現状比30%短縮する（レビュー後の品質は維持）」</td>
                                        <td><span className="tag tag-b">準拠</span> テスト生産性</td>
                                    </tr>
                                    <tr>
                                        <td><span className="tag tag-y">例</span> AIで速くする</td>
                                        <td><span className="tag tag-y">例</span> 「リグレッションテスト結果の分析リードタイムを、翌営業日から当日中へ短縮する」</td>
                                        <td><span className="tag tag-b">準拠</span> テストサイクル短縮</td>
                                    </tr>
                                    <tr>
                                        <td><span className="tag tag-y">例</span> AIで品質を上げる</td>
                                        <td><span className="tag tag-y">例</span> 「要件レビューで見つかる曖昧さの指摘件数を増やし、後工程の要件起因欠陥を減らす」</td>
                                        <td><span className="tag tag-b">準拠</span> テスト品質向上</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            上の数値は理解のための<strong>架空の例</strong>です。実際の数値は、自組織の現状（ベースライン）を計測してから決めます。
                        </p>

                        <h3 className="doc-h3">ステップ2：モデルを目標に合わせて選ぶ（観点②）</h3>
                        <p>
                            モデル選定は「有名だから」ではなく、<strong>目標・既存インフラとの統合・拡張性</strong>から決めます。詳細は次節 5.1.3 で扱います。
                        </p>

                        <h3 className="doc-h3">ステップ3：データ品質とセキュリティを確保する（観点③）</h3>
                        <p>
                            生成AIは、<strong>渡された情報（プロンプトの入力データ）を材料に出力を作る</strong>ため、入力データが不正確・古い・あいまいだと、出力も悪くなります（第2章・第3章で学んだ「完全な文脈を渡す」「明確な形式のデータを使う」の再確認）。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>データ品質の観点</th>
                                        <th>チェックの例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>正確性</td>
                                        <td>要件・仕様書が最新版か？矛盾していないか？</td>
                                    </tr>
                                    <tr>
                                        <td>関連性</td>
                                        <td>このタスクに不要な情報を大量に混ぜていないか？（コンテキストウィンドウの節約にもなる）</td>
                                    </tr>
                                    <tr>
                                        <td>形式</td>
                                        <td>表・箇条書き・JSONなど、あいまいさの少ない形式か？</td>
                                    </tr>
                                    <tr>
                                        <td>安全性</td>
                                        <td>個人情報・機密情報を含んでいないか？含むならマスキング済みか？</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="doc-h3">ステップ4：教育・トレーニングを計画する（観点④）</h3>
                        <p>
                            <strong>技術スキル（プロンプト、評価方法）と、倫理意識（プライバシー、透明性、責任ある利用）の両方</strong>を教えます。詳細は5.2.1と5.2.2で扱います。
                        </p>

                        <h3 className="doc-h3">ステップ5：効果測定の指標を先に決める（観点⑤）</h3>
                        <p>第2章の2.3.1で学んだ指標を、導入効果の測定に流用します。</p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>指標（第2章2.3.1）</th>
                                        <th>意味</th>
                                        <th>導入評価での使い方の例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>正確性（Accuracy）</td>
                                        <td>生成物が要件や専門家の作成物に照らして正しいか</td>
                                        <td>生成テストケースが要件を正しく網羅しているか</td>
                                    </tr>
                                    <tr>
                                        <td>適合率（Precision）</td>
                                        <td>目的に対して出力がどれだけ正しいか</td>
                                        <td>生成したテストケースが異常を正しく捉えている割合</td>
                                    </tr>
                                    <tr>
                                        <td>再現率（Recall）</td>
                                        <td>関連するものをどれだけ漏れなく見つけられるか</td>
                                        <td>有効/無効の同値クラスをどれだけカバーしたか</td>
                                    </tr>
                                    <tr>
                                        <td>関連性・文脈適合</td>
                                        <td>その状況にふさわしいか</td>
                                        <td>テストベースやドメイン要件との整合</td>
                                    </tr>
                                    <tr>
                                        <td>多様性（Diversity）</td>
                                        <td>重複を避け幅広く網羅しているか</td>
                                        <td>異なるユーザー行動やエッジケースを探索しているか</td>
                                    </tr>
                                    <tr>
                                        <td>実行成功率</td>
                                        <td>生成したテストが実行できる割合</td>
                                        <td>構文エラーなく実行できたスクリプトの割合</td>
                                    </tr>
                                    <tr>
                                        <td>時間効率</td>
                                        <td>手作業と比べてどれだけ時間を節約できたか</td>
                                        <td>AIによる作成時間 vs 人手での作成時間</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="spec-block">
                            <div className="spec-label">ポイント</div>
                            <p>
                                LLMは<strong>非決定的</strong>（同じ入力でも出力が変わる）ため、指標は<strong>統計的に意味のあるデータ量</strong>で評価する必要があります（第2章2.3.1）。1回の成功・失敗で判断してはいけません。
                            </p>
                        </div>

                        <h3 className="doc-h3">ステップ6：プロセスガイドラインを定める（観点⑥）</h3>
                        <p>ガイドラインには、少なくとも次の3つを入れます。</p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>ガイドライン</th>
                                        <th>内容</th>
                                        <th>例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>機密データの取り扱い</strong></td>
                                        <td>何を入力してよいか／いけないか</td>
                                        <td><span className="tag tag-y">例</span> 「顧客の実名・メールアドレスを含むデータは、匿名化してから入力する」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>透明性</strong></td>
                                        <td>生成AIで作られた成果物であることを明記する</td>
                                        <td><span className="tag tag-y">例</span> テストケースのメタデータに「AI生成（レビュー済み）」欄を設ける</td>
                                    </tr>
                                    <tr>
                                        <td><strong>品質ゲート</strong></td>
                                        <td>生成物を受け入れる前に、レビューを必須にする</td>
                                        <td><span className="tag tag-y">例</span> 「AI生成テストケースは、テスト担当者のレビュー承認後にのみテスト管理ツールへ登録する」</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="doc-h3">品質ゲートの流れ（図解）</h3>
                        <div className="diagram-card" data-diagram="d6">
                            <Mermaid chart={DIAGRAM_D6} />
                            <div className="diagram-caption">
                                <span className="tag tag-y">例</span> AI生成物のラベル付けからレビュー、受け入れまたは再プロンプトまでの流れ
                            </div>
                        </div>

                        <h2 className="doc-h2">4.4 ベストプラクティス（5.1.2）</h2>
                        <h3 className="doc-h3">シラバス準拠</h3>
                        <ul className="doc-list">
                            <li>目標 → モデル選定 → データ → 教育 → 指標 → ガイドライン、という<strong>一連の観点をセットで</strong>設計する（どれか1つだけでは不十分）</li>
                            <li><strong>パイロット</strong>で小さく試し、モデルを比較し、データ品質とコンプライアンスを確認し、手作業のテストケース作成がどれだけ減るかを測る</li>
                            <li>生成物は<strong>必ず品質ゲート（レビュー）を通す</strong>（人間の説明責任は残る）</li>
                        </ul>
                        <div className="callout practice">
                            <div className="callout-icon">💡</div>
                            <div className="callout-body">
                                <div className="callout-label">実務ベストプラクティス</div>
                                <div className="table-wrap">
                                    <table className="doc-table">
                                        <thead>
                                            <tr>
                                                <th>施策</th>
                                                <th>ねらい</th>
                                                <th>根拠</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>導入前のベースライン計測</strong>（現状の工数・欠陥・リードタイム）</td>
                                                <td>効果を客観的に比較するため</td>
                                                <td>ISTQB CTFLの測定・モニタリングの考え方に準じる</td>
                                            </tr>
                                            <tr>
                                                <td>リスクの大きさに応じた<strong>レビューの深さ</strong>の調整（重要なテストほど厳しく）</td>
                                                <td>過剰なレビューで生産性を潰さないため</td>
                                                <td>第3章3.1.2「リスクレベルに応じた検出方法の実施」</td>
                                            </tr>
                                            <tr>
                                                <td><strong>NIST AI RMFの4機能（Govern／Map／Measure／Manage）</strong>に沿って、責任・文脈・測定・対処を整理する</td>
                                                <td>生成AI固有のリスクを抜け漏れなく管理するため</td>
                                                <td>NIST AI RMF 1.0、NIST AI 600-1（生成AIプロファイル）</td>
                                            </tr>
                                            <tr>
                                                <td>経営層・セキュリティ・法務を早期に巻き込む</td>
                                                <td>後戻りコストを減らすため</td>
                                                <td>第3章3.2.3（CTO、CISO、法務の関与を強く推奨）</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">4.5 試験対策メモ（5.1.2）</h2>
                        <ul className="doc-list">
                            <li>出題は<strong>K2（理解して説明する）</strong>。「戦略に含める観点として<strong>適切なもの／不適切なもの</strong>」を選ばせる形が想定されます。</li>
                            <li><strong>キーワード</strong>：測定可能な目標／データ品質は前提条件／技術＋倫理の教育／指標／透明性／品質ゲート。</li>
                            <li><strong>ひっかけ注意</strong>：「AIの出力は正確なので、品質ゲートは不要」→ <strong>誤り</strong>。生成物は<strong>受け入れ前にレビュー</strong>が必要です。</li>
                        </ul>
                    </section>

                    {/* ========== 5. 5.1.3 テストタスク向けLLM/SLMの選定 ========== */}
                    <section className="doc-section" id="s5">
                        <h1 className="doc-h1">
                            5. 5.1.3 テストタスク向けLLM/SLMの選定 <span className="k-badge">K2</span>
                        </h1>

                        <h2 className="doc-h2">5.1 背景</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            LLM/SLMには、次のような<strong>違い</strong>があります。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>違いの軸</th>
                                        <th>例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>機能面</strong></td>
                                        <td>マルチモーダル入力（画像等）に対応するか、推論（reasoning）能力があるか</td>
                                    </tr>
                                    <tr>
                                        <td><strong>技術面</strong></td>
                                        <td>コンテキストウィンドウの大きさ</td>
                                    </tr>
                                    <tr>
                                        <td><strong>ライセンス</strong></td>
                                        <td>商用か、オープンソースか</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            また、LLM/SLMの評価用ベンチマークは多数ありますが（自然言語処理、コード生成、画像分析など）、<strong>ソフトウェアテストのタスクに特化したものは少ない</strong>とされています（例：TestEval ＝ テストケース生成向けLLMの評価ベンチマーク）。
                        </p>
                        <div className="spec-block">
                            <div className="spec-label">ポイント</div>
                            <p>
                                したがって、<strong>世間の一般的な評価だけに頼らず、自組織のテストタスクで評価する</strong>ことが重要です。
                            </p>
                        </div>

                        <h2 className="doc-h2">5.2 シラバスの4つの選定基準</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>基準</th>
                                        <th>何を見るか</th>
                                        <th>評価のヒント</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>①</td>
                                        <td><strong>モデル性能（Model performance）</strong></td>
                                        <td>対象のテストタスクで、<strong>自組織のベンチマーク</strong>に対し、2.3.1のような指標で性能を評価する</td>
                                        <td>実際の要件・テストケースで小さな評価セットを作り、複数回実行して統計的に判断</td>
                                    </tr>
                                    <tr>
                                        <td>②</td>
                                        <td><strong>ファインチューニングの可能性（Fine-tuning potential）</strong></td>
                                        <td>ドメイン固有データで追加学習でき、それが有用か</td>
                                        <td>自組織のテストケース形式・用語に合わせられるか（第4章4.2.1）。SLMは計算負荷が比較的小さい</td>
                                    </tr>
                                    <tr>
                                        <td>③</td>
                                        <td><strong>継続的コスト（Recurring cost）</strong></td>
                                        <td>ライセンス料や運用費など、繰り返し発生する費用が予算に収まるか</td>
                                        <td>想定するトークン量・実行回数から<strong>月額を試算</strong></td>
                                    </tr>
                                    <tr>
                                        <td>④</td>
                                        <td><strong>コミュニティとサポート</strong></td>
                                        <td>活発なコミュニティ、詳しいドキュメントがあるか</td>
                                        <td>導入・トラブル対応のしやすさに直結</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mnemonic">
                            <strong>暗記用フレーズ：</strong>「性能・チューニング・コスト・サポート」（せいのう・ちゅーにんぐ・こすと・さぽーと）
                        </div>

                        <h2 className="doc-h2">5.3 選定の流れ（図解）</h2>
                        <div className="diagram-card" data-diagram="d7">
                            <Mermaid chart={DIAGRAM_D7} />
                            <div className="diagram-caption">
                                <span className="tag tag-y">例</span> タスク定義から候補の絞り込み、評価、パイロット検証までの8ステップ
                            </div>
                        </div>

                        <h2 className="doc-h2">5.4 選定スコアカード（テンプレート例）</h2>
                        <p>
                            <span className="tag tag-y">例</span>
                            複数候補を比較するときは、<strong>評価軸と重みを事前に決めて</strong>から点数を付けると、好みや印象に左右されにくくなります。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>評価軸（シラバスの4基準ベース）</th>
                                        <th>重み（例）</th>
                                        <th>候補A</th>
                                        <th>候補B</th>
                                        <th>候補C（SLM）</th>
                                        <th>確認方法の例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>モデル性能（対象テストタスク）</td>
                                        <td>40%</td>
                                        <td>＿点</td>
                                        <td>＿点</td>
                                        <td>＿点</td>
                                        <td>評価セットでの精度・実行成功率</td>
                                    </tr>
                                    <tr>
                                        <td>ファインチューニング可能性</td>
                                        <td>20%</td>
                                        <td>＿点</td>
                                        <td>＿点</td>
                                        <td>＿点</td>
                                        <td>提供機能・必要データ量の確認</td>
                                    </tr>
                                    <tr>
                                        <td>継続的コスト</td>
                                        <td>25%</td>
                                        <td>＿点</td>
                                        <td>＿点</td>
                                        <td>＿点</td>
                                        <td>月間想定トークン量×単価＋運用費</td>
                                    </tr>
                                    <tr>
                                        <td>コミュニティ・サポート</td>
                                        <td>15%</td>
                                        <td>＿点</td>
                                        <td>＿点</td>
                                        <td>＿点</td>
                                        <td>ドキュメント・事例・更新頻度</td>
                                    </tr>
                                    <tr>
                                        <td>（追加）データ保護・配置形態</td>
                                        <td>必須条件</td>
                                        <td>○/×</td>
                                        <td>○/×</td>
                                        <td>○/×</td>
                                        <td>機密データを扱える環境か</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="spec-block">
                            <div className="spec-label">ポイント</div>
                            <p>
                                データ保護・コンプライアンスは「点数で足し合わせる」のではなく、<strong>満たさなければ候補から外す必須条件</strong>として扱うのが安全です。
                            </p>
                        </div>

                        <h2 className="doc-h2">5.5 ベストプラクティス（5.1.3）</h2>
                        <h3 className="doc-h3">シラバス準拠</h3>
                        <ul className="doc-list">
                            <li><strong>タスクの複雑さに合ったモデル</strong>を選ぶ：高い推論が必要なタスクには推論モデル、単純なタスクには軽量なモデル（第1章1.1.3、第3章3.1.3）</li>
                            <li><strong>複数のモデルで結果を比較する</strong>と、誤りを検出しやすく、より信頼できる結果を選べる（第3章3.1.3）</li>
                            <li><strong>SLM</strong>は、ファインチューニングにより特定タスクで高い性能を、LLMほどの計算負荷なしで得られる可能性がある（第4章4.2.1）</li>
                            <li>「右サイズ（right-sized）」のモデルを選ぶことは、コストとエネルギーの観点でも重要（5.2.1）</li>
                        </ul>
                        <div className="callout practice">
                            <div className="callout-icon">💡</div>
                            <div className="callout-body">
                                <div className="callout-label">実務ベストプラクティス</div>
                                <div className="table-wrap">
                                    <table className="doc-table">
                                        <thead>
                                            <tr>
                                                <th>施策</th>
                                                <th>ねらい</th>
                                                <th>根拠</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>自組織専用の評価セット（ゴールデンセット）</strong>を作る：実際の要件・既存のテストケース・過去の欠陥を使う</td>
                                                <td>一般ベンチマークでは分からない、自組織のタスクでの実力を測る</td>
                                                <td>シラバスの「テスト特化ベンチマークは少ない」という記述、TestEval論文</td>
                                            </tr>
                                            <tr>
                                                <td><strong>同じ入力で複数回実行</strong>して、ばらつきも評価する</td>
                                                <td>LLMの非決定的な性質に対応する</td>
                                                <td>第2章2.3.1／第3章3.1.4</td>
                                            </tr>
                                            <tr>
                                                <td><strong>モデルの入れ替えを前提</strong>にした設計（特定モデルへのロックインを避ける）</td>
                                                <td>モデルの進化が速く、契約・価格も変わるため</td>
                                                <td>LLMOps（第4章4.2.2）の考え方</td>
                                            </tr>
                                            <tr>
                                                <td><strong>データの機密性</strong>に応じて、商用のセキュアな提供／セキュアなクラウド／自社インフラを使い分ける</td>
                                                <td>情報漏えいとコンプライアンスのリスクを下げる</td>
                                                <td>第3章3.2.3</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">5.6 試験対策メモ（5.1.3）</h2>
                        <ul className="doc-list">
                            <li>
                                出題は<strong>K2</strong>。<strong>「ある状況で、どの基準を重視すべきか」</strong>を選ぶ形が想定されます。
                                <ul className="doc-list">
                                    <li>予算が厳しい → <strong>継続的コスト</strong></li>
                                    <li>自社独自の用語・形式に合わせたい → <strong>ファインチューニングの可能性</strong></li>
                                    <li>導入時のトラブル対応が心配 → <strong>コミュニティとサポート</strong></li>
                                    <li>業務要件を満たすか不安 → <strong>モデル性能（自組織のベンチマークで）</strong></li>
                                </ul>
                            </li>
                            <li><strong>ひっかけ注意</strong>：「一般的なNLPベンチマークの順位が高いモデルを選べばよい」→ <strong>誤り</strong>。<strong>テスト特化ベンチマークは少ない</strong>ため、自組織のタスクで評価します。</li>
                        </ul>
                    </section>

                    {/* ========== 6. 5.1.4 生成AI導入のフェーズ ========== */}
                    <section className="doc-section" id="s6">
                        <h1 className="doc-h1">
                            6. 5.1.4 生成AI導入のフェーズ <span className="k-badge">K1</span>
                        </h1>

                        <h2 className="doc-h2">6.1 基本の考え方</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            生成AIの導入は、<strong>一度きりの決定や実装ではなく、段階的な移行</strong>です。通常、<strong>重なり合う3つのフェーズ</strong>で進みます。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>フェーズ</th>
                                        <th>英語名</th>
                                        <th>一言でいうと</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>フェーズ1</strong></td>
                                        <td><strong>Discovery</strong>（発見）</td>
                                        <td>触ってみて、慣れて、学ぶ</td>
                                    </tr>
                                    <tr>
                                        <td><strong>フェーズ2</strong></td>
                                        <td><strong>Initiation and usage definition</strong>（開始と利用方法の定義）</td>
                                        <td>使い道を見極め、戦略として固める</td>
                                    </tr>
                                    <tr>
                                        <td><strong>フェーズ3</strong></td>
                                        <td><strong>Utilization and iteration</strong>（活用と反復）</td>
                                        <td>日常業務に組み込み、測って、改善して、広げる</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="doc-h2">6.2 3フェーズの流れ（図解）</h2>
                        <div className="diagram-card" data-diagram="d8">
                            <Mermaid chart={DIAGRAM_D8} />
                            <div className="diagram-caption">
                                3フェーズは一方向ではなく、経験を反映して前段階へ戻ることもある
                            </div>
                        </div>
                        <div className="spec-block">
                            <div className="spec-label">ポイント</div>
                            <p>
                                実際には、<strong>フェーズは厳密に順番どおりには進みません</strong>。ユースケースごとに成熟速度が違うため、行き来したり、並行したりします。
                            </p>
                        </div>

                        <h2 className="doc-h2">6.3 各フェーズを詳しく理解する</h2>
                        <h3 className="doc-h3">フェーズ1：Discovery（発見）</h3>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <tbody>
                                    <tr>
                                        <th>目的</th>
                                        <td><strong>基本的な認識と自信</strong>をつくる</td>
                                    </tr>
                                    <tr>
                                        <th>主な活動</th>
                                        <td>テスターにGenAIの概念を紹介／LLMやSLMへのアクセスを提供／<strong>単純で低リスク</strong>なユースケースで試してもらう</td>
                                    </tr>
                                    <tr>
                                        <th>ゴール</th>
                                        <td>完全自動化ではなく、<strong>「やってみて学ぶ」</strong>こと。強みと限界を理解し、<strong>不確実性を減らす</strong></td>
                                    </tr>
                                    <tr>
                                        <th>典型的な落とし穴</th>
                                        <td><span className="tag tag-g">実務</span> 好き勝手に使い始めてシャドーAI化する（→5.1.1）。<strong>承認済みの安全な試験環境</strong>を用意する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="doc-h3">
                            フェーズ2：Initiation and usage definition（開始と利用方法の定義）
                        </h3>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <tbody>
                                    <tr>
                                        <th>目的</th>
                                        <td>実験から<strong>戦略</strong>へ焦点を移す</td>
                                    </tr>
                                    <tr>
                                        <th>主な活動</th>
                                        <td>実用的なGenAIユースケースを<strong>特定・評価・優先順位付け</strong>／適切な<strong>LLM搭載テストインフラ</strong>（第4章：RAG、エージェント等）を評価／社内の専門性を強化／組織のテスト・品質目標との整合を確認（CTFLシラバスの指針に沿う）</td>
                                    </tr>
                                    <tr>
                                        <th>ゴール</th>
                                        <td>「どこに、どう使うか」を決め、5.1.2の戦略に落とし込む</td>
                                    </tr>
                                    <tr>
                                        <th>典型的な落とし穴</th>
                                        <td><span className="tag tag-g">実務</span> 効果測定の指標を決めないまま次へ進む</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="doc-h3">フェーズ3：Utilization and iteration（活用と反復）</h3>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <tbody>
                                    <tr>
                                        <th>目的</th>
                                        <td>GenAIを「目新しいもの」から<strong>テストプロセスの統合された一部</strong>にする</td>
                                    </tr>
                                    <tr>
                                        <th>主な活動</th>
                                        <td>利用状況を<strong>継続的に監視・測定・改善</strong>／GenAIが<strong>持続的な利益</strong>をもたらしているか追跡／経験に基づき<strong>アプローチを調整</strong>／成功したやり方を<strong>チームやプロジェクト全体に展開（スケール）</strong></td>
                                    </tr>
                                    <tr>
                                        <th>ゴール</th>
                                        <td>効果が続き、広がる状態</td>
                                    </tr>
                                    <tr>
                                        <th>典型的な落とし穴</th>
                                        <td><span className="tag tag-g">実務</span> 導入して終わりにして、モデルや運用の変化に追随しない（→第4章 LLMOps）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="doc-h2">6.4 「重なり合う」とはどういうことか（具体例）</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            <span className="tag tag-y">例</span>
                            教材が挙げる例：<strong>テストレポート分析はすでにフェーズ3（活用）にあるが、自動テスト生成はまだフェーズ1（発見）にある</strong>、ということが現実に起こります。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>ユースケース（例）</th>
                                        <th>現在のフェーズ（例）</th>
                                        <th>この時に取るべき行動の例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テストレポート分析</td>
                                        <td>フェーズ3：活用と反復</td>
                                        <td>指標を定期確認し、効果が続いているか測る。他チームへ展開</td>
                                    </tr>
                                    <tr>
                                        <td>テストケース生成（機能テスト）</td>
                                        <td>フェーズ2：利用方法の定義</td>
                                        <td>優先順位、プロンプトパターン、レビュー基準を整備</td>
                                    </tr>
                                    <tr>
                                        <td>自動テストスクリプト生成</td>
                                        <td>フェーズ1：発見</td>
                                        <td>低リスクな範囲で試し、限界を学ぶ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="diagram-card" data-diagram="d9">
                            <Mermaid chart={DIAGRAM_D9} />
                            <div className="diagram-caption">
                                3つのユースケースが、それぞれ異なるフェーズに同時に存在している例
                            </div>
                        </div>

                        <h2 className="doc-h2">6.5 人的要因を「早期に」扱う</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            教材は、<strong>雇用への不安（仕事を奪われるのでは、という懸念）など人的要因は、早い段階で扱うことが不可欠</strong>であり、不確実性や恐れは<strong>導入を遅らせ、チームの関与を下げる</strong>と述べています。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>人的要因</th>
                                        <th>起こり得ること</th>
                                        <th>対応の例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>雇用不安</td>
                                        <td>使うことへの抵抗、協力の低下</td>
                                        <td><span className="tag tag-g">実務</span> AIは「置き換え」ではなく「支援」であり、人の判断が重要になることを丁寧に説明（→5.2.3）</td>
                                    </tr>
                                    <tr>
                                        <td>スキル不安</td>
                                        <td>「使いこなせない」と感じて避ける</td>
                                        <td><span className="tag tag-g">実務</span> 段階的な研修、ハンズオン、相談できる場（→5.2.2）</td>
                                    </tr>
                                    <tr>
                                        <td>過信</td>
                                        <td>AI出力を確認せず受け入れる</td>
                                        <td><span className="tag tag-g">実務</span> 品質ゲートとレビュー文化（→5.1.2）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="doc-h2">6.6 ベストプラクティス（5.1.4）</h2>
                        <h3 className="doc-h3">シラバス準拠</h3>
                        <ul className="doc-list">
                            <li><strong>一気に全面導入せず</strong>、フェーズを踏んで進める（ただし厳密な直線ではないと理解する）</li>
                            <li>フェーズ1では<strong>低リスクのユースケース</strong>から</li>
                            <li>フェーズ2では<strong>ユースケースの評価と優先順位付け</strong>、LLM搭載テストインフラの評価、社内専門性の強化</li>
                            <li>フェーズ3では<strong>継続的な監視・測定・改善</strong>と、成功事例の<strong>スケール</strong></li>
                            <li><strong>人的要因（雇用不安等）を早期に扱う</strong></li>
                        </ul>
                        <div className="callout practice">
                            <div className="callout-icon">💡</div>
                            <div className="callout-body">
                                <div className="callout-label">実務ベストプラクティス</div>
                                <div className="table-wrap">
                                    <table className="doc-table">
                                        <thead>
                                            <tr>
                                                <th>フェーズ</th>
                                                <th>施策</th>
                                                <th>ねらい</th>
                                                <th>根拠</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>サンドボックス環境（承認済み・ダミーデータ）を用意する</td>
                                                <td>安全に学べる場を作りシャドーAIを防ぐ</td>
                                                <td>NIST AI 600-1（データプライバシー・情報セキュリティリスク）</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>ユースケースを「効果の大きさ」×「リスクの小ささ」で評価・優先順位付け</td>
                                                <td>成功体験を早く作る</td>
                                                <td>シラバス（ユースケースの評価・優先順位付け）に基づく実務的な整理</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>成功基準（KPI）と、撤退基準をあらかじめ決める</td>
                                                <td>継続・中止の判断を客観化</td>
                                                <td>5.1.2「測定可能な目標」</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>定期的な振り返りとモデル・プロンプトの見直し</td>
                                                <td>品質の劣化やモデル更新に追随</td>
                                                <td>LLMOps（第4章4.2.2）、ISO/IEC 42001の継続的改善の考え方</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>成功したプロンプトと手順を共有資産として標準化</td>
                                                <td>展開しやすくする</td>
                                                <td>5.2.2 プロンプトライブラリ</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">6.7 試験対策メモ（5.1.4）</h2>
                        <ul className="doc-list">
                            <li>出題は<strong>K1</strong>。<strong>フェーズ名・順序・各フェーズの特徴の対応</strong>が中心です。</li>
                            <li><strong>覚え方</strong>：<strong>「試す → 決める → 回す」</strong>（Discovery → Initiation and usage definition → Utilization and iteration）</li>
                            <li>
                                <strong>ひっかけ注意</strong>：
                                <ul className="doc-list">
                                    <li>「各フェーズは厳密に順番に完了させる」→ <strong>誤り</strong>（<strong>重なり合い、ユースケースごとに速度が違う</strong>）</li>
                                    <li>「フェーズ1の目的は、完全なテスト自動化の達成」→ <strong>誤り</strong>（目的は<strong>学習と不確実性の低減</strong>）</li>
                                    <li>「導入は一度きりの実装」→ <strong>誤り</strong>（<strong>段階的な移行</strong>）</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                </div>
            </main>
        </div>
    );
}
