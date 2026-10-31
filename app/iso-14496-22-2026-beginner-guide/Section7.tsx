import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_06 } from './diagrams';

export default function Section7() {
  return (
    <section className="chapter" id="ch7">
      <h2 id="ch7-h">7. 文字が画面に出るまで：表示パイプライン</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、「ユーザーが打った文字が、画面のピクセルになるまで」の流れを追います。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ流れを覚えるのか：</strong>
        各テーブルの存在理由は、このパイプラインの「どの段階で使われるか」を知ると自然に理解できるためです。
      </p>
      <h3 id="7-1-全体の流れ">7-1. 全体の流れ</h3>
      <p>この図は、文字が表示されるまでの処理を左から右へ並べたものです。</p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_06} />
      </div>
      <h3 id="7-2-各ステップで何が起きているか">
        7-2. 各ステップで何が起きているか
      </h3>
      <ul>
        <li>
          「Unicode 文字列」：アプリが受け取ったテキスト（例：「fi」の2文字）
        </li>
        <li>
          「cmap」：文字コード（Unicode）を、そのフォント内の
          <strong>グリフ番号（Glyph ID）</strong>に変換する
        </li>
        <li>
          「GSUB」：前後の文脈や言語指定に応じて、別のグリフ番号に差し替える（例：「f」と「i」の2個を合字「ﬁ」の1個に変える）
        </li>
        <li>
          「hmtx / vmtx」：フォントがあらかじめ持っている「基準の送り幅（文字を進める量）」を読む
        </li>
        <li>
          「GPOS」：文字の並びに応じて、位置や送り幅を微調整する。特定の文字の組み合わせ（「AV」など）で間隔を詰めたり（カーニング）、濁点やアクセント記号を文字の上に置いたりする
        </li>
        <li>
          「アウトライン抽出」：グリフ番号に対応する輪郭データを
          <code>glyf</code> や <code>CFF</code> / <code>CFF2</code> から取り出す
        </li>
        <li>
          「ラスタライズ」：輪郭の曲線を、画面の解像度に合わせてピクセルの濃淡に塗り分ける
        </li>
      </ul>
      <p>
        HarfBuzz の公式ユーザーマニュアルも、同じ考え方を説明しています。OpenType
        フォントはグリフ番号で並んだグリフの集合であり、グリフ番号は文字コードと直接の関係を持たないため、フォント内の
        <code>cmap</code>
        テーブルで対応づける必要があります。さらに、シェーピングは文字コード列を、フォントの能力に合わせたグリフ列に変えます。
      </p>
      <h3 id="7-3-規格が定めることとアプリが決めること">
        7-3. 「規格が定めること」と「アプリが決めること」
      </h3>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>項目</th>
              <th>規格が定める</th>
              <th>アプリ／エンジンが決める</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>テーブルのバイト配置</td>
              <td>✅</td>
              <td></td>
            </tr>
            <tr className="even">
              <td>GSUB/GPOS の記述方法</td>
              <td>✅</td>
              <td></td>
            </tr>
            <tr className="odd">
              <td>文字体系ごとの細かい処理順序（アラビア文字など）</td>
              <td>一部のみ</td>
              <td>✅（シェーピングエンジンの領域）</td>
            </tr>
            <tr className="even">
              <td>画面のどの画素を塗るか</td>
              <td></td>
              <td>✅（ラスタライザの領域）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="why-note">
        <strong>なぜ分かれているのか：</strong>
        規格の要約にある通り、規格は「描画エンジンとレイアウト／シェーピングエンジンを作るための詳細」を提供する立場で、エンジン自体を定めるものではないためです。
      </p>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>Glyph ID</dt>
            <dd>フォント内でグリフにふられた通し番号</dd>
          </div>
          <div className="g">
            <dt>合字（リガチャ）</dt>
            <dd>複数の文字を1つの形にまとめたもの（fi、ffi など）</dd>
          </div>
          <div className="g">
            <dt>カーニング</dt>
            <dd>特定の文字の組み合わせで間隔を詰める調整</dd>
          </div>
          <div className="g">
            <dt>ラスタライズ</dt>
            <dd>輪郭を画素（ピクセル）の濃淡に変換する処理</dd>
          </div>
          <div className="g">
            <dt>シェーピングエンジン</dt>
            <dd>
              文字列をグリフ列と位置に変換するソフトウェア（HarfBuzz など）
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
