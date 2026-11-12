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
import Section15 from './Section15';
import Section16 from './Section16';
import Section17 from './Section17';
import Section18 from './Section18';
import Section19 from './Section19';
import Section20 from './Section20';
import Section21 from './Section21';
export const metadata: Metadata = {"title":"IEC 62304:2006 初学者向けステップバイステップ解説ガイド","description":"IEC 62304の安全クラス、開発・保守・リスク管理・SOUP、関連規制と導入手順を解説する初学者向けガイド。"};
export default function Page() { return <div className="iec62304-page"><NavBar /><main className="main"><header className="hero">{" "}<span className="eyebrow">{"医療機器ソフトウェア ／ 規格ガイドシリーズ"}</span>{" "}<h1 className="hero-title">{"IEC 62304:2006 初学者向けステップバイステップ解説ガイド"}</h1>{" "}<p className="hero-sub">{"医療機器ソフトウェア ― ソフトウェアライフサイクルプロセス"}</p>{" "}<div className="hero-note">{" "}<p>{" "}<strong>{"情報時点"}</strong>{": 2026年10月23日までに確認できた公開情報に基づきます。 "}<strong>{"重要"}</strong>{": 本ガイドは学習用の解説です。規格本文の転載は行っておらず、要求事項の最終判断（特にクラス別の適用範囲）は、必ず規格原文（IEC 62304:2006+AMD1:2015 / JIS T 2304:2017）で確認してください。 "}</p>{" "}</div>{" "}</header><Section01 />
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
<Section16 />
<Section17 />
<Section18 />
<Section19 />
<Section20 />
<Section21 /><footer className="page-footer">{" IEC 62304:2006 初学者向けガイド（2026年10月23日時点の公開情報に基づく学習用解説。最終判断は規格原文で確認） "}</footer></main></div>; }
