import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_01 } from './diagrams';

export default function Section2() {
  return (
    <section className="chapter" id="ch2">
      <h2 id="ch2-h">2. なぜ必要なのか：TrueType と PostScript の統合の歴史</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、規格が「2つの技術の組み合わせ」と説明される理由を、歴史の流れで説明します。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ歴史を先に見るのか：</strong>後の章で出てくる
        <code>glyf</code> と
        <code>CFF</code>
        という2つの輪郭テーブルの存在理由は、この歴史を知らないと分かりにくいためです。
      </p>
      <p>
        Microsoft の仕様書は「OpenType は元の TrueType 形式の拡張で、Microsoft と
        Adobe Systems が共同で開発した」と説明しています。そして OpenType
        は、TrueType
        仕様にもともとあったテーブルに加えて、より多くのテーブルを使えるようにし、フォントにより高度な知性を持たせています。
      </p>
      <p>
        この図は、2つの流れが1つの形式に合流する様子を表しています。左から右へ読み進めてください。
      </p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_01} />
      </div>
      <p>各ノードの意味：</p>
      <ul>
        <li>
          「TrueType 形式」：<code>glyf</code> テーブルに輪郭を持つ系統。もとは
          Apple が作り、Microsoft も採用した
        </li>
        <li>
          「PostScript 由来の CFF 形式」：Adobe
          の印刷技術に由来する輪郭の表し方。<code>CFF</code> や
          <code>CFF2</code> テーブルに入る
        </li>
        <li>
          「OpenType」：TrueType 輪郭と CFF/CFF2
          輪郭のどちらでも収められる共通構造「sfnt
          というラッパー（＝包み紙）」を使う形式。2つの輪郭方式は形式上の選択肢であり、1つのフォントの中で両方の輪郭を同居させるという意味ではない（どちらを使うかは章5の
          sfntVersion で区別する）
        </li>
        <li>「ISO/IEC 14496-22」：その仕様を ISO/IEC の国際規格にしたもの</li>
        <li>
          「共通で読める」：ブラウザや OS
          が同じ規格を実装するため、フォントの互換性が保たれる
        </li>
      </ul>
      <h3 id="日本の読者にとっての意味">日本の読者にとっての意味</h3>
      <p>
        Microsoft の仕様書は、ファイル拡張子として <code>.OTF</code>
        <code>.TTF</code> <code>.OTC</code> <code>.TTC</code> を挙げ、
        <code>.OTC</code> と <code>.TTC</code>
        は「フォントコレクション」専用と書いています。日本語フォントでよく見る
        <code>.ttc</code>（複数書体をまとめた1ファイル）は、この規格の一部です。詳しくは章11で扱います。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>TrueType</dt>
            <dd>Apple 発祥のフォント形式。輪郭を二次曲線で表す</dd>
          </div>
          <div className="g">
            <dt>CFF（Compact Font Format）</dt>
            <dd>Adobe 由来のコンパクトな輪郭形式。三次曲線を使う</dd>
          </div>
          <div className="g">
            <dt>sfnt</dt>
            <dd>
              フォントファイル全体を包む「テーブルの目次付きコンテナ」の仕組み
            </dd>
          </div>
          <div className="g">
            <dt>拡張子</dt>
            <dd>ファイル名の末尾にある種類の目印（.ttf など）</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
