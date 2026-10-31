import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_05 } from './diagrams';

export default function Section6() {
  return (
    <section className="chapter" id="ch6">
      <h2 id="ch6-h">6. テーブルの全体地図</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、フォントの中に入っているテーブルを「役割ごと」に分けた地図を示します。1003ページある規格の大部分は、これらのテーブルの定義です。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ分類するのか：</strong>
        数十種類あるテーブルを1つずつ覚えるのは負担が大きいため、「どの役割のグループか」で整理すると全体を見失いません。
      </p>
      <h3 id="6-1-必須テーブルどの種類のフォントでも必要">
        6-1. 必須テーブル（どの種類のフォントでも必要）
      </h3>
      <p>
        Microsoft の仕様書は、TrueType 輪郭でも CFF
        輪郭でも、次の8つを必須としています。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>タグ</th>
              <th>名前</th>
              <th>何が書いてあるか</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>cmap</td>
              <td>Character to glyph mapping</td>
              <td>文字コード → グリフ番号の対応表</td>
            </tr>
            <tr className="even">
              <td>head</td>
              <td>Font header</td>
              <td>フォント全体の基本情報（座標の単位数など）</td>
            </tr>
            <tr className="odd">
              <td>hhea</td>
              <td>Horizontal header</td>
              <td>横書きの基本寸法</td>
            </tr>
            <tr className="even">
              <td>hmtx</td>
              <td>Horizontal metrics</td>
              <td>各グリフの横幅など</td>
            </tr>
            <tr className="odd">
              <td>maxp</td>
              <td>Maximum profile</td>
              <td>グリフ数などの上限値</td>
            </tr>
            <tr className="even">
              <td>name</td>
              <td>Naming table</td>
              <td>フォント名・著作権表示などの文字列</td>
            </tr>
            <tr className="odd">
              <td>OS/2</td>
              <td>OS/2 and Windows specific metrics</td>
              <td>太さ・幅・ベンダー識別などの追加情報</td>
            </tr>
            <tr className="even">
              <td>post</td>
              <td>PostScript information</td>
              <td>PostScript 用の情報・グリフ名</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="6-2-役割別のグループ">6-2. 役割別のグループ</h3>
      <p>この図は、テーブルのグループ構成です。</p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_05} />
      </div>
      <p>各ノードの意味：</p>
      <ul>
        <li>
          「輪郭」：文字の形そのもの。TrueType なら <code>glyf</code>（形）と
          <code>loca</code>（位置）、CFF なら <code>CFF</code> または
          <code>CFF2</code>
        </li>
        <li>
          「SVG」：<code>SVG</code> テーブル。文字の形を SVG
          で提供できる。基本輪郭と共存する
        </li>
        <li>
          「ビットマップ」：小さな画面用の点絵。<code>CBDT</code> /
          <code>CBLC</code> や Apple の <code>sbix</code> など
        </li>
        <li>
          「高度な組版」：<code>GSUB</code>（文字の置き換え）、<code>GPOS</code>
          （位置調整）、<code>GDEF</code>（文字の分類情報）など。章8で詳述
        </li>
        <li>
          「可変フォント」：1つのフォントで太さなどを滑らかに変える仕組み。
          <code>fvar</code>、<code>gvar</code>、<code>HVAR</code> など。章9で詳述
        </li>
        <li>
          「カラー」：カラー絵文字など。<code>COLR</code> と <code>CPAL</code>。章10で詳述
        </li>
      </ul>
      <h3 id="6-3-グリフのアウトラインtruetype-と-cffcff2">
        6-3. グリフのアウトライン：TrueType と CFF/CFF2
      </h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>輪郭の方式</th>
              <th>使うテーブル</th>
              <th>曲線の種類</th>
              <th>歴史的ルーツ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>TrueType</td>
              <td>glyf、loca</td>
              <td>二次ベジェ曲線</td>
              <td>Apple / Windows</td>
            </tr>
            <tr className="even">
              <td>CFF</td>
              <td>CFF</td>
              <td>三次ベジェ曲線</td>
              <td>Adobe PostScript / Type 1</td>
            </tr>
            <tr className="odd">
              <td>CFF2</td>
              <td>CFF2</td>
              <td>三次ベジェ曲線（可変フォント向けに最適化）</td>
              <td>OpenType 1.8（2016年）以降</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="why-note">
        <strong>なぜ CFF2 ができたのか：</strong>従来の CFF
        テーブルは歴史的なPostScriptの古い構造を多く引きずっており、可変フォントの「差分データ」を効率よく埋め込むのが難しかったため、可変フォント導入のタイミングで仕様を整理した
        CFF2 が作られました。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>GSUB</dt>
            <dd>グリフを別の形に置き換えるテーブル（合字や異体字に使う）</dd>
          </div>
          <div className="g">
            <dt>GPOS</dt>
            <dd>グリフの位置を微調整するテーブル（カーニングなどに使う）</dd>
          </div>
          <div className="g">
            <dt>fvar</dt>
            <dd>可変フォントで、変化できる「軸（太さなど）」を定義するテーブル</dd>
          </div>
          <div className="g">
            <dt>COLR / CPAL</dt>
            <dd>複数の色つきレイヤーを重ねてカラー文字を表示するテーブル</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

