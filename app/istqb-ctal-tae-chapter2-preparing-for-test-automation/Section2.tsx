import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_ENVS } from './diagrams';

export default function Section2() {
  return (
    <>
      <section id="sec-2">
        <h2>2. さまざまな環境でのテスト自動化の活用（2.1.2）</h2>
        <p>
          同じ自動テストスイートでも、<strong>どの環境で実行するか</strong>によって目的・実施可能なテストタイプ・監視の有無が異なります。シラバスでは代表的な5つの環境を、開発からリリースまでの典型的な流れに沿った<strong>例</strong>として紹介しています。これらは必ず5段階すべてを順番に経由しなければならない必須のステージではなく、<strong>実際の環境構成や順序はプロジェクトごとに異なります</strong>（環境を統合・省略する場合や、別の環境を追加する場合もあります）。
        </p>

        <div className="mermaid-container" id="mermaid-diagram-envs">
          <Mermaid chart={DIAGRAM_ENVS} />
        </div>
        <p className="legend-note">
          ※上図は典型的な構成例です。環境の構成・順序はプロジェクトにより異なります。
        </p>

        <h3 id="sec-2-1">2.1 各環境の特徴と自動化の役割</h3>
        <div className="table-scroll">
          <table aria-labelledby="sec-2-1">
            <thead>
              <tr>
                <th>環境</th>
                <th>主な目的</th>
                <th>実施されるテスト</th>
                <th>特記事項</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>ローカル開発環境</strong>
                </td>
                <td>
                  ソフトウェアの初期作成、コンポーネント単位での機能適合性の検証
                </td>
                <td>コンポーネントテスト、GUIテスト、APIテスト</td>
                <td>
                  IDEを使うことで、白箱テストにより早期にコード品質・設計の問題を発見できる
                </td>
              </tr>
              <tr>
                <td>
                  <strong>ビルド環境</strong>
                </td>
                <td>ソフトウェアをビルドし、ビルド結果の正しさを検証する</td>
                <td>
                  コンポーネントテスト、コンポーネント統合テスト、静的解析
                </td>
                <td>
                  ローカル開発環境そのもの、またはCI/CDエージェント上で実行され、他環境へのデプロイは行わない
                </td>
              </tr>
              <tr>
                <td>
                  <strong>統合環境</strong>
                </td>
                <td>完全に統合されたリリース候補を対象に検証する</td>
                <td>
                  UIテストまたはAPIテストによる自動テストスイート（黒箱テストのみ）
                </td>
                <td>
                  <strong>監視（モニタリング）が導入される最初の環境</strong>。障害調査を効率的に行うための基盤となる
                </td>
              </tr>
              <tr>
                <td>
                  <strong>プレプロダクション環境</strong>
                </td>
                <td>非機能品質特性（性能効率性など）を評価する</td>
                <td>
                  既存の自動テストスイートの再実行、ビジネス関係者によるUAT（受入テスト）
                </td>
                <td>
                  本番に最も近い構成のため重点的に利用される。監視も継続される
                </td>
              </tr>
              <tr>
                <td>
                  <strong>本番/運用環境</strong>
                </td>
                <td>実際のユーザー利用下で機能・非機能品質特性を評価する</td>
                <td>監視をベースとしたテスト</td>
                <td>
                  カナリアリリース、ブルー/グリーンデプロイ、A/Bテストなどのベストプラクティスと組み合わせる
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="callout-practice">
          <div className="callout-header">
            <span className="callout-icon">💡</span>
            <span className="callout-label">ベストプラクティス</span>
          </div>
          <ul>
            <li>
              環境が下流（本番側）に進むほど、<strong>ホワイトボックス視点からブラックボックス視点へ移行する</strong>ことを意識してテスト設計を分ける。統合環境以降はブラックボックステストが中心になる。
            </li>
            <li>
              統合環境以降（統合環境を含む）の環境では必ず監視（モニタリング）を組み込み、テスト失敗時に「どこで何が起きたか」を追跡できるようにする。
            </li>
            <li>
              コンテナや仮想化技術を使えば、環境ごとの差異を減らし、同一のテスト自動化ソリューションを複数環境で再利用しやすくなる。
            </li>
            <li>
              本番環境でのテストは、カナリアリリースやブルー/グリーンデプロイなど、<strong>利用者への影響を最小化する手法とセット</strong>で導入する。
            </li>
          </ul>
        </div>
      </section>

      <hr />
    </>
  );
}
