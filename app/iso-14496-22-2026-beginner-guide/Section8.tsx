import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_07 } from './diagrams';

export default function Section8() {
  return (
    <section className="chapter" id="ch8">
      <h2 id="ch8-h">8. 高度な組版：GSUB と GPOS をもう少し詳しく</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、フォントが自分で持っている「組版のルールブック」である
            GSUB と GPOS の骨組みを説明します。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ取り上げるのか：</strong>
        多言語対応（日本語の縦書き、アラビア文字など）の品質は、この2つのテーブルでほぼ決まるためです。
      </p>
      <p>
        Microsoft の仕様書によると、OpenType Layout は次の5つのテーブルを使います。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>テーブル</th>
              <th>名前</th>
              <th>役割</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>GSUB</td>
              <td>Glyph Substitution</td>
              <td>グリフの置き換え</td>
            </tr>
            <tr className="even">
              <td>GPOS</td>
              <td>Glyph Positioning</td>
              <td>グリフの位置調整</td>
            </tr>
            <tr className="odd">
              <td>BASE</td>
              <td>Baseline</td>
              <td>ベースライン（文字を揃える基準線）情報</td>
            </tr>
            <tr className="even">
              <td>JSTF</td>
              <td>Justification</td>
              <td>両端揃えの調整情報</td>
            </tr>
            <tr className="odd">
              <td>GDEF</td>
              <td>Glyph Definition</td>
              <td>グリフの分類（基本字か記号か等）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>さらに数式用に MATH テーブルがあります。</p>
      <h3 id="8-1-gsub-と-gpos-の共通の骨組み">8-1. GSUB と GPOS の共通の骨組み</h3>
      <p>
        仕様書によると、GSUB と GPOS
        は同じ形式のデータで、次の3つのリストと、必要なら FeatureVariations
        で構成されます。
      </p>
      <p>
        この図は、「文字体系 → 機能 → 具体的な処理」と絞り込んでいく階層構造です。
      </p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_07} />
      </div>
      <p>各ノードの意味：</p>
      <ul>
        <li>「ScriptList」：どの文字体系に対応するかの一覧</li>
        <li>
          「LangSys」：同じ文字体系の中での言語別の設定（日本語と中国語で漢字の形を替える、など）
        </li>
        <li>
          「FeatureList」：<code>liga</code>（標準合字）、<code>kern</code>
          （カーニング）、<code>vert</code>
          （縦書き用の形）といった4文字の機能名
        </li>
        <li>「LookupList」：機能が実際に呼び出す処理の本体</li>
      </ul>
      <h3 id="8-2-処理の種類の数">8-2. 処理の種類の数</h3>
      <p>
        仕様書の記載では、GSUB のルックアップは8種類、GPOS
        のルックアップは9種類あります。
      </p>
      <p>
        例え話：機能（feature）は「料理名のメニュー」、ルックアップ（lookup）は「厨房のレシピ」です。メニュー名は
        <code>liga</code>
        のように決まっていますが、レシピの中身はフォントごとに違います。
      </p>
      <h3 id="8-3-日本語に関係する機能タグの例">8-3. 日本語に関係する機能タグの例</h3>
      <p>
        OpenType 1.9.1
        の変更履歴に挙げられている機能名のうち、日本語組版に関わるものの例です。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>タグ</th>
              <th>意味の目安</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>vert</td>
              <td>縦書き用の字形に置き換える</td>
            </tr>
            <tr className="even">
              <td>vrt2</td>
              <td>縦書き用の字形（別方式）</td>
            </tr>
            <tr className="odd">
              <td>vkrn</td>
              <td>縦書き用のカーニング（間隔調整）</td>
            </tr>
            <tr className="even">
              <td>kern</td>
              <td>横書き用のカーニング</td>
            </tr>
            <tr className="odd">
              <td>jp04</td>
              <td>JIS X 0213:2004 の字形にする</td>
            </tr>
            <tr className="even">
              <td>liga</td>
              <td>標準の合字（リガチャ）を作る</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>ScriptList</dt>
            <dd>文字体系（ラテン文字・かな・アラビア文字など）の一覧</dd>
          </div>
          <div className="g">
            <dt>Feature（機能）</dt>
            <dd><code>liga</code> のような4文字のタグで呼び出す組版の機能</dd>
          </div>
          <div className="g">
            <dt>Lookup（ルックアップ）</dt>
            <dd>「文字Aを文字Bに換える」などの具体的な1回分の変換ルール</dd>
          </div>
          <div className="g">
            <dt>合字</dt>
            <dd>2文字以上を合体させた文字の形</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

