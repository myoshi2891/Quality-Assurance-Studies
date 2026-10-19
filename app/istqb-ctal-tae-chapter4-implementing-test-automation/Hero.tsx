import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <span className="hero-kicker">
        <i className="ti ti-certificate"></i> ISTQB® CTAL-TAE v2.0 学習ガイド
      </span>
      <h1>
        第4章「Implementing Test Automation（テスト自動化の実装）」<br />初学者向け解説ガイド
      </h1>
      <p className="hero-lead">
        パイロットとデプロイのガイドライン、デプロイに伴うリスク、そしてテスト自動化ソリューションの保守性まで、公式シラバスの内容をステップバイステップで整理します。
      </p>
      <div className="hero-meta">
        <span><i className="ti ti-clock"></i> 学習時間目安　150分</span>
        <span><i className="ti ti-brain"></i> 認知レベル　K2〜K4</span>
        <span>
          <i className="ti ti-link"></i>
          <a
            href="https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            認定ページ
          </a>
        </span>
        <span>
          <i className="ti ti-file-text"></i>
          <a
            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            公式シラバスPDF
          </a>
        </span>
      </div>
    </div>
  );
}
