import React from 'react';
import type { Metadata } from 'next';
import './testing-computer-software-guide.css';
import Hero from './Hero';
import NavBar from './NavBar';
import Book from './Book';
import Fundamentals from './Fundamentals';
import Strategies from './Strategies';
import Management from './Management';
import Practice from './Practice';
import References from './References';
export const metadata: Metadata = { title: 'Testing Computer Software 入門ガイド', description: 'テストの基礎から設計技法、自動化戦略、探索的テスト、バグ報告、CI/CDと実践チェックリストまで学ぶ入門ガイド。' };
export default function Page() {
    return <div className="tcs-page">
        <link rel="stylesheet" precedence="default" href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;700;900&display=swap" />
        <NavBar />
        <div className="layout"><main className="main">
            <Hero /><Book /><Fundamentals /><Strategies /><Management /><Practice /><References />
            <div className="footer">
                <p>
                    {" 本ガイドは 2026年8月31日 時点の公開情報に基づいて作成されています。各社のプロダクト仕様・記事内容は変更される場合があるため、最新情報は各出典URLでご確認ください。 "}
                </p>
            </div>
        </main></div>
    </div>;
}
