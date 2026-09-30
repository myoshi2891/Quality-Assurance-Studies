import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './istqb-ctal-ta-chapter5-defect-prevention.css';

const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#e7eefa",
    "primaryBorderColor": "#1f4e9e",
    "primaryTextColor": "#152238",
    "lineColor": "#41506a",
    "secondaryColor": "#f5f7fb",
    "tertiaryColor": "#ebf0f8",
    "nodeBorder": "#1f4e9e",
    "clusterBkg": "#f5f7fb",
    "clusterBorder": "#a9b7cc",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "BIZ UDPGothic, Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis" }
}}%%`;

export const DIAGRAM_STRUCTURE = `${MERMAID_CONFIG}
flowchart TD
    CH5["第5章 ソフトウェア欠陥防止"]
    S51["5.1 欠陥防止の実践"]
    S52["5.2 フェーズ封じ込めの支援"]
    S53["5.3 欠陥の再発緩和"]
    L511["TA-5.1.1 K2 TAの貢献を説明する"]
    S521["5.2.1 モデルで欠陥を検出"]
    S522["5.2.2 レビュー技法の適用"]
    S531["5.3.1 テスト結果の分析"]
    S532["5.3.2 欠陥分類とRCA"]
    CH5 --> S51
    CH5 --> S52
    CH5 --> S53
    S51 --> L511
    S52 --> S521
    S52 --> S522
    S53 --> S531
    S53 --> S532`;

export const DIAGRAM_PREVENTION_FLOW = `${MERMAID_CONFIG}
flowchart TD
    A["テストベースを受け取る"] --> B["完全性とテスト容易性を確認"]
    B --> C["レビュー技法を適用"]
    B --> D["テスト技法に沿ってモデル化"]
    C --> E{"欠陥や曖昧さが見つかったか"}
    D --> E
    E -->|はい| F["欠陥を記録し関係者へ早期にフィードバック"]
    E -->|いいえ| G["テスト条件の定義へ進む"]
    F --> H["修正内容を確認しテストベースを更新"]
    H --> G
    G --> I["テスト設計へ"]`;

export const metadata: Metadata = {
    title: 'CTAL-TA v4.0 第5章 ソフトウェア欠陥防止｜初学者向けガイド',
    description: 'ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0 第5章 ソフトウェア欠陥防止の初学者向け完全学習ガイド。',
};

export default function CtalTaChapter5Page() {
    return (
        <div className="ctal-ta-ch5-page">
            <div className="shell">
                <NavBar />

                <main className="doc" id="main">
                    {/* HERO */}
                    <header className="hero" id="top">
                        <h1>第5章　ソフトウェア欠陥防止</h1>
                        <p className="hero-sub">CTAL-TA v4.0 初学者向けステップバイステップ・ガイド</p>
                        <dl className="meta">
                            <div>
                                <dt>対象資格</dt>
                                <dd>ISTQB® Certified Tester Advanced Level Test Analyst（CTAL-TA）v4.0</dd>
                            </div>
                            <div>
                                <dt>対象章</dt>
                                <dd>シラバス第5章 Software Defect Prevention　学習時間 225 分</dd>
                            </div>
                            <div>
                                <dt>想定読者</dt>
                                <dd>テスト初学者から CTFL（Foundation Level）取得直後の方</dd>
                            </div>
                            <div>
                                <dt>作成日</dt>
                                <dd>2026-09-20</dd>
                            </div>
                        </dl>
                        <div className="sheet">
                            <table className="lo-sheet">
                                <caption>この章で問われる5つの学習目標（LO）と学習時間</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">LO</th>
                                        <th scope="col">K</th>
                                        <th scope="col">内容</th>
                                        <th scope="col">学習時間</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">TA-5.1.1</th>
                                        <td>
                                            <span className="k k-k2">K2</span>
                                        </td>
                                        <td>TA の欠陥防止への貢献を説明する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '1.4rem' }}></span>
                                            <span className="mtxt">15 分</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TA-5.2.1</th>
                                        <td>
                                            <span className="k k-k3">K3</span>
                                        </td>
                                        <td>モデルを使って仕様の欠陥を検出する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '5.6rem' }}></span>
                                            <span className="mtxt">60 分</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TA-5.2.2</th>
                                        <td>
                                            <span className="k k-k3">K3</span>
                                        </td>
                                        <td>レビュー技法でテストベースの欠陥を検出する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '5.6rem' }}></span>
                                            <span className="mtxt">60 分</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TA-5.3.1</th>
                                        <td>
                                            <span className="k k-k4">K4</span>
                                        </td>
                                        <td>テスト結果を分析し検出の改善点を特定する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '7rem' }}></span>
                                            <span className="mtxt">75 分</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TA-5.3.2</th>
                                        <td>
                                            <span className="k k-k2">K2</span>
                                        </td>
                                        <td>欠陥分類が根本原因分析を支える理由を説明する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '1.4rem' }}></span>
                                            <span className="mtxt">15 分</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="notice">
                            <strong>この版でご注意ください。</strong>シラバス第5章の本文（PDF 48〜54 ページ）は直接確認できていません。各記述の根拠は
                            <span className="mk mk-a">◎</span>公式シラバス、<span className="mk mk-b">○</span>
                            公式サンプル試験・LO対応表、<span className="mk mk-c">△</span>
                            業界一般の補足、で区別しています。詳しくはパート0を読んでください。
                        </p>
                    </header>

                    {/* パート0 */}
                    <h2 id="part-0">
                        <span className="part-no">パート0</span>
                        <span className="part-title">このガイドの使い方と情報源の確度</span>
                    </h2>
                    <p className="lead">
                        <span className="lead-ico" aria-hidden="true">
                            💡
                        </span>
                        このパートでは、本ガイドの各記述がどの資料に基づくのかを説明します。試験勉強では「公式に確認できた内容」と「補足知識」を区別して覚えることが大切なので、先にここを読んでおくと後のパートを安全に使えます。
                    </p>
                    <h3 id="sec-1">0.1 情報源の確度マーク</h3>
                    <p>
                        なぜマークを付けるのか：資格試験の出題範囲は公式シラバスで決まります。補足知識を公式内容と混同すると、試験で間違った知識を根拠に答えてしまうおそれがあるためです。
                    </p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>マーク</th>
                                    <th>意味</th>
                                    <th>例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                    </td>
                                    <td>
                                        公式シラバス v4.0 の本文で確認した内容（第1〜4章にある第5章への参照記述を含む）
                                    </td>
                                    <td>決定表のレビュー観点、状態遷移テストが欠陥防止に貢献する旨の記述</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                                            ○
                                        </span>
                                    </td>
                                    <td>
                                        公式サンプル試験 v4.1（設問と解答解説）または公式の学習目標（LO）新旧対応表で確認した内容
                                    </td>
                                    <td>DDP の計算式、レビュー技法4種の特徴</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-c" title="業界一般の補足（要照合）">
                                            △
                                        </span>
                                    </td>
                                    <td>一般的な業界知識に基づく補足。シラバス第5章の本文では確認できていない内容</td>
                                    <td>PCE（フェーズ封じ込め有効性）の式、5 Whys の進め方</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="sec-2">0.2 重要な注意（必ず読んでください）</h3>
                    <ul>
                        <li>
                            第5章の本文（シラバス PDF の 48〜54 ページ）は、資料の取得ツールの上限により、全文を読み込めませんでした。
                        </li>
                        <li>
                            そのため第5章の各項目は、次の4つの資料から再構成しています。
                            <ol>
                                <li>公式ページ掲載の目次と学習目標（LO）</li>
                                <li>公式 LO 新旧対応表（v3.1 → v4.0 の変更理由つき）</li>
                                <li>公式サンプル試験 v4.1 の第5章関連問題 #38〜#45 とその解答解説</li>
                                <li>シラバス第1〜3章にある第5章への参照記述（例：「Section 5.2.1 参照」）</li>
                            </ol>
                        </li>
                        <li>
                            章内の
                            <strong>正確な文言・図表・キーワード一覧（K1 で暗記が必要な用語）</strong>
                            は、必ず公式シラバス PDF の 48〜54 ページで照合してください（URL はパート8）。
                        </li>
                    </ul>
                    <details className="glossary">
                        <summary>
                            <span className="g-ico">📖</span>このパートで登場した用語
                            <span className="g-n">3語</span>
                        </summary>
                        <ul>
                            <li>LO（Learning Objective）：学習目標。試験問題は LO から作られる</li>
                            <li>
                                K レベル：理解の深さの段階。K1＝覚える、K2＝理解する、K3＝適用する、K4＝分析する
                            </li>
                            <li>サンプル試験：ISTQB が公開している練習用の試験問題と解答解説</li>
                        </ul>
                    </details>

                    {/* パート1 */}
                    <h2 id="part-1">
                        <span className="part-no">パート1</span>
                        <span className="part-title">第5章の全体像</span>
                    </h2>
                    <p className="lead">
                        <span className="lead-ico" aria-hidden="true">
                            💡
                        </span>
                        このパートでは、第5章が何を目指していて、どの節が何分で、どのレベルまで問われるのかを整理します。地図を先に見ておくと、後のパートで迷いにくくなります。
                    </p>
                    <h3 id="sec-3">1.1 一言でいうと</h3>
                    <p>
                        第5章は「テストアナリスト（TA＝ビジネス寄りのテストを担当する役割）が、欠陥を<strong>見つけるだけでなく、生まれにくく・逃げにくくする</strong>ための章」です。
                    </p>
                    <p>
                        たとえ話：虫歯は、治療（歯医者）より予防（毎日の歯磨きと定期検診）のほうが、痛みも費用も小さくて済みます。テストも同じで、完成した製品を動かして欠陥を探す（治療）より、仕様書の段階で誤りを止める（予防）ほうが、手戻りが小さくなります。
                    </p>
                    <h3 id="sec-4">1.2 章の構造</h3>
                    <p>
                        この図は、第5章の3つの節と、その下にある学習目標の関係を表しています。上から下へ読み進めてください。
                    </p>
                    <figure className="diagram">
                        <Mermaid chart={DIAGRAM_STRUCTURE} />
                        <figcaption className="fallback">
                            図の描画にはインターネット接続が必要です。接続できない場合は上の Mermaid ソースがそのまま表示されます。
                        </figcaption>
                    </figure>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「5.1 欠陥防止の実践」：TA が防止のためにできることの全体像（説明できれば十分な K2）
                        </li>
                        <li>
                            「5.2 フェーズ封じ込めの支援」：欠陥を混入したフェーズの中で止めるための2つの手段（モデルとレビュー。どちらも実際に使える K3）
                        </li>
                        <li>
                            「5.3 欠陥の再発緩和」：テスト結果を分析し、同じ欠陥を繰り返さないようにする（分析まで求められる K4 を含む）
                        </li>
                    </ul>
                    <h3 id="sec-5">
                        1.3 学習目標（LO）一覧【
                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                            ○
                        </span>
                        】
                    </h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>LO コード</th>
                                    <th>学習目標（要約）</th>
                                    <th style={{ textAlign: 'center' }}>K</th>
                                    <th style={{ textAlign: 'center' }}>出題配点</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>TA-5.1.1</td>
                                    <td>TA が欠陥防止にどう貢献できるかを説明する</td>
                                    <td style={{ textAlign: 'center' }}>K2</td>
                                    <td style={{ textAlign: 'center' }}>15 分</td>
                                </tr>
                                <tr>
                                    <td>TA-5.2.1</td>
                                    <td>テスト対象のモデルを使って、仕様の欠陥を検出する</td>
                                    <td style={{ textAlign: 'center' }}>K3</td>
                                    <td style={{ textAlign: 'center' }}>60 分</td>
                                </tr>
                                <tr>
                                    <td>TA-5.2.2</td>
                                    <td>テストベースにレビュー技法を適用して欠陥を検出する</td>
                                    <td style={{ textAlign: 'center' }}>K3</td>
                                    <td style={{ textAlign: 'center' }}>60 分</td>
                                </tr>
                                <tr>
                                    <td>TA-5.3.1</td>
                                    <td>テスト結果を分析して、欠陥検出の改善点を特定する</td>
                                    <td style={{ textAlign: 'center' }}>K4</td>
                                    <td style={{ textAlign: 'center' }}>75 分</td>
                                </tr>
                                <tr>
                                    <td>TA-5.3.2</td>
                                    <td>欠陥分類が根本原因分析をどう支えるかを説明する</td>
                                    <td style={{ textAlign: 'center' }}>K2</td>
                                    <td style={{ textAlign: 'center' }}>15 分</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>合計</strong>
                                    </td>
                                    <td>公式ページの章別時間と一致</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}>
                                        <strong>225 分</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>読み取りのポイント：</p>
                    <ul>
                        <li>時間が大きい 5.2.1・5.2.2・5.3.1（合計 195 分）が、学習の中心です。</li>
                        <li>
                            K3・K4 の LO は「手を動かして答える」問題（計算や当てはめ）が出る前提で練習します。
                        </li>
                    </ul>
                    <h3 id="sec-6">
                        1.4 v3.1 から v4.0 で何が変わったか【
                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                            ○
                        </span>
                        】
                    </h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>項目</th>
                                    <th>v3.1（旧）</th>
                                    <th>v4.0（現行）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>章の位置づけ</td>
                                    <td>5 Reviews（レビュー）</td>
                                    <td>5 Software Defect Prevention（ソフトウェア欠陥防止）</td>
                                </tr>
                                <tr>
                                    <td>学習時間</td>
                                    <td>120 分</td>
                                    <td>225 分</td>
                                </tr>
                                <tr>
                                    <td>中心の内容</td>
                                    <td>
                                        チェックリストを使ったレビュー（要件・ユーザーストーリーの問題を特定）
                                    </td>
                                    <td>
                                        防止の実践、モデルによる欠陥検出、レビュー技法、テスト結果分析、欠陥分類と RCA
                                    </td>
                                </tr>
                                <tr>
                                    <td>位置づけ</td>
                                    <td>「レビューに参加する人」</td>
                                    <td>「防止と品質管理に多面的に貢献する人」</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        LO 対応表には、v4.0 で「TA の欠陥防止と品質管理への多様な貢献」へ範囲を広げ、「建設的な品質保証の手段を追加した」という趣旨の説明があります。旧版の資格対策書だけで学ぶと、5.1・5.2.1・5.3 の内容が抜けるので注意してください。
                    </p>
                    <h3 id="sec-7">1.5 試験の基本情報</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>項目</th>
                                    <th>内容</th>
                                    <th style={{ textAlign: 'center' }}>試験対策でのポイント</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>問題数</td>
                                    <td>45 問</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>合計点</td>
                                    <td>78 点</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>合格点</td>
                                    <td>51 点（約 65%）</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>試験時間</td>
                                    <td>120 分（非ネイティブ言語は +25%）</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>前提資格</td>
                                    <td>CTFL（v4.0 が推奨、旧版も可）</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>サンプル試験での第5章の配点</td>
                                    <td>#38〜#45 の 8 問・16 点（78 点中 約 20.5%）</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                                            ○
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul>
                        <li>
                            サンプル試験は「実際の試験と同じ配点配分」を保証するものではありません。実際の構成は公式の Exam Structures and Rules 文書で確認してください。
                        </li>
                        <li>
                            公式ページには、旧版 v3.1 の試験終了日（英語：2026-05-16、英語以外：2026-11-16）が告知されています。日本で受けられる版は JSTQB の案内で確認してください。
                        </li>
                    </ul>
                    <details className="glossary">
                        <summary>
                            <span className="g-ico">📖</span>このパートで登場した用語
                            <span className="g-n">4語</span>
                        </summary>
                        <ul>
                            <li>
                                TA（テストアナリスト）：ビジネス要求に近い立場で、テスト分析・設計・実行を担う役割
                            </li>
                            <li>欠陥防止：欠陥が作り込まれる・後工程へ伝わることを減らす活動全般</li>
                            <li>
                                テストベース：テストの根拠になる資料（要件、ユーザーストーリー、仕様書など）
                            </li>
                            <li>
                                RCA（根本原因分析）：欠陥の「なぜ起きたか」をさかのぼって原因を特定する分析
                            </li>
                        </ul>
                    </details>

                    {/* パート2 */}
                    <h2 id="part-2">
                        <span className="part-no">パート2</span>
                        <span className="part-title">5.1 欠陥防止の実践（TA-5.1.1 / K2）</span>
                    </h2>
                    <p className="lead">
                        <span className="lead-ico" aria-hidden="true">
                            💡
                        </span>
                        このパートでは、TA が「欠陥を作らせない・早く止める」ために具体的に何をするのかを説明します。ここを理解しておくと、パート3のモデル化やレビューが「防止のための道具」として見えるようになります。
                    </p>
                    <h3 id="sec-8">2.1 なぜ「検出」だけでは足りないのか</h3>
                    <p>
                        なぜ先に理由を示すのか：テストで欠陥を見つけた時点で、欠陥はすでに作り込まれています。見つけて直す作業（手戻り）にはコストがかかるので、作り込みの段階で減らす発想が必要になります。
                    </p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>混入フェーズ</th>
                                    <th>検出・修正フェーズ</th>
                                    <th>相対修正コストの目安【△】</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>要件定義</td>
                                    <td>欠陥を作り込ませない、または早い段階で止める</td>
                                    <td>すでにある欠陥を見つける</td>
                                </tr>
                                <tr>
                                    <td>代表的な活動</td>
                                    <td>レビュー、リスク分析、モデル化、RCA、設計レビュー</td>
                                    <td>動的テスト（ソフトウェアを実際に動かすテスト）</td>
                                </tr>
                                <tr>
                                    <td>効果が出る時期</td>
                                    <td>上流ほど大きい</td>
                                    <td>動くソフトウェアができてから</td>
                                </tr>
                                <tr>
                                    <td>たとえ</td>
                                    <td>歯磨きと定期検診</td>
                                    <td>歯医者での治療</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        サンプル試験の #38（
                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                            ○
                        </span>
                        ）は「欠陥防止に<strong>最も効果が低い</strong>活動はどれか」を問い、答えは<strong>動的テスト</strong>です。理由は、動的テストが「すでにテスト対象に存在する欠陥を検出するもの」であり、作り込みを防ぐものではないからです。対して、リスク分析、アーキテクチャ設計のレビュー、根本原因分析は、いずれも防止に効果があると説明されています。
                    </p>
                    <p>
                        注意したい点：上流の成果物（要件書や設計書）で欠陥を見つけて直すこと自体は、「欠陥が後工程へ伝わるのを防ぐ」ので、防止活動に数えられます（
                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                            ○
                        </span>
                        ：#33 と #38 の解説）。「静的テスト＝検出だから防止ではない」と切り分けないようにしてください。
                    </p>
                    <h3 id="sec-9">2.2 TA が貢献できる活動</h3>
                    <p>
                        この表は、シラバス第1〜3章で確認できる「TA の防止に関わる活動」をまとめたものです。
                    </p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>活動</th>
                                    <th>TA の具体的な行動</th>
                                    <th>見つかる欠陥の例</th>
                                    <th style={{ textAlign: 'center' }}>LO との対応</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>要件レビューへの参加</td>
                                    <td>
                                        要件やユーザーストーリーに含まれる欠陥とテスト容易性を評価し、プロダクトオーナーへ早期にフィードバックする
                                    </td>
                                    <td>実装前に誤りを取り除ける</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        1.2.1
                                    </td>
                                </tr>
                                <tr>
                                    <td>会話も情報源にする</td>
                                    <td>
                                        ユーザーストーリーの協働作成での会話など、口頭の情報も含めてテストベースの完全性を確認する
                                    </td>
                                    <td>文書に無い前提のずれを早く見つけられる</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        1.2.1
                                    </td>
                                </tr>
                                <tr>
                                    <td>リスク分析への参加</td>
                                    <td>
                                        経験に基づいてリスクを特定・評価し、リスクを最も早く軽減できるテスト活動を提案する（シフトレフト）
                                    </td>
                                    <td>早い段階の対策ほどテスト工数が小さい</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        2.1
                                    </td>
                                </tr>
                                <tr>
                                    <td>モデル化</td>
                                    <td>
                                        テスト技法に沿ってモデル（決定表、状態遷移など）を作り、仕様の矛盾や抜けを見つける
                                    </td>
                                    <td>仕様の欠陥をテスト設計の時点で発見できる</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        3.2.2、3.5.2 /{' '}
                                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                                            ○
                                        </span>{' '}
                                        #33
                                    </td>
                                </tr>
                                <tr>
                                    <td>レビュー技法の適用</td>
                                    <td>
                                        テスト分析の一部としてレビュー技法を使い、テストベースの欠陥を見つける
                                    </td>
                                    <td>欠陥が設計・実装へ伝わる前に止められる</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        1.2.1
                                    </td>
                                </tr>
                                <tr>
                                    <td>チェックリストの整備</td>
                                    <td>過去の失敗や欠陥の経験をチェックリストに記録して再利用する</td>
                                    <td>同じ種類の見落としを減らせる</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        3.4.2
                                    </td>
                                </tr>
                                <tr>
                                    <td>テスト結果の分析</td>
                                    <td>欠陥の集中や検出の弱いフェーズを見つけ、改善案を出す</td>
                                    <td>同種の欠陥の再発を減らせる</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        1.2.4 /{' '}
                                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                                            ○
                                        </span>{' '}
                                        5.3（TA-5.3.1 LO）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        シフトレフト（＝テストや品質活動をライフサイクルの早い側へ寄せる考え方）は、シラバス 2.1 に明記されています。
                    </p>
                    <h3 id="sec-10">2.3 TA の防止活動の流れ</h3>
                    <p>
                        この図は、テスト分析の中で TA が行う防止活動の流れを表しています。上から下へ読み進めてください。
                    </p>
                    <figure className="diagram">
                        <Mermaid chart={DIAGRAM_PREVENTION_FLOW} />
                        <figcaption className="fallback">
                            図の描画にはインターネット接続が必要です。接続できない場合は上の Mermaid ソースがそのまま表示されます。
                        </figcaption>
                    </figure>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「完全性とテスト容易性を確認」：要件に抜けがないか、テストできる書き方になっているかを見る（
                            <span className="mk mk-a" title="公式シラバスの本文で確認">
                                ◎
                            </span>{' '}
                            1.2.1）
                        </li>
                        <li>
                            「欠陥や曖昧さが見つかったか」（ひし形）：見つかれば記録して共有、なければ次の作業へ進む
                        </li>
                        <li>
                            「欠陥を記録し…」：直接修正されない場合でも、テストベースの欠陥は必ず記録する（
                            <span className="mk mk-a" title="公式シラバスの本文で確認">
                                ◎
                            </span>{' '}
                            1.2.1）
                        </li>
                        <li>
                            「修正内容を確認し…」：直った内容がテスト条件に反映されているかを確認する
                        </li>
                    </ul>
                    <h3 id="sec-11">2.4 ベストプラクティス</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>項目</th>
                                    <th>推奨すること</th>
                                    <th>避けたいこと</th>
                                    <th style={{ textAlign: 'center' }}>根拠</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>防止活動の始め方</td>
                                    <td>テスト分析の入口で必ず行い、直されない欠陥も記録する</td>
                                    <td>「仕様が悪いのは自分の担当外」と黙って進める</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>リスク分析</td>
                                    <td>対象を機能やコンポーネントなどのテスト項目に分けて評価する</td>
                                    <td>システム全体を1つのリスクとして扱う</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        2.1
                                    </td>
                                </tr>
                                <tr>
                                    <td>提案するテスト活動</td>
                                    <td>「最も早くリスクを下げられる活動」を選んで提案する</td>
                                    <td>実装後の動的テストだけに頼る</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        2.1
                                    </td>
                                </tr>
                                <tr>
                                    <td>モデル化</td>
                                    <td>テストに必要な詳細度で作る</td>
                                    <td>実装の細部まで描いて保守できなくなる</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        3.2.2
                                    </td>
                                </tr>
                                <tr>
                                    <td>欠陥報告</td>
                                    <td>混入したと思われるフェーズや分類を、報告の項目として残す</td>
                                    <td>修正内容だけを書く（後で分析できない）</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-c" title="業界一般の補足（要照合）">
                                            △
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>学びの共有</td>
                                    <td>レトロスペクティブ（＝振り返り会）で防止策を共有する</td>
                                    <td>個人の経験にとどめる</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>{' '}
                                        2.1
                                    </td>
                                </tr>
                                <tr>
                                    <td>決定権</td>
                                    <td>矛盾や曖昧さは関係者に確認して解決する</td>
                                    <td>TA が自分の解釈で仕様を決める</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-c" title="業界一般の補足（要照合）">
                                            △
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="sec-12">2.5 よくある誤解</h3>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>よくある誤解</th>
                                    <th>実際（シラバスの立場）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>「欠陥防止はテスト管理者の仕事で、テストアナリストには関係ない」</td>
                                    <td>
                                        v4.0 では、TA の成果（BO7：欠陥防止への貢献）として明記されている（
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                        ）
                                    </td>
                                </tr>
                                <tr>
                                    <td>動的テストを増やせば欠陥防止になる</td>
                                    <td>
                                        動的テストは既存の欠陥を検出するもので、防止の効果は最も低い（
                                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                                            ○
                                        </span>{' '}
                                        #38）
                                    </td>
                                </tr>
                                <tr>
                                    <td>レビューで見つけた欠陥は「検出」であって防止ではない</td>
                                    <td>
                                        上流の欠陥を直すと下流へ伝わらないので、防止に寄与する（
                                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                                            ○
                                        </span>{' '}
                                        #38 の解説）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <details className="glossary">
                        <summary>
                            <span className="g-ico">📖</span>このパートで登場した用語
                            <span className="g-n">7語</span>
                        </summary>
                        <ul>
                            <li>欠陥防止：欠陥が作り込まれる、または後工程へ伝わるのを減らす活動</li>
                            <li>動的テスト：ソフトウェアを実際に動かして結果を確認するテスト</li>
                            <li>
                                静的テスト：ソフトウェアを動かさず、文書やコードを読んで欠陥を探すテスト（レビューなど）
                            </li>
                            <li>
                                シフトレフト：テスト活動をライフサイクルの早い時期へ前倒しする考え方
                            </li>
                            <li>
                                手戻り：完成したと思った作業を、欠陥のために前の状態へ戻してやり直すこと
                            </li>
                            <li>レトロスペクティブ：反復や期間の終わりに行う振り返り会</li>
                            <li>テスト容易性：仕様がテストしやすい書き方になっている度合い</li>
                        </ul>
                    </details>
                </main>
            </div>
        </div>
    );
}
