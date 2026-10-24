import React from 'react';
import '../fonts/noto-sans-jp-800.css';
import type { Metadata } from 'next';
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
import Section22 from './Section22';
import './iec-62304-beginner-guide.css';
export const metadata: Metadata = { title: "IEC 62304:2006 初学者向けステップバイステップ解説ガイド", description: 'IEC 62304の適用範囲、安全クラス、開発・保守・リスク管理、SOUPとQAの実践を学ぶ初学者向けガイド。' };
export default function Page() { return <div className="iec-62304-page"><div className="layout"><NavBar /><main className="main">
<header className="hero"><span className="eyebrow">{"規格ガイド ・ 医療機器ソフトウェア ・ 初学者向け"}</span><h1 className="hero-title">{" IEC 62304:2006 初学者向けステップバイステップ解説ガイド "}</h1><p className="hero-sub">{" 医療機器ソフトウェア ― ソフトウェアライフサイクルプロセス "}</p><div className="hero-meta"><div className="meta-item"><div className="meta-label">{"対象規格"}</div><div className="meta-value">{" IEC 62304:2006 Medical device software — Software life cycle processes "}</div></div><div className="meta-item"><div className="meta-label">{"実務上の現行版"}</div><div className="meta-value">{" IEC 62304:2006 + Amd 1:2015（統合版、通称「Edition 1.1」） "}</div></div><div className="meta-item"><div className="meta-label">{"情報基準日"}</div><div className="meta-value">{"2026年10月11日（Web検索時点）"}</div></div><div className="meta-item"><div className="meta-label">{"対象読者"}</div><div className="meta-value">{" 医療機器・ヘルスケアソフトウェアに初めて関わるエンジニア、QAエンジニア、PM "}</div></div><div className="meta-item"><div className="meta-label">{"公式情報"}</div><div className="meta-value"><a href="https://www.iso.org/standard/38421.html" rel="noopener noreferrer" target="_blank">{"https://www.iso.org/standard/38421.html"}</a></div></div></div></header>

<aside className="callout callout-warn"><div className="callout-icon">{"⚠"}</div><div className="callout-body"><p><strong>{"ご注意"}</strong></p><ul><li>{" 本ガイドは学習用の解説であり、規格本文の転載ではありません。規格の要求事項そのものは、必ず正規入手した原文（IEC / ISO / 各国規格協会）で確認してください。 "}</li><li>{" 規格本文は有償で、今回の調査では全文を直接参照できていません。条項番号や活動の細部は、公開されている解説記事と一般的な理解にもとづいて整理しています。監査・申請に使う前に原文照合が必要です。 "}</li><li>{"本ガイドは法的助言ではありません。"}</li></ul></div></aside>

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
<Section16 />
<Section17 />
<Section18 />
<Section19 />
<Section20 />
<Section21 />
<Section22 />
<footer className="page-footer">{" 作成日：2026年10月14日／情報基準日：2026年10月11日 "}</footer></main></div></div>; }
