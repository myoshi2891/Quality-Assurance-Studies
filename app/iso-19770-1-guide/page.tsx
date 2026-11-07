import React from 'react';
import type { Metadata } from 'next';
import '../fonts/noto-sans-jp-800.css';
import './guide.css';
import NavBar from './NavBar';
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
export const metadata: Metadata = {"title":"ISO/IEC 19770-1:2017 初学者向け解説ガイド","description":"ISO/IEC 19770-1:2017のIT資産管理、マネジメントシステム、プロセス領域、段階的導入と関連規格を学ぶ初学者向けガイド。"};
export default function Page() { return <div className="iso19770-page"><NavBar /><main className="main"><header className="hero">{" "}<span className="eyebrow">{"ISO規格ガイドシリーズ ／ IT資産管理"}</span>{" "}<h1 className="hero-title">{" ISO/IEC 19770-1:2017"}<br />{"初学者向けステップバイステップ解説ガイド "}</h1>{" "}<p className="hero-sub">{"IT資産管理（ITAM）システム — 要求事項"}</p>{" "}<div className="hero-meta">{" "}<div><span>{"規格番号"}</span><strong>{"ISO/IEC 19770-1:2017"}</strong></div>{" "}<div><span>{"版"}</span><strong>{"第3版（2017年12月）"}</strong></div>{" "}<div><span>{"ステータス"}</span><strong>{"現行（2024年に確認済み）"}</strong></div>{" "}<div><span>{"情報時点"}</span><strong>{"2026年10月26日"}</strong></div>{" "}</div>{" "}</header><Section01 />
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
<Section14 /><footer className="page-footer">{" ISO/IEC 19770-1:2017 初学者向け解説ガイド ／ 情報時点 2026年10月26日 ／ 学習用の要約であり、規格原文の代替ではありません。 "}</footer></main></div>; }
