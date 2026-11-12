import React from 'react';
import type {Metadata} from 'next';
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
export const metadata:Metadata = {"title": "ISO/IEC 29110-5-1-2:2025 初学者向けステップバイステップ解説ガイド", "description": "超小規模組織（VSE）のためのソフトウェア開発ガイドライン「Basicプロファイル」を、ゼロから理解する"};
/** Assemble the original categories in order, keeping interactive islands isolated. */
export default function Page(){return <div className="iso29110-page"><NavBar/><main className="content"><Section00/>{"\n"}<Section01/>{"\n"}<Section02/>{"\n"}<Section03/>{"\n"}<Section04/>{"\n"}<Section05/>{"\n"}<Section06/>{"\n"}<Section07/>{"\n"}<Section08/>{"\n"}<Section09/>{"\n"}<Section10/>{"\n"}<Section11/>{"\n"}<Section12/>{"\n"}<Section13/>{"\n"}<Section14/>{"\n"}<Section15/>{"\n"}<Section16/>{"\n"}<Section17/>{"\n"}</main></div>;}
