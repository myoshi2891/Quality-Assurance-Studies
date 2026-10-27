import React from 'react';
import type { Metadata } from 'next';
import './software-testing-craftsmans-approach-guide.css';
import NavBar from './NavBar';
import Section00 from './Section00';
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';
import Section05 from './Section05';
import Section06 from './Section06';
import Section07 from './Section07';
import Section08 from './Section08';
import Section09 from './Section09';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';
import Section13 from './Section13';
import Section14 from './Section14';
import Section15 from './Section15';

export const metadata: Metadata = { title: "Software Testing: A Craftsman's Approach 入門ガイド", description: 'Jorgensenの名著に沿って、境界値分析・同値分割から高度な評価技法までテスト設計を体系的に学ぶ。' };

export default function Page() {
    return <div className="craftsmans-page"><div className="layout"><NavBar /><main className="content">
        <Section00 />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section08 />
        <Section09 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section13 />
        <Section14 />
        <Section15 />
    </main></div></div>;
}
