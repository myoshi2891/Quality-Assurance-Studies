import React from 'react';
import type { Metadata } from 'next';
import './istqb-ct-genai-chapter4-llm-powered-solutions.css';
import NavBar from './NavBar';
import ChecklistCard from './ChecklistCard';
import Mermaid from '../../components/Mermaid';
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
} from './diagrams';

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
                                <p>
                                    実行時の処理は次の2ステップです。
                                </p>
                                <ol>
                                    <li>
                                        <strong>検索（Retrieval）：</strong>ユーザーのクエリをエンコードし、以前に作成したベクトルデータベースから関連情報を検索する。検索は通常、プロンプトの埋め込みとチャンクの埋め込みの<strong>意味的類似度</strong>に基づく
                                    </li>
                                    <li>
                                        <strong>生成（Generation）：</strong>取得した情報をLLMに渡し、LLMが既存の知識と新たに得たデータを組み合わせて応答を生成する
                                    </li>
                                </ol>
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

                    <section className="section" id="s5">
                        <div className="eyebrow">
                            <i className="ti ti-adjustments"></i>5. 4.2.1
                            テストタスクのためのLLMファインチューニング　<span className="tag k2">K2</span>
                        </div>
                        <h2>4.2.1　テストタスクのためのLLMファインチューニング</h2>

                        <h3>5.1 ファインチューニングとは</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    ファインチューニングは、<strong>事前学習済みの言語モデル（LLMまたはSLM）を、特定のタスクやドメインに合わせて適応させる</strong>ことです。ゼロから学習するのではなく、対象を絞ったデータセットで追加学習を行い、ドメイン固有の知識やニュアンスを学ばせます。
                                </p>
                            </div>
                        </div>
                        <p>
                            たとえるなら、一般的な教育を終えた新入社員（事前学習済みモデル）に、自社のテストの進め方や書式を教える社内研修（ファインチューニング）を行うイメージです。
                        </p>

                        <h3>5.2 LLMとSLM</h3>
                        <p><span className="tag syllabus">シラバス（第1章1.1.2）</span></p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>種類</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LLM（Large Language Model）</td>
                                        <td>
                                            大規模データで学習した大規模モデル。幅広い推論能力を持つ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>SLM（Small Language Model）</td>
                                        <td>
                                            パラメータ数の少ないコンパクトなモデル。軽量で、特定用途に絞ったGenAIソリューション向け
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>LLMのファインチューニング</th>
                                        <th>SLMのファインチューニング</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>得意なこと</td>
                                        <td>広い推論・言語カバレッジが必要なタスク</td>
                                        <td>狭く明確に定義されたタスク</td>
                                    </tr>
                                    <tr>
                                        <td>計算資源</td>
                                        <td>高性能GPUやAIアクセラレータ、大容量ストレージが必要</td>
                                        <td>少なくて済む（速度・コスト面で有利）</td>
                                    </tr>
                                    <tr>
                                        <td>運用コスト</td>
                                        <td>高い</td>
                                        <td>低い</td>
                                    </tr>
                                    <tr>
                                        <td>適した場面</td>
                                        <td>複雑な推論・多目的</td>
                                        <td>速度、コスト効率、ドメイン特化が重要な運用環境</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>5.3 どんなときにファインチューニングが有効か</h3>
                        <p>
                            <span className="tag syllabus">シラバス（v1.1教材）</span>
                            汎用LLMが次のような状況のときに特に有効です。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>状況</th>
                                        <th>ファインチューニングで得られる効果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>組織固有の語彙を理解しない</td>
                                        <td>社内テスト用語や略語を使えるようになる</td>
                                    </tr>
                                    <tr>
                                        <td>出力形式が期待と違う</td>
                                        <td>社内のテストケーステンプレートに従う</td>
                                    </tr>
                                    <tr>
                                        <td>ドメイン特有の推論パターンが不足している</td>
                                        <td>金融・医療・自動車などのドメインルールに沿う</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>5.4 テストでの具体例</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>
                                    ファインチューニングにより、LLMまたはSLMが、組織のコンテキストに特有の出力形式で、<strong>ユーザーストーリーからテストケースを生成</strong>できるようになります。組織の実際のユーザーストーリーと、それに対応する<strong>承認済みのテストケースのペア</strong>で学習させることで、モデルは組織固有のテストプロセスと用語に整合します。
                                </p>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>入力（学習データの左側）</th>
                                        <th>出力（学習データの右側）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>実際のユーザーストーリー</td>
                                        <td>承認済みのテストケース（社内書式）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>5.5 ファインチューニングの手順（一般的な流れ）</h3>
                        <p>
                            <span className="tag note">補足</span>
                            シラバスは手順の詳細を規定していませんが、実務では次の流れが一般的です（HO-4.2.1のデモ観察の理解にも役立ちます）。
                        </p>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図7：ファインチューニングの一般的な手順
                            </p>
                            <div className="diagram-wrap">
                                <Mermaid chart={DIAGRAM_D7} id="d7" />
                            </div>
                        </div>

                        <h3>5.6 ファインチューニングの課題（試験頻出）</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス</span>
                                </p>
                                <p>ファインチューニングには次の課題があります。</p>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>課題</th>
                                        <th>内容</th>
                                        <th>対策</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>バイアスや不正確な結果</td>
                                        <td>
                                            学習データの質がそのままモデルの質になる（garbage-in,
                                            garbage-out）。誤り・古い慣行・偏りがあると、モデルがそれを再現する
                                        </td>
                                        <td>高品質でタスクに特化した学習データセットを使う</td>
                                    </tr>
                                    <tr>
                                        <td>過学習（overfitting）</td>
                                        <td>
                                            モデルが学習データに特化しすぎ、新しい未知のシナリオでうまく動作しなくなる
                                        </td>
                                        <td>汎化性能を評価し、学習データの多様性を確保する</td>
                                    </tr>
                                    <tr>
                                        <td>推論の不透明性</td>
                                        <td>
                                            LLMはブラックボックス的で、なぜそのテストケースを生成したかを説明しにくい。デバッグ、規制環境での検証、ステークホルダーの信頼獲得が難しくなる
                                        </td>
                                        <td>出力のレビュー、評価指標の継続的な確認、記録と追跡</td>
                                    </tr>
                                    <tr>
                                        <td>計算資源の要求（LLMの場合）</td>
                                        <td>
                                            高性能GPUやAIアクセラレータ、大量のストレージ、実験管理、多額の費用が必要
                                        </td>
                                        <td>
                                            運用環境では、ファインチューニングしたSLMを使う選択肢を検討する
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout note">
                            <i className="ti ti-note"></i>
                            <div className="callout-body">
                                <p>
                                    補足：v1.0のシラバスPDFは「Mitigating overfitting」の途中までしか取得できなかったため、課題3と4の記述はv1.1準拠のExactpro教材に基づいています。受験前に公式PDFで表現を確認してください。
                                </p>
                            </div>
                        </div>

                        <h3>
                            5.7 ファインチューニングと「プロンプトエンジニアリング」「RAG」の使い分け
                        </h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>やりたいこと</th>
                                        <th>第一候補</th>
                                        <th>理由</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>出力形式を指定したい（まず試す）</td>
                                        <td>プロンプト（ロール・制約・出力形式、few-shot）</td>
                                        <td>学習不要で最も安価・高速</td>
                                    </tr>
                                    <tr>
                                        <td>最新の社内文書に基づいて答えさせたい</td>
                                        <td>RAG</td>
                                        <td>知識の更新が容易で出典を示せる</td>
                                    </tr>
                                    <tr>
                                        <td>社内独自の用語・書式・推論の型を定着させたい</td>
                                        <td>ファインチューニング</td>
                                        <td>プロンプトに毎回書かずに済み、出力が安定する</td>
                                    </tr>
                                    <tr>
                                        <td>特定の狭いタスクを低コスト・高速に大量処理したい</td>
                                        <td>ファインチューニングしたSLM</td>
                                        <td>運用コストが低い</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout gold">
                            <i className="ti ti-bulb"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    💡 ベストプラクティス（ファインチューニング）
                                </p>
                                <ol>
                                    <li>
                                        <span className="tag note">補足</span>
                                        まずプロンプトエンジニアリングとRAGで目的が達成できないかを試す。それで足りない場合にのみ、ファインチューニングを検討する（コストと運用負荷が大きく上がるため）。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        学習データは、内容を精査した<strong>高品質で承認済みのペア</strong>だけを使う。古い書式・誤ったテストケース・偏った例を混入させない。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠（第3章）</span>
                                        学習データから個人情報・機密情報を除去（匿名化・仮名化）し、データ最小化を守る。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        過学習を防ぐため、学習に使っていない未知のデータ（別のアプリ、別の要件スタイル）で評価する。評価指標は第2章2.3.1の指標（正確性、適合率、再現率、関連性、多様性、実行成功率など）が使える。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        運用環境では、狭いタスクならLLMではなく<strong>ファインチューニングしたSLM</strong>を優先して検討する（コスト・速度・計算資源）。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        パラメータ効率の良い手法（たとえばLoRA）を使うと、全パラメータを更新するより計算資源を抑えられる（詳細は試験範囲外）。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        学習データの版、学習設定、評価結果を実験管理として記録する。再現性と規制環境での説明責任（不透明性への対処）に役立つ。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        新しいモデルが出たときにやり直せるよう、学習データ資産とパイプラインを維持する（LLMOpsとつなげる）。
                                    </li>
                                </ol>
                                <div className="callout-source">
                                    出典：<a
                                        href="https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CT-GenAI Syllabus v1.0（PDF）
                                    </a>
                                    、<a
                                        href="https://speakerdeck.com/exactpro/chapter-4-llm-powered-testformat-reading-materials-self-study-or-guided-reading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Exactpro Chapter 4 Reading Materials（v1.1）
                                    </a>
                                    、<a
                                        href="https://arxiv.org/abs/2106.09685"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Huら「LoRA: Low-Rank Adaptation of Large Language Models」
                                    </a>
                                </div>
                            </div>
                        </div>

                        <h3>
                            5.8 ハンズオン目標 HO-4.2.1（H0）：ファインチューニングの実演を観察する
                        </h3>
                        <p>
                            <span className="tag syllabus">シラバス</span>
                            与えられたテストタスクと言語モデルについて、ファインチューニングの実例を観察します。観察の際は「どんな学習データを使うか」「学習前後で出力がどう変わるか」「未知の入力でどうなるか」に注目してください。
                        </p>

                        <h4>5.9 この節の試験ポイント</h4>
                        <div className="critique-card">
                            <ul>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        ファインチューニングの定義（事前学習済みモデルを対象データで追加学習）。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        LLMとSLMの使い分け（広い推論はLLM、速度・コスト・ドメイン特化はSLM）。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        4つの課題（データ品質とバイアス、過学習、不透明性、計算資源）。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        テストでの例（ユーザーストーリーとテストケースのペアで学習）。
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="section" id="s6">
                        <div className="eyebrow">
                            <i className="ti ti-settings-cog"></i>6. 4.2.2
                            LLMOps：テスト用LLMのデプロイと運用管理　<span className="tag k2">K2</span>
                        </div>
                        <h2>4.2.2　LLMOps：テスト用LLMのデプロイと運用管理</h2>

                        <h3>6.1 LLMOpsとは</h3>
                        <div className="callout">
                            <i className="ti ti-quote"></i>
                            <div className="callout-body">
                                <p className="callout-title">
                                    <span className="tag syllabus">シラバス（v1.1教材）</span>
                                </p>
                                <p>
                                    LLMOps（Large Language Model
                                    Operations）とは、<strong>本番環境でLLMの開発・デプロイ・監視・保守を管理するための、構造化された手法・ツール・プロセスの集まり</strong>です。テストにおいては、GenAIソリューションが次の状態を保てるようにします。
                                </p>
                            </div>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>目標</th>
                                        <th>意味</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>運用上の安定</td>
                                        <td>止まらず、性能が劣化しない</td>
                                    </tr>
                                    <tr>
                                        <td>セキュアでコンプライアンス準拠</td>
                                        <td>データ保護と規制の遵守</td>
                                    </tr>
                                    <tr>
                                        <td>コスト管理</td>
                                        <td>利用量とコストを監視・制御できる</td>
                                    </tr>
                                    <tr>
                                        <td>継続的な監視</td>
                                        <td>品質とリスクを見続ける</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            LLMOpsがないと、GenAIの利用は実験的で信頼性の低い状態にとどまり、企業レベルのテストプロセスに統合するには不適切になります。
                        </p>
                        <div className="callout note">
                            <i className="ti ti-note"></i>
                            <div className="callout-body">
                                <p>
                                    <span className="tag note">補足</span>
                                    LLMOpsは、MLOps（機械学習の運用）やDevOpsの考え方をLLM特有の課題（プロンプト管理、幻覚の監視、トークンコストなど）に合わせたものと説明されるのが一般的です。
                                </p>
                            </div>
                        </div>

                        <h3>6.2 LLMOpsのライフサイクル</h3>
                        <p>
                            <span className="tag note">補足</span>
                            一般的なLLMOpsのサイクルを、テストの文脈で整理した図です。シラバスの記述は「開発・デプロイ・監視・保守」ですが、下の図は理解のための概念図です。
                        </p>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図8：LLMOpsのライフサイクル
                            </p>
                            <div className="diagram-wrap">
                                <Mermaid chart={DIAGRAM_D8} id="d8" />
                            </div>
                        </div>

                        <h3>6.3 GenAIをテストプロセスに導入する3つのアプローチ</h3>
                        <p>
                            <span className="tag syllabus">シラバス（v1.1教材）</span>
                            組織は、次の3つの実装アプローチでテストプロセスにGenAIを導入できます。アプローチごとに、LLMOps上の判断（ガバナンス、リスク、コスト、技術管理）が変わります。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>アプローチ</th>
                                        <th>主なLLMOps上の考慮点</th>
                                        <th>典型的な用途</th>
                                        <th>制御度／運用責任</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>AIチャットボットの利用</td>
                                        <td>
                                            データプライバシーとセキュリティ、コスト最適化。LLM-as-a-Service（サードパーティがホスト）か、オープンソースLLMの社内デプロイかを選ぶ。ベンダーの保証、または社内のセキュリティ能力を厳格に評価する
                                        </td>
                                        <td>
                                            要件分析、テストアイデア生成、探索的テストの支援などアドホックな支援
                                        </td>
                                        <td>低／小さい</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>GenAI機能を内蔵したテストツールの利用</td>
                                        <td>
                                            チャットボットと同様の考慮点（プライバシー、セキュリティ、インフラの信頼性、運用コスト）に加え、ベンダーのデータ保護保証、AI機能の性能と可用性、既存のテストプロセス・ツールチェーンとの統合品質を評価する。費用対効果分析とリスク評価も必要
                                        </td>
                                        <td>
                                            既存のテストワークフローの拡張（日々のテスト実行など）
                                        </td>
                                        <td>中／中</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>GenAIベースのテストツールの社内開発</td>
                                        <td>
                                            データプライバシー・セキュリティの完全な制御、計算資源・データストレージ・モデル保守・スタッフのトレーニングなどAIリソース利用の計画、GenAIコンポーネントを検証・監視・保守する正式なプロセスの確立。MLインフラ、セキュアなモデルデプロイ、プロンプトエンジニアリングとファインチューニング、LLM搭載テストインフラ設計の高い専門性が必要
                                        </td>
                                        <td>
                                            機密性要件が高い、または専門的なテストニーズのある大規模組織
                                        </td>
                                        <td>高／大きい</td>
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
                                    これら3つは<strong>排他的ではありません</strong>。たとえば探索的分析にはチャットボット、日々のテスト実行には市販のGenAI対応テストツール、機密性の高い・ビジネスクリティカルなシステムには社内開発ツール、という組み合わせも可能です。さらに、どのアプローチもRAGや、LLM／SLMのファインチューニングといった技術を併用して、精度・適応性・関連性を高められます。
                                </p>
                            </div>
                        </div>

                        <h3>6.4 アプローチ選択の考え方</h3>
                        <p>
                            <span className="tag note">補足</span>
                            下のフローは、判断の順序を整理するための例です。実際には組織のポリシーや規制に従ってください。
                        </p>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図9：GenAI導入アプローチの選択フロー
                            </p>
                            <div className="diagram-wrap">
                                <Mermaid chart={DIAGRAM_D9} id="d9" />
                            </div>
                        </div>

                        <h3>6.5 データの機密度に応じた環境の選択</h3>
                        <p>
                            <span className="tag syllabus">シラバス（第3章3.2.3）</span>
                            機密性のレベルに応じて、次のような安全な運用環境を選べます。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>選択肢</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LLMプロバイダーの商用セキュア提供</td>
                                        <td>ベンダーの契約・保証に依存する</td>
                                    </tr>
                                    <tr>
                                        <td>セキュアなクラウドでのLLM運用</td>
                                        <td>自組織のクラウド環境内でモデルを動かす</td>
                                    </tr>
                                    <tr>
                                        <td>組織のインフラへのLLMインストール</td>
                                        <td>最も制御度が高いが、運用責任も最大</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>6.6 LLMOpsで監視・管理すべき項目</h3>
                        <p>
                            <span className="tag note">補足</span>
                            シラバスはLLMOpsの役割を包括的に述べていますが、具体的な運用項目は次のように整理できます。
                        </p>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>領域</th>
                                        <th>監視・管理する内容</th>
                                        <th>テストでの例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>品質</td>
                                        <td>
                                            出力の正確性、ハルシネーション率、実行成功率（第2章の指標）
                                        </td>
                                        <td>生成テストスクリプトの実行成功率を毎週計測</td>
                                    </tr>
                                    <tr>
                                        <td>コスト</td>
                                        <td>トークン使用量、API費用、GPU費用</td>
                                        <td>プロジェクトごとの利用量を集計し上限を設定</td>
                                    </tr>
                                    <tr>
                                        <td>セキュリティ</td>
                                        <td>
                                            アクセス制御、個人情報の混入、プロンプトインジェクション
                                        </td>
                                        <td>入力のサニタイズと出力のフィルタリングの確認</td>
                                    </tr>
                                    <tr>
                                        <td>性能</td>
                                        <td>応答時間、可用性</td>
                                        <td>CI/CDでの待ち時間の悪化を検知</td>
                                    </tr>
                                    <tr>
                                        <td>変更管理</td>
                                        <td>
                                            プロンプト、モデル、RAGの文書、ファインチューニング版のバージョン
                                        </td>
                                        <td>モデル更新前後で回帰評価セットを実行</td>
                                    </tr>
                                    <tr>
                                        <td>ガバナンス</td>
                                        <td>
                                            利用ポリシー、規制・標準への準拠（ISO/IEC 42001、EU AI
                                            Act、NIST AI RMFなど）
                                        </td>
                                        <td>利用ログの保管と監査への対応</td>
                                    </tr>
                                    <tr>
                                        <td>環境</td>
                                        <td>不要なモデル呼び出しの削減（第3章3.3）</td>
                                        <td>小さなモデルで足りるタスクは小型モデルに振り分ける</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout gold">
                            <i className="ti ti-bulb"></i>
                            <div className="callout-body">
                                <p className="callout-title">💡 ベストプラクティス（LLMOps）</p>
                                <ol>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        導入アプローチ（チャットボット／内蔵ツール／社内開発）ごとに、データプライバシー、セキュリティ、コスト、運用責任を評価してから選ぶ。ベンダーのデータ保護保証を必ず確認する。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠</span>
                                        ツール導入前に、費用対効果分析とリスク評価を行い、GenAIが実際の運用価値を生むか確認する。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        プロンプト、システムプロンプト、RAGの文書、モデルのバージョンをコードと同様に版管理し、変更のたびに回帰評価セットで品質を確認する（第2章2.3のA/Bテストや指標を運用に組み込む）。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        品質・コスト・セキュリティのメトリクスを継続的に監視し、閾値を超えたらアラートを出す。ドリフト（入力データや外部環境の変化による性能低下）を見逃さない。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        利用者からのフィードバックを収集して改善に反映する。第2章のプロンプト改善サイクルと接続する。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        モデルの入れ替えを前提に設計する（LLM呼び出しの抽象化層を設ける）。ベンダー依存とモデル更新のリスクを下げる。
                                    </li>
                                    <li>
                                        <span className="tag syllabus">シラバス根拠（第5章）・補足</span>
                                        GenAIを非公式に使う「シャドーAI」を防ぐため、承認された環境と利用ガイドラインを整備する。
                                    </li>
                                    <li>
                                        <span className="tag note">補足</span>
                                        社内開発する場合は、MLインフラ、セキュアなデプロイ、プロンプトエンジニアリング、ファインチューニングの専門人材と、教育計画を確保する。
                                    </li>
                                </ol>
                                <div className="callout-source">
                                    出典：<a
                                        href="https://speakerdeck.com/exactpro/chapter-4-llm-powered-testformat-reading-materials-self-study-or-guided-reading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Exactpro Chapter 4 Reading Materials（v1.1）
                                    </a>
                                    、<a
                                        href="https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CT-GenAI Syllabus v1.0（PDF）
                                    </a>
                                    、<a
                                        href="https://cloud.google.com/discover/what-is-llmops"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google Cloud「What is LLMOps?」
                                    </a>
                                    、<a
                                        href="https://ibm.com/think/topics/llmops"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        IBM「What is LLMOps?」
                                    </a>
                                </div>
                            </div>
                        </div>

                        <h4>6.7 この節の試験ポイント</h4>
                        <div className="critique-card">
                            <ul>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        LLMOpsの定義（本番環境でのLLMのデプロイ・監視・保守・ガバナンス）と目的（安定・セキュア・コスト管理・継続的な品質監視）。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        3つの導入アプローチと、それぞれの主な考慮点の違い。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        3つのアプローチは<strong>排他的ではなく併用できる</strong>こと。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        どのアプローチでもRAGやファインチューニングを併用できること。
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="section" id="s7">
                        <div className="eyebrow">
                            <i className="ti ti-git-branch"></i>7.
                            手法の使い分け（プロンプト・RAG・ファインチューニング・エージェント）
                        </div>
                        <h2>
                            手法の使い分け（プロンプト・RAG・ファインチューニング・エージェント）
                        </h2>

                        <h3>7.1 判断フロー</h3>
                        <p>
                            <span className="tag note">補足</span>
                            試験対策というより、実務で「何を使うか」を判断するための整理です。
                        </p>
                        <div className="diagram-card">
                            <p className="diagram-title">
                                <i className="ti ti-sitemap"></i>図10：手法選択の判断フロー
                            </p>
                            <div className="diagram-wrap">
                                <Mermaid chart={DIAGRAM_D10} id="d10" />
                            </div>
                        </div>

                        <h3>7.2 比較表</h3>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>手法</th>
                                        <th>変えるもの</th>
                                        <th>得意なこと</th>
                                        <th>主なコスト</th>
                                        <th>主なリスク</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>プロンプトエンジニアリング</td>
                                        <td>入力の書き方</td>
                                        <td>形式・役割・例による誘導</td>
                                        <td>低い</td>
                                        <td>非決定性、プロンプトの肥大化</td>
                                    </tr>
                                    <tr>
                                        <td>RAG</td>
                                        <td>渡す文脈</td>
                                        <td>最新・自社固有の知識への根拠づけ</td>
                                        <td>中（検索基盤）</td>
                                        <td>検索品質、機密情報の混入</td>
                                    </tr>
                                    <tr>
                                        <td>ファインチューニング</td>
                                        <td>モデルの重み</td>
                                        <td>用語・形式・推論パターンの定着</td>
                                        <td>高い（特にLLM）</td>
                                        <td>過学習、バイアス、不透明性</td>
                                    </tr>
                                    <tr>
                                        <td>LLM搭載エージェント</td>
                                        <td>行動の自動化</td>
                                        <td>ツールを使う複数ステップの作業</td>
                                        <td>中〜高（設計・監視）</td>
                                        <td>誤りの連鎖、過剰な権限</td>
                                    </tr>
                                    <tr>
                                        <td>LLMOps</td>
                                        <td>運用の仕組み</td>
                                        <td>上記すべての継続的な運用と統制</td>
                                        <td>中〜高（組織的投資）</td>
                                        <td>形骸化、監視の欠如</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="section" id="s8">
                        <div className="eyebrow">
                            <i className="ti ti-book-2"></i>8. 第4章 用語集（キーワード）
                        </div>
                        <h2>第4章　用語集（キーワード）</h2>
                        <div className="glossary-grid">
                            <div className="gloss-item">
                                <div className="gloss-term">テストインフラ（test infrastructure）</div>
                                <div className="gloss-def">
                                    テスト活動を支える環境・ツール・仕組みの総称。ここではLLMを組み込んだもの
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">フロントエンド</div>
                                <div className="gloss-def">利用者が操作するUI</div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">バックエンド</div>
                                <div className="gloss-def">
                                    認証、プロンプト準備、データ検索、LLM連携、後処理などを担う中間層
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">LLM／SLM</div>
                                <div className="gloss-def">大規模言語モデル／小規模言語モデル</div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">埋め込み（embedding）</div>
                                <div className="gloss-def">
                                    文章などを意味を反映した数値ベクトルに変換したもの
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">
                                    ベクトルデータベース（vector database）
                                </div>
                                <div className="gloss-def">
                                    埋め込みを保存し、類似度で検索できるデータベース
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">チャンク</div>
                                <div className="gloss-def">
                                    RAGで文書を分割した小さな断片（目安256〜512トークン）
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">RAG（Retrieval-Augmented Generation）</div>
                                <div className="gloss-def">
                                    検索で得た情報をLLMの入力に加え、根拠づけた応答を生成する手法
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">
                                    LLM搭載エージェント（LLM-powered agent）
                                </div>
                                <div className="gloss-def">
                                    LLMを中核に、ツールを呼び出して半自律・自律的にタスクを実行するアプリケーション
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">自律型／半自律型エージェント</div>
                                <div className="gloss-def">
                                    人間の介入が最小限／定期的な人間の監督つき
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">マルチエージェント</div>
                                <div className="gloss-def">
                                    専門役割を持つ複数エージェントの協調システム
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">オーケストレーション</div>
                                <div className="gloss-def">複数エージェントの調整・協調</div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">ファインチューニング</div>
                                <div className="gloss-def">
                                    事前学習済みモデルを対象データで追加学習し、特定のタスクやドメインに適応させること
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">過学習（overfitting）</div>
                                <div className="gloss-def">
                                    学習データに特化しすぎて、未知のデータで性能が落ちること
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">LLMOps</div>
                                <div className="gloss-def">
                                    LLMの開発・デプロイ・監視・保守を本番環境で管理する手法・ツール・プロセス
                                </div>
                            </div>
                            <div className="gloss-item">
                                <div className="gloss-term">後処理（post-processing）</div>
                                <div className="gloss-def">
                                    LLMの生の出力を、形式・整合性・組織ルールに合わせて整える処理
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="s9">
                        <div className="eyebrow">
                            <i className="ti ti-table"></i>9. 学習目標とハンズオン目標の対応表
                        </div>
                        <h2>学習目標とハンズオン目標の対応表</h2>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>レベル</th>
                                        <th>内容</th>
                                        <th>本ガイドの節</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>GenAI-4.1.1</td>
                                        <td>K2</td>
                                        <td>
                                            LLM搭載テストインフラの主要なアーキテクチャ構成要素と概念を説明する
                                        </td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-4.1.2</td>
                                        <td>K2</td>
                                        <td>RAGを要約する</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>HO-4.1.2</td>
                                        <td>H1</td>
                                        <td>与えられたテストタスクでRAGを試す</td>
                                        <td>3.9</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-4.1.3</td>
                                        <td>K2</td>
                                        <td>
                                            テストプロセスの自動化におけるLLM搭載エージェントの役割と適用を説明する
                                        </td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>HO-4.1.3</td>
                                        <td>H0</td>
                                        <td>
                                            反復的なテストタスクをLLM搭載エージェントが支援する様子を観察する
                                        </td>
                                        <td>4.9</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-4.2.1</td>
                                        <td>K2</td>
                                        <td>
                                            特定のテストタスクのための言語モデルのファインチューニングを説明する
                                        </td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>HO-4.2.1</td>
                                        <td>H0</td>
                                        <td>
                                            与えられたテストタスクと言語モデルのファインチューニングの例を観察する
                                        </td>
                                        <td>5.8</td>
                                    </tr>
                                    <tr>
                                        <td>GenAI-4.2.2</td>
                                        <td>K2</td>
                                        <td>
                                            LLMOpsと、テストタスク用LLMのデプロイ・管理における役割を説明する
                                        </td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="callout-source">
                            出典：<a
                                href="https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CT-GenAI Syllabus v1.0（PDF）
                            </a>
                        </div>
                    </section>

                    <section className="section" id="s10">
                        <div className="eyebrow">
                            <i className="ti ti-help-circle"></i>10. 確認問題（自己採点用）
                        </div>
                        <h2>確認問題（自己採点用）</h2>
                        <div className="callout plum">
                            <i className="ti ti-info-circle"></i>
                            <div className="callout-body">
                                <p>
                                    以下は本ガイド独自の練習問題です。公式サンプル試験ではありません。公式サンプル試験は末尾の参考文献から入手できます。
                                </p>
                            </div>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問1</span>
                                LLM搭載テストインフラで、認証・アクセス制御、プロンプトの前処理、関連データの検索、LLMとの通信を担う要素はどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. フロントエンド</li>
                                <li>B. バックエンド</li>
                                <li>C. LLM</li>
                                <li>D. ベクトルデータベース</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：B</span>
                                    <p>
                                        これらはバックエンドの責務です。フロントエンドはUI、LLMは応答生成、ベクトルデータベースは意味検索のためのデータ保存先です。
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問2</span>
                                RAGの実行時の処理順序として正しいものはどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. 生成→検索</li>
                                <li>B. 検索→生成</li>
                                <li>C. チャンク分割→生成</li>
                                <li>D. ファインチューニング→検索</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：B</span>
                                    <p>
                                        ユーザークエリを埋め込みに変換して関連チャンクを検索し、その結果をコンテキストとしてLLMに渡して生成します。チャンク分割は事前処理（インデックス作成）の段階です。
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問3</span>
                                RAGが、LLM単体の利用と比べてテストタスクで特に有効な点はどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. モデルの重みを直接更新できる</li>
                                <li>
                                    B.
                                    最新の社内仕様・要件・既存テストデータに根拠づけた出力が得られる
                                </li>
                                <li>C. ハルシネーションを完全になくせる</li>
                                <li>D. 人間のレビューが不要になる</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：B</span>
                                    <p>
                                        RAGは最新の社内データを実行時に取得して根拠づけます。Aはファインチューニングの説明、CとDは誤りです（RAGでもハルシネーションは残るため、レビューや検証が必要です）。
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問4</span>
                                チャットボットとLLM搭載エージェントの最も本質的な違いはどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. 大規模言語モデルを使うかどうか</li>
                                <li>B. 日本語に対応しているかどうか</li>
                                <li>
                                    C.
                                    事前定義されたツールを呼び出して外部システムに働きかけられるか
                                </li>
                                <li>D. ベクトルデータベースを使うかどうか</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：C</span>
                                    <p>
                                        エージェントは「ツール」と呼ばれる関数を呼び出して行動できる点が特徴です。
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問5</span>
                                安全性が重要なテストタスクで、LLM搭載エージェントのリスクを緩和するために最も適切なのはどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. 自律型エージェントを使い、人間の関与を減らす</li>
                                <li>
                                    B.
                                    半自律型エージェントを使い、人間の監督と自動検証を組み合わせる
                                </li>
                                <li>C. 温度を最大に設定する</li>
                                <li>D. すべての出力を検証せずに採用する</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：B</span>
                                    <p>
                                        シラバスは、自動検証手順の導入と、重要なタスクでの半自律型エージェントの利用を緩和策として挙げています。
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問6</span>
                                ファインチューニングに関する記述として最も適切なものはどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. 実行時に外部データを検索して回答に付け加える手法である</li>
                                <li>
                                    B.
                                    事前学習済みモデルを、特定タスク向けのデータセットで追加学習する手法である
                                </li>
                                <li>C. モデルを毎回ゼロから学習する手法である</li>
                                <li>D. プロンプトの書き方だけを工夫する手法である</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：B</span>
                                    <p>
                                        AはRAG、Dはプロンプトエンジニアリングの説明です。ファインチューニングは、ゼロからの学習ではなく追加学習です。
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問7</span>
                                ファインチューニングの課題として、シラバスの趣旨に当てはまらないものはどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. 学習データの品質に依存し、偏りや誤りが反映される</li>
                                <li>B. 過学習により未知のシナリオで性能が落ちる</li>
                                <li>C. 推論の根拠が不透明になりやすい</li>
                                <li>D. 学習データが一切不要である</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：D</span>
                                    <p>
                                        ファインチューニングには高品質な対象データが不可欠です。A、B、Cは課題として挙げられている内容です。
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問8</span>
                                運用コストを抑えつつ、狭く明確に定義されたテストタスクに特化させたい場合の選択肢として、最も適切なのはどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. 大規模LLMをゼロから事前学習する</li>
                                <li>B. ファインチューニングしたSLMを使う</li>
                                <li>C. エージェントをすべて自律型にする</li>
                                <li>D. RAGのチャンクを最大にする</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：B</span>
                                    <p>
                                        SLMは軽量で、ファインチューニングすると狭いタスクで高い性能を低コストで得られます。
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問9</span>
                                LLMOpsの説明として最も適切なものはどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>A. 新しいLLMを研究開発するための学術的な枠組み</li>
                                <li>
                                    B.
                                    本番環境でLLMをデプロイ・監視・保守・統制するための手法・ツール・プロセス
                                </li>
                                <li>C. テストケースを自動生成するプロンプトの書式</li>
                                <li>D. ベクトルデータベースの一種</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：B</span>
                                    <p>LLMOpsは運用ライフサイクル全体の管理を指します。</p>
                                </div>
                            </details>
                        </div>

                        <div className="quiz-card">
                            <p className="quiz-q">
                                <span className="qnum">問10</span>
                                GenAIのテストプロセスへの導入アプローチに関する記述として正しいものはどれか。
                            </p>
                            <ul className="quiz-options">
                                <li>
                                    A.
                                    3つのアプローチ（チャットボット、内蔵ツール、社内開発）は同時に併用できない
                                </li>
                                <li>B. 社内開発は制御度が最も高いが、運用責任も最も大きい</li>
                                <li>
                                    C.
                                    AIチャットボットの利用では、データプライバシーを考慮する必要がない
                                </li>
                                <li>D. RAGやファインチューニングは、社内開発でしか使えない</li>
                            </ul>
                            <details>
                                <summary className="quiz-toggle">
                                    <i className="ti ti-chevron-right"></i>答えと解説を見る
                                </summary>
                                <div className="quiz-answer">
                                    <span className="ans-badge">正解：B</span>
                                    <p>
                                        3つのアプローチは併用可能で、RAGやファインチューニングはどのアプローチにも組み込めます。チャットボットでもデータプライバシーとセキュリティの評価が必要です。
                                    </p>
                                </div>
                            </details>
                        </div>
                    </section>

                    <section className="section" id="s11">
                        <div className="eyebrow">
                            <i className="ti ti-checklist"></i>11. 試験直前チェックリスト
                        </div>
                        <h2>試験直前チェックリスト</h2>
                        <ChecklistCard />
                    </section>

                    <section className="section" id="s12">
                        <div className="eyebrow">
                            <i className="ti ti-link"></i>12. 参考文献（根拠となるソースURL）
                        </div>
                        <h2>参考文献（根拠となるソースURL）</h2>

                        <div className="ref-group">
                            <h4>12.1 ISTQB公式・公式準拠資料（試験範囲の根拠）</h4>
                            <div className="ref-grid">
                                <div className="ref-card">
                                    <i className="ti ti-certificate"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            ISTQB
                                            CT-GenAI認定ページ（シラバスv1.1、サンプル試験、Exam
                                            Structuresのダウンロード）
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://istqb.org/certifications/gen-ai/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                https://istqb.org/certifications/gen-ai/
                                            </a>
                                        </div>
                                        <p>
                                            章構成、試験形式（40問、合格30/46点、60分）、最新資料の入手
                                        </p>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-file-text"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            CT-GenAI Syllabus v1.1（公式PDFダウンロード）
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://istqb.org/?sdm_process_download=1&download_id=6295"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                istqb.org（download_id=6295）
                                            </a>
                                        </div>
                                        <p>
                                            受験前の最終確認（本ガイド作成時は本文を取得できなかった）
                                        </p>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-file-text"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            CT-GenAI Syllabus v1.0（PDF、第4章の原文を確認）
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                https://isqi.org/media/3d/d9/7e/1762964279/CT-GenAI-Syllabus-v1.0_EN_.pdf
                                            </a>
                                        </div>
                                        <p>4.1.1〜4.1.3、4.2.1の原文</p>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-clipboard-list"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            CT-GenAI Sample Exam A Questions v1.1
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://istqb.org/?sdm_process_download=1&download_id=6309"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                istqb.org（download_id=6309）
                                            </a>
                                        </div>
                                        <p>出題形式の確認</p>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-clipboard-check"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            CT-GenAI Sample Exam A Answers v1.1
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://istqb.org/?sdm_process_download=1&download_id=6301"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                istqb.org（download_id=6301）
                                            </a>
                                        </div>
                                        <p>解答と解説の確認</p>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-abc"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">ISTQB Glossary</div>
                                        <div className="ref-url">
                                            <a
                                                href="https://glossary.istqb.org/en_US/search?term="
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                https://glossary.istqb.org/en_US/search?term=
                                            </a>
                                        </div>
                                        <p>用語の公式定義</p>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-presentation"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            Exactpro：Chapter 4 Reading Materials（v1.1準拠）
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://speakerdeck.com/exactpro/chapter-4-llm-powered-testformat-reading-materials-self-study-or-guided-reading"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                speakerdeck.com/exactpro（Chapter 4 Reading Materials）
                                            </a>
                                        </div>
                                        <p>
                                            v1.1準拠の詳細解説（4.1.1の構成要素、4.2.1の課題、4.2.2のLLMOpsと3アプローチ）
                                        </p>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-presentation"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            Exactpro：Chapter 4 Slides（v1.1準拠）
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://speakerdeck.com/exactpro/chapter-4-llm-powered-test-slides"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                speakerdeck.com/exactpro（Chapter 4 Slides）
                                            </a>
                                        </div>
                                        <p>上記のスライド版</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ref-group">
                            <h4>12.2 ベストプラクティスの補足ソース（試験範囲外・実務の参考）</h4>
                            <div className="ref-grid">
                                <div className="ref-card">
                                    <i className="ti ti-database-search"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            Microsoft
                                            Learn：RAGの情報検索（インデックス設定、ハイブリッド検索、リランキング）
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://learn.microsoft.com/en-us/Azure/architecture/ai-ml/guide/rag/rag-information-retrieval"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                learn.microsoft.com（RAG information retrieval）
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-file-description"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            Lewisら「Retrieval-Augmented Generation for
                                            Knowledge-Intensive NLP Tasks」（原論文）
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://arxiv.org/abs/2005.11401"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                arxiv.org/abs/2005.11401
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-robot"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            Anthropic「Building effective agents」
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://www.anthropic.com/engineering/building-effective-agents"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                anthropic.com/engineering/building-effective-agents
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-shield-check"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            OWASP Top 10 for LLM
                                            Applications（プロンプトインジェクション、過剰なエージェンシー、不適切な出力処理など）
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://genai.owasp.org/llm-top-10/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                genai.owasp.org/llm-top-10/
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-file-description"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            Huら「LoRA: Low-Rank Adaptation of Large Language
                                            Models」
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://arxiv.org/abs/2106.09685"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                arxiv.org/abs/2106.09685
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-cloud"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">
                                            Google Cloud「What is LLMOps?」
                                        </div>
                                        <div className="ref-url">
                                            <a
                                                href="https://cloud.google.com/discover/what-is-llmops"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                cloud.google.com/discover/what-is-llmops
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ref-card">
                                    <i className="ti ti-brand-ibm"></i>
                                    <div className="ref-body">
                                        <div className="ref-title">IBM「What is LLMOps?」</div>
                                        <div className="ref-url">
                                            <a
                                                href="https://ibm.com/think/topics/llmops"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                ibm.com/think/topics/llmops
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3>12.3 出典に関する注意</h3>
                        <div className="critique-card">
                            <ul>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        【シラバス】と表記した内容は、上記12.1の資料に基づいています。v1.0の原文とv1.1準拠の教材の間で、表現が異なる箇所はv1.1準拠の教材の表現を優先しつつ、意味が一致することを確認しています。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        【補足】と表記した内容は、12.2の資料と一般的な業界知見に基づく参考情報で、試験の出題範囲であるとは限りません。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        Exactproの教材は、ISTQB®
                                        CT-GenAIシラバスv1.1に準拠した非公式の教材（Speaker
                                        Deck上の公開資料）です。公式の試験範囲は、必ずISTQB公式のシラバスで確認してください。
                                    </div>
                                </li>
                                <li>
                                    <i className="ti ti-point"></i>
                                    <div className="item-body">
                                        標準・規制（ISO/IEC 42001、EU AI Act、NIST AI
                                        RMFなど）は第3章で扱われるトピックで、本章ではLLMOpsのガバナンスの文脈で関連します。
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <footer className="footer">
                    <p>
                        本ガイドはISTQB® Certified Tester Specialist Level – Testing with
                        Generative AI（CT-GenAI）シラバス第4章の学習支援を目的とした非公式の教材です。試験の正式な出題範囲は、必ず
                        <a
                            href="https://istqb.org/certifications/gen-ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB公式ページ
                        </a>
                        および最新の公式シラバスでご確認ください。
                    </p>
                </footer>
            </main>
        </div>
    );
}
