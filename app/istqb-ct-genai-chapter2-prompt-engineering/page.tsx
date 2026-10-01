import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import {
    DIAGRAM_CH2_OVERVIEW,
    DIAGRAM_PROMPT_6_ELEMENTS,
    DIAGRAM_SHOT_COMPARISON,
    DIAGRAM_PROMPT_CHAINING,
    DIAGRAM_META_PROMPTING,
    DIAGRAM_SYSTEM_USER_PROMPT,
    DIAGRAM_TEST_ACTIVITIES_FLOW,
    DIAGRAM_TECHNIQUE_DECISION_TREE,
} from './diagrams';
import './istqb-ct-genai-chapter2-prompt-engineering.css';

export const metadata: Metadata = {
    title: 'ISTQB® CT-GenAI 第2章 完全解説ガイド | 効果的なソフトウェアテストのためのプロンプトエンジニアリング',
    description: 'ISTQB CT-GenAI シラバス第2章（365分）の完全解説。プロンプトの6要素構造、コア3技法、テスト業務への適用、結果評価とプロンプト改善を網羅。',
};

export default function CtGenAiChapter2Page() {
    return (
        <div className="ct-genai-ch2-page">
            <NavBar />
            <main className="main">
                <header className="hero">
                    <div className="hero-kicker">CT-GenAI · 第2章 · 学習ガイド</div>
                    <h1>ISTQB® CT-GenAI 第2章 完全解説ガイド</h1>
                    <p className="hero-subtitle">
                        「効果的なソフトウェアテストのためのプロンプトエンジニアリング」（Prompt Engineering for Effective Software Testing）
                    </p>
                    <div className="hero-meta">
                        <p>
                            本ガイドは、ISTQB®（International Software Testing Qualifications Board）が公開している
                            <strong>Certified Tester – Testing with Generative AI（CT-GenAI）</strong>
                            シラバスの
                            <strong>第2章</strong>
                            を、初学者向けにステップバイステップで解説するものです。
                        </p>
                        <ul>
                            <li>
                                認定試験ページ：
                                <a href="https://istqb.org/certifications/gen-ai/" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/certifications/gen-ai/
                                </a>
                            </li>
                            <li>
                                シラバス本体（公式ダウンロード, v1.1）：
                                <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6295" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/?sdm_process_download=1&amp;download_id=6295
                                </a>
                            </li>
                            <li>
                                シラバス本文（本ガイド執筆にあたり全文を直接参照したミラー, v1.0）：
                                <a href="https://atsqa.org/assets/documents/CT-GenAI-Syllabus-v1.0.pdf" target="_blank" rel="noopener noreferrer">
                                    https://atsqa.org/assets/documents/CT-GenAI-Syllabus-v1.0.pdf
                                </a>
                            </li>
                            <li>
                                v1.1 リリースノート（v1.0→v1.1の変更点）：
                                <a href="https://istqb.org/wp-content/uploads/2026/05/ISTQB-CT-GenAI_v1.1_Release_Notes.pdf" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/wp-content/uploads/2026/05/ISTQB-CT-GenAI_v1.1_Release_Notes.pdf
                                </a>
                            </li>
                        </ul>
                        <p>
                            <strong>バージョンについての注記</strong>：現行の最新シラバスは
                            <strong>v1.1（2026年4月27日リリース）</strong> です。v1.1は v1.0 に対する
                            <strong>マイナーアップデート</strong>（章立て・学習目標・出題範囲は変更なし）であり、用語の一部修正や説明文の微調整が中心です。本ガイドは章の内容を
                            v1.0 の全文（英語原文）に基づいて詳細に解説し、v1.1 で変更された箇所は本文中および「6. v1.0→v1.1 変更点」に明記しています。正確な最終文言は必ず上記の公式シラバスでご確認ください。
                        </p>
                    </div>
                </header>

                <h2 id="0-第2章の全体像と学習目標">0. 第2章の全体像と学習目標</h2>
                <p>
                    CT-GenAIシラバス全5章の中で、第2章は<strong>365分</strong>と最も長い学習時間が割り当てられており、試験における比重も最大です。第1章で学んだGenAI/LLMの基礎知識を、実際に<strong>プロンプト</strong>という「LLMへの指示文」に落とし込み、テスト業務で実践的に使えるようにすることが目的です。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-0">
                    <Mermaid chart={DIAGRAM_CH2_OVERVIEW} />
                </div>
                <p>第2章は大きく3つの節で構成されています。</p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>節</th>
                                <th>タイトル</th>
                                <th>学習内容の要旨</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>2.1</td>
                                <td>効果的なプロンプト開発</td>
                                <td>
                                    プロンプトの構造（6要素）、3つのコア技法（プロンプトチェイニング／Few-shot／メタプロンプティング）、システムプロンプトとユーザープロンプトの違い
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2.2</td>
                                <td>テスト業務への技法の適用</td>
                                <td>
                                    テスト分析、テスト設計・実装、自動リグレッションテスト、テスト監視・コントロールの各局面でのGenAI活用と、技法の選択方法
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>2.3</td>
                                <td>結果の評価とプロンプトの改善</td>
                                <td>
                                    GenAIの出力を測る評価指標と、プロンプトを継続的に改善していくための技法
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="キーワード第2章シラバス記載">キーワード（第2章シラバス記載）</h3>
                <ul>
                    <li>
                        <strong>一般キーワード</strong>：受け入れ基準（acceptance criteria）、テストスクリプト、テストケース、テスト条件、テストデータ、テスト設計、テストレポート
                    </li>
                    <li>
                        <strong>GenAI特有キーワード</strong>：Few-shotプロンプティング、メタプロンプティング、自然言語処理、One-shotプロンプティング、プロンプト、プロンプトチェイニング、プロンプトエンジニアリング、システムプロンプト、ユーザープロンプト、Zero-shotプロンプティング
                    </li>
                </ul>
                <p>
                    これらは試験でK1（記憶）レベルとして問われる可能性があるため、定義を正確に押さえておく必要があります。
                </p>

                <h3 id="学習目標learning-objectivesとハンズオン目標hands-on-objectivesの全体マップ">
                    学習目標（Learning Objectives）とハンズオン目標（Hands-on Objectives）の全体マップ
                </h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>節</th>
                                <th>学習目標（K-レベル）</th>
                                <th>対応するハンズオン目標（H-レベル）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>2.1.1</td>
                                <td>GenAI-2.1.1 (K2) プロンプトの構造の例を挙げられる</td>
                                <td>HO-2.1.1 (H0) 構成要素の観察・分析</td>
                            </tr>
                            <tr className="even">
                                <td>2.1.2</td>
                                <td>GenAI-2.1.2 (K2) コアプロンプティング技法を区別できる</td>
                                <td>
                                    HO-2.1.2a (H0) 技法のデモ観察／HO-2.1.2b (H1) 技法の識別演習
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>2.1.3</td>
                                <td>GenAI-2.1.3 (K2) システムプロンプトとユーザープロンプトを区別できる</td>
                                <td>（ハンズオンなし）</td>
                            </tr>
                            <tr className="even">
                                <td>2.2.1</td>
                                <td>GenAI-2.2.1 (K3) テスト分析にGenAIを適用できる</td>
                                <td>
                                    HO-2.2.1a (H2) マルチモーダルプロンプト演習／HO-2.2.1b (H2) プロンプトチェイニングと人による検証
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>2.2.2</td>
                                <td>GenAI-2.2.2 (K3) テスト設計・実装にGenAIを適用できる</td>
                                <td>
                                    HO-2.2.2a〜c (H2) テストケース生成・Gherkin生成・優先順位付け
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2.2.3</td>
                                <td>GenAI-2.2.3 (K3) 自動リグレッションテストにGenAIを適用できる</td>
                                <td>
                                    HO-2.2.3a〜b (H2) キーワード駆動スクリプト作成・テストレポート分析
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>2.2.4</td>
                                <td>GenAI-2.2.4 (K3) テスト監視・コントロールにGenAIを適用できる</td>
                                <td>HO-2.2.4 (H0) 監視メトリクスの観察</td>
                            </tr>
                            <tr className="even">
                                <td>2.2.5</td>
                                <td>GenAI-2.2.5 (K3) 状況に応じた技法を選択・適用できる</td>
                                <td>HO-2.2.5 (H1) 技法選択演習</td>
                            </tr>
                            <tr className="odd">
                                <td>2.3.1</td>
                                <td>GenAI-2.3.1 (K2) 評価指標を理解している</td>
                                <td>HO-2.3.1 (H0) 指標活用の観察</td>
                            </tr>
                            <tr className="even">
                                <td>2.3.2</td>
                                <td>GenAI-2.3.2 (K2) 評価・改善技法の例を挙げられる</td>
                                <td>HO-2.3.2 (H1) プロンプトの評価と最適化演習</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout-generic">
                    <p>
                        K1=記憶（Remember）、K2=理解（Understand）、K3=適用（Apply）。第2章はK3（適用）レベルの学習目標が多く、単なる知識暗記ではなく「実際にプロンプトを設計・適用できる」ことが問われる点が特徴です。
                    </p>
                </div>
                <hr />

                <h2 id="1-21-効果的なプロンプト開発">1. 2.1 効果的なプロンプト開発</h2>
                <h3 id="11-プロンプトの6要素構造211">1.1 プロンプトの6要素構造（2.1.1）</h3>
                <p>
                    シラバスでは、ソフトウェアテスト向けの<strong>構造化プロンプト（structured prompt）</strong>は、次の<strong>6つの構成要素</strong>から成るとされています。この構造を守ることで、LLMに対して明確・正確に要求事項と期待値を伝えることができます。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-1">
                    <Mermaid chart={DIAGRAM_PROMPT_6_ELEMENTS} />
                </div>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>要素</th>
                                <th>説明</th>
                                <th>ソフトウェアテストでの例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>① Role（役割）</td>
                                <td>
                                    GenAIモデルが応答生成時にとるべき視点・ペルソナを定義する。役割を指定することで、LLMは自身の責務や適切なトーン・アプローチを判断しやすくなる。
                                </td>
                                <td>
                                    「あなたは経験豊富なテストアナリストです」「テスト自動化エンジニアとして振る舞ってください」
                                </td>
                            </tr>
                            <tr className="even">
                                <td>② Context（文脈）</td>
                                <td>
                                    GenAIがテスト条件を判断するために必要な背景情報。テスト対象、テストすべき具体的な機能、その他関連する文脈情報を含む。
                                </td>
                                <td>
                                    「対象システムはECサイトの決済機能で、クレジットカード決済とコンビニ決済に対応しています」
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>③ Instruction（指示）</td>
                                <td>
                                    実行すべき具体的なタスクを示す指令。明確・命令形・簡潔であり、タスクの説明と関連要件を含む。
                                </td>
                                <td>
                                    「以下のユーザーストーリーから機能テストケースを生成してください」
                                </td>
                            </tr>
                            <tr className="even">
                                <td>④ Input Data（入力データ）</td>
                                <td>
                                    タスク遂行に必要な情報。ユーザーストーリー、受け入れ基準、スクリーンショット、コード、既存のテストケース、出力例など。詳細で構造化された入力データはより正確で文脈に即した結果につながる。
                                </td>
                                <td>
                                    ユーザーストーリー本文、GUIワイヤーフレーム画像、既存のテストケース一覧
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>⑤ Constraints（制約条件）</td>
                                <td>
                                    LLMが遵守すべき制限や特別な考慮事項。指示を入力データにどう適用すべきかを指定する。
                                </td>
                                <td>
                                    「境界値分析の手法を使うこと」「出力は日本語で。テストケース数は10件以内」
                                </td>
                            </tr>
                            <tr className="even">
                                <td>⑥ Output Format（出力形式）</td>
                                <td>
                                    期待される応答の形式・構造・特性を示す指標。LLMの出力を望む形に整える役割を持つ。
                                </td>
                                <td>
                                    「Markdownの表形式で、列は『前提条件／手順／期待結果』とすること」
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout-practice">
                    <div className="callout-header">
                        <span className="callout-icon">💡</span>
                        <span className="callout-label">ベストプラクティス</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            6要素すべてを毎回フルに書く必要はありませんが、<strong>Instruction（指示）とOutput Format（出力形式）は省略しないこと</strong>が推奨されます。指示と出力形式が曖昧なままだと、たとえ十分な文脈や入力データを与えても、期待と異なる形式・粒度の出力になりやすいためです。また、この6要素構造は次項で解説する「コアプロンプティング技法」と組み合わせて使うことで真価を発揮します（2.1.1と2.1.2は独立した知識ではなく、常にセットで運用するものと理解しましょう）。
                        </p>
                    </div>
                </div>
                <div className="callout-handson">
                    <div className="callout-header">
                        <span className="callout-icon">🖐</span>
                        <span className="callout-label">ハンズオン目標 HO-2.1.1 (H0)</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            AIチャットボット上でいくつかの構造化プロンプトのデモを観察し、役割・文脈・指示・入力データ・制約条件・出力形式という6つの構成要素が、それぞれどのようにLLMからの正確で関連性が高く実用的な洞察の提供に寄与しているかを分析します。
                        </p>
                    </div>
                </div>
                <hr />

                <h3 id="12-コアプロンプティング技法212">1.2 コアプロンプティング技法（2.1.2）</h3>
                <p>
                    シラバスは、多数のプロンプティング技法が提案されている中で（出典：Schulhoff et al., 2024, &quot;The Prompt Report&quot;）、ソフトウェアテストのタスクにおいて特によく使われる<strong>3つのコア技法</strong>を挙げています。これらは前項の6要素プロンプト構造と組み合わせて使用します。
                </p>
                <ol>
                    <li><strong>プロンプトチェイニング（Prompt Chaining）</strong></li>
                    <li><strong>Few-shotプロンプティング（Few-shot Prompting）</strong></li>
                    <li><strong>メタプロンプティング（Meta Prompting）</strong></li>
                </ol>
                <p>
                    まず、Few-shotプロンプティングの前提となる「例示の数」による分類を整理します。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-2">
                    <Mermaid chart={DIAGRAM_SHOT_COMPARISON} />
                </div>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>分類</th>
                                <th>定義</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>Zero-shot（ゼロショット）</td>
                                <td>
                                    例を与えず、モデルの事前学習済みの知識のみに依拠して応答を生成させる。
                                </td>
                            </tr>
                            <tr className="even">
                                <td>One-shot（ワンショット）</td>
                                <td>与えられた入力に対する望ましい結果を、1つの例で示す。</td>
                            </tr>
                            <tr className="odd">
                                <td>Few-shot（フューショット）</td>
                                <td>
                                    複数（a few）の例をプロンプトに含めることで、モデルの望ましい応答パターンをさらに強化する。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 id="①-プロンプトチェイニングprompt-chaining">
                    ① プロンプトチェイニング（Prompt Chaining）
                </h4>
                <p>
                    タスクを一連の中間ステップ（複数のプロンプト）に分解する手法です。各ステップの結果は、次のステップに進む前に<strong>手動または自動でチェック・修正</strong>されます。このアプローチは各応答が次のプロンプトの情報源となるため、精度の向上につながります。特に、複雑で複数のサブタスクへの分解と、中間出力の体系的なチェックが必要なテスト工程で有用です。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-3">
                    <Mermaid chart={DIAGRAM_PROMPT_CHAINING} />
                </div>

                <h4 id="②-few-shotプロンプティングfew-shot-prompting">
                    ② Few-shotプロンプティング（Few-shot Prompting）
                </h4>
                <p>
                    プロンプトの中にLLMへの<strong>例（examples）</strong>を含める手法です。明確な参照例を与えることで、モデルの応答を一定の期待水準に沿わせ、一貫性のある結果を得やすくなります。出力に特定のパターンや形式が求められるタスク（例：Gherkin形式のテストケース生成）で特に有効です。
                </p>

                <h4 id="③-メタプロンプティングmeta-prompting">
                    ③ メタプロンプティング（Meta Prompting）
                </h4>
                <p>
                    AI自身にプロンプトを生成・改善させる能力を活用する手法です。反復的なサイクルの中で、LLMが生成したプロンプトをテスターが評価・洗練していきます。効率とプロンプト最適化が重要な場面で特に有益であり、テスターが効果的なプロンプトの作り方に不慣れな場合でも、LLMと協働（ペアリング）してプロンプトを共創できるという利点があります。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-4">
                    <Mermaid chart={DIAGRAM_META_PROMPTING} />
                </div>

                <h3 id="3つの技法の比較表">3つの技法の比較表</h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>技法</th>
                                <th>推奨されるユースケース</th>
                                <th>主な特徴・適用例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>プロンプトチェイニング</td>
                                <td>
                                    各ステップで人による検証が必要な、精度が求められる複雑なタスク
                                </td>
                                <td>
                                    タスクを小さなステップに分解。テスト分析・テスト設計・テスト自動化など、各テストステップの正確性をチェックしたい場面で有用
                                </td>
                            </tr>
                            <tr className="even">
                                <td>Few-shotプロンプティング</td>
                                <td>反復的、または特定・制約された出力形式が求められるタスク</td>
                                <td>
                                    特定パターンでの反復生成に例を提供。Gherkin形式のテストケース、キーワード駆動テスト、特定形式のテストレポートなど
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>メタプロンプティング</td>
                                <td>柔軟で動的なタスク、新しいタスク向けのプロンプト作成に有用</td>
                                <td>
                                    目的・タスクの一般的な説明を与え、LLM自身にプロンプト作成を誘導させる。テストレポート分析や異常検知など複雑なタスク全般に有用
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout-practice">
                    <div className="callout-header">
                        <span className="callout-icon">💡</span>
                        <span className="callout-label">ベストプラクティス</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            技法は<strong>タスクの性質と使用するモデルに応じて選択</strong>します。上の比較表のとおり、単一の技法で十分なタスクも多くあります。そのうえで、必要に応じて<strong>組み合わせる</strong>選択肢もあります。シラバスが挙げる組み合わせの典型例は次の流れです。①まず<strong>メタプロンプティング</strong>で初期プロンプトを作成する → ②そのプロンプトに含まれる例を調整・強化する（<strong>Few-shotプロンプティング</strong>）→ ③タスクをより小さなサブタスクに分割し、中間ステップの検証を可能にする（<strong>プロンプトチェイニング</strong>）。組み合わせは「常に必要なもの」ではなく「単一技法では不十分な場合に取れる選択肢」と理解しましょう。
                        </p>
                    </div>
                </div>

                <div className="callout-handson">
                    <div className="callout-header">
                        <span className="callout-icon">🖐</span>
                        <span className="callout-label">ハンズオン目標</span>
                    </div>
                    <div className="callout-body">
                        <ul>
                            <li>
                                <strong>HO-2.1.2a (H0)</strong>：AIチャットボット上でプロンプトチェイニング・Few-shotプロンプティング・メタプロンプティングのデモを、それぞれ具体的なソフトウェアテストタスクに適用しながら観察・議論します。
                            </li>
                            <li>
                                <strong>HO-2.1.2b (H1)</strong>：ソフトウェアテストに関連する複数のプロンプト例を読み、どのコアプロンプティング技法が使われているかを識別する演習を行います。
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="callout-warning">
                    <div className="callout-header">
                        <span className="callout-icon">⚠️</span>
                        <span className="callout-label">v1.1での用語変更に関する注記</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            v1.1のリリースノートによると、HO-2.1.2b内の記述で「few-shot」という表記の一部が「one-shot」に修正されています。正確な文言は公式リリースノート（本ガイド末尾のリンク）でご確認ください。
                        </p>
                    </div>
                </div>
                <hr />

                <h3 id="13-システムプロンプトとユーザープロンプト213">
                    1.3 システムプロンプトとユーザープロンプト（2.1.3）
                </h3>
                <p>
                    LLMとの対話において、<strong>システムプロンプト</strong>と<strong>ユーザープロンプト</strong>はそれぞれ異なる役割を担います。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>項目</th>
                                <th>システムプロンプト（System Prompt）</th>
                                <th>ユーザープロンプト（User Prompt）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>定義者</td>
                                <td>開発者またはテスターが定義</td>
                                <td>チャットボットの利用者（テスター）が入力</td>
                            </tr>
                            <tr className="even">
                                <td>可視性</td>
                                <td>
                                    ほとんどのインターフェースでは、チャットボット利用者からは見えない・編集できない
                                </td>
                                <td>利用者に直接見える。各やり取りの直接的な文脈を形成する</td>
                            </tr>
                            <tr className="odd">
                                <td>変化の頻度</td>
                                <td>
                                    対話セッション全体を通じて<strong>一定</strong>（変わらない）
                                </td>
                                <td>やり取りごとに<strong>変化</strong>する</td>
                            </tr>
                            <tr className="even">
                                <td>役割</td>
                                <td>
                                    LLMの振る舞い・性格・運用パラメータを規定する「事前定義されたコマンドセット」。会話全体のルールを設定する。構造化プロンプトのRole・Context・Constraintsの一部を含みうる
                                </td>
                                <td>実際の入力や質問。特定の指示・質問・タスクを含みうる</td>
                            </tr>
                            <tr className="odd">
                                <td>例</td>
                                <td>
                                    「あなたはプロフェッショナルなソフトウェアテスト支援アシスタントです。常に明確に、フォーマルな言葉遣いで回答し、ISTQBに準拠した実践に焦点を当ててください。推測は避け、関連するテスト原則を引用してください。」
                                </td>
                                <td>
                                    「ブラックボックステストとホワイトボックステストの主な違いを、例を挙げて列挙してください。」
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    典型的な使い方は、<strong>対話の開始時にシステムプロンプトを一度だけ設定</strong>し、その後は<strong>ユーザープロンプトを繰り返し送信</strong>するというものです。LLMは、変化しないシステムプロンプトと現在のユーザープロンプトの両方を考慮して応答を生成します。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-5">
                    <Mermaid chart={DIAGRAM_SYSTEM_USER_PROMPT} />
                </div>
                <div className="callout-practice">
                    <div className="callout-header">
                        <span className="callout-icon">💡</span>
                        <span className="callout-label">ベストプラクティス</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            効果的な運用のために、システムプロンプトは<strong>LLMの役割と制約について明確かつ具体的</strong>であるべきです。また、期待される出力に関する文脈や一般的な指示を含めても構いません。一方、ユーザープロンプトは<strong>焦点を絞り、明確な指示・関連する追加の文脈・出力形式の指定</strong>を含む、構造化されたものにする必要があります。組織内で共通のシステムプロンプト（例：「ISTQB用語に準拠する」「日本語で応答する」等）をテンプレート化しておくと、チーム全体でのプロンプト品質のばらつきを抑えられます。
                        </p>
                    </div>
                </div>
                <hr />

                <h2 id="2-22-テスト業務へのプロンプトエンジニアリング技法の適用">
                    2. 2.2 テスト業務へのプロンプトエンジニアリング技法の適用
                </h2>
                <p>
                    前節で学んだ6要素構造と3つのコア技法を、実際のテストプロセスの各局面に適用していきます。プロンプトチェイニング・Few-shotプロンプティング・メタプロンプティングを組み合わせることで、チームはテスト目的に合わせてAIプロンプトを調整し、より正確で関連性が高く効果的な出力を得ることができます。<strong>高品質な入力（Input Data）が、意味のあるAI結果を得るために不可欠</strong>である点は、全ての局面に共通する重要な前提です。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-6">
                    <Mermaid chart={DIAGRAM_TEST_ACTIVITIES_FLOW} />
                </div>

                <h3 id="21-テスト分析221">2.1 テスト分析（2.2.1）</h3>
                <p>
                    GenAIは、テスト条件の生成・優先順位付け、テストベース（要件・ユーザーストーリー等）における欠陥の特定、カバレッジ分析など、テスト分析業務を支援できます。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>典型タスク</th>
                                <th>GenAIによる支援内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>テストベース内の潜在的欠陥の特定</td>
                                <td>
                                    類似の要件パターンの比較や過去の欠陥報告の知識を活用し、矛盾・曖昧さ・情報不足を検出して改善を提案する
                                </td>
                            </tr>
                            <tr className="even">
                                <td>テストベースに基づくテスト条件の生成</td>
                                <td>
                                    自然言語処理を用いて要件・ユーザーストーリーの意味を解釈し、測定可能でテスト可能なステートメントに分解する
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>リスクレベルに基づくテスト条件の優先順位付け</td>
                                <td>
                                    各テスト条件のリスク発生可能性・影響度の情報をもとに、規制遵守やユーザー向け機能（ログイン、決済処理等）、過去の欠陥データを考慮して優先度を推奨する
                                </td>
                            </tr>
                            <tr className="even">
                                <td>カバレッジ分析の支援</td>
                                <td>
                                    要件・ユーザーストーリーをテスト条件にマッピングし、テストベースの全側面がカバーされているかを判定する
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>テスト技法の提案</td>
                                <td>
                                    要件・ユーザーストーリーの種類に応じて、境界値分析や同値分割など適切なテスト技法を提案する
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout-practice">
                    <div className="callout-header">
                        <span className="callout-icon">💡</span>
                        <span className="callout-label">ベストプラクティス</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            テスト分析でGenAIを使う際は、入力データの質がそのまま出力の精度に直結します。要件やユーザーストーリーだけでなく、<strong>GUIワイヤーフレームなどのマルチモーダル情報も併せて与える</strong>ことで、テキストだけでは伝わりにくい制約（画面上のレイアウトや入力フィールドの制限など）まで反映した、より高品質な受け入れ基準やテスト条件を得やすくなります。
                        </p>
                    </div>
                </div>
                <div className="callout-handson">
                    <div className="callout-header">
                        <span className="callout-icon">🖐</span>
                        <span className="callout-label">ハンズオン目標</span>
                    </div>
                    <div className="callout-body">
                        <ul>
                            <li>
                                <strong>HO-2.2.1a (H2)</strong>：テキストとGUIワイヤーフレーム画像の両方を入力に用いた構造化マルチモーダルプロンプトを作成し、ユーザーストーリーから高品質な受け入れ基準を生成する演習を行います。構造化プロンプトの各要素（役割・文脈・指示・テキストと画像の入力データ・制約条件・出力形式）の異なる書き方による結果を比較します。
                            </li>
                            <li>
                                <strong>HO-2.2.1b (H2)</strong>：プロンプトチェイニングと人による検証を用いて、あるユーザーストーリーを段階的に分析し受け入れ基準を洗練する演習を行います。まず曖昧さの特定、次にテスト可能性の評価、最後に完全性の評価という3段階で進め、各段階でLLMの出力を人手で確認・修正します。
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />

                <h3 id="22-テスト設計テスト実装222">2.2 テスト設計・テスト実装（2.2.2）</h3>
                <p>
                    テスト設計はテスト条件を精緻化・洗練しテストケース等のテストウェアへ変換する工程、テスト実装はテストの実施に必要なテストウェアを作成・取得する工程です（詳細はISTQB Foundation Levelシラバス [ISTQB_CTFL_SYL] を参照）。GenAIは、手動テストと自動テストスクリプトの両方の作成・優先順位付け・実行スケジュールへの組み込みを支援できます。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>典型タスク</th>
                                <th>GenAIによる支援内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>テストケース生成</td>
                                <td>
                                    自然言語処理により機能要件・非機能要件からテストケースのドラフトを作成。前提条件・入力・期待結果・カバレッジ基準を提案し、基本的な機能検証から複雑なエンドツーエンドテストまで対応
                                </td>
                            </tr>
                            <tr className="even">
                                <td>テストデータの合成</td>
                                <td>
                                    プライバシーに配慮した、本番データに類似する代表的な合成テストデータを生成。極端なケースや多様なテスト条件をカバーし、現実的なシナリオをシミュレート。合成データは本番データの直接利用に比べてプライバシーリスクを低減できるが、機微な情報の再現・混入がないことや妥当性は生成後に検証する必要がある
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>自動テストスクリプトの生成</td>
                                <td>
                                    構造化されたテストケースから手動手順や自動テストスクリプトを生成し、様々なテスト自動化フレームワークに対応するコードへ変換。新要件に応じた更新・拡張も可能
                                </td>
                            </tr>
                            <tr className="even">
                                <td>テスト実行のスケジューリングと優先順位付け</td>
                                <td>
                                    テストケースとその相互依存関係を分析し、優先度・関連リスク・リソースの可用性・テスト目的に基づいて実行スケジュールを最適化
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout-handson">
                    <div className="callout-header">
                        <span className="callout-icon">🖐</span>
                        <span className="callout-label">ハンズオン目標</span>
                    </div>
                    <div className="callout-body">
                        <ul>
                            <li>
                                <strong>HO-2.2.2a (H2)</strong>：プロンプトチェイニング・構造化プロンプト・メタプロンプティングを使い、ユーザーストーリーから機能テストケースを生成します。①受け入れ基準から特定の出力形式で機能テストケースを生成するプロンプトを作成→②各受け入れ基準がカバーされているかを表形式で要約させて完全性を検証→③エンドツーエンドのテスト手順作成を支援するメタプロンプトを作成、という3ステップで進めます。
                            </li>
                            <li>
                                <strong>HO-2.2.2b (H2)</strong>：Few-shotプロンプティング技法を用いて、与えられたユーザーストーリーからGherkinスタイルのテスト条件・テストケースを生成します。まず事前定義された例とGherkin構文を確認し、n個の例（ユーザーストーリー・テスト条件・Given-When-Then形式の期待テストケース）を選んでプロンプトに含め、新しいユーザーストーリーに適用します。
                            </li>
                            <li>
                                <strong>HO-2.2.2c (H2)</strong>：プロンプトチェイニングを使い、リスク分析や依存関係を考慮しながら、与えられたテストスイート内のテストケースを優先順位付けします。リスクベース・カバレッジベース・要件ベースなど異なるテストアプローチの概要を確認したうえで、優先順位付け計画を生成するプロンプトを作成し、結果を人手で検証します。
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="callout-practice">
                    <div className="callout-header">
                        <span className="callout-icon">💡</span>
                        <span className="callout-label">ベストプラクティス</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            Few-shotプロンプティングでGherkinスタイルのテストケースを生成する場合、<strong>例の数（n）を増やしすぎない</strong>ことが重要です。例が多すぎるとコンテキストウィンドウを圧迫し処理効率が下がる一方、少なすぎると期待するパターンが安定しません。まず2〜3例から始め、結果が不安定な場合に例を追加する、という段階的なアプローチが実務的です。
                        </p>
                    </div>
                </div>
                <hr />

                <h3 id="23-自動リグレッションテスト223">2.3 自動リグレッションテスト（2.2.3）</h3>
                <p>
                    新しいイテレーションやリリースのたびにリグレッションテストケースの数は増加する傾向にあり、特に実行頻度の高いCI/CD（継続的インテグレーション／継続的デリバリー）パイプラインにおいては自動化の理想的な対象となります。GenAIは、コードベースの変更に動的に適応し影響分析を行うことで、リグレッションテストの効率化を支援します。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>典型タスク</th>
                                <th>GenAIによる支援内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>キーワード駆動自動化によるテストスクリプト実装</td>
                                <td>
                                    事前定義されたキーワードが共通のテストステップを表すキーワード駆動テスト自動化フレームワークに基づき、キーワードを特定のテストケースにマッピングしてテストスクリプトを生成
                                </td>
                            </tr>
                            <tr className="even">
                                <td>影響分析とテストの最適化</td>
                                <td>
                                    コード変更を分析して高リスク領域を特定し、最も必要な箇所にリグレッションテストを絞り込む
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>セルフヒーリング・アダプティブテスト</td>
                                <td>
                                    軽微なUIやAPIの変更に自動的にテストスクリプトを適応させ、不要な失敗を防ぎテストスイートの安定性を維持
                                </td>
                            </tr>
                            <tr className="even">
                                <td>自動テストレポーティングとインサイト</td>
                                <td>
                                    成功率指標・失敗・主要な洞察を含む詳細なテストレポートを生成し、トレンドや潜在的な失敗ポイントを予測するダッシュボードを提供
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>欠陥報告と根本原因分析の強化</td>
                                <td>
                                    テストログ・スクリーンショット・テスト環境データを含む包括的な欠陥報告の自動作成を支援
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>GUIテストとAPIテストでは課題の性質が異なります。</p>
                <ul>
                    <li>
                        <strong>GUIテスト</strong>：UIの頻繁な変更により不安定になりやすい。GenAIは動的ロケータや変更されたインタラクションなど変化に自動的に適応させ、手動介入を削減できる。
                    </li>
                    <li>
                        <strong>APIテスト</strong>：リクエスト／レスポンス形式、エンドポイント、認証の変化が課題。GenAIは進化するAPI仕様にスクリプトを自動適応させ、多様なテストデータを生成してカバレッジを維持できる。
                    </li>
                </ul>
                <div className="callout-warning">
                    <div className="callout-header">
                        <span className="callout-icon">⚠️</span>
                        <span className="callout-label">注意点</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            これらの活動は機能・非機能の様々なリグレッションテストに適用できますが、<strong>GenAIは誤りを犯す可能性がある</strong>ことをテスターは認識しておく必要があります。生成された出力は、関連するリスクに応じて注意深くチェックされなければなりません（リスクの詳細は第3章「GenAIのリスク管理」で扱います）。
                        </p>
                    </div>
                </div>
                <div className="callout-handson">
                    <div className="callout-header">
                        <span className="callout-icon">🖐</span>
                        <span className="callout-label">ハンズオン目標</span>
                    </div>
                    <div className="callout-body">
                        <ul>
                            <li>
                                <strong>HO-2.2.3a (H2)</strong>：GUIテスト自動化フレームワークを用いた、あるWebアプリケーション向けのテストスクリプトの開発・自動化を演習します。前半はキーワードライブラリのドキュメント作成・初期スクリプト生成・AIによる検証・カバレッジ拡張、後半はシステムプロンプトを用いてテストスクリプトのチェック・修正を行うAIアシスタントの作成に重点を置きます。
                            </li>
                            <li>
                                <strong>HO-2.2.3b (H2)</strong>：構造化プロンプトを用いてリグレッションテストレポートを分析する演習です。テスト結果の分析とテスト仕様との比較から始め、類似欠陥のクラスタリング、既知の異常リストの維持、結果のクロスチェックへと段階的に進めます（各ステップは1つのLLM対話の中でつながっています）。
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />

                <h3 id="24-テスト監視テストコントロール224">
                    2.4 テスト監視・テストコントロール（2.2.4）
                </h3>
                <p>
                    テスト監視業務では、しばしばテスト管理ツールに既に存在する大量の（時には非構造化な）データの取得が必要であり、GenAIはこれらのデータの分析・統合を支援できます。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>典型タスク</th>
                                <th>GenAIによる支援内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>テスト監視とメトリクス分析</td>
                                <td>
                                    テスト監視の自動化や、潜在リスクを予測するためのトレンド分析、計画からの逸脱をチームに警告
                                </td>
                            </tr>
                            <tr className="even">
                                <td>テストコントロール</td>
                                <td>
                                    テストの再優先順位付け、スケジュール調整、リソースの再配分に関する洞察を提供し、テストを高優先度領域に柔軟に集中させる
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>テスト完了に関するインサイトと継続的学習</td>
                                <td>
                                    テスト完了報告書を生成し、成功点や教訓を強調。チームが将来のテストプロセスを改善する材料を提供
                                </td>
                            </tr>
                            <tr className="even">
                                <td>高度化されたテストメトリクスの可視化とレポーティング</td>
                                <td>
                                    動的なダッシュボードや自然言語での要約を作成し、全ステークホルダーが関連メトリクスにアクセスできるようにする
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout-handson">
                    <div className="callout-header">
                        <span className="callout-icon">🖐</span>
                        <span className="callout-label">ハンズオン目標 HO-2.2.4 (H0)</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            テストツールから抽出されたテストデータをLLMが処理し、テスト進捗・欠陥トレンド・カバレッジなどの主要メトリクスと潜在リスクを生成する様子をデモとして観察します。生成されたメトリクスはダッシュボードに表示され、全ステークホルダー向けに自然言語で要約されます。
                        </p>
                    </div>
                </div>
                <div className="callout-warning">
                    <div className="callout-header">
                        <span className="callout-icon">⚠️</span>
                        <span className="callout-label">v1.1での学習目標の文言変更</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            v1.0では「GenAI-2.2.4 (K3) Apply generative AI to <strong>test control and monitoring</strong> tasks」でしたが、v1.1では「Apply generative AI to <strong>test monitoring and control</strong> task」と、監視とコントロールの語順および単複表現が微調整されています（内容・出題範囲に変更はありません）。
                        </p>
                    </div>
                </div>
                <hr />

                <h3 id="25-状況に応じた技法選択225">2.5 状況に応じた技法選択（2.2.5）</h3>
                <p>
                    2.1.2で紹介した3つのコア技法（プロンプトチェイニング／Few-shotプロンプティング／メタプロンプティング）を、テストタスクの特性に応じてどう選ぶべきかをまとめます。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>プロンプティング技法</th>
                                <th>推奨されるユースケース</th>
                                <th>主な特徴・適用例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>プロンプトチェイニング</td>
                                <td>各ステップで人による検証を伴う精度が求められる複雑なタスク</td>
                                <td>
                                    タスクを小さなステップに分解。テスト分析・テスト設計・テスト自動化など、各テストステップの正確性がチェックされる場面で有用
                                </td>
                            </tr>
                            <tr className="even">
                                <td>Few-shotプロンプティング</td>
                                <td>反復的、または特定・制約のある出力形式が求められるタスク</td>
                                <td>
                                    特定パターンでの反復生成のための例を提供。Gherkin形式のテストケース（シナリオベース）、キーワード駆動テスト、特定形式のテストレポートなど
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>メタプロンプティング</td>
                                <td>柔軟で動的なタスク。新しいタスク向けのプロンプト作成に有用</td>
                                <td>
                                    達成すべき目的とタスクの一般的な説明を与えることで、LLMのプロンプト作成を誘導。テストレポート分析や異常検知などあらゆる複雑なタスクに有用
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    以下は、テストタスクの性質から技法を選択するための意思決定フローの一例です（シラバスの説明を図式化したものです）。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-7">
                    <Mermaid chart={DIAGRAM_TECHNIQUE_DECISION_TREE} />
                </div>
                <p>
                    シラバスが強調する通り、<strong>1つのユースケースに複数の技法を使うことも可能</strong>です。例えば、メタプロンプティングで初期プロンプトを作成し、そのプロンプトに含まれる例をFew-shotプロンプティングで調整・強化し、さらにタスクをプロンプトチェイニングで小さなサブタスクに分割して中間ステップの検証を可能にする、という組み合わせが典型例です。
                </p>
                <div className="callout-handson">
                    <div className="callout-header">
                        <span className="callout-icon">🖐</span>
                        <span className="callout-label">ハンズオン目標 HO-2.2.5 (H1)</span>
                    </div>
                    <div className="callout-body">
                        <p>
                            様々な課題を持つ複数のテストタスクが与えられ、各タスクについて「精度が必要か」「反復的な構造が必要か」といった性質を評価し、そのタスクの文脈と具体的なニーズに最も適した技法を提案してグループで議論します。
                        </p>
                    </div>
                </div>
                <hr />
            </main>
        </div>
    );
}
