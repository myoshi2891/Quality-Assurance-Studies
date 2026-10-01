import React from 'react';
import type { Metadata } from 'next';
import './istqb-ct-genai-chapter4-llm-powered-solutions.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_D1, DIAGRAM_D2 } from './diagrams';

export const metadata: Metadata = {
    title: 'ISTQB CT-GenAI 第4章 完全ガイド｜LLM搭載テストインフラ（初学者向け）',
    description:
        'ISTQB Certified Tester – Testing with Generative AI（CT-GenAI）第4章 LLM搭載テストインフラを初学者向けにステップバイステップで解説。アーキテクチャ、RAG、エージェント、ファインチューニング、LLMOpsのベストプラクティスと出典URL付き。',
};

export default function CtGenAiChapter4Page() {
    return (
        <div className="ct-genai-chapter4-page layout">
            <NavBar />

            <main className="main">
                <header className="hero">
                    <span className="eyebrow">
                        ISTQB® Certified Tester Specialist Level — Testing with Generative AI（CT-GenAI）
                    </span>
                    <h1>第4章　ソフトウェアテストのための LLM 搭載テストインフラ　完全ガイド（初学者向け）</h1>
                    <p className="lead">
                        アーキテクチャの基本構成要素から、RAG、LLM搭載エージェント、ファインチューニング、LLMOpsまで。CTFL取得済みでGenAI関連の技術要素を初めて体系的に学ぶテスター・自動化エンジニア・テストマネージャ向けに、ステップバイステップで解説します。
                    </p>
                    <div className="hero-meta">
                        <span className="chip">
                            <i className="ti ti-clock"></i>学習時間の目安：110分（シラバス配分）
                        </span>
                        <span className="chip">
                            <i className="ti ti-pencil"></i>試験全体：40問・60分・合格ライン30/46点（65%）
                        </span>
                        <span className="chip">
                            <i className="ti ti-target"></i>学習目標レベル：すべて K2（説明できる）
                        </span>
                        <span className="chip">
                            <i className="ti ti-versions"></i>対応シラバス：v1.0 原文 ＋ v1.1 準拠教材
                        </span>
                    </div>
                </header>

                <div className="content">
                    {/* ========== Section 0: 本ガイドの読み方 ========== */}
                    <section className="section" id="s0">
                        <div className="eyebrow">
                            <i className="ti ti-info-circle"></i>0. 本ガイドの読み方と根拠ソースについて
                        </div>
                        <h2>本ガイドの読み方</h2>

                        <h3>0.1 記号の意味</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>記号</th>
                                        <th>意味</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className="tag syllabus">シラバス</span></td>
                                        <td>
                                            ISTQB公式シラバス（v1.0原文、およびv1.1準拠の教材）に書かれている内容。試験に直結する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="tag note">補足</span></td>
                                        <td>
                                            シラバスには書かれていないが、理解を助けるための一般的な業界知見やベストプラクティス。試験範囲外の可能性があるので、暗記対象ではなく実務の参考として読む
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>💡 ベストプラクティス</td>
                                        <td>各項目・サービス・機能を実務で使うときの推奨事項</td>
                                    </tr>
                                    <tr>
                                        <td><span className="tag k2">K2</span></td>
                                        <td>
                                            「説明できる」レベルの学習目標（第4章の学習目標はすべてK2）
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>0.2 バージョンについての重要な注意</h3>
                        <p>
                            ISTQB公式ページによると、CT-GenAIシラバスはv1.0（2025年7月25日公開）からv1.1に更新されています。v1.1の第4章の章題は「LLM-Powered Solutions for Software Testing」で、内部は「4.1 アーキテクチャ的アプローチ」「4.2 ファインチューニングとLLMOps」の2節構成です。
                        </p>
                        <p>本ガイドは次の2種類の一次・準一次資料を突き合わせて作成しました。</p>
                        <ol>
                            <li>v1.0シラバスPDF（ISTQB公式の配布物）の第4章原文</li>
                            <li>v1.1準拠を明記したExactpro社の第4章教材（Reading Materials）</li>
                        </ol>
                        <div className="callout gold">
                            <i className="ti ti-alert-triangle"></i>
                            <div className="callout-body">
                                <p className="callout-title">v1.1シラバス本文について</p>
                                <p>
                                    v1.1のシラバスPDFそのものは、本ガイド作成時に本文を機械的に取得できませんでした。v1.0とv1.1で大きな構造差はありませんが、受験前には必ず最新の公式PDFで用語と記述を照合してください（URLは末尾の参考文献を参照）。
                                </p>
                            </div>
                        </div>

                        <h3>0.3 試験で問われる「型」</h3>
                        <p>
                            第4章の学習目標はすべてK2（理解・説明）です。つまり「〜を説明せよ」「〜の役割を選べ」「AとBの違いはどれか」という形式が中心で、計算問題や手順の実装問題は出にくい章です。用語の定義と「なぜそれが必要か」を自分の言葉で言えるようにしましょう。
                        </p>
                    </section>

                    {/* ========== Section 1: 第4章の全体像 ========== */}
                    <section className="section" id="s1">
                        <div className="eyebrow">
                            <i className="ti ti-map-2"></i>1. 第4章の全体像
                        </div>
                        <h2>第4章の全体像</h2>

                        <h3>1.1 一言でいうと</h3>
                        <p>
                            第2章では「プロンプトの書き方」、第3章では「GenAIのリスクと対策」を学びました。第4章は、それらを<strong>組織の仕組み（インフラ）として実装・運用する方法</strong>を扱います。チャットボットに質問するだけの使い方から一歩進んで、「社内のテスト資産を読ませる」「ツールを操作させる」「自社仕様に合わせて学習させる」「安全に運用し続ける」ための技術要素です。
                        </p>

                        <h3>1.2 章の構成</h3>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図1：第4章の構成（全体像）
                            </p>
                            <div className="diagram-wrap">
                                <div className="mermaid-container">
                                    <Mermaid chart={DIAGRAM_D1} />
                                </div>
                            </div>
                        </div>

                        <h3>1.3 各項目の位置づけ（初学者向けたとえ話）</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>たとえ</th>
                                        <th>何を解決するか</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4.1.1 基本アーキテクチャ</td>
                                        <td>
                                            受付（フロント）・事務局（バック）・専門家（LLM）がいる相談窓口
                                        </td>
                                        <td>安全で構造化された形でLLMをテスト業務に組み込む</td>
                                    </tr>
                                    <tr>
                                        <td>4.1.2 RAG</td>
                                        <td>専門家が回答の前に社内資料を調べてから答える</td>
                                        <td>古い知識・自社固有情報の欠落・ハルシネーション</td>
                                    </tr>
                                    <tr>
                                        <td>4.1.3 エージェント</td>
                                        <td>専門家に「道具箱」を渡し、自分で作業を進めてもらう</td>
                                        <td>複数ステップの作業の自動化</td>
                                    </tr>
                                    <tr>
                                        <td>4.2.1 ファインチューニング</td>
                                        <td>専門家に自社研修を受けさせて、自社流に慣れてもらう</td>
                                        <td>自社用語・出力形式・ドメイン特有の推論</td>
                                    </tr>
                                    <tr>
                                        <td>4.2.2 LLMOps</td>
                                        <td>窓口全体を継続的に監視・保守する運営体制</td>
                                        <td>実験止まりを脱し、安定・安全・低コストで運用</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>1.4 キーワード（シラバス記載）</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>区分</th>
                                        <th>キーワード</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>一般</td>
                                        <td>test infrastructure</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI固有</td>
                                        <td>
                                            fine-tuning、LLM-powered agent、Large Language Model Operations（LLMOps）、retrieval-augmented generation（RAG）、vector database
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout-source">
                            出典：
                            <a
                                href="https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CT-GenAI Syllabus v1.0（PDF）
                            </a>
                        </div>
                    </section>

                    {/* ========== Section 2: 4.1.1 基本アーキテクチャ ========== */}
                    <section className="section" id="s2">
                        <div className="eyebrow">
                            <i className="ti ti-stack-2"></i>2. 4.1.1 LLM搭載テストインフラの主要なアーキテクチャ構成要素と概念　<span className="tag k2">K2</span>
                        </div>
                        <h2>4.1.1　LLM搭載テストインフラの主要なアーキテクチャ構成要素と概念</h2>

                        <h3>2.1 まず用語：「テストインフラ」とは</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>テストインフラの定義
                                </p>
                                <p>
                                    LLM搭載テストインフラとは、<strong>LLMをテストプロセスに組み込み、自動化・推論・意思決定を強化するシステム</strong>のことです。単に会話するだけの従来型AIチャットボットと違い、LLM搭載テストツールは「テスト関連の問い合わせの処理」「要件の分析」「テストケースの生成」「出力の評価」といったテスト業務の支援を目的に設計されています。
                                </p>
                            </div>
                        </div>

                        <h3>2.2 チャットボットとLLM搭載テストツールの違い（第1章1.2.2の復習）</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>AIチャットボット</th>
                                        <th>LLM搭載テストアプリケーション</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>主な用途</td>
                                        <td>会話形式の質問・壁打ち・探索的テストの補助</td>
                                        <td>
                                            明確に定義されたテストタスクの（多くは自動化された）実行
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>接続方法</td>
                                        <td>Web／アプリのチャット画面</td>
                                        <td>API経由でLLMを組み込む</td>
                                    </tr>
                                    <tr>
                                        <td>カスタマイズ性</td>
                                        <td>
                                            一般的なチャットボットでは低い傾向（主にプロンプトで工夫する）
                                        </td>
                                        <td>高い（社内データ連携・後処理・権限制御が可能）</td>
                                    </tr>
                                    <tr>
                                        <td>拡張性</td>
                                        <td>
                                            一般的なチャットボットでは個人利用が中心になりやすい
                                        </td>
                                        <td>組織全体・CI/CDにスケールできる</td>
                                    </tr>
                                    <tr>
                                        <td>典型例</td>
                                        <td>要件のあいまいさの指摘、テスト観点のブレスト</td>
                                        <td>テストケース自動生成、欠陥分析、テストデータ合成</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>2.3 典型アーキテクチャ：3つの主要コンポーネント</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>3コンポーネント構成
                                </p>
                                <p>
                                    典型的な構成は、<strong>フロントエンド・バックエンド・LLM</strong>（＋外部データソース）から成ります。
                                </p>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>コンポーネント</th>
                                        <th>役割</th>
                                        <th>具体例（v1.1教材の記述に基づく）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>フロントエンド</td>
                                        <td>
                                            テスターが操作するユーザーインターフェース。プロンプト入力、テスト成果物のアップロード、テスト操作の依頼
                                        </td>
                                        <td>
                                            Webダッシュボード、コマンドライン、テスト管理ツールのプラグイン、チャット風UI
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>バックエンド</td>
                                        <td>
                                            舞台裏の調整とロジックのすべて。認証・アクセス制御、プロンプトの前処理（コンテキスト収集、整形、サニタイズ）、関連するテスト成果物の検索、構造化プロンプトのLLMへの送信、外部システム連携
                                        </td>
                                        <td>
                                            テスト管理ツール、CI/CDパイプライン、バージョン管理システムとの連携
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>LLM</td>
                                        <td>
                                            構造化されたプロンプトに基づいて応答を生成。バックエンドが渡した情報だけを受け取る
                                        </td>
                                        <td>
                                            サードパーティのクラウドモデル（API経由）、または組織内でホストするカスタムモデル
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>2.4 全体のデータフロー</h3>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図2：LLM搭載テストインフラのデータフロー
                            </p>
                            <div className="diagram-wrap">
                                <div className="mermaid-container">
                                    <Mermaid chart={DIAGRAM_D2} />
                                </div>
                            </div>
                        </div>

                        <h3>2.5 従来のクライアント・サーバ型との違い（試験頻出）</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    LLM搭載テストインフラは、従来のクライアント・サーバモデルを超えて、次のような「知的な処理コンポーネント」を組み込みます。
                                </p>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>特徴</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>LLMは推論エンジン</td>
                                        <td>
                                            単なるサーバではなく、テスト成果物（テストケース、要件、ログ、コード）を解釈し、意味理解に基づいて推論する処理コンポーネント
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>動的な生成</td>
                                        <td>
                                            ルールベースのチャットボットは台本どおりに応答するが、LLM搭載ツールは要件・コード・テスト結果などの文脈から、その都度テストの示唆を生成する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>マルチソースのデータ統合</td>
                                        <td>
                                            バックエンドは複数のデータソースを統合する。構造化データにはリレーショナルデータベース、意味検索にはベクトルデータベース
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>後処理による強化</td>
                                        <td>
                                            LLMの生の出力をバックエンドが加工し、テストプロセスの条件に整合させてからフロントエンドへ返す
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>2.6 2種類のデータベースの使い分け</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>データベース</th>
                                        <th>保存するもの</th>
                                        <th>検索の仕方</th>
                                        <th>テストでの例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>リレーショナルDB</td>
                                        <td>
                                            構造化データ（テストケース、実行結果、ユーザーアカウント、メタデータ）
                                        </td>
                                        <td>SQLによる厳密な条件検索</td>
                                        <td>「先週失敗したテストケースの一覧」</td>
                                    </tr>
                                    <tr>
                                        <td>ベクトルDB</td>
                                        <td>埋め込み（ベクトル）に変換した文書の断片</td>
                                        <td>意味の近さ（類似度）による検索</td>
                                        <td>「ログイン機能に関係しそうな要件」</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>2.7 後処理（Post-processing）で何をするか</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    バックエンドはLLMの生の出力を後処理して、テストプロセスの条件に整合させます。v1.1教材では次の例が挙げられています。
                                </p>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>後処理の例</th>
                                        <th>目的</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>形式・構造の検証</td>
                                        <td>JSONやGherkinなどの決まった形式になっているかを確認</td>
                                    </tr>
                                    <tr>
                                        <td>テストベースとの整合性確認</td>
                                        <td>
                                            存在しない受け入れ基準を検証するテストなど、根拠のない出力を弾く
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ハルシネーションのフィルタリング</td>
                                        <td>明らかな誤りや無関係な内容を除去</td>
                                    </tr>
                                    <tr>
                                        <td>組織固有ルールの適用</td>
                                        <td>命名規約・必須項目・禁止事項のチェック</td>
                                    </tr>
                                    <tr>
                                        <td>テンプレート変換</td>
                                        <td>テストケーステンプレートや自動化スクリプトへ整形</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout gold">
                            <i className="ti ti-bulb"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    💡 ベストプラクティス（アーキテクチャ設計）
                                </p>
                                <ul>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        認証・アクセス制御・プロンプトのサニタイズはバックエンドで一元管理し、LLMには<strong>必要な情報だけ</strong>を渡す（LLMは「バックエンドが渡した情報のみ」を受け取る設計）。第3章の「データ最小化」と一致する。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        LLMの出力は必ず後処理（形式検証・整合性チェック）を通してからテスターに返す。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        LLMの出力をそのまま下流システム（CI/CD、DB、実行環境）に渡さない。OWASPは「不適切な出力処理」をLLMアプリの主要リスクの一つに挙げている。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        LLM呼び出しは1か所（ゲートウェイ層）に集約し、ログ・レート制限・コスト上限・モデル切り替えを一元化しておくと、LLMOps（4.2.2）が格段に楽になる。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        LLMのホスティング先（サードパーティAPIか社内ホストか）は、データの機密度で決める（第3章3.2.3）。
                                    </li>
                                </ul>
                                <div className="callout-source">
                                    出典：
                                    <a
                                        href="https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CT-GenAI Syllabus v1.0（PDF）
                                    </a>
                                    、
                                    <a
                                        href="https://speakerdeck.com/exactpro/chapter-4-llm-powered-testformat-reading-materials-self-study-or-guided-reading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Exactpro Chapter 4 Reading Materials（v1.1）
                                    </a>
                                    、
                                    <a
                                        href="https://genai.owasp.org/llm-top-10/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        OWASP Top 10 for LLM Applications
                                    </a>
                                </div>
                            </div>
                        </div>

                        <h4>2.7.1 この節の試験ポイント</h4>
                        <div className="critique-card">
                            <ul>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        3コンポーネント（フロントエンド、バックエンド、LLM）それぞれの<strong>責務の切り分け</strong>が問われる。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        「認証」「プロンプト準備」「データ検索」「LLMとのやりとり」はバックエンドの責務。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        「リレーショナルDB＝構造化データ」「ベクトルDB＝意味検索」の対応を押さえる。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        「後処理」がなぜ必要か（出力を組織のテスト条件・形式に整合させるため）を説明できること。
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
