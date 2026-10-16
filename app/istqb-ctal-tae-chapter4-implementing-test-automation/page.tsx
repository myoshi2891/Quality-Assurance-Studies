import React from 'react';
import './ctal-tae-ch4.css';
import Hero from './Hero';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Page() {
  return (
    <div className="ctal-tae-ch4-page">
      <div className="layout">
        <NavBar />
        <main>
          <Hero />
          <Footer />
        </main>
      </div>
    </div>
  );
}
