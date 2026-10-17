import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_HARDCODING_AVOIDANCE } from './diagrams';

export default function Section4() {
  return (
    <section className="block" id="s-43">
      <span className="section-num">5</span>
      <h2>4.3 テスト自動化ソリューションの保守性</h2>

      <h3 id="s-43-factors">保守性を左右する要因</h3>
      <div className="prose">
        <p>
          シラバスは、TAS（テスト自動化ソリューション）の<strong>保守性（maintainability）は、プログラミング標準とTAE同士の相互期待によって大きく左右される</strong>と述べています。そのうえで、黄金律（golden rule）として<strong>Robert C. Martin氏のクリーンコード原則</strong>（&quot;Clean Code: A Handbook of Agile Software Craftsmanship&quot;, 2008）に従うことを推奨しています。
        </p>
      </div>

      <h3 id="s-43-clean">クリーンコード原則の8項目</h3>
      <div className="table-wrap">
        <table aria-labelledby="s-43-clean">
          <thead>
            <tr>
              <th className="num">#</th>
              <th style={{ width: '30%' }}>原則</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="num">1</td>
              <td>共通の命名規則</td>
              <td>
                クラス・メソッド・変数に意味のある名前を、共通の命名規則に沿って付ける。
              </td>
            </tr>
            <tr>
              <td className="num">2</td>
              <td>論理的で共通のプロジェクト構造</td>
              <td>ファイルやフォルダの構成を一貫させる。</td>
            </tr>
            <tr>
              <td className="num">3</td>
              <td>ハードコーディングの回避</td>
              <td>値をコードに埋め込まず、外部から変更可能にする。</td>
            </tr>
            <tr>
              <td className="num">4</td>
              <td>メソッドの入力パラメータを増やしすぎない</td>
              <td>パラメータが多すぎるメソッドは可読性・保守性を下げる。</td>
            </tr>
            <tr>
              <td className="num">5</td>
              <td>長く複雑なメソッドを避ける</td>
              <td>単一責任を意識し、メソッドを小さく保つ。</td>
            </tr>
            <tr>
              <td className="num">6</td>
              <td>ロギングを使用する</td>
              <td>実行状況を追跡できるようにする。</td>
            </tr>
            <tr>
              <td className="num">7</td>
              <td>有益かつ必要な場合にデザインパターンを使用する</td>
              <td>過剰適用は避けつつ、適切な場面で活用する。</td>
            </tr>
            <tr>
              <td className="num">8</td>
              <td>テスタビリティに焦点を当てる</td>
              <td>
                コード自体がテストしやすい構造になっているかを意識する。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="callout source">
        <i className="ti ti-quote"></i>
        <div className="callout-body">
          <p>
            出典：ISTQB CTAL-TAE Syllabus v2.0, Section 4.3.1（p.32）、原典：Robert C. Martin, <em>Clean Code: A Handbook of Agile Software Craftsmanship</em>, 2008<br />
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

      <h3 id="s-43-naming">命名規則の重要性</h3>
      <div className="prose">
        <p>
          わかりやすい変数名（例：<code>loginButton</code>、<code>resetPasswordButton</code>）は、どのコンポーネントを対象にしているかをTAEが直感的に理解する助けになります。命名規則が統一されていないコードベースは、後から参加したメンバーがコードを理解するコストを大きく増加させます。
        </p>
      </div>

      <h3 id="s-43-hardcode">ハードコーディングの回避とデータ駆動テストの関係</h3>
      <div className="prose">
        <p>
          <strong>ハードコーディング</strong>とは、値を変更不可能な形でソフトウェアに直接埋め込むことです。シラバスは次のように整理しています。
        </p>
        <ul>
          <li>
            ハードコーディングは開発時間を短縮できるが、<strong>データが頻繁に変わる場合は保守コストが増大する</strong>ため推奨されない
          </li>
          <li>
            第3章で学んだ<strong>データ駆動テスト（DDT）</strong>を活用し、テストデータを共通のソースから取得する構成にすることで回避できる
          </li>
          <li>
            頻繁に変化しないと想定される値は<strong>定数（constant）</strong>として扱うことで、保守対象箇所を減らせる
          </li>
        </ul>
      </div>

      <div className="diagram-card">
        <div className="diagram-title">
          <i className="ti ti-replace"></i> ハードコーディング回避の効果
        </div>
        <div className="diagram-wrap">
          <Mermaid chart={DIAGRAM_HARDCODING_AVOIDANCE} />
        </div>
        <div className="diagram-fallback" style={{ display: 'none' }}>
          図：ハードコーディングは修正箇所の増加につながる一方、データ駆動テストは1箇所の変更で全テストに反映でき、変化しない値は定数化することで保守対象を減らせる。
        </div>
      </div>

      <h3 id="s-43-pattern">デザインパターンと静的解析の活用</h3>
      <div className="prose">
        <p>
          第3章（3.1.5）で学んだデザインパターン（Facadeパターン、Singletonパターン、Page Object Model、Flow Modelパターンなど）を適切に用いることで、<strong>構造化され保守性の高いテスト自動化コード</strong>を実装できます。
        </p>
        <p>
          さらに、テスト自動化コードの品質を確保するために、以下のツール・慣行の活用が推奨されています。
        </p>
      </div>
      <div className="kv-grid">
        <div className="kv-card">
          <div className="kv-label"><i className="ti ti-search"></i> 静的解析ツール</div>
          <div className="kv-value">static analyzer　コード品質の問題を検出する</div>
        </div>
        <div className="kv-card">
          <div className="kv-label">
            <i className="ti ti-align-left"></i> コードフォーマッタ
          </div>
          <div className="kv-value">IDE組み込みが一般的　可読性を向上させる</div>
        </div>
        <div className="kv-card">
          <div className="kv-label">
            <i className="ti ti-git-branch"></i> ブランチ戦略
          </div>
          <div className="kv-value">
            機能追加・リリース・不具合修正ごとにブランチを用意し、中身を把握しやすくする
          </div>
        </div>
      </div>

      <div id="s-43-bp" className="practice-card">
        <div className="practice-title">
          <i className="ti ti-bulb"></i> ベストプラクティス（4.3 保守性向上）
        </div>
        <ul>
          <li>
            <i className="ti ti-check"></i>Robert C. Martinのクリーンコード原則（8項目）を<strong>チームの共通ルールとして明文化</strong>し、コードレビューの観点に組み込む
          </li>
          <li>
            <i className="ti ti-check"></i>変数・メソッド名は<strong>役割が一目でわかる命名</strong>にし、命名規則をドキュメント化してチーム全体で共有する
          </li>
          <li>
            <i className="ti ti-check"></i>頻繁に変化する値は<strong>データ駆動テスト</strong>で外部化し、変化しない値のみ定数として管理する
          </li>
          <li>
            <i className="ti ti-check"></i>デザインパターン（Facade・Singleton・Page Object Model・Flow Model）は「<strong>必要な場面でのみ</strong>」適用し、過剰な抽象化を避ける
          </li>
          <li>
            <i className="ti ti-check"></i><strong>静的解析ツールとコードフォーマッタをCIパイプラインに組み込み</strong>、レビュー前に機械的にチェックできる状態にする
          </li>
          <li>
            <i className="ti ti-check"></i><strong>ブランチ戦略</strong>（feature・release・hotfix等）をチームで合意し、テストウェアのバージョン管理にも一貫して適用する
          </li>
        </ul>
      </div>
    </section>
  );
}
