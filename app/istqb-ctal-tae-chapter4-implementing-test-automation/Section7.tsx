import React from 'react';

export default function Section7() {
  return (
    <section className="block" id="s-ref">
      <span className="section-num">8</span>
      <h2>出典・参考資料</h2>
      <ul className="ref-list">
        <li>
          <span className="ref-name">CTAL-TAE v2.0 認定ページ（ISTQB公式）</span>
          <a
            href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/
          </a>
        </li>
        <li>
          <span className="ref-name">
            CTAL-TAE v2.0 シラバス（PDF、本記事の一次情報源）
          </span>
          <a
            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf
          </a>
        </li>
        <li>
          <span className="ref-name">
            Robert C. Martin, <em>Clean Code: A Handbook of Agile Software Craftsmanship</em>（2008）
          </span>
          シラバス本文 Section 4.3.1 に書誌情報あり（上記シラバスPDFを参照）
        </li>
      </ul>
    </section>
  );
}
