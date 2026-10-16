import React from 'react';

export default function Section5() {
  return (
    <section id="sec-5">
      <h2>5. 参考文献・情報源（URL）</h2>
      <p>本ガイドは、以下の公式情報源の内容に基づいて作成しています。</p>
      <div className="ref-grid">
        <div className="ref-card">
          <div className="ref-card-title">ISTQB® CTAL-TAE v2.0 認定ページ</div>
          <a
            href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            istqb.org/certifications/.../ctal-tae-v2-0/
          </a>
        </div>
        <div className="ref-card">
          <div className="ref-card-title">
            ISTQB® CTAL-TAE v2.0 シラバス（PDF）
            <br />
            Chapter 2「Preparing for Test Automation」pp.17–21
          </div>
          <a
            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            istqb.org/.../ISTQB_CTAL-TAE_Syllabus_v2.0.pdf
          </a>
        </div>
        <div className="ref-card">
          <div className="ref-card-title">ISTQB® 公式サイト（用語集・関連資料）</div>
          <a href="https://www.istqb.org/" target="_blank" rel="noopener noreferrer">
            www.istqb.org
          </a>
        </div>
      </div>
      <p className="ref-note">
        注：本シラバスが参照するISO/IEC
        25010（品質特性）などの外部標準規格は、シラバス内で要約されている範囲のみが出題対象であり、規格文書そのものは試験範囲外です（シラバス
        0.8節「Handling of Standards」参照）。
      </p>
    </section>
  );
}
