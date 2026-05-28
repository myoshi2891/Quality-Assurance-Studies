import React from 'react';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './istqb-ctal-tta.css';

export default function IstqbCtalTtaCompleteGuide() {
    return (
        <>
            <NavBar />

            <div className="istqb-ctal-tta-page">
                <section className="tta-hero" id="overview">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="tta-hero-badge">ISTQB® ADVANCED LEVEL 2025</div>
                    <h1>Technical Test Analyst<br />完全ガイド</h1>
                    <p className="tta-hero-subtitle">
                        CTAL-TTA v4.0 準拠 | ホワイトボックス・非機能テスト・静的動的分析の専門知識
                    </p>
                    <div className="tta-hero-meta">
                        <div className="tta-meta-chip">
                            <span className="label">問題数</span><span className="value">45問</span>
                        </div>
                        <div className="tta-meta-chip">
                            <span className="label">合格点</span><span className="value">51/78点</span>
                        </div>
                        <div className="tta-meta-chip">
                            <span className="label">試験時間</span><span className="value">120分</span>
                        </div>
                        <div className="tta-meta-chip">
                            <span className="label">前提資格</span><span className="value">CTFL 必須</span>
                        </div>
                        <div className="tta-meta-chip">
                            <span className="label">バージョン</span><span className="value">v4.0 (2021)</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[960px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    <a className="card hover:-translate-y-1 block transition-all" href="#ch1">
                        <div className="font-mono text-[0.7rem] text-accent-green tracking-widest mb-1">CHAPTER 1</div>
                        <div className="font-display text-[0.9rem] font-semibold text-text-primary leading-snug">リスクベーステストにおける TTAのタスク</div>
                    </a>
                    <a className="card hover:-translate-y-1 block transition-all" href="#ch2">
                        <div className="font-mono text-[0.7rem] text-accent-green tracking-widest mb-1">CHAPTER 2 ★最重要</div>
                        <div className="font-display text-[0.9rem] font-semibold text-text-primary leading-snug">ホワイトボックステスト技法</div>
                    </a>
                    <a className="card hover:-translate-y-1 block transition-all" href="#ch3">
                        <div className="font-mono text-[0.7rem] text-accent-green tracking-widest mb-1">CHAPTER 3</div>
                        <div className="font-display text-[0.9rem] font-semibold text-text-primary leading-snug">静的・動的分析</div>
                    </a>
                    <a className="card hover:-translate-y-1 block transition-all" href="#ch4">
                        <div className="font-mono text-[0.7rem] text-accent-green tracking-widest mb-1">CHAPTER 4 ★最重要</div>
                        <div className="font-display text-[0.9rem] font-semibold text-text-primary leading-snug">技術的テストのための品質特性</div>
                    </a>
                    <a className="card hover:-translate-y-1 block transition-all" href="#ch5">
                        <div className="font-mono text-[0.7rem] text-accent-green tracking-widest mb-1">CHAPTER 5</div>
                        <div className="font-display text-[0.9rem] font-semibold text-text-primary leading-snug">レビュー</div>
                    </a>
                    <a className="card hover:-translate-y-1 block transition-all" href="#ch6">
                        <div className="font-mono text-[0.7rem] text-accent-green tracking-widest mb-1">CHAPTER 6</div>
                        <div className="font-display text-[0.9rem] font-semibold text-text-primary leading-snug">テストツールと自動化</div>
                    </a>
                </div>
            </div>

            <div className="max-w-[960px] mx-auto px-6 relative z-10">
                <div className="tta-exam-grid">
                    <div className="tta-exam-card">
                        <div className="tta-exam-ch">CHAPTER 1</div>
                        <div className="tta-exam-name">リスクベーステスト</div>
                        <div className="tta-exam-stars">★★★</div>
                        <div className="tta-exam-points">~4問</div>
                        <div className="tta-exam-sub">配点 約4%</div>
                    </div>
                    <div className="tta-exam-card">
                        <div className="tta-exam-ch">CHAPTER 2 ★</div>
                        <div className="tta-exam-name">ホワイトボックス技法</div>
                        <div className="tta-exam-stars">★★★★★</div>
                        <div className="tta-exam-points">~15問</div>
                        <div className="tta-exam-sub">配点 約25% | 最重要章</div>
                    </div>
                    <div className="tta-exam-card">
                        <div className="tta-exam-ch">CHAPTER 3</div>
                        <div className="tta-exam-name">静的・動的分析</div>
                        <div className="tta-exam-stars">★★★★</div>
                        <div className="tta-exam-points">~9問</div>
                        <div className="tta-exam-sub">配点 約15%</div>
                    </div>
                    <div className="tta-exam-card">
                        <div className="tta-exam-ch">CHAPTER 4 ★</div>
                        <div className="tta-exam-name">品質特性テスト</div>
                        <div className="tta-exam-stars">★★★★★</div>
                        <div className="tta-exam-points">~14問</div>
                        <div className="tta-exam-sub">配点 約29% | 最重要章</div>
                    </div>
                    <div className="tta-exam-card">
                        <div className="tta-exam-ch">CHAPTER 5</div>
                        <div className="tta-exam-name">レビュー</div>
                        <div className="tta-exam-stars">★★★</div>
                        <div className="tta-exam-points">~8問</div>
                        <div className="tta-exam-sub">配点 約14%</div>
                    </div>
                    <div className="tta-exam-card">
                        <div className="tta-exam-ch">CHAPTER 6</div>
                        <div className="tta-exam-name">テストツール・自動化</div>
                        <div className="tta-exam-stars">★★★★</div>
                        <div className="tta-exam-points">~9問</div>
                        <div className="tta-exam-sub">配点 約15%</div>
                    </div>
                </div>
            </div>

            <div className="max-w-[960px] mx-auto px-6 relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent my-12 opacity-30"></div></div>

            {/* CHAPTER 1 */}
            <section className="py-16 pb-12" id="ch1">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="mb-10">
                        <div className="inline-block font-mono text-[0.7rem] text-accent-orange border border-accent-orange px-3 py-1 rounded-full tracking-widest mb-3">CHAPTER 1 | K2 理解</div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                            リスクベーステストにおける<span className="text-accent-cyan">TTAのタスク</span>
                        </h2>
                        <p className="text-text-secondary text-base mt-3 border-l-4 border-accent-cyan pl-4">
                            TTAはテクニカルな観点から製品リスクを識別・評価し、テスト管理者（TM）やテストアナリスト（TA）と連携して技術的リスクに対処する。
                        </p>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">1.1 TTA・TM・TAの役割分担</div>
                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">役割</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">リスク評価での主な担当</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">専門領域</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">TM（テスト管理者）</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">
                                            リスク全体管理・最終リスクレベル決定・ワークショップのファシリテーション
                                        </td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">プロジェクト管理</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">
                                            <span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">TTA（技術テストアナリスト）</span>
                                        </td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">
                                            技術的製品リスクの<strong className="text-accent-green">発生確率（Likelihood）</strong>を提案
                                        </td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">技術・コード品質</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">TA（テストアナリスト）</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">
                                            ビジネスへの<strong className="text-accent-cyan">影響度（Impact）</strong>を評価
                                        </td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">ビジネス・機能</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="my-8 flex flex-col items-center gap-3">
                            <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" className="max-w-[700px] w-full">
                                <defs>
                                    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4fd1c5" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#68d391" stopOpacity="0.8" />
                                    </linearGradient>
                                </defs>
                                {/* Risk based test center */}
                                <rect x="270" y="85" width="160" height="50" rx="8" fill="rgba(79,209,197,0.1)" stroke="#4fd1c5" strokeWidth="1.5" />
                                <text x="350" y="108" textAnchor="middle" fill="#4fd1c5" fontSize="11" fontFamily="'JetBrains Mono',monospace">リスクベース</text>
                                <text x="350" y="124" textAnchor="middle" fill="#4fd1c5" fontSize="11" fontFamily="'JetBrains Mono',monospace">テスト計画</text>
                                {/* TM box */}
                                <rect x="30" y="10" width="180" height="60" rx="8" fill="rgba(246,173,85,0.08)" stroke="#f6ad55" strokeWidth="1.5" />
                                <text x="120" y="38" textAnchor="middle" fill="#f6ad55" fontSize="11" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">TM（テスト管理者）</text>
                                <text x="120" y="56" textAnchor="middle" fill="#8ea3c3" fontSize="9.5" fontFamily="'Noto Sans JP',sans-serif">全体管理・最終決定</text>
                                {/* TTA box */}
                                <rect x="30" y="90" width="180" height="60" rx="8" fill="rgba(104,211,145,0.08)" stroke="#68d391" strokeWidth="1.5" />
                                <text x="120" y="118" textAnchor="middle" fill="#68d391" fontSize="11" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">TTA（技術アナリスト）</text>
                                <text x="120" y="136" textAnchor="middle" fill="#8ea3c3" fontSize="9.5" fontFamily="'Noto Sans JP',sans-serif">発生確率を提案</text>
                                {/* TA box */}
                                <rect x="30" y="165" width="180" height="60" rx="8" fill="rgba(79,209,197,0.08)" stroke="#4fd1c5" strokeWidth="1.5" />
                                <text x="120" y="193" textAnchor="middle" fill="#4fd1c5" fontSize="11" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">TA（テストアナリスト）</text>
                                <text x="120" y="211" textAnchor="middle" fill="#8ea3c3" fontSize="9.5" fontFamily="'Noto Sans JP',sans-serif">影響度を評価</text>
                                {/* Arrows */}
                                <line x1="210" y1="40" x2="270" y2="96" stroke="#f6ad55" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7" />
                                <line x1="210" y1="120" x2="270" y2="110" stroke="#68d391" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7" />
                                <line x1="210" y1="195" x2="270" y2="128" stroke="#4fd1c5" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7" />
                                {/* Right side: TTA details */}
                                <rect x="460" y="10" width="220" height="200" rx="8" fill="rgba(104,211,145,0.04)" stroke="rgba(104,211,145,0.2)" strokeWidth="1" />
                                <text x="570" y="35" textAnchor="middle" fill="#68d391" fontSize="10" fontFamily="'JetBrains Mono',monospace">TTAのリスク識別領域</text>
                                <line x1="470" y1="45" x2="670" y2="45" stroke="rgba(104,211,145,0.2)" strokeWidth="1" />
                                <text x="476" y="66" fill="#8ea3c3" fontSize="9" fontFamily="'Noto Sans JP',sans-serif">🔒 セキュリティリスク</text>
                                <text x="476" y="86" fill="#8ea3c3" fontSize="9" fontFamily="'Noto Sans JP',sans-serif">⚡ 性能効率性リスク</text>
                                <text x="476" y="106" fill="#8ea3c3" fontSize="9" fontFamily="'Noto Sans JP',sans-serif">🔧 保守性リスク</text>
                                <text x="476" y="126" fill="#8ea3c3" fontSize="9" fontFamily="'Noto Sans JP',sans-serif">🛡️ 信頼性リスク</text>
                                <text x="476" y="146" fill="#8ea3c3" fontSize="9" fontFamily="'Noto Sans JP',sans-serif">📦 移植性リスク</text>
                                <text x="476" y="166" fill="#8ea3c3" fontSize="9" fontFamily="'Noto Sans JP',sans-serif">🔗 互換性リスク</text>
                                <text x="476" y="186" fill="#8ea3c3" fontSize="9" fontFamily="'Noto Sans JP',sans-serif">📐 技術的複雑度</text>
                            </svg>
                            <div className="text-[0.8rem] text-text-muted text-center italic">図1-1: TTA・TM・TAのリスク評価における役割分担</div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">1.2 技術的製品リスクの種類</div>
                        <div className="tta-arch-layers">
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-red)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">🔒</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">セキュリティリスク</div>
                                    <div className="arch-desc">SQLインジェクション・XSS脆弱性・認証/認可の不備・機密データの暗号化漏れ</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-orange)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">⚡</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">性能効率性リスク</div>
                                    <div className="arch-desc">高負荷時のレスポンス劣化・メモリリーク・リソース枯渇・非効率なDBクエリ</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-cyan)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">🛡️</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">信頼性リスク</div>
                                    <div className="arch-desc">障害時の不適切なフォールバック・データ整合性の問題・障害回復時間の超過</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-green)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">🔧</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">保守性リスク</div>
                                    <div className="arch-desc">高い循環的複雑度・テスト困難な設計・ドキュメント不足・強い結合</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-purple)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">📦</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">移植性・互換性リスク</div>
                                    <div className="arch-desc">特定OS/ブラウザ依存・後方互換性の欠如・外部システムとの統合問題</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[960px] mx-auto px-6 relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent my-12 opacity-30"></div></div>

            {/* CHAPTER 2 */}
            <section className="py-16 pb-12" id="ch2">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="mb-10">
                        <div className="inline-block font-mono text-[0.7rem] text-accent-orange border border-accent-orange px-3 py-1 rounded-full tracking-widest mb-3">CHAPTER 2 | K3 適用・K4 分析 ★★★★★ 最重要</div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                            ホワイトボックス<span className="text-accent-cyan">テスト技法</span>
                        </h2>
                        <p className="text-text-secondary text-base mt-3 border-l-4 border-accent-cyan pl-4">
                            コードの内部構造を直接分析し、どのコードが実行されたかを「カバレッジ」で測定する。試験配点の約25%を占める最重要章。
                        </p>
                    </div>

                    <div className="callout callout-info">
                        <div className="font-mono text-[0.75rem] font-bold tracking-wider mb-2 text-accent-cyan">📌 ホワイトボックス vs ブラックボックス</div>
                        <p className="text-[0.92rem] text-text-secondary">
                            ブラックボックス（CTAL-TA領域）は外部から入出力のみを評価するのに対し、ホワイトボックスはコード・制御フローを直接分析してテストケースを設計する。カバレッジ（どのコードが実行されたか）で品質を測定する。
                        </p>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">2.1 カバレッジ基準の包含関係（強さの順）</div>

                        <div className="my-8 flex flex-col items-center gap-3">
                            <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" className="max-w-[600px] w-full">
                                {/* Multi-condition */}
                                <polygon points="300,20 180,80 420,80" fill="rgba(252,129,129,0.15)" stroke="#fc8181" strokeWidth="2" />
                                <text x="300" y="57" textAnchor="middle" fill="#fc8181" fontSize="12" fontWeight="bold" fontFamily="'JetBrains Mono',monospace">多重条件テスト</text>
                                <text x="300" y="73" textAnchor="middle" fill="#fc8181" fontSize="9" fontFamily="'JetBrains Mono',monospace">2ⁿ 組み合わせ</text>
                                {/* MC/DC */}
                                <polygon points="180,80 420,80 500,140 100,140" fill="rgba(246,173,85,0.1)" stroke="#f6ad55" strokeWidth="2" />
                                <text x="300" y="112" textAnchor="middle" fill="#f6ad55" fontSize="12" fontWeight="bold" fontFamily="'JetBrains Mono',monospace">MC/DC テスト</text>
                                <text x="300" y="128" textAnchor="middle" fill="#f6ad55" fontSize="9" fontFamily="'JetBrains Mono',monospace">n+1 テスト数（最小）</text>
                                {/* Decision */}
                                <polygon points="100,140 500,140 560,200 40,200" fill="rgba(79,209,197,0.08)" stroke="#4fd1c5" strokeWidth="2" />
                                <text x="300" y="170" textAnchor="middle" fill="#4fd1c5" fontSize="12" fontWeight="bold" fontFamily="'JetBrains Mono',monospace">デシジョン（ブランチ）テスト</text>
                                <text x="300" y="186" textAnchor="middle" fill="#4fd1c5" fontSize="9" fontFamily="'JetBrains Mono',monospace">全 True/False をカバー</text>
                                {/* Statement */}
                                <polygon points="40,200 560,200 590,250 10,250" fill="rgba(104,211,145,0.06)" stroke="#68d391" strokeWidth="2" />
                                <text x="300" y="228" textAnchor="middle" fill="#68d391" fontSize="12" fontWeight="bold" fontFamily="'JetBrains Mono',monospace">ステートメントテスト（最も基本）</text>
                                <text x="300" y="244" textAnchor="middle" fill="#68d391" fontSize="9" fontFamily="'JetBrains Mono',monospace">実行可能なステートメントのカバレッジ</text>
                                {/* Labels right side */}
                                <text x="555" y="57" fill="#fc8181" fontSize="9" fontFamily="'JetBrains Mono',monospace">最強</text>
                                <text x="555" y="245" fill="#68d391" fontSize="9" fontFamily="'JetBrains Mono',monospace">最弱</text>
                                <line x1="548" y1="65" x2="548" y2="240" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            </svg>
                            <div className="text-[0.8rem] text-text-muted text-center italic">図2-1: ホワイトボックスカバレッジ基準の包含関係</div>
                        </div>

                        <div className="tta-coverage-ladder">
                            <div className="tta-ladder-row">
                                <span className="tta-ladder-level bg-accent-red/10 text-accent-red border border-accent-red/20">最強</span>
                                <span className="tta-ladder-name">多重条件テスト（Multiple Condition Testing）</span>
                                <span className="tta-ladder-note">2ⁿ 全組み合わせ</span>
                            </div>
                            <div className="tta-ladder-row">
                                <span className="tta-ladder-level bg-accent-orange/10 text-accent-orange border border-accent-orange/20">強</span>
                                <span className="tta-ladder-name">MC/DC テスト（Modified Condition/Decision Coverage）</span>
                                <span className="tta-ladder-note">n+1 最小テスト数</span>
                            </div>
                            <div className="tta-ladder-row">
                                <span className="tta-ladder-level bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">中</span>
                                <span className="tta-ladder-name">デシジョンテスト（Decision Testing）</span>
                                <span className="tta-ladder-note">全 True/False</span>
                            </div>
                            <div className="tta-ladder-row">
                                <span className="tta-ladder-level bg-accent-green/10 text-accent-green border border-accent-green/20">基本</span>
                                <span className="tta-ladder-name">ステートメントテスト（Statement Testing）</span>
                                <span className="tta-ladder-note">実行可能ステートメント</span>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            2.2 ステートメントテスト（Statement Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20 ml-2">K3</span>
                        </div>

                        <dl className="tta-def-box">
                            <dt>定義</dt>
                            <dd>コード内の実行可能なステートメントを実行することを目的としたテスト技法。カバレッジ = 実行ステートメント数 ÷ 総実行可能ステートメント数 × 100</dd>
                        </dl>

                        <div className="code-block bg-[#060e1a] border border-border rounded-xl overflow-hidden my-6">
                            <div className="code-header flex items-center justify-between px-4 py-2.5 bg-accent-cyan/5 border-b border-border">
                                <span className="font-mono text-[0.72rem] text-accent-cyan tracking-wider">Python — ステートメントテスト例</span>
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                                </div>
                            </div>
                            <div className="p-5 overflow-x-auto text-[0.82rem] font-mono leading-relaxed text-text-primary">
                                <div className="code-line"><span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">calculate_discount</span>(price: <span className="text-accent-cyan">float</span>, customer_type: <span className="text-accent-cyan">str</span>) -&gt; <span className="text-accent-cyan">float</span>:</div>
                                <div className="code-line">{"    "}discount = <span className="text-[#f78c6c]">0.0</span>{"                    "}<span className="text-[#4a7c59] italic"># ステートメント 1</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">if</span> customer_type == <span className="text-[#c3e88d]">"premium"</span>:{"    "}<span className="text-[#4a7c59] italic"># ステートメント 2（条件判定）</span></div>
                                <div className="code-line">{"        "}discount = <span className="text-[#f78c6c]">0.20</span>{"               "}<span className="text-[#4a7c59] italic"># ステートメント 3</span></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">elif</span> customer_type == <span className="text-[#c3e88d]">"regular"</span>:{"  "}<span className="text-[#4a7c59] italic"># ステートメント 4</span></div>
                                <div className="code-line">{"        "}discount = <span className="text-[#f78c6c]">0.10</span>{"               "}<span className="text-[#4a7c59] italic"># ステートメント 5</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">return</span> price * (<span className="text-[#f78c6c]">1</span> - discount){"     "}<span className="text-[#4a7c59] italic"># ステートメント 6</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># ── 100%ステートメントカバレッジ達成テスト ──</span></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># テスト1: "premium" → ステートメント 1,2,3,6 実行</span></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># テスト2: "regular" → ステートメント 1,2,4,5,6 実行</span></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># テスト1+2: 全ステートメント → 6/6 = 100% ✅</span></div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># ❌ 限界：100%達成でも"vip"タイプのバグを検出できない</span></div>
                            </div>
                        </div>

                        <div className="callout callout-warn">
                            ⚠️ <strong>重要：</strong> ステートメントカバレッジ100%を達成しても、一部の論理欠陥（条件の組み合わせによるバグ）を見逃す可能性がある。
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            2.3 デシジョンテスト（Decision Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 ml-2">K3</span>
                        </div>

                        <dl className="tta-def-box">
                            <dt>定義</dt>
                            <dd>コード内の各決定（IF/SWITCH/LOOP等）のTrue/False両方の結果を実行するテスト技法。ブランチテスト（Branch Testing）とほぼ同義。デシジョンカバレッジ100% → ステートメントカバレッジ100%（逆は成立しない！）</dd>
                        </dl>

                        <div className="my-8 flex flex-col items-center gap-3 w-full">
                            <Mermaid chart={`flowchart TD
    Start([START]) --> Dec1{"age >= 18?"}
    Dec1 -- False --> UnderAge[UnderAge]
    Dec1 -- True --> Dec2{"has_id?"}
    Dec2 -- False --> IdReq[ID Required]
    Dec2 -- True --> AccGranted[Access Granted]
    UnderAge --> End([END])
    IdReq --> End
    AccGranted --> End`} />
                            <div className="text-[0.8rem] text-text-muted text-center italic">図2-2: デシジョンテストのコントロールフローグラフ（CFG）— 3テストケースで全4決定結果をカバー</div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            2.4 MC/DC テスト（Modified Condition/Decision Coverage）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20 ml-2">K4 ★最難関</span>
                        </div>

                        <div className="callout callout-warn">
                            <div className="font-mono text-[0.75rem] font-bold tracking-wider mb-2 text-accent-orange">⭐ MC/DC は CTAL-TTA の最重要・最難関トピック</div>
                            <p className="text-[0.92rem] text-text-secondary">
                                航空宇宙（DO-178C Level B）・医療機器・機能安全（IEC 61508 SIL3）で必須要件。全組み合わせ（2ⁿ）を n+1 に最小化できる革新的なカバレッジ基準。
                            </p>
                        </div>

                        <dl className="tta-def-box">
                            <dt>定義 — MC/DC の4要件</dt>
                            <dd>
                                ①全ての入口点を少なくとも1回実行 ②全ての出口点を少なくとも1回実行 ③全ての決定のTrue/Falseを実行 ④<strong className="text-accent-orange">各原子条件（atomic condition）が決定結果に「独立して」影響することを証明する</strong>
                            </dd>
                        </dl>

                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">テストケース</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-center tracking-wide border-b border-border">A</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-center tracking-wide border-b border-border">B</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-center tracking-wide border-b border-border">C</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-center tracking-wide border-b border-border">A AND B</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-center tracking-wide border-b border-border">結果 (A AND B) OR C</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">独立性の証明ペア / 備考</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">行1</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"></td>
                                    </tr>
                                    <tr className="bg-accent-orange/10 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold">行2★</td>
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-primary">Aの独立性証明ペア (行2 &amp; 行6) / Bの独立性証明ペア (行2 &amp; 行4)</td>
                                    </tr>
                                    <tr className="bg-accent-orange/10 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold">行3★</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-primary">Cの独立性証明ペア (行3 &amp; 行4)</td>
                                    </tr>
                                    <tr className="bg-accent-orange/10 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold">行4★</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-accent-red font-bold text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-primary">Bの独立性証明ペア (行2 &amp; 行4) / Cの独立性証明ペア (行3 &amp; 行4)</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">行5</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"></td>
                                    </tr>
                                    <tr className="bg-accent-orange/10 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold">行6★</td>
                                        <td className="p-3 text-[0.88rem] text-accent-orange font-bold text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-accent-red font-bold text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-primary">Aの独立性証明ペア (行2 &amp; 行6)</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">行7</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">T</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"></td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">行8</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary text-center">F</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-[0.8rem] text-text-muted text-center italic mt-3 mb-8">図2-3: (A AND B) OR C のMC/DCテスト — 8通り全組み合わせから★印の4テストケースで全原子条件の独立性を証明</div>

                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">原子条件数（n）</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">MC/DC 最小テスト数（n+1）</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">全組み合わせ（2ⁿ）</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">削減率</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">2条件</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">3テスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">4テスト</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">25%削減</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">3条件</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">4テスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">8テスト</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">50%削減</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">4条件</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">5テスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">16テスト</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">69%削減</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">10条件</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">11テスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">1,024テスト</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">99%削減</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            2.5 多重条件テスト（Multiple Condition Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20 ml-2">K3</span>
                        </div>
                        <dl className="tta-def-box">
                            <dt>定義</dt>
                            <dd>各決定を構成する全ての原子条件の組み合わせ（2ⁿ）をテストする技法。最も強力だがコストが非常に高い（組み合わせ爆発）。高信頼性要件のシステムで使用。</dd>
                        </dl>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">安全関連システムでのカバレッジ要件</div>
                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">規格</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">レベル</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">要求されるカバレッジ技法</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">主な適用領域</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">IEC 61508</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20">SIL 4</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">多重条件テスト（強く推奨）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">原子力・化学プラント</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">IEC 61508</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">SIL 3</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">MC/DC テスト（強く推奨）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">鉄道・自動車制御</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">IEC 61508</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">SIL 2</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">デシジョンテスト（強く推奨）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">製造機器</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">IEC 61508</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">SIL 1</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">ステートメントテスト（推奨）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">一般産業機器</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">DO-178C</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20">Level A</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">多重条件テスト（必須）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">航空機の飛行制御</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">DO-178C</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">Level B</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">MC/DC テスト（必須）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">航空機の航法</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">DO-178C</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">Level C</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">デシジョンテスト（必須）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">航空機の補助システム</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">DO-178C</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">Level D</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">ステートメントテスト（必須）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">情報系システム</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            2.7 API テスト（API Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 ml-2">K3</span>
                        </div>
                        <dl className="tta-def-box">
                            <dt>定義</dt>
                            <dd>アプリケーションプログラミングインターフェース（API）に直接アクセスしてテストする技法。UIを介さずにシステムの内部ロジックを直接検証できる。機能・セキュリティ・パフォーマンスの欠陥を検出。</dd>
                        </dl>

                        <div className="code-block bg-[#060e1a] border border-border rounded-xl overflow-hidden my-6">
                            <div className="code-header flex items-center justify-between px-4 py-2.5 bg-accent-cyan/5 border-b border-border">
                                <span className="font-mono text-[0.72rem] text-accent-cyan tracking-wider">Python — APIテスト実装例（pytest + requests）</span>
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                                </div>
                            </div>
                            <div className="p-5 overflow-x-auto text-[0.82rem] font-mono leading-relaxed text-text-primary">
                                <div className="code-line"><span className="text-[#c792ea]">class</span> <span className="text-[#82aaff]">SecurityTestSuite</span>:</div>
                                <div className="code-line">{"    "}<span className="text-[#4a7c59] italic"># ── セキュリティ検証（SQLインジェクション防御） ──</span></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">test_sql_injection_prevention</span>(self, api_client):</div>
                                <div className="code-line">{"        "}sql_payloads = [</div>
                                <div className="code-line">{"            "}<span className="text-[#c3e88d]">"'; DROP TABLE users; --"</span>,</div>
                                <div className="code-line">{"            "}<span className="text-[#c3e88d]">"1' OR '1'='1"</span>,</div>
                                <div className="code-line">{"            "}<span className="text-[#c3e88d]">"admin'--"</span>,</div>
                                <div className="code-line">{"        "}]</div>
                                <div className="code-line">{"        "}<span className="text-[#c792ea]">for</span> payload <span className="text-[#c792ea]">in</span> sql_payloads:</div>
                                <div className="code-line">{"            "}response = api_client.post(</div>
                                <div className="code-line">{"                "}<span className="text-[#c3e88d]">"/users/search"</span>,</div>
                                <div className="code-line">{"                "}json={"{{"}<span className="text-[#c3e88d]">"query"</span>: payload{"}}"}</div>
                                <div className="code-line">{"            "})</div>
                                <div className="code-line">{"            "}<span className="text-[#4a7c59] italic"># ✅ 500エラーが出ないことを検証（DBエラー漏洩防止）</span></div>
                                <div className="code-line">{"            "}assert response.status_code <span className="text-[#c792ea]">in</span> [<span className="text-[#f78c6c]">200</span>, <span className="text-[#f78c6c]">400</span>, <span className="text-[#f78c6c]">422</span>]</div>
                                <div className="code-line">{"            "}assert <span className="text-[#c3e88d]">"SQL"</span> <span className="text-[#c792ea]">not in</span> response.text</div>
                                <div className="code-line"></div>
                                <div className="code-line">{"    "}<span className="text-[#4a7c59] italic"># ── 認可テスト（アクセス制御検証） ──</span></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">test_broken_access_control</span>(self, api_client, user_token):</div>
                                <div className="code-line">{"        "}response = api_client.get(</div>
                                <div className="code-line">{"            "}<span className="text-[#c3e88d]">"/admin/users"</span>,</div>
                                <div className="code-line">{"            "}headers={"{"}<span className="text-[#c3e88d]">"Authorization"</span>: <span className="text-[#c3e88d]">{"f\"Bearer {user_token}\""}</span>{"}"}</div>
                                <div className="code-line">{"        "})</div>
                                <div className="code-line">{"        "}assert response.status_code == <span className="text-[#f78c6c]">403</span>{"  "}<span className="text-[#4a7c59] italic"># ✅ Forbidden</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">{"    "}<span className="text-[#4a7c59] italic"># ── パフォーマンステスト（並列リクエスト） ──</span></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">test_concurrent_requests</span>(self, api_client):</div>
                                <div className="code-line">{"        "}<span className="text-[#c792ea]">import</span> threading</div>
                                <div className="code-line">{"        "}results = []</div>
                                <div className="code-line">{"        "}<span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">make_request</span>():</div>
                                <div className="code-line">{"            "}r = api_client.get(<span className="text-[#c3e88d]">"/health"</span>)</div>
                                <div className="code-line">{"            "}results.append(r.status_code)</div>
                                <div className="code-line">{"        "}threads = [threading.Thread(target=make_request) <span className="text-[#c792ea]">for</span> _ <span className="text-[#c792ea]">in</span> range(<span className="text-[#f78c6c]">50</span>)]</div>
                                <div className="code-line">{"        "}[t.start() <span className="text-[#c792ea]">for</span> t <span className="text-[#c792ea]">in</span> threads]; [t.join() <span className="text-[#c792ea]">for</span> t <span className="text-[#c792ea]">in</span> threads]</div>
                                <div className="code-line">{"        "}assert all(s == <span className="text-[#f78c6c]">200</span> <span className="text-[#c792ea]">for</span> s <span className="text-[#c792ea]">in</span> results){"  "}<span className="text-[#4a7c59] italic"># 全50リクエスト成功</span></div>
                            </div>
                        </div>

                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">カテゴリ</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">APIテストで検出できる欠陥</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">機能系</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">間違ったHTTPステータスコード・レスポンスボディのスキーマ不正・ビジネスロジックの実装誤り</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20">セキュリティ系</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">認証・認可バイパス・インジェクション攻撃への脆弱性・機密情報の漏洩</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">パフォーマンス系</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">レスポンス時間の超過・並列リクエスト処理の問題・ペイロードサイズ制限の不備</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[960px] mx-auto px-6 relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent my-12 opacity-30"></div></div>

            {/* CHAPTER 3 */}
            <section className="py-16 pb-12" id="ch3">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="mb-10">
                        <div className="inline-block font-mono text-[0.7rem] text-accent-orange border border-accent-orange px-3 py-1 rounded-full tracking-widest mb-3">CHAPTER 3 | K3 適用 ★★★★</div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                            静的・<span className="text-accent-cyan">動的分析</span>
                        </h2>
                        <p className="text-text-secondary text-base mt-3 border-l-4 border-accent-cyan pl-4">
                            静的分析はコードを実行せずに品質を評価し、動的分析は実行時の動作を分析する。両者は相補的な技法であり、組み合わせることで高い欠陥検出率を実現する。
                        </p>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">3.1 静的分析 vs 動的分析の比較</div>
                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">観点</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">静的分析（Static Analysis）</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">動的分析（Dynamic Analysis）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">実行</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">コードを実行しない</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">コードを実行しながら分析</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">タイミング</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">コンパイル前/後に適用可能</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">ランタイム（実行時）に適用</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">対象コード</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">全コードパスを分析できる</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">実行されたパスのみ分析可能</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">検出できる問題</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">循環的複雑度・未使用変数・コーディング規約違反</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">メモリリーク・ワイルドポインタ・パフォーマンスボトルネック</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary">代表ツール</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">SonarQube・Pylint・ESLint</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">Valgrind・JProfiler・memory_profiler</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">3.2 静的分析（Static Analysis）</div>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">3.2.1 制御フロー分析（Control Flow Analysis）</div>
                        <dl className="tta-def-box">
                            <dt>循環的複雑度（Cyclomatic Complexity）</dt>
                            <dd>コードの論理的な複雑さを数値で表す指標。CC = エッジ数 − ノード数 + 2P（P=連結成分数）。簡略計算: CC = 分岐キーワード数 + 1。値が高いほどテスト困難・バグが潜みやすい。</dd>
                        </dl>

                        <div className="my-8 flex flex-col items-center gap-3">
                            <Mermaid chart={`flowchart TD
    Start([START]) --> N1{"N1<br/>not order?"}
    N1 -- T --> N2[N2: Error]
    N1 -- F --> N3{"N3<br/>amount <= 0?"}
    N3 -- T --> N4[N4: Invalid]
    N3 -- F --> N5{"N5<br/>type == 'A'?"}
    N5 -- T --> N6[N6: TypeA]
    N5 -- F --> N7[N7: TypeB]
    N6 -.-> N8[N8: Success]
    N7 -.-> N8`} />
                            <div className="mt-4 p-4 border border-accent-orange/20 bg-accent-orange/5 rounded-xl font-mono text-[0.88rem] text-text-secondary w-full max-w-[400px]">
                                <strong className="text-accent-orange block mb-2 text-center">循環的複雑度 計算</strong>
                                ノード数 (N): 9<br />
                                エッジ数 (E): 10<br />
                                連結成分 (P): 1<br />
                                <hr className="border-none border-t border-accent-orange/20 my-2" />
                                CC = E - N + 2P<br />
                                <strong className="text-accent-green">CC = 10 - 9 + 2 = 3</strong><br />
                                簡略法: 分岐(IF等)数 + 1 = 2 + 1 = 3<br />
                                <span className="text-[0.78rem] text-text-muted">1-10:良好 11-20:注意 21+:高リスク</span>
                            </div>
                            <div className="text-[0.8rem] text-text-muted text-center italic">図3-1: 制御フローグラフ（CFG）と循環的複雑度の計算 — CC=3（良好な範囲）</div>
                        </div>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">3.2.2 データフロー分析（Data Flow Analysis）</div>
                        <dl className="tta-def-box">
                            <dt>データフロー問題の3パターン</dt>
                            <dd>
                                <strong className="text-accent-red">dd（定義→再定義）：</strong>変数を使用せずに上書き（論理エラーの可能性）<br />
                                <strong className="text-accent-orange">du（定義→未使用）：</strong>変数を定義したが一度も使わない（不要な変数）<br />
                                <strong className="text-accent-red">ur（未定義→使用）：</strong>未初期化変数の使用（バグの原因）
                            </dd>
                        </dl>

                        <div className="tta-compare-wrap">
                            <div className="tta-compare-box bad">
                                <div className="tta-compare-label">❌ データフロー問題あり</div>
                                <pre className="font-mono text-[0.78rem] leading-relaxed text-text-secondary overflow-x-auto">
<div className="code-line"><span className="text-[#c792ea]">def</span> bad_example(x, y):</div>
<div className="code-line">    result = x + y   <span className="text-accent-orange"># ★ 定義（d）</span></div>
<div className="code-line">    <span className="text-[#4a7c59] italic"># 使用されていない！</span></div>
<div className="code-line">    result = x * y   <span className="text-accent-red"># ★ 再定義（d）→ dd パターン</span></div>
<div className="code-line">    <span className="text-[#c792ea]">return</span> result    <span className="text-accent-green"># 使用（u）</span></div>
<div className="code-line"></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># ❌ 最初の result 代入が無駄</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># ❌ 意図的？バグ？ → 要レビュー</span></div>
                                </pre>
                            </div>
                            <div className="tta-compare-box good">
                                <div className="tta-compare-label">✅ データフロー問題なし</div>
                                <pre className="font-mono text-[0.78rem] leading-relaxed text-text-secondary overflow-x-auto">
<div className="code-line"><span className="text-[#c792ea]">def</span> good_example(x, y):</div>
<div className="code-line">    sum_val = x + y  <span className="text-accent-green"># ★ 定義（d）</span></div>
<div className="code-line">    product = x * y  <span className="text-accent-green"># ★ 定義（d）</span></div>
<div className="code-line"></div>
<div className="code-line">    <span className="text-[#4a7c59] italic"># 両方使用 → du パターンなし</span></div>
<div className="code-line">    <span className="text-[#c792ea]">return</span> sum_val + product  <span className="text-accent-green"># ★ 使用（u,u）</span></div>
<div className="code-line"></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># ✅ 全変数が定義後に使用される</span></div>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">3.3 動的分析（Dynamic Analysis）</div>
                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">3.3.1 メモリリーク検出（Detecting Memory Leaks）</div>

                        <div className="tta-compare-wrap">
                            <div className="tta-compare-box bad">
                                <div className="tta-compare-label">❌ メモリリーク発生（C言語）</div>
                                <pre className="font-mono text-[0.78rem] leading-relaxed text-text-secondary overflow-x-auto">
<div className="code-line"><span className="text-[#c792ea]">void</span> process_data(<span className="text-accent-cyan">int</span> size) {'{'}</div>
<div className="code-line">    <span className="text-accent-cyan">int</span>* buf = malloc(size);</div>
<div className="code-line"></div>
<div className="code-line">    <span className="text-[#c792ea]">if</span> (size &lt;= <span className="text-[#f78c6c]">0</span>) {'{'}</div>
<div className="code-line">        <span className="text-accent-red">return</span>;  <span className="text-[#4a7c59] italic">// ❌ free()せずに返る!</span></div>
<div className="code-line">                 <span className="text-[#4a7c59] italic">// → メモリリーク発生</span></div>
<div className="code-line">    {'}'}</div>
<div className="code-line">    <span className="text-[#4a7c59] italic">// ... 処理 ...</span></div>
<div className="code-line">    free(buf);  <span className="text-[#4a7c59] italic">// ✅ 正常パスのみ解放</span></div>
<div className="code-line">{'}'}</div>
                                </pre>
                            </div>
                            <div className="tta-compare-box good">
                                <div className="tta-compare-label">✅ メモリリーク修正版</div>
                                <pre className="font-mono text-[0.78rem] leading-relaxed text-text-secondary overflow-x-auto">
<div className="code-line"><span className="text-[#c792ea]">void</span> process_data_fixed(<span className="text-accent-cyan">int</span> size) {'{'}</div>
<div className="code-line">    <span className="text-accent-cyan">int</span>* buf = malloc(size);</div>
<div className="code-line"></div>
<div className="code-line">    <span className="text-[#c792ea]">if</span> (size &lt;= <span className="text-[#f78c6c]">0</span>) {'{'}</div>
<div className="code-line">        free(buf);  <span className="text-accent-green">// ✅ 全パスで解放</span></div>
<div className="code-line">        <span className="text-[#c792ea]">return</span>;</div>
<div className="code-line">    {'}'}</div>
<div className="code-line">    <span className="text-[#4a7c59] italic">// ... 処理 ...</span></div>
<div className="code-line">    free(buf);  <span className="text-accent-green">// ✅ 正常パスでも解放</span></div>
<div className="code-line">{'}'}</div>
                                </pre>
                            </div>
                        </div>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">3.3.2 ワイルドポインタ（Wild Pointers）</div>
                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">種類</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">説明</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">検出ツール</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20">未初期化ポインタ</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">初期化せずにポインタを使用 → 未定義動作</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">Valgrind / AddressSanitizer</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20">ダングリングポインタ</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">free() 後のポインタを使用 → クラッシュの原因</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">ASan / Purify</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">ヌルポインタ逆参照</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">NULL ポインタへのアクセス → セグメンテーション違反</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">Valgrind / Intel Inspector</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">3.3.3 パフォーマンス効率性の動的分析</div>
                        <div className="code-block bg-[#060e1a] border border-border rounded-xl overflow-hidden my-6">
                            <div className="code-header flex items-center justify-between px-4 py-2.5 bg-accent-cyan/5 border-b border-border">
                                <span className="font-mono text-[0.72rem] text-accent-cyan tracking-wider">Python — cProfile でボトルネックを特定</span>
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                                </div>
                            </div>
                            <div className="p-5 overflow-x-auto text-[0.82rem] font-mono leading-relaxed text-text-primary">
                                <div className="code-line"><span className="text-[#c792ea]">import</span> cProfile, pstats</div>
                                <div className="code-line"><span className="text-[#c792ea]">from</span> functools <span className="text-[#c792ea]">import</span> lru_cache</div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># ❌ 非効率: フィボナッチ O(2ⁿ) 指数時間</span></div>
                                <div className="code-line"><span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">fib_slow</span>(n):</div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">if</span> n &lt;= <span className="text-[#f78c6c]">1</span>: <span className="text-[#c792ea]">return</span> n</div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">return</span> fib_slow(n-<span className="text-[#f78c6c]">1</span>) + fib_slow(n-<span className="text-[#f78c6c]">2</span>)</div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># ✅ 最適化: メモ化で O(n) 線形時間</span></div>
                                <div className="code-line">@lru_cache(maxsize=<span className="text-[#c792ea]">None</span>)</div>
                                <div className="code-line"><span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">fib_fast</span>(n):</div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">if</span> n &lt;= <span className="text-[#f78c6c]">1</span>: <span className="text-[#c792ea]">return</span> n</div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">return</span> fib_fast(n-<span className="text-[#f78c6c]">1</span>) + fib_fast(n-<span className="text-[#f78c6c]">2</span>)</div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># プロファイリングで実行時間を測定</span></div>
                                <div className="code-line">profiler = cProfile.Profile()</div>
                                <div className="code-line">profiler.enable()</div>
                                <div className="code-line">fib_slow(<span className="text-[#f78c6c]">35</span>)   <span className="text-[#4a7c59] italic"># → 約 2.5秒（指数的爆発）</span></div>
                                <div className="code-line">profiler.disable()</div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># fib_fast(35) → 約 0.001秒（劇的改善）</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[960px] mx-auto px-6 relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent my-12 opacity-30"></div></div>

            {/* CHAPTER 4 */}
            <section className="py-16 pb-12" id="ch4">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="mb-10">
                        <div className="inline-block font-mono text-[0.7rem] text-accent-orange border border-accent-orange px-3 py-1 rounded-full tracking-widest mb-3">CHAPTER 4 | K3 適用・K4 分析 ★★★★★ 最重要</div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                            技術的テストのための<span className="text-accent-cyan">品質特性</span>
                        </h2>
                        <p className="text-text-secondary text-base mt-3 border-l-4 border-accent-cyan pl-4">
                            ISO/IEC 25010 品質モデルに基づく非機能テスト。TTAはセキュリティ・信頼性・パフォーマンス・保守性・移植性・互換性テストを担当する。試験配点の約29%。
                        </p>
                    </div>

                    <div className="my-8 flex flex-col items-center gap-3">
                        <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" className="max-w-[700px] w-full">
                            <text x="350" y="22" textAnchor="middle" fill="#4fd1c5" fontSize="12" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">ISO/IEC 25010 品質特性モデル — CTAL-TTA の担当領域</text>
                            {/* TTA area */}
                            <rect x="10" y="35" width="680" height="150" rx="8" fill="rgba(0,0,0,0.2)" stroke="rgba(79,209,197,0.1)" strokeWidth="1" />
                            {/* TTA cards */}
                            <rect x="20" y="45" width="95" height="55" rx="6" fill="rgba(252,129,129,0.1)" stroke="#fc8181" strokeWidth="1.5" />
                            <text x="67" y="68" textAnchor="middle" fill="#fc8181" fontSize="9.5" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">セキュリティ</text>
                            <text x="67" y="84" textAnchor="middle" fill="#8ea3c3" fontSize="7.5" fontFamily="'Noto Sans JP',sans-serif">CIA トライアド</text>
                            <text x="67" y="94" textAnchor="middle" fill="#fc8181" fontSize="8" fontFamily="'JetBrains Mono',monospace">★★★★★</text>

                            <rect x="125" y="45" width="95" height="55" rx="6" fill="rgba(79,209,197,0.08)" stroke="#4fd1c5" strokeWidth="1.5" />
                            <text x="172" y="68" textAnchor="middle" fill="#4fd1c5" fontSize="9.5" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">信頼性</text>
                            <text x="172" y="84" textAnchor="middle" fill="#8ea3c3" fontSize="7.5" fontFamily="'Noto Sans JP',sans-serif">MTBF/RTO/RPO</text>
                            <text x="172" y="94" textAnchor="middle" fill="#4fd1c5" fontSize="8" fontFamily="'JetBrains Mono',monospace">★★★★★</text>

                            <rect x="230" y="45" width="95" height="55" rx="6" fill="rgba(246,173,85,0.08)" stroke="#f6ad55" strokeWidth="1.5" />
                            <text x="277" y="68" textAnchor="middle" fill="#f6ad55" fontSize="9.5" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">パフォーマンス</text>
                            <text x="277" y="84" textAnchor="middle" fill="#8ea3c3" fontSize="7.5" fontFamily="'Noto Sans JP',sans-serif">負荷/ストレス等</text>
                            <text x="277" y="94" textAnchor="middle" fill="#f6ad55" fontSize="8" fontFamily="'JetBrains Mono',monospace">★★★★★</text>

                            <rect x="335" y="45" width="95" height="55" rx="6" fill="rgba(104,211,145,0.08)" stroke="#68d391" strokeWidth="1.5" />
                            <text x="382" y="68" textAnchor="middle" fill="#68d391" fontSize="9.5" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">保守性</text>
                            <text x="382" y="84" textAnchor="middle" fill="#8ea3c3" fontSize="7.5" fontFamily="'Noto Sans JP',sans-serif">循環的複雑度</text>
                            <text x="382" y="94" textAnchor="middle" fill="#68d391" fontSize="8" fontFamily="'JetBrains Mono',monospace">★★★★</text>

                            <rect x="440" y="45" width="95" height="55" rx="6" fill="rgba(183,148,244,0.08)" stroke="#b794f4" strokeWidth="1.5" />
                            <text x="487" y="68" textAnchor="middle" fill="#b794f4" fontSize="9.5" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">移植性</text>
                            <text x="487" y="84" textAnchor="middle" fill="#8ea3c3" fontSize="7.5" fontFamily="'Noto Sans JP',sans-serif">適応性/インストール</text>
                            <text x="487" y="94" textAnchor="middle" fill="#b794f4" fontSize="8" fontFamily="'JetBrains Mono',monospace">★★★</text>

                            <rect x="545" y="45" width="95" height="55" rx="6" fill="rgba(99,179,237,0.08)" stroke="#63b3ed" strokeWidth="1.5" />
                            <text x="592" y="68" textAnchor="middle" fill="#63b3ed" fontSize="9.5" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">互換性</text>
                            <text x="592" y="84" textAnchor="middle" fill="#8ea3c3" fontSize="7.5" fontFamily="'Noto Sans JP',sans-serif">共存/相互運用</text>
                            <text x="592" y="94" textAnchor="middle" fill="#63b3ed" fontSize="8" fontFamily="'JetBrains Mono',monospace">★★★</text>

                            {/* TTA label */}
                            <rect x="10" y="110" width="680" height="65" rx="6" fill="rgba(104,211,145,0.03)" stroke="rgba(104,211,145,0.1)" strokeWidth="1" />
                            <text x="350" y="130" textAnchor="middle" fill="#68d391" fontSize="10" fontFamily="'JetBrains Mono',monospace">← 上記6特性が CTAL-TTA の主担当領域（非機能テスト） →</text>
                            <text x="350" y="150" textAnchor="middle" fill="#8ea3c3" fontSize="9" fontFamily="'Noto Sans JP',sans-serif">機能適合性・ユーザビリティは CTAL-TA (テストアナリスト) の主担当</text>
                            <text x="350" y="167" textAnchor="middle" fill="#85a9df" fontSize="8.5" fontFamily="'JetBrains Mono',monospace">準拠規格: ISO/IEC 25010:2023</text>
                        </svg>
                        <div className="text-[0.8rem] text-text-muted text-center italic">図4-1: ISO/IEC 25010 品質特性モデルとCTAL-TTAの担当領域</div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            4.3 セキュリティテスト（Security Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20 ml-2">K3 ★</span>
                        </div>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">CIAトライアド — セキュリティの3要素</div>
                        <div className="tta-arch-layers">
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-red)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">🔒</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">機密性（Confidentiality）</div>
                                    <div className="arch-desc">認可されたユーザーのみがデータにアクセスできること。テスト例：認証テスト・権限テスト・暗号化確認</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-orange)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">✅</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">完全性（Integrity）</div>
                                    <div className="arch-desc">データが不正に変更されていないこと。テスト例：データ改ざん検証・デジタル署名確認・チェックサム</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-green)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">🌐</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">可用性（Availability）</div>
                                    <div className="arch-desc">認可されたユーザーが必要なときにアクセスできること。テスト例：DDoS耐性・障害回復テスト</div>
                                </div>
                            </div>
                        </div>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">OWASP Top 10 — 主要脆弱性テスト実装例</div>
                        <div className="code-block bg-[#060e1a] border border-border rounded-xl overflow-hidden my-6">
                            <div className="code-header flex items-center justify-between px-4 py-2.5 bg-accent-cyan/5 border-b border-border">
                                <span className="font-mono text-[0.72rem] text-accent-cyan tracking-wider">Python — OWASP Top 10 セキュリティテスト</span>
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                                </div>
                            </div>
                            <div className="p-5 overflow-x-auto text-[0.82rem] font-mono leading-relaxed text-text-primary">
                                <div className="code-line"><span className="text-[#c792ea]">class</span> <span className="text-[#82aaff]">SecurityTestSuite</span>:</div>
                                <div className="code-line">{"    "}<span className="text-[#4a7c59] italic"># ── A01: アクセス制御の欠陥 ──</span></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">test_broken_access_control</span>(self, api_client, user_token):</div>
                                <div className="code-line">{"        "}response = api_client.get(</div>
                                <div className="code-line">{"            "}<span className="text-[#c3e88d]">"/admin/users"</span>,</div>
                                <div className="code-line">{"            "}headers={"{"}<span className="text-[#c3e88d]">"Authorization"</span>: <span className="text-[#c3e88d]">{"f\"Bearer {user_token}\""}</span>{"}"}</div>
                                <div className="code-line">{"        "})</div>
                                <div className="code-line">{"        "}assert response.status_code == <span className="text-[#f78c6c]">403</span>{"  "}<span className="text-[#4a7c59] italic"># ✅ Forbidden</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">{"    "}<span className="text-[#4a7c59] italic"># ── A02: 暗号化の失敗 ──</span></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">test_password_hashing</span>(self, db):</div>
                                <div className="code-line">{"        "}user = db.query(<span className="text-[#c3e88d]">"SELECT password FROM users WHERE id=1"</span>)</div>
                                <div className="code-line">{"        "}assert <span className="text-[#c792ea]">not</span> user[<span className="text-[#c3e88d]">"password"</span>].isalpha(){"  "}<span className="text-[#4a7c59] italic"># 平文ではない</span></div>
                                <div className="code-line">{"        "}assert len(user[<span className="text-[#c3e88d]">"password"</span>]) &gt;= <span className="text-[#f78c6c]">60</span>{"        "}<span className="text-[#4a7c59] italic"># bcrypt長</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">{"    "}<span className="text-[#4a7c59] italic"># ── A03: インジェクション ──</span></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">test_sql_injection</span>(self, api_client):</div>
                                <div className="code-line">{"        "}payloads = [<span className="text-[#c3e88d]">"1; DROP TABLE users; --"</span>, <span className="text-[#c3e88d]">"1' OR '1'='1"</span>]</div>
                                <div className="code-line">{"        "}<span className="text-[#c792ea]">for</span> p <span className="text-[#c792ea]">in</span> payloads:</div>
                                <div className="code-line">{"            "}r = api_client.get(<span className="text-[#c3e88d]">{"f\"/users?id={p}\""}</span>)</div>
                                <div className="code-line">{"            "}assert r.status_code != <span className="text-[#f78c6c]">500</span>{"           "}<span className="text-[#4a7c59] italic"># ✅ DBエラー非露出</span></div>
                                <div className="code-line">{"            "}assert <span className="text-[#c3e88d]">"SQL"</span> <span className="text-[#c792ea]">not in</span> r.text{"          "}<span className="text-[#4a7c59] italic"># ✅ エラー詳細非露出</span></div>
                                <div className="code-line"></div>
                                <div className="code-line">{"    "}<span className="text-[#4a7c59] italic"># ── A07: 認証の失敗（ブルートフォース対策） ──</span></div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">test_brute_force_protection</span>(self, api_client):</div>
                                <div className="code-line">{"        "}<span className="text-[#c792ea]">for</span> i <span className="text-[#c792ea]">in</span> range(<span className="text-[#f78c6c]">5</span>):{"  "}<span className="text-[#4a7c59] italic"># 5回失敗試行</span></div>
                                <div className="code-line">{"            "}api_client.post(<span className="text-[#c3e88d]">"/login"</span>, json={"{"}<span className="text-[#c3e88d]">"email"</span>: <span className="text-[#c3e88d]">"victim@test.com"</span>,</div>
                                <div className="code-line">{"                                          "}<span className="text-[#c3e88d]">"password"</span>: <span className="text-[#c3e88d]">{"f\"wrong_{i}\""}</span>{"}"})</div>
                                <div className="code-line">{"        "}r = api_client.post(<span className="text-[#c3e88d]">"/login"</span>, json={"{"}<span className="text-[#c3e88d]">"email"</span>: <span className="text-[#c3e88d]">"victim@test.com"</span>,</div>
                                <div className="code-line">{"                                         "}<span className="text-[#c3e88d]">"password"</span>: <span className="text-[#c3e88d]">"correct"</span>{"}"})</div>
                                <div className="code-line">{"        "}assert r.status_code == <span className="text-[#f78c6c]">429</span>{"  "}<span className="text-[#4a7c59] italic"># ✅ アカウントロック</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            4.4 信頼性テスト（Reliability Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 ml-2">K3</span>
                        </div>

                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">サブ特性</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">概要</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">測定指標</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">テスト方法</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">成熟性</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">通常運用中の故障発生頻度</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">MTBF（平均故障間隔）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">長期運用テスト・信頼性成長テスト</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">可用性</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">使用可能な状態にある時間の割合</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">Availability(%) / ダウンタイム</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">99.9%="3ナイン"=年8.76時間停止</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">耐障害性</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">故障時も機能を維持できる能力</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">グレースフルデグラデーション</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">障害注入テスト（Chaos Engineering）</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20">回復性</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">障害後に回復できる速さ</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">RTO（目標復旧時間）・RPO（目標復旧点）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">クラッシュ後の復旧時間測定</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">可用性レベルと許容ダウンタイム</div>
                        <div className="tta-progress-list">
                            <div className="tta-progress-item">
                                <div className="tta-progress-head">
                                    <span className="tta-progress-name">99.9% "3ナイン" — 年間最大停止: 8.76時間</span><span className="tta-progress-val">99.9%</span>
                                </div>
                                <div className="tta-progress-track">
                                    <div className="tta-progress-fill" style={{ '--target-width': '99.9%', background: 'linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-green))' } as React.CSSProperties}></div>
                                </div>
                            </div>
                            <div className="tta-progress-item">
                                <div className="tta-progress-head">
                                    <span className="tta-progress-name">99.99% "4ナイン" — 年間最大停止: 52.6分</span><span className="tta-progress-val">99.99%</span>
                                </div>
                                <div className="tta-progress-track">
                                    <div className="tta-progress-fill" style={{ '--target-width': '99.99%', background: 'linear-gradient(90deg, var(--color-accent-orange), var(--color-accent-green))' } as React.CSSProperties}></div>
                                </div>
                            </div>
                            <div className="tta-progress-item">
                                <div className="tta-progress-head">
                                    <span className="tta-progress-name">99.999% "5ナイン" — 年間最大停止: 5.26分</span><span className="tta-progress-val">99.999%</span>
                                </div>
                                <div className="tta-progress-track">
                                    <div className="tta-progress-fill" style={{ '--target-width': '100%', background: 'linear-gradient(90deg, var(--color-accent-red), var(--color-accent-orange), var(--color-accent-green))' } as React.CSSProperties}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            4.5 パフォーマンステスト（Performance Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20 ml-2">K3 ★</span>
                        </div>

                        <div className="my-8 flex flex-col items-center gap-3">
                            <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" className="max-w-[700px] w-full">
                                <text x="350" y="22" textAnchor="middle" fill="#f6ad55" fontSize="12" fontFamily="'JetBrains Mono',monospace" fontWeight="bold">5種類のパフォーマンステスト — 負荷パターン比較</text>
                                {/* Axes */}
                                <line x1="60" y1="195" x2="680" y2="195" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                                <line x1="60" y1="45" x2="60" y2="195" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                                <text x="370" y="218" textAnchor="middle" fill="#8ea3c3" fontSize="9" fontFamily="'JetBrains Mono',monospace">時間 →</text>
                                <text x="30" y="120" textAnchor="middle" fill="#8ea3c3" fontSize="9" fontFamily="'JetBrains Mono',monospace" transform="rotate(-90,30,120)">負荷 →</text>
                                {/* Load Test: steady ramp */}
                                <polyline points="70,190 120,160 170,130 220,120 270,120 320,120" fill="none" stroke="#68d391" strokeWidth="2.5" />
                                <text x="195" y="115" textAnchor="middle" fill="#68d391" fontSize="9" fontFamily="'JetBrains Mono',monospace">① ロード</text>
                                {/* Stress Test: keeps rising */}
                                <polyline points="70,190 110,170 150,150 190,130 230,110 270,85 310,60 350,50" fill="none" stroke="#fc8181" strokeWidth="2.5" />
                                <text x="310" y="45" fill="#fc8181" fontSize="9" fontFamily="'JetBrains Mono',monospace">② ストレス</text>
                                {/* Spike Test: sudden jump */}
                                <polyline points="360,190 380,190 385,70 400,70 405,190 430,190" fill="none" stroke="#b794f4" strokeWidth="2.5" />
                                <text x="393" y="58" textAnchor="middle" fill="#b794f4" fontSize="9" fontFamily="'JetBrains Mono',monospace">③ スパイク</text>
                                {/* Soak Test: steady long */}
                                <polyline points="70,150 90,140 100,135 105,132 600,132 610,190" fill="none" stroke="#4fd1c5" strokeWidth="2" strokeDasharray="6,3" />
                                <text x="340" y="127" textAnchor="middle" fill="#4fd1c5" fontSize="9" fontFamily="'JetBrains Mono',monospace">④ ソーク（長時間連続）</text>
                                {/* Scalability: step up */}
                                <polyline points="450,190 470,190 475,160 500,160 505,130 530,130 535,100 560,100 565,75 590,75" fill="none" stroke="#f6ad55" strokeWidth="2.5" />
                                <text x="545" y="68" textAnchor="middle" fill="#f6ad55" fontSize="9" fontFamily="'JetBrains Mono',monospace">⑤ スケーラビリティ</text>
                            </svg>
                            <div className="text-[0.8rem] text-text-muted text-center italic">図4-2: 5種類のパフォーマンステストの負荷パターン比較</div>
                        </div>

                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">テストタイプ</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">概要</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">目的</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">ロードテスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">期待される通常負荷下での動作確認</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">SLA達成確認</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">同時100ユーザー・1,000 RPS</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20">ストレステスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">システム限界値を超えた場合の動作確認</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">破断点（Breaking Point）特定</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">徐々に負荷を上げて限界を探る</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">スパイクテスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">急激な負荷増加への対応確認</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">フラッシュセール・突発アクセス耐性</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">100→1,000ユーザーに一瞬で変化</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">ソークテスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">長時間継続負荷での安定性確認</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">メモリリーク・リソース枯渇の検出</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">48時間連続での定常負荷</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">スケーラビリティテスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">負荷増加に対してリニアにスケールするか確認</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">水平/垂直スケールの検証</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">段階的に負荷を上げて性能変化を測定</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            4.6 保守性テスト（Maintainability Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20 ml-2">K2</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">静的保守性テスト（ツールで測定）</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">循環的複雑度 — 目標: 10以下</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">コード重複率 — 目標: 5%以下</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">コメント密度 — 目標: 20%以上</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">結合度・凝集度の分析</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">保守性指標（MI）の計算</li>
                                </ul>
                            </div>
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">ISO 25010 保守性サブ特性</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">モジュール性（Modularity）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">再利用性（Reusability）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">分析可能性（Analysability）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">変更可能性（Modifiability）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">テスト可能性（Testability）</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            4.7 移植性テスト（Portability Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20 ml-2">K2</span>
                        </div>
                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">サブ特性</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">概要</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">テスト例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">適応性</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">異なるOS・クラウド・ハードウェアへの適応</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">Windows/Linux/macOS での動作確認</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">インストール可能性</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">インストール・アンインストール・アップグレード</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">クリーンインストール・ロールバックテスト</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">置換可能性</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">同様の製品に置き換え可能か</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">データエクスポート/インポートの互換性確認</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">インストール可能性テスト チェックリスト</div>
                        <ul className="step-list">
                            <li className="step-item">
                                <div className="step-num-circle">1</div>
                                <div className="step-content">
                                    <div className="step-title">クリーンインストール確認</div>
                                    <div className="step-desc">依存関係がない環境でインストールが正常完了すること</div>
                                </div>
                            </li>
                            <li className="step-item">
                                <div className="step-num-circle">2</div>
                                <div className="step-content">
                                    <div className="step-title">アップグレードテスト</div>
                                    <div className="step-desc">v1.0→v2.0後も設定・データが維持されること</div>
                                </div>
                            </li>
                            <li className="step-item">
                                <div className="step-num-circle">3</div>
                                <div className="step-content">
                                    <div className="step-title">ロールバックテスト</div>
                                    <div className="step-desc">アップグレード失敗時に旧バージョンに戻せること</div>
                                </div>
                            </li>
                            <li className="step-item">
                                <div className="step-num-circle">4</div>
                                <div className="step-content">
                                    <div className="step-title">アンインストール確認</div>
                                    <div className="step-desc">アンインストール後にゴミファイル・レジストリが残らないこと</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">
                            4.8 互換性テスト（Compatibility Testing）<span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 ml-2">K2</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">共存テスト（Co-existence）</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">他のソフトウェアとの競合確認</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">アンチウイルスとの共存</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">同一環境での並列動作確認</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">リソース競合の検出</li>
                                </ul>
                            </div>
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">相互運用性テスト（Interoperability）</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">ブラウザ互換性（Chrome/Firefox/Safari/Edge）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">後方互換性（旧バージョンのデータ形式）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">API前方互換性</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">データ形式互換性（JSON/XML/CSV）</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[960px] mx-auto px-6 relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent my-12 opacity-30"></div></div>

            {/* CHAPTER 5 */}
            <section className="py-16 pb-12" id="ch5">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="mb-10">
                        <div className="inline-block font-mono text-[0.7rem] text-accent-orange border border-accent-orange px-3 py-1 rounded-full tracking-widest mb-3">CHAPTER 5 | K3 適用 ★★★</div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                            レビュー<span className="text-accent-cyan">（Reviews）</span>
                        </h2>
                        <p className="text-text-secondary text-base mt-3 border-l-4 border-accent-cyan pl-4">
                            TTAは技術的専門知識を活かしてレビューに参加する。アーキテクチャレビューとコードレビューが主要な担当領域。
                        </p>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">5.1 TTAがレビューで担当する観点</div>
                        <div className="tta-arch-layers">
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-red)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">🔒</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">セキュリティ観点</div>
                                    <div className="arch-desc">ハードコードされた認証情報・SQLクエリのプリペアドステートメント未使用・エラーメッセージの機密情報露出</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-orange)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">⚡</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">パフォーマンス観点</div>
                                    <div className="arch-desc">N+1クエリ問題（ループ内DBアクセス）・不必要なオブジェクト生成・キャッシュ未適用</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-cyan)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">🛡️</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">信頼性観点</div>
                                    <div className="arch-desc">全ての例外がハンドリングされているか・リソース（DB接続等）が確実にクローズされるか・トランザクション処理</div>
                                </div>
                            </div>
                            <div className="tta-arch-layer" style={{ '--accent': 'var(--color-accent-green)' } as React.CSSProperties}>
                                <div className="tta-arch-icon">🔧</div>
                                <div className="tta-arch-info">
                                    <div className="arch-name">保守性観点</div>
                                    <div className="arch-desc">命名が意図を表しているか・マジックナンバーが定数化されているか・DRY原則・単一責任の原則</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">5.2 コードレビューチェックリスト実践</div>
                        <div className="tta-compare-wrap">
                            <div className="tta-compare-box bad">
                                <div className="tta-compare-label">❌ レビューで指摘すべきコード</div>
                                <pre className="font-mono text-[0.78rem] leading-relaxed text-text-secondary overflow-x-auto">
<div className="code-line"><span className="text-[#c792ea]">class</span> BadService:</div>
<div className="code-line">    <span className="text-[#c792ea]">def</span> login(self, username, password):</div>
<div className="code-line">        <span className="text-[#4a7c59] italic"># ❌ SQLインジェクション脆弱性</span></div>
<div className="code-line">        q = f<span className="text-accent-red">"SELECT * FROM users</span></div>
<div className="code-line"><span className="text-accent-red">          WHERE name='{"{username}"}'"</span></div>
<div className="code-line">        user = self.db.execute(q)</div>
<div className="code-line"></div>
<div className="code-line">        <span className="text-[#4a7c59] italic"># ❌ ハードコードされた認証情報</span></div>
<div className="code-line">        <span className="text-[#c792ea]">if</span> username == <span className="text-accent-red">"admin"</span> <span className="text-[#c792ea]">and</span> \</div>
<div className="code-line">           password == <span className="text-accent-red">"admin123"</span>:</div>
<div className="code-line">            <span className="text-[#c792ea]">return</span> <span className="text-[#f78c6c]">True</span></div>
<div className="code-line"></div>
<div className="code-line">        <span className="text-[#4a7c59] italic"># ❌ 詳細すぎるエラーメッセージ</span></div>
<div className="code-line">        <span className="text-[#c792ea]">if not</span> user:</div>
<div className="code-line">            <span className="text-[#c792ea]">raise</span> Exception(</div>
<div className="code-line">                f<span className="text-accent-red">"User '{"{username}"}' not found</span></div>
<div className="code-line"><span className="text-accent-red">                  in table 'users_db'"</span>)</div>
                                </pre>
                            </div>
                            <div className="tta-compare-box good">
                                <div className="tta-compare-label">✅ レビュー修正後のコード</div>
                                <pre className="font-mono text-[0.78rem] leading-relaxed text-text-secondary overflow-x-auto">
<div className="code-line"><span className="text-[#c792ea]">class</span> GoodService:</div>
<div className="code-line">    <span className="text-[#c792ea]">def</span> login(self, username: str,</div>
<div className="code-line">              password: str) -&gt; bool:</div>
<div className="code-line">        <span className="text-[#4a7c59] italic"># ✅ プリペアドステートメント</span></div>
<div className="code-line">        q = <span className="text-accent-green">"SELECT * FROM users</span></div>
<div className="code-line"><span className="text-accent-green">          WHERE name = ?"</span></div>
<div className="code-line">        user = self.db.execute(q, (username,))</div>
<div className="code-line"></div>
<div className="code-line">        <span className="text-[#c792ea]">if not</span> user:</div>
<div className="code-line">            <span className="text-[#4a7c59] italic"># ✅ 汎用的なエラーメッセージ</span></div>
<div className="code-line">            <span className="text-[#c792ea]">raise</span> AuthError(</div>
<div className="code-line">                <span className="text-accent-green">"Invalid credentials"</span>)</div>
<div className="code-line"></div>
<div className="code-line">        <span className="text-[#4a7c59] italic"># ✅ bcryptで安全に比較</span></div>
<div className="code-line">        <span className="text-[#c792ea]">return</span> bcrypt.check(</div>
<div className="code-line">            user[<span className="text-accent-green">"password"</span>], password)</div>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[960px] mx-auto px-6 relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent my-12 opacity-30"></div></div>

            {/* CHAPTER 6 */}
            <section className="py-16 pb-12" id="ch6">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="mb-10">
                        <div className="inline-block font-mono text-[0.7rem] text-accent-orange border border-accent-orange px-3 py-1 rounded-full tracking-widest mb-3">CHAPTER 6 | K3 適用 ★★★★</div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                            テストツールと<span className="text-accent-cyan">自動化</span>
                        </h2>
                        <p className="text-text-secondary text-base mt-3 border-l-4 border-accent-cyan pl-4">
                            テスト自動化アプローチの選択・ROIの評価・障害注入ツール・パフォーマンステストツール・モバイルテストツールなどを扱う。
                        </p>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">6.1 自動化アプローチの選択</div>
                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">アプローチ</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">メリット</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">デメリット</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">推奨用途</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">キャプチャ/リプレイ</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">素早く作成・技術スキル不要</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">メンテナンスコスト高・再利用性低</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">PoC・一時的な自動化</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">データ駆動テスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">テストデータのみ変更でテスト追加可能</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">—</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">入力バリデーション・境界値テスト</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">キーワード駆動テスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">非技術者がテストを記述できる・高い再利用性</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">キーワード開発コストが高い</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">BDDシナリオ・受入テスト</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">モデルベーステスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">テストケースの自動生成・カバレッジ最適化</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">モデル作成に専門知識が必要</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">状態機械を持つシステム</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">コードベーステスト</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">柔軟性・バージョン管理・再利用・保守が容易</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">プログラミングスキルが必要</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">APIテスト・ユニットテスト・E2E</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">6.2 障害注入ツール（Fault Injection / Fault Seeding）</div>

                        <div className="tta-compare-wrap">
                            <div className="tta-compare-box good">
                                <div className="tta-compare-label">フォールトシーディング — テスト品質の測定</div>
                                <pre className="font-mono text-[0.78rem] leading-relaxed text-text-secondary overflow-x-auto">
<div className="code-line"><span className="text-[#4a7c59] italic"># ミューテーションテスト（Mutmut）</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># 元コード</span></div>
<div className="code-line"><span className="text-[#c792ea]">def</span> is_adult(age: int) -&gt; bool:</div>
<div className="code-line">{"    "}<span className="text-[#c792ea]">return</span> age &gt;= <span className="text-[#f78c6c]">18</span></div>
<div className="code-line"></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># Mutmutが生成するミュータント:</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># M1: return age &gt; 18   ← テストで検出できる?</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># M2: return age &lt;= 18  ← テストで検出できる?</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># M3: return age != 18  ← テストで検出できる?</span></div>
<div className="code-line"></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># ミューテーションスコア</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># = 殺されたミュータント / 総ミュータント × 100</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># 目標: 80%以上</span></div>
                                </pre>
                            </div>
                            <div className="tta-compare-box good">
                                <div className="tta-compare-label">フォールトインジェクション — 耐障害性テスト</div>
                                <pre className="font-mono text-[0.78rem] leading-relaxed text-text-secondary overflow-x-auto">
<div className="code-line"><span className="text-[#4a7c59] italic"># Chaos Monkey / Chaos Toolkit</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># 実行時に障害を注入して耐性を確認</span></div>
<div className="code-line"></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># 例: 依存サービスをダウンさせる</span></div>
<div className="code-line">dependencies[<span className="text-[#c3e88d]">"payment"</span>].inject_failure()</div>
<div className="code-line"></div>
<div className="code-line">response = system.post(<span className="text-[#c3e88d]">"/checkout"</span>)</div>
<div className="code-line">assert response.status_code == <span className="text-[#f78c6c]">503</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># ✅ 503 + 適切なエラーメッセージ</span></div>
<div className="code-line"></div>
<div className="code-line">response = system.get(<span className="text-[#c3e88d]">"/products"</span>)</div>
<div className="code-line">assert response.status_code == <span className="text-[#f78c6c]">200</span></div>
<div className="code-line"><span className="text-[#4a7c59] italic"># ✅ 関係ない機能は正常稼働</span></div>
                                </pre>
                            </div>
                        </div>

                        <div className="table-wrapper">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">手法</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">目的</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">タイミング</th>
                                        <th className="bg-accent-cyan/10 p-3 font-mono text-[0.78rem] text-accent-cyan text-left tracking-wide border-b border-border">代表ツール</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-orange/10 text-accent-orange border border-accent-orange/20">フォールトシーディング</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">テストスイートの品質（欠陥検出能力）を測定するためにコードにバグを「植える」</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">静的（コードに埋め込む）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">Mutmut（Python）・PIT（Java）</td>
                                    </tr>
                                    <tr className="hover:bg-accent-cyan/5 border-b border-white/5">
                                        <td className="p-3 text-[0.88rem] text-text-secondary"><span className="inline-block font-mono text-[0.72rem] px-2 py-0.5 rounded bg-accent-red/10 text-accent-red border border-accent-red/20">フォールトインジェクション</span></td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">耐障害性テストのために実行時に障害を注入</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">動的（実行時に注入）</td>
                                        <td className="p-3 text-[0.88rem] text-text-secondary">Chaos Monkey・Chaos Toolkit・Gremlin</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">6.3 主要テストツール一覧（2025年版）</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">🚀 パフォーマンステストツール</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong className="text-accent-green">k6</strong> — Grafana製・CI/CD統合が容易 ⭐⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong className="text-accent-cyan">JMeter</strong> — 老舗・豊富なプラグイン ⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong className="text-accent-orange">Locust</strong> — Python・分散実行 ⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Gatling</strong> — Scala・高スループット ⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Artillery</strong> — Node.js・軽量 ⭐⭐⭐</li>
                                </ul>
                            </div>
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">🔒 セキュリティテストツール</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong className="text-accent-red">OWASP ZAP</strong> — Webアプリ脆弱性スキャン ⭐⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Burp Suite</strong> — インターセプトプロキシ ⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Nmap</strong> — ネットワークポートスキャン ⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Metasploit</strong> — 侵入テストフレームワーク ⭐⭐⭐</li>
                                </ul>
                            </div>
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">🌐 ブラウザ・Webテストツール</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong className="text-accent-green">Playwright</strong> — クロスブラウザ・高速 ⭐⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Cypress</strong> — SPA向け・タイムトラベルデバッグ ⭐⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Selenium</strong> — レガシー対応・広範囲 ⭐⭐⭐</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Lighthouse</strong> — パフォーマンス/アクセシビリティ ⭐⭐⭐⭐</li>
                                </ul>
                            </div>
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">📱 モバイルアプリテストツール</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong className="text-accent-cyan">Appium</strong> — iOS/Android・オープンソース</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>XCUITest</strong> — iOS専用・Apple公式・高速</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Espresso</strong> — Android専用・Google公式</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>Detox</strong> — React Native向け</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan"><strong>BrowserStack</strong> — クラウド実機テスト</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">6.4 テスト自動化のROI計算</div>
                        <div className="code-block bg-[#060e1a] border border-border rounded-xl overflow-hidden my-6">
                            <div className="code-header flex items-center justify-between px-4 py-2.5 bg-accent-cyan/5 border-b border-border">
                                <span className="font-mono text-[0.72rem] text-accent-cyan tracking-wider">Python — 自動化ROI計算モデル</span>
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                                </div>
                            </div>
                            <div className="p-5 overflow-x-auto text-[0.82rem] font-mono leading-relaxed text-text-primary">
                                <div className="code-line"><span className="text-[#c792ea]">def</span> <span className="text-[#82aaff]">calculate_automation_roi</span>(</div>
                                <div className="code-line">{"    "}manual_time_per_tc: <span className="text-accent-cyan">float</span>,     <span className="text-[#4a7c59] italic"># 手動1TC実行時間（時間）</span></div>
                                <div className="code-line">{"    "}tc_count:           <span className="text-accent-cyan">int</span>,         <span className="text-[#4a7c59] italic"># テストケース数</span></div>
                                <div className="code-line">{"    "}runs_per_year:      <span className="text-accent-cyan">int</span>,         <span className="text-[#4a7c59] italic"># 年間実行回数</span></div>
                                <div className="code-line">{"    "}dev_cost:           <span className="text-accent-cyan">float</span>,     <span className="text-[#4a7c59] italic"># 自動化開発コスト（時間）</span></div>
                                <div className="code-line">{"    "}maintenance:        <span className="text-accent-cyan">float</span>,     <span className="text-[#4a7c59] italic"># 年間メンテナンス（時間）</span></div>
                                <div className="code-line">{"    "}rate:               <span className="text-accent-cyan">float</span> = <span className="text-[#f78c6c]">8000</span>  <span className="text-[#4a7c59] italic"># 時給（円）</span></div>
                                <div className="code-line">) -&gt; dict:</div>
                                <div className="code-line">{"    "}annual_manual = manual_time_per_tc * tc_count * runs_per_year * rate</div>
                                <div className="code-line">{"    "}annual_auto_cost = maintenance * rate</div>
                                <div className="code-line">{"    "}annual_savings = annual_manual - annual_auto_cost</div>
                                <div className="code-line">{"    "}investment = dev_cost * rate</div>
                                <div className="code-line">{"    "}roi = (annual_savings - investment) / investment * <span className="text-[#f78c6c]">100</span></div>
                                <div className="code-line">{"    "}breakeven_months = investment / (annual_savings / <span className="text-[#f78c6c]">12</span>)</div>
                                <div className="code-line">{"    "}<span className="text-[#c792ea]">return</span> {'{'}</div>
                                <div className="code-line">{"        "}<span className="text-[#c3e88d]">"年間手動コスト"</span>:   <span className="text-[#c3e88d]">{"f\"¥{annual_manual:,.0f}\""}</span>,</div>
                                <div className="code-line">{"        "}<span className="text-[#c3e88d]">"年間節約額"</span>:       <span className="text-[#c3e88d]">{"f\"¥{annual_savings:,.0f}\""}</span>,</div>
                                <div className="code-line">{"        "}<span className="text-[#c3e88d]">"初期投資"</span>:         <span className="text-[#c3e88d]">{"f\"¥{investment:,.0f}\""}</span>,</div>
                                <div className="code-line">{"        "}<span className="text-[#c3e88d]">"ROI"</span>:              <span className="text-[#c3e88d]">{"f\"{roi:.0f}%\""}</span>,</div>
                                <div className="code-line">{"        "}<span className="text-[#c3e88d]">"Break-even"</span>:      <span className="text-[#c3e88d]">{"f\"{breakeven_months:.1f}ヶ月\""}</span></div>
                                <div className="code-line">{"    "}{'}'}</div>
                                <div className="code-line"></div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># 例: 50TC × 年26回 × 30分/TC → 自動化開発200時間</span></div>
                                <div className="code-line">result = calculate_automation_roi(<span className="text-[#f78c6c]">0.5</span>, <span className="text-[#f78c6c]">50</span>, <span className="text-[#f78c6c]">26</span>, <span className="text-[#f78c6c]">200</span>, <span className="text-[#f78c6c]">50</span>)</div>
                                <div className="code-line"><span className="text-[#4a7c59] italic"># → ROI: 数百%・Break-Even: 2〜3ヶ月</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[960px] mx-auto px-6 relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent my-12 opacity-30"></div></div>

            {/* EXAM PREP */}
            <section className="py-16 pb-12" id="exam">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="mb-10">
                        <div className="inline-block font-mono text-[0.7rem] text-accent-orange border border-accent-orange px-3 py-1 rounded-full tracking-widest mb-3">試験対策 | サンプル問題と解説</div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                            試験対策<span className="text-accent-cyan">チェックリスト</span>
                        </h2>
                        <p className="text-text-secondary text-base mt-3 border-l-4 border-accent-cyan pl-4">
                            CTAL-TTA v4.0 試験は45問・120分・合格点51/78点（約65%）。K2〜K4レベルのシナリオ型問題が多数。
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 my-8">
                        <div className="bg-bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-1 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] transition-all">
                            <div className="font-mono text-2xl font-bold text-accent-green leading-none mb-2">45</div>
                            <div className="text-[0.8rem] text-text-muted">問題数</div>
                        </div>
                        <div className="bg-bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-1 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] transition-all">
                            <div className="font-mono text-2xl font-bold text-accent-green leading-none mb-2">78</div>
                            <div className="text-[0.8rem] text-text-muted">満点</div>
                        </div>
                        <div className="bg-bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-1 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] transition-all">
                            <div className="font-mono text-2xl font-bold text-accent-green leading-none mb-2">51</div>
                            <div className="text-[0.8rem] text-text-muted">合格点</div>
                        </div>
                        <div className="bg-bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-1 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] transition-all">
                            <div className="font-mono text-2xl font-bold text-accent-green leading-none mb-2">65%</div>
                            <div className="text-[0.8rem] text-text-muted">合格率目標</div>
                        </div>
                        <div className="bg-bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-1 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] transition-all">
                            <div className="font-mono text-2xl font-bold text-accent-green leading-none mb-2">120</div>
                            <div className="text-[0.8rem] text-text-muted">試験時間（分）</div>
                        </div>
                        <div className="bg-bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-1 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] transition-all">
                            <div className="font-mono text-2xl font-bold text-accent-green leading-none mb-2">n+1</div>
                            <div className="text-[0.8rem] text-text-muted">MC/DC最小テスト数</div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">必ず覚える重要概念</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">Chapter 2: ホワイトボックス（最重要）</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">カバレッジ強さ: ステートメント ＜ デシジョン ＜ MC/DC ＜ 多重条件</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">MC/DC最小テスト数: <strong className="text-accent-green">n+1</strong>（n = 原子条件数）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">SIL3 → MC/DC テスト必須</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">DO-178C Level B → MC/DC 必須</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">多重条件テスト = 2ⁿ 全組み合わせ</li>
                                </ul>
                            </div>
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">Chapter 4: 品質特性（最重要）</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">セキュリティのCIA = 機密性・完全性・可用性</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">信頼性サブ特性: 成熟性・可用性・耐障害性・回復性</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">5種類のパフォーマンステスト（ロード/ストレス/スパイク/ソーク/スケーラビリティ）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">移植性: 適応性・インストール可能性・置換可能性</li>
                                </ul>
                            </div>
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">Chapter 3: 静的・動的分析</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">静的分析: コードを実行しない（CC・データフロー）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">動的分析: 実行時のみ（メモリリーク・ワイルドポインタ）</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">データフロー問題: dd・du・ur の3パターン</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">CC良好範囲: 1〜10</li>
                                </ul>
                            </div>
                            <div className="bg-bg-card border border-border rounded-xl p-5">
                                <div className="font-mono text-[0.78rem] text-accent-green mb-3 tracking-wide">Chapter 1: TTA の役割</div>
                                <ul className="list-none p-0 m-0">
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">TTA → 技術的製品リスクの<strong className="text-accent-green">発生確率（Likelihood）</strong>を提案</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">TA → ビジネスへの<strong className="text-accent-cyan">影響度（Impact）</strong>を評価</li>
                                    <li className="text-[0.88rem] text-text-secondary py-1 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent-cyan">TM → 最終リスクレベルの決定</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <div className="font-display text-[1.2rem] font-bold text-accent-cyan mb-4 flex items-center gap-2 before:content-['▸'] before:text-accent-green">サンプル問題と解説</div>

                        <div className="tta-trend-card">
                            <div className="tta-trend-label">問1 — K4 / Chapter 2</div>
                            <div className="tta-trend-title">条件式 (A AND B) OR C に MC/DC を適用する場合の最小テストケース数は？</div>
                            <div className="tta-trend-body">
                                <strong>A) 3&nbsp;&nbsp; B) 4&nbsp;&nbsp; C) 5&nbsp;&nbsp; D) 8</strong><br /><br />
                                <strong className="text-accent-green">正解: B（4テストケース）</strong><br />
                                原子条件数 n = 3（A,B,C）→ MC/DC最小数 = n + 1 = <strong className="text-accent-green">4</strong><br />
                                D)の8は多重条件テスト（2³=8）の全組み合わせの場合。MC/DCはそれを4に最小化できる。
                            </div>
                        </div>

                        <div className="tta-trend-card">
                            <div className="tta-trend-label">問2 — K3 / Chapter 2</div>
                            <div className="tta-trend-title">IEC 61508 SIL3 システムで推奨されるホワイトボックステスト技法は？</div>
                            <div className="tta-trend-body">
                                <strong>A) ステートメントテスト&nbsp;&nbsp; B) デシジョンテスト&nbsp;&nbsp; C) MC/DCテスト&nbsp;&nbsp; D) 多重条件テスト</strong><br /><br />
                                <strong className="text-accent-green">正解: C（MC/DC テスト）</strong><br />
                                SIL1→ステートメント / SIL2→デシジョン / <strong className="text-accent-green">SIL3→MC/DC（強く推奨）</strong> / SIL4→多重条件
                            </div>
                        </div>

                        <div className="tta-trend-card">
                            <div className="tta-trend-label">問3 — K2 / Chapter 3</div>
                            <div className="tta-trend-title">動的分析のみで検出できる問題はどれか？</div>
                            <div className="tta-trend-body">
                                <strong>A) コードの循環的複雑度が高い&nbsp;&nbsp; B) 変数が定義されているが使用されていない&nbsp;&nbsp; C) 実行時のメモリリーク&nbsp;&nbsp; D) コーディング規約違反</strong><br /><br />
                                <strong className="text-accent-green">正解: C（実行時のメモリリーク）</strong><br />
                                A・B・Dは静的分析で検出可能。C（メモリリーク）は実際にコードを実行して観察する動的分析でしか検出できない。
                            </div>
                        </div>

                        <div className="tta-trend-card">
                            <div className="tta-trend-label">問4 — K3 / Chapter 4</div>
                            <div className="tta-trend-title">通常100ユーザーから突然1,000ユーザーに急増した場合の動作を検証するパフォーマンステストはどれか？</div>
                            <div className="tta-trend-body">
                                <strong>A) ロードテスト&nbsp;&nbsp; B) ストレステスト&nbsp;&nbsp; C) スパイクテスト&nbsp;&nbsp; D) ソークテスト</strong><br /><br />
                                <strong className="text-accent-green">正解: C（スパイクテスト）</strong><br />
                                A)通常負荷確認 / B)限界値まで徐々に上昇 / <strong className="text-accent-green">C)急激な負荷増加への耐性確認 ✅</strong> / D)長時間継続運用の安定性確認
                            </div>
                        </div>

                        <div className="tta-trend-card">
                            <div className="tta-trend-label">問5 — K4 / Chapter 1</div>
                            <div className="tta-trend-title">TTAがリスク評価において主に担当する役割はどれか？</div>
                            <div className="tta-trend-body">
                                <strong>A) リスク全体管理と最終リスクレベルの決定&nbsp;&nbsp; B) ビジネスへの影響度の評価&nbsp;&nbsp; C) 技術的製品リスクの発生確率の提案&nbsp;&nbsp; D) リスクワークショップのファシリテーション</strong><br /><br />
                                <strong className="text-accent-green">正解: C（技術的製品リスクの発生確率の提案）</strong><br />
                                A・D → TM（テスト管理者）/ B → TA（テストアナリスト）/ <strong className="text-accent-green">C → TTA ✅</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[960px] mx-auto px-6 relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent my-12 opacity-30"></div></div>

            {/* REFERENCES */}
            <section className="py-16 pb-24" id="refs">
                <div className="max-w-[960px] mx-auto px-6 relative z-10">
                    <div className="mb-10">
                        <div className="inline-block font-mono text-[0.7rem] text-accent-orange border border-accent-orange px-3 py-1 rounded-full tracking-widest mb-3">参考資料</div>
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary leading-tight">
                            参照<span className="text-accent-cyan">URL 一覧</span>
                        </h2>
                    </div>

                    <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">公式 ISTQB® リソース</div>
                    <div className="tta-ref-grid">
                        <a className="tta-ref-card" href="https://istqb.org/certifications/certified-tester-advanced-level-technical-test-analyst-ctal-tta/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">公式 ISTQB®</div>
                            <div className="tta-ref-title">CTAL-TTA 認定ページ（公式）</div>
                            <div className="tta-ref-url">istqb.org/.../ctal-tta</div>
                        </a>
                        <a className="tta-ref-card" href="https://astqb.org/assets/documents/ISTQB_CTAL-TTA_Syllabus_v4.0.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">公式 ISTQB®</div>
                            <div className="tta-ref-title">CTAL-TTA v4.0 シラバス PDF（ASTQB）</div>
                            <div className="tta-ref-url">astqb.org/.../ISTQB_CTAL-TTA_Syllabus_v4.0.pdf</div>
                        </a>
                        <a className="tta-ref-card" href="https://istqb.org/?sdm_process_download=1&download_id=3464" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">公式 ISTQB®</div>
                            <div className="tta-ref-title">サンプル試験問題 v4.2</div>
                            <div className="tta-ref-url">istqb.org/?sdm_process_download=1&amp;download_id=3464</div>
                        </a>
                        <a className="tta-ref-card" href="https://istqb.org/?sdm_process_download=1&download_id=3465" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">公式 ISTQB®</div>
                            <div className="tta-ref-title">サンプル試験解答 v4.2</div>
                            <div className="tta-ref-url">istqb.org/?sdm_process_download=1&amp;download_id=3465</div>
                        </a>
                        <a className="tta-ref-card" href="https://glossary.istqb.org/en_US/search?term=" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">公式 ISTQB®</div>
                            <div className="tta-ref-title">ISTQB グロッサリー（用語集）</div>
                            <div className="tta-ref-url">glossary.istqb.org</div>
                        </a>
                    </div>

                    <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">試験プロバイダー・学習リソース</div>
                    <div className="tta-ref-grid">
                        <a className="tta-ref-card" href="https://isqi.org/ISTQB-Certified-Tester-Technical-Test-Analyst-CTAL-TTA/CT-AL-TTA.737" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">試験プロバイダー</div>
                            <div className="tta-ref-title">iSQI 試験情報（CTAL-TTA）</div>
                            <div className="tta-ref-url">isqi.org/.../CT-AL-TTA</div>
                        </a>
                        <a className="tta-ref-card" href="https://www.istqb.guru/technical-test-analyst/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">学習リソース</div>
                            <div className="tta-ref-title">ISTQB.Guru CTAL-TTA ガイド</div>
                            <div className="tta-ref-url">istqb.guru/technical-test-analyst/</div>
                        </a>
                        <a className="tta-ref-card" href="https://training.coveros.com/training/course/advanced-tester-certification-technical-test-analyst" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">学習リソース</div>
                            <div className="tta-ref-title">Coveros CTAL-TTA トレーニング</div>
                            <div className="tta-ref-url">training.coveros.com/.../ctal-tta</div>
                        </a>
                    </div>

                    <div className="font-display text-[1rem] font-semibold text-accent-orange my-6 flex items-center gap-2 before:content-['◆'] before:text-[0.6rem]">セキュリティ・パフォーマンス・静的分析ツール</div>
                    <div className="tta-ref-grid">
                        <a className="tta-ref-card" href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">セキュリティ</div>
                            <div className="tta-ref-title">OWASP Top 10</div>
                            <div className="tta-ref-url">owasp.org/www-project-top-ten/</div>
                        </a>
                        <a className="tta-ref-card" href="https://www.zaproxy.org/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">セキュリティ</div>
                            <div className="tta-ref-title">OWASP ZAP — Webアプリ脆弱性スキャナー</div>
                            <div className="tta-ref-url">zaproxy.org</div>
                        </a>
                        <a className="tta-ref-card" href="https://grafana.com/docs/k6/latest/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">パフォーマンス</div>
                            <div className="tta-ref-title">k6 公式ドキュメント</div>
                            <div className="tta-ref-url">grafana.com/docs/k6/latest/</div>
                        </a>
                        <a className="tta-ref-card" href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">パフォーマンス</div>
                            <div className="tta-ref-title">Apache JMeter 公式</div>
                            <div className="tta-ref-url">jmeter.apache.org</div>
                        </a>
                        <a className="tta-ref-card" href="https://www.sonarsource.com/products/sonarqube/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">静的分析</div>
                            <div className="tta-ref-title">SonarQube — コード品質分析</div>
                            <div className="tta-ref-url">sonarsource.com/products/sonarqube/</div>
                        </a>
                        <a className="tta-ref-card" href="https://valgrind.org/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">動的分析</div>
                            <div className="tta-ref-title">Valgrind — メモリリーク・ポインタ検出</div>
                            <div className="tta-ref-url">valgrind.org</div>
                        </a>
                        <a className="tta-ref-card" href="https://mutmut.readthedocs.io/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">ミューテーションテスト</div>
                            <div className="tta-ref-title">Mutmut（Python ミューテーションテスト）</div>
                            <div className="tta-ref-url">mutmut.readthedocs.io</div>
                        </a>
                        <a className="tta-ref-card" href="https://pitest.org/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">ミューテーションテスト</div>
                            <div className="tta-ref-title">PIT（Java ミューテーションテスト）</div>
                            <div className="tta-ref-url">pitest.org</div>
                        </a>
                        <a className="tta-ref-card" href="https://playwright.dev/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">ブラウザテスト</div>
                            <div className="tta-ref-title">Playwright 公式ドキュメント</div>
                            <div className="tta-ref-url">playwright.dev</div>
                        </a>
                        <a className="tta-ref-card" href="https://www.iso.org/standard/78176.html" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">品質標準</div>
                            <div className="tta-ref-title">ISO/IEC 25010:2023（ソフトウェア品質モデル）</div>
                            <div className="tta-ref-url">iso.org/standard/78176.html</div>
                        </a>
                        <a className="tta-ref-card" href="https://www.iec.ch/iec61508" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">機能安全規格</div>
                            <div className="tta-ref-title">IEC 61508 機能安全規格</div>
                            <div className="tta-ref-url">iec.ch/iec61508</div>
                        </a>
                        <a className="tta-ref-card" href="https://www.rtca.org/" target="_blank" rel="noopener noreferrer">
                            <div className="tta-ref-cat">航空宇宙</div>
                            <div className="tta-ref-title">DO-178C（RTCA）航空宇宙ソフトウェア標準</div>
                            <div className="tta-ref-url">rtca.org</div>
                        </a>
                    </div>
                </div>
            </section>
            </div>
        </>
    );
}
