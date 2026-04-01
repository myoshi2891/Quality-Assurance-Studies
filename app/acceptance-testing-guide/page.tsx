import '../acceptance-testing-guide.css';
import Header from '../../components/Header';

export default function AcceptanceTestingGuide() {
    return (
        <div className="page-acc">
            <Header />
            <main>
            <section className="hero" id="top">
                <div className="hero-content">
                    <span className="hero-kicker"
                        >受入テスト完全ガイド 2025 — ISTQB CTFL v4.0 準拠</span
                    >
                    <h1>
                        <em>Acceptance</em><br />
                        Testing
                        <small
                            >ISTQB CTFL v4.0 Section 2.2.4 ｜
                            UAT・OAT・Alpha・Beta・契約・規制・ATDD を完全網羅</small
                        >
                    </h1>
                    <p className="hero-desc">
                        受入テストは「このソフトウェアをリリースしてよいか」を判断する最終的な品質ゲートです。
                        ユーザー・ビジネス・運用・法規制のすべての観点からシステムを評価し、
                        正式な「リリース承認（サインオフ）」を得るための体系的なプロセスを徹底解説します。
                    </p>

                    <div className="hero-stats">
                        <div className="stat-tile">
                            <span className="stat-num">Level 4</span
                            ><span className="stat-label">ISTQBテストレベル（最終）</span>
                        </div>
                        <div className="stat-tile">
                            <span className="stat-num">6+</span
                            ><span className="stat-label">受入テストの主要種別</span>
                        </div>
                        <div className="stat-tile">
                            <span className="stat-num">95%</span
                            ><span className="stat-label">本番前欠陥検出率（UAT実施時）</span>
                        </div>
                        <div className="stat-tile">
                            <span className="stat-num">Go/No-Go</span
                            ><span className="stat-label">受入テストの最終判断</span>
                        </div>
                    </div>

                    {/* Test Level Ladder */}
                    <div className="level-track">
                        <div className="level-item">
                            <div className="level-num">L1</div>
                            <div className="level-name">コンポーネントテスト（ユニット）</div>
                            <div className="level-scope">個々の関数・クラスを独立検証</div>
                            <span className="badge b-ink">前工程</span>
                        </div>
                        <div className="level-item">
                            <div className="level-num">L2</div>
                            <div className="level-name">インテグレーションテスト</div>
                            <div className="level-scope">コンポーネント間・システム間の連携検証</div>
                            <span className="badge b-ink">前工程</span>
                        </div>
                        <div className="level-item">
                            <div className="level-num">L3</div>
                            <div className="level-name">システムテスト</div>
                            <div className="level-scope">システム全体の機能・非機能要件の検証</div>
                            <span className="badge b-ink">前工程</span>
                        </div>
                        <div className="level-item hl">
                            <div className="level-num">L4</div>
                            <div className="level-name">受入テスト（Acceptance Testing）</div>
                            <div className="level-scope">
                                ユーザー・ビジネス・運用・法規制の観点からリリース可否を判断
                            </div>
                            <span className="badge b-terra">← ここ（最終）</span>
                        </div>
                    </div>

                    <div className="callout c-terra">
                        <strong>ISTQBの定義（CTFL v4.0 Section 2.2.4）：</strong>
                        受入テストとは「ユーザーのニーズ・要件・ビジネスプロセスに対して正式に実施するテストであり、
                        システムが受入基準を満たすかどうかを判断し、ユーザー・顧客・その他の承認権限を持つエンティティが
                        システムを受け入れるかどうかを決定できるようにすること」です。
                        <br /><a
                            href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                            className="ulink"
                            target="_blank"
                            >istqb.org — CTFL v4.0 公式ページ</a
                        >
                        <a
                            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                            className="ulink"
                            target="_blank"
                            >シラバス v4.0.1 PDF</a
                        >
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 1: DEFINITION
════════════════════════════════════════ */}
            <section id="definition">
                <div className="section-header">
                    <span className="section-header-num"
                        >STEP 01 — ISTQB CTFL 2.2.4: WHAT IS ACCEPTANCE TESTING</span
                    >
                    <h2>受入テストとは何か</h2>
                    <div className="terra-rule"></div>
                    <p>
                        受入テストはすべてのテストレベルの最後に位置し、「技術的に正しく動くか」ではなく「ビジネスとユーザーのために本当に価値があるか」を問います。開発者ではなく、顧客・ユーザー・ステークホルダーが判断の主体です。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <div className="comp-box">
                            <div className="comp-row header">
                                <div className="comp-cell">観点</div>
                                <div className="comp-cell">システムテスト（L3）</div>
                                <div className="comp-cell">受入テスト（L4）</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>主な問い</strong></div>
                                <div className="comp-cell">仕様通りに動くか？</div>
                                <div className="comp-cell">ユーザーの役に立つか？</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>実施者</strong></div>
                                <div className="comp-cell">独立したQAチーム</div>
                                <div className="comp-cell">ユーザー・顧客・ステークホルダー</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>根拠</strong></div>
                                <div className="comp-cell">技術仕様書・設計書</div>
                                <div className="comp-cell">ビジネス要件・実際の業務フロー</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>環境</strong></div>
                                <div className="comp-cell">テスト/ステージング環境</div>
                                <div className="comp-cell">本番に限りなく近い環境</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>結果</strong></div>
                                <div className="comp-cell">PASS / FAIL</div>
                                <div className="comp-cell">Go / No-Go（リリース承認）</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <h3>受入テストが必要な3つの理由</h3>
                            <div className="step-list mt-2">
                                <div className="step-item">
                                    <div className="step-num-circle">1</div>
                                    <div className="step-content">
                                        <h4>「動く」≠「使える」の問題</h4>
                                        <p>
                                            技術的に正しく動くシステムでも、実際の業務フローに合わなければ価値がない。受入テストだけがこのギャップを検出できる。
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-num-circle">2</div>
                                    <div className="step-content">
                                        <h4>要件解釈の齟齬を最後に修正</h4>
                                        <p>
                                            要件定義から開発完了までの間に生じた認識のズレ（仕様理解の違い）を、リリース前の最終段階で発見・修正できる唯一のチャンス。
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-num-circle">3</div>
                                    <div className="step-content">
                                        <h4>リリースの法的・契約的根拠</h4>
                                        <p>
                                            正式なサインオフ（承認）を文書化することで、契約上・法律上の責任範囲を明確にする。規制産業では義務的要件となる。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://www.browserstack.com/guide/acceptance-testing"
                        className="ulink"
                        target="_blank"
                        >browserstack.com — What is Acceptance Testing (Jun 2025)</a
                    >
                    <a
                        href="https://mastersoftwaretesting.com/testing-fundamentals/types-of-testing/functional-testing/acceptance-testing"
                        className="ulink"
                        target="_blank"
                        >mastersoftwaretesting.com — Acceptance Testing Guide (Jan 2026)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 2: TYPES OF ACCEPTANCE TESTING
════════════════════════════════════════ */}
            <section id="types">
                <div className="section-header">
                    <span className="section-header-num">STEP 02 — TYPES OF ACCEPTANCE TESTING</span>
                    <h2>受入テストの6種類</h2>
                    <div className="terra-rule"></div>
                    <p>
                        ISTQBは受入テストを複数の形態に分類しています。プロジェクトの性質・業界・顧客との契約に応じて適切な種類を選択・組み合わせて実施します。
                    </p>
                </div>

                <div className="uat-grid">
                    {/* UAT */}
                    <div className="uat-card" style={{borderTopColor: "var(--terra)"}}>
                        <span className="uat-abbr" style={{color: "var(--terra)"}}>UAT</span>
                        <div className="uat-title">ユーザー受入テスト</div>
                        <div className="uat-who">👤 実施者：実際のエンドユーザー・ビジネス代表者</div>
                        <div className="uat-desc">
                            システムがユーザーの要件・業務フローを満たすかを、実際の利用者が評価する。最も重要な受入テスト。
                        </div>
                        <div className="uat-example">
                            ECサイトのユーザーが実際に商品を検索・購入・返品できるかを確認する
                        </div>
                        <span className="badge b-terra">最重要</span>
                    </div>
                    {/* OAT */}
                    <div className="uat-card" style={{borderTopColor: "var(--color-border)"}}>
                        <span className="uat-abbr" style={{color: "var(--color-border)"}}>OAT</span>
                        <div className="uat-title">運用受入テスト</div>
                        <div className="uat-who">🔧 実施者：ITオペレーション・インフラチーム</div>
                        <div className="uat-desc">
                            本番環境での運用可能性を検証。バックアップ・障害回復・監視・保守性を確認する。
                        </div>
                        <div className="uat-example">
                            深夜バックアップが正常に動作し、障害時に30分以内に復旧できることを確認
                        </div>
                        <span className="badge badge-unit">非機能重視</span>
                    </div>
                    {/* CAT */}
                    <div className="uat-card" style={{borderTopColor: "var(--color-accent-yellow)"}}>
                        <span className="uat-abbr" style={{color: "var(--color-accent-yellow)"}}>CAT</span>
                        <div className="uat-title">契約受入テスト</div>
                        <div className="uat-who">📋 実施者：顧客・法務・PM</div>
                        <div className="uat-desc">
                            契約書に記載されたすべての仕様・機能・品質基準を満たしているかを検証する。
                        </div>
                        <div className="uat-example">
                            SLAで定めた応答時間・稼働率・セキュリティ要件を満たすかを確認
                        </div>
                        <span className="badge b-gold">契約準拠</span>
                    </div>
                    {/* RAT */}
                    <div className="uat-card" style={{borderTopColor: "var(--err)"}}>
                        <span className="uat-abbr" style={{color: "var(--err)"}}>RAT</span>
                        <div className="uat-title">規制受入テスト</div>
                        <div className="uat-who">🏛️ 実施者：コンプライアンス・第三者監査機関</div>
                        <div className="uat-desc">
                            法律・規制・業界標準（GDPR・HIPAA・PCI-DSS等）に準拠しているかを検証する。
                        </div>
                        <div className="uat-example">
                            医療系アプリがHIPAAの患者データ保護要件に完全準拠していることを確認
                        </div>
                        <span className="badge b-err">法的義務</span>
                    </div>
                    {/* Alpha */}
                    <div className="uat-card" style={{borderTopColor: "var(--color-accent-green)"}}>
                        <span className="uat-abbr" style={{color: "var(--color-accent-green)"}}>Alpha</span>
                        <div className="uat-title">アルファテスト</div>
                        <div className="uat-who">🏢 実施者：開発組織内の内部スタッフ</div>
                        <div className="uat-desc">
                            開発環境またはステージング環境で社内ユーザーが実施。外部ユーザーへのリリース前の最初の広範なテスト。
                        </div>
                        <div className="uat-example">
                            新しいモバイルアプリを正式リリース前に社員に使用してもらいバグとUX問題を収集
                        </div>
                        <span className="badge b-sage">社内限定</span>
                    </div>
                    {/* Beta */}
                    <div className="uat-card" style={{borderTopColor: "var(--color-accent-blue)"}}>
                        <span className="uat-abbr" style={{color: "var(--color-accent-blue)"}}>Beta</span>
                        <div className="uat-title">ベータテスト</div>
                        <div className="uat-who">🌐 実施者：選ばれた外部ユーザーグループ</div>
                        <div className="uat-desc">
                            本番に近い環境で実際のエンドユーザーが実施。実世界のフィードバックを収集してリリース前に改善する。
                        </div>
                        <div className="uat-example">
                            1,000名の選抜ユーザーにベータ版を配布し2週間の実環境フィードバックを収集
                        </div>
                        <span className="badge b-info">外部公開</span>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://marker.io/blog/user-acceptance-testing-types"
                        className="ulink"
                        target="_blank"
                        >marker.io — 6 Types of User Acceptance Testing (2025)</a
                    >
                    <a
                        href="https://www.virtuosoqa.com/testing-guides/what-is-acceptance-testing"
                        className="ulink"
                        target="_blank"
                        >virtuosoqa.com — Acceptance Testing Complete Guide</a
                    >
                    <a
                        href="https://en.wikipedia.org/wiki/Acceptance_testing"
                        className="ulink"
                        target="_blank"
                        >Wikipedia — Acceptance Testing (Dec 2025)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 3: UAT DEEP DIVE
════════════════════════════════════════ */}
            <section id="uat">
                <div className="section-header">
                    <span className="section-header-num">STEP 03 — USER ACCEPTANCE TESTING (UAT)</span>
                    <h2>UAT（ユーザー受入テスト）の詳細</h2>
                    <div className="terra-rule"></div>
                    <p>
                        最も重要な受入テスト。実際のエンドユーザーが実際の業務シナリオを使ってシステムを評価します。技術的な正確性ではなく「このシステムで実際の仕事ができるか」を確認します。
                    </p>
                </div>

                {/* Who participates */}
                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--ink)"}}
                >
                    UATの参加者と役割
                </h3>
                <div className="card-grid">
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--terra)", marginBottom: "4px"}}
                        >
                            🏢 ビジネスオーナー / PO
                        </div>
                        <div style={{fontSize: "12px", color: "var(--ink3)"}}>
                            受入基準を設定し、最終的なGoサインを出す。テスト全体の方向性と優先度を決定する最終権限者。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--terra)", marginBottom: "4px"}}
                        >
                            👤 エンドユーザー
                        </div>
                        <div style={{fontSize: "12px", color: "var(--ink3)"}}>
                            実際にシステムを使う担当者。業務フローを実際に実行し、使いやすさ・正確性を検証する主体。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--terra)", marginBottom: "4px"}}
                        >
                            📊 UATリード / PM
                        </div>
                        <div style={{fontSize: "12px", color: "var(--ink3)"}}>
                            テストを進行管理・スケジューリング。フィードバックを集約・優先度付けしてサインオフまで導く。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--terra)", marginBottom: "4px"}}
                        >
                            💻 開発者・QA
                        </div>
                        <div style={{fontSize: "12px", color: "var(--ink3)"}}>
                            UATで発見された欠陥を再現・修正・検証する。環境のセットアップと技術的サポートも担当。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--terra)", marginBottom: "4px"}}
                        >
                            🔧 DevOps / Ops
                        </div>
                        <div style={{fontSize: "12px", color: "var(--ink3)"}}>
                            UAT環境の安定維持・リリース管理・データ準備を担当。テスト実行の基盤を支える。
                        </div>
                    </div>
                    <div className="card-sm">
                        <div
                            style={{fontSize: "12px", fontWeight: "700", color: "var(--terra)", marginBottom: "4px"}}
                        >
                            ✅ コンプライアンス（必要時）
                        </div>
                        <div style={{fontSize: "12px", color: "var(--ink3)"}}>
                            WCAG・法律・規制要件の確認担当。特定業界では必須の参加者。
                        </div>
                    </div>
                </div>

                {/* UAT vs others */}
                <h3
                    className="mt-4"
                    style={{fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--ink)"}}
                >
                    UAT vs 他テストとの違い
                </h3>
                <div className="comp-box">
                    <div className="comp-row header">
                        <div className="comp-cell">観点</div>
                        <div className="comp-cell">UAT</div>
                        <div className="comp-cell">SIT（システム統合）</div>
                        <div className="comp-cell">OAT（運用受入）</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>目的</strong></div>
                        <div className="comp-cell">ユーザーの満足度・業務適合性</div>
                        <div className="comp-cell">システム間連携の技術的正確性</div>
                        <div className="comp-cell">本番運用可能性の確認</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>視点</strong></div>
                        <div className="comp-cell">エンドユーザー（業務視点）</div>
                        <div className="comp-cell">技術チーム（システム視点）</div>
                        <div className="comp-cell">ITオペレーション（運用視点）</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>例：ログイン</strong></div>
                        <div className="comp-cell">10秒以内にログインできるか</div>
                        <div className="comp-cell">1000同時ログインでエラーなしか</div>
                        <div className="comp-cell">セッション管理・監視が機能するか</div>
                    </div>
                    <div className="comp-row">
                        <div className="comp-cell"><strong>環境</strong></div>
                        <div className="comp-cell">本番同等ステージング環境</div>
                        <div className="comp-cell">統合テスト環境</div>
                        <div className="comp-cell">本番環境（またはPreProd）</div>
                    </div>
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://usersnap.com/blog/types-user-acceptance-tests-frameworks/"
                        className="ulink"
                        target="_blank"
                        >usersnap.com — UAT Types & Frameworks (Jul 2025)</a
                    >
                    <a
                        href="https://bugherd.com/blog/user-acceptance-testing"
                        className="ulink"
                        target="_blank"
                        >bugherd.com — UAT Complete 2025 Guide</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 4: OAT
════════════════════════════════════════ */}
            <section id="oat">
                <div className="section-header">
                    <span className="section-header-num">STEP 04 — OPERATIONAL ACCEPTANCE TESTING (OAT)</span>
                    <h2>OAT（運用受入テスト）</h2>
                    <div className="terra-rule"></div>
                    <p>
                        「本番環境で安定して運用できるか」を検証する非機能テスト中心の受入テスト。Production
                        Acceptance Testing（PAT）・Operational Readiness
                        Testing（ORT）とも呼ばれます。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                        >
                            OATで検証する主要領域
                        </h3>
                        <div className="step-list">
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "var(--slate5)", borderColor: "rgba(61, 79, 92, 0.3)", color: "var(--color-border)"}}
                                >
                                    ①
                                </div>
                                <div className="step-content">
                                    <h4>バックアップ・リカバリ</h4>
                                    <p>
                                        データバックアップが正常に動作し、障害・データロス時に定められた時間（RTO/RPO）内に復旧できることを確認する。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "var(--slate5)", borderColor: "rgba(61, 79, 92, 0.3)", color: "var(--color-border)"}}
                                >
                                    ②
                                </div>
                                <div className="step-content">
                                    <h4>ディザスタリカバリ（DR）</h4>
                                    <p>
                                        データセンター障害・大規模インシデント時のフェイルオーバー手順と復旧能力を実際にシミュレーションして検証する。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "var(--slate5)", borderColor: "rgba(61, 79, 92, 0.3)", color: "var(--color-border)"}}
                                >
                                    ③
                                </div>
                                <div className="step-content">
                                    <h4>保守性・アップデート</h4>
                                    <p>
                                        パッチ適用・バージョンアップ・設定変更が安全にできること。メンテナンスウィンドウでの手順書の正確性を確認する。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "var(--slate5)", borderColor: "rgba(61, 79, 92, 0.3)", color: "var(--color-border)"}}
                                >
                                    ④
                                </div>
                                <div className="step-content">
                                    <h4>監視・アラート</h4>
                                    <p>
                                        監視ダッシュボード・ログ収集・アラートが正しく設定されていること。異常発生時に適切な担当者に通知されることを確認する。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div
                                    className="step-num-circle"
                                    style={{background: "var(--slate5)", borderColor: "rgba(61, 79, 92, 0.3)", color: "var(--color-border)"}}
                                >
                                    ⑤
                                </div>
                                <div className="step-content">
                                    <h4>セキュリティ運用</h4>
                                    <p>
                                        アクセス制御・暗号化・セキュリティパッチ管理・不正アクセス検知が本番稼働後も維持されることを検証する。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="callout c-slate">
                            <strong>OATが特に重要な場面：</strong><br />
                            ・クラウド移行（AWS/Azure/GCP）のGo-Live前<br />
                            ・24/365稼働が必要なミッションクリティカルシステム<br />
                            ・Eコマースの繁忙期（セール・大型連休）前<br />
                            ・医療・金融・物流など高可用性が求められる産業<br />
                            ・コンテナ化・マイクロサービス化後の初回デプロイ
                        </div>
                        <div className="code-block mt-2">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang">OAT チェックリスト（例）</span>
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"hl-t\">【バックアップ検証】</span>\n<span class=\"hl-g\">✓</span> 日次バックアップが AM 2:00 に実行完了\n<span class=\"hl-g\">✓</span> 別ストレージへの転送が成功\n<span class=\"hl-g\">✓</span> テストリストアで完全性を確認（5%ランダムサンプル）\n<span class=\"hl-g\">✓</span> RTO 30分 / RPO 1時間 の基準を満たす\n\n<span class=\"hl-t\">【フェイルオーバー検証】</span>\n<span class=\"hl-g\">✓</span> プライマリDB停止 → スタンバイへ自動切替\n<span class=\"hl-g\">✓</span> 切替所要時間: 目標 &lt; 5分 → 実測 2分38秒 ✓\n<span class=\"hl-g\">✓</span> 切替後のデータ整合性確認完了\n\n<span class=\"hl-t\">【監視設定確認】</span>\n<span class=\"hl-g\">✓</span> CPU 80%超で Slackアラート送信を確認\n<span class=\"hl-g\">✓</span> エラー率 1%超で PagerDuty通知を確認\n<span class=\"hl-r\">✗</span> Disk 90%超のアラート → 設定漏れ → 修正依頼" }} />
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://www.bairesdev.com/blog/acceptance-testing-in-software-testing/"
                        className="ulink"
                        target="_blank"
                        >bairesdev.com — OAT in Acceptance Testing</a
                    >
                    <a
                        href="https://en.wikipedia.org/wiki/Acceptance_testing"
                        className="ulink"
                        target="_blank"
                        >Wikipedia — Operational Acceptance Testing (Dec 2025)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 5: ALPHA & BETA TESTING
════════════════════════════════════════ */}
            <section id="alpha-beta">
                <div className="section-header">
                    <span className="section-header-num">STEP 05 — ALPHA & BETA TESTING</span>
                    <h2>アルファ・ベータテスト</h2>
                    <div className="terra-rule"></div>
                    <p>
                        製品リリース前の2段階のユーザーテスト。アルファで社内の問題を洗い出し、ベータで外部ユーザーの実際の反応を収集してから正式リリースへ進みます。
                    </p>
                </div>

                <div className="grid-2">
                    <div className="card" style={{borderTop: "3px solid var(--color-accent-green)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem"}}
                        >
                            <h3 style={{fontSize: "1.1rem", margin: "0"}}>
                                🔬 アルファテスト（Alpha Testing）
                            </h3>
                            <span className="badge b-sage">社内実施</span>
                        </div>
                        <p>
                            開発組織内のスタッフ（QA・社内ユーザー・ステークホルダー）が開発・ステージング環境で実施。外部ユーザーへの公開前の最初の広範なテスト。
                        </p>
                        <hr className="div" />
                        <ul className="checklist" style={{fontSize: "12.5px"}}>
                            <li>環境：開発・内部ステージング環境</li>
                            <li>参加者：社内スタッフ・QAエンジニア・SME</li>
                            <li>フォーカス：機能の正確性・重大バグ・UX問題</li>
                            <li>出力：バグレポート・機能評価・改善リスト</li>
                        </ul>
                    </div>
                    <div className="card" style={{borderTop: "3px solid var(--color-border)"}}>
                        <div
                            style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem"}}
                        >
                            <h3 style={{fontSize: "1.1rem", margin: "0"}}>
                                🌐 ベータテスト（Beta Testing）
                            </h3>
                            <span className="badge badge-unit">外部実施</span>
                        </div>
                        <p>
                            選ばれた外部ユーザーグループが本番に近い環境で実施（フィールドテスト）。実世界での反応・互換性・パフォーマンスを収集する。
                        </p>
                        <hr className="div" />
                        <ul className="checklist" style={{fontSize: "12.5px"}}>
                            <li>環境：本番環境または専用ベータ環境</li>
                            <li>参加者：選抜された外部ユーザー・早期採用者</li>
                            <li>フォーカス：実世界のユーザビリティ・互換性</li>
                            <li>出力：ユーザーフィードバック・使用パターン分析</li>
                        </ul>
                    </div>
                </div>

                <div className="callout c-gold mt-3">
                    <strong>アルファ → ベータ → 正式リリースのフロー：</strong><br />
                    開発完了 → <strong>Alpha</strong>（社内バグ修正・UX改善） → Alpha合格 →
                    <strong>Beta</strong>（外部フィードバック収集・最終調整） → Beta合格 →
                    <strong>正式リリース（GA: General Availability）</strong><br />
                    2025年のAI系SaaS製品では、ベータ期間を6ヶ月以上確保し、大規模なユーザーフィードバックを収集してから正式リリースする事例が増えています。
                    <br /><a
                        href="https://katalon.com/resources-center/blog/user-acceptance-testing"
                        className="ulink"
                        target="_blank"
                        >katalon.com — UAT Process & Best Practices</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 6: ACCEPTANCE CRITERIA
════════════════════════════════════════ */}
            <section id="criteria">
                <div className="section-header">
                    <span className="section-header-num">STEP 06 — ACCEPTANCE CRITERIA</span>
                    <h2>受入基準（Acceptance Criteria）— テストの「合否判定ルール」</h2>
                    <div className="terra-rule"></div>
                    <p>
                        受入基準は「このシステムが受け入れ可能かどうかを判断するための条件・要件」です。テスト前に明確・測定可能な形で合意しておくことが受入テスト成功の核心です。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                        >
                            受入基準の2つの記述スタイル
                        </h3>

                        {/* Scenario-based */}
                        <div className="criteria-box">
                            <h4>① シナリオ型（BDD Given/When/Then）</h4>
                            <div className="gherkin mt-2">
                                <span className="gh-feat">Feature:</span> ユーザーログイン<br /><br />
                                <span className="gh-scen">Scenario:</span> 正常ログイン<br />
                                &nbsp;&nbsp;<span className="gh-given">Given</span>
                                ユーザーが登録済みメールアドレス
                                <span className="gh-param"
                                    >"<a
                                        href="/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="ff8a8c9a8dbf9a879e928f939ad19c9092"
                                        >[email&#160;protected]</a
                                    >"</span
                                >
                                を持つ<br />
                                &nbsp;&nbsp;<span className="gh-when">When</span> 正しいパスワード
                                <span className="gh-param">"Pass123!"</span> でログインする<br />
                                &nbsp;&nbsp;<span className="gh-then">Then</span>
                                ダッシュボード画面に遷移する<br />
                                &nbsp;&nbsp;<span className="gh-then">And</span>
                                歓迎メッセージが表示される<br /><br />
                                <span className="gh-scen">Scenario:</span> ロックアウト<br />
                                &nbsp;&nbsp;<span className="gh-given">Given</span> ユーザーが
                                <span className="gh-param">5回</span> 連続でパスワードを間違えた<br />
                                &nbsp;&nbsp;<span className="gh-when">When</span>
                                6回目のログインを試みる<br />
                                &nbsp;&nbsp;<span className="gh-then">Then</span> アカウントが
                                <span className="gh-param">15分</span> ロックされる
                            </div>
                        </div>

                        {/* Rule-based */}
                        <div className="criteria-box mt-2">
                            <h4>② ルール型（検証可能な条件リスト）</h4>
                            <ul className="checklist mt-2">
                                <li>
                                    ログイン画面はメールアドレスとパスワードの入力フィールドを持つ
                                </li>
                                <li>
                                    正しい資格情報でダッシュボードにリダイレクトされる（2秒以内）
                                </li>
                                <li>5回連続失敗でアカウントを15分ロック</li>
                                <li>パスワードは8文字以上・英数字混在・マスク表示される</li>
                                <li>「パスワードを忘れた」リンクでリセットメール送信が完了する</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                        >
                            INVESTの原則 — 良い受入基準の条件
                        </h3>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>頭文字</th>
                                        <th>意味</th>
                                        <th>具体的に</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>I</strong>ndependent</td>
                                        <td>独立している</td>
                                        <td>他の基準に依存せず単独で検証できる</td>
                                    </tr>
                                    <tr>
                                        <td><strong>N</strong>egotiable</td>
                                        <td>交渉可能</td>
                                        <td>ステークホルダーと協議・調整できる</td>
                                    </tr>
                                    <tr>
                                        <td><strong>V</strong>aluable</td>
                                        <td>価値がある</td>
                                        <td>ビジネス・ユーザー価値に直結している</td>
                                    </tr>
                                    <tr>
                                        <td><strong>E</strong>stimable</td>
                                        <td>見積もり可能</td>
                                        <td>テストに必要な時間・工数を見積もれる</td>
                                    </tr>
                                    <tr>
                                        <td><strong>S</strong>mall</td>
                                        <td>小さい</td>
                                        <td>1スプリントで実装・テスト可能な粒度</td>
                                    </tr>
                                    <tr>
                                        <td><strong>T</strong>estable</td>
                                        <td>テスト可能</td>
                                        <td>Pass/Failを客観的に判断できる</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout c-terra mt-2" style={{fontSize: "12.5px"}}>
                            <strong>よくある失敗：曖昧な受入基準</strong><br />
                            ✗「システムが速く動作すること」<br />
                            ✓「P95の応答時間が2秒以内であること（500同時ユーザー時）」<br /><br />
                            ✗「使いやすいUI」<br />
                            ✓「SUSスコアが70点以上であること・タスク完了率が85%以上であること」
                        </div>
                        <p className="text-sm mt-1">
                            参照:
                            <a
                                href="https://www.testrail.com/blog/acceptance-criteria-agile/"
                                className="ulink"
                                target="_blank"
                                >testrail.com — Acceptance Criteria in Agile (Jul 2025)</a
                            >
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 7: UAT PROCESS
════════════════════════════════════════ */}
            <section id="process">
                <div className="section-header">
                    <span className="section-header-num">STEP 07 — UAT PROCESS: STEP BY STEP</span>
                    <h2>受入テストの実施プロセス</h2>
                    <div className="terra-rule"></div>
                    <p>
                        受入テストは「場当たり的にユーザーに使ってもらう」のではなく、計画・実行・承認の体系的なプロセスとして実施します。
                    </p>
                </div>

                {/* Process flow */}
                <div className="proc-flow">
                    <div className="proc-step">
                        <span className="proc-num">PHASE 1</span>
                        <div className="proc-title">計画・準備</div>
                        <div className="proc-desc">
                            スコープ・目標・スケジュール・参加者・環境・データを定義。入口/出口基準を合意。
                        </div>
                    </div>
                    <div className="proc-step">
                        <span className="proc-num">PHASE 2</span>
                        <div className="proc-title">テストケース設計</div>
                        <div className="proc-desc">
                            受入基準からテストシナリオを作成。業務フローに沿ったリアルなシナリオを準備。
                        </div>
                    </div>
                    <div className="proc-step">
                        <span className="proc-num">PHASE 3</span>
                        <div className="proc-title">環境・データ準備</div>
                        <div className="proc-desc">
                            本番同等環境のセットアップ。匿名化した本番データでテストデータを準備。
                        </div>
                    </div>
                    <div className="proc-step">
                        <span className="proc-num">PHASE 4</span>
                        <div className="proc-title">テスト実行</div>
                        <div className="proc-desc">
                            ユーザーがシナリオを実行・フィードバック収集・欠陥報告。進捗をリアルタイム追跡。
                        </div>
                    </div>
                    <div className="proc-step">
                        <span className="proc-num">PHASE 5</span>
                        <div className="proc-title">欠陥修正・再テスト</div>
                        <div className="proc-desc">
                            発見された欠陥を優先度付け・修正・再テスト。クリティカルな欠陥はブロッカーとして扱う。
                        </div>
                    </div>
                    <div className="proc-step">
                        <span className="proc-num">PHASE 6</span>
                        <div className="proc-title">サインオフ</div>
                        <div className="proc-desc">
                            出口基準を満たしたことを確認。ステークホルダーが正式に承認（Go/No-Go決定）。
                        </div>
                    </div>
                </div>

                {/* Entry/Exit criteria */}
                <div className="grid-2 mt-4">
                    <div>
                        <div className="criteria-box">
                            <h4>🚪 入口基準（Entry Criteria）</h4>
                            <div className="criteria-item">
                                システムテストが完了し、全テストケースがPASSしている
                            </div>
                            <div className="criteria-item">
                                重大（Critical・High）の未解決欠陥がゼロ
                            </div>
                            <div className="criteria-item">UAT環境が本番同等でセットアップ済み</div>
                            <div className="criteria-item">テストデータ・テストケースが準備完了</div>
                            <div className="criteria-item">参加ユーザーへのオリエンテーション完了</div>
                        </div>
                    </div>
                    <div>
                        <div className="criteria-box">
                            <h4>🚪 出口基準（Exit Criteria）</h4>
                            <div className="criteria-item">
                                全必須テストケースを実行完了（カバレッジ目標達成）
                            </div>
                            <div className="criteria-item">Critical・Highの未解決欠陥がゼロ</div>
                            <div className="criteria-item">Mediumの未解決欠陥が合意数以下</div>
                            <div className="criteria-item">ビジネスオーナーが正式サインオフ完了</div>
                            <div className="criteria-item">
                                残存リスクがステークホルダーに共有・合意済み
                            </div>
                        </div>
                    </div>
                </div>

                <div className="code-block mt-3">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang">受入テスト計画書（テンプレート構成）</span>
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"cm\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>\n<span class=\"hl-t\">受入テスト計画書 v1.0</span>\nプロジェクト名: ECサイトリニューアル  担当: QAリード 田中太郎\n期間: 2025-11-01 〜 2025-11-15   承認者: PO 山田花子\n<span class=\"cm\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>\n\n<span class=\"hl-y\">1. テストスコープ</span>\n   対象: 新購入フロー・会員ログイン・注文管理・レコメンド\n   除外: 管理画面（Phase 2 で対応）\n\n<span class=\"hl-y\">2. 参加者</span>\n   UATユーザー: 購買担当 × 5名、マーケ担当 × 2名\n   技術サポート: 開発 × 2名、インフラ × 1名\n\n<span class=\"hl-y\">3. テスト環境</span>\n   環境: staging.example.com（本番同等）\n   データ: 本番データの匿名化コピー（直近3ヶ月分）\n\n<span class=\"hl-y\">4. 入口基準</span>\n   ✓ システムテスト完了 (合格率 100%)\n   ✓ Critical/High 未解決 0件\n\n<span class=\"hl-y\">5. 出口基準</span>\n   ✓ テストケース実行率 100%\n   ✓ Critical 未解決 0件 / High 未解決 0件\n   ✓ PO による正式サインオフ完了\n\n<span class=\"hl-y\">6. リスク対応</span>\n   リスク: テスト期間中のシステム変更\n   対応: フリーズウィンドウ（テスト開始前日〜終了まで）の適用" }} />
                </div>
                <p className="text-sm mt-1">
                    参照:
                    <a
                        href="https://www.functionize.com/automated-testing/acceptance-testing-a-step-by-step-guide"
                        className="ulink"
                        target="_blank"
                        >functionize.com — Acceptance Testing Step-by-Step Guide (Jun 2025)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 8: ATDD
════════════════════════════════════════ */}
            <section id="atdd">
                <div className="section-header">
                    <span className="section-header-num">STEP 08 — ATDD: ACCEPTANCE TEST-DRIVEN DEVELOPMENT</span>
                    <h2>ATDD — 受入テスト駆動開発</h2>
                    <div className="terra-rule"></div>
                    <p>
                        ATDDはコードを書く前に受入基準からテストを定義する開発手法。PO・開発者・テスターが協力して受入条件を明確にし、それをすべての実装の出発点とします。
                    </p>
                </div>

                {/* ATDD Cycle */}
                <div className="atdd-cycle">
                    <div className="atdd-node n-red">
                        <span style={{fontSize: "1.2rem", marginBottom: "4px"}}>❌</span>
                        <strong>失敗する受入テスト</strong>
                        <span style={{fontSize: "10px", fontWeight: "400", marginTop: "2px"}}
                            >を先に書く</span
                        >
                    </div>
                    <div className="atdd-arrow">→</div>
                    <div className="atdd-node n-green">
                        <span style={{fontSize: "1.2rem", marginBottom: "4px"}}>✅</span>
                        <strong>実装してテストを通す</strong>
                        <span style={{fontSize: "10px", fontWeight: "400", marginTop: "2px"}}
                            >最小限のコード</span
                        >
                    </div>
                    <div className="atdd-arrow">→</div>
                    <div className="atdd-node n-blue">
                        <span style={{fontSize: "1.2rem", marginBottom: "4px"}}>🔄</span>
                        <strong>リファクタリング</strong>
                        <span style={{fontSize: "10px", fontWeight: "400", marginTop: "2px"}}
                            >テストを維持しながら</span
                        >
                    </div>
                    <div className="atdd-arrow">↩</div>
                </div>

                <div className="grid-2 mt-3">
                    <div>
                        <div className="callout c-sage">
                            <strong>ATDDの3つの参加者（スリーアミーゴス）：</strong><br />
                            <strong>Product Owner（PO）：</strong
                            >ビジネス価値とユーザーニーズを代表。受入基準の最終権限者。<br />
                            <strong>開発者：</strong
                            >実装可能性の観点から受入基準を検討。技術的な制約を共有。<br />
                            <strong>テスター：</strong
                            >テスト観点からエッジケース・ネガティブシナリオを追加。<br /><br />
                            この3者が「スリーアミーゴスセッション」で受入基準を一緒に定義することで、
                            要件の解釈ミスを開発開始前に排除できます。
                        </div>
                    </div>
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                        >
                            ATDD vs TDD vs BDD
                        </h3>
                        <div className="comp-box">
                            <div className="comp-row header">
                                <div className="comp-cell">手法</div>
                                <div className="comp-cell">主な主体</div>
                                <div className="comp-cell">テストの粒度</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>TDD</strong></div>
                                <div className="comp-cell">開発者</div>
                                <div className="comp-cell">ユニットレベル（関数）</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>BDD</strong></div>
                                <div className="comp-cell">開発者 + テスター</div>
                                <div className="comp-cell">振る舞い（シナリオ）</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>ATDD</strong></div>
                                <div className="comp-cell">PO + 開発 + テスト</div>
                                <div className="comp-cell">受入基準（ビジネス）</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://www.testingxperts.com/blog/acceptance-test-driven-development-atdd/"
                        className="ulink"
                        target="_blank"
                        >testingxperts.com — ATDD Complete Guide (Jan 2026)</a
                    >
                    <a
                        href="https://testrigor.com/blog/how-to-automate-acceptance-testing/"
                        className="ulink"
                        target="_blank"
                        >testrigor.com — Acceptance Testing Automation (Jan 2026)</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 9: BDD / GHERKIN
════════════════════════════════════════ */}
            <section id="bdd">
                <div className="section-header">
                    <span className="section-header-num">STEP 09 — BDD & GHERKIN: LIVING DOCUMENTATION</span>
                    <h2>BDD / Gherkin — 受入テストの「共通言語」</h2>
                    <div className="terra-rule"></div>
                    <p>
                        ビヘイビア駆動開発（BDD）は、Given/When/Then（Gherkin）記法を使って、技術者と非技術者が共通の言語でシステムの振る舞いを記述する手法です。受入テストの自動化と人間の読解性を両立させます。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                        >
                            Gherkin記法 — 完全な記述例
                        </h3>
                        <div className="gherkin">
                            <span className="gh-feat">Feature:</span> オンラインショッピングカート<br />
                            &nbsp;&nbsp;<span className="gh-com"
                                ># ユーザーが商品をカートに追加・購入できることを確認する</span
                            ><br /><br />

                            &nbsp;&nbsp;<span className="gh-scen">Background:</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-given">Given</span>
                            ユーザーがログイン済みである<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-given">And</span>
                            商品一覧ページを開いている<br /><br />

                            &nbsp;&nbsp;<span className="gh-scen">Scenario:</span>
                            在庫あり商品をカートに追加する<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-given">Given</span> 商品
                            <span className="gh-param">"ワイヤレスイヤホン"</span> が在庫
                            <span className="gh-param">10個</span> 存在する<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-when">When</span>
                            <span className="gh-param">"カートに追加"</span> ボタンをクリックする<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-then">Then</span>
                            カートの商品数が <span className="gh-param">1</span> 増える<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-then">And</span>
                            <span className="gh-param">"カートに追加しました"</span>
                            の通知が表示される<br /><br />

                            &nbsp;&nbsp;<span className="gh-scen">Scenario:</span>
                            在庫切れ商品の追加を試みる<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-given">Given</span> 商品
                            <span className="gh-param">"限定モデル"</span> が在庫
                            <span className="gh-param">0個</span> である<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-when">When</span>
                            商品ページを表示する<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-then">Then</span>
                            <span className="gh-param">"在庫切れ"</span> と表示され
                            カートボタンが無効化される<br /><br />

                            &nbsp;&nbsp;<span className="gh-scen">Scenario Outline:</span>
                            複数の数量でのカート追加<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-given">Given</span> 商品の数量を
                            <span className="gh-param">&lt;数量&gt;</span> に設定する<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-when">When</span>
                            カートに追加する<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="gh-then">Then</span> 合計金額が
                            <span className="gh-param">&lt;期待金額&gt;</span> と表示される<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Examples:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 数量 | 期待金額 |<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 1 | ¥10,000 |<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 3 | ¥30,000 |
                        </div>
                    </div>
                    <div>
                        <div className="code-block mt-1">
                            <div className="code-header">
                                <div className="code-dots"><span></span><span></span><span></span></div>
                                <span className="code-lang"
                                    >PYTHON / pytest-bdd — ステップ定義の実装</span
                                >
                            </div>
                            <pre dangerouslySetInnerHTML={{ __html: "<span class=\"kw\">from</span> pytest_bdd <span class=\"kw\">import</span> given, when, then, scenarios\n<span class=\"kw\">from</span> app.cart <span class=\"kw\">import</span> Cart, Product\n\n<span class=\"cm\"># Featureファイルを自動的に紐付け</span>\n<span class=\"fn\">scenarios</span>(<span class=\"str\">\"features/shopping_cart.feature\"</span>)\n\n<span class=\"dec\">@given</span>(<span class=\"str\">\"商品 {name} が在庫 {qty:d} 個 存在する\"</span>)\n<span class=\"kw\">def</span> <span class=\"fn\">product_in_stock</span>(name, qty, product_repo):\n    product = <span class=\"cls\">Product</span>(name=name, stock=qty)\n    product_repo.<span class=\"fn\">save</span>(product)\n\n<span class=\"dec\">@when</span>(<span class=\"str\">'\"カートに追加\" ボタンをクリックする'</span>)\n<span class=\"kw\">def</span> <span class=\"fn\">click_add_to_cart</span>(cart, current_product):\n    cart.<span class=\"fn\">add</span>(current_product)\n\n<span class=\"dec\">@then</span>(<span class=\"str\">\"カートの商品数が {expected:d} 増える\"</span>)\n<span class=\"kw\">def</span> <span class=\"fn\">cart_count_increases</span>(cart, expected, prev_count):\n    <span class=\"kw\">assert</span> cart.count == prev_count + expected\n\n<span class=\"dec\">@then</span>(<span class=\"str\">'\"カートに追加しました\" の通知が表示される'</span>)\n<span class=\"kw\">def</span> <span class=\"fn\">success_notification_shown</span>(page):\n    notification = page.<span class=\"fn\">find</span>(<span class=\"str\">\"[data-testid='cart-notification']\"</span>)\n    <span class=\"kw\">assert</span> notification.<span class=\"fn\">is_visible</span>()\n    <span class=\"kw\">assert</span> <span class=\"str\">\"カートに追加しました\"</span> <span class=\"kw\">in</span> notification.text" }} />
                        </div>
                        <p className="text-sm mt-1">
                            参照:
                            <a
                                href="https://www.testrail.com/blog/bdd-automation/"
                                className="ulink"
                                target="_blank"
                                >testrail.com — BDD Automation Guide (Jul 2025)</a
                            >
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 10: DEFECT MANAGEMENT IN UAT
════════════════════════════════════════ */}
            <section id="defect">
                <div className="section-header">
                    <span className="section-header-num">STEP 10 — DEFECT MANAGEMENT IN ACCEPTANCE TESTING</span>
                    <h2>受入テストにおける欠陥管理</h2>
                    <div className="terra-rule"></div>
                    <p>
                        受入テストで発見される欠陥はビジネスインパクトの観点で優先度付けします。技術的な深刻度よりも「業務への影響度」が判断基準です。
                    </p>
                </div>

                {/* Severity levels */}
                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: "600", marginBottom: "0.85rem", color: "var(--ink)"}}
                >
                    UAT欠陥の優先度分類
                </h3>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>優先度</th>
                                <th>定義</th>
                                <th>UAT判断への影響</th>
                                <th>対応期限</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong style={{color: "var(--err)"}}>🔴 Critical</strong></td>
                                <td>
                                    システムがクラッシュ・データロス・主要業務フローが完全に機能しない
                                </td>
                                <td className="r">UAT続行不可。即座にNo-Goを宣言</td>
                                <td>24時間以内に修正必須</td>
                            </tr>
                            <tr>
                                <td><strong style={{color: "var(--terra2)"}}>🟠 High</strong></td>
                                <td>主要機能が部分的に機能しない。回避策が存在しない</td>
                                <td className="w">Go判断はブロック。修正後に再テスト必須</td>
                                <td>3営業日以内</td>
                            </tr>
                            <tr>
                                <td><strong style={{color: "var(--color-accent-yellow)"}}>🟡 Medium</strong></td>
                                <td>機能は動作するが回避策が必要。ユーザビリティに影響</td>
                                <td>合意数以下ならGo可能（条件付き承認）</td>
                                <td>次リリースまで</td>
                            </tr>
                            <tr>
                                <td><strong style={{color: "var(--color-accent-green)"}}>🟢 Low</strong></td>
                                <td>軽微なUI・表示崩れ・誤字。業務には影響しない</td>
                                <td className="g">Goには影響しない。バックログ化</td>
                                <td>バックログ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Defect lifecycle */}
                <h3
                    className="mt-3"
                    style={{fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                >
                    受入テスト欠陥のライフサイクル
                </h3>
                <div className="defect-flow">
                    <div className="d-stage">新規（New）</div>
                    <div className="d-arrow">→</div>
                    <div className="d-stage">割当済（Assigned）</div>
                    <div className="d-arrow">→</div>
                    <div className="d-stage">作業中（In Progress）</div>
                    <div className="d-arrow">→</div>
                    <div className="d-stage fixed">修正済（Fixed）</div>
                    <div className="d-arrow">→</div>
                    <div className="d-stage">UAT再テスト</div>
                    <div className="d-arrow">→</div>
                    <div className="d-stage closed">クローズ（Closed）</div>
                </div>

                <div className="code-block mt-3">
                    <div className="code-header">
                        <div className="code-dots"><span></span><span></span><span></span></div>
                        <span className="code-lang">優れた欠陥レポートの記述例（ISTQB推奨形式）</span>
                    </div>
                    <pre dangerouslySetInnerHTML={{ __html: "<span class=\"hl-t\">欠陥ID:</span> UAT-2025-0045\n<span class=\"hl-t\">タイトル:</span> 注文確認メールがGmail宛には届かない\n\n<span class=\"hl-y\">優先度:</span> High  <span class=\"hl-y\">深刻度:</span> Major  <span class=\"hl-y\">担当:</span> 山田開発者\n\n<span class=\"hl-t\">再現手順:</span>\n  1. Gmailアドレスで新規ユーザー登録\n  2. テスト商品を購入完了\n  3. 注文確認ページで \"注文ID: #12345\" を確認\n  4. Gmail受信トレイ・迷惑メールフォルダを確認\n\n<span class=\"hl-t\">期待結果:</span>\n  注文から5分以内に注文確認メールが届く\n\n<span class=\"hl-t\">実際の結果:</span>\n  メールが一切届かない（Outlook・Yahoo宛は正常届く）\n\n<span class=\"hl-t\">影響:</span>\n  Gmail ユーザー（全顧客の約60%）が注文確認を受け取れない\n  → ビジネスインパクト: 高\n\n<span class=\"hl-t\">環境:</span>\n  staging.example.com / Chrome 128 / Windows 11\n  テスト実行者: 購買担当 田中様 / 日時: 2025-11-05 14:32" }} />
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 11: AGILE UAT
════════════════════════════════════════ */}
            <section id="agile">
                <div className="section-header">
                    <span className="section-header-num">STEP 11 — ACCEPTANCE TESTING IN AGILE</span>
                    <h2>アジャイル開発における受入テスト</h2>
                    <div className="terra-rule"></div>
                    <p>
                        アジャイル開発では受入テストは「最後の1フェーズ」ではなく、各スプリントに組み込まれた継続的なプロセスです。ISTQBはコラボレーションベースのテストアプローチとして定義しています。
                    </p>
                </div>

                <div className="grid-2">
                    <div>
                        <h3
                            style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                        >
                            ウォーターフォール vs アジャイルの受入テスト
                        </h3>
                        <div className="comp-box">
                            <div className="comp-row header">
                                <div className="comp-cell">観点</div>
                                <div className="comp-cell">ウォーターフォール</div>
                                <div className="comp-cell">アジャイル</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>タイミング</strong></div>
                                <div className="comp-cell">開発完了後の最終フェーズ</div>
                                <div className="comp-cell">各スプリントの終わりに継続実施</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>基準の定義</strong></div>
                                <div className="comp-cell">プロジェクト開始時に固定</div>
                                <div className="comp-cell">
                                    スプリント計画時にユーザーストーリーから定義
                                </div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>フィードバック</strong></div>
                                <div className="comp-cell">数ヶ月後</div>
                                <div className="comp-cell">2週間ごと（スプリントレビュー）</div>
                            </div>
                            <div className="comp-row">
                                <div className="comp-cell"><strong>関与者</strong></div>
                                <div className="comp-cell">最終段階で顧客が関与</div>
                                <div className="comp-cell">PO・ユーザーが継続的に関与</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="step-list">
                            <div className="step-item">
                                <div className="step-num-circle">1</div>
                                <div className="step-content">
                                    <h4>スプリントプランニング</h4>
                                    <p>
                                        ユーザーストーリーの受入基準をGiven/When/Thenで定義。PO・開発・テスターが協議してDoD（完了の定義）に含める。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">2</div>
                                <div className="step-content">
                                    <h4>スプリント中の継続テスト</h4>
                                    <p>
                                        開発が完了した機能を随時テスト。スプリント後半の「テスト詰め込み」を防ぐシフトレフトアプローチ。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">3</div>
                                <div className="step-content">
                                    <h4>スプリントレビュー（デモ）</h4>
                                    <p>
                                        完成したストーリーをPO・ステークホルダーにデモ。受入基準を満たすかをその場で確認。非公式のUATとして機能する。
                                    </p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-num-circle">4</div>
                                <div className="step-content">
                                    <h4>リリース前のフォーマルUAT</h4>
                                    <p>
                                        複数スプリントの成果物をまとめて本格的なUAT実施。アジャイルでも公式サインオフが必要な場合はここで実施する。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="callout c-terra mt-3">
                    <strong
                        >ISTQB CTFL v4.0 — コラボレーションベースのテストアプローチ（Section
                        4.5）：</strong
                    >
                    CTFLはコラボレーションベースのテストとして「ユーザーストーリーの作成（User Story
                    Writing）」・
                    「受入基準の定義」・「ATDD（受入テスト駆動開発）」の3つを挙げています。
                    特にユーザーストーリーは「As a [ユーザー], I want [機能], So that
                    [価値]」の形式で
                    ビジネス価値を明確に表現し、受入基準と直接結びつけることを推奨しています。
                    <br /><a
                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                        className="ulink"
                        target="_blank"
                        >istqb.org — CTFL v4.0 Section 4.5 Collaboration-based Test Approaches</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     STEP 12: TOOLS
════════════════════════════════════════ */}
            <section id="tools">
                <div className="section-header">
                    <span className="section-header-num">STEP 12 — TOOLS & PLATFORMS 2025</span>
                    <h2>受入テストのツール全景（2025年）</h2>
                    <div className="terra-rule"></div>
                    <p>
                        受入テストの実施・管理・自動化に使用される代表的なツールを目的別に整理します。
                    </p>
                </div>

                <h3
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                >
                    テスト管理・欠陥追跡
                </h3>
                <div className="tool-grid">
                    <div className="tool-card">
                        <div className="tool-name">📊 TestRail</div>
                        <div className="tool-desc">
                            テストケース・実行・結果を一元管理。Jira統合でトレーサビリティを確保。UAT承認の記録に最適。
                        </div>
                        <span className="badge b-terra">テスト管理No.1</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">📋 Jira + Zephyr</div>
                        <div className="tool-desc">
                            Atlassianエコシステムに統合。ユーザーストーリーから直接テストケースを紐付け。アジャイルチームに最適。
                        </div>
                        <span className="badge badge-unit">Atlassian標準</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🪣 Azure DevOps</div>
                        <div className="tool-desc">
                            Microsoftエコシステム。テスト計画・実行・レポートをCI/CDと統合。エンタープライズ向け。
                        </div>
                        <span className="badge b-info">Enterprise</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">📌 Marker.io</div>
                        <div className="tool-desc">
                            画面上でポイント&クリックでバグ報告。非技術者ユーザーが簡単にUATフィードバックを提供できる。
                        </div>
                        <span className="badge b-sage">UAT特化</span>
                    </div>
                </div>

                <h3
                    className="mt-3"
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                >
                    BDD / ATDD 自動化
                </h3>
                <div className="tool-grid">
                    <div className="tool-card">
                        <div className="tool-name">🥒 Cucumber</div>
                        <div className="tool-desc">
                            Gherkin記法を使ったBDD/ATDDの代表ツール。JavaScript・Java・Ruby・Python対応。受入テストの標準自動化基盤。
                        </div>
                        <span className="badge b-sage">BDD標準</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🔬 SpecFlow (.NET)</div>
                        <div className="tool-desc">
                            .NET向けのCucumber相当ツール。C#でステップ定義を記述。Visual
                            Studioと密に統合。
                        </div>
                        <span className="badge b-info">.NET標準</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🎭 Playwright</div>
                        <div className="tool-desc">
                            UAT自動化のE2Eテスト。BDDフレームワークと組み合わせてフルスタックの受入テスト自動化が可能。
                        </div>
                        <span className="badge b-terra">E2E最推奨</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">📚 FitNesse</div>
                        <div className="tool-desc">
                            Wiki形式でテストテーブルを記述。非技術者が直接受入テストを設計できる。ATDDに特化。
                        </div>
                        <span className="badge b-gold">ATDD特化</span>
                    </div>
                </div>

                <h3
                    className="mt-3"
                    style={{fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", color: "var(--ink)"}}
                >
                    ユーザーフィードバック収集
                </h3>
                <div className="tool-grid">
                    <div className="tool-card">
                        <div className="tool-name">👥 UserTesting</div>
                        <div className="tool-desc">
                            リアルユーザーの操作動画・フィードバックをリアルタイムで収集。ベータテスト・リモートUATに最適。
                        </div>
                        <span className="badge badge-unit">ユーザーテスト</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">📊 Hotjar</div>
                        <div className="tool-desc">
                            ヒートマップ・セッション録画・フィードバックウィジェット。ユーザー行動を可視化してUATの質を向上。
                        </div>
                        <span className="badge b-warn">行動分析</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">🤖 Testsigma</div>
                        <div className="tool-desc">
                            AI駆動のノーコードテスト自動化。自然言語でテストケースを作成。Jira/Figmaからテストを自動生成。
                        </div>
                        <span className="badge b-sage">AI自動化</span>
                    </div>
                    <div className="tool-card">
                        <div className="tool-name">☁️ aqua cloud</div>
                        <div className="tool-desc">
                            AI
                            Copilotでテストケースを自動生成。Jira・Selenium統合。UAT管理から報告まで一元化。
                        </div>
                        <span className="badge b-info">AI管理</span>
                    </div>
                </div>
                <p className="text-sm mt-2">
                    参照:
                    <a
                        href="https://marker.io/blog/user-acceptance-testing-tools"
                        className="ulink"
                        target="_blank"
                        >marker.io — 18 Best UAT Tools (Feb 2026)</a
                    >
                    <a
                        href="https://testsigma.com/user-acceptance-testing-tools"
                        className="ulink"
                        target="_blank"
                        >testsigma.com — UAT Testing Tools 2025</a
                    >
                    <a
                        href="https://aqua-cloud.io/user-acceptance-testing-uat-automation/"
                        className="ulink"
                        target="_blank"
                        >aqua-cloud.io — UAT Automation Best Strategies</a
                    >
                </p>
            </section>

            {/* ════════════════════════════════════════
     STEP 13: BEST PRACTICES
════════════════════════════════════════ */}
            <section id="bestpractices">
                <div className="section-header">
                    <span className="section-header-num">STEP 13 — BEST PRACTICES 2025</span>
                    <h2>受入テストのベストプラクティス</h2>
                    <div className="terra-rule"></div>
                    <p>
                        世界のQA組織と2025年の業界調査から導き出された受入テスト成功の鍵となるプラクティスです。
                    </p>
                </div>

                <div className="card-grid">
                    <div className="card" style={{borderLeft: "3px solid var(--terra)"}}>
                        <span className="card-icon">📅</span>
                        <h3>早期からユーザーを巻き込む</h3>
                        <p>
                            受入テストは「最後に顧客を呼ぶ」ではなく、要件定義段階からエンドユーザーを参加させる。スリーアミーゴスセッションで基準を共同作成する。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--terra)"}}>
                        <span className="card-icon">📊</span>
                        <h3>本番同等のデータ・環境を使う</h3>
                        <p>
                            「それはステージング環境だから...」という言い訳をなくす。本番データを匿名化してUAT環境にインポートし、リアルな条件でテストする。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--terra)"}}>
                        <span className="card-icon">🎯</span>
                        <h3>業務シナリオ中心のテストを設計</h3>
                        <p>
                            個別機能のテストではなく「月次決算処理の全フロー」「新規顧客のオンボーディング完了」など実際の業務シナリオを単位にテスト設計する。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--terra)"}}>
                        <span className="card-icon">🤝</span>
                        <h3>明確なサインオフ基準を事前合意</h3>
                        <p>
                            「何が揃えばGoか」を事前に定量的に合意する。「重大バグゼロ・高優先度バグ3件以下・テスト実行率95%以上」など具体的な数値基準を設定。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--terra)"}}>
                        <span className="card-icon">🔄</span>
                        <h3>成功した受入テストを回帰テストに転換</h3>
                        <p>
                            UAT合格後のシナリオをそのまま自動回帰テストに変換する。将来のリリースで同じ機能が壊れていないかを自動的に確認できる資産に変える。
                        </p>
                    </div>
                    <div className="card" style={{borderLeft: "3px solid var(--terra)"}}>
                        <span className="card-icon">🤖</span>
                        <h3>AIを活用してテスト生成・分析を加速</h3>
                        <p>
                            2025年のWorld Quality
                            Reportでは90%の組織がAI/GenAIを品質エンジニアリングに活用中。テストケース生成・欠陥予測・リスク分析をAIで自動化する。
                        </p>
                    </div>
                </div>

                {/* 2025 trends */}
                <div className="callout c-slate mt-3">
                    <strong>2025年の受入テストトレンド（World Quality Report 2025より）：</strong
                    ><br />
                    ✦
                    90%の組織がGenAIを品質エンジニアリングに活用中（ただし15%のみがエンタープライズスケールで展開）<br />
                    ✦ Gartnerによると2028年までに90%のエンジニアがAIコードアシスタントを使用予定<br />
                    ✦ AIによるユーザーストーリーからのテストケース自動生成が急速に普及<br />
                    ✦
                    リモートUATの完全デジタル化（バグハンティングプラットフォーム・ビデオフィードバック）が標準化<br />
                    <a
                        href="https://katalon.com/resources-center/blog/user-acceptance-testing"
                        className="ulink"
                        target="_blank"
                        >katalon.com — UAT Process & 2026 Best Practices</a
                    >
                </div>
            </section>

            {/* ════════════════════════════════════════
     REFERENCES
════════════════════════════════════════ */}
            <section id="references">
                <div className="section-header">
                    <span className="section-header-num">APPENDIX — COMPLETE REFERENCE URLS</span>
                    <h2>全参照URL一覧</h2>
                    <div className="terra-rule"></div>
                    <p>本ガイドで引用した全ての参照元URLです。最新情報の確認にご活用ください。</p>
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>カテゴリ</th>
                                <th>タイトル</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>ISTQB公式サイト</td>
                                <td>
                                    <a href="https://istqb.org/" className="ref-url" target="_blank"
                                        >https://istqb.org/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CTFL v4.0 詳細ページ</td>
                                <td>
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CTFL v4.0 リリースアナウンス</td>
                                <td>
                                    <a
                                        href="https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/istqb-releases-certified-tester-foundation-level-v4-0-ctfl/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>CTFL v4.0.1 シラバス PDF</td>
                                <td>
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>ISTQBグロッサリー（用語集）</td>
                                <td>
                                    <a
                                        href="https://glossary.istqb.org/en_US/search?term="
                                        className="ref-url"
                                        target="_blank"
                                        >https://glossary.istqb.org/en_US/search?term=</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>JSTQB（日本語版）</td>
                                <td>
                                    <a href="https://jstqb.jp/" className="ref-url" target="_blank"
                                        >https://jstqb.jp/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>ISTQB CTFL-AT (Agile Tester)</td>
                                <td>
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB公式</td>
                                <td>ASTQB — Acceptance Testing Certification</td>
                                <td>
                                    <a
                                        href="https://astqb.org/certifications/acceptance-testing-certification/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://astqb.org/certifications/acceptance-testing-certification/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ISTQB学習</td>
                                <td>mastersoftwaretesting.com — CTFL Complete Guide (Jan 2026)</td>
                                <td>
                                    <a
                                        href="https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-complete-guide"
                                        className="ref-url"
                                        target="_blank"
                                        >https://mastersoftwaretesting.com/certification-guides/istqb/ctfl/ctfl-complete-guide</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>受入テスト全般</td>
                                <td>
                                    mastersoftwaretesting.com — Acceptance Testing Guide (Jan 2026)
                                </td>
                                <td>
                                    <a
                                        href="https://mastersoftwaretesting.com/testing-fundamentals/types-of-testing/functional-testing/acceptance-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://mastersoftwaretesting.com/testing-fundamentals/types-of-testing/functional-testing/acceptance-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>受入テスト全般</td>
                                <td>browserstack.com — What is Acceptance Testing (Jun 2025)</td>
                                <td>
                                    <a
                                        href="https://www.browserstack.com/guide/acceptance-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.browserstack.com/guide/acceptance-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>受入テスト全般</td>
                                <td>virtuosoqa.com — Acceptance Testing Complete Guide</td>
                                <td>
                                    <a
                                        href="https://www.virtuosoqa.com/testing-guides/what-is-acceptance-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.virtuosoqa.com/testing-guides/what-is-acceptance-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>受入テスト全般</td>
                                <td>Wikipedia — Acceptance Testing (Dec 2025)</td>
                                <td>
                                    <a
                                        href="https://en.wikipedia.org/wiki/Acceptance_testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://en.wikipedia.org/wiki/Acceptance_testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>受入テスト全般</td>
                                <td>bairesdev.com — Acceptance Testing Types & Best Practices</td>
                                <td>
                                    <a
                                        href="https://www.bairesdev.com/blog/acceptance-testing-in-software-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.bairesdev.com/blog/acceptance-testing-in-software-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>UAT種類</td>
                                <td>marker.io — 6 Types of User Acceptance Testing (2025)</td>
                                <td>
                                    <a
                                        href="https://marker.io/blog/user-acceptance-testing-types"
                                        className="ref-url"
                                        target="_blank"
                                        >https://marker.io/blog/user-acceptance-testing-types</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>UAT種類</td>
                                <td>usersnap.com — UAT Types & Frameworks (Jul 2025)</td>
                                <td>
                                    <a
                                        href="https://usersnap.com/blog/types-user-acceptance-tests-frameworks/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://usersnap.com/blog/types-user-acceptance-tests-frameworks/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>UAT種類</td>
                                <td>geeksforgeeks.org — UAT Types (Jul 2025)</td>
                                <td>
                                    <a
                                        href="https://www.geeksforgeeks.org/software-testing/user-acceptance-testing-uat/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.geeksforgeeks.org/software-testing/user-acceptance-testing-uat/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>UAT実践</td>
                                <td>bugherd.com — UAT Complete 2025 Guide</td>
                                <td>
                                    <a
                                        href="https://bugherd.com/blog/user-acceptance-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://bugherd.com/blog/user-acceptance-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>UAT実践</td>
                                <td>katalon.com — UAT Process & Best Practices</td>
                                <td>
                                    <a
                                        href="https://katalon.com/resources-center/blog/user-acceptance-testing"
                                        className="ref-url"
                                        target="_blank"
                                        >https://katalon.com/resources-center/blog/user-acceptance-testing</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>UAT実践</td>
                                <td>
                                    functionize.com — Acceptance Testing Step-by-Step (Jun 2025)
                                </td>
                                <td>
                                    <a
                                        href="https://www.functionize.com/automated-testing/acceptance-testing-a-step-by-step-guide"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.functionize.com/automated-testing/acceptance-testing-a-step-by-step-guide</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>UAT実践</td>
                                <td>fullscale.io — Acceptance Testing Best Practices</td>
                                <td>
                                    <a
                                        href="https://fullscale.io/blog/acceptance-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://fullscale.io/blog/acceptance-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>受入基準・BDD</td>
                                <td>testrail.com — Acceptance Criteria in Agile (Jul 2025)</td>
                                <td>
                                    <a
                                        href="https://www.testrail.com/blog/acceptance-criteria-agile/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testrail.com/blog/acceptance-criteria-agile/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>受入基準・BDD</td>
                                <td>testrail.com — UAT: Checklist, Types and Examples</td>
                                <td>
                                    <a
                                        href="https://www.testrail.com/blog/user-acceptance-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testrail.com/blog/user-acceptance-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>受入基準・BDD</td>
                                <td>testrail.com — BDD Automation Guide (Jul 2025)</td>
                                <td>
                                    <a
                                        href="https://www.testrail.com/blog/bdd-automation/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testrail.com/blog/bdd-automation/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ATDD</td>
                                <td>testingxperts.com — ATDD Complete Guide (Jan 2026)</td>
                                <td>
                                    <a
                                        href="https://www.testingxperts.com/blog/acceptance-test-driven-development-atdd/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://www.testingxperts.com/blog/acceptance-test-driven-development-atdd/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ATDD</td>
                                <td>
                                    testrigor.com — How to Automate Acceptance Testing (Jan 2026)
                                </td>
                                <td>
                                    <a
                                        href="https://testrigor.com/blog/how-to-automate-acceptance-testing/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://testrigor.com/blog/how-to-automate-acceptance-testing/</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール</td>
                                <td>marker.io — 18 Best UAT Tools (Feb 2026)</td>
                                <td>
                                    <a
                                        href="https://marker.io/blog/user-acceptance-testing-tools"
                                        className="ref-url"
                                        target="_blank"
                                        >https://marker.io/blog/user-acceptance-testing-tools</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール</td>
                                <td>testsigma.com — UAT Testing Tools 2025</td>
                                <td>
                                    <a
                                        href="https://testsigma.com/user-acceptance-testing-tools"
                                        className="ref-url"
                                        target="_blank"
                                        >https://testsigma.com/user-acceptance-testing-tools</a
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>ツール</td>
                                <td>aqua-cloud.io — UAT Automation Best Strategies (Dec 2025)</td>
                                <td>
                                    <a
                                        href="https://aqua-cloud.io/user-acceptance-testing-uat-automation/"
                                        className="ref-url"
                                        target="_blank"
                                        >https://aqua-cloud.io/user-acceptance-testing-uat-automation/</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            </main>

            <footer>
                <p>
                    受入テスト完全ガイド 2025 &nbsp;|&nbsp;
                    <a
                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >ISTQB CTFL v4.0</a>
                    Section 2.2.4 / 4.5 準拠
                </p>
                <p style={{ marginTop: "0.4rem", fontSize: "10px", color: "var(--ink4)" }}>
                    © 2025 — Acceptance testing is not the last step. It is the first proof that
                    software delivers value.
                </p>
            </footer>
        </div>
    );
}
