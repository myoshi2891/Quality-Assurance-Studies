import React from 'react';

export default function Section10() {
  return (
    <section className="chapter" id="ch10">
      <h2 id="ch10-h">10. カラーフォントと絵文字</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、色や
            グラデーションを持つ文字を、フォントでどう表すかを説明します。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ取り上げるのか：</strong>絵文字や色つきアイコンは、現代の UI
        で毎日使われるためです。
      </p>
      <p>
        Microsoft の仕様書は、カラーフォント関連のテーブルとして次を挙げています。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>テーブル</th>
              <th>方式</th>
              <th>特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>COLR + CPAL</td>
              <td>ベクターの層を重ねる</td>
              <td>軽量。COLR は v0 と v1 がある</td>
            </tr>
            <tr className="even">
              <td>SVG</td>
              <td>SVG 文書でグリフを描く</td>
              <td>表現力が高い</td>
            </tr>
            <tr className="odd">
              <td>CBDT + CBLC</td>
              <td>ビットマップ（Google 系）</td>
              <td>画像なのでサイズが大きくなりがち</td>
            </tr>
            <tr className="even">
              <td>sbix</td>
              <td>ビットマップ（Apple 系）</td>
              <td>同上</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="colrv1-の位置づけ">COLRv1 の位置づけ</h3>
      <p>
        Chrome 開発チームの記事（Chrome 98）によると、COLRv1 は COLRv0
        の発展形で、グラデーション、合成・ブレンド、内部での形の再利用を加え、
        <strong>小さく、よく圧縮できるカラーベクターフォント</strong>
        を広めることが狙いです。同記事は、当時ほとんどの利用者が目にするカラーフォントは絵文字だけで、ビットマップ型は大きなサイズが
        Web フォント利用の障壁だったと述べています。
      </p>
      <p>
        また、OpenType 1.9 の変更履歴には「COLR に version 1
        のヘッダと関連構造を追加」と記録されており、1.9.1 では COLR
        のグラデーションの停止点の順序や放射状グラデーションの挙動などについて説明が追加されています。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>COLR / CPAL</dt>
            <dd>色つきグリフの層の定義／色パレットの定義</dd>
          </div>
          <div className="g">
            <dt>グラデーション</dt>
            <dd>色が滑らかに変わる塗り方</dd>
          </div>
          <div className="g">
            <dt>ベクター</dt>
            <dd>拡大しても荒れない、図形で表した絵</dd>
          </div>
          <div className="g">
            <dt>Web フォント</dt>
            <dd>Web サーバーから読み込んで表示するフォント</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
