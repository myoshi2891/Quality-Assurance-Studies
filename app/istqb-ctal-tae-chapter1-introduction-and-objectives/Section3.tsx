import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_WATERFALL, DIAGRAM_VMODEL, DIAGRAM_AGILE } from './diagrams';

export default function Section3() {
  return (
    <section className="section" id="s3">
      <div className="section-head">
        <div className="section-icon">
          <i className="ti ti-git-branch"></i>
        </div>
        <div>
          <span className="eyebrow">
            1.2 ソフトウェア開発ライフサイクルにおけるテスト自動化
          </span>
          <h2>SDLCモデルごとの適用のされ方（1.2.1）</h2>
        </div>
      </div>

      <h3>
        <i className="ti ti-stairs"></i>ウォーターフォールモデル（Waterfall）
      </h3>
      <p>
        線形かつ逐次的なSDLCモデルで、要件定義・設計・実装・検証・保守という明確なフェーズを持ち、各フェーズは通常、承認が必要なドキュメント作成で終わります。テスト自動化の実装は、実装フェーズと並行して、または実装フェーズの後に行われるのが一般的です。ソフトウェアコンポーネントがテスト可能になるのが検証フェーズであるため、テスト実行も通常このフェーズで行われます。
      </p>
      <div className="diagram-card">
        <div className="diagram-wrap" data-diagram="waterfall">
          <Mermaid chart={DIAGRAM_WATERFALL} />
        </div>
        <p className="cap">
          ウォーターフォールモデルにおける自動化構築と実行のタイミング
        </p>
      </div>

      <h3>
        <i className="ti ti-git-merge"></i>Vモデル（V-model）
      </h3>
      <p>
        Vモデルも逐次的に実行されるSDLCモデルですが、プロジェクトが高レベル要件から低レベル要件へと定義されるのに対応して、それぞれのテスト・統合活動が定義される点が特徴です。ここから、CTFLセクション2.2で説明されている伝統的なテストレベル（コンポーネント、コンポーネント統合、システム、システム統合、受け入れ）が導き出されます。
        <strong>
          各テストレベルごとにテスト自動化フレームワーク（TAF）を用意することが可能であり、推奨されています。
        </strong>
      </p>
      <div className="diagram-card">
        <div className="diagram-wrap" data-diagram="vmodel">
          <Mermaid chart={DIAGRAM_VMODEL} />
        </div>
        <p className="cap">
          開発側の各フェーズ（左）と、それぞれに対応するテストレベル・TAF（右）
        </p>
      </div>

      <h3>
        <i className="ti ti-recycle"></i>アジャイルソフトウェア開発（Agile）
      </h3>
      <p>
        アジャイル開発では、テスト自動化の可能性が非常に多岐にわたります。ウォーターフォールやVモデルと異なり、TAE（テスト自動化エンジニア）とビジネス側の代表者が、ロードマップやタイムライン、計画されたテストの提供時期を共同で決定できます。この方法では、コードレビュー、ペアプログラミング、頻繁な自動テスト実行といったベストプラクティスが存在します。開発者・テスター・その他ステークホルダー間のサイロ（分断）を排除することで、チームはすべてのテストレベルを適切な量・深さの自動化でカバーでき、
        <strong>「スプリント内自動化（in-sprint automation）」</strong>
        と呼ばれる目標を達成できます。
      </p>
      <div className="diagram-card">
        <div className="diagram-wrap" data-diagram="agile">
          <Mermaid chart={DIAGRAM_AGILE} />
        </div>
        <p className="cap">
          アジャイル開発における自動化の進め方と「スプリント内自動化」
        </p>
      </div>
      <p className="section-note">
        詳細はISTQB CT-TAS（Test Automation Strategy）シラバス セクション3.2に記載されています。
      </p>

      <h3>
        <i className="ti ti-table"></i>SDLCモデル比較表
      </h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>観点</th>
              <th>ウォーターフォール</th>
              <th>Vモデル</th>
              <th>アジャイル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>プロセスの流れ</th>
              <td>線形・逐次</td>
              <td>逐次（開発と対応するテストを対で定義）</td>
              <td>反復・漸進的</td>
            </tr>
            <tr>
              <th>自動化構築のタイミング</th>
              <td>実装フェーズと並行 or 実装後</td>
              <td>各テストレベルの定義に合わせて計画的に構築</td>
              <td>スプリントごとに継続的に構築・拡張</td>
            </tr>
            <tr>
              <th>テスト実行のタイミング</th>
              <td>検証フェーズ</td>
              <td>各テストレベル（コンポーネント〜受け入れ）ごと</td>
              <td>スプリント内で継続的（in-sprint automation）</td>
            </tr>
            <tr>
              <th>推奨されるTAF構成</th>
              <td>特に規定なし</td>
              <td>テストレベルごとにTAFを用意することを推奨</td>
              <td>チーム横断で協働しつつ全レベルをカバー</td>
            </tr>
            <tr>
              <th>意思決定の主体</th>
              <td>フェーズごとの承認プロセス</td>
              <td>要件定義側とテスト側の対応関係</td>
              <td>TAEとビジネス代表者が共同決定</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="practice-card">
        <div className="practice-card-head">
          <i className="ti ti-bulb"></i>
          <span>ベストプラクティス：SDLCモデルとテスト自動化</span>
        </div>
        <ul className="practice-list">
          <li>
            <span className="p-num">1</span>
            <div className="p-body">
              <strong>モデルに応じて自動化の着手タイミングを設計する。</strong>
              ウォーターフォールでは実装フェーズの終盤から自動化スクリプトの並行開発を始め、検証フェーズでボトルネックにならないよう準備する。
            </div>
          </li>
          <li>
            <span className="p-num">2</span>
            <div className="p-body">
              <strong>Vモデルではテストレベルごとに責任分界を明確にする。</strong>
              コンポーネントレベルは開発者、システム統合・受け入れレベルはTAE/テストチームというように、各レベルのTAFの所有者を明確にする。
            </div>
          </li>
          <li>
            <span className="p-num">3</span>
            <div className="p-body">
              <strong>アジャイルではサイロを解消する仕組みを作る。</strong>
              デイリースクラムやペアプログラミングに自動化の話題を組み込み、開発者とTAEが同じ定義（Definition of Done）を共有する。
            </div>
          </li>
          <li>
            <span className="p-num">4</span>
            <div className="p-body">
              <strong>in-sprint automationを目標に段階的に導入する。</strong>
              いきなり全テストレベルの自動化を目指すのではなく、まずスモークテストレベルから自動化し、スプリントごとにカバレッジを拡大する。
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
