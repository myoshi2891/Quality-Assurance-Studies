import React from 'react';
import './ctal-tae-ch4.css';
import Hero from './Hero';
import Footer from './Footer';

export default function Page() {
  return (
    <div className="ctal-tae-ch4-page">
      <div className="layout">
        <main>
          <Hero />
          <Footer />
        </main>
      </div>
    </div>
  );
}
