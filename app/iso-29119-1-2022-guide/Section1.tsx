import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_02 } from './diagrams';

export default function Section1() {
  return (
    <section>
      <h2 id="step-1規格の全体像">STEP 1：規格の全体像</h2>
      <h3 id="1-1-一言でいうと">1-1. 一言でいうと</h3>
      <p>
        ISO/IEC/IEEE 29119-1
        は、ソフトウェアテストに関する<strong>一般概念を定め、29119シリーズ全体の鍵となる考え方を示す文書</strong>です（ISOの要約による）。
      </p>
      <h3 id="1-2-基本情報">1-2. 基本情報</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>項目</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>規格番号</td>
              <td>ISO/IEC/IEEE 29119-1:2022</td>
            </tr>
            <tr className="even">
              <td>題名</td>
              <td>
                Software and systems engineering — Software testing — Part
                1: General concepts
              </td>
            </tr>
            <tr className="odd">
              <td>日本語での呼び方（例）</td>
              <td>
                ソフトウェアおよびシステム工学 — ソフトウェアテスト —
                第1部：一般概念
              </td>
            </tr>
            <tr className="even">
              <td>版</td>
              <td>第2版（Edition 2）</td>
            </tr>
            <tr className="odd">
              <td>発行</td>
              <td>2022年（ISOの発行日：2022-01、IECの発行日：2022-02-04）</td>
            </tr>
            <tr className="even">
              <td>分量</td>
              <td>英語版 47ページ</td>
            </tr>
            <tr className="odd">
              <td>担当委員会</td>
              <td>
                ISO/IEC JTC 1/SC 7（ソフトウェアおよびシステム工学）／
                起草は WG 26（ソフトウェアテスト）
              </td>
            </tr>
            <tr className="even">
              <td>協力組織</td>
              <td>
                IEEE Computer Society（Systems and Software Engineering
                Standards Committee）
              </td>
            </tr>
            <tr className="odd">
              <td>分類</td>
              <td>ICS 35.080（ソフトウェア）</td>
            </tr>
            <tr className="even">
              <td>状態（2026年10月21日時点でISOページ確認）</td>
              <td>
                発行済み（Stage 60.60）。前版 ISO/IEC/IEEE 29119-1:2013
                は廃止（Withdrawn）
              </td>
            </tr>
            <tr className="odd">
              <td>言語</td>
              <td>英語・フランス語</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="1-3-29119シリーズの中での位置付け">
        1-3. 29119シリーズの中での位置付け
      </h3>
      <div aria-label="図解2" className="mermaid-diagram" id="mmd02" role="img">
        <Mermaid chart={DIAGRAM_02} />
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>パート</th>
              <th>名称・テーマ</th>
              <th>位置付け</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>Part 1（本書）</td>
              <td>一般概念（General concepts）</td>
              <td>情報提供（informative）</td>
            </tr>
            <tr className="even">
              <td>Part 2</td>
              <td>テストプロセス（組織・管理・動的テスト）</td>
              <td>規範（normative）</td>
            </tr>
            <tr className="odd">
              <td>Part 3</td>
              <td>テスト文書化（テンプレートと例）</td>
              <td>規範</td>
            </tr>
            <tr className="even">
              <td>Part 4</td>
              <td>テスト技法</td>
              <td>規範</td>
            </tr>
            <tr className="odd">
              <td>Part 5</td>
              <td>キーワード駆動テスト（フレームワークとツール）</td>
              <td>
                規範。キーワード駆動テストのフレームワークとツールに関する要求事項を含む（2024年版）
              </td>
            </tr>
            <tr className="even">
              <td>TR（Part 6、Part 11 など）</td>
              <td>
                アジャイルでの利用、AIベースシステムのテストなどの技術報告
              </td>
              <td>技術報告（ガイダンス）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <aside className="callout callout-warn">
        <div className="callout-title">よくある誤解</div>
        <div className="callout-body">
          <p>
            「29119に準拠＝全文書を作らなければならない」ではありません。序文は、要求事項のすべてに従わない正当な理由がある利用者（例：アジャイル開発）が、<strong>テーラリング（調整）の程度と根拠を記述して合意すれば「調整適合（tailored conformance）」を主張できる</strong>と述べています。
          </p>
        </div>
      </aside>
      <h3 id="1-4-他の規格との関係">1-4. 他の規格との関係</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>関連規格</th>
              <th>関係</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>ISO/IEC/IEEE 12207 / 15288</td>
              <td>
                ライフサイクルモデルを定める規格。テストの詳細は29119を参照する、という使い分けが序文で例示されている
              </td>
            </tr>
            <tr className="even">
              <td>ISO/IEC 25010:2023</td>
              <td>
                製品品質モデルと品質特性を定義し、品質の仕様化・測定・評価に使える参照モデルを提供する。29119は「どうテストして証拠化するか」を扱う（arc42による整理）
              </td>
            </tr>
            <tr className="odd">
              <td>ISO/IEC 20246</td>
              <td>
                成果物レビュー（Work product
                reviews）の規格。レビューのプロセスと技法を定め、29119の静的テストのうちレビューを扱う（arc42による整理）
              </td>
            </tr>
            <tr className="even">
              <td>ISO/IEC/IEEE 24765</td>
              <td>
                システム・ソフトウェア工学の用語集（SEVOCAB）。本規格の用語節から参照されている
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
