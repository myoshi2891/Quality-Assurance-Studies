import React from 'react';
import type { Metadata } from 'next';
import './iso-14496-22-guide.css';
import '../fonts/noto-sans-jp-800.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';
import Section13 from './Section13';
import Section14 from './Section14';
import Footer from './Footer';
export const metadata: Metadata = { title: 'ISO/IEC 14496-22:2026（Open Font Format）初学者向け解説ガイド' };
export default function Page() { return <div className="off-page"><NavBar /><main className="main">
<Hero />
<Section0 />
<Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section6 />
<Section7 />
<Section8 />
<Section9 />
<Section10 />
<Section11 />
<Section12 />
<Section13 />
<Section14 />
<Footer />
</main></div>; }
