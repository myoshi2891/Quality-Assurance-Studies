import React from 'react';
import type { Metadata } from 'next';
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
export const metadata: Metadata = { title: "ISO/IEC 2382-15:1999 初学者向け解説ガイド", description: 'ISO/IEC 2382-15:1999のプログラミング言語用語を、コード例・図解とともに学ぶ初学者向けガイド。' };
export default function Page() { return <div className="iso2382-page"><NavBar /><main className="main"><Section00 /><Section01 /><Section02 /><Section03 /><Section04 /><Section05 /><Section06 /><Section07 /><Section08 /><Section09 /></main></div>; }
