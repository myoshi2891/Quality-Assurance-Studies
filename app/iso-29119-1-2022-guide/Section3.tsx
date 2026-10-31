import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_04 } from './diagrams';

export default function Section3() {
  return (
    <section>
      <h2 id="step-3規格の構成を地図で把握する">STEP 3：規格の構成を地図で把握する</h2>
      <h3 id="3-1-章立て2022年版">3-1. 章立て（2022年版）</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>章・節</th>
              <th>内容</th>
              <th>本ガイドでの扱い</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>1 適用範囲</td>
              <td>すべての組織・開発方式・テストに適用できることを規定し、シリーズの鍵概念を示す</td>
              <td>STEP 1</td>
            </tr>
            <tr className="even">
              <td>2 規範的参照</td>
              <td><strong>なし</strong>（規範的参照文書を持たない）</td>
              <td>－</td>
            </tr>
            <tr className="odd">
              <td>3 用語と定義</td>
              <td>
                A/Bテストから静的テストまでの用語（神経網・ニューロンカバレッジなどAI関連語を含む）
              </td>
              <td>用語集</td>
            </tr>
            <tr className="even">
              <td>4.1 ソフトウェアテスト入門</td>
              <td>
                品質マネジメントとの関係、V&amp;V、静的/動的、網羅テスト、ヒューリスティック、テストベース、テストオラクル、独立性
              </td>
              <td>STEP 4</td>
            </tr>
            <tr className="odd">
              <td>4.2 テスト計画とテスト戦略</td>
              <td>
                リスク、テストアプローチ、ライフサイクル、ドメインとシステム特性、戦略の内容
              </td>
              <td>STEP 5</td>
            </tr>
            <tr className="even">
              <td>4.3 テストフレームワーク</td>
              <td>
                テストプロセス、文書、構成管理、ツール、プロセス改善、メトリクス
              </td>
              <td>STEP 6</td>
            </tr>
            <tr className="odd">
              <td>4.4 テスト設計と実行</td>
              <td>
                テストモデル、MBT、スクリプト/探索、技法、経験ベース、回帰、自動化、継続的テスト、A/B、ファズ、環境、データ
              </td>
              <td>STEP 7</td>
            </tr>
            <tr className="even">
              <td>4.5〜4.7</td>
              <td>
                プロジェクト管理、コミュニケーションと報告、欠陥・インシデント管理
              </td>
              <td>STEP 8</td>
            </tr>
            <tr className="odd">
              <td>附属書A（参考）</td>
              <td>
                システム特性とテスト：例（AI、自律、組込み、IoT、科学技術
                など13特性）
              </td>
              <td>STEP 9</td>
            </tr>
            <tr className="even">
              <td>附属書B（参考）</td>
              <td>テストの役割</td>
              <td>STEP 9</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="3-2-構成図">3-2. 構成図</h3>
      <div aria-label="図解4" className="mermaid-diagram" id="mmd04" role="img">
        <Mermaid chart={DIAGRAM_04} />
      </div>
      <aside className="callout callout-note">
        <div className="callout-title">ポイント</div>
        <div className="callout-body">
          <p>
            目次の節番号は、ISO/IEC/IEEE 29119-1:2022
            の公開目次（各国規格機関・プレビュー）で確認できる範囲に基づいています。
          </p>
        </div>
      </aside>
    </section>
  );
}
