import React from 'react';

export default function Section1() {
  return (
    <section className="block" id="s-keywords">
      <span className="section-num">2</span>
      <h2>キーワードと学習目標</h2>

      <h3>本章のキーワード（試験で暗記が求められる用語）</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th style={{ width: '22%' }}>用語</th>
              <th>説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>risk（リスク）</td>
              <td>
                テスト自動化の導入・展開時に発生しうる、望ましくない事象の可能性。技術的リスクと非技術的リスクの両方を扱う。
              </td>
            </tr>
            <tr>
              <td>test fixture（テストフィクスチャ）</td>
              <td>
                テストが実行されるために必要な前提条件・環境要素。前処理（setup）と後処理（teardown）を通じて、テストの再現性と独立性を担保する仕組み。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>学習目標（Learning Objectives）一覧</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>節</th>
              <th className="num">LOコード</th>
              <th className="num">認知レベル</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4.1 テスト自動化の開発</td>
              <td className="num">TAE-4.1.1</td>
              <td className="num"><span className="pill k3">K3 適用</span></td>
              <td>
                効果的なテスト自動化のパイロットおよびデプロイ活動を支援するガイドラインを適用する。
              </td>
            </tr>
            <tr>
              <td>4.2 テスト自動化開発に伴うリスク</td>
              <td className="num">TAE-4.2.1</td>
              <td className="num"><span className="pill k4">K4 分析</span></td>
              <td>
                テスト自動化のデプロイリスクを分析し、緩和戦略を計画する。
              </td>
            </tr>
            <tr>
              <td>4.3 テスト自動化ソリューションの保守性</td>
              <td className="num">TAE-4.3.1</td>
              <td className="num"><span className="pill k2">K2 理解</span></td>
              <td>
                テスト自動化ソリューションの保守性を支え、また影響を与える要因を説明する。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout source">
        <i className="ti ti-quote"></i>
        <div className="callout-body">
          <p>
            出典：ISTQB CTAL-TAE Syllabus v2.0, Chapter 4 冒頭（p.29）<br />
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
