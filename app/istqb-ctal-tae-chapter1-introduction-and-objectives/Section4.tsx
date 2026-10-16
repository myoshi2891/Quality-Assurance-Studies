import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_TOOLSELECT } from './diagrams';

export default function Section4() {
  return (
    <section className="section" id="s4">
      <div className="section-head">
        <div className="section-icon">
          <i className="ti ti-tools"></i>
        </div>
        <div>
          <span className="eyebrow">
            1.2.2 与えられたSUTに適したテスト自動化ツールの選定
          </span>
          <h2>ツールはどう選ぶべきか</h2>
        </div>
      </div>

      <p>
        適切なテストツールを識別するには、まず<strong>SUTを分析すること</strong>が出発点になります。TAEは、ツール選定のベースラインとなるプロジェクト要件を特定する必要があります。
      </p>
      <p>
        異なるテスト自動化ツールの機能は、UIソフトウェアとWebサービスなどでは異なるため、プロジェクトが長期的に何を達成したいのかを理解することが重要です。使用・選定できるテスト自動化ツールや機能の数に上限はありませんが、<strong>コストは常に考慮する必要があります</strong>。商用パッケージ製品（COTS）を使うか、オープンソース技術に基づくカスタムソリューションを実装するかは、いずれも複雑なプロセスになり得ます。
      </p>
      <p>
        次に評価すべき点は、<strong>チームのテスト自動化における構成と経験</strong>です。テスターがプログラミング経験をほとんど、あるいは全く持たない場合は、ローコード／ノーコードのソリューションが有効な選択肢となり得ます。
      </p>
      <p>
        プログラミング知識を持つ技術系テスターに対しては、<strong>SUTの言語と一致する言語のツールを選ぶこと</strong>が有用です。これにより、開発者とテスト自動化の欠陥をより効率的にデバッグできる、チーム間でメンバーを相互トレーニングしやすい、といった利点が得られます。
      </p>

      <div className="diagram-card">
        <div className="diagram-wrap" data-diagram="toolselect">
          <Mermaid chart={DIAGRAM_TOOLSELECT} />
        </div>
        <p className="cap">SUTの分析からツール選定に至るまでの検討フロー</p>
      </div>

      <div className="practice-card">
        <div className="practice-card-head">
          <i className="ti ti-bulb"></i>
          <span>ベストプラクティス：ツール選定プロセス</span>
        </div>
        <ul className="practice-list">
          <li>
            <span className="p-num">1</span>
            <div className="p-body">
              <strong>要件定義をツール選定より優先する。</strong>
              ツールありきで進めるのではなく、SUTの技術特性（UI/API/モバイル/ネットワーク）とプロジェクトの長期ゴールを先に明文化する。
            </div>
          </li>
          <li>
            <span className="p-num">2</span>
            <div className="p-body">
              <strong>コストは「ライセンス費用」だけで判断しない。</strong>
              教育コスト、保守コスト、拡張性（将来的なSUTの変化への追従コスト）まで含めたトータルコストで比較する。
            </div>
          </li>
          <li>
            <span className="p-num">3</span>
            <div className="p-body">
              <strong>チームのスキルセットを正直に評価する。</strong>
              プログラミング経験が乏しいチームに高度なコードベースのフレームワークを導入すると保守が属人化・停滞するリスクが高いため、ローコード／ノーコードの選択肢も候補から外さない。
            </div>
          </li>
          <li>
            <span className="p-num">4</span>
            <div className="p-body">
              <strong>SUTと自動化ツールの言語親和性を重視する。</strong>
              同一言語であれば開発者とテスターの相互レビューやペアデバッグが容易になり、結果的に欠陥の早期発見・修正につながる。
            </div>
          </li>
          <li>
            <span className="p-num">5</span>
            <div className="p-body">
              <strong>PoC（概念実証）で複数候補を比較する。</strong>
              本番導入前に小規模なパイロットで複数ツールを試し、実際のSUTに対する適合度を確認してから本格導入する。この評価プロセスの詳細は第2章で扱われます。
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
