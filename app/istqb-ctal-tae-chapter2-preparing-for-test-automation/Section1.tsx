import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_TESTABILITY } from './diagrams';

export default function Section1() {
  return (
    <>
      <section id="sec-1">
        <h2>1. 2.1 テスト自動化を可能にするインフラの構成の理解</h2>
        <h3 id="sec-1-1">1.1 テスト容易性（Testability）とは何か</h3>
        <p>
          テスト自動化を成功させる大前提は、<strong>SUT自体が「テストしやすい」ように設計されていること</strong>です。これを<strong>テスト容易性（testability）</strong>と呼びます。
        </p>
        <div className="callout-source">
          <blockquote>
            <p>
              テスト容易性とは、SUTの制御（controllability）と観測（observability）を可能にするソフトウェアインターフェースが用意されている度合いのことです。
            </p>
          </blockquote>
        </div>
        <p>
          重要なのは、テスト容易性は<strong>後付けで足すもの</strong>ではなく、SUTの他の機能設計と並行して、<strong>ソフトウェアアーキテクトが設計・実装すべき非機能要件</strong>だという点です。実務では、TAE（Test Automation Engineer）がアーキテクトと協働し、「どこを改善すればテストしやすくなるか」を具体的に特定する役割を担います。
        </p>

        <div className="mermaid-container">
          <Mermaid chart={DIAGRAM_TESTABILITY} id="mermaid-diagram-testability" />
        </div>

        <h3 id="sec-1-2">1.2 テスト容易性を支える3つの設計側面</h3>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>側面</th>
                <th>説明</th>
                <th>具体例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Observability（観測可能性）</strong>
                </td>
                <td>
                  SUTの内部状態を外部から把握できるインターフェースを提供すること。テストケースはこのインターフェースを使い、実際の結果が期待結果と一致するかを判定する
                </td>
                <td>ログ出力、ステータスAPI、監視エンドポイント</td>
              </tr>
              <tr>
                <td>
                  <strong>Controllability（制御可能性）</strong>
                </td>
                <td>
                  SUTに対してアクションを実行できるインターフェースを提供すること
                </td>
                <td>
                  UI要素、関数呼び出し、TCP/IPやUSBなどの通信要素、物理/論理スイッチへの電子信号
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Architecture Transparency（アーキテクチャの透明性）</strong>
                </td>
                <td>
                  アーキテクチャのドキュメントが、各テストレベルで観測性・制御性を確保できるよう、コンポーネントとインターフェースを明確かつ理解しやすい形で示していること
                </td>
                <td>
                  明確なAPI仕様書、コンポーネント図、インターフェース定義書
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
              テスト容易性の議論は、要件定義・アーキテクチャ設計の初期段階からTAEを巻き込んで行う（後工程で追加しようとすると改修コストが跳ね上がる）。
            </li>
            <li>
              Observability（見える化）とControllability（操作性）は必ずセットで検討する。見えるだけ・操作できるだけでは自動テストは成立しない。
            </li>
            <li>
              アーキテクチャドキュメントは「テストの立場から読んでも、どこにどう介入・観測できるか分かる」レベルの粒度で整備する。
            </li>
          </ul>
        </div>

        <h3 id="sec-1-3">1.3 テスト容易性を実現するための構成要素</h3>
        <p>
          テスト容易性を高めるための代表的な仕組みと、それぞれの設定方法（構成ニーズ）は以下の通りです。
        </p>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>構成要素</th>
                <th>概要</th>
                <th>設定方法</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>アクセシビリティ識別子</strong>
                  <br />
                  （Accessibility identifiers）
                </td>
                <td>UI要素などを一意に特定するための識別子</td>
                <td>
                  開発フレームワークが自動生成する場合と、開発者が手動で設定する場合がある
                </td>
              </tr>
              <tr>
                <td>
                  <strong>システム環境変数</strong>
                  <br />
                  （System environment variables）
                </td>
                <td>アプリケーションの挙動を変更するパラメータ</td>
                <td>
                  管理者権限などを通じて、テストしやすいように動的に変更できる
                </td>
              </tr>
              <tr>
                <td>
                  <strong>デプロイ変数</strong>
                  <br />
                  （Deployment variables）
                </td>
                <td>
                  システム環境変数と似ているが、デプロイ開始前に設定される
                </td>
                <td>デプロイパイプラインの設定ファイルなどで事前定義する</td>
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
              アクセシビリティ識別子は「開発者が機能を作った後に付け足す」のではなく、コンポーネント設計時に命名規則を決めて自動生成される仕組みを整える。
            </li>
            <li>
              環境変数・デプロイ変数は、テスト環境ごとに値が変わることを前提に、TAF（Test Automation Framework）側の設定ファイルやシークレット管理の仕組みと連携させる。
            </li>
          </ul>
        </div>
      </section>

      <hr />
    </>
  );
}
