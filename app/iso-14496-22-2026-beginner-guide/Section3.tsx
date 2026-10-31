import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_02 } from './diagrams';

export default function Section3() {
  return (
    <section className="chapter" id="ch3">
      <h2 id="ch3-h">3. 規格の基本情報と改訂の流れ</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、ISO
            公式ページで確認できる「版・日付・ページ数・過去版との関係」を整理します。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ表にするのか：</strong>規格の調査では「どの版が今有効か」を取り違える事故が起きやすいためです。
      </p>
      <h3 id="3-1-基本情報">3-1. 基本情報</h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>項目</th>
              <th>公式ページの記載</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>規格番号</td>
              <td>ISO/IEC 14496-22:2026（第5版）</td>
            </tr>
            <tr className="even">
              <td>英語正式名</td>
              <td>
                Information technology — Coding of audio-visual objects — Part 22:
                Open font format
              </td>
            </tr>
            <tr className="odd">
              <td>発行日（Publication date）</td>
              <td>2026年7月16日</td>
            </tr>
            <tr className="even">
              <td>状態</td>
              <td>Published（段階コード 60.60：国際規格発行済み）</td>
            </tr>
            <tr className="odd">
              <td>ページ数</td>
              <td>1003 ページ</td>
            </tr>
            <tr className="even">
              <td>担当委員会</td>
              <td>
                ISO/IEC JTC 1/SC
                29（音声・画像・マルチメディア・ハイパーメディア情報の符号化）
              </td>
            </tr>
            <tr className="odd">
              <td>ICS（国際規格分類）</td>
              <td>35.040.40</td>
            </tr>
            <tr className="even">
              <td>言語・形式</td>
              <td>英語・PDF／紙</td>
            </tr>
            <tr className="odd">
              <td>置き換えた旧版</td>
              <td>
                ISO/IEC 14496-22:2019、同 Amd 1:2020、同 Amd
                2:2023（いずれも Withdrawn＝廃止）
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        注意：価格表示は、取得したページ上で「CHF
        0」と表示される場合と、検索結果のスナップショットで「CHF
        227」と表示される場合がありました。購入前に公式ページで最新の表示を確認してください。
      </p>
      <h3 id="3-2-第5版ができるまで">3-2. 第5版ができるまで</h3>
      <p>
        この図は、公式ページの「ライフサイクル」に記録された主要な日付を上から下へ並べたものです。
      </p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_02} />
      </div>
      <p>各ノードの意味：</p>
      <ul>
        <li>
          「CD」（Committee
          Draft＝委員会原案）：専門家グループが最初にまとめる原案
        </li>
        <li>
          「DIS」（Draft International
          Standard＝国際規格案）：各国が投票する段階。12週間の投票
        </li>
        <li>
          「FDIS」（Final Draft International
          Standard＝最終国際規格案）：最後の承認投票。8週間
        </li>
        <li>「発行」：投票が通ったあと、出版の工程を経て規格として公開される</li>
      </ul>
      <p>規格の開発開始から発行まで、約3年かかっていることが日付から分かります。</p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>JTC 1/SC 29</dt>
            <dd>ISO と IEC が共同で作る、メディア符号化を担当する委員会</dd>
          </div>
          <div className="g">
            <dt>段階コード</dt>
            <dd>規格の進行状況を表す番号（60.60 は発行済み）</dd>
          </div>
          <div className="g">
            <dt>Amendment（Amd）</dt>
            <dd>既に発行された規格に対する追補（部分的な改訂）</dd>
          </div>
          <div className="g">
            <dt>廃止（Withdrawn）</dt>
            <dd>新しい版に置き換わり、使わなくなった状態</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
