import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_09 } from './diagrams';

export default function Section11() {
  return (
    <section className="chapter" id="ch11">
      <h2 id="ch11-h">11. 日本語の読者に関係するポイント</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、日本語環境でフォントを扱うときに特に重要な「コレクション」「縦書き」「字形切り替え」を整理します。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ日本語に注目するのか：</strong>
        漢字・かな・縦書き・字形のバリエーションなど、日本語組版は規格が持つ高度な機能を多く使うためです。
      </p>
      <h3 id="11-1-フォントコレクションttc-otcで漢字を共有する">
        11-1. フォントコレクション（.ttc / .otc）で漢字を共有する
      </h3>
      <p>
        Microsoft
        の仕様書は、フォントコレクションの利点を次の例で説明しています。複数の日本語フォントがそれぞれ違うかなの字形を持ちつつ、漢字は同じデザインを使う場合、通常の1ファイル1書体では漢字のデータを各ファイルに複製するしかありません。コレクションなら、漢字のデータを共有できます。
      </p>
      <p>
        この図は、2つの書体が1つの <code>glyf</code> テーブルを共有する様子です。
      </p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_09} />
      </div>
      <p>各ノードの意味：</p>
      <ul>
        <li>「TTC ヘッダ」：先頭にあり、各フォントの目次の位置を並べた表</li>
        <li>「Font1 / Font2」：コレクションに含まれる個々のフォント</li>
        <li>
          「cmap 1 / cmap 2」：フォントごとに別々に持つ対応表。
          <strong>かなは別々の形、漢字は同じ形を指す</strong>
        </li>
        <li>「共有の glyf」：両方のフォントが同じテーブルを指す</li>
      </ul>
      <p>仕様書の指針：</p>
      <ul>
        <li>
          フォントごとに別に持つべきテーブル：<code>cmap</code>、<code>name</code>、<code>OS/2</code>（識別や文字対応に使うため）
        </li>
        <li>
          共有してよいテーブル：<code>glyf</code>、<code>loca</code>、<code>hmtx</code>、<code>maxp</code>
          など（グリフのデータや、グリフ番号で引くデータ）
        </li>
        <li>
          拡張子：TrueType 輪郭を含むコレクションは <code>.TTC</code>、CFF/CFF2
          輪郭を含むものは <code>.OTC</code> を使う
        </li>
      </ul>
      <h3 id="11-2-縦書き">11-2. 縦書き</h3>
      <p>
        仕様書は、縦書きに使う CFF 系の OpenType フォントには
        <code>VORG</code>（Vertical
        Origin）テーブルを入れることを強く推奨しています。1.9.1 の変更履歴では、VORG
        を CFF2 とあわせて使えると明確化されました。
      </p>
      <h3 id="11-3-字形の切り替え章8の機能タグ">
        11-3. 字形の切り替え（章8の機能タグ）
      </h3>
      <p>
        <code>vert</code>、<code>jp90</code>、<code>jp04</code>
        などの機能により、同じ文字コードでも書体内で別の字形を呼び出せます。QA
        では「機能が有効なアプリと無効なアプリで見た目が違う」ことがありえます（章13参照）。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>フォントコレクション</dt>
            <dd>複数のフォントを1ファイルにまとめた形式</dd>
          </div>
          <div className="g">
            <dt>縦書き</dt>
            <dd>文字を上から下に並べる書き方</dd>
          </div>
          <div className="g">
            <dt>VORG</dt>
            <dd>縦書きでの文字の基準点を決める CFF 向けテーブル</dd>
          </div>
          <div className="g">
            <dt>字形</dt>
            <dd>同じ文字の、デザイン上のバリエーション</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

