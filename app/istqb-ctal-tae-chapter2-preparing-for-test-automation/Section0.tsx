import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_POSITION } from './diagrams';

export default function Section0() {
  return (
    <>
      <section id="sec-0">
        <h2>0. この章の位置づけ</h2>
        <p>
          Chapter 1では「なぜテスト自動化を行うのか」を学びました。Chapter
          2では、実際にテスト自動化を始める<strong>前段階</strong>として、以下の2つの大きなテーマを扱います。
        </p>
        <ol>
          <li>
            <strong>インフラ構成の理解</strong>：SUT（System Under
            Test：テスト対象システム）がテスト可能（testable）であるために、どのようなインフラ・環境設計が必要か
          </li>
          <li>
            <strong>ツール・戦略の評価プロセス</strong>
            ：SUTを分析し、適切な自動化ソリューションとツールをどう選び、どう関係者に説明するか
          </li>
        </ol>

        <div className="mermaid-container" id="mermaid-diagram-position">
          <Mermaid chart={DIAGRAM_POSITION} />
        </div>

        <h3 id="lo-heading">学習目標（Learning Objectives）</h3>
        <div className="table-scroll">
          <table aria-labelledby="lo-heading">
            <thead>
              <tr>
                <th>ID</th>
                <th>認知レベル</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TAE-2.1.1</td>
                <td>K2（理解）</td>
                <td>
                  テスト自動化の実装を可能にするインフラの構成ニーズを記述できる
                </td>
              </tr>
              <tr>
                <td>TAE-2.1.2</td>
                <td>K2（理解）</td>
                <td>
                  テスト自動化が異なる環境内でどのように活用されるかを説明できる
                </td>
              </tr>
              <tr>
                <td>TAE-2.2.1</td>
                <td>K4（分析）</td>
                <td>
                  SUTを分析し、適切なテスト自動化ソリューションを判断できる
                </td>
              </tr>
              <tr>
                <td>TAE-2.2.2</td>
                <td>K4（分析）</td>
                <td>ツール評価の技術的所見を図示（整理・提示）できる</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>キーワード（覚えておくべき用語）</h3>
        <ul>
          <li>
            <strong>API testing</strong>（APIテスト）
          </li>
          <li>
            <strong>GUI testing</strong>（GUIテスト）
          </li>
          <li>
            <strong>testability</strong>（テスト容易性）
          </li>
        </ul>
      </section>

      <hr />
    </>
  );
}
