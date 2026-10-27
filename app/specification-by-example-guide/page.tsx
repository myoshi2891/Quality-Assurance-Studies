import React from 'react';
import type { Metadata } from 'next';
import './specification-by-example-guide.css';
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

export const metadata: Metadata = { title: 'Specification by Example 実践ガイド', description: '具体例を中心に仕様を協働で定義し、Gherkin・継続的検証・生きたドキュメントを実践する入門ガイド。' };

export default function Page() {
    return <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Noto+Serif+JP:wght@500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" precedence="sbe-fonts" />
        <div className="sbe-page"><div className="layout"><NavBar /><main className="main">
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
        </main></div></div>
    </>;
}
