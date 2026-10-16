import React from 'react';

export default function Section6() {
  return (
    <section className="section" id="s6">
      <div className="section-head">
        <div className="section-icon">
          <i className="ti ti-books"></i>
        </div>
        <div>
          <span className="eyebrow">参考文献・出典</span>
          <h2>一次情報源</h2>
        </div>
      </div>

      <div className="ref-group">
        <h3>ISTQB® 公式資料</h3>
        <div className="ref-card">
          <i className="ti ti-certificate"></i>
          <div className="ref-card-body">
            <div className="ref-card-title">
              ISTQB® Certified Tester Advanced Level Test Automation
              Engineering（CTAL-TAE）v2.0 認定ページ
            </div>
            <a
              href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/
            </a>
          </div>
        </div>
        <div className="ref-card">
          <i className="ti ti-file-text"></i>
          <div className="ref-card-body">
            <div className="ref-card-title">
              ISTQB® CTAL-TAE Syllabus v2.0（本ガイドの一次情報源、第1章：pp.14-16）
            </div>
            <a
              href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf
            </a>
          </div>
        </div>
      </div>

      <p className="section-note">
        本ガイドは上記シラバス（2024年5月3日 GA Release,
        v2.0）の第1章の内容を初学者向けに要約・図解したものです。本文中で言及されている関連シラバス（ISTQB
        CT-TAS：Test Automation Strategy 等）については、必要に応じてISTQB®
        公式サイト（
        <a href="https://istqb.org" target="_blank" rel="noopener noreferrer">
          istqb.org
        </a>
        ）で最新情報をご確認ください。試験の正式な出題範囲は必ず原文シラバスでご確認ください。
      </p>
    </section>
  );
}
