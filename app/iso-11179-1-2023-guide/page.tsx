import React from 'react';
import '@fontsource/noto-sans-jp/800.css';
import type { Metadata } from 'next';
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
import './iso-11179-1-2023-guide.css';
export const metadata: Metadata = { title: "ISO/IEC 11179-1:2023 初学者向けステップバイステップ解説ガイド", description: 'ISO/IEC 11179-1:2023のメタデータレジストリ、概念と表現の分離、登録運用とQAでの活用を段階的に学ぶ初学者向けガイド。' };
export default function Page() { return <div className="iso-11179-page"><NavBar /><main className="main">
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
</main></div>; }
