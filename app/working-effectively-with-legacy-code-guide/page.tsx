import React from 'react';
import type { Metadata } from 'next';
import './working-effectively-with-legacy-code-guide.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Introduction from './Introduction';
import Foundations from './Foundations';
import FiveSteps from './FiveSteps';
import Techniques from './Techniques';
import Practice from './Practice';
export const metadata: Metadata = { title: 'Working Effectively with Legacy Code 完全ガイド', description: 'テストのないコードを安全に変更する5ステップ、シーム、キャラクタリゼーションテスト、SproutとWrapの実践ガイド。' };
export default function Page() {return <div className="wewlc-page">
<link rel="stylesheet" precedence="default" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Noto+Serif+JP:wght@500;700&display=swap" />
<NavBar /><div className="layout"><main className="main"><Hero /><Introduction /><Foundations /><FiveSteps /><Techniques /><Practice /><footer className="footer">{"\n                    Working Effectively with Legacy Code 完全ガイド ― Classic Software Testing Books\n                    ガイドシリーズ\n                "}</footer></main></div></div>;}
