import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_CH4_OVERVIEW } from './diagrams';

export default function Section0() {
  return (
    <section className="block" id="s-overview">
      <span className="section-num">1</span>
      <h2>第4章の全体像</h2>

      <div className="prose">
        <p>
          第3章では「Test Automation Architecture（テスト自動化アーキテクチャ）」という<strong>設計</strong>の話をしました。第4章はその設計を実際に<strong>パイロットし、デプロイし、保守していく実務プロセス</strong>が中心です。シラバスの構成上、この章は次の3つの学習領域で構成されています。
        </p>
      </div>

      <div className="diagram-card">
        <div className="diagram-title">
          <i className="ti ti-sitemap"></i> 第4章の構成フロー
        </div>
        <div className="diagram-wrap">
          <Mermaid chart={DIAGRAM_CH4_OVERVIEW} />
        </div>
        <div className="diagram-fallback">
          図：第4章は「4.1 開発（パイロット・デプロイ）」→「4.2 リスク」→「4.3 保守性」の順に構成される。
        </div>
      </div>

      <div className="prose">
        <p>
          第3章で決めた<strong>アーキテクチャ</strong>を、実際に「小さく試してみる（パイロット）」→「そのときに起きるリスクを洗い出し、対策する」→「長期的に保守できる形にする」という<strong>時間軸に沿った実装の流れ</strong>を扱うのが第4章だと理解すると、全体像がつかみやすくなります。
        </p>
      </div>

      <div className="callout source">
        <i className="ti ti-quote"></i>
        <div className="callout-body">
          <p>
            出典：ISTQB CTAL-TAE Syllabus v2.0, Section 0.11「How this Syllabus is Organized」（p.12）<br />
            <a
              href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
