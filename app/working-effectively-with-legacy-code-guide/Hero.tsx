import React from 'react';
export default function Hero() {return <>
    <header className="hero">
        <div className="eyebrow">
            {"CLASSIC SOFTWARE TESTING BOOKS ガイドシリーズ"}
        </div>
        <h1>
            {"Working Effectively with Legacy Code 完全ガイド"}
        </h1>
        <p className="subtitle">
            {" 初学者のためのステップバイステップ実践法 ― テストのないコードと安全に向き合うための考え方と技法 "}
        </p>
        <div className="hero-tags">
            <span className="hero-tag">
                {"初学者向け"}
            </span>
            <span className="hero-tag">
                {"ステップバイステップ"}
            </span>
            <span className="hero-tag">
                {"Michael C. Feathers"}
            </span>
            <span className="hero-tag">
                {"レガシーコード"}
            </span>
            <span className="hero-tag">
                {"テスト駆動リファクタリング"}
            </span>
        </div>
    </header>

    
    <div className="book-info-card">
        <div className="book-info-item">
            <div className="label">
                {"原題"}
            </div>
            <div className="value">
                {"Working Effectively with Legacy Code"}
            </div>
        </div>
        <div className="book-info-item">
            <div className="label">
                {"著者"}
            </div>
            <div className="value">
                {"Michael C. Feathers"}
            </div>
        </div>
        <div className="book-info-item">
            <div className="label">
                {"出版社"}
            </div>
            <div className="value">
                {"Prentice Hall PTR / Pearson"}
            </div>
        </div>
        <div className="book-info-item">
            <div className="label">
                {"刊行"}
            </div>
            <div className="value">
                {"2004年9月"}
            </div>
        </div>
        <div className="book-info-item">
            <div className="label">
                {"ページ数"}
            </div>
            <div className="value">
                {"464ページ"}
            </div>
        </div>
        <div className="book-info-item">
            <div className="label">
                {"書誌情報"}
            </div>
            <div className="value">
                <a href="https://www.oreilly.com/library/view/working-effectively-with/0131177052/" target="_blank" rel="noopener noreferrer">
                    {"O'Reilly 書誌ページ"}
                </a>
            </div>
        </div>
    </div>

    
    <div className="callout gold">
        <p>
            {" 本ガイドは同書の考え方・技法を初学者向けに要約・整理した学習用の副読資料です。詳細な手順やコード例は必ず原著をご確認ください。原文からの逐語的な引用は最小限（15語未満）に留め、各出典は要約・言い換えの形で紹介しています。 "}
        </p>
    </div>
</>;}
