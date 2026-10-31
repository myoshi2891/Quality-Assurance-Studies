import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_07, DIAGRAM_08 } from './diagrams';

export default function Section5() {
  return (
    <section>
      <h2 id="step-5テスト計画とテスト戦略42節">
        STEP 5：テスト計画とテスト戦略（4.2節）
      </h2>
      <p>
        序文は、テスト計画とテスト戦略を<strong>リスクベースドテスト</strong>の文脈で説明し、これを「29119シリーズの根底にある、戦略立案とテスト管理の推奨アプローチ」「テストの優先順位付けと焦点の基礎」と位置付けています。
      </p>
      <h3 id="5-1-リスクの2種類">5-1. リスクの2種類</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>種類</th>
              <th>規格の定義（趣旨）</th>
              <th>例</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>プロダクトリスク</td>
              <td>製品が機能・品質・構造のどこかで欠陥を持つ可能性</td>
              <td>決済計算の誤り、個人情報の漏えい</td>
            </tr>
            <tr className="even">
              <td>プロジェクトリスク</td>
              <td>プロジェクトの管理に関するリスク</td>
              <td>人員不足、厳しい納期、要求の変更</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="5-2-リスクベースドテストとは">5-2. リスクベースドテストとは</h3>
      <p>
        規格は、<strong>テスト活動と資源の管理・選択・優先順位付け・使用が、分析されたリスクの種類とレベルに意識的に基づいているテスト</strong>と定義しています。
      </p>
      <div aria-label="図解7" className="mermaid-diagram" id="mmd07" role="img">
        <Mermaid chart={DIAGRAM_07} />
      </div>
      <h3 id="5-3-具体例リスク分析からテストの深さを決める学習用">
        5-3. 具体例：リスク分析からテストの深さを決める（学習用）
      </h3>
      <p>ECサイトの機能を例にした簡易表です。</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>機能</th>
              <th>起こりやすさ</th>
              <th>影響度</th>
              <th>リスク</th>
              <th>テストの方針（例）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>決済処理</td>
              <td>中</td>
              <td>高</td>
              <td><strong>高</strong></td>
              <td>
                仕様ベース技法（同値分割・境界値・決定表）＋構造ベース（分岐・MC/DC）＋回帰を自動化
              </td>
            </tr>
            <tr className="even">
              <td>会員登録</td>
              <td>中</td>
              <td>中</td>
              <td>中</td>
              <td>仕様ベース技法＋探索的テスト</td>
            </tr>
            <tr className="odd">
              <td>商品レビュー表示</td>
              <td>低</td>
              <td>低</td>
              <td>低</td>
              <td>基本動作の確認と探索的テスト少量</td>
            </tr>
            <tr className="even">
              <td>配送状況ページ</td>
              <td>高</td>
              <td>中</td>
              <td>中〜高</td>
              <td>外部連携の異常系を重点的に確認</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="5-4-テスト戦略とテストアプローチ">5-4. テスト戦略とテストアプローチ</h3>
      <p>
        規格の定義では、<strong>テストアプローチ</strong>は「テスト戦略を設計する活動の中で通常行う、高レベルのテスト実装上の選択」で、典型的にはテストレベル・テストタイプ・テスト技法・テストプラクティス・静的テストの形態を選びます。
      </p>
      <div aria-label="図解8" className="mermaid-diagram" id="mmd08" role="img">
        <Mermaid chart={DIAGRAM_08} />
      </div>
      <h3 id="5-5-テスト戦略とテスト計画の違い整理">
        5-5. テスト戦略とテスト計画の違い（整理）
      </h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>観点</th>
              <th>テスト戦略</th>
              <th>テスト計画</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>主な問い</td>
              <td>どんな考え方で、何を重視してテストするか</td>
              <td>いつ・誰が・どの環境で・何をテストするか</td>
            </tr>
            <tr className="even">
              <td>位置付け</td>
              <td>
                特定のプロジェクト、テストレベル、またはテストタイプに対するテスト計画の一部として定める（Part
                3
                では「テスト計画（テスト戦略を含む）」として登場する）。組織レベルの文書は「組織テストポリシー／組織テストプラクティス」として別に扱う
              </td>
              <td>
                特定のプロジェクト、テストレベル、またはテストタイプに対する具体的計画（その一部としてテスト戦略を含む）
              </td>
            </tr>
            <tr className="odd">
              <td>変わりやすさ</td>
              <td>比較的安定</td>
              <td>プロジェクト状況で更新される</td>
            </tr>
          </tbody>
        </table>
      </div>
      <aside className="callout callout-note">
        <div className="callout-title">ポイント</div>
        <div className="callout-body">
          <p>
            4.2.7「テスト戦略の内容」は、2022年版で<strong>期待内容が明確化</strong>された節です（まえがきによる）。具体的な項目の厳密な一覧は正式版でご確認ください。本ガイドは、テストアプローチの定義（上記）から導ける範囲に絞っています。
          </p>
        </div>
      </aside>
      <h3 id="5-6-42節の残り2項目">5-6. 4.2節の残り2項目</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>節</th>
              <th>内容</th>
              <th>ポイント</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>4.2.5 開発・保守ライフサイクルでのテスト</td>
              <td>ライフサイクルとテストの関係</td>
              <td>
                2022年版は特定ライフサイクル解説の附属書を削除し、汎用性を優先
              </td>
            </tr>
            <tr className="even">
              <td>4.2.6 ドメインとシステム特性</td>
              <td>システムの種類・性質がテスト戦略に影響する</td>
              <td>詳細は<strong>附属書A</strong>（STEP 9）で例示</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
