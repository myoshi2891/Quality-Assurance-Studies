import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_10 } from './diagrams';

export default function Section12() {
  return (
    <section className="chapter" id="ch12">
      <h2 id="ch12-h">12. 実装の現状：誰がこの規格を動かしているのか</h2>
      <div className="callout-practice">
        <div className="ic">💡</div>
        <div>
          <div className="ttl">この章のねらい</div>
          <p>
            この章では、規格を実際のソフトウェアが使っている様子を、著名な開発者・開発組織の公開情報で確認します。
          </p>
        </div>
      </div>
      <p className="why-note">
        <strong>なぜ実装を見るのか：</strong>
        規格は「紙の上の約束」であり、実際の動作は実装で決まるためです。バグや脆弱性の調査にも役立ちます。
      </p>
      <h3 id="12-1-harfbuzzシェーピングエンジン">
        12-1. HarfBuzz（シェーピングエンジン）
      </h3>
      <ul>
        <li>
          開発者：Behdad Esfahbod（創設者・主要開発者）、Khaled Hosny。HarfBuzz
          の名前はペルシア語の「open type」の音訳です
        </li>
        <li>
          役割：Unicode
          の文字列、フォントファイル、文字体系と言語の情報を入力に、グリフの選択と配置を行う
        </li>
        <li>
          規模：公式リポジトリの README は「HarfBuzz
          は現代の画面上の文章の大部分を整形する」と説明し、2026年に「HarfBuzz at
          20!」のスライドを公開している
        </li>
        <li>
          多様なシェーパー：OpenType シェーパー、Universal Shaping
          Engine（USE）、実験的な WebAssembly シェーパーなど
        </li>
        <li>
          バージョン：2026年3月に 13.0.1 が公開され、その後 2026年6月〜8月には
          14.2.1 や 14.3.1 が、SkiaSharp や LWJGL
          といった下流プロジェクトに取り込まれている
        </li>
      </ul>
      <h3 id="12-2-fontations-と-skrifarust-製のフォント基盤">
        12-2. Fontations と Skrifa（Rust 製のフォント基盤）
      </h3>
      <p>
        Google Fonts が開発している Fontations は、OpenType フォントを読み書きする
        Rust 製のクレート（＝ライブラリ）の集合です。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>クレート／ツール</th>
              <th>役割</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>font-types</td>
              <td>OpenType 仕様の基本的な型の定義</td>
            </tr>
            <tr className="even">
              <td>read-fonts</td>
              <td>フォントファイルを読む（解析する）</td>
            </tr>
            <tr className="odd">
              <td>write-fonts</td>
              <td>フォントファイルを作る・編集する</td>
            </tr>
            <tr className="even">
              <td>skrifa</td>
              <td>
                輪郭やメタデータにアクセスする、より高レベルのライブラリ
              </td>
            </tr>
            <tr className="odd">
              <td>fontc</td>
              <td>Rust 製のフォントコンパイラ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="12-3-chrome-が-freetype-から-fontations-へ移行した経緯">
        12-3. Chrome が FreeType から Fontations へ移行した経緯
      </h3>
      <p>
        Chrome のセキュリティ向上策として、歴史ある C 言語製の FreeType
        から、メモリ安全な Rust 製の Fontations への移行が進められました。
      </p>
      <p>この図は、Chrome での導入スケジュールです。</p>
      <div className="mermaid-diagram">
        <Mermaid chart={DIAGRAM_10} />
      </div>
      <p>各ノードの意味：</p>
      <ul>
        <li>
          「Chrome 128」：COLRv1 や CFF2
          などの一部機能で、Fontations を実験的に使い始める
        </li>
        <li>
          「Chrome 133」：Linux、Android、ChromeOS で、ダウンロードされた Web
          フォントの処理を Fontations に切り替える
        </li>
        <li>
          「Chrome 136」：システムにインストールされたフォントも Fontations
          で処理するようになる
        </li>
        <li>
          「Chrome 145」：Chrome の描画基盤（Blink）から FreeType
          が完全に削除される見込み
        </li>
      </ul>
      <p>
        移行の主な動機は「メモリ安全性」です。フォントファイルは外部からWebサイト経由で読み込まれるため、パーサーの脆弱性を突いた攻撃の標的になりやすい歴史がありました。
      </p>
      <h3 id="12-4-実装の地図">12-4. 実装の地図</h3>
      <p>
        現代のブラウザや OS で、フォントがどのように処理されているかのまとめです。
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr className="header">
              <th>レイヤー</th>
              <th>主なライブラリ</th>
              <th>言語</th>
              <th>主な採用先</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>ファイル解析</td>
              <td>read-fonts（Fontations） / FreeType</td>
              <td>Rust / C</td>
              <td>Chrome、Android、Linux</td>
            </tr>
            <tr className="even">
              <td>シェーピング</td>
              <td>HarfBuzz</td>
              <td>C++</td>
              <td>Chrome、Firefox、Android、macOS、各種GUI</td>
            </tr>
            <tr className="odd">
              <td>ラスタライズ</td>
              <td>skrifa / FreeType</td>
              <td>Rust / C</td>
              <td>Chrome、各種オープンソース環境</td>
            </tr>
            <tr className="even">
              <td>2Dグラフィックス</td>
              <td>Skia</td>
              <td>C++</td>
              <td>Chrome、Android、Flutter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="glossary">
        <div className="gt">📖 このセクションで登場した用語</div>
        <dl>
          <div className="g">
            <dt>HarfBuzz</dt>
            <dd>世界中のテキスト整形を一手に担う標準シェーピングエンジン</dd>
          </div>
          <div className="g">
            <dt>Fontations</dt>
            <dd>Google Fonts が開発する、Rust 製の安全なフォント基盤</dd>
          </div>
          <div className="g">
            <dt>FreeType</dt>
            <dd>数十年にわたり広く使われてきた C 言語製のフォント描画エンジン</dd>
          </div>
          <div className="g">
            <dt>メモリ安全性</dt>
            <dd>バッファオーバーフローなどの脆弱性が起きないプログラミング言語の性質</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
