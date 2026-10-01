import React from 'react';
import type { Metadata } from 'next';
import './istqb-ct-genai-chapter4-llm-powered-solutions.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_D1, DIAGRAM_D2, DIAGRAM_D3, DIAGRAM_D4, DIAGRAM_D5, DIAGRAM_D6 } from './diagrams';

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

                    {/* ========== Section 3: 4.1.2 RAG ========== */}
                    <section className="section" id="s3">
                        <div className="eyebrow">
                            <i className="ti ti-database-search"></i>3. 4.1.2 Retrieval-Augmented Generation（RAG）　<span className="tag k2">K2</span>
                        </div>
                        <h2>4.1.2　Retrieval-Augmented Generation（RAG）</h2>

                        <h3>3.1 RAGとは何か</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>RAGの定義
                                </p>
                                <p>
                                    RAGは、<strong>外部のデータソースを回答生成プロセスに取り込むことで、LLMの出力の関連性と正確性を高める</strong>手法です。検索システムと言語モデルを組み合わせ、文脈に沿った（grounded な）応答を生成します。
                                </p>
                            </div>
                        </div>
                        <p>
                            初学者向けに言い換えると、LLMに「事前学習で覚えた知識だけで答えさせる」のではなく、「質問に関係する社内資料を先に探して、それを読ませてから答えさせる」仕組みです。
                        </p>

                        <h3>3.2 なぜテストでRAGが必要か</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>LLM単体の弱点</th>
                                        <th>RAGによる改善</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>事前学習後の最新仕様・最新の要件を知らない</td>
                                        <td>最新の要件書・仕様書を実行時に検索して参照する</td>
                                    </tr>
                                    <tr>
                                        <td>自社固有のテスト資産（既存テストケース、欠陥履歴）を知らない</td>
                                        <td>社内データベースやリポジトリから関連情報を取得する</td>
                                    </tr>
                                    <tr>
                                        <td>根拠のない出力（ハルシネーション）をしやすい</td>
                                        <td>取得した信頼できるデータに根拠づけて生成する</td>
                                    </tr>
                                    <tr>
                                        <td>コンテキストウィンドウに全資料は入らない</td>
                                        <td>関連する断片だけを選んで入れる</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    テストにおけるRAGは、LLM搭載テストインフラが<strong>企業のデータソース（データベース、ドキュメント、リポジトリ）にリアルタイムでアクセス</strong>し、テスト分析・テスト設計などが最新の仕様・要件・既存テストデータと整合するようにします。
                                </p>
                            </div>
                        </div>

                        <h3>3.3 RAGの仕組み：2つのフェーズ</h3>
                        <p>
                            RAGは「事前準備（インデックス作成）」と「実行時（問い合わせ処理）」の2フェーズで動きます。
                        </p>

                        <h4>フェーズ1：事前処理（前処理・インデックス作成）</h4>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図3：RAGの事前処理（インデックス作成）
                            </p>
                            <div className="diagram-wrap">
                                <div className="mermaid-container">
                                    <Mermaid chart={DIAGRAM_D3} />
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ステップ</th>
                                        <th>内容（シラバス記述）</th>
                                        <th>補足</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>チャンク分割</td>
                                        <td>
                                            大きな文書を小さな断片（例：256〜512トークン）に分割し、検索を絞り込み、モデルのコンテキストウィンドウに収まるようにする
                                        </td>
                                        <td>
                                            チャンクが大きすぎると無関係な内容が混ざり、小さすぎると文脈が失われる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>クリーニング</td>
                                        <td>各チャンクをクリーニング・処理する</td>
                                        <td>不要な書式、ヘッダー・フッター、重複などを除去</td>
                                    </tr>
                                    <tr>
                                        <td>埋め込み化</td>
                                        <td>
                                            事前学習済みモデルで高次元ベクトル（埋め込み）にエンコードする
                                        </td>
                                        <td>意味が近い文章は、ベクトル空間でも近くに配置される</td>
                                    </tr>
                                    <tr>
                                        <td>保存</td>
                                        <td>埋め込みをベクトルデータベースに格納</td>
                                        <td>実行時に類似度ベースの効率的な検索が可能になる</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>フェーズ2：実行時（ユーザープロンプト処理）</h4>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図4：RAGの実行時処理（検索から生成まで）
                            </p>
                            <div className="diagram-wrap">
                                <div className="mermaid-container">
                                    <Mermaid chart={DIAGRAM_D4} />
                                </div>
                            </div>
                            <p className="diagram-note">
                                テスターの質問がバックエンド経由でベクトルDBの検索へ渡り、取得した関連チャンクとともにLLMへ送られ、後処理を経て回答が返る一連の流れ。
                            </p>
                        </div>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>実行時の2ステップ
                                </p>
                                <div className="table-wrap">
                                    <table className="kv-table">
                                        <tbody>
                                            <tr>
                                                <td style={{ whiteSpace: 'nowrap', fontWeight: 700 }}>
                                                    1. 検索（Retrieval）
                                                </td>
                                                <td>
                                                    ユーザーのクエリをエンコードし、以前に作成したベクトルデータベースから関連情報を検索する。検索は通常、プロンプトの埋め込みとチャンクの埋め込みの<strong>意味的類似度</strong>に基づく
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ whiteSpace: 'nowrap', fontWeight: 700 }}>
                                                    2. 生成（Generation）
                                                </td>
                                                <td>
                                                    取得した情報をLLMに渡し、LLMが既存の知識と新たに得たデータを組み合わせて応答を生成する
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h3>3.4 「関連性のある応答（relevant response）」とは</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    関連性のある応答とは、検索プロセスで収集された<strong>関連性が高く、正確で、文脈に適した情報に深く根ざしたLLMの出力</strong>のことです。モデルの事前学習だけに基づくのではなく、プロンプトに関する正確なデータで補強されているため、信頼性と有用性が高まります。
                                </p>
                            </div>
                        </div>

                        <h3>3.5 キーワード検索とベクトル検索の違い</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>キーワード検索</th>
                                        <th>ベクトル（意味）検索</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>一致の基準</td>
                                        <td>文字列の一致</td>
                                        <td>意味の近さ</td>
                                    </tr>
                                    <tr>
                                        <td>「ログインできない」で検索したとき</td>
                                        <td>「ログインできない」を含む文書のみ</td>
                                        <td>「認証に失敗する」「サインイン不可」なども見つかる</td>
                                    </tr>
                                    <tr>
                                        <td>弱点</td>
                                        <td>言い換えに弱い</td>
                                        <td>型番・略語・エラーコードなど固有名詞の完全一致に弱い場合がある</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout note">
                            <i className="ti ti-note"></i>
                            <div className="callout-body">
                                <p>
                                    <span className="tag note">補足</span>
                                    実務では、キーワード検索とベクトル検索を組み合わせた「ハイブリッド検索」や、検索結果を再評価して並べ替える「リランキング」が使われます（下のベストプラクティス参照）。シラバス本文には登場しないので、暗記は不要です。
                                </p>
                            </div>
                        </div>

                        <h3>3.6 RAGを使ったテスト業務の例</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>テスト活動</th>
                                        <th>RAGで参照させるデータ</th>
                                        <th>得られる効果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テスト分析</td>
                                        <td>最新の要件書、ユーザーストーリー、リリースノート</td>
                                        <td>古い仕様に基づく誤ったテスト条件を防ぐ</td>
                                    </tr>
                                    <tr>
                                        <td>テスト設計</td>
                                        <td>既存のテストケース、テスト設計標準</td>
                                        <td>重複を避け、組織のテストケース様式に合わせる</td>
                                    </tr>
                                    <tr>
                                        <td>欠陥分析</td>
                                        <td>過去の欠陥データベース、障害報告</td>
                                        <td>類似欠陥の再発パターンを見つける</td>
                                    </tr>
                                    <tr>
                                        <td>カバレッジ評価</td>
                                        <td>要件とテストケースの対応表</td>
                                        <td>抜け漏れの検出</td>
                                    </tr>
                                    <tr>
                                        <td>APIテスト</td>
                                        <td>APIドキュメント、OpenAPI仕様</td>
                                        <td>仕様変更に追随したテスト生成</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>3.7 RAGとファインチューニングの違い（比較）</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>RAG</th>
                                        <th>ファインチューニング（4.2.1）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>何を変えるか</td>
                                        <td>モデルは変えず、渡す情報を変える</td>
                                        <td>モデルの重み（パラメータ）を追加学習で変える</td>
                                    </tr>
                                    <tr>
                                        <td>知識の更新</td>
                                        <td>文書を更新・再インデックスすれば即反映</td>
                                        <td>再学習が必要で、時間とコストがかかる</td>
                                    </tr>
                                    <tr>
                                        <td>主な得意分野</td>
                                        <td>最新かつ自社固有の事実知識への根拠づけ</td>
                                        <td>用語、出力形式、推論の型、口調の定着</td>
                                    </tr>
                                    <tr>
                                        <td>根拠の追跡</td>
                                        <td>取得したチャンクを提示でき、出典を示しやすい</td>
                                        <td>学習済み知識のため、根拠の追跡が難しい</td>
                                    </tr>
                                    <tr>
                                        <td>初期コスト</td>
                                        <td>比較的低い（インデックス基盤が必要）</td>
                                        <td>高い（学習データ準備・GPUなど）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            第3章のまとめとして、シラバスは「RAGとファインチューニングはLLMの結果を改善する<strong>補完的な</strong>技術」と位置づけています。どちらか一方を選ぶのではなく、組み合わせることも多いです。
                        </p>

                        <h3>3.8 RAGのリスクと限界</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>課題</th>
                                        <th>内容</th>
                                        <th>対策の方向性</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>検索の質に依存</td>
                                        <td>関連しないチャンクが取得されると、誤った根拠で回答してしまう</td>
                                        <td>チャンク設計の見直し、検索方式の改善、評価データセットでの検証</td>
                                    </tr>
                                    <tr>
                                        <td>古い・矛盾した文書</td>
                                        <td>インデックスに古い文書が残ると、古い仕様で回答する</td>
                                        <td>文書の更新フローと再インデックスの自動化</td>
                                    </tr>
                                    <tr>
                                        <td>機密情報の混入</td>
                                        <td>インデックスに個人情報や機密情報が入ると漏えいリスク</td>
                                        <td>アクセス制御、匿名化・マスキング（第3章3.2.3）</td>
                                    </tr>
                                    <tr>
                                        <td>ハルシネーションは残る</td>
                                        <td>RAGで「減る」が「ゼロにはならない」</td>
                                        <td>人間によるレビュー、自動検証（第3章3.1.3）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout gold">
                            <i className="ti ti-bulb"></i>
                            <div className="callout-body">
                                <p className="callout-title">💡 ベストプラクティス（RAG）</p>
                                <ol>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        文書は256〜512トークン程度のチャンクに分割し、クリーニングしてから埋め込む。クエリにも、チャンクと同じクリーニング処理を適用する（<span className="tag note">補足</span>Microsoftのアーキテクチャガイドが同様の注意を示している）。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        チャンクサイズは文書の構造（見出し・表・コード）に合わせて調整する。チャンクごとに出典メタデータ（文書名、版、更新日、ID）を保存して、回答に出典を付けられるようにする。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        ベクトル検索のみに頼らず、キーワード検索との「ハイブリッド検索」と、検索後のリランキングを検討する。型番・エラーコード・略語の検索精度が上がる。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        検索（Retrieval）と生成（Generation）を分けて評価する。検索で正しい文書が取れているか、生成が取得内容に忠実か、をそれぞれ確認する。まず実際のテスト質問で小さな評価セットを作ってから、プロンプトを調整する。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        失敗ケースを意図的にテストする（古い文書、重複チャンク、矛盾する資料、インデックスに答えがない質問）。「答えがない」場合に、推測せず「わからない」と返せるかを見る。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠（第3章）</span>
                                        機密情報は最小化し、匿名化・アクセス制御を行う。RAGの検索対象に入れてよいデータの範囲を、公開前に決める。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        文書の更新に合わせて再インデックスする仕組み（CI/CD連携など）を用意する。RAGの利点である「最新性」は運用しないと失われる。
                                    </li>
                                </ol>
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
                                        href="https://learn.microsoft.com/en-us/Azure/architecture/ai-ml/guide/rag/rag-information-retrieval"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Microsoft Learn：RAGの情報検索
                                    </a>
                                    、
                                    <a
                                        href="https://arxiv.org/abs/2005.11401"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lewisら「Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks」
                                    </a>
                                </div>
                            </div>
                        </div>

                        <h3>3.9 ハンズオン目標 HO-4.1.2（H1）：RAGを試す</h3>
                        <p>
                            <span className="tag syllabus">シラバス</span>
                            与えられたテストタスクについてRAGシステムに文書を取り込み、複雑な情報に基づく回答の正確さがどう変わるかを観察します。<strong>RAGあり・なしの出力を比較</strong>し、テストタスクの種類ごとの強みと限界を把握します。ハンズオンは試験範囲外ですが、次の手順で自習できます。
                        </p>
                        <ol className="step-list">
                            <li>
                                <p className="step-title">要件書と固有ルールの質問を用意する</p>
                                <p>小さな要件書（数ページ）と、そこにしか書かれていない固有ルールを含む質問を3〜5個用意する</p>
                            </li>
                            <li>
                                <p className="step-title">RAGなしで質問する</p>
                                <p>RAGなし（LLM単体）で質問し、回答を記録する</p>
                            </li>
                            <li>
                                <p className="step-title">RAGありで同じ質問をする</p>
                                <p>要件書をRAGに取り込んで同じ質問をし、回答と「取得されたチャンク」を記録する</p>
                            </li>
                            <li>
                                <p className="step-title">比較する</p>
                                <p>正確さ・出典の妥当性・「わからない」と答えるべき質問での挙動を比較する</p>
                            </li>
                            <li>
                                <p className="step-title">切り分ける</p>
                                <p>間違えた質問について、取得チャンクが悪かったのか、生成が悪かったのかを切り分ける</p>
                            </li>
                        </ol>

                        <h4>3.10 この節の試験ポイント</h4>
                        <div className="critique-card">
                            <ul>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        RAGの2ステップ（検索→生成）と、事前準備（チャンク分割→埋め込み→ベクトルDB保存）の流れ。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        チャンクサイズの目安（256〜512トークン）。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        「意味的類似度で検索する」こと。キーワード一致ではない。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        RAGの利点は、<strong>最新の社内データに基づく根拠づけ</strong>と、それによる精度・関連性の向上。
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* ========== Section 4: 4.1.3 LLM搭載エージェント ========== */}
                    <section className="section" id="s4">
                        <div className="eyebrow">
                            <i className="ti ti-robot"></i>4. 4.1.3 テストプロセス自動化におけるLLM搭載エージェントの役割　<span className="tag k2">K2</span>
                        </div>
                        <h2>4.1.3　テストプロセス自動化におけるLLM搭載エージェントの役割</h2>

                        <h3>4.1 LLM搭載エージェントとは</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    LLM搭載エージェントとは、LLMを中核にした、<strong>定義されたタスクの半自律的または自律的な処理</strong>を行う専門的なGenAIアプリケーションです。自然言語の理解・生成にLLMを使い、さらに指示の処理、コンテキストの取得、知的な行動を行えます。
                                </p>
                            </div>
                        </div>
                        <p>
                            従来のチャットボットが「質問に答える」だけなのに対し、エージェントは「<strong>ツール（あらかじめ定義された関数）を呼び出して外部システムに働きかける</strong>」ことができます。ここが最大の違いです。
                        </p>

                        <h3>4.2 チャットボット・RAG・エージェントの違い</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>チャットボット</th>
                                        <th>RAG搭載システム</th>
                                        <th>LLM搭載エージェント</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>主な動作</td>
                                        <td>質問に応答</td>
                                        <td>検索して根拠づけた応答を生成</td>
                                        <td>推論し、ツールを使って行動する</td>
                                    </tr>
                                    <tr>
                                        <td>外部システムへの操作</td>
                                        <td>できない</td>
                                        <td>読み取りのみ（検索）</td>
                                        <td>
                                            実行可能（テスト管理ツールAPI、CI/CD、ファイル操作など）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>複数ステップの作業</td>
                                        <td>人が指示を繰り返す</td>
                                        <td>基本は1回の検索と生成</td>
                                        <td>計画して連続的に実行できる</td>
                                    </tr>
                                    <tr>
                                        <td>人間の関与</td>
                                        <td>毎回</td>
                                        <td>毎回</td>
                                        <td>自律度に応じて変わる</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <span className="tag syllabus">シラバス（v1.1教材）</span>
                            エージェントは、LLMの能力（言語理解・推論・生成）、コンテキスト取得（RAG、データベース、APIから）、機能実行（ツール呼び出し）の3つを組み合わせたものです。
                        </p>

                        <h3>4.3 エージェントの動作イメージ</h3>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図5：LLM搭載エージェントの動作イメージ
                            </p>
                            <div className="diagram-wrap">
                                <div className="mermaid-container">
                                    <Mermaid chart={DIAGRAM_D5} />
                                </div>
                            </div>
                        </div>

                        <h3>4.4 エージェントが呼び出せる「ツール」の例</h3>
                        <p>
                            <span className="tag syllabus">シラバス（v1.1教材）</span>
                            エージェントは、次のような事前定義済みツールを呼び出せます。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ツールの種類</th>
                                        <th>できること（例）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テスト管理システムのAPI</td>
                                        <td>
                                            テストケースの作成、テスト結果の更新、レポートの更新
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ファイルの読み書き</td>
                                        <td>要件書やログの読み込み、生成物の保存</td>
                                    </tr>
                                    <tr>
                                        <td>コード実行ツール</td>
                                        <td>スクリプトの実行、簡易な検証</td>
                                    </tr>
                                    <tr>
                                        <td>CI/CDパイプラインのコマンド</td>
                                        <td>ビルド・テストの実行、結果の取得</td>
                                    </tr>
                                    <tr>
                                        <td>テスト自動化フレームワーク</td>
                                        <td>自動テストの実行</td>
                                    </tr>
                                    <tr>
                                        <td>データ検索関数</td>
                                        <td>RAG、データベース、APIによる情報取得</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>4.5 自律度の違い</h3>
                        <p>
                            <span className="tag syllabus">シラバス</span>
                            エージェントの自律度は用途とリスクに応じて異なります。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>種類</th>
                                        <th>特徴</th>
                                        <th>向いているテスト作業</th>
                                        <th>リスク</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>自律型エージェント</td>
                                        <td>
                                            人間の介入を最小限にして独立に動く。あらかじめ定義されたルール、強化学習、適応的なフィードバックループなどを使う
                                        </td>
                                        <td>
                                            テスト結果の継続的な監視、テスト実行のトリガー、テストスイートの保守など、繰り返しの多い作業
                                        </td>
                                        <td>誤りが人間に気付かれないまま連鎖・拡大する</td>
                                    </tr>
                                    <tr>
                                        <td>半自律型エージェント</td>
                                        <td>
                                            定期的な人間の監督（チェックポイント）のもとで動き、出力がユーザー定義の目標に合うことを確認する
                                        </td>
                                        <td>
                                            重要度の高いタスク、誤りの影響が大きい作業（テスト自動化コードの生成、欠陥分析の結論など）
                                        </td>
                                        <td>人間の確認負荷が発生する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>4.6 マルチエージェントとオーケストレーション</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    <strong>マルチエージェントアーキテクチャ</strong>は、専門的な役割を持つ複数のエージェントが通信・調整して複雑な問題を解決する協調システムです。この協調のことを<strong>オーケストレーション</strong>と呼びます。
                                </p>
                            </div>
                        </div>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図6：マルチエージェントアーキテクチャとオーケストレーション
                            </p>
                            <div className="diagram-wrap">
                                <div className="mermaid-container">
                                    <Mermaid chart={DIAGRAM_D6} />
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>単一エージェント</th>
                                        <th>マルチエージェント</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1つのエージェントに全役割を持たせる</td>
                                        <td>役割ごとに専門化したエージェントが情報を渡し合う</td>
                                    </tr>
                                    <tr>
                                        <td>構成がシンプル</td>
                                        <td>設計・監視・デバッグが複雑になる</td>
                                    </tr>
                                    <tr>
                                        <td>大きなタスクで文脈が膨らみ精度が落ちやすい</td>
                                        <td>
                                            役割ごとに文脈を絞れるので、効率と信頼性が上がる場合がある
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>4.7 エージェントが担えるテスト作業</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>テスト作業</th>
                                        <th>エージェントの動き</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>要件分析</td>
                                        <td>要件のギャップを検出し、質問を生成する</td>
                                    </tr>
                                    <tr>
                                        <td>テスト設計</td>
                                        <td>テスト条件・テストケースを生成する</td>
                                    </tr>
                                    <tr>
                                        <td>テスト自動化</td>
                                        <td>自動化スクリプトを作成・更新する</td>
                                    </tr>
                                    <tr>
                                        <td>回帰テスト</td>
                                        <td>回帰テストを実行し、結果を集める</td>
                                    </tr>
                                    <tr>
                                        <td>ログ分析</td>
                                        <td>ログやエラーメッセージを評価する</td>
                                    </tr>
                                    <tr>
                                        <td>レポート</td>
                                        <td>構造化されたレポートを作成する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            <span className="tag syllabus">シラバス（v1.1教材）</span>
                            これらにより、テスト自動化は「スクリプトベースの実行」から「<strong>目標駆動型のエージェントベース自動化</strong>」に移行していきます。
                        </p>

                        <h3>4.8 エージェントのリスクと対策</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    エージェントもLLMと同じ問題（ハルシネーション、推論エラー、バイアス、非決定的な挙動）を抱えます。誤った・誤解を招く結果を出し、自動化されたテストプロセスの信頼性を損なう恐れがあります。
                                </p>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>リスク</th>
                                        <th>テストでの具体例</th>
                                        <th>対策（シラバス記載）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ハルシネーション</td>
                                        <td>存在しない受け入れ基準を検証するテストを作る</td>
                                        <td>
                                            自動検証手順（構文チェッカー、テストランナー、一貫性チェック）で出力を検証する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>推論エラー</td>
                                        <td>リスクを誤って計算し、優先度を誤る</td>
                                        <td>
                                            高リスク・安全性が重要なタスクでは<strong>半自律型エージェント</strong>を使い、人間が監督する
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>バイアス</td>
                                        <td>
                                            特定の種類のテストばかり生成し、非機能テストが不足する
                                        </td>
                                        <td>出力のレビュー、複数モデルでの比較</td>
                                    </tr>
                                    <tr>
                                        <td>非決定的な挙動</td>
                                        <td>同じ入力でも実行ごとに結果が変わる</td>
                                        <td>自動検証、温度設定の調整（第3章3.1.4）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout gold">
                            <i className="ti ti-bulb"></i>
                            <div className="callout-body">
                                <p className="callout-title">💡 ベストプラクティス（エージェント）</p>
                                <ol>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        重要・高リスクなタスクは半自律型にし、人間のチェックポイントを設ける。低リスクで繰り返し多い作業から自律化を始める。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        エージェントの出力は、構文チェック・テスト実行・一貫性チェックなどで<strong>自動検証</strong>する。「エージェントが正しいと言ったから正しい」としない。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        Anthropicの解説では、まず最も単純な解決策を探し、必要なときだけ複雑さを増すことが推奨されている。固定手順の「ワークフロー」で足りるタスクにエージェントを使うと、遅延・コスト・誤りの連鎖が増える。手順が予測できるなら、ワークフロー（あらかじめ決めたコード経路でLLMとツールを組み合わせる方式）を優先する。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        ツールは最小権限にする。読み取り専用で足りる作業に、書き込み・削除・本番環境の権限を与えない。OWASPは「過剰なエージェンシー（Excessive Agency）」をLLMアプリの主要リスクとして挙げている。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        外部から取り込む文書（Web、チケット、ログ）に、エージェントへの命令が混入するリスク（プロンプトインジェクション）を想定する。外部コンテンツは信頼できないデータとして扱い、破壊的な操作の前に確認を挟む。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        サンドボックス環境で先に試し、停止条件（最大ステップ数、最大コスト、タイムアウト）を決めてから本番に導入する。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        エージェントの行動ログ（どのツールをどの引数で呼んだか）を記録し、後から監査・再現できるようにする。
                                    </li>
                                </ol>
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
                                        href="https://www.anthropic.com/engineering/building-effective-agents"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Anthropic「Building effective agents」
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

                        <h3>4.9 ハンズオン目標 HO-4.1.3（H0）：エージェントの実演を観察する</h3>
                        <p>
                            <span className="tag syllabus">シラバス</span>
                            反復的なテストタスクをLLM搭載エージェントが実行するデモを観察します。エージェントに渡される入力データ、その挙動、行動の結果を見ることで、エージェントベースのソリューションをテストプロセスに統合する際の論点を理解します。観察時は次の点に注目すると理解が深まります。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観察ポイント</th>
                                        <th>見るべき内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>入力</td>
                                        <td>エージェントに渡された目標・コンテキスト・権限</td>
                                    </tr>
                                    <tr>
                                        <td>判断</td>
                                        <td>どのツールを、なぜ選んだか</td>
                                    </tr>
                                    <tr>
                                        <td>検証</td>
                                        <td>出力をどう確認しているか（人間か自動か）</td>
                                    </tr>
                                    <tr>
                                        <td>失敗時</td>
                                        <td>間違えたとき、誰がどう気付くか</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>4.10 この節の試験ポイント</h4>
                        <div className="critique-card">
                            <ul>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        エージェントとチャットボットの違いは、<strong>ツール（関数）を呼び出して行動できること</strong>。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        自律型と半自律型の違い、および高リスクなタスクには半自律型が向く理由。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        マルチエージェントとオーケストレーションの定義。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        エージェントにもLLMと同じリスク（ハルシネーション・推論エラー・バイアス）があり、自動検証や人間の監督で緩和する。
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
