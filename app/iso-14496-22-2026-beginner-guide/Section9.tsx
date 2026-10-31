import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_08 } from './diagrams';

export default function Section9() {
  return (
    <section className="chapter" id="ch9">
      <h2 id="ch9-h">9. 可変フォント（OpenType Font Variations）</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、1つのフォントファイルで太さや幅を連続的に変えられる「可変フォント」の仕組みを説明します。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ重要なのか：</strong>Web では「Regular と Bold
        の2ファイル」を、1ファイルにまとめられるためです。ファイル数が減り、細かい太さの調整もできます。
      </p>
      <h3 id="9-1-例え話音量つまみ">9-1. 例え話：音量つまみ</h3>
      <p>
        従来のフォントは「音量が小・中・大の3段階だけのスイッチ」です。可変フォントは「つまみ」で、どの位置にも止められます。つまみ1つが「軸（axis）」で、太さ（weight）や幅（width）が代表です。
      </p>
      <h3 id="9-2-仕組みの骨組み">9-2. 仕組みの骨組み</h3>
      <p>Microsoft の仕様書によると：</p>
      <ul>
        <li>
          軸ごとに最小値・標準値（デフォルト）・最大値を
          <code>fvar</code> テーブルに書く
        </li>
        <li>デフォルトの輪郭は <code>glyf</code> などに普通に入れておく</li>
        <li>
          他の太さの輪郭は、デフォルトからの<strong>差分</strong>（デルタ）として
          <code>gvar</code> に入れる
        </li>
        <li>
          ユーザーが指定した太さに応じて、差分を掛け算して足し合わせる
        </li>
      </ul>
      <p>この図は、ユーザーが太さを指定してから輪郭ができるまでの計算です。</p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_08} />
      </div>
      <h3 id="9-3-値を計算する例仕様書の例より">
        9-3. 値を計算する例（仕様書の例より）
      </h3>
      <p>
        仕様書の avar の節にある例を、噛み砕いて紹介します。太さの軸（wght）で：
      </p>
      <ul>
        <li>最小値が 100、デフォルトが 400、最大値が 900</li>
        <li>ユーザーが <strong>250</strong> を指定したとする</li>
      </ul>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>ステップ</th>
              <th>計算</th>
              <th>結果</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>1. 正規化（デフォルトを 0 とする尺度に直す）</td>
              <td>(250 − 400) ÷ (400 − 100) = −150 ÷ 300</td>
              <td><strong>−0.5</strong></td>
            </tr>
            <tr className="even">
              <td>2. avar の区間（−0.75 → −0.5 と 0 → 0）を探す</td>
              <td>比率 = (−0.5 − (−0.75)) ÷ (0 − (−0.75))</td>
              <td>約 <strong>0.3333</strong></td>
            </tr>
            <tr className="odd">
              <td>3. 補正後の値</td>
              <td>−0.5 + 0.3333 × (0 − (−0.5))</td>
              <td>約 <strong>−0.3333</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="why-note">
        <strong>なぜ avar があるのか：</strong>
        太さの値は、見た目の変化が均等になるとは限りません。補正することで、デザイナーが意図した見た目の変化になめらかに合わせられます。
      </p>
      <h3 id="9-4-可変フォントで必要になる追加テーブル">
        9-4. 可変フォントで必要になる追加テーブル
      </h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>輪郭の種類</th>
              <th>追加で必要・推奨になるもの</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>TrueType 輪郭</td>
              <td>
                gvar（輪郭の差分）、HVAR 推奨（横幅の計算を速くするため）
              </td>
            </tr>
            <tr className="even">
              <td>CFF2 輪郭</td>
              <td>差分は CFF2 テーブル内に入る。hmtx と HVAR が必須</td>
            </tr>
            <tr className="odd">
              <td>共通</td>
              <td>
                fvar と STAT が必須。MVAR（全体の寸法の変化）は必要に応じて
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        注意：仕様書によると、従来の <code>CFF</code> テーブル（CFF2
        ではないもの）の輪郭は可変フォントに対応していません。
      </p>
      <h3 id="9-5-来歴">9-5. 来歴</h3>
      <p>
        仕様書は、TrueType 輪郭向けのフォント可変機構は Apple の「TrueType
        GX」が最初で、OpenType Font Variations
        のテーブルの一部はその仕様を改良して取り入れたものだと説明しています。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>軸（axis）</dt>
            <dd>太さ・幅・傾きなど、連続的に変えられる設計上の変数</dd>
          </div>
          <div className="g">
            <dt>デルタ（差分）</dt>
            <dd>デフォルトからの変化量</dd>
          </div>
          <div className="g">
            <dt>正規化</dt>
            <dd>値を決まった範囲（−1〜+1）に直すこと</dd>
          </div>
          <div className="g">
            <dt>named instance</dt>
            <dd>「Light」「Semibold」のように名前をつけた特定の軸位置</dd>
          </div>
          <div className="g">
            <dt>補間</dt>
            <dd>2点の間の値を、比率で計算して求めること</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
