import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import {
    DIAGRAM_D1,
    DIAGRAM_D2,
    DIAGRAM_D3,
    DIAGRAM_D4,
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
                </div>
            </main>
        </div>
    );
}
