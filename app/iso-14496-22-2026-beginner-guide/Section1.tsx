import React from 'react';

export default function Section1() {
  return (
    <section className="chapter" id="ch1">
      <h2 id="ch1-h">1. この規格を一言でいうと</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、規格の目的を1文で押さえます。以降の章は、すべてこの1文の「中身の説明」になります。
          </p>
        </div>
      </div>
      <p>
        <strong>
          ISO/IEC 14496-22
          は「パソコンやスマホが文字を表示するために読み込む、フォントファイルの中身の約束事」を定めた国際規格です。
        </strong>
      </p>
      <p>
        ISO の公式ページにある要約（abstract）を、意味を保ったまま日本語にすると次のとおりです。
      </p>
      <ul>
        <li>
          TrueType 形式と CFF 形式という2種類の輪郭（アウトライン）の形式を含む
          Open Font Format（OFF）を定める
        </li>
        <li>
          文書中には TrueType と PostScript への言及が多い。OFF
          のフォントは両方の技術を組み合わせたものだから
        </li>
        <li>
          各種フォントテーブルのデータ構造を定め、
          <strong>
            フォントの描画エンジンと、文字の並べ方を決める「レイアウト／シェーピング」エンジンを、この規格に準拠して作るための詳細を示す
          </strong>
        </li>
      </ul>
      <h3 id="例え話フォントファイルは楽譜と演奏ルールの入った巻物">
        例え話：フォントファイルは「楽譜と演奏ルールの入った巻物」
      </h3>
      <p>
        フォントは単なる「文字の絵のコレクション」ではありません。次の対応で考えると理解しやすくなります。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>フォントの要素</th>
              <th>例え</th>
              <th>役割</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>グリフ（＝文字の形そのもの）</td>
              <td>楽譜の音符</td>
              <td>画面に描く形</td>
            </tr>
            <tr className="even">
              <td>cmap テーブル</td>
              <td>索引（文字コード → 音符の番号）</td>
              <td>「あ」という文字がどの形か探す</td>
            </tr>
            <tr className="odd">
              <td>GSUB/GPOS テーブル</td>
              <td>演奏記号（スラー・強弱）</td>
              <td>続けて書くとき形を替える・位置を調整する</td>
            </tr>
            <tr className="even">
              <td>規格そのもの</td>
              <td>楽譜の書き方の国際ルール</td>
              <td>どのアプリでも同じように読める</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        規格があるおかげで、Windows で作ったフォントを macOS や Android
        のブラウザで読むことができます。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>フォント</dt>
            <dd>文字の形と、その並べ方の情報をまとめたデータ</dd>
          </div>
          <div className="g">
            <dt>グリフ</dt>
            <dd>1つ1つの文字の形（「あ」「A」など）</dd>
          </div>
          <div className="g">
            <dt>シェーピング</dt>
            <dd>
              文字コードの並びを、実際に描くグリフの並びと位置に変換する処理
            </dd>
          </div>
          <div className="g">
            <dt>アウトライン</dt>
            <dd>文字の輪郭を曲線で表したもの。拡大しても滑らか</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
