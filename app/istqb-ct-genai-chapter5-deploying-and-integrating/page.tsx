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
    DIAGRAM_D10,
    DIAGRAM_D11,
    DIAGRAM_D12,
    DIAGRAM_D13,
    DIAGRAM_D14,
    DIAGRAM_D15,
    DIAGRAM_D16,
} from './diagrams';
import ChecklistCard, { type ChecklistGroup } from './ChecklistCard';
import './istqb-ct-genai-chapter5-deploying-and-integrating.css';

const CHECKLIST_GROUPS: ChecklistGroup[] = [
    {
        title: '5.1 ロードマップ',
        items: [
            {
                id: 'c1',
                text: 'シャドーAIの定義を、自分の言葉で説明できる',
            },
            {
                id: 'c2',
                text: 'シャドーAIの3つのリスク（セキュリティ・プライバシー／コンプライアンス／IP）を挙げられる',
            },
            {
                id: 'c3',
                text: '生成AI戦略の6つの観点（目標／モデル選定／データ品質／教育／指標／ガイドライン）を言える',
            },
            {
                id: 'c4',
                text: '「透明性」と「品質ゲート」の意味を説明できる',
            },
            {
                id: 'c5',
                text: 'モデル選定の4基準（性能／ファインチューニング可能性／継続的コスト／コミュニティとサポート）を言える',
            },
            {
                id: 'c6',
                text: 'テスト特化ベンチマークが少ないため、自組織で評価する必要があると説明できる',
            },
            {
                id: 'c7',
                text: '導入の3フェーズの名称・順序・目的を言える',
            },
            {
                id: 'c8',
                text: 'フェーズが「重なり合う」とはどういうことか、例を挙げられる',
            },
            {
                id: 'c9',
                text: '人的要因（雇用不安）を早期に扱う理由を説明できる',
            },
        ],
    },
    {
        title: '5.2 変革管理',
        items: [
            {
                id: 'c10',
                text: '変革管理が必要な理由を説明できる',
            },
            {
                id: 'c11',
                text: '必要なスキル（プロンプト、コンテキストウィンドウ、評価、リスク認識、サニタイズ、右サイズ）を挙げられる',
            },
            {
                id: 'c12',
                text: 'データサニタイズの具体例を示せる',
            },
            {
                id: 'c13',
                text: 'プロンプトパターンの定義を言える',
            },
            {
                id: 'c14',
                text: 'コミュニティ・オブ・プラクティスの役割を説明できる',
            },
            {
                id: 'c15',
                text: 'テスターとテストマネージャーの役割の変化を、それぞれ説明できる',
            },
            {
                id: 'c16',
                text: '「人間の判断はより重要になる」の意味を説明できる',
            },
        ],
    },
    {
        title: '全体',
        items: [
            {
                id: 'c17',
                text: '第2章（評価指標）、第3章（リスク）、第4章（インフラ）との関連を説明できる',
            },
            {
                id: 'c18',
                text: '確認問題12問に、根拠を添えて解答できた',
            },
            {
                id: 'c19',
                text: '公式シラバスv1.1の第5章を、原文で最終確認した',
            },
        ],
    },
];

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

                    <section className="doc-section" id="s7">
                        <h1 className="doc-h1">7. 5.2 変革管理（チェンジマネジメント）（概要）</h1>

                        <h2 className="doc-h2">7.1 なぜ変革管理が必要なのか</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            生成AIの導入は、<strong>単なる技術アップグレードではなく、人の働き方・役割・品質管理の仕方に影響する変革</strong>です。成功には、<strong>構造化された変革管理</strong>が不可欠です。
                        </p>
                        <p>含まれるもの：</p>
                        <ul className="doc-list">
                            <li><strong>新しいスキル</strong>の育成</li>
                            <li><strong>従来のテスト職務の再定義</strong></li>
                            <li>移行の<strong>技術面と組織面の両方</strong>への対応</li>
                        </ul>
                        <div className="spec-block">
                            <div className="spec-label">ポイント</div>
                            <p>
                                変革管理がないと、どんなに強力なAIツールでも、<strong>使われない・誤用される・積極的に抵抗される</strong>リスクがあります。
                            </p>
                        </div>

                        <h2 className="doc-h2">7.2 5.2の全体像（図解）</h2>
                        <div className="diagram-card">
                            <div data-diagram="d10">
                                <Mermaid chart={DIAGRAM_D10} />
                            </div>
                            <div className="diagram-caption">
                                技術面（5.2.1）と組織面（5.2.2・5.2.3）が、AIツールの活用と抵抗低減につながる
                            </div>
                        </div>
                    </section>

                    <section className="doc-section" id="s8">
                        <h1 className="doc-h1">
                            8. 5.2.1 生成AIを使ったテストに必要なスキルと知識
                            <span className="k-badge">K2</span>
                        </h1>

                        <h2 className="doc-h2">8.1 考え方</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            生成AIを使いこなすには、<strong>従来のテスト専門性に加えて、新しいスキルの組み合わせ</strong>が必要です。基本は「<strong>ドメイン知識・テスト経験 ＋ AI固有のスキル</strong>」です。
                        </p>

                        <h2 className="doc-h2">8.2 必要なスキル一覧</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>スキル領域</th>
                                        <th>中身（要約）</th>
                                        <th>関連する章</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>①</td>
                                        <td><strong>プロンプトエンジニアリング</strong></td>
                                        <td>
                                            明確で、正確で、目的志向のプロンプトを作る力。これがスキルの<strong>中核</strong>
                                        </td>
                                        <td>第2章</td>
                                    </tr>
                                    <tr>
                                        <td>②</td>
                                        <td><strong>コンテキストウィンドウの理解</strong></td>
                                        <td>
                                            入力の量と構造が、出力の品質に影響することを理解する
                                        </td>
                                        <td>第1章1.1.2</td>
                                    </tr>
                                    <tr>
                                        <td>③</td>
                                        <td><strong>AI生成テストウェアのレビュー・評価</strong></td>
                                        <td>
                                            テストケース、欠陥レポート、合成テストデータなどを<strong>評価できる</strong>。「AI結果を評価する力は、かつて手動でテストを設計する力と同じくらい重要になる」
                                        </td>
                                        <td>第2章2.3、第3章3.1</td>
                                    </tr>
                                    <tr>
                                        <td>④</td>
                                        <td>
                                            <strong>LLMの能力と限界の見極め・反復的改善</strong>
                                        </td>
                                        <td>
                                            何ができ、どこまでか。反復的なプロンプトで出力を磨く
                                        </td>
                                        <td>第2章2.3.2</td>
                                    </tr>
                                    <tr>
                                        <td>⑤</td>
                                        <td><strong>GenAIのリスクと軽減策の認識</strong></td>
                                        <td>
                                            テスト成果物をLLMへ送ることのデータセキュリティ上の意味を理解する
                                        </td>
                                        <td>第3章</td>
                                    </tr>
                                    <tr>
                                        <td>⑥</td>
                                        <td><strong>データサニタイズ（無害化）</strong></td>
                                        <td>
                                            機微・個人・機密情報を<strong>マスキングまたは除去</strong>する。<strong>プライバシー保護型のプロンプトエンジニアリング</strong>が日常業務の一部になる
                                        </td>
                                        <td>第3章3.2.3</td>
                                    </tr>
                                    <tr>
                                        <td>⑦</td>
                                        <td><strong>環境・コストへの配慮</strong></td>
                                        <td>
                                            「右サイズ」のモデルを選ぶ／不要な計算を避ける使い方に最適化する／生産性向上とコスト・エネルギー消費のバランスをとる
                                        </td>
                                        <td>第3章3.3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            教材は、これを「<strong>責任あるテストとは、技術的に有能なだけでなく、経済的・環境的にも意識が高いこと</strong>」と表現しています。
                        </p>

                        <h2 className="doc-h2">8.3 スキルの全体像（図解）</h2>
                        <div className="diagram-card">
                            <div data-diagram="d11">
                                <Mermaid chart={DIAGRAM_D11} />
                            </div>
                            <div className="diagram-caption">
                                従来のテスト専門性とAI固有のスキルが組み合わさり、責任あるAI支援テストへつながる
                            </div>
                        </div>

                        <h2 className="doc-h2">8.4 データサニタイズをステップバイステップで理解する</h2>
                        <p>
                            <strong>データサニタイズ（Data sanitisation）</strong>とは、LLMに送る前に、<strong>個人情報・機密情報を、マスキング（伏せ字化・置換）または除去する</strong>ことです（第3章のデータ最小化・匿名化・仮名化と連動）。
                        </p>

                        <h3 className="doc-h3">ステップ1：送信前に「含まれていないか」を確認する</h3>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>種類</th>
                                        <th>例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>個人を特定できる情報</td>
                                        <td>
                                            <span className="tag tag-y">例</span>
                                            氏名、メールアドレス、電話番号、住所、会員ID
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>認証情報・秘密情報</td>
                                        <td>
                                            <span className="tag tag-y">例</span>
                                            パスワード、APIキー、アクセストークン、内部URL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>業務上の機密</td>
                                        <td>
                                            <span className="tag tag-y">例</span>
                                            顧客名、契約金額、未公開の仕様、ソースコードの秘匿部分
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="doc-h3">ステップ2：マスキング／除去／置換を行う</h3>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>元のデータ（例）</th>
                                        <th>サニタイズ後（例）</th>
                                        <th>方法</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="tag tag-y">例</span> 山田太郎
                                            taro.yamada@example.com
                                        </td>
                                        <td>【氏名A】 user_001@example.test</td>
                                        <td>仮名化（架空値へ置換）</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="tag tag-y">例</span> 顧客:
                                            株式会社ABC商事、契約額 1,200万円
                                        </td>
                                        <td>顧客: 【顧客X】、契約額: 【金額】</td>
                                        <td>マスキング（プレースホルダー）</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="tag tag-y">例</span> Authorization: Bearer
                                            eyJhbGciOi...
                                        </td>
                                        <td>（行ごと除去）</td>
                                        <td>除去（そもそも送らない）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="doc-h3">
                            ステップ3：サニタイズ後の入力でプロンプトを作る（プライバシー保護型プロンプト）
                        </h3>
                        <div className="prompt-block">
                            <div className="pb-head"><i className="ti ti-message-2"></i>プロンプト例</div>
                            <code>
                                <span className="ph">【役割】</span>あなたはテスト分析の経験豊富なテストアナリストです。{"\n"}
                                <span className="ph">【状況】</span>以下は、あるWebアプリのエラーログです。<span className="pv">個人情報・認証情報はすでにマスキング済みです。</span>{"\n"}
                                <span className="ph">【指示】</span>エラーの原因候補を3つ挙げ、それぞれの確認手順を示してください。{"\n"}
                                <span className="ph">【制約】</span>ログに存在しない情報を推測で補わないでください。不明な点は「不明」と書いてください。{"\n"}
                                <span className="ph">【出力形式】</span>表（原因候補／根拠となるログ行／確認手順）{"\n"}
                                <span className="ph">【入力データ】</span>（マスキング済みログをここに貼り付け）
                            </code>
                        </div>

                        <h3 className="doc-h3">送信前チェックの流れ（図解）</h3>
                        <div className="diagram-card">
                            <div data-diagram="d12">
                                <Mermaid chart={DIAGRAM_D12} />
                            </div>
                            <div className="diagram-caption">
                                <span className="tag tag-y">例</span>
                                機密情報の有無確認からマスキング、承認済み環境の確認、送信後のレビューまでの流れ
                            </div>
                        </div>

                        <h2 className="doc-h2">8.5 「右サイズ」モデルとコスト・エネルギーの考え方</h2>
                        <ul className="doc-list">
                            <li>
                                <span className="tag tag-b">準拠</span>
                                全部のタスクに最大・最高性能のモデルを使う必要はありません。<strong>タスクに見合ったモデル（右サイズ）</strong>を選びます。
                            </li>
                            <li>
                                不要な計算（重複した問い合わせ、必要以上に長い入力など）を減らし、<strong>使い方を最適化</strong>します（第3章3.3：不要なモデル操作を制限することが重要）。
                            </li>
                            <li>
                                <strong>生産性向上とコスト・エネルギー消費のバランス</strong>を考えます。
                            </li>
                        </ul>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>タスクの性質（例）</th>
                                        <th>適したモデルの方向性（例）</th>
                                        <th>理由</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ログの要約、定型的な分類</td>
                                        <td>軽量なモデル（SLM等）で足りる場合がある</td>
                                        <td>計算負荷・コストを抑えられる</td>
                                    </tr>
                                    <tr>
                                        <td>リスクに基づく優先順位付けなど複雑な多段階推論</td>
                                        <td>推論能力の高いモデルを検討</td>
                                        <td>推論エラーの抑制（第3章3.1.1）</td>
                                    </tr>
                                    <tr>
                                        <td>画面キャプチャの不整合検出</td>
                                        <td>マルチモーダル対応モデル</td>
                                        <td>画像入力が必要（第1章1.1.4）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="doc-h2">8.6 ベストプラクティス（5.2.1）</h2>
                        <h3 className="doc-h3">シラバス準拠</h3>
                        <ul className="doc-list">
                            <li>
                                <strong>プロンプト設計</strong>、<strong>入力量・構造の調整</strong>、<strong>出力の評価</strong>を「日常業務のスキル」として身につける
                            </li>
                            <li>
                                LLMへ送る前に<strong>データサニタイズ</strong>（マスキング・除去）を行う
                            </li>
                            <li><strong>右サイズ</strong>のモデルを選び、使い方を最適化する</li>
                        </ul>
                        <div className="callout practice">
                            <div className="callout-icon"><i className="ti ti-bulb"></i></div>
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
                                                <td>
                                                    <strong>スキルマトリクス</strong>（役割別に必要なAIスキルと現在レベル）を作る
                                                </td>
                                                <td>教育の優先順位を決める</td>
                                                <td>
                                                    EU AI Act第4条（AIリテラシー）の考え方に沿う実務的な整理
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    役割に応じた<strong>AIリテラシー研修</strong>を実施し、記録する
                                                </td>
                                                <td>組織としての説明責任を果たす</td>
                                                <td>
                                                    EU AI Act第4条（原文と改正の最新内容は公式条文で要確認）
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>プロンプトインジェクション</strong>や<strong>機密情報の出力</strong>などのリスクを、テスターも基本レベルで理解する
                                                </td>
                                                <td>攻撃・漏えいの早期気づき</td>
                                                <td>
                                                    OWASP Top 10 for LLM Applications 2025（LLM01/LLM02）
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">8.7 試験対策メモ（5.2.1）</h2>
                        <ul className="doc-list">
                            <li>
                                出題は<strong>K2</strong>。<strong>「テスターが身につけるべきスキルとして適切なもの」</strong>、<strong>「なぜそれが必要か」</strong>を選ぶ形が想定されます。
                            </li>
                            <li>
                                <strong>キーワード</strong>：プロンプトエンジニアリング／コンテキストウィンドウ／出力評価／データサニタイズ（マスキング・除去）／右サイズのモデル／コストと環境。
                            </li>
                            <li>
                                <strong>ひっかけ注意</strong>：「AI導入後は、ドメイン知識・テスト経験は不要になる」→ <strong>誤り</strong>。<strong>テスト経験とAIスキルの組み合わせ</strong>が必要です。
                            </li>
                        </ul>
                    </section>

                    <section className="doc-section" id="s9">
                        <h1 className="doc-h1">
                            9. 5.2.2 テストチームの生成AI能力の構築 <span className="k-badge">K1</span>
                        </h1>

                        <h2 className="doc-h2">9.1 基本の考え方</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            チームの本当のGenAI能力は、<strong>理論だけでは身につきません</strong>。<strong>ハンズオン中心</strong>のアプローチが不可欠です。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>必要なもの</th>
                                        <th>内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>実践的な体験</td>
                                        <td>複数のLLM/SLMに実際に触れる</td>
                                    </tr>
                                    <tr>
                                        <td>段階的な学習パス</td>
                                        <td>順序立てて学べる道筋</td>
                                    </tr>
                                    <tr>
                                        <td>継続的な機会</td>
                                        <td>実際のテストシナリオでGenAIを適用し続ける機会</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            能力は、<strong>実験・振り返り・共有された経験</strong>を通じて徐々に育ちます。
                        </p>

                        <h2 className="doc-h2">9.2 能力の成長ステップ（図解）</h2>
                        <div className="diagram-card">
                            <div data-diagram="d13">
                                <Mermaid chart={DIAGRAM_D13} />
                            </div>
                            <div className="diagram-caption">
                                基本的なプロンプト作成から、プロンプトパターン・共有ライブラリへ。実践共同体が学習を後押しする
                            </div>
                        </div>

                        <h2 className="doc-h2">9.3 重要キーワードの解説</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>用語</th>
                                        <th>意味</th>
                                        <th>ポイント</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>プロンプトパターン（Prompt patterns）</strong>
                                        </td>
                                        <td>
                                            <strong>再利用可能なプロンプトのテンプレート</strong>。一貫性と信頼性のある結果を得るために設計
                                        </td>
                                        <td>
                                            「何がうまくいき、何がうまくいかないか」という<strong>組織の知識が詰まっている</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>コミュニティ・オブ・プラクティス（Communities of practice）</strong>
                                        </td>
                                        <td>学習を継続させる社内の実践共同体</td>
                                        <td>
                                            定期的に<strong>成功したユースケース</strong>を共有／<strong>失敗と限界</strong>を議論／アプローチを<strong>共同で改善</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>共有プロンプトライブラリ</strong></td>
                                        <td>使えるプロンプトを集めた共有の仕組み</td>
                                        <td><strong>戦略的な資産</strong>になる</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>文書化された教訓（Lessons learned）</strong>
                                        </td>
                                        <td>得られた学びの記録</td>
                                        <td>同上。<strong>戦略的な資産</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="spec-block">
                            <div className="spec-label">狙い</div>
                            <p>
                                GenAI能力が一部の専門家に<strong>閉じない</strong>こと。<strong>組織全体の集団的な強み</strong>にすること。
                            </p>
                        </div>

                        <h2 className="doc-h2">
                            9.4 プロンプトライブラリの作り方（ステップバイステップ）
                        </h2>
                        <h3 className="doc-h3">ステップ1：1件のプロンプトを「部品」として整理する</h3>
                        <p>
                            第2章の<strong>6つの構成要素</strong>（役割・文脈・指示・入力データ・制約・出力形式）を使って、再利用しやすい形にします。
                        </p>

                        <h3 className="doc-h3">
                            ステップ2：メタ情報を付ける（ライブラリ登録フォーマット例）
                        </h3>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>記入例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>プロンプトID／名前</strong></td>
                                        <td>
                                            <span className="tag tag-y">例</span>
                                            TC-GEN-001／ユーザーストーリーからのテストケース生成
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>目的・対象タスク</strong></td>
                                        <td>
                                            <span className="tag tag-y">例</span>
                                            受け入れ基準から機能テストケースを作成する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>想定モデル・設定</strong></td>
                                        <td>使用モデル、温度パラメータ等（第3章3.1.4）</td>
                                    </tr>
                                    <tr>
                                        <td><strong>プロンプト本文（6要素）</strong></td>
                                        <td>役割／文脈／指示／入力データ／制約／出力形式</td>
                                    </tr>
                                    <tr>
                                        <td><strong>使用する技法</strong></td>
                                        <td>
                                            プロンプトチェーン、フューショット、メタプロンプト（第2章）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>入力してよいデータ区分</strong></td>
                                        <td>
                                            <span className="tag tag-y">例</span>
                                            「個人情報は禁止。マスキング済みのみ」など（5.1.1、5.2.1）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>評価結果</strong></td>
                                        <td>
                                            使用した指標（正確性、実行成功率など）と結果（2.3.1）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>既知の限界・注意点</strong></td>
                                        <td>
                                            <span className="tag tag-y">例</span>
                                            「非機能要件を出しにくい」など
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>バージョン・更新日・オーナー</strong></td>
                                        <td>
                                            <span className="tag tag-y">例</span>
                                            v1.2／2026-09-24／担当者名
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="doc-h3">ステップ3：評価・改善のサイクルに乗せる</h3>
                        <p>
                            第2章2.3.2の<strong>プロンプト評価・改善技法</strong>（反復的な修正、A/Bテスト、出力分析、ユーザーフィードバック、長さ・具体性の調整）を、ライブラリのプロンプトに継続適用します。
                        </p>

                        <h3 className="doc-h3">ステップ4：チームで共有・レビューする</h3>
                        <p>
                            定期的な<strong>プロンプト評価・最適化セッション</strong>を開催し、成功例・失敗例を共有します（第2章2.3.2）。
                        </p>

                        <h2 className="doc-h2">9.5 ベストプラクティス（5.2.2）</h2>
                        <h3 className="doc-h3">シラバス準拠</h3>
                        <ul className="doc-list">
                            <li><strong>ハンズオン</strong>中心の学習（複数のLLM/SLMを体験）</li>
                            <li><strong>基本 → テスト特化 → パターン</strong>へと段階的に進む</li>
                            <li>
                                <strong>コミュニティ・オブ・プラクティス</strong>で定期的に共有する
                            </li>
                            <li>
                                <strong>プロンプトライブラリと教訓</strong>を戦略的資産として蓄積する
                            </li>
                        </ul>
                        <div className="callout practice">
                            <div className="callout-icon"><i className="ti ti-bulb"></i></div>
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
                                                <td>
                                                    プロンプトを<strong>コード成果物として扱う</strong>（バージョン管理、レビュー）
                                                </td>
                                                <td>変更履歴の追跡、品質の維持</td>
                                                <td>
                                                    AWS Prescriptive Guidance（「Treat prompts as code artifacts」）
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    社内に<strong>チャンピオン</strong>（推進役）を置き、相談窓口にする
                                                </td>
                                                <td>
                                                    一部の専門家依存を避けつつ、立ち上がりを早める
                                                </td>
                                                <td>
                                                    変革管理の一般的な実務（教材の「コミュニティ」の趣旨と整合）
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    学習コンテンツに<strong>失敗例</strong>を含める
                                                </td>
                                                <td>過信を防ぐ</td>
                                                <td>
                                                    第3章3.1（ハルシネーション、推論エラー、バイアス）
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    社内公開するプロンプトに<strong>入力禁止データ</strong>を明記する
                                                </td>
                                                <td>シャドーAI・情報漏えいの防止</td>
                                                <td>5.1.1、第3章3.2.3</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">9.6 試験対策メモ（5.2.2）</h2>
                        <ul className="doc-list">
                            <li>
                                出題は<strong>K1</strong>。<strong>「プロンプトパターン」の定義</strong>、<strong>「コミュニティ・オブ・プラクティスの役割」</strong>、<strong>「共有プロンプトライブラリが資産になる」</strong>が狙われやすい点です。
                            </li>
                            <li>
                                <strong>ひっかけ注意</strong>：
                                <ul className="doc-list">
                                    <li>
                                        「GenAI能力は座学の研修だけで十分に身につく」→ <strong>誤り</strong>（<strong>ハンズオンが不可欠</strong>）
                                    </li>
                                    <li>
                                        「GenAIに詳しい少数の専門家だけが使えればよい」→ <strong>誤り</strong>（<strong>集団的な強みにする</strong>）
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section className="doc-section" id="s10">
                        <h1 className="doc-h1">
                            10. 5.2.3 AI対応テスト組織におけるテストプロセスの進化
                            <span className="k-badge">K1</span>
                        </h1>

                        <h2 className="doc-h2">10.1 全体像</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            GenAIがテストプロセスに組み込まれると、<strong>テスターとテストマネージャーの役割が根本的に変わります</strong>。
                        </p>
                        <div className="diagram-card">
                            <div data-diagram="d14">
                                <Mermaid chart={DIAGRAM_D14} />
                            </div>
                            <div className="diagram-caption">
                                テスターとテストマネージャーの役割が、それぞれ新しい形へ進化する
                            </div>
                        </div>

                        <h2 className="doc-h2">10.2 テスターの役割の変化</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>従来の責任</th>
                                        <th>AI支援後に加わる／重みが増す責任</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テストケースの作成・テストの実行が中心</td>
                                        <td>それだけで終わらない</td>
                                    </tr>
                                    <tr>
                                        <td>—</td>
                                        <td><strong>巧みに作られたプロンプトでAIを導く</strong></td>
                                    </tr>
                                    <tr>
                                        <td>—</td>
                                        <td><strong>AI生成結果を批判的にレビューする</strong></td>
                                    </tr>
                                    <tr>
                                        <td>—</td>
                                        <td><strong>反復的なプロンプトで出力を改善する</strong></td>
                                    </tr>
                                    <tr>
                                        <td>—</td>
                                        <td>
                                            <strong>テスト用のプロンプトライブラリを維持する</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>—</td>
                                        <td>
                                            <strong>どのAI結果を信頼し、どれを修正・破棄するかを判断する</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="spec-block">
                            <div className="spec-label">最重要ポイント</div>
                            <p>
                                <strong>人間の判断は、より重要になる</strong>（less ではなく more）。
                            </p>
                        </div>

                        <h2 className="doc-h2">10.3 テストマネージャーの役割の変化</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>責任領域</th>
                                        <th>内容（要約）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>AIベースのテスト戦略の策定</strong></td>
                                        <td>5.1.2の観点を踏まえた戦略づくり</td>
                                    </tr>
                                    <tr>
                                        <td><strong>AIを意識したリスクマネジメント</strong></td>
                                        <td>
                                            AI固有のリスク（ハルシネーション、データ、規制等）を織り込む
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>AI支援テストプロセスの監視と統制</strong></td>
                                        <td>指標に基づき効果とリスクを見る</td>
                                    </tr>
                                    <tr>
                                        <td><strong>人の専門性とAI能力のバランス</strong></td>
                                        <td>何をAIに任せ、何を人が判断するか</td>
                                    </tr>
                                    <tr>
                                        <td><strong>ガバナンスの枠組みの定義</strong></td>
                                        <td>利用ルール、責任、承認済みツール等</td>
                                    </tr>
                                    <tr>
                                        <td><strong>品質への人の説明責任の維持</strong></td>
                                        <td>「自動化に盲目的に委ねない」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>AI対応ワークフローの調整</strong></td>
                                        <td>
                                            人間のテスターだけでなく、AI支援のワークフローも統括
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>ポリシー・規制へのコンプライアンス確保</strong>
                                        </td>
                                        <td>規制や社内ポリシーの順守（第3章3.4）</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>戦略的・倫理的・運用上のリスクからの保護</strong>
                                        </td>
                                        <td>組織を守る</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            教材は、マネージャーの役割を「<strong>オーケストレーション（人・プロセス・知的システムを、一貫した統制されたテスト戦略へ整合させること）</strong>」と表現しています。
                        </p>

                        <h2 className="doc-h2">
                            10.4 役割の変化と責任分担のイメージ（責任分担表の例）
                        </h2>
                        <p>
                            <span className="tag tag-y">例</span>
                            以下は、理解を助けるための<strong>架空の責任分担表</strong>です（実際の体制は組織に合わせて設計します）。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>活動</th>
                                        <th>テスター</th>
                                        <th>テストマネージャー</th>
                                        <th>承認者・関係部門（例）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>プロンプトの作成・改善</td>
                                        <td>実行</td>
                                        <td>助言</td>
                                        <td>—</td>
                                    </tr>
                                    <tr>
                                        <td>AI生成物のレビュー（品質ゲート）</td>
                                        <td>実行・判断</td>
                                        <td>基準の設定</td>
                                        <td>—</td>
                                    </tr>
                                    <tr>
                                        <td>プロンプトライブラリの維持</td>
                                        <td>実行</td>
                                        <td>方針・監督</td>
                                        <td>—</td>
                                    </tr>
                                    <tr>
                                        <td>利用ポリシー・ガバナンス枠組みの策定</td>
                                        <td>意見</td>
                                        <td>実行</td>
                                        <td>セキュリティ・法務が承認</td>
                                    </tr>
                                    <tr>
                                        <td>効果測定・監視・改善判断</td>
                                        <td>データ提供</td>
                                        <td>実行・判断</td>
                                        <td>経営層へ報告</td>
                                    </tr>
                                    <tr>
                                        <td>規制・ポリシー順守の確認</td>
                                        <td>遵守</td>
                                        <td>責任</td>
                                        <td>法務・コンプライアンス</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="doc-h2">10.5 ベストプラクティス（5.2.3）</h2>
                        <h3 className="doc-h3">シラバス準拠</h3>
                        <ul className="doc-list">
                            <li>
                                <strong>人の判断を中心に置く</strong>：AI出力は、テスターが批判的にレビューし、信頼・修正・破棄を判断する
                            </li>
                            <li>
                                テストマネージャーは、<strong>AI戦略・AIリスク管理・監視統制・ガバナンス</strong>を担う
                            </li>
                            <li>
                                <strong>品質は人の説明責任のもとにある</strong>（AIに丸投げしない）
                            </li>
                        </ul>
                        <div className="callout practice">
                            <div className="callout-icon"><i className="ti ti-bulb"></i></div>
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
                                                <td>
                                                    <strong>役割記述書・評価項目を更新</strong>し、AIレビュー、プロンプトライブラリ保守などを明記する
                                                </td>
                                                <td>新しい責任を「業務」として認める</td>
                                                <td>変革管理の一般的な実務（5.2の趣旨）</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    AI支援の<strong>判断ログ</strong>（採用・修正・却下の理由）を残す
                                                </td>
                                                <td>説明責任と学習の両立</td>
                                                <td>
                                                    NIST AI RMF（Govern／Measure）、ISO/IEC 42001（説明責任・継続的改善）
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>AI活用の成果を人の評価に適切に反映</strong>する
                                                </td>
                                                <td>「効率化＝要員削減」という不安を和らげる</td>
                                                <td>5.1.4 人的要因を早期に扱う</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">10.6 試験対策メモ（5.2.3）</h2>
                        <ul className="doc-list">
                            <li>
                                出題は<strong>K1</strong>。<strong>「テスター／テストマネージャーの責任として、AI導入後に適切なもの」</strong>を選ぶ形が想定されます。
                            </li>
                            <li>
                                <strong>キーワード</strong>：<strong>AI支援テストスペシャリスト</strong>／プロンプトで導く／批判的レビュー／プロンプトライブラリ維持／<strong>オーケストレーション</strong>／人の説明責任。
                            </li>
                            <li>
                                <strong>ひっかけ注意</strong>：「AIが進歩すると、人間の判断の重要性は下がる」→ <strong>誤り</strong>。<strong>より重要になります</strong>。
                            </li>
                        </ul>
                    </section>

                    <section className="doc-section" id="s11">
                        <h1 className="doc-h1">
                            11. 導入形態ごとのベストプラクティス（サービス・機能別）
                        </h1>
                        <p>
                            第5章では特定の製品名は扱いませんが、<strong>どの「形」で生成AIを導入するか</strong>によって、注意点とベストプラクティスが変わります。ここでは、第1章〜第4章で学んだ<strong>導入形態・機能の種類</strong>ごとに整理します。
                        </p>

                        <h2 className="doc-h2">11.1 導入形態の全体像</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>導入形態</th>
                                        <th>概要</th>
                                        <th>参照章</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>AIチャットボット</strong></td>
                                        <td>
                                            会話形式でLLMとやりとりする。素早い質問・探索・日常的な作業向け
                                        </td>
                                        <td>第1章1.2.2</td>
                                    </tr>
                                    <tr>
                                        <td><strong>LLM搭載テストアプリケーション</strong></td>
                                        <td>
                                            APIでLLMを組み込み、テストツールやフレームワークに統合。明確に定義された作業を自動化
                                        </td>
                                        <td>第1章1.2.2／第4章4.1.1</td>
                                    </tr>
                                    <tr>
                                        <td><strong>RAG（検索拡張生成）</strong></td>
                                        <td>
                                            社内文書やテストデータを検索して、その内容を根拠に回答を生成
                                        </td>
                                        <td>第4章4.1.2</td>
                                    </tr>
                                    <tr>
                                        <td><strong>LLM搭載エージェント</strong></td>
                                        <td>
                                            定義されたツールを呼び出し、半自律／自律的にタスクを実行
                                        </td>
                                        <td>第4章4.1.3</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>ファインチューニングしたモデル（LLM/SLM）</strong>
                                        </td>
                                        <td>
                                            自組織のデータで追加学習し、形式・用語・専門性に合わせる
                                        </td>
                                        <td>第4章4.2.1</td>
                                    </tr>
                                    <tr>
                                        <td><strong>運用基盤（LLMOps）</strong></td>
                                        <td>展開・監視・管理のための運用プロセス</td>
                                        <td>第4章4.2.2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="doc-h2">11.2 導入形態別ベストプラクティス表</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>導入形態</th>
                                        <th>向いている用途</th>
                                        <th>シラバス準拠のポイント</th>
                                        <th>実務ベストプラクティス</th>
                                        <th>導入の目安フェーズ（5.1.4）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>AIチャットボット</strong></td>
                                        <td>
                                            定型作業、探索的テスト、要件の疑問出し、新人のオンボーディング、素早いフィードバック
                                        </td>
                                        <td>
                                            プロンプトチェーンで出力を段階的に洗練。<strong>強いプロンプトエンジニアリング</strong>が必須
                                        </td>
                                        <td>
                                            <strong>法人向けの承認済み環境</strong>を用意し、個人アカウントの利用を減らす。入力禁止データを明文化
                                        </td>
                                        <td>1（発見）→ 2</td>
                                    </tr>
                                    <tr>
                                        <td><strong>LLM搭載テストアプリ</strong></td>
                                        <td>
                                            テストケース生成、欠陥分析、テストデータ合成の<strong>定型的・反復的</strong>な自動化
                                        </td>
                                        <td>
                                            バックエンドが認証・データ取得・プロンプト準備・<strong>後処理</strong>を担う。既存テストフレームワークへ組み込み可能
                                        </td>
                                        <td>
                                            <strong>プロンプトをコードと同様にバージョン管理</strong>。実行ログ・出力を保存して評価に使う
                                        </td>
                                        <td>2 → 3</td>
                                    </tr>
                                    <tr>
                                        <td><strong>RAG</strong></td>
                                        <td>
                                            最新の仕様・要件・既存テストデータに沿った<strong>根拠ある</strong>テスト分析・設計
                                        </td>
                                        <td>
                                            文書をチャンクに分割し埋め込み（ベクトル）化して検索。<strong>最新の企業データに基づく</strong>回答を得られる
                                        </td>
                                        <td>
                                            検索対象の<strong>アクセス権とデータ分類</strong>を整理する（機密文書の漏えい防止）。出典を出力に含めて確認しやすくする
                                        </td>
                                        <td>2 → 3</td>
                                    </tr>
                                    <tr>
                                        <td><strong>LLM搭載エージェント</strong></td>
                                        <td>反復的なテストタスクの自動化</td>
                                        <td>
                                            ハルシネーション・推論エラー・バイアスは<strong>エージェントでも起こる</strong>。<strong>自動検証手順</strong>の実装、または<strong>重要タスクには半自律型</strong>を使う
                                        </td>
                                        <td>
                                            権限を<strong>最小限</strong>に絞る。人の承認ポイントを設ける。エージェントの行動ログを残す
                                        </td>
                                        <td>2 → 3（慎重に）</td>
                                    </tr>
                                    <tr>
                                        <td><strong>ファインチューニング済みモデル</strong></td>
                                        <td>組織固有の形式・用語でのテストケース生成など</td>
                                        <td>
                                            <strong>高品質でタスク特化のデータ</strong>で学習させる（バイアス・不正確さの回避）。SLMなら計算負荷を抑えられる
                                        </td>
                                        <td>
                                            学習データから<strong>機密・個人情報を除去</strong>。再学習の手順と評価指標を決めておく
                                        </td>
                                        <td>2 → 3</td>
                                    </tr>
                                    <tr>
                                        <td><strong>運用基盤（LLMOps）</strong></td>
                                        <td>継続運用・監視・管理</td>
                                        <td>モデルの展開と管理のための運用プロセス</td>
                                        <td>
                                            バージョン、性能低下、コストを監視。ロールバック手順を用意
                                        </td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--color-ink-faint)' }}>
                            上の表の「シラバス準拠のポイント」は主に第1章・第4章・第3章の記述に基づき、「実務ベストプラクティス」と「導入の目安フェーズ」は本ガイド独自の整理です。
                        </p>

                        <h2 className="doc-h2">11.3 ホスティング（配置）の選び方</h2>
                        <p>
                            第3章3.2.3は、<strong>機密性のレベルに応じて、次の3つの安全な運用環境</strong>から選ぶことを示しています。
                        </p>
                        <div className="diagram-card">
                            <div data-diagram="d15">
                                <Mermaid chart={DIAGRAM_D15} />
                            </div>
                            <div className="diagram-caption">
                                データの機密性に応じて、商用プラン・セキュアクラウド・自社インフラのいずれかを選ぶ
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>配置</th>
                                        <th>メリット（一般論）</th>
                                        <th>注意点（一般論）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>商用のセキュアな提供プラン</td>
                                        <td>導入が早い、運用負担が小さい</td>
                                        <td>
                                            契約条件（データの学習利用の有無、保存、所在地）を確認
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>セキュアなクラウド運用</td>
                                        <td>管理の自由度と拡張性のバランス</td>
                                        <td>構成・アクセス制御・監視を自組織が担う</td>
                                    </tr>
                                    <tr>
                                        <td>自組織インフラへの導入</td>
                                        <td>データを外に出さずに済む</td>
                                        <td>設備・人材・保守・モデル更新のコストが大きい</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout source">
                            <div className="callout-icon"><i className="ti ti-external-link"></i></div>
                            <div className="callout-body">
                                <div className="callout-label">ソース</div>
                                <p>
                                    第3章3.2.3：セキュリティエンジニア、法務、CTO、CISOなどの<strong>関与が強く推奨</strong>されています。
                                </p>
                            </div>
                        </div>

                        <h2 className="doc-h2">11.4 テスト活動別：導入の始め方と品質ゲート</h2>
                        <p>
                            第2章で学んだ4つのテスト活動を、5.1.4のフェーズ導入と組み合わせて考えます。<strong>どのAI出力にどれだけレビューを掛けるか</strong>は、リスクの大きさで調整します（第3章3.1.2）。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>テスト活動</th>
                                        <th>GenAIの支援例</th>
                                        <th>導入の始め方（低リスクから）</th>
                                        <th>品質ゲートの例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>テスト分析</strong></td>
                                        <td>
                                            テストベースの欠陥（曖昧さ・矛盾）検出、テスト条件の生成、リスクに基づく優先順位付け、カバレッジ分析、テスト技法の提案
                                        </td>
                                        <td>
                                            まず<strong>要件の曖昧さの指摘</strong>（人が最終判断できる用途）から
                                        </td>
                                        <td>
                                            生成されたテスト条件を、元の要件と<strong>照合</strong>（相互検証）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>テスト設計・実装</strong></td>
                                        <td>
                                            テストケース生成、合成テストデータ、テストスクリプト生成、実行スケジュール・優先順位付け
                                        </td>
                                        <td>
                                            小さな機能の<strong>下書き作成</strong>から。実際の個人情報は使わず合成データで
                                        </td>
                                        <td>
                                            実行してみて<strong>実行成功率</strong>を確認。レビュー承認後に登録
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>自動リグレッション</strong></td>
                                        <td>
                                            キーワード駆動スクリプト、影響分析、自己修復テスト、レポート・欠陥レポート作成
                                        </td>
                                        <td>
                                            <strong>テストレポート分析</strong>（読み取り中心）から。教材では、すでにフェーズ3に達し得る例として挙げられている
                                        </td>
                                        <td>
                                            誤りの可能性を前提に<strong>リスクに応じて出力を検証</strong>。自己修復の結果は人が確認
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>テスト監視・統制</strong></td>
                                        <td>
                                            指標分析、傾向予測、再優先順位付けの提案、完了レポート、ダッシュボード・自然言語要約
                                        </td>
                                        <td>
                                            ダッシュボードの<strong>要約・傾向の説明</strong>から
                                        </td>
                                        <td>
                                            元データとの<strong>整合確認</strong>。意思決定は人が行う
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            各活動の一般的な誤りの対策として、<strong>プロンプトチェーンで段階ごとに検証</strong>し（第3章3.1.3）、<strong>完全な文脈</strong>と<strong>明確なデータ形式</strong>を与えることが有効です。
                        </p>
                    </section>

                    <section className="doc-section" id="s12">
                        <h1 className="doc-h1">
                            12. 関連する規制・標準・フレームワーク（第3章との接続）
                        </h1>

                        <h2 className="doc-h2">12.1 シラバス（第3章3.4.1）に挙げられているもの</h2>
                        <p>
                            <span className="tag tag-b">準拠</span>
                            第5章の「ガバナンス」「コンプライアンス」「AIリスクマネジメント」の背景として、第3章の一覧を再確認しておきます。<strong>名称と種別の対応</strong>はK1（暗記）で問われ得ます。
                        </p>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>名称</th>
                                        <th>種別</th>
                                        <th>概要（要約）</th>
                                        <th>テストでの適用（要約）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>ISO/IEC 42001:2023</strong></td>
                                        <td>標準</td>
                                        <td>
                                            組織内でAIシステムを管理するための<strong>マネジメントシステム</strong>の要求事項
                                        </td>
                                        <td>
                                            テストでのGenAI利用が推奨される実践に沿い、一貫性・信頼性を高める
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>ISO/IEC 23053:2022</strong></td>
                                        <td>標準</td>
                                        <td>
                                            機械学習を用いたAIシステムの<strong>フレームワーク</strong>。AIライフサイクルのプロセス、フォールトトレランス、透明性を重視
                                        </td>
                                        <td>
                                            データ品質、透明性、フォールトトレランスの枠組みを提供
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>EU AI Act</strong></td>
                                        <td>規制</td>
                                        <td>
                                            AIリスクを扱う<strong>法的枠組み</strong>。<strong>リスクベースのアプローチ</strong>で、AIシステムを用途に応じたリスクレベル（禁止・高リスク・限定的リスク・最小リスク）に分類し、義務はレベルごとに異なる
                                        </td>
                                        <td>
                                            義務は全AIシステムに一律ではない。<strong>透明性義務</strong>は対象として定められたシステム（人と対話するAI、生成コンテンツ等）の提供者・導入者に課され、<strong>高リスクAI</strong>にはリスク管理、データガバナンス（バイアス対策を含む）、人による監視、文書化などの追加要件が課される。テストでは、対象システムのリスク区分を確認したうえで該当する義務への準拠を検証する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>NIST AI Risk Management Framework（米国）</strong>
                                        </td>
                                        <td>フレームワーク</td>
                                        <td>
                                            AIリスクを管理する指針（公平性、透明性、セキュリティ）
                                        </td>
                                        <td>公平性を確保し、偏ったテスト結果を防ぐ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mnemonic">
                            <strong>覚え方：</strong>標準2つ（ISO）、規制1つ（EU）、フレームワーク1つ（NIST）。シラバスは、これらの<strong>最新動向を組織が継続的に把握すること</strong>の重要性も述べています。
                        </div>

                        <h2 className="doc-h2">12.2 第5章の各項目との対応</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>第5章の項目</th>
                                        <th>関連する規制・標準（例）</th>
                                        <th>どう役立つか</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5.1.1 シャドーAI</td>
                                        <td>
                                            EU AI Act、NIST AI RMF（Govern）、GDPR（第3章3.2.1）
                                        </td>
                                        <td>
                                            未承認ツールの利用は、統制・透明性・データ保護の要求に反しやすい
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5.1.2 戦略の観点</td>
                                        <td>
                                            NIST AI RMF（Govern／Map／Measure／Manage）、ISO/IEC 42001
                                        </td>
                                        <td>目標・責任・測定・改善のサイクルを整理する枠組み</td>
                                    </tr>
                                    <tr>
                                        <td>5.1.4 フェーズ3（継続的改善）</td>
                                        <td>ISO/IEC 42001（継続的改善）</td>
                                        <td>監視・測定・改善を仕組みにする考え方</td>
                                    </tr>
                                    <tr>
                                        <td>5.2.1 スキル・リテラシー</td>
                                        <td>EU AI Act第4条（AIリテラシー）</td>
                                        <td>従業員のAI理解を高める措置</td>
                                    </tr>
                                    <tr>
                                        <td>5.2.3 マネージャーの役割</td>
                                        <td>EU AI Act、NIST AI RMF</td>
                                        <td>人による監督・説明責任の位置づけ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="doc-h2">
                            12.3 補足：EU AI Act第4条（AIリテラシー）に関する注意（試験範囲外）
                        </h2>
                        <div className="callout note">
                            <div className="callout-icon"><i className="ti ti-info-circle"></i></div>
                            <div className="callout-body">
                                <div className="callout-label">補足</div>
                                <ul className="doc-list" style={{ marginBottom: 0 }}>
                                    <li>
                                        <strong>2025年2月2日〜2026年7月26日（改正前）</strong>：第4条は、AIシステムの提供者・導入者に対し、従業員等について<strong>「可能な限り、十分なレベルのAIリテラシーを確保する」措置</strong>を講じることを求めていました。
                                    </li>
                                    <li>
                                        <strong>2026年7月27日以降（改正後）</strong>：Digital Omnibus on AI（Regulation (EU) 2026/1744）により第4条が全面的に改正され、提供者・導入者に求められるのは<strong>AIリテラシーの育成を支援する措置</strong>になりました。改正後の条文は、<strong>個人ごとに特定のAIリテラシー水準を保証することまでは求めない</strong>と明記しています（改正前の「可能な限り、十分なレベルのAIリテラシーを確保する措置」から、改正後の「AIリテラシーの育成を支援する措置」へと求められる措置の内容が変わりました）。
                                    </li>
                                    <li>
                                        <strong>実務で対応する場合は、必ず公式条文と最新の公的ガイダンスを確認してください</strong>（URLは16章参照）。試験（CT-GenAI）では、この改正の詳細は問われません。
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="doc-section" id="s13">
                        <h1 className="doc-h1">13. 章のまとめ・重要用語・暗記表</h1>

                        <h2 className="doc-h2">13.1 第5章の全体フロー（総まとめの図解）</h2>
                        <div className="diagram-card">
                            <div data-diagram="d16">
                                <Mermaid chart={DIAGRAM_D16} />
                            </div>
                            <div className="diagram-caption">
                                5.1ロードマップと5.2変革管理が合わさり、統制されたAI支援テスト組織へ至る
                            </div>
                        </div>

                        <h2 className="doc-h2">13.2 暗記表（K1問題の対策）</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>暗記内容</th>
                                        <th>覚え方</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>シャドーAIとは</strong></td>
                                        <td>個人用・未承認のAIツールの非公式利用</td>
                                        <td>「私物USBのAI版」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>シャドーAIの3リスク</strong></td>
                                        <td>
                                            ①情報セキュリティ・プライバシーの弱点 ②コンプライアンス・規制問題 ③知的財産の不明確さ
                                        </td>
                                        <td>「漏れる・違反する・権利があいまい」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>戦略の観点</strong></td>
                                        <td>
                                            測定可能な目標／LLM・SLM選定／データ品質とセキュリティ／教育／指標／ガイドライン（機密データ・透明性・品質ゲート）
                                        </td>
                                        <td>「目・モ・デ・教・指・ガ」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>モデル選定の4基準</strong></td>
                                        <td>
                                            モデル性能／ファインチューニング可能性／継続的コスト／コミュニティとサポート
                                        </td>
                                        <td>「性能・チューニング・コスト・サポート」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>導入の3フェーズ</strong></td>
                                        <td>
                                            Discovery／Initiation and usage definition／Utilization and iteration
                                        </td>
                                        <td>「試す・決める・回す」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>フェーズの性質</strong></td>
                                        <td>
                                            重なり合う。ユースケースごとに成熟速度が違う。人的要因（雇用不安）を早期に扱う
                                        </td>
                                        <td>「直線ではない」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>必要なスキル</strong></td>
                                        <td>
                                            プロンプト、コンテキストウィンドウ理解、出力評価、リスク認識、データサニタイズ、右サイズとコスト・環境
                                        </td>
                                        <td>「書く・見る・守る・選ぶ」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>能力構築</strong></td>
                                        <td>
                                            ハンズオン、段階的な学習、プロンプトパターン、実践共同体、共有ライブラリ
                                        </td>
                                        <td>「触る・型にする・共有する」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>テスターの進化</strong></td>
                                        <td>設計者・実行者 → AI支援テストスペシャリスト</td>
                                        <td>「導く・見極める・磨く」</td>
                                    </tr>
                                    <tr>
                                        <td><strong>マネージャーの進化</strong></td>
                                        <td>
                                            AI戦略・AIリスク管理・監視統制・ガバナンス → オーケストレーション
                                        </td>
                                        <td>「整える・束ねる」</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="doc-h2">13.3 重要用語集（日本語／英語）</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>日本語</th>
                                        <th>英語</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>シャドーAI</td>
                                        <td>Shadow AI</td>
                                        <td>
                                            個人用または未承認のAIツールを非公式に業務で使うこと
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>生成AI戦略</td>
                                        <td>Generative AI strategy</td>
                                        <td>
                                            テストにGenAIを組み込むための目標・選定・データ・教育・指標・ガイドラインの方針
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ロードマップ</td>
                                        <td>Roadmap</td>
                                        <td>
                                            段階的な導入計画（マイルストーンとフィードバックを含む）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>LLM／SLM</td>
                                        <td>LLM／SLM</td>
                                        <td>大規模言語モデル／小規模言語モデル</td>
                                    </tr>
                                    <tr>
                                        <td>コンテキストウィンドウ</td>
                                        <td>Context window</td>
                                        <td>モデルが一度に考慮できる入力量（トークン数）</td>
                                    </tr>
                                    <tr>
                                        <td>ファインチューニング</td>
                                        <td>Fine-tuning</td>
                                        <td>
                                            事前学習済みモデルを、特定タスク・ドメイン向けに追加学習すること
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>継続的コスト</td>
                                        <td>Recurring cost</td>
                                        <td>ライセンス料や運用費など、繰り返し発生する費用</td>
                                    </tr>
                                    <tr>
                                        <td>品質ゲート</td>
                                        <td>Quality gate</td>
                                        <td>生成物を受け入れる前に、レビューを必須にする関門</td>
                                    </tr>
                                    <tr>
                                        <td>透明性</td>
                                        <td>Transparency</td>
                                        <td>GenAIで作られた成果物であることを明示すること</td>
                                    </tr>
                                    <tr>
                                        <td>データサニタイズ</td>
                                        <td>Data sanitisation</td>
                                        <td>機微・個人・機密情報のマスキングまたは除去</td>
                                    </tr>
                                    <tr>
                                        <td>右サイズのモデル</td>
                                        <td>Right-sized model</td>
                                        <td>タスクに見合った規模のモデル</td>
                                    </tr>
                                    <tr>
                                        <td>プロンプトパターン</td>
                                        <td>Prompt pattern</td>
                                        <td>再利用可能なプロンプトのテンプレート</td>
                                    </tr>
                                    <tr>
                                        <td>プロンプトライブラリ</td>
                                        <td>Prompt library</td>
                                        <td>共有できるプロンプトの集まり</td>
                                    </tr>
                                    <tr>
                                        <td>コミュニティ・オブ・プラクティス</td>
                                        <td>Community of practice</td>
                                        <td>知識共有を続ける実践共同体</td>
                                    </tr>
                                    <tr>
                                        <td>AI支援テストスペシャリスト</td>
                                        <td>AI-assisted test specialist</td>
                                        <td>AIを導き、結果を批判的に評価するテスターの姿</td>
                                    </tr>
                                    <tr>
                                        <td>オーケストレーション</td>
                                        <td>Orchestration</td>
                                        <td>
                                            人・プロセス・知的システムを、統制された戦略へ整合させること
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>変革管理</td>
                                        <td>Change management</td>
                                        <td>
                                            導入に伴う人・役割・プロセスの変化を計画的に管理すること
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>発見</td>
                                        <td>Discovery</td>
                                        <td>フェーズ1：体験と学習</td>
                                    </tr>
                                    <tr>
                                        <td>開始と利用方法の定義</td>
                                        <td>Initiation and usage definition</td>
                                        <td>フェーズ2：ユースケースの特定・評価・優先順位付け</td>
                                    </tr>
                                    <tr>
                                        <td>活用と反復</td>
                                        <td>Utilization and iteration</td>
                                        <td>フェーズ3：統合、監視・測定・改善、展開</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="doc-section" id="s14">
                        <h1 className="doc-h1">14. 確認問題（オリジナル練習問題）</h1>
                        <div className="callout note">
                            <div className="callout-icon"><i className="ti ti-info-circle"></i></div>
                            <div className="callout-body">
                                <div className="callout-label">補足</div>
                                <p>
                                    以下は本ガイド用に作成した<strong>オリジナル問題</strong>です。実際の試験問題や公式サンプル問題ではありません。公式サンプル問題は<a
                                        href="https://istqb.org/certifications/gen-ai/"
                                        target="_blank"
                                        rel="noopener"
                                    >ISTQB公式ページ</a>からダウンロードできます。
                                </p>
                            </div>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問1（5.1.1／K1）
                                シャドーAIのリスクとして<strong>適切でないもの</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. 個人用AIツールにより、機密情報が漏れる可能性がある</li>
                                <li>
                                    B. 未承認ツールの利用により、規制・コンプライアンス上の問題が生じる可能性がある
                                </li>
                                <li>
                                    C. ライセンスが不明確なツールにより、知的財産の紛争リスクが生じる可能性がある
                                </li>
                                <li>
                                    D. 承認済みのLLMのコンテキストウィンドウが大きいため、処理時間が長くなる
                                </li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問2（5.1.1／K1）
                                組織がシャドーAIのリスクを避けるうえで、シラバスが示す方向性に<strong>最も近いもの</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. すべての生成AIツールの利用を一律に禁止する</li>
                                <li>
                                    B. 明確な生成AI戦略、統制された導入ステップ、ガバナンス、承認済みツールを組み合わせる
                                </li>
                                <li>C. 各個人の判断に任せ、問題が起きたら対応する</li>
                                <li>D. 最も高性能なモデルを全員に開放する</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問3（5.1.2／K2）
                                生成AI戦略の「品質ゲート」の説明として<strong>最も適切なもの</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. モデルの学習データを一定の品質まで絞り込むこと</li>
                                <li>
                                    B. 生成されたテストウェアを、受け入れる前にレビューすることを求めるプロセス上の関門
                                </li>
                                <li>C. AIが自動的にテストケースの合否を判定する仕組み</li>
                                <li>D. LLMへのアクセス回数を制限する仕組み</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問4（5.1.2／K2）
                                生成AI戦略において、<strong>透明性</strong>を確保する施策として最も適切なものはどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. 生成AIの利用を社外に公表しない</li>
                                <li>B. GenAIで作成した成果物であることを記録・明記する</li>
                                <li>C. すべてのプロンプトを社外に公開する</li>
                                <li>D. AI生成物のレビューを省略する</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問5（5.1.3／K2）
                                あるチームは、自社独自のテストケース形式と専門用語に合わせて、テストケースを生成したい。モデル選定で<strong>特に重視すべき基準</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. ファインチューニングの可能性</li>
                                <li>B. モデルを提供する企業の知名度</li>
                                <li>C. モデルのパラメータ数の大きさだけ</li>
                                <li>D. 一般的なNLPベンチマークの順位だけ</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問6（5.1.3／K2）
                                ソフトウェアテスト向けのLLM/SLM選定について、<strong>正しい記述</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>
                                    A. テスト特化のベンチマークは豊富にあるため、それだけで選定できる
                                </li>
                                <li>
                                    B. テスト特化のベンチマークは少ないため、自組織のベンチマークと指標でテストタスクの性能を評価する
                                </li>
                                <li>C. 継続的コストは選定基準に含めない</li>
                                <li>D. 商用モデルのみが選定対象である</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問7（5.1.4／K1）
                                ある組織では、テストレポート分析はすでに日常業務に組み込まれ効果を測っているが、自動テスト生成はまだ試行段階である。この状況が示すこととして<strong>最も適切なもの</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. 導入フェーズは必ず順番どおりに全社で一斉に進む</li>
                                <li>
                                    B. 導入フェーズは重なり合い、ユースケースごとに成熟速度が異なる
                                </li>
                                <li>C. 導入に失敗している</li>
                                <li>D. 自動テスト生成はフェーズ3を飛ばしてよい</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問8（5.1.4／K1）
                                フェーズ1（Discovery：発見）の目的として<strong>最も適切なもの</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. 全テストの完全自動化を達成する</li>
                                <li>
                                    B. 簡単で低リスクなユースケースで試し、強みと限界を学び、不確実性を減らす
                                </li>
                                <li>C. 導入効果を全社に展開する</li>
                                <li>D. AI関連の規制を作成する</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問9（5.2.1／K2）
                                テスト成果物をLLMへ送る前に行う<strong>データサニタイズ</strong>として最も適切なものはどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. 個人情報や機密情報を、マスキングまたは除去する</li>
                                <li>B. LLMの温度パラメータを下げる</li>
                                <li>C. 出力を別のLLMで比較する</li>
                                <li>D. 入力を長くして情報を増やす</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問10（5.2.2／K1）
                                「プロンプトパターン」の説明として<strong>最も適切なもの</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. モデルの内部構造を表す設計図</li>
                                <li>
                                    B. 一貫した信頼できる結果を得るために設計された、再利用可能なプロンプトのテンプレート
                                </li>
                                <li>C. AIが生成するテストデータの形式</li>
                                <li>D. プロンプトに含めてはならない禁止語のリスト</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問11（5.2.3／K1）
                                AI対応のテスト組織で、<strong>テストマネージャー</strong>の責任として<strong>最も適切なもの</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. AI生成のテストケースを一切レビューせずに承認する</li>
                                <li>
                                    B. AIベースのテスト戦略、AIを意識したリスク管理、AI支援テストプロセスの監視・統制、ガバナンスの枠組みの定義を担う
                                </li>
                                <li>C. 人間のテスターをすべてAIに置き換える</li>
                                <li>D. プロンプトの作成だけを行う</li>
                            </ul>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-q">
                                問12（5.2／K2）
                                生成AI導入に<strong>構造化された変革管理</strong>が必要な理由として<strong>最も適切なもの</strong>はどれか。
                            </div>
                            <ul className="quiz-opts">
                                <li>A. 変革管理があれば、モデルの精度が自動的に上がるため</li>
                                <li>
                                    B. 変革管理がないと、優れたAIツールでも、使われない・誤用される・抵抗される恐れがあるため
                                </li>
                                <li>C. 変革管理は、規制上の必須要件であるため</li>
                                <li>D. 変革管理は、ツールの購入費用を減らすため</li>
                            </ul>
                        </div>

                        <h2 className="doc-h2">解答と解説</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>問</th>
                                        <th>正解</th>
                                        <th>解説</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><strong>D</strong></td>
                                        <td>
                                            DはシャドーAIの3リスク（セキュリティ・プライバシー／コンプライアンス／IP）に含まれない。A・B・Cが3リスクに対応。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            教材では、明確な戦略・統制された導入ステップ・ガバナンス・承認済みツールの組み合わせがシャドーAI回避に有効とされる。一律禁止は挙げられていない。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            品質ゲート＝生成テストウェアを受け入れる前にレビューを必須にするプロセスガイドライン。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            透明性の例として「どの成果物がGenAI由来かを明記する」が挙げられている。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><strong>A</strong></td>
                                        <td>
                                            組織固有の形式・用語に合わせるには、ファインチューニングの可能性が重要（第4章4.2.1の例と整合）。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            テスト特化のベンチマークは少ない。だから自組織のベンチマークと（2.3.1のような）指標で評価する。継続的コストも基準に含まれる。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            フェーズは重なり合い、ユースケースごとに成熟速度が違う（教材の例そのもの）。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            フェーズ1の目的は、完全自動化ではなく、学習と不確実性の低減。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td><strong>A</strong></td>
                                        <td>
                                            データサニタイズ＝機微・個人・機密情報のマスキングまたは除去。Bは非決定性の軽減（第3章）、Cは別LLMによる評価（第3章）。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            プロンプトパターン＝再利用可能なプロンプトのテンプレート。組織の知識が詰まる。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            マネージャーは、AI戦略・AIリスク管理・監視統制・ガバナンスを担い、人の説明責任のもとで品質を守る。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td><strong>B</strong></td>
                                        <td>
                                            教材は、変革管理がなければAIツールが使われない・誤用される・積極的に抵抗されるリスクがあると述べている。
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="doc-section" id="s15">
                        <h1 className="doc-h1">15. 学習チェックリスト</h1>
                        <ChecklistCard groups={CHECKLIST_GROUPS} />
                    </section>

                    <section className="doc-section" id="s16">
                        <h1 className="doc-h1">16. 参考文献・出典URL</h1>

                        <h2 className="doc-h2">16.1 出典の信頼度と、このガイドの検証状況（重要）</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>区分</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>A（一次情報）</strong></td>
                                        <td>ISTQB公式ページ、公式シラバス、公式サンプル試験</td>
                                    </tr>
                                    <tr>
                                        <td><strong>B（準一次情報）</strong></td>
                                        <td>
                                            ISTQBのシラバスに準拠して作られた、トレーニング提供会社の教材
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>C（外部標準・ガイドライン）</strong></td>
                                        <td>
                                            NIST、ISO、OWASP、EU法令など（実務ベストプラクティスの根拠）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>D（第三者の解説）</strong></td>
                                        <td>
                                            個人・企業のブログ、学習サイトなど（補足のみ。公式ではない）
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout note">
                            <div className="callout-icon"><i className="ti ti-info-circle"></i></div>
                            <div className="callout-body">
                                <div className="callout-label">検証状況の正直な報告</div>
                                <ul className="doc-list" style={{ marginBottom: 0 }}>
                                    <li>
                                        公式ページは直接確認できました（試験構成、章立て、前提条件、ダウンロード資料の一覧）。
                                    </li>
                                    <li>
                                        <strong>シラバスv1.1のPDF</strong>は、テキスト抽出できない場合があります。
                                    </li>
                                    <li>
                                        そのため、5.1〜5.2の各項目の詳細は、<strong>シラバスv1.1に準拠したExactproの第5章教材（B）</strong>（学習目標のKレベル、各項の本文を確認）と、<strong>シラバスv1.0の目次・第1〜4章本文（A）</strong>を突き合わせて作成しました。
                                    </li>
                                    <li>
                                        章の想定配点（7問／K1が4問・K2が3問）は<strong>第三者の学習サイト（D）</strong>の情報です。
                                    </li>
                                    <li>
                                        <strong>試験前には、公式シラバスv1.1の第5章を必ず原文で確認</strong>してください。
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="doc-h2">16.2 A：公式（ISTQB）</h2>
                        <div className="ref-list">
                            <div className="ref-item">
                                <div className="ref-num">1</div>
                                <div className="ref-body">
                                    <div className="ref-title">CT-GenAI 認定ページ（出発点）</div>
                                    <div className="ref-url">
                                        <a
                                            href="https://istqb.org/certifications/gen-ai/"
                                            target="_blank"
                                            rel="noopener"
                                        >https://istqb.org/certifications/gen-ai/</a>
                                    </div>
                                    <div className="ref-use">
                                        試験構成（40問／46点／65%／60分）、章立て、前提条件（CTFL）、資料一覧
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">2</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        CT-GenAI シラバス v1.1（公式ダウンロード）
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://istqb.org/?sdm_process_download=1&download_id=6295"
                                            target="_blank"
                                            rel="noopener"
                                        >https://istqb.org/?sdm_process_download=1&download_id=6295</a>
                                    </div>
                                    <div className="ref-use">
                                        第5章の学習目標・本文（原文で最終確認）
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">3</div>
                                <div className="ref-body">
                                    <div className="ref-title">CT-GenAI サンプル試験A 問題 v1.1</div>
                                    <div className="ref-url">
                                        <a
                                            href="https://istqb.org/?sdm_process_download=1&download_id=6309"
                                            target="_blank"
                                            rel="noopener"
                                        >https://istqb.org/?sdm_process_download=1&download_id=6309</a>
                                    </div>
                                    <div className="ref-use">出題形式の確認</div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">4</div>
                                <div className="ref-body">
                                    <div className="ref-title">CT-GenAI サンプル試験A 解答 v1.1</div>
                                    <div className="ref-url">
                                        <a
                                            href="https://istqb.org/?sdm_process_download=1&download_id=6301"
                                            target="_blank"
                                            rel="noopener"
                                        >https://istqb.org/?sdm_process_download=1&download_id=6301</a>
                                    </div>
                                    <div className="ref-use">解答と解説の確認</div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">5</div>
                                <div className="ref-body">
                                    <div className="ref-title">CT-GenAI リリースノート v1.1</div>
                                    <div className="ref-url">
                                        <a
                                            href="https://istqb.org/?sdm_process_download=1&download_id=9550"
                                            target="_blank"
                                            rel="noopener"
                                        >https://istqb.org/?sdm_process_download=1&download_id=9550</a>
                                    </div>
                                    <div className="ref-use">v1.0からの変更点の確認</div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">6</div>
                                <div className="ref-body">
                                    <div className="ref-title">ISTQB 試験構成とルール v1.2</div>
                                    <div className="ref-url">
                                        <a
                                            href="https://istqb.org/?sdm_process_download=1&download_id=3829"
                                            target="_blank"
                                            rel="noopener"
                                        >https://istqb.org/?sdm_process_download=1&download_id=3829</a>
                                    </div>
                                    <div className="ref-use">試験のルール</div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">7</div>
                                <div className="ref-body">
                                    <div className="ref-title">ISTQB 用語集</div>
                                    <div className="ref-url">
                                        <a
                                            href="https://glossary.istqb.org/"
                                            target="_blank"
                                            rel="noopener"
                                        >https://glossary.istqb.org/</a>
                                    </div>
                                    <div className="ref-use">用語の確認</div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">8</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        CT-GenAI シラバス v1.0（ASTQBミラー）
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://astqb.org/assets/documents/CT-GenAI-Syllabus-v1.0.pdf"
                                            target="_blank"
                                            rel="noopener"
                                        >https://astqb.org/assets/documents/CT-GenAI-Syllabus-v1.0.pdf</a>
                                    </div>
                                    <div className="ref-use">
                                        第1〜4章の本文、第3章3.4.1の規制一覧、第5章の目次・学習目標構成
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">9</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        CT-GenAI シラバス v1.0（ISQI ミラー）
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf"
                                            target="_blank"
                                            rel="noopener"
                                        >https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf</a>
                                    </div>
                                    <div className="ref-use">第5章の目次（5.1.1〜5.2.3）の確認</div>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">16.3 B：シラバス準拠の解説教材</h2>
                        <div className="ref-list">
                            <div className="ref-item">
                                <div className="ref-num">10</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        Exactpro「Chapter 5 – Deploying and Integrating Generative AI in Test Organisations（v1.1）Reading Materials」
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://speakerdeck.com/exactpro/chapter-5-deploying-and-integrating-generative-ai-in-test-organisations-istqbr-ct-genai-v1-dot-1-reading-materials"
                                            target="_blank"
                                            rel="noopener"
                                        >https://speakerdeck.com/exactpro/chapter-5-deploying-and-integrating-generative-ai-in-test-organisations-istqbr-ct-genai-v1-dot-1-reading-materials</a>
                                    </div>
                                    <div className="ref-use">
                                        <strong>5.1〜5.2の各項の詳細</strong>（3つのリスク、戦略の観点、4つの選定基準、3フェーズ、スキル、プロンプトパターン、役割の進化）、各項のKレベル
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">11</div>
                                <div className="ref-body">
                                    <div className="ref-title">同 PDF</div>
                                    <div className="ref-url">
                                        <a
                                            href="https://files.speakerdeck.com/presentations/5c4e688bcd4a452193aecb648a10b6dd/Reading_ISTQB_CT-GenAI_Chapter_5.pdf"
                                            target="_blank"
                                            rel="noopener"
                                        >https://files.speakerdeck.com/presentations/5c4e688bcd4a452193aecb648a10b6dd/Reading_ISTQB_CT-GenAI_Chapter_5.pdf</a>
                                    </div>
                                    <div className="ref-use">同上（PDF版）</div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">12</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        Exactpro「Chapter 5 …（v1.1）Slides」
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://speakerdeck.com/exactpro/chapter-5-deploying-and-integrating-generative-ai-in-test-organisations-istqbr-ct-genai-v1-dot-1-slides"
                                            target="_blank"
                                            rel="noopener"
                                        >https://speakerdeck.com/exactpro/chapter-5-deploying-and-integrating-generative-ai-in-test-organisations-istqbr-ct-genai-v1-dot-1-slides</a>
                                    </div>
                                    <div className="ref-use">
                                        3フェーズの補足（例：ロードマップのマイルストーン、フィードバック）
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">
                            16.4 C：外部の標準・フレームワーク・ガイドライン（実務ベストプラクティスの根拠）
                        </h2>
                        <div className="ref-list">
                            <div className="ref-item">
                                <div className="ref-num">13</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        NIST AI Risk Management Framework（AI RMF）
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://www.nist.gov/itl/ai-risk-management-framework"
                                            target="_blank"
                                            rel="noopener"
                                        >https://www.nist.gov/itl/ai-risk-management-framework</a>
                                    </div>
                                    <div className="ref-use">
                                        Govern／Map／Measure／Manage の4機能。戦略・ガバナンスの整理
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">14</div>
                                <div className="ref-body">
                                    <div className="ref-title">NIST AI 600-1 生成AIプロファイル</div>
                                    <div className="ref-url">
                                        <a
                                            href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
                                            target="_blank"
                                            rel="noopener"
                                        >https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf</a>（DOI:
                                        <a
                                            href="https://doi.org/10.6028/NIST.AI.600-1"
                                            target="_blank"
                                            rel="noopener"
                                        >10.6028/NIST.AI.600-1</a>）
                                    </div>
                                    <div className="ref-use">
                                        生成AI固有のリスク（データプライバシー、情報セキュリティ等）と推奨アクション
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">15</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        OWASP Top 10 for LLM Applications 2025
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/"
                                            target="_blank"
                                            rel="noopener"
                                        >https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/</a>
                                    </div>
                                    <div className="ref-use">
                                        LLM01（プロンプトインジェクション）、LLM02（機微情報の漏えい）など
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">16</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        OWASP LLM02:2025 機微情報の漏えい（ページ）
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://genai.owasp.org/llmrisk/llm02-insecure-output-handling/"
                                            target="_blank"
                                            rel="noopener"
                                        >https://genai.owasp.org/llmrisk/llm02-insecure-output-handling/</a>
                                    </div>
                                    <div className="ref-use">
                                        機微情報の漏えいリスクと対策（URLのスラッグは旧称ですが、表示内容はLLM02:2025）
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">17</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        ISO/IEC 42001:2023（AIマネジメントシステム）
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://www.iso.org/standard/42001"
                                            target="_blank"
                                            rel="noopener"
                                        >https://www.iso.org/standard/42001</a>
                                    </div>
                                    <div className="ref-use">
                                        AIマネジメントシステムの位置づけ（有償規格。概要ページ）
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">18</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        EU AI Act（Regulation (EU) 2024/1689）公式条文
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
                                            target="_blank"
                                            rel="noopener"
                                        >https://eur-lex.europa.eu/eli/reg/2024/1689/oj</a>
                                    </div>
                                    <div className="ref-use">
                                        第4条（AIリテラシー）等。<strong>最新の改正状況は公式で確認</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">19</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        Digital Omnibus on AI（Regulation (EU) 2026/1744）公式条文
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://eur-lex.europa.eu/eli/reg/2026/1744/oj"
                                            target="_blank"
                                            rel="noopener"
                                        >https://eur-lex.europa.eu/eli/reg/2026/1744/oj</a>
                                    </div>
                                    <div className="ref-use">
                                        第4条（AIリテラシー）の改正（2026年7月27日施行）
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">20</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        AWS Prescriptive Guidance「Agentic AI security」（OWASPとの対応）
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-security/owasp-top-ten.md"
                                            target="_blank"
                                            rel="noopener"
                                        >https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-security/owasp-top-ten.md</a>
                                    </div>
                                    <div className="ref-use">
                                        「プロンプトをコード成果物として扱う」等の実務指針への入口
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">21</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        TestEval：テストケース生成向けLLMのベンチマーク（arXiv:2406.04531）
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://arxiv.org/abs/2406.04531"
                                            target="_blank"
                                            rel="noopener"
                                        >https://arxiv.org/abs/2406.04531</a>
                                    </div>
                                    <div className="ref-use">
                                        「テスト特化ベンチマークは少ない」という点の背景（Exactpro教材の参考文献より）
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">16.5 D：第三者の解説（補足。公式ではない）</h2>
                        <div className="ref-list">
                            <div className="ref-item">
                                <div className="ref-num">22</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        Mock Exam Network「CT-GenAI v1.1 学習ガイド」
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://mockexamnetwork.com/guides/how-to-pass-istqb-ct-genai/"
                                            target="_blank"
                                            rel="noopener"
                                        >https://mockexamnetwork.com/guides/how-to-pass-istqb-ct-genai/</a>
                                    </div>
                                    <div className="ref-use">
                                        第5章の想定配点（7問／K1:4・K2:3）、LO番号とKレベルの対応（<strong>公式数値ではない</strong>）
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">23</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        Elevate Consult「What is shadow AI: risks and governance」
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://elevateconsult.com/insights/what-is-shadow-ai-risks-and-governance/"
                                            target="_blank"
                                            rel="noopener"
                                        >https://elevateconsult.com/insights/what-is-shadow-ai-risks-and-governance/</a>
                                    </div>
                                    <div className="ref-use">
                                        シャドーAIの具体例（機密文書の貼り付け、未承認の文字起こし等）と、「禁止だけでは解決しにくい」という指摘
                                    </div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">24</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        Adaptive Security「Shadow AI Risks」
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://www.adaptivesecurity.com/blog/shadow-ai-risks-2026"
                                            target="_blank"
                                            rel="noopener"
                                        >https://www.adaptivesecurity.com/blog/shadow-ai-risks-2026</a>
                                    </div>
                                    <div className="ref-use">シャドーAIの事例・リスクの整理</div>
                                </div>
                            </div>
                            <div className="ref-item">
                                <div className="ref-num">25</div>
                                <div className="ref-body">
                                    <div className="ref-title">
                                        Gradually「AI Literacy under Article 4 of the EU AI Act」
                                    </div>
                                    <div className="ref-url">
                                        <a
                                            href="https://www.gradually.ai/en/ai-literacy-eu-ai-act/"
                                            target="_blank"
                                            rel="noopener"
                                        >https://www.gradually.ai/en/ai-literacy-eu-ai-act/</a>
                                    </div>
                                    <div className="ref-use">
                                        第4条の改正に関する解説（<strong>公式条文での確認が必要</strong>）
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="doc-h2">16.6 このガイドの各節と出典の対応</h2>
                        <div className="table-wrap">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>節</th>
                                        <th>主な出典</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1（全体像・LO）</td>
                                        <td>16.2 公式ページ、16.3 Exactpro教材、16.2 v1.0の目次</td>
                                    </tr>
                                    <tr>
                                        <td>2（ロードマップ概要）</td>
                                        <td>16.3 Exactpro教材（5.1の導入部）</td>
                                    </tr>
                                    <tr>
                                        <td>3（5.1.1 シャドーAI）</td>
                                        <td>
                                            16.3 Exactpro教材、16.2 v1.0第3章3.2.3、16.4 NIST／OWASP、16.5 補足
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4（5.1.2 戦略の観点）</td>
                                        <td>16.3 Exactpro教材、16.2 v1.0第2章2.3.1（指標）</td>
                                    </tr>
                                    <tr>
                                        <td>5（5.1.3 モデル選定）</td>
                                        <td>
                                            16.3 Exactpro教材、16.4 TestEval、16.2 v1.0第1章・第3章・第4章
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6（5.1.4 フェーズ）</td>
                                        <td>16.3 Exactpro教材</td>
                                    </tr>
                                    <tr>
                                        <td>7〜10（5.2 変革管理）</td>
                                        <td>16.3 Exactpro教材、16.2 v1.0第2章2.3.2・第3章</td>
                                    </tr>
                                    <tr>
                                        <td>11（導入形態別）</td>
                                        <td>
                                            16.2 v1.0第1章1.2.2・第3章3.2.3・第4章、16.4（実務）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12（規制・標準）</td>
                                        <td>16.2 v1.0第3章3.4.1、16.4 NIST／ISO／EU</td>
                                    </tr>
                                    <tr>
                                        <td>14（確認問題）</td>
                                        <td>本ガイド独自（オリジナル）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                <footer className="footer">
                    本ガイドはISTQB® CT-GenAIシラバスv1.1に準拠した学習補助教材であり、公式教材ではありません。試験直前には必ず<a
                        href="https://istqb.org/certifications/gen-ai/"
                        target="_blank"
                        rel="noopener"
                    >ISTQB公式ページ</a>および公式シラバス原文で最終確認してください。最終更新：2026-09-24
                </footer>
            </main>
        </div>
    );
}

