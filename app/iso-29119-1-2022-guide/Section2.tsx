import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_03 } from './diagrams';

export default function Section2() {
  return (
    <section>
      <h2 id="step-22013年版からの変更点">STEP 2：2013年版からの変更点</h2>
      <p>
        2022年版の「まえがき」には、主な変更点が8項目列挙されています。初学者向けに「何が変わり、なぜ重要か」を整理します。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>変更点（まえがきの趣旨）</th>
              <th>初学者向けの意味</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>
                規格内で使わない用語の定義を削除し、題名を「Concepts and
                definitions」から「General concepts」へ変更
              </td>
              <td>用語辞典の役割は薄まり、「概念の説明書」に性格が寄った</td>
            </tr>
            <tr className="even">
              <td>テスト概念の扱いを簡潔にし、並べ替えた</td>
              <td>読みやすさの改善。章立てが4.1〜4.7に整理された</td>
            </tr>
            <tr className="odd">
              <td>
                複雑さを理由に<strong>テストサブプロセスの概念を削除</strong>し、テストプロセスの<strong>インスタンス化</strong>の説明を追加
              </td>
              <td>
                「プロセスを自分の現場向けに具体化する」ことが明示された
              </td>
            </tr>
            <tr className="even">
              <td><strong>テスト戦略の期待内容</strong>を明確化</td>
              <td>戦略に何を書くべきかが分かりやすくなった</td>
            </tr>
            <tr className="odd">
              <td>
                簡素化したテスト設計プロセスを記述。テストケースは<strong>テスト条件ではなくテストモデルから導出</strong>
              </td>
              <td>「モデルを作ってからケースを作る」考え方が前面に出た</td>
            </tr>
            <tr className="even">
              <td>
                メトリクス（測定値）の説明を附属書から<strong>本文へ移動</strong>
              </td>
              <td>測定が本編の重要テーマになった</td>
            </tr>
            <tr className="odd">
              <td>
                ライフサイクルモデルごとのテストの位置付けを説明する附属書を削除
              </td>
              <td>特定の開発モデルへの言及を減らし、汎用性を重視</td>
            </tr>
            <tr className="even">
              <td>
                <strong>システム特性ごとのテスト方法の例を示す新附属書（附属書A）を追加</strong>
              </td>
              <td>
                AI・組込み・モバイルなど、対象システムの性質に合わせたテスト選択を支援
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="変更の読み取り方図解">変更の読み取り方（図解）</h3>
      <div aria-label="図解3" className="mermaid-diagram" id="mmd03" role="img">
        <Mermaid chart={DIAGRAM_03} />
      </div>
    </section>
  );
}
