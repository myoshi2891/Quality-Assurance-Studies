import React from 'react';
import type { Metadata } from 'next';
import '../fonts/noto-sans-jp-800.css';
import './guide.css';
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
export const metadata: Metadata = { title: "ISO/IEC 9075-1:2023（SQLフレームワーク）初学者向け解説", description: 'SQL標準のシリーズ構成、Frameworkの役割、適合性、SQL:2023と実装状況を、図解・FAQ・学習チェックリストで学ぶ初学者向けガイド。' };
export default function Page() {
    return <div className="sql-framework-page"><div className="layout"><NavBar /><main className="main" id="top">
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
    </main></div></div>;
}
