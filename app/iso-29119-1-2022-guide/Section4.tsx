import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_05, DIAGRAM_06 } from './diagrams';

export default function Section4() {
  return (
    <section>
      <h2 id="step-4ソフトウェアテストの基本概念41節">
        STEP 4：ソフトウェアテストの基本概念（4.1節）
      </h2>
      <p>
        序文は、4.1節で「品質マネジメントや検証・妥当性確認（V&amp;V）の中でのテストの役割」「静的テストと動的テスト」「網羅テストの非現実性とサンプリングの必要性」「テストベースとテストオラクルの重要性」「テスト独立性の利点」を説明すると述べています。
      </p>
      <h3 id="4-1-10個の基本概念を一覧で理解する">
        4-1. 10個の基本概念を一覧で理解する
      </h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>節</th>
              <th>概念</th>
              <th>一言で言うと</th>
              <th>初学者向けの例（学習用）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>4.1.2</td>
              <td>品質マネジメントとの関係</td>
              <td>テストは品質保証・品質管理の取り組みの一部</td>
              <td>
                「テストだけで品質は作れない」。設計・レビューと組み合わせる
              </td>
            </tr>
            <tr className="even">
              <td>4.1.3</td>
              <td>検証と妥当性確認（V&amp;V）</td>
              <td>
                検証＝仕様どおりに作れたか、妥当性確認＝正しいものを作ったか
              </td>
              <td>
                仕様どおりの画面でも、ユーザーが使えなければ妥当性は低い
              </td>
            </tr>
            <tr className="odd">
              <td>4.1.4</td>
              <td>テストアイテム（test item）</td>
              <td>テストの対象となる成果物</td>
              <td>関数、API、画面、システム全体など</td>
            </tr>
            <tr className="even">
              <td>4.1.5</td>
              <td>静的／動的テスト</td>
              <td>実行しないで調べる／実行して評価する</td>
              <td>レビュー・静的解析／実際に操作して結果を見る</td>
            </tr>
            <tr className="odd">
              <td>4.1.6</td>
              <td>網羅テストとサンプリング</td>
              <td>すべての入力の組合せは試せないので、選んで試す</td>
              <td>下記の計算例を参照</td>
            </tr>
            <tr className="even">
              <td>4.1.7</td>
              <td>ヒューリスティックとしてのテスト</td>
              <td>
                テストは正しさを保証する手段ではなく、経験則的に不具合を探す手段
              </td>
              <td>「テストで不具合が出ない＝不具合がない」ではない</td>
            </tr>
            <tr className="odd">
              <td>4.1.8</td>
              <td>テストの目的</td>
              <td>品質情報の提供、リスク低減など</td>
              <td>リリース判断の材料を出す</td>
            </tr>
            <tr className="even">
              <td>4.1.9</td>
              <td>テストベース（test basis）</td>
              <td>テストケースを設計する根拠になる情報</td>
              <td>
                要求仕様書、設計書、または文書化されていない期待動作の理解
              </td>
            </tr>
            <tr className="odd">
              <td>4.1.10</td>
              <td>テストオラクル（test oracle）</td>
              <td>期待結果を判断する拠り所</td>
              <td>仕様、旧バージョンの出力、有識者の知識など</td>
            </tr>
            <tr className="even">
              <td>4.1.11</td>
              <td>テスト独立性</td>
              <td>作った人と別の視点でテストする利点</td>
              <td>
                開発者自身／同チーム別人／別チーム／外部組織、と独立度が上がる
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <aside className="callout callout-note">
        <div className="callout-title">補足</div>
        <div className="callout-body">
          <p>
            4.1.7〜4.1.11
            の表中の説明は、節の見出しと序文の要約を手がかりにした一般的な解説です。本文の厳密な記述は正式版でご確認ください。
          </p>
        </div>
      </aside>
      <h3 id="4-2-静的テストと動的テスト">4-2. 静的テストと動的テスト</h3>
      <p>
        規格の用語定義では、<strong>動的テスト</strong>は「テストアイテムを実行して評価するテスト」、<strong>静的テスト</strong>は「実行せずに品質基準などに照らして調べるテスト」で、例にレビューと静的解析が挙げられています。
      </p>
      <div aria-label="図解5" className="mermaid-diagram" id="mmd05" role="img">
        <Mermaid chart={DIAGRAM_05} />
      </div>
      <h3 id="4-3-なぜ網羅テストは不可能か計算例">
        4-3. なぜ網羅テストは不可能か（計算例）
      </h3>
      <p>
        規格は、網羅テストを「入力値と事前条件のすべての組合せをテストするアプローチ」と定義し、非自明な場面ではほぼ不可能と注記しています。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>前提（学習用の仮定）</th>
              <th>値</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>関数の入力</td>
              <td>32ビット整数が2個</td>
            </tr>
            <tr className="even">
              <td>入力の組合せ数</td>
              <td>2の64乗 ＝ 約 1.8 × 10の19乗 通り</td>
            </tr>
            <tr className="odd">
              <td>1秒に10億件テストできると仮定</td>
              <td>約 1.8 × 10の10乗 秒</td>
            </tr>
            <tr className="even">
              <td>年に換算</td>
              <td><strong>約 585 年</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        結論：すべてを試すことはできないため、<strong>リスクに基づいて「どこを・どの深さで」試すかを選ぶ（サンプリング）</strong>ことが戦略の本質になります（STEP
        5へ）。
      </p>
      <h3 id="4-4-テストベースとテストオラクルの関係">
        4-4. テストベースとテストオラクルの関係
      </h3>
      <div aria-label="図解6" className="mermaid-diagram" id="mmd06" role="img">
        <Mermaid chart={DIAGRAM_06} />
      </div>
    </section>
  );
}
