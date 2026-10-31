import type { Metadata } from 'next';
import './iso-29119-1-2022-guide.css';
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

export const metadata: Metadata = {
  title: 'ISO/IEC/IEEE 29119-1:2022 初学者向け解説ガイド',
  description: 'ソフトウェアテストの「共通言語」を学ぶ：一般概念（General concepts）をステップバイステップで理解する。',
};

export default function Iso29119_1_GuidePage() {
  return (
    <div className="iso-29119-1-page">
      <NavBar />
      <main className="main">
        <Hero />
        <article className="content">
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
        </article>
        <Footer />
      </main>
    </div>
  );
}
