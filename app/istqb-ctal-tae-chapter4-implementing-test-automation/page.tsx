import React from 'react';
import './ctal-tae-ch4.css';
import Hero from './Hero';
import NavBar from './NavBar';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Footer from './Footer';

export default function Page() {
  return (
    <div className="ctal-tae-ch4-page">
      <div className="layout">
        <NavBar />
        <main>
          <Hero />
          <Section0 />
          <Section1 />
          <Section2 />
          <Footer />
        </main>
      </div>
    </div>
  );
}
