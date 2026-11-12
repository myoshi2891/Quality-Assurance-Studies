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
import Section14 from './Section14';
import Section15 from './Section15';
import Section16 from './Section16';
import Section17 from './Section17';
import Section18 from './Section18';

export const metadata: Metadata = {
  title: 'ISO/IEC AWI TS 42119-7 初学者向け解説ガイド',
  description: 'AIレッドチーミングの用語、リスク、方法論、測定・評価、報告、運用とエージェント型AIを学ぶ初学者向けガイド。',
};

/** Render the introduction and all eighteen source chapters in their original order. */
export default function Page() {
 return <div className="iso42119-7-page"><NavBar/><main className="main" id="main"><Section00/>
<Section01/>
<Section02/>
<Section03/>
<Section04/>
<Section05/>
<Section06/>
<Section07/>
<Section08/>
<Section09/>
<Section10/>
<Section11/>
<Section12/>
<Section13/>
<Section14/>
<Section15/>
<Section16/>
<Section17/>
<Section18/></main></div>;
}
