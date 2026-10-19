import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_DEPLOYMENT_RISKS, DIAGRAM_RISK_FLOW } from './diagrams';

export default function Section3() {
  return (
    <section className="block" id="s-42">
      <span className="section-num">4</span>
      <h2>4.2 テスト自動化開発に伴うリスク</h2>

      <h3 id="s-42-overview">リスクの全体像</h3>
      <div className="prose">
        <p>
          TAF（Test Automation Framework）をSUTにインターフェースさせる設計は、アーキテクチャ設計の一部として検討する必要があります。その後、パッケージング、テストロギング、テストハーネスツールを選定していく流れになりますが、この過程では様々な<strong>デプロイリスク</strong>が識別されます。
        </p>
        <p>
          シラバスは、デプロイリスクを大きく「一般的なデプロイリスク」と「技術的デプロイリスク」に分けて説明しています。
        </p>
      </div>

      <div className="diagram-card">
        <div className="diagram-title">
          <i className="ti ti-alert-triangle"></i> デプロイリスクの分類
        </div>
        <div className="diagram-wrap">
          <Mermaid chart={DIAGRAM_DEPLOYMENT_RISKS} />
        </div>
        <div className="diagram-fallback">
          図：デプロイリスクは「一般的リスク（FW・リソース・ネットワーク・モバイル実機）」と「技術的リスク（パッケージング・ロギング・テスト構造化・更新）」に大別される。
        </div>
      </div>

      <div className="callout source">
        <i className="ti ti-quote"></i>
        <div className="callout-body">
          <p>
            出典：ISTQB CTAL-TAE Syllabus v2.0, Section 4.2.1（p.30-32）<br />
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

      <div className="prose">
        <p>
          これらのリスクはテスト自動化に固有のものだけではありませんが、TAEは「信頼できる有益な品質ゲートを提供するために、これらの条件がすべて満たされていることを確認する責任」を負う、とシラバスは強調しています。たとえばモバイル実機を使ったテスト自動化では、実機の電源投入・十分なバッテリー残量・ネットワーク接続・SUTへのアクセス確保といった一見テストと直接関係なさそうな条件も、リスクとして事前に管理する対象になります。
        </p>
      </div>

      <h3>技術的デプロイリスクの詳細</h3>
      <h4 id="s-42-packaging">1. パッケージング（Packaging）</h4>
      <div className="prose">
        <p>
          テストウェア（testware：テストスクリプト・テストデータ・設定ファイルなど、テスト自動化に関わる成果物の総称）も、SUTと同様に<strong>バージョン管理</strong>が重要です。
        </p>
        <p>
          また、テストウェアを組織内で共有する場合は、オンプレミス・クラウドを問わず、リポジトリへ登録（アップロード）して共有できる状態にしておく必要があることもあります。
        </p>
      </div>

      <h4 id="s-42-logging">2. ロギング（Logging）</h4>
      <div className="prose">
        <p>
          テストロギングは、テスト結果に関する最も重要な情報源です。シラバスでは以下の6段階のログレベルが定義されています。それぞれ用途が異なるため、レベルの使い分けを理解することが重要です。
        </p>
      </div>
      <div className="table-wrap">
        <table aria-labelledby="s-42-logging">
          <thead>
            <tr>
              <th style={{ width: '20%' }}>ログレベル</th>
              <th>用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fatal</td>
              <td>
                テスト実行そのものを中断させる可能性があるエラーイベントを記録する。
              </td>
            </tr>
            <tr>
              <td>Error</td>
              <td>
                条件や相互作用が失敗し、テストケース自体も失敗となる場合に使用する。
              </td>
            </tr>
            <tr>
              <td>Warn</td>
              <td>
                フローを止めるほどではないが、予期しない条件・動作が発生した場合に使用する。
              </td>
            </tr>
            <tr>
              <td>Info</td>
              <td>
                テストケースの基本情報や、実行中に何が起きているかを表示する。
              </td>
            </tr>
            <tr>
              <td>Debug</td>
              <td>
                通常の基本ログには不要だが、テスト失敗調査の際に有用な実行詳細情報を格納する。
              </td>
            </tr>
            <tr>
              <td>Trace</td>
              <td>Debugと似ているが、さらに詳細な情報を含む。</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout note">
        <i className="ti ti-bulb"></i>
        <div className="callout-body">
          <p>
            <strong>初学者向けの覚え方：</strong>この6段階は上から重大度が高い順に並んでおり、下に行くほど開発者・TAE向けの詳細なデバッグ情報になるとイメージすると分かりやすいです。
          </p>
        </div>
      </div>

      <div className="callout source">
        <i className="ti ti-quote"></i>
        <div className="callout-body">
          <p>
            出典：ISTQB CTAL-TAE Syllabus v2.0, Section 4.2.1「Logging」（p.31）<br />
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

      <h4 id="s-42-structuring">3. テスト構造化（Test Structuring）</h4>
      <div className="prose">
        <p>
          TAS（Test Automation Solution）の最も重要な部分は、<strong>テストハーネス</strong>と、その中に含まれる<strong>テストフィクスチャ</strong>（test fixture）です。テストフィクスチャとは、テストが実行される前に用意されていなければならない要素のことで、以下のような役割を持ちます。
        </p>
      </div>
      <div className="kv-grid">
        <div className="kv-card">
          <div className="kv-label"><i className="ti ti-adjustments"></i> 自由度</div>
          <div className="kv-value">
            テスト環境とテストデータをコントロールするための自由度を提供する
          </div>
        </div>
        <div className="kv-card">
          <div className="kv-label"><i className="ti ti-list-check"></i> 条件定義</div>
          <div className="kv-value">
            テスト実行における事前条件・事後条件を定義できる
          </div>
        </div>
        <div className="kv-card">
          <div className="kv-label"><i className="ti ti-category"></i> グルーピング</div>
          <div className="kv-value">
            テストケースをさまざまな方法でテストスイートにグルーピングできる
          </div>
        </div>
        <div className="kv-card">
          <div className="kv-label">
            <i className="ti ti-refresh"></i> 反復可能性・独立性
          </div>
          <div className="kv-value">
            テストを反復可能（repeatable）かつ独立（atomic）にする
          </div>
        </div>
      </div>
      <div className="prose">
        <p>
          この「反復可能」「独立（アトミック）」という2つの性質は、自動テストの信頼性を支える重要な概念です。同じテストを何度実行しても同じ結果が得られること（反復可能性）と、あるテストが他のテストの実行結果に影響を与えたり受けたりしないこと（独立性）は、テストフィクスチャの適切な設計によって実現されます。
        </p>
      </div>

      <h4 id="s-42-updating">4. 更新（Updating）</h4>
      <div className="prose">
        <p>
          最も一般的な技術リスクのひとつが、<strong>テストハーネス（エージェントなど）の自動更新やデバイスのバージョン変更</strong>です。これらは以下のような対策で緩和できます。
        </p>
        <ul>
          <li>十分な電源供給の確保</li>
          <li>適切なネットワーク接続の確保</li>
          <li>適切なデバイス構成計画の策定</li>
        </ul>
      </div>

      <h3 id="s-42-flow">リスク分析から緩和策までの流れ</h3>
      <div className="diagram-card">
        <div className="diagram-title">
          <i className="ti ti-route"></i> リスク対応フロー（まとめ図）
        </div>
        <div className="diagram-wrap">
          <Mermaid chart={DIAGRAM_RISK_FLOW} />
        </div>
        <div className="diagram-fallback">
          図：アーキテクチャ設計からツール選定、リスク識別、緩和策の実施を経て、継続運用可能な品質ゲートに至る一連の流れ。
        </div>
      </div>

      <div id="s-42-bp" className="practice-card">
        <div className="practice-title">
          <i className="ti ti-bulb"></i> ベストプラクティス（4.2 デプロイリスク対応）
        </div>
        <ul>
          <li>
            <i className="ti ti-check"></i>テストウェアはSUTと同様に<strong>バージョン管理</strong>の対象とする。組織内で共有する場合は、リポジトリへ登録して共有できる状態にしておく
          </li>
          <li>
            <i className="ti ti-check"></i>ログレベル（Fatal〜Trace）を<strong>用途に応じて正しく使い分け</strong>、後から原因調査しやすい粒度で記録する
          </li>
          <li>
            <i className="ti ti-check"></i>テストフィクスチャを設計する際は「<strong>反復可能性</strong>」と「<strong>独立性（アトミック性）</strong>」を必ず担保する
          </li>
          <li>
            <i className="ti ti-check"></i>デバイス・エージェントの<strong>自動更新はスケジュールと構成管理でコントロール</strong>し、予期しないタイミングでの更新によるテスト失敗を防ぐ
          </li>
          <li>
            <i className="ti ti-check"></i>モバイル実機など物理リソースを使う場合は、電源・充電・ネットワークといった<strong>非機能的な前提条件も明示的にチェックリスト化</strong>する
          </li>
        </ul>
      </div>
    </section>
  );
}
