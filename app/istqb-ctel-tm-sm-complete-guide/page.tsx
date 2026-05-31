import React from 'react';
import NavBar from './NavBar';
import './istqb-ctel-tm-sm-complete-guide.css';

export default function Page() {
    return (
        <div className="istqb-ctel-tm-sm-page">
            <NavBar />
            <main>
                <section className="hero" id="intro">
                    <div className="hero-badge">ISTQB® EXPERT LEVEL · 2025</div>
                    <h1>CTEL-TM-SM<br />完全ガイド</h1>
                    <p className="hero-sub">Expert Level Test Management — Strategic Test Management<br />初学者から実践者まで対応するステップバイステップ解説</p>
                </section>
            </main>
        </div>
    );
}
