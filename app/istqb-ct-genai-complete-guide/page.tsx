import NavBar from './NavBar';

export const metadata = {
    title: 'ISTQB® CT-GenAI – Testing with Generative AI 完全ガイド 2025',
    description: '生成AI・LLMをテストの手段として活用するためのISTQBスペシャリスト資格(CT-GenAI)の完全学習ガイドです。',
};

export default function GenAICompleteGuidePage() {
    return (
        <div className="page-wrapper">
            <NavBar />
            <section className="hero" id="top">
                <div className="hero-glow"></div>
                <div className="hero-badge">ISTQB® SPECIALIST · 2025年7月25日 GA リリース</div>
                <h1 className="hero-title">
                    Testing with Generative AI
                </h1>
                <p className="hero-subtitle">CT-GenAI v1.0 完全学習ガイド — 初学者から実践者まで</p>
            </section>
            
            <section id="ch0" className="chapter">
                <h2>概要・資格ロードマップ</h2>
            </section>
        </div>
    );
}
